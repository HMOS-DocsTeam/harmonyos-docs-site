"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["403193"], {
391160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_network_connecttion_net_connection_manager_net_connection_manager_md_673_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-network-connecttion-net-connection-manager-net-connection-manager-md-673.json
var site_docs_system_network_network_kit_network_kit_network_connecttion_net_connection_manager_net_connection_manager_md_673_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-network-connecttion/net-connection-manager/net-connection-manager","title":"管理网络连接","description":"简介","source":"@site/docs/system-network/network-kit/network-kit-network-connecttion/net-connection-manager/net-connection-manager.md","sourceDirName":"system-network/network-kit/network-kit-network-connecttion/net-connection-manager","slug":"/system-network/network-kit/network-kit-network-connecttion/net-connection-manager/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/net-connection-manager/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"管理网络连接","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-connection-manager","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MDNS访问局域网服务","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/net-mdns/"},"next":{"title":"管理网络连接(C/C++)","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-network-connecttion/net-connection-manager/net-connection-manager.md


const frontMatter = {
	title: '管理网络连接',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-connection-manager',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '管理网络连接';

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
  "value": "接收指定网络的状态变化通知",
  "id": "接收指定网络的状态变化通知",
  "level": 2
}, {
  "value": "监控默认网络变化并主动重建网络连接",
  "id": "监控默认网络变化并主动重建网络连接",
  "level": 2
}, {
  "value": "导入connection命名空间",
  "id": "导入connection命名空间",
  "level": 3
}, {
  "value": "监控默认网络变化",
  "id": "监控默认网络变化",
  "level": 3
}, {
  "value": "默认网络变化后重新建立网络连接",
  "id": "默认网络变化后重新建立网络连接",
  "level": 3
}, {
  "value": "获取所有注册的网络",
  "id": "获取所有注册的网络",
  "level": 2
}, {
  "value": "查询默认网络或者指定网络的连接信息",
  "id": "查询默认网络或者指定网络的连接信息",
  "level": 2
}, {
  "value": "判断默认网络是否可以访问互联网",
  "id": "判断默认网络是否可以访问互联网",
  "level": 2
}, {
  "value": "使用默认网络解析域名，获取所有IP",
  "id": "使用默认网络解析域名获取所有ip",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "管理网络连接",
        children: "管理网络连接"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络连接管理提供管理网络的一些基础能力，包括WiFi/蜂窝/Ethernet等多网络连接优先级管理、网络质量评估、订阅默认/指定网络连接状态变化、查询网络连接信息、DNS解析等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505880)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证应用的运行效率，大部分API调用都是异步的，对于异步调用的API，均提供了callback和Promise两种方式，以下示例均采用promise函数，更多方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection",
        children: "@ohos.net.connection (网络连接管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络生产者：数据网络的提供方。例如WiFi、蜂窝、Ethernet等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络消费者：数据网络的使用方。例如应用或系统服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络探测：检测网络有效性，避免将网络从可用网络切换到不可用网络。包括绑定网络探测、DNS探测、HTTP探测及HTTPS探测。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络优选：处理多网络共存时选择最优网络。在网络状态、网络信息及评分发生变化时被触发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认网络：系统默认使用的网络。由系统决定，与应用是否指定网络无关，通常为WIFI /蜂窝/以太网/蓝牙其中之一。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络句柄：网络的唯一标识。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络连接管理的典型场景如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接收指定网络的状态变化通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取所有注册的网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询默认网络或者指定网络的连接信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用默认网络解析域名，获取所有IP。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发方式介绍如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接收指定网络的状态变化通知",
      children: "接收指定网络的状态变化通知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明接口调用所需要的权限：ohos.permission.GET_NETWORK_INFO。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此权限级别为normal，在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
            children: "权限使用的基本原则"
          }), "。然后参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "访问控制-声明权限"
          }), "声明对应权限。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从@kit.NetworkKit中导入connection命名空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引入包名。\nimport { connection } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectioncreatenetconnection",
            children: "createNetConnection"
          }), "方法，指定网络能力、网络类型和超时时间(可选，如不传入代表默认网络；创建不同于默认网络时可通过指定这些参数完成)，创建一个NetConnection对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let netSpecifier: connection.NetSpecifier = {\n  netCapabilities: {\n    // 假设当前默认网络是蜂窝网络连接，需要创建WIFI网络连接，可指定网络类型为WIFI\n    bearerTypes: [connection.NetBearType.BEARER_WIFI],\n    // 指定网络能力为Internet\n    networkCap: [connection.NetCap.NET_CAPABILITY_INTERNET],\n  }\n};\n\n// 指定超时时间为10s(默认值为0)\nlet TIMEOUT = 10 * NETWORK_CONNECTION_TIMEOUT;\n\n// 创建NetConnection对象\nlet conn = connection.createNetConnection(netSpecifier, TIMEOUT);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#onnetavailable",
            children: "on()"
          }), "方法，传入type和callback，订阅关心的事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 订阅事件，如果当前指定网络可用，通过on_netAvailable通知用户\nconn.on('netAvailable', (data: connection.NetHandle) => {\n  hilog.info(0x0000, 'testTag', 'Network available, NetId is ' + data.netId);\n  // ...\n});\n  \n// 订阅事件，如果当前指定网络不可用，通过on_netUnavailable通知用户\nconn.on('netUnavailable', (data: void) => {\n  hilog.info(0x0000, 'testTag', 'Network unavailable, data is ' + JSON.stringify(data));\n  // ...\n});\n// 订阅网络能力变化事件，如果当前指定网络的能力发生变化，通过on_netCapabilitiesChange通知用户\nconn.on('netCapabilitiesChange', (data: connection.NetCapabilityInfo) => {\n  hilog.info(0x0000, 'testTag', 'Network netCapabilitiesChange, data is ' + JSON.stringify(data));\n  // ...\n});\n  \n// 订阅网络连接信息变化事件，如果当前指定网络的连接信息发生变化，通过on_netConnectionPropertiesChange通知用户\nconn.on('netConnectionPropertiesChange', (data: connection.NetConnectionPropertyInfo) => {\n  hilog.info(0x0000, 'testTag', 'Network netConnectionPropertiesChange, data is ' + JSON.stringify(data));\n  // ...\n});\n  \n// 订阅网络丢失事件，如果当前处于连接状态的指定网络断开，通过on_netLost通知用户\nconn.on('netLost', (data: connection.NetHandle) => {\n  hilog.info(0x0000, 'testTag', 'Network netLost, data is ' + JSON.stringify(data));\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#register",
            children: "register()"
          }), "方法，订阅指定网络状态变化的通知。当网络可用时，会触发netAvailable事件的回调；当网络从连接到断开时，会触发netLost事件的回调；当网络连接信息变化时（例如linkAddresses增加V6地址），会触发netConnectionPropertiesChange事件回调；当网络能力发生变化时（例如网络的连通性发生变化），会触发netCapabilitiesChange回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 订阅连接状态变化\nconn.register((err: BusinessError, data: void) => {\n  // ...\n    hilog.error(0x0000, 'testTag', 'Error occurred during connection:', JSON.stringify(err));\n    // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当不使用该网络时，可以调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#unregister",
            children: "unregister()"
          }), "方法，取消订阅。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 当不使用该网络时，可以调用该对象的unregister()方法，取消订阅。\nconn.unregister((err: BusinessError, data: void) => {\n  if (err) {\n    hilog.error(0x0000, 'testTag', 'Error occurred during unsubscription:', JSON.stringify(err));\n  } else {\n    // ...\n    hilog.info(0x0000, 'testTag', 'Network connection disconnected.');\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监控默认网络变化并主动重建网络连接",
      children: "监控默认网络变化并主动重建网络连接"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据当前网络状态及网络质量情况，默认网络可能会发生变化，如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在WiFi弱信号的情况下，默认网络可能会切换到蜂窝网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在蜂窝网络状态差的情况下，默认网络可能会切换到WiFi。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭WiFi后，默认网络可能会切换到蜂窝网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭蜂窝网络后，默认网络可能会切换到WiFi。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在WiFi弱信号的情况下，默认网络可能会切换到其他WiFi(存在跨网情况)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在蜂窝网络状态差的情况下，默认网络可能会切换到其他蜂窝(存在跨网情况)。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节旨在介绍监控默认网络的变化后，应用报文能够快速迁移到新默认网络上，具体做法如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入connection命名空间",
      children: "导入connection命名空间"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { connection, socket } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监控默认网络变化",
      children: "监控默认网络变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const netConnection = connection.createNetConnection();\n/* 监听默认网络改变 */\nnetConnection.on('netAvailable', (data: connection.NetHandle) => {\n  hilog.info(0x0000, 'testTag', JSON.stringify(data));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认网络变化后重新建立网络连接",
      children: "默认网络变化后重新建立网络连接"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原网络连接使用Socket模块建立连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建socket对象。\nlet sock: socket.TCPSocket = socket.constructTCPSocketInstance();\n\n// 原网络连接使用Socket模块建立连接\nfunction useSocket() {\n  let netAddress: socket.NetAddress = {\n    address: '192.168.xx.xxx',\n    port: 8080 // 端口号，默认设置为8080\n  };\n\n  let tcpConnectOptions: socket.TCPConnectOptions = {\n    address: netAddress,\n    timeout: 6000 // 连接超时时间\n  };\n\n  // 建立socket连接\n  sock.connect(tcpConnectOptions, (err: BusinessError) => {\n    if (err) {\n      hilog.error(0x0000, 'testTag', 'connect fail: '+JSON.stringify(err));\n    // ···\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'connect success');\n\n    // 通过socket发送数据\n    let tcpSendOptions: socket.TCPSendOptions = {\n      data: 'Hello, server!'\n    };\n    socketSend(tcpSendOptions);\n  });\n}\n\n// 通过socket发送数据。\nfunction socketSend(tcpSendOptions: socket.TCPSendOptions) {\n  sock.send(tcpSendOptions).then(() => {\n    hilog.info(0x0000, 'testTag', 'send success');\n    // ···\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', 'send fail');\n    // ···\n  });\n}\n\nfunction socketTest() {\n  const netConnection = connection.createNetConnection();\n  // 网络切换会导致网络发生中断，原socket失效，故需重新建立socket。\n  netConnection.on('netAvailable', (netHandle: connection.NetHandle) => {\n    hilog.info(0x0000, 'testTag', 'default network changed: ' + JSON.stringify(netHandle));\n    sock.close();\n    sock = socket.constructTCPSocketInstance();\n    // 通过socket发送数据。\n    useSocket();\n  });\n// ···\n    // 订阅指定网络状态变化的通知。\n    netConnection.register((error: BusinessError) => {\n      if (error) {\n        hilog.error(0x0000, 'testTag', 'register fail: ' + JSON.stringify(error));\n      } else {\n        hilog.info(0x0000, 'testTag', 'register success');\n      }\n    });\n    // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原网络连接使用Socket Library建立网络连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监控到默认网络变化后关闭原有Socket并重新建立Socket连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取所有注册的网络",
      children: "获取所有注册的网络"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明接口调用所需要的权限：ohos.permission.GET_NETWORK_INFO。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此权限级别为normal，在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
            children: "权限使用的基本原则"
          }), "。然后参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "访问控制-声明权限"
          }), "声明对应权限。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从@kit.NetworkKit中导入connection命名空间。\nimport { connection } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ...\n    // 调用getAllNets,获取所有处于连接状态的网络列表(Array<NetHandle>)\n    connection.getAllNets().then((data: connection.NetHandle[]) => {\n      hilog.info(0x0000, 'testTag', 'getAllNets get data: ' + JSON.stringify(data));\n      if (data) {\n        // ...\n        GlobalContext.getContext().netList = data;\n        // ...\n      }\n    });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询默认网络或者指定网络的连接信息",
      children: "查询默认网络或者指定网络的连接信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明接口调用所需要的权限：ohos.permission.GET_NETWORK_INFO。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此权限级别为normal，在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
            children: "权限使用的基本原则"
          }), "。然后参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "访问控制-声明权限"
          }), "声明对应权限。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询默认网络或指定网络连接信息代码示例"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetdefaultnet",
            children: "getDefaultNet"
          }), "方法，获取默认的数据网络(NetHandle)；调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetnetcapabilities",
            children: "getNetCapabilities"
          }), "方法，获取该NetHandle对应网络的能力信息。能力信息包含了网络类型(蜂窝网络、Wi-Fi网络、以太网网络等)、网络具体能力等网络信息。也可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetconnectionproperties",
            children: "getConnectionProperties"
          }), "方法，获取该NetHandle对应网络的连接信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从@kit.NetworkKit中导入connection命名空间。\nimport { connection } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ···\n    let netHandleInfo:connection.NetHandle|null = null;\n    // 调用getDefaultNet方法，获取默认的数据网络(NetHandle)\n    connection.getDefaultNet().then((data: connection.NetHandle) => {\n      if (data.netId == 0) {\n        hilog.info(0x0000, 'testTag', `don't have defaultNet`);\n        // 当前无默认网络时，获取的netHandler的netid为0,属于异常情况，需要额外处理\n        return;\n      }\n      if (data) {\n        // ···\n        hilog.info(0x0000, 'testTag', 'getDefaultNet get data: ' + JSON.stringify(data));\n        // 获取netHandle对应网络的能力信息。能力信息包含了网络类型、网络具体能力等网络信息\n        netHandleInfo = data;\n        connection.getNetCapabilities(netHandleInfo).then(\n          (data: connection.NetCapabilities) => {\n            hilog.info(0x0000, 'testTag', 'getNetCapabilities get data: ' + JSON.stringify(data));\n            // 获取网络类型(bearerTypes)\n            let bearerTypes: Set<number> = new Set(data.bearerTypes);\n            let bearerTypesNum = Array.from(bearerTypes.values());\n            for (let item of bearerTypesNum) {\n              if (item == 0) {\n                // 蜂窝网络\n                hilog.info(0x0000, 'testTag', JSON.stringify('BEARER_CELLULAR'));\n              } else if (item == 1) {\n                // Wi-Fi网络\n                hilog.info(0x0000, 'testTag', JSON.stringify('BEARER_WIFI'));\n              } else if (item == 3) {\n                // 以太网网络\n                hilog.info(0x0000, 'testTag', JSON.stringify('BEARER_ETHERNET'));\n              }\n            }\n\n            // 获取网络具体能力(networkCap)\n            let itemNumber: Set<number> = new Set(data.networkCap);\n            let dataNumber = Array.from(itemNumber.values());\n            for (let item of dataNumber) {\n              if (item == 0) {\n                // 表示网络可以访问运营商的MMSC(Multimedia Message Service，多媒体短信服务)发送和接收彩信\n                hilog.info(0x0000, 'testTag', JSON.stringify('NET_CAPABILITY_MMS'));\n              } else if (item == 11) {\n                // 表示网络流量未被计费\n                hilog.info(0x0000, 'testTag', JSON.stringify('NET_CAPABILITY_NOT_METERED'));\n              } else if (item == 12) {\n                // 表示该网络应具有访问Internet的能力，该能力由网络提供者设置\n                hilog.info(0x0000, 'testTag', JSON.stringify('NET_CAPABILITY_INTERNET'));\n              } else if (item == 15) {\n                // 表示网络不使用VPN（Virtual Private Network，虚拟专用网络）\n                hilog.info(0x0000, 'testTag', JSON.stringify('NET_CAPABILITY_NOT_VPN'));\n              } else if (item == 16) {\n                // 表示该网络访问Internet的能力被网络管理成功验证，该能力由网络管理模块设置\n                hilog.info(0x0000, 'testTag', JSON.stringify('NET_CAPABILITY_VALIDATED'));\n              }\n            }\n          });\n      }\n    });\n\n    // 获取netHandle对应的网络的连接信息。\n    connection.getConnectionProperties(netHandleInfo).then((data: connection.ConnectionProperties) => {\n      hilog.info(0x0000, 'testTag', 'getConnectionProperties get data: ' + JSON.stringify(data));\n    })\n// ···\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询所有网络连接信息代码示例"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetallnets",
            children: "getAllNets"
          }), "方法，获取所有处于连接状态的网络列表(Array<NetHandle>)。然后遍历获取到的NetHandle数组，分别调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetnetcapabilities",
            children: "getNetCapabilities"
          }), "方法，获取该NetHandle对应网络的能力信息，能力信息包含了网络类型(蜂窝网络、Wi-Fi网络、以太网网络等)、网络具体能力等网络信息。也可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetconnectionproperties",
            children: "getConnectionProperties"
          }), "方法，获取该NetHandle对应网络的连接信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从@kit.NetworkKit中导入connection命名空间。\nimport { connection } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ...\n  getAllNetworks() {\n    // 调用getAllNets,获取所有处于连接状态的网络列表(Array<NetHandle>)。\n    connection.getAllNets().then((data: connection.NetHandle[]) => {\n      hilog.info(0x0000, 'testTag', 'getAllNets get data: ' + JSON.stringify(data));\n      if (data) {\n        // ...\n        let itemNumber: Set<connection.NetHandle> = new Set(data);\n        let dataNumber = Array.from(itemNumber.values());\n        for (let item of dataNumber) {\n          // 循环获取网络列表每个netHandle对应网络的能力信息\n          connection.getNetCapabilities(item).then((data: connection.NetCapabilities) => {\n            hilog.info(0x0000, 'testTag', 'getNetCapabilities get data: ' + JSON.stringify(data));\n          });\n\n          // 循环获取网络列表每个netHandle对应的网络的连接信息\n          connection.getConnectionProperties(item).then((data: connection.ConnectionProperties) => {\n            hilog.info(0x0000, 'testTag', 'getConnectionProperties get data: ' + JSON.stringify(data));\n          });\n        }\n      }\n    });\n  }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "判断默认网络是否可以访问互联网",
      children: "判断默认网络是否可以访问互联网"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用需要检查当前连接的网络是否可以访问互联网，可参考以下步骤进行判断："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明接口调用所需要的权限：ohos.permission.GET_NETWORK_INFO"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此权限级别为normal，在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
            children: "权限使用的基本原则"
          }), "。然后参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "访问控制-声明权限"
          }), "声明对应权限。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码示例"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetdefaultnetsync9",
            children: "getDefaultNetSync"
          }), "方法，获取当前默认网络的netHandle，netHandle有效的情况下，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetnetcapabilitiessync10",
            children: "getNetCapabilitiesSync"
          }), "方法，获取NetHandle对应网络的能力信息，根据获取到的能力信息，判断networkCap数组中的值判断网络是否可用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NET_CAPABILITY_CHECKING_CONNECTIVITY表示在进行连通性判断的过程中，当不处于连通性判断过程中，且networkCap数组中包含NET_CAPABILITY_VALIDATED表示网络连通性校验通过，可以访问互联网。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从@kit.NetworkKit中导入connection命名空间。\nimport { connection } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ...\n    // 获取默认激活的数据网络。\n    let netHandle = connection.getDefaultNetSync();\n    if (!netHandle || netHandle.netId === 0) {\n      hilog.error(0x0000, 'testTag', 'getDefaultNetSync fail');\n      // ...\n    } else {\n      hilog.info(0x0000, 'testTag', 'default network: ' + JSON.stringify(netHandle));\n      // 获取netHandle对应网络的能力信息。\n      let netCapabilities = connection.getNetCapabilitiesSync(netHandle);\n      let cap = netCapabilities.networkCap;\n      hilog.info(0x0000, 'testTag', 'network capabilities: ' + JSON.stringify(netCapabilities));\n      // 判断网络是否可以访问互联网。\n      if (cap?.includes(connection.NetCap.NET_CAPABILITY_CHECKING_CONNECTIVITY)) {\n        // 正在验证网络连通性，请稍后重试。\n        hilog.info(0x0000, 'testTag', 'default network is checking, please try again later');\n      } else {\n        if (cap?.includes(connection.NetCap.NET_CAPABILITY_VALIDATED)) {\n          // 网络连通性验证成功，当前默认网络可以访问互联网。\n          hilog.info(0x0000, 'testTag', 'default network is validated');\n          // ...\n        } else {\n          // 网络连通性验证失败，当前默认网络不可以访问互联网。\n          hilog.info(0x0000, 'testTag', 'default network is not validated');\n          // ...\n        }\n      }\n    }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用默认网络解析域名获取所有ip",
      children: "使用默认网络解析域名，获取所有IP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明接口调用所需要的权限：ohos.permission.GET_NETWORK_INFO"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此权限级别为normal，在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
            children: "权限使用的基本原则"
          }), "。然后参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "访问控制-声明权限"
          }), "声明对应权限。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码示例"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#connectiongetaddressesbyname",
            children: "getAddressesByName"
          }), "方法，使用默认网络解析主机名以获取所有IP地址。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从@kit.NetworkKit中导入connection命名空间。\nimport { connection } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ...\n      // 使用默认网络解析主机名以获取所有IP地址\n      connection.getAddressesByName('xxxx').then((data: connection.NetAddress[]) => {\n        hilog.info(0x0000, 'testTag', 'Successfully retrieved default network IP address: ' + JSON.stringify(data));\n        // ...\n      })\n"
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
505880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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