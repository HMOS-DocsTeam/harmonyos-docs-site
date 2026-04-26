"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["263737"], {
158620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_bluetooth_bluetooth_br_spp_development_guide_spp_development_guide_md_573_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-bluetooth-bluetooth-br-spp-development-guide-spp-development-guide-md-573.json
var site_docs_system_network_connectivity_kit_bluetooth_bluetooth_br_spp_development_guide_spp_development_guide_md_573_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide/spp-development-guide","title":"连接和传输数据","description":"简介","source":"@site/docs/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide/spp-development-guide.md","sourceDirName":"system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide","slug":"/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"连接和传输数据","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spp-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配对与连接设备","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide/"},"next":{"title":"查找设备","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide/spp-development-guide.md


const frontMatter = {
	title: '连接和传输数据',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spp-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '连接和传输数据';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "申请蓝牙权限",
  "id": "申请蓝牙权限",
  "level": 3
}, {
  "value": "导入所需API模块",
  "id": "导入所需api模块",
  "level": 3
}, {
  "value": "客户端",
  "id": "客户端",
  "level": 3
}, {
  "value": "服务端",
  "id": "服务端",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}, {
  "value": "客户端",
  "id": "客户端-1",
  "level": 3
}, {
  "value": "服务端",
  "id": "服务端-1",
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
        id: "连接和传输数据",
        children: "连接和传输数据"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南主要提供了基于串口通信协议（Serial Port Profile，SPP）实现设备间连接和传输数据的开发指导。当两个设备间进行SPP通信交互时，依据设备功能的不同，可区分为客户端与服务端，本指南将分别介绍客户端与服务端的实现方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["客户端获取到服务端的设备地址后，即可向服务端特定的UUID发起连接。服务端设备地址可以通过查找设备流程获取，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide",
        children: "查找设备"
      }), "。待两端连接成功后，可向服务端发送数据或者接收服务端的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端需要支持客户端连接的UUID服务，保持连接状态监听即可。待两端连接成功后，即可接收客户端数据或者向客户端发送数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端都可以主动断开连接，应用需要根据实际场景决定由哪一端执行断开操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请蓝牙权限",
      children: "申请蓝牙权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要申请权限ohos.permission.ACCESS_BLUETOOTH。如何配置和申请权限，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入所需api模块",
      children: "导入所需API模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入socket和错误码模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { socket } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端",
      children: "客户端"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 发起连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端通过查找设备流程搜索到目标设备后，即可发起连接。需要连接的UUID服务，必须与服务端创建socket时构造的UUID服务一致。在连接过程中，蓝牙子系统会去查询服务端是否支持该UUID服务，若不支持，则会连接失败。因此应用需要确保目标设备是否支持需要的UUID服务，否则发起的是无效连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设备地址可以通过查找设备流程获取\nlet peerDevice = 'XX:XX:XX:XX:XX:XX';\n\n// 定义客户端socket id\nlet clientNumber = -1;\n\n// 配置连接参数\nlet option: socket.SppOptions = {\n  uuid: '00009999-0000-1000-8000-00805F9B34FB', // 需要连接的服务端UUID服务，确保服务端支持\n  secure: false,\n  type: socket.SppType.SPP_RFCOMM\n};\nconsole.info('startConnect ' + peerDevice);\nsocket.sppConnect(peerDevice, option, (err, num: number) => {\n  if (err) {\n    console.error('startConnect errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n  } else {\n    console.info('startConnect clientNumber: ' + num);\n    clientNumber = num;\n  }\n});\nconsole.info('startConnect after ' + peerDevice);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 传输数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.1 发送数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待客户端和服务端连接建立成功后，即可向服务端发送数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let clientNumber = 1; // 注意：该值需要的是客户端发起连接时，异步callback获取到的客户端socket id，此处是伪代码id\nlet arrayBuffer = new ArrayBuffer(2);\nlet data = new Uint8Array(arrayBuffer);\ndata[0] = 3;\ndata[1] = 4;\ntry {\n  socket.sppWrite(clientNumber, arrayBuffer);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.2 接收数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["待客户端和服务端连接建立成功后，即可接收服务端的数据。通过订阅读取数据接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket#socketonsppread",
        children: "socket.on('sppRead')"
      }), "实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let clientNumber = 1; // 注意：该值需要的是客户端发起连接时，异步callback获取到的客户端socket id，此处是伪代码id\n\n// 定义接收数据的回调函数\nfunction read(dataBuffer: ArrayBuffer) {\n  let data = new Uint8Array(dataBuffer);\n  console.info('client data: ' + JSON.stringify(data));\n}\n\ntry {\n  // 发起订阅\n  socket.on('sppRead', clientNumber, read);\n} catch (err) {\n  console.error('readData errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 断开连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用不再需要已建立的连接时，可以通过客户端主动断开连接。需要先取消读取数据的订阅，再断开连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let clientNumber = 1; // 注意：该值需要的是客户端发起连接时，异步callback获取到的客户端socket id，此处是伪代码id\n\n// 定义接收数据的回调函数\nfunction read(dataBuffer: ArrayBuffer) {\n  let data = new Uint8Array(dataBuffer);\n  console.info('client data: ' + JSON.stringify(data));\n}\n\ntry {\n  // 取消接收数据订阅\n  socket.off('sppRead', clientNumber, read);\n} catch (err) {\n  console.error('off sppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\ntry {\n  // 从client端断开连接\n  socket.sppCloseClientSocket(clientNumber);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端",
      children: "服务端"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 创建服务端套接字"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端需通过创建套接字的方式，在蓝牙子系统中注册指定的UUID服务。该UUID服务的名称无限制，可使用应用名称。当客户端发起连接请求时，会携带一个UUID以表示所需连接的服务。只有服务端与客户端的UUID一致时，连接才能成功建立。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义服务端socket id\nlet serverNumber = -1;\n\n// 配置监听参数\nlet option: socket.SppOptions = {\n  uuid: '00009999-0000-1000-8000-00805F9B34FB',\n  secure: false,\n  type: socket.SppType.SPP_RFCOMM\n};\n\n// 创建服务端监听socket，将在蓝牙子系统中注册该UUID服务\nsocket.sppListen(\"demonstration\", option, (err, num: number) => {\n  if (err) {\n    console.error('sppListen errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n  } else {\n    console.info('sppListen serverNumber: ' + num);\n    serverNumber = num;\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 监听客户端连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建好服务端套接字后，服务端即可监听连接。待收到客户端连接后，会获取到标识此次客户端的socket id，此时也表示服务端和客户端的连接已建立成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let serverNumber = 1; // 注意：该值需要的是创建服务端套接字时，异步callback获取到的服务端socket id，此处是伪代码id\n\n// 定义客户端socket id\nlet clientNumber = -1;\n\nsocket.sppAccept(serverNumber, (err, num: number) => {\n  if (err) {\n    console.error('accept errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n  } else {\n    console.info('accept clientNumber: ' + num);\n    clientNumber = num;\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 传输数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3.1 发送数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待服务端和客户端的连接建立成功后，即可向客户端发送数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let clientNumber = 1; // 注意：该值需要的是服务端监听连接时，异步callback获取到的客户端socket id，此处是伪代码id\n\nlet arrayBuffer = new ArrayBuffer(2);\nlet data = new Uint8Array(arrayBuffer);\ndata[0] = 9;\ndata[1] = 8;\ntry {\n  socket.sppWrite(clientNumber, arrayBuffer);\n} catch (err) {\n  console.error('sppWrite errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3.2 接收数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["待服务端和客户端的连接建立成功后，即可接收客户端的数据。通过订阅读取数据接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket#socketonsppread",
        children: "socket.on('sppRead')"
      }), "实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let clientNumber = 1; // 注意：该值需要的是服务端监听连接时，异步callback获取到的客户端socket id，此处是伪代码id\n\n// 定义接收数据的回调函数\nfunction read(dataBuffer: ArrayBuffer) {\n  let data = new Uint8Array(dataBuffer);\n  console.info('client data: ' + JSON.stringify(data));\n}\n\ntry {\n  // 发起订阅\n  socket.on('sppRead', clientNumber, read);\n} catch (err) {\n  console.error('readData errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4. 断开连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用不再需要已建立的连接时，可以通过服务端主动断开连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要先取消读取数据的订阅，再断开连接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let clientNumber = 1; // 注意：该值需要的是服务端监听连接时，异步callback获取到的客户端socket id，此处是伪代码id\n\n// 定义接收数据的回调函数\nfunction read(dataBuffer: ArrayBuffer) {\n  let data = new Uint8Array(dataBuffer);\n  console.info('client data: ' + JSON.stringify(data));\n}\n\ntry {\n  // 取消订阅\n  socket.off('sppRead', clientNumber, read);\n} catch (err) {\n  console.error('off sppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\ntry {\n  // 从server断开连接\n  socket.sppCloseClientSocket(clientNumber);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5. 删除服务端套接字"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用不再需要该服务端套接字时，需要主动关闭创建时获取到的套接字，蓝牙子系统会删除此前注册的UUID服务。如果此时客户端发起连接，就会连接失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用也可以通过删除套接字时，实现断开连接。在此之前，需要先取消读取数据的订阅。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let clientNumber = 1; // 注意：该值需要的是服务端监听连接时，异步callback获取到的客户端socket id，此处是伪代码id\nlet serverNumber = 1; // 注意：该值需要的是创建服务端套接字时，异步callback获取到的服务端socket id，此处是伪代码id\n\n// 定义接收数据的回调函数\nfunction read(dataBuffer: ArrayBuffer) {\n  let data = new Uint8Array(dataBuffer);\n  console.info('client data: ' + JSON.stringify(data));\n}\n\ntry {\n  // 取消订阅\n  socket.off('sppRead', clientNumber, read);\n} catch (err) {\n  console.error('off sppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\ntry {\n  // 若应用不再需要此能力，则主动删除\n  socket.sppCloseServerSocket(serverNumber);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端-1",
      children: "客户端"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { socket } from '@kit.ConnectivityKit'\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass SppClientManager {\n  // 定义客户端的socket id\n  clientNumber: number = -1;\n\n  // 发起连接\n  public startConnect(peerDevice: string): void {\n    // 配置连接参数\n    let option: socket.SppOptions = {\n      uuid: '00009999-0000-1000-8000-00805F9B34FB', // 需要连接的服务端UUID服务，确保服务端支持\n      secure: false,\n      type: socket.SppType.SPP_RFCOMM\n    };\n    console.info('startConnect ' + peerDevice);\n    socket.sppConnect(peerDevice, option, (err, num: number) => {\n      if (err) {\n        console.error('startConnect errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n      } else {\n        console.info('startConnect clientNumber: ' + num);\n        this.clientNumber = num;\n      }\n    });\n    console.info('startConnect after ' + peerDevice);\n  }\n\n  // 发送数据\n  public sendData() {\n    console.info('sendData ' + this.clientNumber);\n    if (this.clientNumber == -1) {\n      console.error('invalid clientNumber');\n      return;\n    }\n    let arrayBuffer = new ArrayBuffer(2);\n    let data = new Uint8Array(arrayBuffer);\n    data[0] = 3;\n    data[1] = 4;\n    try {\n      socket.sppWrite(this.clientNumber, arrayBuffer);\n    } catch (err) {\n      console.error('sppWrite errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 定义接收数据的回调函数\n  read = (dataBuffer: ArrayBuffer) => {\n    let data = new Uint8Array(dataBuffer);\n    console.info('client data: ' + JSON.stringify(data));\n  };\n\n  // 接收数据\n  public readData() {\n    try {\n      // 发起订阅\n      if (this.clientNumber == -1) {\n        console.error('invalid clientNumber');\n        return;\n      }\n      socket.on('sppRead', this.clientNumber, this.read);\n    } catch (err) {\n      console.error('readData errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 断开连接\n  public stopConnect() {\n    console.info('closeSppClient ' + this.clientNumber);\n    if (this.clientNumber == -1) {\n      console.error('invalid clientNumber');\n      return;\n    }\n    try {\n      // 取消接收数据订阅\n      socket.off('sppRead', this.clientNumber, this.read);\n    } catch (err) {\n      console.error('off sppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n    try {\n      // 从client端断开连接\n      socket.sppCloseClientSocket(this.clientNumber);\n    } catch (err) {\n      console.error('stopConnect errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet sppClientManager = new SppClientManager();\nexport default sppClientManager as SppClientManager;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端-1",
      children: "服务端"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { socket } from '@kit.ConnectivityKit'\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass SppServerManager {\n  serverNumber: number = -1;\n  clientNumber: number = -1;\n\n  // 创建服务端监听socket\n  public startListen(): void {\n    console.info('startListen');\n\n    // 配置监听参数\n    let option: socket.SppOptions = {\n      uuid: '00009999-0000-1000-8000-00805F9B34FB',\n      secure: false,\n      type: socket.SppType.SPP_RFCOMM\n    };\n\n    // 创建服务端监听socket，将在蓝牙子系统中注册该UUID服务\n    socket.sppListen(\"demonstration\", option, (err, num: number) => {\n      if (err) {\n        console.error('sppListen errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n      } else {\n        console.info('sppListen serverNumber: ' + num);\n        this.serverNumber = num;\n      }\n    });\n  }\n\n  // 监听连接请求，等待连接\n  public accept() {\n    console.info('accept ' + this.serverNumber);\n    if (this.serverNumber == -1) {\n      console.error('invalid serverNumber');\n      return;\n    }\n    socket.sppAccept(this.serverNumber, (err, num: number) => {\n      if (err) {\n        console.error('accept errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n      } else {\n        console.info('accept clientNumber: ' + num);\n        this.clientNumber = num;\n      }\n    });\n  }\n\n  // 发送数据\n  public sendData() {\n    console.info('sendData serverNumber: ' + this.serverNumber + ' clientNumber: ' + this.clientNumber);\n    if (this.clientNumber == -1) {\n      console.error('invalid clientNumber');\n      return;\n    }\n    let arrayBuffer = new ArrayBuffer(2);\n    let data = new Uint8Array(arrayBuffer);\n    data[0] = 9;\n    data[1] = 8;\n    try {\n      socket.sppWrite(this.clientNumber, arrayBuffer);\n    } catch (err) {\n      console.error('sppWrite errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 定义接收数据的回调函数\n  read = (dataBuffer: ArrayBuffer) => {\n    let data = new Uint8Array(dataBuffer);\n    console.info('client data: ' + JSON.stringify(data));\n  };\n\n  // 接收数据\n  public readData() {\n    try {\n      // 发起订阅\n      if (this.clientNumber == -1) {\n        console.error('invalid clientNumber');\n        return;\n      }\n      socket.on('sppRead', this.clientNumber, this.read);\n    } catch (err) {\n      console.error('readData errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 停止连接\n  public stopConnect() {\n    console.info('stopConnect');\n    try {\n      // 取消订阅\n      if (this.clientNumber == -1) {\n        console.error('invalid clientNumber');\n        return;\n      }\n      socket.off('sppRead', this.clientNumber, this.read);\n    } catch (err) {\n      console.error('off sppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n    try {\n      // 从server断开连接\n      socket.sppCloseClientSocket(this.clientNumber);\n    } catch (err) {\n      console.error('stopConnect errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 删除能力\n  public closeSppServer() {\n    console.info('closeSppServer');\n    try {\n      // 若应用不再需要此能力，则主动删除\n      if (this.serverNumber == -1) {\n        console.error('invalid serverNumber');\n        return;\n      }\n      socket.sppCloseServerSocket(this.serverNumber);\n    } catch (err) {\n      console.error('sppCloseServerSocket errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet sppServerManager = new SppServerManager();\nexport default sppServerManager as SppServerManager;\n"
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