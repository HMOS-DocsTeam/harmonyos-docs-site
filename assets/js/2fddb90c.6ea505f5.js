"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["908768"], {
530345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_device_audio_output_device_management_audio_output_device_management_md_2fd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-device-audio-output-device-management-audio-output-device-management-md-2fd.json
var site_docs_audio_kit_audio_device_audio_output_device_management_audio_output_device_management_md_2fd_namespaceObject = JSON.parse('{"id":"audio-kit/audio-device/audio-output-device-management/audio-output-device-management","title":"查询和监听音频输出设备","description":"应用可通过以下两种方式管理全局音频输出设备：","source":"@site/docs/audio-kit/audio-device/audio-output-device-management/audio-output-device-management.md","sourceDirName":"audio-kit/audio-device/audio-output-device-management","slug":"/audio-kit/audio-device/audio-output-device-management/","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"查询和监听音频输出设备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-output-device-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询和监听音频输入设备","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-input-device-management/"},"next":{"title":"实现音频输入设备路由切换","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-input-device-switcher/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-device/audio-output-device-management/audio-output-device-management.md


const frontMatter = {
	title: '查询和监听音频输出设备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-output-device-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '查询和监听音频输出设备';

const assets = {

};



const toc = [{
  "value": "通过AudioRoutingManager查询和监听音频输出设备",
  "id": "通过audioroutingmanager查询和监听音频输出设备",
  "level": 2
}, {
  "value": "创建AudioRoutingManager实例",
  "id": "创建audioroutingmanager实例",
  "level": 3
}, {
  "value": "支持的音频输出设备类型",
  "id": "支持的音频输出设备类型",
  "level": 3
}, {
  "value": "获取输出设备信息",
  "id": "获取输出设备信息",
  "level": 3
}, {
  "value": "监听设备连接状态变化",
  "id": "监听设备连接状态变化",
  "level": 3
}, {
  "value": "获取最高优先级输出设备信息",
  "id": "获取最高优先级输出设备信息",
  "level": 3
}, {
  "value": "监听最高优先级输出设备变化",
  "id": "监听最高优先级输出设备变化",
  "level": 3
}, {
  "value": "通过AudioSession查询和监听音频输出设备",
  "id": "通过audiosession查询和监听音频输出设备",
  "level": 2
}, {
  "value": "创建AudioSession实例",
  "id": "创建audiosession实例",
  "level": 3
}, {
  "value": "设置本机默认音频输出设备",
  "id": "设置本机默认音频输出设备",
  "level": 3
}, {
  "value": "查询本机默认音频输出设备",
  "id": "查询本机默认音频输出设备",
  "level": 3
}, {
  "value": "监听输出设备变化",
  "id": "监听输出设备变化",
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
        id: "查询和监听音频输出设备",
        children: "查询和监听音频输出设备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可通过以下两种方式管理全局音频输出设备："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通常情况下，可以", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%9A%E8%BF%87audioroutingmanager%E6%9F%A5%E8%AF%A2%E5%92%8C%E7%9B%91%E5%90%AC%E9%9F%B3%E9%A2%91%E8%BE%93%E5%87%BA%E8%AE%BE%E5%A4%87",
          children: "通过AudioRoutingManager查询和监听音频输出设备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 20开始，AudioSessionManager提供了部分输出设备管理的接口，支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%9A%E8%BF%87audiosession%E6%9F%A5%E8%AF%A2%E5%92%8C%E7%9B%91%E5%90%AC%E9%9F%B3%E9%A2%91%E8%BE%93%E5%87%BA%E8%AE%BE%E5%A4%87",
          children: "通过AudioSession查询和监听音频输出设备"
        }), "，方便在使用AudioSession管理音频焦点的同时管理音频输出。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRoutingManagerSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过audioroutingmanager查询和监听音频输出设备",
      children: "通过AudioRoutingManager查询和监听音频输出设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供音频输出设备管理能力，包括查询设备信息和监听连接状态变化。具体API说明请参考文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audioroutingmanager/arkts-apis-audio-audioroutingmanager",
        children: "AudioRoutingManager"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建audioroutingmanager实例",
      children: "创建AudioRoutingManager实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用AudioRoutingManager管理音频设备前，需要先导入模块并创建实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\n// ...\nlet audioManager = audio.getAudioManager();  // 需要先创建AudioManager实例。\nlet audioRoutingManager = audioManager.getRoutingManager();  // 再调用AudioManager的方法创建AudioRoutingManager实例。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的音频输出设备类型",
      children: "支持的音频输出设备类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持的输出设备如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "EARPIECE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "听筒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPEAKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扬声器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIRED_HEADSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有线耳机，带麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIRED_HEADPHONES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有线耳机，无麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_SCO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙设备SCO（Synchronous Connection Oriented）连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_A2DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙设备A2DP（Advanced Audio Distribution Profile）连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_HEADSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB耳机，带麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEARLINK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "星闪设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取输出设备信息",
      children: "获取输出设备信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audioroutingmanager/arkts-apis-audio-audioroutingmanager#getdevices9",
        children: "getDevices"
      }), "方法可以获取当前所有输出设备的信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\n// ...\n  audioRoutingManager.getDevices(audio.DeviceFlag.OUTPUT_DEVICES_FLAG).then((data: audio.AudioDeviceDescriptors) => {\n    console.info('Promise returned to indicate that the device list is obtained.');\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听设备连接状态变化",
      children: "监听设备连接状态变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置监听事件以监控设备连接状态的变化，设备连接或断开时触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(780273)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听设备连接状态变化可以监听到全部的设备连接状态变化，不建议作为应用处理自动暂停的依据。应用如需处理自动暂停相关业务，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-device/audio-output-device-change#%E9%9F%B3%E9%A2%91%E6%B5%81%E8%BE%93%E5%87%BA%E8%AE%BE%E5%A4%87%E5%8F%98%E6%9B%B4%E5%8E%9F%E5%9B%A0",
        children: "音频流输出设备变更原因"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\n// ...\n  // 监听音频设备状态变化。\n  audioRoutingManager.on('deviceChange', audio.DeviceFlag.OUTPUT_DEVICES_FLAG, (deviceChanged: audio.DeviceChangeAction) => {\n    console.info(`device change type : ${deviceChanged.type}`);  // 设备连接状态变化,0为连接,1为断开连接。\n    console.info(`device descriptor size : ${deviceChanged.deviceDescriptors.length}`);\n    console.info(`device change descriptor : ${deviceChanged.deviceDescriptors[0].deviceRole}`);  // 设备角色。\n    console.info(`device change descriptor : ${deviceChanged.deviceDescriptors[0].deviceType}`);  // 设备类型。\n\n    // ...\n  });\n  // ...\n  // 取消监听音频设备状态变化。\n  audioRoutingManager.off('deviceChange');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取最高优先级输出设备信息",
      children: "获取最高优先级输出设备信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audioroutingmanager/arkts-apis-audio-audioroutingmanager#getpreferoutputdeviceforrendererinfo10",
        children: "getPreferOutputDeviceForRendererInfo"
      }), "方法, 可以获取当前最高优先级的输出设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224751)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最高优先级输出设备表示声音将在此设备输出的设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\nlet rendererInfo: audio.AudioRendererInfo = {\n  usage: audio.StreamUsage.STREAM_USAGE_MUSIC,// 音频流使用类型:音乐。根据业务场景配置,参考StreamUsage。\n  rendererFlags: 0 // 音频渲染器标志。\n};\n// ...\nasync function getPreferOutputDeviceForRendererInfo() {\n  // ...\n  audioRoutingManager.getPreferOutputDeviceForRendererInfo(rendererInfo).then((desc: audio.AudioDeviceDescriptors) => {\n    console.info(`device descriptor: ${desc}`);\n\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Result ERROR: ${err}`);\n    // ...\n  });\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听最高优先级输出设备变化",
      children: "监听最高优先级输出设备变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\n// ...\nlet rendererInfo: audio.AudioRendererInfo = {\n  usage: audio.StreamUsage.STREAM_USAGE_MUSIC,// 音频流使用类型:音乐。根据业务场景配置,参考StreamUsage。\n  rendererFlags: 0 // 音频渲染器标志。\n};\n// ...\n  // 监听最高优先级输出设备变化。\n  audioRoutingManager.on('preferOutputDeviceChangeForRendererInfo', rendererInfo, (desc: audio.AudioDeviceDescriptors) => {\n    console.info(`device change descriptor : ${desc[0].deviceRole}`);  // 设备角色。\n    console.info(`device change descriptor : ${desc[0].deviceType}`);  // 设备类型。\n\n    // ...\n  });\n  // ...\n  // 取消监听最高优先级输出设备变化。\n  audioRoutingManager.off('preferOutputDeviceChangeForRendererInfo');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过audiosession查询和监听音频输出设备",
      children: "通过AudioSession查询和监听音频输出设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用播放器的SDK播放音频流，不持有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer",
        children: "AudioRenderer"
      }), "对象，因此无法灵活控制播放设备的选择和状态监听。从API version 20开始，AudioSession不仅增加了焦点管理功能，还提供了音频输出设备管理功能，包括设置默认输出设备和监听设备变化。请参考以下文档获取更多信息："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager",
          children: "AudioSessionManager"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-session-manager-h/capi-native-audio-session-manager-h",
          children: "native_audio_session_manager.h"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建audiosession实例",
      children: "创建AudioSession实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用AudioSessionManager管理音频设备前，需要先导入模块并创建实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\nlet audioManager = audio.getAudioManager();  // 需要先创建AudioManager实例。\n\nlet audioSessionManager = audioManager.getSessionManager();  // 再调用AudioManager的方法创建AudioSessionManager实例。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置本机默认音频输出设备",
      children: "设置本机默认音频输出设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20",
        children: "setDefaultOutputDevice"
      }), "可以用于设置本机默认输出设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(42568)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于AudioSession是应用级设置，调用本接口设置默认音频输出设备会覆盖AudioRenderer的setDefaultOutputDevice接口设置的音频输出设备信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用setDefaultOutputDevice设置音频输出设备后，如需取消，可将参数设为audio.DeviceType.DEFAULT，将音频设备选择权交还给系统。否则，每次调用activateAudioSession时，应用选择的默认输出设备将生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n  // 设置默认输出设备为本机扬声器。\n  audioSessionManager.setDefaultOutputDevice(audio.DeviceType.SPEAKER).then(() => {\n    console.info('setDefaultOutputDevice Success!');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`setDefaultOutputDevice Fail: ${err}`);\n    // ...\n  });\n  // ...\n  // 设置默认输出设备为默认设备,即取消应用设置的默认设备,交由系统选择设备。\n  audioSessionManager.setDefaultOutputDevice(audio.DeviceType.DEFAULT).then(() => {\n    console.info('setDefaultOutputDevice Success!');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`setDefaultOutputDevice Fail: ${err}`);\n    // [Exclude setting_DefaultOutputDevice]\n\n    console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询本机默认音频输出设备",
      children: "查询本机默认音频输出设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#getdefaultoutputdevice20",
        children: "getDefaultOutputDevice"
      }), "查询本机默认输出设备类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(825138)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口用于查询通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20",
        children: "setDefaultOutputDevice"
      }), "接口设置的输出设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let deviceType = audioSessionManager.getDefaultOutputDevice();\nconsole.info(`getDefaultOutputDevice Success, deviceType: ${deviceType}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听输出设备变化",
      children: "监听输出设备变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过注册", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#currentoutputdevicechangedevent20",
        children: "CurrentOutputDeviceChangedEvent"
      }), "监听输出设备的连接状态变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(325002)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "currentOutputDeviceChangedCallback包含设备变更的原因及推荐的后续操作。应用应根据不同的变更原因进行处理，并按系统推荐的操作继续或停止当前播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\n// ...\n// 同一监听事件中,on方法和off方法传入callback参数一致,off方法取消对应on方法订阅的监听。\nlet currentOutputDeviceChangedCallback = (currentOutputDeviceChangedEvent: audio.CurrentOutputDeviceChangedEvent) => {\n  console.info(`reason of audioSessionStateChanged: ${currentOutputDeviceChangedEvent.changeReason} `);\n\n  // 为UI收集信息\n  let callbackMsg = `reason of audioSessionStateChanged: ${currentOutputDeviceChangedEvent.changeReason} `;\n  if (globalCallbackUpdate) {\n    globalCallbackUpdate(callbackMsg);\n  }\n\n  switch (currentOutputDeviceChangedEvent.changeReason) {\n    case audio.AudioStreamDeviceChangeReason.REASON_OLD_DEVICE_UNAVAILABLE:\n      // 响应设备不可用事件,如果应用处于播放状态,应暂停播放,更新UX界面。\n      break;\n    case audio.AudioStreamDeviceChangeReason.REASON_NEW_DEVICE_AVAILABLE:\n      // 应用根据业务情况响应设备可用事件。\n      break;\n    case audio.AudioStreamDeviceChangeReason.REASON_OVERRODE:\n      // 应用根据业务情况响应设备强选事件。\n      break;\n    case audio.AudioStreamDeviceChangeReason.REASON_SESSION_ACTIVATED:\n      // 应用根据业务情况响应audio session激活时的输出设备信息。\n      break;\n    case audio.AudioStreamDeviceChangeReason.REASON_STREAM_PRIORITY_CHANGED:\n      // 应用根据业务情况响应其它更高优先级的音频流触发的设备变更事件。\n      break;\n    case audio.AudioStreamDeviceChangeReason.REASON_UNKNOWN:\n      // 应用根据业务情况响应未知原因事件。\n      break;\n  }\n};\n// ...\n  audioSessionManager.on('currentOutputDeviceChanged', currentOutputDeviceChangedCallback);\n  // ...\n  audioSessionManager.off('currentOutputDeviceChanged', currentOutputDeviceChangedCallback);\n  // ...\n  // 取消该事件的所有监听。\n  audioSessionManager.off('currentOutputDeviceChanged');\n"
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
780273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
325002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
825138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
224751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
42568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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