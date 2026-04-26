"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["111651"], {
316837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_distributed_service_kit_abilityconnect_distributed_linkenhance_development_guide_linkenhance_development_guide_md_322_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-distributed-service-kit-abilityconnect-distributed-linkenhance-development-guide-linkenhance-development-guide-md-322.json
var site_docs_system_network_distributed_service_kit_abilityconnect_distributed_linkenhance_development_guide_linkenhance_development_guide_md_322_namespaceObject = JSON.parse('{"id":"system-network/distributed-service-kit/abilityconnect-distributed/linkenhance_development-guide/linkenhance_development-guide","title":"增强连接开发指导","description":"简介","source":"@site/docs/system-network/distributed-service-kit/abilityconnect-distributed/linkenhance_development-guide/linkenhance_development-guide.md","sourceDirName":"system-network/distributed-service-kit/abilityconnect-distributed/linkenhance_development-guide","slug":"/system-network/distributed-service-kit/abilityconnect-distributed/linkenhance_development-guide/","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/abilityconnect-distributed/linkenhance_development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"增强连接开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/linkenhance_development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备连接UIAbility开发指南","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines/"},"next":{"title":"NearLink Kit简介","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/distributed-service-kit/abilityconnect-distributed/linkenhance_development-guide/linkenhance_development-guide.md


const frontMatter = {
	title: '增强连接开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/linkenhance_development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '增强连接开发指导';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 3
}, {
  "value": "搭建环境",
  "id": "搭建环境",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "增强连接开发指导",
  "id": "增强连接开发指导-1",
  "level": 2
}, {
  "value": "服务端开发指导",
  "id": "服务端开发指导",
  "level": 3
}, {
  "value": "客户端开发指导",
  "id": "客户端开发指导",
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
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "增强连接开发指导",
        children: "增强连接开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着技术的发展，各种应用层出不穷，设备间的互联关系也成为一种常态，此时对于网络环境的依赖也不可避免。然而，在某些特殊场景下（如航空、远洋航行等），网络受限，蓝牙成为少数可行的连接方式。但是传统蓝牙连接存在着连接数量有限、连接成功率低、连接不稳定等缺点，影响了用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS提供了分布式增强连接能力，实现跨设备互联，完成与对端设备的连接，交换应用业务数据。相比传统蓝牙连接，使用多通道合并算法，增加设备连接数量，增强连接稳定性，提升跨端互通体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备互联过程中，发现对端的蓝牙地址并建立物理链路；在多设备互联场景下，通过特有的多通道合并算法，在保证设备间交互能力的前提下，减少实际物理链路的个数，达到设备间可用连接数增大、降低干扰提升通信的稳定性的效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["两个设备的交互实现如下，在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-link-enhance/js-apis-link-enhance",
        children: "linkEnhance"
      }), "能力后，当两端同时发起连接时，会自动识别合并底层多余物理链路，减少实际物理链路的个数，减少蓝牙链路资源的消耗，增加可用连接数量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224786)/* ["default"] */.A) + "",
        width: "798",
        height: "417"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备互联时需要开启蓝牙功能。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过蓝牙广播/扫描接口获取对端设备BLE MAC。蓝牙BLE接口参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide",
          children: "查找设备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同设备间只有相同bundleName的应用才能进行互联。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要配置ohos.permission.DISTRIBUTED_DATASYNC权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口提供连接能力，链路安全策略遵循调用者初始设置的蓝牙配对策略（如：Numeric Comparison、Passkey Entry、Just Works、Out of Band四种方式）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开客户端和服务端设备的蓝牙开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "搭建环境",
      children: "搭建环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在PC上安装", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/download/deveco-studio",
          children: "DevEco Studio"
        }), "，版本要求在4.1及以上。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将public-SDK更新到API 20或以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用USB线缆将两台调测设备（设备A和设备B）连接到PC。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开设备A和设备B的蓝牙开关。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常用接口说明如下表。更多接口的详细介绍参考@ohos.distributedsched.linkEnhance", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-link-enhance/js-apis-link-enhance",
        children: "增强连接"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connect()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client端发起连接远端设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disconnect()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断开与远端设备的连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "close()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁Connection对象，注销所有注册的事件，调用该接口后Connection对象将不能再使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getPeerDeviceId()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取远端设备的deviceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendData(data:ArrayBuffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向远端设备发送数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'connectResult')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅连接结果通知变化的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'disconnected')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅连接状态断开的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'dataReceived')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册收数据的通知事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createConnection(deviceId: string,name:string)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个connection对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务端开启服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务端停止服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "close()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁Server对象，注销已注册的服务并取消已订阅的所有事件，调用该接口后Server对象将不能再使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'connectionAccepted')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server端订阅收到对端连接的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'serverStopped')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server端订阅服务状态停止的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createServer(name: string)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个server对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "增强连接开发指导-1",
      children: "增强连接开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["服务端开启蓝牙后，创建Server对象，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-link-enhance/js-apis-link-enhance#start",
          children: "start()接口"
        }), "开启服务，让服务端处于可连接状态，通过注册的事件监听，监听事件的变化通知。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["客户端开启蓝牙后，创建Connection对象，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-link-enhance/js-apis-link-enhance#connect",
          children: "connect()接口"
        }), "发起连接，通过注册的事件监听，监听事件的变化通知。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["连接成功后，可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-link-enhance/js-apis-link-enhance#senddata",
          children: "sendData接口"
        }), "发送数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端开发指导",
      children: "服务端开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import {linkEnhance} from '@kit.DistributedServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5配置文件中配置分布式数据同步权限ohos.permission.DISTRIBUTED_DATASYNC。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\" : {\n    \"requestPermissions\":[\n      {\n        \"name\" : \"ohos.permission.DISTRIBUTED_DATASYNC\",\n        \"reason\": \"$string:distributed_permission\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"MainAbility\"\n          ],\n          \"when\": \"inuse\"\n        }\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建server对象，并开启服务，注册监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const TAG = 'TEST';\n// server端注册服务\nlinkEnhanceStart(name: string) {\n  console.info(TAG + 'start server deviceId = ' + name);\n  try {\n  // 使用服务名构造Server\n  let server: linkEnhance.Server = linkEnhance.createServer(name);\n\n    // 订阅服务接收事件和服务停止事件\n    server.on('connectionAccepted', (connection: linkEnhance.Connection): void => {\n      console.info(TAG + 'serverOnCallback');\n    });\n    server.on('serverStopped', (reason: number): void => {\n      console.info(TAG, 'serverStopped， reason= ' + reason);\n    });\n    // 启动服务\n    server.start();\n  } catch (err) {\n    console.error(TAG + 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +\n    (err as BusinessError).message);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当连接被连上时，需要保存connection对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "serverAcceptOnCallback = (connection: linkEnhance.Connection): void => {\n  console.info(TAG + 'serverOnCallback');\n  try {\n\n    // 收到连接请求后，订阅connection的断连事件。\n    connection.on('disconnected', (reason: number)=> {\n      console.info(TAG + 'disconnected, reason = ' + reason);\n    });\n    // 收到连接请求后，订阅connection的数据接收事件。\n    connection.on('dataReceived', (data: ArrayBuffer)=> {\n      console.info(TAG + 'dataReceived, dataLen=' + data.byteLength);\n    });\n\n    let len = 1;\n    let arraybuffer = new ArrayBuffer(len);\n    // 向远端发送数据。\n    connection.sendData(arraybuffer);\n  } catch (err) {\n    console.error(TAG + 'server on callback errCode: ' + (err as BusinessError).code + ', errMessage: ' +\n    (err as BusinessError).message);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "断开连接并销毁Connection对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 断连接。\nlinkEnhanceDisconnect(connection: linkEnhance.Connection) {\n  console.info(TAG + 'disconnect deviceId = ' + connection.getPeerDeviceId());\n  try {\n    connection.disconnect();\n    connection.close();\n  } catch (err) {\n    console.error(TAG + 'disconnect errCode: ' + (err as BusinessError).code + ', errMessage: ' +\n    (err as BusinessError).message);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止服务并销毁server对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Server端停止服务\nlinkEnhanceStop(server: linkEnhance.Server) {\n  console.info(TAG + 'stop server');\n  try {\n    server.stop();\n  } catch (err) {\n    console.info(TAG + 'stop server errCode: ' + (err as BusinessError).code + ', errMessage: ' +\n    (err as BusinessError).message);\n  }\n}\n// Server端停止服务并取消所有的订阅事件\nlinkEnhanceClose(server: linkEnhance.Server) {\n  console.info(TAG + 'close server' );\n  try {\n    server.close();\n  } catch (err) {\n    console.error(TAG + 'close server errCode: ' + (err as BusinessError).code + ', errMessage: ' +\n    (err as BusinessError).message);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端开发指导",
      children: "客户端开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { linkEnhance } from '@kit.DistributedServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5配置文件中配置分布式数据同步权限ohos.permission.DISTRIBUTED_DATASYNC。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\" : {\n    \"requestPermissions\":[\n      {\n        \"name\" : \"ohos.permission.DISTRIBUTED_DATASYNC\",\n        \"reason\": \"$string:distributed_permission\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"MainAbility\"\n          ],\n          \"when\": \"inuse\"\n        }\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建connection对象，订阅连接结果通知变化的事件，连接服务端。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const TAG = \"testDemo\";\n// client端主动连接时调用\nlinkEnhanceConnect(peerDeviceId: string) {\n  console.info(TAG + 'connection server deviceId = ' + peerDeviceId);\n  try {\n    // 使用peerDeviceId构造Connection后续的交互都需要使用该对象\n    let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, \"demo\");\n    // 订阅连接结果\n    connection.on('connectResult', (data: linkEnhance.ConnectResult): void => {\n      console.info(TAG + 'clientConnectResultCallback result = ' + data.success);\n      if (data.success) {\n        // 向服务端发送数据\n        let len = 1;\n        let arraybuffer = new ArrayBuffer(len);\n        connection.sendData(arraybuffer);\n      }\n    });\n    connection.on('disconnected', (reason: number)=> {\n      console.info(TAG + 'disconnected reason = ' + reason);\n    });\n    connection.on('dataReceived', (data: ArrayBuffer)=> {\n    console.info(TAG + 'dataReceived, dataLen=' + data.byteLength);\n    });\n    // 发起连接\n    connection.connect();\n  } catch (err) {\n    console.error(TAG + 'connect errCode: ' + (err as BusinessError).code + ', errMessage: ' +\n    (err as BusinessError).message);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "断开连接，销毁Connection对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "disconnect(connection: linkEnhance.Connection) {\n  console.info(TAG + 'disconnect deviceId = ' + connection.getPeerDeviceId());\n  try {\n    connection.disconnect();\n    connection.close();\n  } catch (err) {\n    console.error(TAG + 'disconnect errCode: ' + (err as BusinessError).code + ', errMessage: ' +\n    (err as BusinessError).message);\n  }\n}\n"
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
224786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478423-18dd7b1480f5197f1516ebefa123010e.png");

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