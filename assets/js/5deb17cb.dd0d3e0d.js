"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["463495"], {
382879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_session_using_ohaudio_for_session_using_ohaudio_for_session_md_5de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-session-using-ohaudio-for-session-using-ohaudio-for-session-md-5de.json
var site_docs_audio_kit_audio_session_using_ohaudio_for_session_using_ohaudio_for_session_md_5de_namespaceObject = JSON.parse('{"id":"audio-kit/audio-session/using-ohaudio-for-session/using-ohaudio-for-session","title":"使用OHAudio开发音频会话功能(C/C++)","description":"对于涉及多个音频流并发播放的场景，系统已预设了默认的音频焦点策略，该策略将对所有音频流（包括播放和录制）实施统一的焦点管理。","source":"@site/docs/audio-kit/audio-session/using-ohaudio-for-session/using-ohaudio-for-session.md","sourceDirName":"audio-kit/audio-session/using-ohaudio-for-session","slug":"/audio-kit/audio-session/using-ohaudio-for-session/","permalink":"/harmonyos-docs-site/audio-kit/audio-session/using-ohaudio-for-session/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用OHAudio开发音频会话功能(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-session","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频会话管理","permalink":"/harmonyos-docs-site/audio-kit/audio-session/audio-session-management/"},"next":{"title":"音频播放开发概述","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/audio-playback-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-session/using-ohaudio-for-session/using-ohaudio-for-session.md


const frontMatter = {
	title: '使用OHAudio开发音频会话功能(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-session',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用OHAudio开发音频会话功能(C/C++)';

const assets = {

};



const toc = [{
  "value": "使用入门",
  "id": "使用入门",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 3
}, {
  "value": "获取音频会话管理器",
  "id": "获取音频会话管理器",
  "level": 2
}, {
  "value": "激活音频会话",
  "id": "激活音频会话",
  "level": 2
}, {
  "value": "查询音频会话是否已激活",
  "id": "查询音频会话是否已激活",
  "level": 2
}, {
  "value": "停用音频会话",
  "id": "停用音频会话",
  "level": 2
}, {
  "value": "监听音频会话停用事件",
  "id": "监听音频会话停用事件",
  "level": 2
}, {
  "value": "定义回调函数",
  "id": "定义回调函数",
  "level": 3
}, {
  "value": "注册音频会话停用事件回调",
  "id": "注册音频会话停用事件回调",
  "level": 3
}, {
  "value": "取消注册音频会话停用事件回调",
  "id": "取消注册音频会话停用事件回调",
  "level": 3
}, {
  "value": "通过设置AudioSession场景参数申请焦点",
  "id": "通过设置audiosession场景参数申请焦点",
  "level": 2
}, {
  "value": "启用混音播放下静音建议通知",
  "id": "启用混音播放下静音建议通知",
  "level": 2
}, {
  "value": "监听AudioSession焦点状态变化事件",
  "id": "监听audiosession焦点状态变化事件",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用ohaudio开发音频会话功能cc",
        children: "使用OHAudio开发音频会话功能(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于涉及多个音频流并发播放的场景，系统已预设了默认的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "音频焦点策略"
      }), "，该策略将对所有音频流（包括播放和录制）实施统一的焦点管理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可利用音频会话管理（AudioSessionManager）提供的接口，通过AudioSession主动管理应用内音频流的焦点，自定义本应用音频流的焦点策略，调整本应用音频流释放音频焦点的时机，从而贴合应用特定的使用需求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要介绍AudioSession相关C API的使用方法和注意事项，更多音频焦点及音频会话的信息，可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency",
        children: "音频焦点介绍"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-session-management",
        children: "音频会话管理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用入门",
      children: "使用入门"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用要使用OHAudio提供的音频会话管理（AudioSessionManager）能力，需要添加对应的头文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioSessionSampleC",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohaudio.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用通过引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h",
        children: "native_audio_session_manager.h"
      }), "头文件，使用音频播放相关API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ohaudio/native_audio_session_manager.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取音频会话管理器",
      children: "获取音频会话管理器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
        children: "OH_AudioSessionManager"
      }), "实例。在使用音频会话管理功能前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
        children: "OH_AudioManager_GetAudioSessionManager"
      }), "创建音频会话管理实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSessionManager *audioSessionManager;\n// ...\n    OH_AudioCommon_Result resultManager = OH_AudioManager_GetAudioSessionManager(&audioSessionManager);\n    OH_AudioCommon_Result result = OH_AudioSessionManager_RegisterStateChangeCallback(audioSessionManager,\n                                                                                      AudioSessionStateChangedCallback);\n    if (resultManager == 0) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, g_audioSessionVariable->globalResmgr, SESSION_TAG,\n                     \" OH_AudioManager_GetAudioSessionManager success! \");\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "激活音频会话",
      children: "激活音频会话"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_activateaudiosession",
        children: "OH_AudioSessionManager_ActivateAudioSession"
      }), "接口激活当前应用的音频会话。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%BF%80%E6%B4%BB%E9%9F%B3%E9%A2%91%E4%BC%9A%E8%AF%9D",
        children: "激活音频会话"
      }), "时，需指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-strategy/capi-ohaudio-oh-audiosession-strategy",
        children: "音频会话策略（OH_AudioSession_Strategy）"
      }), "，其中包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_concurrencymode",
        children: "音频并发模式（OH_AudioSession_ConcurrencyMode）"
      }), "参数，用于声明不同的音频并发策略。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CONCURRENCY_MIX_WITH_OTHERS 是示例，实际使用时请根据情况修改。\nOH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};\n    \n// 设置音频并发模式并激活音频会话。\nOH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询音频会话是否已激活",
      children: "查询音频会话是否已激活"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_isaudiosessionactivated",
        children: "OH_AudioSessionManager_IsAudioSessionActivated"
      }), "接口检查当前应用的音频会话是否已激活。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool isActivated = OH_AudioSessionManager_IsAudioSessionActivated(audioSessionManager);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "停用音频会话",
      children: "停用音频会话"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_deactivateaudiosession",
        children: "OH_AudioSessionManager_DeactivateAudioSession"
      }), "接口停用当前应用的音频会话。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result result;\n// ...\nresult = OH_AudioSessionManager_DeactivateAudioSession(audioSessionManager);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听音频会话停用事件",
      children: "监听音频会话停用事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用AudioSession功能的过程中，推荐应用监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-deactivatedevent/capi-ohaudio-oh-audiosession-deactivatedevent",
        children: "音频会话停用事件（OH_AudioSession_DeactivatedEvent）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当AudioSession被停用（非主动停用）时，应用会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-deactivatedevent/capi-ohaudio-oh-audiosession-deactivatedevent",
        children: "音频会话停用事件（OH_AudioSession_DeactivatedEvent）"
      }), "，其中包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_deactivatedreason",
        children: "音频会话停用原因（OH_AudioSession_DeactivatedReason）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在收到AudioSessionDeactivatedEvent时，应用可根据自身业务需求，做相应的处理，例如释放相应资源、重新激活AudioSession等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义回调函数",
      children: "定义回调函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t MyAudioSessionDeactivatedCallback(OH_AudioSession_DeactivatedEvent event)\n{\n    switch (event.reason) {\n        case DEACTIVATED_LOWER_PRIORITY:\n          // 应用焦点被抢占。\n            return 0;\n        case DEACTIVATED_TIMEOUT:\n          // 超时。\n            return 0;\n    }\n}\n\nOH_AudioSessionManager *audioSessionManager;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册音频会话停用事件回调",
      children: "注册音频会话停用事件回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_registersessiondeactivatedcallback",
        children: "OH_AudioSessionManager_RegisterSessionDeactivatedCallback"
      }), "接口监听音频会话停用事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result resultRegister = OH_AudioSessionManager_RegisterSessionDeactivatedCallback(\n    audioSessionManager, MyAudioSessionDeactivatedCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "取消注册音频会话停用事件回调",
      children: "取消注册音频会话停用事件回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_unregistersessiondeactivatedcallback",
        children: "OH_AudioSessionManager_UnregisterSessionDeactivatedCallback"
      }), "接口取消监听音频会话停用事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result resultUnregister = OH_AudioSessionManager_UnregisterSessionDeactivatedCallback(\n    audioSessionManager, MyAudioSessionDeactivatedCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "音频会话从创建到激活并监听的完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，完成音频会话从创建到激活并监听的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdint>\n#include \"ohaudio/native_audio_session_manager.h\"\n// ...\nint32_t MyAudioSessionDeactivatedCallback(OH_AudioSession_DeactivatedEvent event)\n{\n    switch (event.reason) {\n        case DEACTIVATED_LOWER_PRIORITY:\n          // 应用焦点被抢占。\n            return 0;\n        case DEACTIVATED_TIMEOUT:\n          // 超时。\n            return 0;\n    }\n}\n\nOH_AudioSessionManager *audioSessionManager;\n// ...\n    OH_AudioCommon_Result resultManager = OH_AudioManager_GetAudioSessionManager(&audioSessionManager);\n    // ...\n    OH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};\n    \n    // 设置音频并发模式并激活音频会话。\n    OH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);\n    // 查询音频会话是否已激活。\n    bool isActivated = OH_AudioSessionManager_IsAudioSessionActivated(audioSessionManager);\n    if (isActivated) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, g_audioSessionVariable->globalResmgr, SESSION_TAG,\n                     \" AudioSessionManager is activated! \");\n    }\n    // 监听音频会话停用事件。\n    OH_AudioCommon_Result resultRegister = OH_AudioSessionManager_RegisterSessionDeactivatedCallback(\n        audioSessionManager, MyAudioSessionDeactivatedCallback);\n    // ...\n    // 取消监听音频会话停用事件。\n    result = OH_AudioSessionManager_UnregisterStateChangeCallback(audioSessionManager,\n                                                                  AudioSessionStateChangedCallback);\n    // ...\n    // 停用音频会话。\n    result = OH_AudioSessionManager_DeactivateAudioSession(audioSessionManager);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过设置audiosession场景参数申请焦点",
      children: "通过设置AudioSession场景参数申请焦点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用通过AudioSession申请焦点。首先要调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_setscene",
        children: "OH_AudioSessionManager_SetScene"
      }), "设置场景参数，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_activateaudiosession",
        children: "OH_AudioSessionManager_ActivateAudioSession"
      }), "接口激活AudioSession。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// AUDIO_SESSION_SCENE_MEDIA 仅为示例，实际使用时请根据具体情况进行修改。\nOH_AudioSessionManager_SetScene(audioSessionManager, AUDIO_SESSION_SCENE_MEDIA);\n// ...\n// CONCURRENCY_MIX_WITH_OTHERS 是示例，实际使用时请根据情况修改。\nOH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};\n    \n// 设置音频并发模式并激活音频会话。\nOH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);\n"
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
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_setscene",
        children: "OH_AudioSessionManager_SetScene"
      }), "设置场景参数并订阅音频会话状态更改事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_statechangehint",
        children: "OH_AudioSession_StateChangeHint"
      }), "，启用后再调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_activateaudiosession",
        children: "OH_AudioSessionManager_ActivateAudioSession"
      }), "接口激活AudioSession。启用静音建议通知的前提是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_concurrencymode",
        children: "OH_AudioSession_ConcurrencyMode"
      }), "模式必须为CONCURRENCY_MIX_WITH_OTHERS。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// AUDIO_SESSION_SCENE_MEDIA 仅为示例，实际使用时请根据具体情况进行修改。\nOH_AudioSessionManager_SetScene(audioSessionManager, AUDIO_SESSION_SCENE_MEDIA);\n// 启用混音播放下静音建议。\nOH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers(audioSessionManager, true);\n// ...\nOH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};\n    \n// 设置音频并发模式并激活音频会话。\nOH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听audiosession焦点状态变化事件",
      children: "监听AudioSession焦点状态变化事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-statechangedevent/capi-ohaudio-oh-audiosession-statechangedevent",
        children: "AudioSession焦点状态事件（OH_AudioSession_StateChangedEvent）"
      }), "监听音频会话焦点状态的变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AudioSession申请焦点以及监听焦点变化事件的完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioSessionManager *audioSessionManager;\n\nvoid AudioSessionStateChangedCallback(OH_AudioSession_StateChangedEvent event)\n{\n    switch (event.stateChangeHint) {\n        case AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE:\n          // 此分支表示系统已将音频流暂停（临时失去焦点），为保持状态一致，应用需切换至音频暂停状态。\n          // 临时失去焦点：其他音频流释放音频焦点后，本音频流会收到resume事件，可继续播放。\n            break;\n        case AUDIO_SESSION_STATE_CHANGE_HINT_RESUME:\n          // 此分支表示系统解除对AudioSession焦点的暂停操作。\n            break;\n        case AUDIO_SESSION_STATE_CHANGE_HINT_STOP:\n          // 此分支表示系统已将音频流停止（永久失去焦点），为保持状态一致，应用需切换至音频暂停状态。\n          // 永久失去焦点：后续不会再收到任何音频焦点事件，若想恢复播放，需要用户主动触发。\n            break;\n        case AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP:\n          // 此分支表示由于长时间没有音频流播放，为防止系统资源被长时间无效占用，系统已将AudioSession停止（永久失去焦点），\n          // 为保持状态一致，应用需切换至音频暂停状态。\n          // 永久失去焦点：后续不会再收到任何音频焦点事件，若想恢复播放，需要用户主动触发。\n            break;\n        case AUDIO_SESSION_STATE_CHANGE_HINT_DUCK:\n          // 此分支表示系统已将音频音量降低（默认降到正常音量的20%）。\n            break;\n        case AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK:\n          // 此分支表示系统已将音频音量恢复正常。\n            break;\n        case AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION:\n          // 此分支表示其他应用开始播放非混音音频，系统可自行决定是否静音。\n            break;\n        case AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION:\n          // 此分支表示其他应用的非混音音频播放结束，系统可自行决定是否取消静音。\n            break;\n        default:\n            break;\n    }\n}\n// ...\n    OH_AudioCommon_Result result = OH_AudioSessionManager_RegisterStateChangeCallback(audioSessionManager,\n                                                                                      AudioSessionStateChangedCallback);\n    // ...\n    // AUDIO_SESSION_SCENE_MEDIA 仅为示例，实际使用时请根据具体情况进行修改。\n    OH_AudioSessionManager_SetScene(audioSessionManager, AUDIO_SESSION_SCENE_MEDIA);\n    // 启用混音播放下静音建议。\n    OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers(audioSessionManager, true);\n    // CONCURRENCY_MIX_WITH_OTHERS 是示例，实际使用时请根据情况修改。\n    OH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};\n    \n    // 设置音频并发模式并激活音频会话。\n    OH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);\n    // ...\n    result = OH_AudioSessionManager_DeactivateAudioSession(audioSessionManager);\n    // ...\n    OH_AudioCommon_Result resultUnregister = OH_AudioSessionManager_UnregisterSessionDeactivatedCallback(\n        audioSessionManager, MyAudioSessionDeactivatedCallback);\n"
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