"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["163973"], {
807363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_subscriber_extension_ion_subscriber_extension_ability_development_steps_ion_subscriber_extension_ability_development_steps_md_29a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-subscriber-extension-ion-subscriber-extension-ability-development-steps-ion-subscriber-extension-ability-development-steps-md-29a.json
var site_docs_notification_kit_notification_subscriber_extension_ion_subscriber_extension_ability_development_steps_ion_subscriber_extension_ability_development_steps_md_29a_namespaceObject = JSON.parse('{"id":"notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps/ion-subscriber-extension-ability-development-steps","title":"通知订阅扩展能力开发步骤","description":"接口说明","source":"@site/docs/notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps/ion-subscriber-extension-ability-development-steps.md","sourceDirName":"notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps","slug":"/notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps/","permalink":"/harmonyos-docs-site/notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通知订阅扩展能力开发步骤","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ion-subscriber-extension-ability-development-steps","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NotificationSubscriberExtensionAbility (开发概述)","permalink":"/harmonyos-docs-site/notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability/"},"next":{"title":"应用内通知设置快捷入口开发指导","permalink":"/harmonyos-docs-site/notification-kit/notification-shortcut-settings/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps/ion-subscriber-extension-ability-development-steps.md


const frontMatter = {
	title: '通知订阅扩展能力开发步骤',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ion-subscriber-extension-ability-development-steps',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通知订阅扩展能力开发步骤';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "传统蓝牙连接示例",
  "id": "传统蓝牙连接示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通知订阅扩展能力开发步骤",
        children: "通知订阅扩展能力开发步骤"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability#ondestroy",
              children: "onDestroy(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知订阅扩展被销毁时的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability#onreceivemessage",
              children: "onReceiveMessage(notificationInfo: NotificationInfo): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到通知时的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability#oncancelmessages",
              children: "onCancelMessages(hashCodes: Array<string>): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消通知时的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionsubscribe_notification",
        children: "ohos.permission.SUBSCRIBE_NOTIFICATION"
      }), "权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability",
        children: "NotificationSubscriberExtensionAbility"
      }), "提供方时，需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-tools-overview",
        children: "DevEco Studio"
      }), "工程中新建一个NotificationSubscriberExtensionAbility。具体步骤如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry/src/main/ets/创建目录extensionability。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry/src/main/ets/extensionability目录下创建NotificationSubscriberExtAbility.ets，其内容如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { notificationExtensionSubscription, NotificationSubscriberExtensionAbility } from '@kit.NotificationKit';\n// ...\n\nconst DOMAIN = 0x0000;\n// ...\nexport class NotificationSubscriberExtAbility extends NotificationSubscriberExtensionAbility {\n  // ...\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', 'onDestroy');\n    // ...\n  }\n  // ...\n  onReceiveMessage(notificationInfo: notificationExtensionSubscription.NotificationInfo): void {\n    hilog.info(DOMAIN, 'testTag', `on receive message ${JSON.stringify(notificationInfo)}`)\n    // ...\n  }\n  // ...\n  onCancelMessages(hashCodes: Array<string>): void {\n    hilog.info(DOMAIN, 'testTag', `on cancel message ${JSON.stringify(hashCodes)}`)\n    // ...\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/connectivity-kit/connectivity-kit-intro#%E8%93%9D%E7%89%99%E7%AE%80%E4%BB%8B",
            children: "蓝牙模块"
          }), "接口与穿戴设备配对（蓝牙处于配对状态）并获取地址，然后通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationextensionsubscription/js-apis-notificationextensionsubscription#notificationextensionsubscriptionsubscribe",
            children: "subscribe"
          }), "/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationextensionsubscription/js-apis-notificationextensionsubscription#notificationextensionsubscriptionunsubscribe",
            children: "unsubscribe"
          }), "接口订阅或取消订阅通知。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability",
            children: "NotificationSubscriberExtensionAbility"
          }), "后，还需要在合适的时机调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationextensionsubscription/js-apis-notificationextensionsubscription#notificationextensionsubscriptionopensubscriptionsettings",
            children: "openSubscriptionSettings"
          }), "接口，打开通知扩展订阅设置页面，引导用户授予获取本机通知的权限，该页面以半模态弹窗显示。建议在设备管理页面提供一个通知授权的按钮，用户点击按钮则调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationextensionsubscription/js-apis-notificationextensionsubscription#notificationextensionsubscriptionopensubscriptionsettings",
            children: "openSubscriptionSettings"
          }), "接口。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用的module.json5文件中配置extensionAbilities。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"NotificationSubscriberExtAbility\",\n  \"srcEntry\": \"./ets/extensionability/NotificationSubscriberExtAbility.ets\",\n  \"type\": \"notificationSubscriber\",\n  \"description\": \"$string:NotificationSubscriberExtAbility_desc\",\n  \"icon\": \"$media:layered_image\",\n  \"label\": \"$string:NotificationSubscriberExtAbility_label\",\n  \"exported\": true\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用的string.json文件中添加"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  {\n    \"name\": \"NotificationSubscriberExtAbility_desc\",\n    \"value\": \"description\"\n  },\n  {\n    \"name\": \"NotificationSubscriberExtAbility_label\",\n    \"value\": \"ThirdPartyWearableApp\"\n  }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "传统蓝牙连接示例",
      children: "传统蓝牙连接示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例仅为传统蓝牙连接示例，开发者也可选用低功耗蓝牙连接方式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户收到消息后，假如蓝牙连接是无效的，则建立蓝牙连接。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "假如蓝牙连接已经存在，则直接使用这个连接发送消息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果使用该连接发送消息失败，则重新建立连接，如果连接能建立成功则发送消息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要申请权限ohos.permission.ACCESS_BLUETOOTH。如何配置和申请权限，具体操作请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { notificationExtensionSubscription, NotificationSubscriberExtensionAbility } from '@kit.NotificationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { socket } from '@kit.ConnectivityKit'\nimport { util } from '@kit.ArkTS';\n\nconst DOMAIN = 0x0000;\nclass TransferInfo {\n  public type: string = ''\n  public info: notificationExtensionSubscription.NotificationInfo | undefined\n  public cancelHashCodes: Array<string> | undefined\n}\n// Spp means Serial Port Profile\nclass SppClientManager {\n  private clientNumber: number = -1;\n  private peerDevice: string = '';\n\n  constructor(peerDevice: string) {\n    this.peerDevice = peerDevice\n  }\n\n  public isConnect(): boolean {\n    return this.clientNumber !== -1;\n  }\n\n  public async startConnect(): Promise<boolean> {\n    let option: socket.SppOptions = {\n      uuid: '00009999-0000-1000-8000-00805F9B34FB',\n      secure: false,\n      type: socket.SppType.SPP_RFCOMM\n    };\n    socket.sppConnect(this.peerDevice, option, (err: BusinessError, num: number) => {\n      if (err) {\n        hilog.error(DOMAIN, 'testTag', `cpp connect failed, errCode: ${err.code}, errMessage: ${err.message}`);\n      } else {\n        hilog.info(DOMAIN, 'testTag', `spp connect success clientNumber: ${num}`);\n        this.clientNumber = num;\n      }\n    });\n    return true\n  }\n\n  private sendData(jsonStr: string) {\n    if (!this.isConnect()) {\n      hilog.error(DOMAIN, 'testTag', `server is not connected`);\n      return;\n    }\n    if (!jsonStr) {\n      hilog.error(DOMAIN, 'testTag', 'json is empty');\n      return;\n    }\n    hilog.info(DOMAIN, 'testTag', `prepare sending data to client ${this.clientNumber}`);\n    const textEncoder:util.TextEncoder = new util.TextEncoder();\n    const uint8Array: Uint8Array = textEncoder.encodeInto(jsonStr);\n    const arrayBuffer = uint8Array.buffer;\n\n    socket.sppWrite(this.clientNumber, arrayBuffer);\n    hilog.info(DOMAIN, 'testTag', `sending success size: ${arrayBuffer.byteLength} bytes, data: ${jsonStr}`);\n  }\n\n  public sendNotificationData(notificationInfo: notificationExtensionSubscription.NotificationInfo) {\n    let info: TransferInfo = {\n      type: 'publish',\n      info: notificationInfo,\n      cancelHashCodes: undefined\n    };\n\n    let jsonStr = JSON.stringify(info);\n    this.sendData(jsonStr);\n  }\n\n  public sendCancelNotificationData(cancelHashCodes: Array<string>) {\n    let info: TransferInfo = {\n      type: 'cancel',\n      cancelHashCodes: cancelHashCodes,\n      info: undefined\n    };\n\n    let jsonStr = JSON.stringify(info);\n    this.sendData(jsonStr);\n  }\n\n  public read = (dataBuffer: ArrayBuffer) => {\n    let data = new Uint8Array(dataBuffer);\n    hilog.info(DOMAIN, 'testTag', `client data: ${JSON.stringify(data)}`);\n  };\n\n  public stopConnect() {\n    hilog.info(DOMAIN, 'testTag', `closeSppClient ${this.clientNumber}`);\n    try {\n      socket.off('sppRead', this.clientNumber, this.read);\n    } catch (err) {\n      hilog.error(DOMAIN, 'testTag', `off sppRead errCode: ${err.code}, errMessage: ${err.message}`);\n    }\n    try {\n      socket.sppCloseClientSocket(this.clientNumber);\n      this.clientNumber = -1;\n    } catch (err) {\n      hilog.error(DOMAIN, 'testTag', `stopConnect errCode: ${err.code}, errMessage: ${err.message}`);\n    }\n  }\n}\n\n// export SppClientManager;\nexport class NotificationSubscriberExtAbility extends NotificationSubscriberExtensionAbility {\n  private sppClientManager: SppClientManager | undefined;\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', 'onDestroy');\n    this.sppClientManager!.stopConnect();\n  }\n  // Called back when a notification is published.\n  onReceiveMessage(notificationInfo: notificationExtensionSubscription.NotificationInfo): void {\n    hilog.info(DOMAIN, 'testTag', `on receive message ${JSON.stringify(notificationInfo)}`)\n    notificationExtensionSubscription.getSubscribeInfo()\n      .then(async (info) => {\n        if (this.sppClientManager == undefined) {\n          this.sppClientManager = new SppClientManager(info[0].addr);\n        }\n        if (this.sppClientManager.isConnect()) {\n          this.sendPublishWithRetry(notificationInfo);\n        } else {\n          try {\n            await this.sppClientManager.startConnect().then(() => {\n              hilog.info(DOMAIN, 'testTag', `startConnect success`);\n            });\n          } catch (err) {\n            hilog.error(DOMAIN, 'testTag', `Failed to start connect: ${JSON.stringify(err)}`);\n          }\n          setTimeout(() => {\n            this.sendPublishWithRetry(notificationInfo);\n          }, 3000)\n        }\n      }).catch((err: BusinessError) => {\n      hilog.error(DOMAIN, 'testTag',\n        `notificationExtensionSubscription failed, errCode ${err.code}, errorMessage ${err.message}`);\n    });\n  }\n  // Sends a publish notification and retries once upon failure.\n  private async sendPublishWithRetry(notificationInfo: notificationExtensionSubscription.NotificationInfo) {\n    try {\n      this.sppClientManager!.sendNotificationData(notificationInfo);\n    } catch (err) {\n      hilog.error(DOMAIN, 'testTag', `send failed, errCode ${err.code}, errorMessage ${err.message}, and retry one times`);\n      try {\n        await this.sppClientManager!.startConnect().then(() => {\n          hilog.info(DOMAIN, 'testTag', `startConnect success`);\n        });\n      } catch (err) {\n        hilog.error(DOMAIN, 'testTag', `Failed to start connect: ${JSON.stringify(err)}`);\n      }\n      setTimeout(() => {\n        this.sppClientManager!.sendNotificationData(notificationInfo);\n      }, 3000);\n    }\n  }\n\n  // Called back when notifications are cancelled.\n  onCancelMessages(hashCodes: Array<string>): void {\n    hilog.info(DOMAIN, 'testTag', `on cancel message ${JSON.stringify(hashCodes)}`)\n    notificationExtensionSubscription.getSubscribeInfo()\n      .then(async (info) => {\n        if (this.sppClientManager == undefined) {\n          this.sppClientManager = new SppClientManager(info[0].addr);\n        }\n        if (this.sppClientManager.isConnect()) {\n          this.sendCancelWithRetry(hashCodes);\n        } else {\n          try {\n            await this.sppClientManager.startConnect().then(() => {\n              hilog.info(DOMAIN, 'testTag', `startConnect success`);\n            });\n          } catch (err) {\n            hilog.error(DOMAIN, 'testTag', `Failed to start connect: ${JSON.stringify(err)}`);\n          }\n          setTimeout(() => {\n            this.sendCancelWithRetry(hashCodes);\n          }, 3000)\n        }\n      }).catch((err: BusinessError) => {\n      hilog.error(DOMAIN, 'testTag', `notificationExtensionSubscription failed, errCode ${err.code}, errorMessage ${err.message}`);\n    });\n  }\n  // Retries a cancel operation if it fails.\n  private async sendCancelWithRetry(hashCodes: string[]) {\n    try {\n      this.sppClientManager!.sendCancelNotificationData(hashCodes);\n    } catch (err) {\n      hilog.error(DOMAIN, 'testTag', `send failed, errCode ${err.code}, errorMessage ${err.message}, and retry one times`);\n      try {\n        await this.sppClientManager!.startConnect().then(() => {\n          hilog.info(DOMAIN, 'testTag', `startConnect success`);\n        });\n      } catch (err) {\n        hilog.error(DOMAIN, 'testTag', `Failed to start connect: ${JSON.stringify(err)}`);\n      }\n      setTimeout(() => {\n        this.sppClientManager!.sendCancelNotificationData(hashCodes);\n      }, 3000);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意：请勿频繁建立连接，可能会影响功能。"
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