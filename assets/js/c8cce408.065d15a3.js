"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["532588"], {
298360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_process_page_content_web_clipboard_web_clipboard_md_c8c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-process-page-content-web-clipboard-web-clipboard-md-c8c.json
var site_docs_arkweb_web_process_page_content_web_clipboard_web_clipboard_md_c8c_namespaceObject = JSON.parse('{"id":"arkweb/web-process-page-content/web-clipboard/web-clipboard","title":"使用Web组件与系统剪贴板交互处理网页内容","description":"开发者能够通过Web组件和系统剪贴板进行交互，实现各种类型数据的复制和粘贴。支持通过菜单、键盘快捷键以及W3C剪贴板接口对网页内容执行剪切、复制和粘贴操作。","source":"@site/docs/arkweb/web-process-page-content/web-clipboard/web-clipboard.md","sourceDirName":"arkweb/web-process-page-content/web-clipboard","slug":"/arkweb/web-process-page-content/web-clipboard/","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-clipboard/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用Web组件与系统剪贴板交互处理网页内容","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-clipboard","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件菜单处理网页内容","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-menu/"},"next":{"title":"使用Web组件的智能分词能力","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-data-detector/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-process-page-content/web-clipboard/web-clipboard.md


const frontMatter = {
	title: '使用Web组件与系统剪贴板交互处理网页内容',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-clipboard',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件与系统剪贴板交互处理网页内容';

const assets = {

};



const toc = [{
  "value": "通过菜单或键盘快捷键与系统剪贴板交互",
  "id": "通过菜单或键盘快捷键与系统剪贴板交互",
  "level": 2
}, {
  "value": "通过W3C异步剪贴板接口与系统剪贴板交互",
  "id": "通过w3c异步剪贴板接口与系统剪贴板交互",
  "level": 2
}, {
  "value": "通过W3C剪贴板事件接口与系统剪贴板交互",
  "id": "通过w3c剪贴板事件接口与系统剪贴板交互",
  "level": 2
}, {
  "value": "设置剪贴板复制范围选项",
  "id": "设置剪贴板复制范围选项",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件与系统剪贴板交互处理网页内容",
        children: "使用Web组件与系统剪贴板交互处理网页内容"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者能够通过Web组件和系统剪贴板进行交互，实现各种类型数据的复制和粘贴。支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-process-page-content/web-menu",
        children: "菜单"
      }), "、键盘快捷键以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/TR/clipboard-apis/",
        children: "W3C剪贴板接口"
      }), "对网页内容执行剪切、复制和粘贴操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过菜单或键盘快捷键与系统剪贴板交互",
      children: "通过菜单或键盘快捷键与系统剪贴板交互"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者能够自定义菜单中的功能选项，当用户选择特定选项时，开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult#cut9",
        children: "cut"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult#copy9",
        children: "copy"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult#copyimage9",
        children: "copyImage"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult#paste9",
        children: "paste"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult#pasteandmatchstyle20",
        children: "pasteAndMatchStyle"
      }), "等接口，将网页中的文本、HTML或图片数据复制到系统剪贴板，或从系统剪贴板粘贴到网页的可输入区域。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["菜单功能接口的使用可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-process-page-content/web-menu",
        children: "使用Web组件菜单处理网页内容"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备有物理键盘时，用户也能够通过键盘快捷键：CTRL + X（剪切）、CTRL + C（复制）、CTRL + V（粘贴），与剪贴板进行交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49713)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult#paste9",
        children: "paste"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webcontextmenuresult/arkts-basic-components-web-webcontextmenuresult#pasteandmatchstyle20",
        children: "pasteAndMatchStyle"
      }), "接口读取系统剪贴板数据，需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
        children: "申请访问剪贴板权限"
      }), "：ohos.permission.READ_PASTEBOARD。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过w3c异步剪贴板接口与系统剪贴板交互",
      children: "通过W3C异步剪贴板接口与系统剪贴板交互"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/TR/clipboard-apis/#async-clipboard-api",
        children: "异步剪贴板接口（Async Clipboard API）"
      }), "提供给网页开发者读写系统剪贴板的方法，这让Web应用程序可以实现剪切、复制和粘贴的功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "writeText：将文本内容写入系统剪贴板。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 写入文本到剪贴板\nawait navigator.clipboard.writeText(\"文本内容\");\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "write：将任意类型内容写入系统剪贴板。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 写入 HTML到剪贴板\nconst clipboardItem = new ClipboardItem({\n    'text/html': new Blob([\"HTML内容\"], { type: 'text/html' })\n});\nawait navigator.clipboard.write([clipboardItem]);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "readText：从系统剪贴板读取文本内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从剪贴板读取文本\nconst text = await navigator.clipboard.readText()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "read()：从系统剪贴板读取任意类型内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从剪贴板读取 HTML\nconst clipboardItems = await navigator.clipboard.read();\nconst htmlBlob = await clipboardItems[0].getType('text/html');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544713)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过异步剪贴板接口read()和readText()方法读取系统剪贴板数据，需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
        children: "申请访问剪贴板权限"
      }), "：ohos.permission.READ_PASTEBOARD。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('clipboard.html'), controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--clipboard.html-->\n<!DOCTYPE html>\n<html lang=\"zh\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Clipboard API demo</title>\n    <style>\n        #output {\n            margin-top: 20px;\n            border: 1px solid #ccc;\n            padding: 10px;\n            min-height: 50px;\n        }\n        .button-group {\n            margin-bottom: 10px;\n        }\n    </style>\n</head>\n<body>\n<h1>Clipboard API demo</h1>\n<div class=\"button-group\">\n    <button id=\"copyTextButton\">复制文本</button>\n    <button id=\"copyHtmlButton\">复制HTML</button>\n</div>\n\n<div class=\"button-group\">\n    <button id=\"pasteTextButton\">粘贴文本</button>\n    <button id=\"pasteHtmlButton\">粘贴HTML</button>\n    <button id=\"clearOutputButton\">清空输入框</button>\n</div>\n\n<div id=\"result\"></div>\n<div id=\"output\" contenteditable=\"true\"></div>\n\n<script>\n    const textContent = \"这是一些文本内容\";\n    const htmlContent = `<strong><em>这是一些 HTML 内容</em></strong>`;\n\n    // writeText()接口\n    async function copyText() {\n        await navigator.clipboard.writeText(textContent);\n        document.getElementById('result').innerText = \"文本已复制到剪贴板！\";\n    }\n\n    // write()接口\n    async function copyHtml() {\n        const clipboardItem = new ClipboardItem({\n            'text/html': new Blob([htmlContent], { type: 'text/html' })\n        });\n        await navigator.clipboard.write([clipboardItem]);\n        document.getElementById('result').innerText = \"HTML 已复制到剪贴板！\";\n    }\n\n    // readText()接口\n    async function pasteText() {\n        const text = await navigator.clipboard.readText();\n        document.getElementById('output').innerText = text;\n    }\n\n    // read()接口\n    async function pasteHtml() {\n        const items = await navigator.clipboard.read();\n        for (const item of items) {\n            const types = item.types;\n            if (types.includes('text/html')) {\n                const blob = await item.getType('text/html');\n                const html = await blob.text();\n                document.getElementById('output').innerHTML = html;\n                return;\n            }\n        }\n        document.getElementById('result').innerText = \"剪贴板中没有 HTML 内容。\";\n    }\n\n    function clearOutput() {\n        document.getElementById('result').innerText = \" \";\n        document.getElementById('output').innerHTML = '';\n    }\n\n    // 事件监听\n    document.getElementById('copyTextButton').addEventListener('click', copyText);\n    document.getElementById('copyHtmlButton').addEventListener('click', copyHtml);\n    document.getElementById('pasteTextButton').addEventListener('click', pasteText);\n    document.getElementById('pasteHtmlButton').addEventListener('click', pasteHtml);\n    document.getElementById('clearOutputButton').addEventListener('click', clearOutput);\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5权限配置："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_PASTEBOARD，应用访问剪贴板内容需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
        children: "申请访问剪贴板权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ···\n    \"requestPermissions\": [\n      {\n        \"name\" : \"ohos.permission.READ_PASTEBOARD\",\n        \"reason\": \"$string:module_desc\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"FormAbility\"\n          ],\n          \"when\":\"inuse\"\n        }\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(188800)/* ["default"] */.A) + "",
        width: "480",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过w3c剪贴板事件接口与系统剪贴板交互",
      children: "通过W3C剪贴板事件接口与系统剪贴板交互"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/TR/clipboard-apis/#clipboard-events-and-interfaces",
        children: "剪贴板事件（Clipboard Event）"
      }), "描述了与剪贴板相关的cut、copy和paste事件。当用户执行剪切、复制或粘贴操作时，相应的事件将被触发。开发者可以通过监听这些事件，对系统剪贴板进行读写操作，或拦截默认行为，以更改复制或粘贴的结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('clipboard_event.html'), controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--clipboard_event.html-->\n<!DOCTYPE html>\n<html lang=\"zh\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Clipboard Event demo</title>\n    <style>\n        .output {\n            margin-top: 20px;\n            border: 1px solid #ccc;\n            padding: 10px;\n            max-width: 400px;\n        }\n    </style>\n</head>\n<body>\n<h2>Clipboard Event监听示例</h2>\n<textarea id=\"inputArea\" rows=\"4\" cols=\"50\" placeholder=\"在这里输入文本，尝试复制和粘贴...\"></textarea>\n\n<div class=\"output\" id=\"output\">\n    <h3>输出内容:</h3>\n    <p id=\"resultText\">没有复制或粘贴内容。</p>\n</div>\n\n<script>\n    const inputArea = document.getElementById('inputArea');\n    const resultText = document.getElementById('resultText');\n\n    // 监听复制事件\n    inputArea.addEventListener('copy', (event) => {\n        const selection = document.getSelection();\n        const copiedText = selection.toString() + \"(复制自ArkWeb)\"\n        event.clipboardData.setData(\"text/plain\", copiedText);\n        event.preventDefault();\n        resultText.textContent = `复制的内容: \"${copiedText}\"`;\n    });\n\n    // 监听粘贴事件\n    inputArea.addEventListener('paste', (event) => {\n        const pastedData = event.clipboardData.getData('text');\n        resultText.textContent = `粘贴的内容: \"${pastedData}\"`;\n    });\n\n    // 监听剪切事件\n    inputArea.addEventListener('cut', (event) => {\n        const selection = document.getSelection();\n        const cutText = selection.toString() + \"(剪切自ArkWeb)\"\n        event.clipboardData.setData(\"text/plain\", cutText);\n        selection.deleteFromDocument();\n        event.preventDefault();\n        resultText.textContent = `剪切的内容: \"${cutText}\"`;\n    });\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537353)/* ["default"] */.A) + "",
        width: "480",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置剪贴板复制范围选项",
      children: "设置剪贴板复制范围选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过设置Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#copyoptions11",
        children: "copyOptions"
      }), "属性，来指定Web组件上剪贴板复制的范围。可以指定的选项有：CopyOptions.None（不支持复制）、CopyOptions.InApp（支持应用内复制）以及CopyOptions.LocalDevice（支持设备内复制）。默认值为：CopyOptions.LocalDevice，即默认支持设备内部的复制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State copyOption: CopyOptions = CopyOptions.LocalDevice;\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('copyOptions.html'), controller: this.controller })\n        .copyOptions(this.copyOption)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--copyOptions.html-->\n<!DOCTYPE html>\n<html lang=\"zh\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Clipboard CopyOption demo</title>\n</head>\n<body>\n<h2>Clipboard CopyOption示例</h2>\n<textarea id=\"inputArea\"></textarea>\n</body>\n</html>\n"
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
537353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958240-3191452cdaf7f084b835abddbe8b9ddf.gif");

},
544713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
188800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438285-192f694f8e364ce5cb956ece79828730.gif");

},
49713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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