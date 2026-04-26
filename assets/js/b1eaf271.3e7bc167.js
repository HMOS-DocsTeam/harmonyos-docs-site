"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["796231"], {
998225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_rest_account_api_extend_function_account_api_get_groupunionid_code_account_api_get_groupunionid_code_md_b1e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-rest-account-api-extend-function-account-api-get-groupunionid-code-account-api-get-groupunionid-code-md-b1e.json
var site_docs_ref_account_api_account_api_rest_account_api_extend_function_account_api_get_groupunionid_code_account_api_get_groupunionid_code_md_b1e_namespaceObject = JSON.parse('{"id":"account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid-code/account-api-get-groupunionid-code","title":"通过Authorization Code获取GroupUnionID","description":"为了更安全的网络访问，请务必使用TLS1.2协议及规定内的加密套件。若使用协议是TLS1.0、TLS1.1或规定外的加密套件，可能无法正常访问华为账号服务。","source":"@site/docs-ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid-code/account-api-get-groupunionid-code.md","sourceDirName":"account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid-code","slug":"/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid-code/account-api-get-groupunionid-code","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid-code/account-api-get-groupunionid-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过Authorization Code获取GroupUnionID","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-groupunionid-code","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-get-groupunionid-code"},"sidebar":"ref","previous":{"title":"通过OpenID获取UnionID","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-extend-function/account-api-get-unionid/account-api-get-unionid"},"next":{"title":"通过OpenID或UnionID获取GroupUnionID","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid/account-api-get-groupunionid"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid-code/account-api-get-groupunionid-code.md


const frontMatter = {
	title: '通过Authorization Code获取GroupUnionID',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-groupunionid-code',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-get-groupunionid-code'
};
const contentTitle = '通过Authorization Code获取GroupUnionID';

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
        id: "通过authorization-code获取groupunionid",
        children: "通过Authorization Code获取GroupUnionID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212444)/* ["default"] */.A) + "",
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
      children: "应用服务端通过获取到的Authorization Code调用此接口，获取GroupUnionID、用户级Access Token、Refresh Token、ID Token等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对用户登录需要获取GroupUnionID场景时，可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-phone-unionid-login",
        children: "华为账号一键登录（获取手机号和UnionID/OpenID）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button",
        children: "华为账号登录（获取UnionID/OpenID）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-silent-login",
        children: "静默登录"
      }), "等场景获取到Authorization Code后，调用该接口获取GroupUnionID、Access Token、Refresh Token、ID Token等信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需确保调用端网络正常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅对企业开发者开放。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者账号必须加入关联主体账号组。具体可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/start/cag-0000001265390541",
          children: "创建账号组"
        }), "创建关联主体账号组，然后在关联主体账号组中", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/start/aai-0000001265430513",
          children: "添加账号组成员"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization Code仅能使用一次，且具有5分钟的有效期，过期后需重新授权获取。"
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
            children: "https://oauth-login.cloud.huawei.com/oauth2/v3/token"
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
          children: "请求消息：Content-Type: application/x-www-form-urlencoded"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json;charset=utf-8"
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
            children: ["取值为：application/x-www-form-urlencoded。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "grant_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权模式，固定传“authorization_code”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client_id"
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
            }), "  该参数与获取code参数时的Client ID必须一致，否则会报错（sub_error=20154），如出现此报错，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-preparations/account-client-id",
              children: "配置Client ID"
            }), "排查处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client_secret"
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Authorization Code可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-phone-unionid-login",
              children: "华为账号一键登录（获取手机号和UnionID/OpenID）"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-unionid-login/account-unionid-login-button",
              children: "华为账号登录（获取UnionID/OpenID）"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-silent-login",
              children: "静默登录"
            }), "等场景获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportAlg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成ID Token的算法，当前支持的算法如下：  - PS256（推荐使用）  - RS256  如果未指定该参数或指定的算法不在支持的范围内，则默认使用RS256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "need_group_union_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否需要获取GroupUnionID，传值如下：  - true  - false  如果未指定该参数，则响应结果中不会返回group_union_id字段。  GroupUnionID使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-19",
              children: "不同开发者的应用之间如何实现用户数据互通"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /oauth2/v3/token HTTP/1.1\nHost: oauth-login.cloud.huawei.com\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&code=<code>&client_id=<client_id>&client_secret=<client_secret>&need_group_union_id=<need_group_union_id>\n"
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
            children: "取值为：application/json;charset=utf-8。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "response-body",
      children: "Response Body"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用成功时，响应消息体返回如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "token_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定字符串“Bearer”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Access Token，访问被权限管控资源的凭证。Access Token长度详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-11",
              children: "Access Token和Refresh Token长度限制要求"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Token中的scope，以空格分隔，最大不会超过150个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expires_in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Token的过期时间，以秒为单位。有效期为3600秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "refresh_token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Refresh Token，用于刷新Access Token。Refresh Token有效期为180天，长度详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-11",
              children: "Access Token和Refresh Token长度限制要求"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id_token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ID Token（JWT格式），详细信息请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-extend-function/account-api-verify-id-token/account-api-verify-id-token",
              children: "验证ID Token有效性"
            }), "中ID Token描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "group_union_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GroupUnionID是用户在关联主体账号组内的统一身份标识，使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-19",
              children: "不同开发者的应用之间如何实现用户数据互通"
            }), "。当请求参数need_group_union_id不传或者为false时，该字段不返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用失败时，响应消息体返回如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["业务响应主错误码，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%94%99%E8%AF%AF%E7%A0%81",
              children: "错误码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sub_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["业务响应子错误码，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%94%99%E8%AF%AF%E7%A0%81",
              children: "错误码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "error_description"
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
        children: "HTTP/1.1 200 OK\nContent-Type: application/json;charset=utf-8\n\n{\n    \"access_token\": \"DgEAAN7qd*****U0TvQ/eXpE4x+gvhoYh5/UuzL\",\n    \"refresh_token\": \"DgECAL++vCn******NQ/UOL8+wm0jJi+o4NI793H\",\n    \"expires_in\": 3600,\n    \"id_token\": \"eyJraW*****ifQ.eyJhdF9oYX*****Q2fQ.TT05lFYe*****vDwb_Gj1ccR59yyB2Ig\",\n    \"scope\": \"openid profile\",\n    \"token_type\": \"Bearer\",\n    \"group_union_id\": \"AgAsmsA25yiLl*****8Gr-uQyoKU8rSfMEwFJiqOA\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求失败时",
      children: "请求失败时"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 400 Bad Request\nContent-Type: application/json\n\n{\n    \"sub_error\": 12304,\n    \"error_description\": \"invalid client_secret\",\n    \"error\": 1203\n}\n"
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
        children: "import com.alibaba.fastjson2.JSONObject;\nimport org.apache.http.NameValuePair;\nimport org.apache.http.client.entity.UrlEncodedFormEntity;\nimport org.apache.http.client.methods.HttpPost;\nimport org.apache.http.message.BasicNameValuePair;\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.List;\n\n/**\n * 通过Authorization Code获取GroupUnionID\n */\npublic class GetGroupUnionIDByCodeDemo {\n    public static void main(String[] args) throws IOException {\n        // 通过Authorization Code获取GroupUnionID的接口URL\n        String url = \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\";\n        // 授权模式，这里使用授权码模式（authorization_code）获取Access Token\n        String grantType = \"authorization_code\";\n        // 替换为实际的Client ID\n        String clientId = \"<Client ID>\";\n        // 替换为Client ID对应的Client Secret\n        String clientSecret = \"<Client Secret>\";\n        // 替换为获取到的授权码（Authorization Code）\n        String code = \"<Authorization Code>\";\n        JSONObject result = getGroupUnionIDByCode(url, code, clientSecret, clientId, grantType);\n        // 解析获取group_union_id\n        String groupUnionId = result.getString(\"group_union_id\");\n        // 解析获取scope\n        String scope = result.getString(\"scope\");\n        // 解析获取access_token\n        String accessToken = result.getString(\"access_token\");\n        // 解析获取refresh_token\n        String refreshToken = result.getString(\"refresh_token\");\n        // 解析获取token_type\n        String tokenType = result.getString(\"token_type\");\n        // 解析获取expires_in\n        Integer expiresIn = result.getInteger(\"expires_in\");\n        // 解析获取id_token\n        String idToken = result.getString(\"id_token\");\n    }\n\n    private static JSONObject getGroupUnionIDByCode(String url, String code, String clientSecret,\n                                                    String clientId, String grantType) throws IOException {\n        HttpPost httpPost = new HttpPost(url);\n        List<NameValuePair> request = new ArrayList<>();\n        request.add(new BasicNameValuePair(\"code\", code));\n        request.add(new BasicNameValuePair(\"client_secret\", clientSecret));\n        request.add(new BasicNameValuePair(\"client_id\", clientId));\n        request.add(new BasicNameValuePair(\"grant_type\", grantType));\n        request.add(new BasicNameValuePair(\"supportAlg\", \"PS256\"));\n        request.add(new BasicNameValuePair(\"need_group_union_id\", \"true\"));\n        httpPost.setHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n        httpPost.setEntity(new UrlEncodedFormEntity(request));\n        // 如需要自定义异常处理请使用api CallUtils#remoteCall(HttpUriRequest, BiFunction<CloseableHttpResponse,String,E>)\n        return CallUtils.toJsonObject(CallUtils.remoteCallOAuth(httpPost));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "错误码",
      children: "错误码"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请根据", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "业务响应主错误码"
              })
            }), "以及", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "业务响应子错误码"
              })
            }), "进一步排查问题。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "业务响应主错误码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "业务响应子错误码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解决方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12304"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_secret不正确。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请前往AppGallery Connect（简称AGC）确认client_secret是否正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_id格式不正确。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查client_id是否满足正则：^[0-9]{1,64}$。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_id格式不正确或系统不存在。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 检查client_id是否满足正则：^[0-9]{1,64}$。  - 请前往AppGallery Connect（简称AGC）确认client_id是否存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20085"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_secret为空。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请按照接口参数的要求，传入正确的client_secret参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20152"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code格式不正确。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查code格式是否满足正则：^[0-9a-zA-Z=/\\+]+$。  该错误码出现可能场景：  - code参数被篡改，导致格式不符。  - 请求头的Content-Type为application/x-www-form-urlencoded，但实际代码调用时，未对请求body体进行URLEncode处理，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",
              children: "示例代码"
            }), "组装参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20154"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code中的client_id和入参不一致。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查入参client_id是否与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-preparations/account-client-id",
              children: "配置Client ID"
            }), "中的值一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code过期，code只有5分钟有效期，超过有效期后将无法继续使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请引导用户重新授权，获取新的code再重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20156"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code已经被使用过。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code只能用一次，请重新获取code再重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20158"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code已失效。正常code有效期为5分钟，但是由于用户的行为（如更改密码、取消应用的授权等行为），导致华为服务器提前失效已颁发的code。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请引导用户重新授权，获取新的code再重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20171"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_secret为空。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请按照接口参数的要求，传入正确的client_secret参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20172"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_secret格式不正确。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查client_secret格式是否满足正则：^[0-9a-zA-Z=/\\+]+$。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20182"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grant_type值不正确。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["grant_type可选值如下：  - “authorization_code”：该场景用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token",
              children: "获取用户级凭证"
            }), "。  - “refresh_token”： 该场景用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-refresh-token/account-api-obtain-refresh-token",
              children: "刷新用户级凭证"
            }), "。  - “client_credentials”：该场景用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-app-token/account-api-obtain-app-token",
              children: "获取应用级凭证"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_id为空。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请按照接口参数的要求，传入正确的client_id参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code为空。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请按照接口参数的要求，传入正确的code参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20181"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grant_type为空。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["grant_type可选值如下：  - “authorization_code”：该场景用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token",
              children: "获取用户级凭证"
            }), "。  - “refresh_token”： 该场景用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-refresh-token/account-api-obtain-refresh-token",
              children: "刷新用户级凭证"
            }), "。  - “client_credentials”：该场景用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-app-token/account-api-obtain-app-token",
              children: "获取应用级凭证"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20153"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的code。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code被篡改或伪造的code导致，请排查code参数是否与获取到的code一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12303"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client_id在系统不存在。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请前往AppGallery Connect（简称AGC）确认client_id是否存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12304"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的client_secret。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参client_id和client_secret不匹配导致，请检查参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统内部处理错误，建议业务打印错误码信息，并请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统处理异常。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请重试，若仍无法解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者账号的关联主体账号组未查询到。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/start/aai-0000001265430513",
              children: "添加账号组成员"
            }), "，将应用的开发者账号加入关联主体账号组后重试。"]
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
212444(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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