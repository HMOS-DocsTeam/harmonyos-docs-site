"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["111771"], {
568499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_focuscontroller_arkts_apis_uicontext_focuscontroller_md_7d9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-uicontext-arkts-apis-uicontext-focuscontroller-arkts-apis-uicontext-focuscontroller-md-7d9.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_focuscontroller_arkts_apis_uicontext_focuscontroller_md_7d9_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller","title":"Class (FocusController)","description":"提供控制焦点的能力，如清除、移动和激活焦点等功能。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Class (FocusController)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-focuscontroller","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-uicontext-focuscontroller"},"sidebar":"ref","previous":{"title":"Class (DynamicSyncScene)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene/arkts-apis-uicontext-dynamicsyncscene"},"next":{"title":"Class (Font)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-font/arkts-apis-uicontext-font"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller.md


const frontMatter = {
	title: 'Class (FocusController)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-focuscontroller',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-uicontext-focuscontroller'
};
const contentTitle = 'Class (FocusController)';

const assets = {

};



const toc = [{
  "value": "clearFocus12+",
  "id": "clearfocus12",
  "level": 2
}, {
  "value": "requestFocus12+",
  "id": "requestfocus12",
  "level": 2
}, {
  "value": "activate14+",
  "id": "activate14",
  "level": 2
}, {
  "value": "isActive20+",
  "id": "isactive20",
  "level": 2
}, {
  "value": "setAutoFocusTransfer14+",
  "id": "setautofocustransfer14",
  "level": 2
}, {
  "value": "setKeyProcessingMode15+",
  "id": "setkeyprocessingmode15",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "class-focuscontroller",
        children: "Class (FocusController)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供控制焦点的能力，如清除、移动和激活焦点等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(367735)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["以下API需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getfocuscontroller12",
          children: "getFocusController()"
        }), "方法获取FocusController实例，再通过该实例调用对应方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clearfocus12",
      children: "clearFocus12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearFocus(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除焦点，将焦点强制转移到页面根容器节点，焦点链路上其他节点失焦。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该示例中，按钮\"button2\"默认获焦，点击按钮\"clearFocus\"后，焦点回到该页面的根容器节点\"column1\"，此时按下键盘TAB键，按钮\"button2\"重新获焦。可通过点击\"button1\"使该按钮获焦，点击按钮\"clearFocus\"后，焦点同样回到该页面的根容器节点\"column1\"，此时按下键盘TAB键，由按钮\"button1\"重新获焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ClearFocusExample {\n  @State inputValue: string = '';\n  @State btColor: Color = Color.Blue;\n\n  build() {\n    Column({ space: 20 }) {\n      Column({ space: 5 }) {\n        Button('button1')\n          .width(200)\n          .height(70)\n          .fontColor(Color.White)\n          .focusOnTouch(true)\n          .backgroundColor(Color.Blue)\n        Button('button2')\n          .width(200)\n          .height(70)\n          .fontColor(Color.White)\n          .focusOnTouch(true)\n          .backgroundColor(this.btColor)\n          .defaultFocus(true)\n          .onFocus(() => {\n            this.btColor = Color.Red;\n          })\n          .onBlur(() => {\n            this.btColor = Color.Blue;\n          })\n        Button('clearFocus')\n          .width(200)\n          .height(70)\n          .fontColor(Color.White)\n          .backgroundColor(Color.Blue)\n          .onClick(() => {\n            this.getUIContext().getFocusController().clearFocus();\n          })\n      }\n      .id('column2')\n    }\n    .id('column1')\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requestfocus12",
      children: "requestFocus12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestFocus(key: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过组件的id将焦点转移到组件树对应的实体节点，当前帧生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["节点对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id",
              children: "组件标识"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-focus/errorcode-focus",
        children: "焦点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "150001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the component cannot be focused."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "150002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This component has an unfocusable ancestor."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "150003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the component is not on tree or does not exist."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RequestExample {\n  @State btColor: Color = Color.Blue;\n\n  build() {\n    Column({ space: 20 }) {\n      Column({ space: 5 }) {\n        Button('Button')\n          .width(200)\n          .height(70)\n          .fontColor(Color.White)\n          .focusOnTouch(true)\n          .backgroundColor(this.btColor)\n          .onFocus(() => {\n            this.btColor = Color.Red;\n          })\n          .onBlur(() => {\n            this.btColor = Color.Blue;\n          })\n          .id(\"testButton\")\n\n        Divider()\n          .vertical(false)\n          .width(\"80%\")\n          .backgroundColor(Color.Black)\n          .height(10)\n\n        Button('requestFocus')\n          .width(200)\n          .height(70)\n          .onClick(() => {\n            this.getUIContext().getFocusController().requestFocus(\"testButton\");\n          })\n\n        Button('requestFocus fail')\n          .width(200)\n          .height(70)\n          .onClick(() => {\n            try {\n              this.getUIContext().getFocusController().requestFocus(\"eee\");\n            } catch (error) {\n              console.error(`requestFocus failed code is ${error.code} message is ${error.message}`);\n            }\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activate14",
      children: "activate14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "activate(isActive: boolean, autoInactive?: boolean): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前界面的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event",
        children: "焦点激活态"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isActive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否进入/退出焦点激活态。  true表示设置进入焦点激活态，false表示设置退出焦点激活态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoInactive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置焦点激活态退出逻辑。  为true时，会自动在触摸事件、鼠标事件触发时退出，为false时，仅受开发者API控制。  默认值：true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 该示例表示在页面加载完成时进入焦点激活态，可按方向键在button间走焦\n@Entry\n@Component\nstruct ActivateExample {\n  aboutToAppear() {\n    this.getUIContext().getFocusController().activate(true, false);\n  }\n\n  aboutToDisappear() {\n    this.getUIContext().getFocusController().activate(false);\n  }\n\n  build() {\n    Row() {\n      Button('Button1')\n        .width(200)\n        .height(70)\n        .defaultFocus(true)\n\n      Button('Button2')\n        .width(200)\n        .height(70)\n\n      Button('Button3')\n        .width(200)\n        .height(70)\n    }\n    .padding(10)\n    .justifyContent(FlexAlign.SpaceBetween)\n    .width(800)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "isactive20",
      children: "isActive20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isActive(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回UI实例的焦点激活态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["焦点激活态可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "基础概念：焦点激活态"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回UI实例的焦点激活态。true表示当前进入焦点激活态，false表示当前已退出焦点激活态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验证isActive返回UI实例的焦点激活态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ClearFocusExample {\n  @State inputValue: string = '';\n  @State btColor: Color = Color.Blue;\n\n  build() {\n    Column({ space: 20 }) {\n      Column({ space: 5 }) {\n        Button('button1')\n          .width(200)\n          .height(70)\n          .fontColor(Color.White)\n          .focusOnTouch(true)\n          .backgroundColor(Color.Blue)\n          .onClick(() => {\n            console.info(\"button1 onClick\");\n            this.getUIContext().getFocusController().activate(true);\n            console.info(`focus status ${this.getUIContext().getFocusController().isActive()}`);\n          })\n        Button('button2')\n          .width(200)\n          .height(70)\n          .fontColor(Color.White)\n          .focusOnTouch(true)\n          .backgroundColor(this.btColor)\n          .defaultFocus(true)\n          .onClick(() => {\n            console.info(\"button2 onClick\");\n            this.getUIContext().getFocusController().activate(false);\n            console.info(`focus status ${this.getUIContext().getFocusController().isActive()}`);\n          })\n          .onFocus(() => {\n            this.btColor = Color.Red;\n          })\n          .onBlur(() => {\n            this.btColor = Color.Blue;\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setautofocustransfer14",
      children: "setAutoFocusTransfer14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setAutoFocusTransfer(isAutoFocusTransfer: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置页面切换时，新的页面是否需要主动获取焦点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isAutoFocusTransfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置页面切换时，新的页面是否需要主动获取焦点，例如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-router/js-apis-router",
              children: "Router"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
              children: "Menu"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog",
              children: "Dialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-popup/ohos-arkui-advanced-popup",
              children: "Popup"
            }), "等。true表示需要主动获取焦点，false表示不需要主动获取焦点。默认值为true。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      Text('这是自定义弹窗')\n        .fontSize(30)\n        .height(100)\n      Text('弹窗不能主动获取焦点')\n        .fontSize(20)\n        .height(100)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.controller != undefined) {\n            this.getUIContext().getFocusController().setAutoFocusTransfer(true);\n            this.controller.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({}),\n  });\n\n  aboutToDisappear() {\n    this.dialogController = null;\n  }\n\n  build() {\n    Column() {\n      Button('click me')\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.getUIContext().getFocusController().setAutoFocusTransfer(false);\n            this.dialogController.open();\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setkeyprocessingmode15",
      children: "setKeyProcessingMode15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setKeyProcessingMode(mode: KeyProcessingMode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键事件处理的优先级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#keyprocessingmode15",
              children: "KeyProcessingMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键处理模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 该示例演示了在页面加载完成后设置走焦类型的实现方式。\n@Entry\n@Component\nstruct Index {\n  aboutToAppear() {\n    this.getUIContext().getFocusController().setKeyProcessingMode(KeyProcessingMode.ANCESTOR_EVENT);\n  }\n\n  build() {\n    Row() {\n      Row() {\n        Button('Button1').id('Button1').onKeyEvent((event) => {\n          console.info(\"Button1\");\n          return true;\n        })\n        Button('Button2').id('Button2').onKeyEvent((event) => {\n          console.info(\"Button2\");\n          return true;\n        })\n      }\n      .width('100%')\n      .height('100%')\n      .id('Row1')\n      .onKeyEventDispatch((event) => {\n        let context = this.getUIContext();\n        context.getFocusController().requestFocus('Button1');\n        return context.dispatchKeyEvent('Button1', event);\n      })\n    }\n    .height('100%')\n    .width('100%')\n    .onKeyEventDispatch((event) => {\n      if (event.type == KeyType.Down) {\n        let context = this.getUIContext();\n        context.getFocusController().requestFocus('Row1');\n        return context.dispatchKeyEvent('Row1', event);\n      }\n      return true;\n    })\n  }\n}\n"
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
367735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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