"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["309505"], {
999266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_session_audio_playback_concurrency_audio_playback_concurrency_md_b9c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-session-audio-playback-concurrency-audio-playback-concurrency-md-b9c.json
var site_docs_audio_kit_audio_session_audio_playback_concurrency_audio_playback_concurrency_md_b9c_namespaceObject = JSON.parse('{"id":"audio-kit/audio-session/audio-playback-concurrency/audio-playback-concurrency","title":"音频焦点介绍","description":"在应用播放或录制声音时，常出现与其他音频流的并发或中断情况，这对用户体验构成显著影响。例如，当应用启动视频播放时，若后台正在播放音乐，用户会期望音乐能自动暂停，以确保视频音频优先播放，这正是音频焦点功能的体现。对于涉及音频服务的应用而言，妥善地管理音频焦点非常重要，它可以显著提升用户的音频体验。","source":"@site/docs/audio-kit/audio-session/audio-playback-concurrency/audio-playback-concurrency.md","sourceDirName":"audio-kit/audio-session/audio-playback-concurrency","slug":"/audio-kit/audio-session/audio-playback-concurrency/","permalink":"/harmonyos-docs-site/audio-kit/audio-session/audio-playback-concurrency/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"音频焦点介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback-concurrency","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用合适的音频流类型","permalink":"/harmonyos-docs-site/audio-kit/using-right-streamusage-and-sourcetype/"},"next":{"title":"音频会话管理","permalink":"/harmonyos-docs-site/audio-kit/audio-session/audio-session-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-session/audio-playback-concurrency/audio-playback-concurrency.md


const frontMatter = {
	title: '音频焦点介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback-concurrency',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频焦点介绍';

const assets = {

};



const toc = [{
  "value": "音频焦点",
  "id": "音频焦点",
  "level": 2
}, {
  "value": "申请音频焦点",
  "id": "申请音频焦点",
  "level": 3
}, {
  "value": "释放音频焦点",
  "id": "释放音频焦点",
  "level": 3
}, {
  "value": "音频焦点策略",
  "id": "音频焦点策略",
  "level": 3
}, {
  "value": "焦点模式",
  "id": "焦点模式",
  "level": 3
}, {
  "value": "处理音频焦点变化",
  "id": "处理音频焦点变化",
  "level": 3
}, {
  "value": "典型场景",
  "id": "典型场景",
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
        id: "音频焦点介绍",
        children: "音频焦点介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用播放或录制声音时，常出现与其他音频流的并发或中断情况，这对用户体验构成显著影响。例如，当应用启动视频播放时，若后台正在播放音乐，用户会期望音乐能自动暂停，以确保视频音频优先播放，这正是音频焦点功能的体现。对于涉及音频服务的应用而言，妥善地管理音频焦点非常重要，它可以显著提升用户的音频体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档将介绍系统的音频焦点策略，以及应对焦点变化的方法。同时，系统提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-session-management",
        children: "音频会话管理"
      }), "机制，允许应用自定义其音频流的焦点策略。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频焦点",
      children: "音频焦点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统预设了默认的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "音频焦点策略"
      }), "，根据音频流的类型及启动的先后顺序，对所有播放和录制音频流进行统一管理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在启动播放或录制功能前，应用需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%B3%E8%AF%B7%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9",
        children: "申请音频焦点"
      }), "；而在播放或录制结束后，应适时", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%87%8A%E6%94%BE%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9",
        children: "释放音频焦点"
      }), "。在播放或录制的过程中，可能会因其他音频流的介入而失去焦点，此时，应用需依据焦点变化采取相应措施", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A4%84%E7%90%86%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E5%8F%98%E5%8C%96",
        children: "处理音频焦点变化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于应用而言，为了确保为用户提供优质的音频焦点体验，应当注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在启动播放或录制操作前，应根据音频的具体用途，选择并", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/using-right-streamusage-and-sourcetype",
          children: "使用合适的音频流类型"
        }), "，即准确设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
          children: "StreamUsage"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
          children: "SourceType"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在播放或录制的过程中，需通过监听音频焦点来", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%A4%84%E7%90%86%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E5%8F%98%E5%8C%96",
          children: "处理音频焦点变化"
        }), "事件，并在接收到音频焦点中断事件（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
          children: "InterruptEvent"
        }), "）时，采取相应的处理措施。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果应用程序有意主动管理音频焦点，可使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-session/audio-session-management",
          children: "音频会话管理"
        }), "相关的接口进行操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请音频焦点",
      children: "申请音频焦点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当应用开始播放或录制音频时，系统将自动为相应的音频流申请音频焦点。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
        children: "使用AudioRenderer开发音频播放功能(ArkTs)"
      }), "，当调用AudioRenderer的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#start8",
        children: "start"
      }), "时，系统会自动为应用请求音频焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若音频焦点请求成功，音频流将正常启动；反之，若音频焦点请求被拒绝，音频流将无法开始播放或录制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议应用主动通过监听音频焦点来", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A4%84%E7%90%86%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E5%8F%98%E5%8C%96",
        children: "处理音频焦点变化"
      }), "事件，一旦音频焦点请求被拒绝，应用将接收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
        children: "音频焦点事件（InterruptEvent）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用希望只申请一次焦点，连续播放多条音频流不被中断，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-session-management",
        children: "音频会话管理"
      }), "相关的接口进行操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "特殊场景："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "短音播放"
            })
          }), "：若应用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback",
            children: "使用SoundPool播放短音频(ArkTS)"
          }), "，且", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
            children: "StreamUsage"
          }), "指定为Music、Movie、AudioBook等类型，播放短音，则其申请焦点时默认为并发模式，不会影响其他音频。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "静音播放"
            })
          }), "：若应用以静音状态开始播放音频（或视频），并且希望静音阶段不影响其他音频，当后续解除静音的时候，再以正常策略申请音频焦点，则可以调用静音并发播放模式的相关接口。具体可参考："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback",
              children: "使用AVPlayer播放音频(ArkTS)"
            }), "，可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#setmediamuted12",
              children: "setMediaMuted"
            }), "函数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
              children: "使用AudioRenderer开发音频播放功能(ArkTs)"
            }), "，可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#setsilentmodeandmixwithothers12",
              children: "setSilentModeAndMixWithOthers"
            }), "函数。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
              children: "使用OHAudio开发音频播放功能(C/C++)"
            }), "，可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_setsilentmodeandmixwithothers",
              children: "OH_AudioRenderer_SetSilentModeAndMixWithOthers"
            }), "函数。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "释放音频焦点",
      children: "释放音频焦点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当应用结束播放或录制音频时，系统会自动为相应的音频流释放音频焦点。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
        children: "使用AudioRenderer开发音频播放功能(ArkTs)"
      }), "，当调用AudioRenderer的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#pause8",
        children: "pause"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#stop8",
        children: "stop"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#release8",
        children: "release"
      }), "等时，系统会为其释放音频焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当音频流释放音频焦点时，若存在受其影响的其他音频流（如音量被调低或被暂停的流），将触发恢复操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用不希望在音频流停止时立即释放音频焦点，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-session-management",
        children: "音频会话管理"
      }), "的相关接口，实现音频焦点释放的延迟效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用通过激活", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-session-management",
        children: "音频会话管理"
      }), "申请过焦点，需要结束AudioSession以释放焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频焦点策略",
      children: "音频焦点策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当音频流申请或释放音频焦点时，系统依据音频焦点策略，对所有音频流（包括播放和录制）实施焦点管理，决定哪些音频流可正常运行，哪些需被打断或执行其他操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统预设的默认音频焦点策略，主要依据音频流类型（即播放流的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
        children: "StreamUsage"
      }), "和录制流的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
        children: "SourceType"
      }), "）及音频流启动的顺序进行决策。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为防止焦点变化不符合预期，应用在启动播放或录制前，应根据音频流的用途，准确设置StreamUsage或SourceType。关于各类型的详细说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/using-right-streamusage-and-sourcetype",
        children: "使用合适的音频流类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的音频焦点场景示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始播放Movie音频流时，将导致正在播放的Music音频流暂停，但Movie播放停止后，Music不会收到恢复播放的通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始Navigation音频流时，会自动降低正在播放的Music音频流音量，Navigation停止后，Music音量将恢复至原样。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Music音频流与Game音频流可并发混音播放，相互之间不会影响音量或播放状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VoiceCommunication开始播放时，将暂停正在播放的Music音频流，VoiceCommunication停止后，Music将收到恢复播放的通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开始录制VoiceMessage时，Music音频流会被暂停，VoiceMessage录制停止后，Music将收到恢复播放的通知。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若默认的音频焦点策略无法满足特定场景的需求，应用程序可利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-session-management",
        children: "音频会话管理"
      }), "，调整本应用音频流所采用的音频焦点策略。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "焦点模式",
      children: "焦点模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对同一应用创建的多个音频流，应用可通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#interruptmode9",
        children: "焦点模式（InterruptMode）"
      }), "，选择由应用自主管控，或由系统统一管理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统预设了两种焦点模式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "共享焦点模式（SHARE_MODE）：同一应用创建的多个音频流共享一个音频焦点。这些音频流之间的并发规则由应用自行决定，音频焦点策略不会介入。仅当其他应用创建的音频流与该应用的音频流同时播放时，才会触发音频焦点策略的管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "独立焦点模式（INDEPENDENT_MODE）：应用创建的每个音频流均独立拥有一个音频焦点，多个音频流同时播放时，将触发音频焦点策略的管理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可根据需求选择合适的焦点模式。在创建音频流时，系统默认采用共享焦点模式（SHARE_MODE），应用可主动设置所需模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置焦点模式的方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback",
          children: "使用AVPlayer播放音频(ArkTS)"
        }), "，则可以通过修改AVPlayer的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#%E5%B1%9E%E6%80%A7",
          children: "audioInterruptMode"
        }), "属性进行设置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback",
          children: "使用AVPlayer播放音频(C/C++)"
        }), "，则可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setaudiointerruptmode",
          children: "OH_AVPlayer_SetAudioInterruptMode"
        }), "函数进行设置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
          children: "使用AudioRenderer开发音频播放功能(ArkTs)"
        }), "，则可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#setinterruptmode9",
          children: "setInterruptMode"
        }), "函数进行设置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
          children: "使用OHAudio开发音频播放功能(C/C++)"
        }), "，则可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setrendererinterruptmode",
          children: "OH_AudioStreamBuilder_SetRendererInterruptMode"
        }), "函数进行设置。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理音频焦点变化",
      children: "处理音频焦点变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用播放或录制音频的过程中，若有其他音频流申请焦点，系统会根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "音频焦点策略"
      }), "进行焦点处理。若判定本音频流的焦点有变化，需要执行暂停、继续、降低音量、恢复音量等操作，则系统会自动执行一些必要的操作，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
        children: "音频焦点事件（InterruptEvent）"
      }), "通知应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因此，为了维持应用和系统的状态一致性，保证良好的用户体验，推荐应用监听音频焦点事件，并在焦点发生变化时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
        children: "InterruptEvent"
      }), "做出必要的响应。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用不同方式开发时，如何监听音频焦点事件："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback",
          children: "使用AVPlayer播放音频(ArkTS)"
        }), "，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#onaudiointerrupt9",
          children: "on('audioInterrupt')"
        }), "接口，监听音频焦点事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
          children: "InterruptEvent"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback",
          children: "使用AVPlayer播放音频(C/C++)"
        }), "，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_setoninfocallback",
          children: "OH_AVPlayer_SetOnInfoCallback()"
        }), "接口，监听音频焦点事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfocallback",
          children: "OH_AVPlayerOnInfoCallback"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
          children: "使用AudioRenderer开发音频播放功能(ArkTs)"
        }), "，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#onaudiointerrupt9",
          children: "on('audioInterrupt')"
        }), "接口，监听音频焦点事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
          children: "InterruptEvent"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
          children: "使用OHAudio开发音频播放功能(C/C++)"
        }), "，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setrenderercallback",
          children: "OH_AudioStreamBuilder_SetRendererCallback"
        }), "接口，监听音频焦点事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct#oh_audiorenderer_oninterruptevent",
          children: "OH_AudioRenderer_OnInterruptEvent"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-recording/using-audiocapturer-for-recording",
          children: "使用AudioCapturer开发音频录制功能(ArkTs)"
        }), "，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#onaudiointerrupt10",
          children: "on('audioInterrupt')"
        }), "接口，监听音频焦点事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
          children: "InterruptEvent"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
          children: "使用OHAudio开发音频录制功能(C/C++)"
        }), "，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setcapturercallback",
          children: "OH_AudioStreamBuilder_SetCapturerCallback"
        }), "接口，监听音频焦点事件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct#oh_audiocapturer_oninterruptevent",
          children: "OH_AudioCapturer_OnInterruptEvent"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在收到音频焦点事件（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
        children: "InterruptEvent"
      }), "）时，需要根据其中信息，做出相应的处理，以保持应用与系统状态一致，带给用户良好的音频体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在音频焦点事件中，应用应重点关注两个信息：打断类型（InterruptForceType）和打断提示（InterruptHint）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打断类型（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#interruptforcetype9",
            children: "InterruptForceType"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "InterruptForceType参数提示应用该焦点变化是否已由系统强制操作："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "强制打断类型（INTERRUPT_FORCE）：由系统进行操作，强制执行。应用收到打断提示后无需再调用系统相关接口，只需做一些必要的处理，例如更新状态、更新界面显示等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "共享打断类型（INTERRUPT_SHARE）：由应用进行操作，应用可以选择响应或忽略，系统不会干涉。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统默认优先采用强制打断类型（INTERRUPT_FORCE），应用无法更改。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(994967)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于一些系统无法强制执行的操作（例如INTERRUPT_HINT_RESUME），会采用共享打断类型（INTERRUPT_SHARE）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打断提示（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#interrupthint",
            children: "InterruptHint"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "InterruptHint参数用于提示应用音频流的状态："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "继续（INTERRUPT_HINT_RESUME）：音频流可恢复播放或录制，仅会接收到PAUSE（暂停提示）之后收到。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "此操作无法由系统强制执行，其对应的InterruptForceType一定为INTERRUPT_SHARE类型。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "暂停（INTERRUPT_HINT_PAUSE）：音频暂停，暂时失去音频焦点。后续待焦点可用时，会再收到INTERRUPT_HINT_RESUME。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "停止（INTERRUPT_HINT_STOP）：音频停止，彻底失去音频焦点。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "降低音量（INTERRUPT_HINT_DUCK）：音频降低音量播放，而不会停止。默认降低至正常音量的20%。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "恢复音量（INTERRUPT_HINT_UNDUCK）：音频恢复正常音量。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型场景",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型焦点的适配场景如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "先播放的音频类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐流类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "后播放的音频类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐流类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐体验"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适配方案"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音乐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MUSIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音乐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MUSIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后播音乐正常播放，先播音乐停止播放，UI变成停止播放状态。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先播音乐应用注册焦点事件监听，接收到INTERRUPT_HINT_STOP事件时，停止音乐播放，并更新UI界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音乐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MUSIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_NAVIGATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航正常播放，音乐降低音量播放。  导航结束后，音乐恢复正常音量。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音乐应用注册焦点事件监听，接收到INTERRUPT_HINT_DUCK和INTERRUPT_HINT_UNDUCK事件时，可以选择更新UI界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MOVIE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "闹铃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_ALARM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "闹铃响起后，视频暂停播放。  闹钟结束后，视频继续播放。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频应用注册焦点事件监听。接收到INTERRUPT_HINT_PAUSE事件时，直接暂停视频播放，并更新UI界面。  当闹铃结束后，视频应用接收到INTERRUPT_HINT_RESUME事件，重新启动播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音乐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MUSIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "来电铃声"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_RINGTONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始响铃，音乐暂停播放。  不接通或者接通再挂断后，音乐恢复播放。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音乐应用注册焦点事件监听。接收到INTERRUPT_HINT_PAUSE事件时，直接暂停音乐播放，并更新UI界面。  当电话结束后，音频应用接收到INTERRUPT_HINT_RESUME事件，重新启动播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音乐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_MUSIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VoIP通话"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STREAM_USAGE_VOICE_COMMUNICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话接通时，音乐暂停播放。  通话挂断后，音乐恢复播放。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音乐应用注册焦点事件监听。  接收到INTERRUPT_HINT_PAUSE事件时，直接暂停音乐播放，并更新UI界面。  当通话结束后，音乐应用接收到INTERRUPT_HINT_RESUME事件，重新启动播放。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理音频焦点示例:"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了带给用户更好的音频体验，针对不同的音频焦点事件内容，应用需要做出相应的处理操作。此处以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
        children: "使用AudioRenderer开发音频播放功能(ArkTs)"
      }), "为例，展示推荐应用采取的处理方法，提供伪代码供开发者参考。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在监听音频播放焦点变化事件之前，需要先获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-f/arkts-apis-audio-f#audiocreateaudiorenderer8",
        children: "AudioRenderer"
      }), "实例。若使用其他接口开发音频播放或音频录制功能，处理方法类似，具体的代码实现，开发者可结合实际情况编写，处理方法也可自行调整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\nlet isPlay: boolean; // 是否正在播放，实际开发中，对应与音频播放状态相关的模块。\nlet isDucked: boolean; // 是否降低音量，实际开发中，对应与音频音量相关的模块。\nlet started: boolean; // 标识符，记录“开始播放（start）”操作是否成功。\n\nasync function onAudioInterrupt(): Promise<void> {\n  if (audioRenderer == undefined) {\n    return;\n  }\n  // 此处以使用AudioRenderer开发音频播放功能举例，变量audioRenderer即为播放时创建的AudioRenderer实例。\n  audioRenderer.on('audioInterrupt', async(interruptEvent: audio.InterruptEvent) => {\n    // ...\n    // 在发生音频焦点变化时，audioRenderer收到interruptEvent回调，此处根据其内容做相应处理。\n    // 1. 可选：读取interruptEvent.forceType的类型，判断系统是否已强制执行相应操作。\n    // 注：默认焦点策略下，INTERRUPT_HINT_RESUME为INTERRUPT_SHARE类型，其余hintType均为INTERRUPT_FORCE类型。因此对forceType可不做判断。\n    // 2. 必选：读取interruptEvent.hintType的类型，做出相应的处理。\n    if (interruptEvent.forceType === audio.InterruptForceType.INTERRUPT_FORCE) {\n      // 强制打断类型（INTERRUPT_FORCE）：音频相关处理已由系统执行，应用需更新自身状态，做相应调整。\n      switch (interruptEvent.hintType) {\n        case audio.InterruptHint.INTERRUPT_HINT_PAUSE:\n          // 此分支表示系统已将音频流暂停（临时失去焦点），为保持状态一致，应用需切换至音频暂停状态。\n          // 临时失去焦点：待其他音频流释放音频焦点后，本音频流会收到resume对应的音频焦点事件，到时可自行继续播放。\n          isPlay = false; // 此句为简化处理，代表应用切换至音频暂停状态的若干操作。\n          break;\n        case audio.InterruptHint.INTERRUPT_HINT_STOP:\n          // 此分支表示系统已将音频流停止（永久失去焦点），为保持状态一致，应用需切换至音频暂停状态。\n          // 永久失去焦点：后续不会再收到任何音频焦点事件，若想恢复播放，需要用户主动触发。\n          isPlay = false; // 此句为简化处理，代表应用切换至音频暂停状态的若干操作。\n          break;\n        case audio.InterruptHint.INTERRUPT_HINT_DUCK:\n          // 此分支表示系统已将音频音量降低（默认降到正常音量的20%）。\n          isDucked = true; // 此句为简化处理，代表应用切换至降低音量播放状态的若干操作。\n          break;\n        case audio.InterruptHint.INTERRUPT_HINT_UNDUCK:\n          // 此分支表示系统已将音频音量恢复正常。\n          isDucked = false; // 此句为简化处理，代表应用切换至正常音量播放状态的若干操作。\n          break;\n        default:\n          break;\n      }\n    } else if (interruptEvent.forceType === audio.InterruptForceType.INTERRUPT_SHARE) {\n      // 共享打断类型（INTERRUPT_SHARE）：应用可自主选择执行相关操作或忽略音频焦点事件。\n      switch (interruptEvent.hintType) {\n        case audio.InterruptHint.INTERRUPT_HINT_RESUME:\n          // 此分支表示临时失去焦点后被暂停的音频流此时可以继续播放，建议应用继续播放，切换至音频播放状态。\n          // 若应用此时不想继续播放，可以忽略此音频焦点事件，不进行处理即可。\n          // 继续播放，此处主动执行start()，以标识符变量started记录start()的执行结果。\n          if (audioRenderer == undefined) {\n            return;\n          }\n          await audioRenderer.start().then(() => {\n            started = true; // start()执行成功。\n          }).catch((err: BusinessError) => {\n            started = false; // start()执行失败。\n          });\n          // 若start()执行成功，则切换至音频播放状态。\n          if (started) {\n            isPlay = true; // 此句为简化处理，代表应用切换至音频播放状态的若干操作。\n          } else {\n            // 音频继续播放的操作执行失败。\n          }\n          break;\n        default:\n          break;\n      }\n    }\n  });\n}\n"
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
994967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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