"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["72509"], {
896210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_manage_keyboard_arkts_manage_keyboard_md_09d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-manage-keyboard-arkts-manage-keyboard-md-09d.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_manage_keyboard_arkts_manage_keyboard_md_09d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard/arkts-manage-keyboard","title":"管理软键盘","description":"软键盘是用户交互的重要途径，提供文本输入功能。本文介绍在使用系统输入框组件（TextInput、TextArea、Search、RichEditor）时，如何控制软键盘的弹出和收起。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard/arkts-manage-keyboard.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"管理软键盘","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-manage-keyboard","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图文混排","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout/"},"next":{"title":"显示图片 (Image)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard/arkts-manage-keyboard.md


const frontMatter = {
	title: '管理软键盘',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-manage-keyboard',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '管理软键盘';

const assets = {

};



const toc = [{
  "value": "弹出软键盘",
  "id": "弹出软键盘",
  "level": 2
}, {
  "value": "人机交互获得焦点",
  "id": "人机交互获得焦点",
  "level": 3
}, {
  "value": "通过代码请求焦点",
  "id": "通过代码请求焦点",
  "level": 3
}, {
  "value": "使用外接键盘的按键走焦",
  "id": "使用外接键盘的按键走焦",
  "level": 3
}, {
  "value": "收起软键盘",
  "id": "收起软键盘",
  "level": 2
}, {
  "value": "点击软键盘的关闭按钮",
  "id": "点击软键盘的关闭按钮",
  "level": 3
}, {
  "value": "拖拽文本",
  "id": "拖拽文本",
  "level": 3
}, {
  "value": "接收侧滑手势",
  "id": "接收侧滑手势",
  "level": 3
}, {
  "value": "页面发生切换",
  "id": "页面发生切换",
  "level": 3
}, {
  "value": "通过输入框的controller退出编辑态",
  "id": "通过输入框的controller退出编辑态",
  "level": 3
}, {
  "value": "焦点转移到不需要软键盘的组件",
  "id": "焦点转移到不需要软键盘的组件",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "获得焦点时阻止弹出软键盘",
  "id": "获得焦点时阻止弹出软键盘",
  "level": 3
}, {
  "value": "点击发送按钮后不收起键盘",
  "id": "点击发送按钮后不收起键盘",
  "level": 3
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "管理软键盘",
        children: "管理软键盘"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["软键盘是用户交互的重要途径，提供文本输入功能。本文介绍在使用系统输入框组件（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
        children: "Search"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "）时，如何控制软键盘的弹出和收起。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹出软键盘",
      children: "弹出软键盘"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，当焦点转移到输入框时，软键盘将自动弹出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "焦点转移到输入框的方法主要有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人机交互获得焦点，例如：单击、双击、长按输入框。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过代码设置焦点，例如：使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#requestfocus9",
          children: "requestFocus"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#defaultfocus9",
          children: "defaultFocus"
        }), "方法，将焦点转移到输入框。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用外接键盘的按键走焦，例如：Tab键、Shift+Tab键、方向键，按下后可以转移焦点。外接键盘时输入框获焦，不会弹出系统软键盘，会显示物理键盘悬浮栏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["软键盘分为系统软键盘和自定义键盘。输入框的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#enablekeyboardonfocus10",
        children: "enableKeyboardOnFocus"
      }), "属性会影响系统软键盘弹出。当enableKeyboardOnFocus属性设置为false时，只有通过点击、按键走焦才能弹出系统软键盘。enableKeyboardOnFocus属性对自定义键盘的弹出无影响。外接物理键盘会阻止弹出系统软键盘，对自定义键盘无影响。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "人机交互获得焦点",
      children: "人机交互获得焦点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了单击、双击和长按输入框时，软键盘弹出效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(230559)/* ["default"] */.A) + "",
        width: "468",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过代码请求焦点",
      children: "通过代码请求焦点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过代码控制将焦点转移到输入框，包括使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#defaultfocus9",
        children: "defaultFocus"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#requestfocus9",
        children: "requestFocus"
      }), "方法。更多细节请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event",
        children: "支持焦点处理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了点击按钮时，焦点转移到输入框并弹出软键盘的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct demo {\n  controller: TextInputController = new TextInputController();\n  @State inputValue: string = \"\";\n\n  build() {\n    Column({ space: 20 }) {\n      Button('输入框请求焦点').onClick(() => {\n        this.getUIContext().getFocusController().requestFocus(\"textInput1\")\n      })\n      TextInput({ controller: this.controller, text: this.inputValue })\n        .id(\"textInput1\")\n    }\n    .height('100%')\n    .width('80%')\n    .margin('10%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11591)/* ["default"] */.A) + "",
        width: "346",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用外接键盘的按键走焦",
      children: "使用外接键盘的按键走焦"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["外接物理键盘时，按下物理键盘的Tab键、Shift+Tab键、方向键可以转移焦点。按键走焦到输入框时，显示物理键盘悬浮栏。更多细节请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E8%B5%B0%E7%84%A6%E8%A7%84%E8%8C%83",
        children: "支持焦点处理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了外接键盘时，多次按下Tab键，焦点转移到TextInput并弹出软键盘的场景。当按下Tab键时，焦点在页面中的三个组件之间转移，可以从Text的蓝色边框或者TextInput中闪烁的光标观察到焦点转移。当TextInput获焦时，显示光标，同时显示物理键盘悬浮栏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 20 }) {\n      Text('Text.focusable(true)')\n        .focusable(true)\n\n      TextInput({ placeholder: \"TextInput\" })\n\n      TextInput({ placeholder: \"TextInput\" })\n    }\n    .height('100%')\n    .width('80%')\n    .margin('10%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(883441)/* ["default"] */.A) + "",
        width: "369",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "收起软键盘",
      children: "收起软键盘"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当输入框获得焦点时，软键盘会弹出；然而，当输入框失焦时，软键盘不会自动收起，而是由下一个获得焦点的组件决定是否收起软键盘。如果该组件需要使用软键盘，软键盘将继续显示；如果该组件不需要软键盘，则软键盘将被收起。通常情况下，除输入框外的其他组件不需要软键盘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收起软键盘的常见场景如下所示，下列场景都会将焦点转移到不需要软键盘的组件上并收起软键盘。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户主动点击软键盘的关闭按钮。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户正在拖拽文本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入框接收到了侧滑手势。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面发生切换。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过输入框的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputcontroller8",
          children: "TextInputController"
        }), "退出编辑态。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "焦点从输入框转移到另一个不需要软键盘的组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点击软键盘的关闭按钮",
      children: "点击软键盘的关闭按钮"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "软键盘自带关闭按钮，用户点击该按钮时，软键盘将被收起。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了用户主动点击软键盘关闭按钮的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 20 }) {\n      Blank()\n        .height(350)\n      Flex({ direction: FlexDirection.Row }) {\n        TextInput({ placeholder: 'TextInput' })\n      }\n      .width(250)\n    }\n    .height('100%')\n    .width('90%')\n    .padding('5%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(882803)/* ["default"] */.A) + "",
        width: "355",
        height: "430"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拖拽文本",
      children: "拖拽文本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户主动拖拽输入框的文本，开始拖拽时，软键盘将收起。更多细节请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event",
        children: "支持统一拖拽"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了用户主动拖拽文本时，软键盘被收起的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 20 }) {\n      Blank()\n        .height(350)\n      Flex({ direction: FlexDirection.Row }) {\n        TextInput({ text: '用户主动拖拽文本' })\n          .selectAll(true)\n          .defaultFocus(true)\n      }\n      .width(250)\n    }\n    .height('100%')\n    .width('90%')\n    .padding('5%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223455)/* ["default"] */.A) + "",
        width: "355",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接收侧滑手势",
      children: "接收侧滑手势"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的动图展示了“用户侧滑时软键盘收起”的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459253)/* ["default"] */.A) + "",
        width: "355",
        height: "430"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "页面发生切换",
      children: "页面发生切换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了页面切换过程中，软键盘收起的场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面跳转写法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-jump",
        children: "Navigation页面路由"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跳转前的页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n@Entry\n@Component\nstruct Index {\n  // 创建一个导航控制器对象并传入Navigation\n  pathStack: NavPathStack = new NavPathStack()\n\n  build() {\n    Navigation(this.pathStack) {\n      Column({ space: 30 }) {\n        Blank().height(150)\n        TextInput({ placeholder: 'TextInput' })\n        Button('跳转到下一个页面')\n          .onClick(() => {\n            this.pathStack.pushPath({ name: 'demo_text_1' })\n          })\n      }\n      .height('100%')\n      .width('80%')\n      .margin('10%')\n    }\n    .title('用Navigation实现页面跳转')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跳转后的页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// demo_text_1.ets\n@Builder\nexport function demo_text_1_Builder() {\n  demo_text_1()\n}\n\n@Component\nstruct demo_text_1 {\n  pathStack: NavPathStack = new NavPathStack()\n  // 跳转后的页面\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        Text('跳转后的页面没有需要键盘的组件')\n      }\n      .width('100%')\n      .height('100%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统路由表配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在跳转目标模块的配置文件module.json5添加路由表配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ...\n    \"routerMap\": \"$profile:route_map\",\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程resources/base/profile中创建route_map.json文件。添加如下配置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// route_map.json\n{\n  \"routerMap\": [\n    {\n      \"name\": \"demo_text_1\",\n      \"pageSourceFile\": \"src/main/ets/pages/demo_text_1.ets\",\n      \"buildFunction\": \"demo_text_1_Builder\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(257315)/* ["default"] */.A) + "",
        width: "346",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过输入框的controller退出编辑态",
      children: "通过输入框的controller退出编辑态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过输入框的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputcontroller8",
        children: "TextInputController"
      }), "调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#stopediting10",
        children: "stopEditing"
      }), "方法后，软键盘会自动收起。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例展示了如何通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputcontroller8",
        children: "TextInputController"
      }), "收起软键盘。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct textInputControllerCloseKeyboard {\n  controller: TextInputController = new TextInputController();\n  @State inputValue: string = '';\n\n  build() {\n    NavDestination() {\n    Column({ space: 30 }) {\n      // 请将$r('app.string.close_keyboard')替换为实际资源文件，在本示例中该资源文件的value值为\"close keyboard\"\n      Button($r('app.string.close_keyboard')).onClick(() => {\n        this.controller.stopEditing()\n      })\n      TextInput({ controller: this.controller, text: this.inputValue })\n    }\n    .width('80%')\n    .height('100%')\n    .margin('10%')\n    .justifyContent(FlexAlign.Center)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(331128)/* ["default"] */.A) + "",
        width: "346",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "焦点转移到不需要软键盘的组件",
      children: "焦点转移到不需要软键盘的组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "焦点转移到不需要软键盘的组件时，软键盘会自动收起。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["代码控制焦点转移的方法，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#requestfocus9",
        children: "requestFocus"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#clearfocus12",
        children: "clearFocus"
      }), "。更多细节请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event",
        children: "支持焦点处理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与通过输入框的controller退出编辑态方法相比，焦点转移到不需要软键盘的组件方法的优势在于，页面包含多个输入框时，开发者无需为每个输入框设置controller、再通过controller收起软键盘。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例展示了点击按钮时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#requestfocus9",
        children: "requestFocus"
      }), "方法，焦点从输入框转移到按钮上，软键盘收起的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct requestFocusCloseKeyBoard {\n  controller: TextInputController = new TextInputController();\n  @State inputValue: string = '';\n\n  build() {\n    NavDestination() {\n    Column({ space: 20 }) {\n      // 请将$r('app.string.button_get_focus')替换为实际资源文件，在本示例中该资源文件的value值为\"按钮获得焦点\"\n      Button($r('app.string.button_get_focus')).onClick(() => {\n        this.getUIContext().getFocusController().requestFocus('button')\n      }).id('button')\n      TextInput({ controller: this.controller, text: this.inputValue })\n    }\n    .justifyContent(FlexAlign.Center)\n    .height('100%')\n    .width('80%')\n    .margin('10%')\n  }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(953196)/* ["default"] */.A) + "",
        width: "346",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例展示了滚动容器在开始滚动时收起键盘的场景。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "开始滚动时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#clearfocus12",
        children: "clearFocus"
      }), "方法清理焦点，焦点转移到页面根容器节点，页面根容器节点不需要软键盘，从而收起软键盘。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  private arr: number[] = Array.from<number, number>(\n    { length: 100 } as ArrayLike<number>,\n    (_, i: number) => i + 1\n  );\n\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0 }) {\n        ForEach(this.arr, (item: number, index?: number) => {\n          ListItem() {\n            Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Center }) {\n              TextInput({ placeholder: 'TextInput ' + item })\n            }\n          }\n        }, (item: string) => item)\n      }\n      .onScrollStart(() => {\n        // List开始滚动时清理焦点，达成收起键盘的目的\n        this.getUIContext().getFocusController().clearFocus()\n      })\n      .width('80%')\n      .height('80%')\n      .margin('10%')\n    }\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(299527)/* ["default"] */.A) + "",
        width: "341",
        height: "650"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在软键盘的实际应用中，开发者可能会遇到一些特殊的使用场景或个性化需求。本节将针对这些常见问题提供相应的解决方案，帮助开发者更好地控制软键盘的行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获得焦点时阻止弹出软键盘",
      children: "获得焦点时阻止弹出软键盘"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何实现点击输入框时，不弹出软键盘？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认情况下，点击输入框后，输入框获得焦点，会自动弹出系统软键盘。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#customkeyboard10",
        children: "customKeyboard"
      }), "设置自定义键盘之后，输入框获焦时不会弹出系统软键盘，改为弹出自定义键盘。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义键盘后，系统键盘不会弹出。利用此特性，设置一个空的自定义键盘，实现“点击输入框时不显示软键盘”的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下，单击输入框，拉起空的自定义键盘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct demo {\n  controller: TextInputController = new TextInputController();\n  @State inputValue: string = \"\";\n\n  // 自定义键盘组件\n  @Builder\n  CustomKeyboardBuilder() {\n    Column() {\n    }\n  }\n\n  build() {\n    Column() {\n      TextInput({ placeholder: 'TextInput', controller: this.controller, text: this.inputValue })// 绑定自定义键盘\n        .customKeyboard(this.CustomKeyboardBuilder())\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('80%')\n    .margin('10%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(356512)/* ["default"] */.A) + "",
        width: "346",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点击发送按钮后不收起键盘",
      children: "点击发送按钮后不收起键盘"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何实现点击软键盘发送按钮之后，软键盘不收起？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["软键盘的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#enterkeytype11",
        children: "enterKeyType"
      }), "可以设置输入法回车键类型，包括发送样式。按下发送按钮实际上是按下回车键，非TV设备按下回车键时，输入框默认会失焦并且收起键盘。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["软键盘的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#enterkeytype11",
        children: "enterKeyType"
      }), "可以设置输入法回车键类型。除EnterKeyType.NEW_LINE外，enterKeyType设置其他的枚举值时，按下软键盘输入法回车键都会触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#onsubmit14",
        children: "onSubmit"
      }), "事件。可以在TextArea的onSubmit回调中，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#keepeditablestate11",
        children: "keepEditableState"
      }), "接口保持输入框编辑态，使得点击回车键后不收起键盘。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下，软键盘的回车键显示为发送样式。按下发送之后，键盘不会收起。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct demo {\n  build() {\n    Column({ space: 20 }) {\n      TextArea({ placeholder: '点击发送收起键盘' })\n        .enterKeyType(EnterKeyType.Send)\n\n      TextArea({ placeholder: 'onSubmit中设置keepEditableState，点击发送不收起键盘' })\n        .enterKeyType(EnterKeyType.Send)\n        .onSubmit((enterKey: EnterKeyType, event: SubmitEvent) => {\n          // 调用keepEditableState方法，输入框保持编辑态\n          event.keepEditableState();\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .height('100%')\n    .width('80%')\n    .margin('10%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290660)/* ["default"] */.A) + "",
        width: "346",
        height: "367"
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
223455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477853-b706f1e6900a9241caab44078d4632ce.gif");

},
459253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798204-aef10a57c3888f5db6c2043d33d1838a.gif");

},
299527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798206-962d39ab02467597b544c28d350513e0.gif");

},
356512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437901-11e19174296acaf318b5bbf023266c0b.gif");

},
331128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957854-f2bdbca372461d7f3ee0609608907cba.gif");

},
11591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798202-0b8e72957ae33c879b7b6641cdc5a6ae.gif");

},
883441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437897-f51f6cbe92f179dd12285d709fc7234a.gif");

},
290660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957856-fdee705354d7e8904f8cf396ee171eab.gif");

},
882803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957852-6f3cb438f898b072f03e2953ea880320.gif");

},
257315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437899-340cdd26d4cfaa8d6aaa691627b2f21a.gif");

},
230559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477851-6f6a0349bf0965cc6746de0660223ad7.gif");

},
953196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477855-51200e15b48b93824333cd6cdcb082c8.gif");

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