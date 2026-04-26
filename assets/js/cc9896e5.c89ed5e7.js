"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["522574"], {
502286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_local_avsession_using_avsession_developer_using_avsession_developer_md_cc9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-local-avsession-using-avsession-developer-using-avsession-developer-md-cc9.json
var site_docs_avsession_kit_local_avsession_using_avsession_developer_using_avsession_developer_md_cc9_namespaceObject = JSON.parse('{"id":"avsession-kit/local-avsession/using-avsession-developer/using-avsession-developer","title":"媒体会话提供方","description":"音视频应用在实现音视频功能的同时，需要作为媒体会话提供方接入媒体会话，在媒体会话控制方（例如播控中心）中展示媒体相关信息，并响应媒体会话控制方下发的播控命令。","source":"@site/docs/avsession-kit/local-avsession/using-avsession-developer/using-avsession-developer.md","sourceDirName":"avsession-kit/local-avsession/using-avsession-developer","slug":"/avsession-kit/local-avsession/using-avsession-developer/","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/using-avsession-developer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"媒体会话提供方","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avsession-developer","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"本地媒体会话概述","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/local-avsession-overview/"},"next":{"title":"媒体会话提供方(C/C++)","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/using-ohavsession-developer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/local-avsession/using-avsession-developer/using-avsession-developer.md


const frontMatter = {
	title: '媒体会话提供方',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avsession-developer',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体会话提供方';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "媒体会话提供方",
        children: "媒体会话提供方"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音视频应用在实现音视频功能的同时，需要作为媒体会话提供方接入媒体会话，在媒体会话控制方（例如播控中心）中展示媒体相关信息，并响应媒体会话控制方下发的播控命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体会话元数据（AVMetadata）： 用于描述媒体数据相关属性，包含标识当前媒体的ID（assetId），上一首媒体的ID（previousAssetId），下一首媒体的ID（nextAssetId），标题（title），专辑作者（author），专辑名称（album），词作者（writer），媒体时长（duration）等属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体播放状态（AVPlaybackState）：用于描述媒体播放状态的相关属性，包含当前媒体的播放状态（state）、播放位置（position）、播放倍速（speed）、缓冲时间（bufferedTime）、循环模式（loopMode）、是否收藏（isFavorite）、正在播放的媒体Id（activeItemId）、自定义媒体数据（extras）等属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体会话提供方使用的关键接口如下表所示。接口返回值有两种返回形式：callback和promise，下表中为callback形式接口，promise和callback只是返回值方式不一样，功能相同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多API说明请参考文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession/arkts-apis-avsession",
        children: "模块描述"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createAVSession(context: Context, tag: string, type: AVSessionType, callback: AsyncCallback<AVSession>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建媒体会话。  一个UIAbility只能存在一个媒体会话，重复创建会失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体会话元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体会话播放状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置启动UIAbility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getController(callback: AsyncCallback<AVSessionController>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前会话自身控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取播放设备相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activate(callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活媒体会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deactivate(callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁用当前会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destroy(callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁媒体会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void 10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体播放列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAVQueueTitle(title: string, callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置媒体播放列表名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置会话内自定义事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置键值对形式的自定义媒体数据包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getOutputDeviceSync(): OutputDeviceInfo10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用同步方法获取当前输出设备信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音视频应用作为媒体会话提供方接入媒体会话的基本步骤如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过AVSessionManager的方法创建并激活媒体会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(633231)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例代码仅展示创建AVSession对象的接口调用，应用在真正使用时，需要确保AVSession对象实例在应用后台播放业务活动期间一直存在，避免被系统回收、释放，导致后台发声时被系统管控。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          try {\n            // 开始创建并激活媒体会话。\n            // 创建session。\n            let context = this.getUIContext().getHostContext() as Context;\n            let type: AVSessionManager.AVSessionType = 'audio';\n            let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n            await session.activate();\n            console.info(`session create done : sessionId : ${session.sessionId}`);\n            // ...\n          } catch (err) {\n            if (err) {\n              console.error(`AVSession create Error: Code: ${err.code}, message: ${err.message}`);\n              // ...\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跟随媒体信息的变化，及时设置媒体会话信息。需要设置的媒体会话信息主要包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "媒体会话元数据AVMetadata。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "媒体播放状态AVPlaybackState。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频应用设置的媒体会话信息，会被媒体会话控制方通过AVSessionController相关方法获取后进行显示或处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', 'audio');\n          // 播放器逻辑··· 引发媒体信息与播放状态的变更。\n          // 设置必要的媒体信息。\n          let metadata: AVSessionManager.AVMetadata = {\n            assetId: '0', // 由应用指定，用于标识应用媒体库里的媒体。\n            title: 'TITLE',\n            mediaImage: 'IMAGE',\n            artist: 'ARTIST'\n          };\n          session.setAVMetadata(metadata).then(() => {\n            console.info(`SetAVMetadata successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          });\n          // 简单设置一个播放状态 - 暂停 未收藏。\n          let playbackState: AVSessionManager.AVPlaybackState = {\n            state: AVSessionManager.PlaybackState.PLAYBACK_STATE_PAUSE,\n            isFavorite: false\n          };\n          session.setAVPlaybackState(playbackState, (err) => {\n            if (err) {\n              console.error(`Failed to set AVPlaybackState. Code: ${err.code}, message: ${err.message}`);\n              // ...\n            } else {\n              console.info(`SetAVPlaybackState successfully`);\n              // ...\n            }\n          });\n          // 设置一个播放列表。\n          let queueItemDescription1: AVSessionManager.AVMediaDescription = {\n            assetId: '001',\n            title: 'music_name',\n            subtitle: 'music_sub_name',\n            description: 'music_description',\n            mediaImage: 'PIXELMAP_OBJECT',\n            extras: { 'extras': 'any' }\n          };\n          let queueItem1: AVSessionManager.AVQueueItem = {\n            itemId: 1,\n            description: queueItemDescription1\n          };\n          let queueItemDescription2: AVSessionManager.AVMediaDescription = {\n            assetId: '002',\n            title: 'music_name',\n            subtitle: 'music_sub_name',\n            description: 'music_description',\n            mediaImage: 'PIXELMAP_OBJECT',\n            extras: { 'extras': 'any' }\n          };\n          let queueItem2: AVSessionManager.AVQueueItem = {\n            itemId: 2,\n            description: queueItemDescription2\n          };\n          let queueItemsArray = [queueItem1, queueItem2];\n          session.setAVQueueItems(queueItemsArray).then(() => {\n            console.info(`SetAVQueueItems successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVQueueItem, error code: ${err.code}, error message: ${err.message}`);\n            // ...\n          });\n          // 设置媒体播放列表名称。\n          let queueTitle = 'QUEUE_TITLE';\n          session.setAVQueueTitle(queueTitle).then(() => {\n            console.info(`SetAVQueueTitle successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVQueueTitle, error code: ${err.code}, error message: ${err.message}`);\n            // ...\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置用于被媒体会话控制方拉起的UIAbility。当用户操作媒体会话控制方的界面时，例如点击播控中心的卡片，可以拉起此处配置的UIAbility。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置UIAbility时通过WantAgent接口实现，更多关于WantAgent的信息请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
            children: "WantAgent"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { wantAgent } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          let type: AVSessionManager.AVSessionType = 'audio';\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          let wantAgentInfo: wantAgent.WantAgentInfo = {\n            wants: [\n              {\n                bundleName: 'com.example.musicdemo',\n                abilityName: 'MainAbility'\n              }\n            ],\n            // OperationType.START_ABILITIES\n            operationType: 2,\n            requestCode: 0,\n            wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n          }\n          wantAgent.getWantAgent(wantAgentInfo).then((agent) => {\n            session.setLaunchAbility(agent);\n          })\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置一个即时的自定义会话事件，以供媒体控制方接收到事件后进行相应的操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(542988)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过dispatchSessionEvent方法设置的数据不会保存在会话对象或AVSession服务中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          let eventName = 'dynamic_lyric';\n          await session.dispatchSessionEvent(eventName, { lyric: 'This is my lyric' }).then(() => {\n            console.info(`Dispatch session event successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to dispatch session event. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          })\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置与当前会话相关的自定义媒体数据包，以供媒体控制方接收到事件后进行相应的操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(312758)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过setExtras方法设置的数据包会被存储在AVSession服务中，数据的生命周期与会话一致；会话对应的Controller可以使用getExtras来获取该数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          await session.setExtras({ extra: 'This is my custom media packet' }).then(() => {\n            console.info(`Set extras successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set extras. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          })\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册播控命令事件监听，便于响应用户通过媒体会话控制方，例如播控中心，下发的播控命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Session侧注册的监听分为固定播控命令和高级播控事件两种。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6.1 固定控制命令的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(273173)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话提供方在注册相关固定播控命令事件监听时，监听的事件会在媒体会话控制方的getValidCommands()方法中体现，即媒体会话控制方会认为对应的方法有效，进而根据需要触发相应暂不使用时的事件。为了保证媒体会话控制方下发的播控命令可以被正常执行，媒体会话提供方请勿进行无逻辑的空实现监听。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Session侧的固定播控命令主要包括播放、暂停、上一首、下一首等基础操作命令，详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-i/arkts-apis-avsession-i#avcontrolcommand10",
            children: "AVControlCommand"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // ...\n          // 一般在监听器中会对播放器做相应逻辑处理。\n          // 不要忘记处理完后需要通过set接口同步播放相关信息，参考上面的用例。\n          session.on('play', () => {\n            console.info(`on play , do play task`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('play')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态。\n          });\n          session.on('pause', () => {\n            console.info(`on pause , do pause task`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('pause')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态。\n          });\n          session.on('stop', () => {\n            console.info(`on stop , do stop task`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('stop')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态。\n          });\n          session.on('playNext', () => {\n            console.info(`on playNext , do playNext task`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('playNext')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态，使用SetAVMetadata上报媒体信息。\n          });\n          session.on('playPrevious', () => {\n            console.info(`on playPrevious , do playPrevious task`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('playPrevious')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态，使用SetAVMetadata上报媒体信息。\n          });\n          session.on('fastForward', () => {\n            console.info(`on fastForward , do fastForward task`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('fastForward')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态和播放position。\n          });\n          session.on('rewind', () => {\n            console.info(`on rewind , do rewind task`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('rewind')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态和播放position。\n          });\n          session.on('seek', (time) => {\n            console.info(`on seek , the seek time is ${time}`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('seek')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报播放状态和播放position。\n          });\n          session.on('setSpeed', (speed) => {\n            console.info(`on setSpeed , the speed is ${speed}`);\n            // ...\n            // 实现具体功能。\n          });\n          session.on('setLoopMode', (mode) => {\n            console.info(`on setLoopMode , the loop mode is ${mode}`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('setLoopMode')取消监听。\n            // 应用自定下一个模式，处理完毕后，请使用SetAVPlaybackState上报切换后的LoopMode。\n          });\n          session.on('toggleFavorite', (assetId) => {\n            console.info(`on toggleFavorite , the target asset Id is ${assetId}`);\n            // ...\n            // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('toggleFavorite')取消监听。\n            // 处理完毕后，请使用SetAVPlaybackState上报收藏结果isFavorite。\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6.2 高级播控事件的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Session侧的可以注册的高级播控事件主要包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "skipToQueueItem: 播放列表其中某项被选中的事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "handleKeyEvent: 按键事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "outputDeviceChange: 播放设备变化的事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "commonCommand: 自定义控制命令变化的事件。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          try {\n            let context = this.getUIContext().getHostContext() as Context;\n            // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n            let type: AVSessionManager.AVSessionType = 'audio';\n            let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n            // ...\n            // 一般在监听器中会对播放器做相应逻辑处理。\n            // 不要忘记处理完后需要通过set接口同步播放相关信息，参考上面的用例。\n            session.on('skipToQueueItem', (itemId) => {\n              console.info(`on skipToQueueItem , do skip task`);\n              // ...\n              // 实现具体功能。\n            });\n            session.on('handleKeyEvent', (event) => {\n              console.info(`on handleKeyEvent , the event is ${JSON.stringify(event)}`);\n              // ...\n              // 实现具体功能。\n            });\n            session.on('outputDeviceChange', (device) => {\n              console.info(`on outputDeviceChange , the device info is ${JSON.stringify(device)}`);\n              // ...\n              // 实现具体功能。\n            });\n            session.on('commonCommand', (commandString, args) => {\n              console.info(`on commonCommand , command is ${commandString}, args are ${JSON.stringify(args)}`);\n              // ...\n              // 实现具体功能。\n            });\n            // ...\n          } catch (err) {\n            if (err) {\n              console.error(`AVSession create Error: Code: ${err.code}, message: ${err.message}`);\n              // ...\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取当前媒体会话自身的控制器，与媒体会话对应进行通信交互。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          try {\n            let context = this.getUIContext().getHostContext() as Context;\n            // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n            let type: AVSessionManager.AVSessionType = 'audio';\n            let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n\n            // 通过已有session获取一个controller对象。\n            let controller = await session.getController();\n            // ...\n\n            // controller可以与原session对象进行基本的通信交互，比如下发播放命令。\n            let avCommand: AVSessionManager.AVControlCommand = { command: 'play' };\n            controller.sendControlCommand(avCommand);\n\n            // 或者做状态变更监听。\n            controller.on('playbackStateChange', 'all', (state) => {\n\n              // do some things.\n            });\n            // ...\n          } catch (err) {\n            if (err) {\n              console.error(`AVSession create or getController Error: Code: ${err.code}, message: ${err.message}`);\n              // ...\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频应用在退出，并且不需要继续播放时，及时取消监听以及销毁媒体会话释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消播控命令监听的示例代码如下所示 ："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n\n          // 取消指定session下的相关监听。\n          session.off('play');\n          session.off('pause');\n          session.off('stop');\n          session.off('playNext');\n          session.off('playPrevious');\n          session.off('skipToQueueItem');\n          session.off('handleKeyEvent');\n          session.off('outputDeviceChange');\n          session.off('commonCommand');\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁媒体会话示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // 主动销毁已创建的session。\n          session.destroy((err) => {\n            if (err) {\n              console.error(`Failed to destroy session. Code: ${err.code}, message: ${err.message}`);\n              // ...\n            } else {\n              console.info(`Destroy : SUCCESS `);\n              // ...\n            }\n          });\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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
312758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
542988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
633231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
273173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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