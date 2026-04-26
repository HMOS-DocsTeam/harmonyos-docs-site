"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["5414"], {
934265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_rest_account_api_extend_function_account_api_get_groupunionid_account_api_get_groupunionid_md_c77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-rest-account-api-extend-function-account-api-get-groupunionid-account-api-get-groupunionid-md-c77.json
var site_docs_ref_account_api_account_api_rest_account_api_extend_function_account_api_get_groupunionid_account_api_get_groupunionid_md_c77_namespaceObject = JSON.parse('{"id":"account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid/account-api-get-groupunionid","title":"通过OpenID或UnionID获取GroupUnionID","description":"为了更安全的网络访问，请务必使用TLS1.2协议及规定内的加密套件。若使用协议是TLS1.0、TLS1.1或规定外的加密套件，可能无法正常访问华为账号服务。","source":"@site/docs-ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid/account-api-get-groupunionid.md","sourceDirName":"account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid","slug":"/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid/account-api-get-groupunionid","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid/account-api-get-groupunionid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"通过OpenID或UnionID获取GroupUnionID","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-groupunionid","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-get-groupunionid"},"sidebar":"ref","previous":{"title":"通过Authorization Code获取GroupUnionID","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid-code/account-api-get-groupunionid-code"},"next":{"title":"获取验证ID Token的JWT公钥信息","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-extend-function/account-rest-jwt-public-key/account-rest-jwt-public-key"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-rest/account-api-extend-function/account-api-get-groupunionid/account-api-get-groupunionid.md


const frontMatter = {
	title: '通过OpenID或UnionID获取GroupUnionID',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-groupunionid',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-get-groupunionid'
};
const contentTitle = '通过OpenID或UnionID获取GroupUnionID';

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
  "value": "OpenIdToGroupUnionIdInfo",
  "id": "openidtogroupunionidinfo",
  "level": 3
}, {
  "value": "UnionIdToGroupUnionIdInfo",
  "id": "unionidtogroupunionidinfo",
  "level": 3
}, {
  "value": "响应示例",
  "id": "响应示例",
  "level": 2
}, {
  "value": "请求成功时（入参为openIdList场景）",
  "id": "请求成功时入参为openidlist场景",
  "level": 3
}, {
  "value": "请求成功时（入参为unionIdList场景）",
  "id": "请求成功时入参为unionidlist场景",
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
        id: "通过openid或unionid获取groupunionid",
        children: "通过OpenID或UnionID获取GroupUnionID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(692519)/* ["default"] */.A) + "",
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
      children: "应用服务端调用华为账号服务的接口，通过用户的OpenID或UnionID获取GroupUnionID信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同开发者的应用可通过GroupUnionID关联用户数据，实现数据互通。如果需要实现数据互通的不同开发者应用已具备用户OpenID或UnionID，可以通过该接口批量将用户OpenID或UnionID转换为GroupUnionID。"
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
        children: "仅能获取当前应用的用户OpenID、UnionID对应的GroupUnionID。"
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
            children: "https://account-api.cloud.huawei.com/oauth2/v6/groupUnionId/batchGet"
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
          children: "请求消息：Content-Type: application/json; charset=utf-8"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json; charset=utf-8"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求参数",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-header",
      children: "Request Header"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取值为：application/json; charset=utf-8。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  Request Body传参，请务必遵循此请求头格式，否则可能导致请求失败，具体传参方式可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",
              children: "示例代码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接口的访问凭证，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-app-token/account-api-obtain-app-token",
              children: "获取应用级凭证"
            }), "获取的Access Token。  传参格式：Bearer ${Access Token}  样例：Bearer DgEEn******Y+Aj==  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 使用OpenID获取GroupUnionID时，Access Token必须由OpenID所属应用的Client ID获取。  - 使用UnionID获取GroupUnionID场景时，Access Token由UnionID所属开发者下任意一个应用的Client ID获取均可。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-body",
      children: "Request Body"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "openIdList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List<String>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户的OpenID列表，每次请求最大支持传100个OpenID。  请求参数unionIdList为空时，此参数必填。  请求参数unionIdList不为空时，此参数不允许填写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unionIdList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List<String>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户的UnionID列表，每次请求最大支持传100个UnionID。  当请求参数openIdList为空时，此参数必填。  当请求参数openIdList不为空时，此参数不允许填写。"
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
        children: "POST /oauth2/v6/groupUnionId/batchGet HTTP/1.1\nHost: account-api.cloud.huawei.com\nContent-Type: application/json; charset=utf-8\nAuthorization：Bearer <access_token>\n\n{\n  \"openIdList\": [\"<open_id1>\",\"<open_id2>\"]\n}\n"
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
            children: "取值为：application/json; charset=utf-8。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "response-body",
      children: "Response Body"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用成功时，响应消息体返回如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "openIdToGroupUnionIdList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#openidtogroupunionidinfo",
              children: "OpenIdToGroupUnionIdInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户的OpenID转GroupUnionID的列表。当传入openIdList参数时返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unionIdToGroupUnionIdList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#unionidtogroupunionidinfo",
              children: "UnionIdToGroupUnionIdInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户的UnionID转GroupUnionID的列表，当传入unionIdList参数时返回。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58220)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应参数openIdToGroupUnionIdList和unionIdToGroupUnionIdList列表为去重后的结果，因此响应参数的openIdToGroupUnionIdList数量可能与请求参数的openIdList数量不一致；请求参数unionIdList与响应参数unionIdToGroupUnionIdList同理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用失败时，响应消息体返回如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "resultCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%94%99%E8%AF%AF%E7%A0%81",
              children: "错误码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误描述信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openidtogroupunionidinfo",
      children: "OpenIdToGroupUnionIdInfo"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["用户的OpenID，具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "groupUnionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GroupUnionID是用户在关联主体账号组内的统一身份标识，使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-19",
              children: "不同开发者的应用之间如何实现用户数据互通"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unionidtogroupunionidinfo",
      children: "UnionIdToGroupUnionIdInfo"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "unionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户的UnionID，具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "groupUnionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GroupUnionID是用户在关联主体账号组内的统一身份标识，使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-19",
              children: "不同开发者的应用之间如何实现用户数据互通"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求成功时入参为openidlist场景",
      children: "请求成功时（入参为openIdList场景）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"openIdToGroupUnionIdList\": [\n        { \"openId\": \"AQAxrBzThFv*****lv9tV_4rMCc\", \"groupUnionId\": \"AgAsmsA25yiLl*****8Gr-uQyoKU8rSfMEwFJiqOA\" },\n        { \"openId\": \"AQAxsA2hHN*****lv9U8rSfq2MX\", \"groupUnionId\": \"AgAsmWRSUVq2MLl*****8Gr-uQyoKUAxrB1HNqOA\" }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求成功时入参为unionidlist场景",
      children: "请求成功时（入参为unionIdList场景）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"unionIdToGroupUnionIdList\": [\n        { \"unionId\": \"AAAsbgKRbd*****isROb9mDshln5U\", \"groupUnionId\": \"AgAsmsA25yiLl*****8Gr-uQyoKU8rSfMEwFJiqOA\" },\n        { \"unionId\": \"AAAsbgK2ir*****Gsr-BOmDshln5U\", \"groupUnionId\": \"AgAsmWRSUVq2MLl*****8Gr-uQyoKUAxrB1HNqOA\" }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求失败时",
      children: "请求失败时"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\n\n{\n    \"resultCode\": 60010003,\n    \"resultDesc\": \"Authorization error.\"\n}\n"
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
        children: "import com.alibaba.fastjson2.JSONArray;\nimport com.alibaba.fastjson2.JSONObject;\nimport org.apache.http.client.methods.HttpPost;\nimport java.io.IOException;\nimport java.util.Arrays;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\n/**\n * 通过OpenID或UnionID获取GroupUnionID\n */\npublic class GroupUnionIdBatchGetDemo {\n    public static void main(String[] args) throws IOException {\n        // 通过OpenID或UnionID获取GroupUnionID接口URL\n        String url = \"https://account-api.cloud.huawei.com/oauth2/v6/groupUnionId/batchGet\";\n        // 替换为实际获取到的应用级凭证\n        String accessToken = \"<Access Token>\";\n\n        // 通过OpenID或UnionID都可以获取到GroupUnionID，请根据已有的业务场景进行选择\n        // 场景一：使用OpenID来获取GroupUnionID场景\n        List<String> openIdList = Arrays.asList(\"<OpenID1>\",\"<OpenID2>\");\n        JSONObject resultByOpenId = batchGetGroupUnionIdByOpenId(url, accessToken, openIdList);\n        // 解析响应结果获取openIdToGroupUnionIdList\n        JSONArray openIdToGroupUnionIdList = resultByOpenId.getJSONArray(\"openIdToGroupUnionIdList\");\n        // 遍历解析openIdToGroupUnionIdList，openIdToGroupUnionIdList的每个元素，都是一组OpenID和GroupUnionID\n        for (Object openIdToGroupUnionId : openIdToGroupUnionIdList) {\n            JSONObject openIdToGroupUnionIdJson = (JSONObject) openIdToGroupUnionId;\n            // 解析获取openId\n            String openId = openIdToGroupUnionIdJson.getString(\"openId\");\n            // 解析获取groupUnionId\n            String groupUnionId = openIdToGroupUnionIdJson.getString(\"groupUnionId\");\n        }\n\n        // 场景二：使用UnionID来获取GroupUnionID场景\n        List<String> unionIdList = Arrays.asList(\"<UnionID1>\", \"<UnionID2>\");\n        JSONObject resultByUnionId = batchGetGroupUnionIdByUnionId(url, accessToken, unionIdList);\n        // 解析响应结果获取unionIdToGroupUnionIdList\n        JSONArray unionIdToGroupUnionIdList = resultByUnionId.getJSONArray(\"unionIdToGroupUnionIdList\");\n        // 遍历解析unionIdToGroupUnionIdList，unionIdToGroupUnionIdList的每个元素，都是一组UnionID和GroupUnionID\n        for (Object unionIdToGroupUnionId : unionIdToGroupUnionIdList) {\n            JSONObject unionIdToGroupUnionIdJson = (JSONObject) unionIdToGroupUnionId;\n            // 解析获取unionId\n            String unionId = unionIdToGroupUnionIdJson.getString(\"unionId\");\n            // 解析获取groupUnionId\n            String groupUnionId = unionIdToGroupUnionIdJson.getString(\"groupUnionId\");\n        }\n    }\n\n    /**\n     * 通过UnionID获取GroupUnionID\n     * @param url 通过OpenID或UnionID获取GroupUnionID接口URL\n     * @param accessToken 应用级凭证\n     * @param unionIdList UnionID列表\n     * @return JSONObject响应结果\n     * @throws IOException 接口调用异常\n     */\n    private static JSONObject batchGetGroupUnionIdByUnionId(\n            String url, String accessToken, List<String> unionIdList) throws IOException {\n        HttpPost httpPost = new HttpPost(url);\n        Map<String, Object> reqBody = new HashMap<>();\n        reqBody.put(\"unionIdList\", unionIdList);\n        httpPost.setEntity(CallUtils.wrapJsonEntity(reqBody));\n        httpPost.setHeader(\"Content-Type\", \"application/json; charset=utf-8\");\n        httpPost.setHeader(\"Authorization\", \"Bearer \" + accessToken);\n        // 如需要自定义异常处理请使用api CallUtils#remoteCall(HttpUriRequest, BiFunction<CloseableHttpResponse,String,E>)\n        return CallUtils.toJsonObject(CallUtils.remoteCallAccountApi(httpPost));\n    }\n\n    /**\n     * 通过OpenID获取GroupUnionID\n     * @param url 通过OpenID或UnionID获取GroupUnionID接口URL\n     * @param accessToken 应用级凭证\n     * @param openIdList OpenID列表\n     * @return JSONObject响应结果\n     * @throws IOException 接口调用异常\n     */\n    private static JSONObject batchGetGroupUnionIdByOpenId(\n            String url, String accessToken, List<String> openIdList) throws IOException {\n        HttpPost httpPost = new HttpPost(url);\n        Map<String, Object> reqBody = new HashMap<>();\n        reqBody.put(\"openIdList\", openIdList);\n        httpPost.setEntity(CallUtils.wrapJsonEntity(reqBody));\n        httpPost.setHeader(\"Content-Type\", \"application/json; charset=utf-8\");\n        httpPost.setHeader(\"Authorization\", \"Bearer \" + accessToken);\n        // 如需要自定义异常处理请使用api CallUtils#remoteCall(HttpUriRequest, BiFunction<CloseableHttpResponse,String,E>)\n        return CallUtils.toJsonObject(CallUtils.remoteCallAccountApi(httpPost));\n    }\n}\n"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "参数错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请按照响应描述中的提示，检查并修改", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0",
              children: "请求参数"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60010003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鉴权头Authorization校验不通过。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查并修改", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0",
              children: "请求参数"
            }), "中Authorization参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60170001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者账号未加入关联主体账号组。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/start/cag-0000001265390541",
              children: "创建账号组"
            }), "创建关联主体账号组，然后在关联主体账号组中", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/start/aai-0000001265430513",
              children: "添加账号组成员"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60010001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可重试，若仍无法解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
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
58220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
692519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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