"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["719997"], {
425128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_using_avplayer_for_playback_using_avplayer_for_playback_md_19e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-playback-arkts-using-avplayer-for-playback-using-avplayer-for-playback-md-19e.json
var site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_using_avplayer_for_playback_using_avplayer_for_playback_md_19e_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback/using-avplayer-for-playback","title":"使用AVPlayer播放音频(ArkTS)","description":"使用AVPlayer可以实现端到端播放原始媒体资源，本开发指导将以完整播放一首音乐作为示例，向开发者讲解AVPlayer音频播放相关功能。如需播放PCM音频数据，请使用AudioRenderer。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback/using-avplayer-for-playback.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback","slug":"/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AVPlayer播放音频(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avplayer-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Media Kit简介","permalink":"/harmonyos-docs-site/media-kit/media-kit-intro/"},"next":{"title":"使用AVPlayer播放视频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback/using-avplayer-for-playback.md


const frontMatter = {
	title: '使用AVPlayer播放音频(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avplayer-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVPlayer播放音频(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发建议",
  "id": "开发建议",
  "level": 2
}, {
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}, {
  "value": "运行完整示例",
  "id": "运行完整示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "使用avplayer播放音频arkts",
        children: "使用AVPlayer播放音频(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avplayer",
        children: "AVPlayer"
      }), "可以实现端到端播放原始媒体资源，本开发指导将以完整播放一首音乐作为示例，向开发者讲解AVPlayer音频播放相关功能。如需播放PCM音频数据，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
        children: "AudioRenderer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放的全流程包含：创建AVPlayer，设置播放资源，设置播放参数（音量/倍速/焦点模式），播放控制（播放/暂停/跳转/停止），重置，销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发的过程中，开发者可以通过AVPlayer的state属性主动获取当前状态，或使用on('stateChange')方法监听状态变化。如果应用在音频播放器处于错误状态时执行操作，系统可能会抛出异常或产生其他未定义的行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 播放状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(696286)/* ["default"] */.A) + "",
        width: "1465",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avplayerstate9",
        children: "AVPlayerState"
      }), "。当播放处于prepared / playing / paused / completed状态时，播放引擎处于工作状态，这需要占用系统大量的运行内存。当客户端暂时不使用播放器时，调用reset()或release()回收内存资源，做好资源利用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发建议",
      children: "开发建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前指导仅介绍如何实现媒体资源播放，在应用开发过程中，涉及后台播放、播放冲突等情况时，请根据实际需要参考以下说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若要实现后台播放或熄屏播放，需要接入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/avsession-kit/local-avsession/avsession-access-scene",
          children: "AVSession（媒体会话）"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/continuous-task",
          children: "申请长时任务"
        }), "，避免播放被系统强制中断。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用在播放过程中，若播放的媒体数据涉及音频，根据系统音频管理策略（参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-session/audio-playback-concurrency",
          children: "处理音频焦点事件"
        }), "），可能会被其他应用打断，建议应用主动监听音频打断事件，根据内容提示做出相应处理，避免出现应用状态与预期效果不一致的问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["面对设备同时连接多个音频输出设备的情况，应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#onaudiooutputdevicechangewithinfo11",
          children: "on('audioOutputDeviceChangeWithInfo')"
        }), "监听音频输出设备的变化，做出相应处理。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若要访问在线媒体资源，需要申请 ohos.permission.INTERNET 权限。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若要切换听筒/扬声器，应用可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-device/audio-output-device-switcher",
          children: "音频输出设备路由切换"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer",
        children: "AVPlayer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建实例createAVPlayer()，AVPlayer初始化idle状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n\n// 创建avPlayer实例对象。\nlet avPlayer = await media.createAVPlayer();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置业务需要的监听事件，搭配全流程场景使用。支持的监听事件包括："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "事件类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "stateChange"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听播放器的state属性改变。  需要播放器在idle状态下、未调用设置资源接口前完成设置监听，若在调用设置资源接口后再设置监听，可能导致无法收到资源设置过程中上报的stateChange事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "error"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听播放器的错误信息。  需要播放器在idle状态下、未调用设置资源接口前完成设置监听，若在调用设置资源接口后再设置监听，可能导致无法收到资源设置过程中上报的error事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "durationUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于进度条，监听进度条长度，刷新资源时长。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timeUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于进度条，监听进度条当前位置，刷新当前时间。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "seekDone"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "响应API调用，监听seek()请求完成情况。  当使用seek()跳转到指定播放位置后，如果seek操作成功，将上报该事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "speedDone"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "响应API调用，监听setSpeed()请求完成情况。  当使用setSpeed()设置播放倍速后，如果setSpeed操作成功，将上报该事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "volumeChange"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "响应API调用，监听setVolume()请求完成情况。  当使用setVolume()调节播放音量后，如果setVolume操作成功，将上报该事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bufferingUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于网络播放，监听网络播放缓冲信息，用于上报缓冲百分比以及缓存播放进度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "audioInterrupt"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听音频焦点切换信息，搭配属性audioInterruptMode使用。  如果当前设备存在多个音频正在播放，音频焦点被切换（即播放其他媒体如通话等）时将上报该事件，应用可以及时处理。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 此处仅为示例，开发者根据需要设置合适的监听事件。\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { audio } from '@kit.AudioKit';\n\navPlayer.on('stateChange', async (state: string, reason: media.StateChangeReason) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('error', (error: BusinessError) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('durationUpdate', (duration: number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('timeUpdate', (time:number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('seekDone', (seekDoneTime:number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('speedDone', (speed:number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('volumeChange', (vol: number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('bufferingUpdate', (infoType: media.BufferingInfoType, value: number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('audioInterrupt', (info: audio.InterruptEvent) => {\n    // 开发者根据需要写入业务逻辑。\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置资源：设置属性url，AVPlayer进入initialized状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(602245)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面代码示例中的url仅作示意使用，开发者需根据实际情况，确认资源有效性并设置："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果使用本地资源播放，必须确认资源文件可用，并使用应用沙箱路径访问对应资源，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
              children: "获取应用文件路径"
            }), "。应用沙箱的介绍及如何向应用沙箱推送文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/app-file/app-sandbox-directory",
              children: "文件管理"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果使用网络播放路径，需", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), "：ohos.permission.INTERNET。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["可以使用ResourceManager.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfd9",
              children: "getRawFd"
            }), "打开HAP资源文件描述符。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-intro#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E4%B8%8E%E5%8D%8F%E8%AE%AE",
              children: "支持的播放格式与协议"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let url = 'https://xxx.xxx.xxx.mp3';\nif (avPlayer == null) {\n    return;\n}\navPlayer.url = url;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置音频渲染：只允许在initialized状态下，第一次调用prepare()之前设置，以便音频渲染器信息在之后生效。若媒体源包含视频，则usage默认值为STREAM_USAGE_MOVIE，否则usage默认值为STREAM_USAGE_MUSIC。rendererFlags默认值为0。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了确保音频行为符合使用预期，建议根据具体业务场景和实际需求，主动配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiorendererinfo8",
            children: "audio.AudioRendererInfo"
          }), "，为音频选择恰当的流类型", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/using-right-streamusage-and-sourcetype",
            children: "usage"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\n\navPlayer.audioRendererInfo = {\n    usage: audio.StreamUsage.STREAM_USAGE_MOVIE,\n    rendererFlags: 0\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备播放：调用 prepare()方法进入准备播放阶段，AVPlayer 将切换至 prepared 状态，此时可获取视频时长（duration）并调整音量参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navPlayer.prepare((err: BusinessError) => {\n    if (err) {\n        console.error('Failed to prepare,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in preparing');\n    }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频播控：播放play()、暂停pause()、跳转seek()、停止stop() 等操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(656894)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在API version 23及之后版本中，播放音频时会跳过静音帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 播放操作。\navPlayer.play().then(() => {\n    console.info('Succeeded in playing');\n}, (err: BusinessError) => {\n    console.error('Failed to play,error message is :' + err.message);\n});\n// 暂停操作。\navPlayer.pause((err: BusinessError) => {\n    if (err) {\n        console.error('Failed to pause,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in pausing');\n    }\n});\n// 跳转操作。\nlet seekTime: number = 1000;\navPlayer.seek(seekTime, media.SeekMode.SEEK_PREV_SYNC);\n// 停止操作。\navPlayer.stop((err: BusinessError) => {\n    if (err) {\n        console.error('Failed to stop,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in stopping');\n    }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）更换资源：调用reset()方法重置播放资源，AVPlayer重新进入idle状态，此时可重新设置资源url。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nawait avPlayer.reset((err: BusinessError) => {\n    avPlayer.url = url;\n    if (err) {\n        console.error('Failed to reset,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in resetting');\n    }\n});\n// 更换url。\nlet url = 'https://xxx.xxx.xxx.mp3';\nif (avPlayer == null) {\n    return;\n}\navPlayer.url = url;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出播放：调用release()销毁实例，AVPlayer进入released状态，退出播放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navPlayer.release((err: BusinessError) => {\n    if (err) {\n        console.error('Failed to release,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in releasing');\n    }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行完整示例",
      children: "运行完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，完整地播放一首音乐，实现起播后3s暂停，暂停3s重新播放的效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVPlayer/AVPlayerArkTSAudio",
            children: "示例工程"
          }), "，并将示例工程的以下资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVPlayerArkTSAudio\nentry/src/main/ets/\n└── pages\n    └── Index.ets (播放界面)\nentry/src/main/resources/\n├── base\n│   ├── element\n│   │   ├── color.json\n│   │   ├── float.json\n│   │   └── string.json\n│   └── media\n│       ├── ic_video_play.svg  (播放键图片资源)\n│       └── ic_video_pause.svg (暂停键图片资源)\n└── rawfile\n    └── test_01.mp3 （音频资源）\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译新建工程并运行。"
        }), "\n"]
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
602245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
656894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
696286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798946-4a8f8a98155d5828a2b0f2d3ac17c1eb.png");

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