"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["173367"], {
374816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_production_creation_audio_suite_audio_suite_md_125_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-production-creation-audio-suite-audio-suite-md-125.json
var site_docs_audio_kit_audio_production_creation_audio_suite_audio_suite_md_125_namespaceObject = JSON.parse('{"id":"audio-kit/audio-production-creation/audio-suite/audio-suite","title":"音频编创开发概述(C/C++)","description":"从API version 22开始，支持音频编创（OHAudioSuite）功能。音频编创是一款提供专业级音频效果处理的开发接口，旨在帮助开发者高效构建各种音频创作应用。该套件提供高品质、低延迟、智能化的音频处理能力，集成了降噪、均衡器、人声分离等丰富音效功能。开发者可以根据具体的应用场景，轻松地将所需音频功能集成到应用中。","source":"@site/docs/audio-kit/audio-production-creation/audio-suite/audio-suite.md","sourceDirName":"audio-kit/audio-production-creation/audio-suite","slug":"/audio-kit/audio-production-creation/audio-suite/","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"音频编创开发概述(C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-suite","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频工作组管理","permalink":"/harmonyos-docs-site/audio-kit/audio-performance-optimization/audio-workgroup/"},"next":{"title":"离线编辑(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite-manual-rendering/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-production-creation/audio-suite/audio-suite.md


const frontMatter = {
	title: '音频编创开发概述(C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-suite',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频编创开发概述(C/C++)';

const assets = {

};



const toc = [{
  "value": "引擎",
  "id": "引擎",
  "level": 2
}, {
  "value": "节点",
  "id": "节点",
  "level": 2
}, {
  "value": "节点的介绍",
  "id": "节点的介绍",
  "level": 3
}, {
  "value": "节点的作用",
  "id": "节点的作用",
  "level": 3
}, {
  "value": "管线",
  "id": "管线",
  "level": 2
}, {
  "value": "管线的作用",
  "id": "管线的作用",
  "level": 3
}, {
  "value": "管线的组成和编排",
  "id": "管线的组成和编排",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "音频编创开发概述cc",
        children: "音频编创开发概述(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，支持音频编创（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "）功能。音频编创是一款提供专业级音频效果处理的开发接口，旨在帮助开发者高效构建各种音频创作应用。该套件提供高品质、低延迟、智能化的音频处理能力，集成了降噪、均衡器、人声分离等丰富音效功能。开发者可以根据具体的应用场景，轻松地将所需音频功能集成到应用中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频编创主要包含引擎、管线和节点，具体介绍如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), "：音频编创实现原理图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(627264)/* ["default"] */.A) + "",
        width: "1200",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引擎",
      children: "引擎"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "中的引擎是一个统一管理音频管线、控制", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-production-creation/audio-suite-manual-rendering",
        children: "离线编辑(C/C++)"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-production-creation/audio-suite-real-time-rendering",
        children: "实时渲染(C/C++)"
      }), "的对象，开发者可以根据自身的需求搭建音频处理链。调用方式如上图所示，由应用发起，先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "的接口依次创建引擎、管线、节点，再把创建的节点在管线内连接起来，用于传输PCM（Pulse Code Modulation）音频数据，使对应的效果节点实现音效处理能力。当管线停止时，开发者可以有限制地（具体规则请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%AE%A1%E7%BA%BF%E7%9A%84%E7%BB%84%E6%88%90%E5%92%8C%E7%BC%96%E6%8E%92",
        children: "管线的组成和编排"
      }), "）连接、断开和移除节点，通过调节节点编排实现复杂的音效处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引擎最多支持创建10条管线，其中实时渲染管线最多创建1条。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点",
      children: "节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "节点的介绍",
      children: "节点的介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "节点是音频渲染的最小单元，根据节点功能提供对应的音效处理能力，节点本身无法单独调用，必须依附管线和引擎才能使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "支持三种节点类型，分别是输入节点、输出节点、效果节点。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "节点类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_NODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入节点，支持开发者输入各种格式的PCM音频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "效果节点，添加音频效果，支持单输入单输出和多输入单输出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUTPUT_NODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出节点，支持设置输出的PCM音频格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["节点完整类型详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
        children: "OH_AudioNode_Type"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "节点的作用",
      children: "节点的作用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入节点负责处理PCM音频数据输入，从应用侧获取数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输出节点负责处理PCM音频数据输出，开发者可以设置音频数据的输出格式。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-production-creation/audio-suite-manual-rendering",
          children: "离线编辑(C/C++)"
        }), "场景支持均衡器、音源分离、声场效果、降噪、声音美化、环境效果、混音等音效节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-production-creation/audio-suite-real-time-rendering",
          children: "实时渲染(C/C++)"
        }), "场景支持均衡器音效节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["均衡器、音源分离、声场效果、降噪等音效节点支持对应的音效处理功能和多音频混音操作，最终输出的PCM音频数据支持格式设置（如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
          children: "OH_Audio_SampleFormat(位深度)"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_samplerate",
          children: "OH_Audio_SampleRate(采样率)"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h#oh_audiochannellayout",
          children: "OH_AudioChannelLayout(声道数)"
        }), "等）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "管线",
      children: "管线"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管线是一个统一管理音频节点连接、配置的对象，支持两种工作模式，分别是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-production-creation/audio-suite-manual-rendering",
        children: "离线编辑(C/C++)"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-production-creation/audio-suite-real-time-rendering",
        children: "实时渲染(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管线的数据处理采用反向驱动机制。由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_renderframe",
        children: "OH_AudioSuiteEngine_RenderFrame()"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_multirenderframe",
        children: "OH_AudioSuiteEngine_MultiRenderFrame()"
      }), "发起，输出节点逐级向连接的上游节点请求数据，最终由输入节点的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_inputnode_requestdatacallback",
        children: "OH_InputNode_RequestDataCallback()"
      }), "回调函数向开发者请求需要处理的音频数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), "：管线运行状态图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29453)/* ["default"] */.A) + "",
        width: "500",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态的功能如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "状态名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopped"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始状态，或者工作状态经过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_stoppipeline",
              children: "OH_AudioSuiteEngine_StopPipeline()"
            }), "命令进入该状态。  切换到stopped状态下，各节点将释放缓存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "running"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工作状态，或者初始状态执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_startpipeline",
              children: "OH_AudioSuiteEngine_StartPipeline()"
            }), "命令进入该状态。  该函数会对管线进行完整性检查，包含是否有有效连接、节点是否连接错误等。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "管线的作用",
      children: "管线的作用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["管线是", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
            children: "OHAudioSuite"
          }), "中支持应用渲染PCM音频数据的音效链路。管线支持节点之间的灵活组网，给开发者提供更丰富、更灵活的音频编创体验。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管线使用的场景如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建一个输入节点、一个效果节点（如均衡器节点", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
            children: "EFFECT_NODE_TYPE_EQUALIZER"
          }), "）和一个输出节点，按节点连接顺序（输入节点 -> 效果节点 -> 输出节点）连接组成管线，实现均衡器功能（具体代码用例参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-production-creation/audio-suite-manual-rendering#%E5%9F%BA%E7%A1%80%E7%A6%BB%E7%BA%BF%E7%BC%96%E8%BE%91",
            children: "基础离线编辑"
          }), "）。同时，管线也支持多输入场景（具体代码用例参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-production-creation/audio-suite-manual-rendering#%E6%B7%B7%E9%9F%B3%E4%B8%8E%E7%BA%A7%E8%81%94",
            children: "混音与级联"
          }), "），每条管线输入的PCM数据经过各自的效果节点，在进行混音处理后进行输出。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "管线的组成和编排",
      children: "管线的组成和编排"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管线由节点编排组成。每一个管线中，输入节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
        children: "INPUT_NODE_TYPE_DEFAULT"
      }), "不超过5个，输出节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
        children: "OUTPUT_NODE_TYPE_DEFAULT"
      }), "不超过1个，效果类节点不超过5个，其中混音节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
        children: "EFFECT_NODE_TYPE_AUDIO_MIXER"
      }), "不超过3个，音源分离节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
        children: "EFFECT_MULTII_OUTPUT_NODE_TYPE_AUDIO_SEPARATION"
      }), "不超过1个。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管线创建节点规则如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管线创建的节点数量超过该类型的限制后，再创建该类型节点会失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每条管线至少要有1个输入节点，有且只有1个输出节点。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建节点前需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_isnodetypesupported",
          children: "OH_AudioSuiteEngine_IsNodeTypeSupported()"
        }), "检查节点类型是否受支持，避免创建节点失败。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入节点和输出节点支持设置节点格式，其余节点不支持设置格式。输入的格式是音频源的音频格式，输出的格式是开发者期望输出的音频格式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管线中节点的编排规则如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管线连接顺序为：输入节点 -> 效果节点 -> 输出节点。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["音源分离效果节点", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
          children: "EFFECT_MULTII_OUTPUT_NODE_TYPE_AUDIO_SEPARATION"
        }), "后面只能连接输出节点，其余效果类节点则没有这个限制。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["混音效果节点", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
          children: "EFFECT_NODE_TYPE_AUDIO_MIXER"
        }), "支持多路输入连接，其余类型节点则不支持。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "节点的连接是单向的，不支持后序节点反向连接到前序节点。输入节点是每条管线的首节点，输出节点是每条管线的尾节点。"
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
627264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438581-6fb55449d4387a0a9df659582845db75.png");

},
29453(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958536-1c4670cf59204673d6943ce34198dc7e.png");

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