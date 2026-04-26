"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["961530"], {
480066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_data_transmission_native_websocket_guidelines_native_websocket_guidelines_md_8ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-data-transmission-native-websocket-guidelines-native-websocket-guidelines-md-8ab.json
var site_docs_system_network_network_kit_network_kit_data_transmission_native_websocket_guidelines_native_websocket_guidelines_md_8ab_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines/native-websocket-guidelines","title":"使用WebSocket访问网络(C/C++)","description":"场景介绍","source":"@site/docs/system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines/native-websocket-guidelines.md","sourceDirName":"system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines","slug":"/system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用WebSocket访问网络(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-websocket-guidelines","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用WebSocket访问网络","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/websocket-connection/"},"next":{"title":"使用Socket访问网络","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/socket-connection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines/native-websocket-guidelines.md


const frontMatter = {
	title: '使用WebSocket访问网络(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-websocket-guidelines',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用WebSocket访问网络(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "WebSocket接口开发示例",
  "id": "websocket接口开发示例",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "添加开发依赖",
  "id": "添加开发依赖",
  "level": 3
}, {
  "value": "构建工程",
  "id": "构建工程",
  "level": 3
}, {
  "value": "测试步骤",
  "id": "测试步骤",
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
        id: "使用websocket访问网络cc",
        children: "使用WebSocket访问网络(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过WebSocket模块可以建立服务器与客户端的双向连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WebSocket常用接口如下表所示，详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-h/capi-net-websocket-h",
        children: "net_websocket.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WebSocketClient_Constructor(WebSocket_OnOpenCallback onOpen, WebSocket_OnMessageCallback onMessage, WebSocket_OnErrorCallback onError, WebSocket_OnCloseCallback onclose)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket客户端的构造函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WebSocketClient_AddHeader(struct WebSocket *client, struct WebSocket_Header header)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将header头信息添加到client客户端request中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WebSocketClient_Connect(struct WebSocket *client, const char *url, struct WebSocket_RequestOptions options)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端连接服务端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WebSocketClient_Send(struct WebSocket *client, char *data, size_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端向服务端发送数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WebSocketClient_Close(struct WebSocket *client, struct WebSocket_CloseOption options)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端主动关闭websocket连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WebSocketClient_Destroy(struct WebSocket *client)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放websocket连接上下文和资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "websocket接口开发示例",
      children: "WebSocket接口开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用本文档涉及接口创建并连接到WebSocket服务器时，需先创建Native C++工程，在源文件中封装相关接口，然后在ArkTS层调用封装好的接口，使用hilog或console.info等方法将日志打印到控制台或生成设备日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以建立与WebSocket服务器的连接、向WebSocket服务器发送消息、关闭WebSocket连接为例，提供具体的开发指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加开发依赖",
      children: "添加开发依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libace_napi.z.so\nlibnet_websocket.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"network/netstack/net_websocket.h\"\n#include \"network/netstack/net_websocket_type.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构建工程",
      children: "构建工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、在源文件中编写调用该API的代码，接受ArkTS传递过来的url字符串参数，创建WebSocket对象指针后，检查连接到服务器是否成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"network/netstack/net_websocket.h\"\n#include \"network/netstack/net_websocket_type.h\"\n#include \"hilog/log.h\"\n\n#include <cstring>\n\n#undef LOG_DOMAIN\n#undef LOG_TAG\n#define LOG_DOMAIN 0x3200 // 全局domain宏，标识业务领域\n#define LOG_TAG \"WSDEMO\"  // 全局tag宏，标识模块日志tag\n\n\n// WebSocket客户端全局变量\nstatic struct WebSocket *g_client = nullptr;\n\nstatic void onOpen(struct WebSocket *wsClient, WebSocket_OpenResult openResult)\n{\n    (void)wsClient;\n    OH_LOG_INFO(LOG_APP, \"onOpen: code: %{public}u, reason: %{public}s\", openResult.code, openResult.reason);\n}\n\nstatic void onMessage(struct WebSocket *wsClient, char *data, uint32_t length)\n{\n    (void)wsClient;\n    char *tmp = new char[length + 1];\n    for (uint32_t i = 0; i < length; i++) {\n        tmp[i] = data[i];\n    }\n    tmp[length] = '\\0';\n    OH_LOG_INFO(LOG_APP, \"onMessage: len: %{public}u, data: %{public}s\", length, tmp);\n}\n\nstatic void onError(struct WebSocket *wsClient, WebSocket_ErrorResult errorResult)\n{\n    (void)wsClient;\n    OH_LOG_INFO(LOG_APP, \"onError: code: %{public}u, message: %{public}s\", errorResult.errorCode,\n                errorResult.errorMessage);\n}\n\nstatic void onClose(struct WebSocket *wsClient, WebSocket_CloseResult closeResult)\n{\n    (void)wsClient;\n    OH_LOG_INFO(LOG_APP, \"onClose: code: %{public}u, reason: %{public}s\", closeResult.code, closeResult.reason);\n}\n\nstatic napi_value ConnectWebsocket(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_value result;\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    size_t length = 0;\n    napi_status status = napi_get_value_string_utf8(env, args[0], nullptr, 0, &length);\n    if (status != napi_ok) {\n        napi_get_boolean(env, false, &result);\n        return result;\n    }\n\n    if (g_client != nullptr) {\n        OH_LOG_INFO(LOG_APP, \"there is already one websocket client running.\");\n        napi_get_boolean(env, false, &result);\n        return result;\n    }\n    char *buf = new char[length + 1];\n    std::memset(buf, 0, length + 1);\n    napi_get_value_string_utf8(env, args[0], buf, length + 1, &length);\n    // 创建WebSocket Client对象指针\n    g_client = OH_WebSocketClient_Constructor(onOpen, onMessage, onError, onClose);\n    if (g_client == nullptr) {\n        delete[] buf;\n        napi_get_boolean(env, false, &result);\n        return result;\n    }\n    // 连接buf存放的URL对应的WebSocket服务器\n    int connectRet = OH_WebSocketClient_Connect(g_client, buf, {});\n\n    delete[] buf;\n    napi_get_boolean(env, connectRet == 0, &result);\n    return result;\n}\n\n\nstatic napi_value SendMessage(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_value result;\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    size_t length = 0;\n    napi_status status = napi_get_value_string_utf8(env, args[0], nullptr, 0, &length);\n    if (status != napi_ok) {\n        napi_create_int32(env, -1, &result);\n        return result;\n    }\n\n    if (g_client == nullptr) {\n        OH_LOG_INFO(LOG_APP, \"websocket client not connected.\");\n        napi_create_int32(env, WebSocket_ErrCode::WEBSOCKET_CLIENT_NULL, &result);\n        return result;\n    }\n    char *buf = new char[length + 1];\n    std::memset(buf, 0, length + 1);\n    napi_get_value_string_utf8(env, args[0], buf, length + 1, &length);\n    // 发送buf中的消息给服务器\n    int ret = OH_WebSocketClient_Send(g_client, buf, length);\n\n    delete[] buf;\n    napi_create_int32(env, ret, &result);\n    return result;\n}\n\nstatic napi_value CloseWebsocket(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    if (g_client == nullptr) {\n        OH_LOG_INFO(LOG_APP, \"websocket client not connected.\");\n        napi_create_int32(env, -1, &result);\n        return result;\n    }\n    // 关闭WebSocket连接\n    int ret = OH_WebSocketClient_Close(g_client, {\n                                                   .code = 0,\n                                                   .reason = \"Actively Close\",\n                                               });\n    // 释放WebSocket资源并置空\n    OH_WebSocketClient_Destroy(g_client);\n    g_client = nullptr;\n    napi_create_int32(env, ret, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ConnectWebsocket函数接收一个WebSocket URL并尝试连接，连接成功返回true，否则返回false。在创建代表WebSocket客户端的WebSocket结构体指针前，需要定义以下回调函数：连接开启时的onOpen回调、接收普通消息的onMessage回调、接收错误消息的onError回调、接收关闭消息的onClose回调。在示例代码中，还调用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-h/capi-net-websocket-h#oh_websocketclient_send",
        children: "OH_WebSocketClient_Send"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-h/capi-net-websocket-h#oh_websocketclient_close",
        children: "OH_WebSocketClient_Close"
      }), "等函数向服务器发送消息，主动关闭WebSocket连接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、将通过napi封装好的napi_value类型对象初始化导出，通过外部函数接口，将函数暴露给JavaScript使用。示例代码中，ConnectWebsocket函数就会作为外部函数Connect暴露出去；SendMessage函数作为外部函数Send暴露出去；CloseWebsocket函数作为外部函数Close暴露出去。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"Connect\", nullptr, ConnectWebsocket, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"Send\", nullptr, SendMessage, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"Close\", nullptr, CloseWebsocket, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、将上一步中初始化成功的对象通过RegisterEntryModule函数，使用napi_module_register函数将模块注册到 Node.js 中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、在工程的index.d.ts文件中定义函数的类型。比如，Connect函数接受一个string参数作为入参，并返回boolean值指示WebSocket连接是否能成功建立。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const Connect: (url: string) => boolean;\nexport const Send: (data: string) => number;\nexport const Close: () => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5、在index.ets文件中对上述封装好的接口进行调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import testWebsocket from 'libentry.so';\n\n@Entry\n@Component\nstruct Index {\n  @State wsUrl: string = '';\n  @State content: string = '';\n  @State connecting: boolean = false;\n\n  build() {\n    Navigation() {\n      Column() {\n        Column() {\n          Text($r('app.string.WebSocket_address'))\n            .fontColor(Color.Gray)\n            .textAlign(TextAlign.Start)\n            .width('100%')\n          TextInput()\n            .width('100%')\n            .id('textInput_address')\n            .onChange((value) => {\n              this.wsUrl = value;\n            })\n        }\n        .margin({\n          bottom: 16 // 与底间隔\n        })\n        .padding({\n          left: 16, // 与左间隔\n          right: 16 // 与右间隔\n        })\n\n        Column() {\n          Text($r('app.string.Content'))\n            .fontColor(Color.Gray)\n            .textAlign(TextAlign.Start)\n            .width('100%')\n          TextInput()\n            .width('100%')\n            .id('textInput_content')\n            .enabled(this.connecting)\n            .onChange((value) => {\n              this.content = value;\n            })\n        }\n        .margin({\n          bottom: 16 // 与底间隔\n        })\n        .padding({\n          left: 16, // 与左间隔\n          right: 16 // 与右间隔\n        })\n\n        Blank()\n\n        Column({\n          space: 12 // 占位空间\n        }) {\n          Button($r('app.string.Connect'))\n            .id('Connect')\n            .enabled(!this.connecting)\n            .onClick(() => {\n              let connRet = testWebsocket.Connect(this.wsUrl);\n              if (connRet) {\n                this.connecting = true;\n                // ···\n              }\n            // ···\n            })\n          Button($r('app.string.Send'))\n            .id('Send')\n            .enabled(this.connecting)\n            .onClick(() => {\n              testWebsocket.Send(this.content);\n            // ···\n            })\n          Button($r('app.string.Close'))\n            .id('Close')\n            .enabled(this.connecting)\n            .onClick(() => {\n              let closeResult = testWebsocket.Close();\n              if (closeResult != -1) {\n                this.connecting = false;\n                // ···\n              }\n            // ···\n            })\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6、配置CMakeLists.txt，本模块需要用到的共享库是libnet_websocket.so，在工程自动生成的CMakeLists.txt中的target_link_libraries中添加此共享库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意：如图所示，在add_library中的entry是工程自动生成的modename，若要做修改，需和步骤3中.nm_modname保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310699)/* ["default"] */.A) + "",
        width: "1116",
        height: "505"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7、调用WebSocket C API接口要求应用拥有ohos.permission.INTERNET权限，在module.json5中的requestPermissions项添加该权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "经过以上步骤，整个工程的搭建已经完成，接下来就可以连接设备运行工程进行日志查看了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试步骤",
      children: "测试步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、连接设备，使用DevEco Studio打开搭建好的工程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、运行工程，设备上会弹出以下图片所示界面："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(335464)/* ["default"] */.A) + "",
        width: "630",
        height: "484"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简要说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在第一行的输入框中，输入ws://或wss://开头的WebSocket URL。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在输入完WebSocket URL，点击Connect按钮后，如果访问成功，会触发onOpen的回调，打印日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在Content输入框里输入要发送给服务器的内容，点击Send按钮发送。如果服务器返回消息，会触发onMessage回调，打印日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Close按钮，WebSocket连接释放，可以重新输入新的WebSocket URL。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(653356)/* ["default"] */.A) + "",
        width: "630",
        height: "489"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(312796)/* ["default"] */.A) + "",
        width: "1329",
        height: "158"
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
310699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798774-ddf7bce21df7833ba1c71aad22a14d62.png");

},
312796(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478425-308ba734d3b45c40e8ea919419bd497f.png");

},
335464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438469-a1cdaeeec5b2f1abb90d432e12812f94.jpg");

},
653356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958424-595b9ca94b20b18c73275c8e4eaf6cdf.jpg");

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