"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["662200"], {
723501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_suite_base_h_capi_native_audio_suite_base_h_md_039_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-headerfile-capi-native-audio-suite-base-h-capi-native-audio-suite-base-h-md-039.json
var site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_suite_base_h_capi_native_audio_suite_base_h_md_039_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h","title":"native_audio_suite_base.h","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h.md","sourceDirName":"audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h","slug":"/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"native_audio_suite_base.h","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audio-suite-base-h"},"sidebar":"ref","previous":{"title":"native_audiostreambuilder.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h"},"next":{"title":"native_audio_suite_engine.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h.md


const frontMatter = {
	title: 'native_audio_suite_base.h',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audio-suite-base-h'
};
const contentTitle = 'native_audio_suite_base.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_AudioNode_Type",
  "id": "oh_audionode_type",
  "level": 3
}, {
  "value": "OH_AudioSuite_PipelineWorkMode",
  "id": "oh_audiosuite_pipelineworkmode",
  "level": 3
}, {
  "value": "OH_AudioSuite_PipelineState",
  "id": "oh_audiosuite_pipelinestate",
  "level": 3
}, {
  "value": "OH_AudioSuite_Result",
  "id": "oh_audiosuite_result",
  "level": 3
}, {
  "value": "OH_Audio_SampleFormat",
  "id": "oh_audio_sampleformat",
  "level": 3
}, {
  "value": "OH_Audio_EncodingType",
  "id": "oh_audio_encodingtype",
  "level": 3
}, {
  "value": "OH_Audio_SampleRate",
  "id": "oh_audio_samplerate",
  "level": 3
}, {
  "value": "OH_SoundFieldType",
  "id": "oh_soundfieldtype",
  "level": 3
}, {
  "value": "OH_EnvironmentType",
  "id": "oh_environmenttype",
  "level": 3
}, {
  "value": "OH_VoiceBeautifierType",
  "id": "oh_voicebeautifiertype",
  "level": 3
}, {
  "value": "OH_AudioSuite_SurroundDirection",
  "id": "oh_audiosuite_surrounddirection",
  "level": 3
}, {
  "value": "OH_AudioSuite_PureVoiceChangeGenderOption",
  "id": "oh_audiosuite_purevoicechangegenderoption",
  "level": 3
}, {
  "value": "OH_AudioSuite_PureVoiceChangeType",
  "id": "oh_audiosuite_purevoicechangetype",
  "level": 3
}, {
  "value": "OH_AudioSuite_GeneralVoiceChangeType",
  "id": "oh_audiosuite_generalvoicechangetype",
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
        id: "native_audio_suite_baseh",
        children: "native_audio_suite_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明音频编创相关底层数据结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohaudiosuite/native_audio_suite_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohaudiosuite.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Audio.SuiteEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audioformat/capi-ohaudiosuite-oh-audioformat",
              children: "OH_AudioFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创的音频流信息，用于描述基本音频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiodataarray/capi-ohaudiosuite-oh-audiodataarray",
              children: "OH_AudioDataArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioDataArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义多路输出渲染接口的输入数据描述。当管线中存在多输出效果节点时，通过多输出渲染接口获取处理过后的音频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_EqualizerFrequencyBandGains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创均衡器效果节点配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/audiosuite-oh-audiosuite-spacerenderpositionparams/audiosuite-oh-audiosuite-spacerenderpositionparams",
              children: "OH_AudioSuite_SpaceRenderPositionParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_SpaceRenderPositionParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义3D空间渲染效果节点固定摆位模式的配置参数。左手坐标系：伸出左手，用拇指和食指形成一个“L”形。  拇指指向右侧，食指向上，其余手指指向前。  此时形成了一个3D的左手坐标系。在这个坐标系中，拇指、食指  和其他手指分别代表x轴、y轴和z轴的正方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/audiosuite-oh-audiosuite-spacerenderrotationparams/audiosuite-oh-audiosuite-spacerenderrotationparams",
              children: "OH_AudioSuite_SpaceRenderRotationParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_SpaceRenderRotationParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义空间渲染效果节点旋转模式配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams",
              children: "OH_AudioSuite_SpaceRenderExtensionParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_SpaceRenderExtensionParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义空间渲染效果节点扩展模式配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption",
              children: "OH_AudioSuite_PureVoiceChangeOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_PureVoiceChangeOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创传统变声选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuiteenginestruct/capi-ohaudiosuite-oh-audiosuiteenginestruct",
              children: "OH_AudioSuiteEngineStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuiteEngine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频编创引擎，用来管理音频编创管线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipelineStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuitePipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频编创管线，用来管理音频编创节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNodeStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频编创节点，用于描述音频编创节点实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilderStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioNodeBuilder"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["声明音频编创节点的构造器。用于构建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "，配置输入输出节点数据格式，配置输入节点回调接口。"]
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
              href: "#oh_audionode_type",
              children: "OH_AudioNode_Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioNode_Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创节点类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuite_pipelineworkmode",
              children: "OH_AudioSuite_PipelineWorkMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_PipelineWorkMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创管线工作模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuite_pipelinestate",
              children: "OH_AudioSuite_PipelineState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_PipelineState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创管线运行状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编创错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Audio_SampleFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创节点音频流的位深度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audio_encodingtype",
              children: "OH_Audio_EncodingType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Audio_EncodingType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频流编码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audio_samplerate",
              children: "OH_Audio_SampleRate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Audio_SampleRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频采样率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_soundfieldtype",
              children: "OH_SoundFieldType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SoundFieldType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创声场效果节点的效果模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_environmenttype",
              children: "OH_EnvironmentType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_EnvironmentType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创环境效果节点的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_voicebeautifiertype",
              children: "OH_VoiceBeautifierType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VoiceBeautifierType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创美化效果节点模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuite_surrounddirection",
              children: "OH_AudioSuite_SurroundDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_SurroundDirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义空间渲染效果节点旋转模式环绕方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuite_purevoicechangegenderoption",
              children: "OH_AudioSuite_PureVoiceChangeGenderOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_PureVoiceChangeGenderOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创传统变声效果节点的性别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuite_purevoicechangetype",
              children: "OH_AudioSuite_PureVoiceChangeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_PureVoiceChangeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创传统变声效果节点的变声类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuite_generalvoicechangetype",
              children: "OH_AudioSuite_GeneralVoiceChangeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSuite_GeneralVoiceChangeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音频编创通用变声的节点类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "EQUALIZER_BAND_NUM (10)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义均衡器频带数量为10个。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PURE_VOICE_DEFAULT_PITCH (0.0f)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用系统推荐的音调。用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption",
              children: "OH_AudioSuite_PureVoiceChangeOption"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_DEFAULT"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认均衡器频带增益效果。  各频带增益：{0, 0, 0, 0, 0, 0, 0, 0, 0, 0}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_BALLADS"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置民谣效果。  各频带增益：{3, 5, 2, -4, 1, 2, -3, 1, 4, 5}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_CHINESE_STYLE"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置中国风效果。  各频带增益：{0, 0, 2, 0, 0, 4, 4, 2, 2, 5}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_CLASSICAL"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置古典效果。  各频带增益：{2, 3, 2, 1, 0, 0, -5, -5, -5, -6}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_DANCE_MUSIC"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置舞曲效果。  各频带增益：{4, 3, 2, -3, 0, 0, 5, 4, 2, 0}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_JAZZ"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置爵士效果。  各频带增益：{2, 0, 2, 3, 6, 5, -1, 3, 4, 4}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_POP"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置流行效果。  各频带增益：{5, 2, 1, -1, -5, -5, -2, 1, 2, 4}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_RB"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置R&B效果。  各频带增益：{1, 4, 5, 3, -2, -2, 2, 3, 5, 5}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " OH_EQUALIZER_PARAM_ROCK"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器节点内置摇滚效果。  各频带增益：{6, 4, 4, 2, 0, 1, 3, 3, 5, 4}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audionode_type",
      children: "OH_AudioNode_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioNode_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创节点类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "INPUT_NODE_TYPE_DEFAULT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入节点，支持从应用程序获取音频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTPUT_NODE_TYPE_DEFAULT = 101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出节点，支持向应用程序提供音频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_EQUALIZER = 201"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均衡器效果节点。均衡器效果节点输出的音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：2。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_NOISE_REDUCTION = 202"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["降噪效果节点。降噪效果节点输出的音频格式如下：  采样率：16000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_SOUND_FIELD = 203"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["声场效果节点。声场效果节点支持的声场类型：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_soundfieldtype",
              children: "OH_SoundFieldType"
            }), "。  声场效果节点输出的音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：2。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_MULTII_OUTPUT_NODE_TYPE_AUDIO_SEPARATION = 204"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音源分离效果节点。音源分离效果节点只能连接输出节点。  音源分离效果节点输出的音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_F32LE。  声道数：4（前2个声道用于人声，后2个声道用于伴奏）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_VOICE_BEAUTIFIER = 205"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["声音美化效果节点。声音美化效果节点支持的声音美化类型：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_voicebeautifiertype",
              children: "OH_VoiceBeautifierType"
            }), "。  声音美化效果节点输出的音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：2。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_ENVIRONMENT_EFFECT = 206"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["环境效果节点。环境效果节点输出的音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：2。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_AUDIO_MIXER = 207"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["混音效果节点。混音效果节点输出的音频格式如下：  采样率：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_samplerate",
              children: "OH_Audio_SampleRate"
            }), "。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_F32LE。  声道数：2。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_SPACE_RENDER = 208"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["空间渲染效果节点。空间渲染效果节点输出的音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：2。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_PURE_VOICE_CHANGE = 209"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传统变声效果节点。传统变声效果节点输出的音频格式如下：  采样率：16000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_GENERAL_VOICE_CHANGE = 210"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通用变声效果节点。通用变声效果节点的输出音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：2。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE_TYPE_TEMPO_PITCH = 211"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["变速变调效果节点。变速变调效果节点的输出音频格式如下：  采样率：48000Hz。  采样格式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
              children: "OH_Audio_SampleFormat"
            }), ".AUDIO_SAMPLE_S16LE。  声道数：1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuite_pipelineworkmode",
      children: "OH_AudioSuite_PipelineWorkMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSuite_PipelineWorkMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创管线工作模式。"
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
            children: "AUDIOSUITE_PIPELINE_EDIT_MODE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑模式，管线处于该工作模式下可创建多种效果节点进行音频处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_PIPELINE_REALTIME_MODE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时渲染模式，即在音频处理过程中实时播放已处理的音频。  实时渲染模式下，管线仅支持均衡器效果处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuite_pipelinestate",
      children: "OH_AudioSuite_PipelineState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSuite_PipelineState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创管线运行状态。"
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
            children: "AUDIOSUITE_PIPELINE_STOPPED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管线处于停止状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_PIPELINE_RUNNING = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管线处于运行状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuite_result",
      children: "OH_AudioSuite_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSuite_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频编创错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "AUDIOSUITE_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_INVALID_PARAM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_INVALID_STATE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_SYSTEM = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统通用错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_UNSUPPORTED_FORMAT = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的音频格式，如不支持的编码类型、采样格式等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_ENGINE_NOT_EXIST = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "引擎不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_PIPELINE_NOT_EXIST = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管线不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_NODE_NOT_EXIST = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_UNSUPPORTED_CONNECT = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点之间不支持连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的操作。例如，效果节点不支持设置音频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_CREATED_EXCEED_SYSTEM_LIMITS = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建管线或者节点超过系统最大数量限制。具体情况如下：  引擎最多支持创建10条管线（其中，实时渲染管线最多创建1条）。  每一个管线中，输入节点不超过5个，输出节点不超过1个，混音节点不超过3个，音源分离节点不超过1个，其余效果节点不超过5个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_REQUIRED_PARAMETERS_MISSING = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数缺少必要参数。例如，输入节点未设置回调函数、输出节点未设置音频格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_TIMEOUT = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_ERROR_MEMORY_ALLOC_FAILED = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存申请失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audio_sampleformat",
      children: "OH_Audio_SampleFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Audio_SampleFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创节点音频流的位深度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "AUDIO_SAMPLE_U8 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned 8位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SAMPLE_S16LE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short 16位小端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SAMPLE_S24LE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short 24位小端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SAMPLE_S32LE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short 32位小端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SAMPLE_F32LE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float 32位小端。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audio_encodingtype",
      children: "OH_Audio_EncodingType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Audio_EncodingType\n"
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
      }), " 22"]
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
            children: "AUDIO_ENCODING_TYPE_RAW = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCM编码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audio_samplerate",
      children: "OH_Audio_SampleRate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Audio_SampleRate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频采样率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "SAMPLE_RATE_8000 = 8000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率8kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_11025 = 11025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率11.025kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_12000 = 12000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率12kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_16000 = 16000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率16kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_22050 = 22050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率22.05kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_24000 = 24000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率24kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_32000 = 32000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率32kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_44100 = 44100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率44.1kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_48000 = 48000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率48kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_64000 = 64000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率64kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_88200 = 88200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率88.2kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_96000 = 96000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率96kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_176400 = 176400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率176.4kHz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAMPLE_RATE_192000 = 192000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样率192kHz。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_soundfieldtype",
      children: "OH_SoundFieldType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_SoundFieldType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创声场效果节点的效果模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "SOUND_FIELD_FRONT_FACING = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前置声场效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOUND_FIELD_GRAND = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宏大声场效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOUND_FIELD_NEAR = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "聆听声场效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOUND_FIELD_WIDE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽广声场效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_environmenttype",
      children: "OH_EnvironmentType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_EnvironmentType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创环境效果节点的模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "ENVIRONMENT_TYPE_BROADCAST = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境节点效果为广播。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENVIRONMENT_TYPE_EARPIECE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境节点效果为电话听筒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENVIRONMENT_TYPE_UNDERWATER = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境节点效果为水下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENVIRONMENT_TYPE_GRAMOPHONE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境节点效果为留声机。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_voicebeautifiertype",
      children: "OH_VoiceBeautifierType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VoiceBeautifierType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创美化效果节点模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "VOICE_BEAUTIFIER_TYPE_CLEAR = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声音美化节点效果为清澈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VOICE_BEAUTIFIER_TYPE_THEATRE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声音美化节点效果为剧场。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VOICE_BEAUTIFIER_TYPE_CD = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声音美化节点效果为CD。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VOICE_BEAUTIFIER_TYPE_RECORDING_STUDIO = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声音美化节点效果为录音棚。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuite_surrounddirection",
      children: "OH_AudioSuite_SurroundDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSuite_SurroundDirection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义空间渲染效果节点旋转模式环绕方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "SPACE_RENDER_CCW = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逆时针旋转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPACE_RENDER_CW = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "顺时针旋转。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuite_purevoicechangegenderoption",
      children: "OH_AudioSuite_PureVoiceChangeGenderOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSuite_PureVoiceChangeGenderOption\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创传统变声效果节点的性别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "PURE_VOICE_CHANGE_FEMALE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置女声。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PURE_VOICE_CHANGE_MALE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置男声。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuite_purevoicechangetype",
      children: "OH_AudioSuite_PureVoiceChangeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSuite_PureVoiceChangeType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创传统变声效果节点的变声类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "PURE_VOICE_CHANGE_TYPE_CARTOON = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点为卡通类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PURE_VOICE_CHANGE_TYPE_CUTE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点为萝莉类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PURE_VOICE_CHANGE_TYPE_FEMALE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点为女声类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PURE_VOICE_CHANGE_TYPE_MALE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点为男声类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PURE_VOICE_CHANGE_TYPE_MONSTER = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点为怪兽类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PURE_VOICE_CHANGE_TYPE_ROBOTS = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点为机器人类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PURE_VOICE_CHANGE_TYPE_SEASONED = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点为大叔类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuite_generalvoicechangetype",
      children: "OH_AudioSuite_GeneralVoiceChangeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSuite_GeneralVoiceChangeType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音频编创通用变声的节点类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "GENERAL_VOICE_CHANGE_TYPE_CUTE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为萝莉类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_CYBERPUNK = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为赛博朋克类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_FEMALE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为女声类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_MALE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为男声类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_MIX = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为混响类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_MONSTER = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为怪兽类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_SEASONED = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为大叔类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_SYNTH = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为合成器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_TRILL = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为颤音类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERAL_VOICE_CHANGE_TYPE_WAR = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声效果节点为战争类型。"
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