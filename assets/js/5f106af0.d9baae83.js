"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["531453"], {
10339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_rest_account_api_get_user_info_account_api_get_user_info_quicklogin_by_code_account_api_get_user_info_quicklogin_by_code_md_5f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-rest-account-api-get-user-info-account-api-get-user-info-quicklogin-by-code-account-api-get-user-info-quicklogin-by-code-md-5f1.json
var site_docs_ref_account_api_account_api_rest_account_api_get_user_info_account_api_get_user_info_quicklogin_by_code_account_api_get_user_info_quicklogin_by_code_md_5f1_namespaceObject = JSON.parse('{"id":"account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code","title":"一键登录获取华为账号绑定号码和UnionID/OpenID","description":"为了更安全的网络访问，请务必使用TLS1.2协议及规定内的加密套件。若使用协议是TLS1.0、TLS1.1或规定外的加密套件，可能无法正常访问华为账号服务。","source":"@site/docs-ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code.md","sourceDirName":"account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code","slug":"/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"一键登录获取华为账号绑定号码和UnionID/OpenID","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-user-info-quicklogin-by-code","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-get-user-info-quicklogin-by-code"},"sidebar":"ref","previous":{"title":"概述","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-overview/account-api-get-user-info-overview"},"next":{"title":"获取华为账号用户信息-获取头像昵称","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-get-nickname-and-avatar/account-api-get-user-info-get-nickname-and-avatar"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code.md


const frontMatter = {
	title: '一键登录获取华为账号绑定号码和UnionID/OpenID',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-user-info-quicklogin-by-code',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-get-user-info-quicklogin-by-code'
};
const contentTitle = '一键登录获取华为账号绑定号码和UnionID/OpenID';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "场景描述",
  "id": "场景描述",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "接口原型",
  "id": "接口原型",
  "level": 2
}, {
  "value": "请求参数",
  "id": "请求参数",
  "level": 2
}, {
  "value": "Request Header",
  "id": "request-header",
  "level": 3
}, {
  "value": "Request Body",
  "id": "request-body",
  "level": 3
}, {
  "value": "请求示例",
  "id": "请求示例",
  "level": 2
}, {
  "value": "响应参数",
  "id": "响应参数",
  "level": 2
}, {
  "value": "Response Header",
  "id": "response-header",
  "level": 3
}, {
  "value": "Response Body",
  "id": "response-body",
  "level": 3
}, {
  "value": "响应示例",
  "id": "响应示例",
  "level": 2
}, {
  "value": "请求成功时",
  "id": "请求成功时",
  "level": 3
}, {
  "value": "请求失败时",
  "id": "请求失败时",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}, {
  "value": "错误码",
  "id": "错误码",
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
        id: "一键登录获取华为账号绑定号码和unionidopenid",
        children: "一键登录获取华为账号绑定号码和UnionID/OpenID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290150)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了更安全的网络访问，请务必使用TLS1.2协议及规定内的加密套件。若使用协议是TLS1.0、TLS1.1或规定外的加密套件，可能无法正常访问华为账号服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于TLS1.2协议及规定内加密套件的信息，可以点击这里进行详细了解：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-rest/account-api-common/account-api-common#tls%E5%8D%8F%E8%AE%AE%E5%8F%8A%E5%8A%A0%E5%AF%86%E5%A5%97%E4%BB%B6",
        children: "TLS协议及加密套件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过一键登录场景的Authorization Code获取UnionID，OpenID，华为账号绑定的手机号码及其相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-phone-unionid-login",
        children: "华为账号一键登录（获取手机号和UnionID/OpenID）"
      }), "场景，应用服务端向华为账号服务器调用该接口获取UnionID，OpenID，华为账号绑定的手机号码及其相关信息。该服务仅对中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）用户提供。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需确保调用端网络正常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为账号一键登录服务仅对中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）用户提供；且应用服务端获取华为账号绑定的手机号码时，该服务器必须部署在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用使用华为账号一键登录功能之前，需要完成华为账号一键登录权限申请，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-preparations/account-config-permissions",
          children: "申请账号权限"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口原型",
      children: "接口原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "承载协议："
            })
          }), " HTTPS POST"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向："
            })
          }), " 开发者服务器->华为账号服务器"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL："
            })
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://account-api.cloud.huawei.com/oauth2/v6/quickLogin/getPhoneNumber"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求消息：Content-Type: application/json"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求参数",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-header",
      children: "Request Header"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取值为：application/json。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  Request Body传参，请务必遵循此请求头格式，否则可能导致请求失败，具体传参方式可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",
              children: "示例代码"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-body",
      children: "Request Body"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-phone-unionid-login",
              children: "华为账号一键登录（获取手机号和UnionID/OpenID）"
            }), "场景获取的Authorization Code，详情可参考一键登录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BC%80%E5%8F%91",
              children: "客户端开发"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clientId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在创建应用后，由AppGallery Connect（简称AGC）为应用分配的唯一标识。参数取值详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694",
              children: "查看应用基本信息"
            }), "中的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "OAuth 2.0客户端ID（凭据）-Client ID"
              })
            }), "参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该参数与获取code参数时的Client ID必须一致，否则会报错（响应消息中resultCode=60180003），如出现此报错，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-preparations/account-client-id",
              children: "配置Client ID"
            }), "排查处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clientSecret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在创建应用后，由AppGallery Connect（简称AGC）为应用分配的密钥（Client Secret）。参数取值详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694",
              children: "查看应用基本信息"
            }), "中的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "OAuth 2.0客户端ID（凭据）-Client Secret"
              })
            }), "参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请通过POST方式调用，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /oauth2/v6/quickLogin/getPhoneNumber HTTP/1.1\nHost: account-api.cloud.huawei.com\nContent-Type: application/json\n\n{\"code\":\"<code>\",\"clientId\": \"<clientId>\",\"clientSecret\": \"<clientSecret>\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应参数",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "response-header",
      children: "Response Header"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：application/json。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "response-body",
      children: "Response Body"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用成功时，响应消息返回如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户OpenID。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户UnionID。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "phoneNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号绑定号码（含国家码），使用该手机号完成一键登录的功能，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-phone-unionid-login",
              children: "华为账号一键登录（获取手机号和UnionID/OpenID）"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "phoneNumberValid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过一键登录功能获取的华为账号绑定号码的实时有效性。  若发起一键登录时", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginpanelparams",
              children: "LoginPanelParams"
            }), "的verifyPhoneNumber参数值传递为true，表示华为代为验证手机号有效性，开发者无需关注此返回值；  若verifyPhoneNumber参数值传递为false, 需要根据返回的状态值进行处理。  0：在过去90天内，无法证明当前手机号码可以触达用户， 需要进行验证。  1：在过去90天内，当前手机号码被证明可以触达用户，可以直接使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "purePhoneNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带国家码的手机号，此处为phoneNumber去除国际冠码与国际电话区号的形式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "phoneCountryCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "purePhoneNumber的国际冠码(00)+国际电话区号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用失败时，响应消息返回如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码，详见本章节", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%94%99%E8%AF%AF%E7%A0%81",
              children: "错误码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误描述信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求成功时",
      children: "请求成功时"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    \"openId\": \"AQAxrBzThFv*****lv9tV_4rMCc\",\n    \"unionId\": \"AQAxrB1HNA*****n-IfWRSUVq2M7xU\",\n    // 华为账号绑定号码，使用该手机号完成一键登录(返回数据实际为明文)\n    \"phoneNumber\": \"0086191******08\",\n    // 通过一键登录功能获取的华为账号绑定号码的实时有效性, 0表示需要进一步验证有效性， 1表示可以直接使用\n    \"phoneNumberValid\": 1,\n    // 不带国际冠码与国际电话区号的形式(返回数据实际为明文)\n    \"purePhoneNumber\": \"191******08\",\n    \"phoneCountryCode\": \"0086\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求失败时",
      children: "请求失败时"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    \"resultCode\": 60180008,\n    \"resultDesc\": \"user or phone number not exist\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java示例代码如下，运行前需要进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-rest/account-api-common/account-api-common#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE",
        children: "示例代码环境配置"
      }), "（请将此示例代码与工具类CallUtils放于同一路径下，如不在同一路径，请手动添加import）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import com.alibaba.fastjson2.JSONObject;\nimport org.apache.http.client.methods.HttpPost;\nimport java.io.IOException;\nimport java.util.HashMap;\nimport java.util.Map;\n\n/**\n * 一键登录获取华为账号绑定号码和OpenID/UnionID\n */\npublic class GetQuickLoginMobilePhoneByCodeDemo {\n    public static void main(String[] args) throws IOException {\n        // 一键登录获取华为账号绑定号码和OpenID/UnionID的接口URL\n        String url = \"https://account-api.cloud.huawei.com/oauth2/v6/quickLogin/getPhoneNumber\";\n        // 替换为一键登录场景获取到的Authorization Code\n        String authorizationCode = \"<Authorization Code>\";\n        // 替换为一键登录场景获取Authorization Code时使用的Client ID\n        String clientId = \"<Client ID>\";\n        // 替换为Client ID对应的Client Secret\n        String clientSecret = \"<Client Secret>\";\n        JSONObject result = getQuickLoginMobile(url, authorizationCode, clientId, clientSecret);\n        // 解析获取openId\n        String openId = result.getString(\"openId\");\n        // 解析获取unionId\n        String unionId = result.getString(\"unionId\");\n        // 解析获取phoneNumber\n        String phoneNumber = result.getString(\"phoneNumber\");\n        // 解析获取phoneNumberValid\n        Integer phoneNumberValid = result.getInteger(\"phoneNumberValid\");\n        // 解析获取purePhoneNumber\n        String purePhoneNumber = result.getString(\"purePhoneNumber\");\n        // 解析获取phoneCountryCode\n        String phoneCountryCode = result.getString(\"phoneCountryCode\");\n    }\n\n    private static JSONObject getQuickLoginMobile(\n            String url, String authorizationCode, String clientId, String clientSecret) throws IOException {\n        HttpPost httpPost = new HttpPost(url);\n        Map<String, Object> reqBody = new HashMap<>();\n        reqBody.put(\"code\", authorizationCode);\n        reqBody.put(\"clientId\", clientId);\n        reqBody.put(\"clientSecret\", clientSecret);\n        httpPost.setHeader(\"Content-Type\", \"application/json\");\n        httpPost.setEntity(CallUtils.wrapJsonEntity(reqBody));\n        // 如需要自定义异常处理请使用api CallUtils#remoteCall(HttpUriRequest, BiFunction<CloseableHttpResponse,String,E>)\n        return CallUtils.toJsonObject(CallUtils.remoteCallAccountApi(httpPost));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "错误码",
      children: "错误码"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP响应码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解决方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仅表示本次接口调用成功，实际业务处理结果需要通过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Response Body"
              })
            }), "中的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "resultCode（错误码）"
              })
            }), " 进行判断。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无权限访问。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通常是调用方网络安全策略阻止了访问，请检查网络环境配置。若仍无法解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "找不到服务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查请求URI是否正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "405"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的http请求method。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查http请求method是否与接口说明一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务内部错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求连接异常，常见于网络状况不稳定。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["建议稍后重试，若仍无法解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "503"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统流控。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发系统流控，请稍后重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "504"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求连接超时，常见于网络状况不稳定。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["建议稍后重试，若仍无法解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "590"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务内部错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解决方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60010002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数不合法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请按照错误描述及接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#request-body",
              children: "Request Body"
            }), "参数说明检查入参。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60010012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code参数不正确。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code参数传值不正确，可能原因：伪造的无效code或code被篡改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60010013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clientSecret参数不正确。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["clientSecret参数传值不正确，参数取值详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694",
              children: "查看应用基本信息"
            }), "中的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "OAuth 2.0客户端ID（凭据）-Client Secret"
              })
            }), "参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60180003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code中的client_id和入参不一致。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["code参数获取时的clientId与当前接口参数clientId不一致导致，请检查入参client_id是否与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-preparations/account-client-id",
              children: "配置Client ID"
            }), "中的值一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60180004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code过期，code只有5分钟有效期，超过有效期后将无法继续使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请引导用户重新授权，获取新的code再重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60180005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code已经被使用过。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code只能用一次，请重新获取code再重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60180006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code已失效。正常code有效期为5分钟，但是由于用户的行为（如更改密码、取消应用的授权等行为），导致华为服务器提前失效已颁发的code。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请引导用户重新授权，获取新的code再重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60180007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code未授权华为账号一键登录权限。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["code未授权华为账号一键登录权限，可能原因如下：  - 应用使用华为账号一键登录功能之前，需要完成华为账号一键登录权限申请，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-preparations/account-config-permissions",
              children: "申请账号权限"
            }), "。  - code不是通过调用华为账号的一键登录组件获取到的，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BC%80%E5%8F%91",
              children: "客户端开发"
            }), "的展示一键登录页面并获取Authorization Code，获取华为账号一键登录场景所需的code参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60180008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户无手机号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户华为账号未绑定手机号，该异常场景应用需要展示其他登录方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60180009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机号信息获取受限。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 华为账号一键登录服务仅对中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）用户提供。  - 应用服务端获取华为账号绑定号码时，该服务器必须部署在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60010001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请稍后重试，若仍无法解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
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
290150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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