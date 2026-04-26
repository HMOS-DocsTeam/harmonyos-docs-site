"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465123"], {
74739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_playback_c_using_ndk_avplayer_for_playback_using_ndk_avplayer_for_playback_md_f34_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-playback-c-using-ndk-avplayer-for-playback-using-ndk-avplayer-for-playback-md-f34.json
var site_docs_media_kit_media_kit_dev_c_media_playback_c_using_ndk_avplayer_for_playback_using_ndk_avplayer_for_playback_md_f34_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback/using-ndk-avplayer-for-playback","title":"使用AVPlayer播放音频(C/C++)","description":"使用AVPlayer可以实现端到端播放原始媒体资源，本开发指导将以完整地播放一首音乐作为示例，向开发者讲解AVPlayer音频播放相关功能。","source":"@site/docs/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback/using-ndk-avplayer-for-playback.md","sourceDirName":"media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback","slug":"/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AVPlayer播放音频(C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avplayer-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"转码常见问题","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq/"},"next":{"title":"使用AVPlayer播放视频(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-video-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback/using-ndk-avplayer-for-playback.md


const frontMatter = {
	title: '使用AVPlayer播放音频(C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avplayer-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVPlayer播放音频(C/C++)';

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
        id: "使用avplayer播放音频cc",
        children: "使用AVPlayer播放音频(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avplayer",
        children: "AVPlayer"
      }), "可以实现端到端播放原始媒体资源，本开发指导将以完整地播放一首音乐作为示例，向开发者讲解AVPlayer音频播放相关功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放的全流程包含：创建AVPlayer，设置回调监听函数，设置播放资源，设置播放参数（音量/倍速/焦点模式），播放控制（播放/暂停/跳转/停止），重置，销毁播放器实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行应用开发的过程中，开发者可以通过AVPlayer的信息监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfocallback",
        children: "OH_AVPlayerOnInfoCallback"
      }), "和错误监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeronerrorcallback",
        children: "OH_AVPlayerOnErrorCallback"
      }), "主动获取播放过程信息。如果应用在音频播放器处于错误状态时执行操作，系统可能会抛出异常或生成其他未定义的行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 播放状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(267463)/* ["default"] */.A) + "",
        width: "1474",
        height: "1108"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerstate",
        children: "AVPlayerState"
      }), "。当播放处于prepared / playing / paused / completed状态时，播放引擎处于工作状态，这需要占用系统较多的运行内存。当客户端暂时不使用播放器时，调用reset()或release()回收内存资源，做好资源利用。"]
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
        }), "，避免播放被系统强制中断。此功能仅提供ArkTS API。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用在播放过程中，若播放的媒体数据涉及音频，根据系统音频管理策略（参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-session/audio-playback-concurrency",
          children: "处理音频焦点事件"
        }), "），可能会被其他应用打断，建议通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setoninfocallback",
          children: "OH_AVPlayer_SetOnInfoCallback()"
        }), "主动监听音频打断事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayeroninfotype",
          children: "AV_INFO_TYPE_INTERRUPT_EVENT"
        }), "，根据其内容提示，做出相应的处理，避免出现应用状态与预期效果不一致的问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["面对设备同时连接多个音频输出设备的情况，建议通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setoninfocallback",
          children: "OH_AVPlayer_SetOnInfoCallback()"
        }), "主动监听音频输出设备改变事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayeroninfotype",
          children: "AV_INFO_TYPE_AUDIO_OUTPUT_DEVICE_CHANGE"
        }), "，从而做出相应处理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用在播放过程中，系统内部可能异常，如网络数据下载失败、媒体服务死亡不可用等，建议通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setonerrorcallback",
          children: "OH_AVPlayer_SetOnErrorCallback()"
        }), "接口设置错误监听回调函数，根据不同错误类型，做出相应处理，避免出现播放异常。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setoninfocallback",
          children: "OH_AVPlayer_SetOnInfoCallback()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setonerrorcallback",
          children: "OH_AVPlayer_SetOnErrorCallback()"
        }), "接口分别设置信息监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfocallback",
          children: "OH_AVPlayerOnInfoCallback"
        }), "和错误监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeronerrorcallback",
          children: "OH_AVPlayerOnErrorCallback"
        }), "。当应用成功设置信息监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfocallback",
          children: "OH_AVPlayerOnInfoCallback"
        }), "后，不再执行通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setplayercallback",
          children: "OH_AVPlayer_SetPlayerCallback()"
        }), "设置的信息监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfo",
          children: "OH_AVPlayerOnInfo"
        }), "；当应用成功设置错误监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeronerrorcallback",
          children: "OH_AVPlayerOnErrorCallback"
        }), "后，不再执行通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setplayercallback",
          children: "OH_AVPlayer_SetPlayerCallback()"
        }), "设置的错误监听回调函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeronerror",
          children: "OH_AVPlayerOnError"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接动态库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libavplayer.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setoninfocallback",
        children: "OH_AVPlayer_SetOnInfoCallback()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setonerrorcallback",
        children: "OH_AVPlayer_SetOnErrorCallback()"
      }), "接口设置信息监听回调函数和错误监听回调函数，需要在 CMake 脚本中链接如下动态库："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用系统日志能力时，需引入如下头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并需要在CMake脚本中链接如下动态库:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h",
        children: "avplayer.h"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h",
        children: "avplayer_base.h"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h",
        children: "native_averrors.h"
      }), "头文件，使用音频播放相关API。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avplayer/capi-avplayer",
        children: "AVPlayer API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建AVPlayer实例：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_create",
            children: "OH_AVPlayer_Create()"
          }), "，AVPlayer初始化为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerstate",
            children: "AV_IDLE"
          }), "状态。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置回调监听函数：使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setoninfocallback",
            children: "OH_AVPlayer_SetOnInfoCallback()"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setonerrorcallback",
            children: "OH_AVPlayer_SetOnErrorCallback()"
          }), "接口设置信息监听回调函数和错误监听回调函数，搭配全流程场景使用。支持的监听事件包括："]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "OH_AVPlayerOnInfoCallback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听播放器的过程信息。  需要播放器在AV_IDLE状态下、未调用设置资源接口前完成设置监听，若在调用设置资源接口后再设置监听，可能导致无法收到资源设置过程中上报的OH_AVPlayerOnInfoCallback事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVPlayerOnErrorCallback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听播放器的错误信息。  需要播放器在AV_IDLE状态下、未调用设置资源接口前完成设置监听，若在调用设置资源接口后再设置监听，可能导致无法收到资源设置过程中上报的OH_AVPlayerOnErrorCallback事件。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setoninfocallback",
            children: "OH_AVPlayer_SetOnInfoCallback()"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setonerrorcallback",
            children: "OH_AVPlayer_SetOnErrorCallback()"
          }), "接口设置信息监听回调函数和错误监听回调函数，可以获取更多信息，还可以通过设置 userData 区分不同播放实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置资源：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_seturlsource",
            children: "OH_AVPlayer_SetURLSource()"
          }), "，设置属性url，AVPlayer进入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerstate",
            children: "AV_INITIALIZED"
          }), "状态。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）设置音频流类型：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setaudiorendererinfo",
            children: "OH_AVPlayer_SetAudioRendererInfo()"
          }), "，设置AVPlayer音频流类型。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）设置音频打断模式：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setaudiointerruptmode",
            children: "OH_AVPlayer_SetAudioInterruptMode()"
          }), "，设置AVPlayer音频流打断模式。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["准备播放：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_prepare",
            children: "OH_AVPlayer_Prepare()"
          }), "，AVPlayer进入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerstate",
            children: "AV_PREPARED"
          }), "状态，此时可以获取时长，设置音量。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）设置音频音效模式：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setaudioeffectmode",
            children: "OH_AVPlayer_SetAudioEffectMode()"
          }), "，设置AVPlayer音频音效模式。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["音频播控：播放", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_play",
            children: "OH_AVPlayer_Play()"
          }), "，暂停", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_pause",
            children: "OH_AVPlayer_Pause()"
          }), "，跳转", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_seek",
            children: "OH_AVPlayer_Seek()"
          }), "，停止", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_stop",
            children: "OH_AVPlayer_Stop()"
          }), "等操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）更换资源：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_reset",
            children: "OH_AVPlayer_Reset()"
          }), "重置资源，AVPlayer重新进入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerstate",
            children: "AV_IDLE"
          }), "状态，允许更换资源url。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["退出播放：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_release",
            children: "OH_AVPlayer_Release()"
          }), "销毁实例，AVPlayer进入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerstate",
            children: "AV_RELEASED"
          }), "状态，退出播放。之后再操作AVPlayer实例则行为未知，可能导致应用进程崩溃，应用闪退。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行完整示例",
      children: "运行完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVPlayer/AVPlayerNDKAudio",
            children: "示例工程"
          }), "，并将示例工程的以下资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVPlayerNDKAudio\nentry/src/main/ets/\n└── pages\n    └── Index.ets (播放界面)\nentry/src/main/\n├── cpp\n│   ├── types\n│   │   └── libentry\n│   │       └── Index.d.ts (NDK函数对应的js映射)\n│   ├── CMakeLists.txt (CMake脚本)\n│   └── napi_init.cpp  (NDK函数)\n└── resources\n    ├── base\n    │   ├── element\n    │   │   ├── color.json\n    │   │   ├── float.json\n    │   │   └── string.json\n    │   └── media\n    │       ├── ic_video_play.svg  (播放键图片资源)\n    │       └── ic_video_pause.svg (暂停键图片资源)\n    └── rawfile\n        └── test_01.mp3 （音频资源）\n"
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
267463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478599-9c4ecdc58c1088663aa56c23773f8133.png");

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