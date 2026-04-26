"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["954014"], {
796359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_using_audiocapturer_for_recording_using_audiocapturer_for_recording_md_a16_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-using-audiocapturer-for-recording-using-audiocapturer-for-recording-md-a16.json
var site_docs_audio_kit_audio_recording_using_audiocapturer_for_recording_using_audiocapturer_for_recording_md_a16_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/using-audiocapturer-for-recording/using-audiocapturer-for-recording","title":"使用AudioCapturer开发音频录制功能(ArkTs)","description":"AudioCapturer是音频采集器，用于录制PCM（Pulse Code Modulation）音频数据，适合有音频开发经验的开发者实现更灵活的录制功能。","source":"@site/docs/audio-kit/audio-recording/using-audiocapturer-for-recording/using-audiocapturer-for-recording.md","sourceDirName":"audio-kit/audio-recording/using-audiocapturer-for-recording","slug":"/audio-kit/audio-recording/using-audiocapturer-for-recording/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/using-audiocapturer-for-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用AudioCapturer开发音频录制功能(ArkTs)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiocapturer-for-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推荐使用OHAudio开发音频录制功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/using-ohaudio-for-recording/"},"next":{"title":"低时延音频录制(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-fast-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/using-audiocapturer-for-recording/using-audiocapturer-for-recording.md


const frontMatter = {
	title: '使用AudioCapturer开发音频录制功能(ArkTs)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiocapturer-for-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AudioCapturer开发音频录制功能(ArkTs)';

const assets = {

};



const toc = [{
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 3
}, {
  "value": "设置静音打断模式",
  "id": "设置静音打断模式",
  "level": 3
}, {
  "value": "回声消除功能",
  "id": "回声消除功能",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用audiocapturer开发音频录制功能arkts",
        children: "使用AudioCapturer开发音频录制功能(ArkTs)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AudioCapturer是音频采集器，用于录制PCM（Pulse Code Modulation）音频数据，适合有音频开发经验的开发者实现更灵活的录制功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用AudioCapturer录制音频涉及到AudioCapturer实例的创建、音频采集参数的配置、采集的开始与停止、资源的释放等。本开发指导将以一次录制音频数据的过程为例，向开发者讲解如何使用AudioCapturer进行音频录制，建议搭配", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer",
        children: "AudioCapturer"
      }), "的API说明阅读。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了AudioCapturer的状态变化，在创建实例后，调用对应的方法可以进入指定的状态实现对应的行为。需要注意的是在确定的状态执行不合适的方法可能导致AudioCapturer发生错误，建议开发者在调用状态转换的方法前进行状态检查，避免程序运行产生预期以外的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " AudioCapturer状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378841)/* ["default"] */.A) + "",
        width: "591",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#onstatechange8",
        children: "on('stateChange')"
      }), "方法可以监听AudioCapturer的状态变化，每个状态对应值与说明见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiostate8",
        children: "AudioState"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioCaptureSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置音频采集参数并创建AudioCapturer实例，音频采集参数的详细信息可以查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiocaptureroptions8",
            children: "AudioCapturerOptions"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(116581)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当设置Mic音频源（即", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
            children: "SourceType"
          }), "为SOURCE_TYPE_MIC、SOURCE_TYPE_VOICE_RECOGNITION、SOURCE_TYPE_VOICE_COMMUNICATION、SOURCE_TYPE_VOICE_MESSAGE、SOURCE_TYPE_LIVE（从API version 20开始支持））时，需要申请麦克风权限ohos.permission.MICROPHONE，申请方式参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\n// ...\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioCapturerInfo: audio.AudioCapturerInfo = {\n  source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型:Mic音频源。根据业务场景配置,参考SourceType。\n  capturerFlags: 0 // 音频采集器标志。\n};\nlet audioCapturerOptions: audio.AudioCapturerOptions = {\n  streamInfo: audioStreamInfo,\n  capturerInfo: audioCapturerInfo\n};\n// ...\n  audio.createAudioCapturer(audioCapturerOptions, (err, capturer) => { // 创建AudioCapturer实例。\n    if (err) {\n      console.error(`Invoke createAudioCapturer failed, code is ${err.code}, message is ${err.message}`);\n      // ...\n      return;\n    }\n    console.info(`${TAG}: create AudioCapturer success`);\n    // ...\n    audioCapturer = capturer;\n    if (audioCapturer !== undefined) {\n      audioCapturer.on('readData', readDataCallback);\n      // ...\n    }\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#onreaddata11",
            children: "on('readData')"
          }), "方法，订阅监听音频数据读入回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(526337)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "线程管理"
              })
            }), "：不建议使用多线程来处理数据读取。若需使用多线程读取数据，需要做好线程管理。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "线程耗时"
              })
            }), "：readData 方法所在的线程中，不建议执行耗时任务。否则可能会导致数据处理线程响应回调延迟，进而引发录音数据缺失、卡顿、杂音等音频效果问题。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注册回调"
              })
            }), "：开发者应避免在主线程中注册回调，以免被其他业务阻塞导致响应回调不及时造成卡顿。建议使用独立的异步线程池处理回调。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { common, abilityAccessCtrl, PermissionRequestResult } from '@kit.AbilityKit';\n// ...\nclass Options {\n  public offset?: number;\n  public length?: number;\n}\n// ...\n  let bufferSize: number = 0;\n  let path = context.cacheDir;\n  let filePath = path + '/StarWars10s-2C-48000-4SW.pcm';\n  file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n  readDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: bufferSize,\n      length: buffer.byteLength\n    }\n    fs.writeSync(file.fd, buffer, options);\n    bufferSize += buffer.byteLength;\n  };\n  // ...\n      audioCapturer.on('readData', readDataCallback);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#start8",
            children: "start"
          }), "方法进入running状态，开始录制音频。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    audioCapturer.start((err: BusinessError) => {\n      if (err) {\n        // ...\n        console.error('Capturer start failed.');\n      } else {\n        // ...\n        console.info('Capturer start success.');\n      }\n    });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#stop8",
            children: "stop"
          }), "方法停止录制。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    audioCapturer.stop((err: BusinessError) => {\n      if (err) {\n        // ...\n        console.error('Capturer stop failed.');\n      } else {\n        // ...\n        console.info('Capturer stop success.');\n      }\n    });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#release8",
            children: "release"
          }), "方法销毁实例，释放资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    audioCapturer.release((err: BusinessError) => {\n      if (err) {\n        // ...\n        console.error('Capturer release failed.');\n      } else {\n        fs.closeSync(file);\n        console.info('Capturer release success.');\n        // ...\n      }\n    });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面展示了使用AudioCapturer录制音频的完整示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { common, abilityAccessCtrl, PermissionRequestResult } from '@kit.AbilityKit';\nconst TAG = 'AudioCapturerDemo';\nclass Options {\n  public offset?: number;\n  public length?: number;\n}\n\nlet audioCapturer: audio.AudioCapturer | undefined = undefined;\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioCapturerInfo: audio.AudioCapturerInfo = {\n  source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型:Mic音频源。根据业务场景配置,参考SourceType。\n  capturerFlags: 0 // 音频采集器标志。\n};\nlet audioCapturerOptions: audio.AudioCapturerOptions = {\n  streamInfo: audioStreamInfo,\n  capturerInfo: audioCapturerInfo\n};\nlet file: fs.File;\nlet readDataCallback: Callback<ArrayBuffer>;\n\n// ...\n\nasync function initArguments(context: common.UIAbilityContext): Promise<void> {\n  let bufferSize: number = 0;\n  let path = context.cacheDir;\n  let filePath = path + '/StarWars10s-2C-48000-4SW.pcm';\n  file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n  readDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: bufferSize,\n      length: buffer.byteLength\n    }\n    fs.writeSync(file.fd, buffer, options);\n    bufferSize += buffer.byteLength;\n  };\n}\n\n// 初始化,创建实例,设置监听事件。\nasync function init(updateCallback?: (msg: string, isError: boolean) => void, stateCallback?:\n  (msg: string) => void): Promise<void> {\n  audio.createAudioCapturer(audioCapturerOptions, (err, capturer) => { // 创建AudioCapturer实例。\n    if (err) {\n      console.error(`Invoke createAudioCapturer failed, code is ${err.code}, message is ${err.message}`);\n      // ...\n      return;\n    }\n    console.info(`${TAG}: create AudioCapturer success`);\n    // ...\n    audioCapturer = capturer;\n    if (audioCapturer !== undefined) {\n      audioCapturer.on('readData', readDataCallback);\n      // ...\n    }\n  });\n}\n\n// 开始一次音频采集。\nasync function start(updateCallback?: (msg: string, isError: boolean) => void): Promise<void> {\n  if (audioCapturer !== undefined) {\n    let stateGroup = [audio.AudioState.STATE_PREPARED,\n      audio.AudioState.STATE_PAUSED, audio.AudioState.STATE_STOPPED];\n    // 当且仅当状态为STATE_PREPARED、STATE_PAUSED和STATE_STOPPED之一时才能启动采集。\n    if (stateGroup.indexOf(audioCapturer.state.valueOf()) === -1) {\n      console.error(`${TAG}: start failed`);\n      // ...\n      return;\n    }\n\n    // 启动采集。\n    audioCapturer.start((err: BusinessError) => {\n      if (err) {\n        // ...\n        console.error('Capturer start failed.');\n      } else {\n        // ...\n        console.info('Capturer start success.');\n      }\n    });\n  }\n}\n\n// 停止采集。\nasync function stop(updateCallback?: (msg: string, isError: boolean) => void): Promise<void> {\n  if (audioCapturer !== undefined) {\n    // 只有采集器状态为STATE_RUNNING或STATE_PAUSED的时候才可以停止。\n    if (audioCapturer.state.valueOf() !== audio.AudioState.STATE_RUNNING &&\n      audioCapturer.state.valueOf() !== audio.AudioState.STATE_PAUSED) {\n      console.info('Capturer is not running or paused');\n      // ...\n      return;\n    }\n\n    // 停止采集。\n    audioCapturer.stop((err: BusinessError) => {\n      if (err) {\n        // ...\n        console.error('Capturer stop failed.');\n      } else {\n        // ...\n        console.info('Capturer stop success.');\n      }\n    });\n  }\n}\n\n// 销毁实例,释放资源。\nasync function release(updateCallback?: (msg: string, isError: boolean) => void): Promise<void> {\n  if (audioCapturer !== undefined) {\n    // 采集器状态不是STATE_RELEASED或STATE_NEW状态,才能release。\n    if (audioCapturer.state.valueOf() === audio.AudioState.STATE_RELEASED ||\n      audioCapturer.state.valueOf() === audio.AudioState.STATE_NEW) {\n      console.info('Capturer already released');\n      // ...\n      return;\n    }\n\n    // 释放资源。\n    audioCapturer.release((err: BusinessError) => {\n      if (err) {\n        // ...\n        console.error('Capturer release failed.');\n      } else {\n        fs.closeSync(file);\n        console.info('Capturer release success.');\n        // ...\n      }\n    });\n  }\n}\n\n// ...\n\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置静音打断模式",
      children: "设置静音打断模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要实现录音全程不被系统基于焦点并发规则打断的效果，提供将打断策略从停止录音切换为静音录制的功能，录音过程中也不影响其他应用启动录音。开发者在创建AudioCapturer实例时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#setwillmutewheninterrupted20",
        children: "setWillMuteWhenInterrupted"
      }), "接口设置是否开启静音打断模式。默认不开启，此时由音频焦点策略管理并发音频流的执行顺序。开启后，被其他应用打断导致停止或暂停录制时会进入静音录制状态，在此状态下录制的音频没有声音。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "回声消除功能",
      children: "回声消除功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回声消除功能可在支持的设备上有效消除录音过程中的回声干扰，提升音频采集质量。开发者可通过指定特定的Mic音频源", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
        children: "SourceType"
      }), "（SOURCE_TYPE_VOICE_COMMUNICATION、SOURCE_TYPE_LIVE）来启用该功能，系统将会自动对采集的音频信号进行回声消除处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在启用前，建议先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiostreammanager/arkts-apis-audio-audiostreammanager#isacousticechocancelersupported20",
        children: "isAcousticEchoCancelerSupported"
      }), "接口（从API version 20开始支持）查询当前设备对音频输入源类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
        children: "SourceType"
      }), "是否支持回声消除功能，以确保功能的可用性。若支持，则可在创建音频录制构造器时设置相应的Mic音频源，从而激活回声消除处理流程。"]
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
116581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
526337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
378841(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478531-ae445f359f5dc6ad620b1347f603c68a.png");

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