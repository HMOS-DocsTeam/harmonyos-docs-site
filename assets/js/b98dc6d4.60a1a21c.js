"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["432540"], {
604912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_response_push_scenariozed_api_response_md_b98_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-push-api-push-rest-api-push-rest-api-scenes-push-scenariozed-api-response-push-scenariozed-api-response-md-b98.json
var site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_response_push_scenariozed_api_response_md_b98_namespaceObject = JSON.parse('{"id":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response","title":"响应参数","description":"Response Body","source":"@site/docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response.md","sourceDirName":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response","slug":"/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"响应参数","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-response","kit":"应用服务","last_updated":"2026-04-22","slug":"push-scenariozed-api-response"},"sidebar":"ref","previous":{"title":"请求体参数说明","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param"},"next":{"title":"请求示例","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response.md


const frontMatter = {
	title: '响应参数',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-response',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'push-scenariozed-api-response'
};
const contentTitle = '响应参数';

const assets = {

};



const toc = [{
  "value": "Response Body",
  "id": "response-body",
  "level": 2
}, {
  "value": "响应示例",
  "id": "响应示例",
  "level": 2
}, {
  "value": "HTTP响应码",
  "id": "http响应码",
  "level": 2
}, {
  "value": "业务响应码",
  "id": "业务响应码",
  "level": 2
}, {
  "value": "80000000 成功",
  "id": "80000000-成功",
  "level": 3
}, {
  "value": "80100000 部分Token发送成功",
  "id": "80100000-部分token发送成功",
  "level": 3
}, {
  "value": "80100001 请求参数部分错误",
  "id": "80100001-请求参数部分错误",
  "level": 3
}, {
  "value": "80100003 消息结构体错误",
  "id": "80100003-消息结构体错误",
  "level": 3
}, {
  "value": "80100004 消息设置的过期时间小于当前时间导致",
  "id": "80100004-消息设置的过期时间小于当前时间导致",
  "level": 3
}, {
  "value": "80100022 消息携带图片未验签",
  "id": "80100022-消息携带图片未验签",
  "level": 3
}, {
  "value": "80200001 认证错误",
  "id": "80200001-认证错误",
  "level": 3
}, {
  "value": "80200005 JWT Token过期",
  "id": "80200005-jwt-token过期",
  "level": 3
}, {
  "value": "80300002 当前应用无权限下发推送消息",
  "id": "80300002-当前应用无权限下发推送消息",
  "level": 3
}, {
  "value": "80300007 所有Token都是无效的",
  "id": "80300007-所有token都是无效的",
  "level": 3
}, {
  "value": "80300008 消息体大小超过4096Bytes（不包括Push Token）",
  "id": "80300008-消息体大小超过4096bytes不包括push-token",
  "level": 3
}, {
  "value": "80300010 消息体中的Token数量超过系统设置的默认值",
  "id": "80300010-消息体中的token数量超过系统设置的默认值",
  "level": 3
}, {
  "value": "80300029 测试消息请求流量限制",
  "id": "80300029-测试消息请求流量限制",
  "level": 3
}, {
  "value": "80300030 测试消息单次携带Token数量超过系统设置的默认值",
  "id": "80300030-测试消息单次携带token数量超过系统设置的默认值",
  "level": 3
}, {
  "value": "80300036 JWT有效期超过1天",
  "id": "80300036-jwt有效期超过1天",
  "level": 3
}, {
  "value": "80300037 由于存在违规处罚导致无法发送推送消息",
  "id": "80300037-由于存在违规处罚导致无法发送推送消息",
  "level": 3
}, {
  "value": "81000001 系统内部错误",
  "id": "81000001-系统内部错误",
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
        id: "响应参数",
        children: "响应参数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "response-body",
      children: "Response Body"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "msg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应码描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求标识。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "响应成功示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"code\": \"80000000\",\n    \"msg\": \"Success\",\n    \"requestId\": \"157*******006\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "响应失败示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"code\": \"80100003\",\n    \"msg\": \"Illegal payload, badge addNum value ranges from 1 to 99\",\n    \"requestId\": \"1690*******1701\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http响应码",
      children: "HTTP响应码"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查业务响应码并根据业务响应码进一步排查问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鉴权失败。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查HTTP头中Authorization参数。"
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
            children: ["建议稍后重试，或通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "503"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流量控制。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "· 平均分配发送速度。  · 平均分布推送时间段，不要集中发送。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务响应码",
      children: "业务响应码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(168043)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过业务响应码定位问题之前，请优先检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct",
        children: "消息推送接口"
      }), "URL（", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://push-api.cloud.huawei.com/****v3****/****[projectId]****/messages:send）是否正确"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请使用的v3版本的推送接口URL，不用使用v1或v2版本的推送接口URL，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-faq/push-faq-8",
          children: "场景化消息中的请求URL版本问题"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请检查推送接口地址中的projectId，确保与您当前应用所属的项目保持一致，若不一致请更新推送接口URL中的projectId，并重新", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-jwt-token",
          children: "生成鉴权令牌"
        }), "，应用重新", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-preparations/push-get-token",
          children: "获取Push Token"
        }), "，再进行消息推送。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80000000-成功",
      children: "80000000 成功"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Success."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不涉及。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80100000-部分token发送成功",
      children: "80100000 部分Token发送成功"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check Parameter Partial Success."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分Token发送成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noPushTypeRight：未申请请求头中push-type对应场景的权益。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noRight：生成Push Token的应用不属于请求url中projectId对应的项目。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "atomicUnableSendUnsubscribedMsg：元服务不支持本次请求中对应的消息场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tokenFormatError：Token格式错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "countryNotSupport：国家不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tokenPlatformNotSupport：不支持三方代理Token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "disableSendHuaweiMsgBecauseOfPenalty：应用被违规处罚。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["differentImgVerifyPolicy：图片风控使用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-image-control/push-image-control#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0",
          children: "push-type"
        }), "与推送时的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
          children: "push-type"
        }), "不一致。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "appinfoError：应用未创建。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noRightToSendThisLiveNotificationEvent：没有申请对应实况窗场景的权益。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，排查失败的Token是否存在以下情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["noPushTypeRight：请开通请求头中push-type对应场景的权益，语音播报消息（push-type为2）权益申请可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E8%AF%AD%E9%9F%B3%E6%92%AD%E6%8A%A5%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
            children: "申请推送语音播报消息权益"
          }), "，应用内通话消息（push-type为10）权益申请可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E5%BA%94%E7%94%A8%E5%86%85%E9%80%9A%E8%AF%9D%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
            children: "申请推送应用内通话消息权益"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["noRight：请检查生成Push Token的应用是否属于请求url中projectId对应的项目，即确保请求URL（", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://push-api.cloud.huawei.com/v3/****[projectId]****/messages:send"
          }), "）中的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "projectId"
            })
          }), "与", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站中该应用所属的“项目ID”一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(973255)/* ["default"] */.A) + "",
            width: "667",
            height: "317"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["atomicUnableSendUnsubscribedMsg：元服务", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "仅支持"
            })
          }), "发送授权订阅消息、卡片刷新消息，请排查消息体内容。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["tokenFormatError：请检查Push Token格式是否错误，并重新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "申请Push Token"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["countryNotSupport：请通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线提单"
          }), "提交问题。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["tokenPlatformNotSupport：请重新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "申请Push Token"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["disableSendHuaweiMsgBecauseOfPenalty：请在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站上检查并处理违规后再尝试发送消息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["differentImgVerifyPolicy：请确保图片风控使用的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-image-control/push-image-control#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0",
            children: "push-type"
          }), "与推送时的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
            children: "push-type"
          }), "一致。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["appinfoError：请在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站上检查应用是否创建，如果应用已成功创建，请稍后重试。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["noRightToSendThisLiveNotificationEvent： 请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/live-view-kit-guide/liveview-preparations/liveview-formal-authority",
            children: "开通实况窗权益"
          }), "完成权益的申请。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"code\": \"80100000\",\n    \"msg\": \"{\\\"illegalTokens\\\":{\\\"tokenFormatError\\\":[\\\"MAAALgE4G98BAAAAst*******jg\\\"]},\\\"success\\\":1,\\\"failure\\\":1}\",\n    \"requestId\": \"1690*******1701\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80100001-请求参数部分错误",
      children: "80100001 请求参数部分错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check Parameter Error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求参数部分错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求参数部分错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请根据响应消息中的提示，检查并修改请求", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param",
        children: "参数内容"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80100003-消息结构体错误",
      children: "80100003 消息结构体错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Illegal payload, {errorTips}."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息结构体错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息结构体错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请根据响应消息中的提示，检查并修改", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct",
        children: "请求体结构"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80100004-消息设置的过期时间小于当前时间导致",
      children: "80100004 消息设置的过期时间小于当前时间导致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Illegal expire time."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息设置的过期时间小于当前时间导致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息设置的过期时间小于当前时间导致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请根据响应消息中的提示，检查并修改消息字段", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
        children: "ttl"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80100022-消息携带图片未验签",
      children: "80100022 消息携带图片未验签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anti-Spam: image not verify."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息携带图片未验签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息图片未经过风控验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请根据响应消息中的提示，检查消息图片是否正常经过风控验证，对下发的图片进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-image-control/push-image-control",
        children: "风控校验"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80200001-认证错误",
      children: "80200001 认证错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Authentication Error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "发送消息时未添加Authorization参数或Authorization的值为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于申请JWT Token的Project Id和推送消息的Project Id不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization参数中的JWT Token与实际应用不匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未使用v3版本接口发送REST API请求。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HarmonyOS 5及以上系统版本推送不再支持Oauth2.0开放鉴权，请使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-jwt-token",
          children: "JWT（JSON Web Tokens）"
        }), "鉴权。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，排查请求头中Authorization参数鉴权失败是否存在以下情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请检查发送消息时是否添加Authorization参数或Authorization的值为空。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-jwt-token#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
          children: "鉴权令牌生成步骤"
        }), "中的步骤二，检查推送请求URL（", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://push-api.cloud.huawei.com/****v3****/[projectId]/messages:send）中的projectId，确保与您当前应用所属的项目保持一致"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请检查Authorization参数中的JWT Token与实际应用是否匹配，详情参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-jwt-token",
          children: "基于服务账号生成鉴权令牌"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请使用v3版本的请求URL（", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://push-api.cloud.huawei.com/****v3****/[projectId]/messages:send"
        }), "）发送REST API请求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-jwt-token",
          children: "JWT（JSON Web Tokens）"
        }), "方式生成令牌后再推送消息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80200005-jwt-token过期",
      children: "80200005 JWT Token过期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jwt token expired."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT Token过期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT Token过期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请根据响应消息中的提示，重新生成JWT Token后再推送消息，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-jwt-token",
        children: "基于服务账号生成鉴权令牌"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300002-当前应用无权限下发推送消息",
      children: "80300002 当前应用无权限下发推送消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No permission to send message to these tmIDs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前应用无权限下发推送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推送服务未开通。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推送服务已开通，但推送请求URL中的projectId与当前应用所属的项目不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请登录", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "网站，查看推送服务是否已开通，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-preparations/push-config-setting",
          children: "开通推送服务"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-jwt-token#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
          children: "鉴权令牌生成步骤"
        }), "中的步骤二，检查推送请求URL（", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://push-api.cloud.huawei.com/****v3****/[projectId]/messages:send）中的projectId，确保与您当前应用所属的项目保持一致"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请确保当前应用所属的项目已开通了推送服务，并基于该项目重新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-jwt-token",
        children: "生成鉴权令牌"
      }), "，并重新尝试推送消息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300007-所有token都是无效的",
      children: "80300007 所有Token都是无效的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All the tokens are invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有Token都是无效的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noPushTypeRight：未申请请求头中push-type对应场景的权益。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noRight：生成Push Token的应用不属于请求url中projectId对应的项目。或终端设备从HarmonyOS 4及以下版本（简称HarmonyOS）升级到HarmonyOS 5及以上版本（简称HarmonyOS NEXT）后，Push Token未重新获取或请求URL版本未更新至V3版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "atomicUnableSendUnsubscribedMsg：元服务不支持本次请求中对应的消息场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tokenFormatError：Token格式错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "countryNotSupport：国家不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tokenPlatformNotSupport：不支持三方代理Token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "disableSendHuaweiMsgBecauseOfPenalty：应用被违规处罚。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["differentImgVerifyPolicy：图片风控使用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-image-control/push-image-control#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0",
          children: "push-type"
        }), "与推送时的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
          children: "push-type"
        }), "不一致。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "appinfoError：应用未创建。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "notSupportPlayVoice：推送自分类类型为PLAY_VOICE（语音播报）的语音播报消息时，请求头中push-type传入错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noRightToSendThisLiveNotificationEvent：没有申请对应实况窗场景的权益。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，排查失败的Token是否存在以下情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["noPushTypeRight：请开通请求头中对应push-type场景的权益，语音播报消息（push-type为2）权益申请可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E8%AF%AD%E9%9F%B3%E6%92%AD%E6%8A%A5%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
            children: "申请推送语音播报消息权益"
          }), "，应用内通话消息（push-type为10）权益申请可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E5%BA%94%E7%94%A8%E5%86%85%E9%80%9A%E8%AF%9D%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
            children: "申请推送应用内通话消息权益"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["noRight：请检查生成Push Token的应用是否属于请求url中projectId对应的项目，即确保请求URL（", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://push-api.cloud.huawei.com/v3/****[projectId]****/messages:send"
          }), "）中的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "projectId"
            })
          }), "与", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站中该应用所属的“项目ID”一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(325001)/* ["default"] */.A) + "",
            width: "1448",
            height: "690"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若终端设备升级至HarmonyOS NEXT版本后，需重新生成对应的Push Token（建议您在应用启动时调用getToken()接口，若设备的Push Token发生变化，及时上报到您的应用服务器更新Push Token）。并使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param",
            children: "请求体参数说明"
          }), "、V3版本的请求URL（", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://push-api.cloud.huawei.com****/v3****/[projectId]/messages:send"
          }), "）发送REST API请求。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["atomicUnableSendUnsubscribedMsg：元服务", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "仅支持"
            })
          }), "发送授权订阅消息、卡片刷新消息，请排查消息体内容。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["tokenFormatError：请检查Push Token格式是否错误，并重新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "申请Push Token"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["countryNotSupport：请通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线提单"
          }), "提交问题。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["tokenPlatformNotSupport：请重新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "申请Push Token"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["disableSendHuaweiMsgBecauseOfPenalty：请在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站上检查并处理违规后再尝试发送消息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["differentImgVerifyPolicy：请确保图片风控使用的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-image-control/push-image-control#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0",
            children: "push-type"
          }), "与推送时的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
            children: "push-type"
          }), "一致。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["appinfoError：请在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站上检查应用是否创建，如果应用已成功创建，请稍后重试。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["notSupportPlayVoice：若应用需要推送自分类类型为PLAY_VOICE（语音播报）的消息时，需使用语音播报消息进行推送，即请求头中push-type传入2，表示", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "语音播报消息"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["noRightToSendThisLiveNotificationEvent： 请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/live-view-kit-guide/liveview-preparations/liveview-formal-authority",
            children: "开通实况窗权益"
          }), "完成权益的申请。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"code\": \"80300007\",\n    \"msg\": \"{\\\"failure\\\":2,\\\"illegalTokens\\\":{\\\"noRight\\\":[\\\"MAAALgE4G98BAAAAst*******jg\\\",\\\"MAAALgE4G98BAAAAst*******re\\\"]}}\",\n    \"requestId\": \"1690*******1701\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300008-消息体大小超过4096bytes不包括push-token",
      children: "80300008 消息体大小超过4096Bytes（不包括Push Token）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push message size is too long."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息体大小超过4096Bytes（不包括Push Token）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求消息体大小超过4096Bytes（不包括Push Token）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，减小消息体后重新发送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300010-消息体中的token数量超过系统设置的默认值",
      children: "80300010 消息体中的Token数量超过系统设置的默认值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "token count should within {0} and {1}."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息体中的Token数量超过系统设置的默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片刷新消息单次发送消息仅能携带1个Token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "其余场景单次发送消息最多携带1000个Token。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，请减少Token数量后分批发送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300029-测试消息请求流量限制",
      children: "80300029 测试消息请求流量限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When send test message, the api request exceed limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试消息请求流量限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试消息发送过于频繁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，稍后再发送。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300030-测试消息单次携带token数量超过系统设置的默认值",
      children: "80300030 测试消息单次携带Token数量超过系统设置的默认值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When send test message, token count exceed limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试消息单次携带Token数量超过系统设置的默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片刷新消息单次发送测试消息仅能携带1个Token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "其余场景单次发送测试消息最多携带10个Token。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，减少Token数量后再发送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300036-jwt有效期超过1天",
      children: "80300036 JWT有效期超过1天"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT expire period over threshold."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT有效期超过1天。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT有效期超过1天。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请根据响应消息中的提示，重新生成有效期小于1天的JWT Token后再推送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "80300037-由于存在违规处罚导致无法发送推送消息",
      children: "80300037 由于存在违规处罚导致无法发送推送消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Disable send huawei msg because of penalty."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于存在违规处罚导致无法发送推送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于存在违规处罚导致无法发送推送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请根据响应消息中的提示，先在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "网站上处理违规后再尝试发送消息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81000001-系统内部错误",
      children: "81000001 系统内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inner Error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他未知错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
        children: "在线提单"
      }), "提交问题。"]
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
973255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960908-b763632eef8b0584014039ad4fb2f627.png");

},
325001(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480909-1046e020a7e5e34c40b5e0ad60c7d2ac.png");

},
168043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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