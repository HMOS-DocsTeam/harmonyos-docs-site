"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798114"], {
368080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_api_network_api_arkts_js_apis_websocket_js_apis_websocket_md_167_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-api-network-api-arkts-js-apis-websocket-js-apis-websocket-md-167.json
var site_docs_ref_system_network_api_network_api_network_api_arkts_js_apis_websocket_js_apis_websocket_md_167_namespaceObject = JSON.parse('{"id":"system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket","title":"@ohos.net.webSocket (WebSocket连接)","description":"给第三方应用提供webSocket客户端和服务端服务器，实现客户端与服务端的双向连接。","source":"@site/docs-ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket.md","sourceDirName":"system-network-api/network-api/network-api-arkts/js-apis-websocket","slug":"/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"@ohos.net.webSocket (WebSocket连接)","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-websocket"},"sidebar":"ref","previous":{"title":"@ohos.net.vpn (VPN管理)","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-api-arkts/js-apis-net-vpn/js-apis-net-vpn"},"next":{"title":"@ohos.net.netFirewall (网络防火墙)","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-api-arkts/js-apis-net-netfirewall/js-apis-net-netfirewall"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket.md


const frontMatter = {
	title: '@ohos.net.webSocket (WebSocket连接)',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-websocket'
};
const contentTitle = '@ohos.net.webSocket (WebSocket连接)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "webSocket.createWebSocket",
  "id": "websocketcreatewebsocket",
  "level": 2
}, {
  "value": "WebSocket",
  "id": "websocket",
  "level": 2
}, {
  "value": "connect",
  "id": "connect",
  "level": 3
}, {
  "value": "connect",
  "id": "connect-1",
  "level": 3
}, {
  "value": "connect",
  "id": "connect-2",
  "level": 3
}, {
  "value": "send",
  "id": "send",
  "level": 3
}, {
  "value": "send",
  "id": "send-1",
  "level": 3
}, {
  "value": "close",
  "id": "close",
  "level": 3
}, {
  "value": "close",
  "id": "close-1",
  "level": 3
}, {
  "value": "close",
  "id": "close-2",
  "level": 3
}, {
  "value": "on(&#39;open&#39;)",
  "id": "onopen",
  "level": 3
}, {
  "value": "off(&#39;open&#39;)",
  "id": "offopen",
  "level": 3
}, {
  "value": "on(&#39;message&#39;)",
  "id": "onmessage",
  "level": 3
}, {
  "value": "off(&#39;message&#39;)",
  "id": "offmessage",
  "level": 3
}, {
  "value": "on(&#39;close&#39;)",
  "id": "onclose",
  "level": 3
}, {
  "value": "off(&#39;close&#39;)",
  "id": "offclose",
  "level": 3
}, {
  "value": "on(&#39;error&#39;)",
  "id": "onerror",
  "level": 3
}, {
  "value": "off(&#39;error&#39;)",
  "id": "offerror",
  "level": 3
}, {
  "value": "on(&#39;dataEnd&#39;)11+",
  "id": "ondataend11",
  "level": 3
}, {
  "value": "off(&#39;dataEnd&#39;)11+",
  "id": "offdataend11",
  "level": 3
}, {
  "value": "on(&#39;headerReceive&#39;)12+",
  "id": "onheaderreceive12",
  "level": 3
}, {
  "value": "off(&#39;headerReceive&#39;)12+",
  "id": "offheaderreceive12",
  "level": 3
}, {
  "value": "webSocket.createWebSocketServer19+",
  "id": "websocketcreatewebsocketserver19",
  "level": 2
}, {
  "value": "WebSocketServer19+",
  "id": "websocketserver19",
  "level": 2
}, {
  "value": "start19+",
  "id": "start19",
  "level": 3
}, {
  "value": "send19+",
  "id": "send19",
  "level": 3
}, {
  "value": "listAllConnections19+",
  "id": "listallconnections19",
  "level": 3
}, {
  "value": "close19+",
  "id": "close19",
  "level": 3
}, {
  "value": "stop19+",
  "id": "stop19",
  "level": 3
}, {
  "value": "on(&#39;connect&#39;)19+",
  "id": "onconnect19",
  "level": 3
}, {
  "value": "off(&#39;connect&#39;)19+",
  "id": "offconnect19",
  "level": 3
}, {
  "value": "on(&#39;messageReceive&#39;)19+",
  "id": "onmessagereceive19",
  "level": 3
}, {
  "value": "off(&#39;messageReceive&#39;)19+",
  "id": "offmessagereceive19",
  "level": 3
}, {
  "value": "on(&#39;close&#39;)19+",
  "id": "onclose19",
  "level": 3
}, {
  "value": "off(&#39;close&#39;)19+",
  "id": "offclose19",
  "level": 3
}, {
  "value": "on(&#39;error&#39;)19+",
  "id": "onerror19",
  "level": 3
}, {
  "value": "off(&#39;error&#39;)19+",
  "id": "offerror19",
  "level": 3
}, {
  "value": "WebSocketRequestOptions",
  "id": "websocketrequestoptions",
  "level": 2
}, {
  "value": "ClientCert11+",
  "id": "clientcert11",
  "level": 2
}, {
  "value": "ProxyConfiguration12+",
  "id": "proxyconfiguration12",
  "level": 2
}, {
  "value": "WebSocketCloseOptions",
  "id": "websocketcloseoptions",
  "level": 2
}, {
  "value": "CloseResult10+",
  "id": "closeresult10",
  "level": 2
}, {
  "value": "ResponseHeaders12+",
  "id": "responseheaders12",
  "level": 2
}, {
  "value": "close错误码说明",
  "id": "close错误码说明",
  "level": 2
}, {
  "value": "HttpProxy12+",
  "id": "httpproxy12",
  "level": 2
}, {
  "value": "WebSocketServerConfig19+",
  "id": "websocketserverconfig19",
  "level": 2
}, {
  "value": "ServerCert19+",
  "id": "servercert19",
  "level": 2
}, {
  "value": "WebSocketMessage19+",
  "id": "websocketmessage19",
  "level": 2
}, {
  "value": "WebSocketConnection19+",
  "id": "websocketconnection19",
  "level": 2
}, {
  "value": "ClientConnectionCloseCallback19+",
  "id": "clientconnectionclosecallback19",
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
    object: "object",
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
        id: "ohosnetwebsocket-websocket连接",
        children: "@ohos.net.webSocket (WebSocket连接)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给第三方应用提供webSocket客户端和服务端服务器，实现客户端与服务端的双向连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["客户端：使用WebSocket建立服务器与客户端的双向连接，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#websocketcreatewebsocket",
        children: "createWebSocket"
      }), "方法创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#websocket",
        children: "WebSocket"
      }), "对象，然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#connect",
        children: "connect"
      }), "方法连接到服务器。当连接成功后，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onopen",
        children: "open"
      }), "事件的回调，之后客户端就可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#send",
        children: "send"
      }), "方法与服务器进行通信。当服务器发信息给客户端时，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmessage",
        children: "message"
      }), "事件的回调。当客户端想要取消此连接时，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#close",
        children: "close"
      }), "方法主动断开连接后，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onclose",
        children: "close"
      }), "事件的回调。若在上述任一过程中发生错误，客户端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onerror",
        children: "error"
      }), "事件的回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["服务端：（从API version 23开始支持全设备使用，之前仅支持TV设备使用）使用WebSocket建立服务器与客户端的双向连接，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#websocketcreatewebsocketserver19",
        children: "createWebSocketServer"
      }), "方法创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#websocketserver19",
        children: "WebSocketServer"
      }), "对象，然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#start19",
        children: "start"
      }), "方法启动服务器，监听客户端的申请建链的消息。当连接成功后，服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onconnect19",
        children: "connect"
      }), "事件的回调，之后服务端可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#send19",
        children: "send"
      }), "方法与客户端进行通信，或者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#listallconnections19",
        children: "listAllConnections"
      }), "方法列举出当前与服务端建链的所有客户端信息。当客户端给服务端发消息时，服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmessagereceive19",
        children: "messageReceive"
      }), "事件回调。当服务端想断开与某个客户端的连接时，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#close19",
        children: "close"
      }), "方法主动断开与某个客户端的连接，之后服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onclose19",
        children: "close"
      }), "事件的回调。当服务端想停止service时，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stop19",
        children: "stop"
      }), "方法。若在上述任一过程中发生错误，服务端会收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onerror19",
        children: "error"
      }), "事件的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(142062)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webSocket } from '@kit.NetworkKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "websocketcreatewebsocket",
      children: "webSocket.createWebSocket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createWebSocket(): WebSocket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个WebSocket对象，里面包括建立连接、关闭连接、发送数据和订阅/取消订阅WebSocket连接的打开事件、接收到服务器消息事件、关闭事件和错误事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#websocket",
              children: "WebSocket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个WebSocket对象，里面包括connect、send、close、on和off方法。"
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
        children: "let ws: webSocket.WebSocket = webSocket.createWebSocket();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "websocket",
      children: "WebSocket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用WebSocket的方法前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#websocketcreatewebsocket",
        children: "webSocket.createWebSocket"
      }), "创建一个WebSocket。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connect",
      children: "connect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "connect(url: string, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址，建立一个WebSocket连接，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56592)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["callback中返回的boolean值仅表示连接请求创建是否成功。如需感知WebSocket是否连接成功，需要在调用该接口前调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onopen",
        children: "on('open')"
      }), "订阅open事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(652469)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL地址长度不能超过1024个字符，否则会连接失败。从API version 15开始，URL地址长度限制由1024修改为2048。"
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
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建立WebSocket连接的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。true:连接请求创建成功；false:连接请求创建失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-websocket/errorcode-net-websocket",
        children: "webSocket错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket url error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket certificate file does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket connection already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nlet url = \"ws://\";\nws.connect(url, (err: BusinessError, value: boolean) => {\n  if (!err) {\n    console.info(\"connect success\")\n  } else {\n    console.error(`connect fail. Code: ${err.code}, message: ${err.message}`)\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connect-1",
      children: "connect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址，建立一个WebSocket连接，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(38647)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["callback中返回的boolean值仅表示连接请求创建是否成功。如需感知WebSocket是否连接成功，需要在调用该接口前调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onopen",
        children: "on('open')"
      }), "订阅open事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844018)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL地址长度不能超过1024个字符，否则会连接失败。从API version 15开始，URL地址长度限制由1024修改为2048。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建立WebSocket连接的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocketRequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#websocketrequestoptions",
              children: "WebSocketRequestOptions"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。true:连接请求创建成功；false:连接请求创建失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-websocket/errorcode-net-websocket",
        children: "webSocket错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket url error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket certificate file does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket connection already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nlet options: webSocket.WebSocketRequestOptions | undefined;\nif (options !=undefined) {\n  options.header = {\n     name1: \"value1\",\n     name2: \"value2\",\n     name3: \"value3\"\n  };\n  options.caPath = \"\";\n}\nlet url = \"ws://\"\nws.connect(url, options, (err: BusinessError, value: Object) => {\n  if (!err) {\n    console.info(\"connect success\")\n  } else {\n    console.error(`connect fail. Code: ${err.code}, message: ${err.message}`)\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connect-2",
      children: "connect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址和header，建立一个WebSocket连接。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(826189)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["callback中返回的boolean值仅表示连接请求创建是否成功。如需感知WebSocket是否连接成功，需要在调用该接口前调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onopen",
        children: "on('open')"
      }), "订阅open事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(382681)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL地址长度不能超过1024个字符，否则会连接失败。从API version 15开始，URL地址长度限制由1024修改为2048。"
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
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建立WebSocket连接的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocketRequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#websocketrequestoptions",
              children: "WebSocketRequestOptions"
            }), "。"]
          })]
        })]
      })]
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。true:连接请求创建成功；false:连接请求创建失败。"
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
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-websocket/errorcode-net-websocket",
        children: "webSocket错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket url error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket certificate file does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket connection already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2302999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nlet url = \"ws://\"\nlet promise = ws.connect(url);\npromise.then((value: boolean) => {\n  console.info(\"connect success\")\n}).catch((err:string) => {\n  console.error(\"connect fail, error:\" + JSON.stringify(err))\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "send",
      children: "send"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过WebSocket连接发送数据，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
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
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。true:发送请求创建成功；false:发送请求创建失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
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
        children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nlet url = \"ws://\"\nclass OutValue {\n  status: number = 0\n  message: string = \"\"\n}\nws.connect(url, (err: BusinessError, value: boolean) => {\n    if (!err) {\n      console.info(\"connect success\")\n    } else {\n      console.error(`connect fail. Code: ${err.code}, message: ${err.message}`)\n    }\n});\nws.on('open', (err: BusinessError, value: Object) => {\n  console.info(\"on open, status:\" + (value as OutValue).status + \", message:\" + (value as OutValue).message)\n    ws.send(\"Hello, server!\", (err: BusinessError, value: boolean) => {\n    if (!err) {\n      console.info(\"send success\")\n    } else {\n      console.error(`send fail. Code: ${err.code}, message: ${err.message}`)\n    }\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435167)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "send接口必须在监听到open事件后才可以调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "send-1",
      children: "send"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "send(data: string | ArrayBuffer): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过WebSocket连接发送数据。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
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
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以Promise形式返回发送数据的结果。true:发送请求创建成功；false:发送请求创建失败。"
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
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
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
        children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nlet url = \"ws://\"\nclass OutValue {\n  status: number = 0\n  message: string = \"\"\n}\nws.connect(url, (err: BusinessError, value: boolean) => {\n    if (!err) {\n      console.info(\"connect success\")\n    } else {\n      console.error(\"connect fail. Code: ${err.code}, message: ${err.message}\")\n    }\n});\n\nws.on('open', (err: BusinessError, value: Object) => {\n  console.info(\"on open, status:\" + (value as OutValue).status + \", message:\" + (value as OutValue).message)\n  let promise = ws.send(\"Hello, server!\");\n  promise.then((value: boolean) => {\n    console.info(\"send success\")\n  }).catch((err:string) => {\n    console.error(\"send fail, error:\" + JSON.stringify(err))\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242980)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "send接口必须在监听到open事件后才可以调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "close",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭WebSocket连接，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。true:关闭请求创建成功；false:关闭请求创建失败。"
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
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
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
        children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nws.close((err: BusinessError) => {\n  if (!err) {\n    console.info(\"close success\")\n  } else {\n    console.error(`close fail. Code: ${err.code}, message: ${err.message}`)\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "close-1",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据参数options，关闭WebSocket连接，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocketCloseOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#websocketcloseoptions",
              children: "WebSocketCloseOptions"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。true:关闭请求创建成功；false:关闭请求创建失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
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
        children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\n\nlet options: webSocket.WebSocketCloseOptions | undefined;\nif (options != undefined) {\n    options.code = 1000\n    options.reason = \"your reason\"\n}\nws.close(options, (err: BusinessError) => {\n    if (!err) {\n        console.info(\"close success\")\n    } else {\n        console.error(`close fail. Code: ${err.code}, message: ${err.message}`)\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "close-2",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(options?: WebSocketCloseOptions): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据可选参数code和reason，关闭WebSocket连接。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocketCloseOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#websocketcloseoptions",
              children: "WebSocketCloseOptions"
            }), "。"]
          })]
        })
      })]
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以Promise形式返回关闭连接的结果。true:关闭请求创建成功；false:关闭请求创建失败。"
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
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
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
        children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nlet options: webSocket.WebSocketCloseOptions | undefined;\nif (options != undefined) {\n    options.code = 1000\n    options.reason = \"your reason\"\n}\nlet promise = ws.close();\npromise.then((value: boolean) => {\n    console.info(\"close success\")\n}).catch((err:string) => {\n    console.error(\"close fail, error:\" + JSON.stringify(err))\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onopen",
      children: "on('open')"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["on(type: 'open', callback: AsyncCallback", (0,jsx_runtime.jsxs)(_components.object, {
        children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["订阅WebSocket的打开事件，使用callback异步回调。该事件用于指示WebSocket是否连接成功。该接口需要在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#connect",
            children: "connect"
          }), "发起连接请求前调用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力"
            })
          }), "：SystemCapability.Communication.NetStack"]
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
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "订阅的事件类型。'open'：WebSocket的打开事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AsyncCallback<Object>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数。"
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
            children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError, Callback } from '@kit.BasicServicesKit';\n\nlet ws= webSocket.createWebSocket();\nclass OutValue {\n  status: number = 0\n  message: string = \"\"\n}\nws.on('open', (err: BusinessError, value: Object) => {\n  console.info(\"on open, status:\" + (value as OutValue).status + \", message:\" + (value as OutValue).message)\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "offopen",
          children: "off('open')"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["off(type: 'open', callback?: AsyncCallback", (0,jsx_runtime.jsxs)(_components.object, {
            children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocket的打开事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(371473)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "取消订阅的事件类型。'open'：WebSocket的打开事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "AsyncCallback<Object>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nclass OutValue {\n  status: number = 0\n  message: string = \"\"\n}\nlet callback1 = (err: BusinessError, value: Object) => {\n console.info(\"on open, status:\" + ((value as OutValue).status + \", message:\" + (value as OutValue).message))\n}\nws.on('open', callback1);\n// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。\nws.off('open', callback1);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onmessage",
              children: "on('message')"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocket的接收服务器消息事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(127104)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "AsyncCallback中的数据可以是字符串（API version 6开始支持）或ArrayBuffer（API version 8开始支持）。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "订阅的事件类型。'message'：WebSocket的接收服务器消息事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "AsyncCallback<string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "ArrayBuffer 8+>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nws.on('message', (err: BusinessError<void>, value: string | ArrayBuffer) => {\n  console.info(\"on message, message:\" + value)\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offmessage",
              children: "off('message')"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocket的接收服务器消息事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(627111)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "AsyncCallback中的数据可以是字符串(API 6)或ArrayBuffer(API 8)。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "取消订阅的事件类型。'message'：WebSocket的接收到服务器消息事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "AsyncCallback<string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "ArrayBuffer 8+>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
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
                children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nws.off('message');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onclose",
              children: "on('close')"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'close', callback: AsyncCallback<CloseResult>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocket的关闭事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "订阅的事件类型。'close'：WebSocket的关闭事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "AsyncCallback<CloseResult>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。  close：close错误码，reason：错误码说明"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nws.on('close', (err: BusinessError, value: webSocket.CloseResult) => {\n  console.info(\"on close, code is \" + value.code + \", reason is \" + value.reason)\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offclose",
              children: "off('close')"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'close', callback?: AsyncCallback<CloseResult>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocket的关闭事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(961992)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "取消订阅的事件类型。'close'：WebSocket的关闭事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "AsyncCallback<CloseResult>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。  close：close错误码，reason：错误码说明"
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
                children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nws.off('close');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onerror",
              children: "on('error')"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'error', callback: ErrorCallback): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocket的Error事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["关于", (0,jsx_runtime.jsx)(_components.a, {
                href: "#onerror",
                children: "error"
              }), "事件回调的错误码说明：WebSocket的本质是HTTP协议升级，若服务器同意升级，服务器会返回101。状态码表示协议从HTTP切换为WebSocket协议（触发open回调），而如果服务器拒绝了升级或出现其他异常，则返回200，表示服务器只是将请求当作普通的HTTP请求来处理。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "订阅的事件类型。'error'：WebSocket的Error事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "ErrorCallback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet ws = webSocket.createWebSocket();\nws.on('error', (err: BusinessError) => {\n  console.error(`on error. Code: ${err.code}, message: ${err.message}`)\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offerror",
              children: "off('error')"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'error', callback?: ErrorCallback): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocket的Error事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(570627)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "取消订阅的事件类型。'error'：WebSocket的Error事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "ErrorCallback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nws.off('error');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "ondataend11",
              children: "on('dataEnd')11+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'dataEnd', callback: Callback<void>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocket的数据接收结束事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "订阅的事件类型。'dataEnd'：WebSocket的数据接收结束事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Callback<void>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nws.on('dataEnd', () => {\n  console.info(\"on dataEnd\")\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offdataend11",
              children: "off('dataEnd')11+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'dataEnd', callback?: Callback<void>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocket的数据接收结束事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(283166)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "取消订阅的事件类型。'dataEnd'：WebSocket的数据接收结束事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Callback<void>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nws.off('dataEnd');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onheaderreceive12",
              children: "on('headerReceive')12+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'headerReceive', callback: Callback<ResponseHeaders>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅HTTP Response Header事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "订阅的事件类型。'headerReceive'：WebSocket的headerReceive事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Callback<ResponseHeaders>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数，返回订阅事件。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nws.on('headerReceive', (data) => {\n  console.info(\"on headerReceive \" + JSON.stringify(data))\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offheaderreceive12",
              children: "off('headerReceive')12+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'headerReceive', callback?: Callback<ResponseHeaders>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅HTTP Response Header事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(423591)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "取消订阅的事件类型。'headerReceive'：WebSocket的headerReceive事件。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Callback<ResponseHeaders>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数，返回订阅事件。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\n\nlet ws = webSocket.createWebSocket();\nws.off('headerReceive');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "websocketcreatewebsocketserver19",
              children: "webSocket.createWebSocketServer19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "createWebSocketServer(): WebSocketServer"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建一个WebSocketServer对象，包括启动服务、发送数据、关闭连接、列出客户端信息、停止服务，订阅/取消订阅webSocket连接的连接事件、接收到客户端消息事件、关闭事件和错误事件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(137130)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从API version 23开始支持全设备使用，之前仅支持TV设备使用。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), ": SystemCapability.Communication.NetStack"]
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
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketserver19",
                      children: "WebSocketServer"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "返回一个WebSocketServer对象，里面包括start、listAllConnections、send、close、stop、on和off方法。"
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
                children: "let ws: webSocket.WebSocketServer = webSocket.createWebSocketServer();\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "websocketserver19",
              children: "WebSocketServer19+"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在调用WebSocketServer方法前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "#websocketcreatewebsocketserver19",
                children: "webSocket.createWebSocketServer"
              }), "创建一个WebSocketServer。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "start19",
              children: "start19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "start(config: WebSocketServerConfig): Promise<boolean>"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置config参数，启动服务端service。使用Promise异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(509037)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在多次调用该接口时，应避免监听同一端口。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "需要权限"
                })
              }), ": ohos.permission.INTERNET"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), ": SystemCapability.Communication.NetStack"]
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
                    children: "config"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketserverconfig19",
                      children: "WebSocketServerConfig"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "启动websocketServer服务器。"
                  })]
                })
              })]
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
                    children: "Promise<boolean>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "promise对象。返回true表示服务器启动成功；返回false表示服务启动失败。"
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
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-websocket/errorcode-net-websocket",
                children: "webSocket错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                    children: "201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Permission denied."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "2302002"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Websocket certificate file does not exist."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "2302004"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Can't listen on the given NIC."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "2302005"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Can't listen on the given Port."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "2302999"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Websocket other unknown error."
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer: webSocket.WebSocketServer;\nlet config: webSocket.WebSocketServerConfig = {\n  serverPort: 8080, // 监听端口\n  maxConcurrentClientsNumber: 10,\n  maxConnectionsForOneClient: 10,\n}\n\nlocalServer = webSocket.createWebSocketServer();\nlocalServer.start(config).then((success: boolean) => {\n  if (success) {\n    console.info('webSocket server start success');\n  } else {\n    console.error('websocket server start failed');\n  }\n}).catch((error: BusinessError) => {\n  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "send19",
              children: "send19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "send(data: string | ArrayBuffer, connection: WebSocketConnection): Promise<boolean>"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过WebSocket连接发送数据。使用Promise异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(759642)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "send接口必须在监听到connect事件后才可以调用。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "需要权限"
                })
              }), ": ohos.permission.INTERNET"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), ": SystemCapability.Communication.NetStack"]
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
                    children: "data"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "ArrayBuffer"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "connection"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketconnection19",
                      children: "WebSocketConnection"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "发送的客户端信息。"
                  })]
                })]
              })]
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
                    children: "Promise<boolean>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "promise对象。返回true表示发送请求创建成功；返回false表示发送请求创建失败。"
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
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-websocket/errorcode-net-websocket",
                children: "webSocket错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                    children: "201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Permission denied."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "2302006"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "websocket connection does not exist."
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer: webSocket.WebSocketServer;\nlet config: webSocket.WebSocketServerConfig = {\n  serverPort: 8080, // 监听端口\n  maxConcurrentClientsNumber: 10,\n  maxConnectionsForOneClient: 10,\n}\n\nlocalServer = webSocket.createWebSocketServer();\nlocalServer.start(config).then((success: boolean) => {\n  if (success) {\n    console.info('webSocket server start success');\n  } else {\n    console.error('websocket server start failed');\n  }\n}).catch((error: BusinessError) => {\n  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);\n});\n\nlocalServer.on('connect', async (connection: webSocket.WebSocketConnection) => {\n  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);\n  // 当收到on('connect')事件时，可以通过send()方法与客户端进行通信\n  localServer.send(\"Hello, I'm server!\", connection).then((success: boolean) => {\n    if (success) {\n      console.info('message send successfully');\n    } else {\n      console.error('message send failed');\n    }\n  }).catch((error: BusinessError) => {\n    console.error(`message send failed, Code: ${error.code}, message: ${error.message}`);\n  });\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "listallconnections19",
              children: "listAllConnections19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "listAllConnections(): WebSocketConnection[]"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取与服务端连接的所有客户端信息。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "需要权限"
                })
              }), ": ohos.permission.INTERNET"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(944839)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "该接口为异步调用，返回结果需通过await关键字等待异步操作完成，以确保正确获取到所有客户端连接信息。"
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
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketconnection19",
                      children: "WebSocketConnection[]"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "以字符串数组形式返回所有客户端的信息。"
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
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "错误码ID"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "错误信息"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Permission denied."
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet connections: webSocket.WebSocketConnection[] = [];\nlet localServer: webSocket.WebSocketServer;\nlet config: webSocket.WebSocketServerConfig = {\n  serverPort: 8080, // 监听端口\n  maxConcurrentClientsNumber: 10,\n  maxConnectionsForOneClient: 10,\n}\n\nlocalServer = webSocket.createWebSocketServer();\nlocalServer.start(config).then((success: boolean) => {\n  if (success) {\n    console.info('webSocket server start success');\n  } else {\n    console.error('websocket server start failed');\n  }\n}).catch((error: BusinessError) => {\n  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);\n});\n\nlocalServer.on('connect', async (connection: webSocket.WebSocketConnection) => {\n  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);\n  try {\n    connections = await localServer.listAllConnections();\n    if (connections.length === 0) {\n      console.info('client list is empty');\n    } else {\n      console.info(`client list cnt: ${connections.length}, client connections list is: ${connections}`);\n    }\n  } catch (error) {\n    console.error(`Failed to listAllConnections. Code: ${error.code}, message: ${error.message}`);\n  }\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "close19",
              children: "close19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "close(connection: WebSocketConnection, options?: webSocket.WebSocketCloseOptions): Promise<boolean>"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "关闭指定websocket连接。使用Promise异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "需要权限"
                })
              }), "：ohos.permission.INTERNET"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "connection"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketconnection19",
                      children: "WebSocketConnection"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "客户端信息，包括客户端的ip地址和端口号port。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "options"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketcloseoptions",
                      children: "webSocket.WebSocketCloseOptions"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "关闭WebSocket连接时，可选参数的类型和说明。  - 错误码默认：200。原因值默认：Websocket connect failed。"
                  })]
                })]
              })]
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
                    children: "Promise<boolean>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "promise对象。返回true表示关闭请求创建成功；返回false表示关闭请求创建失败。"
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
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-websocket/errorcode-net-websocket",
                children: "webSocket错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                    children: "201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Permission denied."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "2302006"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "websocket connection does not exist."
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer: webSocket.WebSocketServer;\nlet config: webSocket.WebSocketServerConfig = {\n  serverPort: 8080, // 监听端口\n  maxConcurrentClientsNumber: 10,\n  maxConnectionsForOneClient: 10,\n}\n\nlocalServer = webSocket.createWebSocketServer();\nlocalServer.start(config).then((success: boolean) => {\n  if (success) {\n    console.info('webSocket server start success');\n  } else {\n    console.error('websocket server start failed');\n  }\n}).catch((error: BusinessError) => {\n  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);\n});\n\nlocalServer.on('connect', (connection: webSocket.WebSocketConnection) => {\n  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);\n  localServer.close(connection).then((success: boolean) => {\n    if (success) {\n      console.info('close client successfully');\n    } else {\n      console.error('close client failed');\n    }\n  });\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "stop19",
              children: "stop19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "stop(): Promise<boolean>"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "停止服务端服务。使用Promise异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "需要权限"
                })
              }), "：ohos.permission.INTERNET"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "Promise<boolean>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "promise对象。返回true表示停止服务端service请求创建成功；返回false表示停止服务端service请求创建失败。"
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
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "错误码ID"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "错误信息"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Permission denied."
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer: webSocket.WebSocketServer;\nlet config: webSocket.WebSocketServerConfig = {\n  serverPort: 8080, // 监听端口\n  maxConcurrentClientsNumber: 10,\n  maxConnectionsForOneClient: 10,\n}\n\nlocalServer = webSocket.createWebSocketServer();\nlocalServer.start(config).then((success: boolean) => {\n  if (success) {\n    console.info('webSocket server start success');\n  } else {\n    console.error('websocket server start failed');\n  }\n}).catch((error: BusinessError) => {\n  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);\n});\n\nlocalServer.stop().then((success: boolean) => {\n  if (success) {\n    console.info('server stop service successfully');\n  } else {\n    console.error('server stop service failed');\n  }\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onconnect19",
              children: "on('connect')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'connect', callback: Callback<WebSocketConnection>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocketServer的连接事件（客户端与服务端建链成功），使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'connect'，当onconnect()调用完成，客户端与服务端建链成功。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketconnection19",
                      children: "WebSocketConnection"
                    }), ">"]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。连接的客户端信息。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError, Callback } from '@kit.BasicServicesKit';\n\nlet localServer = webSocket.createWebSocketServer();\nlocalServer.on('connect', (connection: webSocket.WebSocketConnection) => {\n  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offconnect19",
              children: "off('connect')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'connect', callback?: Callback<WebSocketConnection>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocketServer的连接事件（客户端与服务端建链成功），使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(340463)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'connect'，当offconnect()调用完成，取消监听连接事件成功。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketconnection19",
                      children: "WebSocketConnection"
                    }), ">"]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。连接的客户端信息。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer = webSocket.createWebSocketServer();\nlocalServer.off('connect');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onmessagereceive19",
              children: "on('messageReceive')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'messageReceive', callback: Callback<WebSocketMessage>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocketServer的接收客户端消息的事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'messageReceive'，当onmessageReceive()调用完成，接收到客户端消息成功。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketmessage19",
                      children: "WebSocketMessage"
                    }), ">"]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。  clientconnection:客户端信息，data:客户端发送的数据消息。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError, Callback } from '@kit.BasicServicesKit';\n\nlet localServer = webSocket.createWebSocketServer();\nlocalServer.on('messageReceive', (message: webSocket.WebSocketMessage) => {\n  console.info(`on message received, client: ${message.clientConnection}, data: ${message.data}`);\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offmessagereceive19",
              children: "off('messageReceive')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'messageReceive', callback?: Callback<WebSocketMessage>): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocketServer的接收到客户端消息事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(412929)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'messageReceive'，当offmessageReceive()调用完成，取消订阅接收客户端消息成功。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketmessage19",
                      children: "WebSocketMessage"
                    }), ">"]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "从指定客户端接收到的消息，包括客户端的信息和数据。  - clientconnection：客户端信息。  - data：客户端发送的消息。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError, Callback } from '@kit.BasicServicesKit';\n\nlet localServer = webSocket.createWebSocketServer();\nlocalServer.off('messageReceive');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onclose19",
              children: "on('close')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'close', callback: ClientConnectionCloseCallback): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocketServer的关闭事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'close'，当onclose()调用完成，连接关闭成功。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#clientconnectionclosecallback19",
                      children: "ClientConnectionCloseCallback"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。  close：close错误码；reason：错误码说明。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer = webSocket.createWebSocketServer();\nlocalServer.on('close', (clientConnection: webSocket.WebSocketConnection, closeReason: webSocket.CloseResult) => {\n  console.info(`client close, client: ${clientConnection}, closeReason: Code: ${closeReason.code}, reason: ${closeReason.reason}`);\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offclose19",
              children: "off('close')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'close', callback?: ClientConnectionCloseCallback): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocketServer的关闭事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(866109)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'close'，当offclose()调用完成，取消订阅连接关闭事件成功。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#clientconnectionclosecallback19",
                      children: "ClientConnectionCloseCallback"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。  close：close错误码；reason：错误码说明。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer = webSocket.createWebSocketServer();\nlocalServer.off('close');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onerror19",
              children: "on('error')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "on(type: 'error', callback: ErrorCallback): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "订阅WebSocketServer的Error事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'error'，当onerror()调用完成，error事件发生。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback",
                      children: "ErrorCallback"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet wsServer: webSocket.WebSocketServer = webSocket.createWebSocketServer();\nwsServer.on('error', (err: BusinessError) => {\n  console.error(`error. Code: ${err.code}, message: ${err.message}`);\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "offerror19",
              children: "off('error')19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "off(type: 'error', callback?: ErrorCallback): void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅WebSocketServer的Error事件，使用callback异步回调。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(795275)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "事件回调类型，支持的事件为'error'，当offerror()调用完成，取消订阅error事件成功。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback",
                      children: "ErrorCallback"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。默认值：200。"
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
                children: "import { webSocket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet localServer = webSocket.createWebSocketServer();\nlocalServer.off('error');\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "websocketrequestoptions",
              children: "WebSocketRequestOptions"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建立WebSocket连接时，可选参数的类型和说明。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "header"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Object"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["建立WebSocket连接可选参数，代表建立连接时携带的HTTP头信息。参数内容自定义，也可以不指定。  ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "元服务API："
                      })
                    }), " 从API version 11开始，该接口支持在元服务中使用。"]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "caPath11+"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "如果设置了此参数，系统将使用用户指定路径的CA证书，(开发者需保证该路径下CA证书的可访问性)，否则将使用系统预设CA证书，系统预设CA证书位置：/etc/ssl/certs/cacert.pem。证书路径为沙箱映射路径（开发者可通过UIAbilityContext提供的能力获取应用沙箱路径）。目前仅支持格式为pem的文本证书。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "clientCert11+"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#clientcert11",
                      children: "ClientCert"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "支持传输客户端证书。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "proxy12+"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#proxyconfiguration12",
                      children: "ProxyConfiguration"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "通信过程中的代理信息，默认使用系统网络代理。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "protocol12+"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "自定义Sec-WebSocket-Protocol字段，默认为\"\"。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "skipServerCertVerification20+"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "boolean"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是否跳过服务器证书验证。true表示跳过服务器证书验证，false表示不跳过服务器证书验证。默认为false。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "pingInterval21+"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["自定义", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/system-network/network-kit/network-kit-data-transmission/websocket-connection#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D",
                      children: "心跳检测"
                    }), "时间，默认为30s。每pingInterval周期会发起心跳检测，设置为0则表示关闭心跳检测。最大值：30000s，最小值：0s。"]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "pongTimeout21+"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "自定义发起心跳检测后，超时断开时间，默认为30s。发起心跳检测后若pongTimeout时间未响应则断开连接。最大值：30000s，最小值：0s。pongTimeout须小于等于pingInterval。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "clientcert11",
              children: "ClientCert11+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "客户端证书类型。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "certPath"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "证书路径。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "keyPath"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "证书密钥的路径。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "keyPassword"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "证书密钥的密码。缺省为空字符串。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "proxyconfiguration12",
              children: "ProxyConfiguration12+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "type ProxyConfiguration = 'system' | 'no-proxy' | HttpProxy"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "网络代理配置信息"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "'system'"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "使用系统默认网络代理。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "'no-proxy'"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "不使用网络代理。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#httpproxy10",
                      children: "HttpProxy"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "使用指定的网络代理。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "websocketcloseoptions",
              children: "WebSocketCloseOptions"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "关闭WebSocket连接时，可选参数的类型和说明。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "code"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "错误码，关闭WebSocket连接时的可选参数，可根据实际情况来填。传入值必须为正整数，取值范围为[1000,1015]。如果未指定错误码或传入值不在上述范围内，code将会被设置为默认值1000。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "reason"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "原因值，关闭WebSocket连接时的可选参数，可根据实际情况来填。如果未指定原因值，则原因值将会被设置为默认值\"CLOSE_NORMAL\"。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "closeresult10",
              children: "CloseResult10+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "关闭WebSocket连接时，订阅close事件得到的关闭结果。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "code"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "错误码，订阅close事件得到的关闭连接的错误码。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "reason"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "原因值，订阅close事件得到的关闭连接的错误原因。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "responseheaders12",
              children: "ResponseHeaders12+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "type ResponseHeaders = { [k: string]: string | string[] | undefined; }"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "服务器发送的响应头。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
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
                    children: "[k:string]"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string[]"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "undefined"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "close错误码说明",
              children: "close错误码说明"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "发送给服务端的错误码必须为正整数，取值范围为[1000,1015],可以自行定义，如果未指定错误码或传入值不在上述范围内，错误码将会被设置为默认值1000。下面的列表仅供参考。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "值"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "1000"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "正常关闭。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "1001"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "服务器主动关闭。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "1002"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "协议错误。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "1003"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "无法处理的数据类型。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "1004~1015"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "保留值。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "httpproxy12",
              children: "HttpProxy12+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "type HttpProxy = connection.HttpProxy"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "网络全局代理配置信息。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetManager.Core"]
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
                    children: "connection.HttpProxy"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "使用指定的网络代理。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "websocketserverconfig19",
              children: "WebSocketServerConfig19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "启动服务端的service时，需要输入的配置信息和说明。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "serverIP"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "服务端监听特定ip地址，默认是\"0.0.0.0\"。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "serverPort"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "服务端监听的端口号。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "serverCert"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#servercert19",
                      children: "ServerCert"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "指定服务端证书的信息，包括服务端证书文件路径和服务端证书的私钥文件路径。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "protocol"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "自定义协议。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "maxConcurrentClientsNumber"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "最大并发客户端数量，当达到最大数时，服务端拒绝新连接。默认最大数量为10。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "maxConnectionsForOneClient"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "单个客户端的最大连接数。默认最大数量为10。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "servercert19",
              children: "ServerCert19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "指定服务端证书的信息，包括服务端证书文件路径和服务端证书的私钥文件路径。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "certPath"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "服务端证书文件路径。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "keyPath"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "服务端证书的私钥文件路径。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "websocketmessage19",
              children: "WebSocketMessage19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从指定客户端接收到的消息，包括客户端的信息和数据。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "data"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "ArrayBuffer"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "clientConnection"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketconnection19",
                      children: "WebSocketConnection"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "客户端信息，包括客户端的ip地址和端口号port。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "websocketconnection19",
              children: "WebSocketConnection19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "客户端信息，包括客户端的ip地址和端口号port。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "名称"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "只读"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "可选"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "clientIP"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "客户端的ip地址。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "clientPort"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "客户端的端口号port。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "clientconnectionclosecallback19",
              children: "ClientConnectionCloseCallback19+"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "type ClientConnectionCloseCallback = (clientConnection: WebSocketConnection, closeReason: CloseResult) => void"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "关闭WebSocketServer连接时，订阅close事件得到的指定客户端的关闭结果。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
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
                    children: "clientConnection"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#websocketconnection19",
                      children: "WebSocketConnection"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "客户端信息，包括客户端的ip地址和端口号port。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "closeReason"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "#closeresult10",
                      children: "CloseResult"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "关闭WebSocket连接时，订阅close事件得到的关闭结果。"
                  })]
                })]
              })]
            }), "\n"]
          })]
        })]
      })]
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
382681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
435167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
371473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
142062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
340463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
866109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
509037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
38647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
283166(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
570627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
627111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
759642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
242980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
412929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
127104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
56592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
137130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
795275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
652469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
826189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
944839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
961992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
423591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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