"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["896580"], {
938765(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_wallet_api_wallet_rest_api_wallet_rest_api_public_wallet_rest_api_public_md_e25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-wallet-api-wallet-rest-api-wallet-rest-api-public-wallet-rest-api-public-md-e25.json
var site_docs_ref_wallet_api_wallet_rest_api_wallet_rest_api_public_wallet_rest_api_public_md_e25_namespaceObject = JSON.parse('{"id":"wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public","title":"公共接口","description":"获取AccessToken","source":"@site/docs-ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public.md","sourceDirName":"wallet-api/wallet-rest-api/wallet-rest-api-public","slug":"/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"公共接口","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public","kit":"应用服务","last_updated":"2026-04-22","slug":"wallet-rest-api-public"},"sidebar":"ref","previous":{"title":"公共说明","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-introduction/wallet-rest-api-introduction"},"next":{"title":"数字车钥匙接口","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public.md


const frontMatter = {
	title: '公共接口',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'wallet-rest-api-public'
};
const contentTitle = '公共接口';

const assets = {

};



const toc = [{
  "value": "获取AccessToken",
  "id": "获取accesstoken",
  "level": 2
}, {
  "value": "接口原型",
  "id": "接口原型",
  "level": 3
}, {
  "value": "请求参数",
  "id": "请求参数",
  "level": 3
}, {
  "value": "请求示例",
  "id": "请求示例",
  "level": 3
}, {
  "value": "响应参数",
  "id": "响应参数",
  "level": 3
}, {
  "value": "响应示例",
  "id": "响应示例",
  "level": 3
}, {
  "value": "调用示例",
  "id": "调用示例",
  "level": 3
}, {
  "value": "设备认证",
  "id": "设备认证",
  "level": 2
}, {
  "value": "接口原型",
  "id": "接口原型-1",
  "level": 3
}, {
  "value": "请求参数",
  "id": "请求参数-1",
  "level": 3
}, {
  "value": "请求示例",
  "id": "请求示例-1",
  "level": 3
}, {
  "value": "响应参数",
  "id": "响应参数-1",
  "level": 3
}, {
  "value": "响应示例",
  "id": "响应示例-1",
  "level": 3
}, {
  "value": "三方业务管理服务处理调用示例",
  "id": "三方业务管理服务处理调用示例",
  "level": 3
}, {
  "value": "获取个人化数据Token",
  "id": "获取个人化数据token",
  "level": 2
}, {
  "value": "接口原型",
  "id": "接口原型-2",
  "level": 3
}, {
  "value": "请求参数",
  "id": "请求参数-2",
  "level": 3
}, {
  "value": "请求示例",
  "id": "请求示例-2",
  "level": 3
}, {
  "value": "响应参数",
  "id": "响应参数-2",
  "level": 3
}, {
  "value": "响应示例",
  "id": "响应示例-2",
  "level": 3
}, {
  "value": "三方业务管理服务处理调用示例",
  "id": "三方业务管理服务处理调用示例-1",
  "level": 3
}, {
  "value": "获取个人化数据",
  "id": "获取个人化数据",
  "level": 2
}, {
  "value": "接口原型",
  "id": "接口原型-3",
  "level": 3
}, {
  "value": "请求参数",
  "id": "请求参数-3",
  "level": 3
}, {
  "value": "请求示例",
  "id": "请求示例-3",
  "level": 3
}, {
  "value": "响应参数",
  "id": "响应参数-3",
  "level": 3
}, {
  "value": "响应示例",
  "id": "响应示例-3",
  "level": 3
}, {
  "value": "三方业务管理服务处理调用示例",
  "id": "三方业务管理服务处理调用示例-2",
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
        id: "公共接口",
        children: "公共接口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取accesstoken",
      children: "获取AccessToken"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口用于获取访问token，向钱包云服务的每次https请求都需要传入访问的token，该token相当于一个访问许可，钱包云服务器收到其请求时会对其进行校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口原型",
      children: "接口原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "承载协议"
            })
          }), "：HTTPS POST"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向"
            })
          }), "：三方业务管理服务->钱包云服务"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL"
            })
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://oauth-login.cloud.huawei.com/oauth2/v3/token"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求消息：Content-Type: application/x-www-form-urlencoded"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json;charset=UTF-8"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求参数",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Header"
        })
      })
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
            children: "取值为：application/x-www-form-urlencoded"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Body"
        })
      })
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
            children: "grant_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "填写为“client_credentials”，表示为客户端模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/application-dev-overview",
              children: "应用开发准备"
            }), "中得到的OAuth 2.0客户端ID，对于AppGallery Connect类应用，该值为应用的Client ID"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client_secret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/application-dev-overview",
              children: "应用开发准备"
            }), "中给客户端ID分配的密钥，对于AppGallery Connect类应用，该值为应用的Client Secret。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "grant_type=client_credentials&client_id=<客户端ID>&client_secret=<客户端密钥>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应参数",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Header"
        })
      })
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
            children: "取值为：application/json;charset=UTF-8"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Body"
        })
      })
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Token。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expires_in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Token的过期时间，以秒为单位。默认60分钟过期。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"access_token\": \"<返回的Access Token>\",\n  \"expires_in\": 3600,\n  \"token_type\": \"Bearer\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    public static String getToken(String clientId, String clientSecret) {\n        HttpHeaders header = new HttpHeaders();\n        header.setContentType(MediaType.APPLICATION_FORM_URLENCODED);\n\n        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();\n        map.add(\"grant_type\", \"client_credentials\");\n        map.add(\"client_id\", clientId);\n        map.add(\"client_secret\", clientSecret);\n\n        String tokenUrl = ConfigUtil.instants().getValue(\"gw.tokenUrl\");\n\n        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(map, header);\n        ResponseEntity<JSONObject> exchange =\n            REST_TEMPLATE.exchange(tokenUrl, HttpMethod.POST, entity, JSONObject.class);\n\n        JSONObject response = exchange.getBody();\n        if (response == null) {\n            throw new NullPointerException(\"Get null token response.\");\n        }\n        String accessToken = response.getString(\"access_token\");\n        if (Strings.isEmpty(accessToken)) {\n            throw new NullPointerException(\"Get null access token.\");\n        }\n        return accessToken;\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备认证",
      children: "设备认证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预个人化执行完成后，华为钱包App经由钱包云服务中转后请求认证设备，将applet身份公钥以及身份公钥的钱包服务器签名携带在请求体中，向三方业务管理服务请求三方业务管理服务认证授权证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口原型-1",
      children: "接口原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "承载协议"
            })
          }), "：HTTPS POST"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向"
            })
          }), "：钱包云服务->三方业务管理服务"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL"
            })
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://\\{webServiceURL\\}/v1/passes/registrations"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求消息：Content-Type: application/json;charset=UTF-8"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json;charset=UTF-8"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(793819)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "webServiceURL为DK业务管理服务域名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求参数-1",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Header"
        })
      })
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：application/json;charset=UTF-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E7%94%B3%E8%AF%B7%E9%92%A5%E5%8C%99%E5%8D%A1%E7%89%87",
              children: "申请钥匙卡片"
            }), "时linkDevicePass参数中的token值，用于校验该请求是否合法。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "父节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passTypeIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "时注册的服务号，需要开发者到华为AGC网站申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "serialNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车钥匙卡片在华为钱包云服务器中的卡号，回调时以便发卡方根据此值识别具体的卡券记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号，固定10.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "userDeviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在当前设备上的唯一标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "随机数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applet的身份私钥对requestBody的Hash值的签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钱包云服务使用钱包服务器私钥对publicKey的签名值。DK业务管理服务收到该请求后，需要使用钱包云服务公钥对其进行验签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "publicKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applet的身份公钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求示例-1",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"requestBody\": {\n    \"passTypeIdentifier\": \"Replace with the Service ID you applied on AGC\",\n    \"passVersion\": \"10.0\",\n    \"serialNumber\": \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\n    \"transId\": \"16198381994485116358\",\n    \"userDeviceId\": \"xxx\"\n  },\n  \"certificate\": {\n    \"publicKey\": \"xxx\",\n    \"signature\": \"xxx\"\n  },\n  \"signature\": \"xxx\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应参数-1",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Header"
        })
      })
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
            children: "取值为：application/json;charset=UTF-8"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "父节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Httpstatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口网络状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DK业务管理服务使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "步骤5生成的私钥对publicKey进行签名后返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Certificate参数类型说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "certificate子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钱包云服务使用钱包服务器私钥对publicKey的签名值。DK业务管理服务收到该请求后，需要使用钱包云服务公钥对其进行验签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publicKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applet的身份公钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应示例-1",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"httpStatus\": \"0\",\n  \"response\": {\n    \"certificate\": {\n      \"signature\": \"xxx\",\n      \"publicKey\": \"xxx\"\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "三方业务管理服务处理调用示例",
      children: "三方业务管理服务处理调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的调用示例，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/wallet-kit-sample-code-severdemo-nfc-java",
        children: "钱包服务-服务端卡片激活"
      }), "示例代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    public RegistrationsResponse dealWithRegisterRequest(String token, RegistrationsRequest request) {\n        RegistrationsResponse response = new RegistrationsResponse();\n        if (token == null) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_PARAM_ERROR));\n            return response;\n        }\n        if (!ParamChecker.isValidRegistrationsRequest(request)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_PARAM_ERROR));\n            return response;\n        }\n        Certificate walletCertificate = request.getCertificate();\n        if (!verifyWalletCert(walletCertificate)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_SIGN_ERROR));\n            return response;\n        }\n\n        if (!ParamChecker.hashSignatureCheck(request.toJsonString(), request.getSignature(),\n                appletAuthPublicKey, DataConvertUtil.SIGN_MODE_SHA256_RSA_MGF1)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_SIGN_ERROR));\n            return response;\n        }\n\n        String userDeviceId = request.getRequestBody().getUserDeviceId();\n        response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_OK));\n        Response responseBody = new Response();\n        Certificate serverCert = PassData.getServerCert(appletAuthPublicKey);\n        responseBody.setCertificate(serverCert);\n        response.setResponse(responseBody);\n        deviceIdCertMap.put(userDeviceId, serverCert);\n        return response;\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取个人化数据token",
      children: "获取个人化数据Token"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为钱包APP经由钱包云服务中转后向三方业务管理服务平台获取token（个人化数据请求报文里参与计算hash）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口原型-2",
      children: "接口原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "承载协议"
            })
          }), "：HTTPS POST"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向"
            })
          }), "：钱包云服务->三方业务管理服务"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL"
            })
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://\\{webServiceURL\\}/v1/passes/requestPersonalizeToken"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求消息：Content-Type: application/json;charset=UTF-8"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json;charset=UTF-8"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求参数-2",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Header"
        })
      })
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：application/json;charset=UTF-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey#%E7%94%B3%E8%AF%B7%E9%92%A5%E5%8C%99%E5%8D%A1%E7%89%87",
              children: "申请钥匙卡片"
            }), "时linkDevicePass参数中的token值，用于校验该请求是否合法。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "父节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passTypeIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "时注册的服务号，需要开发者到华为AGC网站申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "serialNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车钥匙卡片在华为钱包云服务器中的卡号，回调时以便发卡方根据此值识别具体的卡券记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号，固定10.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "userDeviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在当前设备上的唯一标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "随机数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applet的身份私钥对requestBody的Hash值的签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E5%A4%87%E8%AE%A4%E8%AF%81",
              children: "设备认证"
            }), "接口返回的certificate的签名。  DK业务管理服务使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "步骤5生成的私钥对Applet的身份公钥签名信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "publicKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E5%A4%87%E8%AE%A4%E8%AF%81",
              children: "设备认证"
            }), "接口返回的certificate里的Applet的身份公钥。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求示例-2",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"requestBody\": {\n    \"passTypeIdentifier\": \"Replace with the Service ID you applied on AGC\",\n    \"passVersion\": \"10.0\",\n    \"serialNumber\": \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\n    \"transId\": \"16198381994485116358\",\n    \"userDeviceId\": \"xxx\"\n  },\n  \"certificate\": {\n    \"publicKey\": \"xxx\",\n    \"signature\": \"xxx\"\n  },\n  \"signature\": \"xxx\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应参数-2",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Header"
        })
      })
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
            children: "取值为：application/json;charset=UTF-8"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "父节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Httpstatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口网络状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "个人化token。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应示例-2",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"httpStatus\": \"0\",\n  \"response\": {\n    \"token\": \"sp.token.1619838979341\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "三方业务管理服务处理调用示例-1",
      children: "三方业务管理服务处理调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的调用示例，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/wallet-kit-sample-code-severdemo-nfc-java",
        children: "钱包服务-服务端卡片激活"
      }), "示例代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    public RequestTokenResponse dealWithTokenRequest(RequestTokenRequest request) {\n        RequestTokenResponse response = new RequestTokenResponse();\n        String userDeviceId = request.getRequestBody().getUserDeviceId();\n        Certificate spCertFromRequest = request.getCertificate();\n        if (CommonUtils.isStringEmpty(userDeviceId) || !ParamChecker.checkSpServerCertificate(spCertFromRequest)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_PARAM_ERROR));\n            return response;\n        }\n        Certificate cachedCert = deviceIdCertMap.get(userDeviceId);\n        if (cachedCert == null) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_SIGN_ERROR));\n            return response;\n        }\n        if (!ParamChecker.hashSignatureCheck(request.toJsonString(), request.getSignature(),\n                appletAuthPublicKey, DataConvertUtil.SIGN_MODE_SHA256_RSA_MGF1)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_SIGN_ERROR));\n            return response;\n        }\n        response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_OK));\n        Response responseBody = new Response();\n        String personalizeToken = PassData.getPersonalizeToken();\n        responseBody.setToken(personalizeToken);\n        deviceIdTokenMap.put(userDeviceId, personalizeToken);\n        response.setResponse(responseBody);\n        return response;\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取个人化数据",
      children: "获取个人化数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为钱包APP经由钱包云服务中转后向三方业务管理服务获取个人化数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口原型-3",
      children: "接口原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "承载协议"
            })
          }), "：HTTPS POST"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向"
            })
          }), "：钱包云服务->三方业务管理服务"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL"
            })
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://\\{webServiceURL\\}/v1/passes/requestPersonalize"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求消息：Content-Type: application/json;charset=UTF-8"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json;charset=UTF-8"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求参数-3",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Header"
        })
      })
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：application/json;charset=UTF-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E4%B8%AA%E4%BA%BA%E5%8C%96%E6%95%B0%E6%8D%AEtoken",
              children: "获取个人化数据Token"
            }), "返回的token值，用于校验该请求是否合法。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "父节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cardSEId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applet唯一标识，可以用于车端秘钥分散"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passTypeIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "时注册的服务号，需要开发者到华为AGC网站申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "serialNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车钥匙卡片在华为钱包云服务器中的卡号，回调时以便发卡方根据此值识别具体的卡券记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号，固定10.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "userDeviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在当前设备上的唯一标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "personalizePublicKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applet的个人化公钥，用于加密个人化字段值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "personalizeCert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applet身份私钥对个人化公钥personalizePublicKey的签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "personalizeCertType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定值，默认为私钥签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transPublicKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于加密返回的对称秘钥，用于对返回的数据做数字信封。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事务流水，用于拼接返回的对称秘钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Applet的身份私钥对requestBody的Hash值的签名。", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E4%B8%AA%E4%BA%BA%E5%8C%96%E6%95%B0%E6%8D%AEtoken",
              children: "获取个人化数据Token"
            }), "作为其中requestbody一个key参与Hash值计算。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E5%A4%87%E8%AE%A4%E8%AF%81",
              children: "设备认证"
            }), "接口返回的certificate的签名。  DK业务管理服务使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "步骤5生成的私钥对Applet的身份公钥签名信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "publicKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E5%A4%87%E8%AE%A4%E8%AF%81",
              children: "设备认证"
            }), "接口返回的certificate里的Applet的身份公钥。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求示例-3",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"requestBody\": {\n    \"cardSEId\": \"xxxxxxxxxxxxxxxx\",\n    \"personalizeCert\": \"xxx\",\n    \"personalizeCertType\": \"\",\n    \"personalizePublicKey\": \"xxx\",\n    \"transPublicKey\": \"xxx\",\n    \"passTypeIdentifier\": \"Replace with the Service ID you applied on AGC\",\n    \"passVersion\": \"10.0\",\n    \"serialNumber\": \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\n    \"transId\": \"858947076d58a5e66ee22b9ed1c43c4d\",\n    \"userDeviceId\": \"xxx\"\n  },\n  \"certificate\": {\n    \"publicKey\": \"xxx\",\n    \"signature\": \"xxx\"\n  },\n  \"signature\": \"xxx\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应参数-3",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Header"
        })
      })
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
            children: "取值为：application/json;charset=UTF-8"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "父节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Httpstatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口网络状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "encryptSessionKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DK业务管理服务使用请求中的transPublicKey加密生成的sessionKey。采用Base64编码，加密前的字段说明：三方生成AES128的aesKey和aesIv，用于加密生成encryptAppletPersonalizeFields和encryptDevicePass。使用请求中transPublicKey字段加密transId+aesKey+aesIv，对结果进行base64编码即得到encryptSessionKey。加密算法: RSA/ECB/OAEPWithSHA-256AndMGF1Padding。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "encryptDevicePass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空字符串\"\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "encryptAppletPersonalizeFields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于蓝牙/NFC刷卡时的认证以及数据加解密操作。DK业务管理服务通过生成的sessionKey加密Applet的个人化参数密文。采用Base64编码"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DK业务管理服务使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "步骤5生成的私钥对response的Hash值进行签名。"]
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "encryptAppletPersonalizeFields子节点参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存储格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temp_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aesKey(AES128的key)，长度16字节，用于加密CardId，cardPrivateInfo信息。temp_key：aesKey明文之前拼接一个固定的十六进制字符前缀\"34810233\"后，使用Applet个人化公钥appletPublicKey对其进行加密。加密算法RSA/NONE/OAEPWithSHA1AndMGF1Padding。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temp_iv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aesIv(AES128的iv)，长度16字节，用于applet解密写卡数据。temp_iv：aesIv使用Applet个人化公钥appletPublicKey加密。加密算法RSA/NONE/OAEPWithSHA1AndMGF1Padding。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "card_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9F3B + Lc + CardId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CardId即发卡方发放的卡片唯一标识（和\"生成钥匙卡片\"中的serialNumber保持一致），长度16字节。使用TLV格式存储：T=9F3B，Lc=10，V=CardId；加密方式：使用aesKey，aesIv对整个TLV加密，并转换成十六进制字符串。CBC模式加密，加密算法：AES/CBC/NoPadding。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "card_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发卡方发放的卡片密钥，16字节，一张卡支持1个秘钥，计算SessionKey时使用。使用\"34010133\"作为前缀拼接后加密；使用Applet个人化公钥appletPublicKey对拼接后的十六进制字符进行加密。加密算法RSA/NONE/OAEPWithSHA1AndMGF1Padding。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "card_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9F05 + Lc + CardInfo1 + 9F31 + Lc + CardAuthParameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发卡方发放的卡片私有信息，允许在AUTH认证之前读取（GetProcessData步骤），TLV格式存储（多个TLV数据拼接）。加密方式：TLV明文数据补800...00到16字节整数倍，使用aesKey，aesIv加密后的结果，并转换成十六进制字符串。CBC模式加密，加密算法：AES/CBC/NoPadding。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "card_privateInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发卡方发放的卡片私有信息，如卡片有效期、权限等信息，在AUTH认证之后读取（ReadBinary步骤），三方自行解析。加密方式：数据明文后补800...00到16字节整数倍，使用aesKey，aesIv加密后的结果，并转换成十六进制字符串。CBC模式加密，加密算法：AES/CBC/NoPadding。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "card_key_iv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lc + CardKeyIV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交易流程协商的SessionKey使用（需要同步下发到车端），16字节，如您无需使用此值，请传入全0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应示例-3",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"httpStatus\": \"0\",\n  \"response\": {\n    \"encryptDevicePass\": \"xxx\",\n    \"encryptAppletPersonalizeFields\": \"xxx\",\n    \"encryptSessionKey\": \"xxx\"\n  },\n  \"signature\": \"xxx\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "三方业务管理服务处理调用示例-2",
      children: "三方业务管理服务处理调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的调用示例，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/wallet-kit-sample-code-severdemo-nfc-java",
        children: "钱包服务-服务端卡片激活"
      }), "示例代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    public PersonalizeResponse dealWithPersonalizeDataRequest(String token, PersonalizeRequest request) {\n        PersonalizeResponse response = new PersonalizeResponse();\n        RequestBody requestBody = request.getRequestBody();\n        String userDeviceId = requestBody.getUserDeviceId();\n        Certificate spCertFromRequest = request.getCertificate();\n        String cachedToken = deviceIdTokenMap.remove(userDeviceId);\n        if (cachedToken == null || !cachedToken.equals(token)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_PARAM_ERROR));\n            return response;\n        }\n        if (CommonUtils.isStringEmpty(userDeviceId) || !ParamChecker.checkSpServerCertificate(spCertFromRequest)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_PARAM_ERROR));\n            return response;\n        }\n\n        Certificate cachedCert = deviceIdCertMap.get(userDeviceId);\n        if (cachedCert == null) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_PARAM_ERROR));\n            return response;\n        }\n        if (!ParamChecker.hashSignatureCheck(request.toJsonString(token), request.getSignature(),\n                appletAuthPublicKey, DataConvertUtil.SIGN_MODE_SHA256_RSA_MGF1)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_SIGN_ERROR));\n            return response;\n        }\n        String personalizePKSign = requestBody.getPersonalizeCert();\n        byte[] srcBytes = DataConvertUtil.base64Decode(requestBody.getPersonalizePublicKey());\n        if (!DataConvertUtil.checkSign(srcBytes, personalizePKSign,\n                appletAuthPublicKey, DataConvertUtil.SIGN_MODE_SHA256_RSA_MGF1)) {\n            response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_SIGN_ERROR));\n            return response;\n        }\n        response.setHttpStatus(String.valueOf(Constants.RESULT_CODE_OK));\n        PassDataResponse passData = getDevicePassData(requestBody);\n        response.setResponse(passData);\n        String passDataStr = passData.toJsonString();\n        String passHashValue = DataConvertUtil.encodeSHA256(passDataStr);\n        String signature = DataConvertUtil.signData(passHashValue, Constants.SERVER_SECRET_KEY);\n        response.setSignature(signature);\n        return response;\n    }\n"
      })
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
793819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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