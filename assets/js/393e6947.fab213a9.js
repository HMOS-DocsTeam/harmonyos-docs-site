"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["583612"], {
684028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_frontend_page_js_arkweb_ndk_page_data_channel_arkweb_ndk_page_data_channel_md_393_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-frontend-page-js-arkweb-ndk-page-data-channel-arkweb-ndk-page-data-channel-md-393.json
var site_docs_arkweb_web_use_frontend_page_js_arkweb_ndk_page_data_channel_arkweb_ndk_page_data_channel_md_393_namespaceObject = JSON.parse('{"id":"arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel/arkweb-ndk-page-data-channel","title":"建立应用侧与前端页面数据通道(C/C++)","description":"前端页面和应用侧之间可以使用Native方法实现两端通信（以下简称Native PostWebMessage），可解决ArkTS环境的冗余切换，同时允许发送消息、回调在非UI线程上运行，避免造成UI阻塞。当前只支持string和buffer数据类型。","source":"@site/docs/arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel/arkweb-ndk-page-data-channel.md","sourceDirName":"arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel","slug":"/arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel/","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"建立应用侧与前端页面数据通道(C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkweb-ndk-page-data-channel","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用侧与前端页面的相互调用(C/C++)","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge/"},"next":{"title":"Web组件嵌套滚动","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-nested-scrolling/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel/arkweb-ndk-page-data-channel.md


const frontMatter = {
	title: '建立应用侧与前端页面数据通道(C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkweb-ndk-page-data-channel',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '建立应用侧与前端页面数据通道(C/C++)';

const assets = {

};



const toc = [{
  "value": "适用的应用架构",
  "id": "适用的应用架构",
  "level": 2
}, {
  "value": "使用Native接口实现PostWebMessage通信",
  "id": "使用native接口实现postwebmessage通信",
  "level": 2
}, {
  "value": "使用Native接口绑定ArkWeb",
  "id": "使用native接口绑定arkweb",
  "level": 3
}, {
  "value": "使用Native接口获取API结构体",
  "id": "使用native接口获取api结构体",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "建立应用侧与前端页面数据通道cc",
        children: "建立应用侧与前端页面数据通道(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前端页面和应用侧之间可以使用Native方法实现两端通信（以下简称Native PostWebMessage），可解决ArkTS环境的冗余切换，同时允许发送消息、回调在非UI线程上运行，避免造成UI阻塞。当前只支持string和buffer数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用的应用架构",
      children: "适用的应用架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用ArkTS、C++语言混合开发，或本身应用架构较贴近于小程序架构，自带C++侧环境，推荐使用ArkWeb在Native侧提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
        children: "ArkWeb_ControllerAPI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageapi/capi-web-arkweb-webmessageapi",
        children: "ArkWeb_WebMessageAPI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi",
        children: "ArkWeb_WebMessagePortAPI"
      }), "实现PostWebMessage功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(380223)/* ["default"] */.A) + "",
        width: "576",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上图展示了具有普遍适用性的小程序的通用架构。在这一架构中，逻辑层依赖于应用程序自带的JavaScript运行时，该运行时在一个已有的C++环境中运行。通过Native接口，逻辑层能够直接在C++环境中与视图层（其中ArkWeb充当渲染器）进行通信，无需回退至ArkTS环境使用ArkTS PostWebMessage接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "左图是使用ArkTS PostWebMessage接口构建小程序的方案，如红框所示，应用需要先调用到ArkTS环境，再调用到C++环境。右图是使用Native PostWebMessage接口构建小程序的方案，不需要ArkTS环境和C++环境的切换，执行效率更高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(861848)/* ["default"] */.A) + "",
        width: "1211",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用native接口实现postwebmessage通信",
      children: "使用Native接口实现PostWebMessage通信"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用native接口绑定arkweb",
      children: "使用Native接口绑定ArkWeb"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkWeb组件声明在ArkTS侧，需要用户自定义一个标识webTag，并将webTag通过Node-API传至应用C++侧。后续ArkWeb Native接口使用时，均需webTag作为对应组件的唯一标识。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n// 自定义webTag，在WebviewController创建时作为入参传入，建立controller与webTag的映射关系\nwebTag: string = 'ArkWeb1';\ncontroller: webview.WebviewController = new webview.WebviewController(this.webTag);\n// ...\n// aboutToAppear中将webTag通过Node-API接口传入C++侧，作为C++侧ArkWeb组件的唯一标识\naboutToAppear() {\n  console.info(\"aboutToAppear\")\n  // 初始化web ndk\n  testNapi.nativeWebInit(this.webTag);\n}\n// ...\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用native接口获取api结构体",
      children: "使用Native接口获取API结构体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkWeb Native侧需先获取API结构体，才能调用结构体里的Native API。ArkWeb Native侧API通过函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-interface-h/capi-arkweb-interface-h#oh_arkweb_getnativeapi",
        children: "OH_ArkWeb_GetNativeAPI"
      }), "获取，根据入参type不同，可获取对应的函数指针结构体。其中本指导涉及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
        children: "ArkWeb_ControllerAPI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageapi/capi-web-arkweb-webmessageapi",
        children: "ArkWeb_WebMessageAPI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi",
        children: "ArkWeb_WebMessagePortAPI"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static ArkWeb_ControllerAPI *controller = nullptr;\nstatic ArkWeb_WebMessagePortAPI *webMessagePort = nullptr;\nstatic ArkWeb_WebMessageAPI *webMessage = nullptr;\n// ...\ncontroller = reinterpret_cast<ArkWeb_ControllerAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_CONTROLLER));\nwebMessagePort =\n    reinterpret_cast<ArkWeb_WebMessagePortAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_WEB_MESSAGE_PORT));\nwebMessage = reinterpret_cast<ArkWeb_WebMessageAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_WEB_MESSAGE));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用API前建议通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#%E5%AE%8F%E5%AE%9A%E4%B9%89",
        children: "ARKWEB_MEMBER_MISSING"
      }), "校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#createwebmessageports",
        children: "createWebMessagePorts"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#postwebmessage",
        children: "postWebMessage"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi#close",
        children: "close"
      }), "需运行在UI线程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- entry/src/main/resources/rawfile/index.html -->\n<!-- index.html -->\n<!DOCTYPE html>\n<html lang=\"en-gb\">\n<body>\n<h1>etsRunJavaScriptExt测试demo</h1>\n<h1 id=\"h1\"></h1>\n<h3 id=\"msg\">Receive string:</h3>\n<h3 id=\"msg2\">Receive arraybuffer:</h3>\n\n</body>\n<script type=\"text/javascript\">\nvar h5Port;\n\nwindow.addEventListener('message', function (event) {\n    if (event.data == 'init_web_messageport') {\n        const port = event.ports[0]; // 1. 保存从应用侧发送过来的端口。\n        if (port) {\n            console.info(\"hwd In html got message\");\n            h5Port = port;\n            port.onmessage = function (event) {\n                console.info(\"hwd In html got message\");\n                // 2. 接收应用侧发送过来的消息.\n                var result = event.data;\n                var type_s = typeof (result)\n                switch (type_s) {\n                    case \"object\":\n                        if (result instanceof ArrayBuffer) {\n                            type_s = \"ArrayBuffer\";\n                            var view = new Uint8Array(result);\n                            const decoder = new TextDecoder('utf-8');\n                            result = decoder.decode(result);\n                        } else if (result instanceof Error) {\n                            type_s = \"Error\";\n                        } else if (result instanceof Array) {\n                            type_s = \"Array\";\n                        }\n                        break;\n                    default:\n                        break;\n                }\n                console.info(\"H5 recv type: \" + type_s + \"\\nH5 recv result: \" + result)\n                document.getElementById(\"msg\").innerHTML = \"recv type: \" + type_s;\n                document.getElementById(\"msg2\").innerHTML = \"recv value: \" + result;\n            }\n            h5Port.onmessageerror = (event) => {\n                console.error(`hwd In html Error receiving message: ${event}`);\n            };\n        }\n    }\n})\nwindow.onerror = function(message, url, line, column, error) {\n  console.info(\"JavaScript Error: \" + message + \" on line \" + line + \" in \" + url);\n  document.getElementById(\"h1\").innerHTML = \"执行函数失败\"\n};\n\n// 3. 使用h5Port向应用侧发送消息。\nfunction postStringToApp() {\n    if (h5Port) {\n        h5Port.postMessage(\"send string from H5\");\n    } else {\n        console.error(\"In html h5port is null, please init first\");\n    }\n}\nfunction postBufferToApp() {\n    if (h5Port) {\n        const str = \"Hello, World!\";\n        const encoder = new TextEncoder();\n        const uint8Array = encoder.encode(str);\n        h5Port.postMessage(uint8Array.buffer);\n    } else {\n        console.error(\"In html h5port is null, please init first\");\n    }\n}\n\nfunction postJsonToApp() {\n    if (h5Port) {\n        var e = {\"json\": \"json\"};\n        h5Port.postMessage(e);\n    } else {\n        console.error(\"In html h5port is null, please init first\");\n    }\n}\n\nfunction postArrayStringToApp() {\n    if (h5Port) {\n        h5Port.postMessage([\"1\", \"2\", \"3\"]);\n    } else {\n        console.error(\"In html h5port is null, please init first\");\n    }\n}\n\nfunction postNumberToApp() {\n    if (h5Port) {\n        h5Port.postMessage(123);\n    } else {\n        console.error(\"In html h5port is null, please init first\");\n    }\n}\nclass MyClass {\n  constructor() {\n    // 构造器\n    this.myProperty = 'Hello, World!';\n  }\n\n  myMethod() {\n    // 实例方法\n    console.info(this.myProperty);\n  }\n\n  static myStaticMethod() {\n    // 静态方法\n    console.info('This is a static method.');\n  }\n}\nfunction postObjectToApp() {\n    if (h5Port) {\n        h5Port.postMessage(new MyClass());\n    } else {\n        console.error(\"In html h5port is null, please init first\");\n    }\n}\n\n</script>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State webTag: string = 'postMessage';\n  controller: webview.WebviewController = new webview.WebviewController(this.webTag);\n  @State h5Log: string = 'Display received message send from HTML';\n\n  aboutToAppear() {\n    webview.WebviewController.setWebDebuggingAccess(true);\n    // 初始化web Native Development Kit\n    testNapi.nativeWebInit(this.webTag);\n  }\n\n  aboutToDisAppear() {\n    console.error('aboutToDisAppear');\n  }\n\n  build() {\n    Scroll() {\n      Column({ space: 10 }) {\n        // 展示H5接收到的内容\n        Text('H5_Side_Message_Display_From_App')\n        TextArea({text: this.h5Log})\n          .id('log_area')\n          .width('100%')\n          .height(100)\n          .border({ width: 1 })\n        Text('App_Side_Button')\n        Row() {\n          Button('createNoControllerTagPort')\n            .id('create_no_tag_btn')\n            .onClick(() => {\n              try {\n                testNapi.createWebMessagePorts('noTag');\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n          Button('createPort')\n            .id('create_port_btn')\n            .onClick(() => {\n              try {\n                testNapi.createWebMessagePorts(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n        }\n\n        Row({ space: 10 }) {\n\n          Button('setHandler')\n            .id('set_handler_btn')\n            .onClick(() => {\n              try {\n                testNapi.setMessageEventHandler(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n\n          Button('setHandlerThread')\n            .id('set_handler_thread_btn')\n            .onClick(() => {\n              try {\n                testNapi.setMessageEventHandlerThread(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n        }\n\n        Row({ space: 10 }) {\n          Button('SendString')\n            .id('send_string_btn')\n            .onClick(() => {\n              try {\n                this.h5Log = ''\n                testNapi.postMessage(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n          Button('SendStringThread')\n            .id('send_string_thread_btn')\n            .onClick(() => {\n              try {\n                this.h5Log = ''\n                testNapi.postMessageThread(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n        }\n\n        Row({ space: 10 }) {\n          Button('SendBuffer')\n            .id('send_buffer_btn')\n            .onClick(() => {\n              try {\n                this.h5Log = ''\n                testNapi.postBufferMessage(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n          Button('SendNone')\n            .id('send_none_btn')\n            .onClick(() => {\n              try {\n                this.h5Log = ''\n                testNapi.postNoneMessage(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n        }\n\n        Row({ space: 10 }) {\n\n          Button('closePort')\n            .id('close_port_btn')\n            .onClick(() => {\n              try {\n                testNapi.closeMessagePort(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n          Button('destroyNullPort')\n            .id('destroy_null_btn')\n            .onClick(() => {\n              try {\n                testNapi.destroyNullMessagePort(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n          Button('destroyPort')\n            .id('destroy_port_btn')\n            .onClick(() => {\n              try {\n                testNapi.destroyMessagePort(this.webTag);\n              } catch (error) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            })\n        }\n        .width('100%')\n        .padding(10)\n        .border({ width: 1 })\n\n        Column({ space: 10 }) {\n          Text('H5_Side_Send_Button')\n          Row({ space: 10 }) {\n            Button('H5String')\n              .id('h5_send_string_btn')\n              .onClick(() => {\n                try {\n                  this.controller.runJavaScript('for(var i = 0; i < 2000; i++) postStringToApp()');\n                } catch (error) {\n                  console.error(\n                    `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n                }\n              })\n            Button('H5Buffer')\n              .id('h5_send_buffer_btn')\n              .onClick(() => {\n                try {\n                  this.controller.runJavaScript('postBufferToApp()');\n                } catch (error) {\n                  console.error(\n                    `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n                }\n              })\n            Button('H5Number')\n              .id('h5_send_number_btn')\n              .onClick(() => {\n                try {\n                  this.controller.runJavaScript('postNumberToApp()');\n                } catch (error) {\n                  console.error(\n                    `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n                }\n              })\n          }\n\n          Row({ space: 10 }) {\n            Button('H5Json')\n              .id('h5_send_json_btn')\n              .onClick(() => {\n                try {\n                  this.controller.runJavaScript('postJsonToApp()');\n                } catch (error) {\n                  console.error(\n                    `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n                }\n              })\n            Button('H5Array')\n              .id('h5_send_array_btn')\n              .onClick(() => {\n                try {\n                  this.controller.runJavaScript('postArrayStringToApp()');\n                } catch (error) {\n                  console.error(\n                    `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n                }\n              })\n            Button('H5Object')\n              .id('h5_send_object_btn')\n              .onClick(() => {\n                try {\n                  this.controller.runJavaScript('postObjectToApp()');\n                } catch (error) {\n                  console.error(\n                    `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n                }\n              })\n          }\n        }\n        .width('100%')\n        .margin(10)\n        .padding(10)\n        .border({ width: 1 })\n\n        Web({ src: $rawfile('index.html'), controller: this.controller })\n          .onConsole((event) => {\n            if (event) {\n              let msg = event.message.getMessage();\n              if (msg.startsWith('H5')) {\n                this.h5Log = event.message.getMessage() + '\\n' + this.h5Log;\n              }\n            }\n            return false;\n          })\n      }\n    }.height('100%')\n    .scrollable(ScrollDirection.Vertical)\n    .scrollBar(BarState.Off)\n    .edgeEffect(EdgeEffect.Spring)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API侧暴露ArkTS接口"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry5/src/main/cpp/types/libentry5/index.d.ts\nexport const nativeWebInit: (webName: string) => void;\nexport const createWebMessagePorts: (webName: string) => void;\nexport const postMessage: (webName: string) => void;\nexport const postNoneMessage: (webName: string) => void;\nexport const setMessageEventHandler: (webName: string) => void;\nexport const closeMessagePort: (webName: string) => void;\nexport const destroyMessagePort: (webName: string) => void;\nexport const postBufferMessage: (webName: string) => void;\nexport const destroyNullMessagePort: (webName: string) => void;\nexport const setMessageEventHandlerThread: (webName: string) => void;\nexport const postMessageThread: (webName: string) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API侧编译配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# entry/src/main/cpp/CMakeLists.txt\n# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(NDKPostMessage)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED hello.cpp)\n\nfind_library(\n    # Sets the name of the path variable.\n    hilog-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    hilog_ndk.z\n)\n\ntarget_link_libraries(entry PUBLIC libace_napi.z.so ${hilog-lib} libohweb.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API层代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n#include \"web/arkweb_interface.h\"\n#include <string>\n#include <thread>\n\nconstexpr unsigned int LOG_PRINT_DOMAIN = 0xFF00;\nArkWeb_ControllerAPI *controller = nullptr;\n\nArkWeb_WebMessagePortAPI *webMessagePort = nullptr;\nArkWeb_WebMessageAPI *webMessage = nullptr;\nsize_t g_webMessagePortSize = 0;\nArkWeb_WebMessagePortPtr *g_web_message_port_arr = nullptr;\n\nstatic void WebMessagePortCallback(\n    const char *webTag, const ArkWeb_WebMessagePortPtr port, const ArkWeb_WebMessagePtr message, void *userData)\n{\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit WebMessagePortCallback webTag:%{public}s,messageType:%{public}d\",\n        webTag, webMessage->getType(message));\n    size_t len = 0;\n    void *back = webMessage->getData(message, &len);\n    if (webMessage->getType(message) == ArkWeb_WebMessageType::ARKWEB_STRING) {\n        OH_LOG_Print(\n            LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n            \"Native Development Kit WebMessagePortCallback message:%{public}s,messageSize:%{public}d\", back, len);\n    } else if (webMessage->getType(message) == ArkWeb_WebMessageType::ARKWEB_BUFFER) {\n        OH_LOG_Print(\n            LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n            \"Native Development Kit WebMessagePortCallback messageSize:%{public}d\", len);\n    }\n}\n\nstatic napi_value NativeWebInit(napi_env env, napi_callback_info info)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit NativeWebInit start\");\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit NativeWebInit webTag:%{public}s\", webTagValue);\n\n    controller = reinterpret_cast<ArkWeb_ControllerAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_CONTROLLER));\n    if (controller)\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"get ArkWeb_ControllerAPI success\");\n\n    webMessagePort =\n        reinterpret_cast<ArkWeb_WebMessagePortAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_WEB_MESSAGE_PORT));\n    if (webMessagePort)\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"get ArkWeb_WebMessagePortAPI success\");\n\n    webMessage = reinterpret_cast<ArkWeb_WebMessageAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_WEB_MESSAGE));\n    if (webMessage)\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"get ArkWeb_WebMessageAPI success\");\n\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit NativeWebInit end\");\n    delete[] webTagValue;\n    return nullptr;\n}\n\nstatic napi_value createWebMessagePorts(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 初始化端口\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit createWebMessagePorts begin\");\n    g_web_message_port_arr = controller->createWebMessagePorts(webTagValue, &g_webMessagePortSize);\n    // 把其中一个端口发送给HTML\n    ArkWeb_ErrorCode code =\n        controller->postWebMessage(webTagValue, \"init_web_messageport\", g_web_message_port_arr, 1, \"*\");\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit postWebMessage ArkWeb_ErrorCode:%{public}d\", code);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit createWebMessagePorts end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\n\nstatic napi_value postMessage(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 发送消息\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit postMessage begin\");\n\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    ArkWeb_WebMessagePtr message = webMessage->createWebMessage();\n    webMessage->setType(message, ArkWeb_WebMessageType::ARKWEB_STRING);\n    std::string str = \"send string from native\";\n    webMessage->setData(message, (void *)str.c_str(), str.length() + 1);\n    ArkWeb_ErrorCode code = webMessagePort->postMessage(g_web_message_port_arr[1], webTagValue, message);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit postMessage ArkWeb_ErrorCode:%{public}d\", code);\n    webMessage->destroyWebMessage(&message);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit postMessage end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\n\n\n// 在线程中发消息\nvoid sendMessage(const char *webTag, const ArkWeb_WebMessagePtr message)\n{\n    // 发送1000次\n    for (int i = 0; i < 1000; i++) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"sendMessage in thread %{public}d\", i);\n        if (g_web_message_port_arr && webTag && message) {\n                webMessagePort->postMessage(g_web_message_port_arr[1], webTag, message);\n        }\n    }\n}\nstatic napi_value postMessageThread(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 构造消息\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit postMessage begin\");\n\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    ArkWeb_WebMessagePtr message = webMessage->createWebMessage();\n    webMessage->setType(message, ArkWeb_WebMessageType::ARKWEB_STRING);\n    std::string str = \"thread message\";\n    webMessage->setData(message, (void *)str.c_str(), str.length() + 1);\n    const int numThreads = 5;\n    std::thread threads[numThreads];\n\n    // 创建线程\n    for (int i = 0; i < numThreads; ++i) {\n        threads[i] = std::thread(sendMessage, webTagValue, message);\n    }\n\n    // 等待所有线程完成\n    for (int i = 0; i < numThreads; ++i) {\n        threads[i].join();\n    }\n    delete[] webTagValue;\n    return nullptr;\n}\n\n// 在线程中注册回调\nvoid SetHandler(const char *webTag)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"setMessageEventHandler in thread\");\n    webMessagePort->setMessageEventHandler(g_web_message_port_arr[1], webTag, WebMessagePortCallback, NULL);\n}\n\nstatic napi_value setMessageEventHandlerThread(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 注册回调\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit SetMessageEventHandler begin\");\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    std::thread thread(SetHandler, webTagValue);\n    thread.detach();\n    webMessagePort->setMessageEventHandler(g_web_message_port_arr[1], webTagValue, WebMessagePortCallback, NULL);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit SetMessageEventHandler end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\nstatic napi_value postNoneMessage(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN,\n        \"ArkWeb\", \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 发送消息\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit 发消息开始\");\n\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    ArkWeb_WebMessagePtr message = webMessage->createWebMessage();\n    webMessage->setType(message, ArkWeb_WebMessageType::ARKWEB_NONE);\n    std::string str = \"send string from native\";\n    webMessage->setData(message, (void *)str.c_str(), str.length() + 1);\n    webMessagePort->postMessage(g_web_message_port_arr[1], webTagValue, message);\n    webMessage->destroyWebMessage(&message);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit postMessage end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\n\nstatic napi_value postBufferMessage(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 发送消息\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit postMessage begin\");\n\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    ArkWeb_WebMessagePtr message1 = webMessage->createWebMessage();\n    webMessage->setType(message1, ArkWeb_WebMessageType::ARKWEB_BUFFER);\n    std::string str1 = \"send buffer from native\";\n    webMessage->setData(message1, (void *)str1.c_str(), str1.length()+1);\n    webMessagePort->postMessage(g_web_message_port_arr[1], webTagValue, message1);\n    webMessage->destroyWebMessage(&message1);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit postMessage end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\n\nstatic napi_value setMessageEventHandler(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 注册回调\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit SetMessageEventHandler begin\");\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    webMessagePort->setMessageEventHandler(g_web_message_port_arr[1], webTagValue, WebMessagePortCallback, NULL);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit SetMessageEventHandler end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\n\nstatic napi_value closeMessagePort(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 关闭端口，先调用close，再调用destroyWebMessagePorts\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit SetMessageEventHandler begin\");\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    webMessagePort->close(g_web_message_port_arr[0], webTagValue);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit SetMessageEventHandler end, web message port size:%{public}d\", g_webMessagePortSize);\n    controller->refresh(webTagValue);\n    delete[] webTagValue;\n    return nullptr;\n}\n\nstatic napi_value destroyMessagePort(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 释放内存，先调用close，再调用destroyWebMessagePorts\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit SetMessageEventHandler begin\");\n    if (g_web_message_port_arr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"webMessagePort is nullptr\");\n        return nullptr;\n    }\n    controller->destroyWebMessagePorts(&g_web_message_port_arr, g_webMessagePortSize);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit SetMessageEventHandler end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\n\nstatic napi_value destroyNullMessagePort(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit Refresh webTag:%{public}s\", webTagValue);\n\n    // 释放内存，先调用close，再调用destroyWebMessagePorts\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit SetMessageEventHandler begin\");\n\n    controller->destroyWebMessagePorts(&g_web_message_port_arr, g_webMessagePortSize);\n\n    OH_LOG_Print(\n        LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit SetMessageEventHandler end, web message port size:%{public}d\", g_webMessagePortSize);\n    delete[] webTagValue;\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"nativeWebInit\", nullptr, NativeWebInit, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"createWebMessagePorts\", nullptr, createWebMessagePorts, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"postMessage\", nullptr, postMessage, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"postNoneMessage\", nullptr, postNoneMessage, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"postBufferMessage\", nullptr, postBufferMessage, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"setMessageEventHandler\", nullptr, setMessageEventHandler, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"closeMessagePort\", nullptr, closeMessagePort, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"destroyMessagePort\", nullptr, destroyMessagePort, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"postMessageThread\", nullptr, postMessageThread, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"setMessageEventHandlerThread\", nullptr, setMessageEventHandlerThread, nullptr, nullptr, nullptr,\n            napi_default, nullptr},\n        {\"destroyNullMessagePort\", nullptr, destroyNullMessagePort, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
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
861848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958214-0869d43051dc081ce477165595c22e59.png");

},
380223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798564-f7727f2c7145a2b387f7092c28bc7173.png");

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