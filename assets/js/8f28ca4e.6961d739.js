"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["122075"], {
989903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_playback_using_audiorenderer_for_playback_using_audiorenderer_for_playback_md_8f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-playback-using-audiorenderer-for-playback-using-audiorenderer-for-playback-md-8f2.json
var site_docs_audio_kit_audio_playback_using_audiorenderer_for_playback_using_audiorenderer_for_playback_md_8f2_namespaceObject = JSON.parse('{"id":"audio-kit/audio-playback/using-audiorenderer-for-playback/using-audiorenderer-for-playback","title":"使用AudioRenderer开发音频播放功能(ArkTs)","description":"AudioRenderer是音频渲染器，用于播放PCM（Pulse Code Modulation）音频数据，相比AVPlayer而言，可以在输入前添加数据预处理，更适合有音频开发经验的开发者，以实现更灵活的播放功能。","source":"@site/docs/audio-kit/audio-playback/using-audiorenderer-for-playback/using-audiorenderer-for-playback.md","sourceDirName":"audio-kit/audio-playback/using-audiorenderer-for-playback","slug":"/audio-kit/audio-playback/using-audiorenderer-for-playback/","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-audiorenderer-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用AudioRenderer开发音频播放功能(ArkTs)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiorenderer-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推荐使用OHAudio开发音频播放功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-ohaudio-for-playback/"},"next":{"title":"低时延音频播放(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/audio-fast-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-playback/using-audiorenderer-for-playback/using-audiorenderer-for-playback.md


const frontMatter = {
	title: '使用AudioRenderer开发音频播放功能(ArkTs)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiorenderer-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AudioRenderer开发音频播放功能(ArkTs)';

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
  "value": "选择正确的StreamUsage",
  "id": "选择正确的streamusage",
  "level": 3
}, {
  "value": "配置合适的音频采样率",
  "id": "配置合适的音频采样率",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "使用audiorenderer开发音频播放功能arkts",
        children: "使用AudioRenderer开发音频播放功能(ArkTs)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AudioRenderer是音频渲染器，用于播放PCM（Pulse Code Modulation）音频数据，相比", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback",
        children: "AVPlayer"
      }), "而言，可以在输入前添加数据预处理，更适合有音频开发经验的开发者，以实现更灵活的播放功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用AudioRenderer播放音频涉及到AudioRenderer实例的创建、音频渲染参数的配置、渲染的开始与停止、资源的释放等。本开发指导将以一次渲染音频数据的过程为例，向开发者讲解如何使用AudioRenderer进行音频渲染，建议搭配", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer",
        children: "AudioRenderer"
      }), "的API说明阅读。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了AudioRenderer的状态变化，在创建实例后，调用对应的方法可以进入指定的状态实现对应的行为。需要注意的是在确定的状态执行不合适的方法可能导致AudioRenderer发生错误，建议开发者在调用状态转换的方法前进行状态检查，避免程序运行产生预期以外的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保证UI线程不被阻塞，大部分AudioRenderer调用都是异步的。对于每个API均提供了callback函数和Promise函数，以下示例均采用callback函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " AudioRenderer状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425948)/* ["default"] */.A) + "",
        width: "1329",
        height: "939"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行应用开发的过程中，建议开发者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#onstatechange8",
        children: "on('stateChange')"
      }), "方法订阅AudioRenderer的状态变更。因为针对AudioRenderer的某些操作，仅在音频播放器在固定状态时才能执行。如果应用在音频播放器处于错误状态时执行操作，系统可能会抛出异常或生成其他未定义的行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["prepared状态：通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-f/arkts-apis-audio-f#audiocreateaudiorenderer8",
          children: "audio.createAudioRenderer"
        }), "方法进入到该状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["running状态：正在进行音频数据播放，可以在prepared状态通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#start8",
          children: "start"
        }), "方法进入此状态，也可以在paused状态和stopped状态通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#start8",
          children: "start"
        }), "方法进入此状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["paused状态：在running状态可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#pause8",
          children: "pause"
        }), "方法暂停音频数据的播放并进入paused状态，暂停播放之后可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#start8",
          children: "start"
        }), "方法继续音频数据播放。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["stopped状态：在paused/running状态可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#stop8",
          children: "stop"
        }), "方法停止音频数据的播放。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["released状态：在prepared、paused、stopped等状态，用户均可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#release8",
          children: "release"
        }), "方法释放掉所有占用的硬件和软件资源，并且不会再进入到其他的任何一种状态了。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置音频渲染参数并创建AudioRenderer实例，音频渲染参数的详细信息可以查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiorendereroptions8",
            children: "AudioRendererOptions"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\n// ...\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioRendererInfo: audio.AudioRendererInfo = {\n  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。\n  rendererFlags: 0 // 音频渲染器标志。\n};\nlet audioRendererOptions: audio.AudioRendererOptions = {\n  streamInfo: audioStreamInfo,\n  rendererInfo: audioRendererInfo\n};\n// ...\n  audio.createAudioRenderer(audioRendererOptions, (err, renderer) => { // 创建AudioRenderer实例。\n    if (!err) {\n      console.info(`${TAG}: creating AudioRenderer success`);\n      // ...\n      audioRenderer = renderer;\n      if (audioRenderer !== undefined) {\n        audioRenderer.on('writeData', writeDataCallback);\n        // ...\n      }\n    } else {\n      console.info(`${TAG}: creating AudioRenderer failed, error: ${err.message}`);\n      globalLogUpdate(`${TAG}: creating AudioRenderer failed, error: ${err.message}`, false);\n    }\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#onwritedata11",
            children: "on('writeData')"
          }), "方法，订阅监听音频数据写入回调，推荐使用API version 12支持返回回调结果的方式。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "API version 12开始该方法支持返回回调结果，系统可以根据开发者返回的值来决定此次回调中的数据是否播放。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(503850)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "能填满回调所需长度数据的情况下，返回audio.AudioDataCallbackResult.VALID，系统会取用完整长度的数据缓冲进行播放。请不要在未填满数据的情况下返回audio.AudioDataCallbackResult.VALID，否则会导致杂音、卡顿等现象。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在无法填满回调所需长度数据的情况下，建议开发者返回audio.AudioDataCallbackResult.INVALID，系统不会处理该段音频数据，然后会再次向应用请求数据，确认数据填满后返回audio.AudioDataCallbackResult.VALID。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "回调函数结束后，音频服务会把缓冲中数据放入队列里等待播放，因此请勿在回调外再次更改缓冲中的数据。对于最后一帧，如果数据不够填满缓冲长度，开发者需要使用剩余数据拼接空数据的方式，将缓冲填满，避免缓冲内的历史脏数据对播放效果产生不良的影响。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n// ...\nclass Options {\n  public offset?: number;\n  public length?: number;\n}\n// ...\n  let bufferSize: number = 0;\n  let file = await context.resourceManager.getRawFd('32_xiyouji.pcm');\n  writeDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: bufferSize,\n      length: buffer.byteLength\n    };\n    // ...\n        audioRenderer.on('writeData', writeDataCallback);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "API version 11该方法不支持返回回调结果，系统默认回调中的数据均为有效数据。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(157519)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "开发者应避免在主线程中注册回调，以免被其他业务阻塞导致响应回调不及时造成卡顿。建议使用独立的异步线程池处理回调。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "请确保填满回调所需长度数据，否则会导致杂音、卡顿等现象。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在无法填满回调所需长度数据的情况下，建议开发者选择暂时停止写入数据（不暂停音频流），阻塞回调函数，等待数据充足时，再继续写入数据，确保数据填满。在阻塞回调函数后，如需调用AudioRenderer相关接口，需先解阻塞。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "开发者如果不希望播放本次回调中的音频数据，可以主动将回调中的数据块置空（置空后，也会被系统统计到已写入的数据，播放静音帧）。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "回调函数结束后，音频服务会把缓冲中数据放入队列里等待播放，因此请勿在回调外再次更改缓冲中的数据。对于最后一帧，如果数据不够填满缓冲长度，开发者需要使用剩余数据拼接空数据的方式，将缓冲填满，避免缓冲内的历史脏数据对播放效果产生不良的影响。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在写数据回调中，避免与耗时业务耦合或等待其他业务操作，例如写数据时不要等待UI绘制。否则，可能会导致数据传输不及时，从而产生卡顿现象。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n// ...\nclass Options {\n  public offset?: number;\n  public length?: number;\n}\n// ...\n  let bufferSize: number = 0;\n  let file = await context.resourceManager.getRawFd('32_xiyouji.pcm');\n  writeDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: bufferSize,\n      length: buffer.byteLength\n    };\n    // ...\n        audioRenderer.on('writeData', writeDataCallback);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#start8",
            children: "start"
          }), "方法进入running状态，开始渲染音频。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    audioRenderer.start((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer start failed.');\n        // ...\n      } else {\n        console.info('Renderer start success.');\n        // ...\n      }\n    });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#stop8",
            children: "stop"
          }), "方法停止渲染。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    audioRenderer.stop((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer stop failed.');\n        // ...\n      } else {\n        console.info('Renderer stop success.');\n        // ...\n      }\n    });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#release8",
            children: "release"
          }), "方法销毁实例，释放资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用需根据实际业务需求合理使用AudioRenderer实例，按需创建并及时释放，避免占用过多音频资源导致异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    audioRenderer.release((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer release failed.');\n        // ...\n      } else {\n        // 关闭沙箱文件\n        console.info('Renderer release success.');\n        // ...\n      }\n    });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择正确的streamusage",
      children: "选择正确的StreamUsage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建播放器时候，开发者需要根据应用场景指定播放器的StreamUsage，选择正确的StreamUsage可以避免用户遇到不符合预期的行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在音频API文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
        children: "StreamUsage"
      }), "介绍中，列举了每一种类型推荐的应用场景。例如音乐场景推荐使用STREAM_USAGE_MUSIC，电影或者视频场景推荐使用STREAM_USAGE_MOVIE，游戏场景推荐使用STREAM_USAGE_GAME，等等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者配置了不正确的StreamUsage，可能带来一些不符合预期的行为。例如以下场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏场景错误使用STREAM_USAGE_MUSIC类型，游戏应用将无法和其他音乐应用并发播放，而游戏场景通常可以与其他音乐应用并发播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导航场景错误使用STREAM_USAGE_MUSIC类型，导航应用播报时候会导致正在播放的音乐停止播放，而导航场景我们通常期望正在播放的音乐仅降低音量播放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置合适的音频采样率",
      children: "配置合适的音频采样率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采样率：指音频每秒单个声道样点数，单位为Hz。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重采样：根据输入输出音频采样率的差异，进行上采样（通过插值增加样点数）或下采样（通过抽取减少样点数）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AudioRenderer支持枚举类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiosamplingrate8",
        children: "AudioSamplingRate"
      }), "中定义的所有采样率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若通过AudioRenderer设置的输入音频采样率与设备输出采样率不一致，系统会将输入音频重采样为设备输出采样率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若为减少重采样功耗，可使用采样率与输出设备采样率一致的输入音频。推荐使用48k采样率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面展示了使用AudioRenderer渲染音频文件的示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\n// ...\nconst TAG = 'AudioRendererDemo';\nclass Options {\n  public offset?: number;\n  public length?: number;\n}\n// ...\n\nlet audioRenderer: audio.AudioRenderer | undefined = undefined;\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioRendererInfo: audio.AudioRendererInfo = {\n  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。\n  rendererFlags: 0 // 音频渲染器标志。\n};\nlet audioRendererOptions: audio.AudioRendererOptions = {\n  streamInfo: audioStreamInfo,\n  rendererInfo: audioRendererInfo\n};\nlet writeDataCallback: audio.AudioRendererWriteDataCallback;\n\nasync function initArguments(context: common.UIAbilityContext) {\n  let bufferSize: number = 0;\n  let file = await context.resourceManager.getRawFd('32_xiyouji.pcm');\n  writeDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: bufferSize,\n      length: buffer.byteLength\n    };\n\n    try {\n      let bufferLength = fs.readSync(file.fd, buffer, options);\n      bufferSize += buffer.byteLength;\n      // 如果当前回调传入的数据不足一帧，空白区域需要使用静音数据填充，否则会导致播放出现杂音。\n      if (bufferLength < buffer.byteLength) {\n        let view = new DataView(buffer);\n        for (let i = bufferLength; i < buffer.byteLength; i++) {\n          // 空白区域填充静音数据。当使用音频采样格式为SAMPLE_FORMAT_U8时0x7F为静音数据，使用其他采样格式时0为静音数据。\n          view.setUint8(i, 0);\n        }\n      }\n      // API version 11不支持返回回调结果，从API version 12开始支持返回回调结果。\n      // 如果开发者不希望播放某段buffer，返回audio.AudioDataCallbackResult.INVALID即可。\n      return audio.AudioDataCallbackResult.VALID;\n    } catch (error) {\n      console.error('Error reading file:', error);\n      // ...\n      // API version 11不支持返回回调结果，从API version 12开始支持返回回调结果。\n      return audio.AudioDataCallbackResult.INVALID;\n    }\n  };\n}\n\n// 初始化，创建实例，设置监听事件。\nasync function init() {\n  audio.createAudioRenderer(audioRendererOptions, (err, renderer) => { // 创建AudioRenderer实例。\n    if (!err) {\n      console.info(`${TAG}: creating AudioRenderer success`);\n      // ...\n      audioRenderer = renderer;\n      if (audioRenderer !== undefined) {\n        audioRenderer.on('writeData', writeDataCallback);\n        // ...\n      }\n    } else {\n      console.info(`${TAG}: creating AudioRenderer failed, error: ${err.message}`);\n      // ...\n    }\n  });\n}\n\n// 开始一次音频渲染。\nasync function start() {\n  if (audioRenderer !== undefined) {\n    let stateGroup = [audio.AudioState.STATE_PREPARED, audio.AudioState.STATE_PAUSED, audio.AudioState.STATE_STOPPED];\n    if (stateGroup.indexOf(audioRenderer.state.valueOf()) === -1) { // 当且仅当状态为prepared、paused和stopped之一时才能启动渲染。\n      console.error(TAG + 'start failed');\n      // ...\n      return;\n    }\n    // 启动渲染。\n    audioRenderer.start((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer start failed.');\n        // ...\n      } else {\n        console.info('Renderer start success.');\n        // ...\n      }\n    });\n  }\n}\n\nasync function pause() {\n  // 暂停渲染。\n  if (audioRenderer !== undefined) {\n    // 只有渲染器状态为running的时候才能暂停。\n    if (audioRenderer.state.valueOf() !== audio.AudioState.STATE_RUNNING) {\n      console.info('Renderer is not running');\n      // ...\n      return;\n    }\n    // 暂停渲染。\n    audioRenderer.pause((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer pause failed.');\n        // ...\n      } else {\n        console.info('Renderer pause success.');\n        // ...\n      }\n    });\n  }\n}\n\n// 停止渲染。\nasync function stop() {\n  if (audioRenderer !== undefined) {\n    // 只有渲染器状态为running或paused的时候才可以停止。\n    if (audioRenderer.state.valueOf() !== audio.AudioState.STATE_RUNNING &&\n      audioRenderer.state.valueOf() !== audio.AudioState.STATE_PAUSED) {\n      console.info('Renderer is not running or paused.');\n      // ...\n      return;\n    }\n    // 停止渲染。\n    audioRenderer.stop((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer stop failed.');\n        // ...\n      } else {\n        console.info('Renderer stop success.');\n        // ...\n      }\n    });\n  }\n}\n\n// 销毁实例，释放资源。\nasync function release() {\n  if (audioRenderer !== undefined) {\n    // 渲染器状态不是released状态，才能release。\n    if (audioRenderer.state.valueOf() === audio.AudioState.STATE_RELEASED) {\n      console.info('Renderer already released');\n      // ...\n      return;\n    }\n\n    // ...\n\n    // 释放资源。\n    audioRenderer.release((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer release failed.');\n        // ...\n      } else {\n        // 关闭沙箱文件\n        console.info('Renderer release success.');\n        // ...\n      }\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当同优先级或高优先级音频流要使用输出设备时，当前音频流会被中断，应用可以自行响应中断事件并做出处理。具体的音频并发处理方式可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency",
        children: "处理音频焦点事件"
      }), "。"]
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
503850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
157519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
425948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438573-c9dfc7bcb484105debd2ab071c9562ff.png");

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