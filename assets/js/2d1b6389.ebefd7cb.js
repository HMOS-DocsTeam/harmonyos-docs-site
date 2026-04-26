"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["41941"], {
422592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_store_api_store_rest_store_rest_receive_store_rest_receive_md_2d1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-store-api-store-rest-store-rest-receive-store-rest-receive-md-2d1.json
var site_docs_ref_store_api_store_rest_store_rest_receive_store_rest_receive_md_2d1_namespaceObject = JSON.parse('{"id":"store-api/store-rest/store-rest-receive/store-rest-receive","title":"归因结果回传","description":"功能介绍","source":"@site/docs-ref/store-api/store-rest/store-rest-receive/store-rest-receive.md","sourceDirName":"store-api/store-rest/store-rest-receive","slug":"/store-api/store-rest/store-rest-receive/store-rest-receive","permalink":"/harmonyos-docs-site/ref/store-api/store-rest/store-rest-receive/store-rest-receive","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"归因结果回传","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-rest-receive","kit":"应用服务","last_updated":"2026-04-22","slug":"store-rest-receive"},"sidebar":"ref","previous":{"title":"module_install.h","permalink":"/harmonyos-docs-site/ref/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install"},"next":{"title":"deferredLink (延迟链接能力)","permalink":"/harmonyos-docs-site/ref/app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/store-api/store-rest/store-rest-receive/store-rest-receive.md


const frontMatter = {
	title: '归因结果回传',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-rest-receive',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'store-rest-receive'
};
const contentTitle = '归因结果回传';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
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
  "value": "请求示例",
  "id": "请求示例",
  "level": 2
}, {
  "value": "响应参数",
  "id": "响应参数",
  "level": 2
}, {
  "value": "响应示例",
  "id": "响应示例",
  "level": 2
}, {
  "value": "回传结果验签方法",
  "id": "回传结果验签方法",
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
        id: "归因结果回传",
        children: "归因结果回传"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用归因服务将满足隐私要求的归因结果回传给开发者、获胜的分发平台以及分发平台配置的归因监测平台。"
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
          }), " 华为应用归因端侧 -> （分发平台/开发者/归因监测平台）"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL："
            })
          }), " 应用生态伙伴在归因云端管理台注册归因角色时填写的URL地址"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求消息： Content-Type: application/json"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息： Content-Type: application/json"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求参数",
      children: "请求参数"
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
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否参与签名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ad_tech_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "归因成功的分发平台id，分发平台向应用归因云侧注册角色时，由应用归因服务分配，长度固定为8个字符如果接收方为分发平台，该id即分发平台自身的id。  如果接收方为归因监测平台/开发者，该id为归因监测平台/开发者注册转化时指定分发平台列表中归因成功的分发平台id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "campaign_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次转化归因到的营销任务id，仅当满足回传条件时携带。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "source_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体应用id，长度不超过64个字符，仅当满足回传条件时携带。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destination_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者应用id，长度不超过64个字符 。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 您的应用ID参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694",
              children: "查看应用基本信息"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "service_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["业务标识。  回传分发平台时，为分发平台关注的业务信息，如创意、素材等；  回传开发者时，为开发者关注的业务信息，如激活、付费相关营销链接信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-register#%E5%BC%80%E9%80%9A%E6%9D%83%E9%99%90",
              children: "申请开通权限"
            }), "方式向分发平台、开发者开放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "business_scene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["业务场景值，仅开发者满足回传条件时携带。  取值范围：[0,99]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-register#%E5%BC%80%E9%80%9A%E6%9D%83%E9%99%90",
              children: "申请开通权限"
            }), "方式向开发者开放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trigger_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["转化事件编码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-trigger/store-attribution-trigger-standard",
              children: "标准转化事件"
            }), "取值范围：[1, 200]。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-trigger/store-attribution-trigger-custom",
              children: "自定义转化事件"
            }), "取值范围：[501, 600]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "installation_status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用安装状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-register#%E5%BC%80%E9%80%9A%E6%9D%83%E9%99%90",
              children: "申请开通权限"
            }), "方式向应用生态伙伴（分发平台、开发者、归因监测平台）开放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nonce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于计算签名的随机数，不带\"-\"，由应用归因服务生成，每次归因结果回传，nonce唯一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回传发生的时间戳，建议校验时判断与当前时间相差不超过5min，unix时间戳，毫秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["签名值。接收方应使用应用归因服务提供的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-receive#%E9%AA%8C%E7%AD%BE%E8%AE%A1%E7%AE%97%E8%A7%84%E5%88%99",
              children: "公钥"
            }), "，对该签名值进行验签，具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-receive#%E9%AA%8C%E7%AD%BE%E8%AE%A1%E7%AE%97%E8%A7%84%E5%88%99",
              children: "验签计算规则"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%9B%9E%E4%BC%A0%E7%BB%93%E6%9E%9C%E9%AA%8C%E7%AD%BE%E6%96%B9%E6%B3%95",
              children: "回传结果验签方法"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "adSourceTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回传获胜方来源登记营销事件发生时间。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-register#%E5%BC%80%E9%80%9A%E6%9D%83%E9%99%90",
              children: "申请开通权限"
            }), "方式向应用生态伙伴（分发平台、开发者、归因监测平台）开放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transaction_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次回传的事务id，唯一，接收方可用于请求的幂等处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST https://xxxxxxxx/attribution/report-attribution\nContent-Type: application/json\n{\n    \"ad_tech_id\":\"12345678\",\n    \"campaign_id\":\"50\",\n    \"source_id\":\"108****321\",\n    \"destination_id\":\"101****678\",\n    \"trigger_data\":12,\n    \"nonce\":\"17aa292c****4516****25150****195\",\n    \"timestamp\":167****380,\n    \"signature\":\"MEQCIEQlmZ****zKBSE8QnhLTIHZZZ****ZpRqRxHss65Ko****JgJKjdrWdkL****juEx2RmFS7da****ZRVZ8RyMyUXg==\",\n    \"transaction_id\":\"aa****aaaa\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：application/json; charset=UTF-8"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用归因侧解析application/json类型响应，“0”表示成功，其他值失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果描述。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nContent-Type: application/json; charset=UTF-8\n{\n  \"resultCode\": \"0\",\n  \"resultDesc\": \"Success.\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "回传结果验签方法",
      children: "回传结果验签方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您需要在pom.xml文件中引入最新版本的开源密码算法包", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.bouncycastle.org/download/bouncy-castle-java/",
            children: "Bouncy Castle"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<dependency>\n  <groupId>org.bouncycastle</groupId>\n  <artifactId>bcprov-jdk18on</artifactId>\n  <version>${last_version}</version>\n</dependency>\n<dependency>\n  <groupId>commons-codec</groupId>\n  <artifactId>commons-codec</artifactId>\n  <version>${last_version}</version>\n</dependency>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "您可以使用以下代码对回传请求中签名值进行验签。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import org.apache.commons.codec.binary.Base64;\nimport org.bouncycastle.jce.provider.BouncyCastleProvider;\nimport java.nio.charset.StandardCharsets;\nimport java.security.InvalidKeyException;\nimport java.security.KeyFactory;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.PublicKey;\nimport java.security.Security;\nimport java.security.Signature;\nimport java.security.SignatureException;\nimport java.security.spec.InvalidKeySpecException;\nimport java.security.spec.X509EncodedKeySpec;\n\n/**\n * 回传结果验签工具类\n *\n * @author ******\n * @since ****-**-**\n */\npublic class PostbackResultVerifyUtil {\n    private static String publicKey = \"MIIBoj*****AAE=\";\n    private static final String RSA_ALGORITHM = \"RSA\";\n    private static final String SHA256WithRSA_PSS_ALGORITHM = \"SHA256WithRSA/PSS\";\n\n    /**\n     * 回传结果验签调用方法\n     *\n     * @param content 签名内容拼接字段\n     * @param signature 回传请求中的签名值\n     * @return 验签结果\n     * @throws NoSuchAlgorithmException NoSuchAlgorithmException\n     * @throws InvalidKeySpecException InvalidKeySpecException\n     * @throws InvalidKeyException InvalidKeyException\n     * @throws SignatureException SignatureException\n     */\n    public boolean verify(String content,String signature)\n        throws NoSuchAlgorithmException, InvalidKeySpecException, InvalidKeyException, SignatureException {\n        byte[] plainContent = content.getBytes(StandardCharsets.UTF_8);\n        byte[] signContent = decodeBase64(signature);\n        Security.addProvider(new BouncyCastleProvider());\n        PublicKey pubKey = getPublicKey(publicKey);\n        Signature rsaSignature = Signature.getInstance(SHA256WithRSA_PSS_ALGORITHM);\n        rsaSignature.initVerify(pubKey);\n        rsaSignature.update(plainContent);\n        return rsaSignature.verify(signContent);\n    }\n\n    private PublicKey getPublicKey(String key) throws NoSuchAlgorithmException, InvalidKeySpecException {\n        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(decodeBase64(key));\n        KeyFactory keyFactory = KeyFactory.getInstance(RSA_ALGORITHM);\n        return keyFactory.generatePublic(keySpec);\n    }\n\n    private byte[] decodeBase64(String base64Str) {\n        return Base64.decodeBase64(base64Str.getBytes(StandardCharsets.UTF_8));\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(421406)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "回传结果验签调用方法verify(String content,String signature)中："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["content：签名内容拼接字段，拼接方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-attribution/store-attribution-receive#%E9%AA%8C%E7%AD%BE%E8%AE%A1%E7%AE%97%E8%A7%84%E5%88%99",
            children: "验签计算规则"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "signature：回传请求中的签名值。"
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
421406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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