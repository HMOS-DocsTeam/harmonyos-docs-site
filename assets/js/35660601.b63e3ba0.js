"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["758401"], {
157419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_local_avsession_avsession_access_scene_avsession_access_scene_md_356_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-local-avsession-avsession-access-scene-avsession-access-scene-md-356.json
var site_docs_avsession_kit_local_avsession_avsession_access_scene_avsession_access_scene_md_356_namespaceObject = JSON.parse('{"id":"avsession-kit/local-avsession/avsession-access-scene/avsession-access-scene","title":"应用接入AVSession场景介绍","description":"音视频应用在实现音视频功能的同时，需要接入媒体会话即AVSession Kit，下文将提供一些典型的接入AVSession的展示和控制场景，方便开发者根据场景进行适配。","source":"@site/docs/avsession-kit/local-avsession/avsession-access-scene/avsession-access-scene.md","sourceDirName":"avsession-kit/local-avsession/avsession-access-scene","slug":"/avsession-kit/local-avsession/avsession-access-scene/","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/avsession-access-scene/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"应用接入AVSession场景介绍","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-access-scene","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体会话提供方(C/C++)","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/using-ohavsession-developer/"},"next":{"title":"后台播放","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/avsession-background-scene/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/local-avsession/avsession-access-scene/avsession-access-scene.md


const frontMatter = {
	title: '应用接入AVSession场景介绍',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-access-scene',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '应用接入AVSession场景介绍';

const assets = {

};



const toc = [{
  "value": "哪些场景下需要接入AVSession",
  "id": "哪些场景下需要接入avsession",
  "level": 2
}, {
  "value": "接入流程",
  "id": "接入流程",
  "level": 2
}, {
  "value": "创建不同类型的会话",
  "id": "创建不同类型的会话",
  "level": 2
}, {
  "value": "创建后台任务",
  "id": "创建后台任务",
  "level": 2
}, {
  "value": "设置元数据",
  "id": "设置元数据",
  "level": 2
}, {
  "value": "通用元数据",
  "id": "通用元数据",
  "level": 3
}, {
  "value": "歌词",
  "id": "歌词",
  "level": 3
}, {
  "value": "历史歌单",
  "id": "历史歌单",
  "level": 3
}, {
  "value": "媒体资源金标",
  "id": "媒体资源金标",
  "level": 3
}, {
  "value": "设置播放状态",
  "id": "设置播放状态",
  "level": 2
}, {
  "value": "通用播放状态",
  "id": "通用播放状态",
  "level": 3
}, {
  "value": "进度条",
  "id": "进度条",
  "level": 3
}, {
  "value": "注册控制命令",
  "id": "注册控制命令",
  "level": 2
}, {
  "value": "不支持命令的处理",
  "id": "不支持命令的处理",
  "level": 3
}, {
  "value": "快进快退",
  "id": "快进快退",
  "level": 3
}, {
  "value": "收藏",
  "id": "收藏",
  "level": 3
}, {
  "value": "循环模式",
  "id": "循环模式",
  "level": 3
}, {
  "value": "进度控制",
  "id": "进度控制",
  "level": 3
}, {
  "value": "适配媒体通知",
  "id": "适配媒体通知",
  "level": 2
}, {
  "value": "适配蓝牙按键与有线按键事件",
  "id": "适配蓝牙按键与有线按键事件",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "应用接入avsession场景介绍",
        children: "应用接入AVSession场景介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音视频应用在实现音视频功能的同时，需要接入媒体会话即AVSession Kit，下文将提供一些典型的接入AVSession的展示和控制场景，方便开发者根据场景进行适配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于不同的场景，将会在系统的播控中心看到不同的UI呈现。同时，在不同的场景下，应用的接入处理也需要遵循不同的规范约束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "哪些场景下需要接入avsession",
      children: "哪些场景下需要接入AVSession"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVSession会对后台的音频播放、VOIP通话做约束，所以通常来说，长音频应用、听书类应用、长视频应用、VOIP类应用等都需要接入AVSession。当应用在没有创建接入AVSession的情况下进行了上述业务，那么系统会在检测到应用后台时，停止对应的音频播放，静音通话声音，以达到约束应用行为的目的。这种约束，应用上架前在本地就可以验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于其他使用到音频播放的应用，比如游戏、直播等场景，接入AVSession只是可选，取决于应用是否有后台播放的使用诉求。若应用需要后台播放，那么接入AVSession仍然是必须的，否则业务的正常功能会受到限制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要实现后台播放等功能时，需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/background-task-overview",
        children: "BackgroundTasks Kit"
      }), "（后台任务管理）的能力，申请对应的长时任务，避免进入挂起（Suspend）状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入流程",
      children: "接入流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入AVSession流程分为如下几个步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["确定应用需要创建的会话类型，", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%88%9B%E5%BB%BA%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E4%BC%9A%E8%AF%9D",
          children: "创建对应的会话"
        }), "，不同类型决定了播控中心展示的控制模板样式。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["按需", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%88%9B%E5%BB%BA%E5%90%8E%E5%8F%B0%E4%BB%BB%E5%8A%A1",
          children: "创建后台任务"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%AE%BE%E7%BD%AE%E5%85%83%E6%95%B0%E6%8D%AE",
          children: "设置必要的元数据（Metadata）"
        }), "，以在播控中心展示相应的信息，包括不限于：当前媒体的ID（assetId），上一首媒体的ID（previousAssetId），下一首媒体的ID（nextAssetId），标题（title），专辑作者（author），专辑名称（album），词作者（writer），媒体时长（duration）等属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%AE%BE%E7%BD%AE%E6%92%AD%E6%94%BE%E7%8A%B6%E6%80%81",
          children: "设置播放相关的状态"
        }), "，包括不限于：当前媒体的播放状态（state）、播放位置（position）、播放倍速（speed）、缓冲时间（bufferedTime）、循环模式（loopMode）、是否收藏（isFavorite）、正在播放的媒体Id（activeItemId）、自定义媒体数据（extras）等属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["按需", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B3%A8%E5%86%8C%E6%8E%A7%E5%88%B6%E5%91%BD%E4%BB%A4",
          children: "注册不同的控制命令"
        }), "，包括不限于：播放/暂停、上下一首、快进快退、收藏、循环模式、进度条。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用退出或者无对应业务时，注销会话。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建不同类型的会话",
      children: "创建不同类型的会话"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AVSession在构造方法中支持不同的类型参数，由 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-t/arkts-apis-avsession-t#avsessiontype10",
        children: "AVSessionType"
      }), " 定义，不同的类型代表了不同场景的控制能力，对于播控中心来说，会展示不同的控制模版。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "audio类型，播控中心的控制样式为：收藏，上一首，播放/暂停，下一首，循环模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "video类型，播控中心的控制样式为：快退，上一首，播放/暂停，下一首，快进。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "voice_call类型，通话类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902324)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码仅展示创建AVSession对象的接口调用，应用在真正使用时，需要确保AVSession对象实例在应用后台播放业务活动期间一直存在，避免被系统回收、释放，导致后台发声时被系统管控。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          // 开始创建并激活媒体会话。\n          // 创建session。\n          let context = this.getUIContext().getHostContext() as Context;\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // 激活接口要在元数据、控制命令注册完成之后再执行。\n          await session.activate();\n          console.info(`session create done : sessionId : ${session.sessionId}`);\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建后台任务",
      children: "创建后台任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要实现后台播放等功能时，需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/background-task-overview",
        children: "BackgroundTasks Kit"
      }), "（后台任务管理）的能力，申请对应的长时任务，避免进入挂起（Suspend）状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对媒体类播放来说，需要申请", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundmode",
        children: "AUDIO_PLAYBACK BackgroundMode"
      }), "的长时任务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置元数据",
      children: "设置元数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通用元数据",
      children: "通用元数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过setAVMetadata把会话的一些元数据信息设置给系统，从而在播控中心界面进行展示，包括但不限于：当前媒体的ID（assetId），上一首媒体的ID（previousAssetId），下一首媒体的ID（nextAssetId），标题（title），专辑作者（author），专辑名称（album），词作者（writer），媒体时长（duration）等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          try {\n            let context = this.getUIContext().getHostContext() as Context;\n            // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n            let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', 'audio');\n            // 设置必要的媒体信息。\n            let metadata: AVSessionManager.AVMetadata = {\n              assetId: '0', // 由应用指定，用于标识应用媒体库里的媒体。\n              title: 'TITLE',\n              mediaImage: 'IMAGE',\n              artist: 'ARTIST',\n            };\n            session.setAVMetadata(metadata).then(() => {\n              console.info(`SetAVMetadata successfully`);\n              // ...\n            }).catch((err: BusinessError) => {\n              console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n              // ...\n            });\n          } catch (err) {\n            if (err) {\n              console.error(`AVSession create Error: Code: ${err.code}, message: ${err.message}`);\n              // ...\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "歌词",
      children: "歌词"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于长音频来说，播控中心提供了歌词的展示页面，对于应用来说，接入也比较简单，只需要把歌词内容设置给系统。播控中心会解析歌词内容，并根据播放进度进行同步的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n\n          // 把歌词信息设置给AVSession。\n          let metadata: AVSessionManager.AVMetadata = {\n            assetId: '0',\n            title: 'TITLE',\n            mediaImage: 'IMAGE',\n            // LRC中有两类元素：一种是时间标签+歌词，一种是ID标签。\n            // 例如：[00:25.44]xxx\\r\\n[00:26.44]xxx\\r\\n。\n            lyric: 'lrc格式歌词内容',\n            // singleLyricText字段存储单条歌词文本，不包含时间戳。\n            // 例如：\"单条歌词内容\"。\n            singleLyricText: '单条歌词内容',\n          };\n          session.setAVMetadata(metadata).then(() => {\n            console.info(`SetAVMetadata successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "历史歌单",
      children: "历史歌单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对音乐/听书类应用，播控中心提供一系列快捷播放能力，包括一键启动冷启动续播、以及历史歌单功能，其中歌单功能中支持显示的音频媒体内容有：音乐歌单、有声书专辑、播客专辑等。视频媒体内容、直播类媒体内容暂不支持歌单。应用在端侧注册并适配后台启动模式的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/intents-kit-guide/intents-habit-rec/intents-habit-rec-access-programme",
        children: "播放意图"
      }), "，即可实现接入上述功能。接入后的体验自检，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avsession-kit/playback-control-access-selfcheck/access-checklist/quick-playback",
        children: "快捷播放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可参考下述示例，完成注册播放意图、设置歌单信息、实现意图启动播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注册播放意图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用按照播放业务，选择PlayMusicList意图（音乐类应用）或者PlayAudio意图（听书类应用）其一注册。编辑对应的意图配置PROJECT_HOME/entry/src/main/resources/base/profile/insight_intent.json文件，实现播放意图注册。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // 应用支持的意图列表\n  \"insightIntents\": [\n    {\n      // 意图名称\n      // 名称应当遵循意图框架规范，当前仅支持预置垂域意图，不允许自定义\n      // 应用内意图名称唯一，不允许出现相同的名称定义\n      \"intentName\": \"PlayMusicList\", // 音乐类PlayMusicList，听书或有声书类PlayAudio\n      // 意图所属的垂域\n      \"domain\": \"MusicDomain\", // 音乐类MusicDomain，听书或有声书类AudioDomain\n      // 意图版本号\n      // 插件引用意图时会校验该版本号，只有和插件定义的版本号一致才能正常调用\n      \"intentVersion\": \"1.0.1\",\n      // 意图调用代码逻辑入口\n      \"srcEntry\": \"./ets/entryability/InsightIntentExecutorImpl.ets\",\n      \"uiAbility\": {\n        // 意图所在module、ability，以及代码相对路径入口\n        \"ability\": \"EntryAbility\",\n        // UIAbility支持前后台两种执行模式\n        \"executeMode\": [\n          \"background\", // 播控一键冷启动、历史歌单功能需要应用支持意图后台启动\n          \"foreground\"\n        ]\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置歌单信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avsession/arkts-apis-avsession-avsession#setavmetadata10",
        children: "setAVMetadata"
      }), "接口设置当前播放的歌单（专辑）信息，歌单（专辑）信息由下面几个字段组成："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avQueueName: 歌单的名称，接入歌单必选"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avQueueId: 歌单的唯一标识id，接入歌单必选"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avQueueImage: 歌单的图片资源，接入歌单必选"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统媒体信息根据应用上报实时刷新，若应用接入歌单功能，则确保在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-i/arkts-apis-avsession-i#avmetadata10",
        children: "AVMetadata"
      }), "中一直携带歌单数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n \nlet context: Context = getContext(this);\nasync function setListener() {\n  // 假设已经创建了一个session，如何创建session可以参考之前的案例\n  let type: AVSessionManager.AVSessionType = 'audio';\n  let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n  // 将歌单信息设置给AVSession\n  let metadata: AVSessionManager.AVMetadata = {\n  // 下面内容均由应用设置\n  assetId: 'musicid123',\n  avQueueName: 'myQueue',\n  avQueueId: 'myQueue123',\n  avQueueImage: \"PIXELMAP_OBJECT\",\n  };\n  session.setAVMetadata(metadata).then(() => {\n  console.info(`SetAVMetadata successfully`);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n  });\n  // 上报播放状态，参考播放状态\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实现意图启动播放"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用接入歌单功能后，用户在系统播控中心界面可以播放应用的歌单，也可以在应用进程释放后，通过系统播控中心再次冷启动应用后台播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户触发歌单播放时，系统会将歌单的唯一标识id传回应用，应用可以在意图调用接口中，通过解析意图参数(intentParam)中的entityId，获取到歌单的id，实现对应歌单的播放。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户触发播控冷启动播放时，系统会在意图参数(intentParam)的包含空歌单id，即解析出得的entityId为空字符串，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "由应用来决定播放内容"
          })
        }), "，可以实现为续播上一次的播放内容。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["系统会在后台冷启动应用的播放，需要在播放前先设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-i/arkts-apis-avsession-i#avmetadata10",
              children: "AVMetadata"
            }), "，注册", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%B3%A8%E5%86%8C%E6%8E%A7%E5%88%B6%E5%91%BD%E4%BB%A4",
              children: "播控控制回调"
            }), "，并申请播音长时任务。"]
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentExecutor } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n  /**\n   * 意图调用样例\n   */\n  export default class InsightIntentExecutorImpl extends InsightIntentExecutor {\n    /**\n     * override 执行后台启动UIAbility意图\n     *\n     * @param intentName 意图名称\n     * @param intentParam 意图参数\n     * @returns 意图调用结果\n     */\n    async onExecuteInUIAbilityBackgroundMode(intentName: string, intentParam: Record<string, Object>):\n      Promise<insightIntent.ExecuteResult> {\n      // 根据意图名称分发处理逻辑\n      switch (intentName) {\n        case 'PlayMusicList':\n          // PlayMusicList参照如下解析方式\n          let entityId: string = (intentParam.items as Array<object>)?.[0]?.['entityId'];\n          return this.playFunc(entityId);\n        case 'PlayAudio':\n          // PlayAudio参照如下解析方式\n          let data = intentParam as Record<string, string>;\n          return this.playFunc(data.entityId);\n        default:\n          break;\n      }\n      return Promise.resolve({\n        code: -1,\n        result: {\n          message: 'unknown intent'\n        }\n      } as insightIntent.ExecuteResult)\n    }\n\n    /**\n     * 实现调用播放功能\n     *\n     * @param entityId 播放内容id\n     */\n    private playFunc(entityId: string): Promise<insightIntent.ExecuteResult> {\n      // entityId 不为空，表示用户指定内容（歌单/专辑）播放\n      // entityId 为空（entityId.length == 0），由应用自行决定播放内容，续播历史内容或者是推荐内容\n      // 此时是后台拉起应用播放，除了初始化播放资源，还需要设置AVMetadata，注册播控控制回调，并申请播音长时任务\n      // TODO 实现具体的播放业务\n      return Promise.resolve({\n        code: 0,\n        result: {\n          message: 'Intent execute succeed'\n        }\n      } as insightIntent.ExecuteResult)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体资源金标",
      children: "媒体资源金标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于长音频，播控中心提供了媒体资源金标（即应用媒体音频音源的标识）的展示，目前只支持展示Audio Vivid标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于应用来说，接入只需要在AVMetadata中通知系统，当前播放音频的音源标识，播控就会同步展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n\n          // 把媒体音源信息设置给AVSession。\n          let metadata: AVSessionManager.AVMetadata = {\n            assetId: '0',\n            title: 'TITLE',\n            mediaImage: 'IMAGE',\n            // 标识该媒体音源是Audio Vivid。\n            displayTags: AVSessionManager.DisplayTag.TAG_AUDIO_VIVID,\n          };\n          session.setAVMetadata(metadata).then(() => {\n            console.info(`SetAVMetadata successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置播放状态",
      children: "设置播放状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通用播放状态",
      children: "通用播放状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avsession/arkts-apis-avsession-avsession#setavplaybackstate10",
        children: "setAVPlaybackState"
      }), "。把当前的播放状态设置给系统，以在播控中心界面进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放状态一般是在资源播放后会进行变化的内容，包括：当前媒体的播放状态（state）、播放位置（position）、播放倍速（speed）、缓冲时间（bufferedTime）、循环模式（loopMode）、是否收藏（isFavorite）、正在播放的媒体Id（activeItemId）、自定义媒体数据（extras）等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', 'audio');\n\n          // 播放器逻辑··· 引发媒体信息与播放状态的变更。\n          // 简单设置一个播放状态 - 暂停 未收藏。\n          let playbackState: AVSessionManager.AVPlaybackState = {\n            state: AVSessionManager.PlaybackState.PLAYBACK_STATE_PAUSE,\n            isFavorite: false\n          };\n          session.setAVPlaybackState(playbackState, (err: BusinessError) => {\n            if (err) {\n              console.error(`Failed to set AVPlaybackState. Code: ${err.code}, message: ${err.message}`);\n              // ...\n            } else {\n              console.info(`SetAVPlaybackState successfully`);\n              // ...\n            }\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进度条",
      children: "进度条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用如果支持在播控中心展示进度，那么在媒体资源播放中，需要设置资源的时长、播放状态（暂停、播放）、播放位置、倍速，播控中心会使用这些信息进行进度的展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n\n          // 设置媒体资源时长。\n          let metadata: AVSessionManager.AVMetadata = {\n            assetId: '0',\n            title: 'TITLE',\n            mediaImage: 'IMAGE',\n            duration: 23000, // 资源的时长，以ms为单位。\n          };\n          session.setAVMetadata(metadata).then(() => {\n            console.info(`SetAVMetadata successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          });\n\n          // 设置状态： 播放状态，进度位置，播放倍速，缓存的时间。\n          let playbackState: AVSessionManager.AVPlaybackState = {\n            state: AVSessionManager.PlaybackState.PLAYBACK_STATE_PLAY, // 播放状态。\n            position: {\n              elapsedTime: 1000, // 已经播放的位置，以ms为单位。\n              updateTime: new Date().getTime(), // 应用更新当前位置时的时间戳，以ms为单位。\n            },\n            speed: 1.0, // 可选，默认是1.0，播放的倍速，按照应用内支持的speed进行设置，系统不做校验。\n            bufferedTime: 14000, // 可选，资源缓存的时间，以ms为单位。\n          };\n          session.setAVPlaybackState(playbackState, (err) => {\n            if (err) {\n              console.error(`Failed to set AVPlaybackState. Code: ${err.code}, message: ${err.message}`);\n              // ...\n            } else {\n              console.info(`SetAVPlaybackState successfully`);\n              // ...\n            }\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统的播控中心会根据应用设置的信息自行进行播放进度的计算，而不需要应用实时更新播放进度；但是应用需要如下状态发生变化的时候，再更新AVPlaybackState，否则系统会发生计算错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "speed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在真实播放开始时，再上报进度起始position；若播放存在buffer状态，可以先上报播放状态为AVSessionManager.PlaybackState.PLAYBACK_STATE_BUFFERING，来通知系统不刷新进度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于进度条有一些特殊情况需要处理："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "歌曲支持试听"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）应用不需要设置完整的歌曲时长，则只需要设置歌曲的试听时长。当应用仅设置歌曲的试听时长而不是完整时长，用户在播控中心触发进度控制时，应用收到的时长也是VIP试听时长内的相对时间戳位置，而不是完整歌曲的绝对时间戳位置，应用需要重新计算歌曲从零开始的绝对时间戳进行实际响应处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）如果应用设置完整歌曲时长，但需要系统支持试听片段，也可以在播放时上报起始进度position，当收到的seek指令超过试听片段时，上报试听截止position，系统播控的进度会跟随回弹。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "歌曲不支持试听"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果歌曲不支持试听，那么理论上应用内也不支持播放，这时可以把 duration 设置为 -1，以通知系统不显示实际的时长。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "广告等内容的时长设置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于有前贴广告、后贴广告的资源来说，建议这么处理："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "播放广告时，单独设置广告的时长 duration。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当进入到正片播放的时候，则重新设置一次新的时长，以与广告进行区分。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册控制命令",
      children: "注册控制命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入AVSession，可以通过注册不同的控制命令来实现播控中心界面上的控制操作，即通过on接口注册不同的控制命令参数，即可实现对应的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的接口参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avsession/arkts-apis-avsession-avsession#onplay10",
        children: "接口注册"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(250298)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建AVSession后，请先注册应用支持的控制命令，再激活 Session。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体资源支持的控制命令列表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "控制命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "play"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "playNext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放下一首命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "playPrevious"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放上一首命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fastForward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快进命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rewind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快退命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "playFromAssetId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据某个资源id进行播放命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "seek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setSpeed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置播放速率命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setLoopMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置循环模式命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toggleFavorite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否收藏命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skipToQueueItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置播放列表其中某项被选中播放的命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "handleKeyEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键事件的命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commonCommand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自定义控制命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通话类应用支持的控制："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "控制命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "answer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接听电话的命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hangUp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话挂断的命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toggleCallMute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话静音或解除静音的命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持命令的处理",
      children: "不支持命令的处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统支持的控制命令对于不支持的控制，比如应用不支持“上一首”的命令处理，只需要使用off 接口注销对应的控制命令，系统的播控中心会相应的对该控制界面进行置灰处理，以明确告知用户此控制命令不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n\n          // 取消指定session下的相关监听。\n          session.off('play');\n          session.off('pause');\n          session.off('stop');\n          session.off('playNext');\n          session.off('playPrevious');\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "快进快退",
      children: "快进快退"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统支持三种快进/快退的时长，应用可以通过接口进行设置；同时注册快进/快退的回调命令，以响应控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(665248)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用注册快进/快退及上/下一首资源切换的命令时，在播控中心的显示存在实际差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "当AVSessionType是audio时："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "应用注册的事件组合"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "播放中心显示按钮"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "按钮是否可用"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "未注册任何事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“上一首”、“下一首”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "所有按钮置灰，无法点击。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "注册上一首/下一首事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“上一首”、“下一首”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册上一首事件 →“上一首”按钮可用。  注册下一首事件 →“下一首”按钮可用。  未注册对应事件的按钮不可用。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "注册快进/快退事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“上一首”、“下一首”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "所有按钮置灰，无法点击。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "注册上一首/下一首及快进/快退事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“上一首”、“下一首”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册上一首事件 →“上一首”按钮可用。  注册下一首事件 →“下一首”按钮可用。  未注册对应事件的按钮不可用。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "当AVSessionType是video时："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "应用注册的事件组合"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "播放中心显示按钮"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "按钮是否可用"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "未注册任何事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“快进”、“快退”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "所有按钮置灰，无法点击。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "注册上一首/下一首事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“上一首”、“下一首”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册上一首事件 →“上一首”按钮可用。  注册下一首事件 →“下一首”按钮可用。  未注册对应事件的按钮不可用。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "注册快进/快退事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“快进”、“快退”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册快进事件 →“快进”按钮可用。  注册快退事件 →“快退”按钮可用。  未注册对应事件的按钮不可用。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "注册上一首/下一首及快进/快退事件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "“快进”、“快退”"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册快进事件 →“快进”按钮可用。  注册快退事件 →“快退”按钮可用。  未注册对应事件的按钮不可用。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // ...\n\n          // 设置支持的快进快退的时长设置给AVSession。\n          let metadata: AVSessionManager.AVMetadata = {\n            assetId: '0', // Specified by the application, used to identify the media asset in the application media library.\n            title: 'TITLE',\n            mediaImage: 'IMAGE',\n            skipIntervals: AVSessionManager.SkipIntervals.SECONDS_10,\n          };\n          session.setAVMetadata(metadata).then(() => {\n            console.info(`SetAVMetadata successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          });\n\n          session.on('fastForward', (time ?: number) => {\n            console.info(`on fastForward , do fastForward task`);\n            // ...\n            // do some tasks ···\n          });\n          session.on('rewind', (time ?: number) => {\n            console.info(`on rewind , do rewind task`);\n            // ...\n            // do some tasks ···\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "收藏",
      children: "收藏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["音乐类应用实现收藏功能，那么需要注册收藏的控制响应", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avsession/arkts-apis-avsession-avsession#ontogglefavorite10",
        children: "on('toggleFavorite')"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // ...\n          session.on('toggleFavorite', (assetId) => {\n            console.info(`on toggleFavorite `);\n            // ...\n            // 应用收到收藏命令，进行收藏处理。\n\n            // 应用内完成或者取消收藏，把新的收藏状态设置给AVSession。\n            let playbackState: AVSessionManager.AVPlaybackState = {\n              isFavorite: true,\n            };\n            session.setAVPlaybackState(playbackState).then(() => {\n              console.info(`SetAVPlaybackState successfully`);\n              // ...\n            }).catch((err: BusinessError) => {\n              console.error(`SetAVPlaybackState BusinessError: code: ${err.code}, message: ${err.message}`);\n              // ...\n            });\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "循环模式",
      children: "循环模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对音乐类应用，系统的播控中心界面会默认展示循环模式的控制操作，目前系统支持四种固定的循环模式控制，参考: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#loopmode10",
        children: "LoopMode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播控中心支持固定的四种循环模式的切换，即： 随机播放、顺序播放、单曲循环、列表循环。应用收到循环模式切换的指令并切换后，需要向系统上报切换后的LoopMode。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若应用内支持的LoopMode不在系统固定的四个循环模式内，需要选择四个固定循环模式其一向系统上报，由应用自定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现参考："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // ...\n\n          // 应用启动时/内部切换循环模式，需要把应用内的当前的循环模式设置给AVSession。\n          let playBackState: AVSessionManager.AVPlaybackState = {\n            loopMode: AVSessionManager.LoopMode.LOOP_MODE_SINGLE,\n          };\n          session.setAVPlaybackState(playBackState).then(() => {\n            console.info(`set AVPlaybackState successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVPlaybackState. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          });\n\n          // 应用注册循环模式的控制监听。\n          session.on('setLoopMode', (mode) => {\n            console.info(`on setLoopMode ${mode}`);\n            // ...\n            // 应用收到设置循环模式的指令后，应用自定下一个模式，切换完毕后通过AVPlaybackState上报切换后的LoopMode。\n            let playBackState: AVSessionManager.AVPlaybackState = {\n              loopMode: AVSessionManager.LoopMode.LOOP_MODE_SINGLE,\n            };\n            session.setAVPlaybackState(playBackState).then(() => {\n              console.info(`set AVPlaybackState successfully`);\n              // ...\n            }).catch((err: BusinessError) => {\n              console.error(`Failed to set AVPlaybackState. Code: ${err.code}, message: ${err.message}`);\n              // ...\n            });\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进度控制",
      children: "进度控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用如果支持进度显示，进一步也可以支持进度控制。应用需要响应seek的控制命令，那么当用户在播控中心的界面上进行拖动操作时，应用就会收到对应的回调。参考实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          // 假设已经创建了一个session，如何创建session可以参考之前的案例。\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // ...\n\n          session.on('seek', (position: number) => {\n            console.info(`on seek , the time is ${JSON.stringify(position)}`);\n            // ...\n\n            // 由于应用内seek可能会触发较长的缓冲等待，可以先把状态设置为 Buffering。\n            let playbackState: AVSessionManager.AVPlaybackState = {\n              state: AVSessionManager.PlaybackState.PLAYBACK_STATE_BUFFERING, // Buffering state.\n            };\n            session.setAVPlaybackState(playbackState, (err) => {\n              if (err) {\n                console.error(`Failed to set AVPlaybackState. Code: ${err.code}, message: ${err.message}`);\n                // ...\n              } else {\n                console.info(`SetAVPlaybackState successfully`);\n                // ...\n              }\n            });\n\n            // 应用响应seek命令，使用应用内播放器完成seek实现。\n\n            // 应用内更新新的位置后，也需要同步更新状态给系统。\n            playbackState.state = AVSessionManager.PlaybackState.PLAYBACK_STATE_PLAY; // 播放状态。\n            playbackState.position = {\n              elapsedTime: position, // 已经播放的位置，以ms为单位。\n              updateTime: new Date().getTime(), // 应用更新当前位置的时间戳，以ms为单位。\n            }\n            session.setAVPlaybackState(playbackState, (err) => {\n              if (err) {\n                console.error(`Failed to set AVPlaybackState. Code: ${err.code}, message: ${err.message}`);\n                // ...\n              } else {\n                console.info(`SetAVPlaybackState successfully`);\n                // ...\n              }\n            });\n          });\n\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适配媒体通知",
      children: "适配媒体通知"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统不直接向应用提供主动发送媒体控制通知的接口，那么当应用正确接入媒体播控中心并进入播放状态时，系统会自动发送通知，同时在通知和锁屏界面进行展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29918)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知中心、锁屏下的播控卡片的展示，由系统进行发送，并控制相应的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适配蓝牙按键与有线按键事件",
      children: "适配蓝牙按键与有线按键事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统不直接向应用提供监听多模按键事件的接口，应用如需要监听蓝牙与有线耳机的媒体按键事件，可以通过注册AVSession的控制指令来实现。AVSession提供了如下两种实现方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一（推荐使用）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照应用业务需求，正确接入媒体播控中心，", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%B3%A8%E5%86%8C%E6%8E%A7%E5%88%B6%E5%91%BD%E4%BB%A4",
            children: "注册需要的控制指令"
          }), "并实现对应的功能。AVSession会监听多模按键事件，将其转换为AVSession的控制指令发送回应用。应用无须区分不同的按键事件，按照AVSession的回调处理即可。按照此方式接入播放暂停，也等同于适配了蓝牙耳机的佩戴检测，在双耳佩戴与摘下时也会收到如下播放暂停控制指令。目前支持转换的AVSession控制指令如下："]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "控制命令"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "功能说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "play"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "播放命令。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "pause"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "暂停命令。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "stop"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "停止命令。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "playNext"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "播放下一首命令。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "playPrevious"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "播放上一首命令。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fastForward"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "快进命令。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "rewind"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "快退命令。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          try {\n            let context = this.getUIContext().getHostContext() as Context;\n            let type: AVSessionManager.AVSessionType = 'audio';\n            let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n            // ...\n            // 设置必要的媒体信息，务必设置，否则接收不到控制事件。\n            let metadata: AVSessionManager.AVMetadata = {\n              assetId: '0', // 由应用指定，用于标识应用媒体库里的媒体。\n              title: 'TITLE',\n              mediaImage: 'IMAGE',\n              artist: 'ARTIST'\n            };\n            session.setAVMetadata(metadata).then(() => {\n              console.info(`SetAVMetadata successfully`);\n              // ...\n            }).catch((err: BusinessError) => {\n              console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n              // ...\n            });\n            // 一般在监听器中会对播放器做相应逻辑处理。\n            // 处理完后需要通过set接口同步播放相关信息，参考上面的用例。\n            session.on('play', () => {\n              console.info(`on play , do play task`);\n              // ...\n              // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('play')取消监听。\n              // 处理完毕后，请使用setAVPlayState上报播放状态。\n            });\n            session.on('pause', () => {\n              console.info(`on pause , do pause task`);\n              // ...\n              // 如暂不支持该指令，请勿注册；或在注册后但暂不使用时，通过session.off('pause')取消监听。\n              // 处理完毕后，请使用setAVPlayState上报播放状态。\n            });\n            // ...\n          } catch (err) {\n            if (err) {\n              console.error(`AVSession create Error: Code: ${err.code}, message: ${err.message}`);\n              // ...\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过AVSession注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-avsession/arkts-apis-avsession-avsession#onhandlekeyevent10",
            children: "HandleMediaKeyEvent"
          }), "指令。该回调接口会直接转发媒体按键事件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keyevent/js-apis-keyevent",
            children: "KeyEvent"
          }), "。应用需要自行识别按键事件的类型，并响应事件实现对应的功能。目前支持转发的按键事件类型如下："]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsxs)(_components.th, {
                children: ["按键类型(", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode#keycode",
                  children: "KeyCode"
                }), ")"]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "功能说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_PLAY_PAUSE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：播放/暂停"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_STOP"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：停止"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_NEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：下一首"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_PREVIOUS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：上一首"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_REWIND"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：快退"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_FAST_FORWARD"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：快进"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_PLAY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：播放"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCODE_MEDIA_PAUSE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多媒体键：暂停"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { avSession as AVSessionManager } from '@kit.AVSessionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello world';\n  // ...\n\n  build() {\n    Column() {\n      // ...\n      Text(this.message)\n        .onClick(async () => {\n          let context = this.getUIContext().getHostContext() as Context;\n          let type: AVSessionManager.AVSessionType = 'audio';\n          let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', type);\n          // ...\n          // 设置必要的媒体信息，务必设置，否则接收不到按键事件。\n          let metadata: AVSessionManager.AVMetadata = {\n            assetId: '0', // 由应用指定，用于标识应用媒体库里的媒体。\n            title: 'TITLE',\n            mediaImage: 'IMAGE',\n            artist: 'ARTIST'\n          };\n          session.setAVMetadata(metadata).then(() => {\n            console.info(`SetAVMetadata successfully`);\n            // ...\n          }).catch((err: BusinessError) => {\n            console.error(`Failed to set AVMetadata. Code: ${err.code}, message: ${err.message}`);\n            // ...\n          });\n          session.on('handleKeyEvent', (event) => {\n            // 解析keycode，应用需要根据keycode对播放器做相应逻辑处理。\n            console.info(`on handleKeyEvent, keyCode=${event.key.code}`);\n            // ...\n          });\n          // ...\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(838114)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式一与方式二均需正确设置媒体信息AVMetadata并注册相应控制接口，否则会无法接收到控制指令与按键事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式一与方式二，选择其一接入即可，无须同时接入，系统推荐按照方式一接入。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/media-provider",
          children: "媒体会话-提供方"
        })
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
250298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
29918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
665248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
838114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
902324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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