"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["915495"], {
834719(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_suite_engine_h_capi_native_audio_suite_engine_h_md_570_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-headerfile-capi-native-audio-suite-engine-h-capi-native-audio-suite-engine-h-md-570.json
var site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_suite_engine_h_capi_native_audio_suite_engine_h_md_570_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h","title":"native_audio_suite_engine.h","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h.md","sourceDirName":"audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h","slug":"/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"native_audio_suite_engine.h","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-engine-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audio-suite-engine-h"},"sidebar":"ref","previous":{"title":"native_audio_suite_base.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h"},"next":{"title":"OH_AudioManager","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiomanager/capi-ohaudio-oh-audiomanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h.md


const frontMatter = {
	title: 'native_audio_suite_engine.h',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-engine-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audio-suite-engine-h'
};
const contentTitle = 'native_audio_suite_engine.h';

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
  "value": "OH_AudioSuiteEngine_Create()",
  "id": "oh_audiosuiteengine_create",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_Destroy()",
  "id": "oh_audiosuiteengine_destroy",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_CreatePipeline()",
  "id": "oh_audiosuiteengine_createpipeline",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_DestroyPipeline()",
  "id": "oh_audiosuiteengine_destroypipeline",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_StartPipeline()",
  "id": "oh_audiosuiteengine_startpipeline",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_StopPipeline()",
  "id": "oh_audiosuiteengine_stoppipeline",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetPipelineState()",
  "id": "oh_audiosuiteengine_getpipelinestate",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_RenderFrame()",
  "id": "oh_audiosuiteengine_renderframe",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_MultiRenderFrame()",
  "id": "oh_audiosuiteengine_multirenderframe",
  "level": 3
}, {
  "value": "OH_AudioSuiteNodeBuilder_Create()",
  "id": "oh_audiosuitenodebuilder_create",
  "level": 3
}, {
  "value": "OH_AudioSuiteNodeBuilder_Destroy()",
  "id": "oh_audiosuitenodebuilder_destroy",
  "level": 3
}, {
  "value": "OH_AudioSuiteNodeBuilder_Reset()",
  "id": "oh_audiosuitenodebuilder_reset",
  "level": 3
}, {
  "value": "OH_AudioSuiteNodeBuilder_SetNodeType()",
  "id": "oh_audiosuitenodebuilder_setnodetype",
  "level": 3
}, {
  "value": "OH_AudioSuiteNodeBuilder_SetFormat()",
  "id": "oh_audiosuitenodebuilder_setformat",
  "level": 3
}, {
  "value": "OH_InputNode_RequestDataCallback()",
  "id": "oh_inputnode_requestdatacallback",
  "level": 3
}, {
  "value": "OH_AudioSuiteNodeBuilder_SetRequestDataCallback()",
  "id": "oh_audiosuitenodebuilder_setrequestdatacallback",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_CreateNode()",
  "id": "oh_audiosuiteengine_createnode",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_DestroyNode()",
  "id": "oh_audiosuiteengine_destroynode",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetNodeBypassStatus()",
  "id": "oh_audiosuiteengine_getnodebypassstatus",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_BypassEffectNode()",
  "id": "oh_audiosuiteengine_bypasseffectnode",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetAudioFormat()",
  "id": "oh_audiosuiteengine_setaudioformat",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_ConnectNodes()",
  "id": "oh_audiosuiteengine_connectnodes",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_DisconnectNodes()",
  "id": "oh_audiosuiteengine_disconnectnodes",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetEqualizerFrequencyBandGains()",
  "id": "oh_audiosuiteengine_setequalizerfrequencybandgains",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetEqualizerFrequencyBandGains()",
  "id": "oh_audiosuiteengine_getequalizerfrequencybandgains",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetSoundFieldType()",
  "id": "oh_audiosuiteengine_setsoundfieldtype",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetSoundFieldType()",
  "id": "oh_audiosuiteengine_getsoundfieldtype",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetEnvironmentType()",
  "id": "oh_audiosuiteengine_setenvironmenttype",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetEnvironmentType()",
  "id": "oh_audiosuiteengine_getenvironmenttype",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetVoiceBeautifierType()",
  "id": "oh_audiosuiteengine_setvoicebeautifiertype",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetVoiceBeautifierType()",
  "id": "oh_audiosuiteengine_getvoicebeautifiertype",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_IsNodeTypeSupported()",
  "id": "oh_audiosuiteengine_isnodetypesupported",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetSpaceRenderPositionParams()",
  "id": "oh_audiosuiteengine_setspacerenderpositionparams",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetSpaceRenderPositionParams()",
  "id": "oh_audiosuiteengine_getspacerenderpositionparams",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetSpaceRenderRotationParams()",
  "id": "oh_audiosuiteengine_setspacerenderrotationparams",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetSpaceRenderRotationParams()",
  "id": "oh_audiosuiteengine_getspacerenderrotationparams",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetSpaceRenderExtensionParams()",
  "id": "oh_audiosuiteengine_setspacerenderextensionparams",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetSpaceRenderExtensionParams()",
  "id": "oh_audiosuiteengine_getspacerenderextensionparams",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetTempoAndPitch()",
  "id": "oh_audiosuiteengine_settempoandpitch",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetTempoAndPitch()",
  "id": "oh_audiosuiteengine_gettempoandpitch",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetPureVoiceChangeOption()",
  "id": "oh_audiosuiteengine_setpurevoicechangeoption",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetPureVoiceChangeOption()",
  "id": "oh_audiosuiteengine_getpurevoicechangeoption",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_SetGeneralVoiceChangeType()",
  "id": "oh_audiosuiteengine_setgeneralvoicechangetype",
  "level": 3
}, {
  "value": "OH_AudioSuiteEngine_GetGeneralVoiceChangeType()",
  "id": "oh_audiosuiteengine_getgeneralvoicechangetype",
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
        id: "native_audio_suite_engineh",
        children: "native_audio_suite_engine.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明与音频编创相关的接口。（包括引擎、管线、节点）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohaudiosuite/native_audio_suite_engine.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_audiosuiteengine_create",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_Create(OH_AudioSuiteEngine** audioSuiteEngine)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建音频编创引擎。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_destroy",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_Destroy(OH_AudioSuiteEngine* audioSuiteEngine)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁音频编创引擎句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_CreatePipeline(OH_AudioSuiteEngine* audioSuiteEngine, OH_AudioSuitePipeline** audioSuitePipeline, OH_AudioSuite_PipelineWorkMode workMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在当前音频编创引擎中创建1个管线。管线是引擎内负责音频编创的执行单元，1个引擎可创建多个管线。  支持最多创建10条管线，其中至多有1条实时渲染管线。  每个管线必须至少包含1个输入节点，有且只有1个输出节点。  当管线在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelineworkmode",
              children: "OH_AudioSuite_PipelineWorkMode"
            }), ".AUDIOSUITE_PIPELINE_EDIT_MODE模式下工作时，支持所有的效果节点。  当管线在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelineworkmode",
              children: "OH_AudioSuite_PipelineWorkMode"
            }), ".AUDIOSUITE_PIPELINE_REALTIME_MODE模式下工作时，仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
              children: "OH_AudioNode_Type"
            }), ".EFFECT_NODE_TYPE_EQUALIZER效果节点。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_destroypipeline",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_DestroyPipeline(OH_AudioSuitePipeline* audioSuitePipeline)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁音频编创管线句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_startpipeline",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_StartPipeline(OH_AudioSuitePipeline* audioSuitePipeline)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开始运行该管线，管线会进入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelinestate",
              children: "OH_AudioSuite_PipelineState"
            }), ".AUDIOSUITE_PIPELINE_RUNNING运行状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_stoppipeline",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_StopPipeline(OH_AudioSuitePipeline* audioSuitePipeline)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["停止运行该管线，管线会进入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelinestate",
              children: "OH_AudioSuite_PipelineState"
            }), ".AUDIOSUITE_PIPELINE_STOPPED停止状态。该函数不会改变管线中节点之间的连接关系，管线一旦被停止，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_renderframe",
              children: "OH_AudioSuiteEngine_RenderFrame"
            }), "就不能再进行音频处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getpipelinestate",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetPipelineState(OH_AudioSuitePipeline* audioSuitePipeline, OH_AudioSuite_PipelineState* pipelineState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前管线的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_renderframe",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_RenderFrame(OH_AudioSuitePipeline* audioSuitePipeline, void* audioData, int32_t requestFrameSize, int32_t* responseSize, bool* finishedFlag)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用调用此接口获取管线处理后的音频数据（针对单输出效果节点）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_multirenderframe",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_MultiRenderFrame(OH_AudioSuitePipeline* audioSuitePipeline, OH_AudioDataArray* audioDataArray, int32_t* responseSize, bool* finishedFlag)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染该管线，获取管线处理后的音频数据。针对多输出效果节点，比如包含音源分离节点的管线，audioDataArray的大小需与效果节点的输出数量一一对应（例如：音源分离节点需两个：第1个为人声，第2个为背景声）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuitenodebuilder_create",
              children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_Create(OH_AudioNodeBuilder** builder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取一个音频编创节点构造器，用于配置并创建音频节点。构建器可复用，但若新节点属性与之前不同，必须使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_reset",
              children: "OH_AudioSuiteNodeBuilder_Reset"
            }), "重置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuitenodebuilder_destroy",
              children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_Destroy(OH_AudioNodeBuilder* builder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个音频编创节点构造器。使用完构造器后必须调用此函数进行销毁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuitenodebuilder_reset",
              children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_Reset(OH_AudioNodeBuilder* builder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置一个音频编创节点构造器，同时将之前使用接口设置参数重置。若需复用构建器创建属性不同的新节点，必须调用此接口清除所有属性（如节点类型等）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuitenodebuilder_setnodetype",
              children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_SetNodeType(OH_AudioNodeBuilder* builder, OH_AudioNode_Type type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前节点构造器需要构造的节点类型。创建节点时会根据类型验证其他参数，所有节点类型的创建均需设置此属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuitenodebuilder_setformat",
              children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_SetFormat(OH_AudioNodeBuilder* builder, OH_AudioFormat audioFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置输入/输出节点的音频格式。其余节点不配置，且只能在创建节点之前使用。对于输入节点，此函数可使应用指定写入数据的音频格式；  对于输出节点，此函数可使应用指定其期望获取数据的音频格式；  对于其他类型的节点则不支持调用此函数进行音频格式设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputnode_requestdatacallback",
              children: "typedef int32_t (*OH_InputNode_RequestDataCallback)(OH_AudioNode* audioNode, void* userData, void* audioData, int32_t audioDataSize, bool* finished)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_InputNode_RequestDataCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置输入节点的请求数据回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuitenodebuilder_setrequestdatacallback",
              children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_SetRequestDataCallback(OH_AudioNodeBuilder* builder, OH_InputNode_RequestDataCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置当前输入节点构造器的写入音频数据回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_CreateNode(OH_AudioSuitePipeline* audioSuitePipeline, OH_AudioNodeBuilder* builder, OH_AudioNode** audioNode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据音频编创构造器在音频管线中构造一个音频节点。当执行此函数，系统会基于builder中设置的节点类型校验参数的合法性。  应用可以通过返回值确定错误发生的原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_destroynode",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_DestroyNode(OH_AudioNode* audioNode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁一个音频编创节点。节点是否可以被销毁取决于它所属管线的状态，如果管线不处于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelinestate",
              children: "OH_AudioSuite_PipelineState"
            }), ".AUDIOSUITE_PIPELINE_STOPPED停止状态，而节点处于管线处理路径中，将销毁失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getnodebypassstatus",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetNodeBypassStatus(OH_AudioNode* audioNode, bool* bypassStatus)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前节点的效果使能状态。仅效果节点支持获取。  若对输入或输出节点调用此接口，将返回AUDIOSUITE_ERROR_INVALID_PARAM错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_bypasseffectnode",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_BypassEffectNode(OH_AudioNode* audioNode, bool bypass)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前节点的效果使能状态（仅效果节点支持）。当bypass为true时，效果节点仅透传数据，不进行任何效果处理。  当bypass为false时，效果节点进行对应的效果处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setaudioformat",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetAudioFormat(OH_AudioNode* audioNode, OH_AudioFormat *audioFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置输入/输出节点的音频格式，在创建节点之后使用，只有输入和输出节点能够设置。输入节点指定音源格式，输出节点指定目标格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_connectnodes",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_ConnectNodes(OH_AudioNode* sourceAudioNode, OH_AudioNode* destAudioNode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接两个节点，数据流走向从sourceAudioNode到destAudioNode。连接节点将改变管道拓扑，可能导致部分数据丢失，建议在引擎停止状态下执行此操作。  节点连接顺序：输入节点 -> 效果节点 -> 输出节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_disconnectnodes",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_DisconnectNodes(OH_AudioNode* sourceAudioNode, OH_AudioNode* destAudioNode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断开连接两个节点。此操作将改变管道拓扑并可能导致数据丢失，建议在引擎停止状态下执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setequalizerfrequencybandgains",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetEqualizerFrequencyBandGains(OH_AudioNode* audioNode, OH_EqualizerFrequencyBandGains frequencyBandGains)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前均衡器节点的频段增益效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getequalizerfrequencybandgains",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetEqualizerFrequencyBandGains(OH_AudioNode* audioNode, OH_EqualizerFrequencyBandGains* frequencyBandGains)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前均衡器节点的频段增益效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setsoundfieldtype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSoundFieldType(OH_AudioNode* audioNode, OH_SoundFieldType soundFieldType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置声场效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getsoundfieldtype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSoundFieldType(OH_AudioNode* audioNode, OH_SoundFieldType* soundFieldType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取声场效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setenvironmenttype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetEnvironmentType(OH_AudioNode* audioNode, OH_EnvironmentType environmentType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置环境效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getenvironmenttype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetEnvironmentType(OH_AudioNode* audioNode, OH_EnvironmentType* environmentType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取环境效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setvoicebeautifiertype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetVoiceBeautifierType(OH_AudioNode* audioNode, OH_VoiceBeautifierType voiceBeautifierType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置声音美化效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getvoicebeautifiertype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetVoiceBeautifierType(OH_AudioNode* audioNode, OH_VoiceBeautifierType* voiceBeautifierType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取声音美化效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_isnodetypesupported",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_IsNodeTypeSupported(OH_AudioNode_Type nodeType, bool* isSupported)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前系统是否支持创建指定的节点类型，避免节点创建失败。调用该接口时不依赖引擎及管线状态，仅跟系统相关，无需创建引擎及管线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setspacerenderpositionparams",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSpaceRenderPositionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderPositionParams position)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空间渲染效果节点固定摆位模式的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getspacerenderpositionparams",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSpaceRenderPositionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderPositionParams* position)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取空间渲染效果节点固定摆位模式的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setspacerenderrotationparams",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSpaceRenderRotationParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderRotationParams rotation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空间渲染效果节点旋转模式的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getspacerenderrotationparams",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSpaceRenderRotationParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderRotationParams* rotation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取空间渲染效果节点旋转模式的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setspacerenderextensionparams",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSpaceRenderExtensionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderExtensionParams extension)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空间渲染效果节点扩展模式的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getspacerenderextensionparams",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSpaceRenderExtensionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderExtensionParams* extension)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取空间渲染效果节点扩展模式的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_settempoandpitch",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetTempoAndPitch(OH_AudioNode* audioNode, float speed, float pitch)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置变速变调效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_gettempoandpitch",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetTempoAndPitch(OH_AudioNode* audioNode, float* speed, float* pitch)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取变速变调效果节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setpurevoicechangeoption",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetPureVoiceChangeOption(OH_AudioNode* audioNode, OH_AudioSuite_PureVoiceChangeOption option)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置传统变声节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getpurevoicechangeoption",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetPureVoiceChangeOption(OH_AudioNode* audioNode, OH_AudioSuite_PureVoiceChangeOption* option)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传统变声节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_setgeneralvoicechangetype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetGeneralVoiceChangeType(OH_AudioNode* audioNode, OH_AudioSuite_GeneralVoiceChangeType type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置通用变声节点的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosuiteengine_getgeneralvoicechangetype",
              children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetGeneralVoiceChangeType(OH_AudioNode* audioNode, OH_AudioSuite_GeneralVoiceChangeType* type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取通用变声节点的配置参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_create",
      children: "OH_AudioSuiteEngine_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_Create(OH_AudioSuiteEngine** audioSuiteEngine)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建音频编创引擎。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuiteenginestruct/capi-ohaudiosuite-oh-audiosuiteenginestruct",
              children: "OH_AudioSuiteEngine"
            }), "** audioSuiteEngine"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编创引擎句柄，指向接收audioSuiteEngine变量的指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioSuiteEngine为空指针。  AUDIOSUITE_ERROR_INVALID_STATE：引擎已经被初始化。  AUDIOSUITE_ERROR_MEMORY_ALLOC_FAILED：内存申请失败。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_destroy",
      children: "OH_AudioSuiteEngine_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_Destroy(OH_AudioSuiteEngine* audioSuiteEngine)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁音频编创引擎句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(525121)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁引擎时会同时销毁该引擎下的所有管线。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuiteenginestruct/capi-ohaudiosuite-oh-audiosuiteenginestruct",
              children: "OH_AudioSuiteEngine"
            }), "* audioSuiteEngine"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创引擎句柄，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_create",
              children: "OH_AudioSuiteEngine_Create"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioSuiteEngine为空指针。  AUDIOSUITE_ERROR_INVALID_STATE：引擎已被去初始化、引擎未创建或未初始化引擎。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_createpipeline",
      children: "OH_AudioSuiteEngine_CreatePipeline()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_CreatePipeline(OH_AudioSuiteEngine* audioSuiteEngine, OH_AudioSuitePipeline** audioSuitePipeline, OH_AudioSuite_PipelineWorkMode workMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前音频编创引擎中创建1个管线。管线是引擎内负责音频编创的执行单元，1个引擎可创建多个管线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持最多创建10条管线，其中至多有1条实时渲染管线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个管线必须至少包含1个输入节点，有且只有1个输出节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当管线在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelineworkmode",
        children: "OH_AudioSuite_PipelineWorkMode"
      }), ".AUDIOSUITE_PIPELINE_EDIT_MODE模式下工作时，支持所有的效果节点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当管线在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelineworkmode",
        children: "OH_AudioSuite_PipelineWorkMode"
      }), ".AUDIOSUITE_PIPELINE_REALTIME_MODE模式下工作时，仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
        children: "OH_AudioNode_Type"
      }), ".EFFECT_NODE_TYPE_EQUALIZER效果节点。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuiteenginestruct/capi-ohaudiosuite-oh-audiosuiteenginestruct",
              children: "OH_AudioSuiteEngine"
            }), "* audioSuiteEngine"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创引擎句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_create",
              children: "OH_AudioSuiteEngine_Create"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "** audioSuitePipeline"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编创管线句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelineworkmode",
              children: "OH_AudioSuite_PipelineWorkMode"
            }), " workMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管线工作模式。  1. AUDIOSUITE_PIPELINE_EDIT_MODE: 支持所有效果节点；  2. AUDIOSUITE_PIPELINE_REALTIME_MODE：支持均衡器等节点。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioSuiteEngine为空指针或参数audioSuitePipeline为空指针。  AUDIOSUITE_ERROR_ENGINE_NOT_EXIST：未初始化引擎。  AUDIOSUITE_ERROR_CREATED_EXCEED_SYSTEM_LIMITS：创建管线数量超过系统最大数量限制（引擎最多创建10条管线）。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_MEMORY_ALLOC_FAILED：内存申请失败。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_destroypipeline",
      children: "OH_AudioSuiteEngine_DestroyPipeline()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_DestroyPipeline(OH_AudioSuitePipeline* audioSuitePipeline)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁音频编创管线句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(516276)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁管线时会同时销毁该管线下的所有节点。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "* audioSuitePipeline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创管线句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuiteEngine_CreatePipeline"
            }), "获取需要销毁的句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioSuitePipeline为空指针。  AUDIOSUITE_ERROR_PIPELINE_NOT_EXIST：管线不存在或已经被销毁。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_startpipeline",
      children: "OH_AudioSuiteEngine_StartPipeline()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_StartPipeline(OH_AudioSuitePipeline* audioSuitePipeline)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开始运行该管线，管线会进入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelinestate",
        children: "OH_AudioSuite_PipelineState"
      }), ".AUDIOSUITE_PIPELINE_RUNNING运行状态。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "* audioSuitePipeline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创管线句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuiteEngine_CreatePipeline"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioSuitePipeline为空指针。  AUDIOSUITE_ERROR_PIPELINE_NOT_EXIST：管线不存在或已经被销毁。  AUDIOSUITE_ERROR_INVALID_STATE：管线已在运行或节点连接异常。  可能的原因如下：  1. 管线已经在运行状态；  2. 当前管线中不存在输出类型节点；  3. 起始节点不是输入类型节点。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_stoppipeline",
      children: "OH_AudioSuiteEngine_StopPipeline()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_StopPipeline(OH_AudioSuitePipeline* audioSuitePipeline)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["停止运行该管线，管线会进入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelinestate",
        children: "OH_AudioSuite_PipelineState"
      }), ".AUDIOSUITE_PIPELINE_STOPPED停止状态。该函数不会改变管线中节点之间的连接关系，管线一旦被停止，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_renderframe",
        children: "OH_AudioSuiteEngine_RenderFrame"
      }), "就不能再进行音频处理。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "* audioSuitePipeline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创管线句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuiteEngine_CreatePipeline"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioSuitePipeline为空指针。  AUDIOSUITE_ERROR_PIPELINE_NOT_EXIST：管线不存在或已经被销毁。  AUDIOSUITE_ERROR_INVALID_STATE：管线已在停止状态。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getpipelinestate",
      children: "OH_AudioSuiteEngine_GetPipelineState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetPipelineState(OH_AudioSuitePipeline* audioSuitePipeline, OH_AudioSuite_PipelineState* pipelineState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前管线的状态。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "* audioSuitePipeline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创管线句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuiteEngine_CreatePipeline"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelinestate",
              children: "OH_AudioSuite_PipelineState"
            }), "* pipelineState"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管线状态的输出参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioSuitePipeline为空指针等。  AUDIOSUITE_ERROR_PIPELINE_NOT_EXIST：管线不存在或已经被销毁。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_renderframe",
      children: "OH_AudioSuiteEngine_RenderFrame()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_RenderFrame(OH_AudioSuitePipeline* audioSuitePipeline, void* audioData, int32_t requestFrameSize, int32_t* responseSize, bool* finishedFlag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用调用此接口获取管线处理后的音频数据（针对单输出效果节点）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(891836)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序需调用此接口获取经过效果处理后的音频数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用后，管线会从输出节点向前依次拉取数据、应用效果处理，"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最终将处理后的数据填充到应用程序传入的audioData指针中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统会尝试按requestFrameSize请求的大小填充数据，实际处理的数据大小通过responseSize返回给应用程序。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用程序为所有输入节点准备好数据并通过回调提交最后一次数据时，应在回调中设置finish标志位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当管线中所有输入都传递了finish标志后，处理完成后会通过finishedFlag通知应用程序。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若finishedFlag为true，应用程序不应再调用此接口。"
      }), "\n"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "* audioSuitePipeline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创管线句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuiteEngine_CreatePipeline"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* audioData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取音频需要写入的数据地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestFrameSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audioData的内存字节大小，需大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* responseSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管线写入audioData的音频数据大小，不会大于requestFrameSize，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* finishedFlag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前管线是否渲染完成。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数为空指针或无效值。  可能的原因如下：  1. 参数audioSuitePipeline为空指针；  2. 参数audioData为空指针；  3. 参数requestFrameSize小于等于0；  4. 参数responseSize为空指针；  5. 参数finishedFlag为空指针。  AUDIOSUITE_ERROR_PIPELINE_NOT_EXIST：管线不存在或已经被销毁。  AUDIOSUITE_ERROR_INVALID_STATE：管线不在运行状态。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：管线渲染已完成（之前调用该接口时finishedFlag已写入为true）。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_multirenderframe",
      children: "OH_AudioSuiteEngine_MultiRenderFrame()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_MultiRenderFrame(OH_AudioSuitePipeline* audioSuitePipeline, OH_AudioDataArray* audioDataArray, int32_t* responseSize, bool* finishedFlag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染该管线，获取管线处理后的音频数据。针对多输出效果节点，比如包含音源分离节点的管线，audioDataArray的大小需与效果节点的输出数量一一对应（例如：音源分离节点需两个：第1个为人声，第2个为背景声）。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "* audioSuitePipeline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创管线句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuiteEngine_CreatePipeline"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiodataarray/capi-ohaudiosuite-oh-audiodataarray",
              children: "OH_AudioDataArray"
            }), "* audioDataArray"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户读取音频数据时所使用的数组指针，每个一维数组大小需一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* responseSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管线写入audioData的音频数据大小。系统会确保每个一维数组被填充的数据大小一致，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* finishedFlag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记当前管线是否渲染完成。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数为空指针或无效值。  可能的原因如下：  1. 参数audioSuitePipeline为空指针；  2. 参数audioDataArray为空指针；  3. 参数audioDataArray中的某个成员为空指针；  4. 参数audioDataArray中的requestFrameSize小于等于0；  5. 参数responseSize为空指针；  6. 参数finishedFlag为空指针。  AUDIOSUITE_ERROR_PIPELINE_NOT_EXIST：管线不存在或已经被销毁。  AUDIOSUITE_ERROR_INVALID_STATE：管线不在运行状态。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：管线渲染已完成（之前调用该接口时finishedFlag已写入为true）。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuitenodebuilder_create",
      children: "OH_AudioSuiteNodeBuilder_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_Create(OH_AudioNodeBuilder** builder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取一个音频编创节点构造器，用于配置并创建音频节点。构建器可复用，但若新节点属性与之前不同，必须使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_reset",
        children: "OH_AudioSuiteNodeBuilder_Reset"
      }), "重置。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilder"
            }), "** builder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编创节点构造器句柄。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，builder为空指针。  AUDIOSUITE_ERROR_MEMORY_ALLOC_FAILED：内存申请失败。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuitenodebuilder_destroy",
      children: "OH_AudioSuiteNodeBuilder_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_Destroy(OH_AudioNodeBuilder* builder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个音频编创节点构造器。使用完构造器后必须调用此函数进行销毁。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点构造器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_create",
              children: "OH_AudioSuiteNodeBuilder_Create"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，builder为空指针。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuitenodebuilder_reset",
      children: "OH_AudioSuiteNodeBuilder_Reset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_Reset(OH_AudioNodeBuilder* builder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置一个音频编创节点构造器，同时将之前使用接口设置参数重置。若需复用构建器创建属性不同的新节点，必须调用此接口清除所有属性（如节点类型等）。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点构造器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_create",
              children: "OH_AudioSuiteNodeBuilder_Create"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，builder为空指针。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuitenodebuilder_setnodetype",
      children: "OH_AudioSuiteNodeBuilder_SetNodeType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_SetNodeType(OH_AudioNodeBuilder* builder, OH_AudioNode_Type type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前节点构造器需要构造的节点类型。创建节点时会根据类型验证其他参数，所有节点类型的创建均需设置此属性。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点构造器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_create",
              children: "OH_AudioSuiteNodeBuilder_Create"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
              children: "OH_AudioNode_Type"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点类型。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：配置节点类型成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效，例如，builder为空指针。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuitenodebuilder_setformat",
      children: "OH_AudioSuiteNodeBuilder_SetFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_SetFormat(OH_AudioNodeBuilder* builder, OH_AudioFormat audioFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置输入/输出节点的音频格式。其余节点不配置，且只能在创建节点之前使用。对于输入节点，此函数可使应用指定写入数据的音频格式；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于输出节点，此函数可使应用指定其期望获取数据的音频格式；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于其他类型的节点则不支持调用此函数进行音频格式设置。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点构造器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_create",
              children: "OH_AudioSuiteNodeBuilder_Create"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audioformat/capi-ohaudiosuite-oh-audioformat",
              children: "OH_AudioFormat"
            }), " audioFormat"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流格式。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效，例如，builder为空指针。  AUDIOSUITE_ERROR_UNSUPPORTED_FORMAT：audioFormat中的channelCount不支持。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputnode_requestdatacallback",
      children: "OH_InputNode_RequestDataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_InputNode_RequestDataCallback)(OH_AudioNode* audioNode, void* userData, void* audioData, int32_t audioDataSize, bool* finished)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置输入节点的请求数据回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93646)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户把需要处理的PCM音频数据写入到audioData，OHAudioSuite从audioData拿到数据进行音频编创。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用程序在此回调中向audioData写入不超过audioDataSize大小的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当所有数据通过回调传递给管线后，应用程序应在最后一次回调中将finished设为true，此后管线不再调用此接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只有输入节点需要配置，其余节点不配置。"
      }), "\n"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioNode* audioNode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户使用的数据指针。系统调用此回调函数时，将使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_setrequestdatacallback",
              children: "OH_AudioSuiteNodeBuilder_SetRequestDataCallback"
            }), "接口传入的userData。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* audioData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统提供的内存地址，用于将需要处理的音频数据流写入（需由用户填充）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t audioDataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audioData内存地址的字节大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* finished"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记audioNode节点需要处理的音频数据流是否已经写入完成。true表示已完成，false表示未完成。"
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
            children: "写入audioData缓冲区的有效数据长度（单位为字节）。  返回值范围必须在[0, audioDataSize]范围内，如果返回值小于0，系统会将其修改为0，  如果返回值大于audioDataSize，系统会将其修改为audioDataSize。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuitenodebuilder_setrequestdatacallback",
      children: "OH_AudioSuiteNodeBuilder_SetRequestDataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteNodeBuilder_SetRequestDataCallback(OH_AudioNodeBuilder* builder, OH_InputNode_RequestDataCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置当前输入节点构造器的写入音频数据回调函数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点构造器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_create",
              children: "OH_AudioSuiteNodeBuilder_Create"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_inputnode_requestdatacallback",
              children: "OH_InputNode_RequestDataCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入当前节点音频数据的回调接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据，会在callback函数中将地址传入给用户，如果不使用，可以传入空指针。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：  可能的原因如下：  1. 参数builder为空指针；  2. 参数callback为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_createnode",
      children: "OH_AudioSuiteEngine_CreateNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_CreateNode(OH_AudioSuitePipeline* audioSuitePipeline, OH_AudioNodeBuilder* builder, OH_AudioNode** audioNode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据音频编创构造器在音频管线中构造一个音频节点。当执行此函数，系统会基于builder中设置的节点类型校验参数的合法性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过返回值确定错误发生的原因。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audiosuitepipelinestruct/capi-ohaudiosuite-oh-audiosuitepipelinestruct",
              children: "OH_AudioSuitePipeline"
            }), "* audioSuitePipeline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创管线句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createpipeline",
              children: "OH_AudioSuiteEngine_CreatePipeline"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodebuilderstruct/capi-ohaudiosuite-oh-audionodebuilderstruct",
              children: "OH_AudioNodeBuilder"
            }), "* builder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点构造器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_create",
              children: "OH_AudioSuiteNodeBuilder_Create"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "** audioNode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编创节点句柄。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数为空指针或无效值。  可能的原因如下：  1. 参数audioSuitePipeline为空指针；  2. 参数builder为空指针；  3. 参数audioNode为空指针。  AUDIOSUITE_ERROR_CREATED_EXCEED_SYSTEM_LIMITS：当构建当前类型的节点数量超过管线限制。  例如，创建效果类节点超过5个。  AUDIOSUITE_ERROR_REQUIRED_PARAMETERS_MISSING：构建builder中type类型的节点时缺少必要参数。  例如，builder未设置节点类型。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：当前构造器节点类型为输出节点但设置了回调函数，  或构造器节点类型为效果节点但设置了音频格式或回调函数。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_MEMORY_ALLOC_FAILED：内存申请失败。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_destroynode",
      children: "OH_AudioSuiteEngine_DestroyNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_DestroyNode(OH_AudioNode* audioNode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁一个音频编创节点。节点是否可以被销毁取决于它所属管线的状态，如果管线不处于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_pipelinestate",
        children: "OH_AudioSuite_PipelineState"
      }), ".AUDIOSUITE_PIPELINE_STOPPED停止状态，而节点处于管线处理路径中，将销毁失败。"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioNode为空指针。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_INVALID_STATE：管线不在停止状态。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getnodebypassstatus",
      children: "OH_AudioSuiteEngine_GetNodeBypassStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetNodeBypassStatus(OH_AudioNode* audioNode, bool* bypassStatus)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点的效果使能状态。仅效果节点支持获取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若对输入或输出节点调用此接口，将返回AUDIOSUITE_ERROR_INVALID_PARAM错误码。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* bypassStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前效果类节点使能状态，false表示未跳过节点处理，true表示已跳过节点处理。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：  参数audioNode或bypassStatus为空指针。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非效果类节点。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_bypasseffectnode",
      children: "OH_AudioSuiteEngine_BypassEffectNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_BypassEffectNode(OH_AudioNode* audioNode, bool bypass)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前节点的效果使能状态（仅效果节点支持）。当bypass为true时，效果节点仅透传数据，不进行任何效果处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当bypass为false时，效果节点进行对应的效果处理。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前效果类节点使能状态。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioNode为空指针。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode为非效果节点。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setaudioformat",
      children: "OH_AudioSuiteEngine_SetAudioFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetAudioFormat(OH_AudioNode* audioNode, OH_AudioFormat *audioFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置输入/输出节点的音频格式，在创建节点之后使用，只有输入和输出节点能够设置。输入节点指定音源格式，输出节点指定目标格式。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audioformat/capi-ohaudiosuite-oh-audioformat",
              children: "OH_AudioFormat"
            }), " *audioFormat"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流格式。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数audioNode或audioFormat为空指针。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode是效果节点。  AUDIOSUITE_ERROR_INVALID_STATE：管线不在停止状态。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_connectnodes",
      children: "OH_AudioSuiteEngine_ConnectNodes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_ConnectNodes(OH_AudioNode* sourceAudioNode, OH_AudioNode* destAudioNode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接两个节点，数据流走向从sourceAudioNode到destAudioNode。连接节点将改变管道拓扑，可能导致部分数据丢失，建议在引擎停止状态下执行此操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "节点连接顺序：输入节点 -> 效果节点 -> 输出节点。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* sourceAudioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* destAudioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数sourceAudioNode或destAudioNode为空指针。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_CONNECT：节点之间不支持连接。  可能的原因如下：  1. 参数sourceAudioNode类型为输出类型节点；  2. 参数destAudioNode为类型为输入类型节点；  3. 参数sourceAudioNode和destAudioNode为同一个节点；  4. 参数sourceAudioNode为音源分离类型，但是destAudioNode类型不为输出类型接节点；  5. 参数sourceAudioNode和destAudioNode不为同一个管线中的节点；  6. 管线状态为运行状态，但是destAudioNode不为mix类型节点；  7. 管线状态为运行状态，destAudioNode为mix类型节点，但是sourceAudioNode节点未连接输入类型节点。  AUDIOSUITE_ERROR_INVALID_STATE：管线为无效状态。例如，无法找到输出节点。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_disconnectnodes",
      children: "OH_AudioSuiteEngine_DisconnectNodes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_DisconnectNodes(OH_AudioNode* sourceAudioNode, OH_AudioNode* destAudioNode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "断开连接两个节点。此操作将改变管道拓扑并可能导致数据丢失，建议在引擎停止状态下执行。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* sourceAudioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* destAudioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：参数sourceAudioNode或destAudioNode为空指针。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：不支持操作。  可能的原因如下：  1. 参数sourceAudioNode类型为输出类型节点；  2. 参数destAudioNode为类型为输入类型节点；  3. 参数sourceAudioNode和destAudioNode为同一个节点；  4. 参数sourceAudioNode和destAudioNode不为同一个管线中的节点；  5. 管线状态为运行状态，但是destAudioNode不为mix类型节点；  6. 管线状态为运行状态，destAudioNode为mix类型节点，但是mix节点当前只连接了sourceAudioNode一个输入。  AUDIOSUITE_ERROR_INVALID_STATE：管线为无效状态。例如，无法找到输出节点。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setequalizerfrequencybandgains",
      children: "OH_AudioSuiteEngine_SetEqualizerFrequencyBandGains()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetEqualizerFrequencyBandGains(OH_AudioNode* audioNode, OH_EqualizerFrequencyBandGains frequencyBandGains)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前均衡器节点的频段增益效果。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), " frequencyBandGains"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "均衡器节点的均衡参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非均衡器节点。  AUDIOSUITE_ERROR_INVALID_PARAM：  可能的原因如下：  1. 参数audioNode为空指针；  2. 参数frequencyBandGains每个成员的值范围不在[-10, 10]。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getequalizerfrequencybandgains",
      children: "OH_AudioSuiteEngine_GetEqualizerFrequencyBandGains()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetEqualizerFrequencyBandGains(OH_AudioNode* audioNode, OH_EqualizerFrequencyBandGains* frequencyBandGains)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前均衡器节点的频段增益效果。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-equalizerfrequencybandgains/capi-ohaudiosuite-oh-equalizerfrequencybandgains",
              children: "OH_EqualizerFrequencyBandGains"
            }), "* frequencyBandGains"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "均衡器节点的均衡参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非均衡器节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode或frequencyBandGains为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setsoundfieldtype",
      children: "OH_AudioSuiteEngine_SetSoundFieldType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSoundFieldType(OH_AudioNode* audioNode, OH_SoundFieldType soundFieldType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置声场效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_soundfieldtype",
              children: "OH_SoundFieldType"
            }), " soundFieldType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声场效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非声场节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getsoundfieldtype",
      children: "OH_AudioSuiteEngine_GetSoundFieldType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSoundFieldType(OH_AudioNode* audioNode, OH_SoundFieldType* soundFieldType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取声场效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_soundfieldtype",
              children: "OH_SoundFieldType"
            }), "* soundFieldType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声场效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非soundFieldType节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode或soundFieldType为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setenvironmenttype",
      children: "OH_AudioSuiteEngine_SetEnvironmentType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetEnvironmentType(OH_AudioNode* audioNode, OH_EnvironmentType environmentType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置环境效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_environmenttype",
              children: "OH_EnvironmentType"
            }), " environmentType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非环境节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getenvironmenttype",
      children: "OH_AudioSuiteEngine_GetEnvironmentType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetEnvironmentType(OH_AudioNode* audioNode, OH_EnvironmentType* environmentType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取环境效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_environmenttype",
              children: "OH_EnvironmentType"
            }), "* environmentType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非环境效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode或environmentType为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setvoicebeautifiertype",
      children: "OH_AudioSuiteEngine_SetVoiceBeautifierType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetVoiceBeautifierType(OH_AudioNode* audioNode, OH_VoiceBeautifierType voiceBeautifierType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置声音美化效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_voicebeautifiertype",
              children: "OH_VoiceBeautifierType"
            }), " voiceBeautifierType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声音美化效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非声音美化效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getvoicebeautifiertype",
      children: "OH_AudioSuiteEngine_GetVoiceBeautifierType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetVoiceBeautifierType(OH_AudioNode* audioNode, OH_VoiceBeautifierType* voiceBeautifierType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取声音美化效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_voicebeautifiertype",
              children: "OH_VoiceBeautifierType"
            }), "* voiceBeautifierType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声音美化效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非声音美化效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。  例如，audioNode或voiceBeautifierType为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_isnodetypesupported",
      children: "OH_AudioSuiteEngine_IsNodeTypeSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_IsNodeTypeSupported(OH_AudioNode_Type nodeType, bool* isSupported)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前系统是否支持创建指定的节点类型，避免节点创建失败。调用该接口时不依赖引擎及管线状态，仅跟系统相关，无需创建引擎及管线。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
              children: "OH_AudioNode_Type"
            }), " nodeType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待查的节点类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持当前节点的创建。false表示未支持，true表示已支持。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：查询函数执行成功。  AUDIOSUITE_ERROR_INVALID_PARAM：传入非法参数。  例如，入参nodeType不在OH_AudioNode_Type枚举类型范围内、isSupported为空指针等。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setspacerenderpositionparams",
      children: "OH_AudioSuiteEngine_SetSpaceRenderPositionParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSpaceRenderPositionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderPositionParams position)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置空间渲染效果节点固定摆位模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/audiosuite-oh-audiosuite-spacerenderpositionparams/audiosuite-oh-audiosuite-spacerenderpositionparams",
              children: "OH_AudioSuite_SpaceRenderPositionParams"
            }), " position"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空间渲染效果节点固定摆位模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非空间渲染效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getspacerenderpositionparams",
      children: "OH_AudioSuiteEngine_GetSpaceRenderPositionParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSpaceRenderPositionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderPositionParams* position)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取空间渲染效果节点固定摆位模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/audiosuite-oh-audiosuite-spacerenderpositionparams/audiosuite-oh-audiosuite-spacerenderpositionparams",
              children: "OH_AudioSuite_SpaceRenderPositionParams"
            }), "* position"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空间渲染效果节点固定摆位模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非空间渲染效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setspacerenderrotationparams",
      children: "OH_AudioSuiteEngine_SetSpaceRenderRotationParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSpaceRenderRotationParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderRotationParams rotation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置空间渲染效果节点旋转模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/audiosuite-oh-audiosuite-spacerenderrotationparams/audiosuite-oh-audiosuite-spacerenderrotationparams",
              children: "OH_AudioSuite_SpaceRenderRotationParams"
            }), " rotation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空间渲染效果节点旋转模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非空间渲染效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getspacerenderrotationparams",
      children: "OH_AudioSuiteEngine_GetSpaceRenderRotationParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSpaceRenderRotationParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderRotationParams* rotation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取空间渲染效果节点旋转模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/audiosuite-oh-audiosuite-spacerenderrotationparams/audiosuite-oh-audiosuite-spacerenderrotationparams",
              children: "OH_AudioSuite_SpaceRenderRotationParams"
            }), "* rotation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空间渲染效果节点旋转模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非空间渲染效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setspacerenderextensionparams",
      children: "OH_AudioSuiteEngine_SetSpaceRenderExtensionParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetSpaceRenderExtensionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderExtensionParams extension)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置空间渲染效果节点扩展模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams",
              children: "OH_AudioSuite_SpaceRenderExtensionParams"
            }), " extension"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空间渲染效果节点扩展模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非空间渲染效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getspacerenderextensionparams",
      children: "OH_AudioSuiteEngine_GetSpaceRenderExtensionParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetSpaceRenderExtensionParams(OH_AudioNode* audioNode, OH_AudioSuite_SpaceRenderExtensionParams* extension)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取空间渲染效果节点扩展模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams",
              children: "OH_AudioSuite_SpaceRenderExtensionParams"
            }), "* extension"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空间渲染效果节点扩展模式的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非空间渲染效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_settempoandpitch",
      children: "OH_AudioSuiteEngine_SetTempoAndPitch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetTempoAndPitch(OH_AudioNode* audioNode, float speed, float pitch)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置变速变调效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变速参数。取值范围为[0.5, 10.0]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float pitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变调参数。取值范围为[0.1, 5.0]。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非变速变调效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_gettempoandpitch",
      children: "OH_AudioSuiteEngine_GetTempoAndPitch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetTempoAndPitch(OH_AudioNode* audioNode, float* speed, float* pitch)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取变速变调效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变速参数。取值范围为[0.5, 10.0]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* pitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变调参数。取值范围为[0.1, 5.0]。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非变速变调效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setpurevoicechangeoption",
      children: "OH_AudioSuiteEngine_SetPureVoiceChangeOption()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetPureVoiceChangeOption(OH_AudioNode* audioNode, OH_AudioSuite_PureVoiceChangeOption option)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置传统变声节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption",
              children: "OH_AudioSuite_PureVoiceChangeOption"
            }), " option"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非传统变声效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getpurevoicechangeoption",
      children: "OH_AudioSuiteEngine_GetPureVoiceChangeOption()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetPureVoiceChangeOption(OH_AudioNode* audioNode, OH_AudioSuite_PureVoiceChangeOption* option)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传统变声节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption",
              children: "OH_AudioSuite_PureVoiceChangeOption"
            }), "* option"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传统变声效果节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非传统变声效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_setgeneralvoicechangetype",
      children: "OH_AudioSuiteEngine_SetGeneralVoiceChangeType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_SetGeneralVoiceChangeType(OH_AudioNode* audioNode, OH_AudioSuite_GeneralVoiceChangeType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置通用变声节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_generalvoicechangetype",
              children: "OH_AudioSuite_GeneralVoiceChangeType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非通用变声效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosuiteengine_getgeneralvoicechangetype",
      children: "OH_AudioSuiteEngine_GetGeneralVoiceChangeType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSuite_Result OH_AudioSuiteEngine_GetGeneralVoiceChangeType(OH_AudioNode* audioNode, OH_AudioSuite_GeneralVoiceChangeType* type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取通用变声节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudiosuite-oh-audionodestruct/capi-ohaudiosuite-oh-audionodestruct",
              children: "OH_AudioNode"
            }), "* audioNode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频编创节点句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_createnode",
              children: "OH_AudioSuiteEngine_CreateNode"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_generalvoicechangetype",
              children: "OH_AudioSuite_GeneralVoiceChangeType"
            }), "* type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用变声节点的配置参数。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
              children: "OH_AudioSuite_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOSUITE_SUCCESS：函数执行成功。  AUDIOSUITE_ERROR_NODE_NOT_EXIST：节点不存在或者当前节点已经被销毁。  AUDIOSUITE_ERROR_UNSUPPORTED_OPERATION：audioNode节点类型为非通用变声效果节点。  AUDIOSUITE_ERROR_INVALID_PARAM：参数无效。例如，audioNode为空指针。  AUDIOSUITE_ERROR_TIMEOUT：操作处理超时。  AUDIOSUITE_ERROR_SYSTEM：系统发生其他异常。"
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
891836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
525121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
516276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
93646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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