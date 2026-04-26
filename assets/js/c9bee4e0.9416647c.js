"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["898937"], {
860348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_wallet_kit_guide_wallet_carkey_wallet_carkey_operation_wallet_carkey_operation_md_c9b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-wallet-kit-guide-wallet-carkey-wallet-carkey-operation-wallet-carkey-operation-md-c9b.json
var site_docs_wallet_kit_guide_wallet_carkey_wallet_carkey_operation_wallet_carkey_operation_md_c9b_namespaceObject = JSON.parse('{"id":"wallet-kit-guide/wallet-carkey/wallet-carkey-operation/wallet-carkey-operation","title":"钥匙开通","description":"钥匙开通分为添加钥匙和激活钥匙两步，整体交互流程图如下。相关接口定义请参照钱包服务API。","source":"@site/docs/wallet-kit-guide/wallet-carkey/wallet-carkey-operation/wallet-carkey-operation.md","sourceDirName":"wallet-kit-guide/wallet-carkey/wallet-carkey-operation","slug":"/wallet-kit-guide/wallet-carkey/wallet-carkey-operation/","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-carkey/wallet-carkey-operation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"钥匙开通","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-carkey-operation","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"云侧开发准备","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-carkey/wallet-carkey-cloud/"},"next":{"title":"车控","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-carkey/wallet-carkey-control/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/wallet-kit-guide/wallet-carkey/wallet-carkey-operation/wallet-carkey-operation.md


const frontMatter = {
	title: '钥匙开通',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-carkey-operation',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '钥匙开通';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "车主服务器开发",
  "id": "车主服务器开发",
  "level": 2
}, {
  "value": "车主服务器激活卡片",
  "id": "车主服务器激活卡片",
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
        id: "钥匙开通",
        children: "钥匙开通"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["钥匙开通分为添加钥匙和激活钥匙两步，整体交互流程图如下。相关接口定义请参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass",
        children: "钱包服务API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(868084)/* ["default"] */.A) + "",
        width: "751",
        height: "787"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["车主APP调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypass",
          children: "queryPass"
        }), "接口检查当前设备车钥匙的开通情况。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypass",
          children: "queryPass"
        }), "接口返回", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-error-code/wallet-error-code#section1010220501-%E6%9F%A5%E8%AF%A2%E5%8D%A1%E5%88%B8%E4%B8%8D%E5%AD%98%E5%9C%A8",
          children: "1010220501 查询卡券不存在"
        }), "，则调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#canaddpass",
          children: "canAddPass"
        }), "接口检查当前设备是否支持添加车钥匙。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypass",
          children: "queryPass"
        }), "接口或是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#canaddpass",
          children: "canAddPass"
        }), "接口返回", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-error-code/wallet-error-code#section1010200003-%E8%AE%BF%E9%97%AE%E9%92%B1%E5%8C%85%E7%9A%84%E5%89%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E6%B2%A1%E6%9C%89%E5%87%86%E5%A4%87%E5%A5%BD",
          children: "1010200003 访问钱包的前置环境没有准备好"
        }), "，则调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#initwalletenvironment",
          children: "initWalletEnvironment"
        }), "接口初始化钱包开通车钥匙的同意协议或是登录账号等必要条件，引导用户跳转钱包App完成应用初始化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["车主APP调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypassdeviceinfo",
          children: "queryPassDeviceInfo"
        }), "接口查询设备类型，指定目标设备标识，提升安全性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["车主服务器预置模板后申请钥匙卡片以及JWE数据，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%BD%A6%E4%B8%BB%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E5%8F%91",
          children: "车主服务器开发"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户主动发起开卡时，车主APP跳转钱包应用，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#addpass",
          children: "addPass"
        }), "接口携带上述流程中生成的编码后的JWE数据，开通车钥匙到钱包。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["卡片激活的过程中钱包服务器需要和DK业务管理服务进行交互的包括：设备的认证（和车钥匙管理台交换证书信息）、获取请求个人化数据时的token（用于向车钥匙管理台请求Applet个人化数据）、以及最后的请求Applet个人化数据，最后写入安全芯片，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%BD%A6%E4%B8%BB%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%BF%80%E6%B4%BB%E5%8D%A1%E7%89%87",
          children: "车主服务器激活卡片"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["车主APP可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#viewpass",
          children: "viewPass"
        }), "接口跳转钱包查看已开通的车钥匙详情页。"]
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
          }), "时定义的卡券唯一标识，车主APP调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypass",
            children: "queryPass"
          }), "接口检查当前设备车钥匙的开通情况。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 申请钥匙卡片时定义的卡券唯一标识\n  private serialNumber: string = '';\n\n  async queryPass() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      serialNumber: this.serialNumber\n    });\n    this.walletPassClient.queryPass(passStr).then((result: string) => {\n      console.info(`Succeeded in querying pass, result: ${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to query pass, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypass",
            children: "queryPass"
          }), "接口返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-error-code/wallet-error-code#section1010220501-%E6%9F%A5%E8%AF%A2%E5%8D%A1%E5%88%B8%E4%B8%8D%E5%AD%98%E5%9C%A8",
            children: "1010220501 查询卡券不存在"
          }), "，则调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#canaddpass",
            children: "canAddPass"
          }), "接口检查当前设备是否支持添加车钥匙。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 目标设备类型 phone: 手机\n  private targetDeviceType: string = '';\n\n  async canAddPass() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      targetDeviceType: this.targetDeviceType\n    });\n    this.walletPassClient.canAddPass(passStr).then((result: string) => {\n      console.info(`Succeeded in checking addPass, result:${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to check addPass, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypass",
            children: "queryPass"
          }), "接口或是", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#canaddpass",
            children: "canAddPass"
          }), "接口返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-error-code/wallet-error-code#section1010200003-%E8%AE%BF%E9%97%AE%E9%92%B1%E5%8C%85%E7%9A%84%E5%89%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E6%B2%A1%E6%9C%89%E5%87%86%E5%A4%87%E5%A5%BD",
            children: "1010200003 访问钱包的前置环境没有准备好"
          }), "，则调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#initwalletenvironment",
            children: "initWalletEnvironment"
          }), "接口初始化钱包开通车钥匙的同意协议或是登录账号等必要条件，引导用户跳转钱包App完成应用初始化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 目标设备类型 phone: 手机\n  private targetDeviceType: string = '';\n\n  async initWalletEnvironment() {\n    let passStr = JSON.stringify({\n      targetDeviceType: this.targetDeviceType\n    });\n    this.walletPassClient.initWalletEnvironment(passStr).then(() => {\n      console.info(`Succeeded in initiating walletEnvironment`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to initiate walletEnvironment, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["车主APP调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#querypassdeviceinfo",
            children: "queryPassDeviceInfo"
          }), "接口查询设备类型，指定目标设备标识。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 目标设备类型 phone: 手机\n  private targetDeviceType: string = '';\n\n  async queryPassDeviceInfo() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      targetDeviceType: this.targetDeviceType\n    });\n    this.walletPassClient.queryPassDeviceInfo(passStr).then((result: string) => {\n      console.info(`Succeeded in querying passDeviceInfo, result:${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to query passDeviceInfo, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["车主服务器预置模板后申请钥匙卡片以及JWE数据，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%BD%A6%E4%B8%BB%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E5%8F%91",
            children: "车主服务器开发"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户主动发起开卡时，车主APP跳转钱包应用，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#addpass",
            children: "addPass"
          }), "接口携带上述流程中生成的编码后的JWE数据，开通车钥匙到钱包。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 参考车主服务器开发生成的JWE数据\n  private jweContent: string = '';\n\n  async addPass() {\n    let passStr = JSON.stringify({\n      jweContent: this.jweContent\n    });\n    this.walletPassClient.addPass(passStr).then((result: string) => {\n      console.info(`Succeeded in adding pass, result:${result}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to add pass, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["卡片激活的过程中钱包服务器需要和DK业务管理服务进行交互的包括：设备的认证（和车钥匙管理台交换证书信息）、获取请求个人化数据时的token（用于向车钥匙管理台请求Applet个人化数据）、以及最后的请求Applet个人化数据，最后写入安全芯片，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%BD%A6%E4%B8%BB%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%BF%80%E6%B4%BB%E5%8D%A1%E7%89%87",
            children: "车主服务器激活卡片"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["车主APP可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-walletpass/wallet-walletpass#viewpass",
            children: "viewPass"
          }), "接口跳转钱包查看已开通的车钥匙详情页。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletPass } from '@kit.WalletKit';\n\n@Entry\n@Component\nstruct Index {\n  private walletPassClient: walletPass.WalletPassClient = new walletPass.WalletPassClient(this.getUIContext().getHostContext() as common.UIAbilityContext);\n  // 创建Wallet Kit服务时注册的服务号\n  private passType: string = '';\n  // 申请钥匙卡片时定义的卡券唯一标识\n  private serialNumber: string = '';\n\n  async viewPass() {\n    let passStr = JSON.stringify({\n      passType: this.passType,\n      serialNumber: this.serialNumber\n    });\n    try {\n      await this.walletPassClient.viewPass(passStr);\n      console.info(`Succeeded in viewing pass`);\n    } catch (err) {\n      console.error(`Failed to view pass, code:${err.code}, message:${err.message}`);\n    }\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "车主服务器开发",
      children: "车主服务器开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用Intellij IDEA打开", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/wallet-kit-sample-code-severdemo-java",
            children: "钱包服务-服务端卡片开通"
          }), "的示例代码，没有请先下载Intellij IDEA的当前最新版本。示例代码和工具下载完成后，目录结构如下，我们需要关注下图框出来几个文件："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(254834)/* ["default"] */.A) + "",
            width: "423",
            height: "565"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开resources/release.config.properties文件，替换真实的应用数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(827627)/* ["default"] */.A) + "",
            width: "907",
            height: "308"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "需替换的参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "gw.appid"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "gw.appid.secret"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
                  children: "AppGallery Connect"
                }), "平台申请的Client ID和Client Secret分别填入gw.appid和gw.appid.secret"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "walletServerBaseUrl"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["固定填入服务器基地址：", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "servicePrivateKey"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/wallet-kit-guide/wallet-preparations",
                  children: "创建Wallet Kit服务"
                }), "步骤5生成的私钥"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开resources/data/StdCarKeyModel.json文件，替换真实的应用数据，详细见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E9%A2%84%E7%BD%AE%E6%A8%A1%E6%9D%BF",
            children: "预置模板"
          }), "的请求参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(872002)/* ["default"] */.A) + "",
            width: "506",
            height: "861"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开stdcarkey/StdCarKeyModelTest.java文件，运行createStdCarKeyModel方法，可看到控制台如下输出，详细见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E9%A2%84%E7%BD%AE%E6%A8%A1%E6%9D%BF",
            children: "预置模板"
          }), "的响应参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(962181)/* ["default"] */.A) + "",
            width: "1842",
            height: "405"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开resources/data/StdCarKeyInstance.json文件，替换真实的应用数据，详细见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E7%94%B3%E8%AF%B7%E9%92%A5%E5%8C%99%E5%8D%A1%E7%89%87",
            children: "申请钥匙卡片"
          }), "的请求参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开stdcarkey/StdCarKeyInstanceTest.java文件，运行addStdCarKeyInstance方法，可看到控制台如下输出，详细见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E7%94%B3%E8%AF%B7%E9%92%A5%E5%8C%99%E5%8D%A1%E7%89%87",
            children: "申请钥匙卡片"
          }), "的响应参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(204456)/* ["default"] */.A) + "",
            width: "1836",
            height: "540"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "车主服务器激活卡片",
      children: "车主服务器激活卡片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 Intellij IDEA打开", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/wallet-kit-sample-code-severdemo-nfc-java",
            children: "钱包服务-服务端卡片激活"
          }), "的示例代码。示例代码和工具下载完成后，解决工程配置等问题后，Constants类中替换SERVER_PUBLIC_KEY和SERVER_SECRET_KEY为您在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/wallet-kit-guide/wallet-preparations",
            children: "创建Wallet Kit服务"
          }), "步骤5生成的公钥和私钥，直接打开PassesController这个类。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public#%E8%AE%BE%E5%A4%87%E8%AE%A4%E8%AF%81",
            children: "设备认证"
          }), "对应类中的register方法，通过此方法进行设备认证。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(932723)/* ["default"] */.A) + "",
            width: "1081",
            height: "117"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public#%E8%8E%B7%E5%8F%96%E4%B8%AA%E4%BA%BA%E5%8C%96%E6%95%B0%E6%8D%AEtoken",
            children: "获取个人化数据Token"
          }), "对应类中的requestToken方法，通过此方法获取个人化数据Token。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(733922)/* ["default"] */.A) + "",
            width: "1079",
            height: "99"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public#%E8%8E%B7%E5%8F%96%E4%B8%AA%E4%BA%BA%E5%8C%96%E6%95%B0%E6%8D%AE",
            children: "获取个人化数据"
          }), "对应类中的getPersonalInfo方法，重点看dealWithPersonalizeDataRequest中的getDevicePassData这个方法，查看ICCECarKeyDevicePassUnit的generatePassData方法，通过这些方法获取个人化数据。再深入打开里面的getPersonalizeData方法，根据此接口的说明进行生成。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(13014)/* ["default"] */.A) + "",
            width: "1059",
            height: "561"
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
868084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479199-d8c4db121150ad6c270fbe6dff7860dd.png");

},
827627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439245-dce7164d382880fff437d72c209669b1.png");

},
932723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959202-56ce3a872e4ee1b9c962b3cb5605153d.png");

},
13014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799554-2f37dc45b694e9865cb270ac8ac1d772.png");

},
962181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799552-858779126eb6d744c92d2b0aa1fafd90.png");

},
872002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479201-5548ba01c40d98e01b56c384e507f32f.png");

},
204456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439247-1c2ab235ac4dca1c8b833ae3d082233e.png");

},
733922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479203-03cbf59fc48f7b384528c569452d05a0.png");

},
254834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799550-87c78e0587d2b15f227e2142af03be05.png");

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