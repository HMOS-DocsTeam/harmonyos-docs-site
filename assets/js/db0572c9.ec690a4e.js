"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["809372"], {
727955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_game_service_api_gameservice_rest_gameservice_teamplayerid_gameservice_teamplayerid_md_db0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-game-service-api-gameservice-rest-gameservice-teamplayerid-gameservice-teamplayerid-md-db0.json
var site_docs_ref_game_service_api_gameservice_rest_gameservice_teamplayerid_gameservice_teamplayerid_md_db0_namespaceObject = JSON.parse('{"id":"game-service-api/gameservice-rest/gameservice-teamplayerid/gameservice-teamplayerid","title":"批量转换teamPlayerId","description":"功能介绍","source":"@site/docs-ref/game-service-api/gameservice-rest/gameservice-teamplayerid/gameservice-teamplayerid.md","sourceDirName":"game-service-api/gameservice-rest/gameservice-teamplayerid","slug":"/game-service-api/gameservice-rest/gameservice-teamplayerid/gameservice-teamplayerid","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-rest/gameservice-teamplayerid/gameservice-teamplayerid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"批量转换teamPlayerId","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-teamplayerid","kit":"应用服务","last_updated":"2026-04-22","slug":"gameservice-teamplayerid"},"sidebar":"ref","previous":{"title":"转换ID","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid"},"next":{"title":"解绑账号","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-rest/gameservice-unbindplayer/gameservice-unbindplayer"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/game-service-api/gameservice-rest/gameservice-teamplayerid/gameservice-teamplayerid.md


const frontMatter = {
	title: '批量转换teamPlayerId',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-teamplayerid',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'gameservice-teamplayerid'
};
const contentTitle = '批量转换teamPlayerId';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "接口约束",
  "id": "接口约束",
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
  "value": "Header",
  "id": "header",
  "level": 3
}, {
  "value": "Body",
  "id": "body",
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
  "value": "响应示例",
  "id": "响应示例",
  "level": 2
}, {
  "value": "调用示例",
  "id": "调用示例",
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
        id: "批量转换teamplayerid",
        children: "批量转换teamPlayerId"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为开发者联盟上的游戏从一个账号转移到另一个账号进行维护，该游戏资产归属于转入方。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转出方/转入方可以调用此接口，向华为服务器批量提交转让前游戏关联的玩家标识teamPlayerId等信息，批量获取游戏转让后对应的teamPlayerId等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口约束",
      children: "接口约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用此接口前，请确保转出方/转入方已完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/game-center-transferring-0000001194325290",
          children: "游戏转移"
        }), "，否则均将无权转换teamPlayerId。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单次接口请求最多可以获取1000条teamPlayerId数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请勿频繁调用此接口，调用的时间间隔请控制在3秒以上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
          }), "：开发者服务器->华为游戏服务器"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["中国站点：<", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://connect-api.cloud.huawei.com/api/jas/open/players/player-accounts/team-player/convert&gt;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(623002)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043",
                children: "获取Token"
              }), "接口时使用的域名需与本接口域名保持一致，例如本接口使用“connect-api.cloud.huawei.com”，则调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043",
                children: "获取Token"
              }), "接口需使用“", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://connect-api.cloud.huawei.com/api/jas/open/players/player-accounts/team-player/convert”"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "请求：Content-Type: application/json"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "响应：Content-Type: application/json"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求参数",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "header",
      children: "Header"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "client_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于鉴权的客户端ID，获取方法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp",
              children: "创建API客户端"
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
            children: ["认证信息，格式为“Authorization: Bearer ${access_token}”。access_token为", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043",
              children: "获取Token"
            }), "中获取的access_token。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏APP ID，获取方法参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "body",
      children: "Body"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求Body中使用JSON格式携带更相关信息，参数如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcCpId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏转出方的开发者Developer ID，获取方法参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstCpId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏转入方的开发者Developer ID，获取方法参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "teamPlayerIds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List<String>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转让前，游戏的玩家标识teamPlayerId列表，列表数量至少1条，至多不超过1000条。  建议开发者做好去重工作，确保teamPlayerId列表不要有重复的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST  HTTP/1.1\nHost: connect-api.cloud.huawei.com\nContent-Type: application/json\nclient_id: 41******7168\nappId: \"*****\"\nAuthorization: Bearer ******\n{\n    \"srcCpId\": 4130****71055,\n    \"dstCpId\": 4008****74585,\n    \"teamPlayerIds\":[\n        \"**********\",\n        \"**********\",\n        \"**********\"\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应参数",
      children: "响应参数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JosRet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含返回码及描述信息的JSON字符串，格式为{\"code\":retcode, \"msg\": \"description\"}，retcode为返回码，description为返回码描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List<ConvertTeamPlayerIdItem>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单次接口请求任务的查询结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JosRet"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否必选"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "code"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单次接口请求任务的结果返回码：  0：请求成功。  -1：请求失败。  3002：鉴权错误。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "msg"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失败时的描述信息。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ConvertTeamPlayerIdItem"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否必选"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "srcCpId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "游戏转出方的开发者Developer ID。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "srcTeamPlayerId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "转让前，游戏的玩家标识teamPlayerId。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "dstCpId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "游戏转入方的开发者Developer ID。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "dstTeamPlayerId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "转让后，游戏的玩家标识teamPlayerId。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "errCode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "查询单个teamPlayerId的结果返回码：  0：成功。  -1：失败。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"ret\": {\n         \"code\": 0,\n         \"msg\": \"string\"\n    },\n    \"data\": [\n        {\n            \"srcCpId\": 4330****71055,\n            \"srcTeamPlayerId\": \"******\",\n            \"dstCpId\": 4130****71055,\n            \"dstTeamPlayerId\": \"*****\",\n            \"errCode\": 0\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Java\n/**\n * 批量转换teamPlayerId\n *\n * @param domain 请根据您的服务器部署地就近选择对应站点的URL，与获取token时使用的domain保持一致\n * @param client_id 用于鉴权的客户端ID\n * @param token post认证请求的token\n * @param teamPlayerIds 需要查询的teamPlayerId列表\n * @param appId 游戏appId\n */\nprivate static void batchGetOpenIds(String domain, String client_id, String token, List<String> teamPlayerIds, String appId) {\n        try {\n            // 接口URL，domain请根据您的服务器部署地就近选择对应站点的URL且与获取token时使用的domain保持一致\n            HttpPost post = new HttpPost(domain + \"/api/jas/open/players/player-accounts/team-player/convert\");\n            // 构造消息头\n            post.setHeader(\"Authorization\", \"Bearer \" + token);\n            post.setHeader(\"client_id\", client_id);\n            post.setHeader(\"appId\", appId);\n            // 构造消息实体\n            JSONObject keyString = new JSONObject();\n            keyString.put(\"srcCpId\", srcCpId);\n            keyString.put(\"dstCpId\", dstCpId);\n            keyString.put(\"teamPlayerId\", teamPlayerIds); // 原主体的teamPlayerId\n            StringEntity entity = new StringEntity(keyString.toString(), Charset.forName(\"UTF-8\"));\n            entity.setContentEncoding(\"UTF-8\");\n            // 发送Json格式的数据请求\n            entity.setContentType(\"application/json\");\n            post.setEntity(entity);\n            CloseableHttpClient httpClient = HttpClients.createDefault();\n            HttpResponse response = httpClient.execute(post);\n            int statusCode = response.getStatusLine().getStatusCode();\n            if (statusCode == HttpStatus.SC_OK) {\n                BufferedReader br =\n                    new BufferedReader(new InputStreamReader(response.getEntity().getContent(), Consts.UTF_8));\n                String result = br.readLine();\n                System.out.println(result);\n                JSONObject object = JSON.parseObject(result);\n            }\n            post.releaseConnection();\n            httpClient.close();\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C#\n/**\n * 批量转换teamPlayerId\n *\n * @param domain 请根据您的服务器部署地就近选择对应站点的URL，与获取token时使用的domain保持一致\n * @param clientId 用于鉴权的客户端ID\n * @param token post认证请求的token\n * @param teamPlayerIds 转让前游戏的玩家标识teamPlayerId列表\n * @param appId 游戏appId\n * @Param srcCpId 游戏转出方的开发者Developer ID\n * @Param dstCpId 游戏转入方的开发者Developer ID\n */\nstatic void convertTeamPlayerId(string domain, string clientId, string token, List<string> teamPlayerIds, string appId, long srcCpId, long dstCpId)\n{\n    try\n    {\n        // 接口URL，domain请根据您的服务器部署地就近选择对应站点的URL且与获取token时使用的domain保持一致\n        var requestUrl = domain + \"/api/jas/open/players/player-accounts/team-player/convert\";\n        HttpWebRequest request = WebRequest.Create(requestUrl) as HttpWebRequest;\n        request.Method = \"post\";\n        request.ContentType = \"application/json\";\n        request.Headers.Add(\"client_id\", clientId);\n        request.Headers.Add(\"Authorization\", \"Bearer \" + token);\n        request.Headers.Add(\"appId\", appId);\n        Dictionary<string, object> dic = new Dictionary<string, object>\n        {\n            {\"srcCpId\", srcCpId},\n            {\"dstCpId\", dstCpId},\n            {\"teamPlayerIds\", teamPlayerIds}\n        };\n        string sendData = JsonConvert.SerializeObject(dic, Formatting.Indented);\n        Console.WriteLine(sendData);\n        byte[] byteData = Encoding.GetEncoding(\"utf-8\").GetBytes(sendData);\n        request.ContentLength = byteData.Length;\n        Stream postStream = request.GetRequestStream();\n        postStream.Write(byteData, 0, byteData.Length);\n        postStream.Close();\n        WebResponse response = request.GetResponse();\n        StreamReader reader = new StreamReader(response.GetResponseStream(), Encoding.UTF8);\n        string strJson = reader.ReadToEnd();\n        Console.WriteLine(strJson);\n        reader.Close();\n        response.Close();\n    }\n    catch (Exception e)\n    {\n        Console.WriteLine(e.ToString());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PHP\n/**\n * 批量转换teamPlayerId\n *\n * @param string $domain 请根据您的服务器部署地就近选择对应站点的URL，与获取token时使用的domain保持一致\n * @param string $client_id 用于鉴权的客户端ID\n * @param string $token post认证请求的token\n * @param array $teamPlayerIds 转让前游戏的玩家标识teamPlayerId列表\n * @param string $appId 游戏appid\n * @Param long $srcCpId 游戏转出方的开发者Developer ID\n * @Param long $dstCpId 游戏转入方的开发者Developer ID\n * @throws Exception\n */\npublic function batch_convert_teamPlayerIds(string $domain, string $client_id, string $token, array $teamPlayerIds, string $appId, long $srcCpId, long $dstCpId)\n{\n    $curl = curl_init();\n    $data = array(\"teamPlayerIds\" => $teamPlayerIds, \"srcCpId\" => $srcCpId, \"dstCpId\" => $dstCpId);\n    curl_setopt_array($curl, array(\n        CURLOPT_URL => $domain . '/api/jas/open/players/player-accounts/team-player/convert',\n        CURLOPT_RETURNTRANSFER => true,\n        CURLOPT_ENCODING => '',\n        CURLOPT_MAXREDIRS => 10,\n        CURLOPT_TIMEOUT => 0,\n        CURLOPT_FOLLOWLOCATION => true,\n        CURLOPT_SSL_VERIFYHOST => false,\n        CURLOPT_SSL_VERIFYPEER => false,\n        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n        CURLOPT_CUSTOMREQUEST => 'POST',\n        CURLOPT_POSTFIELDS => json_encode($data),\n        CURLOPT_HTTPHEADER => array(\n            'client_id: ' . $client_id,\n            'Authorization: Bearer ' . $token,\n            'Content-Type: application/json',\n            'appId: ' . $appId\n        ),\n    ));\n    $response = curl_exec($curl);\n    if (curl_error($curl)) {\n        throw new Exception(curl_error($curl));\n    }\n    curl_close($curl);\n    $result = json_decode($response, true);\n    var_dump($result);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Python\nfrom getToken import *\nclass BatchConvertTeamPlayerIdsSolution:\n    @staticmethod\n    def batch_convert_team_player_ids(domain, client_id, access_token, team_player_id, app_id, src_cp_id, dst_cp_id):\n        url = domain + '/api/jas/open/players/player-accounts/team-player/convert'\n        data = {\"teamPlayerIds\": team_player_id, \"srcCpId\": src_cp_id， \"dstCpId\": dst_cp_id}\n        payload = json.dumps(data)\n        headers = {\n            'client_id': client_id,\n            'Authorization': 'Bearer ' + access_token,\n            'Content-Type': 'application/json',\n            'appId': app_id\n        }\n        response = requests.request(\"POST\", url, headers=headers, data=payload)\n        print(response.text)\nif __name__ == \"__main__\":\n    # 请根据您的服务器部署地就近选择对应站点的URL，这里以中国站点域名为例\n    input_domain = 'https://connect-api.cloud.huawei.com'\n    # 客户端ID\n    input_client_id = 'xxxxxxx'\n    # 客户端密钥\n    input_client_secret = 'xxxxxxxx'\n    # 获取token\n    token_function = GetToken()\n    input_access_token = token_function.get_token(input_domain, input_client_id, input_client_secret)\n    # 游戏appId\n    input_app_id = 'xxxxx'\n    # 需要转换的teamPlayerIds列表，单次最大不要超过1000个，这里以2个为例\n    input_player_Ids = ['xxxxxxx', 'xxxxxx']\n    # 游戏转出方的开发者Developer ID\n    input_src_cp_id = 111111\n    # 游戏转入方的开发者Developer ID\n    input_dst_cp_id = 222222\n    batch_function = BatchGetOpenIdsSolution()\n    batch_function.batch_convert_team_player_ids(input_domain, input_client_id, input_access_token, input_player_Ids, input_app_id, input_src_cp_id, input_dst_cp_id)\n"
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
623002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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