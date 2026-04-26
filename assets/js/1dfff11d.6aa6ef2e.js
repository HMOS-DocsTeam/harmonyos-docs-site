"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["895265"], {
556669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_using_right_streamusage_and_sourcetype_using_right_streamusage_and_sourcetype_md_1df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-using-right-streamusage-and-sourcetype-using-right-streamusage-and-sourcetype-md-1df.json
var site_docs_audio_kit_using_right_streamusage_and_sourcetype_using_right_streamusage_and_sourcetype_md_1df_namespaceObject = JSON.parse('{"id":"audio-kit/using-right-streamusage-and-sourcetype/using-right-streamusage-and-sourcetype","title":"使用合适的音频流类型","description":"音频流类型是定义音频数据播放和录制方式的关键属性。对于播放流，其类型由StreamUsage确定；对于录制流，则由SourceType决定。音频流类型对音量控制、音频焦点管理以及输入/输出设备的选择具有决定性影响。","source":"@site/docs/audio-kit/using-right-streamusage-and-sourcetype/using-right-streamusage-and-sourcetype.md","sourceDirName":"audio-kit/using-right-streamusage-and-sourcetype","slug":"/audio-kit/using-right-streamusage-and-sourcetype/","permalink":"/harmonyos-docs-site/audio-kit/using-right-streamusage-and-sourcetype/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用合适的音频流类型","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-right-streamusage-and-sourcetype","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Audio Kit简介","permalink":"/harmonyos-docs-site/audio-kit/audio-kit-intro/"},"next":{"title":"音频焦点介绍","permalink":"/harmonyos-docs-site/audio-kit/audio-session/audio-playback-concurrency/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/using-right-streamusage-and-sourcetype/using-right-streamusage-and-sourcetype.md


const frontMatter = {
	title: '使用合适的音频流类型',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-right-streamusage-and-sourcetype',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用合适的音频流类型';

const assets = {

};



const toc = [{
  "value": "常用的音频流类型及其适用场景",
  "id": "常用的音频流类型及其适用场景",
  "level": 2
}, {
  "value": "播放音频流类型",
  "id": "播放音频流类型",
  "level": 3
}, {
  "value": "录制音频流类型",
  "id": "录制音频流类型",
  "level": 3
}, {
  "value": "流类型对音频业务的影响",
  "id": "流类型对音频业务的影响",
  "level": 2
}, {
  "value": "音量控制",
  "id": "音量控制",
  "level": 3
}, {
  "value": "音频焦点调整",
  "id": "音频焦点调整",
  "level": 3
}, {
  "value": "输入/输出设备选择",
  "id": "输入输出设备选择",
  "level": 3
}, {
  "value": "设置音频流类型",
  "id": "设置音频流类型",
  "level": 2
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
        id: "使用合适的音频流类型",
        children: "使用合适的音频流类型"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-kit-intro#%E9%9F%B3%E9%A2%91%E6%B5%81%E4%BB%8B%E7%BB%8D",
        children: "音频流"
      }), "类型是定义音频数据播放和录制方式的关键属性。对于播放流，其类型由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
        children: "StreamUsage"
      }), "确定；对于录制流，则由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
        children: "SourceType"
      }), "决定。音频流类型对音量控制、音频焦点管理以及输入/输出设备的选择具有决定性影响。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保音频行为符合预期并提供优质的用户体验，应用开发者应根据具体业务场景和实际需求，为音频选择恰当的流类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接下来，文档将介绍", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B8%B8%E7%94%A8%E7%9A%84%E9%9F%B3%E9%A2%91%E6%B5%81%E7%B1%BB%E5%9E%8B%E5%8F%8A%E5%85%B6%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "常用的音频流类型及其适用场景"
      }), "，同时说明", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B5%81%E7%B1%BB%E5%9E%8B%E5%AF%B9%E9%9F%B3%E9%A2%91%E4%B8%9A%E5%8A%A1%E7%9A%84%E5%BD%B1%E5%93%8D",
        children: "不同流类型对音频业务的影响"
      }), "。最后，指导开发者在采用不同方法实现音频播放和音频录制时，应当如何", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E7%BD%AE%E9%9F%B3%E9%A2%91%E6%B5%81%E7%B1%BB%E5%9E%8B",
        children: "设置音频流类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用的音频流类型及其适用场景",
      children: "常用的音频流类型及其适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "播放音频流类型",
      children: "播放音频流类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下表中列举常用的播放音频流类型，由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
        children: "StreamUsage"
      }), "定义。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频流使用类型（StreamUsage）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MUSIC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["适用于播放音乐，同样适用于其他媒体场景，如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback",
              children: "使用SoundPool"
            }), "播放简短音效等。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MOVIE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于播放短视频、电影、电视剧等各类视频内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_AUDIOBOOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于播放有声读物、新闻、播客等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于游戏内配乐、配音，后台音乐不会被打断；游戏内语音，建议使用STREAM_USAGE_VOICE_COMMUNICATION。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_NAVIGATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于导航场景的语音播报功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_VOICE_MESSAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于播放语音短消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_VOICE_COMMUNICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于VoIP语音通话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_ALARM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于播放闹铃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_RINGTONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于VoIP来电响铃等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_NOTIFICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于播放通知音、提示音。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录制音频流类型",
      children: "录制音频流类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下表中列举常用的录制音频流类型，由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
        children: "SourceType"
      }), "定义。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频流使用类型（SourceType）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_MIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于普通录音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_VOICE_RECOGNITION9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于语音识别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_PLAYBACK_CAPTURE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["（API12已废弃）适用于录制其他应用送到系统中播放的原始音频数据。  AudioKit不再提供内录接口，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture",
              children: "录屏接口AVScreenCapture"
            }), "进行内录。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_VOICE_COMMUNICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于VoIP语音通话，能够增强人声录制，同时抑制环境音等其他非人声。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_VOICE_MESSAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于录制语音短消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_CAMCORDER13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于相机录像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_UNPROCESSED14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于获取麦克风采集到的纯净音频数据（系统不做任何算法处理）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_LIVE20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于直播，在支持的设备上会提供系统回声消除能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "流类型对音频业务的影响",
      children: "流类型对音频业务的影响"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的流类型会影响用户在控制音量时的体验，以及系统在调整音频焦点和选择输入/输出设备时的表现。此外，系统还会根据录制流类型对采集到的音频数据配置对应的优化处理策略，因此录制流类型的选择会影响到录制的音频效果。例如：如果在VoIP通话场景下使用了SOURCE_TYPE_MIC而不是SOURCE_TYPE_VOICE_COMMUNICATION类型，可能会使降噪、环境音消除等优化策略不生效，造成VoIP通话体验不佳。建议开发者根据业务场景选择合适的音频流类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音量控制",
      children: "音量控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["播放流类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
        children: "StreamUsage"
      }), "）决定了音频流所属的音量类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiovolumetype",
        children: "AudioVolumeType"
      }), "），各类音量类型（如媒体、铃声、闹钟、通话等）拥有独立的音量值，在用户界面上可独立调节，相互之间不会影响。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的播放流类型与音量类型的对应关系为："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频流使用类型（StreamUsage）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "音量类型（AudioVolumeType）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MUSIC、MOVIE、AUDIOBOOK、GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体音量（MEDIA）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RINGTONE、NOTIFICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "铃声音量（RINGTONE）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VOICE_COMMUNICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话音量（VOICE_CALL）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALARM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "闹钟音量（ALARM）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频焦点调整",
      children: "音频焦点调整"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频流类型在音频焦点管理中扮演着关键角色，不同类型的音频流具有不同的默认优先级和处理方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用启动音频播放或录制时，系统会根据音频流类型自动申请焦点，这可能会中断其他音频或降低其音量。音频焦点的具体介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency",
        children: "音频焦点介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处仅说明常见的音频流类型影响音频焦点的表现，其他类型可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-audio-focus-management#section17923135513547",
        children: "系统默认焦点策略表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动导航（Navigation）时，正在播放的音乐（Music）音量会自动调低，待导航（Navigation）结束后，音乐（Music）音量将自动恢复。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始播放视频（Movie）时，将会停止正在播放的音乐（Music）；当视频（Movie）播放结束后，音乐（Music）播放不会自动恢复，对应的应用也不会收到任何恢复通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始语音通话（VoiceCommunication）时，将会暂停正在播放的音乐（Music）；当语音通话（VoiceCommunication）结束后，播放音乐（Music）的应用将收到恢复播放的通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音乐（Music）和游戏音频（Game）可以混音播放，两者互不影响。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始录制语音短消息（VoiceMessage）时，会自动暂停正在播放的音乐（Music）；当语音短消息（VoiceMessage）录制结束后，播放音乐（Music）的应用将收到恢复播放的通知。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "输入输出设备选择",
      children: "输入/输出设备选择"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于不同类型的音频流，系统会为其选定相应的输入/输出设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处仅说明常见的音频流类型对应的输入/输出设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音乐（Music）类型音频流的默认输出设备为扬声器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "语音通话（VoiceCommunication）类型音频流的默认输入设备为麦克风，默认输出设备为听筒。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "闹铃（Alarm）类型音频流的默认输出设备为扬声器‌。若先连接蓝牙耳机，再开始播放Alarm音频，则扬声器和蓝牙耳机会同时播放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若默认的输入/输出设备不符合使用诉求，应用也可以调用相关接口主动修改。应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
        children: "使用AudioRenderer开发音频播放功能(ArkTs)"
      }), "时，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#setdefaultoutputdevice12",
        children: "setDefaultOutputDevice"
      }), "接口，设置默认发声设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置音频流类型",
      children: "设置音频流类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可采用多种方法实现音频播放或录音功能，因此，设置音频流类型的方式也各不相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的设置播放音频流类型的方法有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
                children: "使用AudioRenderer开发音频播放功能(ArkTs)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-f/arkts-apis-audio-f#audiocreateaudiorenderer8",
            children: "createAudioRenderer"
          }), "以获取音频渲染器时，传入对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
            children: "StreamUsage"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "createAudioRenderer的参数options类型为AudioRendererOptions，包含AudioRendererInfo渲染器信息，使用AudioRendererInfo.usage可指定StreamUsage音频流类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
                children: "推荐使用OHAudio开发音频播放功能(C/C++)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setrendererinfo",
            children: "OH_AudioStreamBuilder_SetRendererInfo"
          }), "接口时，传入对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
            children: "OH_AudioStream_Usage"
          }), "指定音频流类型。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback",
                children: "使用AVPlayer播放音频(ArkTS)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过设置AVPlayer的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#%E5%B1%9E%E6%80%A7",
            children: "属性"
          }), "audioRendererInfo来实现。AVPlayer.audioRendererInfo的类型为audio.AudioRendererInfo。使用AudioRendererInfo.usage可指定", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
            children: "StreamUsage"
          }), "音频流类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(452448)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设置AVPlayer的audioRendererInfo属性时，只允许在initialized状态下设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果应用未主动设置该属性，AVPlayer将进行默认处理。当媒体源包含视频时，usage的默认值为STREAM_USAGE_MOVIE；否则，usage的默认值为STREAM_USAGE_MUSIC。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback",
                children: "使用AVPlayer播放音频(C/C++)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setaudiorendererinfo",
            children: "OH_AVPlayer_SetAudioRendererInfo"
          }), "接口时，传入对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
            children: "OH_AudioStream_Usage"
          }), "指定音频流类型。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback",
                children: "使用SoundPool播放短音频(ArkTS)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreatesoundpool10",
            children: "createSoundPool"
          }), "接口时，传入对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
            children: "StreamUsage"
          }), "指定音频流类型。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的设置录制音频流类型的方法有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/audio-kit/audio-recording/using-audiocapturer-for-recording",
                children: "使用AudioCapturer开发音频录制功能(ArkTs)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-f/arkts-apis-audio-f#audiocreateaudiocapturer8",
            children: "createAudioCapturer"
          }), "接口时，传入对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
            children: "SourceType"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "createAudioCapturer的参数options类型为AudioCapturerOptions，包含AudioCapturerInfo采集器信息，使用AudioCapturerInfo.source可指定SourceType音源类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
                children: "推荐使用OHAudio开发音频录制功能(C/C++)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setcapturerinfo",
            children: "OH_AudioStreamBuilder_SetCapturerInfo"
          }), "接口时，传入对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
            children: "OH_AudioStream_SourceType"
          }), "指定音源类型。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording",
                children: "使用AVRecorder录制音频(ArkTS)"
              })
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#prepare9-1",
            children: "AVRecorder.prepare"
          }), "接口时，传入对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-e/arkts-apis-media-e#audiosourcetype9",
            children: "AudioSourceType"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AVRecorder.prepare的参数config类型为AVRecorderConfig，使用AVRecorderConfig.audioSourceType可指定音源类型。"
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
452448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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