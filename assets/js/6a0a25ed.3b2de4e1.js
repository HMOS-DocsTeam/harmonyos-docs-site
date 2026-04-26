"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["154330"], {
417030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_streaming_media_playback_development_guide_streaming_media_playback_development_guide_md_6a0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-playback-arkts-streaming-media-playback-development-guide-streaming-media-playback-development-guide-md-6a0.json
var site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_streaming_media_playback_development_guide_streaming_media_playback_development_guide_md_6a0_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide/streaming-media-playback-development-guide","title":"使用AVPlayer播放流媒体(ArkTS)","description":"本开发指导将介绍如何使用AVPlayer开发流媒体直播和点播功能。示例展示如何完整播放流媒体视频，实现端到端的流媒体资源播放。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide/streaming-media-playback-development-guide.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide","slug":"/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用AVPlayer播放流媒体(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/streaming-media-playback-development-guide","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVPlayer设置播放URL(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method/"},"next":{"title":"使用AVPlayer添加视频外挂字幕(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/video-subtitle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide/streaming-media-playback-development-guide.md


const frontMatter = {
	title: '使用AVPlayer播放流媒体(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/streaming-media-playback-development-guide',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVPlayer播放流媒体(ArkTS)';

const assets = {

};



const toc = [{
  "value": "流媒体支持的格式",
  "id": "流媒体支持的格式",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "流媒体缓冲状态",
  "id": "流媒体缓冲状态",
  "level": 3
}, {
  "value": "HLS切换码率",
  "id": "hls切换码率",
  "level": 3
}, {
  "value": "DASH设置视频起播策略",
  "id": "dash设置视频起播策略",
  "level": 3
}, {
  "value": "DASH切换音视频轨道",
  "id": "dash切换音视频轨道",
  "level": 3
}, {
  "value": "异常场景说明",
  "id": "异常场景说明",
  "level": 2
}, {
  "value": "运行完整示例",
  "id": "运行完整示例",
  "level": 2
}, {
  "value": "开发示例",
  "id": "开发示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用avplayer播放流媒体arkts",
        children: "使用AVPlayer播放流媒体(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本开发指导将介绍如何使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avplayer",
        children: "AVPlayer"
      }), "开发流媒体直播和点播功能。示例展示如何完整播放流媒体视频，实现端到端的流媒体资源播放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本指导仅介绍流媒体播放功能。本地音视频播放等其他场景，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback",
        children: "视频播放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "流媒体支持的格式",
      children: "流媒体支持的格式"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "流媒体协议类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "典型链接"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络点播"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "网络直播"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "内容保护"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://xxxx/index.m3u8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/drm-kit/drm-overview",
              children: "DRM Kit"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://xxxx.mpd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/drm-kit/drm-overview",
              children: "DRM Kit"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://xxxx.mp4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP-FLV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://xxxx.flv"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建AVPlayer、设置播放资源和窗口、设置播放参数（音量/倍速/缩放模式）、进行播放控制（播放/暂停/跳转/停止）、重置资源、销毁资源。应用开发时，开发者可通过AVPlayer的state属性主动获取当前状态，或使用on('stateChange')方法监听状态变化。视频播放器处于错误状态时执行操作，可能导致异常或未定义行为。状态详细参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avplayerstate9",
        children: "AVPlayerState"
      }), "。具体步骤如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建实例createAVPlayer()，初始化AVPlayer为idle状态。"
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
                children: "监听进度条长度，刷新资源时长。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timeUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听进度条当前位置，刷新当前时间。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "seekDone"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听seek()请求完成情况。  当使用seek()跳转到指定播放位置后，如果seek操作成功，将上报该事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "speedDone"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听setSpeed()请求完成情况。  当使用setSpeed()设置播放倍速后，如果setSpeed操作成功，将上报该事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "volumeChange"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听setVolume()请求完成情况。  当使用setVolume()调节播放音量后，如果setVolume操作成功，将上报该事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bufferingUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听网络播放缓冲信息，上报缓冲百分比以及缓存播放进度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "audioInterrupt"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听音频焦点切换信息，搭配属性audioInterruptMode使用。  如果当前设备存在多个音频正在播放，音频焦点被切换（即播放其他媒体如通话等）时将上报该事件，应用可以及时处理。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置资源：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method",
            children: "使用AVPlayer设置播放URL"
          }), "，使AVPlayer进入initialized状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(990427)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面代码示例中的url仅作示意，开发者需根据实际情况确认资源有效性并设置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用网络播放路径，需", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), "：ohos.permission.INTERNET。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用支持的播放格式和协议。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置窗口：获取并设置SurfaceID属性，用于配置显示画面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用从XComponent组件获取surfaceID，获取方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
            children: "XComponent"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备播放：调用prepare()，使AVPlayer进入prepared状态，此时可获取duration，设置缩放模式、音量等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进行视频播放控制：播放play()，暂停pause()，跳转seek()，停止stop() 等操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）更换资源：调用reset()重置资源，使AVPlayer重新进入idle状态，允许更换资源url。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出播放：调用release()销毁实例，使AVPlayer进入released状态，退出播放。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放流媒体的标准流程如上述开发步骤所示。不同的流媒体格式在实际开发的过程中存在差异，本节将详细描述这些差异，包括视频起播策略的设置和音视频轨道的切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "流媒体缓冲状态",
      children: "流媒体缓冲状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当下载速率低于片源的码率时，会出现卡顿。此时，播放器检测到缓冲区数据不足，会先缓冲一些数据再播放，避免连续卡顿。一次卡顿对应的缓冲事件上报过程为：BUFFERING_START-> BUFFERING_PERCENT 0 -> ... -> BUFFERING_PERCENT 100 -> BUFFERING_END。CACHED_DURATION在卡顿过程和播放过程中都会持续上报，直至下载至资源末尾。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-e/arkts-apis-media-e#bufferinginfotype8",
        children: "BufferingInfoType缓冲事件类型枚举"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听当前bufferingUpdate缓冲状态示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { media } from '@kit.MediaKit';\n// 类成员定义avPlayer\nprivate avPlayer: media.AVPlayer | null = null;\n\n// 创建avPlayer实例对象。\nthis.avPlayer = await media.createAVPlayer();\n// 监听当前bufferingUpdate缓冲状态。\nthis.avPlayer.on('bufferingUpdate', (infoType : media.BufferingInfoType, value : number) => {\n  console.info(`AVPlayer bufferingUpdate, infoType is ${infoType}, value is ${value}.`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hls切换码率",
      children: "HLS切换码率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前流媒体HLS协议流支持多码率播放，默认情况下，播放器会根据网络下载速度选择合适的码率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#onavailablebitrates9",
            children: "on('availableBitrates')"
          }), "监听当前HLS协议流可用的码率。如果监听的码率列表长度为0，则不支持设置指定码率。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n// 类成员定义avPlayer\nprivate avPlayer: media.AVPlayer | null = null;\n\n// 创建avPlayer实例对象。\nthis.avPlayer = await media.createAVPlayer();\n// 监听当前HLS协议流可用的码率。\nthis.avPlayer.on('availableBitrates', (bitrates: Array<number>) => {\n  console.info('availableBitrates called, and availableBitrates length is: ' + bitrates.length);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#setbitrate9",
            children: "setBitrate"
          }), "接口设置播放码率。若用户设置的码率不在可用码率中，播放器将选择最小且最接近的码率。该接口只能在prepared/playing/paused/completed状态下调用，可通过监听", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#onbitratedone9",
            children: "bitrateDone"
          }), "事件确认是否生效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n// 类成员定义avPlayer\nprivate avPlayer: media.AVPlayer | null = null;\n\n// 创建avPlayer实例对象。\nthis.avPlayer = await media.createAVPlayer();\n// 监听码率设置是否生效。\nthis.avPlayer.on('bitrateDone', (bitrate: number) => {\n  console.info('bitrateDone called, and bitrate value is: ' + bitrate);\n})\n// 设置播放码率。\nthis.bitrate: number = 96000;\nthis.avPlayer.setBitrate(this.bitrate);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dash设置视频起播策略",
      children: "DASH设置视频起播策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保证在弱网环境下的播放体验，AVPlayer将默认选择最低的视频分辨率开始播放，随后依据网络状况自动调整。开发者可以根据具体需求，自定义DASH视频的起播策略，包括设定视频的宽度、高度以及色彩格式等参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述示例代码描述了设置视频宽度1920px、高度1080px起播。AVPlayer会选择MPD资源中一路分辨率为1920x1080的视频资源进行播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { media } from '@kit.MediaKit';\n\nlet mediaSource : media.MediaSource = media.createMediaSourceWithUrl(\"http://test.cn/dash/aaa.mpd\",  {\"User-Agent\" : \"User-Agent-Value\"});\nlet playbackStrategy : media.PlaybackStrategy = {preferredWidth: 1920, preferredHeight: 1080};\nthis.avPlayer.setMediaSource(mediaSource, playbackStrategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dash切换音视频轨道",
      children: "DASH切换音视频轨道"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DASH流媒体资源包含多路不同分辨率、码率、采样率、编码格式的音频、视频及字幕资源。默认情况下，AVPlayer会依据网络状况自动切换不同码率的视频轨道。开发者可根据需求选择指定的音视频轨道播放，此时自适应码率切换策略将失效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置selectTrack生效的监听事件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#ontrackchange12",
            children: "trackChange"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n// 类成员定义avPlayer\nprivate avPlayer: media.AVPlayer | null = null;\n\n// 创建avPlayer实例对象。\nthis.avPlayer = await media.createAVPlayer();\nthis.avPlayer.on('trackChange', (index: number, isSelect: boolean) => {\n  console.info(`trackChange info, index: ${index}, isSelect: ${isSelect}`);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#gettrackdescription9",
            children: "getTrackDescription"
          }), "获取所有音视频轨道列表。开发者可根据实际需求，基于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#mediadescription8",
            children: "MediaDescription"
          }), "各字段信息，确定目标轨道索引。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 以获取1080p视频轨道索引为例。\nimport { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\npublic videoTrackIndex: number = 0;\n// 类成员定义avPlayer\nprivate avPlayer: media.AVPlayer | null = null;\n\n// 创建avPlayer实例对象。\nthis.avPlayer = await media.createAVPlayer();\nthis.avPlayer.getTrackDescription((error: BusinessError, arrList: Array<media.MediaDescription>) => {\n  if (arrList != null) {\n    for (let i = 0; i < arrList.length; i++) {\n      let propertyIndex: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_TRACK_INDEX];\n      let propertyType: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_TRACK_TYPE];\n      let propertyWidth: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_WIDTH];\n      let propertyHeight: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_HEIGHT];\n      if (propertyType == media.MediaType.MEDIA_TYPE_VID && propertyWidth == 1920 && propertyHeight == 1080) {\n        this.videoTrackIndex = parseInt(propertyIndex?.toString()); // 获取1080p视频轨道索引。\n      }\n    }\n  } else {\n    console.error(`getTrackDescription fail, error:${error}`);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在音视频播放过程中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#selecttrack12",
            children: "selectTrack"
          }), "选择对应的音视频轨道，或者调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#deselecttrack12",
            children: "deselectTrack"
          }), "取消选择的音视频轨道。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\npublic videoTrackIndex: number = 0;\n    // 类成员定义avPlayer\nprivate avPlayer: media.AVPlayer | null = null;\n\n// 创建avPlayer实例对象。\nthis.avPlayer = await media.createAVPlayer();\n// 切换至目标视频轨道。\nthis.avPlayer.selectTrack(this.videoTrackIndex);\n// 取消选择目标视频轨道。\n// this.avPlayer.deselectTrack(this.videoTrackIndex);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常场景说明",
      children: "异常场景说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AVPlayer播放流媒体过程中断网时，流媒体模块会根据返回的错误码、服务器响应时间和请求次数等因素综合处理。若错误码类型属于不进行请求重试的类型，会向应用上报对应的错误码。如果错误码类型需要进行请求重试，会在30s内进行至多10次的请求重试。如果请求重试次数超过10次，或重试总时长超过30秒，会向应用上报对应的错误码。如果请求重试成功，则继续播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行完整示例",
      children: "运行完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，完整地播放一个流媒体视频。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVPlayer/AVPlayerArkTSStreamingMedia",
            children: "示例工程"
          }), "，并将示例工程的以下资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVPlayerArkTSAudio\nentry/src/main/ets/\n└── pages\n    └── Index.ets (播放界面)\nentry/src/main/resources/\n├── base\n│   ├── element\n│   │   ├── color.json\n│   │   ├── float.json\n│   │   └── string.json\n│   └── media\n│       ├── ic_video_play.svg  (播放键图片资源)\n│       └── ic_video_pause.svg (暂停键图片资源)\n└── rawfile\n    └── test1.mp4 （视频资源）\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在/entry/src/main/module.json5中，申请使用网络的权限（或直接替换为示例工程的module.json5）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  },\n  {\n    \"name\": \"ohos.permission.GET_WIFI_INFO\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注释、解注释/entry/src/main/ets/pages/Index.ets中的上文示例的各种情况，编译并运行。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { media } from '@kit.MediaKit';\nimport { emitter } from '@kit.BasicServicesKit';\nimport { display } from '@kit.ArkUI';\n\nconst TIME_ONE = 60000; // 1分钟的毫秒数。\nconst TIME_TWO = 1000;  // 1秒的毫秒数。\nconst SET_INTERVAL = 1000; // 每秒更新一次当前播放时间。\nconst SPEED_ZERO: number = 0; // 对应1.00x。\nconst SPEED_ONE: number = 1;  // 对应1.25x。\nconst SPEED_TWO: number = 2;  // 对应1.75x。\nconst SPEED_THREE: number = 3; // 对应2.00x。\nconst PROPORTION: number = 0.99;\nlet innerEventFalse: emitter.InnerEvent = {\n  eventId: 1,\n  priority: emitter.EventPriority.HIGH\n};\nlet innerEventTrue: emitter.InnerEvent = {\n  eventId: 2,\n  priority: emitter.EventPriority.HIGH\n};\n\nlet innerEventWH: emitter.InnerEvent = {\n  eventId: 3,\n  priority: emitter.EventPriority.HIGH\n};\n@Entry\n@Component\nstruct Index {\n  private avPlayer: media.AVPlayer | null = null;\n  private context: Context | undefined = undefined;\n  public videoTrackIndex: number = 0;\n  public bitrate: number = 0;\n  @State durationTime: number = 0;\n  @State currentTime: number = 0;\n  @State percent: number = 0;\n  @State isSwiping: boolean = false;\n  @State tag: string = 'StreamingMedia';\n  private surfaceId: string = '';\n  @State speedSelect: number = -1;\n  public intervalID: number = -1;\n  @State windowWidth: number = 300;\n  @State windowHeight: number = 300;\n  @State surfaceW: number | null = null;\n  @State surfaceH: number | null = null;\n  @State isPaused: boolean = true;\n  @State XComponentFlag: boolean = false;\n  getDurationTime(): number {\n    return this.durationTime;\n  }\n\n  getCurrentTime(): number {\n    return this.currentTime;\n  }\n\n  timeConvert(time: number): string {\n    let min: number = Math.floor(time / TIME_ONE);\n    let second: string = ((time % TIME_ONE) / TIME_TWO).toFixed(0);\n    // return `${min}:${(+second < TIME_THREE ? '0' : '') + second}`;\n    second = second.padStart(2, '0');\n    return `${min}:${second}`;\n  }\n\n  async msleepAsync(ms: number): Promise<boolean> {\n    return new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve(true)\n      }, ms)\n    })\n  }\n\n  async avSetupStreamingMediaVideo() {\n    if (this.context == undefined) return;\n    // 创建avPlayer实例对象。\n    this.avPlayer = await media.createAVPlayer();\n\n    // 创建状态机变化回调函数。\n    await this.setAVPlayerCallback((avPlayer: media.AVPlayer) => {\n      this.percent = avPlayer.width / avPlayer.height;\n      this.setVideoWH();\n      this.durationTime = this.getDurationTime();\n      setInterval(() => { // 更新当前时间。\n        if (!this.isSwiping) {\n          this.currentTime = this.getCurrentTime();\n        }\n      }, SET_INTERVAL);\n    });\n\n    // 情况一：HTTP视频播放。\n    this.avPlayer.url = \"http://media.iyuns.top:1000/http/720p_1m.mp4\";\n\n    // 情况二：HLS视频播放。\n    // this.avPlayer.url = \"http://media.iyuns.top:1000/720-270-480.m3u8\";\n\n    // 情况三：DASH视频播放。\n    // this.avPlayer.url = \"http://media.iyuns.top:1000/dash/720p/720-1/720-1.mpd\";\n\n    // 情况四：通过setMediaSource设置自定义头域及播放优选参数实现初始播放参数设置，以流媒体HTTP点播为例。\n    /*\n    let mediaSource : media.MediaSource = media.createMediaSourceWithUrl(\"http://media.iyuns.top:1000/http/720p_1m.mp4\", {\"\":\"\"});\n    // 设置播放策略，设置为缓冲区数据为20s。\n    let playbackStrategy : media.PlaybackStrategy = {preferredBufferDuration: 20};\n    // 为avPlayer设置媒体来源和播放策略。\n    this.avPlayer.setMediaSource(mediaSource, playbackStrategy);\n     **/\n\n    // 情况五：HLS切码率。\n    /*\n    this.avPlayer.url = \"https://upftimae.dailyworkout.cn/videos/course/c800f81a209b5ee7891f1128ed301db/4/master.m3u8\";\n    let bitrate: number = 0;\n    // 监听当前HLS协议流可用的码率。\n    this.avPlayer.on('availableBitrates', (bitrates: Array<number>) => {\n      console.info('availableBitrates called, and availableBitrates length is: ' + bitrates.length);\n      this.bitrate = bitrates[0]; // 保存需要切换的码率。\n    })\n    // 监听码率设置是否生效。\n    this.avPlayer.on('bitrateDone', (bitrate: number) => {\n      console.info('bitrateDone called, and bitrate value is: ' + bitrate);\n    })\n     **/\n\n    // 情况六：DASH切换音视频轨道。\n    /*\n    this.avPlayer.url = \"http://poster-inland.hwcloudtest.cn/AiMaxEngine/ProductionEnvVideo/DASH_SDR_MultiAudio_MultiSubtitle_yinHeHuWeiDui3/DASH_SDR_MultiAudio_MultiSubtitle_yinHeHuWeiDui3.mpd\";\n    this.avPlayer.getTrackDescription((error: BusinessError, arrList: Array<media.MediaDescription>) => {\n      if (arrList != null) {\n        for (let i = 0; i < arrList.length; i++) {\n          let propertyIndex: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_TRACK_INDEX];\n          let propertyType: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_TRACK_TYPE];\n          let propertyWidth: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_WIDTH];\n          let propertyHeight: Object = arrList[i][media.MediaDescriptionKey.MD_KEY_HEIGHT];\n          if (propertyType == media.MediaType.MEDIA_TYPE_VID && propertyWidth == 1920 && propertyHeight == 1080) {\n            this.videoTrackIndex = parseInt(propertyIndex.toString()); // 获取1080p视频轨道索引。\n          }\n        }\n      } else {\n        console.error(`getTrackDescription fail, error:${error}`);\n      }\n    });\n     **/\n  }\n\n  // HLS切换码率。\n  changeBitrate(bitrate: number) {\n    if (this.avPlayer == null) {\n      return;\n    }\n    // 设置播放码率。\n    try {\n      this.avPlayer.setBitrate(bitrate);\n    } catch (error) {\n      console.error(`${this.tag}: setBitrate failed, error message is = ${JSON.stringify(error.message)}`);\n    }\n  }\n\n  // DASH切换音视频轨道。\n  changeTrack(track: number) {\n    if (this.avPlayer == null) {\n      return;\n    }\n    // 切换至目标视频轨道。\n    try {\n      this.avPlayer.selectTrack(track);\n    } catch (error) {\n      console.error(`${this.tag}: selectTrack failed, error message is = ${JSON.stringify(error.message)}`);\n    }\n    // 取消选择目标视频轨道。\n    /*\n    try {\n      this.avPlayer.deselectTrack(track);\n    } catch (error) {\n      console.error(`${this.tag}: deselectTrack failed, error message is = ${JSON.stringify(error.message)}`);\n    }\n     **/\n  }\n\n  avPlay(): void {\n    if (this.avPlayer) {\n      try {\n        this.avPlayer.play();\n      } catch (e) {\n        console.error(`${this.tag}: avPlay = ${JSON.stringify(e)}`);\n      }\n    }\n  }\n\n  avPause(): void {\n    if (this.avPlayer) {\n      try {\n        this.avPlayer.pause();\n        console.info(`${this.tag}: avPause==`);\n      } catch (e) {\n        console.error(`${this.tag}: avPause== ${JSON.stringify(e)}`);\n      }\n    }\n  }\n\n  async avSeek(seekTime: number, mode: SliderChangeMode): Promise<void> {\n    if (this.avPlayer) {\n      try {\n        console.info(`${this.tag}: videoSeek  seekTime== ${seekTime}`);\n        this.avPlayer.seek(seekTime, 2);\n        this.currentTime = seekTime;\n      } catch (e) {\n        console.error(`${this.tag}: videoSeek== ${JSON.stringify(e)}`);\n      }\n    }\n  }\n\n  avSetSpeed(speed: number): void {\n    if (this.avPlayer) {\n      try {\n        this.avPlayer.setSpeed(speed);\n        console.info(`${this.tag}: avSetSpeed enum ${speed}`);\n      } catch (e) {\n        console.error(`${this.tag}: avSetSpeed == ${JSON.stringify(e)}`);\n      }\n    }\n  }\n\n  // 注册avplayer回调函数。\n  async setAVPlayerCallback(callback: (avPlayer: media.AVPlayer) => void, vType?: number): Promise<void> {\n    // seek操作结果回调函数。\n    if (this.avPlayer == null) {\n      console.error(`${this.tag}: avPlayer has not init!`);\n      return;\n    }\n    this.avPlayer.on('seekDone', (seekDoneTime) => {\n      console.info(`${this.tag}: setAVPlayerCallback AVPlayer seek succeeded, seek time is ${seekDoneTime}`);\n    });\n    this.avPlayer.on('speedDone', (speed) => {\n      console.info(`${this.tag}: setAVPlayerCallback AVPlayer speedDone, speed is ${speed}`);\n    });\n    // error回调监听函数,当avPlayer在操作过程中出现错误时调用reset接口触发重置流程。\n    this.avPlayer.on('error', (err) => {\n      console.error(`${this.tag}: setAVPlayerCallback Invoke avPlayer failed ${JSON.stringify(err)}`);\n      if (this.avPlayer == null) {\n        console.error(`${this.tag}: avPlayer has not init on error`);\n        return;\n      }\n      this.avPlayer.reset();\n    });\n    // 状态机变化回调函数。\n    this.avPlayer.on('stateChange', async (state, reason) => {\n      if (this.avPlayer == null) {\n        console.info(`${this.tag}: avPlayer has not init on state change`);\n        return;\n      }\n      switch (state) {\n        case 'idle': // 成功调用reset接口后触发该状态机上报。\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state idle called.`);\n          break;\n        case 'initialized': // avplayer 设置播放源后触发该状态上报。\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state initialized called.`);\n          if (this.surfaceId) {\n            this.avPlayer.surfaceId = this.surfaceId; // 设置显示画面，当播放的资源为纯音频时无需设置。\n            console.info(`${this.tag}: setAVPlayerCallback this.avPlayer.surfaceId = ${this.avPlayer.surfaceId}`);\n            this.avPlayer.prepare();\n          }\n          break;\n        case 'prepared': // prepare调用成功后上报该状态机。\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state prepared called.`);\n          this.avPlayer.on('bufferingUpdate', (infoType: media.BufferingInfoType, value: number) => {\n            console.info(`${this.tag}: bufferingUpdate called, infoType value: ${infoType}, value:${value}}`);\n          })\n          this.durationTime = this.avPlayer.duration;\n          this.currentTime = this.avPlayer.currentTime;\n          this.avPlayer.play(); // 调用播放接口开始播放。\n          console.info(`${this.tag}:\n            setAVPlayerCallback speedSelect: ${this.speedSelect}, duration: ${this.durationTime}`);\n          if (this.speedSelect != -1) {\n            switch (this.speedSelect) {\n              case SPEED_ZERO:\n                this.avSetSpeed(media.PlaybackSpeed.SPEED_FORWARD_1_00_X);\n                break;\n              case SPEED_ONE:\n                this.avSetSpeed(media.PlaybackSpeed.SPEED_FORWARD_1_25_X);\n                break;\n              case SPEED_TWO:\n                this.avSetSpeed(media.PlaybackSpeed.SPEED_FORWARD_1_75_X);\n                break;\n              case SPEED_THREE:\n                this.avSetSpeed(media.PlaybackSpeed.SPEED_FORWARD_2_00_X);\n                break;\n            }\n          }\n          callback(this.avPlayer);\n          break;\n        case 'playing': // play成功调用后触发该状态机上报。\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state playing called.`);\n          if (this.intervalID != -1) {\n            clearInterval(this.intervalID)\n          }\n          this.intervalID = setInterval(() => { // 更新当前时间。\n            AppStorage.setOrCreate('durationTime', this.durationTime);\n            AppStorage.setOrCreate('currentTime', this.currentTime);\n          }, 100);\n          let eventDataTrue: emitter.EventData = {\n            data: {\n              'flag': true\n            }\n          };\n          let innerEventTrue: emitter.InnerEvent = {\n            eventId: 2,\n            priority: emitter.EventPriority.HIGH\n          };\n          emitter.emit(innerEventTrue, eventDataTrue);\n          break;\n        case 'completed': // 播放结束后触发该状态机上报。\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state completed called.`);\n          let eventDataFalse: emitter.EventData = {\n            data: {\n              'flag': false\n            }\n          };\n          let innerEvent: emitter.InnerEvent = {\n            eventId: 1,\n            priority: emitter.EventPriority.HIGH\n          };\n          emitter.emit(innerEvent, eventDataFalse);\n          if (this.intervalID != -1) {\n            clearInterval(this.intervalID)\n          }\n          this.avPlayer.off('bufferingUpdate')\n          AppStorage.setOrCreate('currentTime', this.durationTime);\n          break;\n        case 'released':\n          console.info(`${this.tag}: setAVPlayerCallback released called.`);\n          break\n        case 'stopped':\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state stopped called.`);\n          break\n        case 'error':\n          console.error(`${this.tag}: setAVPlayerCallback AVPlayer state error called.`);\n          break\n        case 'paused':\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state paused called.`);\n          break\n        default:\n          console.info(`${this.tag}: setAVPlayerCallback AVPlayer state unknown called.`);\n          break;\n      }\n    });\n    // 时间上报监听函数。\n    this.avPlayer.on('timeUpdate', (time: number) => {\n      this.currentTime = time;\n    });\n  }\n\n  aboutToAppear() {\n    this.windowWidth = display.getDefaultDisplaySync().width;\n    this.windowHeight = display.getDefaultDisplaySync().height;\n    if (this.percent >= 1) { // 横向视频。\n      this.surfaceW = Math.round(this.windowWidth * PROPORTION);\n      this.surfaceH = Math.round(this.surfaceW / this.percent);\n    } else { // 纵向视频。\n      this.surfaceH = Math.round(this.windowHeight * PROPORTION);\n      this.surfaceW = Math.round(this.surfaceH * this.percent);\n    }\n    this.isPaused = true;\n    this.context = this.getUIContext().getHostContext();\n  }\n\n  aboutToDisappear() {\n    if (this.avPlayer == null) {\n      console.info(`${this.tag}: avPlayer has not init aboutToDisappear`);\n      return;\n    }\n    this.avPlayer.release((err) => {\n      if (err == null) {\n        console.info(`${this.tag}: videoRelease release success`);\n      } else {\n        console.error(`${this.tag}: videoRelease release failed, error message is = ${JSON.stringify(err.message)}`);\n      }\n    });\n    emitter.off(innerEventFalse.eventId);\n  }\n\n  onPageHide() {\n    this.avPause();\n    this.isPaused = false;\n  }\n\n  onPageShow() {\n    emitter.on(innerEventTrue, (res: emitter.EventData) => {\n      if (res.data) {\n        this.isPaused = res.data.flag;\n        this.XComponentFlag = res.data.flag;\n      }\n    });\n    emitter.on(innerEventFalse, (res: emitter.EventData) => {\n      if (res.data) {\n        this.isPaused = res.data.flag;\n      }\n    });\n    emitter.on(innerEventWH, (res: emitter.EventData) => {\n      if (res.data) {\n        this.windowWidth = res.data.width;\n        this.windowHeight = res.data.height;\n        this.setVideoWH();\n      }\n    });\n  }\n\n  setVideoWH(): void {\n    if (this.percent >= 1) { // 横向视频。\n      this.surfaceW = Math.round(this.windowWidth * PROPORTION);\n      this.surfaceH = Math.round(this.surfaceW / this.percent);\n    } else { // 纵向视频。\n      this.surfaceH = Math.round(this.windowHeight * PROPORTION);\n      this.surfaceW = Math.round(this.surfaceH * this.percent);\n    }\n  }\n\n  @Builder\n  CoverXComponent() {\n    // ...\n  }\n\n  build() {\n    // ...\n  }\n}\n"
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
990427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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