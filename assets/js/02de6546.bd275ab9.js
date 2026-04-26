"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["605842"], {
146268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_quick_login_account_unionid_login_account_unionid_login_button_account_unionid_login_button_md_02d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-quick-login-account-unionid-login-account-unionid-login-button-account-unionid-login-button-md-02d.json
var site_docs_account_kit_guide_account_quick_login_account_unionid_login_account_unionid_login_button_account_unionid_login_button_md_02d_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button/account-unionid-login-button","title":"使用“华为账号登录”按钮登录","description":"场景介绍","source":"@site/docs/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button/account-unionid-login-button.md","sourceDirName":"account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button","slug":"/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button/","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用“华为账号登录”按钮登录","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-unionid-login-button","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"华为账号一键登录（获取手机号和UnionID/OpenID）","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-phone-unionid-login/"},"next":{"title":"使用自定义按钮登录","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-api/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button/account-unionid-login-button.md


const frontMatter = {
	title: '使用“华为账号登录”按钮登录',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-unionid-login-button',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用“华为账号登录”按钮登录';

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
  "value": "用户体验设计",
  "id": "用户体验设计",
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
        id: "使用华为账号登录按钮登录",
        children: "使用“华为账号登录”按钮登录"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以使用Account Kit提供的华为账号登录按钮及服务端交互获取华为账号用户身份标识UnionID、OpenID，通过UnionID、OpenID完成用户登录；或者与应用账号完成绑定，绑定后用于登录或者验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号登录按钮包含文本、标志和文本、标志三种样式，以满足应用对界面风格一致性和灵活性的要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(761456)/* ["default"] */.A) + "",
        width: "6092",
        height: "4164"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号按钮登录能力支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户体验设计",
      children: "用户体验设计"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(946305)/* ["default"] */.A) + "",
        width: "7268",
        height: "4616"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["账号登录按钮的用户体验和UX设计需符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/id-0000001880001344#section2624430102713",
        children: "【华为账号登录】按钮"
      }), "规范，不符合规范的UX设计可能会对应用上架和用户体验带来影响。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(580602)/* ["default"] */.A) + "",
        width: "1331",
        height: "750"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用登录按钮展示登录页阶段（序号1-3）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["用户打开应用进行登录，应用设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#logintype",
              children: "LoginType"
            }), "类型为LoginType.ID后拉起应用自己的登录页并展示“华为账号登录”按钮，用户点击按钮，请求华为账号授权信息。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户点击登录阶段（序号4-6）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如华为账号未登录，将拉起华为账号登录页，用户登录后，将返回Authorization Code等数据给应用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如华为账号已登录，将直接返回Authorization Code等数据给应用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户关联应用账号阶段（序号7-16）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用服务端通过Authorization Code获取到Access Token，再使用Access Token调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-get-token-info/account-api-get-token-info#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
              children: "解析凭证接口"
            }), "获取用户相关信息。通过Authorization Code凭证获取用户信息可以有效避免黑客通过数据遍历、身份伪造、重放攻击等手段导致的安全风险。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用服务端将业务登录凭证SessionId、UnionID/OpenID传给应用，应用获取到UnionID/OpenID可用于判断华为账号是否登录等功能。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用对用户身份标识UnionID/OpenID、业务登录凭证SessionId信息进行认证后，通过UnionID/OpenID判断用户是否已关联应用系统数据库，如已关联，则完成用户登录；如未关联，则创建新用户，绑定UnionID/OpenID。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号登录按钮关键接口如下表所示："
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
              href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button#loginwithhuaweiidbutton",
              children: "LoginWithHuaweiIDButton"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号Button登录组件。  当前该组件支持Icon类型按钮、纯文本按钮、Icon和文本混合按钮，如果仍然不能满足开发者的诉求，可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#style",
              children: "Style"
            }), "的BUTTON_CUSTOM值定义按钮的文字颜色和背景色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#onclickloginwithhuaweiidbutton-1",
              children: "onClickLoginWithHuaweiIDButton"
            }), "(callback: AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#huaweiidcredential",
              children: "HuaweiIDCredential"
            }), ">): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginwithhuaweiidbuttoncontroller",
              children: "LoginWithHuaweiIDButtonController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册华为账号登录按钮的登录事件结果回调。使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#setagreementstatus-1",
              children: "setAgreementStatus"
            }), "(agreementStatus: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#agreementstatus",
              children: "AgreementStatus"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginwithhuaweiidbuttoncontroller",
              children: "LoginWithHuaweiIDButtonController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置协议状态方法。如果需要用户同意协议才能完成华为账号登录，请先设置协议状态为NOT_ACCEPTED，当用户同意协议后设置协议状态为ACCEPTED，才可以完成华为账号登录。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824987)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述接口需在页面或自定义组件生命周期内调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行代码开发前，请确保已按照“开发准备”章节中的指导完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-preparations/account-sign-fingerprints",
        children: "配置签名和指纹"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-preparations/account-client-id",
        children: "配置Client ID"
      }), "。此场景无需申请账号权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "客户端开发",
      children: "客户端开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button",
            children: "LoginWithHuaweiIDButton"
          }), "模块及相关公共模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LoginWithHuaweiIDButton, loginComponentManager } from '@kit.AccountKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button#loginwithhuaweiidbutton",
            children: "LoginWithHuaweiIDButton"
          }), "组件，展示华为账号登录按钮，用户点击华为账号登录按钮后，应用获取到Authorization Code、ID Token，将数据传给应用服务端，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%B8%8E%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BA%A4%E4%BA%92%E5%BC%80%E5%8F%91",
            children: "客户端与服务端交互开发"
          }), "的开发步骤a和b，完成服务端开发。通过Authorization Code凭证获取用户信息可以有效避免黑客通过数据遍历、身份伪造、重放攻击等手段导致的安全风险。应用可以通过公开的网址获取到华为账号服务器发布的公钥，对签名和ID Token中的必要信息进行验证，以证明其没有被篡改过。解析ID Token可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-faq/account-faq-12#%E8%A7%A3%E6%9E%90%E4%B8%8E%E9%AA%8C%E8%AF%81",
            children: "ID Token解析与验证"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PreviewLoginButtonPage {\n  // 构造LoginWithHuaweiIDButton组件的控制器\n  controller: loginComponentManager.LoginWithHuaweiIDButtonController =\n    new loginComponentManager.LoginWithHuaweiIDButtonController()\n      .onClickLoginWithHuaweiIDButton((error: BusinessError, response: loginComponentManager.HuaweiIDCredential) => {\n        if (error) {\n          this.dealAllError(error);\n          return;\n        }\n\n        if (response) {\n          hilog.info(0x0000, 'testTag', 'Succeeded in getting response.');\n          const authCode = response.authorizationCode;\n          // 开发者处理authCode\n        }\n      });\n\n  // 错误处理\n  dealAllError(error: BusinessError): void {\n    hilog.error(0x0000, 'testTag',\n      `Failed to login, errorCode is ${error.code}, errorMessage is ${error.message}`);\n    // 在应用登录涉及UI交互场景下，建议按照如下错误码指导提示用户\n    if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n      // 用户未登录华为账号，请登录华为账号并重试或者尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n      // 网络异常，请检查当前网络状态并重试或者尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_INTERNAL_ERROR) {\n      // 登录失败，请尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n      // 用户取消授权\n    } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n      // 系统服务异常，请稍后重试或者尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n      // 重复请求，应用无需处理\n    } else if (error.code === ErrorCode.ERROR_CODE_AGREEMENT_STATUS_NOT_ACCEPTED) {\n      // 用户未同意协议\n    } else {\n      // 应用登录失败，请尝试使用其他方式登录\n    }\n  }\n\n  build() {\n    Column() {\n      Column() {\n        Column() {\n          LoginWithHuaweiIDButton({\n            params: {\n              // LoginWithHuaweiIDButton支持的样式\n              style: loginComponentManager.Style.BUTTON_RED,\n              // 账号登录按钮在登录过程中展示加载态\n              extraStyle: {\n                buttonStyle: new loginComponentManager.ButtonStyle().loadingStyle({\n                  show: true\n                })\n              },\n              // LoginWithHuaweiIDButton的边框圆角半径\n              borderRadius: 24,\n              // LoginWithHuaweiIDButton支持的登录类型\n              loginType: loginComponentManager.LoginType.ID,\n              // LoginWithHuaweiIDButton支持按钮的样式跟随系统深浅色模式切换\n              supportDarkMode: true\n            },\n            controller: this.controller\n          })\n        }\n        .height(40)\n      }.width('100%')\n    }\n    .justifyContent(FlexAlign.Center)\n    .constraintSize({ minHeight: '100%' })\n    .margin({\n      left: 16,\n      right: 16\n    })\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 内部错误\n  ERROR_CODE_INTERNAL_ERROR = 1001502009,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002,\n  // 用户未同意用户协议\n  ERROR_CODE_AGREEMENT_STATUS_NOT_ACCEPTED = 1005300001\n}\n"
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
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-get-token-info/account-api-get-token-info#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
            children: "解析凭证接口"
          }), "获取用户的UnionID。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Token过期处理"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于Access Token的有效期仅为60分钟，当Access Token失效或者即将失效时（可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-get-token-info/account-api-get-token-info#%E9%94%99%E8%AF%AF%E7%A0%81",
            children: "REST API错误码"
          }), "判断），可以使用Refresh Token（有效期180天）通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-refresh-token/account-api-obtain-refresh-token#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
            children: "刷新用户级凭证接口"
          }), "向华为账号服务器请求获取新的Access Token。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(460899)/* ["default"] */.A) + "",
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
          children: "应用在自己的用户体系通过查询获取的UnionID判断该用户是否已关联。如已关联，则完成用户登录；如未关联，则创建新用户，绑定UnionID，完成用户登录。"
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
824987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
761456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478751-189cf6ef5a243ea6de245c88e4c6e104.png");

},
946305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799102-3f5429b77e94dc3422ac7228185c751e.png");

},
460899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
580602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438797-7b6bb1d6222941aeb619dd243a93efc9.png");

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