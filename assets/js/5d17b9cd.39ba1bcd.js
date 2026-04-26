"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["360131"], {
35918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_speech_kit_guide_texttospeech_guide_texttospeech_guide_md_5d1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-speech-kit-guide-texttospeech-guide-texttospeech-guide-md-5d1.json
var site_docs_core_speech_kit_guide_texttospeech_guide_texttospeech_guide_md_5d1_namespaceObject = JSON.parse('{"id":"core-speech-kit-guide/texttospeech-guide/texttospeech-guide","title":"文本转语音","description":"Core Speech Kit支持将一篇不超过10000字符数的中英文文本（简体中文、繁体中文、数字、英文）合成为语音，并以选定音色进行播报。","source":"@site/docs/core-speech-kit-guide/texttospeech-guide/texttospeech-guide.md","sourceDirName":"core-speech-kit-guide/texttospeech-guide","slug":"/core-speech-kit-guide/texttospeech-guide/","permalink":"/harmonyos-docs-site/core-speech-kit-guide/texttospeech-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"文本转语音","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/texttospeech-guide","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Core Speech Kit简介","permalink":"/harmonyos-docs-site/core-speech-kit-guide/core-speech-introduction/"},"next":{"title":"语音识别","permalink":"/harmonyos-docs-site/core-speech-kit-guide/speechrecognizer-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-speech-kit-guide/texttospeech-guide/texttospeech-guide.md


const frontMatter = {
	title: '文本转语音',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/texttospeech-guide',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '文本转语音';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "设置播报策略",
  "id": "设置播报策略",
  "level": 2
}, {
  "value": "设置单词播报方式",
  "id": "设置单词播报方式",
  "level": 3
}, {
  "value": "设置数字播报策略",
  "id": "设置数字播报策略",
  "level": 3
}, {
  "value": "插入静音停顿",
  "id": "插入静音停顿",
  "level": 3
}, {
  "value": "指定汉字发音",
  "id": "指定汉字发音",
  "level": 3
}, {
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}, {
  "value": "Index.ets",
  "id": "indexets",
  "level": 3
}, {
  "value": "PcmPlayer.ets",
  "id": "pcmplayerets",
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
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "文本转语音",
        children: "文本转语音"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core Speech Kit支持将一篇不超过10000字符数的中英文文本（简体中文、繁体中文、数字、英文）合成为语音，并以选定音色进行播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可对播报的策略进行设置，包括单词播报、数字播报、静音停顿、汉字发音策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手机/平板等设备在无网状态下，系统应用无障碍（屏幕朗读）接入文本转语音能力，为视障人士或不方便阅读场景提供播报能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AI能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "约束"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本转语音"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持的语种类型：中文、英文。（简体中文、繁体中文、中文语境下的英文）  - 支持的音色类型：聆小珊女声音色、英语（美国）劳拉女声音色、凌飞哲男声音色。  - 文本长度：不超过10000字符数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用文本转语音时，将实现文本转语音相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { textToSpeech } from '@kit.CoreSpeechKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用createEngine接口，创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#texttospeechengine",
            children: "TextToSpeechEngine"
          }), "实例。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["createEngine接口提供了两种调用形式，当前以其中一种作为示例，其他方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech",
            children: "API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let ttsEngine: textToSpeech.TextToSpeechEngine;\n\n// 设置创建引擎参数\nlet extraParam: Record<string, Object> = {\"style\": 'interaction-broadcast', \"locate\": 'CN', \"name\": 'EngineName'};\nlet initParamsInfo: textToSpeech.CreateEngineParams = {\n  language: 'zh-CN',\n  person: 0,\n  online: 1,\n  extraParams: extraParam\n};\n\n// 调用createEngine方法\ntextToSpeech.createEngine(initParamsInfo, (err: BusinessError, textToSpeechEngine: textToSpeech.TextToSpeechEngine) => {\n  if (!err) {\n    console.info('Succeeded in creating engine');\n    // 接收创建引擎的实例\n    ttsEngine = textToSpeechEngine;\n  } else {\n    console.error(`Failed to create engine. Code: ${err.code}, message: ${err.message}.`);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["得到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#texttospeechengine",
            children: "TextToSpeechEngine"
          }), "实例对象后，实例化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#speakparams",
            children: "SpeakParams"
          }), "对象、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#speaklistener",
            children: "SpeakListener"
          }), "对象，并传入待合成及播报的文本originalText，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#speak",
            children: "speak"
          }), "接口进行播报。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置speak的回调信息\nlet speakListener: textToSpeech.SpeakListener = {\n  // 开始播报回调\n  onStart(requestId: string, response: textToSpeech.StartResponse) {\n    console.info(`onStart, requestId: ${requestId} response: ${JSON.stringify(response)}`);\n  },\n  // 合成完成及播报完成回调\n  onComplete(requestId: string, response: textToSpeech.CompleteResponse) {\n    console.info(`onComplete, requestId: ${requestId} response: ${JSON.stringify(response)}`);\n  },\n  // 停止播报回调\n  onStop(requestId: string, response: textToSpeech.StopResponse) {\n    console.info(`onStop, requestId: ${requestId} response: ${JSON.stringify(response)}`);\n  },\n  // 返回音频流\n  onData(requestId: string, audio: ArrayBuffer, response: textToSpeech.SynthesisResponse) {\n    console.info(`onData, requestId: ${requestId} sequence: ${JSON.stringify(response)} audio: ${JSON.stringify(audio)}`);\n  },\n  // 错误回调\n  onError(requestId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, requestId: ${requestId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  }\n};\n// 设置回调\nttsEngine.setListener(speakListener);\n// 设置播报内容\nlet originalText: string = 'Hello HarmonyOS';\n// 设置播报相关参数\nlet extraParam: Record<string, Object> = {\"queueMode\": 0, \"speed\": 1, \"volume\": 2, \"pitch\": 1, \"languageContext\": 'zh-CN',\n\"audioType\": \"pcm\", \"soundChannel\": 3, \"playType\": 1 };\nlet speakParams: textToSpeech.SpeakParams = {\n  requestId: '123456', // requestId在同一实例内仅能用一次，请勿重复设置\n  extraParams: extraParam\n};\n// 调用播报方法\n// 开发者可以通过修改speakParams主动设置播报策略\ntry {\n  ttsEngine.speak(originalText, speakParams);\n} catch (err) {\n  console.error(`error code: ${err.code}, message: ${err.message}.`)\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）当需要停止合成及播报时，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#stop",
            children: "stop"
          }), "接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ttsEngine.stop();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）当需要查询文本转语音服务是否处于忙碌状态时，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#isbusy",
            children: "isBusy"
          }), "接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ttsEngine.isBusy();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）当需要查询支持的语种音色信息时，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech#listvoices",
            children: "listVoices"
          }), "接口。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["listVoices接口提供了两种调用形式，当前以其中一种作为示例，其他方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech",
            children: "API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在组件中声明并初始化字符串voiceInfo\n@State voiceInfo: string = \"\";\n\n// 设置查询相关参数\nlet voicesQuery: textToSpeech.VoiceQuery = {\n  requestId: '12345678', // requestId在同一实例内仅能用一次，请勿重复设置\n  online: 1\n};\n// 调用listVoices方法，以callback返回\nttsEngine.listVoices(voicesQuery, (err: BusinessError, voiceInfo: textToSpeech.VoiceInfo[]) => {\n  if (!err) {\n    // 接收目前支持的语种音色等信息\n    this.voiceInfo = JSON.stringify(voiceInfo);\n    console.info(`Succeeded in listing voices, voiceInfo is ${this.voiceInfo}`);\n  } else {\n    console.error(`Failed to list voices. Code: ${err.code}, message: ${err.message}`);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置播报策略",
      children: "设置播报策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于不同场景下，模型自动判断所选择的播报策略可能与实际需求不同，此章节提供对于播报策略进行主动设置的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(526448)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下取值说明均为有效取值，若所使用的数值在有效取值之外则播报结果可能与预期不符，并产生错误的播报结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置单词播报方式",
      children: "设置单词播报方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本格式：[hN] (N=0/1/2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "N取值说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智能判断单词播放方式。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逐个字母进行播报。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以单词方式进行播报。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"hello[h1] world\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hello使用单词发音，world及后续单词将会逐个字母进行发音。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置数字播报策略",
      children: "设置数字播报策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式：[nN] (N=0/1/2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "N取值说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智能判断数字处理策略。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为号码逐个数字播报。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为数值播报。超过18位数字不支持，自动按逐个数字进行播报。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"[n2]123[n1]456[n0]\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，123将会按照数值播报，456则会按照号码播报，而后的文本中的数字，均会自动判断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "插入静音停顿",
      children: "插入静音停顿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式：[pN]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述：N为无符号整数，单位为ms。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"你好[p500]小艺\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该句播报时，将会在“你好”后插入500ms的静音停顿。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定汉字发音",
      children: "指定汉字发音"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "汉字的声调，通过在拼音后接一位数字1~5分别表示阴平、阳平、上声、去声和轻声5个声调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式：[=MN]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述：M表示拼音，N表示声调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "N取值说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阴平"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阳平"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上声"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去声"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轻声"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"着[=zhuo2]手\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“着”字将读作“zhuó”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮，播报一段文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { textToSpeech } from '@kit.CoreSpeechKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { PromptAction } from '@kit.ArkUI';\nimport { UIContext } from '@kit.ArkUI';\nimport { TreeMap } from '@kit.ArkTS';\nimport { fileIo } from '@kit.CoreFileKit';\nimport PcmPlayer from './PcmPlayer';\nimport { audio } from '@kit.AudioKit';\nimport { Context } from '@kit.AbilityKit';\n\nconst TAG: string = 'TtsDemo';\nlet ttsEngine: textToSpeech.TextToSpeechEngine;\nlet bufferLength: number = 0;\nlet engineCreated: boolean = false;\n\n// 定义一个函数来拼接ArrayBuffer\nfunction concatenateArrayBuffers(buffers: ArrayBuffer[]): ArrayBuffer {\n  const totalLength = buffers.reduce((sum, buffer) => sum + buffer.byteLength, 0);\n  const concatenatedBuffer = new ArrayBuffer(totalLength);\n  let offset = 0;\n  for (const buffer of buffers) {\n    const uint8Array = new Uint8Array(buffer);\n    new Uint8Array(concatenatedBuffer, offset, uint8Array.length).set(uint8Array);\n    offset += uint8Array.length;\n  }\n  return concatenatedBuffer;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State createCount: number = 0;\n  // 设置播报内容\n  @State originalText: string = \"\\n\\t\\t古人学问无遗力，少壮工夫老始成；\\n\\t\\t\" + \"纸上得来终觉浅，绝知此事要躬行。\\n\\t\\t\";\n  @State uiContext: UIContext = this.getUIContext()\n  @State promptAction: PromptAction = this.uiContext.getPromptAction();\n  private pcmData: TreeMap<number, Uint8Array> = new TreeMap();\n  private pcmPlayer: PcmPlayer = new PcmPlayer();\n\n  build() {\n    Column() {\n      Scroll() {\n        Column() {\n          TextArea({ placeholder: 'Please enter tts original text', text: `${this.originalText}` })\n            .margin(20)\n            .focusable(false)\n            .border({ width: 5, color: 0x317AE7, radius: 10, style: BorderStyle.Dotted })\n            .onChange((value: string) => {\n              this.originalText = value;\n              console.info(TAG, \"original text: \" + this.originalText);\n            })\n\n          Button() {\n            Text(\"CreateEngine\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            engineCreated = true\n            this.createCount++;\n            console.info(`createByCallback: createCount:${this.createCount}`);\n            this.createByCallback();\n            try {\n              this.promptAction.showToast({\n                message: 'CreateEngine success!',\n                duration: 2000\n              });\n            }catch (error) {\n              let message = (error as BusinessError).message;\n              let code = (error as BusinessError).code;\n              console.error(`showToast args error code is ${code}, message is ${message}`);\n            };\n          })\n\n          Button() {\n            Text(\"speak\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            if (engineCreated) {\n              try {\n                this.speak();\n                try {\n                  this.promptAction.showToast({\n                    message: 'start speaking',\n                    duration: 2000\n                  });\n                }catch (error) {\n                  let message = (error as BusinessError).message;\n                  let code = (error as BusinessError).code;\n                  console.error(`showToast args error code is ${code}, message is ${message}`);\n                };\n              } catch (err)  {\n                try {\n                  this.promptAction.showToast({\n                    message: 'start speaking failed',\n                    duration: 2000\n                  });\n                }catch (error) {\n                  let message = (error as BusinessError).message;\n                  let code = (error as BusinessError).code;\n                  console.error(`showToast args error code is ${code}, message is ${message}`);\n                };\n              }\n            } else {\n              try {\n                this.promptAction.showToast({\n                  message: 'The engine has not been created',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }\n          })\n\n          Button() {\n            Text(\"speakOnData\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            if (engineCreated) {\n              try {\n                void this.speakOnData();\n                try {\n                  this.promptAction.showToast({\n                    message: 'start speakOnData',\n                    duration: 2000\n                  });\n                }catch (error) {\n                  let message = (error as BusinessError).message;\n                  let code = (error as BusinessError).code;\n                  console.error(`showToast args error code is ${code}, message is ${message}`);\n                };\n              } catch (err) {\n                try {\n                  this.promptAction.showToast({\n                    message: 'start speakOnData failed',\n                    duration: 2000\n                  });\n                }catch (error) {\n                  let message = (error as BusinessError).message;\n                  let code = (error as BusinessError).code;\n                  console.error(`showToast args error code is ${code}, message is ${message}`);\n                };\n              }\n            } else {\n              try {\n                this.promptAction.showToast({\n                  message: 'The engine has not been created',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }\n          })\n\n          Button() {\n            Text(\"stop\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            try {\n              let isBusy: boolean = ttsEngine.isBusy();\n              let isPlaying: boolean = this.pcmPlayer.isPlaying();\n              if (isBusy) {\n                ttsEngine.stop();\n              }\n              if (isPlaying) {\n                this.pcmPlayer.stop()\n              }\n              try {\n                this.promptAction.showToast({\n                  message: 'stop!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            } catch (err) {\n              try {\n                this.promptAction.showToast({\n                  message: 'stop failed',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }\n          })\n\n          Button() {\n            Text(\"isBusy\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            try {\n              let isBusy: boolean = ttsEngine.isBusy();\n              let isPlaying: boolean = this.pcmPlayer.isPlaying();\n              console.info('isBusy :' + isBusy);\n              console.info('isPlaying :' + isPlaying);\n              try {\n                this.promptAction.showToast({\n                  message: 'speak isBusy :' + isBusy + '\\nspeakOnData isBusy :' + isPlaying,\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            } catch (err) {\n              try {\n                this.promptAction.showToast({\n                  message: 'isBusy failed',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }\n          })\n\n          Button() {\n            Text(\"shutdown\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AA7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            try {\n              this.pcmPlayer.release()\n              ttsEngine.shutdown();\n              engineCreated = false\n              try {\n                this.promptAction.showToast({\n                  message: 'shutdown success!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            } catch (err) {\n              try {\n                this.promptAction.showToast({\n                  message: 'shutdown failed',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }\n          })\n\n        }\n        .layoutWeight(1)\n      }\n      .width('100%')\n      .height('100%')\n\n    }\n  }\n\n  // 创建引擎，通过callback形式返回\n  // 当引擎不存在、引擎资源不存在、初始化超时，返回错误码1002300005，引擎创建失败\n  private createByCallback() {\n    // 设置创建引擎参数\n    let extraParam: Record<string, Object> = { \"style\": 'interaction-broadcast', \"locate\": 'CN', \"name\": 'EngineName' }\n    let initParamsInfo: textToSpeech.CreateEngineParams = {\n      language: 'zh-CN',\n      person: 0,\n      online: 1,\n      extraParams: extraParam\n    };\n    try {\n      // 调用createEngine方法\n      textToSpeech.createEngine(initParamsInfo, (err: BusinessError, textToSpeechEngine: textToSpeech.TextToSpeechEngine) => {\n        if (!err) {\n          console.info('createEngine is success');\n          // 接收创建引擎的实例\n          ttsEngine = textToSpeechEngine;\n        } else {\n          console.error(`error code: ${err.code}, message: ${err.message}.`)\n        }\n      });\n    } catch (error) {\n      let message = (error as BusinessError).message;\n      let code = (error as BusinessError).code;\n      console.error(`createEngine failed, error code: ${code}, message: ${message}.`)\n    }\n  }\n\n  // 调用speak播报方法\n  private speak() {\n    let speakListener: textToSpeech.SpeakListener = {\n      // 开始播报回调\n      onStart(requestId: string, response: textToSpeech.StartResponse) {\n        console.info(`onStart, requestId: ${requestId} response: ${JSON.stringify(response)}`);\n      },\n      // 完成播报回调\n      onComplete(requestId: string, response: textToSpeech.CompleteResponse) {\n        console.info(`onComplete, requestId: ${requestId} response: ${JSON.stringify(response)}`);\n      },\n      // 停止播报完成回调，调用stop方法并完成时会触发此回调\n      onStop(requestId: string, response: textToSpeech.StopResponse) {\n        console.info(`onStop, requestId: ${requestId} response: ${JSON.stringify(response)}`);\n      },\n      // 返回音频流\n      onData(requestId: string, audio: ArrayBuffer, response: textToSpeech.SynthesisResponse) {\n        console.info(`onData, requestId: ${requestId} sequence: ${JSON.stringify(response)} audio: ${JSON.stringify(audio)}`);\n      },\n      // 错误回调，播报过程发生错误时触发此回调\n      onError(requestId: string, errorCode: number, errorMessage: string) {\n        if (errorCode === 1002300007) {\n          engineCreated = false\n        }\n        console.error(`onError, requestId: ${requestId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n      }\n    };\n    // 设置回调\n    ttsEngine.setListener(speakListener);\n    // 设置播报相关参数\n    let extraParam: Record<string, Object> = {\"queueMode\": 0, \"speed\": 1, \"volume\": 2, \"pitch\": 1, \"languageContext\": 'zh-CN', \"audioType\": \"pcm\", \"soundChannel\": 3, \"playType\":1}\n    let speakParams: textToSpeech.SpeakParams = {\n      requestId: '123456' + Date.now(), // requestId在同一实例内仅能用一次，请勿重复设置\n      extraParams: extraParam\n    };\n    // 调用speak播报方法\n    try {\n      ttsEngine.speak(this.originalText, speakParams);\n    } catch (err) {\n      console.error(TAG, `error code: ${err.code}, message: ${err.message}.`)\n    }\n  }\n\n  private onStart = (utteranceId: string, response: textToSpeech.StartResponse) => {\n    bufferLength = 0;\n    // 初始化音频数据映射\n    console.info(TAG, `onStart | utteranceId: ${ utteranceId }, response: ${JSON.stringify(response)}`);\n  }\n\n  private onData = (utteranceId: string, audio: ArrayBuffer, response: textToSpeech.SynthesisResponse) => {\n    // 将ArrayBuffer转换为Uint8Array\n    let uint8Array: Uint8Array = new Uint8Array(audio);\n    this.pcmData.set(response.sequence, uint8Array)\n    bufferLength += 1\n    let str = \"\"\n    // 或者使用循环打印每个元素\n    for (let i = 0; i < uint8Array.length; i++) {\n      str = str + (\",\"+uint8Array[i]);\n    }\n    console.info(TAG, `onData | utteranceId: ${utteranceId}, sequence: ${JSON.stringify(response.sequence)}, length: ${uint8Array.length}, audio: ${JSON.stringify(str)}`);\n  }\n\n  private onComplete = (utteranceId: string, response: textToSpeech.CompleteResponse) => {\n    let buffers: ArrayBuffer[] = new Array();\n\n    console.info(TAG, `pcmData len: ${this.pcmData.length}`)\n    // 遍历Map，将ArrayBuffer添加到数组中\n    try {\n      this.pcmData?.forEach((value: Uint8Array) => {\n        buffers.push(value.buffer.slice(0))\n      })\n    } catch (forEachErr) {\n      console.error(TAG, 'pcmData forEach failed:', forEachErr);\n    }\n    console.info(TAG, `buffers len: ${buffers.length}`)\n\n    // 按照顺序拼接所有的ArrayBuffer\n    let audioData = concatenateArrayBuffers(buffers);\n    console.info(TAG, `audioData len: ${audioData.byteLength}`)\n\n    let context = this.uiContext.getHostContext() as Context\n    let path = context.filesDir\n    let filePath: string = `${path}/my.pcm`\n    fileIo.createStream(filePath, \"w+\")\n      .then(os => os.write(audioData).catch((e: BusinessError) => { throw new Error(`Write failed: ${e}`) }))\n      .then((): Promise<void> => {\n        try {\n          this.pcmPlayer.file = fileIo.openSync(filePath, fileIo.OpenMode.READ_ONLY);\n          return this.pcmPlayer.prepare(audio.AudioSamplingRate.SAMPLE_RATE_16000);\n        } catch (e) { throw new Error(`Open failed: ${e}`) }\n      })\n      .then(() => this.pcmPlayer.play(audioData))\n      .catch((err: BusinessError) => console.error(TAG, `Error: ${err}`));\n\n    console.info(TAG, `onComplete | utteranceId: ${utteranceId}, response: ${JSON.stringify(response)}`);\n  }\n\n  // 调用speakOnData播报方法\n  // 未初始化引擎时调用speak方法，返回错误码1002300007，合成及播报失败\n  private speakOnData() {\n    // 设置播报相关参数\n    let extraParam: Record<string, Object> = {\"queueMode\": 0, \"speed\": 1.2, \"volume\": 2, \"pitch\": 1, \"languageContext\": 'zh-CN', \"audioType\": \"pcm\", \"soundChannel\": 1, \"playType\":0}\n    let speakParams: textToSpeech.SpeakParams = {\n      requestId: '1234567' + Date.now(),\n      extraParams: extraParam\n    }\n\n    try{\n      // 创建回调对象\n      let speakListener: textToSpeech.SpeakListener = {\n        // 开始识别成功回调\n        onStart: this.onStart,\n        // 识别完成回调\n        onComplete: this.onComplete,\n        // 停止播报回调\n        onStop(utteranceId: string, response: textToSpeech.StopResponse) {\n          console.info('speakListener onStop: ' + ' utteranceId: ' + utteranceId + ' response: ' + JSON.stringify(response));\n        },\n        // 返回音频流\n        onData: this.onData,\n        // 错误回调\n        onError(utteranceId: string, errorCode: number, errorMessage: string) {\n          if (errorCode === 1002300007) {\n            engineCreated = false\n          }\n          console.error('speakListener onError: ' + ' utteranceId: ' + utteranceId + ' errorCode: ' + errorCode + ' errorMessage: ' + errorMessage);\n        }\n      };\n      // 设置回调\n      ttsEngine.setListener(speakListener);\n      try{\n        console.info(`speakListener before speak`)\n        // 调用speak播报方法\n        for (let i = 0; i < 1; i++) {\n          ttsEngine?.speak(this.originalText, speakParams);\n        }\n        console.info(`speakListener after speak`)\n      }catch (error) {\n        let message = (error as BusinessError).message;\n        let code = (error as BusinessError).code;\n        console.error(`speakListener speak failed, error code: ${code}, message: ${message}.`)\n      }\n    }catch (error) {\n      let message = (error as BusinessError).message;\n      let code = (error as BusinessError).code;\n      console.error(`speakListener setListener failed, error code: ${code}, message: ${message}.`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pcmplayerets",
      children: "PcmPlayer.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { fileIo } from '@kit.CoreFileKit';\n\nconst TAG = 'PCM_audio';\n\nclass Options {\n  offset?: number;\n  length?: number;\n}\n\nexport default class PcmPlayer {\n\n  public file: fileIo.File | undefined;\n  private writeDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: this.bufferSize,\n      length: buffer.byteLength\n    };\n\n    try {\n      fileIo.readSync(this.file?.fd, buffer, options);\n      this.bufferSize += buffer.byteLength;\n      if (this.audioDataSize < this.bufferSize) {\n        this.renderModel?.off('writeData');\n        void this.stop()\n      }\n      console.info(TAG, 'reading file success');\n      // 系统会判定buffer有效，正常播放。\n      return audio.AudioDataCallbackResult.VALID;\n    } catch (error) {\n      console.error(TAG, `Reading file failed, error code: ${error.code}, message: ${error.message}.`)\n      // 系统会判定buffer无效，不播放。\n      return audio.AudioDataCallbackResult.INVALID;\n    }\n  };\n  /**\n   * 缓存大小\n   */\n  private bufferSize: number = 0;\n  /**\n   * 音频总大小\n   */\n  private audioDataSize: number = 0;\n  /**\n   * 播放器\n   */\n  private renderModel: audio.AudioRenderer | null = null;\n  /**\n   * 播放状态\n   */\n  private audioStreamInfo: audio.AudioStreamInfo = {\n    samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_16000, // 采样率\n    channels: audio.AudioChannel.CHANNEL_1, // 通道\n    sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式\n    encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式\n  }\n  private audioRendererInfo: audio.AudioRendererInfo = {\n    usage: audio.StreamUsage.STREAM_USAGE_ACCESSIBILITY, // 音频流使用类型\n    rendererFlags: 0 // 音频渲染器标志\n  }\n  private audioRendererOptions: audio.AudioRendererOptions = {\n    streamInfo: this.audioStreamInfo,\n    rendererInfo: this.audioRendererInfo\n  }\n\n  public async prepare(sampleRate: number) {\n    this.audioRendererOptions.streamInfo.samplingRate = sampleRate;\n    this.audioRendererOptions.rendererInfo.usage = audio.StreamUsage.STREAM_USAGE_MUSIC;\n    if (this.renderModel != null) {\n      await this.renderModel.release();\n    }\n    let renderModel = await audio.createAudioRenderer(this.audioRendererOptions);\n    if (!renderModel) {\n      console.error(TAG, `failed to create audio renderer`);\n    }\n    console.info(TAG, \"creating AudioRenderer success\");\n    this.renderModel = renderModel;\n    this.bufferSize = await this.renderModel.getBufferSize();\n  }\n\n  public async play(data: ArrayBuffer): Promise<number> {\n    this.audioDataSize = data.byteLength\n    if (this.renderModel != null) {\n      try {\n        this.renderModel.on('writeData', this.writeDataCallback);\n      } catch (err) {\n        console.error(`error code: ${err.code}, message: ${err.message}.`)\n      }\n      // 启动渲染\n      await this.renderModel.start();\n      console.info(TAG, \"start AudioRenderer success\");\n    }\n    return -1;\n  }\n\n  public async stop() {\n    console.info(TAG, 'Renderer begin stop');\n    if (this.renderModel == null) {\n      return;\n    }\n\n    // 只有渲染器状态为running或paused的时候才可以停止\n    if (this.renderModel.state !== audio.AudioState.STATE_RUNNING\n      && this.renderModel.state !== audio.AudioState.STATE_PAUSED) {\n      console.error(TAG, 'Renderer is not running or paused');\n      return;\n    }\n    await this.renderModel.stop(); // 停止渲染\n    console.info(TAG, 'Renderer stopped');\n  }\n\n  public async release() {\n    // 渲染器状态不是released状态，才能release\n    if (this.renderModel != null) {\n      if (this.renderModel.state === audio.AudioState.STATE_RELEASED) {\n        console.error(TAG, 'Renderer already released');\n        return;\n      }\n      await this.renderModel.release(); // 释放资源\n      this.renderModel = null;\n      console.info(TAG, 'Renderer released');\n    }\n  }\n\n  /**\n   * 判断当前渲染状态\n   *\n   * @returns running返回true，否则返回false\n   */\n  public isPlaying() {\n    if (this.renderModel != null) {\n      console.info(TAG, \"player.state:\" + this.renderModel.state);\n      return this.renderModel.state == audio.AudioState.STATE_RUNNING;\n    } else {\n      return false;\n    }\n  }\n\n  /**\n   * 获取当前渲染状态\n   *\n   * @returns running返回true，否则返回false\n   */\n  public getRenderState(): number {\n    if (this.renderModel != null) {\n      console.info(TAG, \"player.state:\" + this.renderModel.state);\n      return this.renderModel.state;\n    } else {\n      return audio.AudioState.STATE_INVALID;\n    }\n  }\n\n  /**\n   * 获取音频渲染器的最小缓冲区大小\n   */\n  public getBufferSize(): number {\n    return this.bufferSize;\n  }\n}\n"
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
526448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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