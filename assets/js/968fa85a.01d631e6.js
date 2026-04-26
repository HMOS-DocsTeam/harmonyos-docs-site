"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["972450"], {
325327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ipc_kit_ipc_rpc_development_guideline_ipc_rpc_development_guideline_md_968_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ipc-kit-ipc-rpc-development-guideline-ipc-rpc-development-guideline-md-968.json
var site_docs_ipc_kit_ipc_rpc_development_guideline_ipc_rpc_development_guideline_md_968_namespaceObject = JSON.parse('{"id":"ipc-kit/ipc-rpc-development-guideline/ipc-rpc-development-guideline","title":"IPC与RPC通信开发指导(ArkTS)","description":"场景介绍","source":"@site/docs/ipc-kit/ipc-rpc-development-guideline/ipc-rpc-development-guideline.md","sourceDirName":"ipc-kit/ipc-rpc-development-guideline","slug":"/ipc-kit/ipc-rpc-development-guideline/","permalink":"/harmonyos-docs-site/ipc-kit/ipc-rpc-development-guideline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"IPC与RPC通信开发指导(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ipc-rpc-development-guideline","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"IPC Kit简介","permalink":"/harmonyos-docs-site/ipc-kit/ipc-rpc-overview/"},"next":{"title":"IPC与RPC通信开发指导(C/C++)","permalink":"/harmonyos-docs-site/ipc-kit/ipc-capi-development-guideline/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ipc-kit/ipc-rpc-development-guideline/ipc-rpc-development-guideline.md


const frontMatter = {
	title: 'IPC与RPC通信开发指导(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ipc-rpc-development-guideline',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'IPC与RPC通信开发指导(ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "客户端实现",
  "id": "客户端实现",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ipc与rpc通信开发指导arkts",
        children: "IPC与RPC通信开发指导(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPC/RPC的主要工作是跨进程建立对象通信的连接（客户端进程的Proxy和服务端进程的Stub建立一一对应关系），从而通过Proxy的接口可以和Stub进行IPC/RPC通信。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(741280)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在进行IPC&RPC跨进程通信前需要通过Ability Kit获取服务端的代理对象。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持三方应用实现跨进程通信，三方应用仅可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#connectserviceextensionability",
          children: "connectServiceExtensionAbility"
        }), "连接系统提供的ServiceExtensionAbility，通过返回的代理对", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
          children: "ServiceExtensionAbility"
        }), "进行通信从而达到三方应用和系统服务通信的目的。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 20开始，在2in1设备上，开发者可使用AppServiceExtensionAbility组件，为应用提供后台服务能力。三方应用可", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#connectappserviceextensionability20",
          children: "connectAppServiceExtensionAbility"
        }), "连接AppServiceExtensionAbility，通过返回的代理对象和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
          children: "AppServiceExtensionAbility"
        }), "进行通信从而达到三方和三方应用通信的目的。详细开发步骤参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability#%E8%BF%9E%E6%8E%A5%E4%B8%80%E4%B8%AA%E5%90%8E%E5%8F%B0%E6%9C%8D%E5%8A%A1",
          children: "AppServiceExtensionAbility"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["三方应用之间也可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-subscription",
          children: "动态订阅公共事件"
        }), "进行进程间通信。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完整的IPC&RPC通信开发流程涉及系统ServiceExtensionAbility的实现，故本篇指南仅提供客户端示例代码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端实现",
      children: "客户端实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建变量want，指定要连接的Ability所在应用的包名、组件名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建变量connect，指定连接成功、连接失败和断开连接时的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "连接服务，获取服务代理对象Proxy，并注册死亡监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "客户端发送消息给服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通信结束后，断开连接，移除服务代理对象Proxy的死亡监听。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(319963)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在本文档的示例中，通过this.getUIContext().getHostContext()来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
          children: "获取UIAbility的上下文信息"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在IPC（同设备的跨进程通信）场景中，客户端的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入相关依赖，并定义所需的变量；"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, common } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { PromptAction  } from '@kit.ArkUI';\nimport { JSON } from '@kit.ArkTS';\n\nlet proxy: rpc.IRemoteObject | undefined;\nlet connectId: number | undefined;\n\n// 死亡通知\nclass MyDeathRecipient implements rpc.DeathRecipient {\n  onRemoteDied() {\n    hilog.info(0x0000, 'testTag', 'server is dead');\n  }\n}\nlet deathRecipient = new MyDeathRecipient();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接服务，获取代理对象，发送信息给服务端，通信结束后断开连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 连接服务\nfunction connectAbility(context:common.UIAbilityContext, promptAction: PromptAction) {\n  hilog.info(0x00000, 'testTag', 'begin to connect Ability');\n  let want: Want = {\n    bundleName: 'com.example.ipc_stub',\n    abilityName: 'ServiceAbility',\n  };\n  let connect: common.ConnectOptions = {\n    onConnect: (elementName, remoteProxy) => {\n      hilog.info(0x00000, 'testTag', 'onConnect. elementName is :' + JSON.stringify(elementName));\n      proxy = remoteProxy;\n      // 客户端注册死亡监听\n      try {\n        proxy.registerDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'registerDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'register failed, code is ' + code + ', message is ' + message);\n      }\n      // ...\n    },\n\n    onDisconnect: (elementName) => {\n      hilog.info(0x0000, 'testTag', 'onDisconnect. elementName is ' + JSON.stringify(elementName));\n      // 客户端移除死亡监听\n      try {\n        proxy?.unregisterDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'unregisterDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'unregister failed, code is ' + code + ', message is ' + message);\n      }\n      proxy = undefined;\n      // ...\n    },\n\n    onFailed: (code: number) => {\n      hilog.info(0x0000, 'testTag', 'onFailed. code is ' + code);\n      // ...\n    },\n  }\n\n  try {\n    connectId = context.connectServiceExtensionAbility(want, connect);\n    hilog.info(0x00000, 'testTag', 'begin to connect Ability end');\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'connectAbility failed, code is ' + code + ', message is ' + message);\n  }\n}\n\n// 断开连接\nfunction disconnectAbility(context: common.UIAbilityContext) {\n  hilog.info(0x00000, 'testTag', 'begin to disconnect Ability. connectId is ' + connectId);\n  if (connectId != undefined) {\n    try {\n      context.disconnectServiceExtensionAbility(connectId);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(0x0000, 'testTag', 'disconnect failed, code is ' + code + ', message is ' + message);\n    }\n  }\n}\n\n// 发送消息\nasync function sendString(promptAction: PromptAction) : Promise <void> {\n  hilog.info(0x00000, 'testTag', 'begin to send String');\n  let option = new rpc.MessageOption();\n  let data = rpc.MessageSequence.create();\n  let reply = rpc.MessageSequence.create();\n  // 在data里写入参数，以传递字符串为例\n  data.writeString('hello world');\n  if (proxy != undefined) {\n    await proxy.sendMessageRequest(1, data, reply, option)\n      .then((result: rpc.RequestResult) => {\n        if (result.errCode != 0) {\n          hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, errCode is ' + result.errCode);\n        }\n        // 从result.reply里读取结果\n        let str = result.reply.readString();\n        hilog.info(0x0000, 'testTag', 'sendMessageRequest receive str is ' + str);\n        // ...\n      })\n      .catch((e: Error) => {\n        hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error is ' + JSON.stringify(e));\n        // ...\n      })\n      .finally(() => {\n        data.reclaim();\n        reply.reclaim();\n      })\n  } else {\n    hilog.error(0x0000, 'testTag', 'proxy is invalid');\n    // ...\n  }\n  hilog.info(0x0000, 'testTag', 'sendString end');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RPC（跨设备的跨进程通信）场景中，具体客户端的示例如下："
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
      }), "，在组网的情况下获取到对端的设备ID（组网场景下对应设备的唯一网络标识符，可以使用distributedDeviceManager获取目标设备的NetworkId）后连接服务，获取代理对象并发送信息给服务端，当代理对象与服务端的通信结束后，进行断连。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取权限\nfunction getPermission(context:common.UIAbilityContext) {\n  hilog.info(0x00000, 'testTag', 'begin to requestPermissions');\n  try {\n    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(context, ['ohos.permission.DISTRIBUTED_DATASYNC'],\n      (err: BusinessError, data: PermissionRequestResult) => {\n      if (err) {\n        hilog.error(0x0000, 'testTag', 'requestPermissions failed, code is ' + err.code);\n        hilog.error(0x0000, 'testTag', 'requestPermissions failed, message is ' + err.message);\n      } else {\n        hilog.info(0x0000, 'testTag', 'requestPermissions success, result is ' + JSON.stringify(data));\n        hilog.info(0x0000, 'testTag', 'data permissions is ' + data.permissions);\n        hilog.info(0x0000, 'testTag', 'data authResults is ' + data.authResults);\n        hilog.info(0x0000, 'testTag', 'data dialogShownResults is ' + data.dialogShownResults);\n      }\n    });\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'getPermission failed, code is ' + code + ', message is ' + message);\n  }\n}\n\n// 获取对端设备信息\nfunction getDeviceId(promptAction: PromptAction) {\n  hilog.info(0x00000, 'testTag', 'begin to getDeviceId');\n  try {\n    dmInstance = distributedDeviceManager.createDeviceManager('com.example.rpc_client');\n    hilog.info(0x0000, 'testTag', 'createDeviceManager success');\n    deviceList = dmInstance.getAvailableDeviceListSync();\n    hilog.info(0x0000, 'testTag', 'deviceList is ' + JSON.stringify(deviceList));\n    if (deviceList.length !== 0) {\n      deviceId = deviceList[0].networkId;\n      hilog.info(0x0000, 'testTag', 'networkId is ' + deviceId);\n      // ...\n    }\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'getDeviceId failed, code is ' + code + ', message is ' + message);\n    // ...\n  }\n}\n\n// 连接服务\nfunction connectAbility(context:common.UIAbilityContext, promptAction: PromptAction) {\n  hilog.info(0x00000, 'testTag', 'begin to connect Ability');\n  let want: Want = {\n    bundleName: 'com.example.rpc_stub',\n    abilityName: 'ServiceAbility',\n    deviceId: deviceId,\n  }\n\n  let connect: common.ConnectOptions = {\n    onConnect: (elementName, remoteProxy) => {\n      hilog.info(0x00000, 'testTag', 'onConnect. elementName is ' + JSON.stringify(elementName));\n      proxy = remoteProxy;\n      // 客户端注册死亡监听\n      try {\n        proxy.registerDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'registerDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'register failed, code is ' + code + ', message is ' + message);\n      };\n      // ...\n    },\n    onDisconnect: (elementName) => {\n      hilog.info(0x0000, 'testTag', 'onDisconnect. elementName is ' + JSON.stringify(elementName));\n      // 客户端移除死亡监听\n      try {\n        proxy?.unregisterDeathRecipient(deathRecipient, 0);\n        hilog.info(0x00000, 'testTag', 'unregisterDeathRecipient success');\n      } catch (err) {\n        let code = (err as BusinessError).code;\n        let message = (err as BusinessError).message;\n        hilog.error(0x0000, 'testTag', 'unregister failed, code is ' + code + ', message is ' + message);\n      }\n      proxy = undefined;\n      // ...\n    },\n    onFailed: (code: number) => {\n      hilog.info(0x0000, 'testTag', 'onFailed. code is ' + code);\n      // ...\n    },\n  }\n\n  try {\n    connectId = context.connectServiceExtensionAbility(want, connect);\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let message = (err as BusinessError).message;\n    hilog.error(0x0000, 'testTag', 'connectService failed, code is ' + code + ', message is ' + message);\n  }\n}\n\n// 断开连接\nfunction disconnectAbility(context: common.UIAbilityContext) {\n  hilog.info(0x00000, 'testTag', 'begin to disconnect Ability');\n  if (connectId != undefined) {\n    try {\n      context.disconnectServiceExtensionAbility(connectId);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(0x0000, 'testTag', 'disconnectService failed, code is ' + code + ', message is ' + message);\n    }\n  }\n}\n\n// 发送消息\nasync function sendString(promptAction: PromptAction) : Promise <void> {\n  hilog.info(0x00000, 'testTag', 'begin to send string');\n  let option = new rpc.MessageOption();\n  let data = rpc.MessageSequence.create();\n  let reply = rpc.MessageSequence.create();\n  // 在data里写入参数，以传递字符串为例\n  data.writeString('hello world');\n\n  if (proxy != undefined) {\n    await proxy.sendMessageRequest(1, data, reply, option)\n      .then((result: rpc.RequestResult) => {\n        if (result.errCode != 0) {\n          hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, errCode is ' + result.errCode);\n        }\n        // 从result.reply里读取结果\n        let str = result.reply.readString();\n        hilog.info(0x0000, 'testTag', 'sendMessageRequest receive str is ' + str);\n        // 弹窗显示发送消息成功\n        // ...\n      })\n      .catch((e: Error) => {\n        hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error is ' + JSON.stringify(e));\n        // 弹窗显示发送消息失败\n        // ...\n      })\n      .finally(() => {\n        data.reclaim();\n        reply.reclaim();\n      })\n  } else {\n    hilog.error(0x0000, 'testTag', 'proxy is invalid');\n    // 弹窗显示发送消息失败\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758738)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以下完整示例涉及到ServiceExtensionAbility，需要使用full-SDK。参考示例前，请先阅读对应示例的ReadMe进行相应的配置后，再进行编译。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对IPC与RPC通信开发，端到端的完整示例，请参考："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/SystemFeature/IPC/ObjectTransfer",
          children: "IPC通信完整示例-使用Parcelable/ArrayBuffer通信"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/IPC/IPC_sendMessage",
          children: "IPC通信完整示例-传递字符串及死亡监听使用"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/IPC/RPC_sendMessage",
          children: "RPC通信完整示例-传递字符串及死亡监听使用"
        })
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
319963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
758738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
741280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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