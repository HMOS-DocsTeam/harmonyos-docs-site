"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["460732"], {
244350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_single_gesture_arkts_gesture_events_single_gesture_md_7bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-support-gesture-arkts-gesture-events-single-gesture-arkts-gesture-events-single-gesture-md-7bd.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_single_gesture_arkts_gesture_events_single_gesture_md_7bd_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture/arkts-gesture-events-single-gesture","title":"单一手势","description":"点击事件（onClick）","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture/arkts-gesture-events-single-gesture.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"单一手势","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-single-gesture","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绑定手势方法","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding/"},"next":{"title":"组合手势","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture/arkts-gesture-events-single-gesture.md


const frontMatter = {
	title: '单一手势',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-single-gesture',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '单一手势';

const assets = {

};



const toc = [{
  "value": "点击事件（onClick）",
  "id": "点击事件onclick",
  "level": 2
}, {
  "value": "点击手势（TapGesture）",
  "id": "点击手势tapgesture",
  "level": 2
}, {
  "value": "长按手势（LongPressGesture）",
  "id": "长按手势longpressgesture",
  "level": 2
}, {
  "value": "滑动手势（PanGesture）",
  "id": "滑动手势pangesture",
  "level": 2
}, {
  "value": "捏合手势（PinchGesture）",
  "id": "捏合手势pinchgesture",
  "level": 2
}, {
  "value": "旋转手势（RotationGesture）",
  "id": "旋转手势rotationgesture",
  "level": 2
}, {
  "value": "快滑手势（SwipeGesture）",
  "id": "快滑手势swipegesture",
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
        id: "单一手势",
        children: "单一手势"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "点击事件onclick",
      children: "点击事件（onClick）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单击作为常用的手势，可以方便地使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
        children: "onClick"
      }), "接口实现。尽管被称为事件，它实际上是基本手势类型，等同于将count配置为1的TapGesture，即单击手势。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onClick与其他手势类型相同，也会参与命中测试、响应链收集等过程。可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rkts-interaction-development-guide-support-gesture#%E5%B9%B2%E9%A2%84%E6%89%8B%E5%8A%BF%E5%A4%84%E7%90%86",
        children: "干预手势处理"
      }), "机制对onClick的响应进行动态决策。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct OnClickGesture {\n  private judgeCount: number = 0;\n\n  increaseJudgeGuard(): void {\n    this.judgeCount++;\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Column() {\n          Column()\n            .width('60%')\n            .height('50%')\n            .backgroundColor(Color.Grey)\n            .onClick(() => {\n              // 1. 子组件上注册了点击事件，正常情况下点击在子组件上时，优先得到响应\n              console.info('Clicked on child');\n              this.increaseJudgeGuard();\n            })\n            .onGestureJudgeBegin((gestureInfo: GestureInfo, event: BaseGestureEvent) => {\n              // 3. 当数字增长为5的倍数时禁用子组件上的点击手势，此时父组件上的点击可以得到响应\n              if (this.judgeCount % 5 == 0 && gestureInfo.type == GestureControl.GestureType.CLICK) {\n                return GestureJudgeResult.REJECT;\n              } else {\n                return GestureJudgeResult.CONTINUE;\n              }\n            })\n        }\n        .width('80%')\n        .height('80%')\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor(Color.Green)\n        .gesture(\n          // 2. 父组件上注册了点击手势，正常情况下点击在子组件区域时，父组件上的手势优先级低于子组件\n          TapGesture()\n            .onAction(() => {\n              console.info('Clicked on parent');\n              this.increaseJudgeGuard();\n            }))\n      }\n      .height('100%')\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.singlegesture_Index_Click_title')替换为实际资源文件，在本示例中该资源文件的value值为\"点击事件\"\n    .title($r('app.string.singlegesture_Index_Click_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中，每点击5次，子组件的点击事件将临时禁用1次，确保父组件点击优先响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "点击手势tapgesture",
      children: "点击手势（TapGesture）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TapGesture(value?: TapGestureParameters)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击手势支持单次点击和多次点击，参数定义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture",
        children: "TapGesture"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Tap {\n  @State value: string = '';\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        Column() {\n          Text('Click twice').fontSize(28)\n            .gesture(\n              // 绑定count为2的TapGesture\n              TapGesture({ count: 2 })\n                .onAction((event: GestureEvent|undefined) => {\n                  if(event){\n                    this.value = JSON.stringify(event.fingerList[0]);\n                  }\n                }))\n          Text(this.value)\n        }\n        .height(300)\n        .width(250)\n        .padding(20)\n        .border({ width: 3 })\n        .margin(30)\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.singlegesture_TapGesture_title')替换为实际资源文件，在本示例中该资源文件的value值为\"点击手势\"\n    .title($r('app.string.singlegesture_TapGesture_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(281904)/* ["default"] */.A) + "",
        width: "343",
        height: "427"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "长按手势longpressgesture",
      children: "长按手势（LongPressGesture）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LongPressGesture(value?:{fingers?:number, repeat?:boolean, duration?:number})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["长按手势用于触发长按手势事件，参数定义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-longpressgesture/ts-basic-gestures-longpressgesture",
        children: "LongPressGesture"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以在Text组件上绑定可以重复触发的长按手势为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct LongPress {\n  @State count: number = 0;\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        Column() {\n          Text('LongPress OnAction:' + this.count).fontSize(28)\n            .gesture(\n              // 绑定可以重复触发的LongPressGesture\n              LongPressGesture({ repeat: true })\n                .onAction((event: GestureEvent | undefined) => {\n                  if (event) {\n                    if (event.repeat) {\n                      this.count++;\n                    }\n                  }\n                })\n                .onActionEnd(() => {\n                  this.count = 0;\n                })\n            )\n        }\n        .height(200)\n        .width(250)\n        .padding(20)\n        .border({ width: 3 })\n        .margin(30)\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.singlegesture_LongPressGesture_title')替换为实际资源文件，在本示例中该资源文件的value值为\"长按手势\"\n    .title($r('app.string.singlegesture_LongPressGesture_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473101)/* ["default"] */.A) + "",
        width: "307",
        height: "253"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滑动手势pangesture",
      children: "滑动手势（PanGesture）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PanGesture(value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["滑动手势用于触发滑动手势事件，滑动达到最小滑动距离（默认值为5vp）时滑动手势识别成功，参数定义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture",
        children: "PanGesture"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下以实现一个简单的音量控制为例，可以通过滑动手势的回调函数处理多种不同的输入情况下的音量值增减的逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持以下五种操作方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单指上下滑动；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按住鼠标左键上下滑动；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "鼠标滚轮滚动；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单指按住触控板上下滑动；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用触控板双指滑动。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct VolumeControlDemo {\n  @State currentVolume: number = 50;\n  private readonly MAX_VOLUME: number = 100;\n  private readonly MIN_VOLUME: number = 0;\n\n  private handlePanUpdate(event: GestureEvent) {\n    const volumeChange = -event.offsetY * 0.1;\n    this.handleVolumeChange(volumeChange);\n  }\n\n  private handleWheelEvent(event: GestureEvent) {\n    const volumeChange = event.offsetY * 0.1;\n    this.handleVolumeChange(volumeChange);\n  }\n\n  private handleTouchPadScroll(event: GestureEvent) {\n    const volumeChange = -event.offsetY * 0.02;\n    this.handleVolumeChange(volumeChange);\n  }\n\n  private handleVolumeChange(delta: number) {\n    this.currentVolume = Math.min(\n      this.MAX_VOLUME,\n      Math.max(this.MIN_VOLUME, this.currentVolume + delta)\n    );\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Row() {\n          // 请将$r('app.string.video')替换为实际资源文件，在本示例中该资源文件的value值为\"音量\"\n          Text($r('app.string.video'))\n          Text(`： ${this.currentVolume}`).fontSize(20)\n        }.margin(10)\n        Column()\n          .width('100%')\n          .height(250)\n          .backgroundColor('#F5F5F5')\n          .borderRadius(12)\n          .gesture(\n            PanGesture()\n              .onActionStart(() => {\n                console.info('Pan start');\n              })\n              .onActionUpdate((event: GestureEvent) => {\n                if (event.source === SourceType.TouchScreen) {\n                  console.info('finger move triggered PanGesture');\n                  this.handlePanUpdate(event);\n                }\n                if (event.source === SourceType.Mouse && event.sourceTool === SourceTool.MOUSE) {\n                  if (event.axisHorizontal === 0 && event.axisVertical === 0) {\n                    console.info('mouse move with left button pressed triggered PanGesture');\n                    this.handlePanUpdate(event);\n                  } else {\n                    console.info('mouse wheel triggered PanGesture');\n                    this.handleWheelEvent(event);\n                  }\n                }\n                if (event.sourceTool === SourceTool.TOUCHPAD &&\n                  (event.axisHorizontal !== 0 || event.axisVertical !== 0)) {\n                  console.info('touchpad double finger move triggered PanGesture');\n                  this.handleTouchPadScroll(event);\n                }\n              })\n          )\n      }\n      .width('100%')\n      .height('100%')\n      .padding(20)\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.singlegesture_Index_Pancom_title')替换为实际资源文件，在本示例中该资源文件的value值为\"滑动手势\"\n    .title($r('app.string.singlegesture_Index_Pancom_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(807800)/* ["default"] */.A) + "",
        width: "686",
        height: "612"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(146382)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["大部分可滑动组件，如List、Grid、Scroll、Tab等组件是通过PanGesture实现滑动，在组件内部的子组件绑定", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%BB%91%E5%8A%A8%E6%89%8B%E5%8A%BFpangesture",
          children: "滑动手势（PanGesture）"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BF%AB%E6%BB%91%E6%89%8B%E5%8A%BFswipegesture",
          children: "快滑手势（SwipeGesture）"
        }), "会导致手势竞争。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当在子组件绑定PanGesture时，在子组件区域进行滑动仅触发子组件的PanGesture。如果需要父组件响应，需要通过修改手势绑定方法或者子组件向父组件传递消息进行实现，或者通过修改父子组件的PanGesture参数distance使得滑动更灵敏。当子组件绑定SwipeGesture时，由于PanGesture和SwipeGesture触发条件不同，需要修改PanGesture和SwipeGesture的参数以达到所需效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不合理的阈值设置会导致滑动不跟手（响应时延慢）的问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "捏合手势pinchgesture",
      children: "捏合手势（PinchGesture）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PinchGesture(value?: { fingers?: number; distance?: number })\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["捏合手势用于触发捏合手势事件，参数定义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pinchgesture/ts-basic-gestures-pinchgesture",
        children: "PinchGesture"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以在Column组件上绑定三指捏合手势为例，可以通过在捏合手势的函数回调中获取缩放比例，实现对组件的缩小或放大："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Pinch {\n  @State scaleValue: number = 1;\n  @State pinchValue: number = 1;\n  @State pinchX: number = 0;\n  @State pinchY: number = 0;\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        Column() {\n          Column() {\n            Text('PinchGesture scale:\\n' + this.scaleValue)\n            Text('PinchGesture center:\\n(' + this.pinchX + ',' + this.pinchY + ')')\n          }\n          .height(200)\n          .width(300)\n          .border({ width: 3 })\n          .margin({ top: 100 })\n          // 在组件上绑定缩放比例，可以通过修改缩放比例来实现组件的缩小或者放大\n          .scale({ x: this.scaleValue, y: this.scaleValue, z: 1 })\n          .gesture(\n            // 在组件上绑定三指触发的捏合手势\n            PinchGesture({ fingers: 3 })\n              .onActionStart((event: GestureEvent | undefined) => {\n                console.info('Pinch start');\n              })// 当捏合手势触发时，可以通过回调函数获取缩放比例，从而修改组件的缩放比例\n              .onActionUpdate((event: GestureEvent | undefined) => {\n                if (event) {\n                  this.scaleValue = this.pinchValue * event.scale;\n                  this.pinchX = event.pinchCenterX;\n                  this.pinchY = event.pinchCenterY;\n                }\n              })\n              .onActionEnd(() => {\n                this.pinchValue = this.scaleValue;\n                console.info('Pinch end');\n              })\n          )\n        }\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.singlegesture_PinchGesture_title')替换为实际资源文件，在本示例中该资源文件的value值为\"捏合手势\"\n    .title($r('app.string.singlegesture_PinchGesture_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(405017)/* ["default"] */.A) + "",
        width: "1608",
        height: "731"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "旋转手势rotationgesture",
      children: "旋转手势（RotationGesture）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RotationGesture(value?: { fingers?: number; angle?: number })\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["旋转手势用于触发旋转手势事件，参数定义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-rotationgesture/ts-basic-gestures-rotationgesture",
        children: "RotationGesture"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以在Text组件上绑定旋转手势实现组件的旋转为例，可以通过在旋转手势的回调函数中获取旋转角度，从而实现组件的旋转："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Rotation {\n  @State angle: number = 0;\n  @State rotateValue: number = 0;\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        Column() {\n          Text('RotationGesture angle:' + this.angle).fontSize(28)\n            // 在组件上绑定旋转布局，可以通过修改旋转角度来实现组件的旋转\n            .rotate({ angle: this.angle })\n            .gesture(\n              RotationGesture()\n                .onActionStart((event: GestureEvent|undefined) => {\n                  console.info('RotationGesture is onActionStart');\n                })\n                  // 当旋转手势生效时，通过旋转手势的回调函数获取旋转角度，从而修改组件的旋转角度\n                .onActionUpdate((event: GestureEvent|undefined) => {\n                  if(event){\n                    this.angle = this.rotateValue + event.angle;\n                  }\n                  console.info('RotationGesture is onActionEnd');\n                })\n                  // 当旋转结束抬手时，固定组件在旋转结束时的角度\n                .onActionEnd(() => {\n                  this.rotateValue = this.angle;\n                  console.info('RotationGesture is onActionEnd');\n                })\n                .onActionCancel(() => {\n                  console.info('RotationGesture is onActionCancel');\n                })\n            )\n            .height(200)\n            .width(300)\n            .padding(20)\n            .border({ width: 3 })\n            .margin(100)\n        }\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.singlegesture_RotationGesture_title')替换为实际资源文件，在本示例中该资源文件的value值为\"旋转手势\"\n    .title($r('app.string.singlegesture_RotationGesture_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(647284)/* ["default"] */.A) + "",
        width: "1404",
        height: "565"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快滑手势swipegesture",
      children: "快滑手势（SwipeGesture）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SwipeGesture(value?: { fingers?: number; direction?: SwipeDirection; speed?: number })\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["快滑手势用于触发快滑事件，当滑动速度大于100vp/s时可以识别成功，参数定义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-swipegesture/ts-basic-gestures-swipegesture",
        children: "SwipeGesture"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以在Column组件上绑定快滑手势实现组件的旋转为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Swipe {\n  @State rotateAngle: number = 0;\n  @State speed: number = 1;\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        Column() {\n          Column() {\n            Text('SwipeGesture speed\\n' + this.speed)\n            Text('SwipeGesture angle\\n' + this.rotateAngle)\n          }\n          .border({ width: 3 })\n          .width(300)\n          .height(200)\n          .margin(100)\n          // 在Column组件上绑定旋转，通过滑动手势的滑动速度和角度修改旋转的角度\n          .rotate({ angle: this.rotateAngle })\n          .gesture(\n            // 绑定滑动手势且限制仅在竖直方向滑动时触发\n            SwipeGesture({ direction: SwipeDirection.Vertical })\n              // 当滑动手势触发时，获取滑动的速度和角度，实现对组件的布局参数的修改\n              .onAction((event: GestureEvent|undefined) => {\n                if(event){\n                  this.speed = event.speed;\n                  this.rotateAngle = event.angle;\n                }\n              })\n          )\n        }\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.singlegesture_SwipeGesture_title')替换为实际资源文件，在本示例中该资源文件的value值为\"快滑手势\"\n    .title($r('app.string.singlegesture_SwipeGesture_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397038)/* ["default"] */.A) + "",
        width: "262",
        height: "237"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554878)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当SwipeGesture和PanGesture同时绑定时，若二者是以默认方式或者互斥方式进行绑定时，会发生竞争。SwipeGesture的触发条件为滑动速度达到100vp/s，PanGesture的触发条件为滑动距离达到5vp，先达到触发条件的手势触发。可以通过修改SwipeGesture和PanGesture的参数以达到不同的效果。"
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
554878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
807800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438003-0f1bcd1f42f9f4ca39c53d33e3714676.gif");

},
405017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957958-57a2ad668d0c16a7a6baa1bb5a39d5e7.png");

},
397038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
281904(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477957-fe60c5b40a32406375106f8ea8dc6fe7.gif");

},
473101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798308-aa5a80960043f788482baa463ef3cb7f.gif");

},
647284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477959-5ef7d28dfddae545ac510667fb308447.png");

},
146382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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