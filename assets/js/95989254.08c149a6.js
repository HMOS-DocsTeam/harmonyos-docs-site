"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["68697"], {
744561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_pipwindow_pipwindow_xcomponent_pipwindow_xcomponent_md_959_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-pipwindow-pipwindow-xcomponent-pipwindow-xcomponent-md-959.json
var site_docs_arkui_window_manager_window_pipwindow_pipwindow_xcomponent_pipwindow_xcomponent_md_959_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-pipwindow/pipwindow-xcomponent/pipwindow-xcomponent","title":"使用XComponent实现画中画功能开发（ArkTS）","description":"本文以视频播放为例，介绍通过XComponent实现画中画功能的基本开发步骤。","source":"@site/docs/arkui/window-manager/window-pipwindow/pipwindow-xcomponent/pipwindow-xcomponent.md","sourceDirName":"arkui/window-manager/window-pipwindow/pipwindow-xcomponent","slug":"/arkui/window-manager/window-pipwindow/pipwindow-xcomponent/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-xcomponent/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用XComponent实现画中画功能开发（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-xcomponent","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"画中画开发概述","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-overview/"},"next":{"title":"使用typeNode实现画中画功能开发（ArkTS）","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-typenode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-pipwindow/pipwindow-xcomponent/pipwindow-xcomponent.md


const frontMatter = {
	title: '使用XComponent实现画中画功能开发（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-xcomponent',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用XComponent实现画中画功能开发（ArkTS）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用xcomponent实现画中画功能开发arkts",
        children: "使用XComponent实现画中画功能开发（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以视频播放为例，介绍通过XComponent实现画中画功能的基本开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS 6.0.0之前，支持在Phone、Tablet设备使用XComponent实现画中画功能开发；从HarmonyOS 6.0.0开始，支持在Phone、PC/2in1、Tablet设备使用XComponent实现画中画功能开发。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["仅支持以", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
          children: "XComponent"
        }), "作为媒体流播放组件的界面进入画中画模式，XComponent的type必须为XComponentType.SURFACE。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UIAbility使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
          children: "Navigation"
        }), "管理页面时，需要设置Navigation控件的id属性，并将该id传递给画中画控制器，确保还原时可以正常恢复原页面。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用主窗口不在前台，不建议在画中画回调方法中执行UI操作，例如页面push/pop等，这些操作不会立即执行，可能产生预期之外的结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在关闭画中画时，需要检查自定义组件节点是否释放，避免出现内存泄漏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建画中画控制器，注册生命周期事件以及控制事件回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过create(config: PiPConfiguration)接口创建画中画控制器实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('stateChange')接口注册生命周期事件回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过画中画控制器实例的on('controlPanelActionEvent')接口注册控制事件回调。"
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
        children: "// pages/XComponentImplementPage.ets\n// 该页面用于展示Navigation在画中画场景的使用。如果UIAbility是单页面，则无需使用Navigation\nimport { Page1 } from '../xcomponent/Page1'\n\n@Entry\n@Component\nstruct XComponentImplementPage {\n  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack();\n  private navId: string = 'navId';\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      Page1({ navId: this.navId });\n    }\n  }\n\n  build() {\n    Navigation(this.pageInfos) {\n      Column() {\n        Button('pushPath', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfos.pushPath({ name: 'pageOne' }) // 将name指定的NavDestination页面信息入栈\n          })\n          .stateStyles({\n            pressed: {\n              .backgroundColor(Color.Red);\n            },\n            normal: {\n              .backgroundColor(Color.Blue);\n            }\n          })\n      }\n    }\n    .title('NavIndex')\n    .navDestination(this.PageMap)\n    .id(this.navId) // 设置Navigation组件的id属性\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例中的视频播放需要使用AVPlayer，具体示例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback",
        children: "视频播放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xcomponent/Page1.ets\n// 该页面用于展示画中画功能的基本使用\nimport { AVPlayer } from '../model/AVPlayer';\nimport { BuilderNode, FrameNode, NodeController, UIContext, PiPWindow } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'Page1';\n\nclass Params {\n  public text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n// 开发者可以通过@Builder装饰器实现布局构建\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(20)\n      .fontColor(Color.Red)\n  }\n  .width('100%') // 宽度方向充满画中画窗口\n  .height('100%') // 高度方向充满画中画窗口\n}\n\n// 开发者可通过继承NodeController实现自定义UI控制器\nclass TextNodeController extends NodeController {\n  private message: string;\n  private textNode: BuilderNode<[Params]> | null = null;\n\n  constructor(message: string) {\n    super();\n    this.message = message;\n  }\n\n  // 通过BuilderNode加载自定义布局\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.message));\n    return this.textNode.getFrameNode();\n  }\n\n  // 开发者可自定义该方法实现布局更新\n  update(message: string) {\n    Logger.info(`update message: ${message}`);\n    if (this.textNode !== null) {\n      this.textNode.update(new Params(message));\n    }\n  }\n\n  // 开发者需要定义该方法实现布局的注销，避免内存泄漏\n  dispose() {\n    Logger.info('dispose message: execute node dispose');\n    if (this.textNode !== null) {\n      this.textNode.dispose();\n    }\n  }\n}\n\n@Entry\n@Component\nexport struct Page1 {\n  @Consume('pageInfos') pageInfos: NavPathStack;\n  private surfaceId: string = ''; // surfaceId，用于关联XComponent与视频播放器\n  private mXComponentController: XComponentController = new XComponentController();\n  private player?: AVPlayer = undefined;\n  private pipController?: PiPWindow.PiPController = undefined;\n  private nodeController: TextNodeController = new TextNodeController('this is custom UI');\n  navId: string = '';\n  private options: XComponentOptions = {\n    type: XComponentType.SURFACE,\n    controller: this.mXComponentController\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        // XComponent控件，用于播放视频流\n        XComponent(this.options)\n          .onLoad(() => {\n            this.surfaceId = this.mXComponentController.getXComponentSurfaceId();\n            // 需要设置AVPlayer的surfaceId为XComponentController的surfaceId\n            this.player = new AVPlayer();\n            this.player.surfaceID = this.surfaceId;\n            this.player.avPlayerFdSrc();\n          })\n          .onDestroy(() => {\n            Logger.info(`[${TAG}] XComponent onDestroy`);\n          })\n          .size({ width: '100%', height: '800px' })\n        Row({ space: 20 }) {\n          Button('startPip') // 启动画中画\n            .onClick(() => {\n              this.startPip();\n            })\n            .stateStyles({\n              pressed: {\n                .backgroundColor(Color.Red);\n              },\n              normal: {\n                .backgroundColor(Color.Blue);\n              }\n            })\n          Button('stopPip') // 停止画中画\n            .onClick(() => {\n              this.stopPip();\n            })\n            .stateStyles({\n              pressed: {\n                .backgroundColor(Color.Red);\n              },\n              normal: {\n                .backgroundColor(Color.Blue);\n              }\n            })\n          Button('updateSize') // 更新视频尺寸\n            .onClick(() => {\n              // 此处设置的宽高应为媒体内容宽高，需要通过媒体相关接口或回调获取\n              // 例如使用AVPlayer播放视频时，可通过videoSizeChange回调获取媒体源更新后的尺寸\n              this.updateContentSize(900, 1600);\n            })\n            .stateStyles({\n              pressed: {\n                .backgroundColor(Color.Red);\n              },\n              normal: {\n                .backgroundColor(Color.Blue);\n              }\n            })\n        }\n        .size({ width: '100%', height: 60 })\n        .justifyContent(FlexAlign.SpaceAround)\n      }\n      .justifyContent(FlexAlign.Center)\n      .height('100%')\n      .width('100%')\n    }\n  }\n\n  startPip() {\n    if (!PiPWindow.isPiPEnabled()) {\n      Logger.error(`picture in picture disabled for current OS`);\n      return;\n    }\n    let config: PiPWindow.PiPConfiguration = {\n      context: this.getUIContext().getHostContext() as Context,\n      componentController: this.mXComponentController,\n      // 当前page导航id\n      // 1、UIAbility使用Navigation管理页面，需要设置Navigation控件的id属性，并将该id设置给画中画控制器，确保还原场景下能够从画中画窗口恢复到原页面\n      // 2、UIAbility使用Router管理页面时（画中画场景不推荐该导航方式），无需设置navigationId。注意：该场景下启动画中画后，不要进行页面切换，否则还原场景可能出现异常\n      // 3、UIAbility只有单页面时，无需设置navigationId，还原场景下也能够从画中画窗口恢复到原页面\n      navigationId: this.navId,\n      // 对于视频通话、视频会议等场景，需要设置相应的模板类型\n      templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,\n      // 可选，创建画中画控制器时系统可通过XComponent组件大小设置画中画窗口比例\n      contentWidth: 1920,\n      // 可选，创建画中画控制器时系统可通过XComponent组件大小设置画中画窗口比例\n      contentHeight: 1080,\n      // 可选，对于视频通话、视频会议和视频直播场景，可通过该属性选择对应模板类型下需显示的的控件组\n      controlGroups: [PiPWindow.VideoPlayControlGroup.VIDEO_PREVIOUS_NEXT],\n      // 可选，如果需要在画中画显示内容上方展示自定义UI，可设置该参数。\n      customUIController: this.nodeController,\n    };\n    // 步骤1：创建画中画控制器，通过create接口创建画中画控制器实例\n    PiPWindow.create(config).then((controller: PiPWindow.PiPController) => {\n      this.pipController = controller;\n      // 步骤1：初始化画中画控制器\n      this.initPipController();\n      // 步骤2：通过startPiP接口启动画中画\n      this.pipController.startPiP().then(() => {\n        Logger.info(`Succeeded in starting pip.`);\n      }).catch((err: BusinessError) => {\n        Logger.error(`Failed to start pip. Cause:${err.code}, message:${err.message}`);\n      });\n    }).catch((err: BusinessError) => {\n      Logger.error(`Failed to create pip controller. Cause:${err.code}, message:${err.message}`);\n    });\n  }\n\n  initPipController() {\n    if (!this.pipController) {\n      return;\n    }\n    // 步骤1：通过setAutoStartEnabled接口设置是否需要在应用返回桌面时自动启动画中画，注册stateChange和controlPanelActionEvent回调\n    this.pipController.setAutoStartEnabled(false /*or true if necessary*/); // 默认为false\n    this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {\n      this.onStateChange(state, reason);\n    });\n    this.pipController.on('controlPanelActionEvent', (event: PiPWindow.PiPActionEventType, status?: number) => {\n      this.onActionEvent(event, status);\n    });\n  }\n\n  onStateChange(state: PiPWindow.PiPState, reason: string) {\n    let curState: string = '';\n    switch (state) {\n      case PiPWindow.PiPState.ABOUT_TO_START:\n        curState = 'ABOUT_TO_START';\n        break;\n      case PiPWindow.PiPState.STARTED:\n        curState = 'STARTED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_STOP:\n        curState = 'ABOUT_TO_STOP';\n        this.nodeController?.dispose();\n        break;\n      case PiPWindow.PiPState.STOPPED:\n        curState = 'STOPPED';\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_RESTORE:\n        curState = 'ABOUT_TO_RESTORE';\n        break;\n      case PiPWindow.PiPState.ERROR:\n        curState = 'ERROR';\n        break;\n      default:\n        break;\n    }\n    Logger.info(`[${TAG}] onStateChange: ${curState}, reason: ${reason}`);\n  }\n\n  onActionEvent(event: PiPWindow.PiPActionEventType, status?: number) {\n    switch (event) {\n      case 'playbackStateChanged':\n        // 开始或停止视频\n        if (status === 0) {\n          // 停止视频\n        } else if (status === 1) {\n          // 播放视频\n        }\n        break;\n      case 'nextVideo':\n        // 播放下一个视频\n        break;\n      case 'previousVideo':\n        // 播放上一个视频\n        break;\n      default:\n        break;\n    }\n  }\n\n  // 步骤3：视频内容变化时，向画中画控制器更新视频尺寸信息，用于调整画中画窗口比例\n  updateContentSize(width: number, height: number) {\n    if (this.pipController) {\n      this.pipController.updateContentSize(width, height);\n    }\n  }\n\n  // 步骤4：当不再需要显示画中画时，通过stopPiP接口关闭画中画\n  stopPip() {\n    if (this.pipController) {\n      let promise: Promise<void> = this.pipController.stopPiP();\n      promise.then(() => {\n        Logger.info(`Succeeded in stopping pip.`);\n        this.pipController?.off('stateChange'); // 如果已注册stateChange回调，停止画中画时取消注册该回调\n        this.pipController?.off('controlPanelActionEvent'); // 如果已注册controlPanelActionEvent回调，停止画中画时取消注册该回调\n      }).catch((err: BusinessError) => {\n        Logger.error(`Failed to stop pip. Cause:${err.code}, message:${err.message}`);\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例代码对应的示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648926)/* ["default"] */.A) + "",
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
648926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798530-69ae07ef5af480d19e488bfbc2870d4a.gif");

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