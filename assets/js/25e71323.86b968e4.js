"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["173686"], {
828521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_common_components_video_player_arkts_common_components_video_player_md_25e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-media-display-arkts-common-components-video-player-arkts-common-components-video-player-md-25e.json
var site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_common_components_video_player_arkts_common_components_video_player_md_25e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player/arkts-common-components-video-player","title":"视频播放 (Video)","description":"Video组件用于播放视频文件并控制其播放状态，常用于短视频和应用内部视频的列表页面。当视频完整出现时会自动播放，用户点击视频区域则会暂停播放，同时显示播放进度条，通过拖动播放进度条指定视频播放到具体位置。具体用法请参考Video。","source":"@site/docs/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player/arkts-common-components-video-player.md","sourceDirName":"arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player","slug":"/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"视频播放 (Video)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-video-player","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"显示图片 (Image)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display/"},"next":{"title":"创建轮播 (Swiper)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player/arkts-common-components-video-player.md


const frontMatter = {
	title: '视频播放 (Video)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-video-player',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '视频播放 (Video)';

const assets = {

};



const toc = [{
  "value": "创建视频组件",
  "id": "创建视频组件",
  "level": 2
}, {
  "value": "加载视频资源",
  "id": "加载视频资源",
  "level": 2
}, {
  "value": "加载本地视频",
  "id": "加载本地视频",
  "level": 3
}, {
  "value": "加载沙箱路径视频",
  "id": "加载沙箱路径视频",
  "level": 3
}, {
  "value": "加载网络视频",
  "id": "加载网络视频",
  "level": 3
}, {
  "value": "添加属性",
  "id": "添加属性",
  "level": 2
}, {
  "value": "事件调用",
  "id": "事件调用",
  "level": 2
}, {
  "value": "Video控制器使用",
  "id": "video控制器使用",
  "level": 2
}, {
  "value": "其他说明",
  "id": "其他说明",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "视频播放-video",
        children: "视频播放 (Video)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video组件用于播放视频文件并控制其播放状态，常用于短视频和应用内部视频的列表页面。当视频完整出现时会自动播放，用户点击视频区域则会暂停播放，同时显示播放进度条，通过拖动播放进度条指定视频播放到具体位置。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video",
        children: "Video"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建视频组件",
      children: "创建视频组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Video通过调用接口来创建，接口调用形式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Video(value: VideoOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加载视频资源",
      children: "加载视频资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video组件支持加载本地视频和网络视频。具体的数据源配置请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video#videooptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "VideoOptions对象说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "加载本地视频",
      children: "加载本地视频"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通本地视频。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载本地视频时，需在工程资源的rawfile目录中放置视频文件，如下图所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(50003)/* ["default"] */.A) + "",
            width: "263",
            height: "84"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "再使用资源访问符$rawfile()引用视频资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n// ···\n@Component\nexport struct LocalVideo {\n  private controller: VideoController = new VideoController();\n  private previewUris: Resource = $r('app.media.preview');\n  private innerResource: Resource = $rawfile('videoTest.mp4');\n\n  build() {\n    Column() {\n      Video({\n        src: this.innerResource,  // 设置视频源\n        previewUri: this.previewUris, // 设置预览图\n        controller: this.controller // 设置视频控制器，可以控制视频的播放状态\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-overview",
            children: "Data Ability"
          }), "提供的视频路径带有dataability://前缀，使用时确保对应视频资源存在。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n// ...\n@Component\nexport struct LocalVideoTwo {\n  private controller: VideoController = new VideoController();\n  // $r('app.media.preview')需要替换为开发者所需的图像资源文件\n  private previewUris: Resource = $r('app.media.preview');\n  // $rawfile('videoTest.mp4')需要替换为开发者所需的影像资源文件\n  private videoSrc: string = 'dataability://device_id/com.domainname.dataability.videodata/video/10';\n\n  build() {\n    Column() {\n      Video({\n        src: this.videoSrc,\n        previewUri: this.previewUris,\n        controller: this.controller\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "加载沙箱路径视频",
      children: "加载沙箱路径视频"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持file://路径前缀的字符串，用于读取应用沙箱路径内的资源，需要确保应用沙箱目录路径下的文件存在并且有可读权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// ···\n@Component\nexport struct Sandbox {\n  private controller: VideoController = new VideoController();\n  private videoSrc: string = 'file:///data/storage/el2/base/haps/entry/files/show.mp4';\n\n  build() {\n    Column() {\n      Video({\n        src: this.videoSrc,\n        controller: this.controller\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "加载网络视频",
      children: "加载网络视频"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["加载网络视频时，需要申请ohos.permission.INTERNET权限，具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。此时，Video的src属性为网络视频的链接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// ···\n@Component\nexport struct OnlineVideo {\n  private controller: VideoController = new VideoController();\n  private previewUris: Resource = $r('app.media.preview');\n  private videoSrc: string = 'www.example.com/example.mp4'; // 使用时请替换为实际视频加载网址\n\n  build() {\n    Column() {\n      Video({\n        src: this.videoSrc,\n        previewUri: this.previewUris,\n        controller: this.controller\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加属性",
      children: "添加属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video#%E5%B1%9E%E6%80%A7",
        children: "属性"
      }), "主要用于设置视频的播放形式。例如设置视频播放是否静音、播放是否显示控制条等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// ···\n@Component\nexport struct AttributeVideo {\n  private controller: VideoController = new VideoController();\n\n  build() {\n    Column() {\n      Video({\n        controller: this.controller\n      })\n        .muted(false) // 设置是否静音\n        .controls(false) // 设置是否显示默认控制条\n        .autoPlay(false) // 设置是否自动播放\n        .loop(false) // 设置是否循环播放\n        .objectFit(ImageFit.Contain) // 设置视频填充模式\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件调用",
      children: "事件调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video组件回调事件主要包括播放开始、播放暂停、播放结束、播放失败、播放停止、视频准备和操作进度条等事件，除此之外，Video组件也支持通用事件的调用，如点击、触摸等事件的调用。详细事件请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video#%E4%BA%8B%E4%BB%B6",
        children: "事件说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct EventCall {\n  private controller: VideoController = new VideoController();\n  private previewUris: Resource = $r('app.media.preview');\n  private innerResource: Resource = $rawfile('videoTest.mp4');\n\n  build() {\n    Column() {\n      Video({\n        src: this.innerResource,\n        previewUri: this.previewUris,\n        controller: this.controller\n      })\n        .onUpdate((event) => { // 更新事件回调\n        })\n        .onPrepared((event) => { // 准备事件回调\n        })\n        .onError(() => { // 失败事件回调\n        })\n        .onStop(() => { // 停止事件回调\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "video控制器使用",
      children: "Video控制器使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video控制器主要用于控制视频的状态，包括播放、暂停、停止以及设置进度等，详细使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video#videocontroller",
        children: "VideoController使用说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认控制器"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认的控制器支持视频的开始、暂停、进度调整、全屏显示四项基本功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct VideoGuide {\n  @State videoSrc: Resource = $rawfile('videoTest.mp4');\n  @State previewUri: string = 'common/videoIcon.png';\n  @State curRate: PlaybackSpeed = PlaybackSpeed.Speed_Forward_1_00_X;\n\n  build() {\n    Row() {\n      Column() {\n        Video({\n          src: this.videoSrc,\n          previewUri: this.previewUri,\n          currentProgressRate: this.curRate // 设置视频播放倍速\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义控制器"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用自定义的控制器，先关闭默认控制器，然后使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
            children: "Button"
          }), "以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
            children: "Slider"
          }), "等组件进行自定义的控制与显示，适合自定义较强的场景下使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct CustomizedControl {\n  @State videoSrc: Resource = $rawfile('videoTest.mp4');\n  @State previewUri: string = 'common/videoIcon.png';\n  @State curRate: PlaybackSpeed = PlaybackSpeed.Speed_Forward_1_00_X;\n  // 初始化当前时间为0\n  @State currentTime: number = 0;\n  // 初始化持续时间为0\n  @State durationTime: number = 0;\n  controller: VideoController = new VideoController();\n\n  build() {\n    Row() {\n      Column() {\n        Video({\n          src: this.videoSrc,\n          previewUri: this.previewUri,\n          currentProgressRate: this.curRate,\n          controller: this.controller\n        })\n          .controls(false)\n          .autoPlay(true)\n          .onPrepared((event) => {\n            if (event) {\n              this.durationTime = event.duration\n            }\n          })\n          .onUpdate((event) => {\n            if (event) {\n              this.currentTime = event.time\n            }\n          })\n        Row() {\n          Text(JSON.stringify(this.currentTime) + 's')\n          Slider({\n            value: this.currentTime,\n            min: 0,\n            max: this.durationTime\n          })\n            .onChange((value: number, mode: SliderChangeMode) => {\n              this.controller.setCurrentTime(value); // 设置视频播放的进度跳转到value处\n            })\n            .width('90%')\n          Text(JSON.stringify(this.durationTime) + 's')\n        }\n        .opacity(0.8)\n        .width('100%')\n      }\n      .width('100%')\n    }\n    .height('40%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他说明",
      children: "其他说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Video组件已经封装好了视频播放的基础能力，开发者无需进行视频实例的创建，视频信息的设置获取，只需要设置数据源以及基础信息即可播放视频，相对扩展能力较弱。如果开发者想自定义视频播放，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avplayer",
        children: "AVPlayer"
      }), "，下面是一个使用AVPlayer进行播放视频的简单示例，如果需要更详细信息或更复杂功能请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback",
        children: "视频播放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { window } from '@kit.ArkUI';\nimport { AVPlayerController } from '../avplayertool/AVPlayerController';\nimport { emitter } from '@kit.BasicServicesKit';\nimport { CommonConstants, VideoDataType } from  '../common/constants/CommonConstants';\nimport { VideoData } from '../model/VideoData'\nimport { common } from '@kit.AbilityKit'\n\nclass VideoXComponentController extends XComponentController {\n  private avPlayerController: AVPlayerController;\n\n  constructor(avPlayerController: AVPlayerController) {\n    super();\n    this.avPlayerController = avPlayerController;\n  }\n\n  onSurfaceCreated(surfaceId: string): void {\n    let source: VideoData = {\n      type: VideoDataType.RAW_FILE,\n      videoSrc: 'videoTest.mp4'\n    };\n    // 将surfaceId和视频源信息传递给AVPlayer\n    this.avPlayerController.initAVPlayer(source, surfaceId);\n  }\n}\n\nconst MINUTE_UNIT = 60000;\nconst SECOND_UNIT = 1000;\nconst SECOND_TEN = 10;\nfunction timeCover(time: number): string {\n  let min: number = Math.floor(time / MINUTE_UNIT);\n  let second: string = ((time % MINUTE_UNIT) / SECOND_UNIT).toFixed(0);\n  return `${min}:${(Number(second) < SECOND_TEN ? '0' : '') + second}`;\n}\n\n@Entry\n@Component\nstruct XComponentAVPlayer {\n  // 设置视频控制器，可以控制视频的播放状态。\n  @State avPlayerController: AVPlayerController = new AVPlayerController(this.getUIContext().getHostContext()!);\n  // 视频的总时长。\n  @State durationTime: number = 0;\n  // 视频当前进度。\n  @State currentTime: number = 0;\n  // 判断视频是否暂停播放。\n  @State isPause: boolean = true;\n  // 判断视频是否全屏播放。\n  @State isLayoutFullScreen: boolean = false;\n  // 设置XComponent组件控制器。\n  private videoXComponentController: XComponentController = new VideoXComponentController(this.avPlayerController);\n  // 判断窗口是否横屏。\n  @State isLandScape: boolean = false;\n  // 系统导航栏的标识。\n  private WINDOW_SYSTEM_BAR: Array<'status' | 'navigation'> = ['navigation', 'status'];\n  // 窗口宽度。\n  @State windowWidth:number = 0;\n  // 窗口高度。\n  @State windowHeight: number = 0;\n  // 窗口实例。\n  private windowClass: window.Window | null = null;\n\n  // 获取窗口实例。\n  getWindow(): window.Window {\n    const context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    return context.windowStage!.getMainWindowSync();\n  }\n\n  aboutToAppear(): void {\n    this.windowClass = this.getWindow();\n    let properties = this.windowClass.getWindowProperties();\n    let context = this.getUIContext();\n    this.windowWidth = context.px2vp(properties.windowRect.width);\n    this.windowHeight = context.px2vp(properties.windowRect.height);\n    // 获取窗口横竖屏状态及其尺寸。\n    this.windowClass.on('windowSizeChange', (size: window.Size) => {\n      this.isLandScape = size.width > size.height;\n      this.windowWidth = context.px2vp(size.width);\n      this.windowHeight = context.px2vp(size.height);\n    })\n    emitter.on(CommonConstants.AVPLAYER_PREPARED, (res) => {\n      if (res.data) {\n        this.durationTime = this.avPlayerController.durationTime;\n        // 更新视频进度时间。\n        setInterval(() => {\n          this.currentTime = this.avPlayerController.currentTime;\n        }, 1000);\n      }\n    });\n  }\n\n  // 设置沉浸式窗口。\n  setFullScreen(isLayoutFullScreen: boolean) {\n    window.getLastWindow(this.getUIContext().getHostContext()).then((win) => {\n      if (isLayoutFullScreen) {\n        // 设置窗口全屏模式时导航栏、状态栏的可见模式。\n        win.setWindowSystemBarEnable([]);\n      } else {\n        // 设置窗口非全屏模式时导航栏、状态栏的可见模式。\n        win.setWindowSystemBarEnable(this.WINDOW_SYSTEM_BAR);\n      }\n    }).catch((err: string) => {\n      console.error(`setFullScreen failed, message is ${err}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Stack() {\n        XComponent({ type: XComponentType.SURFACE, controller: this.videoXComponentController })\n        Column() {\n          Blank()\n          Column() {\n            Column() {\n              Row() {\n                Row() {\n                  // 设置视频播放或暂停的按钮。\n                  SymbolGlyph(this.isPause ? $r('sys.symbol.pause') : $r('sys.symbol.play_fill'))\n                    .fontSize(30)\n                    .fontWeight(FontWeight.Bolder)\n                    .fontColor([Color.White])\n                    .onClick(() => {\n                      if (this.isPause) {\n                        this.avPlayerController.videoPause();\n                      } else {\n                        this.avPlayerController.videoPlay();\n                      }\n                      this.isPause = !this.isPause;\n                    })\n                  // 视频当前进度。\n                  Text(timeCover(this.currentTime))\n                    .fontColor(Color.White)\n                    .textAlign(TextAlign.End)\n                    .fontWeight(FontWeight.Regular)\n                    .margin({ left: 5 })\n                }\n                Row() {\n                  // 视频进度条。\n                  Slider({\n                    value: this.currentTime,\n                    min: 0,\n                    max: this.durationTime,\n                    style: SliderStyle.OutSet\n                  })\n                    .id('Slider')\n                    .blockColor(Color.White)\n                    .trackColor(Color.Gray)\n                    .selectedColor('#317af7')\n                    .showTips(false)\n                    .onChange((value: number, mode: SliderChangeMode) => {\n                      if (mode === SliderChangeMode.Begin) {\n                        this.avPlayerController.videoPause();\n                      }\n                      this.avPlayerController.videoSeek(value);\n                      this.currentTime = value;\n                      if (mode === SliderChangeMode.End) {\n                        this.isPause = true;\n                        this.avPlayerController.videoPlay();\n                      }\n                    })\n                }\n                .layoutWeight(1)\n                Row() {\n                  // 视频的总时长。\n                  Text(timeCover(this.durationTime))\n                    .fontColor(Color.White)\n                    .fontWeight(FontWeight.Regular)\n                    .margin({ right: 5 })\n                }\n                Row() {\n                  // 设置是否全屏播放的按钮。\n                  SymbolGlyph(this.isLayoutFullScreen ? $r('sys.symbol.arrow_down_right_and_arrow_up_left') : $r('sys.symbol.arrow_up_left_and_arrow_down_right'))\n                    .fontSize(30)\n                    .fontWeight(FontWeight.Bolder)\n                    .fontColor([Color.White])\n                    .onClick(()=> {\n                      this.isLayoutFullScreen = !this.isLayoutFullScreen;\n                      this.setFullScreen(this.isLayoutFullScreen);\n                    })\n                }\n              }\n              .justifyContent(FlexAlign.Center)\n              .padding({ left: 12, right: 20, bottom: 28 })\n              .width('100%')\n            }\n            .backgroundColor(Color.Black)\n          }\n          .justifyContent(FlexAlign.Center)\n        }\n        .width('100%')\n        .height('100%')\n      }\n      .height(this.isLayoutFullScreen ? this.windowHeight : 300)\n      .width(this.isLayoutFullScreen ? this.windowWidth : 300)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/video-show",
          children: "媒体库视频"
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
50003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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