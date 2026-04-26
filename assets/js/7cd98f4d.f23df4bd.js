"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["689371"], {
502682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audiostreambuilder_h_capi_native_audiostreambuilder_h_md_7cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-headerfile-capi-native-audiostreambuilder-h-capi-native-audiostreambuilder-h-md-7cd.json
var site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audiostreambuilder_h_capi_native_audiostreambuilder_h_md_7cd_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h","title":"native_audiostreambuilder.h","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h.md","sourceDirName":"audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h","slug":"/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"native_audiostreambuilder.h","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audiostreambuilder-h"},"sidebar":"ref","previous":{"title":"native_audiostream_base.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h"},"next":{"title":"native_audio_suite_base.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h.md


const frontMatter = {
	title: 'native_audiostreambuilder.h',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audiostreambuilder-h'
};
const contentTitle = 'native_audiostreambuilder.h';

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
  "value": "OH_AudioStreamBuilder_Create()",
  "id": "oh_audiostreambuilder_create",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_Destroy()",
  "id": "oh_audiostreambuilder_destroy",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetSamplingRate()",
  "id": "oh_audiostreambuilder_setsamplingrate",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetChannelCount()",
  "id": "oh_audiostreambuilder_setchannelcount",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetSampleFormat()",
  "id": "oh_audiostreambuilder_setsampleformat",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetEncodingType()",
  "id": "oh_audiostreambuilder_setencodingtype",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetLatencyMode()",
  "id": "oh_audiostreambuilder_setlatencymode",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetChannelLayout()",
  "id": "oh_audiostreambuilder_setchannellayout",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererInfo()",
  "id": "oh_audiostreambuilder_setrendererinfo",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetVolumeMode()",
  "id": "oh_audiostreambuilder_setvolumemode",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerInfo()",
  "id": "oh_audiostreambuilder_setcapturerinfo",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererCallback()",
  "id": "oh_audiostreambuilder_setrenderercallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback()",
  "id": "oh_audiostreambuilder_setrendereroutputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererPrivacy()",
  "id": "oh_audiostreambuilder_setrendererprivacy",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerCallback()",
  "id": "oh_audiostreambuilder_setcapturercallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback()",
  "id": "oh_audiostreambuilder_setwritedatawithmetadatacallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_GenerateRenderer()",
  "id": "oh_audiostreambuilder_generaterenderer",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_GenerateCapturer()",
  "id": "oh_audiostreambuilder_generatecapturer",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetFrameSizeInCallback()",
  "id": "oh_audiostreambuilder_setframesizeincallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererInterruptMode()",
  "id": "oh_audiostreambuilder_setrendererinterruptmode",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererWriteDataCallback()",
  "id": "oh_audiostreambuilder_setrendererwritedatacallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced()",
  "id": "oh_audiostreambuilder_setrendererwritedatacallbackadvanced",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererInterruptCallback()",
  "id": "oh_audiostreambuilder_setrendererinterruptcallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererErrorCallback()",
  "id": "oh_audiostreambuilder_setrenderererrorcallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerReadDataCallback()",
  "id": "oh_audiostreambuilder_setcapturerreaddatacallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback()",
  "id": "oh_audiostreambuilder_setcapturerdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerInterruptCallback()",
  "id": "oh_audiostreambuilder_setcapturerinterruptcallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerErrorCallback()",
  "id": "oh_audiostreambuilder_setcapturererrorcallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted()",
  "id": "oh_audiostreambuilder_setcapturerwillmutewheninterrupted",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetRendererFastStatusChangeCallback()",
  "id": "oh_audiostreambuilder_setrendererfaststatuschangecallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetCapturerFastStatusChangeCallback()",
  "id": "oh_audiostreambuilder_setcapturerfaststatuschangecallback",
  "level": 3
}, {
  "value": "OH_AudioStreamBuilder_SetPlaybackCaptureMode()",
  "id": "oh_audiostreambuilder_setplaybackcapturemode",
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
        id: "native_audiostreambuilderh",
        children: "native_audiostreambuilder.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明音频流构造器相关接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含构造和销毁构造器，设置音频流属性，回调等相关接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohaudio/native_audiostreambuilder.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohaudio.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Audio.Core"]
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
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
        children: "OHAudio"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_Create(OH_AudioStreamBuilder** builder, OH_AudioStream_Type type)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个输入或者输出类型的音频流构造器。  当构造器不再使用时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_destroy",
              children: "OH_AudioStreamBuilder_Destroy"
            }), "销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_destroy",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_Destroy(OH_AudioStreamBuilder* builder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个音频流构造器。  当构造器不再使用时，需要调用该函数销毁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setsamplingrate",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetSamplingRate(OH_AudioStreamBuilder* builder, int32_t rate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频流的采样率属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setchannelcount",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelCount(OH_AudioStreamBuilder* builder, int32_t channelCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频流的通道数属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setsampleformat",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetSampleFormat(OH_AudioStreamBuilder* builder, OH_AudioStream_SampleFormat format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频流的采样格式属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setencodingtype",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetEncodingType(OH_AudioStreamBuilder* builder, OH_AudioStream_EncodingType encodingType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频流的编码类型属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setlatencymode",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetLatencyMode(OH_AudioStreamBuilder* builder, OH_AudioStream_LatencyMode latencyMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频流的时延模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setchannellayout",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelLayout(OH_AudioStreamBuilder* builder, OH_AudioChannelLayout channelLayout)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频流的声道布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererinfo",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInfo(OH_AudioStreamBuilder* builder, OH_AudioStream_Usage usage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输出音频流的工作场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setvolumemode",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetVolumeMode(OH_AudioStreamBuilder* builder, OH_AudioStream_VolumeMode volumeMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频流音量模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturerinfo",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInfo(OH_AudioStreamBuilder* builder, OH_AudioStream_SourceType sourceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输入音频流的工作场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderercallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_Callbacks callbacks, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输出音频流的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendereroutputdevicechangecallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OutputDeviceChangeCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输出音频流设备变更的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererprivacy",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererPrivacy(OH_AudioStreamBuilder* builder, OH_AudioStream_PrivacyType privacy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前播放音频流是否会被其它应用录制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_Callbacks callbacks, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输入音频流的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setwritedatawithmetadatacallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_WriteDataWithMetadataCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置同时写入音频数据和元数据的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_generaterenderer",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_GenerateRenderer(OH_AudioStreamBuilder* builder, OH_AudioRenderer** audioRenderer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建输出音频流实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_generatecapturer",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_GenerateCapturer(OH_AudioStreamBuilder* builder, OH_AudioCapturer** audioCapturer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建输入音频流实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setframesizeincallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetFrameSizeInCallback(OH_AudioStreamBuilder* builder, int32_t frameSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于播放时设置每次回调的帧长，帧长至少为音频硬件一次处理的数据大小，并且小于内部缓冲容量的一半。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererinterruptmode",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptMode(OH_AudioStreamBuilder* builder, OH_AudioInterrupt_Mode mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置流客户端的中断模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererwritedatacallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnWriteDataCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置写入音频数据的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderercallback",
              children: "OH_AudioStreamBuilder_SetRendererCallback"
            }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderercallback",
              children: "OH_AudioStreamBuilder_SetRendererCallback"
            }), "或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererwritedatacallbackadvanced",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnWriteDataCallbackAdvanced callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置写入音频数据的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererwritedatacallback",
              children: "OH_AudioStreamBuilder_SetRendererWriteDataCallback"
            }), "类似。  如果同时设置该回调和OH_AudioStreamBuilder_SetRendererWriteDataCallback，只有最后一次设置的回调生效。  与OH_AudioStreamBuilder_SetRendererWriteDataCallback不同，OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced设置的回调函数，允许应用传入可变长度的音频数据，并通知系统写入的数据长度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererinterruptcallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnInterruptCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置输出音频流中断事件的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderercallback",
              children: "OH_AudioStreamBuilder_SetRendererCallback"
            }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderercallback",
              children: "OH_AudioStreamBuilder_SetRendererCallback"
            }), "或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderererrorcallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererErrorCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnErrorCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置输出音频流错误事件的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderercallback",
              children: "OH_AudioStreamBuilder_SetRendererCallback"
            }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrenderercallback",
              children: "OH_AudioStreamBuilder_SetRendererCallback"
            }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturerreaddatacallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerReadDataCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnReadDataCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置输入音频流读取数据的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturerdevicechangecallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnDeviceChangeCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置输入音频流设备变更的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturerinterruptcallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInterruptCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnInterruptCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置输入音频流中断事件的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturererrorcallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerErrorCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnErrorCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置输入音频流错误事件的回调函数。  此函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturercallback",
              children: "OH_AudioStreamBuilder_SetCapturerCallback"
            }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturerwillmutewheninterrupted",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted(OH_AudioStreamBuilder* builder, bool muteWhenInterrupted)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输入音频流是否启用静音打断模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setrendererfaststatuschangecallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererFastStatusChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnFastStatusChange callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频播放过程中低时延状态改变事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setcapturerfaststatuschangecallback",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerFastStatusChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnFastStatusChange callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频录制过程中低时延状态改变事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_setplaybackcapturemode",
              children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetPlaybackCaptureMode(OH_AudioStreamBuilder* builder, uint32_t mode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在使用内录（录制设备内部应用的声音）时设置可以录制的音频模式，该模式将决定要录制的音频流类型。此功能仅适用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_type",
              children: "AudioStream_Type_Capturer"
            }), "类型。该API暂不对外支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_create",
      children: "OH_AudioStreamBuilder_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_Create(OH_AudioStreamBuilder** builder, OH_AudioStream_Type type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个输入或者输出类型的音频流构造器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当构造器不再使用时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_destroy",
        children: "OH_AudioStreamBuilder_Destroy"
      }), "销毁。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "** builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该引用指向创建的构造器的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_type",
              children: "OH_AudioStream_Type"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构造器的流类型。AUDIOSTREAM_TYPE_RENDERER或AUDIOSTREAM_TYPE_CAPTURER。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_destroy",
      children: "OH_AudioStreamBuilder_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_Destroy(OH_AudioStreamBuilder* builder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个音频流构造器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当构造器不再使用时，需要调用该函数销毁。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。  AUDIOSTREAM_ERROR_ILLEGAL_STATE：执行状态异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setsamplingrate",
      children: "OH_AudioStreamBuilder_SetSamplingRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetSamplingRate(OH_AudioStreamBuilder* builder, int32_t rate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频流的采样率属性。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流采样率。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. 参数rate无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setchannelcount",
      children: "OH_AudioStreamBuilder_SetChannelCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelCount(OH_AudioStreamBuilder* builder, int32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频流的通道数属性。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流通道数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. 参数channelCount无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setsampleformat",
      children: "OH_AudioStreamBuilder_SetSampleFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetSampleFormat(OH_AudioStreamBuilder* builder,OH_AudioStream_SampleFormat format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频流的采样格式属性。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sampleformat",
              children: "OH_AudioStream_SampleFormat"
            }), " format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流采样格式。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setencodingtype",
      children: "OH_AudioStreamBuilder_SetEncodingType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetEncodingType(OH_AudioStreamBuilder* builder,OH_AudioStream_EncodingType encodingType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频流的编码类型属性。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_encodingtype",
              children: "OH_AudioStream_EncodingType"
            }), " encodingType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流编码类型。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setlatencymode",
      children: "OH_AudioStreamBuilder_SetLatencyMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetLatencyMode(OH_AudioStreamBuilder* builder,OH_AudioStream_LatencyMode latencyMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频流的时延模式。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_latencymode",
              children: "OH_AudioStream_LatencyMode"
            }), " latencyMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流时延模式。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setchannellayout",
      children: "OH_AudioStreamBuilder_SetChannelLayout()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelLayout(OH_AudioStreamBuilder* builder,OH_AudioChannelLayout channelLayout)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频流的声道布局。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h#oh_audiochannellayout",
              children: "OH_AudioChannelLayout"
            }), " channelLayout"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流声道布局。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendererinfo",
      children: "OH_AudioStreamBuilder_SetRendererInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInfo(OH_AudioStreamBuilder* builder,OH_AudioStream_Usage usage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输出音频流的工作场景。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
              children: "OH_AudioStream_Usage"
            }), " usage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流属性，使用的工作场景。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. 参数usage无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setvolumemode",
      children: "OH_AudioStreamBuilder_SetVolumeMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetVolumeMode(OH_AudioStreamBuilder* builder,OH_AudioStream_VolumeMode volumeMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频流音量模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_volumemode",
              children: "OH_AudioStream_VolumeMode"
            }), " volumeMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的音频流音量模式。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. 参数volumeMode无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturerinfo",
      children: "OH_AudioStreamBuilder_SetCapturerInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInfo(OH_AudioStreamBuilder* builder,OH_AudioStream_SourceType sourceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入音频流的工作场景。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
              children: "OH_AudioStream_SourceType"
            }), " sourceType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入音频流属性，使用的工作场景。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. 参数sourceType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrenderercallback",
      children: "OH_AudioStreamBuilder_SetRendererCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_Callbacks callbacks, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输出音频流的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请分别使用以下接口设置回调函数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrendererwritedatacallback",
        children: "OH_AudioStreamBuilder_SetRendererWriteDataCallback"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrendererinterruptcallback",
        children: "OH_AudioStreamBuilder_SetRendererInterruptCallback"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrendereroutputdevicechangecallback",
        children: "OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback"
      }), "以及 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrenderererrorcallback",
        children: "OH_AudioStreamBuilder_SetRendererErrorCallback"
      }), "。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct",
              children: "OH_AudioRenderer_Callbacks"
            }), " callbacks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被用来处理输出音频流相关事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendereroutputdevicechangecallback",
      children: "OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OutputDeviceChangeCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输出音频流设备变更的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiorenderer_outputdevicechangecallback",
              children: "OH_AudioRenderer_OutputDeviceChangeCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被用来处理输出流设备变更相关事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendererprivacy",
      children: "OH_AudioStreamBuilder_SetRendererPrivacy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererPrivacy(OH_AudioStreamBuilder* builder,OH_AudioStream_PrivacyType privacy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前播放音频流是否会被其它应用录制。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_privacytype",
              children: "OH_AudioStream_PrivacyType"
            }), " privacy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对应播放音频流是否会被其它应用录制。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturercallback",
      children: "OH_AudioStreamBuilder_SetCapturerCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_Callbacks callbacks, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入音频流的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请分别使用以下接口设置回调函数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturerreaddatacallback",
        children: "OH_AudioStreamBuilder_SetCapturerReadDataCallback"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturerdevicechangecallback",
        children: "OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturerinterruptcallback",
        children: "OH_AudioStreamBuilder_SetCapturerInterruptCallback"
      }), "以及 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturererrorcallback",
        children: "OH_AudioStreamBuilder_SetCapturerErrorCallback"
      }), "。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct",
              children: "OH_AudioCapturer_Callbacks"
            }), " callbacks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被用来处理输入音频流相关事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setwritedatawithmetadatacallback",
      children: "OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_WriteDataWithMetadataCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置同时写入音频数据和元数据的回调。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiorenderer_writedatawithmetadatacallback",
              children: "OH_AudioRenderer_WriteDataWithMetadataCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被用来同时写入音频数据和元数据的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_generaterenderer",
      children: "OH_AudioStreamBuilder_GenerateRenderer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_GenerateRenderer(OH_AudioStreamBuilder* builder,OH_AudioRenderer** audioRenderer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建输出音频流实例。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct",
              children: "OH_AudioRenderer"
            }), "** audioRenderer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出音频流实例的指针，将被用来接收函数创建的结果。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效；  3. 创建OHAudioRenderer失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_generatecapturer",
      children: "OH_AudioStreamBuilder_GenerateCapturer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_GenerateCapturer(OH_AudioStreamBuilder* builder,OH_AudioCapturer** audioCapturer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建输入音频流实例。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturerstruct/capi-ohaudio-oh-audiocapturerstruct",
              children: "OH_AudioCapturer"
            }), "** audioCapturer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入音频流实例的指针，将被用来接收函数创建的结果。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效；  3. 创建OHAudioCapturer失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setframesizeincallback",
      children: "OH_AudioStreamBuilder_SetFrameSizeInCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetFrameSizeInCallback(OH_AudioStreamBuilder* builder,int32_t frameSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于播放时设置每次回调的帧长，帧长至少为音频硬件一次处理的数据大小，并且小于内部缓冲容量的一半。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低时延播放：frameSize可设置为5ms、10ms、15ms、20ms音频数据对应的帧长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "普通通路播放：frameSize可设置为20ms-100ms音频数据对应的帧长。例如，当采样率48000Hz时，20ms音频数据对应的帧长计算方式为：frameSize = 48000 * 0.02，即960个采样点数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t frameSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置音频数据的帧长。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendererinterruptmode",
      children: "OH_AudioStreamBuilder_SetRendererInterruptMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptMode(OH_AudioStreamBuilder* builder,OH_AudioInterrupt_Mode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置流客户端的中断模式。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_mode",
              children: "OH_AudioInterrupt_Mode"
            }), " mode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频中断模式。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. 参数mode无效；  3. StreamType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendererwritedatacallback",
      children: "OH_AudioStreamBuilder_SetRendererWriteDataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnWriteDataCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置写入音频数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrenderercallback",
        children: "OH_AudioStreamBuilder_SetRendererCallback"
      }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrenderercallback",
        children: "OH_AudioStreamBuilder_SetRendererCallback"
      }), "或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiorenderer_onwritedatacallback",
              children: "OH_AudioRenderer_OnWriteDataCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被用来写入音频数据的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：  1. 参数builder为nullptr；  2. StreamType无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendererwritedatacallbackadvanced",
      children: "OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnWriteDataCallbackAdvanced callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置写入音频数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrendererwritedatacallback",
        children: "OH_AudioStreamBuilder_SetRendererWriteDataCallback"
      }), "类似。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果同时设置该回调和OH_AudioStreamBuilder_SetRendererWriteDataCallback，只有最后一次设置的回调生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与OH_AudioStreamBuilder_SetRendererWriteDataCallback不同，OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced设置的回调函数，允许应用传入可变长度的音频数据，并通知系统写入的数据长度。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_onwritedatacallbackadvanced",
              children: "OH_AudioRenderer_OnWriteDataCallbackAdvanced"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被用来写入音频数据的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数非法，比如builder为空指针，等等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendererinterruptcallback",
      children: "OH_AudioStreamBuilder_SetRendererInterruptCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnInterruptCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输出音频流中断事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrenderercallback",
        children: "OH_AudioStreamBuilder_SetRendererCallback"
      }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrenderercallback",
        children: "OH_AudioStreamBuilder_SetRendererCallback"
      }), "或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_oninterruptcallback",
              children: "OH_AudioRenderer_OnInterruptCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收中断事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrenderererrorcallback",
      children: "OH_AudioStreamBuilder_SetRendererErrorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererErrorCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnErrorCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输出音频流错误事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrenderercallback",
        children: "OH_AudioStreamBuilder_SetRendererCallback"
      }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setrenderercallback",
        children: "OH_AudioStreamBuilder_SetRendererCallback"
      }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_onerrorcallback",
              children: "OH_AudioRenderer_OnErrorCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收错误事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturerreaddatacallback",
      children: "OH_AudioStreamBuilder_SetCapturerReadDataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerReadDataCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnReadDataCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入音频流读取数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onreaddatacallback",
              children: "OH_AudioCapturer_OnReadDataCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收读取数据事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturerdevicechangecallback",
      children: "OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnDeviceChangeCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入音频流设备变更的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_ondevicechangecallback",
              children: "OH_AudioCapturer_OnDeviceChangeCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收设备变更事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturerinterruptcallback",
      children: "OH_AudioStreamBuilder_SetCapturerInterruptCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInterruptCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnInterruptCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入音频流中断事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_oninterruptcallback",
              children: "OH_AudioCapturer_OnInterruptCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收中断事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturererrorcallback",
      children: "OH_AudioStreamBuilder_SetCapturerErrorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerErrorCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnErrorCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入音频流错误事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "类似。如果同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_audiostreambuilder_setcapturercallback",
        children: "OH_AudioStreamBuilder_SetCapturerCallback"
      }), "或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onerrorcallback",
              children: "OH_AudioCapturer_OnErrorCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收错误事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturerwillmutewheninterrupted",
      children: "OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted(OH_AudioStreamBuilder* builder,bool muteWhenInterrupted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入音频流是否启用静音打断模式。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool muteWhenInterrupted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前录制音频流是否启用静音打断模式。true表示启用；false表示不启用，保持为默认打断模式。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setrendererfaststatuschangecallback",
      children: "OH_AudioStreamBuilder_SetRendererFastStatusChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererFastStatusChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnFastStatusChange callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频播放过程中低时延状态改变事件的回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_onfaststatuschange",
              children: "OH_AudioRenderer_OnFastStatusChange"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收播放低时延状态改变事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setcapturerfaststatuschangecallback",
      children: "OH_AudioStreamBuilder_SetCapturerFastStatusChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerFastStatusChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnFastStatusChange callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频录制过程中低时延状态改变事件的回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onfaststatuschange",
              children: "OH_AudioCapturer_OnFastStatusChange"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收录制低时延状态改变事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用程序数据结构的指针，该结构将传递给回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostreambuilder_setplaybackcapturemode",
      children: "OH_AudioStreamBuilder_SetPlaybackCaptureMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_Result OH_AudioStreamBuilder_SetPlaybackCaptureMode(OH_AudioStreamBuilder* builder, uint32_t mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用内录（录制设备内部应用的声音）时设置可以录制的音频模式，该模式将决定要录制的音频流类型。此功能仅适用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_type",
        children: "AudioStream_Type_Capturer"
      }), "类型。该API暂不对外支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_create",
              children: "OH_AudioStreamBuilder_Create"
            }), "创建的构造器实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要设置的内录模式，可为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_playbackcapturemode",
              children: "OH_AudioStream_PlaybackCaptureMode"
            }), "中多个值的组合。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SUCCESS：函数执行成功。  AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效。例如，builder或mode为空指针。"
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