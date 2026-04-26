"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["187533"], {
676908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_video_playback_video_playback_md_e93_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-playback-arkts-video-playback-video-playback-md-e93.json
var site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_video_playback_video_playback_md_e93_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback/video-playback","title":"使用AVPlayer播放视频(ArkTS)","description":"当前提供两种视频播放开发的方案：","source":"@site/docs/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback/video-playback.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback","slug":"/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用AVPlayer播放视频(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVPlayer播放音频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback/"},"next":{"title":"使用AVPlayer设置播放URL(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback/video-playback.md


const frontMatter = {
	title: '使用AVPlayer播放视频(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVPlayer播放视频(ArkTS)';

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
        id: "使用avplayer播放视频arkts",
        children: "使用AVPlayer播放视频(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前提供两种视频播放开发的方案："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-intro#avplayer",
          children: "AVPlayer"
        }), "：功能较完善的音视频播放ArkTS/JS API，集成了流媒体和本地资源解析，媒体资源解封装，视频解码和渲染功能，适用于对媒体资源进行端到端播放的场景，可直接播放mp4、mkv等格式的视频文件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Video组件：封装了视频播放的基础能力，需要设置数据源及基础信息即可播放视频，但相对扩展能力较弱。Video组件由ArkUI提供能力，相关指导请参考UI开发文档-", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player",
          children: "Video组件"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将介绍如何使用AVPlayer开发视频播放功能，以完整播放一个视频作为示例，实现端到端播放原始媒体资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放的全流程包含：创建AVPlayer，设置播放资源和窗口，设置播放参数（音量/倍速/缩放模式），播放控制（播放/暂停/跳转/停止），重置，销毁资源。在进行应用开发的过程中，开发者可以通过AVPlayer的state属性主动获取当前状态或使用on('stateChange')方法监听状态变化。如果应用在视频播放器处于错误状态时执行操作，系统可能会抛出异常或生成其他未定义的行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 播放状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(204667)/* ["default"] */.A) + "",
        width: "1465",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avplayerstate9",
        children: "AVPlayerState"
      }), "。当播放处于prepared / playing / paused / completed状态时，播放引擎处于工作状态，这需要占用系统较多的运行内存。当客户端暂时不使用播放器时，调用reset()或release()回收内存资源，做好资源释放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发建议",
      children: "开发建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前指导仅介绍如何实现媒体资源播放，在应用开发过程中可能会涉及后台播放、播放冲突等情况，请根据实际需要参考以下说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果要实现后台播放或熄屏播放，需要接入", (0,jsx_runtime.jsx)(_components.a, {
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
        }), "），可能会被其他应用打断，建议应用主动监听音频打断事件，根据其内容提示，做出相应的处理，避免出现应用状态与预期效果不一致的问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["面对设备同时连接多个音频输出设备的情况，应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#onaudiooutputdevicechangewithinfo11",
          children: "on('audioOutputDeviceChangeWithInfo')"
        }), "监听音频输出设备的变化，从而做出相应处理。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果需要访问在线媒体资源，需要申请 ohos.permission.INTERNET 权限。"
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
          children: "调用createAVPlayer()创建AVPlayer实例，初始化进入idle状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n\n// 创建avPlayer实例对象。\nlet avPlayer = await media.createAVPlayer();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置业务需要的监听事件，搭配全流程场景使用。支持的监听事件包括："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "bitrateDone"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "响应API调用，用于HLS协议流，监听setBitrate()请求完成情况。  当使用setBitrate()指定播放比特率后，如果setBitrate操作成功，将上报该事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "availableBitrates"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于HLS协议流，监听HLS资源的可选bitrates，用于setBitrate()。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bufferingUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于网络播放，监听网络播放缓冲信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startRenderFrame"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于视频播放，监听视频播放首帧渲染时间。  当AVPlayer首次起播进入playing状态后，等到首帧视频画面被渲染到显示画面时，将上报该事件。应用通常可以利用此事件上报，进行视频封面移除，达成封面与视频画面的顺利衔接。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "videoSizeChange"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于视频播放，监听视频播放的宽高信息，可用于调整窗口大小、比例。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "audioInterrupt"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听音频焦点切换信息，搭配属性audioInterruptMode使用。  如果当前设备存在多个媒体正在播放，音频焦点被切换（即播放其他媒体如通话等）时将上报该事件，应用可以及时处理。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 此处仅为示例，开发者根据需要设置合适的监听事件。\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { audio } from '@kit.AudioKit';\n\navPlayer.on('stateChange', async (state: string, reason: media.StateChangeReason) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('error', (error: BusinessError) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('durationUpdate', (duration: number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('timeUpdate', (time:number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('seekDone', (seekDoneTime:number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('speedDone', (speed:number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('volumeChange', (vol: number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('bitrateDone', (bitrate:number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('availableBitrates', (bitrates: Array<number>) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('bufferingUpdate', (infoType: media.BufferingInfoType, value: number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('startRenderFrame', () => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('videoSizeChange', (width: number, height: number) => {\n    // 开发者根据需要写入业务逻辑。\n});\navPlayer.on('audioInterrupt', (info: audio.InterruptEvent) => {\n    // 开发者根据需要写入业务逻辑。\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置资源：设置属性url，AVPlayer进入initialized状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(968138)/* ["default"] */.A) + "",
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
            children: "let url = 'https://xxx.xxx.xxx.mp4';\nif (avPlayer == null) {\n    return;\n}\navPlayer.url = url;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置窗口：获取并设置属性surfaceId，用于设置显示画面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用需要从XComponent组件获取surfaceId，获取方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#getxcomponentsurfaceid9",
            children: "getXComponentSurfaceId"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过接口getXComponentSurfaceId获取surfaceId。\nlet surfaceId = '';\nif (avPlayer == null) {\n    return;\n}\nif (surfaceId === '') {\n    return;\n}\navPlayer.surfaceId = surfaceId;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备播放：调用prepare()，AVPlayer进入prepared状态，此时可以获取duration，设置缩放模式、音量等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navPlayer.prepare((err: BusinessError) => {\n    if (err) {\n        console.error('Failed to prepare,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in preparing');\n    }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频播控：播放play()，暂停pause()，跳转seek()，停止stop() 等操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 播放操作。\navPlayer.play().then(() => {\n    console.info('Succeeded in playing');\n}, (err: BusinessError) => {\n    console.error('Failed to play,error message is :' + err.message);\n});\n// 暂停操作。\navPlayer.pause((err: BusinessError) => {\n    if (err) {\n        console.error('Failed to pause,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in pausing');\n    }\n});\n// 跳转操作。\nlet seekTime: number = 1000;\navPlayer.seek(seekTime, media.SeekMode.SEEK_PREV_SYNC);\n// 停止操作。\navPlayer.stop((err: BusinessError) => {\n    if (err) {\n        console.error('Failed to stop,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in stopping');\n    }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）更换资源：调用reset()重置资源，AVPlayer重新进入idle状态，允许更换资源url。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navPlayer.reset((err: BusinessError) => {\n    avPlayer.url = url;\n    if (err) {\n        console.error('Failed to reset,error message is :' + err.message);\n    } else {\n        console.info('Succeeded in resetting');\n    }\n});\n// 更换url。\nlet url = 'https://xxx.xxx.xxx.mp4';\nif (avPlayer == null) {\n    return;\n}\navPlayer.url = url;\n"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVPlayer/AVPlayerArkTSVideo",
            children: "示例工程"
          }), "，并将示例工程的以下资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVPlayerArkTSVideo\nentry/src/main/ets/\n└── pages\n    └── Index.ets (播放界面)\nentry/src/main/resources/\n├── base\n│   ├── element\n│   │   ├── color.json\n│   │   ├── float.json\n│   │   └── string.json\n│   └── media\n│       ├── ic_video_play.svg  (播放键图片资源)\n│       └── ic_video_pause.svg (暂停键图片资源)\n└── rawfile\n    └── test1.mp4 （视频资源）\n"
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
204667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438641-725071f62f1d763a024f7de9e05e321a.png");

},
968138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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