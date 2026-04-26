"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["845423"], {
221379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_js_apis_bluetooth_socket_js_apis_bluetooth_socket_md_724_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-connectivity-api-connectivity-arkts-js-apis-bluetooth-socket-js-apis-bluetooth-socket-md-724.json
var site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_js_apis_bluetooth_socket_js_apis_bluetooth_socket_md_724_namespaceObject = JSON.parse('{"id":"system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket","title":"@ohos.bluetooth.socket (蓝牙socket模块)","description":"本模块提供一种蓝牙套接字功能，可实现设备间连接和数据传输。当两个设备间进行蓝牙套接字通信交互时，依据设备功能的不同，可区分客户端与服务端。","source":"@site/docs-ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket.md","sourceDirName":"system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket","slug":"/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"@ohos.bluetooth.socket (蓝牙socket模块)","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-socket","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-bluetooth-socket"},"sidebar":"ref","previous":{"title":"@ohos.bluetooth.pan (蓝牙pan模块)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-pan/js-apis-bluetooth-pan"},"next":{"title":"@ohos.bluetooth.pbap (蓝牙pbap模块)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-pbap/js-apis-bluetooth-pbap"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket.md


const frontMatter = {
	title: '@ohos.bluetooth.socket (蓝牙socket模块)',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-socket',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-bluetooth-socket'
};
const contentTitle = '@ohos.bluetooth.socket (蓝牙socket模块)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "socket.sppListen",
  "id": "socketspplisten",
  "level": 2
}, {
  "value": "socket.getL2capPsm20+",
  "id": "socketgetl2cappsm20",
  "level": 2
}, {
  "value": "socket.sppAccept",
  "id": "socketsppaccept",
  "level": 2
}, {
  "value": "socket.sppConnect",
  "id": "socketsppconnect",
  "level": 2
}, {
  "value": "socket.getDeviceId17+",
  "id": "socketgetdeviceid17",
  "level": 2
}, {
  "value": "socket.sppCloseServerSocket",
  "id": "socketsppcloseserversocket",
  "level": 2
}, {
  "value": "socket.sppCloseClientSocket",
  "id": "socketsppcloseclientsocket",
  "level": 2
}, {
  "value": "socket.sppWrite",
  "id": "socketsppwrite",
  "level": 2
}, {
  "value": "socket.on(&#39;sppRead&#39;)",
  "id": "socketonsppread",
  "level": 2
}, {
  "value": "socket.off(&#39;sppRead&#39;)",
  "id": "socketoffsppread",
  "level": 2
}, {
  "value": "socket.sppWriteAsync18+",
  "id": "socketsppwriteasync18",
  "level": 2
}, {
  "value": "socket.sppReadAsync18+",
  "id": "socketsppreadasync18",
  "level": 2
}, {
  "value": "socket.getMaxReceiveDataSize22+",
  "id": "socketgetmaxreceivedatasize22",
  "level": 2
}, {
  "value": "socket.getMaxTransmitDataSize22+",
  "id": "socketgetmaxtransmitdatasize22",
  "level": 2
}, {
  "value": "socket.isConnected22+",
  "id": "socketisconnected22",
  "level": 2
}, {
  "value": "SppOptions",
  "id": "sppoptions",
  "level": 2
}, {
  "value": "SppType",
  "id": "spptype",
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
        id: "ohosbluetoothsocket-蓝牙socket模块",
        children: "@ohos.bluetooth.socket (蓝牙socket模块)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供一种蓝牙套接字功能，可实现设备间连接和数据传输。当两个设备间进行蓝牙套接字通信交互时，依据设备功能的不同，可区分客户端与服务端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持的套接字链路类型包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology#rfcomm",
        children: "RFCOMM"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology#l2cap",
        children: "L2CAP"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RFCOMM链路类型也称为串口通信协议（Serial Port Profile, ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/terminology#spp",
          children: "SPP"
        }), "），适用于传统蓝牙（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/terminology#br",
          children: "BR"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/terminology#edr",
          children: "EDR"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["L2CAP链路类型适用于传统蓝牙（BR/EDR）和低功耗蓝牙（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/terminology#ble",
          children: "BLE"
        }), "）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#socketsppconnect",
        children: "socket.sppConnect"
      }), "创建客户端套接字并向服务端发起连接。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#socketspplisten",
        children: "socket.sppListen"
      }), "创建服务端套接字并监听客户端的连接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445654)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { socket } from '@kit.ConnectivityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketspplisten",
      children: "socket.sppListen"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppListen(name: string, options: SppOptions, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端使用，创建一个服务端监听套接字。使用Callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过入参", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sppoptions",
          children: "socket.SppOptions"
        }), "的type参数，可以创建不同链路类型的服务端套接字，适用于不同的场景。该操作会在蓝牙子系统中注册对应的服务，表示服务端支持的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["客户端可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "向该服务端发起连接请求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当应用不再需要该服务端套接字时，需通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppcloseserversocket",
          children: "socket.sppCloseServerSocket"
        }), "主动关闭创建时获取到的套接字，蓝牙子系统会删除此前注册的服务。如果此时客户端发起连接，就会连接失败。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.ACCESS_BLUETOOTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务的名称，该字符串的字符个数范围为[0, 256]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sppoptions",
              children: "SppOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于监听的套接字配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当创建服务端套接字成功，err为undefined，data为获取到的服务端套接字的ID，有效值为非负值；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service stopped."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bluetooth disabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet serverNumber = -1;\nlet serverSocket = (code: BusinessError, number: number) => {\n  if (code) {\n    console.error('sppListen error, code is ' + code);\n    return;\n  } else {\n    serverNumber = number;\n    console.info('sppListen success, serverNumber = ' + serverNumber);\n  }\n}\n\n// 以RFCOMM链路类型套接字为例\nlet sppOption:socket.SppOptions = {uuid: '00001810-0000-1000-8000-00805F9B34FB', secure: false, type: socket.SppType.SPP_RFCOMM};\ntry {\n    socket.sppListen('server1', sppOption, serverSocket);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketgetl2cappsm20",
      children: "socket.getL2capPsm20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getL2capPsm(serverSocket: number): number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取服务端L2CAP链路类型套接字的协议/服务多路复用器值（Protocol/Service Multiplexer, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology#psm",
        children: "PSM"
      }), "），该值用于标识特定的服务数据传输通道。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515978)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在服务端调用完", (0,jsx_runtime.jsx)(_components.a, {
        href: "#socketspplisten",
        children: "socket.sppListen"
      }), "后调用该接口，且传入的链路类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "#spptype",
        children: "SppType"
      }), "需是SPP_L2CAP或SPP_L2CAP_BLE。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "serverSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketspplisten",
              children: "socket.sppListen"
            }), "接口后，通过其异步callback获取到的。"]
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
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回L2CAP链路类型套接字的psm值。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spptype",
              children: "SppType"
            }), "设置为SPP_L2CAP_BLE时，返回值的有效值范围为[0x01, 0xFF]。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spptype",
              children: "SppType"
            }), "设置为SPP_L2CAP时，返回值的有效值范围为[0x0000, 0xFFFF]。  - 服务端通道建立异常或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spptype",
              children: "SppType"
            }), "非L2CAP链路类型时，返回-1。"]
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 服务端获取客户端设备地址。\nlet serverNumber = 1; // 此处serverNumber需赋值为调用sppListen接口后，回调中得到的serverNumber。\ntry {\n    let l2capPsm: number = socket.getL2capPsm(serverNumber);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketsppaccept",
      children: "socket.sppAccept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppAccept(serverSocket: number, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端使用，接受客户端的套接字连接请求。使用Callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["须在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketspplisten",
          children: "socket.sppListen"
        }), "创建服务端套接字成功后，才能调用该接口监听客户端的连接请求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["客户端可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "向该服务端发起连接请求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["连接建立成功后，即可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppwrite",
          children: "socket.sppWrite"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppwriteasync18",
          children: "socket.sppWriteAsync"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppreadasync18",
          children: "socket.sppReadAsync"
        }), "等接口，同客户端进行数据传输。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当服务端不再需要已建立的连接时，可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppcloseclientsocket",
          children: "socket.sppCloseClientSocket"
        }), "主动断开指定的客户端套接字连接。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "serverSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketspplisten",
              children: "socket.sppListen"
            }), "接口后，通过其异步callback获取到的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当收到客户端的连接请求且连接建立成功时，err为undefined，data是用于标识发起此次连接请求的客户端套接字ID，有效值为非负值；否则err为错误对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码"
              })
            }), "："]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service stopped."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bluetooth disabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet clientNumber = -1;\nlet serverNumber = 1;\nlet acceptClientSocket = (code: BusinessError, number: number) => {\n  if (code) {\n    console.error('sppListen error, code is ' + code);\n    return;\n  } else {\n    clientNumber = number; // 获取的clientNumber用作客户端后续读/写操作socket的id。\n    console.info('sppListen success, clientNumber = ' + clientNumber);\n  }\n}\ntry {\n    socket.sppAccept(serverNumber, acceptClientSocket); // serverNumber是sppListen回调中得到的serverNumber。\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketsppconnect",
      children: "socket.sppConnect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppConnect(deviceId: string, options: SppOptions, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端使用，创建一个客户端套接字，并向服务端的特定服务发起连接请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sppoptions",
          children: "SppOptions"
        }), "参数的type表示需要连接的服务类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需确保服务端设备已具备需要连接的服务。服务端可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketspplisten",
          children: "socket.sppListen"
        }), "注册并监听连接请求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["连接建立成功后，即可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppwrite",
          children: "socket.sppWrite"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppwriteasync18",
          children: "socket.sppWriteAsync"
        }), "接口，同服务端进行数据传输。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当客户端不再需要已建立的连接时，可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppcloseclientsocket",
          children: "socket.sppCloseclientSocket"
        }), "主动断开连接。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.ACCESS_BLUETOOTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对端设备地址，例如：\"XX:XX:XX:XX:XX:XX\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sppoptions",
              children: "SppOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端套接字连接配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当客户端发起连接成功，err为undefined，data为当前客户端套接字的ID，有效值为非负值；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service stopped."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bluetooth disabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet clientSocket = (code: BusinessError, number: number) => {\n  if (code) {\n    console.error('sppConnect error, code is ' + code);\n    return;\n  } else {\n    // 获取的number用作客户端后续读/写操作的socket id。\n    console.info('bluetooth clientSocket Number: ' + number);\n  }\n}\n\n// 以RFCOMM链路类型套接字为例\nlet sppOption:socket.SppOptions = {uuid: '00001810-0000-1000-8000-00805F9B34FB', secure: false, type: socket.SppType.SPP_RFCOMM};\ntry {\n    socket.sppConnect('XX:XX:XX:XX:XX:XX', sppOption, clientSocket);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketgetdeviceid17",
      children: "socket.getDeviceId17+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDeviceId(clientSocket: number): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，获取套接字连接中的对端设备蓝牙地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "socket.sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "socket.sppConnect"
            }), "接口后，通过其异步callback获取到的。"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回对端设备地址。  基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。  - 已配对的地址不会变更。  - 若该设备重启蓝牙开关，重新获取到的虚拟地址会立即变更。  - 若取消配对，蓝牙子系统会根据该地址的实际使用情况，决策后续变更时机；若其他应用正在使用该地址，则不会立刻变更。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 服务端获取客户端设备地址。\nlet clientSocket = 1; // clientSocket是sppAccept回调中得到的，调用getDeviceId接口前需更新clientSocket。\ntry {\n    let deviceAddr: string = socket.getDeviceId(clientSocket);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\n// 客户端获取服务端设备地址。\n// clientSocket是sppConnect回调中得到的，调getDeviceId接口前需更新clientSocket。\ntry {\n    let deviceAddr: string = socket.getDeviceId(clientSocket);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketsppcloseserversocket",
      children: "socket.sppCloseServerSocket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppCloseServerSocket(socket: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端使用，删除指定的服务端套接字。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需先调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketspplisten",
          children: "socket.sppListen"
        }), "并获取到有效的服务端监听套接字标识符。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若服务端无需继续监听，可调用本接口以关闭监听套接字，蓝牙子系统会删除此前注册的服务。如果此时客户端发起连接，就会连接失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若服务端此时与其他客户端存在连接，该接口调用后，也会主动断开与客户端的连接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "socket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务端监听套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketspplisten",
              children: "socket.sppListen"
            }), "接口，通过其异步callback获取到的。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service stopped."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet serverNumber = 1; // 此处serverNumber需赋值为调用sppListen接口后，在回调中得到的serverNumber。\ntry {\n    socket.sppCloseServerSocket(serverNumber);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketsppcloseclientsocket",
      children: "socket.sppCloseClientSocket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppCloseClientSocket(socket: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，关闭指定的客户端套接字，并断开客户端和服务端之间的连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若客户端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若服务端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppaccept",
          children: "socket.sppAccept"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用不再需要已建立好的套接字连接时，需主动调用该接口断开客户端和服务端之间的连接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "socket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "socket.sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "socket.sppConnect"
            }), "接口，通过其异步callback获取到的。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service stopped."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet clientNumber = 1; // 入参clientNumber由sppAccept或sppConnect接口获取。\ntry {\n    socket.sppCloseClientSocket(clientNumber);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketsppwrite",
      children: "socket.sppWrite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppWrite(clientSocket: number, data: ArrayBuffer): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，向对端设备发送数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅在双方成功建立连接后，调用本接口才有效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若客户端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若服务端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppaccept",
          children: "socket.sppAccept"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若开发者需感知传输过程中异常断连等错误，建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppwriteasync18",
          children: "socket.sppWriteAsync"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按照蓝牙协议规范，数据通道在空闲状态需进入休眠模式以降低功耗。蓝牙子系统实现上，通道在5-7s内没有数据交互时会进入休眠模式，将导致下次调用此接口发送数据前，会耗费500ms左右退出休眠模式才开始发送数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若想减少每次发送数据前退出休眠模式的耗时，建议每3s左右可往数据通道上发送一次任意大小的心跳数据，对数据通道进行保活，可防止进入休眠模式，但同时也会提高设备功耗。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP_BLE"
        }), "时，单次发送数据大小存在限制，单位为Byte，超过限制范围的数据将被截断。链路类型为SPP_L2CAP_BLE时单次发送数据大小范围为[1, 65535]；链路类型为SPP_L2CAP时服务端单次发送数据大小范围为[1, 4091]，客户端单次发送数据大小范围为[1, 8085]。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "socket.sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "socket.sppConnect"
            }), "接口，通过其异步callback获取到的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2901054"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet clientNumber = 1; // 入参clientNumber由sppAccept或sppConnect接口获取。\nlet arrayBuffer = new ArrayBuffer(8);\nlet data = new Uint8Array(arrayBuffer);\ndata[0] = 123;\ntry {\n    socket.sppWrite(clientNumber, arrayBuffer);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketonsppread",
      children: "socket.on('sppRead')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，订阅套接字读请求事件。调用该接口后，当收到对端发送的数据会执行订阅的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若客户端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若服务端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppaccept",
          children: "socket.sppAccept"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不可以和API version 18开始支持的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppreadasync18",
          children: "socket.sppReadAsync"
        }), "接口混用，同一路套接字连接只能使用socket.on('sppRead')接口或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppreadasync18",
          children: "socket.sppReadAsync"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若开发者需感知传输过程中异常断连等错误，建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppreadasync18",
          children: "socket.sppReadAsync"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_RFCOMM"
        }), "时，当接收数据大小超过1024字节时，会自动分多次接收，每次接收数据大小范围为[1, 1024]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP_BLE"
        }), "时，单次接收数据大小存在限制，需一次性读取全部数据，单位为Byte，超过最大接收数据大小限制将被截断。链路类型为SPP_L2CAP_BLE时单次接收数据大小范围为[1, 65535]；链路类型为SPP_L2CAP时服务端和客户端单次接收数据大小范围为[1, 8087]。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件回调类型，支持的事件为'sppRead'，表示订阅spp读请求事件。  当收到了对端发送的数据时，触发该事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "socket.sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "socket.sppConnect"
            }), "接口，通过其异步callback获取到的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<ArrayBuffer>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定订阅的回调函数，会返回读取到的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2901054"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet clientNumber = 1; // 入参clientNumber由sppAccept或sppConnect接口获取。\nlet dataRead = (dataBuffer: ArrayBuffer) => {\n    let data = new Uint8Array(dataBuffer);\n    console.info('bluetooth data length is: ' + data.byteLength);\n}\ntry {\n    socket.on('sppRead', clientNumber, dataRead);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketoffsppread",
      children: "socket.off('sppRead')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'sppRead', clientSocket: number, callback?: Callback<ArrayBuffer>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅套接字读请求事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件回调类型，支持的事件为'sppRead'，表示取消订阅spp读请求事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "socket.sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "socket.sppConnect"
            }), "接口，通过其异步callback获取到的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<ArrayBuffer>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定取消订阅的回调函数通知。  若传参，则需与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketonsppread",
              children: "socket.on('sppRead')"
            }), "中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
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
            children: "Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet clientNumber = 1; // 入参clientNumber由sppAccept或sppConnect接口获取。\ntry {\n    socket.off('sppRead', clientNumber);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketsppwriteasync18",
      children: "socket.sppWriteAsync18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppWriteAsync(clientSocket: number, data: ArrayBuffer): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，向对端设备发送数据。使用Promise异步回调。该接口支持断开连接时，会抛出错误码并返回。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅在双方成功建立连接后，调用本接口才有效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若客户端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若服务端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppaccept",
          children: "socket.sppAccept"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按照蓝牙协议规范，数据通道在空闲状态需进入休眠模式以降低功耗。蓝牙子系统实现上，通道在5-7s内没有数据交互时会进入休眠模式，将导致下次调用此接口发送数据前，会耗费500ms左右退出休眠模式才开始发送数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若想减少每次发送数据前退休眠模式的耗时，建议每3s左右可往数据通道上发送一次任意大小的心跳数据，对数据通道进行保活，可防止进入休眠模式，但同时也会提高设备功耗。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP_BLE"
        }), "时，单次发送数据大小存在限制，单位为Byte，超过限制大小的数据将被截断。链路类型为SPP_L2CAP_BLE时单次发送数据大小范围为[1, 65535]；链路类型为SPP_L2CAP时服务端单次发送数据大小范围为[1, 4091]，客户端单次发送数据大小范围为[1, 8085]。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "sppConnect"
            }), "接口，通过其异步callback获取到的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入的数据。"
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
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2901054"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet clientNumber = 1; // 入参clientNumber由sppAccept或sppConnect接口获取。\nlet arrayBuffer = new ArrayBuffer(8);\nlet data = new Uint8Array(arrayBuffer);\ntry {\n    socket.sppWriteAsync(clientNumber, arrayBuffer).then(() => {\n      console.info(\"sppWrite success\");\n    });\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketsppreadasync18",
      children: "socket.sppReadAsync18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sppReadAsync(clientSocket: number): Promise<ArrayBuffer>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，读取对端发送数据的异步接口。使用Promise异步回调。该接口支持断开连接时，会抛出错误码并返回。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若客户端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若服务端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppaccept",
          children: "socket.sppAccept"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不可以和API version 10开始支持的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketonsppread",
          children: "socket.on('sppRead')"
        }), "接口混用，同一路socket只能使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketonsppread",
          children: "socket.on('sppRead')"
        }), "接口或者socket.sppReadAsync接口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过Promise异步返回读取的数据，建议在连接成功后循环调用去获取接收到的数据，若不及时调用会丢失接收的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口为异步接口，需要等异步回调结果返回后才能进行下一次调用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_RFCOMM"
        }), "时，当接收数据大小超过1024字节时，会自动分多次接收，每次接收数据大小范围为[1, 1024]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_L2CAP_BLE"
        }), "时，单次接收数据大小存在限制，需一次性读取全部数据，单位为Byte，超过最大接收数据大小限制将被截断。链路类型为SPP_L2CAP_BLE时单次接收数据大小范围为[1, 65535]；链路类型为SPP_L2CAP时服务端和客户端单次接收数据大小范围为[1, 8087]。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "sppConnect"
            }), "接口，通过其异步callback获取到的。"]
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
            children: "Promise<ArrayBuffer>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回读取的数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-bluetoothmanager/errorcode-bluetoothmanager",
        children: "蓝牙服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2901054"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation failed."
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 入参clientNumber由sppAccept或sppConnect接口获取。\nasync function readAsync(clientNumber: number) {\n  let flag = 1;\n  try {\n    while (flag) { // 该接口需业务循环调用读取，具体循环形式按业务需要来实现，这里只是示例。\n      let buffer = await socket.sppReadAsync(clientNumber); // 使用await确保顺序读取。\n      let data = new Uint8Array(buffer);\n      if (data) {\n        console.info('sppRead success, data length = ' + data.byteLength);\n        // 在此处理接收到的数据。\n      }\n    }\n  } catch (err) {\n    console.error('startSppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    socket.sppCloseClientSocket(clientNumber); // 发生错误时关闭连接。\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketgetmaxreceivedatasize22",
      children: "socket.getMaxReceiveDataSize22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMaxReceiveDataSize(clientSocket: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，获取当前套接字链路类型下最大接收数据的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若客户端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若服务端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppaccept",
          children: "socket.sppAccept"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若套接字链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_RFCOMM"
        }), "时，最大接收数据大小无限制且返回值为0。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "sppConnect"
            }), "接口，通过其异步callback获取到的。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回最大接收数据的大小，单位：Byte。"
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 入参clientNumber由sppAccept或sppConnect接口获取。\nlet clientSocket = 1;\ntry {\n    let result: number = socket.getMaxReceiveDataSize(clientSocket);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketgetmaxtransmitdatasize22",
      children: "socket.getMaxTransmitDataSize22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMaxTransmitDataSize(clientSocket: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，获取套接字当前链路类型下最大发送数据的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若客户端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppconnect",
          children: "socket.sppConnect"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若服务端使用，需在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#socketsppaccept",
          children: "socket.sppAccept"
        }), "后，且连接成功后使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若套接字链路类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#spptype",
          children: "SPP_RFCOMM"
        }), "时，最大发送数据大小无限制且返回值为0。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "sppConnect"
            }), "接口，通过其异步callback获取到的。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回最大发送数据的大小，单位：Byte。"
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 入参clientNumber由sppAccept或sppConnect接口获取。\nlet clientSocket = 1;\ntry {\n    let result: number = socket.getMaxTransmitDataSize(clientSocket);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "socketisconnected22",
      children: "socket.isConnected22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isConnected(clientSocket: number): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端和服务端均可使用，检查当前链路是否已连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
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
            children: "clientSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["客户端套接字的ID。  该值是调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppaccept",
              children: "sppAccept"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketsppconnect",
              children: "sppConnect"
            }), "接口，通过其异步callback获取到的。"]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "套接字链路是否已连接，true表示已连接，false表示未连接。"
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 入参clientNumber由sppAccept或sppConnect接口获取。\nlet clientSocket = 1;\ntry {\n    let result: boolean = socket.isConnected(clientSocket);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sppoptions",
      children: "SppOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述套接字的配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uuid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RFCOMM套接字链路类型的服务UUID，例如\"00001101-0000-1000-8000-00805F9B34FB\"。  - 建议开发者使用自定义的服务UUID（可通过工具函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#utilgeneraterandomuuid9",
              children: "util.generateRandomUUID"
            }), "生成），也可以使用标准协议定义的Serial Port UUID服务(00001101-0000-1000-8000-00805F9B34FB)。  - SppType设置为SPP_RFCOMM时该参数必选。  - SppType设置为SPP_L2CAP或SPP_L2CAP_BLE时设置为空字符串。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否是安全通道。true表示是安全通道，false表示非安全通道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#spptype",
              children: "SppType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙套接字链路类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "psm20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["协议/服务多路复用器值，用于标识特定的服务数据传输通道。不填写该参数时默认值为-1。  对于客户端：  - SppType设置为SPP_RFCOMM时，该参数不填。  - SppType设置为SPP_L2CAP_BLE或SPP_L2CAP时，需和服务端的psm值保持一致。  对于服务端：  - SppType设置为SPP_RFCOMM时，该参数不填。  - SppType设置为SPP_L2CAP_BLE时，psm值必须由系统自动分配，有效值范围为[0x01, 0xFF]。  - SppType设置为SPP_L2CAP时，psm值可以主动设置或蓝牙子系统分配，若为主动设置，其有效范围为[0x00, 0xFFFF]，并且需要满足低位字节最低位必须为1，高位字节最低位必须为0；若为蓝牙子系统分配，该参数不填，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#socketgetl2cappsm20",
              children: "socket.getL2capPsm"
            }), "接口获取psm值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spptype",
      children: "SppType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，蓝牙套接字链路类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同类型的蓝牙设备需要选取不同的链路类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对低功耗蓝牙（BLE）设备，必须使用L2CAP链路类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对传统蓝牙（BR/EDR）设备，建议优先采用RFCOMM链路进行连接。其优势在于可通过UUID服务动态协商信道（即设备通过查询服务UUID自动确定通信频道的过程），同时具备更高的安全性和可靠性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPP_RFCOMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于传统蓝牙（BR/EDR）的RFCOMM链路。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPP_L2CAP20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于传统蓝牙（BR/EDR）的L2CAP链路。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPP_L2CAP_BLE20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于低功耗蓝牙（BLE）的L2CAP链路。"
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
445654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
515978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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