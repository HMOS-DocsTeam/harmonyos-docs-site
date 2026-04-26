"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["474660"], {
614711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_fixes_style_dialog_arkts_fixes_style_dialog_md_941_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-dialogs-arkts-fixes-style-dialog-arkts-fixes-style-dialog-md-941.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_fixes_style_dialog_arkts_fixes_style_dialog_md_941_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog/arkts-fixes-style-dialog","title":"固定样式弹出框","description":"固定样式弹出框采用固定的布局格式，这使得开发者无需关心具体的显示布局细节，只需输入所需显示的文本内容，从而简化了使用流程，提升了便捷性。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog/arkts-fixes-style-dialog.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"固定样式弹出框","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-fixes-style-dialog","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基础自定义弹出框 (CustomDialog)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog/"},"next":{"title":"页面级弹出框","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog/arkts-fixes-style-dialog.md


const frontMatter = {
	title: '固定样式弹出框',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-fixes-style-dialog',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '固定样式弹出框';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "生命周期",
  "id": "生命周期",
  "level": 2
}, {
  "value": "操作菜单 (showActionMenu)",
  "id": "操作菜单-showactionmenu",
  "level": 2
}, {
  "value": "对话框 (showDialog)",
  "id": "对话框-showdialog",
  "level": 2
}, {
  "value": "选择器弹窗 (PickerDialog)",
  "id": "选择器弹窗-pickerdialog",
  "level": 2
}, {
  "value": "日历选择器弹窗 (CalendarPickerDialog)",
  "id": "日历选择器弹窗-calendarpickerdialog",
  "level": 3
}, {
  "value": "日期滑动选择器弹窗 (DatePickerDialog)",
  "id": "日期滑动选择器弹窗-datepickerdialog",
  "level": 3
}, {
  "value": "时间滑动选择器弹窗 (TimePickerDialog)",
  "id": "时间滑动选择器弹窗-timepickerdialog",
  "level": 3
}, {
  "value": "文本滑动选择器弹窗 (TextPickerDialog)",
  "id": "文本滑动选择器弹窗-textpickerdialog",
  "level": 3
}, {
  "value": "列表选择弹窗 (ActionSheet)",
  "id": "列表选择弹窗-actionsheet",
  "level": 2
}, {
  "value": "警告弹窗 (AlertDialog)",
  "id": "警告弹窗-alertdialog",
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
        id: "固定样式弹出框",
        children: "固定样式弹出框"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "固定样式弹出框采用固定的布局格式，这使得开发者无需关心具体的显示布局细节，只需输入所需显示的文本内容，从而简化了使用流程，提升了便捷性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以通过调用UIContext或getUIContext，在非UI页面或某些异步回调中使用本文中的接口。CalendarPickerDialog当前不支持此操作。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["操作菜单 (showActionMenu)、对话框 (showDialog)需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getpromptaction",
          children: "getPromptAction()"
        }), "方法获取到PromptAction对象，再通过该对象调用对应方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["列表选择弹出框 (ActionSheet)、警告弹出框 (AlertDialog)、选择器弹出框 (PickerDialog)中除CalendarPickerDialog都需先使用ohos.window中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getuicontext10",
          children: "getUIContext()"
        }), "方法获取UIContext实例，再通过此实例调用对应方法。或者可以通过自定义组件内置方法", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getuicontext",
          children: "getUIContext()"
        }), "获取。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作菜单 (showActionMenu)、对话框 (showDialog)、列表选择弹出框 (ActionSheet)、警告弹出框 (AlertDialog)可以设置isModal为false变成非模态弹窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["操作菜单 (showActionMenu)、对话框 (showDialog)、列表选择弹出框 (ActionSheet)和警告弹出框 (AlertDialog)不支持设置内容区的字体样式，如字体颜色、大小换行等操作，如需自定义样式，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog",
        children: "不依赖UI组件的全局自定义弹出框"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog",
        children: "基础自定义弹出框"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框提供了生命周期函数，用于通知用户该弹出框的生命周期。生命周期的触发时序依次为：onWillAppear -> onDidAppear -> onWillDisappear -> onDidDisappear，也可参照各组件API。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，对话框（showDialog）、列表选择弹出框（ActionSheet）、警告弹出框（AlertDialog）支持以下生命周期。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框显示动效前的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框弹出后的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框退出动效前的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框消失后的事件回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作菜单-showactionmenu",
      children: "操作菜单 (showActionMenu)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["操作菜单通过UIContext中的getPromptAction方法获取到PromptAction对象，再通过该对象调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#showactionmenu11",
        children: "showActionMenu"
      }), "接口实现，支持在回调或开发者自定义类中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作菜单中，title字段的字体最大放大倍数为2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示操作菜单后，菜单的响应结果会异步返回选中按钮在buttons数组中的索引。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PromptAction } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct ShowActionMenuExample {\n  build() {\n    // ...\n      Column({ space: 12 }) {\n\n        Column() {\n          Button('ShowActionMenu')\n            .margin(30)\n            .onClick(() => {\n              let uiContext = this.getUIContext();\n              let promptAction: PromptAction = uiContext.getPromptAction();\n              try {\n                promptAction.showActionMenu({\n                  title: 'showActionMenu Title Info',\n                  buttons: [\n                    {\n                      text: 'item1',\n                      color: '#666666'\n                    },\n                    {\n                      text: 'item2',\n                      color: '#000000'\n                    },\n                  ]\n                })\n                  .then(data => {\n                    console.info('showActionMenu success, click button: ' + data.index);\n                  })\n                  .catch((err: Error) => {\n                    console.error('showActionMenu error: ' + err);\n                  })\n              } catch (error) {\n              }\n            })\n        }.width('100%')\n      }\n      .width('100%')\n      .height('100%')\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(53484)/* ["default"] */.A) + "",
        width: "526",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对话框-showdialog",
      children: "对话框 (showDialog)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对话框通过UIContext中的getPromptAction方法获取到PromptAction对象，再通过该对象调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#showdialog",
        children: "showDialog"
      }), "接口实现，支持在回调或开发者自定义类中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对话框中，title字段的字体最大放大倍数为2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示对话框，对话框响应后异步返回选中按钮在buttons数组中的索引。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { PromptAction } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nexport struct ShowDialogExample {\n  build() {\n    // ...\n      Column({ space: 12 }) {\n        Column() {\n          Button('ShowDialog')\n            .margin(30)\n            .onClick(() => {\n              let uiContext = this.getUIContext();\n              let promptAction: PromptAction = uiContext.getPromptAction();\n              try {\n                promptAction.showDialog({\n                  title: 'showDialog Title Info',\n                  message: 'Message Info',\n                  buttons: [\n                    {\n                      text: 'button1',\n                      color: '#000000'\n                    },\n                    {\n                      text: 'button2',\n                      color: '#000000'\n                    }\n                  ]\n                }, (err, data) => {\n                  if (err) {\n                    console.error('showDialog err: ' + err);\n                    return;\n                  }\n                  console.info('showDialog success callback, click button: ' + data.index);\n                });\n              } catch (error) {\n                let message = (error as BusinessError).message;\n                let code = (error as BusinessError).code;\n                console.error(`showdialog args error code is ${code}, message is ${message}`);\n              }\n            })\n        }.width('100%')\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605216)/* ["default"] */.A) + "",
        width: "526",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择器弹窗-pickerdialog",
      children: "选择器弹窗 (PickerDialog)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择器弹窗通常用于在用户进行某些操作（如点击按钮）时显示特定的信息或选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日历选择器弹窗-calendarpickerdialog",
      children: "日历选择器弹窗 (CalendarPickerDialog)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日历选择器弹窗提供日历视图，包含年、月和星期信息，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-calendarpicker-dialog/ts-methods-calendarpicker-dialog",
        children: "CalendarPickerDialog"
      }), "接口实现。开发者可调用show函数，定义并弹出日历选择器弹窗。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日历选择器弹窗的弹出依赖UI的执行上下文，不可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "的地方使用，具体约束参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-calendarpicker-dialog/ts-methods-calendarpicker-dialog#calendardialogoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CalendarDialogOptions"
      }), "中的acceptButtonStyle、cancelButtonStyle属性可以实现自定义按钮样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nexport struct CalendarDialog {\n  private selectedDate: Date = new Date('2024-04-23');\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n\n        Column() {\n          Button('Show CalendarPicker Dialog')\n            .margin(20)\n            .onClick(() => {\n              console.info('CalendarDialog.show');\n              CalendarPickerDialog.show({\n                selected: this.selectedDate,\n                acceptButtonStyle: {\n                  fontColor: '#2787d9',\n                  fontSize: '16fp',\n                  backgroundColor: '#f7f7f7',\n                  borderRadius: 10\n                },\n                cancelButtonStyle: {\n                  fontColor: Color.Red,\n                  fontSize: '16fp',\n                  backgroundColor: '#f7f7f7',\n                  borderRadius: 10\n                },\n                onAccept: (date: Date) => {\n                  // 当弹出框再次弹出时显示选中的是上一次确定的日期\n                  this.selectedDate = date;\n                }\n              })\n            })\n        }.width('100%')\n\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    // ...\n    // 请将$r('app.string.CustomDialog_calender')替换为实际资源文件，在本示例中该资源文件的value值为\"日历选择器弹窗\"\n    .title($r('app.string.CustomDialog_calender'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768747)/* ["default"] */.A) + "",
        width: "526",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日期滑动选择器弹窗-datepickerdialog",
      children: "日期滑动选择器弹窗 (DatePickerDialog)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以利用指定的日期范围，创建日期滑动选择器弹窗，将日期信息清晰地展示在弹出的窗口上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日期滑动选择器弹窗通过UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#showdatepickerdialog",
        children: "showDatePickerDialog"
      }), "接口实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["弹窗中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-datepicker-dialog/ts-methods-datepicker-dialog#datepickerdialogoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "DatePickerDialogOptions"
      }), "的lunarSwitch、showTime属性为true时，会展示切换农历的开关和时间，当checkbox被选中时，会显示农历。当按下确定按钮时，弹窗会通过onDateAccept返回目前所选中的日期。如需弹窗再次弹出时显示选中的是上一次确定的日期，就要在回调中重新给selectTime进行赋值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct DatePickerDialogExample {\n  @State selectTime: Date = new Date('2023-12-25T08:30:00');\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n\n        Column() {\n          Button('showDatePickerDialog')\n            .margin(30)\n            .onClick(() => {\n              this.getUIContext().showDatePickerDialog({\n                start: new Date('2000-1-1'),\n                end: new Date('2100-12-31'),\n                selected: this.selectTime,\n                lunarSwitch: true,\n                showTime: true,\n                onDateAccept: (value: Date) => {\n                  this.selectTime = value;\n                  console.info('DatePickerDialog:onAccept()' + JSON.stringify(value));\n                },\n              })\n            })\n        }.width('100%').margin({ top: 5 })\n\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(977943)/* ["default"] */.A) + "",
        width: "526",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置disappearTextStyle、textStyle、selectedTextStyle、acceptButtonStyle、cancelButtonStyle实现了自定义文本以及按钮样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct DatePickerCustomDialogExample {\n  @State selectTime: Date = new Date('2023-12-25T08:30:00');\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('showDatePickerDialog')\n          .margin(30)\n          .onClick(() => {\n            this.getUIContext().showDatePickerDialog({\n              start: new Date('2000-1-1'),\n              end: new Date('2100-12-31'),\n              selected: this.selectTime,\n              textStyle: { color: '#2787d9', font: { size: '14fp', weight: FontWeight.Normal } },\n              selectedTextStyle: { color: '#004aaf', font: { size: '18fp', weight: FontWeight.Regular } },\n              acceptButtonStyle: {\n                fontColor: '#2787d9',\n                fontSize: '16fp',\n                backgroundColor: '#f7f7f7',\n                borderRadius: 10\n              },\n              cancelButtonStyle: {\n                fontColor: Color.Red,\n                fontSize: '16fp',\n                backgroundColor: '#f7f7f7',\n                borderRadius: 10\n              }\n            })\n          })\n      }.width('100%').margin({ top: 5 })\n    }\n    // ...\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638399)/* ["default"] */.A) + "",
        width: "526",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间滑动选择器弹窗-timepickerdialog",
      children: "时间滑动选择器弹窗 (TimePickerDialog)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据24小时的时间区间，创建时间滑动选择器弹窗，将时间信息清晰地展示在弹出的窗口上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["时间滑动选择器弹窗通过UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#showtimepickerdialog",
        children: "showTimePickerDialog"
      }), "接口实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker#disappeartextstyle10",
        children: "disappearTextStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker#textstyle10",
        children: "textStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker#selectedtextstyle10",
        children: "selectedTextStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-timepicker-dialog/ts-methods-timepicker-dialog#timepickerdialogoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "acceptButtonStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-timepicker-dialog/ts-methods-timepicker-dialog#timepickerdialogoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "cancelButtonStyle"
      }), "实现了自定义文本以及按钮样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nexport struct TimePickerDialogExample {\n  @State selectTime: Date = new Date('2023-12-25T08:30:00');\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n\n        Column() {\n          Button('showTimePickerDialog')\n            .margin(30)\n            .onClick(() => {\n              this.getUIContext().showTimePickerDialog({\n                selected: this.selectTime,\n                textStyle: { color: '#2787d9', font: { size: '14fp', weight: FontWeight.Normal } },\n                selectedTextStyle: { color: '#004aaf', font: { size: '18fp', weight: FontWeight.Regular } },\n                acceptButtonStyle: {\n                  fontColor: '#2787d9',\n                  fontSize: '16fp',\n                  backgroundColor: '#f7f7f7',\n                  borderRadius: 10\n                },\n                cancelButtonStyle: {\n                  fontColor: Color.Red,\n                  fontSize: '16fp',\n                  backgroundColor: '#f7f7f7',\n                  borderRadius: 10\n                }\n              })\n            })\n        }.width('100%').margin({ top: 5 })\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(527692)/* ["default"] */.A) + "",
        width: "526",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本滑动选择器弹窗-textpickerdialog",
      children: "文本滑动选择器弹窗 (TextPickerDialog)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据指定的选择范围，创建文本滑动选择器弹窗，将文本信息清晰地展示在弹出的窗口上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本滑动选择器弹窗通过UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#showtextpickerdialog",
        children: "showTextPickerDialog"
      }), "接口实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置range的参数类型为TextCascadePickerRangeContent[]，实现3列文本选择器弹窗。当按下确定按钮时，弹窗会通过onAccept返回目前所选中文本和索引值。如需弹窗再次弹出时显示选中的是上一次确定的文本，就要在回调中重新给select进行赋值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct TextPickerCNDialogExample {\n  private fruits: TextCascadePickerRangeContent[] = [\n    {\n      text: '辽宁省',\n      children: [{ text: '沈阳市', children: [{ text: '沈河区' }, { text: '和平区' }, { text: '浑南区' }] },\n        { text: '大连市', children: [{ text: '中山区' }, { text: '金州区' }, { text: '长海县' }] }]\n    },\n    {\n      text: '吉林省',\n      children: [{ text: '长春市', children: [{ text: '南关区' }, { text: '宽城区' }, { text: '朝阳区' }] },\n        { text: '四平市', children: [{ text: '铁西区' }, { text: '铁东区' }, { text: '梨树县' }] }]\n    },\n    {\n      text: '黑龙江省',\n      children: [{ text: '哈尔滨市', children: [{ text: '道里区' }, { text: '道外区' }, { text: '南岗区' }] },\n        { text: '牡丹江市', children: [{ text: '东安区' }, { text: '西安区' }, { text: '爱民区' }] }]\n    }\n  ];\n  private select: number = 0;\n\n  build() {\n    // ···\n      Column() {\n        Button('showTextPickerDialog')\n        // ···\n          .margin(30)\n          .onClick(() => {\n            this.getUIContext().showTextPickerDialog({\n              range: this.fruits,\n              selected: this.select,\n              onAccept: (value: TextPickerResult) => {\n                this.select = value.index as number\n              }\n            });\n          })\n      }.width('100%').margin({ top: 5 })\n    // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(222497)/* ["default"] */.A) + "",
        width: "526",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "列表选择弹窗-actionsheet",
      children: "列表选择弹窗 (ActionSheet)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表选择器弹窗适用于呈现多个操作选项，尤其当界面中仅需展示操作列表而无其他内容时。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["列表选择器弹窗通过UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#showactionsheet",
        children: "showActionSheet"
      }), "接口实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表选择弹窗中，title字段的字体最大放大倍数为2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置width、height、transition等接口，定义了弹窗的样式以及弹出动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct showActionSheetExample {\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n\n        Column() {\n          Button('showActionSheet')\n            .margin(30)\n            .onClick(() => {\n              this.getUIContext().showActionSheet({\n                title: 'ActionSheet title',\n                message: 'message',\n                autoCancel: false,\n                width: 300,\n                height: 300,\n                cornerRadius: 20,\n                borderWidth: 1,\n                borderStyle: BorderStyle.Solid,\n                borderColor: Color.Blue,\n                backgroundColor: Color.White,\n                transition: TransitionEffect.asymmetric(TransitionEffect.OPACITY\n                  .animation({ duration: 3000, curve: Curve.Sharp })\n                  .combine(TransitionEffect.scale({ x: 1.5, y: 1.5 })\n                  .animation({ duration: 3000, curve: Curve.Sharp })),\n                  TransitionEffect.OPACITY.animation({ duration: 100, curve: Curve.Smooth })\n                    .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })\n                    .animation({ duration: 100, curve: Curve.Smooth }))),\n                confirm: {\n                  value: 'Confirm button',\n                  action: () => {\n                    console.info('Get Alert Dialog handled');\n                  }\n                },\n                alignment: DialogAlignment.Center,\n                sheets: [\n                  {\n                    title: 'apples',\n                    action: () => {\n                    }\n                  },\n                  {\n                    title: 'bananas',\n                    action: () => {\n                    }\n                  },\n                  {\n                    title: 'pears',\n                    action: () => {\n                      console.info('pears');\n                    }\n                  }\n                ]\n              })\n            })\n        }.width('100%').margin({ top: 5 })\n\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.CustomDialog_ActionSheet')替换为实际资源文件，在本示例中该资源文件的value值为\"列表选择弹窗\"\n    .title($r('app.string.CustomDialog_ActionSheet'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(995161)/* ["default"] */.A) + "",
        width: "340",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "警告弹窗-alertdialog",
      children: "警告弹窗 (AlertDialog)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向用户提问或得到用户的许可时，使用警告弹窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "警告弹窗用来提示重要信息，但会中断当前任务，尽量提供必要的信息和有用的操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "避免仅使用警告弹窗提供信息，用户不喜欢被信息丰富但不可操作的警告打断。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["警告弹窗通过UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#showalertdialog",
        children: "showAlertDialog"
      }), "接口实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "警告弹窗中，title和subtitle字段的字体最大放大倍数为2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置width、height、transition等接口，定义了多个按钮弹窗的样式以及弹出动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PromptAction } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct showAlertDialogExample {\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n\n        Column() {\n          Button('showAlertDialog')\n            .margin(30)\n            .onClick(() => {\n              this.getUIContext().showAlertDialog(\n                {\n                  title: 'title',\n                  message: 'text',\n                  autoCancel: true,\n                  alignment: DialogAlignment.Center,\n                  offset: { dx: 0, dy: -20 },\n                  gridCount: 3,\n                  transition: TransitionEffect.asymmetric(TransitionEffect.OPACITY\n                    .animation({ duration: 3000, curve: Curve.Sharp })\n                    .combine(TransitionEffect.scale({ x: 1.5, y: 1.5 })\n                    .animation({ duration: 3000, curve: Curve.Sharp })),\n                    TransitionEffect.OPACITY.animation({ duration: 100, curve: Curve.Smooth })\n                      .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })\n                      .animation({ duration: 100, curve: Curve.Smooth }))),\n                  buttons: [{\n                    value: 'cancel',\n                    action: () => {\n                      console.info('Callback when the first button is clicked');\n                    }\n                  },\n                    {\n                      enabled: true,\n                      defaultFocus: true,\n                      style: DialogButtonStyle.HIGHLIGHT,\n                      value: 'ok',\n                      action: () => {\n                        console.info('Callback when the second button is clicked');\n                      }\n                    }],\n                }\n              )\n            })\n        }.width('100%').margin({ top: 5 })\n\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.CustomDialog_AlertDialog')替换为实际资源文件，在本示例中该资源文件的value值为\"警告弹窗\"\n    .title($r('app.string.CustomDialog_AlertDialog'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(633324)/* ["default"] */.A) + "",
        width: "340",
        height: "656"
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
768747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957904-642cd9c2fe8b5d4f0729d57ab9374a25.gif");

},
605216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437949-d40e24431747643b0ec6e7d3e367f062.gif");

},
53484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798254-d6a137dcc26478553409e645ccb4304a.gif");

},
638399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798256-62bf72d38720b0c7f0758d64dd827dda.gif");

},
977943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477905-b58dd5e275b57c619461c40e5f6027d8.gif");

},
995161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477907-ff3a158651044e101ac498115420a1c3.gif");

},
527692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437951-58063a00744b662c5b0263ca1adef200.gif");

},
222497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957906-0aee7e791a6ba0ce303a4c664f59b1b2.gif");

},
633324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798258-976b763991c480395009a6dc08365684.gif");

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