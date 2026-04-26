"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["243927"], {
964019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_data_transmission_websocket_connection_websocket_connection_md_eaf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-data-transmission-websocket-connection-websocket-connection-md-eaf.json
var site_docs_system_network_network_kit_network_kit_data_transmission_websocket_connection_websocket_connection_md_eaf_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-data-transmission/websocket-connection/websocket-connection","title":"使用WebSocket访问网络","description":"场景介绍","source":"@site/docs/system-network/network-kit/network-kit-data-transmission/websocket-connection/websocket-connection.md","sourceDirName":"system-network/network-kit/network-kit-data-transmission/websocket-connection","slug":"/system-network/network-kit/network-kit-data-transmission/websocket-connection/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/websocket-connection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用WebSocket访问网络","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/websocket-connection","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HTTP访问网络","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/http-request/"},"next":{"title":"使用WebSocket访问网络(C/C++)","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-data-transmission/websocket-connection/websocket-connection.md


const frontMatter = {
	title: '使用WebSocket访问网络',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/websocket-connection',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用WebSocket访问网络';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "client端开发步骤",
  "id": "client端开发步骤",
  "level": 2
}, {
  "value": "server端开发步骤",
  "id": "server端开发步骤",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用websocket访问网络",
        children: "使用WebSocket访问网络"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebSocket是一种网络通信协议，它允许客户端和服务器之间建立一个持久的连接，并在该连接上进行全双工通信，连接之后客户端和服务器端可以同时主动发送数据，这是WebSocket和传统的HTTP协议最大的区别，HTTP以单向通信为主，客户端发起请求，服务器端响应数据，一次传输之后，连接会断开。一般情况下，HTTP适用于一次性数据获取（如网页内容加载），WebSocket适用于实时性要求高的场景下（如在线聊天、实时游戏），以避免频繁建立连接提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该模块给第三方应用提供webSocket客户端和服务端能力，实现客户端与服务端的双向连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["客户端：使用WebSocket建立服务器与客户端的双向连接，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#websocketcreatewebsocket",
        children: "createWebSocket()"
      }), "方法创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#websocket",
        children: "WebSocket"
      }), "对象，然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#connect",
        children: "connect()"
      }), "方法连接到服务器。当连接成功后，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onopen",
        children: "open"
      }), "事件的回调，之后客户端就可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#send",
        children: "send()"
      }), "方法与服务器进行通信。当服务器发信息给客户端时，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onmessage",
        children: "message"
      }), "事件的回调。当客户端想要取消此连接时，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#close",
        children: "close()"
      }), "方法主动断开连接后，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onclose",
        children: "close"
      }), "事件的回调。若在上述任一过程中发生错误，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onerror",
        children: "error"
      }), "事件的回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onerror",
        children: "error"
      }), "事件回调的错误码说明：WebSocket的本质是HTTP协议升级，若服务器同意升级，服务器会返回101状态码表示协议从HTTP切换为WebSocket协议（触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onopen",
        children: "open"
      }), "回调），而如果服务器拒绝了升级或出现其他异常，则返回200，表示服务器只是将请求当作普通的HTTP请求来处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["服务端：（从API version 23开始支持全设备使用，之前仅支持TV设备使用）使用WebSocket建立服务器与客户端的双向连接，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#websocketcreatewebsocketserver19",
        children: "createWebSocketServer()"
      }), "方法创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#websocketserver19",
        children: "WebSocketServer"
      }), "对象，然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#start19",
        children: "start()"
      }), "方法启动服务器，监听客户端申请建链的消息。当连接成功后，服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onconnect19",
        children: "connect"
      }), "事件的回调，之后服务端可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#send19",
        children: "send()"
      }), "方法与客户端进行通信，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#listallconnections19",
        children: "listAllConnections()"
      }), "方法列举出当前与服务端建链的所有客户端信息。当客户端给服务端发消息时，服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onmessagereceive19",
        children: "messageReceive"
      }), "事件回调。当服务端想断开某个与客户端的连接时，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#close19",
        children: "close()"
      }), "方法主动断开与某个客户端的连接，之后服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onclose19",
        children: "close"
      }), "事件的回调。当服务端想停止service时，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#stop19",
        children: "stop()"
      }), "方法。若在上述任一过程中发生错误，服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#onerror19",
        children: "error"
      }), "事件的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(218829)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["websocket支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.2",
        children: "心跳检测机制"
      }), "，在客户端和服务端建立webSocket连接之后，从连接建立或者客户端收到Pong帧开始计时，每间隔pingInterval秒客户端会发送Ping帧给服务器。服务器若支持websocket协议则会在收到Ping帧后自动回复Pong帧，表示连接正常，若服务端异常或服务端不支持websocket协议则不会回复Pong帧；若Ping帧发出去后，pongTimeout秒内没有收到Pong帧，则会主动断开连接。支持开发者关闭心跳检测机制，自定义pingInterval与pongTimeout，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#websocketrequestoptions",
        children: "WebSocketRequestOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端从API version 19开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client端开发步骤",
      children: "client端开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入webSocket以及错误码模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建WebSocket连接，返回一个WebSocket对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let defaultIpAddress = 'wss://echo.websocket.org'; // WebSocket地址\nlet ws: webSocket.WebSocket = webSocket.createWebSocket();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅WebSocket的打开、消息接收、关闭、Error事件（可选），当收到on('open')事件时，可以通过send()方法与服务器进行通信，当收到服务器的bye消息时（此消息字段仅为示意，具体字段需要与服务器协商），主动断开连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ws.on('open', (err: BusinessError, value: Object) => {\n  hilog.info(0x0000, 'testTag', 'on open, status:' + JSON.stringify(value));\n  // 当收到on('open')事件时，可以通过send()方法与服务器进行通信。\n  // ...\n});\n\nws.on('message', (err: BusinessError, value: string | ArrayBuffer) => {\n  // ...\n  hilog.info(0x0000, 'testTag', 'on message, message:' + value);\n  // 当收到服务器的`bye`消息时（此消息字段仅为示意，具体字段需要与服务器协商），主动断开连接。\n  if (value === 'bye') {\n    ws!.close((err: BusinessError) => {\n      if (!err) {\n        // ...\n        hilog.info(0x0000, 'testTag', `WebSocket closed successfully`);\n      } else {\n        // ...\n        hilog.error(0x0000, 'testTag', `WebSocket closing failed: ` + JSON.stringify(err));\n      }\n    });\n  }\n})\n\nws.on('close', (err: BusinessError, value: webSocket.CloseResult) => {\n hilog.info(0x0000, 'testTag', 'on close, code is ' + value.code + ', reason is ' + value.reason);\n  // ...\n});\n\nws.on('error', (err: BusinessError) => {\n  // ...\n  hilog.error(0x0000, 'testTag', 'WebSocket error: ' + JSON.stringify(err));\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据URL地址，发起WebSocket连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ws.connect(defaultIpAddress, (err: BusinessError, value: boolean) => {\n  if (!err) {\n    hilog.info(0x0000, 'testTag', 'Connected successfully');\n  } else {\n    // ...\n    hilog.error(0x0000, 'testTag', `WebSocket connection failed: ` + JSON.stringify(err));\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "收到on('open')的回调事件后，可通过send()方法向服务器发送数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ws.send('Hello, server!', (err: BusinessError, value: boolean) => {\n  if (!err) {\n    // ...\n    hilog.info(0x0000, 'testTag', 'Message sent successfully');\n  } else {\n    // ...\n    hilog.error(0x0000, 'testTag', `Message sending failed: ` + JSON.stringify(err));\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "server端开发步骤",
      children: "server端开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入webSocket以及错误码模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建WebSocketServer对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let localServer: webSocket.WebSocketServer;\nlocalServer = webSocket.createWebSocketServer();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅WebSocketServer的客户端连接事件、消息接收事件、关闭事件、Error事件（可选），在收到客户端连接事件后，服务端可以通过send()方法与客户端进行通信，当收到客户端的\"bye\"消息时（此消息字段仅为示意，具体字段需要与客户端协商），主动断开连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "localServer.on('connect', async (connection: webSocket.WebSocketConnection) => {\n  hilog.info(0x0000, 'testTag', `New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);\n  // 当收到on('connect')事件时，可以通过send()方法与客户端进行通信。\n  localServer.send(\"Hello, I'm server!\", connection).then((success: boolean) => {\n    if (success) {\n      hilog.info(0x0000, 'testTag', 'message send successfully');\n    } else {\n      hilog.error(0x0000, 'testTag', 'message send failed');\n    }\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `message send failed, Code: ${error.code}, message: ${error.message}`);\n  });\n});\n\nlocalServer.on('messageReceive', (message: webSocket.WebSocketMessage) => {\n  try {\n    hilog.info(0x0000, 'testTag', `on message received, client: ${message.clientConnection}, data: ${message.data}`);\n    // 当收到客户端的\"bye\"消息时（此消息字段仅为示意，具体字段需要与客户端协商），主动断开连接。\n    if (message.data === 'bye') {\n      localServer.close(message.clientConnection).then((success: boolean) => {\n        if (success) {\n          hilog.info(0x0000, 'testTag', 'close client successfully');\n        } else {\n          hilog.error(0x0000, 'testTag', 'close client failed');\n        }\n      });\n    }\n  } catch (error) {\n    hilog.error(0x0000, 'testTag', `on messageReceive failed. Code: ${error.code}, message: ${error.message}`);\n  }\n});\n\nlocalServer.on('close', (clientConnection: webSocket.WebSocketConnection, closeReason: webSocket.CloseResult) => {\n  hilog.info(0x0000, 'testTag', `client close, client: ${clientConnection}, closeReason: Code: ${closeReason.code}, reason: ${closeReason.reason}`);\n});\n\nlocalServer.on('error', (error: BusinessError) => {\n  hilog.error(0x0000, 'testTag', `error. Code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置config参数启动server端服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let config: webSocket.WebSocketServerConfig = {\n  // 监听端口。\n  serverPort: 8080,\n  maxConcurrentClientsNumber: 10,\n  maxConnectionsForOneClient: 10,\n}\nlocalServer.start(config).then((success: boolean) => {\n  if (success) {\n    hilog.info(0x0000, 'testTag', 'WebSocket server started successfully');\n  } else {\n    hilog.error(0x0000, 'testTag', 'Failed to start WebSocket server');\n  }\n}).catch((error: BusinessError) => {\n  hilog.error(0x0000, 'testTag', `Failed to start. Code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务端监听所有客户端连接状态（可选）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let connections: webSocket.WebSocketConnection[] = [];\n\n// ...\n  try {\n    connections = await localServer.listAllConnections();\n    if (connections.length === 0) {\n      hilog.info(0x0000, 'testTag', 'client list is empty');\n      // ...\n    } else {\n      hilog.info(0x0000, 'testTag', `client list cnt: ${connections.length}, client connections list is: ${connections}`);\n    }\n  } catch (error) {\n    hilog.error(0x0000, 'testTag', `Failed to listAllConnections. Code: ${error.code}, message: ${error.message}`);\n    // ...\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要关闭WebSocketServer端服务器时，可以通过stop()停止服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "localServer.stop().then((success: boolean) => {\n  if (success) {\n    hilog.info(0x0000, 'testTag', 'server stop service successfully');\n    // ...\n  } else {\n    hilog.error(0x0000, 'testTag', 'server stop service failed');\n    // ...\n  }\n});\n"
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
218829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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