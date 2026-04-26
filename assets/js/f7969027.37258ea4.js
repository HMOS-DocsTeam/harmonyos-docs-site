"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["221054"], {
170165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_scenes_push_update_liveview_push_update_liveview_md_f79_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-scenes-push-update-liveview-push-update-liveview-md-f79.json
var site_docs_push_kit_guide_push_scenes_push_update_liveview_push_update_liveview_md_f79_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-scenes/push-update-liveview/push-update-liveview","title":"推送实况窗消息","description":"场景介绍","source":"@site/docs/push-kit-guide/push-scenes/push-update-liveview/push-update-liveview.md","sourceDirName":"push-kit-guide/push-scenes/push-update-liveview","slug":"/push-kit-guide/push-scenes/push-update-liveview/","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-update-liveview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"推送实况窗消息","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-update-liveview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推送后台消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-background/"},"next":{"title":"推送应用内通话消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-voip/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-scenes/push-update-liveview/push-update-liveview.md


const frontMatter = {
	title: '推送实况窗消息',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-update-liveview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '推送实况窗消息';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开通权益",
  "id": "开通权益",
  "level": 2
}, {
  "value": "频控规则",
  "id": "频控规则",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "推送实况窗消息",
        children: "推送实况窗消息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实况窗是一种帮助用户聚焦正在进行的任务，方便快速查看和即时处理的通知形态。有关实况窗简介、权限申请、开放场景、设计规范等说明，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/live-view-kit-guide/liveview-introduction",
        children: "Live View Kit简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Push Kit发送的实况窗消息支持三种操作类型，分别是："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "实况窗消息操作类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持操作的场景类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "创建实况窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLIGHT、TAXI、TRAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅航班、出行打车、高铁/火车场景支持通过Push Kit创建实况窗，其他场景请通过Live View Kit本地创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更新实况窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有场景皆支持通过Push Kit更新实况窗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束实况窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有场景皆支持通过Push Kit结束实况窗。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(306736)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送实况窗消息仅支持Phone、Tablet设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["有关场景类型的详细说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/live-view-kit-guide/liveview-introduction#%E6%94%AF%E6%8C%81%E7%9A%84%E8%8C%83%E5%9B%B4%E4%B8%8E%E5%9C%BA%E6%99%AF",
        children: "支持的范围与场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据创建实况窗的方式不同，通过Push Kit发送实况窗消息的流程有所区别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过Live View Kit创建实况窗，Push Kit更新与结束实况窗"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(196882)/* ["default"] */.A) + "",
        width: "832",
        height: "572"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Push Kit，获取Push Token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Live View Kit创建实况窗成功后，开发者需要将实况窗id、pushToken、实况窗场景event以及业务服务的相关的状态属性保存到业务服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当业务服务的用户订单状态发生变化时，通过Push Kit通道推送更新消息，更新/结束实况窗。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过Push Kit创建、更新、结束实况窗"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(451584)/* ["default"] */.A) + "",
        width: "803",
        height: "600"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Push Kit，获取Push Token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将Push Token保存到业务的服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过Push Kit推送创建/更新/结束实况窗消息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实况窗更新效果示例图："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(999625)/* ["default"] */.A) + "",
        width: "1139",
        height: "280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390410)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个实况窗的生命周期最长不超过8小时，超过8小时后，系统会认为通知结束。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为了确保用户看到内容的时效性，请您确保对实况窗内容进行及时更新。系统将在实况窗超过2小时未更新时，隐藏实况窗在状态栏胶囊和锁屏的展示，保留通知中心展示；超过4小时未更新，系统会认为实况窗结束，并从各个展示入口清除该实况窗。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开通权益",
      children: "开通权益"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推送实况窗消息前您需要开通对应的场景权益，可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/live-view-kit-guide/liveview-preparations/liveview-formal-authority",
        children: "开通实况窗权益"
      }), "完成权益的申请。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(409074)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必须要开通实况窗权益才可以通过Push Kit推送实况窗消息，无法通过添加白名单设备的方式进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "频控规则",
      children: "频控规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "调测阶段"
        })
      }), "，每个项目每日全网最多可推送1000条测试消息。发送测试消息需设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
        children: "testMessage"
      }), "为true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正式发布阶段"
        })
      }), "，单设备单应用下每日推送消息总条数受", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control#%E8%AE%BE%E5%A4%87%E6%B6%88%E6%81%AF%E9%A2%91%E6%8E%A7",
        children: "设备消息频控"
      }), "限制，系统会根据现网使用场景和流量进行管控，不合理的使用场景系统会进行频控。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单个实况窗消息，出行打车与赛事比分场景每个设备每5分钟最多更新30次，每小时最多更新180次。其余场景每个设备每5分钟最多更新10次，每小时最多更新60次。超过频次部分将丢弃不下发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见指导", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "获取Push Token"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据应用情况选择创建实况窗的方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过Live View Kit创建本地实况窗，详细内容请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/live-view-kit-guide/liveview-scenes/liveview-create-locally",
                children: "构建本地实况窗"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过Push Kit远程创建实况窗，需满足", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E7%BA%A6%E6%9D%9F",
                children: "创建实况窗约束"
              }), "。以出行打车场景为例，消息示例如下："]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/[projectId]/messages:send\"\n \n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type: 7\n\n// Request Body\n{\n  \"payload\": {\n    \"activityId\": 1,\n    \"operation\": 0,\n    \"event\": \"TAXI\",\n    \"status\": \"DRIVER_ON_THE_WAY\", // 司机正在赶来\n    \"activityData\": {\n      \"notificationData\": {\n        \"type\": 3,\n        \"contentTitle\": \"{{status}}\", // 司机正在赶来\n        \"contentText\": [\n          {\n            \"text\": \"距您\"\n          },\n          {\n            \"text\": \"1.2公里\",\n            \"foregroundColor\": \"#FF317AF7\"\n          },\n          {\n            \"text\": \" | \"\n          },\n          {\n            \"text\": \"5分钟\",\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 1, // 打开应用自定义页面\n          \"action\": \"xxxxxx\" // 应用内置页面ability对应的action\n        },\n        \"richProgress\": {\n          \"type\": 0,\n          \"nodeIcons\": [\"icon1.png\", \"icon2.png\", \"icon3.png\"], // 取值为“/resources/rawfile”路径下的文件名\n          \"indicatorIcon\": \"taxi.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"progress\": 40,\n          \"indicatorType\": 1,\n          \"color\": \"#FF317AF7\",\n          \"bgColor\": \"#19000000\"\n        },\n        \"extend\": {\n          \"type\": 3,\n          \"pic\": \"phone.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"clickAction\": {\n            \"actionType\": 0 // 点击辅助区打开应用首页\n          }\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"remind\": \"EXPAND\",\n        \"title\": \"接驾中\",\n        \"content\": \"预计5分钟\"\n      }\n    }\n  },\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["[projectId]：项目ID，登录", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
                  children: "AppGallery Connect"
                }), "网站，选择“开发与服务”，在项目列表中选择对应的项目，左侧导航栏选择“项目设置”，在该页面获取。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Authorization：JWT格式字符串，可参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
                  children: "Authorization"
                }), "获取。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "push-type：7表示实况窗消息场景。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["activityId：实况活动ID。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "activityId"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["operation：实况窗通知操作类型，0表示创建实况窗。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "operation"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["event：实况窗消息具体场景类型，需要与应用实际申请通过的场景一致。例如：TAXI（出行打车）、FLIGHT（航班）等。通过Push Kit创建实况窗仅支持TAXI、FLIGHT、TRAIN三种场景。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E7%BA%A6%E6%9D%9F",
                  children: "创建实况窗约束"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["status：表示实况窗消息状态。operation为0时必填，取值范围根据场景类型而定，详情见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#status%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4",
                  children: "Status取值范围"
                }), "，并且需要在", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#%E6%94%AF%E6%8C%81%E6%90%BA%E5%B8%A6%E5%8D%A0%E4%BD%8D%E7%AC%A6%E7%9A%84%E5%AD%97%E6%AE%B5",
                  children: "支持携带占位符的字段"
                }), "填入至少一次status的占位符{{status}}，Push Kit将替换占位符{{status}}为", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#status%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4",
                  children: "Status取值范围"
                }), "中对应的值。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["activityData：填写您项目中的实况窗数据。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#activitydata",
                  children: "activityData"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["type：实况窗布局类型，有进度可视化类、强调文本类等。创建实况窗时每种event仅可使用特定的布局类型，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E7%BA%A6%E6%9D%9F",
                  children: "创建实况窗约束"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["token：Push Token，可参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/push-kit-guide/push-preparations/push-get-token",
                  children: "获取Push Token"
                }), "获取。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当用户的服务订单状态发生变化时，开发者可以调用Push Kit服务端开放的REST API服务接口，更新或者结束实况窗。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["消息详情可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro",
            children: "场景化消息API接口功能介绍"
          }), "。（若开发者更新的实况窗为通过Push Kit远程创建的实况窗，更新时请遵守", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E7%BA%A6%E6%9D%9F",
            children: "创建实况窗约束"
          }), "）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/[projectId]/messages:send\"\n \n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type: 7\n \n// Request Body\n{\n  \"payload\": {\n    \"activityId\": 1,\n    \"operation\": 1,\n    \"event\": \"TAXI\",\n    \"status\": \"HEADING_TO_DESTINATION\", // 正在去往目的地\n    \"version\": 1,\n    \"activityData\": {\n      \"notificationData\": {\n        \"type\": 3,\n        \"contentTitle\": \"{{status}}\", // 正在去往目的地\n        \"contentText\": [\n          {\n            \"text\": \"距目的地\"\n          },\n          {\n            \"text\": \"7.2公里\",\n            \"foregroundColor\": \"#FF317AF7\"\n          },\n          {\n            \"text\": \" | 预计\"\n          },\n          {\n            \"text\": \"27分钟\",\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 1, // 打开应用自定义页面\n          \"action\": \"xxxxxx\" // 应用内置页面ability对应的action\n        },\n        \"richProgress\": {\n          \"type\": 0,\n          \"nodeIcons\": [\"icon1.png\", \"icon2.png\", \"icon3.png\"], // 取值为“/resources/rawfile”路径下的文件名\n          \"indicatorIcon\": \"taxi.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"progress\": 70,\n          \"indicatorType\": 1,\n          \"color\": \"#FF317AF7\",\n          \"bgColor\": \"#19000000\"\n        },\n        \"extend\": {\n          \"type\": 0\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"title\": \"27分钟\",\n        \"content\": \"距目的地7.2公里\"\n      }\n    }\n  },\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"target\": {\n    \"token\": [\n      \"MAMzLg**********lPW\"\n    ]\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["[projectId]：项目ID，登录", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
                children: "AppGallery Connect"
              }), "网站，选择“开发与服务”，在项目列表中选择对应的项目，左侧导航栏选择“项目设置”，在该页面获取。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Authorization：JWT格式字符串，可参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
                children: "Authorization"
              }), "获取。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "push-type：7表示实况窗消息场景。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["activityId：实况活动ID。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                children: "activityId"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["operation：实况窗通知操作类型，0表示创建实况窗，1表示更新实况窗，2表示结束实况窗。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                children: "operation"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["event：实况窗通知具体场景类型，需要与应用实际申请通过的场景一致。例如：TAXI（出行打车）、FLIGHT（航班）等。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                children: "event"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["status：表示实况窗消息状态。operation为1且更新的实况窗为通过Push Kit远程创建的实况窗时必填，取值范围根据场景类型而定，详情见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#status%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4",
                children: "Status取值范围"
              }), "，并且需要在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#%E6%94%AF%E6%8C%81%E6%90%BA%E5%B8%A6%E5%8D%A0%E4%BD%8D%E7%AC%A6%E7%9A%84%E5%AD%97%E6%AE%B5",
                children: "支持携带占位符的字段"
              }), "填入至少一次status的占位符{{status}}，Push Kit将替换占位符{{status}}为", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#status%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4",
                children: "Status取值范围"
              }), "中对应的值。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["version：更新实况窗通知的版本号。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                children: "version"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["activityData：填写您项目中的实况窗数据。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#activitydata",
                children: "activityData"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["type：实况窗布局类型，有进度可视化类、强调文本类等。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#notificationdata",
                children: "type"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["token：Push Token，可参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/push-kit-guide/push-preparations/push-get-token",
                children: "获取Push Token"
              }), "获取。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(951547)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若发送的activityId对应的实况窗不存在（更新或结束实况窗的场景中），将限制使用该activityId发送实况窗消息24小时。"
            }), "\n"]
          }), "\n"]
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
999625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479127-1fd4144143f263dfa11c2cbd9dbb2c52.png");

},
306736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
409074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
390410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
951547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
196882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439171-e881a5ddc9f555b99b1d472ce4a92289.png");

},
451584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959126-d6c1ea784b37a58eff96dcd34f935c04.png");

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