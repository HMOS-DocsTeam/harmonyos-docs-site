"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["877008"], {
728600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_mouse_arkts_interaction_development_guide_mouse_md_255_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-raw-input-event-arkts-interaction-development-guide-mouse-arkts-interaction-development-guide-mouse-md-255.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_mouse_arkts_interaction_development_guide_mouse_md_255_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse/arkts-interaction-development-guide-mouse","title":"支持鼠标输入事件","description":"鼠标设备是2in1类型设备必不可少的输入设备，其特点是可以通过按键达成点击或滑动操作，也可以通过滚轮触发滑动，另外还有一些按键，这些分别通过MouseEvent及AxisEvent上报给应用。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse/arkts-interaction-development-guide-mouse.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"支持鼠标输入事件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-mouse","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持触屏输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen/"},"next":{"title":"支持触控板输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse/arkts-interaction-development-guide-mouse.md


const frontMatter = {
	title: '支持鼠标输入事件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-mouse',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持鼠标输入事件';

const assets = {

};



const toc = [{
  "value": "处理鼠标移动",
  "id": "处理鼠标移动",
  "level": 2
}, {
  "value": "onMouse",
  "id": "onmouse",
  "level": 3
}, {
  "value": "onHover",
  "id": "onhover",
  "level": 3
}, {
  "value": "处理鼠标按键",
  "id": "处理鼠标按键",
  "level": 2
}, {
  "value": "处理滚轮",
  "id": "处理滚轮",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "支持鼠标输入事件",
        children: "支持鼠标输入事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(234196)/* ["default"] */.A) + "",
        width: "376",
        height: "246"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标设备是2in1类型设备必不可少的输入设备，其特点是可以通过按键达成点击或滑动操作，也可以通过滚轮触发滑动，另外还有一些按键，这些分别通过MouseEvent及AxisEvent上报给应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621598)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有单指可响应的触摸事件/手势事件，均可通过鼠标左键来操作和响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "例如当我们需要开发单击Button跳转页面的功能、且需要支持手指点击和鼠标左键点击，那么只绑定一个点击事件（onClick）就可以实现该效果；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若需要针对手指和鼠标左键的点击实现不一样的效果，可以在onClick回调中，使用回调参数中的source字段判断当前触发事件的来源是手指还是鼠标。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理鼠标移动",
      children: "处理鼠标移动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标事件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#onmouse",
        children: "onMouse"
      }), "接口注册一个回调来接收，当鼠标事件发生时，会按照鼠标光标所在位置下的组件进行派发，派发过程同样遵循事件冒泡机制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onmouse",
      children: "onMouse"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onMouse(event: (event?: MouseEvent) => void)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标事件回调。每当鼠标指针在绑定该API的组件内产生行为（MouseAction）时，触发事件回调，参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#mouseevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "MouseEvent"
      }), "对象，表示触发此次的鼠标事件。该事件支持自定义冒泡设置，默认父子冒泡。常用于开发者自定义的鼠标行为逻辑处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过回调中的MouseEvent对象获取触发事件的坐标（displayX/displayY/windowX/windowY/x/y）、按键（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#mousebutton8",
        children: "MouseButton"
      }), "）、行为（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#mouseaction8",
        children: "MouseAction"
      }), "）、时间戳（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#baseevent8",
        children: "timestamp"
      }), "）、交互组件的区域（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#eventtarget8",
        children: "EventTarget"
      }), "）、事件来源（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
        children: "SourceType"
      }), "）等。MouseEvent的回调函数stopPropagation用于设置当前事件是否阻止冒泡。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748712)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键（MouseButton）的值：Left/Right/Middle/Back/Forward均对应鼠标上的实体按键，当这些按键被按下或松开时触发这些按键的事件。None表示没有鼠标按键按下或松开的状态下，仅移动鼠标所触发的事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MouseMove {\n  @State buttonText: string = '';\n  @State columnText: string = '';\n  @State text: string = 'OnMouse Sample Button';\n  @State color: Color = Color.Gray;\n\n  build() {\n    Column() {\n      Button(this.text, { type: ButtonType.Capsule })\n        .width(200)\n        .height(100)\n        .backgroundColor(this.color)\n        .onMouse((event?: MouseEvent) => { // 设置Button的onMouse回调\n          if (event) {\n            this.buttonText = 'Button onMouse:\\n' + '' +\n              'button = ' + event.button + '\\n' +\n              'action = ' + event.action + '\\n' +\n              'x,y = ' + '\\n' + '(' + event.x + ',' + event.y + ')' + '\\n' +\n              'windowXY=' + '\\n' + '(' + event.windowX + ',' + event.windowY + ')';\n          }\n        })\n      Column() {\n        Divider()\n        Text(this.buttonText).fontColor(Color.Green).padding(5)\n        Divider()\n        Text(this.columnText).fontColor(Color.Red).padding(5)\n      }\n      .width('100%')\n      .alignItems(HorizontalAlign.Start)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n    .borderWidth(2)\n    .borderColor(Color.Red)\n    .onMouse((event?: MouseEvent) => { // Set the onMouse callback for the column.\n      if (event) {\n        this.columnText = 'Column onMouse:\\n' + '' +\n          'button = ' + event.button + '\\n' +\n          'action = ' + event.action + '\\n' +\n          'x,y = ' + '\\n' + '(' + event.x + ',' + event.y + ')' + '\\n' +\n          'windowXY=' + '\\n' + '(' + event.windowX + ',' + event.windowY + ')';\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的示例中给Button绑定onMouse接口。在回调中，打印出鼠标事件的button/action等回调参数值。同时，在外层的Column容器上，也做相同的设置。整个过程可以分为以下两个动作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移动鼠标：在鼠标从Button外部移入Button内部前，仅触发了Column的onMouse回调；当鼠标移入到Button内部后，由于onMouse事件默认是冒泡的，所以此时会同时响应Column的onMouse回调和Button的onMouse回调。此过程中，由于鼠标仅有移动动作而没有点击动作，因此打印信息中的button均为0（MouseButton.None的枚举值）、action均为3（MouseAction.Move的枚举值）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击鼠标：鼠标进入Button后进行了2次点击，分别是左键点击和右键点击。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "左键点击时：button = 1（MouseButton.Left的枚举值），按下时：action = 1（MouseAction.Press的枚举值），抬起时：action = 2（MouseAction.Release的枚举值）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右键点击时：button = 2（MouseButton.Right的枚举值），按下时：action = 1（MouseAction.Press的枚举值），抬起时：action = 2（MouseAction.Release的枚举值）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(538537)/* ["default"] */.A) + "",
        width: "389",
        height: "501"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要阻止鼠标事件冒泡，可以通过调用stopPropagation方法进行设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct StopPropagation {\n  @State buttonText: string = '';\n  @State columnText: string = '';\n  @State text: string = 'OnMouse Sample Button';\n  @State color: Color = Color.Gray;\n\n  build() {\n    Column() {\n      Button(this.text, { type: ButtonType.Capsule })\n        .width(200)\n        .height(100)\n        .backgroundColor(this.color)\n        .onMouse((event?: MouseEvent) => { // 设置Button的onMouse回调\n          if (event) {\n            event.stopPropagation(); // 在Button的onMouse事件中设置阻止冒泡\n            this.buttonText = 'Button onMouse:\\n' + '' +\n              'button = ' + event.button + '\\n' +\n              'action = ' + event.action + '\\n' +\n              'x,y = ' + '\\n' + '(' + event.x + ',' + event.y + ')' + '\\n' +\n              'windowXY=' + '\\n' + '(' + event.windowX + ',' + event.windowY + ')';\n          }\n        })\n      Column() {\n        Divider()\n        Text(this.buttonText).fontColor(Color.Green).padding(5)\n        Divider()\n        Text(this.columnText).fontColor(Color.Red).padding(5)\n      }\n      .width('100%')\n      .alignItems(HorizontalAlign.Start)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n    .borderWidth(2)\n    .borderColor(Color.Red)\n    .onMouse((event?: MouseEvent) => { // 设置Column的onMouse回调\n      if (event) {\n        this.columnText = 'Column onMouse:\\n' + '' +\n          'button = ' + event.button + '\\n' +\n          'action = ' + event.action + '\\n' +\n          'x,y = ' + '\\n' + '(' + event.x + ',' + event.y + ')' + '\\n' +\n          'windowXY=' + '\\n' + '(' + event.windowX + ',' + event.windowY + ')';\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(439507)/* ["default"] */.A) + "",
        width: "390",
        height: "518"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在子组件（Button）的onMouse中，通过回调参数event调用stopPropagation回调方法（如上）即可阻止Button子组件的鼠标事件冒泡到父组件Column上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onhover",
      children: "onHover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要感知鼠标移入或移出控件范围，建议直接使用高级事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#onhover",
        children: "onHover"
      }), "，建议避免直接处理鼠标move事件，以保持代码简洁。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onHover(event: (isHover: boolean) => void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "悬浮事件回调。参数isHover类型为boolean，表示鼠标进入组件或离开组件。该事件支持自定义冒泡设置，默认父子冒泡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若组件绑定了该接口，当鼠标指针从组件外部进入到该组件的瞬间会触发事件回调，参数isHover等于true；鼠标指针离开组件的瞬间也会触发该事件回调，参数isHover等于false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct OnHover {\n  @State hoverText: string = 'Not Hover';\n  @State color: Color = Color.Gray;\n\n  build() {\n    Column() {\n      Button(this.hoverText)\n        .width(200).height(100)\n        .backgroundColor(this.color)\n        .onHover((isHover?: boolean) => { // 使用onHover接口监听鼠标是否悬浮在Button组件上\n          if (isHover) {\n            this.hoverText = 'Hovered!';\n            this.color = Color.Green;\n          } else {\n            this.hoverText = 'Not Hover';\n            this.color = Color.Gray;\n          }\n        })\n    }.width('100%').height('100%').justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例创建了一个Button组件，初始背景色为灰色，内容为“Not Hover”。示例中的Button组件绑定了onHover回调，在该回调中将this.isHovered变量置为回调参数：isHover。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当鼠标从Button外移动到Button内的瞬间，回调响应，isHover值等于true，isHovered的值变为true，将组件的背景色改成Color.Green，内容变为“Hovered!”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当鼠标从Button内移动到Button外的瞬间，回调响应，isHover值等于false，又将组件变成了初始的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185154)/* ["default"] */.A) + "",
        width: "266",
        height: "215"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理鼠标按键",
      children: "处理鼠标按键"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户按下鼠标上的按键时，会产生鼠标按下事件，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#mouseevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "MouseEvent"
      }), "访问事件的一些重要信息，如发生时间，鼠标按键(MouseButton: 左键/右键等)，也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#getmodifierkeystate12",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "getModifierKeyState"
          })
        })
      }), "接口获取到用户在使用鼠标时，物理键盘上的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ctrl/alt/shift"
        })
      }), "这几个修饰键的按下状态，可以通过组合判断它们的状态来实现一些便捷操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一个通过处理鼠标按键实现快速多选的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ListDataSource implements IDataSource {\n  private list: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知控制器数据删除\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 在指定索引位置删除一个元素\n  public deleteItem(index: number): void {\n    this.list.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n}\n\n@Entry\n@Component\nstruct ListExample {\n  private arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);\n  private allSelectedItems: Array<number> = [];\n  @State isSelected: boolean[] = [];\n\n  @Styles\n  selectedStyle(): void {\n    .backgroundColor(Color.Blue);\n  }\n\n  isItemSelected(item: number): boolean {\n    for (let i = 0; i < this.allSelectedItems.length; i++) {\n      if (this.allSelectedItems[i] === item) {\n        this.isSelected[item] = true;\n        return true;\n      }\n    }\n    this.isSelected[item] = false;\n    return false;\n  }\n\n  build() {\n    Column() {\n      List({ space: 10, initialIndex: 0 }) {\n        LazyForEach(this.arr, (index: number) => {\n          ListItem() {\n            Text('' + index)\n              .width('100%')\n              .height(100)\n              .fontSize(16)\n              .fontColor(this.isSelected[index] ? Color.White : Color.Black)\n              .textAlign(TextAlign.Center)\n          }\n          .backgroundColor(Color.White)\n          .selectable(true)\n          .selected(this.isSelected[index])\n          .stateStyles({\n            selected: this.selectedStyle\n          })\n          .onMouse((event: MouseEvent) => {\n            // 判断是否按下鼠标左键\n            if (event.button === MouseButton.Left && event.action === MouseAction.Press) {\n              // 判断之前是否已经是选中状态\n              let isSelected: boolean = this.isItemSelected(index);\n              // 判断修饰键状态\n              let isCtrlPressing: boolean = false;\n              if (event.getModifierKeyState) {\n                isCtrlPressing = event.getModifierKeyState(['Ctrl']);\n              }\n              // 如果没有按着ctrl键点鼠标，则强制清理掉其他选中的条目并只让当前条目选中\n              if (!isCtrlPressing) {\n                this.allSelectedItems = [];\n                for (let i = 0; i < this.isSelected.length; i++) {\n                  this.isSelected[i] = false;\n                }\n              }\n              if (isSelected) {\n                this.allSelectedItems.filter(item => item !== index);\n                this.isSelected[index] = false;\n              } else {\n                this.allSelectedItems.push(index);\n                this.isSelected[index] = true;\n              }\n            }\n          })\n        }, (item: string) => item)\n      }\n      .listDirection(Axis.Vertical)\n      .scrollBar(BarState.Off)\n      .friction(0.6)\n      .edgeEffect(EdgeEffect.Spring)\n      .width('90%')\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791399)/* ["default"] */.A) + "",
        width: "266",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理滚轮",
      children: "处理滚轮"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标的滚轮是一种可以产生纵向滚动量的输入设备，当用户滚动鼠标滚轮时，系统会产生纵向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis",
        children: "轴事件"
      }), "上报，应用可在组件上通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis#onaxisevent",
        children: "onAxisEvent"
      }), "接口接收轴事件，轴事件中上报的坐标，为鼠标光标所在的位置，而滚轮上报的角度变化可从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#baseevent8",
        children: "BaseEvent"
      }), "的axisVertical获得。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标滚轮轴事件的上报，每次都以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#axisaction17",
        children: "AxisAction"
      }), ".BEGIN类型开始，当停止滚动时以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#axisaction17",
        children: "AxisAction"
      }), ".End结束，慢速滚动时，会产生多段的BEGIN、END上报。当你处理axisVertical时，应确保理解它的数值含义与单位，其有以下特点："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上报的数值单位为角度，为单次变化量，非总量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上报数值大小受系统设置中对滚轮放大倍数设置的影响。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统设置中的放大倍数通过AxisEvent中的scrollStep告知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向前滚动，上报数值为负，向后滚动，上报数值为正。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果使用滚动类组件，对于滚轮的响应，系统内部已实现，不需要额外处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-pangesture/ts-basic-gestures-pangesture",
        children: "PanGesture"
      }), "，对于滚轮的响应，此时向前滚动，offsetY的上报数值为正，向后滚动，offsetY的上报数值为负。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445233)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滚轮产生的纵向轴值，一般情况下只能触发纵向滚动手势，无法触发横向滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统会在发现鼠标指针下只有能够响应横向滚动的组件时，也可以触发横向滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "但只要指针下有一个可以响应纵向滚动，则会优先处理纵向，不再处理横向。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是纵向和横向的List响应滚轮的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export class ListDataSource implements IDataSource {\n  private list: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知控制器数据删除\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知控制器添加数据\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 在指定索引位置删除一个元素\n  public deleteItem(index: number): void {\n    this.list.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  // 在指定索引位置插入一个元素\n  public insertItem(index: number, data: number): void {\n    this.list.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ListDataSource } from './ListDataSource';\n\n@Entry\n@Component\nstruct MouseWheel {\n  private arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);\n  @State dir1: Axis = Axis.Vertical;\n\n  build() {\n    Column() {\n      Button('Click to Change ListDirection')\n        .margin(20)\n        .onClick(() => {\n          if (this.dir1 === Axis.Vertical) {\n            this.dir1 = Axis.Horizontal\n          } else {\n            this.dir1 = Axis.Vertical\n          }\n        })\n      List({ space: 20, initialIndex: 0 }) {\n        LazyForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%')\n              .height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n          .margin(20)\n          // 为ListItem绑定滑动手势，当在ListItem上滚动鼠标滚轮时，会优先触发ListItem的滑动手势\n          .gesture(PanGesture({ direction: PanDirection.Vertical })\n            .onActionStart(() => {\n            })\n            .onActionUpdate(() => {\n            }))\n        }, (item: number) => item.toString())\n      }\n      .borderWidth(1)\n      .listDirection(this.dir1) // 排列方向\n      .scrollBar(BarState.Off)\n      .friction(0.6)\n      .divider({\n        strokeWidth: 2,\n        color: 0xFFFFFF,\n        startMargin: 20,\n        endMargin: 20\n      }) // 每行之间的分界线\n      .edgeEffect(EdgeEffect.Spring) // 边缘效果设置为Spring\n      .width('90%')\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(403371)/* ["default"] */.A) + "",
        width: "431",
        height: "824"
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
538537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798296-166c47a19427884806b020029e5d3bf0.gif");

},
791399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477947-ac4c647a9bb7e35ff62454a08c02b4eb.gif");

},
185154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957946-36bde7b5d300240aa9b535914917c729.gif");

},
748712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
621598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
439507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437991-4e0c7994c91c623cfd89de3ba087985c.gif");

},
445233(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
234196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAD2CAIAAABTMgvtAAABWWlDQ1BJQ0MgUHJvZmlsZQAAKJFtkDFLA0EQhd/paUDlSBE7i3QaiSKXWKWQJKgRLI6oaOwum5hILudyd6L+ADtrCxutBBEEQUhrJRZiI6j4D+wE4RoT1tlETaIODPPxeLP7GKBHNTm3VABV23Oy86nwWm49HHhFPzQMI4hRk7k8aRiLZMH37C7/EYqcDxPyrYvEXCVxnFG0+tlRaD9h//V31UCh6DKadepxxh0PUMaIjR2PS94lDjkUivhAcqnFJ5LzLb5qepazaeJb4iArmwXiZ+JovkMvdXDV2mZfGWT6oaK9skRTox5BBgbCmIWOOGJ0m/+98aY3jS1w7MHBJkoow6PNJCkcForEC7DBMIkosY4p6ml549+3a2vuHTBzT1Bpa7kacP5GX1+2tQhlCKWAmyA3HfPnooqvuhsxvcWDtNd3KMT7KhCIAI0nIT5qQjROgd4X4Nr/BHp3YRknCfHnAAAAbGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAEgAAAABAAAASAAAAAEAAqACAAQAAAABAAABeKADAAQAAAABAAAA9gAAAACaVTkDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAdY0lEQVR4Ae2dd5QURRfFWYKkBSRIkLCoIEmSsIjiB5LDgoCCZCXJERGJEiQqIJIVURAFRECRIDmHAxKOhwVhiYIciRKUnDPfXRZmA9Ove2a6Osze+QN66lXVe/2rnrvd1RVC7t+/n4QfEiABElBJIKnKylk3CZAACUQToNDwOiABElBOgEKjHDEdkAAJUGh4DZAACSgnQKFRjpgOSIAEKDS8BkiABJQToNAoR0wHJEACFBpeAyRAAsoJUGiUI6YDEiABCg2vARIgAeUEKDTKEdMBCZAAhYbXAAmQgHICFBrliOmABEiAQsNrgARIQDkBCo1yxHRAAiRAoeE1QAIkoJwAhUY5YjogARKg0PAaIAESUE6AQqMcMR2QAAlQaHgNkAAJKCdAoVGOmA5IgAQoNLwGSIAElBOg0ChHTAckQAIUGl4DJEACyglQaJQjpgMSIAEKDa8BEiAB5QQoNMoR0wEJkACFhtcACZCAcgIUGuWI6YAESIBCw2uABEhAOQEKjXLEdEACJECh4TVAAiSgnACFRjliOiABEqDQ8BogARJQToBCoxwxHZAACVBoeA2QAAkoJ0ChUY6YDkiABCg0vAZIgASUE6DQKEdMByRAAhQaXgMkQALKCVBolCOmAxIgAQoNrwESIAHlBCg0yhHTAQmQAIWG1wAJkIByAhQa5YjpgARIgELDa4AESEA5AQqNcsR0QAIkkJwISCCGwNWrVw8fPnz06NEjR46cPHnyypUr165dQyL+xefWrVupUqVKmzZtmkef9OnT586dO0+ePGFhYTh44oknSJIEtAhQaLTIBH/6pUuXtm7dum3bth07dhw6dOjs2bN+n3PSpEmzZ8+eL1++F198MTw8vFixYtQdv2EGZcGQ+/fvB+WJ8aS8Erhx48Zvv/32+++/R0ZG/vXXX4paHyoDrYHilCtXrlSpUpAhr8EwMfEQoNAkira+ffv2hg0blixZsnbtWjwHWXnOWbNmrVGjRkRERIkSJaz0S1+OIkChcVRzmB8MHo5+/fXXVatW4UHJ/Np9qTFXrly1atVq2LAhunV8Kce8wUCAQhMMrfj4Ody9exfiMmnSpJ07dz5utTEFj1FVq1Zt06ZN8eLFbQyDri0mQKGxGLhyd9evX58zZ87UqVOPHTum3FkADtBt3LZt20qVKoWEhARQDYu6gwCFxh3tZCRKvIH+4Ycfvv/++4sXLxrJ74Q8zzzzTJcuXapXr+6EYBiDOgIUGnVsLa0ZvbxDhw7FKBhLvZrkrGzZsn379s2fP79J9bEaxxGg0DiuSXwN6O+//x4yZMjGjRt9LaiVH88y2bJlw8sprf5jDNVDz+4///xj4q1TsmTJmjZt+uGHH6JyrcCY7l4CFBr3tl2Smzdvfvnll+iOuXPnTiCnAdUoUqRI0aJFCxUqhFdCOXLkSJEiBZ5oli5d6rVadK/8/PPPMEGMIDcYj7Nnz559+/bh3wsXLngtYjAxY8aM3bt3b9CggcH8zOYWAhwZ7JaWShjnwYMHO3fujB95QoOx7/hJv/rokyVLFmOFEubCbAQ87+CD99YxtgMHDmzatAm3V3itjsGBCQvofT9//nyfPn0wpHDw4MG8tdGj5SY7hcZNreWJdfbs2XhcwgsmT4rBA/x6IQp16tTBXYmKAbvPP/i0atUKKrNu3bqFCxdCNTBc0GB4MdlWrFixa9eu0aNHlyxZ0qeCzOxYAhQaxzaN98Aw17Ffv35aDzXeyzxIffnll5s3b16hQgU8FgnZzDJhBiYGBOODjh6MSMbzHaZTGa/8xIkTzZo169SpU7t27fj+2zg3x+bkJBTHNo2XwPCgVK9ePZ9UBp2suH/B4GC8+a5SpYo1KhM3dNxDNWnSZNmyZePHjy9dunRck3yMMYe4qcFYm8uXL8s5aXU+AQqN89voYYSYZo33MsaH4WFmY8uWLVevXj1y5Ej09dp7nrgrwdi8GTNm4KGvWrVqxoNBdw9ubf777z/jRZjTgQQoNA5sFC8hrVmzBh0fWu+bHy+Amxfc+PTu3fvpp59+3GpjCmZ1f/XVV9OmTStQoIDBMPbv39+oUSOskmMwP7M5kACFxoGNkjAkTCno2LEjXmYnNHj7jrG2mOL09ddfYzEqb3ZHpJUpU2bevHn9+/c3+GoJL9EbN268e/duR0TPIHwnQKHxnZm1JSZMmIA3vuiw0HWL/hcMQlm0aBFeW+tmtj0DOo/wTLRy5cr69esbCebcuXMtWrTAu3MjmZnHaQQoNE5rkXjxYOLSmDFj4iVpfMF6mr/88su7775rfXevRkSGkjGc5/PPPx81alRoaKhuAYwPbN++PUbo6OZkBqcRoNA4rUVi48HDBfpxY79rH+FVFDLb3uOrHaCOpXbt2vPnz8fQZJ18SaIHQ0NrMCxQNyczOIoAhcZRzREbzPr16/HEpLvUZurUqYcPHz5s2DAsGx5b2IVH6FGaOXNm69atdWNHjziWs8FAG92czOAcAhQa57RFbCRYLRxj1XT7ZfDc8eOPP9atWze2pJuPkidP3rNnT0w+QPeNfB7//vsvJAnzFeRstDqHAIXGOW3xMBKMoMVwWN3pBTlz5sQtAN4WO+4EAgsIa32OGzcOA4vlagxSkiuh1TICFBrLUBtyhClCeJOtu/xCwYIF0fWbN29eQ5W6LROG9mEcs+6bb6xSOmjQILedXCKNl0LjrIbHVEndCdmYDzl9+vSnnnrKWaGbGg2mU2IlCt1p5XPnzl28eLGpnlmZEgIUGiVY/asUE4JmzZoll8WaDN9++226dOnkbEFgxXZ03333nW4n94ABA1y6rmAQtJHxU6DQGGelNufx48cxLVv2gSWpMLJG95lCrsRF1sKFC2OIszwyCNPZsUZXgEt/uYiJS0Ol0Dii4fA76dq1qzxNOUOGDJhbgJ1nHRGxVUFgdQu8v5dXisDUBIMDjqyKmn4SEqDQJCRiy/cpU6ZERUUJrjEVG09Mzz33nJAnWE1YqatXr17y2aHzWAYoF6dVNQEKjWrC+vVjDYRvvvlGzod52Il5uTmsd4E1tAREGNmIN1C64xuFGmhSSoBCoxSvocrxaCDvh42tHbF2lKG6gjcTBvJh6JBwflj9E+t7CRlospEAhcZG+NGut2/fjvnWQhBYUOazzz6TOymE4v6ZsPgLdjXQKnvy5EnrV4fBizbML5UHDWNFPvQNa4XNdBsJJBs4cKCN7hO563v37mF4HgbUa3HA7wpdM1YOzMO8h8mTJ2N/hTNnzmhFhR8zFsrDNCuMS7ZSAdERjr6qzZs3awWGG0MshO6KVTK0TiFY03lHY2fLYsq1vJgTZvRgeJ5lIaKPA7ONRowYobvIFkYwY2NM3T5a0yPHEsJyXxXW7jt8+LDpfllhgAQoNAEC9L84bmcmTpwolMfYXyyJIGQw3YTt6OTnuAQeFyxYoNuNnaBIgF9xA4XNc4XbKAwUwFCjAL2wuOkEKDSmIzVaIXbLlv/29ujRQ3dcrFFnBvJhYQpsVGAgY7wsY8eOFZ5l4mU16csLL7zwxhtvCJVB/oTnPqEgTeoIUGjUsdWpWf7DiwcEbJOiU4V5Zjw0+aEy8O93wUBi79atmzAJ49atW5gLFkj9LGs6AQqN6UgNVYiXTfhoZdV9QNAq6Hc69nIR4pGr3bJli9zTJBf3w5o5c+YOHToIBX/66SfddTaE4jSZToBCYzpSQxXizY6QD5ul4AFByGC6CStpBlInerUDKe5HWSxsLsztxjobmNjtR7UsoogAhUYRWKlazJ/Evm5CDixVKVhVmLC2SyDVYrBcIMX9KIv33G+//bZQEJMSOFBY4GOxiUJjMfBodwsXLsQrJy3HeJ8tv8HVKhhIujCWx0i1p06dMpLN3DwYLZ0mTRqtOrGlp98Pg1p1Mt1vAhQav9H5X1DePBtDRfyv2t+SV69e9bdodDl53nkgNQtlsVwG1v0UMixZskSw0mQlAQqNlbSjfWEBPWENPewzWbFiRatjCtifXQ8pmGwpTEpYvny57gLvAZ86KzBEgEJjCJOJmeQ/s9hkOmlSNopR3pgIVqFCBa3cGE2DN2JaVqZbSYDXtJW0o33Jz001a9a0OiCX+8NqNcIZyLIuFKTJXAIUGnN56tSGLRaFec+lS5dObAvo6fAyYK5cubKwNwve7tn1WGcg9kSUhUJjaWPLd/LyH2dLA3WPM7x4Ep6esMncwYMH3XM2QRsphcbSpo2MjNTyh66Z6tWra1mZLhCIiIgQrFu3bhWsNFlDgEJjDeeHXoSLvkiRIsJQV0ujdJuzcuXKCe+eBHF324m6OF4KjXWNh94ZYVZxeHi4daGY7UlYt8FsV17qCw0NxdadXgwPkgRx1yrCdNMJUGhMR6pZofyn1V6hEfpTNc8njkEYoRsnl8JD9KNr1X769GmMEtayMt0aAhQaazhHe5GnOJcqVcq6UB7zFOBTW7Zs2R6r0tIEWaatn4pl6cm7wRmFxrpWOnTokJYzbHSL/eG0rBakFy1aNBAv6GAKpHjgZXFHIzy+yQuMBe6dNegSoNDoIjItg7BFdKFChUxz41dFAb5ZD7C4XyHHK5QxY8asWbPGS4rzRSAfJxcPFRKg0CiEG7dqLPsmTHEOCwuLm9n64/Lly+Ouyj+/uJ3BxrX+lTWxlMBQGCRpYgCsSiBAoRHgmGnCH1VhaQjhR2JmENp1YRRPu3bttO2Sxe+CUqW+2wSGFBrfcZpcgkJjMlCt6uS7d+FHolWh6elYolhe9NurRywKI29W67WUikSB4dmzZwNcB0NFwImqTgqNRc2Nl6yCJ+FHIpQy14TO1E8//dSnhyBs1davXz9zw/C7NpmhzN9vpyxokACFxiCoQLMJf1GTJ09u7ysnz7mlSJEC+zRhOV5PitYBHrWwkua4ceOEIblaZRWlYxssoWZ5d3OhIE2mEKDQmIJRvxLhQrd9tFvc6BFM//79Z8yYIcwjz5QpE/Yz6dOnD3bFjVvW3mM5GIG/vWEnEu8UGosaWrjQHSU0MTgwLEXYihd7gds7vNBrm8kYhTtKr7Ux0VwCFBpzeWrW5i6h0TwNBxtkoRH4O/icgic0Co1FbSlc6PIvxKL43O9Gxsj95OxtYQqNRfwxYE/LE7pgtUxMN04gZcqUQuabN28KVppUE6DQqCasX78wSUe/MHMYI8AFPY1xUpWLQqOKLOslARLwEKDQeFDwgARIQBUBCo0qsqyXBEjAQ4BC40HBAxIgAVUEKDSqyLJeEiABDwEKjQcFD0iABFQRoNCoIst6SYAEPAQoNB4UPCABElBFgEKjiizrJQES8BCg0HhQ8IAESEAVgeSqKma9hgncuXMHe9Ebzm5RRmFy1t27dx0YMKKyCA3d+E6AQuM7M7NL7Ny5s2zZsmbXqrC+qKgodwWskAWrNkaAj07GODEXCZBAAAQoNAHAY1ESIAFjBCg0xjgxFwmQQAAEKDQBwGNREiABYwQoNMY4MRcJkEAABCg0AcBjURIgAWMEKDTGODEXCZBAAAQoNAHAY1ESIAFjBDhgzxgnlbmwH1uHDh1UekgUdd+7d69nz56J4lRdeJIUGvsbDTvMvv766/bH4fIIMAWBQuPYNuSjk2ObhoGRQPAQoNAET1vyTEjAsQQoNI5tGgZGAsFDgEITPG3JMyEBxxKg0Di2aRgYCQQPAQpN8LQlz4QEHEuAQuPYpmFgJBA8BCg0wdOWPBMScCwBCo1jm4aBkUDwEKDQBE9b8kxIwLEEKDSObRoGRgLBQ4BCY1FbJk2qifr+/fsWBRHUbuTtVpIlSxbUZ+/0k9O8+p0euNviS5MmjVbIV69e1TIx3TiB69evC5kF/kIpmswiQKExi6ROPcKFLv9CdOql+REBWa8F/o8q4P8KCVBoFMKNW7VwoV+7di1uTh77R0DGKPD3zx1L+USAQuMTLv8zCxe6/Avx32UiKynfGAr8Exkne06XQmMRd+FCv3HjBrbftiiO4HVz+fJl4eTSpk0rWGlSTYBCo5rww/ozZMig5QlvnY4fP65lZbpBAkePHhVypk+fXrDSpJoAhUY14Yf158mTR/B05MgRwUqTEQKC0KRMmTJbtmxGKmEeRQQoNIrAJqyWQpOQiNnfBbHOnTt3SEiI2Q5Znw8EKDQ+wAoka+bMmUNDQ7VqEH4kWkWYnoCAwDAsLCxBZn61mACFxjrgwuV+6NAh6+IIRk8YFnzs2DGtMxPIaxVhurkEKDTm8pRqE56eoqKisC2RVJg2kcDevXvx8k4ri0BeqwjTzSVAoTGXp1Tb888/r2W+cuXKvn37tKxM1yUQGRkp5MmfP79gpckCAhQaCyA/dFGqVCnB2datWwUrTTIBQWieeOKJYsWKycVpVU2AQqOacGz9xYsXT55cc2tQ4acSWwWPvBHAQKRt27Z5s0SnFS1aFFqjZWW6NQQoNNZwjvaSKlUqXPRa/nBHIy90oFWQ6fv377948aIWh/DwcC0T0y0jQKGxDHW0o9KlS2v5O3/+/JYtW7SsTBcILF++XLBSaAQ4lpkoNJahjnYkCA2sS5cutTSaYHEmcMN6VyVLlgyWE3XxeVBoLG28MmXK4AFKy+XKlSs5u1ILjlb6nj17hKF6UBlOp9RCZ2U6hcZK2kkwh7tChQpaLi9cuLB582YtK9O9EhBuZ5C/Vq1aXksx0WICFBqLgSeJiIgQXC5YsECw0pSAALrPFy9enCDR8xXPTTVq1PB85YGNBCg0VsPHHY1wM79s2bITJ05YHZNr/eF25tSpU1rhv/TSS5hipmVlupUEKDRW0o72hT6aSpUqaXnFn+ipU6dqWZmegMCkSZMSpMT9Kt88xs3JY9UEKDSqCXupv3bt2l5SHyXNmjXr0qVLj77xf00C6M8S5m2kSJGiWrVqmoVpsJYAhcZa3g+8/e9//8uVK5eWYywhPHPmTC0r0z0EdG9nuKqeh5XtBxQaG5oAnZTvvPOO4BhPT/JS20LZRGLCW+2NGzcKJ9umTRvBSpPFBCg0FgN/6K5hw4bCKsJnzpyZOHGiPZG5xOuQIUOESF999VVhrrxQkCZFBCg0isDqVJs6deomTZoImfBcwBXLtfgsWrRImEWJUryd0UJnVzqFxi7ySVq0aCHMKr558+bQoUNtC87BjvFQOWLECCHAQoUKvfLKK0IGmqwnQKGxnvlDj1myZKlbt67gfvXq1Zs2bRIyJE7T+PHjT58+LZw7b2cEOHaZQrCWh12+6ReDzTB0Vej3zZs37/z58/GcRVYxBA4cOPDmm2/eunVLC0jhwoXnzp2bNCn/gmoRsied7WEP9xiv2bNnb9eunRDB4cOHBw0aJGRIVCYocpcuXQSVAY2+fftSZRx4VVBobG4U3OcLY2oQHP4+o+/T5iid4R5vmg4ePCjEgpGQ8nqpQlmalBKg0CjFq185NlHs1auXnG/AgAHCNoxy2aCxYhbY7NmzhdPBA2aPHj2EDDTZSIBCYyP8h66rVq1arlw5IY6rV6/qPjIIxYPAhD2b+vXrJ5/Ie++9x31vZUQ2Wik0NsKPdY2eBWFBLOTbvXv3Rx99lDj3fsIip23btr18+XIsr8eOnn322datWz+WzASnEEg2cOBAp8SSiOPI+OCzbt06gQG6J7AEt7BullDWvSZ0AENBsPy4cAp4/Jw8eTJvZwREtpt4R2N7EzwMoHHjxrqrNE2fPn3ChAlOiVh9HFg0o2PHjjt37pRd9e7du0CBAnIeWu0lQKGxl38874MHD5bfQCH3mDFj5syZE69YkH7BCK+PP/54w4YN8vlVr15dnswhF6fVGgIcsGcNZ6Nedu3ahVsbeYlyjBNBz2jTpk2NVurCfCCA+5SFCxfKsefMmROLn6ZLl07ORqvtBNhHY3sTxAsAHQ1Y6FNeAAF/6tevX4/HirJly8YrHCxfsCLP+++/v2rVKvmEMFMMc9zz5MkjZ6PVCQQoNE5ohXgxlChRAtsh6HZMYGdLzGB47bXXgmwg7Llz51q1aqW7EznOetSoUVgOIh47fnEqAfbROLFl+vTpo9sxjLjRWfPBBx9glI0Tz8GvmLBDE54c8S5ft7RBRLr1MIM1BCg01nD2zQv+XGMlBCzir1ts7dq19evXx3JzujmdnwG9LfXq1RN2g/OcQvv27Zs3b+75ygPnE2BnsHPb6MqVK/g5Cetve0LHQtzdunVr2bJlSEiIJ9FFB+iUwXgug3taNWjQQF5ez0UnnnhCpdA4uq2xpmezZs0wh9tIlOXLlx82bFimTJmMZHZOnr1792KChcFzxMYGX3zxBRZddk78jMQIAQqNEUp25sEAfCwlods3HBMi1iHu3Llzo0aNXPFTxKyCsWPHzpgxA2/QjCB+6623cOPjilMzcjqJKg+FxgXNjWH4GCCrO3TNcyYFCxbE5Knw8HBPitMOMGkLy1+MHj0a75gMxoYX3p06dTKYmdmcRoBC47QW8R4PBrBhmKzBXoyYKmrWrNm9e3fdocbe/alMjYyMxHLIxjuw0TXev39/Dv9V2SbK66bQKEdslgOM08OrKHnXtAS+8JSBEfqY+lykSJEEJuu/4i5mzZo1iH/79u3GvWNU3siRI3EWxoswpwMJUGgc2ChSSBiVj3Ww8JpGyvSYDW/KITfoLX7MYkUCdnSYN2/elClTDPb4emIKCwvD3C4nqKQnJB74R4BC4x83O0thpAl6fPGyxtcg8Lut9eBjzeZq6OLdsmXL0qVLV65cibHOvkZbp06dTz75BBMyfC3I/A4kQKFxYKPoh4QFuocPHz5t2jT9rN5y5MuXD4JTuXJlKI7pMxhw/xIVFbV8+fIVK1bg9bw3/zppWJQTs0ax24FOPprdQ4BC4562eixSdHmgh9iPmwVPTenTp8dq3qUffPCEgoF/HpNPBxhbuGPHDvTy4oMJ6PJGBXLN0D48LkEK5Wy0uosAhcZd7ZUwWqy5h5/lrFmzDA5FSVg+znf0HGP7FzxexXxy5MiRJk0a3FzgXzy/oFMWb9nRNxTzgbJgx148xOGDhdP9u3OJ4zz6EKs94C0+BkNzpEwCMkHwlUITBI2Y5M8//8SiWbibcOnJ4PEND0pdu3Z13bBmlwK3PmwKjfXMVXlEtys6bk6ePKnKgZp6S5YsiR4ZvlpSQ9cptVJonNISpsRx48YNjLjFi2TsT2JKhUorQfcQXrpXrFjRpXNBlcIJssopNEHWoNGng6FxWJ4OQ+Pw9seBp4cumCpVqmCLzuLFizswPIakggCFRgVVp9SJdeqwDwl2cQm8q9iUU0KnMlacwQJ6uXPnNqVCVuIWAhQat7SU/3Fi4iKGtCxZsgS6g3kM/lfkb0nsjYftqCIiIrDwKPZg8rcalnMxAQqNixvP19BPnz6NHawxlA6LTlhwj4P34lg+PWZkII59jZb5g4kAhSaYWtPouWBEzB9//IEbHHzQj4OxvEZL6uV78sknY0YAYpGKwoULc0SMHrDEYqfQJJaW1jrP27dvY7VQTHeMGX0X8y/GAWrl96TjVVHWrFkxug8bnuTNmxf/Pvfgw1dIHkQ88BCg0HhQ8CCWAIb/YnMFz784wKwCdLWgNxcPQTGf0NBQdrjEIuORSIBCI+KhkQRIwAwC3G7FDIqsgwRIQCRAoRHx0EgCJGAGAQqNGRRZBwmQgEiAQiPioZEESMAMAhQaMyiyDhIgAZEAhUbEQyMJkIAZBCg0ZlBkHSRAAiIBCo2Ih0YSIAEzCFBozKDIOkiABEQCFBoRD40kQAJmEKDQmEGRdZAACYgEKDQiHhpJgATMIEChMYMi6yABEhAJUGhEPDSSAAmYQYBCYwZF1kECJCASoNCIeGgkARIwgwCFxgyKrIMESEAkQKER8dBIAiRgBgEKjRkUWQcJkIBIgEIj4qGRBEjADAIUGjMosg4SIAGRAIVGxEMjCZCAGQQoNGZQZB0kQAIiAQqNiIdGEiABMwhQaMygyDpIgAREAhQaEQ+NJEACZhCg0JhBkXWQAAmIBCg0Ih4aSYAEzCBAoTGDIusgARIQCVBoRDw0kgAJmEGAQmMGRdZBAiQgEqDQiHhoJAESMIMAhcYMiqyDBEhAJPB/bGIa8Lo1jHEAAAAASUVORK5CYII=");

},
403371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798298-cd9b5899830857ea25de1cd4e7c157b7.gif");

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