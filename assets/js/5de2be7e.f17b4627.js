"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["96447"], {
200758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_frontend_page_js_web_in_page_app_function_invoking_web_in_page_app_function_invoking_md_5de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-frontend-page-js-web-in-page-app-function-invoking-web-in-page-app-function-invoking-md-5de.json
var site_docs_arkweb_web_use_frontend_page_js_web_in_page_app_function_invoking_web_in_page_app_function_invoking_md_5de_namespaceObject = JSON.parse('{"id":"arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking/web-in-page-app-function-invoking","title":"前端页面调用应用侧函数","description":"开发者使用Web组件将应用侧代码注册到前端页面中，注册完成之后，前端页面中使用注册的对象名称就可以调用应用侧的方法。","source":"@site/docs/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking/web-in-page-app-function-invoking.md","sourceDirName":"arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking","slug":"/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking/","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"前端页面调用应用侧函数","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-in-page-app-function-invoking","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用侧调用前端页面函数","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking/"},"next":{"title":"建立应用侧与前端页面数据通道","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-app-page-data-channel/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking/web-in-page-app-function-invoking.md


const frontMatter = {
	title: '前端页面调用应用侧函数',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-in-page-app-function-invoking',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '前端页面调用应用侧函数';

const assets = {

};



const toc = [{
  "value": "如何建立应用侧与H5侧的交互通道",
  "id": "如何建立应用侧与h5侧的交互通道",
  "level": 2
}, {
  "value": "复杂类型使用方法",
  "id": "复杂类型使用方法",
  "level": 2
}, {
  "value": "应用侧和前端页面之间传递Array",
  "id": "应用侧和前端页面之间传递array",
  "level": 3
}, {
  "value": "非Function等复杂类型使用",
  "id": "非function等复杂类型使用",
  "level": 3
}, {
  "value": "应用侧调用前端页面的Callback",
  "id": "应用侧调用前端页面的callback",
  "level": 3
}, {
  "value": "应用侧调用前端页面Object里的Function",
  "id": "应用侧调用前端页面object里的function",
  "level": 3
}, {
  "value": "前端页面调用应用侧Object里的Function",
  "id": "前端页面调用应用侧object里的function",
  "level": 3
}, {
  "value": "Promise场景",
  "id": "promise场景",
  "level": 3
}, {
  "value": "验证通道是否建立成功",
  "id": "验证通道是否建立成功",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "前端页面调用应用侧函数",
        children: "前端页面调用应用侧函数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用Web组件将应用侧代码注册到前端页面中，注册完成之后，前端页面中使用注册的对象名称就可以调用应用侧的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何建立应用侧与h5侧的交互通道",
      children: "如何建立应用侧与H5侧的交互通道"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注册应用侧代码有两种方式，一种在Web组件初始化调用，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#javascriptproxy",
        children: "javaScriptProxy()"
      }), "接口。另外一种在Web组件初始化完成后调用，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#registerjavascriptproxy",
        children: "registerJavaScriptProxy()"
      }), "接口。两种方式都需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#deletejavascriptregister",
        children: "deleteJavaScriptRegister"
      }), "接口配合使用，防止内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，将test()方法注册在前端页面中， 该函数可以在前端页面触发运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用侧使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#javascriptproxy",
        children: "javaScriptProxy()"
      }), "接口注册示例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(): string {\n    return 'ArkTS Hello World!';\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  // 声明需要注册的对象\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister('testObjName');\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      // Web组件加载本地index.html页面\n      Web({ src: $rawfile('index1.html'), controller: this.webviewController})\n        // 将对象注入到web端\n        .javaScriptProxy({\n          object: this.testObj,\n          name: 'testObjName',\n          methodList: ['test'],\n          controller: this.webviewController,\n          // 可选参数\n          asyncMethodList: [],\n          permission: '{\"javascriptProxyPermission\":{\"urlPermissionList\":' +\n            '[{\"scheme\":\"resource\",\"host\":\"rawfile\",\"port\":\"\",\"path\":\"\"},' +\n            '{\"scheme\":\"e\",\"host\":\"f\",\"port\":\"g\",\"path\":\"h\"}],\"methodList\":' +\n            '[{\"methodName\":\"test\",\"urlPermissionList\":' +\n            '[{\"scheme\":\"https\",\"host\":\"xxx.com\",\"port\":\"\",\"path\":\"\"},' +\n            '{\"scheme\":\"resource\",\"host\":\"rawfile\",\"port\":\"\",\"path\":\"\"}]},' +\n            '{\"methodName\":\"test11\",\"urlPermissionList\":' +\n            '[{\"scheme\":\"q\",\"host\":\"r\",\"port\":\"\",\"path\":\"t\"},' +\n            '{\"scheme\":\"u\",\"host\":\"v\",\"port\":\"\",\"path\":\"\"}]}]}}'\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用侧使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#registerjavascriptproxy",
        children: "registerJavaScriptProxy()"
      }), "接口注册。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(943195)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#registerjavascriptproxy",
            children: "registerJavaScriptProxy()"
          }), "方法注册后，在下次加载或者重新加载后生效。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例1："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(): string {\n    return 'ArkUI Web Component';\n  }\n\n  toString(): void {\n    console.info('Web Component toString');\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      // jsb对象不再使用后，需解除注册，防止内存泄漏\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister('testObjName');\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index1.html'), controller: this.webviewController })\n        .onControllerAttached(()=>{\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, 'testObjName', ['test', 'toString'],\n                    // 可选参数, asyncMethodList\n                    [],\n                    // 可选参数, permission\n                    '{\"javascriptProxyPermission\":{\"urlPermissionList\":[{\"scheme\":\"resource\",\"host\":\"rawfile\",\"port\":\"\",\"path\":\"\"},' +\n                    '{\"scheme\":\"e\",\"host\":\"f\",\"port\":\"g\",\"path\":\"h\"}],\"methodList\":[{\"methodName\":\"test\",\"urlPermissionList\":' +\n                    '[{\"scheme\":\"https\",\"host\":\"xxx.com\",\"port\":\"\",\"path\":\"\"},{\"scheme\":\"resource\",\"host\":\"rawfile\",\"port\":\"\",\"path\":\"\"}]},' +\n                    '{\"methodName\":\"test11\",\"urlPermissionList\":[{\"scheme\":\"q\",\"host\":\"r\",\"port\":\"\",\"path\":\"t\"},' +\n                    '{\"scheme\":\"u\",\"host\":\"v\",\"port\":\"\",\"path\":\"\"}]}]}}'\n            );\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例2："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(): string {\n    return 'ArkUI Web Component';\n  }\n\n  toString(): void {\n    console.info('Web Component toString');\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n  @State isRegistered: boolean = false;\n\n  build() {\n    Column() {\n      // jsb对象不再使用后，需解除注册，防止内存泄漏\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister('testObjName');\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index1.html'), controller: this.webviewController })\n        .onPageEnd(()=>{\n          try {\n            if(!this.isRegistered){\n            this.webviewController.registerJavaScriptProxy(this.testObj, 'testObjName', ['test', 'toString'],\n                    // 可选参数, asyncMethodList\n                    [],\n                    // 可选参数, permission\n                    '{\"javascriptProxyPermission\":{\"urlPermissionList\":[{\"scheme\":\"resource\",\"host\":\"rawfile\",\"port\":\"\",\"path\":\"\"},' +\n                    '{\"scheme\":\"e\",\"host\":\"f\",\"port\":\"g\",\"path\":\"h\"}],\"methodList\":[{\"methodName\":\"test\",\"urlPermissionList\":' +\n                    '[{\"scheme\":\"https\",\"host\":\"xxx.com\",\"port\":\"\",\"path\":\"\"},{\"scheme\":\"resource\",\"host\":\"rawfile\",\"port\":\"\",\"path\":\"\"}]},' +\n                    '{\"methodName\":\"test11\",\"urlPermissionList\":[{\"scheme\":\"q\",\"host\":\"r\",\"port\":\"\",\"path\":\"t\"},' +\n                    '{\"scheme\":\"u\",\"host\":\"v\",\"port\":\"\",\"path\":\"\"}]}]}}'\n              );\n              this.isRegistered = true;\n              // onPageEnd中注册方法后，需重新加载后生效\n              this.webviewController.refresh();\n            }\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可选参数permission是一个JSON字符串，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"javascriptProxyPermission\": {\n    \"urlPermissionList\": [       // Object级权限，如果匹配，所有Method都授权\n      {\n        \"scheme\": \"resource\",    // 精确匹配，不能为空，必填\n        \"host\": \"rawfile\",       // 精确匹配，不能为空，必填\n        \"port\": \"\",              // 精确匹配，为空不检查，必填\n        \"path\": \"\"               // 前缀匹配，为空不检查，必填\n      },\n      {\n        \"scheme\": \"https\",       // 精确匹配，不能为空，必填\n        \"host\": \"xxx.com\",       // 精确匹配，不能为空，必填\n        \"port\": \"8080\",          // 精确匹配，为空不检查，必填\n        \"path\": \"a/b/c\"          // 前缀匹配，为空不检查，必填\n      }\n    ],\n    \"methodList\": [\n      {\n        \"methodName\": \"test\",\n        \"urlPermissionList\": [   // Method级权限\n          {\n            \"scheme\": \"https\",   // 精确匹配，不能为空，必填\n            \"host\": \"xxx.com\",   // 精确匹配，不能为空，必填\n            \"port\": \"\",          // 精确匹配，为空不检查，必填\n            \"path\": \"\"           // 前缀匹配，为空不检查，必填\n          },\n          {\n            \"scheme\": \"resource\",// 精确匹配，不能为空，必填\n            \"host\": \"rawfile\",   // 精确匹配，不能为空，必填\n            \"port\": \"\",          // 精确匹配，为空不检查，必填\n            \"path\": \"\"           // 前缀匹配，为空不检查，必填\n          }\n        ]\n      },\n      {\n        \"methodName\": \"test11\",\n        \"urlPermissionList\": [   // Method级权限\n          {\n            \"scheme\": \"q\",       // 精确匹配，不能为空，必填\n            \"host\": \"r\",         // 精确匹配，不能为空，必填\n            \"port\": \"\",          // 精确匹配，为空不检查，必填\n            \"path\": \"t\"          // 前缀匹配，为空不检查，必填\n          },\n          {\n            \"scheme\": \"u\",       // 精确匹配，不能为空，必填\n            \"host\": \"v\",         // 精确匹配，不能为空，必填\n            \"port\": \"\",          // 精确匹配，为空不检查，必填\n            \"path\": \"\"           // 前缀匹配，为空不检查，必填\n          }\n        ]\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "index1.html前端页面触发应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index1.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    function callArkTS() {\n        let str = testObjName.test();\n        document.getElementById(\"demo\").innerHTML = str;\n        console.info('ArkTS Hello World! :' + str);\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复杂类型使用方法",
      children: "复杂类型使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用侧和前端页面之间传递array",
      children: "应用侧和前端页面之间传递Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Array可以作为注册对象方法的参数或返回值，在应用侧和前端页面之间传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(): Array<number> {\n    return [1, 2, 3, 4]\n  }\n\n  toString(param: string): void {\n    console.info('Web Component toString' + param);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('Register JavaScript To Window')\n        .onClick(() => {\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, \"testObjName\", [\"test\", \"toString\"]);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister(\"testObjName\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    function callArkTS() {\n        testObjName.toString(testObjName.test());\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非function等复杂类型使用",
      children: "非Function等复杂类型使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非Function等复杂类型作为注册对象方法的参数或返回值，在应用侧和前端页面之间传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass Student {\n  name: string = '';\n  age: string = '';\n}\n\nclass TestClass {\n  constructor() {\n  }\n\n  // 传递的基础类型name:\"jeck\", age:\"12\"。\n  test(): Student {\n    let st: Student = { name: \"jeck\", age: \"12\" };\n    return st;\n  }\n\n  toString(param: ESObject): void {\n    console.info('Web Component toString' + param[\"name\"]);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('Register JavaScript To Window')\n        .onClick(() => {\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, \"testObjName\", [\"test\", \"toString\"]);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister(\"testObjName\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    function callArkTS() {\n        testObjName.toString(testObjName.test());\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用侧调用前端页面的callback",
      children: "应用侧调用前端页面的Callback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Callback可以作为注册对象方法的参数或返回值，在应用侧和前端页面之间传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(param: Function): void {\n    param(\"call callback\");\n  }\n\n  toString(param: String): void {\n    console.info('Web Component toString' + param);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('Register JavaScript To Window')\n        .onClick(() => {\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, \"testObjName\", [\"test\", \"toString\"]);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister(\"testObjName\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    function callArkTS() {\n        testObjName.test(function(param){testObjName.toString(param)});\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用侧调用前端页面object里的function",
      children: "应用侧调用前端页面Object里的Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前端页面Object里的Function可以作为注册对象方法的参数或返回值，在应用侧和前端页面之间传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(param: ESObject): void {\n    param.hello(\"call obj func\");\n  }\n\n  toString(param: string): void {\n    console.info('Web Component toString' + param);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('Register JavaScript To Window')\n        .onClick(() => {\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, \"testObjName\", [\"test\", \"toString\"]);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister(\"testObjName\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    // 写法1\n    class Student {\n        constructor(nameList) {\n            this.methodNameListForJsProxy = nameList;\n        }\n\n        hello(param) {\n            testObjName.toString(param)\n        }\n    }\n    var st = new Student([\"hello\"])\n\n    // 写法2\n    //创建一个构造器，构造函数首字母大写\n    function Obj1(){\n        this.methodNameListForJsProxy=[\"hello\"];\n        this.hello=function(param){\n            testObjName.toString(param)\n        };\n    }\n    //利用构造器，通过new关键字生成对象\n    var st1 = new Obj1();\n\n    function callArkTS() {\n        testObjName.test(st);\n        testObjName.test(st1);\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前端页面调用应用侧object里的function",
      children: "前端页面调用应用侧Object里的Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧Object里的Function可以作为注册对象方法的参数或返回值，在应用侧和前端页面之间传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass ObjOther {\n  methodNameListForJsProxy: string[]\n\n  constructor(list: string[]) {\n    this.methodNameListForJsProxy = list\n  }\n\n  testOther(json: string): void {\n    console.info(json)\n  }\n}\n\nclass TestClass {\n  ObjReturn: ObjOther\n\n  constructor() {\n    this.ObjReturn = new ObjOther([\"testOther\"]);\n  }\n\n  test(): ESObject {\n    return this.ObjReturn\n  }\n\n  toString(param: string): void {\n    console.info('Web Component toString' + param);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('Register JavaScript To Window')\n        .onClick(() => {\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, \"testObjName\", [\"test\", \"toString\"]);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister(\"testObjName\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    function callArkTS() {\n      testObjName.test().testOther(\"call other object func\");\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "promise场景",
      children: "Promise场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第一种使用方法，在应用侧new Promise，将Promise作为对象方法的参数或返回值，向前端页面传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(): Promise<string> {\n    let p: Promise<string> = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        console.info('执行完成');\n        reject('fail');\n      }, 10000);\n    });\n    return p;\n  }\n\n  toString(param: string): void {\n    console.info(\" \" + param);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('Register JavaScript To Window')\n        .onClick(() => {\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, \"testObjName\", [\"test\", \"toString\"]);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister(\"testObjName\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    function callArkTS() {\n      testObjName.test().then((param)=>{testObjName.toString(param)}).catch((param)=>{testObjName.toString(param)})\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第二种使用方法，在前端页面new Promise，将Promise作为对象方法的参数或返回值，向应用侧传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestClass {\n  constructor() {\n  }\n\n  test(param:Function): void {\n    setTimeout( () => { param(\"suc\") }, 10000)\n  }\n\n  toString(param:string): void {\n    console.info(\" \" + param);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  @State testObj: TestClass = new TestClass();\n\n  build() {\n    Column() {\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.webviewController.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('Register JavaScript To Window')\n        .onClick(() => {\n          try {\n            this.webviewController.registerJavaScriptProxy(this.testObj, \"testObjName\", [\"test\", \"toString\"]);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('deleteJavaScriptRegister')\n        .onClick(() => {\n          try {\n            this.webviewController.deleteJavaScriptRegister(\"testObjName\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<p id=\"demo\"></p>\n<script>\n    function callArkTS() {\n      let funpromise\n      var p = new Promise(function(resolve, reject){funpromise=(param)=>{resolve(param)}})\n      testObjName.test(funpromise)\n      p.then((param)=>{testObjName.toString(param)})\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验证通道是否建立成功",
      children: "验证通道是否建立成功"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开web调试。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启web调试请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkweb/web-debugging/web-debugging-with-devtools",
            children: "使用DevTools工具调试前端页面"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明通道是否建立成功。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%A4%8D%E6%9D%82%E7%B1%BB%E5%9E%8B%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95",
            children: "复杂类型使用方法"
          }), "中应用侧和前端页面之间传递Array作为示例，调试结果如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(416161)/* ["default"] */.A) + "",
            width: "1917",
            height: "1042"
          })
        }), "\n"]
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
416161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478213-db623338dfaf59fb4d57f0156a90c9ad.png");

},
943195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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