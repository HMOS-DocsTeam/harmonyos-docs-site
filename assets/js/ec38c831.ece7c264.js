"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["802596"], {
919498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_speech_kit_guide_speechrecognizer_guide_speechrecognizer_guide_md_ec3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-speech-kit-guide-speechrecognizer-guide-speechrecognizer-guide-md-ec3.json
var site_docs_core_speech_kit_guide_speechrecognizer_guide_speechrecognizer_guide_md_ec3_namespaceObject = JSON.parse('{"id":"core-speech-kit-guide/speechrecognizer-guide/speechrecognizer-guide","title":"语音识别","description":"将一段中文音频信息（中文、中文语境下的英文；短语音模式不超过60s，长语音模式不超过8h）转换为文本，音频信息可以为PCM音频文件或者实时语音。","source":"@site/docs/core-speech-kit-guide/speechrecognizer-guide/speechrecognizer-guide.md","sourceDirName":"core-speech-kit-guide/speechrecognizer-guide","slug":"/core-speech-kit-guide/speechrecognizer-guide/","permalink":"/harmonyos-docs-site/core-speech-kit-guide/speechrecognizer-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"语音识别","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/speechrecognizer-guide","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文本转语音","permalink":"/harmonyos-docs-site/core-speech-kit-guide/texttospeech-guide/"},"next":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/core-speech-kit-guide/corespeechkit-personal-data/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-speech-kit-guide/speechrecognizer-guide/speechrecognizer-guide.md


const frontMatter = {
	title: '语音识别',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/speechrecognizer-guide',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '语音识别';

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
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}, {
  "value": "Index.ets",
  "id": "indexets",
  "level": 3
}, {
  "value": "FileCapturer.ets",
  "id": "filecapturerets",
  "level": 3
}, {
  "value": "EntryAbility.ets",
  "id": "entryabilityets",
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
        id: "语音识别",
        children: "语音识别"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一段中文音频信息（中文、中文语境下的英文；短语音模式不超过60s，长语音模式不超过8h）转换为文本，音频信息可以为PCM音频文件或者实时语音。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手机/平板等设备在无网状态下，为听障人士或不方便收听音频场景提供音频转文本能力。"
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
            children: "语音识别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持的语种类型：中文普通话。  - 支持的模型类型：离线。  - 语音时长：短语音模式不超过60s，长语音模式不超过8h。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用语音识别时，将实现语音识别相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#speechrecognizercreateengine",
            children: "createEngine"
          }), "方法，对引擎进行初始化，并创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#speechrecognitionengine",
            children: "SpeechRecognitionEngine"
          }), "实例。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["createEngine方法提供了两种调用形式，当前以其中一种作为示例，其他方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer",
            children: "API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n// 设置独立的sessionId\nlet sessionId: string = '123456';\n// 创建引擎，通过callback形式返回\n// 设置创建引擎参数\nlet extraParam: Record<string, Object> = {\"locate\": \"CN\", \"recognizerMode\": \"short\"};\nlet initParamsInfo: speechRecognizer.CreateEngineParams = {\n  language: 'zh-CN',\n  online: 1,\n  extraParams: extraParam\n};\n// 调用createEngine方法\nspeechRecognizer.createEngine(initParamsInfo, (err: BusinessError, speechRecognitionEngine: speechRecognizer.SpeechRecognitionEngine) => {\n  if (!err) {\n    console.info('Succeeded in creating engine.');\n    // 接收创建引擎的实例\n    asrEngine = speechRecognitionEngine;\n  } else {\n    console.error(`Failed to create engine. Code: ${err.code}, message: ${err.message}.`);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["得到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#speechrecognitionengine",
            children: "SpeechRecognitionEngine"
          }), "实例对象后，实例化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#recognitionlistener",
            children: "RecognitionListener"
          }), "对象，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#setlistener",
            children: "setListener"
          }), "方法设置回调，用来接收语音识别相关的回调信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建回调对象\nlet setListener: speechRecognizer.RecognitionListener = {\n  // 开始识别成功回调\n  onStart(sessionId: string, eventMessage: string) {\n    console.info(`onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 事件回调\n  onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n    console.info(`onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n  },\n  // 识别结果回调，包括中间结果和最终结果\n  onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult) {\n    console.info(`onResult, sessionId: ${sessionId} result: ${JSON.stringify(result)}`);\n  },\n  // 识别完成回调\n  onComplete(sessionId: string, eventMessage: string) {\n    console.info(`onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n  },\n  // 错误回调，错误码通过本方法返回\n  onError(sessionId: string, errorCode: number, errorMessage: string) {\n    console.error(`onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n  },\n}\n// 设置回调\nasrEngine?.setListener(setListener);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分别为音频文件转文字和麦克风转文字功能设置开始识别的相关参数，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#startlistening",
            children: "startListening"
          }), "方法，开始识别。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private startListeningForRecording() {\n  let audioParam: speechRecognizer.AudioInfo = { audioType: 'pcm', sampleRate: 16000, soundChannel: 1, sampleBit: 16 }// audioInfo参数配置请参考AudioInfo\n  let extraParam: Record<string, Object> = {\n    \"recognitionMode\": 0,\n    \"vadBegin\": 2000,\n    \"vadEnd\": 3000,\n    \"maxAudioDuration\": 20000\n  }\n  let recognizerParams: speechRecognizer.StartParams = {\n    sessionId: this.sessionId,\n    audioInfo: audioParam,\n    extraParams: extraParam\n  }\n  console.info('startListening start');\n  asrEngine?.startListening(recognizerParams);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["传入音频流，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#writeaudio",
            children: "writeAudio"
          }), "方法，开始写入音频流。读取音频文件时，开发者需预先准备一个pcm格式音频文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uint8Array: Uint8Array = new Uint8Array();\n// 可以通过如下方式获取音频流：1、通过录音获取音频流；2、从音频文件中读取音频流\n// 写入音频流，音频流长度仅支持640或1280\nasrEngine?.writeAudio(sessionId, uint8Array);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(82109)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如需通过录音获取音频流，请打开麦克风权限，参考步骤10配置相关权限。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如需从音频文件中读取音频流，请在项目中的main\\resources\\resfile路径下存放pcm文件。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）当需要查询语音识别服务支持的语种信息，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#listlanguages",
            children: "listLanguages"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["listLanguages方法提供了两种调用形式，当前以其中一种作为示例，其他方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer",
            children: "API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置查询相关的参数\nlet languageQuery: speechRecognizer.LanguageQuery = {\n  sessionId: sessionId\n};\n// 调用listLanguages方法\nasrEngine?.listLanguages(languageQuery).then((res: Array<string>) => {\n  console.info(`Succeeded in listing languages.`);\n}).catch((err: BusinessError) => {\n  console.error(`Failed to list languages. Code: ${err.code}, message: ${err.message}.`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）当需要结束识别时，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#finish",
            children: "finish"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 结束识别\nasrEngine?.finish(sessionId);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）当需要取消识别时，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#cancel",
            children: "cancel"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 取消识别\nasrEngine?.cancel(sessionId);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）当需要释放语音识别引擎资源时，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-speech-api/core-speech-arkts/hms-ai-speechrecognizer/hms-ai-speechrecognizer#shutdown",
            children: "shutdown"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放识别引擎资源\nasrEngine?.shutdown();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中添加ohos.permission.MICROPHONE权限，确保麦克风使用正常。详细步骤可查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "章节。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\n\"requestPermissions\": [\n  {\n    \"name\" : \"ohos.permission.MICROPHONE\",\n    \"reason\": \"$string:reason\",\n    \"usedScene\": {\n      \"abilities\": [\n        \"EntryAbility\"\n      ],\n      \"when\":\"inuse\"\n    }\n  }\n],\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮，将一段音频信息转换为文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { speechRecognizer } from '@kit.CoreSpeechKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { PromptAction } from '@kit.ArkUI';\nimport FileCapturer from './FileCapturer';\n\nconst TAG = 'AsrDemo';\n\nlet asrEngine: speechRecognizer.SpeechRecognitionEngine | undefined = undefined;\n\n@Entry\n@Component\nstruct Index {\n  @State createCount: number = 0;\n  @State result: boolean = false;\n  @State voiceInfo: string = \"\";\n  // 设置独立的sessionId\n  @State sessionId: string = \"123456\";\n  @State sessionId2: string = \"1234567\";\n  @State generatedText: string = \"Default Text\";\n  @State uiContext: UIContext = this.getUIContext()\n  @State promptAction: PromptAction = this.uiContext.getPromptAction();\n\n  private mFileCapturer: FileCapturer = new FileCapturer();\n\n  build() {\n    Column() {\n      Scroll() {\n        Column() {\n          Row() {\n            Column() {\n              Text(this.generatedText)\n                .fontColor($r('sys.color.ohos_id_color_text_secondary'))\n            }\n            .width('100%')\n            .constraintSize({ minHeight: 100 })\n            .border({ width: 1, radius: 5 })\n            .backgroundColor('#d3d3d3')\n            .padding(20)\n            .alignItems(HorizontalAlign.Start)\n          }\n          .width('100%')\n          .padding({ left: 20, right: 20, top: 20, bottom: 20 })\n\n          Button() {\n            Text(\"CreateEngineByCallback\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            this.createByCallback();\n            this.createCount++;\n            console.info(TAG, `CreateAsrEngine: createCount:${this.createCount}`);\n\n            this.sleep(500).then(() => {\n              this.setListener();\n              try {\n                this.promptAction.showToast({\n                  message: 'CreateEngine succeeded!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }).catch((err: BusinessError) => {\n              console.error(TAG, `Error in create engine: ${err}`);\n              try {\n                this.promptAction.showToast({\n                  message: 'CreateEngine failed!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            });\n          })\n\n          Button() {\n            Text(\"startRecording\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            this.startRecording();\n            try {\n              this.promptAction.showToast({\n                message: 'start Recording',\n                duration: 2000\n              });\n            }catch (error) {\n              let message = (error as BusinessError).message;\n              let code = (error as BusinessError).code;\n              console.error(`showToast args error code is ${code}, message is ${message}`);\n            };\n          })\n\n          Button() {\n            Text(\"audioToText\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            void this.audioToText();\n            try {\n              this.promptAction.showToast({\n                message: 'start audioToText',\n                duration: 2000\n              });\n            }catch (error) {\n              let message = (error as BusinessError).message;\n              let code = (error as BusinessError).code;\n              console.error(`showToast args error code is ${code}, message is ${message}`);\n            };\n          })\n\n          Button() {\n            Text(\"queryLanguagesCallback\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AE7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            try{\n              this.queryLanguagesCallback();\n              try {\n                this.promptAction.showToast({\n                  message: 'queryLanguages succeeded!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            } catch (err) {\n              this.generatedText = `Failed to query language information. message: ${err.message}.`\n              try {\n                this.promptAction.showToast({\n                  message: 'queryLanguages failed!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }\n          })\n\n          Button() {\n            Text(\"shutdown\")\n              .fontColor(Color.White)\n              .fontSize(20)\n          }\n          .type(ButtonType.Capsule)\n          .backgroundColor(\"#0x317AA7\")\n          .width(\"80%\")\n          .height(50)\n          .margin(10)\n          .onClick(() => {\n            // 释放引擎\n            try{\n              asrEngine?.shutdown();\n              this.generatedText = `The engine has been released.`\n              try {\n                this.promptAction.showToast({\n                  message: 'shutdown succeeded!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            } catch (err) {\n              this.generatedText = `Failed to release engine. message: ${err.message}.`\n              try {\n                this.promptAction.showToast({\n                  message: 'shutdown failed!',\n                  duration: 2000\n                });\n              }catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showToast args error code is ${code}, message is ${message}`);\n              };\n            }\n          })\n        }\n        .layoutWeight(1)\n      }\n      .width('100%')\n      .height('100%')\n\n    }\n  }\n\n\n  // 创建引擎，通过callback形式返回\n  private createByCallback() {\n    // 设置创建引擎参数\n    let extraParam: Record<string, Object> = {\"locate\": \"CN\", \"recognizerMode\": \"short\"};\n    let initParamsInfo: speechRecognizer.CreateEngineParams = {\n      language: 'zh-CN',\n      online: 1,\n      extraParams: extraParam\n    };\n\n    // 调用createEngine方法\n    speechRecognizer.createEngine(initParamsInfo, (err: BusinessError, speechRecognitionEngine:\n      speechRecognizer.SpeechRecognitionEngine) => {\n      if (!err) {\n        console.info(TAG, 'succeeded in creating engine.');\n        // 接收创建引擎的实例\n        asrEngine = speechRecognitionEngine;\n      } else {\n        // 无法创建引擎时返回错误码1002200001，原因：语种不支持、模式不支持、初始化超时、资源不存在等导致创建引擎失败\n        // 无法创建引擎时返回错误码1002200006，原因：引擎正在忙碌中，一般多个应用同时调用语音识别引擎时触发\n        // 无法创建引擎时返回错误码1002200008，原因：引擎已被销毁\n        console.error(TAG, `Failed to create engine. Message: ${err.message}.`);\n      }\n    });\n  }\n\n  // 查询语种信息，以callback形式返回\n  private queryLanguagesCallback() {\n    // 设置查询相关参数\n    let languageQuery: speechRecognizer.LanguageQuery = {\n      sessionId: this.sessionId\n    };\n    // 调用listLanguages方法\n    asrEngine?.listLanguages(languageQuery, (err: BusinessError, languages: Array<string>) => {\n      if (!err) {\n        // 接收目前支持的语种信息\n        console.info(TAG, `succeeded in listing languages, result: ${JSON.stringify(languages)}`);\n        this.generatedText = `languages result: ${JSON.stringify(languages)}`\n      } else {\n        console.error(TAG, `Failed to create engine. Message: ${err.message}.`);\n        this.generatedText = `Failed to create engine. Message: ${err.message}.`\n      }\n    });\n  }\n\n  private startListeningForRecording() {\n    let audioParam: speechRecognizer.AudioInfo = { audioType: 'pcm', sampleRate: 16000, soundChannel: 1, sampleBit: 16 } // audioInfo参数配置请参考AudioInfo\n    let extraParam: Record<string, Object> = {\n      \"recognitionMode\": 0,\n      \"vadBegin\": 2000,\n      \"vadEnd\": 3000,\n      \"maxAudioDuration\": 20000\n    }\n    let recognizerParams: speechRecognizer.StartParams = {\n      sessionId: this.sessionId,\n      audioInfo: audioParam,\n      extraParams: extraParam\n    }\n    console.info(TAG, 'startListening start');\n    try {\n      asrEngine?.startListening(recognizerParams);\n    } catch (err) {\n      console.error(`error code: ${err.code}, message: ${err.message}.`)\n    }\n  }\n\n  // 写音频流\n  private async audioToText() {\n    try {\n      this.setListener();\n      // Set the parameters related to the start of identification.\n      let audioParam: speechRecognizer.AudioInfo = { audioType: 'pcm', sampleRate: 16000, soundChannel: 1, sampleBit: 16 }\n      let recognizerParams: speechRecognizer.StartParams = {\n        sessionId: this.sessionId2,\n        audioInfo: audioParam\n      }\n      // Invoke the start recognition method.\n      asrEngine?.startListening(recognizerParams);\n\n      // Get Audio from File\n      let data: ArrayBuffer | undefined = undefined;\n      let ctx = this.getUIContext().getHostContext() as Context;\n      let filenames: string[] = fileIo.listFileSync(ctx.resourceDir);\n      if (filenames.length <= 0) {\n        console.error('length is null');\n        return;\n      }\n      let filePath: string = ctx.resourceDir + '/' + filenames[0];\n      (this.mFileCapturer as FileCapturer).setFilePath(filePath);\n      this.mFileCapturer.init((dataBuffer: ArrayBuffer) => {\n        data = dataBuffer\n        let uint8Array: Uint8Array = new Uint8Array(data);\n        asrEngine?.writeAudio(this.sessionId2, uint8Array);\n      });\n      await this.mFileCapturer.start();\n      asrEngine?.finish(this.sessionId);\n      this.mFileCapturer.release();\n    } catch (err) {\n      this.generatedText = `Message: ${err.message}.`\n    }\n  }\n\n  // 麦克风语音转文本\n  private startRecording() {\n    try {\n      this.startListeningForRecording();\n    } catch (err) {\n      this.generatedText = `Message: ${err.message}.`;\n    }\n  }\n\n  // 睡眠\n  private async sleep(ms: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n\n  // 设置回调\n  private setListener() {\n    // 创建回调对象\n    let setListener: speechRecognizer.RecognitionListener = {\n      // 开始识别成功回调\n      onStart: (sessionId: string, eventMessage: string) => {\n        this.generatedText = '';\n        console.info(TAG, `onStart, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n      },\n      // 事件回调\n      onEvent(sessionId: string, eventCode: number, eventMessage: string) {\n        console.info(TAG, `onEvent, sessionId: ${sessionId} eventCode: ${eventCode} eventMessage: ${eventMessage}`);\n      },\n      // 识别结果回调，包括中间结果和最终结果\n      onResult: (sessionId: string, result: speechRecognizer.SpeechRecognitionResult) => {\n        console.info(TAG, `onResult, sessionId: ${sessionId} result: ${JSON.stringify(result)}`);\n        this.generatedText = result.result;\n      },\n      // 识别完成回调\n      onComplete(sessionId: string, eventMessage: string) {\n        console.info(TAG, `onComplete, sessionId: ${sessionId} eventMessage: ${eventMessage}`);\n      },\n      // 错误回调，错误码通过本方法返回\n      onError(sessionId: string, errorCode: number, errorMessage: string) {\n        console.error(TAG, `onError, sessionId: ${sessionId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);\n      },\n    }\n    // 设置回调\n    asrEngine?.setListener(setListener);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filecapturerets",
      children: "FileCapturer.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加FileCapturer.ets文件用于pcm文件音频流。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo } from '@kit.CoreFileKit';\n\nconst TAG = 'FileCapturer';\nconst SEND_SIZE: number = 1280;\n\n/**\n * File collector tool\n */\nexport default class FileCapturer {\n  /**\n   * Whether the audio is being written\n   */\n  private mIsWriting: boolean = false;\n\n  /**\n   * File Path\n   */\n  private mFilePath: string = '';\n\n  /**\n   * Open File Object\n   */\n  private mFile: fileIo.File | null = null;\n\n  /**\n   * Indicates whether the file can be read.\n   */\n  private mIsReadFile: boolean = true;\n\n  /**\n   * Audio Data Callback Method\n   */\n  private mDataCallBack: ((data: ArrayBuffer) => void ) | null = null;\n\n  /**\n   * Setting the File Path\n   * @param filePath\n   */\n  public setFilePath(filePath: string) {\n    this.mFilePath = filePath;\n  }\n\n  init(dataCallBack: (data: ArrayBuffer) => void) {\n    if (null != this.mDataCallBack) {\n      return;\n    }\n    this.mDataCallBack = dataCallBack;\n    try {\n      if (!fileIo.accessSync(this.mFilePath)) {\n        return\n      }\n    } catch (err) {\n      console.error(`error code: ${err.code}, message: ${err.message}.`)\n    }\n    console.error(TAG, \"init start \");\n  }\n\n  async start(): Promise<void> {\n    try {\n      if (this.mIsWriting || null == this.mDataCallBack) {\n        return;\n      }\n      this.mIsWriting = true;\n      this.mIsReadFile = true;\n      this.mFile = fileIo.openSync(this.mFilePath, fileIo.OpenMode.READ_ONLY);\n      let buf: ArrayBuffer = new ArrayBuffer(SEND_SIZE);\n      let offset: number = 0;\n      while (SEND_SIZE == fileIo.readSync(this.mFile.fd, buf, {\n        offset: offset\n      }) && this.mIsReadFile) {\n        this.mDataCallBack(buf);\n        await sleep(40);\n        offset = offset + SEND_SIZE;\n      }\n    } catch (e) {\n      console.error(TAG, \"read file error \" + e);\n    } finally {\n      if (null != this.mFile) {\n        try {\n          fileIo.closeSync(this.mFile);\n        } catch (err) {\n          console.error(`error code: ${err.code}, message: ${err.message}.`)\n        }\n      }\n      this.mIsWriting = false;\n    }\n  }\n\n  stop() {\n    if (null == this.mDataCallBack) {\n      return;\n    }\n    try {\n      this.mIsReadFile = false;\n    } catch (e) {\n      console.error(TAG, \"read file error \" + e);\n    }\n  }\n\n  release() {\n    if (null == this.mDataCallBack) {\n      return;\n    }\n    try {\n      this.mDataCallBack = null;\n      this.mIsReadFile = false;\n    } catch (e) {\n      console.error(TAG, \"read file error \" + e);\n    }\n  }\n}\n\nasync function sleep(ms: number): Promise<void> {\n  return new Promise<void>(resolve => setTimeout(resolve, ms));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entryabilityets",
      children: "EntryAbility.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在EntryAbility.ets文件中添加麦克风权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityAccessCtrl, UIAbility } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    let atManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(this.context, ['ohos.permission.MICROPHONE']).then((data) => {\n      hilog.info(0x0000, 'testTag', 'data:' + JSON.stringify(data));\n      hilog.info(0x0000, 'testTag', 'data permissions:' + data.permissions);\n      hilog.info(0x0000, 'testTag', 'data authResults:' + data.authResults);\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'errCode: ' + err.code + 'errMessage: ' + err.message);\n    });\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
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
82109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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