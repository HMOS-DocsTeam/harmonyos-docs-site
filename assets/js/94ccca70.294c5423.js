"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["20812"], {
817812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_get_user_info_account_get_risklevel_account_get_risklevel_byquicklogin_account_get_risklevel_byquicklogin_md_94c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-get-user-info-account-get-risklevel-account-get-risklevel-byquicklogin-account-get-risklevel-byquicklogin-md-94c.json
var site_docs_account_kit_guide_account_get_user_info_account_get_risklevel_account_get_risklevel_byquicklogin_account_get_risklevel_byquicklogin_md_94c_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin/account-get-risklevel-byquicklogin","title":"通过华为账号一键登录获取用户风险等级","description":"场景介绍","source":"@site/docs/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin/account-get-risklevel-byquicklogin.md","sourceDirName":"account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin","slug":"/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin/","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过华为账号一键登录获取用户风险等级","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-byquicklogin","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction/"},"next":{"title":"华为账号其他方式登录获取用户风险等级","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin/account-get-risklevel-byquicklogin.md


const frontMatter = {
	title: '通过华为账号一键登录获取用户风险等级',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-byquicklogin',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过华为账号一键登录获取用户风险等级';

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
        id: "通过华为账号一键登录获取用户风险等级",
        children: "通过华为账号一键登录获取用户风险等级"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用登录风控场景，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-phone-unionid-login",
        children: "华为账号一键登录"
      }), "获取用户风险等级，对恶意账号进行风控，提升应用的安全等级。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过华为账号一键登录获取用户风险等级能力支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 华为账号一键登录（用户首次登录应用）获取华为账号风险等级流程图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650525)/* ["default"] */.A) + "",
        width: "3269",
        height: "3307"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E4%B8%9A%E5%8A%A1%E6%B5%81%E7%A8%8B",
          children: "华为账号一键登录业务流程"
        }), "，确保系统账号已登录，匿名手机号获取成功，且用户首次使用华为账号登录应用。（如用户非首次使用华为账号登录，可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition",
          children: "华为账号其他方式登录获取用户风险等级"
        }), "来查询华为账号的风险等级）"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button",
          children: "LoginWithHuaweiIDButton"
        }), "组件，在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginwithhuaweiidbuttonparams",
          children: "LoginWithHuaweiIDButtonParams"
        }), "参数中设置风险等级字段标识riskLevel，拉起应用登录页。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户同意协议后，点击华为账号一键登录按钮，应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#huaweiidcredential",
          children: "HuaweiIDCredential"
        }), "获取到Authorization Code等数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将获取的Authorization Code数据传给应用服务端，应用服务端通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-getuserrisklevel/account-api-getuserrisklevel",
          children: "获取用户风险等级"
        }), "接口查询当前登录用户的华为账号风险等级。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用基于用户风险等级判断继续登录流程或者返回对应风控措施。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一键登录接口遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
        children: "华为账号一键登录接口说明"
      }), "，当应用需要获取用户风险等级时，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button",
        children: "LoginWithHuaweiIDButton"
      }), "组件参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginwithhuaweiidbuttonparams",
        children: "LoginWithHuaweiIDButtonParams"
      }), "中传入riskLevel字段，通过一键登录返回Authorization Code查询用户的风险等级。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginwithhuaweiidbuttonparams",
              children: "LoginWithHuaweiIDButtonParams"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button",
              children: "LoginWithHuaweiIDButton"
            }), "组件参数，支持传入riskLevel字段（可选），标识一键登录后可查询用户风险等级。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在进行代码开发前，请确认已完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E5%BC%80%E5%8F%91%E5%89%8D%E6%8F%90",
            children: "一键登录开发前提"
          }), "工作。"]
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
          children: ["一键登录前置流程（获取系统账号登录状态，获取系统账号匿名手机号）请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E7%94%A8%E6%88%B7%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E5%BA%94%E7%94%A8-1",
            children: "一键登录开发流程"
          }), "中的导入模块及获取匿名手机号，确保系统账号已登录，匿名手机号获取成功，且用户首次通过华为账号登录该应用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E7%94%A8%E6%88%B7%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E5%BA%94%E7%94%A8-1",
            children: "一键登录开发流程"
          }), "中展示一键登录页面并获取Authorization Code的示例代码，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button",
            children: "LoginWithHuaweiIDButton"
          }), "组件参数params中设置riskLevel标识为true，其余示例代码保持不变，拉起应用登录页。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "LoginWithHuaweiIDButton({\n  params: {\n    // LoginWithHuaweiIDButton支持的样式\n    style: loginComponentManager.Style.BUTTON_RED,\n    // 账号登录按钮在登录过程中展示加载态\n    extraStyle: {\n      buttonStyle: new loginComponentManager.ButtonStyle().loadingStyle({\n        show: true\n      })\n    },\n    // LoginWithHuaweiIDButton的边框圆角半径\n    borderRadius: 24,\n    // LoginWithHuaweiIDButton支持的登录类型\n    loginType: loginComponentManager.LoginType.QUICK_LOGIN,\n    // LoginWithHuaweiIDButton支持按钮的样式跟随系统深浅色模式切换\n    supportDarkMode: true,\n    // verifyPhoneNumber：如果华为账号用户在过去90天内未进行短信验证，是否拉起Account Kit提供的短信验证码页面\n    verifyPhoneNumber: true,\n    // riskLevel：标识应用期望在登录后获取华为账号的风险等级\n    riskLevel: true,\n  },\n  controller: this.controller\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户同意协议并点击一键登录按钮后，可获取到Authorization Code，将该值传给应用服务端用于获取用户风险等级。"
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
            src: (__webpack_require__(924026)/* ["default"] */.A) + "",
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
          children: "应用基于风险等级判别用户风险程度，决定是否需要对用户进行额外验证或拦截用户行为。"
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
924026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
650525(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438803-0e239c8dba208989c00cbd4471cee771.png");

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