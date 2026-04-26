"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["260941"], {
765340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_keyboard_arkts_interaction_development_guide_keyboard_md_7b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-raw-input-event-arkts-interaction-development-guide-keyboard-arkts-interaction-development-guide-keyboard-md-7b6.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_keyboard_arkts_interaction_development_guide_keyboard_md_7b6_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard/arkts-interaction-development-guide-keyboard","title":"支持键盘输入事件","description":"物理按键产生的按键事件为非指向性事件，与触摸等指向性事件不同，其事件并没有坐标位置信息，所以其会按照一定次序向获焦组件进行派发，大多数文字输入场景下，按键事件都会优先派发给输入法进行处理，以便其处理文字的联想和候选词，应用可以通过onKeyPreIme提前感知事件。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard/arkts-interaction-development-guide-keyboard.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"支持键盘输入事件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-keyboard","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持触控板输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad/"},"next":{"title":"支持表冠输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-common-events-crown-event/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard/arkts-interaction-development-guide-keyboard.md


const frontMatter = {
	title: '支持键盘输入事件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-keyboard',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持键盘输入事件';

const assets = {

};



const toc = [{
  "value": "按键事件数据流",
  "id": "按键事件数据流",
  "level": 2
}, {
  "value": "onKeyEvent &amp; onKeyPreIme",
  "id": "onkeyevent--onkeypreime",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "支持键盘输入事件",
        children: "支持键盘输入事件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["物理按键产生的按键事件为非指向性事件，与触摸等指向性事件不同，其事件并没有坐标位置信息，所以其会按照一定次序向获焦组件进行派发，大多数文字输入场景下，按键事件都会优先派发给输入法进行处理，以便其处理文字的联想和候选词，应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#onkeypreime12",
        children: "onKeyPreIme"
      }), "提前感知事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914072)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一些系统按键产生的事件并不会传递给UI组件，如电源键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "按键事件数据流",
      children: "按键事件数据流"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321633)/* ["default"] */.A) + "",
        width: "351",
        height: "414"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键事件由外设键盘等设备触发，经驱动和多模处理转换后发送给当前获焦的窗口，窗口获取到事件后，会尝试分发三次事件。三次分发的优先顺序如下，一旦事件被消费，则跳过后续分发流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["首先分发给ArkUI框架用于触发获焦组件绑定的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#onkeypreime12",
          children: "onKeyPreIme"
        }), "回调和页面快捷键。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "再向输入法分发，输入法会消费按键用作输入。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["再次将事件发给ArkUI框架，用于响应", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#onkeyeventdispatch15",
          children: "onKeyEventDispatch"
        }), "事件、获焦组件绑定的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#onkeyevent",
          children: "onKeyEvent"
        }), "回调以及走焦。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，当某输入框组件获焦，且打开了输入法，此时大部分按键事件均会被输入法消费。例如字母键会被输入法用来往输入框中输入对应字母字符、方向键会被输入法用来切换选中备选词。如果在此基础上给输入框组件绑定了快捷键，那么快捷键会优先响应事件，事件也不再会被输入法消费。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键事件到ArkUI框架之后，会先找到完整的节点获焦链。从叶子节点到根节点，逐一发送按键事件，若有子组件可以处理则优先给子组件处理，若子组件无法处理，则进行冒泡寻找父组件进行处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件的KeyEvent流程与上述过程有所不同。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#onkeypreime12",
        children: "onKeyPreIme"
      }), "返回false时，Web组件不会匹配快捷键。而在第三次按键派发过程中，Web组件会将未消费的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#keyevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "KeyEvent"
      }), "通过ReDispatch重新派发回ArkUI，在ReDispatch中再执行匹配快捷键等操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onkeyevent--onkeypreime",
      children: "onKeyEvent & onKeyPreIme"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onKeyEvent(event: (event: KeyEvent) => void): T\nonKeyEvent(event: Callback<KeyEvent, boolean>): T\nonKeyPreIme(event: Callback<KeyEvent, boolean>): T\nonKeyEventDispatch(event: Callback<KeyEvent, boolean>): T\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述四种方法的区别仅在于触发的时机（见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E9%94%AE%E4%BA%8B%E4%BB%B6%E6%95%B0%E6%8D%AE%E6%B5%81",
        children: "按键事件数据流"
      }), "）。其中onKeyPreIme的返回值决定了该按键事件后续是否会被继续分发给页面快捷键、输入法、onKeyEventDispatch和onKeyEvent。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当绑定方法的组件处于获焦状态下，外设键盘的按键事件会触发该方法，回调参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#keyevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "KeyEvent"
      }), "，可由该参数获得当前按键事件的按键行为（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#keytype",
        children: "KeyType"
      }), "）、键码（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode#keycode",
        children: "KeyCode"
      }), "）、按键英文名称（keyText）、事件来源设备类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#keysource",
        children: "KeySource"
      }), "）、事件来源设备id（deviceId）、元键按压状态（metaKey）、时间戳（timestamp）、阻止冒泡设置（stopPropagation）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct KeyEventExample {\n  @State buttonText: string = '';\n  @State buttonType: string = '';\n  @State columnText: string = '';\n  @State columnType: string = '';\n\n  build() {\n    Column() {\n      Button('onKeyEvent')\n        .defaultFocus(true)\n        .width(140).height(70)\n        .onKeyEvent((event?: KeyEvent) => { // 给Button设置onKeyEvent事件\n          if (event) {\n            if (event.type === KeyType.Down) {\n              this.buttonType = 'Down';\n            }\n            if (event.type === KeyType.Up) {\n              this.buttonType = 'Up';\n            }\n            this.buttonText = 'Button: \\n' +\n              'KeyType:' + this.buttonType + '\\n' +\n              'KeyCode:' + event.keyCode + '\\n' +\n              'KeyText:' + event.keyText;\n          }\n        })\n\n      Divider()\n      Text(this.buttonText).fontColor(Color.Green)\n\n      Divider()\n      Text(this.columnText).fontColor(Color.Red)\n    }.width('100%').height('100%').justifyContent(FlexAlign.Center)\n    .onKeyEvent((event?: KeyEvent) => { // 给父组件Column设置onKeyEvent事件\n      if (event) {\n        if (event.type === KeyType.Down) {\n          this.columnType = 'Down';\n        }\n        if (event.type === KeyType.Up) {\n          this.columnType = 'Up';\n        }\n        this.columnText = 'Column: \\n' +\n          'KeyType:' + this.columnType + '\\n' +\n          'KeyCode:' + event.keyCode + '\\n' +\n          'KeyText:' + event.keyText;\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述示例中给组件Button和其父容器Column绑定onKeyEvent。应用打开页面加载后，组件树上第一个可获焦的非容器组件自动获焦，设置Button为当前页面的默认焦点，由于Button是Column的子节点，Button获焦也同时意味着Column获焦。获焦机制见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event",
        children: "支持焦点处理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(541915)/* ["default"] */.A) + "",
        width: "306",
        height: "259"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开应用后，依次在键盘上按这些按键：空格、回车、左Ctrl、左Shift、字母A、字母Z。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于onKeyEvent事件默认是冒泡的，所以Button和Column的onKeyEvent都可以响应。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个按键都有2次回调，分别对应KeyType.Down和KeyType.Up，表示按键被按下，然后抬起。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果要阻止冒泡，即仅Button响应键盘事件，Column不响应，在Button的onKeyEvent回调中加入event.stopPropagation()方法即可，如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct KeyEventPreventBubble {\n  @State buttonText: string = '';\n  @State buttonType: string = '';\n  @State columnText: string = '';\n  @State columnType: string = '';\n\n  build() {\n    Column() {\n      Button('onKeyEvent')\n        .defaultFocus(true)\n        .width(140).height(70)\n        .onKeyEvent((event?: KeyEvent) => {\n          // 通过stopPropagation阻止事件冒泡\n          if (event) {\n            if (event.stopPropagation) {\n              event.stopPropagation();\n            }\n            if (event.type === KeyType.Down) {\n              this.buttonType = 'Down';\n            }\n            if (event.type === KeyType.Up) {\n              this.buttonType = 'Up';\n            }\n            this.buttonText = 'Button: \\n' +\n              'KeyType:' + this.buttonType + '\\n' +\n              'KeyCode:' + event.keyCode + '\\n' +\n              'KeyText:' + event.keyText;\n          }\n        })\n\n      Divider()\n      Text(this.buttonText).fontColor(Color.Green)\n\n      Divider()\n      Text(this.columnText).fontColor(Color.Red)\n    }.width('100%').height('100%').justifyContent(FlexAlign.Center)\n    .onKeyEvent((event?: KeyEvent) => { // 给父组件Column设置onKeyEvent事件\n      if (event) {\n        if (event.type === KeyType.Down) {\n          this.columnType = 'Down';\n        }\n        if (event.type === KeyType.Up) {\n          this.columnType = 'Up';\n        }\n        this.columnText = 'Column: \\n' +\n          'KeyType:' + this.columnType + '\\n' +\n          'KeyCode:' + event.keyCode + '\\n' +\n          'KeyText:' + event.keyText;\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(404005)/* ["default"] */.A) + "",
        width: "273",
        height: "218"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OnKeyPreIme屏蔽在输入框中使用方向左键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { KeyCode } from '@kit.InputKit';\n\n@Entry\n@Component\nstruct PreImeEventExample {\n  @State buttonText: string = '';\n  @State buttonType: string = '';\n  @State columnText: string = '';\n  @State columnType: string = '';\n\n  build() {\n    Column() {\n      Search({\n        placeholder: 'Search...'\n      })\n        .width('80%')\n        .height('40vp')\n        .border({ radius: '20vp' })\n        .onKeyPreIme((event: KeyEvent) => {\n          if (event.keyCode == KeyCode.KEYCODE_DPAD_LEFT) {\n            return true;\n          }\n          return false;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(343131)/* ["default"] */.A) + "",
        width: "273",
        height: "147"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用onKeyEventDispatch分发按键事件到子组件，子组件使用onKeyEvent。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Eventproject]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'Eventproject_';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Row() {\n        Button('button1')\n          .id('button1')\n          .margin({ left: 70, right: 30 })\n          .onKeyEvent((event) => {\n            hilog.info(DOMAIN, TAG, BUNDLE + 'button1');\n            return true;\n          })\n        Button('button2')\n          .id('button2')\n          .onKeyEvent((event) => {\n            hilog.info(DOMAIN, TAG, BUNDLE + 'button2');\n            return true;\n          })\n      }\n      .width('100%')\n      .height('100%')\n      .id('Row1')\n      .onKeyEventDispatch((event) => {\n        let context = this.getUIContext();\n        context.getFocusController().requestFocus('button1');\n        return context.dispatchKeyEvent('button1', event);\n      })\n\n    }\n    .height('100%')\n    .width('100%')\n    .onKeyEventDispatch((event) => {\n      if (event.type == KeyType.Down) {\n        let context = this.getUIContext();\n        context.getFocusController().requestFocus('Row1');\n        return context.dispatchKeyEvent('Row1', event);\n      }\n      return true;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(168725)/* ["default"] */.A) + "",
        width: "188",
        height: "82"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OnKeyPreIme实现回车提交（建议使用物理键盘）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Eventproject]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'Eventproject_';\n\n@Entry\n@Component\nstruct TextAreaDemo {\n  @State content: string = '';\n  @State text: string = '';\n  controller: TextAreaController = new TextAreaController();\n\n  build() {\n    Column() {\n      Text('Submissions: ' + this.content)\n      TextArea({ controller: this.controller, text: this.text })\n        .onKeyPreIme((event: KeyEvent) => {\n          hilog.info(DOMAIN, TAG, `${BUNDLE + JSON.stringify(event)}`);\n          if (event.keyCode === 2054 && event.type === KeyType.Down) { // 回车键物理码\n            const hasCtrl = event?.getModifierKeyState?.(['Ctrl']);\n            if (hasCtrl) {\n              hilog.info(DOMAIN, TAG, BUNDLE + 'Line break');\n            } else {\n              hilog.info(DOMAIN, TAG, BUNDLE + 'Submissions：' + this.text);\n              this.content = this.text;\n              this.text = '';\n              event.stopPropagation();\n            }\n            return true;\n          }\n          return false;\n        })\n        .onChange((value: string) => {\n          this.text = value;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(286049)/* ["default"] */.A) + "",
        width: "600",
        height: "180"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在输入框中输入内容后回车。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970897)/* ["default"] */.A) + "",
        width: "600",
        height: "180"
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
970897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
914072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
343131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798302-0254931262e3c7d650c037127524deb7.gif");

},
321633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437995-ea170a6da737f71e0c5072b6dc0d1931.png");

},
541915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957950-d2d0d36e69a3f1eec633182cab65d49b.gif");

},
404005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477951-5be2b3a502c6ba8a51334a079fb86b12.gif");

},
286049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
168725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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