"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["769331"], {
583920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_wallet_kit_guide_wallet_carkey_wallet_carkey_control_wallet_carkey_control_md_c3f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-wallet-kit-guide-wallet-carkey-wallet-carkey-control-wallet-carkey-control-md-c3f.json
var site_docs_wallet_kit_guide_wallet_carkey_wallet_carkey_control_wallet_carkey_control_md_c3f_namespaceObject = JSON.parse('{"id":"wallet-kit-guide/wallet-carkey/wallet-carkey-control/wallet-carkey-control","title":"车控","description":"数字车钥匙开通完成后，车主APP可以通过车控指令远程控制车辆的开门等操作。","source":"@site/docs/wallet-kit-guide/wallet-carkey/wallet-carkey-control/wallet-carkey-control.md","sourceDirName":"wallet-kit-guide/wallet-carkey/wallet-carkey-control","slug":"/wallet-kit-guide/wallet-carkey/wallet-carkey-control/","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-carkey/wallet-carkey-control/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"车控","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-carkey-control","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"钥匙开通","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-carkey/wallet-carkey-operation/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-transport/wallet-transport-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/wallet-kit-guide/wallet-carkey/wallet-carkey-control/wallet-carkey-control.md


const frontMatter = {
	title: '车控',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-carkey-control',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '车控';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "车控",
        children: "车控"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字车钥匙开通完成后，车主APP可以通过车控指令远程控制车辆的开门等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132610)/* ["default"] */.A) + "",
        width: "851",
        height: "522"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型的交互流程如下:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#queryicceconnectionstate",
          children: "queryICCEConnectionState"
        }), "接口检查车控蓝牙的连接状态，如果未连接则使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#starticceconnection",
          children: "startICCEConnection"
        }), "主动连接。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#registericcelistener",
          children: "registerICCEListener"
        }), "注册监听，接收华为钱包发送的消息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["车主APP可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#sendiccerkemessage",
          children: "sendICCERKEMessage"
        }), "接口发送车控指令。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户退出数字钥匙车控页面，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#unregistericcelistener",
          children: "unregisterICCEListener"
        }), "接口取消监听。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["车主APP使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/wallet-kit-guide/wallet-preparations",
            children: "创建Wallet Kit服务"
          }), "时注册的服务号和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E7%94%B3%E8%AF%B7%E9%92%A5%E5%8C%99%E5%8D%A1%E7%89%87",
            children: "申请钥匙卡片"
          }), "时定义的卡券唯一标识，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#queryicceconnectionstate",
            children: "queryICCEConnectionState"
          }), "判断车钥匙的蓝牙链路状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 申请钥匙卡片时定义的卡券唯一标识\n  private serialNumber: string = '';\n\n  async queryICCEConnectionState() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      serialNumber: this.serialNumber\n    });\n    this.walletPassClient.queryICCEConnectionState(passStr).then((result: string) => {\n      console.info(`Succeeded in querying ICCEConnectionState, result: ${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to query ICCEConnectionState, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#queryicceconnectionstate",
            children: "queryICCEConnectionState"
          }), "接口返回连接状态connectionState为未配对0时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#starticceconnection",
            children: "startICCEConnection"
          }), "主动创建蓝牙链接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 申请钥匙卡片时定义的卡券唯一标识\n  private serialNumber: string = '';\n\n  async startICCEConnection() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      serialNumber: this.serialNumber\n    });\n    this.walletPassClient.startICCEConnection(passStr).then((result: string) => {\n      console.info(`Succeeded in starting ICCEConnection, result: ${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to start ICCEConnection, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["车主APP通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#registericcelistener",
            children: "registerICCEListener"
          }), "注册监听华为钱包发送的消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { rpc } from '@kit.IPCKit';\n\nclass ICCECallBack extends rpc.RemoteObject {\n  constructor() {\n    super('ICCECallBack');\n  }\n\n  async onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence, option: rpc.MessageOption): Promise<boolean> {\n    // processing after receiving communication data\n    let codeInt = data.readInt();\n    return true;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  private callback: rpc.RemoteObject | null = null;\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 注册监听的应用名称，一般为包名\n  private registerName: string = '';\n\n  async registerICCEListener() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      registerName: this.registerName\n    });\n    this.callback = new ICCECallBack();\n    this.walletPassClient.registerICCEListener(passStr, this.callback).then((result: string) => {\n      console.info(`Succeeded in registering ICCEListener, result: ${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to register ICCEListener, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["车主APP通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#sendiccerkemessage",
            children: "sendICCERKEMessage"
          }), "接口发送车控指令。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 申请钥匙卡片时定义的卡券唯一标识\n  private serialNumber: string = '';\n  // 车控指令\n  private rkeCommand: string = '';\n\n  async sendICCERKEMessage() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      serialNumber: this.serialNumber,\n      rkeCommand: this.rkeCommand,\n      encryptFlag: '0',\n      directionFlag: '1'\n    });\n    this.walletPassClient.sendICCERKEMessage(passStr).then((result: string) => {\n      console.info(`Succeeded in sending ICCERKEMessage, result: ${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to send ICCERKEMessage, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户退出数字钥匙车控页面，车主APP通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#unregistericcelistener",
            children: "unregisterICCEListener"
          }), "接口取消监听。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { rpc } from '@kit.IPCKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  private callback: rpc.RemoteObject | null = null;\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 注册监听的应用名称，一般为包名\n  private registerName: string = '';\n\n  async unregisterICCEListener() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      registerName: this.registerName\n    });\n\n    this.walletPassClient.unregisterICCEListener(passStr).then((result: string) => {\n      console.info(`Succeeded in unregistering ICCEListener, result: ${result}`);\n      this.callback = null;\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to unregister ICCEListener, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
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
132610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439249-d9788fb272065f2ecb34eac000578fa0.png");

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