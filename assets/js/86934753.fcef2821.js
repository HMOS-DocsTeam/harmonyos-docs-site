"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["711075"], {
610406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_session_audio_session_management_audio_session_management_md_869_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-session-audio-session-management-audio-session-management-md-869.json
var site_docs_audio_kit_audio_session_audio_session_management_audio_session_management_md_869_namespaceObject = JSON.parse('{"id":"audio-kit/audio-session/audio-session-management/audio-session-management","title":"音频会话管理","description":"对于涉及多个音频流并发的场景，系统已预设了默认的音频焦点策略，该策略将对所有音频流（包括播放和录制）实施统一的焦点管理。","source":"@site/docs/audio-kit/audio-session/audio-session-management/audio-session-management.md","sourceDirName":"audio-kit/audio-session/audio-session-management","slug":"/audio-kit/audio-session/audio-session-management/","permalink":"/harmonyos-docs-site/audio-kit/audio-session/audio-session-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"音频会话管理","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-session-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频焦点介绍","permalink":"/harmonyos-docs-site/audio-kit/audio-session/audio-playback-concurrency/"},"next":{"title":"使用OHAudio开发音频会话功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-session/using-ohaudio-for-session/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-session/audio-session-management/audio-session-management.md


const frontMatter = {
	title: '音频会话管理',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-session-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频会话管理';

const assets = {

};



const toc = [{
  "value": "获取音频会话管理器",
  "id": "获取音频会话管理器",
  "level": 2
}, {
  "value": "音频会话策略",
  "id": "音频会话策略",
  "level": 2
}, {
  "value": "使用音频会话修改焦点策略",
  "id": "使用音频会话修改焦点策略",
  "level": 2
}, {
  "value": "AudioSession停用事件",
  "id": "audiosession停用事件",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 3
}, {
  "value": "使用音频会话申请焦点策略",
  "id": "使用音频会话申请焦点策略",
  "level": 2
}, {
  "value": "音频会话场景",
  "id": "音频会话场景",
  "level": 3
}, {
  "value": "监听AudioSession焦点和状态变化事件",
  "id": "监听audiosession焦点和状态变化事件",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例-1",
  "level": 3
}, {
  "value": "启用混音播放下静音建议通知",
  "id": "启用混音播放下静音建议通知",
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
        id: "音频会话管理",
        children: "音频会话管理"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于涉及多个音频流并发的场景，系统已预设了默认的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "音频焦点策略"
      }), "，该策略将对所有音频流（包括播放和录制）实施统一的焦点管理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当系统提供的默认焦点策略不能满足应用需求时，应用可利用音频会话管理提供的接口，管理应用内音频流的焦点，自定义音频流的焦点策略，调整音频流释放焦点的时机，以满足特定需求。该篇文章的示例代码均为ArkTS，如果需要使用OHAudio开发请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/using-ohaudio-for-session",
        children: "使用OHAudio开发音频会话功能(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用音频会话相关接口，可以实现以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["系统默认焦点策略不能满足应用当前需求，应用可", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BD%BF%E7%94%A8%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D%E4%BF%AE%E6%94%B9%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
            children: "使用音频会话修改焦点策略"
          }), "来适配适合自己的焦点策略。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "典型场景：应用播放短视频时，会打断后台音乐，应用希望自身的音频流停止后，后台的音乐可以自动恢复（该场景需要应用在音频流启动前激活音频会话，音频流停止后停用音频会话）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用在某个业务流程中需要启动多个音频流，且要保证整个流程的完整性时，应用可", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BD%BF%E7%94%A8%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D%E7%94%B3%E8%AF%B7%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
            children: "使用音频会话申请焦点策略"
          }), "来适配适合自己业务场景的焦点策略。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "典型场景：应用连续播放多个音频时，在多个音频衔接的间隙，不希望后台被影响的其他音频自动恢复，希望整个播放过程保持音频焦点的连贯性（该场景需要应用在整个播放过程开始前激活音频会话，整个播放过程结束后停用音频会话）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(27990)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频并发策略优先级为：STOP > PAUSE > DUCK > PLAYBOTH。当指定的音频会话策略优先级高于默认并发策略时，指定的音频会话策略不会生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用在开始音频播放或录制之前需要确保音频会话已经处于激活状态，否则音频会话的自定义焦点策略不会生效。若应用使用了异步接口，则需要格外注意异步操作执行的时序。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取音频会话管理器",
      children: "获取音频会话管理器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用AudioSessionManager的API前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager#getsessionmanager12",
        children: "getSessionManager"
      }), "获取一个单例AudioSessionManager对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用OHAudio开发请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/using-ohaudio-for-session#%E8%8E%B7%E5%8F%96%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86%E5%99%A8",
        children: "获取音频会话管理器"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\n\nlet audioManager = audio.getAudioManager();\n// 创建音频会话管理器。\nlet audioSessionManager: audio.AudioSessionManager = audioManager.getSessionManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频会话策略",
      children: "音频会话策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在激活AudioSession时，需先指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiosessionstrategy12",
        children: "音频会话策略（AudioSessionStrategy）"
      }), "。可通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audioconcurrencymode12",
        children: "音频并发模式（AudioConcurrencyMode）"
      }), "来指定不同的音频会话策略。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用OHAudio开发请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-strategy/capi-ohaudio-oh-audiosession-strategy",
        children: "音频会话策略（OH_AudioSession_Strategy）"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统预设的音频并发模式如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["默认模式（CONCURRENCY_DEFAULT）：即系统默认的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
            children: "音频焦点策略"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "并发模式（CONCURRENCY_MIX_WITH_OTHERS）：和其他音频流并发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "典型场景："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用播放音乐时，会被后起的音乐或视频打断，应用希望自身的音频流和后起的音乐或视频并发（该场景需要应用在音频流启动前激活AudioSession）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用录音时，会打断后台正在播放的音乐或视频，应用希望自身的音频流和后台正在播放的音乐或视频并发（该场景需要应用在音频流启动前激活AudioSession）。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "降低音量模式（CONCURRENCY_DUCK_OTHERS）：和其他音频流并发，并且降低其他音频流的音量。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "典型场景："
            })
          }), " 应用播放游戏音效时，会和后台正在播放的音乐并发，应用希望自身的音频流和后台正在播放的音乐并发时压低后台音乐音量（该场景需要应用在音频流启动前激活AudioSession）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "暂停模式（CONCURRENCY_PAUSE_OTHERS）：暂停其他音频流，待释放焦点后通知其他音频流恢复。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "典型场景："
            })
          }), " 应用播放短视频时，会打断后台正在播放的音乐，应用希望自身的音频流停止后，后台的音乐可以自动恢复（该场景需要应用在音频流启动前激活AudioSession，音频流停止后停用AudioSession）。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(635931)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用通过AudioSession使用上述各种模式时，系统将尽量满足其焦点策略，但可能无法保证在所有场景下完全满足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "并发模式（CONCURRENCY_MIX_WITH_OTHERS）在本应用申请焦点和后续其他应用申请焦点时均会生效；降低音量模式（CONCURRENCY_DUCK_OTHERS）和暂停模式（CONCURRENCY_PAUSE_OTHERS）仅在本应用申请焦点时生效，后续其他应用申请焦点时，优先遵循其他应用的并发模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用音频会话修改焦点策略",
      children: "使用音频会话修改焦点策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统默认焦点策略不能满足应用当前需求时，应用可通过指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D%E7%AD%96%E7%95%A5",
        children: "音频会话策略"
      }), "后激活AudioSession来完成焦点策略修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AudioSession激活成功后，应用新起的音频流将会按照修改后的焦点策略起流。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AudioSession修改焦点策略时，AudioSession不会持有焦点，焦点仍由各个音频流持有。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用OHAudio开发请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/using-ohaudio-for-session",
        children: "使用OHAudio开发音频会话功能(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544657)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当AudioSession因超时而停用时，被其压低音量（Duck）的音频会触发恢复音量（Unduck）操作，被其暂停（Pause）的音频流会触发停止（Stop）操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "audiosession停用事件",
      children: "AudioSession停用事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在使用AudioSession的过程中，推荐应用监听音频会话停用事件（AudioSessionDeactivatedEvent）。当AudioSession被停用（非主动停用）时，应用会收到此事件通知。应用可根据自身业务需求，做相应的处理，例如释放相应资源、重新激活AudioSession等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频会话停用事件（AudioSessionDeactivatedEvent）包含AudioSessionDeactivatedReason参数，用于标识会话停用的具体原因（如焦点被抢占或超时）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用焦点被抢占（DEACTIVATED_LOWER_PRIORITY）：该应用所有的音频流持有的焦点全部被其他应用抢占时，AudioSession被同时停用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "超时（DEACTIVATED_TIMEOUT）：若AudioSession处于激活状态，但该应用没有音频流在运行状态，则AudioSession会在规定时间后被超时停用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定音频会话策略（AudioSessionStrategy）并激活音频会话。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#activateaudiosession12",
            children: "activateAudioSession"
          }), "接口激活当前应用的音频会话。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在激活AudioSession时，需指定", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D%E7%AD%96%E7%95%A5",
            children: "音频会话策略"
          }), "。策略中包含参数concurrencyMode，其类型为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audioconcurrencymode12",
            children: "AudioConcurrencyMode"
          }), "，用于声明音频并发策略。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n  // 设置音频并发模式。\n  let strategy: audio.AudioSessionStrategy = {\n    concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS\n  };\n\n  // 激活音频会话。\n  audioSessionManager.activateAudioSession(strategy).then(() => {\n    console.info('Succeeded in activating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to activate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询音频会话是否已激活（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#isaudiosessionactivated12",
            children: "isAudioSessionActivated"
          }), "接口检查当前应用的音频会话是否已激活。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询音频会话是否已激活。\nlet isActivated = audioSessionManager.isAudioSessionActivated();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听音频会话停用事件（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#onaudiosessiondeactivated12",
            children: "on('audioSessionDeactivated')"
          }), "接口监听", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiosessiondeactivatedevent12",
            children: "音频会话停用事件（AudioSessionDeactivatedEvent）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当AudioSession被停用（非主动停用）时，应用会收到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiosessiondeactivatedevent12",
            children: "音频会话停用事件（AudioSessionDeactivatedEvent）"
          }), "，其中包含", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiosessiondeactivatedreason12",
            children: "音频会话停用原因（AudioSessionDeactivatedReason）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在收到AudioSessionDeactivatedEvent时，应用可根据自身业务需求，做相应的处理，例如释放相应资源、重新激活AudioSession等。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#offaudiosessiondeactivated12",
            children: "off('audioSessionDeactivated')"
          }), "接口取消监听音频会话停用事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\n// ...\n\n  // 监听音频会话停用事件。\n  audioSessionManager.on('audioSessionDeactivated', (audioSessionDeactivatedEvent: audio.AudioSessionDeactivatedEvent) => {\n    // ...\n    console.info(`Succeeded in using on function. AudioSessionDeactivatedEvent: ${JSON.stringify(audioSessionDeactivatedEvent)}`);\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停用音频会话。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#deactivateaudiosession12",
            children: "deactivateAudioSession"
          }), "接口停用当前应用的音频会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(247390)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AudioSession停用后，应用新起的音频流将会按照默认焦点策略起流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n  // 停用音频会话。\n  // ...\n  audioSessionManager.deactivateAudioSession().then(() => {\n    console.info('Succeeded in deactivating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to deactivate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面展示了使用AudioSession修改焦点策略的示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\nlet audioManager = audio.getAudioManager();\n// 创建音频会话管理器。\nlet audioSessionManager: audio.AudioSessionManager = audioManager.getSessionManager();\n// ...\n  // 设置音频并发模式。\n  let strategy: audio.AudioSessionStrategy = {\n    concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS\n  };\n\n  // 激活音频会话。\n  audioSessionManager.activateAudioSession(strategy).then(() => {\n    console.info('Succeeded in activating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to activate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n\n  // 查询音频会话是否已激活。\n  let isActivated = audioSessionManager.isAudioSessionActivated();\n\n  // 监听音频会话停用事件。\n  audioSessionManager.on('audioSessionDeactivated', (audioSessionDeactivatedEvent: audio.AudioSessionDeactivatedEvent) => {\n    // ...\n    console.info(`Succeeded in using on function. AudioSessionDeactivatedEvent: ${JSON.stringify(audioSessionDeactivatedEvent)}`);\n  });\n\n  if (isActivated) {\n    // 音频会话激活后，应用在此处正常执行音频播放、暂停、停止、释放等操作即可。\n  }\n  // ...\n\n  // 取消监听音频会话停用事件。\n  audioSessionManager.off('audioSessionDeactivated');\n\n  // ...\n  // 停用音频会话。\n  // ...\n  audioSessionManager.deactivateAudioSession().then(() => {\n    console.info('Succeeded in deactivating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to deactivate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用音频会话申请焦点策略",
      children: "使用音频会话申请焦点策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要启动多个音频流并保证流程连续性时，可通过AudioSession申请焦点，确保多音频流播放的连续性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["激活AudioSession时系统会根据应用选择的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D%E5%9C%BA%E6%99%AF",
        children: "音频会话场景"
      }), "申请对应的音频焦点并由AudioSession持有该焦点，后续应用通过AudioRenderer启动的播放流将不再申请音频焦点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用OHAudio开发请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/using-ohaudio-for-session",
        children: "使用OHAudio开发音频会话功能(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型使用场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在多个小视频滑动播放时，多个音频流频繁申请和释放焦点可能导致漏音。使用AudioSession申请一次焦点，可以避免中间多个音频流播放时频繁申请和释放焦点，从而防止漏音。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在VoIP通话场景下，可能需要启动铃声流、录音流和播放流，这些音频流的焦点优先级不同，部分音频流可能被其他应用的音频流中断。为了保持业务体验的连续性，可以使用AudioSession申请焦点，避免音频流被中断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用使用播放器的SDK播放音频流，不持有AudioRenderer对象，但希望监听焦点变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(261825)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AudioSession申请的焦点是应用级别的，如果应用内部包含不同的模块，各个模块间要做好协调处理，避免其中一个模块使用AudioSession申请了焦点，另一个模块的音频流被AudioSession的焦点管控而产生非预期的效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过AudioSession申请焦点，仅对播放流有效，对录音流及部分播放音频流（如STREAM_USAGE_ALARM、STREAM_USAGE_NOTIFICATION、STREAM_USAGE_ACCESSIBILITY等）无效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在AudioSession激活过程中，如果动态修改AudioSessionScene，需要重新调用activateAudioSession才能生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过AudioSession申请焦点后，焦点由AudioSession持有。应用当前播放场景结束后，需要主动停用AudioSession才会释放焦点。避免出现播放流停止后，焦点未释放导致的焦点异常持有。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频会话场景",
      children: "音频会话场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用AudioSession申请焦点策略时，系统提供了三种音频会话场景。激活AudioSession前需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setaudiosessionscene20",
        children: "setAudioSessionScene"
      }), "设置对应的音频会话场景，后续AudioSession激活时系统会根据应用选择的音频会话场景申请对应的音频焦点。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_SCENE_MEDIA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体音频会话场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_SCENE_GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏音频会话场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_SCENE_VOICE_COMMUNICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VoIP语音通话音频会话场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听audiosession焦点和状态变化事件",
      children: "监听AudioSession焦点和状态变化事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AudioSession申请的焦点和AudioRenderer申请的焦点是同等地位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#onaudiosessionstatechanged20",
        children: "on('audioSessionStateChanged')"
      }), "来监听AudioSession的焦点和状态变化。为了维持应用和系统的状态一致性，确保良好的用户体验，应用应监听AudioSession焦点状态事件，并在焦点变化时做出必要响应。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#onaudiosessionstatechanged20",
        children: "on('audioSessionStateChanged')"
      }), "包含了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#audiosession%E5%81%9C%E7%94%A8%E4%BA%8B%E4%BB%B6",
        children: "AudioSession停用事件"
      }), "的信息，当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D%E7%94%B3%E8%AF%B7%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "使用音频会话申请焦点策略"
      }), "时无需再额外监听音频会话停用事件（AudioSessionDeactivatedEvent）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13261)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用同时注册了AudioRenderer的焦点事件监听，需要注意以下两点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用会收到AudioSession焦点状态变化和AudioRenderer焦点变化的回调（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#interruptevent9",
          children: "InterruptEvent"
        }), "），根据需要处理这些回调即可。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果AudioSession的焦点被暂停，恢复暂停状态时，只会给AudioSession发送焦点恢复事件，不会再给AudioRenderer发送焦点恢复事件。收到恢复事件后，当应用需要通过AudioSession申请焦点恢复播放时，必须重新调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setaudiosessionscene20",
          children: "setAudioSessionScene"
        }), "设置场景参数，再调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#activateaudiosession12",
          children: "activateAudioSession"
        }), "激活AudioSession。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定音频会话场景（AudioSessionScene）和策略（AudioSessionStrategy）并激活音频会话。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用通过AudioSession申请焦点。首先要调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setaudiosessionscene20",
            children: "setAudioSessionScene"
          }), "设置场景参数，然后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#activateaudiosession12",
            children: "activateAudioSession"
          }), "接口激活AudioSession。激活AudioSession时系统会根据应用选择的音频会话场景申请对应的音频焦点。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(766517)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "激活AudioSession时系统会根据应用选择的音频会话场景申请对应的音频焦点，后续应用通过AudioRenderer启动的播放流不再申请音频焦点。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果激活AudioSession时应用已存在启动的音频播放流，系统会释放该音频播放流持有的焦点，并由AudioSession统一管理。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n  // 应用根据业务场景设置适合自己的音频会话场景，激活AudioSession时，系统会根据应用选择的音频会话场景申请对应的音频焦点。\n  audioSessionManager.setAudioSessionScene(audio.AudioSessionScene.AUDIO_SESSION_SCENE_MEDIA);\n  // ...\n\n  // 设置音频会话策略。\n  let strategy: audio.AudioSessionStrategy = {\n    concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS\n  };\n\n  // 激活AudioSession。\n  audioSessionManager.activateAudioSession(strategy).then(() => {\n    console.info('Succeeded in activating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to activate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询音频会话是否已激活（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#isaudiosessionactivated12",
            children: "isAudioSessionActivated"
          }), "接口检查当前应用的音频会话是否已激活。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询音频会话是否已激活。\nlet isActivated = audioSessionManager.isAudioSessionActivated();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听AudioSession焦点状态变化事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#onaudiosessionstatechanged20",
            children: "on('audioSessionStateChanged')"
          }), "来监听AudioSession的焦点和状态变化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n  // 监听AudioSession焦点和状态变化事件。\n  let audioSessionStateChangedCallback = (audioSessionStateChangedEvent: audio.AudioSessionStateChangedEvent) => {\n    // ...\n    console.info(`hint of audioSessionStateChanged: ${audioSessionStateChangedEvent.stateChangeHint} `);\n\n    switch (audioSessionStateChangedEvent.stateChangeHint) {\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE:\n        // 此分支表示系统已将音频流暂停，应用需切换至音频暂停状态。\n        // 临时失去焦点：AudioSession会停用并释放焦点，同时停止应用所有音频流的播放。因此，当应用收到Resume回调后，需要重新激活AudioSession并恢复需要继续播放的音频流。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_RESUME:\n        // 此分支表示系统解除AudioSession焦点的暂停操作。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_STOP:\n        // 此分支表示系统已将音频流停止（永久失去焦点），为保持状态一致，应用需切换至音频暂停状态。\n        // 永久失去焦点：AudioSession会停用并释放焦点，同时停止应用所有音频流的播放。后续不会再收到音频焦点事件，恢复播放需用户主动触发。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP:\n        // 此分支表示由于长时间无音频流播放，系统已将AudioSession停止（永久失去焦点），应用需切换至音频停止状态。\n        // 永久失去焦点：后续不会再收到音频焦点事件，恢复播放需用户主动触发。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_DUCK:\n        // 此分支表示系统已将应用所有播放音频流音量降低（默认降到正常音量的20%）。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK:\n        // 此分支表示系统已将应用所有播放音频流音量恢复正常。\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION:\n        // 此分支表示其他应用开始播放非混音音频，系统可自行决定是否静音。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION:\n        // 此分支表示其他应用的非混音音频播放结束，系统可自行决定是否取消静音。\n        break;\n      default:\n        break;\n    }\n  };\n\n  audioSessionManager.on('audioSessionStateChanged', audioSessionStateChangedCallback);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停用音频会话。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#deactivateaudiosession12",
            children: "deactivateAudioSession"
          }), "接口停用当前应用的音频会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(649789)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停用AudioSession时系统会释放AudioSession申请的焦点，并停用该应用正在播放的所有音频流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n  // 停用AudioSession，即释放焦点并停用该应用正在播放的所有音频流。\n  audioSessionManager.deactivateAudioSession().then(() => {\n    console.info('Succeeded in deactivating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to deactivate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例-1",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面展示了使用AudioSession申请焦点策略的示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n  // 应用根据业务场景设置适合自己的音频会话场景，激活AudioSession时，系统会根据应用选择的音频会话场景申请对应的音频焦点。\n  audioSessionManager.setAudioSessionScene(audio.AudioSessionScene.AUDIO_SESSION_SCENE_MEDIA);\n  // ...\n\n  // 设置音频会话策略。\n  let strategy: audio.AudioSessionStrategy = {\n    concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS\n  };\n\n  // 激活AudioSession。\n  audioSessionManager.activateAudioSession(strategy).then(() => {\n    console.info('Succeeded in activating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to activate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n\n  // 监听AudioSession焦点和状态变化事件。\n  let audioSessionStateChangedCallback = (audioSessionStateChangedEvent: audio.AudioSessionStateChangedEvent) => {\n    // ...\n    console.info(`hint of audioSessionStateChanged: ${audioSessionStateChangedEvent.stateChangeHint} `);\n\n    switch (audioSessionStateChangedEvent.stateChangeHint) {\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE:\n        // 此分支表示系统已将音频流暂停，应用需切换至音频暂停状态。\n        // 临时失去焦点：AudioSession会停用并释放焦点，同时停止应用所有音频流的播放。因此，当应用收到Resume回调后，需要重新激活AudioSession并恢复需要继续播放的音频流。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_RESUME:\n        // 此分支表示系统解除AudioSession焦点的暂停操作。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_STOP:\n        // 此分支表示系统已将音频流停止（永久失去焦点），为保持状态一致，应用需切换至音频暂停状态。\n        // 永久失去焦点：AudioSession会停用并释放焦点，同时停止应用所有音频流的播放。后续不会再收到音频焦点事件，恢复播放需用户主动触发。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP:\n        // 此分支表示由于长时间无音频流播放，系统已将AudioSession停止（永久失去焦点），应用需切换至音频停止状态。\n        // 永久失去焦点：后续不会再收到音频焦点事件，恢复播放需用户主动触发。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_DUCK:\n        // 此分支表示系统已将应用所有播放音频流音量降低（默认降到正常音量的20%）。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK:\n        // 此分支表示系统已将应用所有播放音频流音量恢复正常。\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION:\n        // 此分支表示其他应用开始播放非混音音频，系统可自行决定是否静音。\n        break;\n      case audio.AudioSessionStateChangeHint.AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION:\n        // 此分支表示其他应用的非混音音频播放结束，系统可自行决定是否取消静音。\n        break;\n      default:\n        break;\n    }\n  };\n\n  audioSessionManager.on('audioSessionStateChanged', audioSessionStateChangedCallback);\n\n  // 查询音频会话是否已激活。\n  let isActivated = audioSessionManager.isAudioSessionActivated();\n\n  if (isActivated) {\n    // 音频会话激活后，应用在此处正常执行音频播放、暂停、停止、释放等操作即可。\n    // 根据实际业务，应用可以启动多个AudioRenderer音频播放流。此处启动的音频播放流不再持有焦点，统一由AudioSession管理。\n    // 如果存在多条音频流同时播放，需要特别注意AudioSession停用时机（停用AudioSession时会同时释放应用所有音频播放流）。\n  }\n  // ...\n\n  // 业务结束，取消监听AudioSession焦点和状态变化事件。\n  audioSessionManager.off('audioSessionStateChanged');\n  // ...\n\n  // 停用AudioSession，即释放焦点并停用该应用正在播放的所有音频流。\n  audioSessionManager.deactivateAudioSession().then(() => {\n    console.info('Succeeded in deactivating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to deactivate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启用混音播放下静音建议通知",
      children: "启用混音播放下静音建议通知"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，当本应用在并发模式为CONCURRENCY_MIX_WITH_OTHERS下进行播放时，如果有其他应用的音频同时播放，此时两者会混合播放。部分场景下（如游戏或广播），应用可以通过启用静音建议通知，以给用户提供更好的体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用静音建议通知后，本应用播放音频的同时，其他应用播放了不可与本应用并发播放的音频，本应用会收到静音建议通知，此时本应用可以选择不做处理，让本应用和其他应用进行并发播放；也可以选择将自身静音播放，让其他应用单独播放音频。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启用混音播放下静音建议通知，需要先调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setaudiosessionscene20",
        children: "setAudioSessionScene"
      }), "设置场景参数并订阅音频会话状态更改事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiosessionstatechangedevent20",
        children: "AudioSessionStateChangedEvent"
      }), "，启用后再调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#activateaudiosession12",
        children: "activateAudioSession"
      }), "接口激活AudioSession。启用静音建议通知的前提是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audioconcurrencymode12",
        children: "AudioConcurrencyMode"
      }), "模式必须为CONCURRENCY_MIX_WITH_OTHERS。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n  // 应用根据业务场景设置适合自己的音频会话场景，激活AudioSession时，系统会根据应用选择的音频会话场景申请对应的音频焦点。\n  audioSessionManager.setAudioSessionScene(audio.AudioSessionScene.AUDIO_SESSION_SCENE_MEDIA);\n\n  // 本接口必须在激活音频会话前调用才会生效。\n  audioSessionManager.enableMuteSuggestionWhenMixWithOthers(true);\n\n  // 设置音频会话策略。\n  let strategy: audio.AudioSessionStrategy = {\n    concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS\n  };\n\n  // 激活AudioSession。\n  audioSessionManager.activateAudioSession(strategy).then(() => {\n    console.info('Succeeded in activating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to activate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
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
247390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
649789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
635931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
261825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
13261(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
766517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
27990(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
544657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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