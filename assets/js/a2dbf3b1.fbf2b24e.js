"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["722263"], {
569869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_dialog_web_dialog_md_a2d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-dialog-web-dialog-md-a2d.json
var site_docs_arkweb_web_manage_page_interaction_web_dialog_web_dialog_md_a2d_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-dialog/web-dialog","title":"使用Web组件显示网页弹框","description":"在HTML中，可以使用JavaScript创建三种类型的弹框：警告框window.alert(message)、确认框window.confirm(message)和提示框window.prompt(message, defaultValue)。这些弹框可以用于向用户传递信息、确认操作或请求输入。","source":"@site/docs/arkweb/web-manage-page-interaction/web-dialog/web-dialog.md","sourceDirName":"arkweb/web-manage-page-interaction/web-dialog","slug":"/arkweb/web-manage-page-interaction/web-dialog/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-dialog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用Web组件显示网页弹框","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-dialog","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件管理网页缩放","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-scale-zoom/"},"next":{"title":"使用Web组件的拖拽功能与网页交互","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-drag/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-dialog/web-dialog.md


const frontMatter = {
	title: '使用Web组件显示网页弹框',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-dialog',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件显示网页弹框';

const assets = {

};



const toc = [{
  "value": "实现Alert弹框",
  "id": "实现alert弹框",
  "level": 2
}, {
  "value": "实现Confirm弹框",
  "id": "实现confirm弹框",
  "level": 2
}, {
  "value": "实现Prompt弹框",
  "id": "实现prompt弹框",
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
        id: "使用web组件显示网页弹框",
        children: "使用Web组件显示网页弹框"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HTML中，可以使用JavaScript创建三种类型的弹框：警告框window.alert(message)、确认框window.confirm(message)和提示框window.prompt(message, defaultValue)。这些弹框可以用于向用户传递信息、确认操作或请求输入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前，ArkWeb暂未提供默认的应用弹框。如果需要网页的弹框能够正常使用，应用需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onalert",
        children: "onAlert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onconfirm",
        children: "onConfirm"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onprompt9",
        children: "onPrompt"
      }), "接口自定义弹框功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现alert弹框",
      children: "实现Alert弹框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "window.alert()用于显示一个包含可选信息的对话框。警告框用于确保用户可以得到某些信息。当警告框出现后，用户需要点击确定按钮才能继续进行操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可选参数message是要显示在警告对话框中的字符串，如果传入其他类型的值，会转换成字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方法不存在返回值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onalert",
        children: "onAlert"
      }), "事件监听网页alert方法，并创建合适的弹框。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-alert-dialog-box/ts-methods-alert-dialog-box",
            children: "AlertDialog"
          }), "创建弹框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Web({ src: $rawfile('test.html'), controller: this.webviewController })\n        .onAlert((event) => {\n          if (event) {\n            console.info('event.url:' + event.url);\n            console.info('event.message:' + event.message);\n            this.uiContext.showAlertDialog({\n              title: 'Warning',\n              message: event.message,\n              confirm:{\n                value: 'confirm',\n                action: () => {\n                  console.info('Alert confirmed.');\n                  event.result.handleConfirm();\n                }\n              },\n              cancel: () => {\n                event.result.handleCancel();\n              }\n            })\n          }\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的HTML。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- test.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <style>\n        button,label,input {\n        margin: 5px 0;\n        }\n    </style>\n</head>\n<body>\n<input type=\"text\" id=\"alert-message\" placeholder=\"message for alert\"><br/>\n<button onclick=\"handleAlert()\">alert</button><br/>\n<script>\n    function handleAlert() {\n        let message = document.getElementById(\"alert-message\").value;\n        let result = window.alert(message ? message : 'alert');\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog#alertdialog",
            children: "CustomDialog-AlertDialog"
          }), "创建弹框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AlertDialog } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct AlertDialogPage {\n  @State message: string = 'Hello World';\n  @State title: string = 'Hello World';\n  @State subtitle: string = '';\n  @State result: JsResult | null = null;\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  dialogControllerAlert: CustomDialogController = new CustomDialogController({\n    builder: AlertDialog({\n      primaryTitle: this.title,\n      secondaryTitle: this.subtitle,\n      content: this.message,\n      primaryButton: {\n        value: 'confirm',\n        role: ButtonRole.ERROR,\n        action: () => {\n          console.info('Callback when the second button is clicked');\n          this.result?.handleConfirm();\n        }\n      },\n    }),\n    onWillDismiss: () => {\n      this.result?.handleCancel();\n      this.dialogControllerAlert.close();\n    }\n  })\n  build() {\n    Column() {\n      Web({ src: $rawfile('alert.html'), controller: this.webviewController })\n        .onAlert((event) => {\n          if (event) {\n            console.info('event.url:' + event.url);\n            console.info('event.message:' + event.message);\n            this.title = 'Warning';\n            this.message = event.message;\n            this.result = event.result;\n            this.dialogControllerAlert.open();\n          }\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- alert.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <style>\n        button,label,input {\n        margin: 5px 0;\n        }\n    </style>\n</head>\n<body>\n<input type=\"text\" id=\"alert-message\" placeholder=\"message for alert\"><br/>\n<button onclick=\"handleAlert()\">alert</button><br/>\n<script>\n    function handleAlert() {\n        let message = document.getElementById(\"alert-message\").value;\n        let result = window.alert(message ? message : 'alert');\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(749837)/* ["default"] */.A) + "",
            width: "901",
            height: "533"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现confirm弹框",
      children: "实现Confirm弹框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "window.confirm()用于显示一个包含可选消息的对话框，并等待用户确认或取消该对话框。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可选参数message是要显示在对话框中的字符串，如果传入其他类型的值，会转换成字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该方法返回一个布尔值，表示是否选择了确定（true）或取消（false）。如果应用忽略了页面内的对话框，那么返回值总是false。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认框用于验证用户是否接受某个操作，常用于询问用户是否离开网页，以防页面表单等数据丢失。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onconfirm",
        children: "onConfirm"
      }), "事件监听网页confirm方法，并创建合适的弹框。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-alert-dialog-box/ts-methods-alert-dialog-box",
            children: "AlertDialog"
          }), "创建弹框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('test.html'), controller: this.webviewController })\n        .onConfirm((event) => {\n          if (event) {\n            console.info('event.url:' + event.url);\n            console.info('event.message:' + event.message);\n            this.uiContext.showAlertDialog({\n              title: 'Confirm',\n              message: event.message,\n              primaryButton: {\n                value: 'cancel',\n                action: () => {\n                  event.result.handleCancel();\n                }\n              },\n              secondaryButton: {\n                value: 'ok',\n                action: () => {\n                  event.result.handleConfirm();\n                }\n              },\n              cancel: () => {\n                event.result.handleCancel();\n              }\n            })\n          }\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- test.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <style>\n        button,label,input {\n        margin: 5px 0;\n        }\n    </style>\n</head>\n<body>\nresult：<label id=\"confirmLabel\" for=\"confirm\"></label><br/>\n<input type=\"text\" id=\"confirm-message\" placeholder=\"message for confirm\"><br/>\n<button id=\"confirm\" onclick=\"handleConfirm()\">confirm</button><br/>\n<script>\n    function handleConfirm() {\n        let message = document.getElementById(\"confirm-message\").value;\n        let result = window.confirm(message ? message : 'confirm');\n        console.info(result);\n        document.getElementById(\"confirmLabel\").innerHTML=String(result);\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog#confirmdialog",
            children: "CustomDialog-ConfirmDialog"
          }), "创建弹框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { ConfirmDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct DialogConfirmDialog {\n  @State message: string = 'Hello World';\n  @State title: string = 'Hello World';\n  @State result: JsResult | null = null;\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  isChecked = false;\n  dialogControllerCheckBox: CustomDialogController = new CustomDialogController({\n    builder: ConfirmDialog({\n      title: this.title,\n      content: this.message,\n      // 勾选框选中状态\n      isChecked: this.isChecked,\n      // 勾选框说明文本\n      checkTips: 'No further prompts after prohibition',\n      primaryButton: {\n        value: 'prohibited',\n        action: () => {\n          this.result?.handleCancel();\n        },\n      },\n      secondaryButton: {\n        value: 'allow',\n        action: () => {\n          this.isChecked = false;\n          console.info('Callback when the second button is clicked');\n          this.result?.handleConfirm();\n        }\n      },\n      onCheckedChange: (checked) => {\n        this.isChecked = checked;\n        console.info('Callback when the checkbox is clicked');\n      },\n    }),\n    onWillDismiss: () => {\n      this.result?.handleCancel();\n      this.dialogControllerCheckBox.close();\n    },\n    autoCancel: true\n  })\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('confirm.html'), controller: this.webviewController })\n        .onConfirm((event) => {\n          if (event) {\n            if (this.isChecked) {\n              event.result.handleCancel();\n            } else {\n              console.info('event.url:' + event.url);\n              console.info('event.message:' + event.message);\n              this.title = 'Confirm';\n              this.message = event.message;\n              this.result = event.result;\n              this.dialogControllerCheckBox.open();\n            }\n          }\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- confirm.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <style>\n        button,label,input {\n        margin: 5px 0;\n        }\n    </style>\n</head>\n<body>\nresult：<label id=\"confirmLabel\" for=\"confirm\"></label><br/>\n<input type=\"text\" id=\"confirm-message\" placeholder=\"message for confirm\"><br/>\n<button id=\"confirm\" onclick=\"handleConfirm()\">confirm</button><br/>\n<script>\n    function handleConfirm() {\n        let message = document.getElementById(\"confirm-message\").value;\n        let result = window.confirm(message ? message : 'confirm');\n        console.info(result);\n        document.getElementById(\"confirmLabel\").innerHTML=String(result);\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(875778)/* ["default"] */.A) + "",
            width: "901",
            height: "533"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现prompt弹框",
      children: "实现Prompt弹框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "window.prompt()用于显示一个对话框，并等待用户提交文本或取消对话框。用户需要输入某个值，然后点击确认或取消按钮。点击确认返回输入的值，点击取消返回null。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可选参数message向用户显示的一串文本。如果在提示窗口中没有什么可显示的，可以省略。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可选参数defaultValue是一个字符串，包含文本输入字段中显示的默认值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回值为用户输入文本的字符串，或null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提示框用于提示用户输入某个值，常用于需要用户输入临时的口令或验证码等场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onprompt9",
        children: "onPrompt"
      }), "事件监听网页prompt方法，并创建合适的弹框。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog#customcontentdialog12",
            children: "CustomDialog-CustomContentDialog"
          }), "创建弹框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { CustomContentDialog } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct PromptDialog {\n  @State message: string = 'Hello World';\n  @State title: string = 'Hello World';\n  @State result: JsResult | null = null;\n  promptResult: string = '';\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: CustomContentDialog({\n      primaryTitle: this.title,\n      contentBuilder: () => {\n        this.buildContent();\n      },\n      buttons: [\n        {\n          value: 'cancel',\n          buttonStyle: ButtonStyleMode.TEXTUAL,\n          action: () => {\n            console.info('Callback when the button is clicked');\n            this.result?.handleCancel();\n          }\n        },\n        {\n          value: 'confirm',\n          buttonStyle: ButtonStyleMode.TEXTUAL,\n          action: () => {\n            this.result?.handlePromptConfirm(this.promptResult);\n          }\n        }\n      ],\n    }),\n    onWillDismiss: () => {\n      this.result?.handleCancel();\n      this.dialogController.close();\n    }\n  });\n\n  // 自定义弹出框的内容区\n  @Builder\n  buildContent(): void {\n    Column() {\n      Text(this.message)\n      TextInput()\n        .onChange((value) => {\n          this.promptResult = value;\n        })\n        .defaultFocus(true)\n    }\n    .width('100%')\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('prompt.html'), controller: this.webviewController })\n        .onPrompt((event) => {\n          if (event) {\n            console.info('event.url:' + event.url);\n            console.info('event.message:' + event.message);\n            console.info('event.value:' + event.value);\n            this.title = 'Prompt';\n            this.message = event.message;\n            this.promptResult = event.value;\n            this.result = event.result;\n            this.dialogController.open();\n          }\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- prompt.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <style>\n        button,label,input {\n        margin: 5px 0;\n        }\n    </style>\n</head>\n<body>\nresult：<label id=\"promptLabel\" for=\"prompt\"></label><br/>\n<input type=\"text\" id=\"prompt-message\" placeholder=\"message for prompt\"><br/>\n<input type=\"text\" id=\"prompt-value\" placeholder=\"default value for prompt\"><br/>\n<button id=\"prompt\" onclick=\"handlePrompt()\">prompt</button><br/>\n<script>\n    function handlePrompt() {\n        let message = document.getElementById(\"prompt-message\").value;\n        let defaultValue = document.getElementById(\"prompt-value\").value;\n        let result = window.prompt(message ? message : 'prompt', defaultValue);\n        console.info(result);\n        document.getElementById(\"promptLabel\").innerHTML=result;\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要的资源文件string.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"string\": [\n    {\n      \"name\": \"from\",\n      \"value\": \"来自\"\n    },\n    {\n      \"name\": \"warn\",\n      \"value\": \"的警告\"\n    },\n    {\n      \"name\": \"notarize\",\n      \"value\": \"确认\"\n    },\n    {\n      \"name\": \"cancel\",\n      \"value\": \"取消\"\n    },\n    {\n      \"name\": \"info\",\n      \"value\": \"的消息\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(255955)/* ["default"] */.A) + "",
        width: "893",
        height: "513"
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
255955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478223-69d625f09043a2e7baf34680933292da.gif");

},
875778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958222-7a57cfbb57d68d6eb0f2a9be1304b667.gif");

},
749837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438267-4e0c1da300d9d150779ec8f56d011690.gif");

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