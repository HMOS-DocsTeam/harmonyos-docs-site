"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["879600"], {
994379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_fido_onlineauthentication_fido_md_b96_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-fido-onlineauthentication-fido-md-b96.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_fido_onlineauthentication_fido_md_b96_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-fido/onlineauthentication-fido","title":"FIDO免密身份认证","description":"场景介绍","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-fido/onlineauthentication-fido.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-fido","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-fido/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-fido/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"FIDO免密身份认证","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-fido","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-preparation/"},"next":{"title":"IFAA免密身份认证","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-ifaa/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-fido/onlineauthentication-fido.md


const frontMatter = {
	title: 'FIDO免密身份认证',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-fido',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'FIDO免密身份认证';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "相关权限",
  "id": "相关权限",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
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
        id: "fido免密身份认证",
        children: "FIDO免密身份认证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开通FIDO免密身份认证功能，使用用户已有的生物特征开通FIDO免密身份认证能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用FIDO免密身份认证功能，使用用户已开通的生物特征进行FIDO免密身份认证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭FIDO免密身份认证功能，使用用户已开通的生物特征注销FIDO免密身份认证能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发FIDO免密身份认证功能前，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FIDO协议"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FIDO（Fast Identity Online）是一套身份认证框架协议，它由FIDO联盟推出并持续维护。FIDO规范定义了一套在线身份认证的技术架构。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UAF身份认证框架"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UAF（Universal Authentication Framework）意为通用身份认证框架，目的是通过生物识别（如指纹识别）和加密技术方式，为用户提供无密码的身份认证体验。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关权限",
      children: "相关权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取生物识别权限：ohos.permission.ACCESS_BIOMETRIC。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需满足以下条件，才能使用该功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移动端设备需要支持生物特征（指纹/3D人脸），查询当前移动端设备是否支持ATL4级别的认证可信等级。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\n\ntry {\n  // 示例，查询设备人脸识别是否支持ATL4级别的认证可信等级\n  userAuth.getAvailableStatus(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL4);\n  console.info('current auth trust level is supported');\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`current auth trust level is not supported. Code is ${err?.code}, message is ${err?.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FIDO服务需要联网，以便提供完整的在线身份校验服务。应用在调用本服务API前，需将FIDO服务联网行为向用户明示，并且取得用户同意。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620182)/* ["default"] */.A) + "",
        width: "5100",
        height: "6600"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务进行FIDO免密身份认证功能的开通、使用和关闭。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " FIDO免密身份认证接口功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#discover",
              children: "discover"
            }), "(context: common.Context): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#discoverydata",
              children: "DiscoveryData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发现设备的认证能力，返回当前设备软件支持的认证器数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#checkpolicy",
              children: "checkPolicy"
            }), "(context: common.Context, uafRequest: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#uafmessage",
              children: "UAFMessage"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测用户策略的开启状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#processuafoperation",
              children: "processUAFOperation"
            }), "(context: common.Context, uafRequest: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#uafmessage",
              children: "UAFMessage"
            }), ", channelBindings?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#channelbinding",
              children: "ChannelBinding"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#uafmessage",
              children: "UAFMessage"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户UAF操作接口，处理UAF协议消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#notifyuafresult",
              children: "notifyUAFResult"
            }), "(context: common.Context, uafResponse: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-fido-api/onlineauthentication-fido-api#uafmessage",
              children: "UAFMessage"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开通结果通知接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要业务方自行根据FIDO标准协议部署FIDO服务器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fido } from '@kit.OnlineAuthenticationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开通FIDO免密身份认证。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "初始化认证器信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct FidoInvokePage {\n  private uiContext = this.getUIContext().getHostContext();\n\n  private async invokeDiscover() {\n    try {\n      // 初始化认证器信息\n      let discoverData = await fido.discover(this.uiContext);\n      // 业务处理discoverData\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to call discover. Code is ${err.code}, message is ${err.message}`);\n      // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    }\n  }\n\n  build() {\n    // 业务UI界面\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务端，获取策略检查报文，检查用户开通状态。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// uafMessage为FIDO服务端获取的策略检查报文\nlet uafAuthMessage: fido.UAFMessage = {\n  /*\n   * 策略检查报文格式: [{\"header\":{\"upv\":{\"major\":1,\"minor\":0},\"op\":\"Auth\",\"appID\":\"\",\"serverData\":\"test server data\"},\"challenge\":\"test challenge\",\"policy\":{\"accepted\":[[{\"aaid\":[\"001B#1001\"],\"keyIDs\":[\"test keyIDs\"],\"authenticationAlgorithms\":[1]}]]}}]\n   */\n  uafProtocolMessage: uafMessage, // 从服务端获取的检查策略报文\n  additionalData: \"\" // 附加信息（可选）\n};\nlet isRegistered: boolean = true;\ntry {\n  // 检查是否已经开启FIDO认证\n  await fido.checkPolicy(this.uiContext, uafAuthMessage);\n} catch (error) {\n  isRegistered = false;\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call checkPolicy. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断状态，进行相应处理\n}\nif (isRegistered) {\n  console.info(\"has registered, no need to register again.\");\n  // 已注册，业务根据需要执行后续流程\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务端，获取注册报文，调用processUAFOperation接口进行FIDO注册。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// regMessage为从FIDO服务端获取的注册报文\nlet uafRegMessage: fido.UAFMessage = {\n /*\n  * 注册报文格式: [{\"header\":{\"upv\":{\"major\":1,\"minor\":0},\"op\":\"Reg\",\"appID\":\"\",\"serverData\":\"test server data\"},\"challenge\":\"test challenge\",\"username\":\"test user name\",\"policy\":{\"accepted\":[[{\"aaid\":[\"001B#1001\"],\"attachmentHint\":1,\"authenticationAlgorithms\":[1],\"authenticatorVersion\":1}]]}}]\n  */\n  uafProtocolMessage: regMessage, // 从服务端获取的注册报文\n  additionalData: \"\" // 附加信息（可选）\n};\n// 传递通道绑定参数（可选）\nlet channelBinding: fido.ChannelBinding = {};\ntry {\n  // 调用processUAFOperation接口进行FIDO注册\n  let messageResp = await fido.processUAFOperation(this.uiContext, uafRegMessage, channelBinding);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call processUAFOperation. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断异常类型，进行相应处理\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "发送注册响应报文至FIDO服务端进行验证并获取注册结果报文。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// notifyMessage为从FIDO服务端获取的注册结果报文\nlet notifyMessage:string = \"\";\nlet notifyUafMessage: fido.UAFMessage = {\n  /*\n   * 响应报文格式: {\"authenticatorsSucceeded\":[{\"description\":\"Attention completed successfully.\",\"aaid\":\"001B#1001\",\"keyID\":\"test keyID\"}]}\n   */\n  uafProtocolMessage: notifyMessage, // 从服务端获取的注册结果报文\n  additionalData: \"\" // 附加信息（可选）\n};\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用notifyUAFResult进行注册结果通知。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "try {\n  // 调用notifyUAFResult进行注册结果通知\n  fido.notifyUAFResult(this.uiContext, notifyUafMessage).then(notify => {\n    console.info(\"Succeeded in doing notifyUAFResult.\");\n  })\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call notifyUAFResult. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断异常类型，进行相应处理\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用FIDO免密身份认证。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "初始化认证器信息（如果已执行过初始化操作，则无需重复执行）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取当前界面的context\ntry {\n  // 调用discover方法初始化认证器信息\n  let discoverData = await fido.discover(this.uiContext);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call discover. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断异常类型，进行相应处理\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务端，获取策略检查报文，检查用户开启状态。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// uafMessage为从FIDO服务器获取的策略检查报文\nlet uafAuthMessage: fido.UAFMessage = {\n  /*\n   * 策略检查报文格式: [{\"header\":{\"upv\":{\"major\":1,\"minor\":0},\"op\":\"Auth\",\"appID\":\"\",\"serverData\":\"test server data\"},\"challenge\":\"test challenge\",\"policy\":{\"accepted\":[[{\"aaid\":[\"001B#1001\"],\"keyIDs\":[\"test keyIDs\"],\"authenticationAlgorithms\":[1]}]]}}]\n   */\n  uafProtocolMessage: uafMessage, // 从服务端获取的检查策略报文\n  additionalData: \"\" // 附加信息（可选）\n};\nlet isRegistered: boolean = true;\ntry {\n  // 检查是否已经开启FIDO认证\n  await fido.checkPolicy(this.uiContext, uafAuthMessage);\n} catch (error) {\n  isRegistered = false;\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call checkPolicy. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断状态，进行相应处理\n}\nif (isRegistered) {\n  console.info(\"has registered, no need to register again.\");\n  // 已注册，业务根据需要执行后续流程\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务端，获取认证报文，调用processUAFOperation接口进行FIDO认证。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// regMessage为从FIDO服务器获取的认证报文\nlet uafRegMessage: fido.UAFMessage = {\n  /*\n   * 认证报文格式: [{\"header\":{\"upv\":{\"major\":1,\"minor\":0},\"op\":\"Auth\",\"appID\":\"\",\"serverData\":\"test server data\"},\"challenge\":\"test challenge\",\"policy\":{\"accepted\":[[{\"aaid\":[\"001B#1001\"],\"keyIDs\":[\"test keyIDs\"],\"authenticationAlgorithms\":[1]}]]}}]\n   */\n  uafProtocolMessage: regMessage, // 从服务端获取的认证报文\n  additionalData: \"\" // 附加信息（可选）\n};\n// 传递通道绑定参数（可选）\nlet channelBinding: fido.ChannelBinding = {};\ntry {\n  // 调用processUAFOperation接口进行FIDO认证\n  let messageResp = await fido.processUAFOperation(this.uiContext, uafRegMessage, channelBinding);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call processUAFOperation. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断异常类型，进行相应处理\n}\n // 发送认证响应报文至FIDO服务端进行验证并返回认证结果\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭FIDO免密身份认证。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "初始化认证器信息（如果已执行过初始化操作，则无需重复执行）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "try {\n  // 调用discover方法初始化认证器信息\n  let discoverData = await fido.discover(this.uiContext);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call discover. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断异常类型，进行相应处理\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务端，获取注销报文，调用processUAFOperation接口进行FIDO注销。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// deregMessage为从FIDO服务器获取的注销报文\nlet uafRegMessage: fido.UAFMessage = {\n  /*\n   * 注销报文格式:  [{\"header\":{\"upv\":{\"major\":1,\"minor\":0},\"op\":\"Dereg\",\"appID\":\"\"},\"authenticators\":[{\"aaid\":\"001B#1001\",\"keyID\":\"test keyID\"}]}]\n   */\n  uafProtocolMessage: deregMessage, // 从服务端获取的注销报文\n  additionalData: \"\" // 附加信息（可选）\n};\n// 传递通道绑定参数（可选）\nlet channelBinding: fido.ChannelBinding = {};\ntry {\n  // 调用processUAFOperation接口进行FIDO注销\n  let messageResp = await fido.processUAFOperation(this.uiContext, uafRegMessage, channelBinding);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to call processUAFOperation. Code is ${err.code}, message is ${err.message}`);\n  // 业务根据错误码判断异常类型，进行相应处理\n}\n // 发送认证响应报文至FIDO服务端进行验证并返回认证结果\n"
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
620182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478407-2449bffbdd94c06d237b3faa22145188.png");

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