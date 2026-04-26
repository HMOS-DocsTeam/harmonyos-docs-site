"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["652300"], {
398665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_process_page_content_web_menu_web_menu_md_48a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-process-page-content-web-menu-web-menu-md-48a.json
var site_docs_arkweb_web_process_page_content_web_menu_web_menu_md_48a_namespaceObject = JSON.parse('{"id":"arkweb/web-process-page-content/web-menu/web-menu","title":"使用Web组件菜单处理网页内容","description":"菜单作为用户交互的关键组件，其作用是构建清晰的导航体系，通过结构化布局展示功能入口，使用户能够迅速找到目标内容或执行操作。作为人机交互的重要枢纽，它显著提升了Web组件的可访问性和用户体验，是应用设计中必不可少的部分。Web组件菜单类型包括文本选中菜单、上下文菜单和自定义菜单，应用可根据具体需求灵活选择。","source":"@site/docs/arkweb/web-process-page-content/web-menu/web-menu.md","sourceDirName":"arkweb/web-process-page-content/web-menu","slug":"/arkweb/web-process-page-content/web-menu/","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-menu/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用Web组件菜单处理网页内容","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-menu","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"网页中安全区域计算和避让适配","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-safe-area-insets/"},"next":{"title":"使用Web组件与系统剪贴板交互处理网页内容","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-clipboard/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-process-page-content/web-menu/web-menu.md


const frontMatter = {
	title: '使用Web组件菜单处理网页内容',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-menu',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件菜单处理网页内容';

const assets = {

};



const toc = [{
  "value": "文本选中菜单",
  "id": "文本选中菜单",
  "level": 2
}, {
  "value": "上下文菜单",
  "id": "上下文菜单",
  "level": 2
}, {
  "value": "自定义菜单",
  "id": "自定义菜单",
  "level": 2
}, {
  "value": "Web菜单保存图片",
  "id": "web菜单保存图片",
  "level": 2
}, {
  "value": "Web菜单获取选中文本",
  "id": "web菜单获取选中文本",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "如何禁用长按选择时弹出菜单",
  "id": "如何禁用长按选择时弹出菜单",
  "level": 3
}, {
  "value": "出现选区时手柄菜单不显示",
  "id": "出现选区时手柄菜单不显示",
  "level": 3
}, {
  "value": "如何修改文本选中菜单的样式",
  "id": "如何修改文本选中菜单的样式",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件菜单处理网页内容",
        children: "使用Web组件菜单处理网页内容"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["菜单作为用户交互的关键组件，其作用是构建清晰的导航体系，通过结构化布局展示功能入口，使用户能够迅速找到目标内容或执行操作。作为人机交互的重要枢纽，它显著提升了Web组件的可访问性和用户体验，是应用设计中必不可少的部分。Web组件菜单类型包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-process-page-content/web-menu#%E6%96%87%E6%9C%AC%E9%80%89%E4%B8%AD%E8%8F%9C%E5%8D%95",
        children: "文本选中菜单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-process-page-content/web-menu#%E4%B8%8A%E4%B8%8B%E6%96%87%E8%8F%9C%E5%8D%95",
        children: "上下文菜单"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-process-page-content/web-menu#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95",
        children: "自定义菜单"
      }), "，应用可根据具体需求灵活选择。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "菜单类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "目标元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "响应类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持自定义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkweb/web-process-page-content/web-menu#%E6%96%87%E6%9C%AC%E9%80%89%E4%B8%AD%E8%8F%9C%E5%8D%95",
              children: "文本选中菜单"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势长按"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可增减菜单项，菜单样式不可自定义"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkweb/web-process-page-content/web-menu#%E4%B8%8A%E4%B8%8B%E6%96%87%E8%8F%9C%E5%8D%95",
              children: "上下文菜单"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超链接、图片、文字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势长按、鼠标右键"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持通过菜单组件自定义"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkweb/web-process-page-content/web-menu#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95",
              children: "自定义菜单"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势长按"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持通过菜单组件自定义"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本选中菜单",
      children: "文本选中菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件的文本选中菜单是一种通过自定义元素实现的上下文交互组件，当用户选中文本时会动态显示，提供复制、分享、标注等语义化操作，具备标准化功能与良好可扩展性，是移动端文本操作的核心功能之一。文本选中菜单在用户长按选中文本或编辑状态下长按出现单手柄时弹出，菜单项横向排列。系统提供默认的菜单实现。应用可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#editmenuoptions12",
        children: "editMenuOptions"
      }), "接口对文本选中菜单进行自定义操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过onCreateMenu方法自定义菜单项，通过操作Array<", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitem12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "TextMenuItem"
        }), ">数组可对显示菜单项进行增减操作，在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitem12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "TextMenuItem"
        }), "中定义菜单项名称、图标、ID等内容。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过onMenuItemClick方法处理菜单项点击事件，当返回false时会执行系统默认逻辑。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#editmenuoptions",
          children: "EditMenuOptions"
        }), "对象，包含onCreateMenu和onMenuItemClick两个方法，通过Web组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#editmenuoptions12",
          children: "editMenuOptions"
        }), "接口与Web组件绑定。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem> {\n    let items = menuItems.filter((menuItem) => {\n      // 过滤用户需要的系统菜单项\n      return (\n        menuItem.id.equals(TextMenuItemId.CUT) ||\n        menuItem.id.equals(TextMenuItemId.COPY) ||\n        menuItem.id.equals(TextMenuItemId.PASTE)\n      );\n    });\n    let customItem1: TextMenuItem = {\n      content: 'customItem1',\n      id: TextMenuItemId.of('customItem1'),\n      // 请将$r('app.media.startIcon')替换为实际资源文件\n      icon: $r('app.media.startIcon')\n    };\n    let customItem2: TextMenuItem = {\n      // 请将$r('app.string.EntryAbility_label')替换为实际资源文件，在本示例中该资源文件的value值为\"label\"\n      content: $r('app.string.EntryAbility_label'),\n      id: TextMenuItemId.of('customItem2'),\n      // 请将$r('app.media.startIcon')替换为实际资源文件\n      icon: $r('app.media.startIcon')\n    };\n    items.push(customItem1); // 在选项列表后添加新选项\n    items.unshift(customItem2); // 在选项列表前添加选项\n    items.push(customItem1);\n    items.push(customItem1);\n    items.push(customItem1);\n    items.push(customItem1);\n    items.push(customItem1);\n    return items;\n  }\n\n  onMenuItemClick(menuItem: TextMenuItem, textRange: TextRange): boolean {\n    if (menuItem.id.equals(TextMenuItemId.CUT)) {\n      // 用户自定义行为\n      console.info('intercept id：CUT')\n      return true; // 返回true不执行系统回调\n    } else if (menuItem.id.equals(TextMenuItemId.COPY)) {\n      // 用户自定义行为\n      console.info('Do not intercept id：COPY')\n      return false; // 返回false执行系统回调\n    } else if (menuItem.id.equals(TextMenuItemId.of('customItem1'))) {\n      // 用户自定义行为\n      console.info('intercept id：customItem1')\n      return true; // 用户自定义菜单选项返回true时点击后不关闭菜单，返回false时关闭菜单\n    } else if (menuItem.id.equals(TextMenuItemId.of('customItem2'))) {\n      // 用户自定义行为\n      console.info('intercept id：customItem2')\n      return true;\n    }\n    return false; // 返回默认值false\n  }\n\n  @State editMenuOptions: EditMenuOptions = { onCreateMenu: this.onCreateMenu, onMenuItemClick: this.onMenuItemClick }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .editMenuOptions(this.editMenuOptions)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n  <head>\n      <title>测试网页</title>\n  </head>\n  <body>\n    <h1>editMenuOptions Demo</h1>\n    <span>edit menu options</span>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211234)/* ["default"] */.A) + "",
        width: "314",
        height: "485"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上下文菜单",
      children: "上下文菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上下文菜单是用户通过特定操作（如右键点击或长按富文本）触发的快捷菜单，用于提供与当前操作对象或界面元素相关的功能选项。菜单项纵向排列。系统未提供默认实现，若应用未实现，则不显示上下文菜单。应用需要创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
        children: "Menu"
      }), "组件并与Web组件绑定，在菜单弹出时可通过Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oncontextmenushow9",
        children: "onContextMenuShow"
      }), "回调接口获取上下文菜单的详细信息，包括点击位置的HTML元素信息及点击位置信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
          children: "Menu"
        }), "组件作为弹出的菜单，包含所有菜单项行为与样式。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用bindPopup方法将Menu组件与Web组件绑定。当上下文菜单弹出时，将显示创建的Menu组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在onContextMenuShow回调中获取上下文菜单事件信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#oncontextmenushowevent12",
          children: "onContextMenuShowEvent"
        }), "。其中param为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuparam/arkts-basic-components-web-webcontextmenuparam",
          children: "WebContextMenuParam"
        }), "类型，包含点击位置对应HTML元素信息和位置信息，result为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult",
          children: "WebContextMenuResult"
        }), "类型，提供常见的菜单能力。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { pasteboard } from '@kit.BasicServicesKit';\n\nconst TAG = 'ContextMenu';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  private result: WebContextMenuResult | undefined = undefined;\n  @State linkUrl: string = '';\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  @State showMenu: boolean = false;\n  uiContext: UIContext = this.getUIContext();\n\n  @Builder\n  // 构建自定义菜单及触发功能接口\n  MenuBuilder() {\n    // 以垂直列表形式显示的菜单。\n    Menu() {\n      // 展示菜单Menu中具体的菜单项。\n      MenuItem({\n        content: 'Copy Image',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.copyImage();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: 'Cut',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.cut();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: 'Copy',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.copy();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: 'Paste',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.paste();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: 'Copy link',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          let pasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, this.linkUrl);\n          pasteboard.getSystemPasteboard().setData(pasteData, (error) => {\n            if (error) {\n              return;\n            }\n          })\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: 'Select All',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.selectAll();\n          this.showMenu = false;\n        })\n    }\n    .width(150)\n    .height(300)\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index1.html'), controller: this.controller })\n      // 触发自定义弹窗\n        .onContextMenuShow((event) => {\n          if (event) {\n            this.result = event.result\n            console.info('x coord = ' + event.param.x());\n            console.info('link url = ' + event.param.getLinkUrl());\n            this.linkUrl = event.param.getLinkUrl();\n          }\n          console.info(TAG, `x: ${this.offsetX}, y: ${this.offsetY}`);\n          this.showMenu = true;\n          this.offsetX = 0;\n          this.offsetY = Math.max(this.uiContext!.px2vp(event?.param.y() ?? 0) - 0, 0);\n          return true;\n        })\n        .bindPopup(this.showMenu,\n          {\n            builder: this.MenuBuilder(),\n            enableArrow: false,\n            placement: Placement.LeftTop,\n            offset: { x: this.offsetX, y: this.offsetY },\n            mask: false,\n            onStateChange: (e) => {\n              if (!e.isVisible) {\n                this.showMenu = false;\n                this.result!.closeContextMenu();\n              }\n            }\n          })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<body>\n  <h1>onContextMenuShow</h1>\n  <a href=\"http://www.example.com\" style=\"font-size:27px\">超链接www.example.com</a>\n  <!--example.png为html同目录下图片-->\n  <div><img src=\"example.png\"></div>\n  <p>选中文字鼠标右键弹出菜单</p>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(728185)/* ["default"] */.A) + "",
        width: "324",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义菜单",
      children: "自定义菜单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义菜单赋予开发者灵活控制菜单触发时机与视觉呈现的能力，使应用能够根据用户操作场景动态匹配功能入口，显著简化开发过程中的界面适配工作，同时让交互体验更贴近用户直觉。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#bindselectionmenu13",
        children: "bindSelectionMenu"
      }), "接口实现自定义菜单功能。目前，已额外支持通过长按图片、链接和文本，触发自定义菜单及自定义文本菜单。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
          children: "Menu"
        }), "组件作为菜单弹窗。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过Web组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#bindselectionmenu13",
          children: "bindSelectionMenu"
        }), "方法绑定MenuBuilder菜单弹窗。将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webelementtype13",
          children: "WebElementType"
        }), "设置为WebElementType.IMAGE，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webresponsetype13",
          children: "responseType"
        }), "设置为WebResponseType.LONG_PRESS，表示长按图片时弹出菜单。在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#selectionmenuoptionsext13",
          children: "options"
        }), "中定义菜单显示回调onAppear、菜单消失回调onDisappear、预览窗口preview和菜单类型menuType。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\ninterface PreviewBuilderParam {\n  previewImage: Resource | string | undefined;\n  width: number;\n  height: number;\n}\n\n@Builder function previewBuilderGlobal($$: PreviewBuilderParam) {\n  Column() {\n    Image($$.previewImage)\n      .objectFit(ImageFit.Fill)\n      .autoResize(true)\n  }.width($$.width).height($$.height)\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  private result: WebContextMenuResult | undefined = undefined;\n  @State previewImage: Resource | string | undefined = undefined;\n  @State previewWidth: number = 0;\n  @State previewHeight: number = 0;\n  uiContext: UIContext = this.getUIContext();\n\n  @Builder\n  MenuBuilder() {\n    Menu() {\n      MenuItem({ content: 'Copy', })\n        .onClick(() => {\n          this.result?.copy();\n          this.result?.closeContextMenu();\n        })\n      MenuItem({ content: 'Select All', })\n        .onClick(() => {\n          this.result?.selectAll();\n          this.result?.closeContextMenu();\n        })\n    }\n  }\n  build() {\n    Column() {\n      Web({ src: $rawfile('index2.html'), controller: this.controller })\n        .bindSelectionMenu(WebElementType.IMAGE, this.MenuBuilder, WebResponseType.LONG_PRESS,\n          {\n            onAppear: () => {},\n            onDisappear: () => {\n              this.result?.closeContextMenu();\n            },\n            preview: previewBuilderGlobal({\n              previewImage: this.previewImage,\n              width: this.previewWidth,\n              height: this.previewHeight\n            }),\n            menuType: MenuType.PREVIEW_MENU\n          })\n        .onContextMenuShow((event) => {\n          if (event) {\n            this.result = event.result;\n            if (event.param.getLinkUrl()) {\n              return false;\n            }\n            this.previewWidth = this.uiContext!.px2vp(event.param.getPreviewWidth());\n            this.previewHeight = this.uiContext!.px2vp(event.param.getPreviewHeight());\n            if (event.param.getSourceUrl().indexOf('resource://rawfile/') == 0) {\n              this.previewImage = $rawfile(event.param.getSourceUrl().substr(19));\n            } else {\n              this.previewImage = event.param.getSourceUrl();\n            }\n            return true;\n          }\n          return false;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n  <head>\n      <title>测试网页</title>\n  </head>\n  <body>\n    <h1>bindSelectionMenu Demo</h1>\n    <!--img.png为html同目录下图片-->\n    <img src=\"./img.png\" >\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(707128)/* ["default"] */.A) + "",
        width: "324",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自API version 20起，支持绑定长按超链接菜单。可以为图片和链接绑定不同的自定义菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例中，PreviewBuilder定义了超链接对应菜单的弹出内容，用Web组件加载了超链接内容（需要注意PreviewBuilder中的Web组件不会接收事件），使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator",
        children: "Progress组件"
      }), "展示了加载进度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { pasteboard } from '@kit.BasicServicesKit';\n\ninterface PreviewBuilderParam {\n  width: number;\n  height: number;\n  url:Resource | string | undefined;\n}\n\ninterface PreviewBuilderParamForImage {\n  previewImage: Resource | string | undefined;\n  width: number;\n  height: number;\n}\n\n\n@Builder function previewBuilderGlobalForImage($$: PreviewBuilderParamForImage) {\n  Column() {\n    Image($$.previewImage)\n      .objectFit(ImageFit.Fill)\n      .autoResize(true)\n  }.width($$.width).height($$.height)\n}\n\n@Entry\n@Component\nstruct SelectionMenuLongPress {\n  controller: webview.WebviewController = new webview.WebviewController();\n  previewController: webview.WebviewController = new webview.WebviewController();\n  @Builder PreviewBuilder($$: PreviewBuilderParam){\n    Column() {\n      Stack(){\n        Text('') // 可选择是否展示url\n          .padding(5)\n          .width('100%')\n          .textAlign(TextAlign.Start)\n          .backgroundColor(Color.White)\n          .copyOption(CopyOptions.LocalDevice)\n          .maxLines(1)\n          .textOverflow({overflow:TextOverflow.Ellipsis})\n        Progress({ value: this.progressValue, total: 100, type: ProgressType.Linear }) // 展示进度条\n          .style({ strokeWidth: 3, enableSmoothEffect: true })\n          .backgroundColor(Color.White)\n          .opacity(this.progressVisible?1:0)\n          .backgroundColor(Color.White)\n      }.alignContent(Alignment.Bottom)\n      Web({src:$$.url,controller: new webview.WebviewController()})\n        .javaScriptAccess(true)\n        .fileAccess(true)\n        .onlineImageAccess(true)\n        .imageAccess(true)\n        .domStorageAccess(true)\n        .onPageBegin(()=>{\n          this.progressValue = 0;\n          this.progressVisible = true;\n        })\n        .onProgressChange((event)=>{\n          this.progressValue = event.newProgress;\n        })\n        .onPageEnd(()=>{\n          this.progressVisible = false;\n        })\n        .hitTestBehavior(HitTestMode.None) // 使预览Web不响应手势\n    }.width($$.width).height($$.height) // 设置预览宽高\n  }\n\n  private result: WebContextMenuResult | undefined = undefined;\n  @State previewImage: Resource | string | undefined = undefined;\n  @State previewWidth: number = 1;\n  @State previewHeight: number = 1;\n  @State previewWidthImage: number = 1;\n  @State previewHeightImage: number = 1;\n  @State linkURL:string = '';\n  @State progressValue:number = 0;\n  @State progressVisible:boolean = true;\n  uiContext: UIContext = this.getUIContext();\n\n  @Builder\n  LinkMenuBuilder() {\n    Menu() {\n      MenuItem({ content: 'Copy link', })\n        .onClick(() => {\n          const pasteboardData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, this.linkURL);\n          const systemPasteboard = pasteboard.getSystemPasteboard();\n          systemPasteboard.setData(pasteboardData);\n        })\n      MenuItem({content:'Open the link'})\n        .onClick(()=>{\n          this.controller.loadUrl(this.linkURL);\n        })\n    }\n  }\n  @Builder\n  ImageMenuBuilder() {\n    Menu() {\n      MenuItem({ content: 'Copy Image', })\n        .onClick(() => {\n          this.result?.copyImage();\n          this.result?.closeContextMenu();\n        })\n    }\n  }\n  build() {\n    Column() {\n      Web({ src: $rawfile('index3.html'), controller: this.controller })\n        .javaScriptAccess(true)\n        .fileAccess(true)\n        .onlineImageAccess(true)\n        .imageAccess(true)\n        .domStorageAccess(true)\n        .bindSelectionMenu(WebElementType.LINK, this.LinkMenuBuilder, WebResponseType.LONG_PRESS,\n          {\n            onAppear: () => {},\n            onDisappear: () => {\n              this.result?.closeContextMenu();\n            },\n            preview: this.PreviewBuilder({\n              width: 500,\n              height: 400,\n              url:this.linkURL\n            }),\n            menuType: MenuType.PREVIEW_MENU,\n          })\n        .bindSelectionMenu(WebElementType.IMAGE, this.ImageMenuBuilder, WebResponseType.LONG_PRESS,\n          {\n            onAppear: () => {},\n            onDisappear: () => {\n              this.result?.closeContextMenu();\n            },\n            preview: previewBuilderGlobalForImage({\n              previewImage: this.previewImage,\n              width: this.previewWidthImage,\n              height: this.previewHeightImage,\n            }),\n            menuType: MenuType.PREVIEW_MENU,\n          })\n        .zoomAccess(true)\n        .onContextMenuShow((event) => {\n          if (event) {\n            this.result = event.result;\n            this.previewWidthImage = this.uiContext!.px2vp(event.param.getPreviewWidth());\n            this.previewHeightImage = this.uiContext!.px2vp(event.param.getPreviewHeight());\n            if (event.param.getSourceUrl().indexOf('resource://rawfile/') == 0) {\n              this.previewImage = $rawfile(event.param.getSourceUrl().substring(19));\n            } else {\n              this.previewImage = event.param.getSourceUrl();\n            }\n            this.linkURL = event.param.getLinkUrl()\n            return true;\n          }\n          return false;\n        })\n    }\n\n  }\n  // 侧滑返回\n  onBackPress(): boolean | void {\n    try {\n      if (this.controller.accessStep(-1)) {\n        this.controller.backward();\n        return true;\n      }\n    } catch (err) {\n      console.error(`onBackPress failed with error: ${err.code}, ${err.message}`);\n    }\n    return false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "html示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<html lang=\"zh-CN\"><head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>综合信息页面</title>\n</head>\n<body>\n<div>\n    <h1>综合信息与联系详情</h1>\n    <section>\n        <a href=\"https://www.example.com\">EXAMPLE</a>\n        <br>\n        <a href=\"https://www.example1.com/\">EXAMPLE1</a>\n    </section>\n</div>\n<footer>\n    <p>请注意，以上提供的所有网址仅供演示之用。</p>\n</footer>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92306)/* ["default"] */.A) + "",
        width: "338",
        height: "518"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web菜单保存图片",
      children: "Web菜单保存图片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建MenuBuilder组件作为菜单弹窗，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton",
          children: "SaveButton"
        }), "组件实现图片保存，通过bindContextMenu将MenuBuilder与Web绑定。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在onContextMenuShow中获取图片url，通过copyLocalPicToDir或copyUrlPicToDir将图片保存至应用沙箱。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过photoAccessHelper将应用沙箱中的图片保存至图库。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { common } from '@kit.AbilityKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { systemDateTime } from '@kit.BasicServicesKit';\nimport { http } from '@kit.NetworkKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  saveButtonOptions: SaveButtonOptions = {\n    icon: SaveIconStyle.FULL_FILLED,\n    text: SaveDescription.SAVE_IMAGE,\n    buttonType: ButtonType.Capsule\n  }\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State showMenu: boolean = false;\n  @State imgUrl: string = '';\n  context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  copyLocalPicToDir(rawfilePath: string, newFileName: string): string {\n    try {\n      let srcFileDes = this.context.resourceManager.getRawFdSync(rawfilePath);\n      let dstPath = this.context.filesDir + '/' + newFileName;\n      let dest: fileIo.File = fileIo.openSync(dstPath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n      let bufsize = 4096;\n      let buf = new ArrayBuffer(bufsize);\n      let off = 0;\n      let len = 0;\n      let readedLen = 0;\n      while ((len = fileIo.readSync(srcFileDes.fd, buf, { offset: srcFileDes.offset + off, length: bufsize })) != 0) {\n        readedLen += len;\n        fileIo.writeSync(dest.fd, buf, { offset: off, length: len });\n        off = off + len;\n        if ((srcFileDes.length - readedLen) < bufsize) {\n          bufsize = srcFileDes.length - readedLen;\n        }\n      }\n      fileIo.close(dest.fd);\n      return dest.path;\n    } catch (err) {\n      console.error(`copyLocalPicToDir failed with error: ${err.code}, ${err.message}`);\n      return '';\n    }\n  }\n\n  async copyUrlPicToDir(picUrl: string, newFileName: string): Promise<string> {\n    let uri = '';\n    let httpRequest = http.createHttp();\n    try {\n      let data: http.HttpResponse = await (httpRequest.request(picUrl) as Promise<http.HttpResponse>);\n      if (data?.responseCode == http.ResponseCode.OK) {\n        let dstPath = this.context.filesDir + '/' + newFileName;\n        let dest: fileIo.File = fileIo.openSync(dstPath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n        let writeLen: number = fileIo.writeSync(dest.fd, data.result as ArrayBuffer);\n        uri = dest.path;\n      }\n    } catch (err) {\n      console.error(`copyUrlPicToDir failed with error: ${err.code}, ${err.message}`);\n    } finally {\n      httpRequest.destroy();\n    }\n    return uri;\n  }\n\n  @Builder\n  MenuBuilder() {\n    Column() {\n      Row() {\n        SaveButton(this.saveButtonOptions)\n          .onClick(async (event, result: SaveButtonOnClickResult) => {\n            if (result == SaveButtonOnClickResult.SUCCESS) {\n              try {\n                let context = this.context;\n                let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n                let uri = '';\n                if (this.imgUrl?.includes('rawfile')) {\n                  let rawFileName: string = this.imgUrl.substring(this.imgUrl.lastIndexOf('/') + 1);\n                  uri = this.copyLocalPicToDir(rawFileName, 'copyFile.png');\n                } else if (this.imgUrl?.includes('http') || this.imgUrl?.includes('https')) {\n                  uri = await this.copyUrlPicToDir(this.imgUrl, `onlinePic${systemDateTime.getTime()}.png`);\n                }\n                let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =\n                  photoAccessHelper.MediaAssetChangeRequest.createImageAssetRequest(context,  uri);\n                await phAccessHelper.applyChanges(assetChangeRequest);\n              } catch (err) {\n                console.error(`create asset failed with error: ${err.code}, ${err.message}`);\n              }\n            } else {\n              console.error(`SaveButtonOnClickResult create asset failed`);\n            }\n            this.showMenu = false;\n          })\n      }\n      .margin({ top: 20, bottom: 20 })\n      .justifyContent(FlexAlign.Center)\n    }\n    .width('80')\n    .backgroundColor(Color.White)\n    .borderRadius(10)\n  }\n\n  build() {\n    Column() {\n      Web({src: $rawfile('index4.html'), controller: this.controller})\n        .onContextMenuShow((event) => {\n          if (event) {\n            let hitValue = this.controller.getLastHitTest();\n            this.imgUrl = hitValue.extra;\n          }\n          this.showMenu = true;\n          return true;\n        })\n        .bindContextMenu(this.MenuBuilder, ResponseType.LongPress)\n        .fileAccess(true)\n        .javaScriptAccess(true)\n        .domStorageAccess(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index4.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>SavePicture</title>\n</head>\n<body>\n<h1>SavePicture</h1>\n<br>\n<br>\n<br>\n<br>\n<br>\n<!--startIcon.png为html同目录下图片-->\n<img src=\"./startIcon.png\">\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155699)/* ["default"] */.A) + "",
        width: "348",
        height: "466"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web菜单获取选中文本",
      children: "Web菜单获取选中文本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#editmenuoptions12",
        children: "editMenuOptions"
      }), "接口中没有提供获取选中文本的方式。开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#javascriptproxy",
        children: "javaScriptProxy"
      }), "获取到JavaScript的选中文本，实现自定义菜单的逻辑。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建SelectClass类，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#javascriptproxy",
          children: "javaScriptProxy"
        }), "将SelectClass对象注册到Web组件中。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在HTML侧注册选区变更监听器，在选区变更时通过SelectClass对象将选区设置到ArkTS侧。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nlet selectText = '';\n\nclass SelectClass {\n  constructor() {\n  }\n\n  setSelectText(param: string) {\n    selectText = param.toString();\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  webController: webview.WebviewController = new webview.WebviewController();\n  @State selectObj: SelectClass = new SelectClass();\n  @State textStr: string = '';\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index5.html'), controller: this.webController})\n        .javaScriptProxy({\n          object: this.selectObj,\n          name: 'selectObjName',\n          methodList: ['setSelectText'],\n          controller: this.webController\n        })\n        .height('40%')\n      Text('Click here to get the selected text.')\n        .fontSize(20)\n        .onClick(() => {\n          this.textStr = selectText;\n        })\n        .height('10%')\n      Text('Selected text is ' + this.textStr)\n        .fontSize(20)\n        .height('10%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Test Get Select</title>\n    <style>\n        body {\n          margin: 40px;\n          background-color: #f4f4f4;\n        }\n        .edit-container {\n          padding: 20px;\n          background-color: #fff;\n          border-radius: 8px;\n          box-shadow: 0 0 10px rgba(0,0,0,0.1);\n          margin: auto;\n        }\n        textarea {\n          width: 100%;\n          height: 400px;\n          font-size: 16px;\n          padding: 10px;\n          border: 1px solid #ccc;\n          border-radius: 4px;\n        }\n    </style>\n</head>\n<body>\n<div class=\"edit-container\">\n    <textarea placeholder=\"Enter the text here and select it by long pressing.\"></textarea>\n</div>\n<script>\n    document.addEventListener('selectionchange', () => {\n      var selection = window.getSelection();\n      if(selection.rangeCount > 0) {\n        var selectedText = selection.toString();\n        selectObjName.setSelectText(selectedText);\n      }\n    })\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791867)/* ["default"] */.A) + "",
        width: "333",
        height: "469"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何禁用长按选择时弹出菜单",
      children: "如何禁用长按选择时弹出菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#editmenuoptions12",
        children: "editMenuOptions"
      }), "接口将系统默认菜单全部过滤，此时无菜单项，则不会显示菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem> {\n    let items = menuItems.filter((menuItem) => {\n      // 过滤用户需要的系统菜单项\n      return false;\n    });\n    return items;\n  }\n\n  onMenuItemClick(menuItem: TextMenuItem, textRange: TextRange): boolean {\n    return false; // 返回默认值false\n  }\n\n  @State editMenuOptions: EditMenuOptions = { onCreateMenu: this.onCreateMenu, onMenuItemClick: this.onMenuItemClick }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index7.html'), controller: this.controller })\n        .editMenuOptions(this.editMenuOptions)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n  <head>\n      <title>测试网页</title>\n  </head>\n  <body>\n    <h1>editMenuOptions Demo</h1>\n    <span>edit menu options</span>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550342)/* ["default"] */.A) + "",
        width: "321",
        height: "355"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "出现选区时手柄菜单不显示",
      children: "出现选区时手柄菜单不显示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可排查是否通过JavaScript的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/TR/selection-api/",
        children: "selection-api"
      }), "对选区进行了操作，目前通过这种方式改变选区会导致文本选中菜单不显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何修改文本选中菜单的样式",
      children: "如何修改文本选中菜单的样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，应用可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#bindselectionmenu13",
        children: "bindSelectionMenu"
      }), "接口，实现自定义文本选中菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  clearSelection() {\n    try {\n      this.controller.runJavaScript(\n        'clearSelection()',\n        (error, result) => {\n          if (error) {\n            console.error(`run clearSelection JavaScript error, ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n            return;\n          }\n          if (result) {\n            console.info(`The clearSelection() return value is: ${result}`);\n          }\n        });\n    } catch (error) {\n      console.error(`ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n    }\n  }\n\n  @Builder\n  TextMenuBuilder() {\n    Menu() {\n      MenuItem({ content: 'Copy', })\n        .onClick(() => {\n          try {\n            this.controller.runJavaScript(\n              'copySelectedText()',\n              (error, result) => {\n                if (error) {\n                  console.error(`run copySelectedText JavaScript error, ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n                  return;\n                }\n                if (result) {\n                  console.info(`The copySelectedText() return value is: ${result}`);\n                }\n              });\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n          }\n          this.clearSelection()\n        }).backgroundColor(Color.Pink)\n    }\n  }\n  build() {\n    Column() {\n      Web({ src: $rawfile('bindSelectionMenuText.html'), controller: this.controller })\n        .javaScriptAccess(true)\n        .fileAccess(true)\n        .onlineImageAccess(true)\n        .imageAccess(true)\n        .domStorageAccess(true)\n        .zoomAccess(true)\n        .bindSelectionMenu(WebElementType.TEXT, this.TextMenuBuilder, WebResponseType.LONG_PRESS,\n          {\n            onAppear: () => {},\n            onDisappear: () => {},\n            menuType: MenuType.SELECTION_MENU,\n          })\n    }\n  }\n  onBackPress(): boolean | void {\n    if (this.controller.accessStep(-1)) {\n      this.controller.backward();\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--bindSelectionMenuText.html-->\n<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>自定义文本菜单</title>\n    <style>\n        .container {\n            background-color: white;\n            padding: 30px;\n            margin: 20px 0;\n        }\n\n        .context {\n            line-height: 1.8;\n            font-size: 18px;\n        }\n\n        .context span {\n            border-radius: 8px;\n            background-color: #f8f9fa;\n        }\n    </style>\n</head>\n<body>\n<div class=\"container\">\n    <div class=\"context\">\n        <span>在这个数字时代，文本复制功能变得日益重要。无论是引用名言、保存重要信息，还是分享有趣的内容，复制文本都是我们日常操作的  一部分。</span>\n    </div>\n</div>\n\n<script>\n  function copySelectedText() {\n      const selectedText = window.getSelection().toString();\n      if (selectedText.length > 0) {\n          // 使用Clipboard API复制文本\n          navigator.clipboard.writeText(selectedText)\n              .then(() => {\n                  showNotification();\n              })\n              .catch(err => {\n                  console.error('copy failed:', err);\n              });\n      }\n  }\n  function clearSelection() {\n    if (window.getSelection) {\n      window.getSelection().removeAllRanges();\n    }\n  }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930322)/* ["default"] */.A) + "",
        width: "282",
        height: "245"
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
791867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958238-a5aecb2c5e5aac6c13a1e93e35e57c01.gif");

},
728185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958236-3c8c338e871cf70ecb55f50ed01b581f.gif");

},
155699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438283-82766deedaa7ad714d36f0d6261742af.gif");

},
707128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478237-d12f32f4385908385bdf425019e5498c.gif");

},
930322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798590-e78e6a2302149b49ec48cac28b0981cb.gif");

},
550342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478239-a1d4368182deb2284297f84791da9ba0.gif");

},
92306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798588-e907dbdf68287597bf6a11dd22afaddb.gif");

},
211234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438281-c425ded68e37dffeb70b253e9102214f.gif");

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