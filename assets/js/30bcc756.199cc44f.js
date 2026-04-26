"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["47561"], {
229096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_session_manager_h_capi_native_audio_session_manager_h_md_30b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-headerfile-capi-native-audio-session-manager-h-capi-native-audio-session-manager-h-md-30b.json
var site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_session_manager_h_capi_native_audio_session_manager_h_md_30b_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h","title":"native_audio_session_manager.h","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h.md","sourceDirName":"audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h","slug":"/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"native_audio_session_manager.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audio-session-manager-h"},"sidebar":"ref","previous":{"title":"native_audio_routing_manager.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h"},"next":{"title":"native_audio_stream_manager.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-stream-manager-h/capi-native-audio-stream-manager-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h.md


const frontMatter = {
	title: 'native_audio_session_manager.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audio-session-manager-h'
};
const contentTitle = 'native_audio_session_manager.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_AudioSession_ConcurrencyMode",
  "id": "oh_audiosession_concurrencymode",
  "level": 3
}, {
  "value": "OH_AudioSession_Scene",
  "id": "oh_audiosession_scene",
  "level": 3
}, {
  "value": "OH_AudioSession_StateChangeHint",
  "id": "oh_audiosession_statechangehint",
  "level": 3
}, {
  "value": "OH_AudioSession_OutputDeviceChangeRecommendedAction",
  "id": "oh_audiosession_outputdevicechangerecommendedaction",
  "level": 3
}, {
  "value": "OH_AudioSession_DeactivatedReason",
  "id": "oh_audiosession_deactivatedreason",
  "level": 3
}, {
  "value": "OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory",
  "id": "oh_audiosession_bluetoothandnearlinkpreferredrecordcategory",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AudioSession_StateChangedCallback()",
  "id": "oh_audiosession_statechangedcallback",
  "level": 3
}, {
  "value": "OH_AudioSession_AvailableDeviceChangedCallback()",
  "id": "oh_audiosession_availabledevicechangedcallback",
  "level": 3
}, {
  "value": "OH_AudioSession_CurrentInputDeviceChangedCallback()",
  "id": "oh_audiosession_currentinputdevicechangedcallback",
  "level": 3
}, {
  "value": "OH_AudioSession_CurrentOutputDeviceChangedCallback()",
  "id": "oh_audiosession_currentoutputdevicechangedcallback",
  "level": 3
}, {
  "value": "OH_AudioSession_DeactivatedCallback()",
  "id": "oh_audiosession_deactivatedcallback",
  "level": 3
}, {
  "value": "OH_AudioManager_GetAudioSessionManager()",
  "id": "oh_audiomanager_getaudiosessionmanager",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_ActivateAudioSession()",
  "id": "oh_audiosessionmanager_activateaudiosession",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_DeactivateAudioSession()",
  "id": "oh_audiosessionmanager_deactivateaudiosession",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_IsAudioSessionActivated()",
  "id": "oh_audiosessionmanager_isaudiosessionactivated",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_RegisterSessionDeactivatedCallback()",
  "id": "oh_audiosessionmanager_registersessiondeactivatedcallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_UnregisterSessionDeactivatedCallback()",
  "id": "oh_audiosessionmanager_unregistersessiondeactivatedcallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_SetScene()",
  "id": "oh_audiosessionmanager_setscene",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_RegisterStateChangeCallback()",
  "id": "oh_audiosessionmanager_registerstatechangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_UnregisterStateChangeCallback()",
  "id": "oh_audiosessionmanager_unregisterstatechangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_SetDefaultOutputDevice()",
  "id": "oh_audiosessionmanager_setdefaultoutputdevice",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_GetDefaultOutputDevice()",
  "id": "oh_audiosessionmanager_getdefaultoutputdevice",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_ReleaseDevices()",
  "id": "oh_audiosessionmanager_releasedevices",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_RegisterCurrentOutputDeviceChangeCallback()",
  "id": "oh_audiosessionmanager_registercurrentoutputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_UnregisterCurrentOutputDeviceChangeCallback()",
  "id": "oh_audiosessionmanager_unregistercurrentoutputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_GetAvailableDevices()",
  "id": "oh_audiosessionmanager_getavailabledevices",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_RegisterAvailableDevicesChangeCallback()",
  "id": "oh_audiosessionmanager_registeravailabledeviceschangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_UnregisterAvailableDevicesChangeCallback()",
  "id": "oh_audiosessionmanager_unregisteravailabledeviceschangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_SelectMediaInputDevice()",
  "id": "oh_audiosessionmanager_selectmediainputdevice",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_GetSelectedMediaInputDevice()",
  "id": "oh_audiosessionmanager_getselectedmediainputdevice",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_SetBluetoothAndNearlinkPreferredRecordCategory()",
  "id": "oh_audiosessionmanager_setbluetoothandnearlinkpreferredrecordcategory",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_GetBluetoothAndNearlinkPreferredRecordCategory()",
  "id": "oh_audiosessionmanager_getbluetoothandnearlinkpreferredrecordcategory",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback()",
  "id": "oh_audiosessionmanager_registercurrentinputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_UnregisterCurrentInputDeviceChangeCallback()",
  "id": "oh_audiosessionmanager_unregistercurrentinputdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_ReleaseDevice()",
  "id": "oh_audiosessionmanager_releasedevice",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers()",
  "id": "oh_audiosessionmanager_enablemutesuggestionwhenmixwithothers",
  "level": 3
}, {
  "value": "OH_AudioSessionManager_IsOtherMediaPlaying()",
  "id": "oh_audiosessionmanager_isothermediaplaying",
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
        id: "native_audio_session_managerh",
        children: "native_audio_session_manager.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明音频会话管理相关的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含创建音频会话管理器、激活/停用音频会话、检查音频会话是否已激活，以及监听音频会话停用事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohaudio/native_audio_session_manager.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohaudio.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Audio.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
        children: "OHAudio"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-strategy/capi-ohaudio-oh-audiosession-strategy",
              children: "OH_AudioSession_Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-deactivatedevent/capi-ohaudio-oh-audiosession-deactivatedevent",
              children: "OH_AudioSession_DeactivatedEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_DeactivatedEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话已停用事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-statechangedevent/capi-ohaudio-oh-audiosession-statechangedevent",
              children: "OH_AudioSession_StateChangedEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_StateChangedEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话状态变更事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSessionManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频会话管理器。用于管理音频会话相关功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_concurrencymode",
              children: "OH_AudioSession_ConcurrencyMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_ConcurrencyMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频并发模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_scene",
              children: "OH_AudioSession_Scene"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_Scene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_statechangehint",
              children: "OH_AudioSession_StateChangeHint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_StateChangeHint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话状态变更的提示信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_outputdevicechangerecommendedaction",
              children: "OH_AudioSession_OutputDeviceChangeRecommendedAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_OutputDeviceChangeRecommendedAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出设备变更后推荐的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_deactivatedreason",
              children: "OH_AudioSession_DeactivatedReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_DeactivatedReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话停用原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_bluetoothandnearlinkpreferredrecordcategory",
              children: "OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_statechangedcallback",
              children: "typedef void (*OH_AudioSession_StateChangedCallback)(OH_AudioSession_StateChangedEvent event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_StateChangedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "这个函数指针将指向用于监听音频会话状态变更事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_availabledevicechangedcallback",
              children: "typedef void (*OH_AudioSession_AvailableDeviceChangedCallback)(OH_AudioDevice_ChangeType type, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_AvailableDeviceChangedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数指针将指向用于返回变化的音频设备描述符的回调函数，可能会返回多个音频设备描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_currentinputdevicechangedcallback",
              children: "typedef void (*OH_AudioSession_CurrentInputDeviceChangedCallback)(OH_AudioDeviceDescriptorArray *devices, OH_AudioStream_DeviceChangeReason changeReason)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_CurrentInputDeviceChangedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "这个函数指针将指向用于监听当前输入设备变化事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_currentoutputdevicechangedcallback",
              children: "typedef void (*OH_AudioSession_CurrentOutputDeviceChangedCallback)(OH_AudioDeviceDescriptorArray *devices, OH_AudioStream_DeviceChangeReason changeReason, OH_AudioSession_OutputDeviceChangeRecommendedAction recommendedAction)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_CurrentOutputDeviceChangedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "这个函数指针将指向用于监听当前输出设备变化事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosession_deactivatedcallback",
              children: "typedef int32_t (*OH_AudioSession_DeactivatedCallback)(OH_AudioSession_DeactivatedEvent event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioSession_DeactivatedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "这个函数指针将指向用于监听音频会话停用事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioCommon_Result OH_AudioManager_GetAudioSessionManager(OH_AudioSessionManager **audioSessionManager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取音频会话管理器。使用音频会话管理器相关功能，首先需要获取音频会话管理器实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_activateaudiosession",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_ActivateAudioSession(OH_AudioSessionManager *audioSessionManager, const OH_AudioSession_Strategy *strategy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活音频会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_deactivateaudiosession",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_DeactivateAudioSession(OH_AudioSessionManager *audioSessionManager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停用音频会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_isaudiosessionactivated",
              children: "bool OH_AudioSessionManager_IsAudioSessionActivated(OH_AudioSessionManager *audioSessionManager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查音频会话是否已激活。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_registersessiondeactivatedcallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterSessionDeactivatedCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_DeactivatedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册音频会话停用事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_unregistersessiondeactivatedcallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterSessionDeactivatedCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_DeactivatedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册音频会话停用事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_setscene",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_SetScene(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_Scene scene)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音频会话场景参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_registerstatechangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterStateChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_StateChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册音频会话状态变更事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_unregisterstatechangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterStateChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_StateChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消音频会话状态变更事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_setdefaultoutputdevice",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_SetDefaultOutputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Type deviceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置默认本机内置发声设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_getdefaultoutputdevice",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_GetDefaultOutputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Type *deviceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_setdefaultoutputdevice",
              children: "OH_AudioSessionManager_SetDefaultOutputDevice"
            }), "设置的默认发声设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_releasedevices",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_ReleaseDevices(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放音频设备描述符数组对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_registercurrentoutputdevicechangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterCurrentOutputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentOutputDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册当前输出设备变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_unregistercurrentoutputdevicechangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterCurrentOutputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentOutputDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册当前输出设备变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_getavailabledevices",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_GetAvailableDevices(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Usage deviceUsage, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取音频可选设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_registeravailabledeviceschangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterAvailableDevicesChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Usage deviceUsage, OH_AudioSession_AvailableDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册可用设备更改回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_unregisteravailabledeviceschangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterAvailableDevicesChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_AvailableDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册可用设备更改回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_selectmediainputdevice",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_SelectMediaInputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptor *deviceDescriptor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置媒体输入设备。此功能不适用于呼叫录音，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
              children: "SourceType"
            }), "为SOURCE_TYPE_VOICE_COMMUNICATION的场景不适用。  在存在更高优先级的并发录音流的场景中，应用程序实际使用的输入设备可能与所选设备不同。  应用程序可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_registercurrentinputdevicechangecallback",
              children: "OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback"
            }), "注册一个回调来监听实际的输入设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_getselectedmediainputdevice",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_GetSelectedMediaInputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptor **audioDeviceDescriptor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获得通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_selectmediainputdevice",
              children: "OH_AudioSessionManager_SelectMediaInputDevice"
            }), "设置的媒体输入设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_setbluetoothandnearlinkpreferredrecordcategory",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_SetBluetoothAndNearlinkPreferredRecordCategory(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory category)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。应用程序可以在蓝牙或星闪连接之前设置此分类，系统将在设备连接时优先使用蓝牙或星闪进行录音。  在更高优先级的并发录音流的场景中，应用程序实际使用的输入设备可能与当前设置的偏好设备不同。  应用程序可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_registercurrentinputdevicechangecallback",
              children: "OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback"
            }), "注册一个回调来监听实际的输入设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_getbluetoothandnearlinkpreferredrecordcategory",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_GetBluetoothAndNearlinkPreferredRecordCategory(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory *category)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用程序设置的在使用蓝牙或星闪进行录音时的设备偏好分类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_registercurrentinputdevicechangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentInputDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册音频会话管理器的输入设备更改回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_unregistercurrentinputdevicechangecallback",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterCurrentInputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentInputDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册音频会话管理器的输入设备更改回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_releasedevice",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_ReleaseDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptor *audioDeviceDescriptor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放音频设备描述符对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_enablemutesuggestionwhenmixwithothers",
              children: "OH_AudioCommon_Result OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers(OH_AudioSessionManager *audioSessionManager, bool enable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用混音播放下接收静音播放建议通知功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_isothermediaplaying",
              children: "bool OH_AudioSessionManager_IsOtherMediaPlaying(OH_AudioSessionManager *audioSessionManager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查是否有其他应用正在播放MUSIC、MOVIE、AUDIOBOOK、GAME四种媒体类型的音频，已激活媒体类型的音频会话也将会被检查。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_concurrencymode",
      children: "OH_AudioSession_ConcurrencyMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSession_ConcurrencyMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频并发模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONCURRENCY_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认使用系统策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONCURRENCY_MIX_WITH_OTHERS = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "和其它正在播放应用进行混音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONCURRENCY_DUCK_OTHERS = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后来播放应用压低正在播放应用的音量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONCURRENCY_PAUSE_OTHERS = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后来播放应用暂停正在播放应用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_scene",
      children: "OH_AudioSession_Scene"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSession_Scene\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频会话场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_SCENE_MEDIA = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体音频会话场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_SCENE_GAME = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏音频会话场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_SCENE_VOICE_COMMUNICATION = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VoIP语音通话音频会话场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_statechangehint",
      children: "OH_AudioSession_StateChangeHint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSession_StateChangeHint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频会话状态变更的提示信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_RESUME = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示音频会话恢复，应用可主动触发开始渲染等相关操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示音频会话暂停，暂时失去音频焦点。当焦点再次可用时，会收到AUDIO_SESSION_STATE_CHANGE_HINT_RESUME事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_STOP = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示音频会话在焦点被抢占后停止，彻底失去音频焦点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示长时间没有音频业务，音频会话将被系统停止，彻底失去音频焦点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_DUCK = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示音频会话躲避开始，降低音量播放。如果已启用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_enablemutesuggestionwhenmixwithothers",
              children: "OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers"
            }), "，此时可以选择执行静音操作。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示音频会话躲避结束，恢复音量播放。如果已启用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_enablemutesuggestionwhenmixwithothers",
              children: "OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers"
            }), "，此时可取消静音。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION = 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["静音播放建议。当其他应用程序开始播放不可混音的音频时，应用程序可以自行决定是否静音。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION = 7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消静音播放建议。当其他应用程序不可混音的音频已结束，该应用程序可自行决定是否取消静音。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_outputdevicechangerecommendedaction",
      children: "OH_AudioSession_OutputDeviceChangeRecommendedAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSession_OutputDeviceChangeRecommendedAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出设备变更后推荐的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见场景示例：耳机设备和外放设备之间进行切换。当佩戴耳机时，从外放设备切换到耳机设备，系统会推荐继续播放，提示应用无需停止当前播放。当摘下耳机设备切换到外放设备时，系统会推荐停止播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_CHANGE_RECOMMEND_TO_CONTINUE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推荐继续播放（该事件作为播放维持提示，作用是告知应用本次设备变动音频无需停止播放，但‌不可将其作为启动音频播放的判断依据）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_CHANGE_RECOMMEND_TO_STOP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推荐停止播放。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_deactivatedreason",
      children: "OH_AudioSession_DeactivatedReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSession_DeactivatedReason\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频会话停用原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEACTIVATED_LOWER_PRIORITY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用焦点被抢占。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEACTIVATED_TIMEOUT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用停流后超时。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_bluetoothandnearlinkpreferredrecordcategory",
      children: "OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERRED_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无指定设备偏好。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERRED_DEFAULT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更偏好使用蓝牙或星闪录音。是否使用低延迟或高质量录音取决于系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERRED_LOW_LATENCY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更偏好使用蓝牙或星闪低延迟模式进行录音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERRED_HIGH_QUALITY = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更偏好使用蓝牙或星闪高质量模式进行录音。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_statechangedcallback",
      children: "OH_AudioSession_StateChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AudioSession_StateChangedCallback)(OH_AudioSession_StateChangedEvent event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数指针将指向用于监听音频会话状态变更事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-statechangedevent/capi-ohaudio-oh-audiosession-statechangedevent",
              children: "OH_AudioSession_StateChangedEvent"
            }), " event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话状态变更事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_availabledevicechangedcallback",
      children: "OH_AudioSession_AvailableDeviceChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AudioSession_AvailableDeviceChangedCallback)(OH_AudioDevice_ChangeType type, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此函数指针将指向用于返回变化的音频设备描述符的回调函数，可能会返回多个音频设备描述符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_changetype",
              children: "OH_AudioDevice_ChangeType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备连接状态类型，已连接或断开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " *audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组。  不再继续使用audioDeviceDescriptorArray指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiosessionmanager_releasedevices",
              children: "OH_AudioSessionManager_ReleaseDevices"
            }), "进行释放。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_currentinputdevicechangedcallback",
      children: "OH_AudioSession_CurrentInputDeviceChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AudioSession_CurrentInputDeviceChangedCallback)(OH_AudioDeviceDescriptorArray *devices, OH_AudioStream_DeviceChangeReason changeReason)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数指针将指向用于监听当前输入设备变化事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " *devices"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组。  不再继续使用devices指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_releasedevices",
              children: "OH_AudioSessionManager_ReleaseDevices"
            }), "进行释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_devicechangereason",
              children: "OH_AudioStream_DeviceChangeReason"
            }), " changeReason"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备变更原因。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_currentoutputdevicechangedcallback",
      children: "OH_AudioSession_CurrentOutputDeviceChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AudioSession_CurrentOutputDeviceChangedCallback)(OH_AudioDeviceDescriptorArray *devices, OH_AudioStream_DeviceChangeReason changeReason, OH_AudioSession_OutputDeviceChangeRecommendedAction recommendedAction)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数指针将指向用于监听当前输出设备变化事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " *devices"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组，指向OH_AudioDeviceDescriptorArray设置音频设备描述符值的指针变量，不要单独释放audioDeviceDescriptorArray指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_releasedevices",
              children: "OH_AudioSessionManager_ReleaseDevices"
            }), "来释放DeviceDescriptor数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_devicechangereason",
              children: "OH_AudioStream_DeviceChangeReason"
            }), " changeReason"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_devicechangereason",
              children: "OH_AudioStream_DeviceChangeReason"
            }), "，用于接收设备变更原因。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_outputdevicechangerecommendedaction",
              children: "OH_AudioSession_OutputDeviceChangeRecommendedAction"
            }), " recommendedAction"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_outputdevicechangerecommendedaction",
              children: "OH_AudioSession_OutputDeviceChangeRecommendedAction"
            }), "，用于接收设备变更后推荐的操作。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosession_deactivatedcallback",
      children: "OH_AudioSession_DeactivatedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_AudioSession_DeactivatedCallback)(OH_AudioSession_DeactivatedEvent event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数指针将指向用于监听音频会话停用事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-deactivatedevent/capi-ohaudio-oh-audiosession-deactivatedevent",
              children: "OH_AudioSession_DeactivatedEvent"
            }), " event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话已停用事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiomanager_getaudiosessionmanager",
      children: "OH_AudioManager_GetAudioSessionManager()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioManager_GetAudioSessionManager(OH_AudioSessionManager **audioSessionManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取音频会话管理器。使用音频会话管理器相关功能，首先需要获取音频会话管理器实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " **audioSessionManager"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频会话管理器实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_activateaudiosession",
      children: "OH_AudioSessionManager_ActivateAudioSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_ActivateAudioSession(OH_AudioSessionManager *audioSessionManager, const OH_AudioSession_Strategy *strategy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "激活音频会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-strategy/capi-ohaudio-oh-audiosession-strategy",
              children: "const OH_AudioSession_Strategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosession-strategy/capi-ohaudio-oh-audiosession-strategy",
              children: "OH_AudioSession_Strategy"
            }), "，用于设置音频会话策略。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回值：  AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数strategy无效。  AUDIOCOMMON_RESULT_ERROR_ILLEGAL_STATE：非法状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_deactivateaudiosession",
      children: "OH_AudioSessionManager_DeactivateAudioSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_DeactivateAudioSession(OH_AudioSessionManager *audioSessionManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停用音频会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数audioSessionManager为nullptr。  AUDIOCOMMON_RESULT_ERROR_ILLEGAL_STATE：非法状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_isaudiosessionactivated",
      children: "OH_AudioSessionManager_IsAudioSessionActivated()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_AudioSessionManager_IsAudioSessionActivated(OH_AudioSessionManager *audioSessionManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查音频会话是否已激活。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回当前应用的音频会话是否已激活，true表示已激活，false表示已停用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_registersessiondeactivatedcallback",
      children: "OH_AudioSessionManager_RegisterSessionDeactivatedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterSessionDeactivatedCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_DeactivatedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册音频会话停用事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_deactivatedcallback",
              children: "OH_AudioSession_DeactivatedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收音频会话已停用事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_unregistersessiondeactivatedcallback",
      children: "OH_AudioSessionManager_UnregisterSessionDeactivatedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterSessionDeactivatedCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_DeactivatedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册音频会话停用事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_deactivatedcallback",
              children: "OH_AudioSession_DeactivatedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收音频会话已停用事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_setscene",
      children: "OH_AudioSessionManager_SetScene()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_SetScene(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_Scene scene)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置音频会话场景参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_scene",
              children: "OH_AudioSession_Scene"
            }), " scene"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_scene",
              children: "OH_AudioSession_Scene"
            }), "要设置的音频会话场景。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数scene为枚举范围外的值。  AUDIOCOMMON_RESULT_ERROR_ILLEGAL_STATE：系统当前状态下不允许设置，例如audio session未处于ready态。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_registerstatechangecallback",
      children: "OH_AudioSessionManager_RegisterStateChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterStateChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_StateChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册音频会话状态变更事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_statechangedcallback",
              children: "OH_AudioSession_StateChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收音频会话状态变更事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：系统内存申请异常。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_unregisterstatechangecallback",
      children: "OH_AudioSessionManager_UnregisterStateChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterStateChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_StateChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消音频会话状态变更事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_statechangedcallback",
              children: "OH_AudioSession_StateChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收音频会话状态变更事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_setdefaultoutputdevice",
      children: "OH_AudioSessionManager_SetDefaultOutputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_SetDefaultOutputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Type deviceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置默认本机内置发声设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(951065)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本接口适用范围如下：当设置的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_scene",
          children: "OH_AudioSession_Scene"
        }), "为VoIP场景时，激活AudioSession后立即生效；如果", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_scene",
          children: "OH_AudioSession_Scene"
        }), "为非VoIP场景，激活AudioSession时不会生效，直到启动播放的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
          children: "OH_AudioStream_Usage"
        }), "为语音消息、VoIP语音通话或VoIP视频通话时才生效。支持听筒、扬声器和系统默认设备。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本接口允许在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
          children: "OH_AudioSessionManager"
        }), "创建后随时调用。系统记录应用设置的默认本机内置发声设备，但只有激活AudioSession后才能生效。应用启动播放时，若外接设备如蓝牙耳机或有线耳机已接入，系统优先从外接设备发声；否则，系统遵循应用设置的默认本机内置发声设备。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 当该接口在无听筒的设备上设置默认发声设备为听筒时，将继续从扬声器发声。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_type",
              children: "OH_AudioDevice_Type"
            }), " deviceType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_type",
              children: "OH_AudioDevice_Type"
            }), "用于设置发声设备类型。可设置的设备类型包括：  AUDIO_DEVICE_TYPE_EARPIECE：听筒。  AUDIO_DEVICE_TYPE_SPEAKER：扬声器。  AUDIO_DEVICE_TYPE_DEFAULT：系统默认设备。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数deviceType超出枚举OH_AudioDevice_Type范围。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_getdefaultoutputdevice",
      children: "OH_AudioSessionManager_GetDefaultOutputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_GetDefaultOutputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Type *deviceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_setdefaultoutputdevice",
        children: "OH_AudioSessionManager_SetDefaultOutputDevice"
      }), "设置的默认发声设备。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_type",
              children: "OH_AudioDevice_Type"
            }), " *deviceType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_type",
              children: "OH_AudioDevice_Type"
            }), "用于获取发声设备类型参数指针。返回的设备类型包括：  AUDIO_DEVICE_TYPE_EARPIECE：听筒。  AUDIO_DEVICE_TYPE_SPEAKER：扬声器。  AUDIO_DEVICE_TYPE_DEFAULT：系统默认设备。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数deviceType为nullptr。  AUDIOCOMMON_RESULT_ERROR_ILLEGAL_STATE：系统当前状态下不允许获取默认设备类型，例如audio session未处于ready态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_releasedevices",
      children: "OH_AudioSessionManager_ReleaseDevices()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_ReleaseDevices(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放音频设备描述符数组对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " *audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要释放的音频设备描述符数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数audioDeviceDescriptorArray为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_registercurrentoutputdevicechangecallback",
      children: "OH_AudioSessionManager_RegisterCurrentOutputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterCurrentOutputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentOutputDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册当前输出设备变化回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_currentoutputdevicechangedcallback",
              children: "OH_AudioSession_CurrentOutputDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回音频设备变更信息的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：系统内存申请异常。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_unregistercurrentoutputdevicechangecallback",
      children: "OH_AudioSessionManager_UnregisterCurrentOutputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterCurrentOutputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentOutputDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册当前输出设备变化回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_currentoutputdevicechangedcallback",
              children: "OH_AudioSession_CurrentOutputDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回音频设备变更信息的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_getavailabledevices",
      children: "OH_AudioSessionManager_GetAvailableDevices()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_GetAvailableDevices(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Usage deviceUsage, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取音频可选设备列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_usage",
              children: "OH_AudioDevice_Usage"
            }), " deviceUsage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置要获取的设备种类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " **audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组。  不再继续使用audioDeviceDescriptorArray指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_releasedevices",
              children: "OH_AudioSessionManager_ReleaseDevices"
            }), "进行释放。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1.参数audioSessionManager为nullptr；  2.参数deviceUsage无效;  3.参数audioDeviceDescriptorArray为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_registeravailabledeviceschangecallback",
      children: "OH_AudioSessionManager_RegisterAvailableDevicesChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterAvailableDevicesChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioDevice_Usage deviceUsage, OH_AudioSession_AvailableDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册可用设备更改回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_usage",
              children: "OH_AudioDevice_Usage"
            }), " deviceUsage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置要获取的设备种类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_availabledevicechangedcallback",
              children: "OH_AudioSession_AvailableDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回可用音频设备变更信息的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数deviceUsage无效；  3. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_unregisteravailabledeviceschangecallback",
      children: "OH_AudioSessionManager_UnregisterAvailableDevicesChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterAvailableDevicesChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_AvailableDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册可用设备更改回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_availabledevicechangedcallback",
              children: "OH_AudioSession_AvailableDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回可用音频设备变更信息的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_selectmediainputdevice",
      children: "OH_AudioSessionManager_SelectMediaInputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_SelectMediaInputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptor *deviceDescriptor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置媒体输入设备。此功能不适用于呼叫录音，即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
        children: "SourceType"
      }), "为SOURCE_TYPE_VOICE_COMMUNICATION的场景不适用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在存在更高优先级的并发录音流的场景中，应用程序实际使用的输入设备可能与所选设备不同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用程序可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_registercurrentinputdevicechangecallback",
        children: "OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback"
      }), "注册一个回调来监听实际的输入设备。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *deviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目标设备。可用设备必须位于由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_getavailabledevices",
              children: "OH_AudioSessionManager_GetAvailableDevices"
            }), "返回的数组中。  当传递nullptr时，系统将清除上一次的设置。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数audioSessionManager为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_getselectedmediainputdevice",
      children: "OH_AudioSessionManager_GetSelectedMediaInputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_GetSelectedMediaInputDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptor **audioDeviceDescriptor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获得通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_selectmediainputdevice",
        children: "OH_AudioSessionManager_SelectMediaInputDevice"
      }), "设置的媒体输入设备。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " **audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_selectmediainputdevice",
              children: "OH_AudioSessionManager_SelectMediaInputDevice"
            }), "设置的媒体设备，如果没有设置，返回一个类型为AUDIO_DEVICE_TYPE_INVALID的设备。  不再继续使用audioDeviceDescriptor指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_releasedevice",
              children: "OH_AudioSessionManager_ReleaseDevice"
            }), "进行释放。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数audioDeviceDescriptor为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_setbluetoothandnearlinkpreferredrecordcategory",
      children: "OH_AudioSessionManager_SetBluetoothAndNearlinkPreferredRecordCategory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_SetBluetoothAndNearlinkPreferredRecordCategory(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory category)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。应用程序可以在蓝牙或星闪连接之前设置此分类，系统将在设备连接时优先使用蓝牙或星闪进行录音。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在更高优先级的并发录音流的场景中，应用程序实际使用的输入设备可能与当前设置的偏好设备不同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用程序可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_registercurrentinputdevicechangecallback",
        children: "OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback"
      }), "注册一个回调来监听实际的输入设备。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_bluetoothandnearlinkpreferredrecordcategory",
              children: "OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory"
            }), " category"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数category错误。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_getbluetoothandnearlinkpreferredrecordcategory",
      children: "OH_AudioSessionManager_GetBluetoothAndNearlinkPreferredRecordCategory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_GetBluetoothAndNearlinkPreferredRecordCategory(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory *category)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取应用程序设置的在使用蓝牙或星闪进行录音时的设备偏好分类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_bluetoothandnearlinkpreferredrecordcategory",
              children: "OH_AudioSession_BluetoothAndNearlinkPreferredRecordCategory"
            }), " *category"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数category为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_registercurrentinputdevicechangecallback",
      children: "OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_RegisterCurrentInputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentInputDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册音频会话管理器的输入设备更改回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_currentinputdevicechangedcallback",
              children: "OH_AudioSession_CurrentInputDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回音频输入设备变更信息的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：内存不足。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_unregistercurrentinputdevicechangecallback",
      children: "OH_AudioSessionManager_UnregisterCurrentInputDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_UnregisterCurrentInputDeviceChangeCallback(OH_AudioSessionManager *audioSessionManager, OH_AudioSession_CurrentInputDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册音频会话管理器的输入设备更改回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_currentinputdevicechangedcallback",
              children: "OH_AudioSession_CurrentInputDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于返回音频输入设备变更信息的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数callback为nullptr。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_releasedevice",
      children: "OH_AudioSessionManager_ReleaseDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_ReleaseDevice(OH_AudioSessionManager *audioSessionManager, OH_AudioDeviceDescriptor *audioDeviceDescriptor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放音频设备描述符对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptor/capi-ohaudio-oh-audiodevicedescriptor",
              children: "OH_AudioDeviceDescriptor"
            }), " *audioDeviceDescriptor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被释放的音频设备描述符对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioSessionManager为nullptr；  2. 参数audioDeviceDescriptor为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_enablemutesuggestionwhenmixwithothers",
      children: "OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers(OH_AudioSessionManager *audioSessionManager, bool enable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启用混音播放下接收静音播放建议通知功能。通常，当使用混音模式时，如果有其他应用的音频同时播放，此时两者会混合播放。部分场景下（如游戏或广播），应用可以通过启用静音建议通知，以给用户提供更好的体验。如果启用此功能，当订阅音频会话状态更改事件后静音建议和取消静音建议提示将通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_statechangedcallback",
        children: "OH_AudioSession_StateChangedCallback"
      }), "回调发送，该回调由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosessionmanager_registerstatechangecallback",
        children: "OH_AudioSessionManager_RegisterStateChangeCallback"
      }), "注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["收到静音建议表示其他应用程序开始播放音频，且播放的音频和本应用的音频不能混音。此功能仅支持已设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_scene",
        children: "OH_AudioSession_Scene"
      }), "并激活模式为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiosession_concurrencymode",
        children: "OH_AudioSession_ConcurrencyMode"
      }), ".CONCURRENCY_MIX_WITH_OTHERS的音频会话使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并且仅在激活音频会话期间生效一次，每次激活音频会话前都必须重新启用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否启用静音建议回调功能。true表示启用，false表示不启用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-common-h/capi-native-audio-common-h#oh_audiocommon_result",
              children: "OH_AudioCommon_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数audioSessionManager为nullptr。  AUDIOCOMMON_RESULT_ERROR_ILLEGAL_STATE：  1. 未设置音频会话场景。  2. 音频会话激活后调用此函数。  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统异常，例如系统服务异常退出等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiosessionmanager_isothermediaplaying",
      children: "OH_AudioSessionManager_IsOtherMediaPlaying()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_AudioSessionManager_IsOtherMediaPlaying(OH_AudioSessionManager *audioSessionManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否有其他应用正在播放MUSIC、MOVIE、AUDIOBOOK、GAME四种媒体类型的音频，已激活媒体类型的音频会话也将会被检查。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiosessionmanager/capi-ohaudio-oh-audiosessionmanager",
              children: "OH_AudioSessionManager"
            }), " *audioSessionManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager",
              children: "OH_AudioManager_GetAudioSessionManager"
            }), "创建的音频会话管理实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否有其他应用正在播放媒体类型的音频。true表示有，false表示没有。"
          })]
        })
      })]
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
951065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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