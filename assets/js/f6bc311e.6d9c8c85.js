"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["754129"], {
746470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_speech_api_core_speech_arkts_hms_ai_speechrecognizer_hms_ai_speechrecognizer_md_f6b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-speech-api-core-speech-arkts-hms-ai-speechrecognizer-hms-ai-speechrecognizer-md-f6b.json
var site_docs_ref_core_speech_api_core_speech_arkts_hms_ai_speechrecognizer_hms_ai_speechrecognizer_md_f6b_namespaceObject = JSON.parse('{"id":"core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer","title":"speechRecognizer（语音识别）","description":"语音识别服务提供将音频信息转换为文本的能力，便于用户与设备进行互动，实现实时语音交互、语音识别。","source":"@site/docs-ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer.md","sourceDirName":"core-speech-api/core-speech-arkts/hms-ai-speechrecognizer","slug":"/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer","permalink":"/harmonyos-docs-site/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"speechRecognizer（语音识别）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hms-ai-speechrecognizer","kit":"AI","last_updated":"2026-04-22","slug":"hms-ai-speechrecognizer"},"sidebar":"ref","previous":{"title":"textToSpeech（文本转语音）","permalink":"/harmonyos-docs-site/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech"},"next":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer.md


const frontMatter = {
	title: 'speechRecognizer（语音识别）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hms-ai-speechrecognizer',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'hms-ai-speechrecognizer'
};
const contentTitle = 'speechRecognizer（语音识别）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "speechRecognizer.createEngine",
  "id": "speechrecognizercreateengine",
  "level": 2
}, {
  "value": "speechRecognizer.createEngine",
  "id": "speechrecognizercreateengine-1",
  "level": 2
}, {
  "value": "SpeechRecognitionEngine",
  "id": "speechrecognitionengine",
  "level": 2
}, {
  "value": "listLanguages",
  "id": "listlanguages",
  "level": 3
}, {
  "value": "listLanguages",
  "id": "listlanguages-1",
  "level": 3
}, {
  "value": "setListener",
  "id": "setlistener",
  "level": 3
}, {
  "value": "startListening",
  "id": "startlistening",
  "level": 3
}, {
  "value": "writeAudio",
  "id": "writeaudio",
  "level": 3
}, {
  "value": "finish",
  "id": "finish",
  "level": 3
}, {
  "value": "cancel",
  "id": "cancel",
  "level": 3
}, {
  "value": "isBusy",
  "id": "isbusy",
  "level": 3
}, {
  "value": "shutdown",
  "id": "shutdown",
  "level": 3
}, {
  "value": "RecognitionListener",
  "id": "recognitionlistener",
  "level": 2
}, {
  "value": "onStart",
  "id": "onstart",
  "level": 3
}, {
  "value": "onEvent",
  "id": "onevent",
  "level": 3
}, {
  "value": "onResult",
  "id": "onresult",
  "level": 3
}, {
  "value": "onComplete",
  "id": "oncomplete",
  "level": 3
}, {
  "value": "onError",
  "id": "onerror",
  "level": 3
}, {
  "value": "CreateEngineParams",
  "id": "createengineparams",
  "level": 2
}, {
  "value": "LanguageQuery",
  "id": "languagequery",
  "level": 2
}, {
  "value": "StartParams",
  "id": "startparams",
  "level": 2
}, {
  "value": "AudioInfo",
  "id": "audioinfo",
  "level": 2
}, {
  "value": "SpeechRecognitionResult",
  "id": "speechrecognitionresult",
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
        id: "speechrecognizer语音识别",
        children: "speechRecognizer（语音识别）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "语音识别服务提供将音频信息转换为文本的能力，便于用户与设备进行互动，实现实时语音交互、语音识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前本服务支持的语种为中文，支持的模型为离线。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "speechrecognizercreateengine",
      children: "speechRecognizer.createEngine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createEngine(createEngineParams: CreateEngineParams, callback: AsyncCallback<SpeechRecognitionEngine>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建SpeechRecognitionEngine实例，并初始化引擎。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createEngineParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#createengineparams",
              children: "CreateEngineParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建引擎实例的配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback",
              children: "AsyncCallback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#speechrecognitionengine",
              children: "SpeechRecognitionEngine"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回创建的引擎实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create engine failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine of SpeechRecognition is busy."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine of SpeechRecognition is being destroyed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Service Error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n\n// 设置创建引擎参数\nlet extraParams: Record<string, Object> = { \"locate\": \"CN\", \"recognizerMode\": \"short\" }\nlet initParamsInfo: speechRecognizer.CreateEngineParams = {\n  language: 'zh-CN',\n  online: 1,\n  extraParams: extraParams\n};\n\n// 调用createEngine方法\nspeechRecognizer.createEngine(initParamsInfo, (err: BusinessError, speechRecognitionEngine:\nspeechRecognizer.SpeechRecognitionEngine) => {\n  if (!err) {\n    // 接收创建引擎的实例\n    asrEngine = speechRecognitionEngine;\n  } else {\n      // 无法创建引擎时返回错误码1002200001，原因：语种不支持、模式不支持、初始化超时、资源不存在等导致创建引擎失败\n      // 无法创建引擎时返回错误码1002200006，原因：引擎正在忙碌中，一般多个应用同时调用语音识别引擎时触发\n      // 无法创建引擎时返回错误码1002200008，原因：引擎已被销毁\n      console.error(`Failed to create engine. Code: ${err.code}, message: ${err.message}.`);\n  }\n});\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "speechrecognizercreateengine-1",
      children: "speechRecognizer.createEngine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createEngine(createEngineParams: CreateEngineParams): Promise<SpeechRecognitionEngine>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建SpeechRecognitionEngine实例，并初始化引擎。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createEngineParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#createengineparams",
              children: "CreateEngineParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建引擎实例的配置项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#speechrecognitionengine",
              children: "SpeechRecognitionEngine"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回创建的引擎实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create engine failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine of SpeechRecognition is busy."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine of SpeechRecognition is being destroyed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Service Error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n\n// 设置创建引擎参数\nlet extraParams: Record<string, Object> = { \"locate\": \"CN\", \"recognizerMode\": \"short\" }\nlet initParamsInfo: speechRecognizer.CreateEngineParams = {\n  language: 'zh-CN',\n  online: 1,\n  extraParams: extraParams\n};\n\n// 调用createEngine方法\nspeechRecognizer.createEngine(initParamsInfo).then((speechRecognitionEngine: speechRecognizer.SpeechRecognitionEngine) => {\n  // 接收引擎实例\n  asrEngine = speechRecognitionEngine;\n  console.info(`Succeeded in creating engine.`);\n}).catch((err: BusinessError) => {\n  console.error(`Failed to create engine. Code: ${err.code}, message: ${err.message}.`);\n});\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "speechrecognitionengine",
      children: "SpeechRecognitionEngine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["语音识别类，用于执行语音识别过程中的相关操作。在调用SpeechRecognitionEngine的方法前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#speechrecognizercreateengine",
        children: "createEngine"
      }), "方法创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "#speechrecognitionengine",
        children: "SpeechRecognitionEngine"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listlanguages",
      children: "listLanguages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "listLanguages(params: LanguageQuery, callback: AsyncCallback<Array<string>>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询支持的语种信息，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#languagequery",
              children: "LanguageQuery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询语种信息请求参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback",
              children: "AsyncCallback"
            }), "<Array<string>>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回查询结果。  当前仅支持中文，返回结果为：[\"zh-CN\"]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine is not initialized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Service Error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n\n@Entry\n@Component\nstruct Page {\n  // 查询语种信息，以callback形式返回\n  private queryLanguagesCallback() {\n    // 设置查询相关参数\n    let languageQuery: speechRecognizer.LanguageQuery = {\n      sessionId: '123456'\n    };\n    // 调用listLanguages方法\n    asrEngine?.listLanguages(languageQuery, (err: BusinessError, languages: Array<string>) => {\n      if (!err) {\n        // 接收目前支持的语种信息\n        console.info(`Succeeded in listing languages, result: ${JSON.stringify(languages)}.`);\n      } else {\n        console.error(`Failed to list languages. Code: ${err.code}, message: ${err.message}.`);\n      }\n    });\n  }\n\n  build() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listlanguages-1",
      children: "listLanguages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "listLanguages(params: LanguageQuery): Promise<Array<string>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询支持的语种信息，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#languagequery",
              children: "LanguageQuery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询语种信息请求参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "Promise<Array<string>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回查询的结果。  当前仅支持中文，返回结果为：[\"zh-CN\"]。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine is not initialized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Service Error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置查询相关的参数\nlet languageQuery: speechRecognizer.LanguageQuery = {\n  sessionId: '123456'\n};\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .fontSize(20)\n      .onClick( () => {\n        // 调用listLanguages方法，查询引擎目前支持的语种信息，以Promise返回\n        asrEngine?.listLanguages(languageQuery).then((res: Array<string>) => {\n          console.info(`Succeeded in listing languages, result: ${JSON.stringify(res)}.`);\n        }).catch((err: BusinessError) => {\n          console.error(`Failed to list languages. Code: ${err.code}, message: ${err.message}.`);\n        });\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setlistener",
      children: "setListener"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setListener(listener: RecognitionListener): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置语音识别回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#recognitionlistener",
              children: "RecognitionListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调对象，识别过程中所有回调信息均通过此对象返回。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 创建回调对象\nlet setListener: speechRecognizer.RecognitionListener = {\n  // 开始识别成功回调\n  onStart(sessionId: string, eventMessage: string) {\n    console.info(`onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 事件回调\n  onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n    console.info(`onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n  },\n  // 识别结果回调，包括中间结果和最终结果\n  onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult) {\n    console.info(`onResult, sessionId: ${sessionId} sessionId: ${JSON.stringify(result)}`);\n  },\n  // 识别完成回调\n  onComplete(sessionId: string, eventMessage: string) {\n    console.info(`onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 错误回调，错误码通过本方法返回\n  onError(sessionId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  },\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 设置回调\n        asrEngine?.setListener(setListener);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startlistening",
      children: "startListening"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startListening(params: StartParams): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动语音识别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#startparams",
              children: "StartParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动语音识别的相关参数，用于设置会话ID、音频配置信息等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start listening failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine is not initialized."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置开始识别相关参数\nlet recognizerParams: speechRecognizer.StartParams = {\n  sessionId: '123456',\n  audioInfo: { audioType: 'pcm', sampleRate: 16000, soundChannel: 1, sampleBit: 16 }\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 调用开始识别方法\n        asrEngine?.startListening(recognizerParams);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "writeaudio",
      children: "writeAudio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "writeAudio(sessionId: string, audio: Uint8Array): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["写音频流，最大音频长度为60000ms。为了确保收到识别结果，请优先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setlistener",
        children: "setListener"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#startlistening",
        children: "startListening"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此接口在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#speechrecognizercreateengine",
        children: "speechRecognizer.createEngine"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#speechrecognizercreateengine-1",
        children: "speechRecognizer.createEngine"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setlistener",
        children: "setListener"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#startlistening",
        children: "startListening"
      }), "之后使用。如果是通过录音，不需要显式调用writeAudio；如果是写音频流文件，需要Core File Kit相关接口循环读取文件，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-speech-kit-guide/speechrecognizer-guide#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "开发步骤"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uint8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待识别的音频数据，当前仅支持音频数据长度为640字节或1280字节。每次发送音频调用间隔必须为20ms（传输音频长度为640字节）或40ms（传输音频长度为1280字节）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exceeded the maximum audio length supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine is not initialized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write audio failed because the start listening is failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置独立的sessionId\nlet sessionId: string = '123456';\nlet uint8Array: Uint8Array = new Uint8Array();\n// 可以通过如下方式获取音频流：1、通过录音获取音频流；2、从音频文件中读取音频流\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 写入音频流，音频流长度仅支持640字节或1280字节\n        asrEngine?.writeAudio(sessionId, uint8Array);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finish",
      children: "finish"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "finish(sessionId: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["结束识别。为了确保事件回调，请优先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setlistener",
        children: "setListener"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finish recognition failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine is not initialized."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置独立的sessionId\nlet sessionId: string = '123456';\nlet uint8Array: Uint8Array = new Uint8Array();\n// 可以通过如下方式获取音频流：1、通过录音获取音频流；2、从音频文件中读取音频流\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Column(){\n      Button()\n        .id('Button')\n        .onClick( () => {\n          // 写入音频流，音频流长度仅支持640字节或1280字节\n          asrEngine?.writeAudio(sessionId, uint8Array);\n        })\n\n      Button() {\n        Text(\"finish\")\n          .fontColor(Color.White)\n          .fontSize(20)\n      }\n      .type(ButtonType.Capsule)\n      .backgroundColor(\"#0x317AE7\")\n      .width(\"80%\")\n      .height(50)\n      .margin(10)\n      .onClick(() => {\n        // 结束识别\n        asrEngine?.finish(sessionId);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cancel",
      children: "cancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancel(sessionId: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消识别。为了确保事件回调，请优先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setlistener",
        children: "setListener"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cancel recognition failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine is not initialized."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置独立的sessionId\nlet sessionId: string = '123456';\nlet uint8Array: Uint8Array = new Uint8Array();\n// 可以通过如下方式获取音频流：1、通过录音获取音频流；2、从音频文件中读取音频流\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Column(){\n      Button()\n        .id('Button')\n        .onClick( () => {\n          // 写入音频流，音频流长度仅支持640字节或1280字节\n          asrEngine?.writeAudio(sessionId, uint8Array);\n        })\n\n      Button() {\n        Text(\"cancel\")\n          .fontColor(Color.White)\n          .fontSize(20)\n      }\n      .type(ButtonType.Capsule)\n      .backgroundColor(\"#0x317AE7\")\n      .width(\"80%\")\n      .height(50)\n      .margin(10)\n      .onClick(() => {\n        // 调用cancel方法\n        asrEngine?.cancel('123456');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isbusy",
      children: "isBusy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isBusy(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断引擎是否繁忙。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务是否处于繁忙状态的返回值。  - true：引擎正处于繁忙状态。  - false：引擎没有处于繁忙状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
        children: "Core Speech Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1002200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The engine is not initialized."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置独立的sessionId\nlet sessionId: string = '123456';\nlet uint8Array: Uint8Array = new Uint8Array();\n// 可以通过如下方式获取音频流：1、通过录音获取音频流；2、从音频文件中读取音频流\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Column() {\n      Button()\n        .id('Button')\n        .onClick(() => {\n          // 写入音频流，音频流长度仅支持640字节或1280字节\n          asrEngine?.writeAudio(sessionId, uint8Array);\n        })\n\n      Button() {\n        Text(\"cancel\")\n          .fontColor(Color.White)\n          .fontSize(20)\n      }\n      .type(ButtonType.Capsule)\n      .backgroundColor(\"#0x317AE7\")\n      .width(\"80%\")\n      .height(50)\n      .margin(10)\n      .onClick(() => {\n        // 调用isBusy方法\n        let isBusy = asrEngine?.isBusy();\n        console.info(`isBusy: ${isBusy}`);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shutdown",
      children: "shutdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shutdown(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭引擎，释放资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置独立的sessionId\nlet sessionId: string = '123456';\nlet uint8Array: Uint8Array = new Uint8Array();\n// 可以通过如下方式获取音频流：1、通过录音获取音频流；2、从音频文件中读取音频流\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Column() {\n      Button()\n        .id('Button')\n        .onClick(() => {\n          // 写入音频流，音频流长度仅支持640字节或1280字节\n          asrEngine?.writeAudio(sessionId, uint8Array);\n        })\n\n      Button() {\n        Text(\"cancel\")\n          .fontColor(Color.White)\n          .fontSize(20)\n      }\n      .type(ButtonType.Capsule)\n      .backgroundColor(\"#0x317AE7\")\n      .width(\"80%\")\n      .height(50)\n      .margin(10)\n      .onClick(() => {\n        // 调用shutdown方法\n        asrEngine?.shutdown();\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recognitionlistener",
      children: "RecognitionListener"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "语音识别的回调对象，通过此对象可返回识别过程的相关状态，例如识别开始、识别完成、音频开始、音频结束等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstart",
      children: "onStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onStart(sessionId: string, eventMessage: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始识别时，回调此方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始识别信息描述。  返回值为一个句子，描述开始识别结果的状态信息，开始识别成功则返回：startListening success."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 创建回调对象\nlet setListener: speechRecognizer.RecognitionListener = {\n  // 开始识别成功回调\n  onStart(sessionId: string, eventMessage: string) {\n    console.info(`onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 事件回调\n  onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n    console.info(`onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n  },\n  // 识别结果回调，包括中间结果和最终结果\n  onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult) {\n    console.info(`onResult, sessionId: ${sessionId} sessionId: ${JSON.stringify(result)}`);\n  },\n  // 识别完成回调\n  onComplete(sessionId: string, eventMessage: string) {\n    console.info(`onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 错误回调，错误码通过本方法返回\n  onError(sessionId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  },\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 设置回调\n        asrEngine?.setListener(setListener);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onevent",
      children: "onEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onEvent(sessionId: string, eventCode: number, eventMessage: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别过程中的事件都通过此方法回调，例如音频开始、音频结束。vadBegin或vadEnd时触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件标识。  1：音频开始标识。  3：音频结束标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件信息描述。  返回值为一个句子，描述识别过程的事件信息。  - 音频开始：speech started.  - 音频结束：speech stopped."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 创建回调对象\nlet setListener: speechRecognizer.RecognitionListener = {\n  // 开始识别成功回调\n  onStart(sessionId: string, eventMessage: string) {\n    console.info(`onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 事件回调\n  onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n    console.info(`onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n  },\n  // 识别结果回调，包括中间结果和最终结果\n  onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult) {\n    console.info(`onResult, sessionId: ${sessionId} sessionId: ${JSON.stringify(result)}`);\n  },\n  // 识别完成回调\n  onComplete(sessionId: string, eventMessage: string) {\n    console.info(`onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 错误回调，错误码通过本方法返回\n  onError(sessionId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  },\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 设置回调\n        asrEngine?.setListener(setListener);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onresult",
      children: "onResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onResult(sessionId: string, result: SpeechRecognitionResult): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别的中间结果和最终结果都通过此方法返回。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#speechrecognitionresult",
              children: "SpeechRecognitionResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "识别结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 创建回调对象\nlet setListener: speechRecognizer.RecognitionListener = {\n  // 开始识别成功回调\n  onStart(sessionId: string, eventMessage: string) {\n    console.info(`onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 事件回调\n  onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n    console.info(`onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n  },\n  // 识别结果回调，包括中间结果和最终结果\n  onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult) {\n    console.info(`onResult, sessionId: ${sessionId} sessionId: ${JSON.stringify(result)}`);\n  },\n  // 识别完成回调\n  onComplete(sessionId: string, eventMessage: string) {\n    console.info(`onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 错误回调，错误码通过本方法返回\n  onError(sessionId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  },\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 设置回调\n        asrEngine?.setListener(setListener);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncomplete",
      children: "onComplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onComplete(sessionId: string, eventMessage: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别结束或者调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#finish",
        children: "finish"
      }), "方法主动结束识别时回调此方法，返回会话ID、识别完成的相关描述信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "识别完成的相关信息。  返回值为一个句子，描述识别结束的状态信息：recognize complete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 创建回调对象\nlet setListener: speechRecognizer.RecognitionListener = {\n  // 开始识别成功回调\n  onStart(sessionId: string, eventMessage: string) {\n    console.info(`onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 事件回调\n  onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n    console.info(`onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n  },\n  // 识别结果回调，包括中间结果和最终结果\n  onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult) {\n    console.info(`onResult, sessionId: ${sessionId} sessionId: ${JSON.stringify(result)}`);\n  },\n  // 识别完成回调\n  onComplete(sessionId: string, eventMessage: string) {\n    console.info(`onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 错误回调，错误码通过本方法返回\n  onError(sessionId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  },\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 设置回调\n        asrEngine?.setListener(setListener);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onerror",
      children: "onError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onError(sessionId: string, errorCode: number, errorMessage: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别过程中，出现错误时回调，返回会话ID、错误码及错误信息描述。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回的错误码：  401 参数检查失败  1002200002 开始识别失败  1002200003 超过最大音频  1002200004 结束识别失败  1002200005 取消识别失败  1002200006 服务忙碌  1002200007 引擎未初始化  1002200010 语音识别未启动  1002200011 语音识别异常  1002200012 没有获取麦克风权限  错误码详细信息参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-speech-api/errorcode-corespeech/errorcode-corespeech",
              children: "Core Speech Kit错误码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errorMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误信息描述。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 创建回调对象\nlet setListener: speechRecognizer.RecognitionListener = {\n  // 开始识别成功回调\n  onStart(sessionId: string, eventMessage: string) {\n    console.info(`onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 事件回调\n  onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n    console.info(`onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n  },\n  // 识别结果回调，包括中间结果和最终结果\n  onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult) {\n    console.info(`onResult, sessionId: ${sessionId} sessionId: ${JSON.stringify(result)}`);\n  },\n  // 识别完成回调\n  onComplete(sessionId: string, eventMessage: string) {\n    console.info(`onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 错误回调，错误码通过本方法返回\n  onError(sessionId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  },\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 设置回调\n        asrEngine?.setListener(setListener);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createengineparams",
      children: "CreateEngineParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建引擎实例的相关参数，用于配置语种、模式、区域信息等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语种，当前仅支持“zh-CN”中文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "online"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模式。  1为离线，当前仅支持离线模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- <'locate', string> 区域信息。  可选，不设置时默认为“CN”，当前仅支持“CN”。  - <'recognizerMode', string> 语言模式。  可选，不设置时默认为“short”，当前支持“short“和“long”。  - <'sysGeneralLexicon, string[]> 系统热词。支持配置热词提高识别率。系统热词针对应用，在整个识别过程中都生效。  可选，不设置时默认为空。热词总数不超过200，每个热词长度范围为[2, 20]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "languagequery",
      children: "LanguageQuery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询语种信息时的相关参数，例如查询离线模式下服务支持的语种信息，需将online参数设置为1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- <'online', number> 模式。  可选，1为离线，当前仅支持离线。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "startparams",
      children: "StartParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动语音识别的相关参数，用于设置会话ID、音频配置信息等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话ID，会话的唯一标识。  由字母、数字、下划线和短横线组成，无长度限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audioInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#audioinfo",
              children: "AudioInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- <'recognitionMode', number>实时语音识别模式。  0：实时录音识别（需应用开启录音权限：ohos.permission.MICROPHONE），若需结束录音，则调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#finish",
              children: "finish"
            }), "方法；  1：实时音频转文字识别，开启此模式时需要额外调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#writeaudio",
              children: "writeAudio"
            }), "方法，传入待识别音频流；  可选，不传参时默认为1。  - <'vadBegin', number>  Voice Activity Detection(VAD)前端点设置。长语音模式不支持配置，当前长语音模式下默认存在语音输入。短语音模式中用于检测语音开始，若语音开始时间超出参数范围则认为无语音输入。参数范围是[500,10000]。  可选，不传参时默认为10000ms。  - <'vadEnd', number>  Voice Activity Detection(VAD)后端点设置。长语音模式中用于检测子句是否结束，若语音中断时间超出参数范围则认为子句结束，若需要结束长语音识别需要主动结束。短语音模式中用于检测语音结束，若语音中断时间超出参数范围则认为识别结束。参数范围是[500,10000]。  可选，不传参时，短语音默认为800ms支持配置，长语音默认为500ms不支持配置。  - <'maxAudioDuration', number>最大支持音频时长，不传参时默认20000ms。  短语音模式支持范围[20000-60000]，单位ms。  长语音模式支持范围[20000 - 8 * 60 * 60 * 1000]，单位ms。  - <'recognizerOption', <'enablePartialResult', boolean>>  蹦字模式。  可选，不传参时默认为开启。  开启蹦字模式：  \"recognizerOption\": recognizerOption = {  \"enablePartialResult\": true  }  关闭蹦字模式：  \"recognizerOption\": recognizerOption = {  \"enablePartialResult\": false  }  - <'sessionGeneralLexicon': string[]>  会话热词。支持配置热词提高识别率。会话热词优先级比系统热词更高，会话结束时释放。  可选，不设置时默认为空。热词总数不超过200，每个热词长度范围为[2, 20]。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\ninterface RecognizerOption {\n  enablePartialResult: boolean\n}\nlet recognizerOption: RecognizerOption = {\"enablePartialResult\": false};\nlet extraParam: Record<string, Object> = {\n  \"recognitionMode\": 0,\n  \"vadBegin\": 2000,\n  \"vadEnd\": 3000,\n  \"maxAudioDuration\": 20000,\n  \"srcType\": 1,\n  \"recognizerOption\": recognizerOption\n}\n// 设置开始识别相关参数\nlet recognizerParams: speechRecognizer.StartParams = {\n  sessionId: '123456',\n  audioInfo: { audioType: 'pcm', sampleRate: 16000, soundChannel: 1, sampleBit: 16 },\n  extraParams: extraParam\n}\n\n@Entry\n@Component\nstruct Page {\n  build() {\n    Button()\n      .id('Button')\n      .onClick( () => {\n        // 调用开始识别方法\n        asrEngine?.startListening(recognizerParams);\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audioinfo",
      children: "AudioInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audioType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频类型。  当前仅支持“pcm”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sampleRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频的采样率。  当前仅支持16000采样率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sampleBit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频返回的采样位数。  当前仅支持16位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "soundChannel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频返回的通道数信息。  当前仅支持通道1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- <'compressRate', number> 音频的压缩率。  可选，pcm格式音频默认为0。预留参数，当前无实际使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "speechrecognitionresult",
      children: "SpeechRecognitionResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频识别结果信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.SpeechRecognizer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isFinal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为本条子句最终结果的判断。  - true：是本条子句的最终结果。  - false：是本条子句的中间结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isLast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为最后一条句子的判断。  - true：是最后一条句子。  - false：不是最后一条句子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最优识别结果。"
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