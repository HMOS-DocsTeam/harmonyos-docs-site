"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465956"], {
200041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_get_user_info_account_get_risklevel_account_get_risklevel_on_demand_acquisition_account_get_risklevel_on_demand_acquisition_md_b2e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-get-user-info-account-get-risklevel-account-get-risklevel-on-demand-acquisition-account-get-risklevel-on-demand-acquisition-md-b2e.json
var site_docs_account_kit_guide_account_get_user_info_account_get_risklevel_account_get_risklevel_on_demand_acquisition_account_get_risklevel_on_demand_acquisition_md_b2e_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition/account-get-risklevel-on-demand-acquisition","title":"华为账号其他方式登录获取用户风险等级","description":"场景介绍","source":"@site/docs/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition/account-get-risklevel-on-demand-acquisition.md","sourceDirName":"account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition","slug":"/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition/","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"华为账号其他方式登录获取用户风险等级","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-on-demand-acquisition","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过华为账号一键登录获取用户风险等级","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/account-kit-guide/account-minorsprotection/account-overview-minorsprotection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition/account-get-risklevel-on-demand-acquisition.md


const frontMatter = {
	title: '华为账号其他方式登录获取用户风险等级',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-on-demand-acquisition',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '华为账号其他方式登录获取用户风险等级';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
  "value": "开发前提",
  "id": "开发前提",
  "level": 2
}, {
  "value": "客户端开发",
  "id": "客户端开发",
  "level": 2
}, {
  "value": "服务端开发",
  "id": "服务端开发",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "华为账号其他方式登录获取用户风险等级",
        children: "华为账号其他方式登录获取用户风险等级"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用已使用华为账号关联登录场景下，开展商户补贴、优惠券发放等商业营销活动时获取华为账号风险等级，有效识别“薅羊毛”风险，保护营销资源合理使用，降低业务安全问题给营销方带来的损失，为相关活动保驾护航。以下对Account Kit提供的获取用户风险等级能力进行介绍，如果需要同时获取风险等级和手机号还可参考场景化控件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel",
        children: "获取手机号和风险等级Button"
      }), "进行实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取用户风险等级scope仅支持与openid、phone、profile组合使用，接口支持的全量scopes见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
          children: "scope列表"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取风险等级能力支持Phone、Tablet、PC/2in1设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(590383)/* ["default"] */.A) + "",
        width: "1137",
        height: "738"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用通过传对应scope和permission调用授权API，如果已授权则直接返回临时登录凭证Authorization Code，如果未授权："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "scopes传入riskLevel，则授权API直接返回Authorization Code。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "scopes传入riskLevel、profile/phone，则拉起授权页，用户点击允许后授权API返回Authorization Code。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将Authorization Code传给应用服务端，使用Client ID、Client Secret、Authorization Code从华为账号服务器中获取Access Token，再使用Access Token请求获取用户的风险等级。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取用户风险等级关键接口如下表所示，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication",
        children: "API参考"
      }), "。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#createauthorizationwithhuaweiidrequest",
              children: "createAuthorizationWithHuaweiIDRequest"
            }), "(): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取授权接口，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "传入风险等级的scope：riskLevel及Authorization Code的permission：serviceauthcode，即可在授权结果中获取到Authorization Code。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#constructor",
              children: "constructor"
            }), "(context?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-common/js-apis-app-ability-common#context",
              children: "common.Context"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建授权请求Controller。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#executerequest-1",
              children: "executeRequest"
            }), "(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authenticationrequest",
              children: "AuthenticationRequest"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authenticationresponse",
              children: "AuthenticationResponse"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过Promise方式执行授权操作。可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authenticationresponse",
              children: "AuthenticationResponse"
            }), "的子类", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidresponse",
              children: "AuthorizationWithHuaweiIDResponse"
            }), "中解析", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidcredential",
              children: "AuthorizationWithHuaweiIDCredential"
            }), "，其中包含authorizedScopes，可确认风险等级是否授权成功。具体解析方法请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BC%80%E5%8F%91",
              children: "客户端开发"
            }), "的示例代码。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在进行代码开发前，请确保已按照“开发准备”章节中的指导完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-preparations/account-sign-fingerprints",
            children: "配置签名和指纹"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-preparations/account-client-id",
            children: "配置Client ID"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在使用获取风险等级能力之前，需要完成对应的scope权限申请。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["scope权限申请审批未完成或未通过，将报错", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-faq/account-faq-2",
            children: "1001502014 应用未申请scopes或permissions权限"
          }), "。当前可通过发送邮件至", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:accountkit@huawei.com",
            children: "accountkit@huawei.com"
          }), "进行申请。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请提供如下信息进行申请，我们会在1-2个工作日内回复申请结果，请您留意邮箱消息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "邮件主题"
            })
          }), "：【获取风险等级】权限申请"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "邮件正文"
            })
          }), "：（请在正文中描述下具体希望申请的权限）"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "企业名称"
            })
          }), "：***"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用名称"
            })
          }), "：***"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用包名"
            })
          }), "：com.***.***"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "APP ID"
            })
          }), "：1****12"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client ID"
            })
          }), "：1****14"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "背景介绍："
            })
          }), " （请提供应用简单介绍，便于快速了解）"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用场景"
            })
          }), "：（请提供相关使用场景的文字描述、交互流程图或参考交互视频等，可提供类似应用的使用场景进行说明）"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用该权限的必要性："
            })
          }), " （请提供应用需要该权限和信息的必要性）"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "客户端开发",
      children: "客户端开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication",
            children: "authentication"
          }), "模块及相关公共模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建授权请求并设置参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建授权请求，并设置参数\nconst authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\n// 获取风险等级需要传如下scope\nauthRequest.scopes = ['riskLevel'];\n// 获取authorizationCode需传如下permission\nauthRequest.permissions = ['serviceauthcode'];\n// 用户是否需要登录授权，该值为true且用户未登录或未授权时，会拉起用户登录或授权页面\nauthRequest.forceAuthorization = true;\n// 用于防跨站点请求伪造\nauthRequest.state = util.generateRandomUUID();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authenticationcontroller",
            children: "AuthenticationController"
          }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#executerequest-1",
            children: "executeRequest"
          }), "方法执行授权请求，并处理授权结果，从授权结果中解析出authorizedScopes和Authorization Code。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 执行授权请求\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(authRequest).then((data) => {\n    const authorizationWithHuaweiIDResponse = data as authentication.AuthorizationWithHuaweiIDResponse;\n    const state = authorizationWithHuaweiIDResponse.state;\n    if (state && authRequest.state !== state) {\n      hilog.error(0x0000, 'testTag', `Failed to authorize. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in authentication.');\n    let riskLevelAuthorized: boolean = false;\n    const authorizationWithHuaweiIDCredential = authorizationWithHuaweiIDResponse?.data;\n    const authorizedScopes = authorizationWithHuaweiIDCredential?.authorizedScopes;\n    // 判断授权成功scopes中是否包含riskLevel\n    if (authorizedScopes?.includes(\"riskLevel\")) {\n        riskLevelAuthorized = true;\n    }\n    const authorizationCode = authorizationWithHuaweiIDCredential?.authorizationCode;\n    // 开发者处理riskLevelAuthorized, authorizationCode\n  }).catch((err: BusinessError) => {\n    dealAllError(err);\n  });\n} catch (error) {\n  dealAllError(error);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 错误处理\nfunction dealAllError(error: BusinessError): void {\n  hilog.error(0x0000, 'testTag', `Failed to obtain userInfo. Code: ${error.code}, message: ${error.message}`);\n  // 在应用获取用户风险等级场景下，涉及UI交互时，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 获取用户信息失败，请稍后重试\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务端开发",
      children: "服务端开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用服务端使用Client ID、Client Secret、Authorization Code调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
            children: "获取用户级凭证接口"
          }), "向华为账号服务器请求获取Access Token、Refresh Token。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用Access Token调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-getuserrisklevel/account-api-getuserrisklevel#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
            children: "获取用户风险等级接口"
          }), "获取用户的风险等级。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Token过期处理"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于Access Token的有效期仅为60分钟，当Access Token失效或者即将失效时（可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-getuserrisklevel/account-api-getuserrisklevel#%E9%94%99%E8%AF%AF%E7%A0%81",
            children: "REST API错误码"
          }), "判断），可以使用Refresh Token（有效期180天）通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-refresh-token/account-api-obtain-refresh-token#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
            children: "刷新用户级凭证接口"
          }), "向华为账号服务器请求获取新的Access Token。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(38251)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当Access Token失效时，若应用不使用Refresh Token向华为账号服务器请求获取新的Access Token，账号的授权信息将会失效，导致使用Access Token的功能都会失败。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当Access Token非正常失效（如修改密码、退出账号、删除设备）时，应用可重新登录授权获取Authorization Code，向华为账号服务器请求获取新的Access Token。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refresh Token过期处理"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于Refresh Token的有效期为180天，当Refresh Token失效后（可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-refresh-token/account-api-obtain-refresh-token#%E9%94%99%E8%AF%AF%E7%A0%81",
            children: "REST API错误码"
          }), "判断），应用服务端需要通知客户端，重新调用授权接口，请求用户重新授权。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用服务端基于风险等级判别用户风险程度，决定是否需要对用户进行额外验证或拦截用户行为。"
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
590383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958758-bb3b856461bb77e1fb84755728f8555c.png");

},
38251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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