"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["690013"], {
596649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audiostream_base_h_capi_native_audiostream_base_h_md_717_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-headerfile-capi-native-audiostream-base-h-capi-native-audiostream-base-h-md-717.json
var site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audiostream_base_h_capi_native_audiostream_base_h_md_717_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h","title":"native_audiostream_base.h","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h.md","sourceDirName":"audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h","slug":"/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"native_audiostream_base.h","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audiostream-base-h"},"sidebar":"ref","previous":{"title":"native_audio_resource_manager.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-resource-manager-h/capi-native-audio-resource-manager-h"},"next":{"title":"native_audiostreambuilder.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h.md


const frontMatter = {
	title: 'native_audiostream_base.h',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audiostream-base-h'
};
const contentTitle = 'native_audiostream_base.h';

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
  "value": "OH_AudioStream_Result",
  "id": "oh_audiostream_result",
  "level": 3
}, {
  "value": "OH_AudioStream_Type",
  "id": "oh_audiostream_type",
  "level": 3
}, {
  "value": "OH_AudioStream_SampleFormat",
  "id": "oh_audiostream_sampleformat",
  "level": 3
}, {
  "value": "OH_AudioStream_EncodingType",
  "id": "oh_audiostream_encodingtype",
  "level": 3
}, {
  "value": "OH_AudioStream_Usage",
  "id": "oh_audiostream_usage",
  "level": 3
}, {
  "value": "OH_AudioStream_LatencyMode",
  "id": "oh_audiostream_latencymode",
  "level": 3
}, {
  "value": "OH_AudioStream_DirectPlaybackMode",
  "id": "oh_audiostream_directplaybackmode",
  "level": 3
}, {
  "value": "OH_AudioStream_VolumeMode",
  "id": "oh_audiostream_volumemode",
  "level": 3
}, {
  "value": "OH_AudioStream_State",
  "id": "oh_audiostream_state",
  "level": 3
}, {
  "value": "OH_AudioStream_SourceType",
  "id": "oh_audiostream_sourcetype",
  "level": 3
}, {
  "value": "OH_AudioStream_Event",
  "id": "oh_audiostream_event",
  "level": 3
}, {
  "value": "OH_AudioInterrupt_ForceType",
  "id": "oh_audiointerrupt_forcetype",
  "level": 3
}, {
  "value": "OH_AudioInterrupt_Hint",
  "id": "oh_audiointerrupt_hint",
  "level": 3
}, {
  "value": "OH_AudioInterrupt_Mode",
  "id": "oh_audiointerrupt_mode",
  "level": 3
}, {
  "value": "OH_AudioStream_AudioEffectMode",
  "id": "oh_audiostream_audioeffectmode",
  "level": 3
}, {
  "value": "OH_AudioStream_FastStatus",
  "id": "oh_audiostream_faststatus",
  "level": 3
}, {
  "value": "OH_AudioStream_DeviceChangeReason",
  "id": "oh_audiostream_devicechangereason",
  "level": 3
}, {
  "value": "OH_AudioStream_PrivacyType",
  "id": "oh_audiostream_privacytype",
  "level": 3
}, {
  "value": "OH_AudioData_Callback_Result",
  "id": "oh_audiodata_callback_result",
  "level": 3
}, {
  "value": "OH_AudioStream_LatencyType",
  "id": "oh_audiostream_latencytype",
  "level": 3
}, {
  "value": "OH_AudioStream_PlaybackCaptureMode",
  "id": "oh_audiostream_playbackcapturemode",
  "level": 3
}, {
  "value": "OH_AudioStream_PlaybackCaptureStartState",
  "id": "oh_audiostream_playbackcapturestartstate",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AudioRenderer_OutputDeviceChangeCallback()",
  "id": "oh_audiorenderer_outputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioRenderer_OnMarkReachedCallback()",
  "id": "oh_audiorenderer_onmarkreachedcallback",
  "level": 3
}, {
  "value": "OH_AudioRenderer_WriteDataWithMetadataCallback()",
  "id": "oh_audiorenderer_writedatawithmetadatacallback",
  "level": 3
}, {
  "value": "OH_AudioRenderer_OnWriteDataCallback()",
  "id": "oh_audiorenderer_onwritedatacallback",
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
        id: "native_audiostream_baseh",
        children: "native_audiostream_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明OHAudio基础的数据结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohaudio/native_audiostream_base.h>"]
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
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreaminfo/capi-ohaudio-oh-audiostreaminfo",
              children: "OH_AudioStreamInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStreamInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流信息，用于描述基本音频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct",
              children: "OH_AudioRenderer_Callbacks_Struct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRenderer_Callbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明输出音频流的回调函数指针。(API20废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct",
              children: "OH_AudioCapturer_Callbacks_Struct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioCapturer_Callbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明输入音频流的回调函数指针。  为了避免不可预期的行为，在设置音频回调函数时，请确保该结构体的每一个成员变量都被自定义的回调方法或空指针初始化。(API20废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct",
              children: "OH_AudioStreamBuilderStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStreamBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频流的构造器。构造器实例通常被用来设置音频流属性和创建音频流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct",
              children: "OH_AudioRendererStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRenderer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明输出音频流。输出音频流的实例被用来播放音频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturerstruct/capi-ohaudio-oh-audiocapturerstruct",
              children: "OH_AudioCapturerStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioCapturer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明输入音频流。输入音频流的实例被用来获取音频数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_audiostream_result",
              children: "OH_AudioStream_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_type",
              children: "OH_AudioStream_Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_sampleformat",
              children: "OH_AudioStream_SampleFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_SampleFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流采样格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_encodingtype",
              children: "OH_AudioStream_EncodingType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_EncodingType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流编码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_usage",
              children: "OH_AudioStream_Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流使用场景。  通常用来描述音频输出流的使用场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_latencymode",
              children: "OH_AudioStream_LatencyMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_LatencyMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频时延模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_directplaybackmode",
              children: "OH_AudioStream_DirectPlaybackMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_DirectPlaybackMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流direct通路播放模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_volumemode",
              children: "OH_AudioStream_VolumeMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_VolumeMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流音量模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_state",
              children: "OH_AudioStream_State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_sourcetype",
              children: "OH_AudioStream_SourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_SourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流使用场景。  通常用来描述音频输入流的使用场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_event",
              children: "OH_AudioStream_Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频事件。(API20废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiointerrupt_forcetype",
              children: "OH_AudioInterrupt_ForceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioInterrupt_ForceType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义音频中断类型。  当用户监听到音频中断时，将获取此信息。  此类型表示本次音频打断的操作是否已由系统强制执行，具体操作信息（如音频暂停、停止等）可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_hint",
              children: "OH_AudioInterrupt_Hint"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiointerrupt_hint",
              children: "OH_AudioInterrupt_Hint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioInterrupt_Hint"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义音频中断提示类型。  当用户监听到音频中断时，将获取此信息。  此类型表示根据焦点策略，当前需要对音频流的具体操作（如暂停、调整音量等）。  可以结合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_forcetype",
              children: "OH_AudioInterrupt_ForceType"
            }), "信息，判断该操作是否已由系统强制执行。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiointerrupt_mode",
              children: "OH_AudioInterrupt_Mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioInterrupt_Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频中断模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_audioeffectmode",
              children: "OH_AudioStream_AudioEffectMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_AudioEffectMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音效模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_faststatus",
              children: "OH_AudioStream_FastStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_FastStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义低时延状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_devicechangereason",
              children: "OH_AudioStream_DeviceChangeReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_DeviceChangeReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流设备变更原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_privacytype",
              children: "OH_AudioStream_PrivacyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_PrivacyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识对应播放音频流是否支持被其他应用录制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiodata_callback_result",
              children: "OH_AudioData_Callback_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioData_Callback_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频数据回调结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_latencytype",
              children: "OH_AudioStream_LatencyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_LatencyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频时延类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_playbackcapturemode",
              children: "OH_AudioStream_PlaybackCaptureMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_PlaybackCaptureMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示内录（录制设备内部应用的声音）的过滤类型，每种过滤类型可录制不同的播放流类型。该API暂不对外支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_playbackcapturestartstate",
              children: "OH_AudioStream_PlaybackCaptureStartState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioStream_PlaybackCaptureStartState"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义内录的启动状态，该状态在调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_requestplaybackcapturestart",
              children: "OH_AudioCapturer_RequestPlaybackCaptureStart"
            }), "函数后异步返回。该API暂不对外支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_audiorenderer_outputdevicechangecallback",
              children: "typedef void (*OH_AudioRenderer_OutputDeviceChangeCallback)(OH_AudioRenderer* renderer, void* userData, OH_AudioStream_DeviceChangeReason reason)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRenderer_OutputDeviceChangeCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频流设备变更的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiorenderer_onmarkreachedcallback",
              children: "typedef void (*OH_AudioRenderer_OnMarkReachedCallback)(OH_AudioRenderer* renderer, uint32_t samplePos, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRenderer_OnMarkReachedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "到达标记位置时回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiorenderer_writedatawithmetadatacallback",
              children: "typedef int32_t (*OH_AudioRenderer_WriteDataWithMetadataCallback)(OH_AudioRenderer* renderer, void* userData, void* audioData, int32_t audioDataSize, void* metadata, int32_t metadataSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRenderer_WriteDataWithMetadataCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该函数指针将指向用于同时写入音频数据和元数据的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiorenderer_onwritedatacallback",
              children: "typedef OH_AudioData_Callback_Result (*OH_AudioRenderer_OnWriteDataCallback)(OH_AudioRenderer* renderer, void* userData, void* audioData, int32_t audioDataSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRenderer_OnWriteDataCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该函数指针将指向用于写入音频数据的回调函数。  回调函数仅用来写入音频数据，请勿在回调函数中调用AudioRenderer相关接口。  该函数的返回结果表示填充到缓冲区的数据是否有效。如果结果无效，用户填写的数据将不被播放。  回调函数结束后，音频服务会把audioData指针数据放入队列里等待播放，因此请勿在回调外再次更改audioData指向的数据，且务必保证往audioData填满audioDataSize长度的待播放数据, 否则会导致音频服务播放杂音。  参数audioDataSize可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setframesizeincallback",
              children: "OH_AudioStreamBuilder_SetFrameSizeInCallback"
            }), "设置。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_result",
      children: "OH_AudioStream_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频错误码。"
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
            children: "AUDIOSTREAM_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_ERROR_INVALID_PARAM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_ERROR_ILLEGAL_STATE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_ERROR_SYSTEM = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统通用错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_ERROR_UNSUPPORTED_FORMAT = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持的音频格式，如不支持的编码类型、采样格式等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_type",
      children: "OH_AudioStream_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频流类型。"
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
            children: "AUDIOSTREAM_TYPE_RENDERER = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该类型代表音频流是输出流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_TYPE_CAPTURER = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该类型代表音频流是输入流。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_sampleformat",
      children: "OH_AudioStream_SampleFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_SampleFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频流采样格式。"
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
            children: "AUDIOSTREAM_SAMPLE_U8 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned 8位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SAMPLE_S16LE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short 16位小端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SAMPLE_S24LE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short 24位小端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SAMPLE_S32LE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short 32位小端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SAMPLE_F32LE = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Float 32位小端。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 17"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_encodingtype",
      children: "OH_AudioStream_EncodingType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_EncodingType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频流编码类型。"
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
            children: "AUDIOSTREAM_ENCODING_TYPE_RAW = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCM编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_ENCODING_TYPE_AUDIOVIVID = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Audio Vivid编码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_ENCODING_TYPE_E_AC3 = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E_AC3编码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_usage",
      children: "OH_AudioStream_Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_Usage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频流使用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常用来描述音频输出流的使用场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AUDIOSTREAM_USAGE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_MUSIC = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音乐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_VOICE_COMMUNICATION = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VoIP语音通话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_VOICE_ASSISTANT = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音播报。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_ALARM = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "闹钟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_VOICE_MESSAGE = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_RINGTONE = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "铃声。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_NOTIFICATION = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_ACCESSIBILITY = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_MOVIE = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电影或视频。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_GAME = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_AUDIOBOOK = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有声读物（包括听书、相声、评书）、听新闻、播客等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_NAVIGATION = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_USAGE_VIDEO_COMMUNICATION = 17"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VoIP视频通话。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_latencymode",
      children: "OH_AudioStream_LatencyMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_LatencyMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频时延模式。"
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
            children: "AUDIOSTREAM_LATENCY_MODE_NORMAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该模式代表一个普通时延的音频流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_LATENCY_MODE_FAST = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该模式代表一个低时延的音频流。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_directplaybackmode",
      children: "OH_AudioStream_DirectPlaybackMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_DirectPlaybackMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频流direct通路播放模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
            children: "AUDIOSTREAM_DIRECT_PLAYBACK_NOT_SUPPORTED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该模式代表不支持direct通路播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_DIRECT_PLAYBACK_BITSTREAM_SUPPORTED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该模式代表支持不解码的direct通路播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_DIRECT_PLAYBACK_PCM_SUPPORTED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该模式代表支持pcm编码的direct通路播放。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_volumemode",
      children: "OH_AudioStream_VolumeMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_VolumeMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频流音量模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
            children: "AUDIOSTREAM_VOLUMEMODE_SYSTEM_GLOBAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统级音量（默认模式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_VOLUMEMODE_APP_INDIVIDUAL = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用级音量。  设置为该模式后可以通过提供的接口设置、查询应用音量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_state",
      children: "OH_AudioStream_State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_State\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频流的状态。"
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
            children: "AUDIOSTREAM_STATE_INVALID = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不合法的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_STATE_NEW = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新创建时的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_STATE_PREPARED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准备状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_STATE_RUNNING = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工作状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_STATE_STOPPED = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_STATE_RELEASED = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_STATE_PAUSED = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_sourcetype",
      children: "OH_AudioStream_SourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_SourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频流使用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常用来描述音频输入流的使用场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AUDIOSTREAM_SOURCE_TYPE_INVALID = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不合法状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_MIC = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_VOICE_RECOGNITION = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音识别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_PLAYBACK_CAPTURE = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放录音。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代接口："
              })
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "OH_AVScreenCapture"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_VOICE_COMMUNICATION = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_VOICE_MESSAGE = 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["语音消息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_CAMCORDER = 13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["录像。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_UNPROCESSED = 14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["麦克风纯净录音（系统不做任何算法处理）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 14"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_SOURCE_TYPE_LIVE = 17"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["直播。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_event",
      children: "OH_AudioStream_Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_Event\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频事件。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiorenderer_outputdevicechangecallback",
        children: "OH_AudioRenderer_OutputDeviceChangeCallback"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_EVENT_ROUTING_CHANGED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频的路由已更改。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiointerrupt_forcetype",
      children: "OH_AudioInterrupt_ForceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioInterrupt_ForceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频中断类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户监听到音频中断时，将获取此信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此类型表示本次音频打断的操作是否已由系统强制执行，具体操作信息（如音频暂停、停止等）可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_hint",
        children: "OH_AudioInterrupt_Hint"
      }), "获取。"]
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
            children: "AUDIOSTREAM_INTERRUPT_FORCE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制打断类型，即具体操作已由系统强制执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_SHARE = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["共享打断类型，即系统不执行具体操作，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_hint",
              children: "OH_AudioInterrupt_Hint"
            }), "提示并建议应用操作，应用可自行决策下一步处理方式。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiointerrupt_hint",
      children: "OH_AudioInterrupt_Hint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioInterrupt_Hint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频中断提示类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户监听到音频中断时，将获取此信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此类型表示根据焦点策略，当前需要对音频流的具体操作（如暂停、调整音量等）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_forcetype",
        children: "OH_AudioInterrupt_ForceType"
      }), "信息，判断该操作是否已由系统强制执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AUDIOSTREAM_INTERRUPT_HINT_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不提示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_HINT_RESUME = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示音频恢复，应用可主动触发开始渲染或开始采集的相关操作。  此操作无法由系统强制执行，其对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_forcetype",
              children: "OH_AudioInterrupt_ForceType"
            }), "一定为AUDIOSTREAM_INTERRUPT_SHARE类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_HINT_PAUSE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示音频暂停，暂时失去音频焦点。  后续待焦点可用时，会出现AUDIOSTREAM_INTERRUPT_HINT_RESUME事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_HINT_STOP = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示音频停止，彻底失去音频焦点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_HINT_DUCK = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示音频躲避开始，音频降低音量播放，而不会停止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_HINT_UNDUCK = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示音量躲避结束，音频恢复正常音量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_HINT_MUTE = 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示音频静音。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_HINT_UNMUTE = 7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示音频解除静音。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiointerrupt_mode",
      children: "OH_AudioInterrupt_Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioInterrupt_Mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频中断模式。"
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
            children: "AUDIOSTREAM_INTERRUPT_MODE_SHARE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_INTERRUPT_MODE_INDEPENDENT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "独立模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_audioeffectmode",
      children: "OH_AudioStream_AudioEffectMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_AudioEffectMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音效模式。"
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
            children: "EFFECT_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无音效模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_DEFAULT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认音效模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_faststatus",
      children: "OH_AudioStream_FastStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_FastStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义低时延状态。"
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
            children: "AUDIOSTREAM_FASTSTATUS_NORMAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通音频流状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_FASTSTATUS_FAST = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低时延音频流状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_devicechangereason",
      children: "OH_AudioStream_DeviceChangeReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_DeviceChangeReason\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流设备变更原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "REASON_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REASON_NEW_DEVICE_AVAILABLE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REASON_OLD_DEVICE_UNAVAILABLE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旧设备不可用。当报告此原因时，应用程序应考虑暂停音频播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REASON_OVERRODE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户或系统强制选择切换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REASON_SESSION_ACTIVATED = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频会话激活触发的设备切换。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REASON_STREAM_PRIORITY_CHANGED = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更高优先级的音频流出现导致的系统设备切换。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_privacytype",
      children: "OH_AudioStream_PrivacyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_PrivacyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于标识对应播放音频流是否支持被其他应用录制。"
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
            children: "AUDIO_STREAM_PRIVACY_TYPE_PUBLIC = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示音频流可以被其他应用录制或屏幕投射，不包含隐私类型的流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_STREAM_PRIVACY_TYPE_PRIVATE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示音频流不可以被其他应用录制或屏幕投射。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_STREAM_PRIVACY_TYPE_SHARED = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示音频流可以被其他应用录制或屏幕投射，包含隐私类型的流。  例如，在PRIVACY_TYPE_PUBLIC策略下，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
              children: "AUDIOSTREAM_USAGE_VOICE_COMMUNICATION"
            }), "类型音频流不会被其他应用录制或屏幕投射。然而，在PRIVACY_TYPE_SHARED策略下，这些音频流将会允许被其他应用录制或屏幕投射。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 21"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiodata_callback_result",
      children: "OH_AudioData_Callback_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioData_Callback_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频数据回调结果。"
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
            children: "AUDIO_DATA_CALLBACK_RESULT_INVALID = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示音频数据回调结果无效，音频数据不播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DATA_CALLBACK_RESULT_VALID = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示音频数据回调结果有效，音频数据将被播放。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_latencytype",
      children: "OH_AudioStream_LatencyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_LatencyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频时延类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "AUDIOSTREAM_LATENCY_TYPE_ALL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取包含软件与硬件在内的整体音频处理时延。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_LATENCY_TYPE_SOFTWARE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取软件部分的时延，包括软件侧音效处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_LATENCY_TYPE_HARDWARE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取硬件部分的时延，包括硬件抽象层（HAL） 、驱动与硬件侧音效处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_playbackcapturemode",
      children: "OH_AudioStream_PlaybackCaptureMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_PlaybackCaptureMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示内录（录制设备内部应用的声音）的过滤类型，每种过滤类型可录制不同的播放流类型。该API暂不对外支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "AUDIOSTREAM_PLAYBACKCAPTURE_MODE_DEFAULT = 0x0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认模式。录制大部分音频流，但不包括提示音流和隐私流。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_PLAYBACKCAPTURE_MODE_MEDIA = 0x1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体模式。获取媒体、语音消息和未知流等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_PLAYBACKCAPTURE_MODE_EXCLUDING_SELF = 0x8000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["排除自身模式。获取除应用自身播放的音频以外的流。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiostream_playbackcapturestartstate",
      children: "OH_AudioStream_PlaybackCaptureStartState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioStream_PlaybackCaptureStartState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义内录的启动状态，该状态在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_requestplaybackcapturestart",
        children: "OH_AudioCapturer_RequestPlaybackCaptureStart"
      }), "函数后异步返回。该API暂不对外支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "AUDIOSTREAM_PLAYBACKCAPTURE_START_STATE_SUCCESS = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动内录成功。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_PLAYBACKCAPTURE_START_STATE_FAILED = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动内录失败。原因是请求焦点（根据流类型做优先级的选择）过程中被打断，或发生系统内部错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSTREAM_PLAYBACKCAPTURE_START_STATE_NOT_AUTHORIZED = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户未授权，启动内录失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiorenderer_outputdevicechangecallback",
      children: "OH_AudioRenderer_OutputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AudioRenderer_OutputDeviceChangeCallback)(OH_AudioRenderer* renderer, void* userData, OH_AudioStream_DeviceChangeReason reason)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出音频流设备变更的回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct",
              children: "OH_AudioRenderer"
            }), "* renderer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generaterenderer",
              children: "OH_AudioStreamBuilder_GenerateRenderer"
            }), "创建的音频流实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiostream_devicechangereason",
              children: "OH_AudioStream_DeviceChangeReason"
            }), " reason"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流设备变更原因。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiorenderer_onmarkreachedcallback",
      children: "OH_AudioRenderer_OnMarkReachedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AudioRenderer_OnMarkReachedCallback)(OH_AudioRenderer* renderer, uint32_t samplePos, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "到达标记位置时回调。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct",
              children: "OH_AudioRenderer"
            }), "* renderer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generaterenderer",
              children: "OH_AudioStreamBuilder_GenerateRenderer"
            }), "创建的音频流实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t samplePos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置目标标记位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiorenderer_writedatawithmetadatacallback",
      children: "OH_AudioRenderer_WriteDataWithMetadataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_AudioRenderer_WriteDataWithMetadataCallback)(OH_AudioRenderer* renderer, void* userData, void* audioData, int32_t audioDataSize, void* metadata, int32_t metadataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数指针将指向用于同时写入音频数据和元数据的回调函数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct",
              children: "OH_AudioRenderer"
            }), "* renderer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generaterenderer",
              children: "OH_AudioStreamBuilder_GenerateRenderer"
            }), "创建的音频流实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* audioData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户写入的音频数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t audioDataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户写入的音频数据的数据长度，以字节为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户写入的元数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t metadataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户写入的元数据的数据长度，以字节为单位。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户返回的回调函数的错误码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiorenderer_onwritedatacallback",
      children: "OH_AudioRenderer_OnWriteDataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef OH_AudioData_Callback_Result (*OH_AudioRenderer_OnWriteDataCallback)(OH_AudioRenderer* renderer, void* userData, void* audioData, int32_t audioDataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数指针将指向用于写入音频数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数仅用来写入音频数据，请勿在回调函数中调用AudioRenderer相关接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数的返回结果表示填充到缓冲区的数据是否有效。如果结果无效，用户填写的数据将不被播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数结束后，音频服务会把audioData指针数据放入队列里等待播放，因此请勿在回调外再次更改audioData指向的数据，且务必保证往audioData填满audioDataSize长度的待播放数据, 否则会导致音频服务播放杂音。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参数audioDataSize可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setframesizeincallback",
        children: "OH_AudioStreamBuilder_SetFrameSizeInCallback"
      }), "设置。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct",
              children: "OH_AudioRenderer"
            }), "* renderer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generaterenderer",
              children: "OH_AudioStreamBuilder_GenerateRenderer"
            }), "创建的音频流实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向通过回调函数传递的应用数据指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* audioData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户写入的音频数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t audioDataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户写入的音频数据的数据长度，以字节为单位。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiodata_callback_result",
              children: "OH_AudioData_Callback_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_DATA_CALLBACK_RESULT_INVALID：音频数据回调结果无效，音频数据不播放。  AUDIO_DATA_CALLBACK_RESULT_VALID：音频数据回调结果有效，音频数据将被播放。"
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