"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["768376"], {
215528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_wallet_api_wallet_rest_api_wallet_rest_api_carkey_wallet_rest_api_carkey_md_059_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-wallet-api-wallet-rest-api-wallet-rest-api-carkey-wallet-rest-api-carkey-md-059.json
var site_docs_ref_wallet_api_wallet_rest_api_wallet_rest_api_carkey_wallet_rest_api_carkey_md_059_namespaceObject = JSON.parse('{"id":"wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey","title":"数字车钥匙接口","description":"预置模板","source":"@site/docs-ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey.md","sourceDirName":"wallet-api/wallet-rest-api/wallet-rest-api-carkey","slug":"/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"数字车钥匙接口","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-carkey","kit":"应用服务","last_updated":"2026-04-22","slug":"wallet-rest-api-carkey"},"sidebar":"ref","previous":{"title":"公共接口","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public"},"next":{"title":"REST API错误码","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-error-code/wallet-rest-api-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey.md


const frontMatter = {
	title: '数字车钥匙接口',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-carkey',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'wallet-rest-api-carkey'
};
const contentTitle = '数字车钥匙接口';

const assets = {

};



const toc = [{
  "value": "预置模板",
  "id": "预置模板",
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
  "value": "调用示例",
  "id": "调用示例",
  "level": 3
}, {
  "value": "申请ICCE钥匙",
  "id": "申请icce钥匙",
  "level": 2
}, {
  "value": "申请钥匙卡片",
  "id": "申请钥匙卡片",
  "level": 3
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
  "value": "调用示例",
  "id": "调用示例-1",
  "level": 3
}, {
  "value": "生成JWE数据",
  "id": "生成jwe数据",
  "level": 3
}, {
  "value": "调用示例",
  "id": "调用示例-2",
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
        id: "数字车钥匙接口",
        children: "数字车钥匙接口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预置模板",
      children: "预置模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片模板的创建是接入流程的第一步，这一步您将会通过http/https请求的方式向华为钱包云服务提供卡券样式的关键信息，如卡面主标题、副标题、logo、背景图片等；用于华为钱包钥匙页面的展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以创建多个模板，它们有着相同的机构名和服务号，而模板ID不同；当您申请车钥匙时，每一张卡必须和唯一的模板ID关联；即一个模板可供多张钥匙使用，而一张钥匙只能使用一个模板ID。"
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
            children: "https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/key\\_stdcar/model"
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
      id: "请求参数",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Header"
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
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：Content-Type: application/json;charset=UTF-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public#%E8%8E%B7%E5%8F%96accesstoken",
              children: "获取AccessToken"
            }), "获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：Content-Type: application/json;charset=UTF-8"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "passTypeIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["hwpass.stdcarkey.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义)  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "时注册的服务号，需要开发者到华为AGC网站申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "passStyleIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义，模板ID，即modelId。在同一个appId下唯一。长度不超过64个字符，只能是字母、数字和（.）、（-）、（_）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "organizationName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义，商户名称，最长64个字节，无具体格式要求，中英文均可。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "passVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号，固定10.0  钱包对象版本，开发者可以依据此确定钱包对象的版本信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fields"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义  卡券展示信息：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "appendFields"
              })
            }), "和", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "commonFields"
              })
            })]
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "appendFields参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必须"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isCreateWhiteCard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFCCardFlag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于表明是否是NFC卡的flag"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "commonFields参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必须"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "logo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://开头的图片链接"
            }), "，具体地址车厂自定义"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面logo  128*128px，大小<=20kb，直角图片，无需切圆角"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundImage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://开头的图片链接"
            }), "，具体地址车厂自定义"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面背景  1312*820px，直角图片，无需切圆角"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "picUrl"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://开头的图片链接"
            }), "，具体地址车厂自定义"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带logo的卡面背景  1312*820px，直角图片，无需切圆角"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "merchantName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面主标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面主标题  小于256字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面副标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面副标题  小于256字节"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"passVersion\": \"10.0\",\n  \"passTypeIdentifier\": \"Replace with the Service ID you applied on AGC\",\n  \"passStyleIdentifier\": \"DigitalCarKeyTestModel\",\n  \"organizationName\": \"Replace with your organization name\",\n  \"fields\": {\n    \"appendFields\": [\n      {\n        \"label\": \"NFCCardFlag\",\n        \"value\": \"true\",\n        \"key\": \"isCreateWhiteCard\"\n      }\n    ],\n    \"commonFields\": [\n      {\n        \"label\": \"卡面主标题\",\n        \"value\": \"我的车\",\n        \"key\": \"merchantName\"\n      },\n      {\n        \"label\": \"卡面副标题\",\n        \"value\": \"XXX车钥匙\",\n        \"key\": \"name\"\n      },\n      {\n        \"label\": \"\",\n        \"value\": \"https://xxx/xxx.png\",\n        \"key\": \"logo\"\n      },\n      {\n        \"label\": \"\",\n        \"value\": \"https://xxx/xxx.webp\",\n        \"key\": \"backgroundImage\"\n      },\n      {\n        \"label\": \"\",\n        \"value\": \"https://xxx/xxx.png\",\n        \"key\": \"picUrl\"\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应参数",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模板预置成功，即http响应为200时，钱包云服务会将DK业务管理服务请求的数据原样返回，即和上面的请求体中的数据一致；其他错误情况，可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-error-code/wallet-rest-api-error-code",
        children: "REST API错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    public void createStdCarKeyModel() {\n        JSONObject model = JSONObject.parseObject(ConfigUtil.readFile(\"StdCarKeyModel.json\"));\n        HwWalletObjectUtil.validateModel(model);\n        String urlSegment = \"/v2/key_stdcar/model\";\n        JSONObject responseModel = serverApiService.postToWalletServer(urlSegment, JSONObject.toJSONString(model));\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请icce钥匙",
      children: "申请ICCE钥匙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "车主APP向DK业务管理服务申请开通ICCE车钥匙，DK业务管理服务将车钥匙卡片信息添加至钱包云服务中；其中：车主APP->DK业务管理服务之间的交互由车厂自行实现，本章主要侧重于DK业务管理服务->钱包云服务申请ICCE车钥匙的过程，主要包括：申请钥匙卡片和生成JWE数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请钥匙卡片",
      children: "申请钥匙卡片"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DK业务管理服务向华为钱包云服务请求创建车钥匙卡片。"
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
          }), "：三方业务管理服务->钱包云服务"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL"
            })
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/key\\_stdcar/instance"
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
      id: "请求参数-1",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Header"
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
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：Content-Type: application/json;charset=UTF-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public#%E8%8E%B7%E5%8F%96accesstoken",
              children: "获取AccessToken"
            }), "获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content-Type: application/json;charset=UTF-8"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Body"
        })
      })
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
            children: "passTypeIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["hwpass.stdcarkey.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义)  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "时注册的服务号，需要开发者到华为AGC网站申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "passStyleIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义，注：示例代码中的默认值仅作说明，请勿直接使用  请使用“预置模板中创建的”模板ID，即modelId。在同一个appId下唯一。长度不超过64个字符，只能是字母、数字和（.）、（-）、（_）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "organizationName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义，注：示例代码中的默认值仅作说明，请勿直接使用  请使用预置模板中创建的商户名称，最长64个字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "organizationPassId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String(64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义，注：示例代码中的默认值仅作说明，请勿直接使用  车钥匙卡片在开发者服务器中的卡号。在同一个appId下唯一。长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字（全大写）。当前和serialNumber保持一致"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "serialNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String(64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义，注：示例代码中的默认值仅作说明，请勿直接使用  车钥匙卡片在华为钱包服务器中的卡号，即instanceId。在同一个appId下唯一。长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字（全大写）。当前和organizationPassId保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fields"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义  卡券展示信息：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "commonFields"
              })
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "timeList"
              })
            }), "和", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "status"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "linkDevicePass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linkDevicePass"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "linkDevicePass"
              })
            }), "  此参数用于保存车钥匙管理台服务器地址、公钥信息以及是否使能卡券的NFC能力。"]
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "timeList"
              })
            }), "参数"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必须"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "linkDevicePassExpireTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间列表"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "status"
              })
            }), "参数"]
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
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态值。取值如下  - active：生效  - inactive：未激活  - completed：已使用  - expired：已过期"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "effectTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTC格式，生效时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expireTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTC格式，失效时间，如果超过此事件，卡券自动按照expired状态处理"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "commonFields参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必须"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bleServiceUuid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂蓝牙设备的SERVICE_UDID，用于手机发现车端蓝牙模块开启的车钥匙服务；请使用蓝牙标准规范：如0000xxxx-0000-1000-8000-00805f9b34fb；如需自行定义，请联系ICCE确认"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ownerPassTypeIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主卡服务号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hwpass.stdcarkey.std：归属ICCE车钥匙类别"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readerMatchValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车钥匙标识，建议字节：不超过20字节（第一字节：车厂标识，第二字节：品牌/系列标识，后续字节保证在车厂内唯一）, 只能包含0-9，A-F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bleTargetPackage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂app的包名，用于钱包在特定场景下拉起车厂app，注：请提供应用安装后的全包名，即应用的applicationId, 如com.huawei.wallet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bleTargetActivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂app的activity，供钱包在特定场景下拉起车厂app；注：全路径名称，不带文件后缀，如com.huawei.xxx.xxx.ShowCarDetailActivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bleTargetService"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂app的service，供钱包在特定场景下拉起车厂app，注：全路径名称，不带文件后缀名，如com.huawei.xxx.xxx.BleICCEService"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bleMacAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车端蓝牙设备的mac地址，用于华为手机扫描车端蓝牙模块、向车端蓝牙发起Gatt连接等。请注意格式合法性，如：01:23:45:67:89:0A；注：字符必须全大写"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bleFeature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hwpass.carkey.ble：标识支持蓝牙车钥匙"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前钥匙开通的设备类型，如手机：Phone，穿戴：Wear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyHolderType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钥匙持有者性质"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前钥匙持有者的性质，如车主：Owner，分享：Share"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vehicleId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车辆vin码，不超过20个字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "personalizedData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂个性化数据，可用于储存车辆标定数据等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "logo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://开头的图片链接"
            }), "，具体地址车厂自定义"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面logo；128*128px，大小<=20kb，直角图片，无需切圆角  如果此处携带该参数，则会覆盖对应模板中的相应字段数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundImage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://开头的图片链接"
            }), "，具体地址车厂自定义"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面背景；1312*820px，直角图片，无需切圆角  如果此处携带该参数，则会覆盖对应模板中的相应字段数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "picUrl"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://开头的图片链接"
            }), "，具体地址车厂自定义"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带logo的卡面背景；1312*820px，直角图片，无需切圆角  如果此处携带该参数，则会覆盖对应模板中的相应字段数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "merchantName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面主标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面主标题；小于256字节  如果此处携带该参数，则会覆盖对应模板中的相应字段数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车厂定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面副标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡面副标题；小于256字节  如果此处携带该参数，则会覆盖对应模板中的相应字段数据。"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "linkDevicePass参数"
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
            children: "webServiceURL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DK业务管理服务地址，用于开通激活过程中向DK业务管理服务发起设备认证、获取个人化token以及获取个人化数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DK业务管理服务自行生成，没有格式要求，用于开通激活过程中钱包向DK业务管理服务进行“", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public#%E8%AE%BE%E5%A4%87%E8%AE%A4%E8%AF%81",
              children: "设备认证"
            }), "”和“", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/wallet-api/wallet-rest-api/wallet-rest-api-public/wallet-rest-api-public#%E8%8E%B7%E5%8F%96%E4%B8%AA%E4%BA%BA%E5%8C%96%E6%95%B0%E6%8D%AEtoken",
              children: "获取个人化数据Token"
            }), "”请求头中携带的Authorization信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "serialNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请和上述提及的serialNumber保持一致"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "passVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DevicePass卡券包版本，固定10.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spPublickey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "步骤5生成的公钥。用于对DK业务管理服务返回的“Applet个人化数据”进行验签。NFC卡片信息不会上传到钱包云服务器，所以终端设备需要这个参数来进行验签。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nfcType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定值\"1\"，表示开启NFC能力。如果这个值不是\"1\"，当前个人化实例的NFC能力会被关闭。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求示例-1",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"organizationName\": \"Replace with your organization name\",\n  \"passTypeIdentifier\": \"Replace with the Service ID you applied on AGC\",\n  \"passStyleIdentifier\": \"DigitalCarKeyTestModel\",\n  \"organizationPassId\": \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\n  \"serialNumber\": \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\n  \"fields\": {\n    \"timeList\": [\n      {\n        \"value\": \"timeListValue\",\n        \"key\": \"linkDevicePassExpireTime\"\n      }\n    ],\n    \"status\": {\n      \"state\": \"active\",\n      \"effectTime\": \"2020-04-06T00:00:00.111Z\",\n      \"expireTime\": \"2030-04-06T00:00:00.111Z\"\n    },\n    \"commonFields\": [\n      {\n        \"value\": \"xxx.CarActivity\",\n        \"key\": \"bleTargetActivity\"\n      },\n      {\n        \"value\": \"hwpass.carkey.ble\",\n        \"key\": \"bleFeature\"\n      },\n      {\n        \"value\": \"01:23:45:67:89:AB\",\n        \"key\": \"bleMacAddress\"\n      },\n      {\n        \"label\": \"readerId\",\n        \"value\": \"CAD34B258391C097\",\n        \"key\": \"readerMatchValue\"\n      },\n      {\n        \"label\": \"主卡服务号\",\n        \"value\": \"hwpass.stdcarkey.std\",\n        \"key\": \"ownerPassTypeIdentifier\"\n      },\n      {\n        \"value\": \"0000xxxx-0000-1000-8000-00805f9b34fb\",\n        \"key\": \"bleServiceUuid\"\n      },\n      {\n        \"value\": \"xxx\",\n        \"key\": \"bleTargetPackage\"\n      },\n      {\n        \"value\": \"xxx\",\n        \"key\": \"bleTargetService\"\n      },\n      {\n        \"value\": \"Phone\",\n        \"key\": \"deviceType\"\n      },\n      {\n        \"value\": \"Owner\",\n        \"key\": \"keyHolderType\"\n      },\n      {\n        \"value\": \"xxx\",\n        \"key\": \"vehicleId\"\n      }\n    ]\n  },\n  \"linkDevicePass\": {\n    \"webServiceURL\": \"https://xxx\",\n    \"nfcType\": \"1\",\n    \"serialNumber\": \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\",\n    \"passVersion\": \"10.0\",\n    \"spPublickey\": \"xxx\",\n    \"token\": \"xxx\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "响应参数-1",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回结果中会携带预置模板中的信息一并返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用示例-1",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的调用示例，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/wallet-kit-sample-code-severdemo-java",
        children: "钱包服务-服务端卡片开通"
      }), "示例代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    public void addStdCarKeyInstance() {\n        JSONObject instance = JSONObject.parseObject(ConfigUtil.readFile(\"StdCarKeyInstance.json\"));\n        HwWalletObjectUtil.validateInstance(instance);\n        String urlSegment = \"/v2/key_stdcar/instance\";\n        JSONObject responseInstance =\n            serverApiService.postToWalletServer(urlSegment, JSONObject.toJSONString(instance));\n\n        if (responseInstance.containsKey(\"serialNumber\")) {\n            String serialNumber = responseInstance.getString(\"serialNumber\");\n            JweTest test = new JweTest();\n            test.generateThinJWEToBindUser(serialNumber);\n        }\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成jwe数据",
      children: "生成JWE数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为钱包车钥匙卡片的开通是基于JWE（JSON Web Encryption）方式。因此DK业务管理服务向钱包云服务申请创建车钥匙成功后，基于创建成功的车钥匙serialNumber生成JWE数据，并将其返回给车厂app，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWE串包含JWE Encrypted Key，iv，Ciphertext，signature；可参见如下步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成一个随机的Content Encryption Key（CEK）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用RSA-OAEP加密算法，用钱包服务器给的公钥加密CEK，生成JWE Encrypted Key。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成JWE初始化向量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用AES GCM加密算法对明文部分进行加密生成密文Ciphertext，算法会随之生成一128位的认证标记Authentication Tag。对以上部分分别进行base64编码。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Signature是使用开发者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/wallet-kit-guide/wallet-preparations",
          children: "创建Wallet Kit服务"
        }), "步骤5生成的私钥对以上部分进行的签名。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用示例-2",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的调用示例，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/wallet-kit-sample-code-severdemo-java",
        children: "钱包服务-服务端卡片开通"
      }), "示例代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     public static String generateJwe(String jwePrivateKey, String payload) {\n        Map<String, String> jweHeader = getHeader();\n        String jweHeaderEncode = getEncodeHeader(jweHeader);\n        String sessionKey = generateSecureRandomFactor(16);\n        String sessionKeyPublicKey = \"MIIBojA****\"; // 填入真实的公钥值\n        String encryptedKeyEncode = getEncryptedKey(sessionKey, sessionKeyPublicKey);\n        byte[] iv = AesUtil.getIvByte(12);\n        String ivHexStr = new String(Hex.encodeHex(iv, false));\n        String ivEncode = Base64.encodeBase64URLSafeString(ivHexStr.getBytes(StandardCharsets.UTF_8));\n        String cipherTextEncode = getCipherText(payload, sessionKey, iv);\n        String signature = getSignature(jwePrivateKey, sessionKey, payload, jweHeaderEncode, ivEncode);\n        StringBuilder stringBuilder = new StringBuilder().append(jweHeaderEncode)\n            .append(\".\")\n            .append(encryptedKeyEncode)\n            .append(\".\")\n            .append(ivEncode)\n            .append(\".\")\n            .append(cipherTextEncode)\n            .append(\".\")\n            .append(signature);\n        return stringBuilder.toString();\n    }\n"
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