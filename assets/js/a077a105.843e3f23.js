"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["916270"], {
132228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_multimedia_app_takeovers_web_media_app_takeovers_web_media_md_a07_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-multimedia-app-takeovers-web-media-app-takeovers-web-media-md-a07.json
var site_docs_arkweb_web_use_multimedia_app_takeovers_web_media_app_takeovers_web_media_md_a07_namespaceObject = JSON.parse('{"id":"arkweb/web-use-multimedia/app-takeovers-web-media/app-takeovers-web-media","title":"托管网页中的媒体播放","description":"Web组件提供了应用接管网页中媒体播放的能力，用来支持应用增强网页的媒体播放，如画质增强等。","source":"@site/docs/arkweb/web-use-multimedia/app-takeovers-web-media/app-takeovers-web-media.md","sourceDirName":"arkweb/web-use-multimedia/app-takeovers-web-media","slug":"/arkweb/web-use-multimedia/app-takeovers-web-media/","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/app-takeovers-web-media/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"托管网页中的媒体播放","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-takeovers-web-media","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"在Web中打开摄像头和麦克风","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web-rtc/"},"next":{"title":"Web组件支持画中画","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web-picture-in-picture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-multimedia/app-takeovers-web-media/app-takeovers-web-media.md


const frontMatter = {
	title: '托管网页中的媒体播放',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-takeovers-web-media',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '托管网页中的媒体播放';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "ArkWeb内核播放媒体的框架",
  "id": "arkweb内核播放媒体的框架",
  "level": 3
}, {
  "value": "ArkWeb内核与应用的交互",
  "id": "arkweb内核与应用的交互",
  "level": 3
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "开启接管网页媒体播放",
  "id": "开启接管网页媒体播放",
  "level": 3
}, {
  "value": "创建本地播放器(NativeMediaPlayer)",
  "id": "创建本地播放器nativemediaplayer",
  "level": 3
}, {
  "value": "绘制本地播放器组件",
  "id": "绘制本地播放器组件",
  "level": 3
}, {
  "value": "执行ArkWeb内核发送给本地播放器的播控命令",
  "id": "执行arkweb内核发送给本地播放器的播控命令",
  "level": 3
}, {
  "value": "将本地播放器的状态信息通知给ArkWeb内核",
  "id": "将本地播放器的状态信息通知给arkweb内核",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "托管网页中的媒体播放",
        children: "托管网页中的媒体播放"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件提供了应用接管网页中媒体播放的能力，用来支持应用增强网页的媒体播放，如画质增强等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页播放媒体时，存在以下问题：网页清晰度低、网页播放器播放控件功能有限、某些视频无法播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者可以使用该功能，通过自己或者第三方播放器接管网页媒体播放，从而改善播放体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb内核播放媒体的框架",
      children: "ArkWeb内核播放媒体的框架"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不开启该功能时，ArkWeb内核的播放架构如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(519994)/* ["default"] */.A) + "",
        width: "466",
        height: "567"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(117299)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上图中1表示ArkWeb内核创建WebMediaPlayer来播放网页中的媒体资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上图中2表示WebMediaPlayer使用系统解码器来渲染媒体数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启该功能后，ArkWeb内核的播放架构如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3002)/* ["default"] */.A) + "",
        width: "669",
        height: "567"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(552152)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上图中1表示ArkWeb内核创建WebMediaPlayer来播放网页中的媒体资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上图中2表示WebMediaPlayer使用应用提供的本地播放器（NativeMediaPlayer）来渲染媒体数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb内核与应用的交互",
      children: "ArkWeb内核与应用的交互"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(811473)/* ["default"] */.A) + "",
        width: "762",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402691)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["上图中1的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BC%80%E5%90%AF%E6%8E%A5%E7%AE%A1%E7%BD%91%E9%A1%B5%E5%AA%92%E4%BD%93%E6%92%AD%E6%94%BE",
          children: "开启接管网页媒体播放"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["上图中2的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%88%9B%E5%BB%BA%E6%9C%AC%E5%9C%B0%E6%92%AD%E6%94%BE%E5%99%A8nativemediaplayer",
          children: "创建本地播放器"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["上图中3的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%BB%98%E5%88%B6%E6%9C%AC%E5%9C%B0%E6%92%AD%E6%94%BE%E5%99%A8%E7%BB%84%E4%BB%B6",
          children: "绘制本地播放器组件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["上图中4的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%89%A7%E8%A1%8Carkweb%E5%86%85%E6%A0%B8%E5%8F%91%E9%80%81%E7%BB%99%E6%9C%AC%E5%9C%B0%E6%92%AD%E6%94%BE%E5%99%A8%E7%9A%84%E6%92%AD%E6%8E%A7%E5%91%BD%E4%BB%A4",
          children: "执行ArkWeb内核发送给本地播放器的播控命令"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["上图中5的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%B0%86%E6%9C%AC%E5%9C%B0%E6%92%AD%E6%94%BE%E5%99%A8%E7%9A%84%E7%8A%B6%E6%80%81%E4%BF%A1%E6%81%AF%E9%80%9A%E7%9F%A5%E7%BB%99arkweb%E5%86%85%E6%A0%B8",
          children: "将本地播放器的状态信息通知给ArkWeb内核"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启接管网页媒体播放",
      children: "开启接管网页媒体播放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#enablenativemediaplayer12",
        children: "enableNativeMediaPlayer"
      }), "接口开启接管网页媒体播放的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .enableNativeMediaPlayer({ enable: true, shouldOverlay: false })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建本地播放器nativemediaplayer",
      children: "创建本地播放器(NativeMediaPlayer)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该功能开启后，网页中有媒体需要播放时，ArkWeb内核会触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12",
        children: "onCreateNativeMediaPlayer"
      }), "注册的回调函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用则需要调用onCreateNativeMediaPlayer来注册一个创建本地播放器的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该回调函数需要根据媒体信息来判断是否要创建一个本地播放器来接管当前的网页媒体资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用不接管当前的网页媒体资源， 需在回调函数里返回null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用接管当前的网页媒体资源， 需在回调函数里返回一个本地播放器实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本地播放器需要实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerbridge/arkts-apis-webview-nativemediaplayerbridge",
        children: "NativeMediaPlayerBridge"
      }), "接口，以便ArkWeb内核对本地播放器进行播控操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n// 实现 webview.NativeMediaPlayerBridge 接口。\n// ArkWeb 内核调用该类的方法来对 NativeMediaPlayer 进行播控。\nclass NativeMediaPlayerImpl implements webview.NativeMediaPlayerBridge {\n  // ... 实现 NativeMediaPlayerBridge 里的接口方法 ...\n  constructor(handler: webview.NativeMediaPlayerHandler, mediaInfo: webview.MediaInfo) {}\n  updateRect(x: number, y: number, width: number, height: number) {}\n  play() {}\n  pause() {}\n  seek(targetTime: number) {}\n  release() {}\n  setVolume(volume: number) {}\n  setMuted(muted: boolean) {}\n  setPlaybackRate(playbackRate: number) {}\n  enterFullscreen() {}\n  exitFullscreen() {}\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .enableNativeMediaPlayer({ enable: true, shouldOverlay: false })\n        .onPageBegin((event) => {\n          this.controller.onCreateNativeMediaPlayer((handler: webview.NativeMediaPlayerHandler, mediaInfo: webview.MediaInfo) => {\n            // 判断需不需要接管当前的媒体。\n            if (!shouldHandle(mediaInfo)) {\n              // 本地播放器不接管该媒体。\n              // 返回 null 。ArkWeb 内核将用自己的播放器来播放该媒体。\n              return null;\n            }\n            // 接管当前的媒体。\n            // 返回一个本地播放器实例给 ArkWeb 内核。\n            let nativePlayer: webview.NativeMediaPlayerBridge = new NativeMediaPlayerImpl(handler, mediaInfo);\n            return nativePlayer;\n          });\n        })\n    }\n  }\n}\n\n// stub\nfunction shouldHandle(mediaInfo: webview.MediaInfo) {\n  return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "绘制本地播放器组件",
      children: "绘制本地播放器组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接管网页媒体后，应用需要将本地播放器组件及视频画面绘制到ArkWeb内核提供的Surface上。ArkWeb内核再将Surface与网页进行合成并显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该流程与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-same-layer",
        children: "同层渲染"
      }), "绘制一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用启动阶段，应用应保存", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "，以便后续的同层渲染绘制流程能够使用该UIContext。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { window } from '@kit.ArkUI';\n\nexport default class Entry2Ability extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err && err.code) {\n        return;\n      }\n      \n      let mainWindow = windowStage.getMainWindowSync();\n      if (mainWindow) {\n        // 保存UIContext， 在后续的同层渲染绘制中使用。\n        AppStorage.setOrCreate<UIContext>('UIContext', mainWindow.getUIContext());\n      } else {\n        console.error('Failed to get the main window');\n      }\n    });\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用使用ArkWeb内核创建的Surface进行同层渲染绘制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BuilderNode, FrameNode, NodeController, NodeRenderType } from '@kit.ArkUI';\n\ninterface ComponentParams {}\n\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[ComponentParams]> | undefined;\n\n  constructor(surfaceId: string, renderType: NodeRenderType) {\n    super();\n\n    // 获取之前保存的 UIContext 。\n    let uiContext = AppStorage.get<UIContext>(\"UIContext\");\n    this.rootNode = new BuilderNode(uiContext as UIContext, { surfaceId: surfaceId, type: renderType });\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.rootNode) {\n      return this.rootNode.getFrameNode() as FrameNode;\n    }\n    return null;\n  }\n\n  build() {\n    // 构造本地播放器组件\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  node_controller?: MyNodeController;\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State show_native_media_player: boolean = false;\n\n  build() {\n    Column() {\n      Stack({ alignContent: Alignment.TopStart }) {\n        if (this.show_native_media_player) {\n          NodeContainer(this.node_controller)\n            .width(300)\n            .height(150)\n            .backgroundColor(Color.Transparent)\n            .border({ width: 2, color: Color.Orange })\n        }\n        Web({ src: 'www.example.com', controller: this.controller })\n          .enableNativeMediaPlayer({ enable: true, shouldOverlay: false })\n          .onPageBegin((event) => {\n            this.controller.onCreateNativeMediaPlayer((handler: webview.NativeMediaPlayerHandler, mediaInfo: webview.MediaInfo) => {\n              // 接管当前的媒体。\n              // 使用同层渲染流程提供的 surface 来构造一个本地播放器组件。\n              this.node_controller = new MyNodeController(mediaInfo.surfaceInfo.id, NodeRenderType.RENDER_TYPE_TEXTURE);\n              this.node_controller.build();\n\n              // 展示本地播放器组件。\n              this.show_native_media_player = true;\n\n              // 返回一个本地播放器实例给 ArkWeb 内核。\n              let nativePlayer: webview.NativeMediaPlayerBridge = new NativeMediaPlayerImpl(handler, mediaInfo);\n              return nativePlayer;\n            });\n          })\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["动态创建组件并绘制到Surface上的详细介绍见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-same-layer",
        children: "同层渲染"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行arkweb内核发送给本地播放器的播控命令",
      children: "执行ArkWeb内核发送给本地播放器的播控命令"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便ArkWeb内核对本地播放器进行播控操作，应用需要令本地播放器实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerbridge/arkts-apis-webview-nativemediaplayerbridge",
        children: "NativeMediaPlayerBridge"
      }), "接口，并根据每个接口方法的功能对本地播放器进行相应操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\nclass ActualNativeMediaPlayerListener {\n  constructor(handler: webview.NativeMediaPlayerHandler) {}\n}\n\nclass NativeMediaPlayerImpl implements webview.NativeMediaPlayerBridge {\n  constructor(handler: webview.NativeMediaPlayerHandler, mediaInfo: webview.MediaInfo) {\n    // 1. 创建一个本地播放器的状态监听。\n    let listener: ActualNativeMediaPlayerListener = new ActualNativeMediaPlayerListener(handler);\n    // 2. 创建一个本地播放器。\n    // 3. 监听该本地播放器。\n    // ...\n  }\n\n  updateRect(x: number, y: number, width: number, height: number) {\n    // <video> 标签的位置和大小发生了变化。\n    // 根据该信息变化，作出相应的改变。\n  }\n\n  play() {\n    // 启动本地播放器播放。\n  }\n\n  pause() {\n    // 暂停本地播放器播放。\n  }\n\n  seek(targetTime: number) {\n    // 本地播放器跳转到指定的时间点。\n  }\n\n  release() {\n    // 销毁本地播放器。\n  }\n\n  setVolume(volume: number) {\n    // ArkWeb 内核要求调整本地播放器的音量。\n    // 设置本地播放器的音量。\n  }\n\n  setMuted(muted: boolean) {\n    // 将本地播放器静音或取消静音。\n  }\n\n  setPlaybackRate(playbackRate: number) {\n    // 调整本地播放器的播放速度。\n  }\n\n  enterFullscreen() {\n    // 将本地播放器设置为全屏播放。\n  }\n\n  exitFullscreen() {\n    // 将本地播放器退出全屏播放。\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将本地播放器的状态信息通知给arkweb内核",
      children: "将本地播放器的状态信息通知给ArkWeb内核"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb内核需要本地播放器的状态信息来更新到网页（例如：视频的宽高、播放时间、缓存时间等），因此，应用需要将本地播放器的状态信息通知给ArkWeb内核。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12",
        children: "onCreateNativeMediaPlayer"
      }), "接口中， ArkWeb内核传递一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerhandler/arkts-apis-webview-nativemediaplayerhandler",
        children: "NativeMediaPlayerHandler"
      }), "对象给应用。应用需要通过该对象，将本地播放器的最新状态信息通知给ArkWeb内核。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\nclass ActualNativeMediaPlayerListener {\n  handler: webview.NativeMediaPlayerHandler;\n\n  constructor(handler: webview.NativeMediaPlayerHandler) {\n    this.handler = handler;\n  }\n\n  onPlaying() {\n    // 本地播放器开始播放。\n    this.handler.handleStatusChanged(webview.PlaybackStatus.PLAYING);\n  }\n  onPaused() {\n    // 本地播放器暂停播放。\n    this.handler.handleStatusChanged(webview.PlaybackStatus.PAUSED);\n  }\n  onSeeking() {\n    // 本地播放器开始执行跳转到目标时间点。\n    this.handler.handleSeeking();\n  }\n  onSeekDone() {\n    // 本地播放器 seek 完成。\n    this.handler.handleSeekFinished();\n  }\n  onEnded() {\n    // 本地播放器播放完成。\n    this.handler.handleEnded();\n  }\n  onVolumeChanged() {\n    // 获取本地播放器的音量。\n    let volume: number = getVolume();\n    this.handler.handleVolumeChanged(volume);\n  }\n  onCurrentPlayingTimeUpdate() {\n    // 更新播放时间。\n    let currentTime: number = getCurrentPlayingTime();\n    // 将时间单位换算成秒。\n    let currentTimeInSeconds = convertToSeconds(currentTime);\n    this.handler.handleTimeUpdate(currentTimeInSeconds);\n  }\n  onBufferedChanged() {\n    // 缓存发生了变化。\n    // 获取本地播放器的缓存时长。\n    let bufferedEndTime: number = getCurrentBufferedTime();\n    // 将时间单位换算成秒。\n    let bufferedEndTimeInSeconds = convertToSeconds(bufferedEndTime);\n    this.handler.handleBufferedEndTimeChanged(bufferedEndTimeInSeconds);\n\n    // 检查缓存状态。\n    // 如果缓存状态发生了变化，则向 ArkWeb 内核通知缓存状态。\n    let lastReadyState: webview.ReadyState = getLastReadyState();\n    let currentReadyState: webview.ReadyState = getCurrentReadyState();\n    if (lastReadyState != currentReadyState) {\n      this.handler.handleReadyStateChanged(currentReadyState);\n    }\n  }\n  onEnterFullscreen() {\n    // 本地播放器进入了全屏状态。\n    let isFullscreen: boolean = true;\n    this.handler.handleFullscreenChanged(isFullscreen);\n  }\n  onExitFullscreen() {\n    // 本地播放器退出了全屏状态。\n    let isFullscreen: boolean = false;\n    this.handler.handleFullscreenChanged(isFullscreen);\n  }\n  onUpdateVideoSize(width: number, height: number) {\n    // 当本地播放器解析出视频宽高时， 通知 ArkWeb 内核。\n    this.handler.handleVideoSizeChanged(width, height);\n  }\n  onDurationChanged(duration: number) {\n    // 本地播放器解析到了新的媒体时长， 通知 ArkWeb 内核。\n    this.handler.handleDurationChanged(duration);\n  }\n  onError(error: webview.MediaError, errorMessage: string) {\n    // 本地播放器出错了，通知 ArkWeb 内核。\n    this.handler.handleError(error, errorMessage);\n  }\n  onNetworkStateChanged(state: webview.NetworkState) {\n    // 本地播放器的网络状态发生了变化， 通知 ArkWeb 内核。\n    this.handler.handleNetworkStateChanged(state);\n  }\n  onPlaybackRateChanged(playbackRate: number) {\n    // 本地播放器的播放速率发生了变化， 通知 ArkWeb 内核。\n    this.handler.handlePlaybackRateChanged(playbackRate);\n  }\n  onMutedChanged(muted: boolean) {\n    // 本地播放器的静音状态发生了变化， 通知 ArkWeb 内核。\n    this.handler.handleMutedChanged(muted);\n  }\n\n  // ... 监听本地播放器其他的状态 ...\n}\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State show_native_media_player: boolean = false;\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .enableNativeMediaPlayer({enable: true, shouldOverlay: false})\n        .onPageBegin((event) => {\n          this.controller.onCreateNativeMediaPlayer((handler: webview.NativeMediaPlayerHandler, mediaInfo: webview.MediaInfo) => {\n            // 接管当前的媒体。\n\n            // 创建一个本地播放器实例。\n            // let nativePlayer: NativeMediaPlayerImpl = new NativeMediaPlayerImpl(handler, mediaInfo);\n\n            // 创建一个本地播放器状态监听对象。\n            let nativeMediaPlayerListener: ActualNativeMediaPlayerListener = new ActualNativeMediaPlayerListener(handler);\n            // 监听本地播放器状态。\n            // nativePlayer.setListener(nativeMediaPlayerListener);\n\n            // 返回这个本地播放器实例给 ArkWeb 内核。\n            return null;\n          });\n        })\n    }\n  }\n}\n\n// stub\nfunction getVolume() {\n  return 1;\n}\nfunction getCurrentPlayingTime() {\n  return 1;\n}\nfunction getCurrentBufferedTime() {\n  return 1;\n}\nfunction convertToSeconds(input: number) {\n  return input;\n}\nfunction getLastReadyState() {\n  return webview.ReadyState.HAVE_NOTHING;\n}\nfunction getCurrentReadyState() {\n  return webview.ReadyState.HAVE_NOTHING;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["涉及网页媒体播放，需在配置文件中配置网络访问权限。添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
            children: "在配置文件中声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/module.json5\n\"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.INTERNET\"\n    }\n  ]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用启动阶段保存", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxxAbility.ets\n\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err && err.code) {\n        return;\n      }\n      \n      let mainWindow = windowStage.getMainWindowSync();\n      if (mainWindow) {\n        // 保存UIContext， 在后续的同层渲染绘制中使用。\n        AppStorage.setOrCreate<UIContext>(\"UIContext\", mainWindow.getUIContext());\n      } else {\n        console.error(\"Failed to get the main window\");\n      }\n    });\n  }\n\n  // ... 其他需要重写的方法 ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用侧代码，视频托管使用示例。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-intro#avplayer",
            children: "AVPlayer"
          }), "托管Web媒体的播放。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BuilderNode, FrameNode, NodeController, NodeRenderType } from '@kit.ArkUI';\nimport { AVPlayerDemo, AVPlayerListener } from './PlayerDemo';\n\n// 实现 webview.NativeMediaPlayerBridge 接口。\n// ArkWeb 内核调用该类的方法来对 NativeMediaPlayer 进行播控。\nclass NativeMediaPlayerImpl implements webview.NativeMediaPlayerBridge {\n  private surfaceId: string;\n  mediaSource: string;\n  private mediaHandler: webview.NativeMediaPlayerHandler;\n  nativePlayerInfo: NativePlayerInfo;\n  nativePlayer: AVPlayerDemo;\n  httpHeaders: Record<string, string>;\n  uiContext?: UIContext;\n\n  constructor(nativePlayerInfo: NativePlayerInfo, handler: webview.NativeMediaPlayerHandler, mediaInfo: webview.MediaInfo, uiContext: UIContext) {\n    this.uiContext = uiContext;\n    console.info(`NativeMediaPlayerImpl.constructor, surface_id[${mediaInfo.surfaceInfo.id}]`);\n    this.nativePlayerInfo = nativePlayerInfo;\n    this.mediaHandler = handler;\n    this.surfaceId = mediaInfo.surfaceInfo.id;\n    this.mediaSource = mediaInfo.mediaSrcList.find((item) => item.source.indexOf('.mp4') > 0)?.source\n      || mediaInfo.mediaSrcList[0].source;\n    this.httpHeaders = mediaInfo.headers;\n    this.nativePlayer = new AVPlayerDemo();\n\n    // 使用同层渲染功能，将视频及其播控组件绘制到网页中\n    this.nativePlayerInfo.node_controller = new MyNodeController(\n      this.nativePlayerInfo, this.surfaceId, this.mediaHandler, this, NodeRenderType.RENDER_TYPE_TEXTURE);\n    this.nativePlayerInfo.node_controller.build();\n    this.nativePlayerInfo.show_native_media_player = true;\n\n    console.info(`NativeMediaPlayerImpl.mediaSource: ${this.mediaSource}, headers: ${JSON.stringify(this.httpHeaders)}`);\n  }\n\n  updateRect(x: number, y: number, width: number, height: number): void {\n    // <video> 标签的位置和大小发生了变化。\n    // 根据该信息变化，作出相应的改变。\n    let width_in_vp = this.uiContext!.px2vp(width);\n    let height_in_vp = this.uiContext!.px2vp(height);\n    console.info(`updateRect(${x}, ${y}, ${width}, ${height}), vp:{${width_in_vp}, ${height_in_vp}}`);\n\n    this.nativePlayerInfo.updateNativePlayerRect(x, y, width, height);\n  }\n\n  play() {\n    // 启动本地播放器播放。\n    console.info('NativeMediaPlayerImpl.play');\n    this.nativePlayer.play();\n  }\n  pause() {\n    // 暂停本地播放器播放。\n    console.info('NativeMediaPlayerImpl.pause');\n    this.nativePlayer.pause();\n  }\n  seek(targetTime: number) {\n    // 本地播放器跳转到指定的时间点。\n    console.info(`NativeMediaPlayerImpl.seek(${targetTime})`);\n    this.nativePlayer.seek(targetTime);\n  }\n  setVolume(volume: number) {\n    // ArkWeb 内核要求调整本地播放器的音量。\n    // 设置本地播放器的音量。\n    console.info(`NativeMediaPlayerImpl.setVolume(${volume})`);\n    this.nativePlayer.setVolume(volume);\n  }\n  setMuted(muted: boolean) {\n    // 将本地播放器静音或取消静音。\n    console.info(`NativeMediaPlayerImpl.setMuted(${muted})`);\n  }\n  setPlaybackRate(playbackRate: number) {\n    // 调整本地播放器的播放速度。\n    console.info(`NativeMediaPlayerImpl.setPlaybackRate(${playbackRate})`);\n    this.nativePlayer.setPlaybackRate(playbackRate);\n  }\n  release() {\n    // 销毁本地播放器。\n    console.info('NativeMediaPlayerImpl.release');\n    this.nativePlayer?.release();\n    this.nativePlayerInfo.show_native_media_player = false;\n    this.nativePlayerInfo.node_width = 300;\n    this.nativePlayerInfo.node_height = 150;\n    this.nativePlayerInfo.destroyed();\n  }\n  enterFullscreen() {\n    // 将本地播放器设置为全屏播放。\n    console.info('NativeMediaPlayerImpl.enterFullscreen');\n  }\n  exitFullscreen() {\n    // 将本地播放器退出全屏播放。\n    console.info('NativeMediaPlayerImpl.exitFullscreen');\n  }\n}\n\n// 监听NativeMediaPlayer的状态，然后通过 webview.NativeMediaPlayerHandler 将状态上报给 ArkWeb 内核。\nclass AVPlayerListenerImpl implements AVPlayerListener {\n  handler: webview.NativeMediaPlayerHandler;\n  component: NativePlayerComponent;\n\n  constructor(handler: webview.NativeMediaPlayerHandler, component: NativePlayerComponent) {\n    this.handler = handler;\n    this.component = component;\n  }\n  onPlaying() {\n    // 通知ArkWeb内核，本地播放器开始播放\n    console.info('AVPlayerListenerImpl.onPlaying');\n    this.handler.handleStatusChanged(webview.PlaybackStatus.PLAYING);\n  }\n  onPaused() {\n    // 通知ArkWeb内核，本地播放器暂停播放\n    console.info('AVPlayerListenerImpl.onPaused');\n    this.handler.handleStatusChanged(webview.PlaybackStatus.PAUSED);\n  }\n  onDurationChanged(duration: number) {\n    // 通知ArkWeb内核，本地播放器解析到了新的媒体时长\n    console.info(`AVPlayerListenerImpl.onDurationChanged(${duration})`);\n    this.handler.handleDurationChanged(duration);\n  }\n  onBufferedTimeChanged(buffered: number) {\n    // 通知ArkWeb内核，本地播放器的缓存时长变化\n    console.info(`AVPlayerListenerImpl.onBufferedTimeChanged(${buffered})`);\n    this.handler.handleBufferedEndTimeChanged(buffered);\n  }\n  onTimeUpdate(time: number) {\n    // 通知ArkWeb内核，本地播放进度发生变化\n    this.handler.handleTimeUpdate(time);\n  }\n  onEnded() {\n    // 通知ArkWeb内核，本地播放器播放完成\n    console.info('AVPlayerListenerImpl.onEnded');\n    this.handler.handleEnded();\n  }\n  onError() {\n    // 通知ArkWeb内核，本地播放器出错了\n    console.info('AVPlayerListenerImpl.onError');\n    this.component.has_error = true;\n    setTimeout(()=>{\n      this.handler.handleError(1, \"Oops!\");\n    }, 200);\n  }\n  onVideoSizeChanged(width: number, height: number) {\n    // 通知ArkWeb内核，视频尺寸发生变化\n    console.info(`AVPlayerListenerImpl.onVideoSizeChanged(${width}, ${height})`);\n    this.handler.handleVideoSizeChanged(width, height);\n    this.component.onSizeChanged(width, height);\n  }\n  onDestroyed(): void {\n    // 播放器销毁\n    console.info('AVPlayerListenerImpl.onDestroyed');\n  }\n}\n\ninterface ComponentParams {\n  text: string;\n  text2: string;\n  playerInfo: NativePlayerInfo;\n  handler: webview.NativeMediaPlayerHandler;\n  player: NativeMediaPlayerImpl;\n}\n\n// 自定义的播放器组件\n@Component\nstruct NativePlayerComponent {\n  params?: ComponentParams;\n  @State bgColor: Color = Color.Red;\n  mXComponentController: XComponentController = new XComponentController();\n\n  videoController: VideoController = new VideoController();\n  offset_x: number = 0;\n  offset_y: number = 0;\n  @State video_width_percent: number = 100;\n  @State video_height_percent: number = 100;\n  view_width: number = 0;\n  view_height: number = 0;\n  video_width: number = 0;\n  video_height: number = 0;\n\n  fullscreen: boolean = false;\n  @State has_error: boolean = false;\n\n  onSizeChanged(width: number, height: number) {\n    // 更新播放区域比例\n    this.video_width = width;\n    this.video_height = height;\n    let scale: number = this.view_width / width;\n    let scaled_video_height: number = scale * height;\n    this.video_height_percent = scaled_video_height / this.view_height * 100;\n    console.info(`NativePlayerComponent.onSizeChanged(${width},${height}), video_height_percent[${this.video_height_percent }]`);\n  }\n\n  build() {\n    Column() {\n      Stack() {\n        XComponent({ id: 'video_player_id', type: XComponentType.SURFACE, controller: this.mXComponentController })\n          .width(this.video_width_percent + '%')\n          .height(this.video_height_percent + '%')\n          .onLoad(()=>{\n            if (!this.params) {\n              console.info('this.params is null');\n              return;\n            }\n            console.info('NativePlayerComponent.onLoad, params[' + this.params\n              + '], text[' + this.params.text + '], text2[' + this.params.text2\n              + '], web_tab[' + this.params.playerInfo + '], handler[' + this.params.handler + ']');\n            // 设置Surface ID到播放器\n            this.params.player.nativePlayer.setSurfaceID(this.mXComponentController.getXComponentSurfaceId());\n\n            this.params.player.nativePlayer.avPlayerLiveDemo({\n              url: this.params.player.mediaSource,\n              listener: new AVPlayerListenerImpl(this.params.handler, this),\n              httpHeaders: this.params.player.httpHeaders,\n            });\n          })\n        Column() {\n          Row() {\n            Button(this.params?.text)\n              .height(50)\n              .border({ width: 2, color: Color.Red })\n              .backgroundColor(this.bgColor)\n              .onClick(()=>{\n                console.info(`NativePlayerComponent.Button[${this.params?.text}] is clicked`);\n                this.params?.player.nativePlayer?.play();\n              })\n              .onTouch((event: TouchEvent) => {\n                event.stopPropagation();\n              })\n            Button(this.params?.text2)\n              .height(50)\n              .border({ width: 2, color: Color.Red })\n              .onClick(()=>{\n                console.info(`NativePlayerComponent.Button[${this.params?.text2}] is clicked`);\n                this.params?.player.nativePlayer?.pause();\n              })\n              .onTouch((event: TouchEvent) => {\n                event.stopPropagation();\n              })\n          }\n          .width('100%')\n          .justifyContent(FlexAlign.SpaceEvenly)\n        }\n        if (this.has_error) {\n          Column() {\n            Text('Error')\n              .fontSize(30)\n          }\n          .backgroundColor('#eb5555')\n          .width('100%')\n          .height('100%')\n          .justifyContent(FlexAlign.Center)\n        }\n      }\n    }\n    .width('100%')\n    .height('100%')\n    .onAreaChange((oldValue: Area, newValue: Area) => {\n      // 当组件区域发生变化时触发\n      console.info(`NativePlayerComponent.onAreaChange(${JSON.stringify(oldValue)}, ${JSON.stringify(newValue)})`);\n      this.view_width = new Number(newValue.width).valueOf();\n      this.view_height = new Number(newValue.height).valueOf();\n      this.onSizeChanged(this.video_width, this.video_height);\n    })\n  }\n}\n\n@Builder\nfunction NativePlayerComponentBuilder(params: ComponentParams) {\n  NativePlayerComponent({ params: params })\n    .backgroundColor(Color.Green)\n    .border({ width: 1, color: Color.Brown })\n    .width('100%')\n    .height('100%')\n}\n\n// 通过 NodeController 动态创建自定义的播放器组件， 并将组件内容绘制到 surface 上。\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[ComponentParams]> | undefined;\n  playerInfo: NativePlayerInfo;\n  listener: webview.NativeMediaPlayerHandler;\n  player: NativeMediaPlayerImpl;\n\n  constructor(playerInfo: NativePlayerInfo,\n              surfaceId: string,\n              listener: webview.NativeMediaPlayerHandler,\n              player: NativeMediaPlayerImpl,\n              renderType: NodeRenderType) {\n    super();\n    this.playerInfo = playerInfo;\n    this.listener = listener;\n    this.player = player;\n    let uiContext = AppStorage.get<UIContext>(\"UIContext\");\n    this.rootNode = new BuilderNode(uiContext as UIContext, { surfaceId: surfaceId, type: renderType });\n    console.info(`MyNodeController, rootNode[${this.rootNode}], playerInfo[${playerInfo}], listener[${listener}], surfaceId[${surfaceId}]`);\n  }\n\n  makeNode(): FrameNode | null {\n    if (this.rootNode) {\n      return this.rootNode.getFrameNode() as FrameNode;\n    }\n    return null;\n  }\n\n  build() {\n    let params: ComponentParams = {\n      \"text\": \"play\",\n      \"text2\": \"pause\",\n      playerInfo: this.playerInfo,\n      handler: this.listener,\n      player: this.player\n    };\n    if (this.rootNode) {\n      this.rootNode.build(wrapBuilder(NativePlayerComponentBuilder), params);\n    }\n  }\n\n  postTouchEvent(event: TouchEvent) {\n    return this.rootNode?.postTouchEvent(event);\n  }\n}\n\nclass Rect {\n  x: number = 0;\n  y: number = 0;\n  width: number = 0;\n  height: number = 0;\n\n  static toNodeRect(rectInPx: webview.RectEvent, uiContext: UIContext) : Rect {\n    let rect = new Rect();\n    rect.x = uiContext.px2vp(rectInPx.x);\n    rect.y = uiContext.px2vp(rectInPx.y);\n    rect.width = uiContext.px2vp(rectInPx.width);\n    rect.height = uiContext.px2vp(rectInPx.height);\n    return rect;\n  }\n}\n\n@Observed\nclass NativePlayerInfo {\n  public web: WebComponent;\n  public embed_id: string;\n  public player: webview.NativeMediaPlayerBridge;\n  public node_controller?: MyNodeController;\n  public show_native_media_player: boolean = false;\n  public node_pos_x: number;\n  public node_pos_y: number;\n  public node_width: number;\n  public node_height: number;\n\n  playerComponent?: NativeMediaPlayerComponent;\n\n  constructor(web: WebComponent, handler: webview.NativeMediaPlayerHandler, videoInfo: webview.MediaInfo, uiContext: UIContext) {\n    this.web = web;\n    this.embed_id = videoInfo.embedID;\n\n    let node_rect = Rect.toNodeRect(videoInfo.surfaceInfo.rect, uiContext);\n    this.node_pos_x = node_rect.x;\n    this.node_pos_y = node_rect.y;\n    this.node_width = node_rect.width;\n    this.node_height = node_rect.height;\n\n    this.player = new NativeMediaPlayerImpl(this, handler, videoInfo, uiContext);\n  }\n\n  updateNativePlayerRect(x: number, y: number, width: number, height: number) {\n    // 更新播放器的位置和大小\n    this.playerComponent?.updateNativePlayerRect(x, y, width, height);\n  }\n\n  destroyed() {\n    let info_list = this.web.native_player_info_list;\n    console.info(`NativePlayerInfo[${this.embed_id}] destroyed, list.size[${info_list.length}]`);\n    this.web.native_player_info_list = info_list.filter((item) => item.embed_id != this.embed_id);\n    console.info(`NativePlayerInfo after destroyed, new_list.size[${this.web.native_player_info_list.length}]`);\n  }\n}\n\n@Component\nstruct NativeMediaPlayerComponent {\n  @ObjectLink playerInfo: NativePlayerInfo;\n\n  aboutToAppear() {\n    this.playerInfo.playerComponent = this;\n  }\n\n  build() {\n    NodeContainer(this.playerInfo.node_controller)\n      .width(this.playerInfo.node_width)\n      .height(this.playerInfo.node_height)\n      .offset({x: this.playerInfo.node_pos_x, y: this.playerInfo.node_pos_y})\n      .backgroundColor(Color.Transparent)\n      .border({ width: 2, color: Color.Orange })\n      .onAreaChange((oldValue, newValue) => {\n        console.info(`NodeContainer[${this.playerInfo.embed_id}].onAreaChange([${oldValue.width} x ${oldValue.height}]->[${newValue.width} x ${newValue.height}]`);\n      })\n  }\n\n  updateNativePlayerRect(x: number, y: number, width: number, height: number) {\n    let node_rect = Rect.toNodeRect({x, y, width, height}, this.getUIContext());\n    this.playerInfo.node_pos_x = node_rect.x;\n    this.playerInfo.node_pos_y = node_rect.y;\n    this.playerInfo.node_width = node_rect.width;\n    this.playerInfo.node_height = node_rect.height;\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: WebviewController = new webview.WebviewController();\n  page_url: Resource = $rawfile('main.html');\n\n  @State native_player_info_list: NativePlayerInfo[] = [];\n\n  area?: Area;\n\n  build() {\n    Column() {\n      Stack({alignContent: Alignment.TopStart}) {\n        ForEach(this.native_player_info_list, (item: NativePlayerInfo) => {\n          if (item.show_native_media_player) {\n            NativeMediaPlayerComponent({ playerInfo: item })\n          }\n        }, (item: NativePlayerInfo) => {\n          return item.embed_id;\n        })\n        Web({ src: this.page_url, controller: this.controller })\n          .enableNativeMediaPlayer({ enable: true, shouldOverlay: true })\n          .onPageBegin(() => {\n            // 页面开始加载时，注册播放器创建回调\n            this.controller.onCreateNativeMediaPlayer((handler: webview.NativeMediaPlayerHandler, mediaInfo: webview.MediaInfo) => {\n              console.info('onCreateNativeMediaPlayer(' + JSON.stringify(mediaInfo) + ')');\n              let nativePlayerInfo = new NativePlayerInfo(this, handler, mediaInfo, this.getUIContext());\n              this.native_player_info_list.push(nativePlayerInfo);\n              return nativePlayerInfo.player;\n            });\n          })\n          .onNativeEmbedGestureEvent((event)=>{\n            // 处理触摸事件\n            if (!event.touchEvent || !event.embedId) {\n              event.result?.setGestureEventResult(false);\n              return;\n            }\n            console.info(`WebComponent.onNativeEmbedGestureEvent, embedId[${event.embedId}]`);\n            // 查找对应的播放器信息\n            let native_player_info = this.getNativePlayerInfoByEmbedId(event.embedId);\n            if (!native_player_info) {\n              console.info(`WebComponent.onNativeEmbedGestureEvent, embedId[${event.embedId}], no native_player_info`);\n              event.result?.setGestureEventResult(false);\n              return;\n            }\n            if (!native_player_info.node_controller) {\n              console.info(`WebComponent.onNativeEmbedGestureEvent, embedId[${event.embedId}], no node_controller`);\n              event.result?.setGestureEventResult(false);\n              return;\n            }\n            // 将触摸事件传递给NodeContrloller\n            let ret = native_player_info.node_controller.postTouchEvent(event.touchEvent);\n            console.info(`WebComponent.postTouchEvent, ret[${ret}], touchEvent[${JSON.stringify(event.touchEvent)}]`);\n            event.result?.setGestureEventResult(ret);\n          })\n          .width('100%')\n          .height('100%')\n          .onAreaChange((oldValue: Area, newValue: Area) => {\n            oldValue;\n            this.area = newValue;\n          })\n      }\n    }\n  }\n\n  getNativePlayerInfoByEmbedId(embedId: string) : NativePlayerInfo | undefined {\n    return this.native_player_info_list.find((item)=> item.embed_id == embedId);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码，视频播放示例, ./PlayerDemo.ets。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport interface AVPlayerListener {\n  onPlaying() : void;\n  onPaused() : void;\n  onDurationChanged(duration: number) : void;\n  onBufferedTimeChanged(buffered: number) : void;\n  onTimeUpdate(time: number) : void;\n  onEnded() : void;\n  onError() : void;\n  onVideoSizeChanged(width: number, height: number): void;\n  onDestroyed(): void;\n}\n\ninterface PlayerParam {\n  url: string;\n  listener?: AVPlayerListener;\n  httpHeaders?: Record<string, string>;\n}\n\ninterface PlayCommand {\n  func: Function;\n  name?: string;\n}\n\ninterface CheckPlayCommandResult {\n  ignore: boolean;\n  index_to_remove: number;\n}\n\nexport class AVPlayerDemo {\n  private surfaceID: string = ''; // surfaceID用于播放画面显示，具体的值需要通过Xcomponent接口获取，相关文档链接见上面Xcomponent创建方法\n\n  avPlayer?: media.AVPlayer;\n  prepared: boolean = false;\n\n  commands: PlayCommand[] = [];\n\n  setSurfaceID(surface_id: string) {\n    console.info(`AVPlayerDemo.setSurfaceID : ${surface_id}`);\n    this.surfaceID = surface_id;\n  }\n  // 注册avplayer回调函数\n  setAVPlayerCallback(avPlayer: media.AVPlayer, listener?: AVPlayerListener) {\n    // seek操作结果回调函数\n    avPlayer.on('seekDone', (seekDoneTime: number) => {\n      console.info(`AVPlayer seek succeeded, seek time is ${seekDoneTime}`);\n    });\n    // error回调监听函数,当avPlayer在操作过程中出现错误时调用reset接口触发重置流程\n    avPlayer.on('error', (err: BusinessError) => {\n      console.error(`Invoke avPlayer failed, code is ${err.code}, message is ${err.message}`);\n      listener?.onError();\n      avPlayer.reset(); // 调用reset重置资源，触发idle状态\n    });\n    // 状态机变化回调函数\n    avPlayer.on('stateChange', async (state: string, reason: media.StateChangeReason) => {\n      switch (state) {\n        case 'idle': // 成功调用reset接口后触发该状态机上报\n          console.info('AVPlayer state idle called.');\n          avPlayer.release(); // 调用release接口销毁实例对象\n          break;\n        case 'initialized': // avplayer 设置播放源后触发该状态上报\n          console.info('AVPlayer state initialized called.');\n          avPlayer.surfaceId = this.surfaceID; // 设置显示画面，当播放的资源为纯音频时无需设置\n          avPlayer.prepare();\n          break;\n        case 'prepared': // prepare调用成功后上报该状态机\n          console.info('AVPlayer state prepared called.');\n          this.prepared = true;\n          this.schedule();\n          break;\n        case 'playing': // play成功调用后触发该状态机上报\n          console.info('AVPlayer state playing called.');\n          listener?.onPlaying();\n          break;\n        case 'paused': // pause成功调用后触发该状态机上报\n          console.info('AVPlayer state paused called.');\n          listener?.onPaused();\n          break;\n        case 'completed': // 播放结束后触发该状态机上报\n          console.info('AVPlayer state completed called.');\n          avPlayer.stop(); // 调用播放结束接口\n          break;\n        case 'stopped': // stop接口成功调用后触发该状态机上报\n          console.info('AVPlayer state stopped called.');\n          listener?.onEnded();\n          break;\n        case 'released':\n          this.prepared = false;\n          listener?.onDestroyed();\n          console.info('AVPlayer state released called.');\n          break;\n        default:\n          console.info('AVPlayer state unknown called.');\n          break;\n      }\n    });\n    avPlayer.on('durationUpdate', (duration: number) => {\n      console.info(`AVPlayer state durationUpdate success,new duration is :${duration}`);\n      listener?.onDurationChanged(duration/1000);\n    });\n    avPlayer.on('timeUpdate', (time:number) => {\n      listener?.onTimeUpdate(time/1000);\n    });\n    avPlayer.on('bufferingUpdate', (infoType: media.BufferingInfoType, value: number) => {\n      console.info(`AVPlayer state bufferingUpdate success,and infoType value is:${infoType}, value is : ${value}`);\n      listener?.onBufferedTimeChanged(value);\n    })\n    avPlayer.on('videoSizeChange', (width: number, height: number) => {\n      console.info(`AVPlayer state videoSizeChange success,and width is:${width}, height is : ${height}`);\n      listener?.onVideoSizeChanged(width, height);\n    })\n  }\n\n  // 以下示例通过URL设置网络地址来播放直播码流\n  async avPlayerLiveDemo(playerParam: PlayerParam) {\n    // 创建avPlayer实例对象\n    this.avPlayer = await media.createAVPlayer();\n    // 创建状态机变化回调函数\n    this.setAVPlayerCallback(this.avPlayer, playerParam.listener);\n\n    let mediaSource: media.MediaSource = media.createMediaSourceWithUrl(playerParam.url, playerParam.httpHeaders);\n    let strategy: media.PlaybackStrategy = {\n      preferredWidth: 100,\n      preferredHeight: 100,\n      preferredBufferDuration: 100,\n      preferredHdr: false\n    };\n    this.avPlayer.setMediaSource(mediaSource, strategy);\n    console.info(`AVPlayer url:[${playerParam.url}]`);\n  }\n\n  // 按顺序执行待处理的播放控制命令\n  schedule() {\n    if (!this.avPlayer) {\n      return;\n    }\n    if (!this.prepared) {\n      return;\n    }\n    if (this.commands.length > 0) {\n      let command = this.commands.shift();\n      if (command) {\n        command.func();\n      }\n      if (this.commands.length > 0) {\n        setTimeout(() => {\n          this.schedule();\n        });\n      }\n    }\n  }\n\n  private checkCommand(selfName: string, oppositeName: string) {\n    let index_to_remove = -1;\n    let ignore_this_action = false;\n    let index = this.commands.length - 1;\n    while (index >= 0) {\n      if (this.commands[index].name == selfName) {\n        ignore_this_action = true;\n        break;\n      }\n      if (this.commands[index].name == oppositeName) {\n        index_to_remove = index;\n        break;\n      }\n      index--;\n    }\n\n    let result : CheckPlayCommandResult = {\n      ignore: ignore_this_action,\n      index_to_remove: index_to_remove,\n    };\n    return result;\n  }\n\n  // 执行播放命令\n  play() {\n    let commandName = 'play';\n    let checkResult = this.checkCommand(commandName, 'pause');\n    if (checkResult.ignore) {\n      console.info(`AVPlayer ${commandName} ignored.`);\n      this.schedule();\n      return;\n    }\n    if (checkResult.index_to_remove >= 0) {\n      let removedCommand = this.commands.splice(checkResult.index_to_remove, 1);\n      console.info(`AVPlayer ${JSON.stringify(removedCommand)} removed.`);\n      return;\n    }\n    this.commands.push({ func: ()=>{\n      console.info('AVPlayer.play()');\n      this.avPlayer?.play();\n    }, name: commandName});\n    this.schedule();\n  }\n  // 执行暂停命令\n  pause() {\n    let commandName = 'pause';\n    let checkResult = this.checkCommand(commandName, 'play');\n    console.info(`checkResult:${JSON.stringify(checkResult)}`);\n    if (checkResult.ignore) {\n      console.info(`AVPlayer ${commandName} ignored.`);\n      this.schedule();\n      return;\n    }\n    if (checkResult.index_to_remove >= 0) {\n      let removedCommand = this.commands.splice(checkResult.index_to_remove, 1);\n      console.info(`AVPlayer ${JSON.stringify(removedCommand)} removed.`);\n      return;\n    }\n    this.commands.push({ func: ()=>{\n      console.info('AVPlayer.pause()');\n      this.avPlayer?.pause();\n    }, name: commandName});\n    this.schedule();\n  }\n  // 执行资源释放命令\n  release() {\n    this.commands.push({ func: ()=>{\n      console.info('AVPlayer.release()');\n      this.avPlayer?.release();\n    }});\n    this.schedule();\n  }\n  // 执行跳转命令\n  seek(time: number) {\n    this.commands.push({ func: ()=>{\n      console.info(`AVPlayer.seek(${time})`);\n      this.avPlayer?.seek(time * 1000);\n    }});\n    this.schedule();\n  }\n  // 执行设置音量命令\n  setVolume(volume: number) {\n    this.commands.push({ func: ()=>{\n      console.info(`AVPlayer.setVolume(${volume})`);\n      this.avPlayer?.setVolume(volume);\n    }});\n    this.schedule();\n  }\n  // 执行设置播放速度命令\n  setPlaybackRate(playbackRate: number) {\n    let speed = media.PlaybackSpeed.SPEED_FORWARD_1_00_X;\n    let delta = 0.05;\n    playbackRate += delta;\n    if (playbackRate < 1) {\n      speed = media.PlaybackSpeed.SPEED_FORWARD_0_75_X;\n    } else if (playbackRate < 1.25) {\n      speed = media.PlaybackSpeed.SPEED_FORWARD_1_00_X;\n    } else if (playbackRate < 1.5) {\n      speed = media.PlaybackSpeed.SPEED_FORWARD_1_25_X;\n    } else if (playbackRate < 2) {\n      speed = media.PlaybackSpeed.SPEED_FORWARD_1_75_X;\n    } else {\n      speed = media.PlaybackSpeed.SPEED_FORWARD_2_00_X;\n    }\n    this.commands.push({ func: ()=>{\n      console.info(`AVPlayer.setSpeed(${speed})`);\n      this.avPlayer?.setSpeed(speed);\n    }});\n    this.schedule();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前端页面示例。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-intro#avplayer",
            children: "AVPlayer"
          }), "托管Web媒体的播放，支持的媒体资源可以参考AVPlayer", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-intro#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E4%B8%8E%E5%8D%8F%E8%AE%AE",
            children: "支持的格式与协议"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- main.html -->\n<html>\n<head>\n    <title>视频托管测试html</title>\n    <meta name=\"viewport\" content=\"width=device-width\">\n</head>\n<body>\n<div>\n    <!-- 使用时需要自行替换视频链接 -->\n    <video src='https://xxx.xxx/demo.mp4' style='width: 100%'></video>\n</div>\n</body>\n</html>\n"
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
3002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798582-f94a5a222efde27e3d38507fe2e17e30.png");

},
811473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438277-77b8c0027030e0c0542a5fc07b1dca98.png");

},
117299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
519994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478231-20a63da29d653233e765674a05d02c48.png");

},
402691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
552152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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