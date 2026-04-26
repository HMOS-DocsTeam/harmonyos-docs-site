"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["161325"], {
924167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_distributed_avsession_distributed_playback_distributed_playback_guide_distributed_playback_guide_md_4c3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-distributed-avsession-distributed-playback-distributed-playback-guide-distributed-playback-guide-md-4c3.json
var site_docs_avsession_kit_distributed_avsession_distributed_playback_distributed_playback_guide_distributed_playback_guide_md_4c3_namespaceObject = JSON.parse('{"id":"avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide/distributed-playback-guide","title":"投播组件开发指导","description":"系统提供了音视频发声设备统一投播组件AVCastPicker，作为播控中心系统级设备切换、投播能力选择入口。应用通过接入统一投播组件，可以实现在应用内及系统播控中心，将音视频资源通过Cast+协议/DLNA协议投播到远端设备。","source":"@site/docs/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide/distributed-playback-guide.md","sourceDirName":"avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide","slug":"/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide/","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"投播组件开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/distributed-playback-guide","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"播控特性简介","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview/"},"next":{"title":"扩展屏投播开发指导","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide/distributed-playback-guide.md


const frontMatter = {
	title: '投播组件开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/distributed-playback-guide',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '投播组件开发指导';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "镜像投屏自动切换资源投播",
  "id": "镜像投屏自动切换资源投播",
  "level": 2
}, {
  "value": "附录",
  "id": "附录",
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
        id: "投播组件开发指导",
        children: "投播组件开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供了音视频发声设备统一投播组件AVCastPicker，作为播控中心系统级设备切换、投播能力选择入口。应用通过接入统一投播组件，可以实现在应用内及系统播控中心，将音视频资源通过Cast+协议/DLNA协议投播到远端设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过本开发指导，完成一次音视频跨设备投播。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需同时满足以下条件，才能使用该功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设备限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本端设备：HarmonyOS 5.0.0及以上版本的手机、平板设备"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "远端设备：HarmonyOS 5.0.0及以上版本的2in1设备、HarmonyOS 3.1及以上版本的华为智慧屏、支持标准DLNA协议的设备"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双端设备打开蓝牙和WIFI，并可访问网络。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发具体功能前，请先查阅参考文档，获取详细的接口说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avcastpicker/ohos-multimedia-avcastpicker",
            children: "AVCastPicker"
          }), "：投播组件，提供设备发现认证连接的统一入口。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avcastcontroller/arkts-apis-avsession-avcastcontroller",
            children: "AVCastController"
          }), "：投播控制器，用于投播场景下，完成播放控制、远端播放状态监听等操作。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(627772)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AVCastController由系统获取并返回，在设备连接成功后获取，在设备断开后不能继续使用，否则会抛出异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持在线DRM视频资源投播能力，需注册DRM许可证请求回调函数，获取许可证后，调用处理许可证响应函数。"
        }), "\n"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVSession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置媒体信息，包括ID、标题、作者以及DRM类型等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVSession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册设备变化的回调，同时包含了设备的连接状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVSession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getAVCastController(callback: AsyncCallback<AVCastController>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取远端投播时的控制接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCastController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sendControlCommand(command: AVCastControlCommand, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "投播会话的控制接口，用于进行投播中的各种播控指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCastController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prepare(item: AVQueueItem, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准备播放，进行资源加载和缓冲，不会触发真正的播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCastController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start(item: AVQueueItem, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始播放媒体资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCastController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "processMediaKeyResponse(assetId: string, response: Uint8Array): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供DRM资源所需的秘钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCastController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'keyRequest', callback: KeyRequestCallback): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册DRM秘钥请求的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCastController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'playbackStateChange', filter: Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'all', callback: (state: AVPlaybackState) => void): void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCastController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'mediaItemChange', callback: Callback<AVQueueItem>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册当前播放内容更新的回调，返回当前播放的内容的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建播放器，并创建AVSession。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过AVSessionManager创建并激活媒体会话。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import  { avSession }  from '@kit.AVSessionKit'; // 导入AVSession模块\n\n// 声明全局的session对象，此写法是加在class类外的声明，如果需要在class类内申明全局变量，需要去掉 export let\nexport let session: avSession.AVSession;\n// 创建session\nasync createSession(context: Context) {\n  // 创建的AVSession在基础播控与投播场景可以共用\n  session = await avSession.createAVSession(context, 'video_test', 'video'); // 'audio'代表音频应用，'video'代表视频应用\n  await session.activate();\n  // 请按照如下参数设置，告知系统应用当前支持投播，才能成功投播。\n  session.setExtras({\n    requireAbilityList: ['url-cast'],\n  });\n  console.info(`Session created. sessionId: ${session.sessionId}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置媒体资源信息，注册基础播控回调，接入系统播控中心的基础播控。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(7160)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["接入投播组件前需要先适配媒体播控中心的基础播控业务，具体需要接入的内容请按照应用类型参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/avsession-kit/playback-control-access-selfcheck/playback-control-access-checklist",
                children: "应用接入自检表"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用可以通过filter字段设置需要发现和过滤的协议类型，来匹配应用期望的投播设备。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "注意，投播后，应用播放器切换上下集时，若下一集不支持投播，可以通过filter参数控制系统播控中心是否显示可投播设备列表，filter参数设置为0，播控会识别当前媒体内容为不支持投播，隐藏可投播设备显示。避免用户从播控中心投播，应用资源不可用。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "需要在AVCastPicker中仅显示支持DRM资源投播的设备时，应在AVMetadata设置明确的drmSchemes。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 与session声明不在同一文件时，需要import\nimport  { avSession }  from '@kit.AVSessionKit'; // 导入AVSession模块\nexport let session: avSession.AVSession;\n@Entry\n@Component\nstruct Index{\n  public setAVMetadata(playInfo: avSession.AVMediaDescription): Promise<void> {\n    const metadata: avSession.AVMetadata = {\n        assetId: playInfo.assetId, // 需要配置实际id\n        title: playInfo.title, // 播放媒体资源的标题\n        subtitle: playInfo.subtitle,// 播放媒体资源的副标题\n        // 发现Cast+ Stream 和 DLNA协议设备，TYPE_CAST_PLUS_STREAM为默认必选。\n        filter: avSession.ProtocolType.TYPE_CAST_PLUS_STREAM|avSession.ProtocolType.TYPE_DLNA,\n        mediaImage: playInfo.mediaImage,\n        artist: playInfo.artist,\n        // 如果是DRM资源，配置支持的DRM uuid 用于设备过滤。非DRM资源不配置。\n        drmSchemes: ['3d5e6d35-9b9a-41e8-b843-dd3c6e72c42c']\n      };\n    return session.setAVMetadata(metadata);\n  }\n  public setSessionListener() {\n   // 请按照自检接入表按需注册并实现基础播控的控制指令，以下为举例\n    session?.on('play', () => {\n    });\n    session?.on('pause', () => {\n    });\n  }\n  build(){\n    Column()\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要投播的播放界面创建投播组件AVCastPicker。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(838604)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若创建AVCastPicker后应用界面未显示，或点开Picker显示空白，请排查是否按步骤1、2接入了系统播控中心的基础播控，且正确设置了AVMetadata与Extras参数。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["系统AVCastPicker提供CustomerPicker参数，应用可以通过该参数自定义Picker按钮的显示，具体开发请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avsession-kit/distributed-avsession/using-switch-call-devices#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F%E5%AE%9E%E7%8E%B0",
              children: "自定义样式"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AVCastPicker, AVCastPickerState } from '@kit.AVSessionKit';\n\n// 应用可以通过onStateChange接口监听组件拉起的面板的显示/消失状态，当面板显示时建议不要销毁AVCastPicker组件；当面板消失时，再根据业务需要隐藏AVCastPicker。\nprivate onStateChange(state: AVCastPickerState) {\n  if (state == AVCastPickerState.STATE_APPEARING) {\n    console.info('The picker starts showing.');\n  } else if (state == AVCastPickerState.STATE_DISAPPEARING) {\n    console.info('The picker finishes presenting.');\n  }\n}\n\n// 创建组件，并设置大小\nbuild() {\n  Row() {\n    Column() {\n      AVCastPicker({\n        normalColor: Color.Red,\n        onStateChange: this.onStateChange\n      })\n        .width('40vp')\n        .height('40vp')\n        .border({ width: 1, color: Color.Red })\n    }.height('50%')\n  }.width('50%')\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册AVSession投播控制回调。用于感知投播设备连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(272671)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面代码展示设备连接成功后的相应的处理"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "连接成功后通过session获取AVCastController，用于后期的投播控制；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用监听on('outputDeviceChange')回调，在收到设备切换到对端的信息时，就可以刷新应用内的播放界面为“投播页面或遥控器页面”，并暂停本机播放。在收到切换设备到本机的信息时，可以刷新应用内的播放界面为“本地播放页面”，并开始在本机播放。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["可以在on('outputDeviceChange')回调中使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#avcastcategory10",
              children: "castCategory"
            }), "来判断是否连接到远端设备。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["on('outputDeviceChange')回调具体取值来自", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#protocoltype11",
              children: "ProtocolType"
            }), "，可以是protocoltype中的某个协议或多个协议的组合，设备仅支持一种协议，返回对应枚举值；设备支持多种协议，返回对应枚举值之和。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如需要推送DRM在线资源，根据远端设备支持的DRM能力，从服务端获取对应的资源。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "推送DRM资源后，应注册监听许可证请求事件，从服务器端获取许可证后，通过处理许可证响应函数提供给远端。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { avSession } from '@kit.AVSessionKit';\nimport { session } from './xxx'; // session声明的文件\n\n  castController: avSession.AVCastController | undefined = undefined;\n  getAVCastController() {\n    // 如支持投播，可使用下面接口监听设备连接状态的变化\n    session.on('outputDeviceChange', async (connectState: avSession.ConnectionState,\n                                                 device: avSession.OutputDeviceInfo) => {\n      // 可以通过当前设备及设备连接状态来更新应用内播放界面的显示\n      let currentDevice: avSession.DeviceInfo = device?.devices?.[0];\n      if (currentDevice.castCategory === avSession.AVCastCategory.CATEGORY_REMOTE && connectState === avSession.ConnectionState.STATE_CONNECTED) { // 设备连接成功\n        console.info(`Device connected: ${device}`);\n        this.castController = await session.getAVCastController();\n        console.info('Succeeded in getting a cast controller');\n        // 查询当前播放的状态\n        let avPlaybackState = await this.castController?.getAVPlaybackState();\n        console.info(`Succeeded in AVPlaybackState resource obtained: ${avPlaybackState}`);\n        // 监听播放状态的变化\n        this.castController?.on('playbackStateChange', 'all', (state: avSession.AVPlaybackState) => {\n          console.info(`Succeeded in Playback state changed: ${state}`);\n        });\n        // 根据currentDevice.supportedProtocols可以判断设备支持的协议类型，设备支持单个或多个协议类型\n        if (currentDevice.supportedProtocols) {\n          if ((currentDevice.supportedProtocols &\n            avSession.ProtocolType.TYPE_CAST_PLUS_STREAM) === avSession.ProtocolType.TYPE_CAST_PLUS_STREAM) {\n            // 此设备支持cast+投播协议\n          } else if ((currentDevice.supportedProtocols & avSession.ProtocolType.TYPE_DLNA) === avSession.ProtocolType.TYPE_DLNA) {\n            // 此设备支持DLNA投播协议\n          }\n        }\n        // 此设备支持chinaDRM，监听许可证请求事件，也可在发起DRM资源投播前监听。\n        if (currentDevice.supportedDrmCapabilities?.includes('3d5e6d35-9b9a-41e8-b843-dd3c6e72c42c')) {\n          this.castController?.on('keyRequest', this.keyRequestCallback);\n        }\n      }\n    })\n  }\n\n  // 处理DRM许可证请求事件\n  private keyRequestCallback: avSession.KeyRequestCallback = async (assetId: string, requestData: Uint8Array) => {\n    // 根据assetId获取对应的DRM url\n    let drmUrl: string = 'http://license.xxx.xxx.com:8080/drmproxy/getLicense';\n    // 从服务器获取许可证，具体实现可参考附录。\n    let licenseResponseData = await this.getLicense(drmUrl, requestData);\n    try {\n      // 处理DRM许可证响应\n      await this.castController?.processMediaKeyResponse(assetId, licenseResponseData);\n    } catch (error) {\n      console.error(`Failed to process the response corresponding to the media key. Error: ${error}`);\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用AVCastController进行资源播放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(810777)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面代码示例中的url仅作示意使用，开发者需根据实际情况，确认资源有效性并设置："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果使用本地资源播放，必须确认资源文件可用，并使用应用沙箱路径访问对应资源，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
              children: "获取应用文件路径"
            }), "。应用沙箱的介绍及如何向应用沙箱推送文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/app-file/app-sandbox-directory",
              children: "文件管理"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果通过FilePicker使用用户文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/user-files/select-save-user-file/select-user-file",
              children: "选择用户文件"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果使用网络播放路径，需", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "申请相关权限"
            }), "：ohos.permission.INTERNET。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果是DRM资源，需配置drmSchemes字段。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "playItem() {\n    // 设置播放参数，开始播放\n    let playItem : avSession.AVQueueItem = {\n      itemId: 0,\n      description: {\n        assetId: 'VIDEO-1',\n        title: 'ExampleTitle',\n        artist: 'ExampleArtist',\n        // 网络资源投播，设置mediaUri; 本地资源投播，将本地文件打开后，相关的文件描述符设置到fdSrc\n        mediaUri: 'https://xxx.xxx.com/example.mp4',\n        // 该字段大写，音频'AUDIO'，视频'VIDEO'\n        mediaType: 'VIDEO',\n        mediaSize: 1000,\n        // startPosition为投播当前进度，设置该字段可将本机播放进度同步到远端\n        startPosition: 0,\n        // 投播资源播放时长，设置该字段可将本机播放时长同步到远端显示\n        duration: 100000,\n        albumCoverUri: 'https://www.example.jpeg',\n        albumTitle: '《ExampleAlbum》',\n        appName: 'ExampleApp',\n        // DRM资源，需要配置支持的DRM类型, 以chinaDRM为例。\n        drmScheme: '3d5e6d35-9b9a-41e8-b843-dd3c6e72c42c',\n      }\n    };\n    // 准备播放，这个不会触发真正的播放，会进行加载和缓冲\n    this.castController?.prepare(playItem, () => {\n      console.info('Preparation done');\n      // 启动播放，真正触发对端播放。请在Prepare成功后再调用start。\n      this.castController?.start(playItem, () => {\n        console.info('Playback started');\n      });\n    });\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用AVCastController，监听控制命令和进行播放控制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(929715)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用可以通过如下监听与控制指令，实现从应用内控制投播设备，及响应来自对端设备或者系统播控中心的控制。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统播控中心会按照应用的注册监听，来动态置灰和点亮控制卡片的按钮。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当前系统暂不支持清晰度调节，应用如需向用户提供清晰度调节入口，需要在用户选定不同清晰度时按照新的清晰度重新下发资源。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "playControl() {\n  // 记录从avsession获取的远端控制器this.castController\n  // 应用向对端设备下发播放命令\n  let avCommand: avSession.AVCastControlCommand = {command:'play'};\n  this.castController?.sendControlCommand(avCommand);\n\n  // 应用向对端设备下发暂停命令\n  avCommand = {command:'pause'};\n  this.castController?.sendControlCommand(avCommand);\n\n  // 应用调节对端设备音量\n  avCommand = {\n    command: 'setVolume',\n    parameter: 1\n  };\n  this.castController?.sendControlCommand(avCommand);\n    \n  // 应用调节对端设备进度\n  avCommand = {\n    command: 'seek',\n    parameter: 1\n  };\n  this.castController?.sendControlCommand(avCommand);\n // 更多控制指令请参考AVCastControlCommand\n}\ncontrolListener() {\n  // 应用监听对端或播控中心上下一首/上下一集切换\n  this.castController?.on('playPrevious', () => {\n    console.info('PlayPrevious done');\n  });\n  this.castController?.on('playNext', () => {\n    console.info('PlayNext done');\n  });\n\n  // 应用监听对端或播控中心播放状态、实时进度和音量变化事件\n  this.castController?.on('playbackStateChange', (playbackState: avSession.AVPlaybackState)=>{\n    if (playbackState?.state) {\n      // 播放状态变化\n    }\n    if (playbackState?.position) {\n      // 进度变化，可以根据position来获取对端播放的进度\n    }\n    if (playbackState?.volume) {\n      // 音量变化\n    }\n  });\n\n  // 应用监听对端投播内容播放完毕事件。应用监听到此回调，可以按照业务在以下三种选其一实现，否则无内容播放，对端出现黑屏。\n  // 1. 有下一集时，自动切换下一集投播，此时需要调用Prepare和start重新设置新的url，参考步骤5\n  // 2. 无下一集时，建议循环播放同一集，重新调用prepare和start来设置当前新的url，参考步骤5\n  // 3. 业务不再支持投播，可以主动断开投播，参考步骤9。\n  this.castController?.on('endOfStream', () => {\n    // 按业务处理\n  });\n    \n  // 应用监听对端或播控中心的进度调节完成事件，包括快进、快退、进度条拖拽完毕\n  this.castController?.on('seekDone', (position: number) => {\n    // seekDone表示用户在对端或是播控内进度调节完毕，可以在收到该回调后，根据'playbackStateChange'回调的position刷新绘制应用内进度条\n    // 应用主动调用seek调节对端进度后，也请等待seekDone回调再根据'playbackStateChange'中的position来刷新，更精准\n   });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请投播长时任务，避免应用在投播时进入后台时被系统冻结，导致无法持续投播。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(433265)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在申请长时任务时，需要在module.json5文件中："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "配置长时任务权限ohos.permission.KEEP_BACKGROUND_RUNNING。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "为需要使用长时任务的UIAbility声明相应的后台模式类型：AUDIO_PLAYBACK。选其一申请即可，都可保证音频在应用后台、锁屏、熄屏投播时不会被中断。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { wantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet context: Context = getContext(this);\n\nfunction startContinuousTask() {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n        // 点击通知后，将要执行的动作列表\n        wants: [\n          {\n            bundleName: \"com.example.myapplication\",\n            abilityName: \"EntryAbility\",\n          }\n        ],\n        // 点击通知后，动作类型\n        operationType: wantAgent.OperationType.START_ABILITY,\n        // 使用者自定义的一个私有值\n        requestCode: 0,\n        // 点击通知后，动作执行属性\n        wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n\n    // 通过wantAgent模块的getWantAgent方法获取WantAgent对象\n    try {\n        wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj) => {\n            try {\n                backgroundTaskManager.startBackgroundRunning(context,\n                    backgroundTaskManager.BackgroundMode.AUDIO_PLAYBACK, wantAgentObj).then(() => {\n                    console.info('Succeeded in requesting to start running in background');\n                }).catch((error: BusinessError) => {\n                    console.error(`Failed to request to start running in background. Code: ${error.code}, message: ${error.message}`);\n                });\n            } catch (error) {\n                console.error(`Failed to request to start running in background. Error: ${error}`);\n            }\n        });\n    } catch (error) {\n        console.error(`Failed to get WantAgent. Error: ${error}`);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "投播后资源切换。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用已开始投播，再次进入播放详情页时可以通过getOutputDevice()接口获取当前播放设备，来判断此时是否正在投播中。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import  { avSession }  from '@kit.AVSessionKit'; // 导入AVSession模块\n// 与session声明不在同一文件时，需要import\nimport { session } from './xxx'; // session声明的文件\nthis.session?.getOutputDevice().then((outputDeviceInfo: avSession.OutputDeviceInfo) => {\n  // 当前设备的castCategory为Remote，则表示正在投播中\n  let isCasting = outputDeviceInfo.devices[0].castCategory === avSession.AVCastCategory.CATEGORY_REMOTE;\n}).catch((err: BusinessError) => {\n  console.error(`GetOutputDevice BusinessError: code: ${err.code}, message: ${err.message}`);\n});\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用已开始投播，从播放详情页退出到应用首页时，建议不要断开投播即调用stopCasting，可以给用户留一个回到“投播的界面”的入口。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "投播时用户在应用侧退出详情页，如果点击了其他视频播放，应用识别新的资源是否可以投播，可以根据以下两种情况处理："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "情况一：如新的视频资源可以投播，有以下两种方式可处理："
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "方式一：直接调用prepare和start更换投播资源，参考步骤5。对端播放新的视频资源，本地显示切换为“正在投播的界面”，不需要断开投播重新投播。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "方式二：不主动切换投播资源，正常绘制应用投播业务的按钮但不要创建AVCastPicker，用户点击后直接调用prepare和start更换投播资源，本地显示切换为“正在投播的界面”，不需要断开投播重新投播。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "情况二：如此时不可以投播，当前视频就在本地播放，隐藏投播业务的按钮显示即可。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["处理音频焦点。请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-session/audio-playback-concurrency",
            children: "多音频并发处理"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用进入投播后，当前应用需要取消注册焦点处理事件，以免被其他应用的焦点申请而影响。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束投播。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当远端设备断开的时候，应用会收到事件，系统会自动断开连接。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用也可以使用断开投播的接口，主动进行投播连接的断开。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async release() {\n  // 一般来说，应用退出时，而不希望继续投播，可以主动结束\n  await session.stopCasting();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议应用监听并保存AVCastController.on('playbackStateChange')回调中的position，当投播断开时，可以刷新为“本地播放详情页”在本端继续播放，并根据这个position来调整本地播放的进度。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "镜像投屏自动切换资源投播",
      children: "镜像投屏自动切换资源投播"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用场景：用户通过“无线投屏”功能实现手机等设备和大屏等的镜像投屏，然后打开视频应用进入视频播放，此时会自动切换为资源投播。要达到上述目标体验，还需要做一些额外的适配工作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用进入播放页后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avsession/arkts-apis-avsession-avsession#getoutputdevicesync10",
            children: "getOutputDevicesync"
          }), "接口来判断当前是否存在投屏的设备，避免和其他应用冲突。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "开发步骤"
          }), "第四步进行投播设备判断，如果存在投播设备，表示此时可以进行资源投播；否则表示没有可以投播的设备,或者系统当前虽然在镜像投屏，此时有别的APP在投播，此时应用应在本地播放。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用正常投播后，仍然监听设备状态断开等场景，流程同", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "投播组件开发步骤"
          }), "中的内容描述。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "附录",
      children: "附录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从服务器获取许可证"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要根据实际的资源和服务地址获取DRM许可证，以下示例代码仅作为参考。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\n\n // 获取DRM许可证, 仅做参考，需要结合实际资源和服务地址进行获取。\n  async getLicense(drmUrl: string, requestData: Uint8Array): Promise<Uint8Array | undefined> {\n    let licenseRequestStr: string = this.byteToString(requestData);\n    let licenseResponseStr: string = 'defaultStr';\n    let httpRequest = http.createHttp();\n    try {\n      let response: http.HttpResponse = await httpRequest.request(drmUrl, {\n        method: http.RequestMethod.POST,\n        header: {\n          'Content-Type': 'application/json',\n          'Accept-Encoding': 'gzip, deflate',\n        },\n        extraData: licenseRequestStr,\n        expectDataType: http.HttpDataType.STRING,\n      });\n      if (response?.responseCode == http.ResponseCode.OK) {\n        if (typeof response.result == 'string') {\n          licenseResponseStr = response.result;\n        }\n      }\n      httpRequest.destroy();\n    } catch (error) {\n      console.error(`Failed to request Http. Error: ${error}`);\n      return undefined;\n    }\n    return this.stringToByte(licenseResponseStr);\n  }\n\n  /**\n   * Uint8Array to string\n   * @param arr Uint8Array\n   * @returns string\n   */\n  byteToString(arr: Uint8Array): string {\n    let str: string = ''\n    let _arr: Uint8Array = arr\n\n    for (let i = 0; i < _arr.length; i++) {\n      // 将数值转为二进制字符串\n      let binaryStr: string = _arr[i].toString(2)\n      let matchArray = binaryStr.match(new RegExp('/^1+?(?=0)/'))\n      if (matchArray && binaryStr.length == 8) {\n        let bytesLength: number = matchArray[0].length\n        let store: string = _arr[i].toString(2).slice(7 - bytesLength)\n\n        for (let j = 1; j < bytesLength; j++) {\n          store += _arr[j + i].toString(2).slice(2)\n        }\n        str += String.fromCharCode(Number.parseInt(store, 2))\n        i += bytesLength - 1\n      } else {\n        str += String.fromCharCode(_arr[i])\n      }\n    }\n    return str\n  }\n\n  /**\n   * string 转 Uint8Array\n   * @param str string\n   * @returns Uint8Array\n   */\n  stringToByte(str: string): Uint8Array {\n    let bytes: number[] = new Array()\n    let unicode: number\n\n    for (let i = 0; i < str.length; i++) {\n      unicode = str.charCodeAt(i)\n      if (unicode >= 0x010000 && unicode <= 0x10FFFF) {\n        bytes.push(((unicode >> 18) & 0x07) | 0xf0)\n        bytes.push(((unicode >> 12) & 0x3F) | 0x80)\n        bytes.push(((unicode >> 6) & 0x3F) | 0x80)\n        bytes.push((unicode & 0x3F) | 0x80)\n      } else if (unicode >= 0x000800 && unicode <= 0x00FFF) {\n        bytes.push(((unicode >> 12) & 0x07) | 0xf0)\n        bytes.push(((unicode >> 6) & 0x3F) | 0x80)\n        bytes.push((unicode & 0x3F) | 0x80)\n      } else if (unicode >= 0x000800 && unicode <= 0x0007FF) {\n        bytes.push(((unicode >> 6) & 0x3F) | 0x80)\n        bytes.push((unicode & 0x3F) | 0x80)\n      } else {\n        bytes.push(unicode & 0xFF)\n      }\n    }\n    return new Uint8Array(bytes);\n  }\n"
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
810777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
272671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
929715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
433265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
7160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
627772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
838604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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