"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296348"], {
944940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_quick_login_account_phone_unionid_login_account_phone_unionid_login_md_392_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-quick-login-account-phone-unionid-login-account-phone-unionid-login-md-392.json
var site_docs_account_kit_guide_account_quick_login_account_phone_unionid_login_account_phone_unionid_login_md_392_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-quick-login/account-phone-unionid-login/account-phone-unionid-login","title":"华为账号一键登录（获取手机号和UnionID/OpenID）","description":"概述","source":"@site/docs/account-kit-guide/account-quick-login/account-phone-unionid-login/account-phone-unionid-login.md","sourceDirName":"account-kit-guide/account-quick-login/account-phone-unionid-login","slug":"/account-kit-guide/account-quick-login/account-phone-unionid-login/","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-phone-unionid-login/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"华为账号一键登录（获取手机号和UnionID/OpenID）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-phone-unionid-login","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-quick-login-overview/"},"next":{"title":"使用“华为账号登录”按钮登录","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-quick-login/account-phone-unionid-login/account-phone-unionid-login.md


const frontMatter = {
	title: '华为账号一键登录（获取手机号和UnionID/OpenID）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-phone-unionid-login',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '华为账号一键登录（获取手机号和UnionID/OpenID）';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
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
  "value": "登录页面UX设计规范",
  "id": "登录页面ux设计规范",
  "level": 2
}, {
  "value": "用户场景设计",
  "id": "用户场景设计",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "用户首次登录应用",
  "id": "用户首次登录应用",
  "level": 3
}, {
  "value": "用户非首次登录应用（可选）",
  "id": "用户非首次登录应用可选",
  "level": 3
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
  "value": "用户首次登录应用",
  "id": "用户首次登录应用-1",
  "level": 3
}, {
  "value": "用户非首次登录应用（可选）",
  "id": "用户非首次登录应用可选-1",
  "level": 3
}, {
  "value": "借助DevEco Studio辅助开发（可选）",
  "id": "借助deveco-studio辅助开发可选",
  "level": 3
}, {
  "value": "服务端开发",
  "id": "服务端开发",
  "level": 2
}, {
  "value": "客户端与服务端交互开发",
  "id": "客户端与服务端交互开发",
  "level": 2
}, {
  "value": "应用客户端到应用服务端的开发",
  "id": "应用客户端到应用服务端的开发",
  "level": 3
}, {
  "value": "客户端与服务端联调",
  "id": "客户端与服务端联调",
  "level": 3
}, {
  "value": "开发后验证",
  "id": "开发后验证",
  "level": 2
}, {
  "value": "集成华为账号一键登录能力应用用户体验质量建议",
  "id": "集成华为账号一键登录能力应用用户体验质量建议",
  "level": 3
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
        id: "华为账号一键登录获取手机号和unionidopenid",
        children: "华为账号一键登录（获取手机号和UnionID/OpenID）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["华为账号一键登录是基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://oauth.net/2/",
        children: "OAuth 2.0协议标准"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://openid.net/connect/",
        children: "OpenID Connect协议标准"
      }), "构建的OAuth 2.0授权登录系统，应用可以通过华为账号一键登录能力快捷地获取华为账号用户的身份标识和手机号，快速建立应用内的用户体系。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优势："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "利用系统账号的安全性和便利性，用户无需输入账号名和密码，无需复杂的安全验证，简化登录步骤，提高用户转化率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供系统验证过的手机号，关联应用已有用户。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实现Phone、Tablet、PC/2in1、TV设备一致的登录体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若应用需同时获取手机号和UnionID完成用户登录，Account Kit提供了同时获取手机号和UnionID的华为账号一键登录按钮。应用可以将华为账号一键登录按钮嵌入自有的登录页，使用登录按钮获取手机号和UnionID，实现用户登录。设备登录华为账号（该账号已绑定手机号）后，一键登录获取手机号可不依赖设备插SIM卡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(731244)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "儿童账号一键登录场景："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户使用儿童账号进行登录，点击一键登录会触发Account Kit默认提供的家长验密流程（Account Kit提供的验证页，暂不可自定义），家长验密完成后可获取用户的身份标识和手机号。并且TV设备暂不支持儿童账号。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手机号验证机制说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Account Kit调用系统能力获取华为账号登录设备上的SIM卡手机号码，与华为账号绑定的手机号进行校验（有网络即可，无需使用SIM卡移动数据）。用户点击一键登录按钮后，结合华为账号使用过程中账号所绑定的手机号短信验证记录，90天内有验证通过的记录，则返回该华为账号绑定的手机号；若90天内没有验证通过的记录，则触发Account Kit默认提供的短信验证流程（Account Kit提供的验证页，暂不可自定义），确保返回的手机号经过验证。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用满足《", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.cac.gov.cn/2021-03/22/c_1617990997054277.htm",
          children: "常见类型移动互联网应用程序必要个人信息范围规定"
        }), "》中使用手机号的必要业务场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用华为账号一键登录功能用户必须同意", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://privacy.consumer.huawei.com/legal/id/authentication-terms.htm?code=CN&language=zh-CN",
          children: "《华为账号用户认证协议》"
        }), "，当用户点击", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://privacy.consumer.huawei.com/legal/id/authentication-terms.htm?code=CN&language=zh-CN",
          children: "《华为账号用户认证协议》"
        }), "，系统浅色模式下应用需跳转到如下链接<", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://privacy.consumer.huawei.com/legal/id/authentication-terms.htm?code=CN&language=zh-CN&gt;，系统深色模式下跳转到&lt;https://privacy.consumer.huawei.com/legal/id/authentication-terms.htm?code=CN&language=zh-CN&bgmode=black&gt;"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用在用户同意后获取到手机号，需要根据自身业务场景判断使用的方式，必要时增加其他安全验证手段，比如对二次放号的判断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为账号一键登录服务当前仅限中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）用户可用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用服务端获取华为账号绑定号码时，该服务器必须部署在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为账号一键登录支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["仅支持企业开发者使用一键登录，个人开发者请使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button",
          children: "华为账号登录"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-quick-login/account-silent-login",
          children: "静默登录"
        }), "实现登录。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户体验设计",
      children: "用户体验设计"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(838746)/* ["default"] */.A) + "",
        width: "7680",
        height: "4536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(951737)/* ["default"] */.A) + "",
        width: "9336",
        height: "4536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "登录页面ux设计规范",
      children: "登录页面UX设计规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(747186)/* ["default"] */.A) + "",
        width: "4150",
        height: "1936"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一键登录按钮的用户体验和UX设计需符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/id-0000001880001344#section41792374210",
        children: "【华为账号一键登录】按钮"
      }), "规范，用户体验设计图2中的华为标志按钮可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/id-0000001880001344#section61791745172816",
        children: "华为账号登录视觉规范"
      }), "中的样式三。不符合规范的UX设计可能会对应用上架和用户体验带来影响。一键登录按钮的样式设计具体可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#style",
        children: "华为账号登录按钮类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户场景设计",
      children: "用户场景设计"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户使用华为账号一键登录能力，注册/登录应用时，可能存在多种场景，应用可参照以下流程，根据自身业务场景进行设计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(91266)/* ["default"] */.A) + "",
        width: "4250",
        height: "5079"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752221)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["将UnionID/OpenID和手机号同时与应用账号建立关联，可以为用户带来更多便利的功能。如：实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-quick-login/account-silent-login",
            children: "静默登录"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-get-user-info/account-get-user-info-overview",
            children: "获取华为账号用户信息"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin",
            children: "获取华为账号风险等级"
          }), "等。实现免用户操作登录，获得安全快捷的应用登录体验。"]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户首次登录应用",
      children: "用户首次登录应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若应用未接入过华为账号登录，不存在使用华为账号登录过的应用账号，请参照以下流程接入华为账号一键登录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 华为账号一键登录（用户首次登录应用）流程图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310933)/* ["default"] */.A) + "",
        width: "7257",
        height: "5075"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预取号阶段（序号1-4）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["用户打开应用后，应用scope传quickLoginAnonymousPhone调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
                children: "AuthorizationWithHuaweiIDRequest"
              }), "授权请求获取匿名手机号。如果获取到匿名手机号为空，应用需要展示其他登录方式。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(774264)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取匿名手机号需要进行超时处理，应用可根据实际场景设置超时时间，推荐设置5秒保证用户体验。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["若华为账号未登录，调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
                children: "AuthorizationWithHuaweiIDRequest"
              }), "授权请求会返回", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
                children: "1001502001 用户未登录华为账号"
              }), "错误码，此时应用需要展示其他登录方式进行应用登录。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示一键登录页面阶段（序号5）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["获取到的匿名手机号需要展示在页面上并设置好隐私协议，设置登录按钮类型为LoginType.QUICK_LOGIN，展示包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button#loginwithhuaweiidbutton",
              children: "LoginWithHuaweiIDButton"
            }), "组件的一键登录页面。应用可结合实际登录风控场景，通过组件参数传入风险等级标识", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-byquicklogin",
              children: "获取华为账号风险等级"
            }), "，通过华为账号一键登录获取用户风险等级，对恶意账号进行风控，提升应用的安全等级。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击一键登录关联用户账号阶段（序号6-16）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["用户同意协议后，点击华为账号一键登录按钮，应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#huaweiidcredential",
              children: "HuaweiIDCredential"
            }), "获取到Authorization Code等数据。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["将获取的Authorization Code数据传给应用服务端，应用服务端通过Authorization Code调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
              children: "/oauth2/v6/quickLogin/getPhoneNumber接口"
            }), "获取用户完整手机号和UnionID、OpenID。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用通过关联用户手机号和UnionID、OpenID完成用户登录。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户非首次登录应用可选",
      children: "用户非首次登录应用（可选）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入过华为账号登录，存在使用华为账号登录过的用户账号，即根据UnionID/OpenID判断用户已关联过应用系统数据库，则需要参照以下流程开发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 华为账号一键登录（用户非首次登录应用）流程图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(376870)/* ["default"] */.A) + "",
        width: "7494",
        height: "3625"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
          children: "AuthorizationWithHuaweiIDRequest"
        }), "授权请求获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidresponse",
          children: "AuthorizationWithHuaweiIDResponse"
        }), "响应结果中的Authorization Code。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用服务端通过Authorization Code调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
          children: "/oauth2/v6/quickLogin/getPhoneNumber接口"
        }), "获取用户相关信息。通过Authorization Code凭证获取用户信息可以有效避免黑客通过数据遍历、身份伪造、重放攻击等手段导致的安全风险。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用对用户身份标识UnionID/OpenID、业务登录凭证SessionId信息进行认证后，通过UnionID/OpenID判断用户是否已关联应用系统数据库，如已关联，结合风控、安全因素及自身业务场景判断，可展示已关联的账号，由用户选择是否使用华为账号登录应用，或免用户操作，静默登录应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号一键登录按钮关键接口如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            }), "传入一键登录的scope：quickLoginAnonymousPhone，即可在授权结果中获取到用户的匿名手机号和Authorization Code。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过Promise方式执行授权操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button#loginwithhuaweiidbutton",
              children: "LoginWithHuaweiIDButton"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号Button登录组件。  该组件仅纯文本样式支持华为账号一键登录功能。开发者可以通过调整按钮的大小、圆角等参数以适配HarmonyOS应用登录界面。如果仍然不能满足开发者的诉求，可以使用", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "注册华为账号一键登录按钮的结果回调。"
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
            children: "设置协议状态方法。用户未同意协议前设置协议状态为NOT_ACCEPTED，用户同意协议后设置协议状态为ACCEPTED，才可以完成华为账号登录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#onclickevent-1",
              children: "onClickEvent"
            }), "(callback: AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#clickevent",
              children: "ClickEvent"
            }), ">): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginwithhuaweiidbuttoncontroller",
              children: "LoginWithHuaweiIDButtonController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册华为账号一键登录按钮的点击事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#continuelogin",
              children: "continueLogin"
            }), "(callback: AsyncCallback<void>): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginwithhuaweiidbuttoncontroller",
              children: "LoginWithHuaweiIDButtonController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户点击协议弹框的同意并登录按钮结果回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459156)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述接口需在页面或自定义组件生命周期内调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在进行代码开发前，请先确认已完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-preparations/account-config-permissions",
            children: "开发准备"
          }), "工作。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若未配置签名和指纹，将报错", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-faq/account-faq-1",
            children: "1001500001 应用指纹证书校验失败"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若未申请“华为账号一键登录”权限，将报错", (0,jsx_runtime.jsx)(_components.a, {
            href: "/account-kit-guide/account-faq/account-faq-2",
            children: "1001502014 应用未申请scopes或permissions权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若应用开启了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide",
            children: "代码混淆"
          }), "，应用工程代码中获取到的quickLoginAnonymousPhone（匿名手机号）属性需要配置混淆白名单防止编译release包时被混淆，否则无法获取到匿名手机号。在调用获取匿名手机号方法工程模块的混淆文件obfuscation-rules.txt中添加："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 开发者开启属性混淆需要配置quickLoginAnonymousPhone属性白名单防止其被混淆\n-enable-property-obfuscation\n-keep-property-name\nquickLoginAnonymousPhone\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "客户端开发",
      children: "客户端开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考下述内容自行开发，也可使用Account Kit为常见的三方开发框架（Flutter、H5、React-Native、uni-app）提供的SampleCode示例工程，用于接入华为账号一键登录能力，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-faq/account-faq-18",
        children: "三方开发框架接入华为账号一键登录"
      }), "进行开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户首次登录应用-1",
      children: "用户首次登录应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入Account Kit的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication",
            children: "authentication"
          }), "模块及相关公共模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { authentication } from '@kit.AccountKit';\nimport { util } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取匿名手机号。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication",
            children: "authentication"
          }), "模块的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
            children: "AuthorizationWithHuaweiIDRequest"
          }), "请求获取华为账号用户的匿名手机号。匿名手机号用于登录页面展示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(916879)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该场景下forceAuthorization参数需设置为false。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据获取的响应结果判断，可能存在以下场景："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1）返回ArkTS错误码，开发者可参考下表针对不同错误码进行处理："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 获取匿名手机号错误码处理"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "处理建议"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1001502001"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户未登录华为账号"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用展示其他登录方式"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1001502005"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "网络异常"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "提示用户检查当前网络状态后重试"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1001502009"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "内部错误"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用展示其他登录方式"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1001502014"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用未申请scopes或permissions权限"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/account-kit-guide/account-faq/account-faq-2",
                  children: "1001502014 应用未申请scopes或permissions权限的可能原因和解决方法"
                }), "解决该报错"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1001500001"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用指纹证书校验失败"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/account-kit-guide/account-faq/account-faq-1",
                  children: "1001500001 应用指纹证书校验失败的可能原因和解决办法"
                }), "解决该报错"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1001500002"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "重复请求"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "重复请求，应用无需处理"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1001500003"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持该scopes或permissions"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["1、华为账号用户注册地可能为中国境外、香港特别行政区、澳门特别行政区或中国台湾，应用展示其他登录方式  2、仅在5.1.1(19)支持TV设备，其他版本应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button",
                  children: "华为账号登录"
                }), "进行登录"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "12300001"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "系统服务异常"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用展示其他登录方式"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2）获取到的匿名手机号为空，说明华为账号没有绑定手机号、权限未申请或未生效，上述异常场景应用需要展示其他登录方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["3）若开发者开启了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide",
            children: "代码混淆"
          }), "，需将quickLoginAnonymousPhone（匿名手机号）属性加入混淆白名单，防止其被混淆。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  getQuickLoginAnonymousPhone() {\n    // 创建授权请求，并设置参数\n    const authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\n    // 获取匿名手机号需传quickLoginAnonymousPhone这个scope，传参之前需要先申请“华为账号一键登录”权限，否则会返回1001502014错误码\n    authRequest.scopes = ['quickLoginAnonymousPhone'];\n    // 用于防跨站点请求伪造\n    authRequest.state = util.generateRandomUUID();\n    // 一键登录场景该参数必须设置为false\n    authRequest.forceAuthorization = false;\n    const controller = new authentication.AuthenticationController();\n    try {\n      controller.executeRequest(authRequest).then((response: authentication.AuthorizationWithHuaweiIDResponse) => {\n        // 获取到匿名手机号\n        const anonymousPhone = response.data?.extraInfo?.quickLoginAnonymousPhone as string;\n        if (anonymousPhone) {\n          hilog.info(0x0000, 'testTag', 'Succeeded in authentication.');\n          const quickLoginAnonymousPhone: string = anonymousPhone;\n          return;\n        }\n        hilog.info(0x0000, 'testTag', 'Succeeded in authentication. AnonymousPhone is empty.');\n        // 未获取到匿名手机号，应用需要跳转到其他方式登录页面\n      }).catch((error: BusinessError) => {\n        this.dealAllError(error);\n      })\n    } catch (error) {\n      this.dealAllError(error);\n    }\n  }\n\n  // 错误处理\n  dealAllError(error: BusinessError): void {\n    hilog.error(0x0000, 'testTag',\n      `Failed to get quickLoginAnonymousPhone, errorCode is ${error.code}, errorMessage is ${error.message}`);\n    // 在应用登录涉及UI交互场景下，建议按照如下错误码指导提示用户\n    if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n      // 华为账号未登录，应用需要展示其他登录方式\n    } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n      // 网络异常，请检查当前网络状态并重试或展示其他登录方式\n    } else if (error.code === ErrorCode.ERROR_CODE_INTERNAL_ERROR) {\n      // 登录失败，应用需要展示其他登录方式\n    } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n      // 系统服务异常，应用需要展示其他登录方式\n    } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n      // 重复请求，应用无需处理\n    } else {\n      // 应用登录失败，应用需要展示其他登录方式\n    }\n  }\n\n  export enum ErrorCode {\n    // 账号未登录\n    ERROR_CODE_LOGIN_OUT = 1001502001,\n    // 网络错误\n    ERROR_CODE_NETWORK_ERROR = 1001502005,\n    // 内部错误\n    ERROR_CODE_INTERNAL_ERROR = 1001502009,\n    // 系统服务异常\n    ERROR_CODE_SYSTEM_SERVICE = 12300001,\n    // 重复请求\n    ERROR_CODE_REQUEST_REFUSE = 1001500002\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示一键登录页面并获取Authorization Code"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将获取到的匿名手机号设置给下面QuickLoginButtonComponent组件示例代码中的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "quickLoginAnonymousPhone"
            })
          }), "变量，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button",
            children: "LoginWithHuaweiIDButton"
          }), "组件，实现应用自己的登录页面，并展示华为账号一键登录按钮和华为账号用户认证协议（Account Kit提供跳转链接，应用需实现协议跳转，参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
            children: "约束与限制"
          }), "第2点），用户同意协议并点击一键登录按钮后，可获取到Authorization Code，将该值传给应用服务端用于获取用户信息（完整手机号、UnionID、OpenID）。通过code凭证获取用户信息可以有效避免因数据遍历、身份伪造、重放攻击导致的安全风险。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { loginComponentManager, LoginWithHuaweiIDButton } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { connection } from '@kit.NetworkKit';\n\n@Component\nstruct QuickLoginComponent {\n  // 第二步获取的匿名手机号传到此处\n  @State quickLoginAnonymousPhone: string = '';\n\n  build() {\n    if (this.quickLoginAnonymousPhone) {\n      QuickLoginButtonComponent({\n        quickLoginAnonymousPhone: this.quickLoginAnonymousPhone\n      })\n    } else {\n      // 授权获取匿名手机号为空时，请应用自行实现其他方式登录页面\n    }\n  }\n}\n\n@Component\nstruct QuickLoginButtonComponent {\n  logTag: string = 'QuickLoginButtonComponent';\n  domainId: number = 0x0000;\n  @State quickLoginAnonymousPhone: string = '';\n  // 是否勾选协议\n  @State isSelected: boolean = false;\n  // 华为账号用户认证协议链接，此处仅为示例，实际开发过程中，出于可维护性、安全性等方面考虑，域名不建议硬编码在本地\n  private static USER_AUTHENTICATION_PROTOCOL: string =\n    'https://privacy.consumer.huawei.com/legal/id/authentication-terms.htm?code=CN&language=zh-CN';\n  private static USER_SERVICE_TAG = '用户服务协议';\n  private static PRIVACY_TAG = '隐私协议';\n  private static USER_AUTHENTICATION_TAG = '华为账号用户认证协议';\n  // 定义LoginWithHuaweiIDButton展示的隐私文本，展示应用的用户服务协议、隐私协议和华为账号用户认证协议\n  privacyText: loginComponentManager.PrivacyText[] = [{\n    text: '已阅读并同意',\n    type: loginComponentManager.TextType.PLAIN_TEXT\n  }, {\n    text: '《用户服务协议》',\n    tag: QuickLoginButtonComponent.USER_SERVICE_TAG,\n    type: loginComponentManager.TextType.RICH_TEXT\n  }, {\n    text: '《隐私协议》',\n    tag: QuickLoginButtonComponent.PRIVACY_TAG,\n    type: loginComponentManager.TextType.RICH_TEXT\n  }, {\n    text: '和',\n    type: loginComponentManager.TextType.PLAIN_TEXT\n  }, {\n    text: '《华为账号用户认证协议》',\n    tag: QuickLoginButtonComponent.USER_AUTHENTICATION_TAG,\n    type: loginComponentManager.TextType.RICH_TEXT\n  }, {\n    text: '。',\n    type: loginComponentManager.TextType.PLAIN_TEXT\n  }];\n  // 构造LoginWithHuaweiIDButton组件的控制器\n  controller: loginComponentManager.LoginWithHuaweiIDButtonController =\n    new loginComponentManager.LoginWithHuaweiIDButtonController()\n      /**\n       * 当应用使用自定义的登录页时，如果用户未同意协议，需要设置协议状态为NOT_ACCEPTED，当用户同意协议后再设置\n       * 协议状态为ACCEPTED，才可以使用华为账号一键登录功能\n       */\n      .setAgreementStatus(loginComponentManager.AgreementStatus.NOT_ACCEPTED)\n      .onClickLoginWithHuaweiIDButton((error: BusinessError | undefined,\n        response: loginComponentManager.HuaweiIDCredential) => {\n        this.handleLoginWithHuaweiIDButton(error, response);\n      })\n      .onClickEvent((error: BusinessError, clickEvent: loginComponentManager.ClickEvent) => {\n        if (error) {\n          hilog.error(this.domainId, this.logTag,\n            `onClickEvent error. errCode is ${error?.code}, errMessage is ${error?.message}`);\n          return;\n        }\n        hilog.info(this.domainId, this.logTag, `onClickEvent clickEvent: ${clickEvent}`);\n        // 设置按钮为不可点击态，待业务逻辑处理完成后，再设置为可点击态\n        this.controller.setEnabled(false);\n      });\n  agreementDialog: CustomDialogController = new CustomDialogController({\n    builder: AgreementDialog({\n      privacyText: this.privacyText,\n      cancel: () => {\n        this.agreementDialog.close();\n        this.controller.setAgreementStatus(loginComponentManager.AgreementStatus.NOT_ACCEPTED);\n      },\n      confirm: () => {\n        this.agreementDialog.close();\n        this.isSelected = true;\n        this.controller.setAgreementStatus(loginComponentManager.AgreementStatus.ACCEPTED);\n        // 调用此方法，同意协议与登录一并完成，无需再次点击登录按钮\n        this.controller.continueLogin((error: BusinessError) => {\n          if (error) {\n            hilog.error(this.domainId, this.logTag,\n              `Failed to login with agreementDialog. errCode is ${error.code}, errMessage is ${error.message}`);\n          } else {\n            hilog.info(this.domainId, this.logTag,\n              'Succeeded in clicking agreementDialog continueLogin.');\n          }\n        });\n      },\n      clickHyperlinkText: () => {\n        this.agreementDialog.close();\n        this.jumpToPrivacyWebView();\n      }\n    }),\n    autoCancel: false,\n    alignment: DialogAlignment.Center,\n  });\n\n  // 传递页面渲染所需的数据，如匿名手机号等\n  aboutToAppear(): void {\n  }\n\n  // Toast提示\n  showToast(resource: string) {\n    try {\n      this.getUIContext().getPromptAction().showToast({\n        message: resource,\n        duration: 2000\n      });\n    } catch (error) {\n      const message = (error as BusinessError).message\n      const code = (error as BusinessError).code\n      hilog.error(this.domainId, this.logTag, `showToast args  errCode is ${code}, errMessage is ${message}`);\n    }\n  }\n\n  // 跳转华为账号用户认证协议页，该页面需在工程main_pages.json文件配置\n  jumpToPrivacyWebView() {\n    try {\n      // 需在module.json5中配置“ohos.permission.GET_NETWORK_INFO”权限\n      const checkNetConn = connection.hasDefaultNetSync();\n      if (!checkNetConn) {\n        this.showToast('服务或网络异常，请稍后重试');\n        return;\n      }\n    } catch (error) {\n      const message = error.message as string;\n      const code = error.code as string;\n      hilog.error(0x0000, 'testTag', `Failed to hasDefaultNetSync, errCode is ${code}, errMessage is ${message}`);\n    }\n    this.getUIContext().getRouter().pushUrl({\n      // 需在module.json5配置“ohos.permission.INTERNET”网络权限\n      url: 'pages/WebPage',\n      params: {\n        isFromDialog: true,\n        url: QuickLoginButtonComponent.USER_AUTHENTICATION_PROTOCOL,\n      }\n    }, (err) => {\n      if (err) {\n        hilog.error(this.domainId, this.logTag,\n          `Failed to jumpToPrivacyWebView, errCode is ${err.code}, errMessage is ${err.message}`);\n      }\n    });\n  }\n\n  handleLoginWithHuaweiIDButton(error: BusinessError | undefined,\n    response: loginComponentManager.HuaweiIDCredential) {\n    if (error) {\n      hilog.error(this.domainId, this.logTag,\n        `Failed to login with LoginWithHuaweiIDButton. errCode is ${error.code}, errMessage is ${error.message}`);\n      if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n        this.getUIContext().showAlertDialog(\n          {\n            message: \"网络未连接，请检查网络设置。\",\n            offset: { dx: 0, dy: -12 },\n            alignment: DialogAlignment.Bottom,\n            autoCancel: false,\n            confirm: {\n              value: \"知道了\",\n              action: () => {\n              }\n            }\n          }\n        );\n      } else if (error.code === ErrorCode.ERROR_CODE_AGREEMENT_STATUS_NOT_ACCEPTED) {\n        // 未同意协议，弹出协议弹框，推荐使用该回调方式\n        this.agreementDialog.open();\n      } else if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n        // 华为账号未登录提示\n        this.showToast(\"华为账号未登录，请重试\");\n      } else if (error.code === ErrorCode.ERROR_CODE_NOT_SUPPORTED) {\n        // 不支持该scopes或permissions提示\n        this.showToast(\"该scopes或permissions不支持\");\n      } else if (error.code === ErrorCode.ERROR_CODE_PARAMETER_ERROR) {\n        // 参数错误提示\n        this.showToast(\"参数错误\");\n      } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n        // 用户取消，无需特别处理\n      } else {\n        // 其他提示系统或服务异常\n        this.showToast('服务或网络异常，请稍后重试');\n      }\n      this.controller.setEnabled(true);\n      return;\n    }\n    try {\n      if (this.isSelected) {\n        if (response) {\n          hilog.info(this.domainId, this.logTag, 'Succeeded in clicking LoginWithHuaweiIDButton.');\n          // 开发者根据实际业务情况使用以下信息\n          const authCode = response.authorizationCode;\n        }\n      } else {\n        this.agreementDialog.open();\n      }\n    } catch (err) {\n      hilog.error(this.domainId, this.logTag,\n        `Failed to login with LoginWithHuaweiIDButton, errCode: ${err.code}, errMessage: ${err.message}`);\n      this.getUIContext().showAlertDialog(\n        {\n          message: '服务或网络异常，请稍后重试',\n          offset: { dx: 0, dy: -12 },\n          alignment: DialogAlignment.Bottom,\n          autoCancel: false,\n          confirm: {\n            value: '知道了',\n            action: () => {\n            }\n          }\n        }\n      );\n    } finally {\n      this.controller.setEnabled(true);\n    }\n  }\n\n  build() {\n    Scroll() {\n      Column() {\n        Column() {\n          Column() {\n            // 此处为示例资源，开发者可使用应用图标进行替换，以保证正常编译运行\n            Image($r('app.media.app_icon'))\n              .width(48)\n              .height(48)\n              .draggable(false)\n              .copyOption(CopyOptions.None)\n              .onComplete(() => {\n                hilog.info(this.domainId, this.logTag, 'appIcon loading success.');\n              })\n              .onError(() => {\n                hilog.error(this.domainId, this.logTag, 'appIcon loading fail.');\n              })\n\n            Text($r('app.string.app_name'))\n              .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n              .fontWeight(FontWeight.Medium)\n              .fontWeight(FontWeight.Bold)\n              .maxFontSize($r('sys.float.ohos_id_text_size_headline8'))\n              .minFontSize($r('sys.float.ohos_id_text_size_body1'))\n              .maxLines(1)\n              .fontColor($r('sys.color.ohos_id_color_text_primary'))\n              .constraintSize({ maxWidth: '100%' })\n              .margin({\n                top: 12,\n              })\n\n            Text('应用描述')\n              .fontSize($r('sys.float.ohos_id_text_size_body2'))\n              .fontColor($r('sys.color.ohos_id_color_text_secondary'))\n              .fontFamily($r('sys.string.ohos_id_text_font_family_regular'))\n              .fontWeight(FontWeight.Regular)\n              .constraintSize({ maxWidth: '100%' })\n              .margin({\n                top: 8,\n              })\n          }.margin({\n            top: 100\n          })\n\n          Column() {\n            Text(this.quickLoginAnonymousPhone)\n              .fontSize(36)\n              .fontColor($r('sys.color.ohos_id_color_text_primary'))\n              .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n              .fontWeight(FontWeight.Bold)\n              .lineHeight(48)\n              .textAlign(TextAlign.Center)\n              .maxLines(1)\n              .constraintSize({ maxWidth: '100%', minHeight: 48 })\n\n            Text('华为账号绑定号码')\n              .fontSize($r('sys.float.ohos_id_text_size_body2'))\n              .fontColor($r('sys.color.ohos_id_color_text_secondary'))\n              .fontFamily($r('sys.string.ohos_id_text_font_family_regular'))\n              .fontWeight(FontWeight.Regular)\n              .lineHeight(19)\n              .textAlign(TextAlign.Center)\n              .maxLines(1)\n              .constraintSize({ maxWidth: '100%' })\n              .margin({\n                top: 8\n              })\n          }.margin({\n            top: 64\n          })\n\n          Column() {\n            LoginWithHuaweiIDButton({\n              params: {\n                // LoginWithHuaweiIDButton支持的样式\n                style: loginComponentManager.Style.BUTTON_RED,\n                // 账号登录按钮在登录过程中展示加载态\n                extraStyle: {\n                  buttonStyle: new loginComponentManager.ButtonStyle().loadingStyle({\n                    show: true\n                  })\n                },\n                // LoginWithHuaweiIDButton的边框圆角半径\n                borderRadius: 24,\n                // LoginWithHuaweiIDButton支持的登录类型\n                loginType: loginComponentManager.LoginType.QUICK_LOGIN,\n                // LoginWithHuaweiIDButton支持按钮的样式跟随系统深浅色模式切换\n                supportDarkMode: true\n              },\n              controller: this.controller\n            })\n          }\n          .height(40)\n          .margin({\n            top: 56\n          })\n\n          Column() {\n            Button({\n              type: ButtonType.Capsule,\n              stateEffect: true\n            }) {\n              Text('其他方式登录')\n                .fontColor($r('sys.color.ohos_id_color_text_primary_activated'))\n                .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n                .fontWeight(FontWeight.Medium)\n                .fontSize($r('sys.float.ohos_id_text_size_button1'))\n                .focusable(true)\n                .focusOnTouch(true)\n                .textOverflow({ overflow: TextOverflow.Ellipsis })\n                .maxLines(1)\n                .padding({ left: 8, right: 8 })\n            }\n            .fontColor($r('sys.color.ohos_id_color_text_primary_activated'))\n            .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n            .fontWeight(FontWeight.Medium)\n            .backgroundColor($r('sys.color.ohos_id_color_button_normal'))\n            .focusable(true)\n            .focusOnTouch(true)\n            .constraintSize({ minHeight: 40 })\n            .width('100%')\n            .onClick(() => {\n              hilog.info(this.domainId, this.logTag, 'click optionalLoginButton.');\n            })\n          }.margin({ top: 16 })\n        }.width('100%')\n\n        Row() {\n          Row() {\n            Checkbox({ name: 'privacyCheckbox', group: 'privacyCheckboxGroup' })\n              .width(24)\n              .height(24)\n              .focusable(true)\n              .focusOnTouch(true)\n              .margin({ top: 0 })\n              .select(this.isSelected)\n              .onChange((value: boolean) => {\n                if (value) {\n                  this.isSelected = true;\n                  this.controller.setAgreementStatus(loginComponentManager.AgreementStatus.ACCEPTED);\n                } else {\n                  this.isSelected = false;\n                  this.controller.setAgreementStatus(loginComponentManager.AgreementStatus.NOT_ACCEPTED);\n                }\n                hilog.info(this.domainId, this.logTag, `agreementChecked: ${value}`);\n              })\n          }\n\n          Row() {\n            Text() {\n              ForEach(this.privacyText, (item: loginComponentManager.PrivacyText) => {\n                if (item?.type === loginComponentManager.TextType.PLAIN_TEXT && item?.text) {\n                  Span(item?.text)\n                    .fontColor($r('sys.color.ohos_id_color_text_secondary'))\n                    .fontFamily($r('sys.string.ohos_id_text_font_family_regular'))\n                    .fontWeight(FontWeight.Regular)\n                    .fontSize($r('sys.float.ohos_id_text_size_body3'))\n                } else if (item?.type === loginComponentManager.TextType.RICH_TEXT && item?.text) {\n                  Span(item?.text)\n                    .fontColor($r('sys.color.ohos_id_color_text_primary_activated'))\n                    .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n                    .fontWeight(FontWeight.Medium)\n                    .fontSize($r('sys.float.ohos_id_text_size_body3'))\n                    .onClick(() => {\n                      // 应用需要根据item.tag实现协议页面的跳转逻辑\n                      hilog.info(this.domainId, this.logTag, `click privacy text tag: ${item.tag}`);\n                      // 华为账号用户认证协议\n                      if (item.tag === QuickLoginButtonComponent.USER_AUTHENTICATION_TAG) {\n                        this.jumpToPrivacyWebView();\n                      }\n                    })\n                }\n              }, (item: loginComponentManager.PrivacyText) => item.text.toString())\n            }\n            .width('100%')\n          }\n          .margin({ left: 12 })\n          .layoutWeight(1)\n          .constraintSize({ minHeight: 24 })\n        }\n        .alignItems(VerticalAlign.Top)\n        .margin({\n          top: 16,\n          bottom: 16\n        })\n      }\n      .justifyContent(FlexAlign.SpaceBetween)\n      .constraintSize({ minHeight: '100%' })\n      .margin({\n        left: 16,\n        right: 16\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@CustomDialog\nexport struct AgreementDialog {\n  logTag: string = 'AgreementDialog';\n  domainId: number = 0x0000;\n  dialogController?: CustomDialogController;\n  cancel: () => void = () => {\n  };\n  confirm: () => void = () => {\n  };\n  clickHyperlinkText: () => void = () => {\n  };\n  privacyText: loginComponentManager.PrivacyText[] = [];\n  private static USER_AUTHENTICATION_TAG = '华为账号用户认证协议';\n\n  build() {\n    Column() {\n      Row() {\n        Text('用户协议与隐私条款')\n          .id('loginPanel_agreement_dialog_privacy_title')\n          .maxFontSize($r('sys.float.ohos_id_text_size_headline8'))\n          .minFontSize($r('sys.float.ohos_id_text_size_body1'))\n          .fontColor($r('sys.color.ohos_id_color_text_primary'))\n          .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n          .fontWeight(FontWeight.Bold)\n          .textAlign(TextAlign.Center)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .maxLines(2)\n      }\n      .alignItems(VerticalAlign.Center)\n      .constraintSize({ minHeight: 56, maxWidth: 400 })\n      .margin({\n        left: $r('sys.float.ohos_id_max_padding_start'),\n        right: $r('sys.float.ohos_id_max_padding_start')\n      })\n\n      Row() {\n        Text() {\n          ForEach(this.privacyText, (item: loginComponentManager.PrivacyText) => {\n            if (item?.type === loginComponentManager.TextType.PLAIN_TEXT && item?.text) {\n              Span(item?.text)\n                .fontSize($r('sys.float.ohos_id_text_size_body1'))\n                .fontColor($r('sys.color.ohos_id_color_text_primary'))\n                .fontFamily($r('sys.string.ohos_id_text_font_family_regular'))\n                .fontWeight(FontWeight.Regular)\n            } else if (item?.type === loginComponentManager.TextType.RICH_TEXT && item?.text) {\n              Span(item?.text)\n                .fontSize($r('sys.float.ohos_id_text_size_body1'))\n                .fontColor('#CE0E2D')\n                .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n                .fontWeight(FontWeight.Medium)\n                .onClick(() => {\n                  // 应用需要根据item.tag实现协议页面的跳转逻辑\n                  hilog.info(this.domainId, this.logTag, `click privacy text tag: ${item.tag}`);\n                  // 华为账号用户认证协议\n                  if (item.tag === AgreementDialog.USER_AUTHENTICATION_TAG) {\n                    hilog.info(this.domainId, this.logTag, 'AgreementDialog click.');\n                    this.clickHyperlinkText();\n                  }\n                })\n            }\n          }, (item: loginComponentManager.PrivacyText) => item.text.toString())\n        }\n        .width('100%')\n        .textOverflow({ overflow: TextOverflow.Ellipsis })\n        .maxLines(10)\n        .textAlign(TextAlign.Start)\n        .focusable(true)\n        .focusOnTouch(true)\n        .padding({ left: 24, right: 24 })\n      }.width('100%')\n\n      Flex({\n        direction: FlexDirection.Row\n      }) {\n        Button('取消',\n          { type: ButtonType.Capsule, stateEffect: true })\n          .id('loginPanel_agreement_cancel_btn')\n          .fontColor($r('sys.color.ohos_id_color_text_primary'))\n          .fontSize($r('sys.float.ohos_id_text_size_button1'))\n          .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n          .backgroundColor(Color.Transparent)\n          .fontWeight(FontWeight.Medium)\n          .focusable(true)\n          .focusOnTouch(true)\n          .constraintSize({ minHeight: 40, maxWidth: 400 })\n          .width('50%')\n          .onClick(() => {\n            hilog.info(this.domainId, this.logTag, 'AgreementDialog cancel.');\n            this.cancel();\n          })\n\n        Button('同意并登录',\n          { type: ButtonType.Capsule, stateEffect: true })\n          .id('loginPanel_agreement_dialog_huawei_id_login_btn')\n          .fontColor(Color.White)\n          .backgroundColor('#CE0E2D')\n          .fontSize($r('sys.float.ohos_id_text_size_button1'))\n          .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))\n          .fontWeight(FontWeight.Medium)\n          .focusable(true)\n          .focusOnTouch(true)\n          .constraintSize({ minHeight: 40, maxWidth: 400 })\n          .width('50%')\n          .onClick(() => {\n            hilog.info(this.domainId, this.logTag, 'AgreementDialog confirm.');\n            this.confirm();\n          })\n      }\n      .margin({\n        top: 8,\n        left: $r('sys.float.ohos_id_elements_margin_horizontal_l'),\n        right: $r('sys.float.ohos_id_elements_margin_horizontal_l'),\n        bottom: 16\n      })\n    }.backgroundColor($r('sys.color.ohos_id_color_dialog_default_bg'))\n    .padding({\n      left: 16,\n      right: 16\n    })\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 该账号不支持一键登录，如海外账号\n  ERROR_CODE_NOT_SUPPORTED = 1001500003,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 内部错误\n  ERROR_CODE_INTERNAL_ERROR = 1001502009,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 用户未同意用户协议\n  ERROR_CODE_AGREEMENT_STATUS_NOT_ACCEPTED = 1005300001,\n  // 参数错误\n  ERROR_CODE_PARAMETER_ERROR = 401,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下是华为账号用户认证协议展示页示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 华为账号用户认证协议展示页\n@Entry\n@Component\nstruct WebPage {\n  @State webUrl?: string = '';\n  @State progress: number = 0;\n  logTag: string = 'WebPage';\n  domainId: number = 0x0000;\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Column() {\n        Button({ type: ButtonType.Normal }) {\n          Image($r('sys.media.ohos_ic_compnent_titlebar_back'))\n            .backgroundColor(Color.Transparent)\n            .borderRadius(20)\n            .width(24)\n            .height(24)\n            .draggable(false)\n            .autoResize(false)\n            .focusable(true)\n            .fillColor($r('sys.color.ohos_id_color_titlebar_icon'))\n            .matchTextDirection(true)\n        }\n        .alignSelf(ItemAlign.Start)\n        .backgroundColor($r('sys.color.ohos_id_color_button_normal'))\n        .borderRadius(20)\n        .width(40)\n        .height(40)\n        .onClick(() => {\n          this.getUIContext().getRouter().back();\n        })\n      }\n      .height(56)\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n      .margin({\n        top: 36,\n        left: 16\n      })\n\n      Progress({ value: this.progress, type: ProgressType.Linear })\n        .width('100%')\n        .visibility(this.progress <= 99 ? Visibility.Visible : Visibility.None)\n\n      Web({ src: this.webUrl ?? '', controller: this.controller })\n        .backgroundColor(Color.Transparent)\n        .margin({ bottom: 60 })\n        .onProgressChange((event) => {\n          hilog.info(this.domainId, this.logTag,\n            'onProgressChange: ', (event ? event.newProgress : -1));\n          this.progress = event ? event.newProgress : 0;\n        })\n        .darkMode(WebDarkMode.Auto)\n        .forceDarkAccess(true)\n        .onLoadIntercept((event) => {\n          hilog.info(this.domainId, this.logTag, 'onLoadIntercept');\n          return false;\n        })\n        .onErrorReceive((event) => {\n          if (event) {\n            hilog.error(this.domainId, this.logTag, `onErrorReceive,errorInfo: ${event?.error?.getErrorInfo()}`);\n          }\n        })\n    }\n    .alignItems(HorizontalAlign.Start)\n    .padding({ left: 12, right: 12, bottom: 60 })\n    .width('100%')\n    .height('100%')\n  }\n\n  aboutToAppear(): void {\n    hilog.info(0x0000, 'testTag', 'aboutToAppear');\n    const params = this.getUIContext().getRouter().getParams() as Record<string, string>;\n    this.webUrl = params.url ?? '';\n    hilog.info(0x0000, 'testTag', `webUrl: ${this.webUrl}`);\n  }\n\n  aboutToDisappear(): void {\n    hilog.info(0x0000, 'testTag', 'aboutToDisappear');\n    if (this.webUrl) {\n        try {\n            this.controller.stop();\n          } catch (error) {\n            hilog.error(0x0000, 'testTag',\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户非首次登录应用可选-1",
      children: "用户非首次登录应用（可选）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户非首次登录应用流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%A8%E6%88%B7%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E5%BA%94%E7%94%A8-1",
        children: "首次登录应用开发流程"
      }), "中的导入模块及获取匿名手机号，获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidresponse",
        children: "AuthorizationWithHuaweiIDResponse"
      }), "响应结果中的Authorization Code。可能存在的异常场景及处理方法，可参考表1 获取匿名手机号错误码处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正确获取到Authorization Code，开发者可将Authorization Code传给应用服务端用于获取用户身份标识（UnionID、OpenID），即可查询该用户是否已关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1）如已关联，结合风控、安全因素及自身业务场景判断，可展示已关联的账号，由用户选择是否使用华为账号登录应用，或免用户操作，静默登录应用，客户端开发结束。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2）如未关联，则参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%A8%E6%88%B7%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E5%BA%94%E7%94%A8-1",
        children: "首次登录应用开发流程"
      }), "中的展示一键登录页面并获取Authorization Code继续开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "借助deveco-studio辅助开发可选",
      children: "借助DevEco Studio辅助开发（可选）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开需要提供一键登录功能的页面，在页面的build()中创建一个容器（如Column）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio菜单栏点击View > Tool Windows > Kit Assistant，或使用快捷键Alt + K，进入Kit Assistant页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在左侧目录中点击选中AccountKit > QuickLoginButton，并拖拽至新创建的容器中。即可在当前位置插入相应的代码片段。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(559304)/* ["default"] */.A) + "",
            width: "2446",
            height: "1033"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若代码片段插入失败，可查询", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-code-edit/ide-kit-assistant",
            children: "快速插入场景化代码片段"
          }), "的说明排查原因。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在自动生成的代码段的getQuickLoginAnonymousPhone函数中，执行executeRequest函数可获取响应结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据获取的响应结果判断，可能存在以下场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "已正确获取到用户匿名手机号及Authorization Code，开发者可将Authorization Code传给应用服务端用于获取用户身份标识（UnionID、OpenID），即可查询该用户是否已关联。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "1）如已关联，结合风控、安全因素及自身业务场景判断，可展示已关联的账号，由用户选择是否使用华为账号登录应用，或免用户操作，静默登录应用，客户端开发结束。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "2）如未关联，再判断是否存在下面的异常场景，如无，则参考下面步骤5继续开发。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "存在如下异常场景："
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["1）返回", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
                children: "1001502001 用户未登录华为账号"
              }), "错误码，说明华为账号未登录。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["2）返回", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500003-%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5scopes%E6%88%96permissions",
                children: "1001500003 不支持该scopes或permissions"
              }), "错误码，说明华为账号用户注册地为中国境外、香港特别行政区、澳门特别行政区或中国台湾。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "3）获取到的匿名手机号为空，说明华为账号没有绑定手机号、权限未申请或未生效。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "上述异常场景应用需要展示其他登录方式。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据上述代码实现应用的登录页面，并展示华为账号一键登录按钮和华为账号用户认证协议（Account Kit提供跳转链接，应用需实现协议跳转，参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
            children: "约束与限制"
          }), "第2点），用户同意协议并点击一键登录按钮后，可获取到Authorization Code，将该值传给应用服务端用于获取用户信息（完整手机号、UnionID、OpenID）。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务端开发",
      children: "服务端开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用服务端使用Client ID、Client Secret、Authorization Code调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
          children: "/oauth2/v6/quickLogin/getPhoneNumber接口"
        }), "获取完整手机号和华为账号用户标识UnionID。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过获取到的完整手机号或UnionID查询该用户是否已关联应用系统数据库。如已关联，则绑定获取的UnionID与手机号到已有用户上（如已绑定，则可忽略），完成用户登录；如未关联，则创建新用户并绑定手机号与UnionID到该用户上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "客户端与服务端交互开发",
      children: "客户端与服务端交互开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用客户端到应用服务端的开发",
      children: "应用客户端到应用服务端的开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60689)/* ["default"] */.A) + "",
        width: "6038",
        height: "3194"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请先完成应用客户端一键登录的相关开发，相关开发指导参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BC%80%E5%8F%91",
            children: "客户端开发"
          }), "；"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts#section71222326515",
            children: "使用fetch发送网络请求"
          }), "完成客户端到服务端的接口请求，开发步骤如下；"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在应用客户端调用应用服务端提供的接口，将Authorization Code传输给应用的服务端；"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(356155)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用客户端与应用服务端的交互安全需要应用自行保证。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 客户端请求接口示例代码\nexport function rcpRequest(authCode: string) {\n  // 定义请求头\n  const headers: rcp.RequestHeaders = {\n    'accept': 'application/json'\n  };\n  // 定义要传递的参数\n  const postMessage: Record<string, string> = {\n    'authorizationCode': authCode\n  };\n  const securityConfig: rcp.SecurityConfiguration = {\n    tlsOptions: {\n      tlsVersion: 'TlsV1.3'\n    }\n  };\n  // 假设\"http://localhost:8080\"为应用服务端地址\n  const baseUrl = 'http://localhost:8080/login';\n  // 定义请求对象\n  const req = new rcp.Request(baseUrl, 'POST', headers, postMessage);\n  try {\n    // 创建通信会话对象\n    const session = rcp.createSession({ requestConfiguration: { security: securityConfig } });\n    // 发起请求\n    session.fetch(req).then((response) => {\n      hilog.info(0x0000, 'getRcpResult', 'Succeeded in getting result from server.');\n      if (response.body) {\n        const decoder = util.TextDecoder.create('utf-8');\n        const result = JSON.parse(decoder.decodeToString(new Uint8Array(response.body))) as Record<string, Object>;\n        // 此为代码示例，具体实现请以业务服务端实际返回数据结构为准\n        const phoneNumber: string = JSON.stringify(result['phone'] ?? '');\n        if (phoneNumber) {\n          // 应用处理相关逻辑\n        }\n      } else {\n        hilog.error(0x0000, 'getRcpResult', 'Failed to get response body.');\n      }\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'getRcpResult', `err: err code is ${err.code}, err message is ${JSON.stringify(err)}`);\n    });\n  } catch (err) {\n    hilog.error(0x0000, 'getRcpResult', `err: err code is ${err.code}, err message is ${JSON.stringify(err)}`);\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用服务端提供接口用于接收应用客户端获取到的Authorization Code；"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "java示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import com.huawei.account.common.Response;\nimport com.huawei.account.entity.PhoneNumberResp;\nimport com.huawei.account.entity.LoginReq;\nimport com.huawei.account.service.impl.LoginService;\nimport lombok.RequiredArgsConstructor;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\n\n@RestController\n@RequiredArgsConstructor\npublic class QuickLoginController {\n  private final LoginService loginService;\n\n  @PostMapping(\"/login\")\n  public Response login(@RequestBody LoginReq requestBody) {\n      PhoneNumberResp accountInfo = loginService.loginWithHuawei(requestBody.getAuthorizationCode());\n      return new Response(200, \"login success!\", accountInfo);\n  }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "python示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "from flask import Flask, request, jsonify\n\nfrom service.loginService import login_with_huawei\n\napp = Flask(__name__)\n\n@app.route('/login', methods=['POST'])\ndef login():\n    # 验证请求参数\n    request_data = request.get_json()\n    if not request_data or 'authorizationCode' not in request_data:\n        return jsonify({\n            'code': 400,\n            'message': 'invalid authorizationCode',\n            'data': None\n        })\n    authorization_code = request_data['authorizationCode']\n\n    # 调用服务层\n    user_info = login_with_huawei(authorization_code)\n    if not user_info:\n        return jsonify({\n            'code': 401,\n            'message': 'Failed to authenticate with Huawei',\n            'data': None\n        })\n\n    # 成功响应\n    return jsonify({\n        'code': 200,\n        'message': 'Login successful',\n        'data': user_info\n    })\n\n\nif __name__ == '__main__':\n    app.run(debug=True, port=8080)\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "go示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "package main\n\nimport (\n    loginService \"./service\"\n    \"encoding/json\"\n    \"errors\"\n    \"fmt\"\n    _ \"fmt\"\n    \"io/ioutil\"\n    \"log\"\n    \"net/http\"\n    _ \"strconv\"\n)\n\ntype LoginRequest struct {\n    AuthorizationCode string `json:\"authorizationCode\"`\n}\n\ntype Response struct {\n    UserInfo UserInfo `json:\"data\"`\n    Code     int      `json:\"code\"`\n    Message  string   `json:\"message\"`\n}\n\ntype UserInfo struct {\n    OpenID            string `json:\"openId\"`\n    UnionID           string `json:\"unionId\"`\n    LoginMobileNumber string `json:\"phoneNumber\"`\n    LoginMobileValid  int    `json:\"phoneNumberValid\"`\n    PurePhoneNumber   string `json:\"purePhoneNumber\"`\n    PhoneCountryCode  string `json:\"phoneCountryCode\"`\n}\n\ntype PhoneNumberErrRsp struct {\n    ResultCode int    `json:\"resultCode\"`\n    ResultDesc string `json:\"resultDesc\"`\n}\n\nfunc loginHandler(w http.ResponseWriter, r *http.Request) {\n    // 设置通用JSON响应头\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    // 1. 请求体解析\n    var loginRequest LoginRequest\n    if err := parseLoginRequest(r, &loginRequest); err != nil {\n       sendErrorResponse(w, http.StatusBadRequest, \"Invalid request format\")\n       return\n    }\n    // 2. 服务调用\n    resp, err := loginService.LoginWithHuawei(loginRequest.AuthorizationCode)\n    if err != nil {\n       log.Printf(\"Login service error: %v\", err)\n       sendErrorResponse(w, http.StatusInternalServerError, \"Authentication failed\")\n       return\n    }\n    defer resp.Body.Close()\n    // 3. 响应处理\n    userInfo, err := processUserInfoResponse(resp)\n    if err != nil {\n       log.Printf(\"User info processing error: %v\", err)\n       sendErrorResponse(w, http.StatusInternalServerError, \"Failed to process user data\")\n       return\n    }\n    // 4. 成功响应\n    sendSuccessResponse(w, userInfo)\n}\n\nfunc parseLoginRequest(r *http.Request, dest *LoginRequest) error {\n    body, err := ioutil.ReadAll(r.Body)\n    if err != nil {\n       return fmt.Errorf(\"failed to read request body: %v\", err)\n    }\n    defer r.Body.Close()\n    if err := json.Unmarshal(body, dest); err != nil {\n       return fmt.Errorf(\"invalid JSON format: %v\", err)\n    }\n    if dest.AuthorizationCode == \"\" {\n       return errors.New(\"missing authorization code\")\n    }\n    return nil\n}\n\nfunc processUserInfoResponse(resp *http.Response) (*UserInfo, error) {\n    if resp.StatusCode != http.StatusOK {\n       return nil, fmt.Errorf(\"unexpected status code: %d\", resp.StatusCode)\n    }\n    respBody, err := ioutil.ReadAll(resp.Body)\n    var phoneNumberErrRsp PhoneNumberErrRsp\n    err = json.Unmarshal(respBody, &phoneNumberErrRsp)\n    if err != nil {\n       return nil, fmt.Errorf(\"failed to unmarshal response body: %v\", err)\n    }\n    if phoneNumberErrRsp.ResultCode != 0 {\n       return nil, fmt.Errorf(\"api error %d: %s\", phoneNumberErrRsp.ResultCode, phoneNumberErrRsp.ResultDesc)\n    }\n    var userInfo UserInfo\n    err = json.Unmarshal(respBody, &userInfo)\n    if err != nil {\n       return nil, fmt.Errorf(\"failed to unmarshal response body: %v\", err)\n    }\n\n    /*\n     根据业务设计流程，在数据库中查询用户信息，比如：\n     1、使用UnionID查询用户，匹配到了则返回用户信息；\n     2、未匹配到则使用手机号查询用户，查到了则将华为账号UnionID关联到该用户，返回用户信息；\n     3、UnionID和手机号均没有匹配到，则进入注册流程\n    */\n\n    return &userInfo, nil\n}\n\nfunc sendErrorResponse(w http.ResponseWriter, statusCode int, message string) {\n    w.WriteHeader(statusCode)\n    response := Response{\n       Code:    statusCode,\n       Message: message,\n    }\n    if err := json.NewEncoder(w).Encode(response); err != nil {\n       log.Printf(\"Failed to encode error response: %v\", err)\n    }\n}\n\nfunc sendSuccessResponse(w http.ResponseWriter, userInfo *UserInfo) {\n    response := Response{\n       Code:     http.StatusOK,\n       Message:  \"Login successful\",\n       UserInfo: *userInfo,\n    }\n    if err := json.NewEncoder(w).Encode(response); err != nil {\n       log.Printf(\"Failed to encode success response: %v\", err)\n       w.WriteHeader(http.StatusInternalServerError)\n    }\n}\n\nfunc main() {\n    http.HandleFunc(\"/login\", loginHandler)\n    log.Println(\"Server starting on :8080...\")\n    if err := http.ListenAndServe(\":8080\", nil); err != nil {\n       log.Fatalf(\"Server failed: %v\", err)\n    }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "php示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<?php\n\nrequire __DIR__ . '/../service/LoginService.php';\n\n// 初始化路由\n$router = new Router();\n$router->addRoute('POST', '/login', function($request) {\n    // 获取POST数据\n    $requestBody = json_decode(file_get_contents('php://input'), true);\n    if (isset($requestBody['authorizationCode'])) {\n        // 调用服务层进行登录验证\n        $userInfo = LoginService::loginWithHuawei($requestBody['authorizationCode']);\n        if (!isset($userInfo)) {\n            echo json_encode([\n                'code' => 500,\n                'message' => 'login failed!'\n            ]);\n            return;\n        }\n\n        // 返回响应\n        echo json_encode([\n            'data' => $userInfo,\n            'code' => 200,\n            'message' => 'login success!'\n        ]);\n    } else {\n        echo json_encode(['code' => 400, 'message' => 'Missing authorization code']);\n    }\n});\n\n// 处理请求\n$router->dispatch($_SERVER['REQUEST_METHOD'], parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));\nclass Router {\n    private $routes = [];\n\n    public function addRoute($method, $path, $handler) {\n        $this->routes[strtoupper($method)][$path] = $handler;\n    }\n\n    public function dispatch($method, $uri) {\n        header('Content-Type: application/json');\n        $method = strtoupper($method);\n        // 精确匹配路由\n        if (isset($this->routes[$method][$uri])) {\n            $handler = $this->routes[$method][$uri];\n            $handler($_REQUEST);\n            return;\n        }\n\n        // 未找到路由\n        echo json_encode([\n            'message' => 'Not Found',\n            'code' => 404\n        ]);\n    }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["应用服务端获取到Authorization Code之后，对接华为账号服务器，参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%BC%80%E5%8F%91",
                children: "服务端开发"
              }), "，调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code#%E6%8E%A5%E5%8F%A3%E5%8E%9F%E5%9E%8B",
                children: "/oauth2/v6/quickLogin/getPhoneNumber接口"
              }), "获取完整手机号、UnionID、OpenID；"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "根据获取的UnionID、OpenID、完整手机号，判断登录用户是否为新用户、是否已关联等等（根据实际业务开发）；"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "保存或更新用户信息到应用服务端，完成处理后，返回登录用户的信息至应用客户端；"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "java示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import com.alibaba.fastjson2.JSONObject;\nimport com.huawei.account.config.AGCProperties;\nimport com.huawei.account.config.Constants;\nimport com.huawei.account.entity.PhoneNumberReq;\nimport com.huawei.account.entity.PhoneNumberResp;\nimport com.huawei.account.util.HttpUtil;\nimport lombok.RequiredArgsConstructor;\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Service;\n\n@Slf4j\n@Service\n@RequiredArgsConstructor\npublic class LoginService {\n    private final HttpUtil httpService;\n\n    private final AGCProperties agcProperties;\n\n    public PhoneNumberResp loginWithHuawei(String authorizationCode) {\n        PhoneNumberReq phoneNumberReq = new PhoneNumberReq();\n        phoneNumberReq.setClientId(agcProperties.getClientId()); // 读取配置项中Client ID\n        phoneNumberReq.setClientSecret(agcProperties.getClientSecret()); // 读取配置项中Client Secret\n        phoneNumberReq.setCode(authorizationCode);\n        PhoneNumberResp phoneNumberResp = httpService.callHttpPost(Constants.QUICK_LOGIN_PHONE_NUMBER_URL, phoneNumberReq, PhoneNumberResp.class).getBody();\n        log.info(\"/oauth2/v6/quickLogin/getPhoneNumber response body is: {}\", JSONObject.toJSONString(phoneNumberResp));\n\n        // 数据库相关：\n        // 使用UnionID查询用户，匹配到了则返回用户信息；\n        // 未匹配到则使用手机号查询用户，查到了则关联华为账号UnionID，返回用户信息；\n        // UnionID和手机号均没有匹配到，则进入注册流程\n\n        return phoneNumberResp;\n    }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "python示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import requests\nimport json\nimport os\n\nparent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\ntarget_file = os.path.join(parent_dir, \"config\", \"agc.json\")\nwith open(target_file) as f:\n    agc_config = json.load(f)\n\ndef login_with_huawei(authorization_code):\n    # 配置信息\n    client_id = agc_config[\"clientId\"] # 读取配置项中Client ID\n    client_secret = agc_config[\"clientSecret\"] # 读取配置项中Client Secret\n    phone_number_url = \"https://account-api.cloud.huawei.com/oauth2/v6/quickLogin/getPhoneNumber\"\n\n    # 构建请求体\n    token_request_body = {\n        \"clientId\": client_id,\n        \"clientSecret\": client_secret,\n        \"code\": authorization_code\n    }\n\n    # 发送请求获取一键登录用户手机号等信息\n    user_info_response = {}\n    try:\n        user_info_response = requests.post(phone_number_url, headers={'Content-Type': 'application/json'}, json=token_request_body)\n        user_info_response.raise_for_status()  # 如果请求失败，抛出HTTPError异常\n        user_info = json.loads(user_info_response.content.decode('utf-8'))\n    except requests.RequestException as e:\n        user_info = json.loads(user_info_response.content.decode('utf-8'))\n        print(f\"Error retrieving /oauth2/v6/quickLogin/getPhoneNumber: {e}\")\n        print(f\"Error retrieving /oauth2/v6/quickLogin/getPhoneNumber: {user_info}\")\n        return None\n    if \"resultCode\" in user_info:\n        assert user_info[\"resultCode\"] == 0\n\n    # 根据业务设计流程，在数据库中查询用户信息，比如：\n    # 1、使用UnionID查询用户，匹配到了则返回用户信息；\n    # 2、未匹配到则使用手机号查询用户，查到了则将华为账号UnionID关联到该用户，返回用户信息；\n    # 3、UnionID和手机号均没有匹配到，则进入注册流程\n\n    return user_info\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "go示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "package service\n\nimport (\n    \"bytes\"\n    \"encoding/json\"\n    \"fmt\"\n    \"io/ioutil\"\n    \"net\"\n    \"net/http\"\n    \"path/filepath\"\n    \"sync\"\n    \"time\"\n)\n\ntype Response struct {\n    Data    interface{} `json:\"data\"`\n    Code    int         `json:\"code\"`\n    Message string      `json:\"message\"`\n}\n\ntype PhoneNumberReq struct {\n    ClientId     string `json:\"clientId\"`\n    ClientSecret string `json:\"clientSecret\"`\n    Code         string `json:\"code\"`\n}\n\nvar httpClient = &http.Client{\n    Transport: &http.Transport{\n       DialContext: (&net.Dialer{\n          Timeout: 5 * time.Second,\n       }).DialContext,\n       TLSHandshakeTimeout:   5 * time.Second,\n       ResponseHeaderTimeout: 10 * time.Second,\n    },\n    Timeout: 30 * time.Second,\n}\n\nvar (\n    config     *Config\n    configOnce sync.Once\n    configErr  error\n)\n\ntype Config struct {\n    ClientID     string `json:\"clientId\"`\n    ClientSecret string `json:\"clientSecret\"`\n}\n\nfunc LoadConfig() (*Config, error) {\n    configOnce.Do(func() {\n       data, err := ioutil.ReadFile(filepath.Join(\"src\", \"config\", \"agc.json\"))\n       if err != nil {\n          configErr = err\n          return\n       }\n       var cfg Config\n       if err := json.Unmarshal(data, &cfg); err != nil {\n          configErr = err\n          return\n       }\n       config = &cfg\n    })\n    return config, configErr\n}\n\nfunc LoginWithHuawei(authorizationCode string) (*http.Response, error) {\n    config, err := LoadConfig()\n    if err != nil {\n       return nil, err\n    }\n    // 1. 构造请求体\n    reqBody := PhoneNumberReq{\n       ClientId:     config.ClientID,\n       ClientSecret: config.ClientSecret,\n       Code:         authorizationCode,\n    }\n    // 2. 序列化为JSON\n    jsonData, err := json.Marshal(reqBody)\n    resp, err := httpClient.Post(\"https://account-api.cloud.huawei.com/oauth2/v6/quickLogin/getPhoneNumber\", \"application/json\", bytes.NewBuffer(jsonData))\n    if err != nil {\n       fmt.Errorf(\"failed to make POST request: %v, %v\", config.ClientID, config.ClientSecret)\n       return nil, fmt.Errorf(\"failed to make POST request: %v\", err)\n    }\n    return resp, nil\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "php示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<?php\n\nclass LoginService {\n    public static function loginWithHuawei($authorizationCode) {\n        $agcConfig = require __DIR__ . '/../config/agc.php';\n        $requestBody = [\n            'clientId' => $agcConfig['clientId'],\n            'clientSecret' => $agcConfig['clientSecret'],\n            'code' => $authorizationCode\n        ];\n\n        $ch = curl_init();\n        curl_setopt_array($ch,\n            [\n                CURLOPT_RETURNTRANSFER => true,\n                CURLOPT_POST => true,\n                CURLOPT_HTTPHEADER => [\n                    'Content-Type: application/json',\n                    'Accept: application/json'\n                ],\n                CURLOPT_SSL_VERIFYPEER => false,\n                CURLOPT_SSL_VERIFYHOST => false,\n                CURLOPT_URL => 'https://account-api.cloud.huawei.com/oauth2/v6/quickLogin/getPhoneNumber',\n                CURLOPT_POSTFIELDS => json_encode($requestBody)\n            ]);\n\n        $response = curl_exec($ch);\n        if ($response === false) {\n            error_log('cURL Error: ' . curl_error($ch));\n            curl_close($ch);\n            return null;\n        }\n\n        $userInfo = json_decode($response, true);\n        curl_close($ch);\n        if (!isset($data['resultCode']) && $userInfo['resultCode'] != 0) {\n            error_log('cURL Error: ' . curl_error($ch));\n            curl_close($ch);\n        }\n\n        /**\n         * 根据业务设计流程，在数据库中查询用户信息，比如：\n         * 1、使用UnionID查询用户，匹配到了则返回用户信息；\n         * 2、未匹配到则使用手机号查询用户，查到了则将华为账号UnionID关联到该用户，返回用户信息；\n         * 3、UnionID和手机号均没有匹配到，则进入注册流程\n         */\n\n        return $userInfo;\n    }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端与服务端联调",
      children: "客户端与服务端联调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["前提：根据应用登录方案设计及实现，完成客户端和服务端开发，开发指导参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BC%80%E5%8F%91",
        children: "客户端开发"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%BC%80%E5%8F%91",
        children: "服务端开发"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%88%B0%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%9A%84%E5%BC%80%E5%8F%91",
        children: "应用客户端到应用服务端的开发"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在客户端获取到Authorization Code之后，传送给服务端接口；在服务端使用Authorization Code获取华为账号绑定的手机号、UnionID、OpenID。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(200403)/* ["default"] */.A) + "",
            width: "1195",
            height: "212"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据应用登录方案使用华为账号绑定的手机号、UnionID、OpenID登录成功后，应用服务端返回用户信息给应用客户端，应用客户端可根据需要进行本地持久化存储，例如：登录状态、用户账号名、手机号、用户身份标识等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用客户端首页或个人信息页等位置，对当前登录用户信息进行展示，举例如下图："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869820)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "770",
        height: "1592"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发后验证",
      children: "开发后验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成华为账号一键登录能力应用用户体验质量建议",
      children: "集成华为账号一键登录能力应用用户体验质量建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用完成开发后，可参照以下标准检查集成华为账号一键登录后的用户体验是否符合预期："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "标准编号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "标准项名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "标准详细描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "满足华为账号提供登录设计规范"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "规则"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需满足", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/design-guides/id-0000001880001344",
              children: "华为账号开放登录"
            }), "中 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/design-guides/id-0000001880001344#section41792374210",
                  children: "【华为账号一键登录】按钮"
                })
              })
            }), " 规范，保障HarmonyOS应用拥有简单易用、高效一致、快速安全的登录体验；"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户交互体验原则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（1）登录页面的用户协议与隐私协议、华为账号用户认证协议可展示、可点击；  （2）当用户点击协议后，回退页面，须回到点击前的页面；  （3）只有用户勾选并同意所有协议后，才可继续进行登录操作，若用户未勾选协议时直接点击华为账号登录按钮，须有明确的同意协议提醒；  （4）点击登录按钮须直接完成登录流程，可出现头像、昵称授权页，但取消场景须不影响登录流程；若出现处理异常，须及时终止页面，不应出现应用卡死无法操作；"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登录页面内容用户体验原则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["（1）若未提供其他登录方式，不应显示“其他登录方式”的入口；  （2）若使用华为账号一键登录，页面匿名手机号须展示从华为账号侧获取的匿名手机号，不应展示其他来源的手机号；  （3）用户协议中，必须包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://privacy.consumer.huawei.com/legal/id/authentication-terms.htm?code=CN&language=zh-CN",
              children: "《华为账号用户认证协议》"
            }), "，且协议必须可点击、可加载，加载后支持回退页面，且回到点击前的页面；"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常处理用户体验原则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登录页面需进行异常处理保证：  （1）若登录异常（如网络异常、海外账号不支持等情况），勿将错误码等原始信息直接透传给用户；  （2）若登录时触发了华为侧的短信验证码校验，则在校验成功之后，应用不应再展示额外的验证码验证页面；"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用生命周期变化的华为账号用户体验原则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用更新后，其登录状态须与更新前一致；"
          })]
        })]
      })]
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
951737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958746-46b7126f8c16e2a5b399f66192be7407.png");

},
838746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438791-acfe5873134c0f1acaafa0d51cb4429f.png");

},
916879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
356155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
747186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478747-3fc58ef3fab9f3c1ef648ac74dcfb7d3.png");

},
60689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799100-a38162e9cd9f396b19a2a0614c38b5c5.png");

},
559304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478749-ee028356f988b23fbf25a4d6ea15293b.png");

},
459156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
731244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
310933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438793-7cf0706b4a59b5233900d500be53b120.png");

},
376870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958748-7f576f0267b9243b0beb51070dd32d10.png");

},
774264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
869820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958750-1b25435a44dafb93d9dca43be5628228.png");

},
752221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
91266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799098-dd378910308d247f2beab0125f21dded.png");

},
200403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438795-14b9684d16eb64067f880e41b7cac632.png");

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