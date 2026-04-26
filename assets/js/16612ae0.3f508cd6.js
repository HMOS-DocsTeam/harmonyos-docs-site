"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["523586"], {
131740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_data_transmission_socket_connection_socket_connection_md_166_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-data-transmission-socket-connection-socket-connection-md-166.json
var site_docs_system_network_network_kit_network_kit_data_transmission_socket_connection_socket_connection_md_166_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-data-transmission/socket-connection/socket-connection","title":"使用Socket访问网络","description":"简介","source":"@site/docs/system-network/network-kit/network-kit-data-transmission/socket-connection/socket-connection.md","sourceDirName":"system-network/network-kit/network-kit-data-transmission/socket-connection","slug":"/system-network/network-kit/network-kit-data-transmission/socket-connection/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/socket-connection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用Socket访问网络","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/socket-connection","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用WebSocket访问网络(C/C++)","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/native-websocket-guidelines/"},"next":{"title":"使用MDNS访问局域网服务","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/net-mdns/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-data-transmission/socket-connection/socket-connection.md


const frontMatter = {
	title: '使用Socket访问网络',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/socket-connection',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Socket访问网络';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "应用TCP/UDP协议进行通信",
  "id": "应用tcpudp协议进行通信",
  "level": 2
}, {
  "value": "应用通过TCP Socket Server进行数据传输",
  "id": "应用通过tcp-socket-server进行数据传输",
  "level": 2
}, {
  "value": "应用通过Multicast Socket进行数据传输",
  "id": "应用通过multicast-socket进行数据传输",
  "level": 2
}, {
  "value": "应用通过LocalSocket进行数据传输",
  "id": "应用通过localsocket进行数据传输",
  "level": 2
}, {
  "value": "应用通过Local Socket Server进行数据传输",
  "id": "应用通过local-socket-server进行数据传输",
  "level": 2
}, {
  "value": "应用通过TLS Socket进行加密数据传输",
  "id": "应用通过tls-socket进行加密数据传输",
  "level": 2
}, {
  "value": "应用通过将TCP Socket升级为TLS Socket进行加密数据传输",
  "id": "应用通过将tcp-socket升级为tls-socket进行加密数据传输",
  "level": 2
}, {
  "value": "应用通过TLS Socket Server进行加密数据传输",
  "id": "应用通过tls-socket-server进行加密数据传输",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用socket访问网络",
        children: "使用Socket访问网络"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Socket连接主要是通过Socket进行数据传输，支持TCP/UDP/Multicast/TLS协议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(627440)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用退后台后，Socket可能会断开，当应用重新回到前台，发生通信失败时，需匹配错误码并重新创建新的TCP/UDP Socket。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Socket：套接字，就是对网络中不同主机上的应用进程之间进行双向通信的端点的抽象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP：传输控制协议(Transmission Control Protocol)，是一种面向连接的、可靠的、基于字节流的传输层通信协议。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UDP：用户数据报协议(User Datagram Protocol)，是一个简单的面向消息的传输层，不需要连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multicast：多播，基于UDP的一种通信模式，用于实现组内所有设备之间广播形式的通信。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LocalSocket：本地套接字，IPC(Inter-Process Communication)进程间通信的一种，实现设备内进程之间相互通信，无需网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TLS：安全传输层协议(Transport Layer Security)，用于在两个通信应用程序之间提供保密性和数据完整性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用通过Socket进行数据传输，支持TCP/UDP/Multicast/TLS协议。主要场景有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在TCP/UDP传输的客户端（UDP本身并没有客户端和服务器端的明确区分，此处描述UDP传输的客户端是指主动向服务器发送数据的一方），应用通过TCP/UDP Socket进行数据传输"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在TCP传输的服务器端，应用通过TCP Socket Server进行数据传输"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多播通信场景，应用通过Multicast Socket进行数据传输"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一台主机上不同进程之间传输的客户端，应用通过Local Socket进行数据传输"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一台主机上不同进程之间传输的服务器端，应用通过Local Socket Server进行数据传输"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据加密传输时，客户端侧通过TLS Socket进行加密数据传输"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据加密传输时，服务器侧通过TLS Socket Server进行加密数据传输"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797877)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需在页面中使用UIAbilityContext提供的能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用tcpudp协议进行通信",
      children: "应用TCP/UDP协议进行通信"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UDP与TCP流程大体类似，下面以TCP为例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个TCPSocket连接，返回一个TCPSocket对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个TCPSocket连接，返回一个TCPSocket对象。\nlet tcpClient: socket.TCPSocket = socket.constructTCPSocketInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）订阅TCPSocket相关的订阅事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class SocketInfo {\n  public message: ArrayBuffer = new ArrayBuffer(1);\n  public remoteInfo: socket.SocketRemoteInfo = {} as socket.SocketRemoteInfo;\n}\n\ntcpClient.on('message', (value: SocketInfo) => {\n  hilog.info(0x0000, 'testTag', 'on message');\n  let buffer = value.message;\n  let dataView = new DataView(buffer);\n  let str = '';\n  for (let i = 0; i < dataView.byteLength; ++i) {\n    str += String.fromCharCode(dataView.getUint8(i));\n  }\n  hilog.info(0x0000, 'testTag', 'on connect received:' + str);\n});\n\ntcpClient.on('connect', () => {\n  hilog.info(0x0000, 'testTag', 'on connect');\n});\n\ntcpClient.on('close', () => {\n  hilog.info(0x0000, 'testTag', 'on close');\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定IP地址和端口，端口可以指定或由系统随机分配，绑定成功后可以连接到指定的IP地址和端口，连接成功后可以发送数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " // 绑定本地IP地址和端口。\n let ipAddress : socket.NetAddress = {} as socket.NetAddress;\n ipAddress.address = \"192.168.xxx.xxx\";\n ipAddress.port = 1234;\n\n // bind成功后，连接到指定的IP地址和端口。\n let netAddress: socket.NetAddress = {} as socket.NetAddress;\n netAddress.address = \"192.168.xxx.xxx\";\n netAddress.port = 5678;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  // 绑定本地IP地址和端口。\n// ···\n  tcpClient.bind(ipAddress, (err: BusinessError) => {\n    if (err) {\n      hilog.error(0x0000, 'testTag', 'bind fail');\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'bind success');\n\n  // bind成功后，连接到指定的IP地址和端口。\n    // ···\n    let tcpConnect: socket.TCPConnectOptions = {\n      address: netAddress,\n      timeout: 6000 // 超时时间设置\n    };\n    tcpClient.connect(tcpConnect).then(() => {\n      hilog.info(0x0000, 'testTag', 'connect success');\n      let tcpSendOptions: socket.TCPSendOptions = {\n        data: tcpMessage.message!\n      };\n      tcpClient.send(tcpSendOptions).then(() => {\n        hilog.info(0x0000, 'testTag', 'send success');\n        // ···\n      }).catch(() => {\n        hilog.info(0x0000, 'testTag', 'send fail');\n        // ···\n      });\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'connect fail');\n    });\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Socket连接使用完毕后，主动关闭。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 连接使用完毕后，主动关闭。取消相关事件的订阅。\nsetTimeout(() => {\n  tcpClient.close().then(() => {\n  // ···\n    hilog.info(0x0000, 'testTag', 'close success');\n  }).catch((err: BusinessError) => {\n  // ···\n    hilog.error(0x0000, 'testTag', 'close fail');\n  });\n  tcpClient.off('message');\n  tcpClient.off('connect');\n  tcpClient.off('close');\n}, 30 * 1000);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用通过tcp-socket-server进行数据传输",
      children: "应用通过TCP Socket Server进行数据传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端TCP Socket流程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个TCPSocketServer连接，返回一个TCPSocketServer对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个TCPSocketServer连接，返回一个TCPSocketServer对象。\nlet tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定本地IP地址和端口，监听并接受与此套接字建立的客户端TCPSocket连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " // 绑定本地IP地址和端口，进行监听。\n let ipAddress : socket.NetAddress = {} as socket.NetAddress;\n ipAddress.address = \"192.168.xxx.xxx\";\n ipAddress.port = 4651;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 绑定本地IP地址和端口，进行监听。\ntcpServer.listen(ipAddress).then(() => {\n  hilog.info(0x0000, 'testTag', 'listen success');\n  // ···\n}).catch(() => {\n  hilog.info(0x0000, 'testTag', 'listen fail');\n  // ···\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅TCPSocketServer的connect事件，用于监听客户端的连接状态。客户端与服务端建立连接后，会返回一个TCPSocketConnection对象，用于与客户端通信，通过该对象可以订阅与客户端的连接关闭、客户端数据接收事件，也可以进行向客户端发送数据、关闭与客户端的连接、取消订阅TCPSocketConnection相关事件的动作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  class SocketInfo {\n    public message: ArrayBuffer = new ArrayBuffer(1);\n    public remoteInfo: socket.SocketRemoteInfo = {} as socket.SocketRemoteInfo;\n  }\n  // 订阅TCPSocketServer的connect事件\n  // 客户端与服务端建立连接后，返回一个TCPSocketConnection对象，用于与客户端通信。\n  tcpServer.on('connect', (client: socket.TCPSocketConnection) => {\n    // ···\n\n    // client即为建立连接后获取到的连接对象，可以通过该对象订阅TCPSocketConnection相关的事件。\n    client.on('close', () => {\n      hilog.info(0x0000, 'testTag', 'client on close success');\n    // ···\n    });\n\n    client.on('message', (value: SocketInfo) => {\n      let buffer = value.message;\n      let dataView = new DataView(buffer);\n      let str = '';\n      for (let i = 0; i < dataView.byteLength; ++i) {\n        str += String.fromCharCode(dataView.getUint8(i));\n      }\n      hilog.info(0x0000, 'testTag', 'received message--:' + str);\n      hilog.info(0x0000, 'testTag', 'received address--:' + value.remoteInfo.address);\n      hilog.info(0x0000, 'testTag', 'received family--:' + value.remoteInfo.family);\n      hilog.info(0x0000, 'testTag', 'received port--:' + value.remoteInfo.port);\n      hilog.info(0x0000, 'testTag', 'received size--:' + value.remoteInfo.size);\n    // ···\n    });\n  });\n// ···\n    let tcpSendOptions: socket.TCPSendOptions = {} as socket.TCPSendOptions;\n    // 用户可根据需要自行定义发送数据\n    tcpSendOptions.data = tcpMessage.message!;\n\n    client.send(tcpSendOptions).then(() => {\n      hilog.info(0x0000, 'testTag', 'send success');\n    // ···\n    }).catch((err: Object) => {\n      hilog.error(0x0000, 'testTag', 'send fail: ' + JSON.stringify(err));\n    // ···\n    });\n    // ···\n    client.close().then(() => {\n      hilog.info(0x0000, 'testTag', 'close success');\n    // ···\n    }).catch((err: BusinessError) => {\n      hilog.info(0x0000, 'testTag', 'close fail');\n    // ···\n    });\n\n    // 取消事件订阅，设置关闭连接超时（例如 10 秒后取消关闭连接）\n    setTimeout(() => {\n      client?.off('message');\n      client?.off('close');\n    }, 10 * 1000);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消TCPSocketServer相关事件的订阅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置连接超时（例如 30 秒后取消连接）\nsetTimeout(() => {\n  tcpServer.off('connect');\n}, 30 * 1000);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用通过multicast-socket进行数据传输",
      children: "应用通过Multicast Socket进行数据传输"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建multicastSocket多播对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建Multicast对象。\nlet multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定多播IP与端口，加入多播组。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造一个对象用于加入多播组\nlet addr : socket.NetAddress = {\n  address: '239.255.0.1',\n  port: 32123,\n  family: 1\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 加入多播组。\nmulticast.addMembership(addr).then(() => {\n  // ...\n  hilog.info(0x0000, 'testTag', 'addMembership success');\n}).catch((err: BusinessError) => {\n  // ...\n  hilog.error(0x0000, 'testTag', 'addMembership fail');\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启消息message监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 开启监听消息数据，将接收到的ArrayBuffer类型数据转换为String。\nclass SocketInfo {\n  public message: ArrayBuffer = new ArrayBuffer(1);\n  public remoteInfo: socket.SocketRemoteInfo = {} as socket.SocketRemoteInfo;\n}\nmulticast.on('message', (data: SocketInfo) => {\n  hilog.info(0x0000, 'testTag', '接收的数据: ' + JSON.stringify(data))\n  const uintArray = new Uint8Array(data.message)\n  let str = ''\n  for (let i = 0; i < uintArray.length; ++i) {\n    str += String.fromCharCode(uintArray[i])\n  }\n  hilog.info(0x0000, 'testTag', str)\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发送数据，数据以广播的形式传输，同一多播组中已经开启消息message监听的多播对象都会接收到数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 发送一条多播消息\nmulticast.send({ data: 'Hello multicast group!', address: addr }).then(() => {\n  hilog.info(0x0000, 'testTag', 'Multicast: Message sent successfully');\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'testTag', `Multicast: Failed to send message - ${JSON.stringify(err)}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭message消息的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 关闭消息的监听。\nmulticast.off('message');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出多播组。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 退出多播组。\nmulticast.dropMembership(addr).then(() => {\n  // ...\n  hilog.info(0x0000, 'testTag', 'Multicast: Dropped membership successfully');\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'testTag', `Multicast: Failed to drop membership - ${JSON.stringify(err)}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用通过localsocket进行数据传输",
      children: "应用通过LocalSocket进行数据传输"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用constructLocalSocketInstance接口，创建一个LocalSocket客户端对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个LocalSocket连接，返回一个LocalSocket对象。\nlet client: socket.LocalSocket = socket.constructLocalSocketInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册LocalSocket的消息(message)事件，以及一些其它事件(可选)。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "client.on('message', (value: socket.LocalSocketMessageInfo) => {\n  const uintArray = new Uint8Array(value.message);\n  let messageView = '';\n  for (let i = 0; i < uintArray.length; i++) {\n    messageView += String.fromCharCode(uintArray[i]);\n  }\n  hilog.info(0x0000, 'testTag', 'total receive: ' + JSON.stringify(value));\n  hilog.info(0x0000, 'testTag', 'message information: ' + messageView);\n});\n\nclient.on('connect', () => {\n  // ...\n  hilog.info(0x0000, 'testTag', 'Client connected');\n});\n\nclient.on('close', () => {\n  // ...\n  hilog.info(0x0000, 'testTag', 'Client closed');\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接到指定的本地套接字文件路径，连接成功之后可以发送数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 传入指定的本地套接字路径，连接服务端。\nlet context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet sandboxPath: string = context.filesDir + '/testSocket';\nlet localAddress : socket.LocalAddress = {\n  address: sandboxPath\n}\nlet connectOpt: socket.LocalConnectOptions = {\n  address: localAddress,\n  timeout: 6000\n}\nlet sendOpt: socket.LocalSendOptions = {\n  data: 'Hello world!'\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "client.connect(connectOpt).then(() => {\n  hilog.info(0x0000, 'testTag', `connect success`);\n  // 发送数据。\n  client.send(sendOpt).then(() => {\n    hilog.info(0x0000, 'testTag', `send success`);\n  }).catch((err: Object) => {\n    hilog.info(0x0000, 'testTag', `send failed: ` + JSON.stringify(err));\n  });\n}).catch((err: Object) => {\n  hilog.info(0x0000, 'testTag', `connect fail: ` + JSON.stringify(err));\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Socket连接使用完毕后，取消事件的注册，并关闭套接字。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 当不需要再连接服务端，需要断开且取消事件的监听时。\nclient.off('message');\nclient.off('connect');\nclient.off('close');\nclient.close().then(() => {\n  hilog.info(0x0000, 'testTag', 'close client success')\n  // ...\n}).catch((err: Object) => {\n  hilog.error(0x0000, 'testTag', 'close client err: ' + JSON.stringify(err))\n  // ...\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用通过local-socket-server进行数据传输",
      children: "应用通过Local Socket Server进行数据传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端LocalSocket Server的主要流程包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用constructLocalSocketServerInstance接口，创建一个 LocalSocketServer 服务端对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个LocalSocketServer连接，返回一个LocalSocketServer对象。\nlet server: socket.LocalSocketServer = socket.constructLocalSocketServerInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动服务，绑定本地套接字路径，创建出本地套接字文件，监听客户端的连接请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建并绑定本地套接字文件testSocket，进行监听。\nlet context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet sandboxPath: string = context.filesDir + '/testSocket';\nlet listenAddr: socket.LocalAddress = {\n  address: sandboxPath\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "server.listen(listenAddr).then(() => {\n  // ...\n  hilog.info(0x0000, 'testTag', `Server listening on ${address}`);\n}).catch((err: object) => {\n  // ...\n  hilog.error(0x0000, 'testTag', `Server listen error: ${JSON.stringify(err)}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册LocalSocket的客户端连接事件，以及一些其它事件(可选)，在客户端连接成功时，可以获取到客户端连接会话对象LocalSocketConnection，通过该会话对象可以订阅客户端收到消息(message)事件，以及一些其它事件(可选)，通过该会话对象也可发起主动向客户端发送数据，主动关闭与客户端的连接的动作，订阅事件不再需要时，可以取消LocalSocketConnection相关的事件订阅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 订阅LocalSocketServer的connect事件。\nserver.on('connect', (connection: socket.LocalSocketConnection) => {\n  // 订阅LocalSocketConnection相关的事件。\n  connection.on('error', (err: Object) => {\n    hilog.info(0x0000, 'testTag', 'on error success');\n  });\n\n  connection.on('message', (value: socket.LocalSocketMessageInfo) => {\n    const uintArray = new Uint8Array(value.message);\n    let messageView = '';\n    for (let i = 0; i < uintArray.length; i++) {\n      messageView += String.fromCharCode(uintArray[i]);\n    }\n    hilog.info(0x0000, 'testTag', `Server received: ${messageView}`);\n  });\n\n  connection.on('error', (err: Object) => {\n    hilog.error(0x0000, 'testTag', 'err:' + JSON.stringify(err));\n  })\n\n  // 向客户端发送数据。\n  let sendOpt : socket.LocalSendOptions = {\n    data: 'Hello world!'\n  };\n  connection.send(sendOpt).then(() => {\n    hilog.info(0x0000, 'testTag', 'Server send success');\n  }).catch((err: object) => {\n    hilog.error(0x0000, 'testTag', `Server send failed: ${JSON.stringify(err)}`);\n  });\n\n  // ...\n    // 关闭与客户端的连接。\n    connection.close().then(() => {\n      hilog.info(0x0000, 'testTag', 'close success');\n    }).catch((err: Object) => {\n      hilog.error(0x0000, 'testTag', 'close failed: ' + JSON.stringify(err));\n    });\n\n    // 取消LocalSocketConnection相关的事件订阅。\n    connection.off('message');\n    connection.off('error');\n    // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消LocalSocketServer相关事件的订阅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 取消LocalSocketServer相关的事件订阅。\nserver.off('connect');\nserver.off('error');\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用通过tls-socket进行加密数据传输",
      children: "应用通过TLS Socket进行加密数据传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端TLS Socket流程（双向认证）包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个双向认证TLSSocket连接，返回一个TLSSocket对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个（双向认证）TLS Socket连接，返回一个TLS Socket对象。\nlet tlsSocket: socket.TLSSocket | null = socket.constructTLSSocketInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["绑定本地IP地址和端口，确保bind成功后，再订阅TLS Socket相关的订阅事件。上传客户端CA证书及数字证书，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-socket/js-apis-socket#connect9",
            children: "connect"
          }), "接口建立连接。连接成功后，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-socket/js-apis-socket#send9",
            children: "send"
          }), "接口发送数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 绑定本地IP地址和端口。\nlet ipAddress : socket.NetAddress = {} as socket.NetAddress;\nipAddress.address = \"192.168.xxx.xxx\";\nipAddress.port = 4512;\n\n// 服务器IP地址和端口。\nlet serverAddress : socket.NetAddress = {} as socket.NetAddress;\nserverAddress.address = \"192.168.xxx.xxx\";\nserverAddress.port = 1234;\n\nlet tlsSecureOption : socket.TLSSecureOptions = {} as socket.TLSSecureOptions;\ntlsSecureOption.key = \"xxxx\";\ntlsSecureOption.cert = \"xxxx\";\ntlsSecureOption.ca = [\"xxxx\"];\ntlsSecureOption.password = \"xxxx\";\ntlsSecureOption.protocols = [socket.Protocol.TLSv12];\ntlsSecureOption.useRemoteCipherPrefer = true;\ntlsSecureOption.signatureAlgorithms = \"rsa_pss_rsae_sha256:ECDSA+SHA256\";\ntlsSecureOption.cipherSuite = \"AES256-SHA256\";\n\nlet tlsTwoWayConnectOption : socket.TLSConnectOptions = {} as socket.TLSConnectOptions;\ntlsTwoWayConnectOption.address = serverAddress;\ntlsTwoWayConnectOption.secureOptions = tlsSecureOption;\ntlsTwoWayConnectOption.ALPNProtocols = [\"spdy/1\", \"http/1.1\"];\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class SocketInfo {\n  public message: ArrayBuffer = new ArrayBuffer(1);\n  public remoteInfo: socket.SocketRemoteInfo = {} as socket.SocketRemoteInfo;\n}\n// 绑定本地IP地址和端口。\ntlsSocket!.bind(ipAddress).then(() => {\n  hilog.info(0x0000, 'testTag', 'bind success');\n  // ...\n  // 确保bind成功后，再订阅TLS Socket相关的订阅事件\n  tlsSocket!.on('message', (value: SocketInfo) => {\n    hilog.info(0x0000, 'testTag', 'on message');\n    let buffer = value.message;\n    let dataView = new DataView(buffer);\n    let str = '';\n    for (let i = 0; i < dataView.byteLength; ++i) {\n      str += String.fromCharCode(dataView.getUint8(i));\n    }\n    hilog.info(0x0000, 'testTag', 'on connect received:' + str);\n  });\n\n  tlsSocket!.on('connect', () => {\n    // ...\n    hilog.info(0x0000, 'testTag', 'on connect');\n  });\n  // 监听连接关闭\n  tlsSocket!.on('close', () => {\n    hilog.info(0x0000, 'testTag', 'on close');\n    // ...\n  });\n  tlsSocket!.connect({ address: serverAddress, secureOptions: opt }).then(() => {\n    hilog.info(0x0000, 'testTag', 'Connected successfully');\n    // ...\n  }).catch((e: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to connect: ${e.message}`);\n    // ...\n  });\n}).catch((e: BusinessError) => {\n  hilog.error(0x0000, 'testTag', 'bind fail');\n  // ...\n});\n// ...\ntlsSocket!.send('message').then(() => {\n  hilog.info(0x0000, 'testTag', 'send successfully');\n  // ...\n}).catch((e: BusinessError) => {\n  hilog.error(0x0000, 'testTag', 'send failed ' + JSON.stringify(e));\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TLSSocket连接使用完毕后，主动关闭。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 连接使用完毕后，主动关闭，并取消相关事件的订阅。\ntlsSocket!.close((err: BusinessError) => {\n  if (err) {\n    hilog.error(0x0000, 'testTag', 'close callback error = ' + err);\n  } else {\n    hilog.info(0x0000, 'testTag', 'close success');\n  }\n  tlsSocket!.off('message');\n  tlsSocket!.off('connect');\n  tlsSocket!.off('close');\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端TLS Socket流程（单向认证）包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个单向认证TLSSocket连接，返回一个TLSSocket对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个（单向认证）TLS Socket连接，返回一个TLS Socket对象。\nlet tlsOneWaySocket: socket.TLSSocket = socket.constructTLSSocketInstance();  // One way authentication\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["绑定本地IP地址和端口，确保bind成功后，再订阅TLS Socket相关的订阅事件。上传客户端CA证书及数字证书，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-socket/js-apis-socket#connect9",
            children: "connect"
          }), "接口建立连接。连接成功后，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-socket/js-apis-socket#send9",
            children: "send"
          }), "接口发送数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 绑定本地IP地址和端口。\nlet ipAddress : socket.NetAddress = {} as socket.NetAddress;\nipAddress.address = \"192.168.xxx.xxx\";\nipAddress.port = 5445;\n\n// 服务器IP地址和端口。\nlet serverAddress : socket.NetAddress = {} as socket.NetAddress;\nserverAddress.address = \"192.168.xxx.xxx\";\nserverAddress.port = 8789;\nlet tlsOneWaySecureOption : socket.TLSSecureOptions = {} as socket.TLSSecureOptions;\ntlsOneWaySecureOption.ca = [\"xxxx\", \"xxxx\"];\ntlsOneWaySecureOption.cipherSuite = \"AES256-SHA256\";\n\nlet tlsOneWayConnectOptions: socket.TLSConnectOptions = {} as socket.TLSConnectOptions;\ntlsOneWayConnectOptions.address = serverAddress;\ntlsOneWayConnectOptions.secureOptions = tlsOneWaySecureOption;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class SocketInfo {\n  public message: ArrayBuffer = new ArrayBuffer(1);\n  public remoteInfo: socket.SocketRemoteInfo = {} as socket.SocketRemoteInfo;\n}\n// ...\n  // 绑定本地IP地址和端口。\n  tlsOneWaySocket!.bind(ipAddress).then(() => {\n    hilog.info(0x0000, 'testTag', 'bind success');\n    // ...\n    /// 订阅TLS Socket相关的订阅事件\n    tlsOneWaySocket!.on('message', (value: SocketInfo) => {\n      hilog.info(0x0000, 'testTag', 'on message');\n      let buffer = value.message;\n      let dataView = new DataView(buffer);\n      let str = '';\n      for (let i = 0; i < dataView.byteLength; ++i) {\n        str += String.fromCharCode(dataView.getUint8(i));\n      }\n      hilog.info(0x0000, 'testTag', 'on connect received:' + str);\n    });\n    tlsOneWaySocket!.on('connect', () => {\n      hilog.info(0x0000, 'testTag', 'on connect');\n    });\n    tlsOneWaySocket!.on('close', () => {\n      hilog.info(0x0000, 'testTag', 'on close');\n      // ...\n    });\n    tlsOneWaySocket!.connect({ address: serverAddress, secureOptions: opt }).then(() => {\n      hilog.info(0x0000, 'testTag', 'connect successfully');\n      // ...\n    }).catch((e: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `Failed to connect: ${e.message}`);\n      // ...\n    });\n  }).catch((e: BusinessError) => {\n    hilog.error(0x0000, 'testTag', 'bind fail');\n    // ...\n  });\n  // ...\n  // 建立连接，连接建立成功后，可以发送数据。\n  tlsOneWaySocket.send(message + '\\r\\n').then(() => {\n    hilog.info(0x0000, 'testTag', 'send successfully');\n    // ...\n  }).catch((e: BusinessError) => {\n    hilog.error(0x0000, 'testTag', 'send failed ' + JSON.stringify(e));\n    // ...\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TLSSocket连接使用完毕后，主动关闭。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 连接使用完毕后，主动关闭，并取消相关事件的订阅。\ntlsOneWaySocket!.close((err: BusinessError) => {\n  if (err) {\n    hilog.error(0x0000, 'testTag', 'close callback error = ' + err);\n    // ...\n  } else {\n    hilog.info(0x0000, 'testTag', 'close success');\n    // ...\n  }\n  tlsOneWaySocket!.off('message');\n  tlsOneWaySocket!.off('connect');\n  tlsOneWaySocket!.off('close');\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用通过将tcp-socket升级为tls-socket进行加密数据传输",
      children: "应用通过将TCP Socket升级为TLS Socket进行加密数据传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端TCP Socket升级为TLS Socket流程，以TLS Socket双向认证为例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BA%94%E7%94%A8tcpudp%E5%8D%8F%E8%AE%AE%E8%BF%9B%E8%A1%8C%E9%80%9A%E4%BF%A1",
            children: "应用 TCP/UDP 协议进行通信"
          }), "，创建一个TCPSocket连接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个TCPSocket连接，返回一个TCPSocket对象。\nlet tcpSocket: socket.TCPSocket = socket.constructTCPSocketInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定本地IP地址和端口，绑定成功后，连接到服务器端IP地址和端口，连接成功后使用该TCPSocket对象创建TLSSocket，配置双向认证上传客户端 CA 证书及数字证书，可以建立TLSSocket连接，连接使用完毕后，主动关闭并取消相关事件的订阅。。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 连接到服务器端指定的IP地址和端口。\nlet serverAddress: socket.NetAddress = {} as socket.NetAddress;\nserverAddress.address = \"192.168.xxx.xxx\";\nserverAddress.port = 1234;\n\nlet tcpConnect: socket.TCPConnectOptions = {} as socket.TCPConnectOptions;\ntcpConnect.address = serverAddress;\ntcpConnect.timeout = 6000;\n\n// 配置TLSSocket目的地址、证书等信息。\nlet tlsSecureOption: socket.TLSSecureOptions = {} as socket.TLSSecureOptions;\ntlsSecureOption.key = \"xxxx\";\ntlsSecureOption.cert = \"xxxx\";\ntlsSecureOption.ca = [\"xxxx\"];\ntlsSecureOption.password = \"xxxx\";\ntlsSecureOption.protocols = [socket.Protocol.TLSv12];\ntlsSecureOption.useRemoteCipherPrefer = true;\ntlsSecureOption.signatureAlgorithms = \"rsa_pss_rsae_sha256:ECDSA+SHA256\";\ntlsSecureOption.cipherSuite = \"AES256-SHA256\";\n\nlet tlsTwoWayConnectOption: socket.TLSConnectOptions = {} as socket.TLSConnectOptions;\ntlsSecureOption.key = \"xxxx\";\ntlsTwoWayConnectOption.address = serverAddress;\ntlsTwoWayConnectOption.secureOptions = tlsSecureOption;\ntlsTwoWayConnectOption.ALPNProtocols = [\"spdy/1\", \"http/1.1\"];\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 如果需要绑定特定的端口，可通过bind接口实现\ntcpSocket.connect(tcpConnect).then(() => {\n  hilog.info(0x0000, 'testTag', 'connect success');\n  // ...\n  // 确保TCPSocket已连接后，将其升级为TLSSocket连接。\n  tlsSocket = socket.constructTLSSocketInstance(tcpSocket);\n  // 订阅TLSSocket相关的订阅事件。\n  tlsSocket.on('message', (value: SocketInfo) => {\n    hilog.info(0x0000, 'testTag', 'tls on message');\n    let buffer = value.message;\n    let dataView = new DataView(buffer);\n    let str = '';\n    for (let i = 0; i < dataView.byteLength; ++i) {\n      str += String.fromCharCode(dataView.getUint8(i));\n    }\n    hilog.info(0x0000, 'testTag', 'tls on connect received:' + str);\n  });\n  tlsSocket.on('connect', () => {\n    hilog.info(0x0000, 'testTag', 'tls on connect');\n  });\n  tlsSocket!.on('close', () => {\n    hilog.info(0x0000, 'testTag', 'tls on close');\n    // ...\n  });\n  // ...\n  // 建立TLSSocket连接。\n  tlsSocket.connect(tlsTwoWayConnectOption).then(() => {\n    hilog.info(0x0000, 'testTag', 'tls connect success');\n    // ...\n  }).catch((e: BusinessError) => {\n    hilog.info(0x0000, 'testTag', 'tls connect fail');\n    // ...\n  });\n}).catch((e: BusinessError) => {\n  hilog.error(0x0000, 'testTag', 'connect fail');\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接使用完毕后，主动关闭。取消相关事件的订阅。。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 连接使用完毕后，主动关闭。取消相关事件的订阅。\ntlsSocket!.close((err: BusinessError) => {\n  if (err) {\n    // ...\n    hilog.error(0x0000, 'testTag', 'tls close callback error = ' + err);\n  } else {\n    hilog.info(0x0000, 'testTag', 'tls close success');\n    // ...\n  }\n  tlsSocket!.off('message');\n  tlsSocket!.off('connect');\n  tlsSocket!.off('close');\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用通过tls-socket-server进行加密数据传输",
      children: "应用通过TLS Socket Server进行加密数据传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端TLS Socket Server流程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的socket模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个TLSSocketServer连接，返回一个TLSSocketServer对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let tlsServer: socket.TLSSocketServer = socket.constructTLSSocketServerInstance();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动服务，绑定 IP 和端口号，监听客户端连接，创建并初始化TLS会话，加载证书密钥并验证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let netAddress: socket.NetAddress = {\n  address: '192.168.xx.xxx',\n  port: 8080\n}\n\nlet tlsSecureOptions: socket.TLSSecureOptions = {\n  key: \"xxxx\",\n  cert: \"xxxx\",\n  ca: [\"xxxx\"],\n  password: \"xxxx\",\n  protocols: socket.Protocol.TLSv12,\n  useRemoteCipherPrefer: true,\n  signatureAlgorithms: \"rsa_pss_rsae_sha256:ECDSA+SHA256\",\n  cipherSuite: \"AES256-SHA256\"\n}\n\nlet tlsConnectOptions: socket.TLSConnectOptions = {\n  address: netAddress,\n  secureOptions: tlsSecureOptions,\n  ALPNProtocols: [\"spdy/1\", \"http/1.1\"]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tlsServer.listen(tlsConnectOptions).then(() => {\n  hilog.info(0x0000, 'testTag', 'listen callback success');\n  // ...\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'testTag', 'failed' + err);\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅TLSSocketServer的连接事件，收到客户端连接，通过回调得到TLSSocketConnection对象，通过该对象可以实现订阅TLSSocketConnection相关的事件、向客户端发送数据的动作，TLSSocketConnection连接使用完毕后，需要主动断开连接，进行取消订阅回调的动作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class SocketInfo {\n  public message: ArrayBuffer = new ArrayBuffer(1);\n  public remoteInfo: socket.SocketRemoteInfo = {} as socket.SocketRemoteInfo;\n}\nlet callback = (value: SocketInfo) => {\n  let messageView = '';\n  for (let i: number = 0; i < value.message.byteLength; i++) {\n    let uint8Array = new Uint8Array(value.message)\n    let messages = uint8Array[i]\n    let message = String.fromCharCode(messages);\n    messageView += message;\n  }\n  hilog.info(0x0000, 'testTag', 'on message message: ' + JSON.stringify(messageView));\n  hilog.info(0x0000, 'testTag', 'remoteInfo: ' + JSON.stringify(value.remoteInfo));\n  // ...\n}\n// ...\n  tlsServer.on('connect', (client: socket.TLSSocketConnection) => {\n    client.on('message', callback);\n    // 发送数据。\n    client.send('Hello, client!').then(() => {\n      hilog.info(0x0000, 'testTag', 'send success');\n      // ...\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'send fail');\n      // ...\n    });\n    // 断开连接。\n    client.close().then(() => {\n      hilog.info(0x0000, 'testTag', 'close success');\n      // ...\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'close fail');\n      // ...\n    });\n\n    // 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。\n    client.off('message', callback);\n    client.off('message');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅TLSSocketServer的相关事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tlsServer.close();\n// 取消订阅tlsServer的相关事件\ntlsServer.off('connect');\n"
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
797877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
627440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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