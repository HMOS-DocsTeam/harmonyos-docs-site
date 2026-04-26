"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["271587"], {
699063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_menu_arkts_popup_and_menu_components_menu_arkts_popup_and_menu_components_menu_md_19b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-menu-arkts-popup-and-menu-components-menu-arkts-popup-and-menu-components-menu-md-19b.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_menu_arkts_popup_and_menu_components_menu_arkts_popup_and_menu_components_menu_md_19b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu/arkts-popup-and-menu-components-menu","title":"菜单控制（Menu）","description":"Menu是菜单接口，一般用于鼠标右键弹窗、点击弹窗等。具体用法请参考菜单控制。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu/arkts-popup-and-menu-components-menu.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"菜单控制（Menu）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-popup-and-menu-components-menu","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"菜单概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview/"},"next":{"title":"不依赖UI组件的全局菜单 (openMenu)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-uicontext-menu/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu/arkts-popup-and-menu-components-menu.md


const frontMatter = {
	title: '菜单控制（Menu）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-popup-and-menu-components-menu',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '菜单控制（Menu）';

const assets = {

};



const toc = [{
  "value": "创建默认样式的菜单",
  "id": "创建默认样式的菜单",
  "level": 2
}, {
  "value": "创建自定义样式的菜单",
  "id": "创建自定义样式的菜单",
  "level": 2
}, {
  "value": "使用@Builder自定义菜单内容",
  "id": "使用builder自定义菜单内容",
  "level": 3
}, {
  "value": "使用bindMenu属性绑定组件",
  "id": "使用bindmenu属性绑定组件",
  "level": 3
}, {
  "value": "创建支持右键或长按的菜单",
  "id": "创建支持右键或长按的菜单",
  "level": 2
}, {
  "value": "菜单弹出时振动效果",
  "id": "菜单弹出时振动效果",
  "level": 2
}, {
  "value": "菜单支持避让中轴",
  "id": "菜单支持避让中轴",
  "level": 2
}, {
  "value": "控制子窗菜单的事件透传",
  "id": "控制子窗菜单的事件透传",
  "level": 2
}, {
  "value": "基于绑定组件指定位置弹出菜单",
  "id": "基于绑定组件指定位置弹出菜单",
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
        id: "菜单控制menu",
        children: "菜单控制（Menu）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Menu是菜单接口，一般用于鼠标右键弹窗、点击弹窗等。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu",
        children: "菜单控制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
        children: "bindContextMenu"
      }), "并设置预览图，菜单弹出时有蒙层，此时为模态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11",
        children: "bindMenu"
      }), "或bindContextMenu未设置预览图时，菜单弹出无蒙层，此时为非模态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建默认样式的菜单",
      children: "创建默认样式的菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["菜单需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu",
        children: "bindMenu"
      }), "接口来实现。bindMenu响应绑定组件的点击事件，绑定组件后手势点击对应组件后即可弹出。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('click for Menu')\n  .bindMenu([\n    {\n      value: 'Menu1',\n      action: () => {\n        hilog.info(0xFF00, 'DialogProject', 'handle Menu1 select');\n      }\n    }\n  ])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284745)/* ["default"] */.A) + "",
        width: "360",
        height: "208"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建自定义样式的菜单",
      children: "创建自定义样式的菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当默认样式不满足开发需求时，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "自定义菜单内容，通过bindMenu接口进行菜单的自定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用builder自定义菜单内容",
      children: "使用@Builder自定义菜单内容"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass Tmp {\n  // 请将$r('app.media.view_list_filled')替换为实际资源文件\n  public iconStr2: ResourceStr = $r('app.media.view_list_filled');\n\n  set(val: Resource) {\n    this.iconStr2 = val;\n  }\n}\n\n@Entry\n@Component\nexport struct BuilderCustomMenuExample {\n  @State select: boolean = true;\n   // 请将$r('app.media.view_list_filled')替换为实际资源文件\n  private iconStr: ResourceStr = $r('app.media.view_list_filled');\n  private iconStr2: ResourceStr = $r('app.media.view_list_filled');\n  // 请将$r('app.string.copy')替换为实际资源文件，在本示例中该资源文件的value值为\"复制\"\n  private copy: ResourceStr = $r('app.string.copy');\n  // 请将$r('app.string.paste')替换为实际资源文件，在本示例中该资源文件的value值为\"粘贴\"\n  private paste: ResourceStr = $r('app.string.paste');\n\n  @Builder\n  SubMenu() {\n    Menu() {\n      MenuItem({ content: this.copy, labelInfo: 'Ctrl+C' })\n      MenuItem({ content: this.paste, labelInfo: 'Ctrl+V' })\n    }\n  }\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      // 请将$r('app.string.menu_selection')替换为实际资源文件，在本示例中该资源文件的value值为\"菜单选项\"\n      // 请将$r('app.media.icon')替换为实际资源文件\n      // 请将$r('app.media.arrow_right_filled')替换为实际资源文件\n      MenuItem({ startIcon: $r('app.media.icon'), content: $r('app.string.menu_selection') })\n      MenuItem({ startIcon: $r('app.media.icon'), content: $r('app.string.menu_selection') }).enabled(false)\n      MenuItem({\n        startIcon: this.iconStr,\n        content: $r('app.string.menu_selection'),\n        endIcon: $r('app.media.arrow_right_filled'),\n        // 当builder参数进行配置时，表示与menuItem项绑定了子菜单。鼠标hover在该菜单项时，会显示子菜单。\n        builder: this.SubMenu\n      })\n      // 请将$r('app.string.menu_subtitle')替换为实际资源文件，在本示例中该资源文件的value值为\"小标题\"\n      MenuItemGroup({ header: $r('app.string.menu_subtitle') }) {\n        // 请将$r('app.string.menu_selection')替换为实际资源文件，在本示例中该资源文件的value值为\"菜单选项\"\n        MenuItem({ content: $r('app.string.menu_selection') })\n          .selectIcon(true)\n          .selected(this.select)\n          .onChange((selected) => {\n            hilog.info(0xFF00, 'DialogProject', 'menuItem select' + selected);\n            let str: Tmp = new Tmp();\n            str.set($r('app.media.icon'));\n          })\n        // 请将$r('app.string.menu_selection')替换为实际资源文件，在本示例中该资源文件的value值为\"菜单选项\"\n        // 请将$r('app.media.view_list_filled')替换为实际资源文件\n        // 请将$r('app.media.arrow_right_filled')替换为实际资源文件\n        MenuItem({\n          startIcon: $r('app.media.view_list_filled'),\n          content: $r('app.string.menu_selection'),\n          endIcon: $r('app.media.arrow_right_filled'),\n          builder: this.SubMenu\n        })\n      }\n\n      // 请将$r('app.string.menu_selection')替换为实际资源文件，在本示例中该资源文件的value值为\"菜单选项\"\n      // 请将$r('app.media.arrow_right_filled')替换为实际资源文件\n      MenuItem({\n        startIcon: this.iconStr2,\n        content: $r('app.string.menu_selection'),\n        endIcon: $r('app.media.arrow_right_filled')\n      })\n    }\n  }\n\n  build() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用bindmenu属性绑定组件",
      children: "使用bindMenu属性绑定组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('click for Menu')\n  .bindMenu(this.MyMenu)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925416)/* ["default"] */.A) + "",
        width: "483",
        height: "527"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建支持右键或长按的菜单",
      children: "创建支持右键或长按的菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu8",
        children: "bindContextMenu"
      }), "接口自定义菜单，设置菜单弹出的触发方式，触发方式为右键或长按。使用bindContextMenu弹出的菜单项是在独立子窗口内的，可显示在应用窗口外部。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用@Builder自定义菜单内容，与上文写法相同。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确认菜单的弹出方式，并使用bindContextMenu属性绑定组件。示例中为右键弹出菜单。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('Right-click for Menu')\n  .bindContextMenu(this.MyMenu, ResponseType.RightClick)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "菜单弹出时振动效果",
      children: "菜单弹出时振动效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["菜单从API version 18开始支持振动效果。菜单弹出时，默认不振动。若希望菜单弹出时有振动效果，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "的hapticFeedbackMode属性，设置菜单弹出时的振动模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "只有一级菜单可配置弹出时振动效果。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仅当应用具备ohos.permission.VIBRATE权限，且用户启用了触感反馈时才会生效。开启触控反馈时，需要在工程的module.json5中配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "的requestPermissions字段开启振动权限，配置如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.VIBRATE\",\n  }\n],\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('click for Menu')\n  .id('click for Menu')\n  .bindMenu(this.MyMenu, { hapticFeedbackMode: HapticFeedbackMode.ENABLED})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "菜单支持避让中轴",
      children: "菜单支持避让中轴"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18起，菜单支持中轴避让功能。从API version 20开始，在2in1设备上默认启用（仅在窗口处于瀑布模式时产生避让）。开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的enableHoverMode属性，控制菜单是否启用中轴避让。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573634)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果菜单的点击位置在中轴区域，则菜单不会避让。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2in1设备上需同时满足窗口处于瀑布模式才会产生避让。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct SupportAvoidCentralAxisMenuExample {\n  @State message: string = 'Hello World';\n  // 请在resources\\base\\element\\string.json文件中配置name为'xxx'，value为非空字符串的资源\n  @State upScreen: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Upper_half_screen') as string;\n  @State middleAxle: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Middle_axle') as string;\n  @State lowerScreen: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Lower_half_screen') as string;\n  @State zone: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('zone') as string;\n  @State hoverModeStart: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('hoverMode_start') as string;\n  // 请将$r('app.media.startIcon')替换为实际资源文件\n  private iconStr: Resource = $r('app.media.startIcon');\n  @State index: number = 0;\n  @State arrayStr: Array<string> = [this.upScreen, this.middleAxle, this.lowerScreen];\n  @State enableHoverMode: boolean | undefined = true;\n  @State showInSubwindow: boolean = false;\n\n  @Builder\n  MyMenu1() {\n    Menu() {\n      // 请将$r('app.string.menu_selection')替换为实际资源文件，在本示例中该资源文件的value值为\"菜单选项\"\n      MenuItem({ startIcon: this.iconStr, content: $r('app.string.menu_selection') })\n      MenuItem({ startIcon: this.iconStr, content: $r('app.string.menu_selection') })\n      MenuItem({ startIcon: this.iconStr, content: $r('app.string.menu_selection') })\n      MenuItem({ startIcon: this.iconStr, content: $r('app.string.menu_selection') })\n    }\n  }\n\n  @State isShow: boolean = false;\n\n  build() {\n    NavDestination() {\n      Column({ space: 5 }) {\n        Button(this.zone + this.arrayStr[this.index])\n          .onClick(() => {\n            if (this.index < 2) {\n              this.index++\n            } else {\n              this.index = 0\n            }\n          })\n\n        Button(this.hoverModeStart + this.enableHoverMode)\n          .id('hoverMode_start')\n          .onClick(() => {\n            if (this.enableHoverMode === undefined) {\n              this.enableHoverMode = true\n            } else if (this.enableHoverMode === true) {\n              this.enableHoverMode = false\n            } else {\n              this.enableHoverMode = undefined\n            }\n          })\n        Button('Menu')\n          .fontWeight(FontWeight.Bold)\n          .bindMenu(this.MyMenu1(), {\n            enableHoverMode: this.enableHoverMode,\n            showInSubWindow: this.showInSubwindow\n          })\n      }\n      .height('100%')\n      .width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970602)/* ["default"] */.A) + "",
        width: "1251",
        height: "620"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制子窗菜单的事件透传",
      children: "控制子窗菜单的事件透传"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当菜单在子窗口中弹出时，默认情况下，菜单周围的事件会传递至所在窗口。从API version 20开始，开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "的modalMode属性设置子菜单弹出时的模态模式，以控制菜单周围事件是否传递。将modalMode设置为ModalMode.TARGET_WINDOW时，菜单周围的事件将不再传递，菜单下方的控件也不会响应事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct EventTransSubWindowMenuExample {\n  build() {\n    NavDestination() {\n      Column() {\n      }\n      .id('click')\n      .bindContextMenu(this.contextMenuBuilder, ResponseType.RightClick, {\n        modalMode: ModalMode.TARGET_WINDOW\n      })\n      .onClick(() => {\n        this.getUIContext().getPromptAction().showToast({\n          message: 'Clicked!'\n        })\n      })\n      .width('100%')\n      .height('100%')\n    }\n    // ...\n  }\n\n  @Builder\n  bindMenuBuilder() {\n    Menu() {\n      MenuItem({ content: 'bindMenu item' }) {\n\n      }\n    }\n  }\n\n  @Builder\n  contextMenuBuilder() {\n    Menu() {\n      MenuItem({ content: 'contextMenu item' }) {\n\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(730476)/* ["default"] */.A) + "",
        width: "462",
        height: "250"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于绑定组件指定位置弹出菜单",
      children: "基于绑定组件指定位置弹出菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["菜单从API version 20开始支持基于绑定组件在指定位置弹出。通过设置水平与垂直偏移量，控制菜单相对于绑定组件左上角的弹出位置。与单独使用offset接口不同，此方法可使菜单覆盖显示在绑定组件上。需要指定弹出位置时，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "的anchorPosition属性进行设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(531906)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当菜单处于预览状态时，设定的定位偏移量将无法生效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["预设的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#contextmenuoptions10",
          children: "placement"
        }), "对齐参数将不再生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["叠加", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#contextmenuoptions10",
          children: "offset"
        }), "参数的偏移量，最终确定菜单的精确显示位置。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当水平与垂直偏移量均设为负值时，菜单以绑定组件左下角为基准点进行显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当水平或垂直偏移量存在负值时，组件将以绑定组件的左上角为定位基准点，通过叠加偏移量参数实现反向偏移。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct BindComponentMenuExample {\n  @Builder\n  MenuBuilder() {\n    Column() {\n      Menu() {\n        MenuItemGroup() {\n          // 请将$r('app.media.app_icon')替换为实际资源文件\n          MenuItem({ startIcon: $r('app.media.app_icon'), content: 'Select Mixed Menu 1', labelInfo: '' })\n          MenuItem({ startIcon: $r('app.media.app_icon'), content: 'Select Mixed Menu 2', labelInfo: '' })\n          MenuItem({ startIcon: $r('app.media.app_icon'), content: 'Select Mixed Menu 3', labelInfo: '' })\n        }\n      }\n    }\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text()\n          .borderRadius(10)\n          .width(200)\n          .height(150)\n          .borderWidth(1)\n          .backgroundColor(Color.White)\n          .borderColor(Color.Red)\n          .margin({ top: 200, left: 125 })\n          .bindContextMenu(this.MenuBuilder, ResponseType.RightClick, {\n            anchorPosition: { x: 45, y: 50 },\n          })\n      }\n      .alignItems(HorizontalAlign.Start)\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#F5F5F5')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605123)/* ["default"] */.A) + "",
        width: "328",
        height: "258"
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
730476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437961-68ae6ec29d5037001132aa38b03a1ec9.gif");

},
605123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957916-d4566a9f5e6ba958f2f4dfea94be5874.gif");

},
531906(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
925416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477915-ac11a51d5eb35a06db7bf59acfbb25b4.png");

},
970602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798266-505ace12d60acc32722c1f5983666a83.gif");

},
284745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957914-ffe6e0c977d7a5200a696aa83e8e695c.png");

},
573634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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