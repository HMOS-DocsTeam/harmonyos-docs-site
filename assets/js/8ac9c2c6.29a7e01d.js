"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["138911"], {
575934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_routing_manager_h_capi_native_audio_routing_manager_h_md_8ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-headerfile-capi-native-audio-routing-manager-h-capi-native-audio-routing-manager-h-md-8ac.json
var site_docs_ref_audio_api_audio_c_audio_headerfile_capi_native_audio_routing_manager_h_capi_native_audio_routing_manager_h_md_8ac_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h","title":"native_audio_routing_manager.h","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h.md","sourceDirName":"audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h","slug":"/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"native_audio_routing_manager.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-routing-manager-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-audio-routing-manager-h"},"sidebar":"ref","previous":{"title":"native_audio_manager.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-manager-h/capi-native-audio-manager-h"},"next":{"title":"native_audio_session_manager.h","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-headerfile/capi-native-audio-routing-manager-h/capi-native-audio-routing-manager-h.md


const frontMatter = {
	title: 'native_audio_routing_manager.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-routing-manager-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-audio-routing-manager-h'
};
const contentTitle = 'native_audio_routing_manager.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AudioRoutingManager_OnDeviceChangedCallback()",
  "id": "oh_audioroutingmanager_ondevicechangedcallback",
  "level": 3
}, {
  "value": "OH_AudioManager_GetAudioRoutingManager()",
  "id": "oh_audiomanager_getaudioroutingmanager",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_GetDevices()",
  "id": "oh_audioroutingmanager_getdevices",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_GetAvailableDevices()",
  "id": "oh_audioroutingmanager_getavailabledevices",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_GetPreferredOutputDevice()",
  "id": "oh_audioroutingmanager_getpreferredoutputdevice",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_GetPreferredInputDevice()",
  "id": "oh_audioroutingmanager_getpreferredinputdevice",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_RegisterDeviceChangeCallback()",
  "id": "oh_audioroutingmanager_registerdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_UnregisterDeviceChangeCallback()",
  "id": "oh_audioroutingmanager_unregisterdevicechangecallback",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_ReleaseDevices()",
  "id": "oh_audioroutingmanager_releasedevices",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_OnDeviceBlockStatusCallback()",
  "id": "oh_audioroutingmanager_ondeviceblockstatuscallback",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_IsMicBlockDetectionSupported()",
  "id": "oh_audioroutingmanager_ismicblockdetectionsupported",
  "level": 3
}, {
  "value": "OH_AudioRoutingManager_SetMicBlockStatusCallback()",
  "id": "oh_audioroutingmanager_setmicblockstatuscallback",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "native_audio_routing_managerh",
        children: "native_audio_routing_manager.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明与音频路由管理器相关的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含用于创建audioRoutingManager，设备连接状态发生变化时的注册和注销功能，以及存储设备信息的指针数组的释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ohaudio/native_audio_routing_manager.h>"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRoutingManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明音频路由管理器。用于管理音频路由相关功能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_audioroutingmanager_ondevicechangedcallback",
              children: "typedef int32_t (*OH_AudioRoutingManager_OnDeviceChangedCallback)(OH_AudioDevice_ChangeType type, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数指针将指向用于返回更改的音频设备描述符的回调函数，可能返回多个音频设备描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioCommon_Result OH_AudioManager_GetAudioRoutingManager(OH_AudioRoutingManager **audioRoutingManager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询音频路由管理器句柄，该句柄应设置为路由相关函数中的第一个参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_getdevices",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetDevices(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDevice_Flag deviceFlag, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的deviceFlag查询可用的设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_getavailabledevices",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetAvailableDevices(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDevice_Usage deviceUsage, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取音频可选设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_getpreferredoutputdevice",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetPreferredOutputDevice(OH_AudioRoutingManager *audioRoutingManager, OH_AudioStream_Usage streamUsage, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据音频输出流的使用场景，获取优先级最高的输出设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_getpreferredinputdevice",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetPreferredInputDevice(OH_AudioRoutingManager *audioRoutingManager, OH_AudioStream_SourceType sourceType, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据音频输入流的使用场景，获取优先级最高的输入设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_registerdevicechangecallback",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_RegisterDeviceChangeCallback(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDevice_Flag deviceFlag, OH_AudioRoutingManager_OnDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册音频路由管理器的设备更改回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_unregisterdevicechangecallback",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_UnregisterDeviceChangeCallback(OH_AudioRoutingManager *audioRoutingManager, OH_AudioRoutingManager_OnDeviceChangedCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册音频路由管理器的设备更改回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_ReleaseDevices(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放音频设备描述符数组对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_ondeviceblockstatuscallback",
              children: "typedef void (*OH_AudioRoutingManager_OnDeviceBlockStatusCallback)(OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray, OH_AudioDevice_BlockStatus status, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioRoutingManager_OnDeviceBlockStatusCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数指针将指向用于返回音频设备堵塞状态的回调函数，可能返回多个音频设备描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_ismicblockdetectionsupported",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_IsMicBlockDetectionSupported(OH_AudioRoutingManager *audioRoutingManager, bool *supported)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备是否支持麦克风堵塞状态检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_setmicblockstatuscallback",
              children: "OH_AudioCommon_Result OH_AudioRoutingManager_SetMicBlockStatusCallback(OH_AudioRoutingManager *audioRoutingManager, OH_AudioRoutingManager_OnDeviceBlockStatusCallback callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置麦克风是否堵塞状态回调。  在使用此功能之前，用户应查询当前设备是否支持检测，应用只有在使用麦克风录音时，并且所使用的麦克风的堵塞状态发生改变，才会收到回调，目前此检测功能仅支持麦克风位于本地设备上。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_ondevicechangedcallback",
      children: "OH_AudioRoutingManager_OnDeviceChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_AudioRoutingManager_OnDeviceChangedCallback)(OH_AudioDevice_ChangeType type, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此函数指针将指向用于返回更改的音频设备描述符的回调函数，可能返回多个音频设备描述符。"
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
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_changetype",
              children: "OH_AudioDevice_ChangeType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备连接状态类型。 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_changetype",
              children: "OH_AudioDevice_ChangeType"
            }), " 已连接或断开。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " *audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), "设置音频设备描述符值的指针变量，不要单独释放audioDeviceDescriptorArray指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "来释放DeviceDescriptor数组。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiomanager_getaudioroutingmanager",
      children: "OH_AudioManager_GetAudioRoutingManager()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioManager_GetAudioRoutingManager(OH_AudioRoutingManager **audioRoutingManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询音频路由管理器句柄，该句柄应设置为路由相关函数中的第一个参数。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " **audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_getdevices",
      children: "OH_AudioRoutingManager_GetDevices()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetDevices(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDevice_Flag deviceFlag, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据输入的deviceFlag查询可用的设备。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_flag",
              children: "OH_AudioDevice_Flag"
            }), " deviceFlag"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频设备标志，用于选择目标设备的滤波器参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " **audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组。设置音频设备描述符值的指针变量，不要单独释放audioDeviceDescriptorArray指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "来释放DeviceDescriptor数组。"]
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioRoutingManager为nullptr；  2. 参数deviceFlag无效；  3. 参数audioDeviceDescriptorArray为nullptr。  AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_getavailabledevices",
      children: "OH_AudioRoutingManager_GetAvailableDevices()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetAvailableDevices(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDevice_Usage deviceUsage, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)\n"
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
      }), " 12"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_usage",
              children: "OH_AudioDevice_Usage"
            }), " deviceUsage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_usage",
              children: "OH_AudioDevice_Usage"
            }), "用于设置要获取的设备种类。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " **audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组。设置音频设备描述符值的指针变量，不要单独释放audioDeviceDescriptorArray指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "来释放DeviceDescriptor数组。"]
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1.参数audioRoutingManager为nullptr；  2.参数deviceUsage无效;  3.参数audioDeviceDescriptorArray为nullptr。  AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_getpreferredoutputdevice",
      children: "OH_AudioRoutingManager_GetPreferredOutputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetPreferredOutputDevice(OH_AudioRoutingManager *audioRoutingManager, OH_AudioStream_Usage streamUsage, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据音频输出流的使用场景，获取优先级最高的输出设备。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
              children: "OH_AudioStream_Usage"
            }), " streamUsage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
              children: "OH_AudioStream_Usage"
            }), "用于设置音频输出流的使用场景。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " **audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组。设置音频设备描述符值的指针变量，不要单独释放audioDeviceDescriptorArray指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "来释放DeviceDescriptor数组。"]
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1.参数audioRoutingManager为nullptr;  2.参数streamUsage无效;  3.参数audioDeviceDescriptorArray为nullptr。  AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_getpreferredinputdevice",
      children: "OH_AudioRoutingManager_GetPreferredInputDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_GetPreferredInputDevice(OH_AudioRoutingManager *audioRoutingManager, OH_AudioStream_SourceType sourceType, OH_AudioDeviceDescriptorArray **audioDeviceDescriptorArray)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据音频输入流的使用场景，获取优先级最高的输入设备。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
              children: "OH_AudioStream_SourceType"
            }), " sourceType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
              children: "OH_AudioStream_SourceType"
            }), "用于设置音频输入流的使用场景。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " **audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组。设置音频设备描述符值的指针变量，不要单独释放audioDeviceDescriptorArray指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "来释放DeviceDescriptor数组。"]
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1.参数audioRoutingManager为nullptr;  2.参数sourceType无效;  3.参数audioDeviceDescriptorArray为nullptr。  AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_registerdevicechangecallback",
      children: "OH_AudioRoutingManager_RegisterDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_RegisterDeviceChangeCallback(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDevice_Flag deviceFlag, OH_AudioRoutingManager_OnDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册音频路由管理器的设备更改回调。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_flag",
              children: "OH_AudioDevice_Flag"
            }), " deviceFlag"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频设备标志，用来注册回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数指针将指向用于返回更改的音频设备描述符的回调函数。"
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioRoutingManager为nullptr；  2. 参数deviceFlag无效；  3. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_unregisterdevicechangecallback",
      children: "OH_AudioRoutingManager_UnregisterDeviceChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_UnregisterDeviceChangeCallback(OH_AudioRoutingManager *audioRoutingManager, OH_AudioRoutingManager_OnDeviceChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册音频路由管理器的设备更改回调。"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_ondevicechangedcallback",
              children: "OH_AudioRoutingManager_OnDeviceChangedCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数指针将指向用于返回更改的音频设备描述符的回调函数。"
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioRoutingManager为nullptr；  2. 参数callback为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_releasedevices",
      children: "OH_AudioRoutingManager_ReleaseDevices()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_ReleaseDevices(OH_AudioRoutingManager *audioRoutingManager, OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray)\n"
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiodevicedescriptorarray/capi-ohaudio-oh-audiodevicedescriptorarray",
              children: "OH_AudioDeviceDescriptorArray"
            }), " *audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组应当被释放，获取请调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), "接口。"]
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1. 参数audioRoutingManager为nullptr；  2. 参数audioDeviceDescriptorArray为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_ondeviceblockstatuscallback",
      children: "OH_AudioRoutingManager_OnDeviceBlockStatusCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AudioRoutingManager_OnDeviceBlockStatusCallback)(OH_AudioDeviceDescriptorArray *audioDeviceDescriptorArray, OH_AudioDevice_BlockStatus status, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此函数指针将指向用于返回音频设备堵塞状态的回调函数，可能返回多个音频设备描述符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            }), " *audioDeviceDescriptorArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频设备描述符数组应当被释放，获取请调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_getdevices",
              children: "OH_AudioRoutingManager_GetDevices"
            }), "接口。设置音频设备描述符值的指针变量，不要单独释放audioDeviceDescriptorArray指针，而是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_releasedevices",
              children: "OH_AudioRoutingManager_ReleaseDevices"
            }), "来释放DeviceDescriptor数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-device-base-h/capi-native-audio-device-base-h#oh_audiodevice_blockstatus",
              children: "OH_AudioDevice_BlockStatus"
            }), " status"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频设备的堵塞状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_ismicblockdetectionsupported",
      children: "OH_AudioRoutingManager_IsMicBlockDetectionSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_IsMicBlockDetectionSupported(OH_AudioRoutingManager *audioRoutingManager, bool *supported)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前设备是否支持麦克风堵塞状态检测。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备是否支持麦克风堵塞状态检测的结果。true表示支持，false表示不支持。"
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1.参数audioRoutingManager为nullptr；  2.参数supported为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audioroutingmanager_setmicblockstatuscallback",
      children: "OH_AudioRoutingManager_SetMicBlockStatusCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCommon_Result OH_AudioRoutingManager_SetMicBlockStatusCallback(OH_AudioRoutingManager *audioRoutingManager, OH_AudioRoutingManager_OnDeviceBlockStatusCallback callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置麦克风是否堵塞状态回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用此功能之前，用户应查询当前设备是否支持检测，应用只有在使用麦克风录音时，并且所使用的麦克风的堵塞状态发生改变，才会收到回调，目前此检测功能仅支持麦克风位于本地设备上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audioroutingmanager/capi-ohaudio-oh-audioroutingmanager",
              children: "OH_AudioRoutingManager"
            }), " *audioRoutingManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频路由管理器句柄。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiomanager_getaudioroutingmanager",
              children: "OH_AudioManager_GetAudioRoutingManager"
            }), "获取句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_ondeviceblockstatuscallback",
              children: "OH_AudioRoutingManager_OnDeviceBlockStatusCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数指针将指向用于返回接受设备麦克风堵塞状态", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audioroutingmanager_ondeviceblockstatuscallback",
              children: "OH_AudioRoutingManager_OnDeviceBlockStatusCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据指针。"
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
            children: "AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：  1.参数audioRoutingManager为nullptr；  2.参数callback为nullptr。"
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