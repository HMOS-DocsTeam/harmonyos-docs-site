"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["521449"], {
302939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_component_animation_arkts_component_animation_md_99c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-component-animation-arkts-component-animation-md-99c.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_component_animation_arkts_component_animation_md_99c_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation/arkts-component-animation","title":"组件动画","description":"ArkUI为组件提供了通用的属性动画和转场动画能力的同时，还为一些组件提供了默认的动画效果。例如，List的滑动动效、Button的点击动效，是组件自带的默认动画效果。在组件默认动画效果的基础上，开发者还可以通过属性动画和转场动画对容器组件内的子组件动效进行定制。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation/arkts-component-animation.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"组件动画","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-component-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"粒子动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation/"},"next":{"title":"动画曲线概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation/arkts-component-animation.md


const frontMatter = {
	title: '组件动画',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-component-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组件动画';

const assets = {

};



const toc = [{
  "value": "使用组件默认动画",
  "id": "使用组件默认动画",
  "level": 2
}, {
  "value": "打造组件定制化动效",
  "id": "打造组件定制化动效",
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
        id: "组件动画",
        children: "组件动画"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI为组件提供了通用的属性动画和转场动画能力的同时，还为一些组件提供了默认的动画效果。例如，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "的滑动动效、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
        children: "Button"
      }), "的点击动效，是组件自带的默认动画效果。在组件默认动画效果的基础上，开发者还可以通过属性动画和转场动画对容器组件内的子组件动效进行定制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用组件默认动画",
      children: "使用组件默认动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件默认动效具备以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提示用户当前状态，例如用户点击Button组件时，Button组件默认变灰，用户即确定完成选中操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提升界面精致程度和生动性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "减少开发者工作量，例如列表滑动组件自带滑动动效，开发者直接调用即可。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多效果，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
        children: "组件说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码和效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ComponentDemo {\n  build() {\n    Row() {\n      Checkbox({ name: 'checkbox1', group: 'checkboxGroup' })\n        .select(true)\n        .shape(CheckBoxShape.CIRCLE)\n        .size({ width: 50, height: 50 })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(745975)/* ["default"] */.A) + "",
        width: "195",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "打造组件定制化动效",
      children: "打造组件定制化动效"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分组件支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview",
        children: "属性动画"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview",
        children: "转场动画"
      }), "自定义组件子Item的动效，实现定制化动画效果。例如，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "组件中可对各个子组件在滑动时的动画效果进行定制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在滑动或者点击操作时通过改变各个Scroll子组件的仿射属性来实现各种效果。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果要在滑动过程中定制动效，可在滑动回调", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#onscrolldeprecated",
          children: "onScroll"
        }), "中监控滑动距离，并计算每个组件的仿射属性。也可以自己定义手势，通过手势监控位置，手动调用ScrollTo改变滑动位置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在滑动回调", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker#onscrollstop14",
          children: "onScrollStop"
        }), "或手势结束回调中对滑动的最终位置进行微调。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制Scroll组件滑动动效示例代码和效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves, window, display, mediaquery, UIContext } from '@kit.ArkUI';\nimport { UIAbility } from '@kit.AbilityKit';\n\nexport default class GlobalContext extends AppStorage {\n  static mainWin: window.Window | undefined = undefined;\n  static mainWindowSize: window.Size | undefined = undefined;\n}\n\n/**\n * 窗口、屏幕相关信息管理类\n */\nexport class WindowManager {\n  private static instance: WindowManager | null = null;\n  private displayInfo: display.Display | null = null;\n  private uiContext: UIContext;\n  private orientationListener: mediaquery.MediaQueryListener;\n\n  constructor(uiContext: UIContext) {\n    this.uiContext = uiContext;\n    this.orientationListener = this.uiContext.getMediaQuery().matchMediaSync('(orientation: landscape)');\n    this.orientationListener.on('change', (mediaQueryResult: mediaquery.MediaQueryResult) => {\n      this.onPortrait(mediaQueryResult);\n    });\n    this.loadDisplayInfo();\n  }\n\n  /**\n   * 设置主window窗口\n   * @param win 当前app窗口\n   */\n  setMainWin(win: window.Window) {\n    if (win == null) {\n      return;\n    }\n    GlobalContext.mainWin = win;\n    win.on('windowSizeChange', (data: window.Size) => {\n      if (GlobalContext.mainWindowSize == undefined || GlobalContext.mainWindowSize == null) {\n        GlobalContext.mainWindowSize = data;\n      } else {\n        if (GlobalContext.mainWindowSize.width == data.width && GlobalContext.mainWindowSize.height == data.height) {\n          return;\n        }\n        GlobalContext.mainWindowSize = data;\n      }\n\n      let winWidth = this.getMainWindowWidth();\n      AppStorage.setOrCreate<number>('mainWinWidth', winWidth);\n      let winHeight = this.getMainWindowHeight();\n      AppStorage.setOrCreate<number>('mainWinHeight', winHeight);\n      let context: UIAbility = new UIAbility();\n      context.context.eventHub.emit('windowSizeChange', winWidth, winHeight);\n    });\n  }\n\n  static getInstance(uiContext: UIContext): WindowManager {\n    if (WindowManager.instance == null) {\n      WindowManager.instance = new WindowManager(uiContext);\n    }\n    return WindowManager.instance;\n  }\n\n  private onPortrait(mediaQueryResult: mediaquery.MediaQueryResult) {\n    if (mediaQueryResult.matches == AppStorage.get<boolean>('isLandscape')) {\n      return;\n    }\n    AppStorage.setOrCreate<boolean>('isLandscape', mediaQueryResult.matches);\n    this.loadDisplayInfo();\n  }\n\n  /**\n   * 切换屏幕方向\n   * @param ori 常量枚举值：window.Orientation\n   */\n  changeOrientation(ori: window.Orientation) {\n    if (GlobalContext.mainWin != null) {\n      GlobalContext.mainWin.setPreferredOrientation(ori);\n    }\n  }\n\n  private loadDisplayInfo() {\n    this.displayInfo = display.getDefaultDisplaySync();\n    AppStorage.setOrCreate<number>('displayWidth', this.getDisplayWidth());\n    AppStorage.setOrCreate<number>('displayHeight', this.getDisplayHeight());\n  }\n\n  /**\n   * 获取main窗口宽度，单位vp\n   */\n  getMainWindowWidth(): number {\n    return GlobalContext.mainWindowSize != null ? this.uiContext.px2vp(GlobalContext.mainWindowSize.width) : 0;\n  }\n\n  /**\n   * 获取main窗口高度，单位vp\n   */\n  getMainWindowHeight(): number {\n    return GlobalContext.mainWindowSize != null ? this.uiContext.px2vp(GlobalContext.mainWindowSize.height) : 0;\n  }\n\n  /**\n   * 获取屏幕宽度，单位vp\n   */\n  getDisplayWidth(): number {\n    return this.displayInfo != null ? this.uiContext.px2vp(this.displayInfo.width) : 0;\n  }\n\n  /**\n   * 获取屏幕高度，单位vp\n   */\n  getDisplayHeight(): number {\n    return this.displayInfo != null ? this.uiContext.px2vp(this.displayInfo.height) : 0;\n  }\n\n  /**\n   * 释放资源\n   */\n  release() {\n    if (this.orientationListener) {\n      this.orientationListener.off('change', (mediaQueryResult: mediaquery.MediaQueryResult) => {\n        this.onPortrait(mediaQueryResult);\n      });\n    }\n    if (GlobalContext.mainWin != null) {\n      GlobalContext.mainWin.off('windowSizeChange');\n    }\n    WindowManager.instance = null;\n  }\n}\n\n/**\n * 封装任务卡片信息数据类\n */\nexport class TaskData {\n  bgColor: Color | string | Resource = Color.White;\n  index: number = 0;\n  taskInfo: string = 'music';\n\n  constructor(bgColor: Color | string | Resource, index: number, taskInfo: string) {\n    this.bgColor = bgColor;\n    this.index = index;\n    this.taskInfo = taskInfo;\n  }\n}\n\nexport const taskDataArr: Array<TaskData> =\n  [\n    new TaskData('#317AF7', 0, 'music'),\n    new TaskData('#D94838', 1, 'mall'),\n    new TaskData('#DB6B42', 2, 'photos'),\n    new TaskData('#5BA854', 3, 'setting'),\n    new TaskData('#317AF7', 4, 'call'),\n    new TaskData('#D94838', 5, 'music'),\n    new TaskData('#DB6B42', 6, 'mall'),\n    new TaskData('#5BA854', 7, 'photos'),\n    new TaskData('#D94838', 8, 'setting'),\n    new TaskData('#DB6B42', 9, 'call'),\n    new TaskData('#5BA854', 10, 'music')\n\n  ];\n\n@Entry\n@Component\nexport struct TaskSwitchMainPage {\n  displayWidth: number = WindowManager.getInstance(this.getUIContext()).getDisplayWidth();\n  scroller: Scroller = new Scroller();\n  cardSpace: number = 0; // 卡片间距\n  cardWidth: number = this.displayWidth / 2 - this.cardSpace / 2; // 卡片宽度\n  cardHeight: number = 400; // 卡片高度\n  cardPosition: Array<number> = []; // 卡片初始位置\n  clickIndex: boolean = false;\n  @State taskViewOffsetX: number = 0;\n  @State cardOffset: number = this.displayWidth / 4;\n  lastCardOffset: number = this.cardOffset;\n  startTime: number | undefined = undefined;\n\n  // 每个卡片初始位置\n  aboutToAppear() {\n    for (let i = 0; i < taskDataArr.length; i++) {\n      this.cardPosition[i] = i * (this.cardWidth + this.cardSpace);\n    }\n  }\n\n  // 每个卡片位置\n  getProgress(index: number): number {\n    let progress = (this.cardOffset + this.cardPosition[index] - this.taskViewOffsetX +\n      this.cardWidth / 2) / this.displayWidth;\n    return progress;\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.Bottom }) {\n      // 背景\n      Column()\n        .width('100%')\n        .height('100%')\n        .backgroundColor(0xF0F0F0)\n\n      // 滑动组件\n      Scroll(this.scroller) {\n        Row({ space: this.cardSpace }) {\n          ForEach(taskDataArr, (item: TaskData, index) => {\n            Column()\n              .width(this.cardWidth)\n              .height(this.cardHeight)\n              .backgroundColor(item.bgColor)\n              .borderStyle(BorderStyle.Solid)\n              .borderWidth(1)\n              .borderColor(0xAFEEEE)\n              .borderRadius(15)\n              // 计算子组件的仿射属性\n              .scale((this.getProgress(index) >= 0.4 && this.getProgress(index) <= 0.6) ?\n                {\n                  x: 1.1 - Math.abs(0.5 - this.getProgress(index)),\n                  y: 1.1 - Math.abs(0.5 - this.getProgress(index))\n                } :\n                { x: 1, y: 1 })\n              .animation({ curve: Curve.Smooth })\n              // 滑动动画\n              .translate({ x: this.cardOffset })\n              .animation({ curve: curves.springMotion() })\n              .zIndex((this.getProgress(index) >= 0.4 && this.getProgress(index) <= 0.6) ? 2 : 1)\n          }, (item: TaskData) => item.toString())\n        }\n        .width((this.cardWidth + this.cardSpace) * (taskDataArr.length + 1))\n        .height('100%')\n      }\n      .gesture(\n        GestureGroup(GestureMode.Parallel,\n          PanGesture({ direction: PanDirection.Horizontal, distance: 5 })\n            .onActionStart((event: GestureEvent | undefined) => {\n              if (event) {\n                this.startTime = event.timestamp;\n              }\n            })\n            .onActionUpdate((event: GestureEvent | undefined) => {\n              if (event) {\n                this.cardOffset = this.lastCardOffset + event.offsetX;\n              }\n            })\n            .onActionEnd((event: GestureEvent | undefined) => {\n              if (event) {\n                let time = 0;\n                if (this.startTime) {\n                  time = event.timestamp - this.startTime;\n                }\n                let speed = event.offsetX / (time / 1000000000);\n                let moveX = Math.pow(speed, 2) / 7000 * (speed > 0 ? 1 : -1);\n\n                this.cardOffset += moveX;\n                // 左滑大于最右侧位置\n                let cardOffsetMax = -(taskDataArr.length - 1) * (this.displayWidth / 2);\n                if (this.cardOffset < cardOffsetMax) {\n                  this.cardOffset = cardOffsetMax;\n                }\n                // 右滑大于最左侧位置\n                if (this.cardOffset > this.displayWidth / 4) {\n                  this.cardOffset = this.displayWidth / 4;\n                }\n\n                // 左右滑动距离不满足/满足切换关系时，补位/退回\n                let remainMargin = this.cardOffset % (this.displayWidth / 2);\n                if (remainMargin < 0) {\n                  remainMargin = this.cardOffset % (this.displayWidth / 2) + this.displayWidth / 2;\n                }\n                if (remainMargin <= this.displayWidth / 4) {\n                  this.cardOffset += this.displayWidth / 4 - remainMargin;\n                } else {\n                  this.cardOffset -= this.displayWidth / 4 - (this.displayWidth / 2 - remainMargin);\n                }\n\n                // 记录本次滑动偏移量\n                this.lastCardOffset = this.cardOffset;\n              }\n            })\n        ), GestureMask.IgnoreInternal)\n      .scrollable(ScrollDirection.Horizontal)\n      .scrollBar(BarState.Off)\n\n      // 滑动到首尾位置\n      Button('Move to first/last')\n        .backgroundColor(0x888888)\n        .margin({ bottom: 30 })\n        .onClick(() => {\n          this.clickIndex = !this.clickIndex;\n\n          if (this.clickIndex) {\n            this.cardOffset = this.displayWidth / 4;\n          } else {\n            this.cardOffset = this.displayWidth / 4 - (taskDataArr.length - 1) * this.displayWidth / 2;\n          }\n          this.lastCardOffset = this.cardOffset;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(679277)/* ["default"] */.A) + "",
        width: "300",
        height: "554"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过animateTo可以实现将List中指定的Item替换到首位，List中其余Item依次向下排列。定制List组件动态替换动效的示例代码和效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves, AnimatorResult } from '@kit.ArkUI';\n\n// 该接口控制列表项视觉属性\nclass ListItemModify implements AttributeModifier<ListItemAttribute> {\n  public offsetY: number = 0; // Y轴偏移量\n\n  applyNormalAttribute(instance: ListItemAttribute): void {\n    instance.translate({ y: this.offsetY }); // Y轴位移\n  }\n}\n\n@Observed\nclass DragSortCtrl<T> {\n  private arr: Array<T>; // 数据数组\n  private modify: Array<ListItemModify>; // 属性修改器数组\n  private uiContext: UIContext; // 新增UIContext成员\n  private dragRefOffset: number = 0; // 拖拽参考偏移量\n  offsetY: number = 0; // 当前Y轴偏移量\n  private ITEM_INTV: number = 0; // 列表项间隔\n\n  constructor(arr: Array<T>, intv: number, uiContext: UIContext) {\n    this.arr = arr;\n    this.uiContext = uiContext;\n    this.modify = [];\n    this.ITEM_INTV = intv;\n    arr.forEach(() => {\n      this.modify.push(new ListItemModify());\n    });\n  }\n\n  itemMove(index: number, newIndex: number): void {\n    let tmp = this.arr.splice(index, 1); // 移除当前传入的index\n    this.arr.splice(newIndex, 0, tmp[0]); // 将当前移除的index插入到数组前一个位置\n    let tmp2 = this.modify.splice(index, 1);\n    this.modify.splice(newIndex, 0, tmp2[0]);\n  }\n\n  setDragRef(item: T): void {\n    this.dragRefOffset = 0;\n  }\n\n  onMove(item: T, offset: number) {\n    this.offsetY = offset - this.dragRefOffset; // 逐帧计算传入的offect，每满足一个item高度时，进入下方if逻辑，更新dragRefOffset的值\n    let index = this.arr.indexOf(item); // 在数组中查找传入的item\n    this.modify[index].offsetY = this.offsetY;\n    if (this.offsetY < -this.ITEM_INTV / 2) { // 通过判断使指定的item逐一移动到首位\n      // 使用interpolatingSpring曲线生成弹簧动画\n      this.uiContext.animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => { // 400: 弹簧刚度，38: 弹簧阻尼\n        this.offsetY += this.ITEM_INTV; // 调整偏移量实现平滑移动\n        this.dragRefOffset -= this.ITEM_INTV; // 移动的总偏移量\n        console.info(`item offsetY ${this.offsetY} dragRefOffset ${this.dragRefOffset}`);\n        this.itemMove(index, index - 1); // 执行列表项位置交换\n      });\n    }\n  }\n\n  getModify(item: T): ListItemModify {\n    let index = this.arr.indexOf(item);\n    return this.modify[index];\n  }\n}\n\n@Entry\n@Component\nstruct ListAutoSortExample {\n  @State private arr: Array<number> = [0, 1, 2, 3, 4, 5]; // 列表数据数组\n  @State dragSortCtrl: DragSortCtrl<number> =\n    new DragSortCtrl<number>(this.arr, 120, this.getUIContext()); // 120: 列表项高度间隔\n  @State firstListItemGroupCount: number = 3; // 第一个列表项组包含的项目数量\n  private listScroll: ListScroller = new ListScroller(); // 列表滚动控制器\n  private backAnimator: AnimatorResult | null = null; // 动画控制器\n\n  @Builder\n  itemEnd(item: number, index: number) {\n    Row() {\n      Button('To TOP').margin('4vp').onClick(() => { // 4vp: 按钮边距\n        console.info(`item number item ${item} index ${index}`);\n        this.listScroll.closeAllSwipeActions({\n          onFinish: () => {\n            this.dragSortCtrl.setDragRef(item);\n            let length = 120 * (this.arr.indexOf(item)); // 120: 列表项高度间隔\n            this.backAnimator = this.getUIContext()?.createAnimator({\n              // 创建弹簧动画\n              duration: 1000, // 动画持续时间，单位毫秒\n              easing: 'interpolating-spring(0, 1, 150, 24)', // 150: 弹簧刚度，24: 弹簧阻尼\n              delay: 0, // 动画延迟时间\n              fill: 'none',\n              direction: 'normal',\n              iterations: 1, // 动画迭代次数\n              begin: 0, // 动画起始值\n              end: -length\n            });\n            this.backAnimator.onFrame = (value) => { // 逐帧回调更新位置\n              this.dragSortCtrl.onMove(item, value); // 处理list的移动替换动效\n            };\n            this.backAnimator.onFinish = () => {\n            };\n            this.backAnimator.play(); // 启动动画\n          }\n        });\n      })\n    }\n    .padding('4vp').justifyContent(FlexAlign.SpaceEvenly) // 4vp: 内边距\n  }\n\n  @Builder\n  header(title: string) {\n    Row() {\n      Text(title)\n    }\n  }\n\n  build() {\n    Row() {\n      Column() {\n        List({ space: 20, scroller: this.listScroll }) { // 20: 列表项间距\n          ListItemGroup({ header: this.header('first ListItemGroup'), space: 20 }) { // 20: 列表项组内间距\n            ForEach(this.arr, (item: number, index) => {\n              if (index < this.firstListItemGroupCount) {\n                ListItem() {\n                  Text('' + item)\n                    .width('100%')\n                    .height(100) // 100: 列表项高度\n                    .fontSize(16) // 16: 字体大小\n                    .borderRadius(10) // 10: 边框圆角半径\n                    .textAlign(TextAlign.Center)\n                    .backgroundColor(0xFFFFFF) // 0xFFFFFF: 白色背景\n                }\n                .swipeAction({\n                  end: this.itemEnd(item, index)\n                })\n                .clip(true)\n                .attributeModifier(this.dragSortCtrl.getModify(item)) // 动态设置属性修改\n                .borderRadius(10) // 10: 边框圆角半径\n                .margin({ left: 20, right: 20 }) // 20: 左右外边距\n              }\n            })\n          }\n\n          ListItemGroup({ header: this.header('second ListItemGroup'), space: 20 }) { // 20: 列表项组内间距\n            ForEach(this.arr, (item: number, index) => {\n              if (index > this.firstListItemGroupCount - 1) { // 1: 索引偏移量\n                ListItem() {\n                  Text('' + item)\n                    .width('100%')\n                    .height(100) // 100: 列表项高度\n                    .fontSize(16) // 16: 字体大小\n                    .borderRadius(10) // 10: 边框圆角半径\n                    .textAlign(TextAlign.Center)\n                    .backgroundColor(0xFFFFFF) // 0xFFFFFF: 白色背景\n                }\n                .swipeAction({\n                  end: this.itemEnd(item, index)\n                })\n                .clip(true)\n                .attributeModifier(this.dragSortCtrl.getModify(item))\n                .borderRadius(10) // 10: 边框圆角半径\n                .margin({ left: 20, right: 20 }) // 20: 左右外边距\n              }\n            })\n          }\n        }\n        .padding({ top: 20 }) // 20: 顶部内边距\n        .height('100%')\n      }\n    }\n    .backgroundColor(0xDCDCDC) // 0xDCDCDC: 浅灰色背景\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(568129)/* ["default"] */.A) + "",
        width: "351",
        height: "736"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/animation-collection",
          children: "实现动效功能合集"
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
568129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957996-bc4c66d63fedd8c64835bf8f67bb6fa1.gif");

},
679277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438041-a3c83a0ed9497e2aa571705e37d37e29.gif");

},
745975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798346-ac2ebc4ceae9e49b360155577ab0c30a.gif");

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