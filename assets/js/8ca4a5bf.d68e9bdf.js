"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["655018"], {
864673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_pipwindow_pipwindow_typenode_pipwindow_typenode_md_8ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-pipwindow-pipwindow-typenode-pipwindow-typenode-md-8ca.json
var site_docs_arkui_window_manager_window_pipwindow_pipwindow_typenode_pipwindow_typenode_md_8ca_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-pipwindow/pipwindow-typenode/pipwindow-typenode","title":"使用typeNode实现画中画功能开发（ArkTS）","description":"- 从API version 12开始，支持使用typeNode实现画中画功能开发。","source":"@site/docs/arkui/window-manager/window-pipwindow/pipwindow-typenode/pipwindow-typenode.md","sourceDirName":"arkui/window-manager/window-pipwindow/pipwindow-typenode","slug":"/arkui/window-manager/window-pipwindow/pipwindow-typenode/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-typenode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用typeNode实现画中画功能开发（ArkTS）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-typenode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用XComponent实现画中画功能开发（ArkTS）","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-xcomponent/"},"next":{"title":"使用NDK接口实现画中画功能开发（C/C++）","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-pipwindow/pipwindow-typenode/pipwindow-typenode.md


const frontMatter = {
	title: '使用typeNode实现画中画功能开发（ArkTS）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-typenode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用typeNode实现画中画功能开发（ArkTS）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "应用使用typeNode自由节点（不添加到布局）实现画中画功能",
  "id": "应用使用typenode自由节点不添加到布局实现画中画功能",
  "level": 2
}, {
  "value": "应用使用router导航时通过typeNode实现画中画功能",
  "id": "应用使用router导航时通过typenode实现画中画功能",
  "level": 2
}, {
  "value": "应用使用Navigation导航时通过typeNode实现画中画功能",
  "id": "应用使用navigation导航时通过typenode实现画中画功能",
  "level": 2
}, {
  "value": "应用使用单界面Ability时通过typeNode实现画中画功能",
  "id": "应用使用单界面ability时通过typenode实现画中画功能",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用typenode实现画中画功能开发arkts",
        children: "使用typeNode实现画中画功能开发（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23683)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 12开始，支持使用typeNode实现画中画功能开发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在HarmonyOS 6.0.0之前，支持在Phone、Tablet设备使用typeNode实现画中画功能开发；从HarmonyOS 6.0.0开始，支持在Phone、PC/2in1、Tablet设备使用typeNode实现画中画功能开发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方式适用于任意场景下应用接入画中画功能，以下根据实际开发场景提供四个示例，分别介绍对应场景下画中画功能的实现步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BA%94%E7%94%A8%E4%BD%BF%E7%94%A8typenode%E8%87%AA%E7%94%B1%E8%8A%82%E7%82%B9%E4%B8%8D%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%B8%83%E5%B1%80%E5%AE%9E%E7%8E%B0%E7%94%BB%E4%B8%AD%E7%94%BB%E5%8A%9F%E8%83%BD",
          children: "应用使用typeNode自由节点（不添加到布局）实现画中画功能"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BA%94%E7%94%A8%E4%BD%BF%E7%94%A8router%E5%AF%BC%E8%88%AA%E6%97%B6%E9%80%9A%E8%BF%87typenode%E5%AE%9E%E7%8E%B0%E7%94%BB%E4%B8%AD%E7%94%BB%E5%8A%9F%E8%83%BD",
          children: "应用使用router导航时通过typeNode实现画中画功能"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BA%94%E7%94%A8%E4%BD%BF%E7%94%A8navigation%E5%AF%BC%E8%88%AA%E6%97%B6%E9%80%9A%E8%BF%87typenode%E5%AE%9E%E7%8E%B0%E7%94%BB%E4%B8%AD%E7%94%BB%E5%8A%9F%E8%83%BD",
          children: "应用使用Navigation导航时通过typeNode实现画中画功能"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BA%94%E7%94%A8%E4%BD%BF%E7%94%A8%E5%8D%95%E7%95%8C%E9%9D%A2ability%E6%97%B6%E9%80%9A%E8%BF%87typenode%E5%AE%9E%E7%8E%B0%E7%94%BB%E4%B8%AD%E7%94%BB%E5%8A%9F%E8%83%BD",
          children: "应用使用单界面Ability时通过typeNode实现画中画功能"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以视频播放为例，介绍通过typeNode实现画中画功能的基本开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中的视频播放器简易实现参考："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// model/AVPlayer.ets\n// 简易播放器实现\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { media } from '@kit.MediaKit';\nimport { Logger } from '../util/LogUtil';\n\nexport class AVPlayer {\n  private avPlayer?: media.AVPlayer;\n  public surfaceID: string = '';\n\n  setAVPlayerCallback() {\n    this.avPlayer?.on('seekDone', (seekDoneTime: number) => {\n      Logger.info(`AVPlayer seek succeeded, seek time is ${seekDoneTime}`);\n    })\n    this.avPlayer?.on('stateChange', async (state, reason) => {\n      if (!this.avPlayer) {\n        return;\n      }\n      switch (state) {\n        case 'idle':\n          this.avPlayer.release();\n          break;\n        case 'initialized':\n          this.avPlayer.surfaceId = this.surfaceID;\n          this.avPlayer.prepare().then(() => {\n            Logger.info('AVPlayer prepare succeeded.');\n          }, (err: BusinessError) => {\n            Logger.error(`Invoke prepare failed, code is ${err.code}, message is ${err.message}`);\n          });\n          break;\n        case 'prepared':\n          this.avPlayer.play();\n          break;\n        case 'stopped':\n          this.avPlayer.reset();\n          break;\n        default:\n          break;\n      }\n    })\n  }\n\n  async avPlayerFdSrc() {\n\n    try {\n      this.avPlayer = await media.createAVPlayer();\n    } catch(err) {\n      Logger.error(`create AVPlayer failed`);\n    };\n    this.setAVPlayerCallback();\n    let uiContext = AppStorage.get('UIContext') as UIContext;\n    let context = uiContext.getHostContext() as common.UIAbilityContext;\n    let fileDescriptor = await context.resourceManager.getRawFd('xxx.mp4');\n\n    if (this.avPlayer) {\n      this.avPlayer.fdSrc = fileDescriptor;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构造PiPConfiguration参数时，建议传入contentWidth和contentHeight参数用以计算画中画初始比例，否则系统将以16:9的比例呈现画中画窗口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "contentNode支持XComponentType.SURFACE类型，且创建typeNode时必须指定为\"XComponent\"类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在关闭画中画时，需要检查自定义组件节点是否释放，避免出现内存泄漏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用使用typenode自由节点不添加到布局实现画中画功能",
      children: "应用使用typeNode自由节点（不添加到布局）实现画中画功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器，注册生命周期事件以及控制事件回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过主窗口UIContext创建typeNode节点。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器实例后，通过startPiP接口启动画中画。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新媒体源尺寸信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { PipManager } from '../nodefree/PipManager';\nimport { Logger } from '../util/LogUtil';\n\nexport default class EntryAbility extends UIAbility {\n// ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    Logger.info('testTag', '%{public}s', 'Ability onWindowStageCreate');\n    let windowClass: window.Window | undefined = undefined;\n    let windowClassId: number = -1;\n\n    windowStage.getMainWindow().then((window) => {\n      if (window == null) {\n        Logger.error('Failed to obtaining the window. Cause: The data is empty');\n        return;\n      }\n      windowClass = window;\n      windowClass.setUIContent('pages/Index');\n      windowClassId = windowClass.getWindowProperties().id;\n      AppStorage.setOrCreate('windowId', windowClassId);\n      Logger.info('Succeeded in obtaining the window')\n\n      let ctx = window.getUIContext();\n      AppStorage.setOrCreate('UIContext', ctx);\n      // 通过主窗口UIContext创建typeNode节点\n      PipManager.getInstance().makeTypeNode(ctx);\n    }).catch((err: BusinessError) => {\n      Logger.error(`Failed to obtaining the window. Cause code: ${err.code}, message: ${err.message}`);\n    });\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        Logger.error('testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      Logger.info('testTag', 'Succeeded in loading the content.');\n    });\n  }\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/Index.ets\n// 应用首页\nimport { router } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pathStack) {\n      Scroll() {\n        Flex({ direction: FlexDirection.Column }) {\n          // ...\n          this.featureButton('使用TypeNode自由节点实现画中画', this.typeNodeFree);\n          // ...\n        }\n      }\n    }\n    .hideBackButton(true)\n    .titleMode(NavigationTitleMode.Mini)\n    .backgroundColor('#FFF1F3F5')\n    .mode(NavigationMode.Stack)\n    .title('画中画SampleCode')\n  }\n\n  @Builder\n  featureButton(buttonText: string, callbackOnClick: () => void) {\n    Button({ type: ButtonType.Normal }) {\n      Row() {\n        Column() {\n          Text(buttonText)\n            .fontSize(24)\n            .fontWeight(FontWeight.Bold)\n            .fontColor('#000000')\n          Rect()\n            .radius(1)\n            .fill('#0A59F7')\n            .height(2)\n            .width(30)\n        }\n        .width('100%')\n        .alignItems(HorizontalAlign.Start)\n      }\n      .width('100%')\n    }\n    .width('90%')\n    .padding('5%')\n    .margin({ top: '3%', bottom: '2%', right: '3%' })\n    .backgroundColor('#FFFFFF')\n    .borderRadius(20)\n    .onClick(callbackOnClick)\n  }\n\n  // ...\n  private typeNodeFree = () => {\n    this.getUIContext().getRouter().pushUrl({ url: 'pages/TypeNodeFreePage' }, router.RouterMode.Standard)\n  }\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/TypeNodeFreePage.ets\n// 该页面用于展示应用布局文件，创建的typeNode节点不会添加到该布局中\nimport { PipManager } from '../nodefree/PipManager';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'TypeNodeFreePage'\n@Entry\n@Component\nstruct TypeNodeFreePage {\n  build() {\n    Column() {\n      Text('This is MainPage')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .margin({ bottom: 20 })\n\n      Text('This is not typeNode')\n        .size({ width: '100%', height: '800px' })\n        .fontSize(30)\n        .textAlign(TextAlign.Center)\n        .fontWeight(FontWeight.Bold)\n        .backgroundColor('#4d5b5858')\n\n      Row({ space: 20 }) {\n        Button('startPip') // 启动画中画\n          .onClick(() => {\n            PipManager.getInstance().startPip();\n          })\n\n        Button('stopPip') // 停止画中画\n          .onClick(() => {\n            PipManager.getInstance().stopPip();\n          })\n\n        Button('updateSize') // 更新视频尺寸\n          .onClick(() => {\n            PipManager.getInstance().updateContentSize(900, 1600);\n          })\n      }\n      .backgroundColor('#4da99797')\n      .size({ width: '100%', height: 60 })\n      .justifyContent(FlexAlign.SpaceAround)\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n\n  aboutToDisappear(): void {\n    PipManager.getInstance().unregisterPipStateChangeListener(); // 注销画中画生命周期及状态回调\n  }\n\n  onPageShow(): void {\n    Logger.info(TAG, 'onPageShow')\n    PipManager.getInstance().init(this.getUIContext().getHostContext() as Context); // 创建画中画控制器\n    PipManager.getInstance().setAutoStart(true); // 设置应用退后台时自动启动画中画\n  }\n\n  onPageHide(): void {\n    Logger.info(TAG, 'onPageHide')\n    PipManager.getInstance().setAutoStart(false);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// nodeFree/PipManager.ets\n// 画中画控制器单例\nimport { PiPWindow, typeNode } from '@kit.ArkUI'; // 引入PiPWindow模块\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AVPlayer} from '../model/AVPlayer';\nimport { Logger } from '../util/LogUtil';\n\n// 自定义XComponentController\nclass CustomXComponentController extends XComponentController {\n  // 监听onSurfaceCreated，并将surfaceId设置给播放器\n  onSurfaceCreated(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);\n    if (PipManager.getInstance().player.surfaceID === surfaceId) {\n      return;\n    }\n    PipManager.getInstance().player.surfaceID = surfaceId;\n    PipManager.getInstance().player.avPlayerFdSrc();\n  }\n\n  onSurfaceDestroyed(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);\n  }\n}\n\nconst TAG = 'PipManager';\n\nexport class PipManager {\n  public player: AVPlayer;\n  private static instance: PipManager = new PipManager();\n  private pipController?: PiPWindow.PiPController = undefined;\n  private mXComponentController: XComponentController;\n  private xComponent: typeNode.XComponent| null = null; // typeNode节点\n\n  public static getInstance(): PipManager {\n    return PipManager.instance;\n  }\n\n  constructor() {\n    this.player = new AVPlayer();\n    this.mXComponentController = new CustomXComponentController();\n  }\n\n  onActionEvent(control: PiPWindow.ControlEventParam) {\n    switch (control.controlType) {\n      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:\n        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {\n          //停止视频\n        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {\n          //播放视频\n        }\n        break;\n      case PiPWindow.PiPControlType.VIDEO_NEXT:\n        // 切换到下一个视频\n        break;\n      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:\n        // 切换到上一个视频\n        break;\n      case PiPWindow.PiPControlType.FAST_FORWARD:\n        // 视频进度快进\n        break;\n      case PiPWindow.PiPControlType.FAST_BACKWARD:\n        // 视频进度后退\n        break;\n      default:\n        break;\n    }\n    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);\n  }\n\n  // 监听画中画生命周期\n  onStateChange(state: PiPWindow.PiPState, reason: string) {\n    let curState: string = '';\n    switch (state) {\n      case PiPWindow.PiPState.ABOUT_TO_START:\n        curState = 'ABOUT_TO_START';\n        break;\n      case PiPWindow.PiPState.STARTED:\n        curState = 'STARTED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_STOP:\n        curState = 'ABOUT_TO_STOP';\n        break;\n      case PiPWindow.PiPState.STOPPED:\n        curState = 'STOPPED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_RESTORE:\n        curState = 'ABOUT_TO_RESTORE';\n        break;\n      case PiPWindow.PiPState.ERROR:\n        curState = 'ERROR';\n        break;\n      default:\n        break;\n    }\n    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);\n  }\n\n  // 注销监听\n  unregisterPipStateChangeListener() {\n    Logger.info(TAG, 'aboutToDisappear');\n    this.pipController?.off('stateChange');\n    this.pipController?.off('controlEvent');\n  }\n\n  getXComponentController(): CustomXComponentController {\n    return this.mXComponentController;\n  }\n\n  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调\n  init(ctx: Context) {\n    if (this.pipController !== null && this.pipController != undefined) {\n      return;\n    }\n    Logger.info(TAG, 'onPageShow');\n    if (!PiPWindow.isPiPEnabled()) {\n      Logger.error(TAG, `picture in picture disabled for current OS`);\n      return;\n    }\n\n    let config: PiPWindow.PiPConfiguration = {\n      context: ctx,\n      componentController: this.getXComponentController(),\n      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,\n      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则将设置为16:9默认比例\n      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则将设置为16:9默认比例\n    };\n    // 通过create接口创建画中画控制器实例\n\n    PiPWindow.create(config, this.xComponent).then((controller: PiPWindow.PiPController) => {\n      this.pipController = controller;\n      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画\n      this.pipController.setAutoStartEnabled(true);\n      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调\n      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {\n        this.onStateChange(state, reason);\n      });\n      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调\n      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {\n        this.onActionEvent(control);\n      });\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤2：创建画中画控制器实例后，通过startPiP接口启动画中画\n  startPip() {\n    this.pipController?.startPiP().then(() => {\n      Logger.info(TAG, `Succeeded in starting pip.`);\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤3：更新媒体源尺寸信息\n  updateContentSize(width: number, height: number) {\n    if (this.pipController) {\n      this.pipController.updateContentSize(width, height);\n    }\n  }\n\n  // 步骤4：关闭画中画\n  stopPip() {\n    if (this.pipController === null || this.pipController === undefined) {\n      return;\n    }\n    let promise: Promise<void> = this.pipController.stopPiP();\n    promise.then(() => {\n      Logger.info(TAG, `Succeeded in stopping pip.`);\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  setAutoStart(autoStart: boolean): void {\n    this.pipController?.setAutoStartEnabled(autoStart);\n  }\n\n  // 创建typeNode节点\n  makeTypeNode(ctx: UIContext) {\n    if (this.xComponent === null || this.xComponent === undefined) {\n      // 创建XComponent类型的typeNode\n      this.xComponent = typeNode.createNode(ctx, 'XComponent', {\n        // 类型设置为SURFACE\n        type: XComponentType.SURFACE,\n        // 设置XComponentController\n        controller: PipManager.getInstance().getXComponentController(),\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例代码对应的示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153949)/* ["default"] */.A) + "",
        width: "240",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用使用router导航时通过typenode实现画中画功能",
      children: "应用使用router导航时通过typeNode实现画中画功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器，注册生命周期事件以及控制事件回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建自定义NodeController，实现makeNode方法，在该方法中创建typeNode。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器实例后，通过startPiP接口启动画中画，在画中画ABOUT_TO_START生命周期将typeNode节点从布局移除，并返回上级界面（可选）。如果启动画中画时返回了上级界面，需要在画中画ABOUT_TO_RESTORE（还原）时重新跳转到原界面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新媒体源尺寸信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画，在画中画ABOUT_TO_STOP生命周期将typeNode节点重新添加到布局中。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { PipManager } from '../nodefree/PipManager';\nimport { Logger } from '../util/LogUtil';\n\nexport default class EntryAbility extends UIAbility {\n// ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ...\n    windowStage.loadContent('pages/Index', (err) => {\n      // ...\n    });\n  }\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/RouterImplementPage.ets\nimport { PipManager } from '../route/PipManager';\nimport { PiPWindow, router, Router } from '@kit.ArkUI'; // 引入PiPWindow模块\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'RouterImplementPage'\n@Entry\n@Component\nstruct RouterImplementPage {\n  private page1: string = 'route/Page1';\n  private pageRouter: Router | null = null;\n\n  // 画中画生命周期事件监听，用于页面及节点操作\n  private callback: Function = (state: PiPWindow.PiPState) => {\n    Logger.info(TAG, `pipStateChange: state ${state}`);\n    if (state === PiPWindow.PiPState.ABOUT_TO_START) {\n      // 返回到上级页面（可选）\n      this.pageRouter?.back();\n    } else if (state === PiPWindow.PiPState.ABOUT_TO_STOP) {\n      // 重新将typeNode节点添加到布局中，例如还原场景\n      PipManager.getInstance().addNode();\n    } else if (state === PiPWindow.PiPState.ABOUT_TO_RESTORE) {\n      // 如果在ABOUT_TO_START时返回了上级界面，需要还原时push到原界面\n      this.jumpNext();\n    }\n  };\n\n  aboutToAppear(): void {\n    this.pageRouter = this.getUIContext().getRouter();\n    PipManager.getInstance().registerLifecycleCallback(this.callback);\n  }\n\n  aboutToDisappear(): void {\n    PipManager.getInstance().unregisterPipStateChangeListener();\n    PipManager.getInstance().unRegisterLifecycleCallback(this.callback);\n  }\n\n  jumpNext(): void {\n    let topPage = this.pageRouter?.getState();\n    if (topPage !== undefined && (this.page1.toString() === topPage.path + topPage.name)) {\n      Logger.info(TAG, `page1 aready at top`)\n      return;\n    }\n    this.pageRouter?.pushUrl({\n      url: this.page1 // 目标url\n    }, router.RouterMode.Standard, (err) => {\n      if (err) {\n        Logger.error(TAG, `Invoke pushUrl failed, code is ${err.code}: ${err.message}`);\n        return;\n      }\n      Logger.info(TAG, 'Invoke pushUrl succeeded.');\n    });\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text('Main Page')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n\n        Button('Jump Next')\n          .onClick(() => {\n            this.jumpNext();\n          })\n          .margin({ top: 16, bottom: 16 })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// route/Page1.ets\nimport { PipManager } from '../route/PipManager';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'Page1';\n\n@Entry\n@Component\nexport struct Page1 {\n  build() {\n    Column() {\n      Text('This is Page1')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .margin({bottom: 20})\n\n      // 将typeNode添加到页面布局中\n      NodeContainer(PipManager.getInstance().getNodeController())\n        .size({ width: '100%', height: '800px' })\n\n      Row({ space: 20 }) {\n        Button('startPip')// 启动画中画\n          .onClick(() => {\n            PipManager.getInstance().startPip();\n          })\n\n        Button('stopPip')// 停止画中画\n          .onClick(() => {\n            PipManager.getInstance().stopPip();\n          })\n\n        Button('updateSize')// 更新视频尺寸\n          .onClick(() => {\n            // 此处设置的宽高应为媒体内容宽高，需要通过媒体相关接口或回调获取\n            // 例如使用AVPlayer播放视频时，可通过videoSizeChange回调获取媒体源更新后的尺寸\n            PipManager.getInstance().updateContentSize(900, 1600);\n          })\n      }\n      .backgroundColor('#4da99797')\n      .size({ width: '100%', height: 60 })\n      .justifyContent(FlexAlign.SpaceAround)\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n\n  onPageShow(): void {\n    Logger.info(TAG, 'onPageShow')\n    PipManager.getInstance().initPipController(this.getUIContext().getHostContext() as Context);\n    PipManager.getInstance().setAutoStart(true);\n  }\n\n  onPageHide(): void {\n    Logger.info(TAG, 'onPageHide')\n    PipManager.getInstance().setAutoStart(false);\n    PipManager.getInstance().removeNode();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// route/PipManager.ets\nimport { PiPWindow, typeNode } from '@kit.ArkUI'; // 引入PiPWindow模块\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { XCNodeController } from './XCNodeController';\nimport { AVPlayer } from '../model/AVPlayer';\nimport { Logger } from '../util/LogUtil';\n\nexport class CustomXComponentController extends XComponentController {\n  onSurfaceCreated(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);\n    if (PipManager.getInstance().player.surfaceID === surfaceId) {\n      return;\n    }\n    // 将surfaceId设置给媒体源\n    PipManager.getInstance().player.surfaceID = surfaceId;\n    PipManager.getInstance().player.avPlayerFdSrc();\n  }\n\n  onSurfaceDestroyed(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);\n  }\n}\n\nconst TAG = 'PipManager';\n\nexport class PipManager {\n  private static instance: PipManager = new PipManager();\n  private pipController?: PiPWindow.PiPController = undefined;\n  private xcNodeController: XCNodeController;\n  private mXComponentController: XComponentController;\n  private lifeCycleCallback: Set<Function> = new Set();\n  public player: AVPlayer;\n\n  public static getInstance(): PipManager {\n    return PipManager.instance;\n  }\n\n  constructor() {\n    this.xcNodeController = new XCNodeController();\n    this.player = new AVPlayer();\n    this.mXComponentController = new CustomXComponentController();\n  }\n\n  public registerLifecycleCallback(callBack: Function) {\n    this.lifeCycleCallback.add(callBack);\n  }\n\n  public unRegisterLifecycleCallback(callBack: Function): void {\n    this.lifeCycleCallback.delete(callBack);\n  }\n\n  getNode(): typeNode.XComponent | null {\n    return this.xcNodeController.getNode();\n  }\n\n  onActionEvent(control: PiPWindow.ControlEventParam) {\n    switch (control.controlType) {\n      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:\n        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {\n          //停止视频\n        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {\n          //播放视频\n        }\n        break;\n      case PiPWindow.PiPControlType.VIDEO_NEXT:\n        // 切换到下一个视频\n        break;\n      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:\n        // 切换到上一个视频\n        break;\n      case PiPWindow.PiPControlType.FAST_FORWARD:\n        // 视频进度快进\n        break;\n      case PiPWindow.PiPControlType.FAST_BACKWARD:\n        // 视频进度后退\n        break;\n      default:\n        break;\n    }\n    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);\n  }\n\n  onStateChange(state: PiPWindow.PiPState, reason: string) {\n    let curState: string = '';\n    this.xcNodeController.setCanAddNode(\n      state === PiPWindow.PiPState.ABOUT_TO_STOP || state === PiPWindow.PiPState.STOPPED)\n    if (this.lifeCycleCallback !== null) {\n      this.lifeCycleCallback.forEach((fun) => {\n        fun(state)\n      });\n    }\n    switch (state) {\n      case PiPWindow.PiPState.ABOUT_TO_START:\n        curState = 'ABOUT_TO_START';\n        // 将typeNode节点从布局移除\n        this.xcNodeController.removeNode();\n        break;\n      case PiPWindow.PiPState.STARTED:\n        curState = 'STARTED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_STOP:\n        curState = 'ABOUT_TO_STOP';\n        this.xcNodeController.dispose();\n        break;\n      case PiPWindow.PiPState.STOPPED:\n        curState = 'STOPPED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_RESTORE:\n        curState = 'ABOUT_TO_RESTORE';\n        break;\n      case PiPWindow.PiPState.ERROR:\n        curState = 'ERROR';\n        break;\n      default:\n        break;\n    }\n    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);\n  }\n\n  unregisterPipStateChangeListener() {\n    Logger.info(`${TAG} aboutToDisappear`)\n    this.pipController?.off('stateChange');\n    this.pipController?.off('controlEvent');\n    this.pipController = undefined;\n  }\n\n  getXComponentController(): CustomXComponentController {\n    return this.mXComponentController;\n  }\n\n  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调\n  initPipController(ctx: Context) {\n    if (this.pipController !== null && this.pipController != undefined) {\n      return;\n    }\n    Logger.info(`${TAG} onPageShow`)\n    if (!PiPWindow.isPiPEnabled()) {\n      Logger.error(TAG, `picture in picture disabled for current OS`);\n      return;\n    }\n    let config: PiPWindow.PiPConfiguration = {\n      context: ctx,\n      componentController: this.getXComponentController(),\n      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,\n      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则创建画中画失败\n      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则创建画中画失败\n    };\n    // 通过create接口创建画中画控制器实例\n\n    PiPWindow.create(config, this.getNode()).then((controller: PiPWindow.PiPController) => {\n      this.pipController = controller;\n      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画\n      this.pipController.setAutoStartEnabled(true)\n      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调\n      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {\n        this.onStateChange(state, reason);\n      });\n      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调\n      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {\n        this.onActionEvent(control);\n      });\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤2：启动画中画\n  startPip() {\n    this.pipController?.startPiP().then(() => {\n      Logger.info(TAG, `Succeeded in starting pip.`);\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤3：更新媒体源尺寸信息\n  updateContentSize(width: number, height: number) {\n    if (this.pipController) {\n      this.pipController.updateContentSize(width, height);\n    }\n  }\n\n  // 步骤4：关闭画中画\n  stopPip() {\n    if (this.pipController) {\n      let promise: Promise<void> = this.pipController.stopPiP();\n      promise.then(() => {\n        Logger.info(TAG, `Succeeded in stopping pip.`);\n      }).catch((err: BusinessError) => {\n        Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);\n      });\n    }\n  }\n\n  getNodeController(): XCNodeController {\n    Logger.info(TAG, `getNodeController.`);\n    return this.xcNodeController;\n  }\n\n  setAutoStart(autoStart: boolean): void {\n    this.pipController?.setAutoStartEnabled(autoStart);\n  }\n\n  removeNode(): void {\n    this.xcNodeController.removeNode();\n  }\n\n  addNode(): void {\n    this.xcNodeController.addNode();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// route/XCNodeController.ets\nimport { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\nimport { PipManager } from './PipManager';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'XCNodeController';\n// 创建自定义NodeController\nexport class XCNodeController extends NodeController {\n  public xComponent: typeNode.XComponent | null = null;\n  private node: FrameNode | null = null;\n  private canAddNode: boolean = true;\n\n  // 设置是否可以添加节点\n  setCanAddNode(canAddNode: boolean) {\n    this.canAddNode = canAddNode;\n  }\n\n  // 实现makeNode方法，当自定义NodeController被添加到布局时，该方法会被调用\n  makeNode(context: UIContext): FrameNode | null {\n    this.node = new FrameNode(context);\n    this.node.commonAttribute\n    if (this.xComponent === null || this.xComponent === undefined) {\n      // 创建XComponent类型的typeNode\n      this.xComponent = typeNode.createNode(context, 'XComponent', {\n        // 类型设置为SURFACE\n        type: XComponentType.SURFACE,\n        // 设置XComponentController\n        controller: PipManager.getInstance().getXComponentController(),\n      });\n    }\n    if (this.canAddNode) {\n\n      try {\n        this.xComponent.getParent()?.removeChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to removeChild');\n      }\n      try {\n        this.node.appendChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to appendChild');\n      }\n    }\n    return this.node;\n  }\n\n  // 重新添加typeNode节点\n  addNode() {\n    if (this.node !== null && this.node !== undefined) {\n      Logger.info(TAG, 'addNode');\n\n      try {\n        this.node.appendChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to appendChild');\n      }\n    }\n  }\n\n  // 移除typeNode节点\n  removeNode() {\n    if (this.node !== null && this.node !== undefined) {\n      Logger.info(TAG, 'removeNode');\n\n      try {\n        this.node.removeChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to removeChild');\n      }\n    }\n  }\n\n  getNode(): typeNode.XComponent | null {\n    Logger.info(TAG, 'getNode is null: '+ (this.xComponent === null || this.xComponent === undefined));\n    return this.xComponent;\n  }\n\n  // 开发者需要定义该方法实现布局的注销，避免内存泄漏\n  dispose() {\n    Logger.info(TAG, 'execute node dispose');\n    if (this.node !== null) {\n      this.node.dispose();\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例代码对应的示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(923602)/* ["default"] */.A) + "",
        width: "240",
        height: "343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用使用navigation导航时通过typenode实现画中画功能",
      children: "应用使用Navigation导航时通过typeNode实现画中画功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器，注册生命周期事件以及控制事件回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建自定义NodeController，实现makeNode方法，在该方法中创建typeNode。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器实例后，通过startPiP接口启动画中画，在画中画ABOUT_TO_START生命周期将typeNode节点从布局移除，并返回上级界面（可选）。如果启动画中画时返回了上级界面，需要在画中画ABOUT_TO_RESTORE（还原）时重新跳转到原界面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新媒体源尺寸信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画，在画中画ABOUT_TO_STOP生命周期将typeNode节点重新添加到布局中。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { PipManager } from '../nodefree/PipManager';\nimport { Logger } from '../util/LogUtil';\n\nexport default class EntryAbility extends UIAbility {\n// ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ...\n    windowStage.loadContent('pages/Index', (err) => {\n      // ...\n    });\n  }\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/NavigationImplementPage.ets\nimport { PipManager } from '../navigation/PipManager';\nimport { Page1 } from '../navigation/Page1';\nimport { PiPWindow } from '@kit.ArkUI';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'NavigationImplementPage';\n\n@Entry\n@Component\nstruct NavigationImplementPage {\n  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack();\n  // 画中画生命周期事件监听，用于页面及节点操作\n  private callback: Function = (state: PiPWindow.PiPState) => {\n    Logger.info(TAG, `pipStateChange: state ${state}`);\n    if (state === PiPWindow.PiPState.ABOUT_TO_START) {\n      // 返回到上级页面（可选）\n      this.pageInfos.pop();\n    } else if (state === PiPWindow.PiPState.ABOUT_TO_STOP) {\n      // 重新将typeNode节点添加到布局中，例如还原场景\n      PipManager.getInstance().addNode();\n    } else if (state === PiPWindow.PiPState.ABOUT_TO_RESTORE) {\n      // 如果在ABOUT_TO_START时返回了上级界面，需要还原时push到原界面\n      this.jumpNext();\n    }\n  };\n\n  jumpNext() {\n    if (this.pageInfos.getAllPathName()[0] === 'Page1') {\n      Logger.info(TAG, 'Page1 already at top');\n      return;\n    }\n    this.pageInfos.pushPath({ name: 'Page1' });\n  }\n\n  aboutToAppear(): void {\n    PipManager.getInstance().registerLifecycleCallback(this.callback);\n  }\n\n  aboutToDisappear(): void {\n    PipManager.getInstance().unregisterPipStateChangeListener();\n    PipManager.getInstance().unRegisterLifecycleCallback(this.callback);\n  }\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'Page1') {\n      Page1();\n    }\n  }\n\n  build() {\n    Navigation(this.pageInfos) {\n      Column() {\n        Text('This is Main Page')\n        Column()\n          .height('200px')\n        Row({ space: 12 }) {\n          Button('Jump Page1')\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.jumpNext();\n            })\n        }\n      }\n      .height('100%')\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n      .backgroundColor('#DCDCDC')\n    }\n    .title('MainTitle')\n    .navDestination(this.PageMap)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// navigation/Page1.ets\nimport { PipManager } from './PipManager';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'Page1';\n\n@Entry\n@Component\nexport struct Page1 {\n  build() {\n    NavDestination() {\n      Column() {\n        Text('This is Page1')\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n          .margin({ bottom: 20 })\n\n        // 将typeNode添加到页面布局中\n        NodeContainer(PipManager.getInstance().getNodeController())\n          .size({ width: '100%', height: '800px' })\n\n        Row({ space: 20 }) {\n          Button('startPip') // 启动画中画\n            .onClick(() => {\n              PipManager.getInstance().startPip();\n            })\n          Button('stopPip') // 停止画中画\n            .onClick(() => {\n              PipManager.getInstance().stopPip();\n            })\n          Button('updateSize') // 更新视频尺寸\n            .onClick(() => {\n              // 此处设置的宽高应为媒体内容宽高，需要通过媒体相关接口或回调获取\n              // 例如使用AVPlayer播放视频时，可通过videoSizeChange回调获取媒体源更新后的尺寸\n              PipManager.getInstance().updateContentSize(900, 1600);\n            })\n        }\n        .backgroundColor('#4da99797')\n        .size({ width: '100%', height: 60 })\n        .justifyContent(FlexAlign.SpaceAround)\n      }\n      .justifyContent(FlexAlign.Center)\n      .width('100%')\n      .height('100%')\n    }\n    .title('page1')\n    .onShown(() => {\n      Logger.info(TAG, 'onShown')\n      PipManager.getInstance().init(this.getUIContext().getHostContext() as Context);\n      PipManager.getInstance().setAutoStart(true);\n    })\n    .onHidden(() => {\n      Logger.info(TAG, 'onHidden')\n      PipManager.getInstance().setAutoStart(false);\n      PipManager.getInstance().removeNode();\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// navigation/XCNodeController.ets\nimport { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\nimport { PipManager } from './PipManager';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'XCNodeController';\n\n// 创建自定义NodeController\nexport class XCNodeController extends NodeController {\n  public xComponent: typeNode.XComponent| null = null;\n  private node: FrameNode | null = null;\n  private canAddNode: boolean = true;\n\n  // 设置是否可以添加节点\n  setCanAddNode(canAddNode: boolean) {\n    this.canAddNode = canAddNode;\n  }\n\n  // 实现makeNode方法，当自定义NodeController被添加到布局时，该方法会被调用\n  makeNode(context: UIContext): FrameNode | null {\n    Logger.info(TAG, 'makeNode');\n    this.node = new FrameNode(context);\n    if (this.xComponent === null || this.xComponent === undefined) {\n      // 创建XComponent类型的typeNode\n      this.xComponent = typeNode.createNode(context, 'XComponent', {\n        type: XComponentType.SURFACE, // 类型设置为SURFACE\n        controller: PipManager.getInstance().getXComponentController(), // 设置XComponentController\n      });\n    }\n    if (this.canAddNode) {\n\n      try {\n        this.xComponent.getParent()?.removeChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to removeChild');\n      }\n      try {\n        this.node.appendChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to appendChild');\n      }\n    }\n    return this.node;\n  }\n\n  // 重新添加typeNode节点\n  addNode() {\n    if (this.node !== null && this.node !== undefined) {\n      Logger.info(TAG, 'addNode id:'+(this.node?.getUniqueId())+' '+this.xComponent?.getUniqueId());\n      try {\n        this.node.appendChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to appendChild');\n      }\n    }\n  }\n\n  // 移除typeNode节点\n  removeNode() {\n    if (this.node !== null && this.node !== undefined) {\n      Logger.info(TAG, 'removeNode');\n\n      try {\n        this.node.removeChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to removeChild');\n      }\n    }\n  }\n\n  getNode(): typeNode.XComponent | null {\n    Logger.info(TAG, 'getNode is null:'+ (this.xComponent === null || this.xComponent === undefined))\n    return this.xComponent;\n  }\n\n  // 开发者需要定义该方法实现布局的注销，避免内存泄漏\n  dispose() {\n    Logger.info(TAG, 'execute node dispose');\n    if (this.node !== null) {\n      this.node.dispose();\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// navigation/PipManager.ets\nimport { PiPWindow, typeNode } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { XCNodeController } from './XCNodeController';\nimport { AVPlayer } from '../model/AVPlayer';\nimport { Logger } from '../util/LogUtil';\n\nexport class CustomXComponentController extends XComponentController {\n  onSurfaceCreated(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);\n    if (PipManager.getInstance().player.surfaceID === surfaceId) {\n      return;\n    }\n    // 将surfaceId设置给媒体源\n    PipManager.getInstance().player.surfaceID = surfaceId;\n    PipManager.getInstance().player.avPlayerFdSrc();\n  }\n\n  onSurfaceDestroyed(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);\n  }\n}\n\nconst TAG = 'PipManager';\n\nexport class PipManager {\n  private static instance: PipManager = new PipManager();\n  private pipController?: PiPWindow.PiPController = undefined;\n  private xcNodeController: XCNodeController;\n  private mXComponentController: XComponentController;\n  private lifeCycleCallback: Set<Function> = new Set();\n  public player: AVPlayer;\n\n  public static getInstance(): PipManager {\n    return PipManager.instance;\n  }\n\n  constructor() {\n    this.xcNodeController = new XCNodeController();\n    this.player = new AVPlayer();\n    this.mXComponentController = new CustomXComponentController();\n  }\n\n  public registerLifecycleCallback(callBack: Function) {\n    this.lifeCycleCallback.add(callBack);\n  }\n\n  public unRegisterLifecycleCallback(callBack: Function): void {\n    this.lifeCycleCallback.delete(callBack);\n  }\n\n  getNode(): typeNode.XComponent | null {\n    return this.xcNodeController.getNode();\n  }\n\n  onActionEvent(control: PiPWindow.ControlEventParam) {\n    switch (control.controlType) {\n      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:\n        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {\n          //停止视频\n        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {\n          //播放视频\n        }\n        break;\n      case PiPWindow.PiPControlType.VIDEO_NEXT:\n        // 切换到下一个视频\n        break;\n      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:\n        // 切换到上一个视频\n        break;\n      case PiPWindow.PiPControlType.FAST_FORWARD:\n        // 视频进度快进\n        break;\n      case PiPWindow.PiPControlType.FAST_BACKWARD:\n        // 视频进度后退\n        break;\n      default:\n        break;\n    }\n    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);\n  }\n\n  onStateChange(state: PiPWindow.PiPState, reason: string) {\n    let curState: string = '';\n    this.xcNodeController.setCanAddNode(\n      state === PiPWindow.PiPState.ABOUT_TO_STOP || state === PiPWindow.PiPState.STOPPED)\n    if (this.lifeCycleCallback !== null) {\n      this.lifeCycleCallback.forEach((fun) => {\n        fun(state);\n      });\n    }\n    switch (state) {\n      case PiPWindow.PiPState.ABOUT_TO_START:\n        curState = 'ABOUT_TO_START';\n        // 将typeNode节点从布局移除\n        this.xcNodeController.removeNode();\n        break;\n      case PiPWindow.PiPState.STARTED:\n        curState = 'STARTED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_STOP:\n        curState = 'ABOUT_TO_STOP';\n        this.xcNodeController.dispose();\n        break;\n      case PiPWindow.PiPState.STOPPED:\n        curState = 'STOPPED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_RESTORE:\n        curState = 'ABOUT_TO_RESTORE';\n        break;\n      case PiPWindow.PiPState.ERROR:\n        curState = 'ERROR';\n        break;\n      default:\n        break;\n    }\n    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);\n  }\n\n  unregisterPipStateChangeListener() {\n    Logger.info(`${TAG} aboutToDisappear`);\n    this.pipController?.off('stateChange');\n    this.pipController?.off('controlEvent');\n    this.pipController = undefined;\n  }\n\n  getXComponentController(): CustomXComponentController {\n    return this.mXComponentController;\n  }\n\n  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调\n  init(ctx: Context) {\n    if (this.pipController !== null && this.pipController != undefined) {\n      return;\n    }\n    Logger.info(`${TAG} onPageShow`)\n    if (!PiPWindow.isPiPEnabled()) {\n      Logger.error(TAG, `picture in picture disabled for current OS`);\n      return;\n    }\n\n    let config: PiPWindow.PiPConfiguration = {\n      context: ctx,\n      componentController: this.getXComponentController(),\n      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,\n      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则创建画中画失败\n      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则创建画中画失败\n    };\n    // 通过create接口创建画中画控制器实例\n\n    PiPWindow.create(config, this.xcNodeController.getNode()).then((controller: PiPWindow.PiPController) => {\n      this.pipController = controller;\n      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画\n      this.pipController?.setAutoStartEnabled(true);\n      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调\n      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {\n        this.onStateChange(state, reason);\n      });\n      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调\n      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {\n        this.onActionEvent(control);\n      });\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤2：启动画中画\n  startPip() {\n    this.pipController?.startPiP().then(() => {\n      Logger.info(TAG, `Succeeded in starting pip.`);\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤3：更新媒体源尺寸信息\n  updateContentSize(width: number, height: number) {\n    if (this.pipController) {\n      this.pipController.updateContentSize(width, height);\n    }\n  }\n\n  // 步骤4：关闭画中画\n  stopPip() {\n    if (this.pipController === null || this.pipController === undefined) {\n      return;\n    }\n    let promise: Promise<void> = this.pipController.stopPiP();\n    promise.then(() => {\n      Logger.info(TAG, `Succeeded in stopping pip.`);\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  getNodeController(): XCNodeController {\n    Logger.info(TAG, `getNodeController.`);\n    return this.xcNodeController;\n  }\n\n  setAutoStart(autoStart: boolean): void {\n    this.pipController?.setAutoStartEnabled(autoStart);\n  }\n\n  removeNode() {\n    this.xcNodeController.removeNode();\n  }\n\n  addNode(): void {\n    this.xcNodeController.addNode();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例代码对应的示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(358514)/* ["default"] */.A) + "",
        width: "240",
        height: "343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用使用单界面ability时通过typenode实现画中画功能",
      children: "应用使用单界面Ability时通过typeNode实现画中画功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器，注册生命周期事件以及控制事件回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建自定义NodeController，实现makeNode方法，在该方法中创建typeNode。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过create(config: PiPConfiguration, contentNode: typeNode.XComponent)接口创建画中画控制器实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('controlEvent')接口注册控制事件回调。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器实例后，通过startPiP接口启动画中画，在画中画ABOUT_TO_START生命周期将typeNode节点从布局移除。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新媒体源尺寸信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画中画媒体源更新后（如切换视频），通过画中画控制器实例的updateContentSize接口更新媒体源尺寸信息，以调整画中画窗口比例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭画中画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要显示画中画时，可根据业务需要，通过画中画控制器实例的stopPiP接口关闭画中画，在画中画ABOUT_TO_STOP生命周期将typeNode节点重新添加到布局中。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { PipManager } from '../nodefree/PipManager';\nimport { Logger } from '../util/LogUtil';\n\nexport default class EntryAbility extends UIAbility {\n// ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ...\n    windowStage.loadContent('pages/Index', (err) => {\n      // ...\n    });\n  }\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/AbilityImplementPage.ets\nimport { PipManager } from '../ability/PipManager';\nimport { PiPWindow } from '@kit.ArkUI'; // 引入PiPWindow模块\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'AbilityImplementPage'\n@Entry\n@Component\nstruct AbilityImplementPage {\n  private callback: Function = (state: PiPWindow.PiPState) => {\n    if (state === PiPWindow.PiPState.ABOUT_TO_STOP) {\n      // 画中画关闭或还原时触发ABOUT_TO_STOP生命周期，此时需要重新添加节点\n      PipManager.getInstance().addNode();\n    }\n  };\n\n  build() {\n    Column() {\n      Text('This is MainPage')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .margin({ bottom: 20 })\n\n      // 将typeNode添加到页面布局中\n      NodeContainer(PipManager.getInstance().getNodeController())\n        .size({ width: '100%', height: '800px' })\n\n      Row({ space: 20 }) {\n        Button('startPip') // 启动画中画\n          .onClick(() => {\n            PipManager.getInstance().startPip();\n          })\n\n        Button('stopPip') // 停止画中画\n          .onClick(() => {\n            PipManager.getInstance().stopPip();\n          })\n\n        Button('updateSize') // 更新视频尺寸\n          .onClick(() => {\n            // 此处设置的宽高应为媒体内容宽高，需要通过媒体相关接口或回调获取\n            // 例如使用AVPlayer播放视频时，可通过videoSizeChange回调获取媒体源更新后的尺寸\n            PipManager.getInstance().updateContentSize(900, 1600);\n          })\n      }\n      .backgroundColor('#4da99797')\n      .size({ width: '100%', height: 60 })\n      .justifyContent(FlexAlign.SpaceAround)\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n\n  aboutToAppear(): void {\n    PipManager.getInstance().registerLifecycleCallback(this.callback);\n  }\n\n  aboutToDisappear(): void {\n    PipManager.getInstance().unregisterPipStateChangeListener();\n    PipManager.getInstance().unRegisterLifecycleCallback(this.callback);\n  }\n\n  onPageShow(): void {\n    Logger.info(TAG, 'onPageShow')\n    PipManager.getInstance().init(this.getUIContext().getHostContext() as Context);\n    PipManager.getInstance().setAutoStart(true);\n  }\n\n  onPageHide(): void {\n    Logger.info(TAG, 'onPageHide')\n    PipManager.getInstance().setAutoStart(false);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ability/XCNodeController.ets\nimport { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\nimport { PipManager } from './PipManager';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'XCNodeController';\n\n// 创建自定义NodeController\nexport class XCNodeController extends NodeController {\n  public xComponent: typeNode.XComponent | null = null;\n  private node: FrameNode | null = null;\n  private canAddNode: boolean = true;\n\n  // 设置是否可以添加节点\n  setCanAddNode(canAddNode: boolean) {\n    this.canAddNode = canAddNode;\n  }\n\n  // 实现makeNode方法，当自定义NodeController被添加到布局时，该方法会被调用\n  makeNode(context: UIContext): FrameNode | null {\n    this.node = new FrameNode(context);\n    this.node.commonAttribute\n    if (this.xComponent === null || this.xComponent === undefined) {\n      // 创建XComponent类型的typeNode\n      this.xComponent = typeNode.createNode(context, 'XComponent', {\n        type: XComponentType.SURFACE, // 类型设置为SURFACE\n        controller: PipManager.getInstance().getXComponentController(), // 设置XComponentController\n      });\n    }\n    if (this.canAddNode) {\n\n      try {\n        this.xComponent.getParent()?.removeChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to removeChild');\n      }\n      try {\n        this.node.appendChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to appendChild');\n      }\n    }\n    return this.node;\n  }\n\n  // 重新添加typeNode节点\n  addNode() {\n    if (this.node !== null && this.node !== undefined) {\n      Logger.info(TAG, 'addNode');\n\n      try {\n        this.node.appendChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to appendChild');\n      }\n    }\n  }\n\n  // 移除typeNode节点\n  removeNode() {\n    if (this.node !== null && this.node !== undefined) {\n      Logger.info(TAG, 'removeNode');\n\n      try {\n        this.node.removeChild(this.xComponent);\n      } catch (error) {\n        Logger.error(TAG, 'Failed to removeChild');\n      }\n    }\n  }\n\n  getNode(): typeNode.XComponent | null {\n    Logger.info(TAG, 'getNode is null: '+ (this.xComponent === null || this.xComponent === undefined));\n    return this.xComponent;\n  }\n\n  // 开发者需要定义该方法实现布局的注销，避免内存泄漏\n  dispose() {\n    Logger.info(TAG, 'execute node dispose');\n    if (this.node !== null) {\n      this.node.dispose();\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ability/PipManager.ets\nimport { PiPWindow, typeNode } from '@kit.ArkUI'; // 引入PiPWindow模块\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { XCNodeController } from './XCNodeController';\nimport { AVPlayer } from '../model/AVPlayer';\nimport { Logger } from '../util/LogUtil';\n\n// 自定义XComponentController\nexport class CustomXComponentController extends XComponentController {\n  onSurfaceCreated(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceCreated surfaceId: ${surfaceId}`);\n    if (PipManager.getInstance().player.surfaceID === surfaceId) {\n      return;\n    }\n    PipManager.getInstance().player.surfaceID = surfaceId;\n    PipManager.getInstance().player.avPlayerFdSrc();\n  }\n\n  onSurfaceDestroyed(surfaceId: string): void {\n    Logger.info(TAG, `onSurfaceDestroyed surfaceId: ${surfaceId}`);\n  }\n}\n\nconst TAG = 'PipManager';\n\nexport class PipManager {\n  private static instance: PipManager = new PipManager();\n  private pipController?: PiPWindow.PiPController = undefined;\n  private xcNodeController: XCNodeController;\n  private mXComponentController: XComponentController;\n  private lifeCycleCallback: Set<Function> = new Set();\n  public player: AVPlayer;\n\n  public static getInstance(): PipManager {\n    return PipManager.instance;\n  }\n\n  constructor() {\n    this.xcNodeController = new XCNodeController();\n    this.player = new AVPlayer();\n    this.mXComponentController = new CustomXComponentController();\n  }\n\n  public registerLifecycleCallback(callBack: Function) {\n    this.lifeCycleCallback.add(callBack);\n  }\n\n  public unRegisterLifecycleCallback(callBack: Function): void {\n    this.lifeCycleCallback.delete(callBack);\n  }\n\n  getNode(): typeNode.XComponent | null {\n    return this.xcNodeController.getNode();\n  }\n\n  onActionEvent(control: PiPWindow.ControlEventParam) {\n    switch (control.controlType) {\n      case PiPWindow.PiPControlType.VIDEO_PLAY_PAUSE:\n        if (control.status === PiPWindow.PiPControlStatus.PAUSE) {\n          //停止视频\n        } else if (control.status === PiPWindow.PiPControlStatus.PLAY) {\n          //播放视频\n        }\n        break;\n      case PiPWindow.PiPControlType.VIDEO_NEXT:\n        // 切换到下一个视频\n        break;\n      case PiPWindow.PiPControlType.VIDEO_PREVIOUS:\n        // 切换到上一个视频\n        break;\n      case PiPWindow.PiPControlType.FAST_FORWARD:\n        // 视频进度快进\n        break;\n      case PiPWindow.PiPControlType.FAST_BACKWARD:\n        // 视频进度后退\n        break;\n      default:\n        break;\n    }\n    Logger.info('onActionEvent, controlType:' + control.controlType + ', status' + control.status);\n  }\n\n  onStateChange(state: PiPWindow.PiPState, reason: string) {\n    let curState: string = '';\n    this.xcNodeController.setCanAddNode(\n      state === PiPWindow.PiPState.ABOUT_TO_STOP || state === PiPWindow.PiPState.STOPPED);\n    if (this.lifeCycleCallback !== null) {\n      this.lifeCycleCallback.forEach((fun) => {\n        fun(state);\n      });\n    }\n    switch (state) {\n      case PiPWindow.PiPState.ABOUT_TO_START:\n        curState = 'ABOUT_TO_START';\n        // 将typeNode节点从布局移除\n        this.xcNodeController.removeNode();\n        break;\n      case PiPWindow.PiPState.STARTED:\n        curState = 'STARTED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_STOP:\n        curState = 'ABOUT_TO_STOP';\n        this.xcNodeController.dispose();\n        break;\n      case PiPWindow.PiPState.STOPPED:\n        curState = 'STOPPED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_RESTORE:\n        curState = 'ABOUT_TO_RESTORE';\n        break;\n      case PiPWindow.PiPState.ERROR:\n        curState = 'ERROR';\n        break;\n      default:\n        break;\n    }\n    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);\n  }\n\n  unregisterPipStateChangeListener() {\n    Logger.info(`${TAG} aboutToDisappear`);\n    this.pipController?.off('stateChange');\n    this.pipController?.off('controlEvent');\n  }\n\n  getXComponentController(): CustomXComponentController {\n    return this.mXComponentController;\n  }\n\n  // 步骤1：创建画中画控制器，注册生命周期事件以及控制事件回调\n  init(ctx: Context) {\n    if (this.pipController !== null && this.pipController != undefined) {\n      return;\n    }\n    Logger.info(`${TAG} onPageShow`)\n    if (!PiPWindow.isPiPEnabled()) {\n      Logger.error(TAG, `picture in picture disabled for current OS`);\n      return;\n    }\n    let config: PiPWindow.PiPConfiguration = {\n      context: ctx,\n      componentController: this.getXComponentController(),\n      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,\n      contentWidth: 1920, // 使用typeNode启动画中画时，contentWidth需设置为大于0的值，否则创建画中画失败\n      contentHeight: 1080, // 使用typeNode启动画中画时，contentHeight需设置为大于0的值，否则创建画中画失败\n    };\n    // 通过create接口创建画中画控制器实例\n\n    PiPWindow.create(config, this.xcNodeController.getNode()).then((controller: PiPWindow.PiPController) => {\n      this.pipController = controller;\n      // 通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画\n      this.pipController?.setAutoStartEnabled(true);\n      // 通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调\n      this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {\n        this.onStateChange(state, reason);\n      });\n      // 通过画中画控制器实例的on('controlEvent')接口注册控制事件回调\n      this.pipController.on('controlEvent', (control: PiPWindow.ControlEventParam) => {\n        this.onActionEvent(control);\n      });\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to create pip controller. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤2：启动画中画\n  startPip() {\n    this.pipController?.startPiP().then(() => {\n      Logger.info(TAG, `Succeeded in starting pip.`);\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to start pip. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  // 步骤3：更新媒体源尺寸信息\n  updateContentSize(width: number, height: number) {\n    if (this.pipController) {\n      this.pipController.updateContentSize(width, height);\n    }\n  }\n\n  // 步骤4：关闭画中画\n  stopPip() {\n    if (this.pipController === null || this.pipController === undefined) {\n      return;\n    }\n    let promise: Promise<void> = this.pipController.stopPiP();\n    promise.then(() => {\n      Logger.info(TAG, `Succeeded in stopping pip.`);\n    }).catch((err: BusinessError) => {\n      Logger.error(TAG, `Failed to stop pip. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  getNodeController(): XCNodeController {\n    Logger.info(TAG, `getNodeController.`);\n    return this.xcNodeController;\n  }\n\n  setAutoStart(autoStart: boolean): void {\n    this.pipController?.setAutoStartEnabled(autoStart);\n  }\n\n  // 将typeNode节点添加到原父节点\n  addNode(): void {\n    this.xcNodeController.addNode();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例代码对应的示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769607)/* ["default"] */.A) + "",
        width: "240",
        height: "343"
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
923602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798530-69ae07ef5af480d19e488bfbc2870d4a.gif");

},
23683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
358514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798530-69ae07ef5af480d19e488bfbc2870d4a.gif");

},
769607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798530-69ae07ef5af480d19e488bfbc2870d4a.gif");

},
153949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958180-5cd738a604e9d6273ec1c1b69e36f4f4.gif");

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