"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["52457"], {
983408(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_watchdev_watch_p_2_p_communication_watch_p_2_p_communication_md_182_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-watchdev-watch-p-2-p-communication-watch-p-2-p-communication-md-182.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_watchdev_watch_p_2_p_communication_watch_p_2_p_communication_md_182_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication/watch_p2p_communication","title":"应用间消息通信","description":"约束与限制","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication/watch_p2p_communication.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication","slug":"/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用间消息通信","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/watch_p2p_communication","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"已连接对端设备查询","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices/"},"next":{"title":"调测验证","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_verification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication/watch_p2p_communication.md


const frontMatter = {
	title: '应用间消息通信',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/watch_p2p_communication',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '应用间消息通信';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "穿戴侧应用检测对端设备侧应用是否安装",
  "id": "穿戴侧应用检测对端设备侧应用是否安装",
  "level": 2
}, {
  "value": "穿戴侧应用发送点对点消息或文件到对端应用",
  "id": "穿戴侧应用发送点对点消息或文件到对端应用",
  "level": 2
}, {
  "value": "发送点对点消息",
  "id": "发送点对点消息",
  "level": 3
}, {
  "value": "发送文件",
  "id": "发送文件",
  "level": 3
}, {
  "value": "订阅接收对端应用发来的消息",
  "id": "订阅接收对端应用发来的消息",
  "level": 2
}, {
  "value": "订阅接收对端应用发送来的文件",
  "id": "订阅接收对端应用发送来的文件",
  "level": 2
}, {
  "value": "对端应用通过startRemoteApp方法拉起穿戴侧应用",
  "id": "对端应用通过startremoteapp方法拉起穿戴侧应用",
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
        id: "应用间消息通信",
        children: "应用间消息通信"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用该功能前，请确保对端设备侧已有对应的应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对端设备侧应用和穿戴设备应用必须同时处于已启动状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "穿戴侧应用检测对端设备侧应用是否安装",
      children: "穿戴侧应用检测对端设备侧应用是否安装"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices",
            children: "已连接对端设备查询"
          }), "章节，从已连接设备列表中选定需要通信的对端设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetp2pclient",
            children: "getP2pClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pclient",
            children: "P2pClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#isremoteappinstalled",
            children: "isRemoteAppInstalled"
          }), "方法，查看对端设备是否安装指定应用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将对端应用包名定义为remoteBundleName\nlet remoteBundleName: string = '';\n\n// 步骤2 获取P2pClient对象\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\n\n// 步骤3 查看是否安装指定的对端应用\np2pClient.isRemoteAppInstalled(targetDevice.randomId, remoteBundleName).then((isInstall) => {\n  console.info(`Succeeded in checking remote app install, result is ${isInstall}.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to check remote app install. Code is ${error.code}, message is ${error.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "穿戴侧应用发送点对点消息或文件到对端应用",
      children: "穿戴侧应用发送点对点消息或文件到对端应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息长度大小的限制为4096字节。针对消息长度超过限制的情况可以采用发送文件（文件大小不超过100MB）的方式或进行消息分包控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "穿戴侧实现发送消息和文件功能后，对端应用需要实现接收消息和文件的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发送点对点消息",
      children: "发送点对点消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了使用工具类构造消息体，请先导入所需模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { util } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices",
            children: "已连接对端设备查询"
          }), "章节，从已连接设备列表中选定需要通信的对端设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造对端应用参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pappparam",
            children: "P2pAppParam"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造需要发送的消息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pmessage",
            children: "P2pMessage"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetp2pclient",
            children: "getP2pClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pclient",
            children: "P2pClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#sendmessage",
            children: "sendMessage"
          }), "方法，从穿戴侧应用发送简短消息到对端应用。对端应用已注册监听消息接收后，即可收到穿戴侧应用发送的消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 步骤2 构造对端应用参数\nlet appInfo: wearEngine.AppInfo = {\n  // 设置对端应用的应用信息：包名与指纹\n  bundleName: '',\n  fingerprint: ''\n}\nlet appParam: wearEngine.P2pAppParam = {\n  remoteApp: appInfo\n}\n\n// 设置需要发送的消息内容，长度限制为4096字节\nlet messageContent: string = 'this is message';\n\n// 步骤3 构造消息结构体\nlet textEncoder: util.TextEncoder = new util.TextEncoder;\nlet message: wearEngine.P2pMessage = {\n  content: textEncoder.encodeInto(messageContent)\n}\n\n// 步骤4 获取P2pClient对象\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\n\n// 步骤5 发送消息\np2pClient.sendMessage(targetDevice.randomId, appParam, message).then((p2pResult) => {\n  console.info(`Succeeded in sending message, result is ${p2pResult.code}.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to send message. Code is ${error.code}, message is ${error.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发送文件",
      children: "发送文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发送文件前需要打开文件描述符，请先导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileIo } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices",
            children: "已连接对端设备查询"
          }), "章节，从已连接设备列表中选定需要通信的对端设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造对端应用参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pappparam",
            children: "P2pAppParam"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据文件路径filePath，构造需要发送的文件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pfile",
            children: "P2pFile"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetp2pclient",
            children: "getP2pClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pclient",
            children: "P2pClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#transferfile",
            children: "transferFile"
          }), "方法，从穿戴侧应用发送文件到对端应用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 步骤2 构造对端应用参数\nlet appInfo: wearEngine.AppInfo = {\n  // 设置对端应用的应用信息：包名与指纹\n  bundleName: '',\n  fingerprint: ''\n}\nlet appParam: wearEngine.P2pAppParam = {\n  remoteApp: appInfo\n}\n\n// 步骤3 构造需要发送的文件\nlet p2pfile: wearEngine.P2pFile = {\n  // 设置需要发送的文件路径，其中不能包含'..'\n  file: fileIo.openSync('')\n}\n\n// 步骤4 获取P2pClient对象\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\n\n// 步骤5 发送指定文件至对端\np2pClient.transferFile(targetDevice.randomId, appParam, p2pfile, (error: BusinessError, p2pResult: wearEngine.P2pResult) => {\n  // callback处理逻辑\n  if (error) {\n    console.error(`Failed to transfer file. Code is ${error.code}, message is ${error.message}.`);\n    return;\n  }\n  if (p2pResult.code) {\n    if (p2pResult.code === wearEngine.P2pResultCode.COMMUNICATION_SUCCESS) {\n      console.info(`Succeeded in transferring file, the result is ${p2pResult.code}.`);\n    } else {\n      console.info(`Failed to transfer file, the error code is ${p2pResult.code}.`);\n      return;\n    }\n  }\n  if (p2pResult.progress) {\n    console.info(`Succeeded in transfering file, the progress is ${p2pResult.progress}.`);\n  }\n});\n\nfileIo.close(p2pfile.file);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅接收对端应用发来的消息",
      children: "订阅接收对端应用发来的消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices",
            children: "已连接对端设备查询"
          }), "章节，从已连接设备列表中选定需要通信的对端设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetp2pclient",
            children: "getP2pClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pclient",
            children: "P2pClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造对端应用参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pappparam",
            children: "P2pAppParam"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造接收到对端传来消息后的回调函数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
            children: "Callback"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#registermessagereceiver",
            children: "registerMessageReceiver"
          }), "方法，订阅监听消息接收事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 步骤2 获取P2pClient对象\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\n\n// 步骤3 构造对端应用参数\nlet appInfo: wearEngine.AppInfo = {\n  bundleName: '',\n  fingerprint: ''\n}\n// 将对端应用参数类定义为appParam\nlet appParam: wearEngine.P2pAppParam = {\n  remoteApp: appInfo\n}\n\n// 步骤4 构造回调函数\nlet callback = (p2pMessage: wearEngine.P2pMessage) => {\n  console.info(`Succeeded in receiving message, the message is ${p2pMessage.content}.`);\n}\n\n// 步骤5 订阅监听消息接收事件\np2pClient.registerMessageReceiver(targetDevice.randomId, appParam, callback).then(() => {\n  console.info(`Succeeded in registering message receiver.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to register message receiver. Code is ${error.code}, message is ${error.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#unregistermessagereceiver",
            children: "unregisterMessageReceiver"
          }), "方法，穿戴侧应用取消接收对端应用发过来的消息，需要传入订阅监听时的同一个回调函数对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "p2pClient.unregisterMessageReceiver(targetDevice.randomId, appParam, callback).then(() => {\n  console.info(`Succeeded in unregistering message receiver.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to unregister message receiver. Code is ${error.code}, message is ${error.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅接收对端应用发送来的文件",
      children: "订阅接收对端应用发送来的文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices",
            children: "已连接对端设备查询"
          }), "章节，从已连接设备列表中选定需要通信的对端设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetp2pclient",
            children: "getP2pClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pclient",
            children: "P2pClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造设备侧应用参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#p2pappparam",
            children: "P2pAppParam"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造接收到设备侧传来文件后的回调函数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
            children: "Callback"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#registerfilereceiver",
            children: "registerFileReceiver"
          }), "方法，订阅监听文件接收事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 步骤2 获取P2pClient对象\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\n\n// 步骤3 构造对端应用参数\nlet appInfo: wearEngine.AppInfo = {\n  bundleName: '',\n  fingerprint: ''\n}\n// 将对端应用参数类定义为appParam\nlet appParam: wearEngine.P2pAppParam = {\n  remoteApp: appInfo\n}\n\n// 步骤4 构造回调函数\nlet callback = (p2pMessage: wearEngine.P2pFile) => {\n  console.info(`Succeeded in receiving file.`);\n}\n\n// 步骤5 订阅监听文件接收事件\np2pClient.registerFileReceiver(targetDevice.randomId, appParam, callback).then(() => {\n  console.info(`Succeeded in registering file receiver.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to register file receiver. Code is ${error.code}, message is ${error.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#unregisterfilereceiver",
            children: "unregisterFileReceiver"
          }), "方法，穿戴侧应用取消接收对端应用发过来的文件，需要传入订阅监听时的同一个回调函数对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "p2pClient.unregisterFileReceiver(targetDevice.randomId, appParam, callback).then(() => {\n  console.info(`Succeeded in unregistering file receiver.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to unregister file receiver. Code is ${error.code}, message is ${error.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对端应用通过startremoteapp方法拉起穿戴侧应用",
      children: "对端应用通过startRemoteApp方法拉起穿戴侧应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果对端应用通过调用startRemoteApp方法拉起穿戴侧应用时，需要在穿戴侧配置需要拉起的页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建名为HiWearMainAbility.ets的文件，需继承UIAbility，重写onWindowStageCreate函数，配置要跳转的界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 必须继承UIAbility\nimport hilog from '@ohos.hilog';\nimport UIAbility from '@ohos.app.ability.UIAbility';\nimport window from '@ohos.window';\n\n/**\n * 对端应用通过startRemoteApp方法拉起穿戴侧应用的HiWearMainAbility\n */\nexport default class HiWearMainAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(0x0000, 'HiWearMainAbility', '%{public}s', 'Ability onWindowStageCreate');\n\n    // 配置要跳转的界面为”XXXPage”\n    windowStage.loadContent(\"pages/XXXPage\", (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'HiWearMainAbility', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'HiWearMainAbility', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在module.json5中的abilities中配置HiWearMainAbility。更多配置详情参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
            children: "abilities标签"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置name为HiWearMainAbility。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置srcEntry为HiWearMainAbility.ets文件的路径。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置startWindowIcon为标识当前UIAbility组件启动页面图标资源文件的索引。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置startWindowBackground为标识当前UIAbility组件启动页面背景颜色资源文件的索引。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"module\": {\n  \"name\": \"xxxx\",\n  \"type\": \"entry\",\n  \"description\": \"xxxx\",\n  \"mainElement\": \"xxxx\",\n  \"deviceTypes\": [],\n  \"pages\": \"xxxx\",\n  \"abilities\": [\n  {\n  \"name\": \"HiWearMainAbility\",\n  \"srcEntry\": \"xxxx\",\n  \"startWindowIcon\": \"xxxx\", // 标识当前UIAbility组件启动页面图标资源文件的索引\n  \"startWindowBackground\": \"xxxx\" // 标识当前UIAbility组件启动页面背景颜色资源文件的索引\n  }],\n  \"metadata\": []\n  }\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5中的metadata中配置对端应用包名、待拉起的Ability名称，以及是否要等待穿戴侧完成订阅消息接收或者文件接收。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对端应用包名配置时，name为wearEngineRemoteAppNameList，value为具体的对端应用包名，如果存在多个应用包名，使用英文逗号隔开，value值最长不超过4KB；"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ability名称配置时，name为wearEngineUIAbilityName，value为指定要拉起的UIAbility名称，不配置默认拉起HiWearMainAbility；"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "AwaitRegisterReceiver配置时，name为wearEngineAwaitRegisterReceiver，value取值为true、false。true表示要等待穿戴侧完成订阅消息接收或者文件接收，false则反之。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"module\": {\n  \"name\": \"xxxx\",\n  \"type\": \"entry\",\n  \"description\": \"xxxx\",\n  \"mainElement\": \"xxxx\",\n  \"deviceTypes\": [],\n  \"pages\": \"xxxx\",\n  \"abilities\": [],\n  \"metadata\": [ // 配置如下信息\n      {\n        \"name\": \"wearEngineRemoteAppNameList\",\n        \"value\": \"xxxx1,xxxx2,xxxx3\"\n      },\n      {\n        \"name\": \"wearEngineUIAbilityName\",\n        \"value\": \"xxxx\"\n      },\n      {\n        \"name\": \"wearEngineAwaitRegisterReceiver\",\n        \"value\": \"true\"\n      }\n  ]}\n"
              })
            }), "\n"]
          }), "\n"]
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