"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["495151"], {
742389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_background_task_kit_continuous_task_continuous_task_md_648_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-background-task-kit-continuous-task-continuous-task-md-648.json
var site_docs_background_task_kit_continuous_task_continuous_task_md_648_namespaceObject = JSON.parse('{"id":"background-task-kit/continuous-task/continuous-task","title":"长时任务(ArkTS)","description":"概述","source":"@site/docs/background-task-kit/continuous-task/continuous-task.md","sourceDirName":"background-task-kit/continuous-task","slug":"/background-task-kit/continuous-task/","permalink":"/harmonyos-docs-site/background-task-kit/continuous-task/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"长时任务(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/continuous-task","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"短时任务(C/C++)","permalink":"/harmonyos-docs-site/background-task-kit/native-transient-task/"},"next":{"title":"延迟任务(ArkTS)","permalink":"/harmonyos-docs-site/background-task-kit/work-scheduler/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/background-task-kit/continuous-task/continuous-task.md


const frontMatter = {
	title: '长时任务(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/continuous-task',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '长时任务(ArkTS)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 3
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "Stage模型",
  "id": "stage模型",
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
        id: "长时任务arkts",
        children: "长时任务(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用退至后台后，在后台需要长时间运行用户可感知的任务，如播放音乐、导航等。为防止应用进程被挂起，导致对应功能异常，可以申请长时任务，使应用在后台长时间运行。在长时任务中，支持同时申请多种类型的任务，也可以对任务类型进行更新。应用退至后台执行业务时，系统会做一致性校验，确保应用在执行相应的长时任务。应用在申请长时任务成功后，通知栏会显示与长时任务相关联的消息，用户删除通知栏消息时，系统会自动停止长时任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(581187)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用退至后台后，在不同类型设备上生命周期变化存在差异，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/window-overview#%E4%B8%8D%E5%90%8C%E8%AE%BE%E5%A4%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%8C%E4%B8%BA",
        children: "不同设备生命周期的差异化行为"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表给出了当前长时任务支持的类型，包含数据传输、音视频播放、录制、定位导航、蓝牙相关业务、多设备互联、音视频通话和计算任务。可以参考下表中的场景举例，选择合适的长时任务类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 长时任务类型"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景举例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_TRANSFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据传输。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dataTransfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非托管形式的上传、下载，如在浏览器后台上传或下载数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_PLAYBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音视频播放。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audioPlayback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频、视频在后台播放，音视频投播。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_RECORDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audioRecording"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录音、录屏退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定位导航。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定位、导航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_INTERACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙相关业务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bluetoothInteraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过蓝牙传输文件时退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MULTI_DEVICE_CONNECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多设备互联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "multiDeviceConnection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分布式业务连接、投播。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VOIP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音视频通话。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 13开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "voip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "某些聊天类应用（具有音视频业务）音频、视频通话时退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_KEEPING"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计算任务。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 21开始，对PC/2in1设备、非PC/2in1设备但申请了ACL权限为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionkeep_background_running_system",
              children: "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM"
            }), "的应用开放。 API version 20及之前版本，仅对PC/2in1设备开放。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "taskKeeping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如杀毒软件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_AV_PLAYBACK_AND_RECORD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多媒体相关业务。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 22开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "avPlaybackAndRecord"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音视频播放，录制，音视频通话时退后台。在上述三种场景下，选择本类型或对应类型的长时任务均可。例如：音视频播放场景下，选择AUDIO_PLAYBACK或者MODE_AV_PLAYBACK_AND_RECORD任意一个即可。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_SPECIAL_SCENARIO_PROCESSING"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["特殊场景类型（仅对Phone、Tablet、PC/2in1设备开放）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 22开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "specialScenarioProcessing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在后台进行导出媒体文件，使用三方投播组件在后台进行投播。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于DATA_TRANSFER（数据传输）说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在数据传输时，若应用使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request",
          children: "@ohos.request (上传下载)"
        }), "托管给系统，即使申请DATA_TRANSFER的后台任务，应用退后台时还是会被挂起。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在数据传输时，应用需要更新进度，如果进度长时间（首次更新超过10分钟）未更新，数据传输的长时任务会被取消。更新进度的通知类型必须为实况窗，具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanagerstartbackgroundrunning12",
          children: "startBackgroundRunning()"
        }), "中的示例。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于AUDIO_PLAYBACK（音视频播放）说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音视频投播，是指将一台设备的音视频投至另一台设备播放。投播退至后台，长时任务会检测音视频播放和投屏两个业务，只要有其一正常运行，长时任务就不会终止。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当应用需要在后台播放媒体类型（流类型为STREAM_USAGE_MUSIC、STREAM_USAGE_MOVIE和STREAM_USAGE_AUDIOBOOK）和游戏类型（流类型为STREAM_USAGE_GAME）时，必须接入媒体会话服务（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/avsession-kit/avsession-overview",
          children: "AVSession"
        }), "）并申请AUDIO_PLAYBACK类型长时任务。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "除了上述播放类型，针对用户可感知的其他播放任务，如果应用需要在后台长时间运行该任务，必须申请AUDIO_PLAYBACK类型长时任务，无需接入AVSession。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用不满足上述接入规范，退至后台播放时会被系统静音并冻结，无法在后台正常播放，直到应用重新切回前台时，才会解除静音并恢复播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 20开始，申请AUDIO_PLAYBACK类型长时任务但不接入AVSession，申请长时任务成功后会在通知栏显示通知；接入AVSession后，后台任务模块不会发送通知栏通知，由AVSession发送通知。对于API version 19及之前的版本，后台任务模块不会在通知栏显示通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用申请AUDIO_PLAYBACK类型长时任务，退至后台时，如果设备没有有效音频播放，应用可能被系统冻结。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于BLUETOOTH_INTERACTION（蓝牙相关业务）说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用仅申请了蓝牙长时任务，因设备远离等原因导致蓝牙断连，系统将取消应用的蓝牙长时任务。为确保蓝牙接续使用体验，在断连后的一段时间内（具体时长受系统负载影响，最长可达十分钟），系统允许满足如下条件的应用在恢复连接时重新保活，实现在后台长时间运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["主动注册长时任务暂停监听的事件以避免蓝牙断连之后长时任务被系统直接取消，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanageroncontinuoustasksuspend20",
          children: "on('continuousTaskSuspend')"
        }), "，这样在蓝牙断连时系统不会立即取消长时任务，而是将其标记为暂停态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["为保证在蓝牙断连之后能及时恢复连接，在蓝牙连接之后通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#onconnectionstatechange",
          children: "on('connectionStateChange')"
        }), "订阅蓝牙连接状态变化的事件，断连之后通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#startscan15",
          children: "startScan"
        }), "主动发起BLE蓝牙扫描，订阅BLE设备扫描结果上报", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#onbledevicefind15",
          children: "on('BLEDeviceFind')"
        }), "事件，检测设备是否重回连接范围。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["成功扫描到设备之后，应用需要通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#connect",
          children: "connect"
        }), "主动恢复蓝牙连接，使系统检测到蓝牙恢复连接后重新激活暂停的长时任务，实现重新保活。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "申请限制"
        })
      }), "：Stage模型中，长时任务仅支持UIAbility申请；FA模型中，长时任务仅支持ServiceAbility申请。长时任务支持设备当前应用申请，也支持跨设备或跨应用申请，跨设备或跨应用仅对系统应用开放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数量限制"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 21开始，支持一个UIAbility同一时刻申请多个长时任务，最多可申请10个，具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanagerstartbackgroundrunning21",
          children: "startBackgroundRunning()"
        }), "。对于API version 20及之前版本，一个UIAbility（FA模型则为ServiceAbility）同一时刻仅支持申请一个长时任务，即在一个长时任务结束后才能继续申请。如果一个应用同时需要申请多个长时任务，需要创建多个UIAbility。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果一个应用创建了多个UIAbility，一个UIAbility申请长时任务后，整个应用下的所有进程均不会被挂起。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "运行限制"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "申请长时任务后，应用未执行相应的业务，系统会对应用进行管控，即应用退至后台会被挂起。如系统检测到应用申请了AUDIO_PLAYBACK（音视频播放），但实际未播放音乐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "申请长时任务后，应用执行的业务类型与申请的不一致，系统会对应用进行管控，即应用退至后台会被挂起。如系统检测到应用只申请了AUDIO_PLAYBACK（音视频播放），但实际上除了播放音乐（对应AUDIO_PLAYBACK类型），还在进行录制（对应AUDIO_RECORDING类型）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "申请长时任务后，应用的业务已执行完，系统会对应用进行管控，即应用退至后台会被挂起。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若运行长时任务的进程后台负载持续高于所申请类型的典型负载，系统会对应用进行管控，即应用退至后台会被挂起或终止。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(292957)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用按需求申请长时任务，当应用无需在后台运行（任务结束）时，要及时主动取消长时任务，否则应用退至后台会被系统挂起。例如用户主动点击音乐暂停播放时，应用需及时取消对应的长时任务；用户再次点击音乐播放时，需重新申请长时任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若音频在后台播放时被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency",
        children: "打断"
      }), "，系统会自行检测和停止长时任务，音频重启播放时，需要再次申请长时任务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后台播放音频的应用，在停止长时任务的同时，需要暂停或停止音频流，否则应用会被系统强制终止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 主要接口"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是长时任务开发使用的相关接口，下表均以Promise形式为例，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager",
        children: "后台任务管理"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanagerstartbackgroundrunning-1",
              children: "startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请长时任务，本接口一个UIAbility同一时刻仅支持申请一个长时任务，即在一个长时任务结束后才能继续申请。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanagerstopbackgroundrunning-1",
              children: "stopBackgroundRunning(context: Context): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消长时任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanagerstartbackgroundrunning21",
              children: "startBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请多个长时任务。本接口支持一个UIAbility同一时刻申请多个长时任务，最多可申请10个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanagerstopbackgroundrunning21",
              children: "stopBackgroundRunning(context: Context, continuousTaskId: number): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消指定Id的长时任务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以申请一个录制长时任务为例，实现如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击“申请长时任务”按钮，应用申请录制长时任务成功，通知栏显示“正在运行录制任务”通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击“取消长时任务”按钮，取消长时任务，通知栏撤销相关通知。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage模型",
      children: "Stage模型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要申请ohos.permission.KEEP_BACKGROUND_RUNNING权限，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明后台模式类型。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中abilities下的backgroundModes字段里，为需要使用长时任务的UIAbility声明相应的长时任务类型，配置文件中填写长时任务类型的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/background-task-kit/continuous-task#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
            children: "配置项"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"module\": {\n    \"abilities\": [\n        {\n           \"backgroundModes\": [\n           // 长时任务类型的配置项\n           \"audioRecording\",\n           \"bluetoothInteraction\",\n           \"audioPlayback\"\n           ]\n        }\n    ],\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "长时任务相关的模块为@ohos.resourceschedule.backgroundTaskManager和@ohos.app.ability.wantAgent，其余模块按实际需要导入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\n import { BusinessError } from '@kit.BasicServicesKit';\n import { wantAgent, WantAgent } from '@kit.AbilityKit';\n // 在元服务中，请删除WantAgent导入\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请和取消长时任务。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设备当前应用"
            })
          }), "申请和取消长时任务示例代码如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 15开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanageroncontinuoustaskcancel15",
            children: "on('continuousTaskCancel')"
          }), "实现监听长时任务取消功能。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 16开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundsubmode16",
            children: "BackgroundSubMode"
          }), "实现蓝牙车钥匙功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function callback(info: backgroundTaskManager.ContinuousTaskCancelInfo) {\n  // 长时任务id\n  console.info('OnContinuousTaskCancel callback id ' + info.id);\n  // 长时任务取消原因\n  console.info('OnContinuousTaskCancel callback reason ' + info.reason);\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'ContinuousTask';\n  // 通过getUIContext().getHostContext()方法，来获取page所在的UIAbility上下文\n  private context: Context | undefined = this.getUIContext().getHostContext();\n\n  // ...\n\n  OnContinuousTaskCancel() {\n    try {\n      backgroundTaskManager.on('continuousTaskCancel', callback);\n      console.info(`Succeeded in operationing OnContinuousTaskCancel.`);\n    } catch (error) {\n      console.error(`Operation OnContinuousTaskCancel failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n\n  OffContinuousTaskCancel() {\n    try {\n      // callback参数不传，则取消所有已注册的回调\n      backgroundTaskManager.off('continuousTaskCancel', callback);\n      console.info(`Succeeded in operationing OffContinuousTaskCancel.`);\n    } catch (error) {\n      console.error(`Operation OffContinuousTaskCancel failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n\n  // 申请长时任务.then()写法\n  startContinuousTask() {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n      // 点击通知后，将要执行的动作列表\n      // 添加需要被拉起应用的bundleName和abilityName\n      wants: [\n        {\n          bundleName: 'ohos.samples.continuoustask',\n          abilityName: 'MainAbility'\n        }\n      ],\n      // 指定点击通知栏消息后的动作是拉起ability\n      actionType: wantAgent.OperationType.START_ABILITY,\n      // 使用者自定义的一个私有值\n      requestCode: 0,\n      // 点击通知后，动作执行属性\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG],\n      // 车钥匙长时任务子类型，从API version 16开始支持。只有申请bluetoothInteraction类型的长时任务，车钥匙子类型才能生效。\n      // 确保extraInfo参数中的Key值为backgroundTaskManager.BackgroundModeType.SUB_MODE，否则子类型不生效。\n      // extraInfo: {\n        // [backgroundTaskManager.BackgroundModeType.SUB_MODE] :backgroundTaskManager.BackgroundSubMode.CAR_KEY\n      // }\n    };\n\n    try {\n      // 通过wantAgent模块下getWantAgent方法获取WantAgent对象\n      // 在元服务中，使用wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: object) => {替换下面一行代码\n      wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: WantAgent) => {\n        try {\n          let list: string[] = ['audioPlayback'];\n          // let list: string[] = ['bluetoothInteraction']; 长时任务类型包含bluetoothInteraction，CAR_KEY子类型合法\n          backgroundTaskManager.startBackgroundRunning(this.context, list, wantAgentObj).\n            then((res: backgroundTaskManager.ContinuousTaskNotification) => {\n            console.info('Operation startBackgroundRunning succeeded');\n            // 此处执行具体的长时任务逻辑，如播音等。\n            // 系统会对业务场景的真实性进行检测，如果没有实际执行对应的业务，系统可能会取消对应的长时任务并挂起应用。\n            // ...\n          }).catch((error: BusinessError) => {\n            console.error(`Failed to Operation startBackgroundRunning. code is ${error.code} message is ${error.message}`);\n          });\n        } catch (error) {\n          console.error(`Failed to Operation startBackgroundRunning. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n        }\n      });\n    } catch (error) {\n      console.error(`Failed to Operation getWantAgent. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n\n  // 取消长时任务.then()写法\n  stopContinuousTask() {\n    backgroundTaskManager.stopBackgroundRunning(this.context).then(() => {\n      console.info(`Succeeded in operationing stopBackgroundRunning.`);\n      // ...\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to operation stopBackgroundRunning. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text('Index')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n\n        Button() {\n          Text('申请长时任务').fontSize(25).fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({ top: 10 })\n        .backgroundColor('#0D9FFB')\n        .width(250)\n        .height(40)\n        .id('applyContinuousTask')\n        .onClick(() => {\n          // 通过按钮申请长时任务\n          this.startContinuousTask();\n        })\n\n        Button() {\n          Text('取消长时任务').fontSize(25).fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({ top: 10 })\n        .backgroundColor('#0D9FFB')\n        .width(250)\n        .height(40)\n        .id('resetContinuousTask')\n        .onClick(() => {\n          // 此处结束具体的长时任务的执行\n\n          // 通过按钮取消长时任务\n          this.stopContinuousTask();\n        })\n\n        Button() {\n          Text('注册长时任务取消回调').fontSize(25).fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({ top: 10 })\n        .backgroundColor('#0D9FFB')\n        .width(250)\n        .height(40)\n        .onClick(() => {\n          // 通过按钮注册长时任务取消回调\n          this.OnContinuousTaskCancel();\n        })\n\n        Button() {\n          Text('取消注册长时任务取消回调').fontSize(25).fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({ top: 10 })\n        .backgroundColor('#0D9FFB')\n        .width(250)\n        .height(40)\n        .onClick(() => {\n          // 通过按钮取消注册长时任务取消回调\n          this.OffContinuousTaskCancel();\n        })\n        // ...\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请和取消长时任务async/await写法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设备当前应用"
            })
          }), "申请和取消长时任务async/await写法示例代码如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 15开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanageroncontinuoustaskcancel15",
            children: "on('continuousTaskCancel')"
          }), "实现监听长时任务取消功能。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 16开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundsubmode16",
            children: "BackgroundSubMode"
          }), "实现蓝牙车钥匙功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct IndexAsyncAndAwait {\n  @State message: string = 'ContinuousTask';\n  // 通过getUIContext().getHostContext()方法，来获取page所在的UIAbility上下文\n  private context: Context | undefined = this.getUIContext().getHostContext();\n\n  // ...\n\n  // 申请长时任务async/await写法\n  async startContinuousTask() {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n      // 点击通知后，将要执行的动作列表\n      // 添加需要被拉起应用的bundleName和abilityName\n      wants: [\n        {\n          bundleName: 'ohos.samples.continuoustask',\n          abilityName: 'MainAbility'\n        }\n      ],\n      // 指定点击通知栏消息后的动作是拉起ability\n      actionType: wantAgent.OperationType.START_ABILITY,\n      // 使用者自定义的一个私有值\n      requestCode: 0,\n      // 点击通知后，动作执行属性\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG],\n      // 车钥匙长时任务子类型，从API version 16开始支持。只有申请bluetoothInteraction类型的长时任务，车钥匙子类型才能生效。\n      // 确保extraInfo参数中的Key值为backgroundTaskManager.BackgroundModeType.SUB_MODE，否则子类型不生效。\n      // extraInfo: {\n        // [backgroundTaskManager.BackgroundModeType.SUB_MODE] :backgroundTaskManager.BackgroundSubMode.CAR_KEY\n      // }\n    };\n\n    try {\n      // 通过wantAgent模块下getWantAgent方法获取WantAgent对象\n      // 在元服务中，使用const wantAgentObj: object = await wantAgent.getWantAgent(wantAgentInfo);替换下面一行代码\n      const wantAgentObj: WantAgent = await wantAgent.getWantAgent(wantAgentInfo);\n      try {\n        let list: string[] = ['audioPlayback'];\n        // let list: string[] = ['bluetoothInteraction']; 长时任务类型包含bluetoothInteraction，CAR_KEY子类型合法\n        // 在元服务中，let list: Array<string> = [\"audioPlayback\"];\n        const res: backgroundTaskManager.ContinuousTaskNotification =\n          await backgroundTaskManager.startBackgroundRunning(this.context as Context, list, wantAgentObj);\n        console.info(`Operation startBackgroundRunning succeeded, notificationId: ${res.notificationId}`);\n        // 此处执行具体的长时任务逻辑，如播音等。\n        // ...\n      } catch (error) {\n        console.error(`Failed to Operation startBackgroundRunning. Code is ${(error as BusinessError).code}, message is ${(error as BusinessError).message}`);\n      }\n    } catch (error) {\n      console.error(`Failed to Operation getWantAgent. Code is ${(error as BusinessError).code}, message is ${(error as BusinessError).message}`);\n    }\n  }\n\n  // 取消长时任务async/await写法\n  async stopContinuousTask() {\n    try {\n      await backgroundTaskManager.stopBackgroundRunning(this.context);\n      console.info(`Succeeded in operationing stopBackgroundRunning.`);\n      // ...\n    } catch (error) {\n      console.error(`Failed to operation stopBackgroundRunning. Code is ${(error as BusinessError).code}, message is ${(error as BusinessError).message}`)\n    }\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text('Index')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n\n        Button() {\n          Text('申请长时任务').fontSize(25).fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({ top: 10 })\n        .backgroundColor('#0D9FFB')\n        .width(250)\n        .height(40)\n        .id('applyContinuousTask')\n        .onClick(() => {\n          // 通过按钮申请长时任务\n          this.startContinuousTask();\n        })\n\n        Button() {\n          Text('取消长时任务').fontSize(25).fontWeight(FontWeight.Bold)\n        }\n        .type(ButtonType.Capsule)\n        .margin({ top: 10 })\n        .backgroundColor('#0D9FFB')\n        .width(250)\n        .height(40)\n        .id('resetContinuousTask')\n        .onClick(() => {\n          // 此处结束具体的长时任务的执行\n\n          // 通过按钮取消长时任务\n          this.stopContinuousTask();\n        })\n        // ...\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
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
581187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
292957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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