"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["380851"], {
888517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ipc_kit_subscribe_remote_state_subscribe_remote_state_md_da5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ipc-kit-subscribe-remote-state-subscribe-remote-state-md-da5.json
var site_docs_ipc_kit_subscribe_remote_state_subscribe_remote_state_md_da5_namespaceObject = JSON.parse('{"id":"ipc-kit/subscribe-remote-state/subscribe-remote-state","title":"远端状态订阅开发实例","description":"IPC/RPC提供了订阅远端Stub对象状态的机制。当远端Stub对象死亡时，可以自动触发本端Proxy注册的死亡通知。这种死亡通知订阅需要调用指定接口registerDeathRecipient完成。不再需要订阅时，也需要调用指定接口unregisterDeathRecipient取消订阅。","source":"@site/docs/ipc-kit/subscribe-remote-state/subscribe-remote-state.md","sourceDirName":"ipc-kit/subscribe-remote-state","slug":"/ipc-kit/subscribe-remote-state/","permalink":"/harmonyos-docs-site/ipc-kit/subscribe-remote-state/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"远端状态订阅开发实例","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-remote-state","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"IPC与RPC通信开发指导(C/C++)","permalink":"/harmonyos-docs-site/ipc-kit/ipc-capi-development-guideline/"},"next":{"title":"国际化和本地化概述","permalink":"/harmonyos-docs-site/localization-kit/i18n-l10n/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ipc-kit/subscribe-remote-state/subscribe-remote-state.md


const frontMatter = {
	title: '远端状态订阅开发实例',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-remote-state',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '远端状态订阅开发实例';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "ArkTS侧接口",
  "id": "arkts侧接口",
  "level": 2
}, {
  "value": "参考代码",
  "id": "参考代码",
  "level": 3
}, {
  "value": "Stub反向感知Proxy死亡状态（匿名Stub的特殊用法）",
  "id": "stub反向感知proxy死亡状态匿名stub的特殊用法",
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
        id: "远端状态订阅开发实例",
        children: "远端状态订阅开发实例"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IPC/RPC提供了订阅远端Stub对象状态的机制。当远端Stub对象死亡时，可以自动触发本端Proxy注册的死亡通知。这种死亡通知订阅需要调用指定接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#registerdeathrecipient9-1",
        children: "registerDeathRecipient"
      }), "完成。不再需要订阅时，也需要调用指定接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#unregisterdeathrecipient9-1",
        children: "unregisterDeathRecipient"
      }), "取消订阅。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用这种订阅机制的用户需要继承死亡通知类", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#deathrecipient",
        children: "DeathRecipient"
      }), "，并实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#onremotedied",
        children: "onRemoteDied"
      }), "方法清理资源。该方法会在远端Stub对象所在进程退出或当前RPC通信依赖的软总线连接断开时被回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(823291)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首先，Proxy订阅Stub死亡通知，若在订阅期间Stub状态正常，则在不再需要时取消订阅。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其次，若在订阅期间，Stub所在进程退出或当前RPC通信依赖的软总线连接断开，则会自动触发执行业务已向Proxy注册的自定义的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#onremotedied",
          children: "onRemoteDied"
        }), "方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPC/RPC的订阅机制适用于以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPC通信，Proxy对象需要感知远端Stub对象所在进程的状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RPC通信，Proxy对象需要感知远端Stub对象所在进程的状态，或者RPC通信依赖的软总线连接断开。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Proxy感知到Stub端死亡后，应该清理本地Proxy对象以及相关资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535645)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RPC不支持匿名Stub对象（没有向SAMgr注册）的死亡通知，IPC支持匿名Stub对象的死亡通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts侧接口",
      children: "ArkTS侧接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464181)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此文档中的示例代码描述的是系统应用跨进程通信。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用场景约束：客户端是第三方/系统应用，服务端是系统应用/服务"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "返回值类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#registerdeathrecipient9-1",
              children: "registerDeathRecipient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册用于接收远程对象死亡通知的回调，该方法应该在proxy侧调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#unregisterdeathrecipient9-1",
              children: "unregisterDeathRecipient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销用于接收远程对象死亡通知的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#onremotedied",
              children: "onRemoteDied"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy侧注册死亡通知成功后，当远端Stub对象所在进程死亡时，将自动回调本方法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参考代码",
      children: "参考代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在IPC（同设备的跨进程通信）场景中，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入相关依赖，并定义所需的变量；"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, common } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { PromptAction  } from '@kit.ArkUI';\nimport { JSON } from '@kit.ArkTS';\n\nlet proxy: rpc.IRemoteObject | undefined;\nlet connectId: number | undefined;\n\n// 死亡通知\nclass MyDeathRecipient implements rpc.DeathRecipient {\n  onRemoteDied() {\n    hilog.info(0x0000, 'testTag', 'server is dead');\n  }\n}\nlet deathRecipient = new MyDeathRecipient();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接服务，获取代理对象，然后注册死亡监听。在断开连接时，移除死亡监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 连接服务\nfunction connectAbility(context:common.UIAbilityContext, promptAction: PromptAction) {\n  hilog.info(0x00000, 'testTag', 'begin to connect Ability');\n  let want: Want = {\n    bundleName: 'com.example.ipc_stub',\n    abilityName: 'ServiceAbility',\n  };\n  let connect: common.ConnectOptions = {\n    onConnect: (elementName, remoteProxy) => {\n      hilog.info(0x00000, 'testTag', 'onConnect. elementName is :' + JSON.stringify(elementName));\n      proxy = remoteProxy;\n      // 客户端注册死亡监听\n      try {\n        proxy.registerDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'registerDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'register failed, code is ' + code + ', message is ' + message);\n      }\n      // ...\n    },\n\n    onDisconnect: (elementName) => {\n      hilog.info(0x0000, 'testTag', 'onDisconnect. elementName is ' + JSON.stringify(elementName));\n      // 客户端移除死亡监听\n      try {\n        proxy?.unregisterDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'unregisterDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'unregister failed, code is ' + code + ', message is ' + message);\n      }\n      proxy = undefined;\n      // ...\n    },\n\n    onFailed: (code: number) => {\n      hilog.info(0x0000, 'testTag', 'onFailed. code is ' + code);\n      // ...\n    },\n  }\n\n  try {\n    connectId = context.connectServiceExtensionAbility(want, connect);\n    hilog.info(0x00000, 'testTag', 'begin to connect Ability end');\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'connectAbility failed, code is ' + code + ', message is ' + message);\n  }\n}\n\n// 断开连接\nfunction disconnectAbility(context: common.UIAbilityContext) {\n  hilog.info(0x00000, 'testTag', 'begin to disconnect Ability. connectId is ' + connectId);\n  if (connectId != undefined) {\n    try {\n      context.disconnectServiceExtensionAbility(connectId);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(0x0000, 'testTag', 'disconnect failed, code is ' + code + ', message is ' + message);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RPC（跨设备的跨进程通信）场景中，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入相关依赖，并定义所需的变量；"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit';\nimport { abilityAccessCtrl, PermissionRequestResult, common, Want} from '@kit.AbilityKit';\nimport { JSON } from '@kit.ArkTS';\nimport { PromptAction  } from '@kit.ArkUI';\n\nlet proxy: rpc.IRemoteObject | undefined;\nlet connectId: number | undefined;\nlet dmInstance: distributedDeviceManager.DeviceManager;\nlet deviceList: Array<distributedDeviceManager.DeviceBasicInfo> | undefined;\nlet deviceId: string| undefined;\n\n// 死亡通知\nclass MyDeathRecipient implements rpc.DeathRecipient {\n  onRemoteDied() {\n    hilog.info(0x0000, 'testTag', 'server is dead');\n  }\n};\nlet deathRecipient = new MyDeathRecipient();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissiondistributed_datasync",
        children: "允许多设备协同的权限"
      }), "，在组网的情况下获取到对端的设备ID（组网场景下对应设备的唯一网络标识符，可以使用distributedDeviceManager获取目标设备的NetworkId）后连接服务，获取代理对象并注册死亡监听。当代理对象与服务端的通信结束后，在断开连接时，移除死亡监听。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取权限\nfunction getPermission(context:common.UIAbilityContext) {\n  hilog.info(0x00000, 'testTag', 'begin to requestPermissions');\n  try {\n    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(context, ['ohos.permission.DISTRIBUTED_DATASYNC'],\n      (err: BusinessError, data: PermissionRequestResult) => {\n      if (err) {\n        hilog.error(0x0000, 'testTag', 'requestPermissions failed, code is ' + err.code);\n        hilog.error(0x0000, 'testTag', 'requestPermissions failed, message is ' + err.message);\n      } else {\n        hilog.info(0x0000, 'testTag', 'requestPermissions success, result is ' + JSON.stringify(data));\n        hilog.info(0x0000, 'testTag', 'data permissions is ' + data.permissions);\n        hilog.info(0x0000, 'testTag', 'data authResults is ' + data.authResults);\n        hilog.info(0x0000, 'testTag', 'data dialogShownResults is ' + data.dialogShownResults);\n      }\n    });\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'getPermission failed, code is ' + code + ', message is ' + message);\n  }\n}\n\n// 获取对端设备信息\nfunction getDeviceId(promptAction: PromptAction) {\n  hilog.info(0x00000, 'testTag', 'begin to getDeviceId');\n  try {\n    dmInstance = distributedDeviceManager.createDeviceManager('com.example.rpc_client');\n    hilog.info(0x0000, 'testTag', 'createDeviceManager success');\n    deviceList = dmInstance.getAvailableDeviceListSync();\n    hilog.info(0x0000, 'testTag', 'deviceList is ' + JSON.stringify(deviceList));\n    if (deviceList.length !== 0) {\n      deviceId = deviceList[0].networkId;\n      hilog.info(0x0000, 'testTag', 'networkId is ' + deviceId);\n      // ...\n    }\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'getDeviceId failed, code is ' + code + ', message is ' + message);\n    // ...\n  }\n}\n\n// 连接服务\nfunction connectAbility(context:common.UIAbilityContext, promptAction: PromptAction) {\n  hilog.info(0x00000, 'testTag', 'begin to connect Ability');\n  let want: Want = {\n    bundleName: 'com.example.rpc_stub',\n    abilityName: 'ServiceAbility',\n    deviceId: deviceId,\n  }\n\n  let connect: common.ConnectOptions = {\n    onConnect: (elementName, remoteProxy) => {\n      hilog.info(0x00000, 'testTag', 'onConnect. elementName is ' + JSON.stringify(elementName));\n      proxy = remoteProxy;\n      // 客户端注册死亡监听\n      try {\n        proxy.registerDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'registerDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'register failed, code is ' + code + ', message is ' + message);\n      };\n      // ...\n    },\n    onDisconnect: (elementName) => {\n      hilog.info(0x0000, 'testTag', 'onDisconnect. elementName is ' + JSON.stringify(elementName));\n      // 客户端移除死亡监听\n      try {\n        proxy?.unregisterDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'unregisterDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'unregister failed, code is ' + code + ', message is ' + message);\n      }\n      proxy = undefined;\n      // ...\n    },\n    onFailed: (code: number) => {\n      hilog.info(0x0000, 'testTag', 'onFailed. code is ' + code);\n      // ...\n    },\n  }\n\n  try {\n    connectId = context.connectServiceExtensionAbility(want, connect);\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'connectService failed, code is ' + code + ', message is ' + message);\n  }\n}\n\n// 断开连接\nfunction disconnectAbility(context: common.UIAbilityContext) {\n  hilog.info(0x00000, 'testTag', 'begin to disconnect Ability');\n  if (connectId != undefined) {\n    try {\n      context.disconnectServiceExtensionAbility(connectId);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(0x0000, 'testTag', 'disconnectService failed, code is ' + code + ', message is ' + message);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stub反向感知proxy死亡状态匿名stub的特殊用法",
      children: "Stub反向感知Proxy死亡状态（匿名Stub的特殊用法）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["正向的死亡通知是Proxy感知Stub的状态，要实现反向的死亡通知（即Stub感知Proxy的状态），可以利用反向死亡通知。例如，进程A（原Stub所在进程）和进程B（原Proxy所在进程），进程B获取到进程A的原Proxy对象后，在B进程新建一个匿名Stub对象（未向SAMgr注册），称为回调Stub，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#sendmessagerequest9-2",
        children: "sendMessageRequest"
      }), "接口将回调Stub传给进程A的原Stub，进程A就可以获取到进程B的回调Proxy。只要向回调Proxy注册了死亡通知，当进程B（回调Stub）死亡或者RPC通信依赖的软总线连接断开时，回调Proxy会感知并通知进程A（原Stub），从而实现反向死亡通知。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(12976)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "反向死亡通知仅限设备内跨进程通信使用，不可用于跨设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当匿名Stub对象没有被任何一个Proxy引用时，对象会被自动释放。"
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
464181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
535645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
12976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
823291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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