"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["256852"], {
863602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_request_param_push_scenariozed_api_request_param_md_d3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-push-api-push-rest-api-push-rest-api-scenes-push-scenariozed-api-request-param-push-scenariozed-api-request-param-md-d3d.json
var site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_request_param_push_scenariozed_api_request_param_md_d3d_namespaceObject = JSON.parse('{"id":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param","title":"请求体参数说明","description":"pushOptions","source":"@site/docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param.md","sourceDirName":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param","slug":"/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"请求体参数说明","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-request-param","kit":"应用服务","last_updated":"2026-04-22","slug":"push-scenariozed-api-request-param"},"sidebar":"ref","previous":{"title":"请求体结构说明","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct"},"next":{"title":"响应参数","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param.md


const frontMatter = {
	title: '请求体参数说明',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-request-param',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'push-scenariozed-api-request-param'
};
const contentTitle = '请求体参数说明';

const assets = {

};



const toc = [{
  "value": "pushOptions",
  "id": "pushoptions",
  "level": 2
}, {
  "value": "target",
  "id": "target",
  "level": 2
}, {
  "value": "AlertPayload 通知消息",
  "id": "alertpayload-通知消息",
  "level": 2
}, {
  "value": "Notification",
  "id": "notification",
  "level": 3
}, {
  "value": "ClickAction",
  "id": "clickaction",
  "level": 3
}, {
  "value": "点击行为类型",
  "id": "点击行为类型",
  "level": 3
}, {
  "value": "Badge",
  "id": "badge",
  "level": 3
}, {
  "value": "ExtensionPayload 语音播报消息",
  "id": "extensionpayload-语音播报消息",
  "level": 2
}, {
  "value": "FormUpdatePayload 卡片刷新消息",
  "id": "formupdatepayload-卡片刷新消息",
  "level": 2
}, {
  "value": "FormImage",
  "id": "formimage",
  "level": 3
}, {
  "value": "<strong><strong>示例代码</strong></strong>",
  "id": "示例代码",
  "level": 3
}, {
  "value": "BackgroundPayload 后台消息",
  "id": "backgroundpayload-后台消息",
  "level": 2
}, {
  "value": "LiveViewPayload 实况窗消息",
  "id": "liveviewpayload-实况窗消息",
  "level": 2
}, {
  "value": "创建实况窗约束",
  "id": "创建实况窗约束",
  "level": 3
}, {
  "value": "支持携带占位符的字段",
  "id": "支持携带占位符的字段",
  "level": 3
}, {
  "value": "Status取值范围",
  "id": "status取值范围",
  "level": 3
}, {
  "value": "ActivityData",
  "id": "activitydata",
  "level": 3
}, {
  "value": "Trigger",
  "id": "trigger",
  "level": 3
}, {
  "value": "Geofence",
  "id": "geofence",
  "level": 3
}, {
  "value": "NotificationData",
  "id": "notificationdata",
  "level": 3
}, {
  "value": "Extend",
  "id": "extend",
  "level": 3
}, {
  "value": "Game",
  "id": "game",
  "level": 3
}, {
  "value": "Team",
  "id": "team",
  "level": 3
}, {
  "value": "Competition",
  "id": "competition",
  "level": 3
}, {
  "value": "LiveViewLockScreen",
  "id": "liveviewlockscreen",
  "level": 3
}, {
  "value": "CapsuleData",
  "id": "capsuledata",
  "level": 3
}, {
  "value": "Progress",
  "id": "progress",
  "level": 3
}, {
  "value": "SingleTextBlock",
  "id": "singletextblock",
  "level": 3
}, {
  "value": "FirstTextBlock",
  "id": "firsttextblock",
  "level": 3
}, {
  "value": "LastTextBlock",
  "id": "lasttextblock",
  "level": 3
}, {
  "value": "RichProgress",
  "id": "richprogress",
  "level": 3
}, {
  "value": "CapsuleTimer",
  "id": "capsuletimer",
  "level": 3
}, {
  "value": "ExternalData",
  "id": "externaldata",
  "level": 3
}, {
  "value": "RichText",
  "id": "richtext",
  "level": 3
}, {
  "value": "Weather",
  "id": "weather",
  "level": 3
}, {
  "value": "VoIPCallPayload 应用内通话消息",
  "id": "voipcallpayload-应用内通话消息",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "请求体参数说明",
        children: "请求体参数说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pushoptions",
      children: "pushOptions"
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
            children: "testMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["测试消息标识：  false：正式消息（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）  true：测试消息  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当testMessage为true时，单个项目每日最多可推送1000条测试消息，每次推送携带Token数不超过10个。1000条为REST API请求成功总数，非成功到达端侧的消息总数。  推送卡片刷新消息时，每次仅能携带一个Token。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ttl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["消息缓存时间，单位是秒。在用户设备离线时，消息在Push服务器进行缓存，在消息缓存时间内用户设备上线，消息会下发，超过缓存时间后消息会丢弃，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值为86400秒（1天）"
              })
            }), " ，最大值为1296000秒（15天）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  推送应用内通话消息场景、推送通知消息（VOIP消息类型）场景以及推送语音播报消息（VOIP消息类型）场景，ttl建议设置为30~60秒。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "biTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["批量任务消息标识，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-msg-receipt",
              children: "消息回执"
            }), "时会返回给应用服务器，长度最大64字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "receiptId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入一个唯一的回执ID指定本次下行消息的回执地址及配置，该回执ID可以在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-msg-receipt#%E9%85%8D%E7%BD%AE%E5%9B%9E%E6%89%A7%E5%8F%82%E6%95%B0",
              children: "配置回执参数"
            }), "中查看。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "collapseKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户设备离线时，Push服务器对离线消息缓存机制的控制方式，用户设备上线后缓存消息会再次下发，取值如下：  -1：对该取值的所有离线消息都缓存（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）  0~100：离线消息缓存分组标识，对离线消息进行分组缓存，每个应用每一组只缓存一条最新的离线消息  如果您发送了10条消息，其中前5条的collapseKey为1，后5条的collapseKey为2，那么待用户上线后collapseKey为1和2的分别下发最新的一条消息给最终用户。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  collapseKey字段只对push-type为0或2的消息生效。  0：通知消息  2：语音播报消息"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["后台消息模式，仅对push-type为6的消息生效。取值如下：  0（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）：默认后台消息，按照天粒度管控频次 ，系统会根据现网使用场景和流量进行管控，不合理的使用场景系统会进行频控。  1：即时通讯后台消息，终端设备接收到该条消息后，如果应用在前台则将消息内容传给应用；如果应用在后台，系统会不定时将后台消息送达至应用主进程，您可以在主进程中及时将消息内容同步到应用内。  每次主进程可执行的最大时长为30秒，请在30秒内完成事务处理，超出时间后主进程生命周期结束。  系统限制应用每小时最多发送2条，可能会根据用户使用应用行为，系统运行策略调整。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 该参数设置为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "1"
              })
            }), "时，应用需要申请即时通讯后台消息推送权益，该权益使用限于专属IM类应用；若应用未申请该权益，系统将按照参数设置为0的场景处理该条消息。  · 即时通讯后台消息是否能够及时送达受多因素影响，例如用户使用应用的行为、设备电量、系统负载等，系统不保障送达。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 申请时需提供应用的应用内聊天界面截图。  · 提供《增值电信业务经营许可证》（ICP许可证）和《增值电信业务经营许可证》（B22国内多方通信服务业务）。  · 企业内部应用申请特殊权益需要在邮件正文中附带应用下载二维码，并提供应用登录测试账号。  · 当前即时通讯后台消息推送申请场景仅限于IM类应用，审核因素除必须符合应用商店的政策和规定以外，还要综合评估安全性、稳定性以及应用的多样性、性能、用户体验等多因素，当前仅开放邮件申请方式。请将如下信息发送至", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:hwpush@huawei.com",
              children: "hwpush@huawei.com"
            }), "进行申请，我们会在15个工作日内回复申请结果，请您留意邮箱消息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "申请邮件模板"
              })
            }), "  邮件主题：【场景消息特殊权益申请】- 即时通讯后台消息推送  邮件正文：  申请权益名称：即时通讯后台消息推送  企业名称：***  应用名称：***  应用包名：com.***.***  AppID：1****12  应用痛点/使用场景：***是通讯类软件，应用为专属IM类应用。当前用户打开应用后存在聊天消息未实时接收的情况，希望借助即时通讯后台消息推送权益，提升用户打开应用时接收消息的体验。  承诺信息：  1. （应用名称）的即时通讯后台消息推送权益仅用于符合规定的场景中（具体场景）。  2. 业务结束后，应用不再阻止系统休眠。  3. 本次提供的证明函、《增值电信业务经营许可证》（ICP许可证）以及《增值电信业务经营许可证》（B22国内多方通信服务业务）真实有效，不存在造假。  4. 如有违反上述1、2、3及其他行为，同意华为将该权益收回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "target",
      children: "target"
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
            children: "token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array [String]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照Token向目标用户推送消息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  卡片刷新场景单次只允许携带1个Token，其他消息单次最多携带1000个Token。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alertpayload-通知消息",
      children: "AlertPayload 通知消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请求体示例请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF",
        children: "通知消息"
      }), "。"]
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
            children: "notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#notification",
              children: "Notification"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息结构体，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notification",
              children: "Notification"
            }), "结构体。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification",
      children: "Notification"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息类型。完成", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A",
              children: "申请通知消息自分类权益"
            }), "后，用于标识消息类型，不同的通知消息类型影响消息展示和提醒方式。取值如下：  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "服务与通讯类"
              })
            }), "  · IM：即时聊天  · VOIP：语音通话邀请、视频通话邀请  · MISS_CALL：未接通话消息提醒  · SUBSCRIPTION：订阅  · TRAVEL：出行  · HEALTH：健康  · WORK：工作事项提醒  · ACCOUNT：账号动态  · EXPRESS：订单&物流  · FINANCE：财务  · DEVICE_REMINDER：设备提醒  · MAIL：邮件  · PLAY_VOICE：语音播报  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  PLAY_VOICE（语音播报）消息仅可发送push-type为2的语音播报消息。  2：语音播报消息  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "资讯营销类"
              })
            }), "  · MARKETING：新闻、内容推荐、社交动态、产品促销、财经动态、生活资讯、调研、功能推荐、运营活动（仅对内容进行标识，不会加快消息发送），统称为资讯营销类消息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 若您仅需发送MARKETING（资讯营销类）消息，则无需申请通知消息自分类权益。MARKETING消息与其他分类的通知消息存在不同的频控策略，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E6%95%B0%E9%87%8F%E7%AE%A1%E7%90%86%E8%A7%84%E5%88%99",
              children: "通知消息推送数量管理规则"
            }), "。若消息被频控，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-faq/push-faq-5",
              children: "频控FAQ"
            }), "进行问题排查。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息标题。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息内容。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知右侧大图标URL，URL使用的协议必须是HTTPS协议。（消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · Wearable不支持右侧大图标样式。  · 支持图片格式为PNG、JPG、JPEG、BMP，图片像素的总字节数不超过192KB，若超过则图片不展示。  · 6.1.0(23)版本新增支持WEBP格式图片。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "overlayIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知重叠图标URL，URL使用的协议必须是HTTPS协议。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "。）  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 支持图片格式为PNG、JPG、JPEG、BMP、WEBP，图片像素的总字节数不超过192KB，若超过则图片不展示。  · 仅当category为IM或VOIP或MISS_CALL时，消息生效。  · 起始版本：6.1.0(23)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息样式：  0：普通通知（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）  1：大文本样式  3：多行文本样式（使用场景请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F",
              children: "开发指南"
            }), "）  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · style=1 大文本样式将要废弃，建议直接使用 style=0 普通通知。  · Wearable不支持大文本样式和多行文本样式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bigTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["大文本样式的标题，当style为1时必选。设置bigTitle后通知栏展示时，使用bigTitle而不用title。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 此字段将要废弃，建议直接使用title字段。  · Wearable不支持大文本样式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bigBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["大文本样式的内容，当style为1时必选。设置bigBody后通知栏展示时，使用bigBody而不用body。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 此字段将要废弃，建议直接使用body字段。  · Wearable不支持大文本样式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notifyId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每条消息在通知显示时的唯一标识。不携带或者设置-1时，推送服务自动为每条消息生成一个唯一标识；不同的通知消息可以拥有相同的notifyId，实现新消息覆盖旧消息功能。若要用于消息撤回则必填，且范围为[0, 2147483647]，即非负值。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-msg-revoke/push-msg-revoke",
              children: "消息撤回"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appMessageId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用消息的唯一标识，不携带时默认无appMessageId。长度范围为[1,64]，支持大小写字母、数字、+、/、=、-、_和空白字符。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 当同一appMessageId的应用消息通过多个渠道（Push Kit、近场通讯、应用自己拉取或发送本地通知）触达时，目标终端只展示有效期内最早的一条，有效期", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认为24小时"
              })
            }), "。  · 区别于notifyId,notifyId作用机制是新消息覆盖旧消息。特别地，notifyId和appMessageId均相同时，展示旧消息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "profileId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用内账号id匿名标识，最大长度为64。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inboxContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array [String]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多行文本样式的内容，当style为3时，本字段必填，最多支持3条内容，每条最大长度1024且无法完全展示时以“...”截断。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  Wearable不支持多行文本样式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击消息动作，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "badge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#badge",
              children: "Badge"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息角标控制参数，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#badge",
              children: "Badge"
            }), "结构体，不设置时应用不显示角标数字，若当前已存在角标，则角标数字不变化。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  Wearable、TV不支持通知角标样式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义消息通知铃声。此处设置的铃声文件必须放在应用的/resources/rawfile路径下。例如设置为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "alert.mp3"
              })
            }), "，对应应用本地的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "​/resources/rawfile/alert.mp3"
              })
            }), " 文件。支持的文件格式包括MP3、WAV、MPEG等，如果不设置，则用默认系统铃声。  当请求不携带", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "soundDuration"
              })
            }), "字段时，建议铃声时长不超过30秒，若超过30秒则截断处理；当请求携带", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "soundDuration"
              })
            }), "字段时，详情请参见", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "soundDuration"
              })
            }), "字段说明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  Wearable、TV、PC/2in1不支持自定义铃声。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "soundDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义消息通知铃声时长。需要配合sound字段使用，只有当请求同时携带sound字段，soundDuration字段才会生效。仅支持数字，单位为秒，取值范围 [1, 60]。  sound字段传入的自定义消息通知铃声会播放至soundDuration字段值后停止，若自定义消息通知铃声对应的时长不足soundDuration字段值则会循环播放，在达到soundDuration字段值后停止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foregroundShow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用在前台时是否展示通知消息。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认为true"
              })
            }), "，表示前后台都展示。  · true：默认值，应用在前后台都展示通知消息，此时", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
              children: "receiveMessage"
            }), "不会被触发，无法获取消息数据。  · false：应用只在后台展示通知消息；应用在前台时，通知消息将不会展示，但可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
              children: "receiveMessage"
            }), "接收通知消息自行完成业务处理，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E5%BA%94%E7%94%A8%E5%9C%A8%E5%89%8D%E5%8F%B0%E6%97%B6%E5%A4%84%E7%90%86%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF",
              children: "应用在前台时处理通知消息"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priorityScene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["消息的优先通知类型。取值如下：  · PRIMARY_CONTACT：重要联系人消息  · AT_ME：@我  · URGENT_MESSAGE：加急消息  · SCHEDULE_REMINDER：日程待办提醒  说明：  发送优先通知消息需要开通", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/priority-notification-permission-guidelines",
              children: "优先通知权益"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clickaction",
      children: "ClickAction"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "actionType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["消息点击后的行为。  0：打开应用首页  1：打开应用自定义页面  3：清除通知  5：打开拨号界面  在不同的场景下支持actionType不同，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%82%B9%E5%87%BB%E8%A1%8C%E4%B8%BA%E7%B1%BB%E5%9E%8B",
              children: "点击行为类型"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用内置页面ability对应的action。当actionType为1时，字段uri和action至少填写一个。当action对应的页面路径不存在时，会默认跳转应用首页。  action如何设置请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E7%82%B9%E5%87%BB%E6%B6%88%E6%81%AF%E8%BF%9B%E5%85%A5%E5%BA%94%E7%94%A8%E5%86%85%E9%A1%B5",
              children: "点击消息进入应用内页"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用内置页面ability对应的uri，uri对象内部结构请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
              children: "skills标签"
            }), "。当actionType为1时，字段uri和action至少填写一个。当存在多个Ability时，分别填写不同Ability的action和uri，优先使用action查找对应的应用内置页面。  uri如何设置请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E7%82%B9%E5%87%BB%E6%B6%88%E6%81%AF%E8%BF%9B%E5%85%A5%E5%BA%94%E7%94%A8%E5%86%85%E9%A1%B5",
              children: "点击消息进入应用内页"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击时传递给应用的数据，格式为JSON对象。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）  actionType为5时，data必填。固定携带{\"tel\": \"xxx\"} value为电话号码，长度最大为20，允许包含字符：  · +（只能在首位字符）  · -  · 空格  · 0-9  · #  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当actionType为5时，首位字符必须为+或0-9。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点击行为类型",
      children: "点击行为类型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "push-type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "actionType枚举值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 Alert消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "notification.clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：打开应用首页  1：打开应用自定义页面"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 语音播报消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "notification.clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：打开应用首页  1：打开应用自定义页面"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7 实况窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "notificationData.clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：打开应用首页  1：打开应用自定义页面"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7 实况窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "notificationData.extend.clickAction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0：打开应用首页  1：打开应用自定义页面  3：清除通知  5：打开拨号界面  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果设备不支持拨号，当actionType取值5时则无法创建实况窗。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "badge",
      children: "Badge"
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
            children: "addNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用角标累加数字（大于0小于100的整数），非应用角标实际显示数字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 某应用当前有N条未读消息，若addNum设置为3，则每发一次消息，应用角标显示的数字累加3，为N+3（若N+3 > 99，角标显示“99+”）。  · 当不传入addNum时默认值为0，角标不会增加。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["角标设置数字（大于等于0小于100的整数），应用角标实际显示数字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  setNum优先级高于addNum：  · 若未传入setNum，说明未下发setNum，则本次以addNum为准。  · 若setNum>=0，说明下发了setNum，则本次以setNum为准。发布通知时不携带addNum字段。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extensionpayload-语音播报消息",
      children: "ExtensionPayload 语音播报消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请求体示例请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E8%AF%AD%E9%9F%B3%E6%92%AD%E6%8A%A5%E6%B6%88%E6%81%AF",
        children: "语音播报消息"
      }), "。"]
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
            children: "notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#notification",
              children: "Notification"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知消息结构体，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notification",
              children: "Notification"
            }), "结构体。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  notification.category必填，且取值为“PLAY_VOICE”，发送语音播报消息前请先申请推送语音播报消息权益，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E8%AF%AD%E9%9F%B3%E6%92%AD%E6%8A%A5%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
              children: "申请推送语音播报消息权益"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["语音播报消息的额外数据。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）。  extraData数据获取请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/push-kit-sample-code-clientdemo-arkts/blob/master/entry/src/main/ets/entryability/RemoteNotificationExtAbility.ets",
              children: "示例代码"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "formupdatepayload-卡片刷新消息",
      children: "FormUpdatePayload 卡片刷新消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请求体示例请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E5%8D%A1%E7%89%87%E5%88%B7%E6%96%B0%E6%B6%88%E6%81%AF",
        children: "卡片刷新消息"
      }), "。"]
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
            children: "formId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务卡片的实例ID，当卡片", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonaddform",
              children: "onAddForm"
            }), "（卡片使用方添加卡片至桌面）时获取。请注意，当前端侧生成formId最大值为231-1，formId字段支持输入的最大值为263-1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["卡片刷新消息的版本号，最小值为0，最大值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "231-1"
              })
            }), "。  · 新的卡片刷新消息的版本号需", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "大于"
              })
            }), "当前卡片刷新消息版本号，否则会刷新失败。  · 若新的卡片刷新消息版本号为 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "0"
              })
            }), "则表示卡片刷新版本号重置，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "本次卡片刷新仍然有效"
              })
            }), "，下次卡片刷新消息版本号需大于0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array [", (0,jsx_runtime.jsx)(_components.a, {
              href: "#formimage",
              children: "FormImage"
            }), " Object]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务卡片图片数据，结构为数组，数组每个元素为一个object，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#formimage",
              children: "FormImage"
            }), "结构体。当前仅允许携带一个数组元素。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["详情见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",
                  children: "示例代码"
                }), "。"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务卡片模块名称。  项目模块级别下的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src/main/module.json5"
              })
            }), "中的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "module"
              })
            }), "标签下的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "name"
            }), "值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务卡片名称。  该数据来源于", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片配置文件"
              })
            }), "中", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "forms"
              })
            }), "标签下的某个卡片配置信息的name值，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片配置文件"
              })
            }), "位于项目模块级别下的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src/main/resources/base/profile"
              })
            }), "，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-form-update#%E6%8E%A8%E9%80%81%E5%8D%A1%E7%89%87%E5%88%B7%E6%96%B0%E6%B6%88%E6%81%AF-1",
              children: "指南"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务卡片Ability名称。  项目模块级别下的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src/main/module.json5"
              })
            }), "中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
              children: "extensionAbilities"
            }), "标签下的服务卡片的ability名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待刷新服务卡片的业务数据，key-value格式。  该数据来源于", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片页面文件"
              })
            }), "中的声明式范式组件名称，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片页面文件"
              })
            }), "位于项目模块级别下的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src/main/ets/widgets"
              })
            }), "，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-form-update#%E6%8E%A8%E9%80%81%E5%8D%A1%E7%89%87%E5%88%B7%E6%96%B0%E6%B6%88%E6%81%AF-1",
              children: "指南"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · formData中的key不能以", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "datashareproxy://"
              })
            }), " 开头。  · formData中的value如果是数值类型，不能超过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "253-1"
              })
            }), "。  · formData中的value取值不允许为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "null"
              })
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formimage",
      children: "FormImage"
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
            children: "keyName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片的对应的key，该值不能与formData中自定义的变量数据的key重复。  该数据来源于", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片页面文件"
              })
            }), "中的图片组件名称，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片页面文件"
              })
            }), "位于项目模块级别下的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "src/main/ets/widgets"
              })
            }), "，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-form-update#%E6%8E%A8%E9%80%81%E5%8D%A1%E7%89%87%E5%88%B7%E6%96%B0%E6%B6%88%E6%81%AF-1",
              children: "指南"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片下载地址，URL使用的协议必须是HTTPS协议。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  支持图片的格式为PNG、JPG、JPEG、WEBP，图片文件最大为512KB，若超过则图片不展示。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "require"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片刷新策略控制。  1：若图片下载失败，则不进行卡片刷新操作。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "（默认值）"
              })
            }), "  0：若图片下载失败，仅刷新文字。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"images\": [{\n    \"keyName\": \"icon\",\n    \"url\": \"https://xxx.png\",\n    \"require\": 1\n  }]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundpayload-后台消息",
      children: "BackgroundPayload 后台消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请求体示例请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E5%90%8E%E5%8F%B0%E6%B6%88%E6%81%AF",
        children: "后台消息"
      }), "。"]
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
            children: "extraData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传递给应用的数据。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）  Push检测应用是否在前台，应用如果在前台则传递到目标应用，如果不在前台，则缓存或静默写入应用自身缓存。  extraData数据获取请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/push-kit-sample-code-clientdemo-arkts/blob/master/entry/src/main/ets/abilities/PushMessageAbility.ets",
              children: "示例代码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "proxyData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程不在前台时是否走数据代理静默写入到应用自身缓存，当前只能传全大写\"ENABLE\"。若您不希望开启代理写入，请不要在消息体中填写此字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewpayload-实况窗消息",
      children: "LiveViewPayload 实况窗消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实况窗请求示例请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
        children: "创建实况窗消息"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E6%9B%B4%E6%96%B0%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
        children: "更新实况窗消息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421119)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保用户看到内容的时效性，请您确保对实况窗内容进行及时更新。系统将在实况窗超过2小时未更新时，隐藏实况窗在状态栏胶囊和锁屏的展示，保留通知中心展示；超过4小时未更新，系统会认为实况窗结束，并从各个展示入口清除该实况窗。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "activityId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗唯一标识，取值范围为[-2147483648, 2147483647]，由开发者自行生成。对应Live View Kit中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#section411410371767",
              children: "id"
            }), "字段。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  若发送的activityId对应的实况窗不存在（更新或结束实况窗的场景中），将限制使用该activityId发送实况窗消息24小时。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗消息操作类型：  0：表示创建实况窗消息，仅允许event值为FLIGHT、TAXI、TRAIN，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E7%BA%A6%E6%9D%9F",
              children: "创建实况窗约束"
            }), "。  1：表示更新实况窗消息（确保activityId对应的实况窗存在）  2：表示结束实况窗消息（确保activityId对应的实况窗存在）  4：表示增加延迟触发创建实况窗消息（仅每个实况活动1个围栏）  6：表示增加延迟触发结束实况窗消息（仅每个实况活动1个围栏）  更新和结束实况窗时，对于非必选字段，若无特殊说明和默认值，则不携带时默认继承上一次的状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["业务场景取值，必须为以下内容之一：  · TAXI：出行打车  · DELIVERY：即时配送（外卖、生鲜）  · FLIGHT：航班  · TRAIN：高铁/火车  · QUEUE：排队  · PICK_UP：取餐  · SCORE：赛事比分  · RENT：共享租赁  · TIMER：计时  · WORKOUT：运动锻炼  · NAVIGATION：导航  · EXPRESS：快递  · CHECK_IN：打卡  使用对应场景需要申请权益，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-preparations/liveview-formal-authority",
              children: "开通实况窗权益"
            }), "，完成权益的申请。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当创建实况窗消息（operation取值为0）时，event取值仅允许为FLIGHT、TAXI、TRAIN、EXPRESS、CHECK_IN。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示实况窗消息状态。  当operation为0，或operation为1且更新的实况窗为通过REST API创建的实况窗时必填。  status的取值范围根据场景类型而定，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#status%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4",
              children: "Status取值范围"
            }), "。  消息体中占位符{{status}}的使用，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%94%AF%E6%8C%81%E6%90%BA%E5%B8%A6%E5%8D%A0%E4%BD%8D%E7%AC%A6%E7%9A%84%E5%AD%97%E6%AE%B5",
              children: "支持携带占位符的字段"
            }), "，满足要求时将替换字段中的占位符为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#status%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4",
              children: "目标值"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选，当系统不支持实况窗通知时，展示在通知栏的标题。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选，当系统不支持实况窗通知时，展示在通知栏的内容。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识消息更新是否需要提醒。  true：静默提醒 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "（默认值）"
              })
            }), "  false：铃声震动提醒"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新实况窗通知的版本号，大于等于0，新的实况窗通知版本号需", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "大于"
              })
            }), "当前实况窗通知版本号，否则会刷新失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activityData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#activitydata",
              children: "ActivityData"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗通知详细数据，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#activitydata",
              children: "ActivityData"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#trigger",
              children: "Trigger"
            }), " Object"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "延迟触发实况的围栏信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建实况窗约束",
      children: "创建实况窗约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建实况窗的消息示例请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
        children: "创建实况窗消息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "允许通过REST API创建实况窗的event：FLIGHT、TAXI、TRAIN。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "12小时内不允许通过REST API创建同一个activityId的实况窗。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于不同的event类型，创建实况窗时，对布局类型（activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
            href: "#notificationdata",
            children: "type"
          }), "）和必填字段，有以下场景约束："]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "event"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "创建时允许的布局类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "创建时必填字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "REST API创建的消息，更新时必填字段"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FLIGHT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "左右文本模板类型"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "status"
                }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#notificationdata",
                  children: "keywords"
                })]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "status"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TAXI"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进度可视化类型  强调文本模板类型  左右文本模板类型  赛事类型"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "status"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "TRAIN"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "左右文本模板类型"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "status"
                }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#notificationdata",
                  children: "keywords"
                })]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                  children: "status"
                })
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于不同的布局类型（activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
            href: "#notificationdata",
            children: "type"
          }), "），需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%94%AF%E6%8C%81%E6%90%BA%E5%B8%A6%E5%8D%A0%E4%BD%8D%E7%AC%A6%E7%9A%84%E5%AD%97%E6%AE%B5",
            children: "支持携带占位符的字段"
          }), "中", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["填入至少一次", (0,jsx_runtime.jsx)(_components.a, {
                href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
                children: "status"
              }), "的占位符{{status}}"]
            })
          }), " ；如果该event下", (0,jsx_runtime.jsx)(_components.a, {
            href: "#notificationdata",
            children: "keywords"
          }), "字段也必填，则也需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%94%AF%E6%8C%81%E6%90%BA%E5%B8%A6%E5%8D%A0%E4%BD%8D%E7%AC%A6%E7%9A%84%E5%AD%97%E6%AE%B5",
            children: "支持携带占位符的字段"
          }), "中", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "填入至少一次相应的占位符"
            })
          }), "，占位符具体请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#notificationdata",
            children: "keywords"
          }), "字段描述。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过REST API创建的实况窗，在更新时必须同时满足status和keywords要求。通过Live View Kit（实况窗服务）创建的实况窗，在REST API更新时可以不填写status和keywords字段，若开发者选择填写则需满足status和keywords要求。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持携带占位符的字段",
      children: "支持携带占位符的字段"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "布局类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "进度可视化类型  赛事类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "contentTitle"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "contentText"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "text"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "extend"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extend",
              children: "text"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "强调文本模板类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "contentTitle"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "contentText"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "text"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "extend"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extend",
              children: "text"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "singleTextBlock"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#singletextblock",
              children: "firstLine"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "singleTextBlock"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#singletextblock",
              children: "secondLine"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "左右文本模板类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "contentTitle"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "contentText"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "text"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "extend"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extend",
              children: "text"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "firstTextBlock"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#firsttextblock",
              children: "firstLine"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "firstTextBlock"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#firsttextblock",
              children: "secondLine"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "lastTextBlock"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#lasttextblock",
              children: "firstLine"
            }), "  activityData.notificationData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "lastTextBlock"
            }), ".", (0,jsx_runtime.jsx)(_components.a, {
              href: "#lasttextblock",
              children: "secondLine"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status取值范围",
      children: "Status取值范围"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "status取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "消息体中{{status}}占位符将替换的词"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPART"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计划"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计划出发。航班计划起飞前一段时间，提醒用户准备出发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAITING_FOR_CHECK_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未值机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未值机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECKED_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已值机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已值机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASSED_SECURITY_CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已安检"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已安检。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "START_BOARDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始登机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始登机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URGE_BOARDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "催促登机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "催促登机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOARDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已登机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已登机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "END_BOARDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束登机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束登机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABOUT_TO_TAKE_OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将起飞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将起飞。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAKEN_OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起飞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "航班起飞。用户关注了某个航班后，向用户提醒航班已经起飞。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARRIVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "到达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "航班到达。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中转提醒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中转提醒。用户有多趟航班中转，在到达后提醒用户下一趟航班的信息。  若是新航班信息，建议新建一张实况窗卡片承载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW_ITINERARY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新行程开启"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中转航班新行程提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GATE_CHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登机口变更"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登机口变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLIGHT_DELAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "延误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "航班延误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLIGHT_CANCEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "航班取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLIGHT_DIVERSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "备降"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "航班备降。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLIGHT"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLIGHT_RETURN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返航"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "航班返航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CALLING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "呼叫车辆中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "呼叫车辆中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABOUT_TO_BEGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行程即将开始"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行程即将开始。预约订单、顺风车订单的场景，在行程即将开始时，提醒用户出发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRIVER_ON_THE_WAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "司机正在赶来"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "司机正在赶来。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRIVER_ARRIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "司机已到达上车点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "司机已到达上车点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEADING_TO_DESTINATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在去往目的地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在去往目的地。订单有多个目的地时，可持续使用本状态直到行程结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行程结束"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行程结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE_CALLING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重新呼叫车辆中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重新呼叫车辆中。订单改派、司机取消订单等导致的车辆重新呼叫。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TAXI"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANCELED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单已取消"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单已取消。用户取消订单、因周边运力不足无法成单的订单，均属于订单已取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPART"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计划出发"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车计划出发前一段时间，提醒用户准备出发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASSED_SECURITY_CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已安检"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户已完成安检。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TICKET_CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检票提醒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车开始检票。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已检票"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户已完成检票。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK_IN_CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止检票"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检票口截止检票进站。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SET_OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已出发"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车驶离出发点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEADING_TO_DESTINATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车运行中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车运行过程中，可以同步向用户展示途径站点、预计剩余时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARRIVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已到达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车到达目的地。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GATE_CHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检票口变更"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检票口变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIN_DELAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车晚点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车晚点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TRAIN"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAIN_CANCEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车停运"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列车停运。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activitydata",
      children: "ActivityData"
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
            children: "notificationData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "NotificationData"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["消息通知布局数据，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationdata",
              children: "NotificationData"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "capsuleData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#capsuledata",
              children: "CapsuleData"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["胶囊通知布局数据，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#capsuledata",
              children: "CapsuleData"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "externalData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#externaldata",
              children: "ExternalData"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["小折叠外屏展示数据，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#externaldata",
              children: "ExternalData"
            }), "结构体。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trigger",
      children: "Trigger"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["地理围栏触发类型。  1：地理围栏（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#geofence",
              children: "Geofence"
            }), " Object"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏结构或者其他触发条件结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["条件触发实况的展示持续时间，取值范围为[15，1800]，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值为900"
              })
            }), "，单位：s。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geofence",
      children: "Geofence"
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
            children: "longitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏中心点经度，取值范围为[-180，180]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "latitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏中心点纬度，取值范围为[-90，90]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coordinateSystemType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["地理围栏中心点的坐标系类型。  1：WGS84（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）  2：GCJ02。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "monitorEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发地理围栏的事件类型。  1：进入围栏  2：退出围栏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏半径，取值范围为[200，2000] ，单位：m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delayTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["延迟触发时间，即：进入/离开围栏后持续多长时间触发围栏，取值范围为[0，300]，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值为0"
              })
            }), "，单位：s。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notificationdata",
      children: "NotificationData"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["布局类型：  3：进度可视化类型，适用于外卖配送、生鲜配送、车辆接驾进展等涉及进度节点显示的活动。  4：强调文本模板类型，适用于展示取餐码、取件码、车牌号等关键信息的活动。  5：左右文本模板类型，适用于高铁、火车、航班等涉及展示起点、终点的活动。  7：赛事类型，适用于体育赛事比分场景、游戏赛事比分场景等。  -1：基础模板，只展示", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-live-view-0000001955186861#section159031834267",
              children: "固定区和辅助区"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  · 从6.1.0(23)开始，新增支持基础模板（即type为-1）。  · 当更新实况窗时，type传入非法值，终端设备会使用基础模板进行展示。  · 当创建实况窗时，每种", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
              children: "event"
            }), "仅可使用特定的布局类型，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97%E7%BA%A6%E6%9D%9F",
              children: "创建实况窗约束"
            }), "（基础模板不受限制，即每种event都可以使用基础模板创建）；当更新实况窗时，每种", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
              children: "event"
            }), "可以使用任何布局类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keywords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map<String, String>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗关键词，operation为0且event为如下场景时，必填。  · event为FLIGHT时，仅有", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "flightNo"
              })
            }), "一个keyword，表示航班号，占位符格式：{{flightNo}}。  · event为TRAIN时，仅有", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "trainNo"
              })
            }), "一个keyword，表示火车车次，占位符格式：{{trainNo}}。  消息体中占位符的使用，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%94%AF%E6%8C%81%E6%90%BA%E5%B8%A6%E5%8D%A0%E4%BD%8D%E7%AC%A6%E7%9A%84%E5%AD%97%E6%AE%B5",
              children: "支持携带占位符的字段"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "additionalText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示信息/免责声明。仅在NotificationData.type=5时可用。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keepTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗通知存档期，在结束实况窗通知后，通知仍保留在通知中心的时长，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认0不保留"
              })
            }), "，最多设置1小时，单位为秒（s）。  存档期时间以结束实况窗消息中携带的此字段数据为准，存档期期间不支持再次更新或结束通知。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知标题，长度最大1024字符。  operation为0时必填，且不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array [", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "RichText"
            }), " Object]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知内容，由多段富文本RichText组成，文本长度总和不超过1024字符，若设置文本颜色，只允许设置为同一种颜色。  operation为0时必填，且不能为空Array。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "richProgress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richprogress",
              children: "RichProgress"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["丰富进度信息，type为3时必填，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richprogress",
              children: "RichProgress"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleTextBlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#singletextblock",
              children: "SingleTextBlock"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["强调文本模板样式中，强调的文本块，type为4时必填，默认占据左侧扩展区，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#singletextblock",
              children: "SingleTextBlock"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "firstTextBlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#firsttextblock",
              children: "FirstTextBlock"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多文本块布局中的左侧文本块，type为5时必填，详情可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#firsttextblock",
              children: "FirstTextBlock"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastTextBlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#lasttextblock",
              children: "LastTextBlock"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多文本块布局中的右侧文本块，type为5时必填，详情可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#lasttextblock",
              children: "LastTextBlock"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayHorizontalLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示扩展区域的分割线，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "不设置默认显示分割线"
              })
            }), "。  true：显示。  false：不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当type为5或7时才会显示分割线。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spaceIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "间隔图标，本地资源，type为5时占据扩展区中间。  operation为0，type为5，spaceType未传或者spaceType为0时必填，且不能为空字符串。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spaceText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["间隔文本，type为5时占据扩展区中间。  operation为0，type为5，spaceType为1时必填，且不能为空字符串。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["左右文本样式类型。  0：强调型。  1：均衡型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  创建时未传style字段将使用强调型展示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spaceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["间隔类型。  0：使用图标。  1：使用文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  创建时未传spaceType字段将使用图标展示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#extend",
              children: "Extend"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助区样式，无更新时可不携带。具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extend",
              children: "Extend"
            }), "结构体。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  更新type类型为新布局时，需重新携带本字段。  刷新实况窗通知内容时，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "辅助区显示类型为图片且图片路径填写错误会导致刷新内容失败。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "game"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#game",
              children: "Game"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["赛事信息扩展区，type为7时必填，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#game",
              children: "Game"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "descPic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区域描述图片，默认不显示，当type为4时且descPic不为空时，图片会占据右侧扩展区。不携带时系统显示时采用上次刷新的图像。  operation为0且type为4时必填，且不能为空字符串。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["消息点击行为，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lockScreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewlockscreen",
              children: "LiveViewLockScreen"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["锁屏沉浸实况窗相关字段，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewlockscreen",
              children: "LiveViewLockScreen"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weather"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#weather",
              children: "Weather"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入天气信息结构体。需要同时传入天气类型、天气位置类型与最高最低温度参数，才会在卡片上展示天气。仅支持左右文本模板（即type为5）。  当传入天气类型为雨、雪特殊天气，且同时传入实况窗卡片的背景氛围类型参数backgroundType（合法值参见Live View Kit ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#section15834105743213",
              children: "BackgroundType"
            }), "枚举值）为赏月航班或夕阳航班对应的值时，卡片上优先展示天气背景，其余非特殊天气在卡片上优先展示赏月航班或夕阳航班背景氛围。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示实况窗卡片的背景氛围类型，仅支持左右文本模板（即type为5），合法值参见Live View Kit ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#section15834105743213",
              children: "BackgroundType"
            }), "枚举值。  当传入实况窗卡片的背景氛围类型参数为赏月航班或夕阳航班对应的值时，且同时传入天气类型（", (0,jsx_runtime.jsx)(_components.a, {
              href: "#weather",
              children: "Weather"
            }), "）为雨、雪特殊天气，卡片上优先展示天气背景，其余非特殊天气在卡片上优先展示赏月航班或夕阳航班背景氛围。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extend",
      children: "Extend"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助区显示类型：  0：不显示（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）  1：显示普通文本  2：显示胶囊文本  3：显示图片（辅助区区域大小44*44vp，设置的图片会保持宽高比进行缩小或者放大，使得完全显示在辅助区区域的边界内）  4：显示Icon（辅助区区域大小44*44vp，设置的图片会保持宽高比显示，在辅助区区域内缩小或者保持不变）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助区文本信息，当type为1或2时必填，且不能为空字符串。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助区图片信息，当type为3或4时必填，且不能为空字符串。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  本字段即将停止维护，请及时切换使用image字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助区图片信息，当type为3或4时必填，且不能为空字符串。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助区的点击行为，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "结构体的定义。  若不携带该字段，则辅助区不支持点击跳转。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "game",
      children: "Game"
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
            children: "host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#team",
              children: "Team"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区左侧样式，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#team",
              children: "Team"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "guest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#team",
              children: "Team"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区右侧样式，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#team",
              children: "Team"
            }), "结构体。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "competition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#competition",
              children: "Competition"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区中部样式，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#competition",
              children: "Competition"
            }), "结构体。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "team",
      children: "Team"
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
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示区队伍图标，当operation为0时必填，且不可为空字符串。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["队伍名称，当operation为0时必填，且不可为空字符串。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["赛事比分，当operation为0时必填，且不可为空字符串。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "competition",
      children: "Competition"
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
            children: "desc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区中间上方描述文本，当operation为0时，和richDesc至少有一个，且不可为空字符串。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "richDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array [", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "RichText"
            }), " Object]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区中间上方描述富文本，当operation为0时，和desc至少有一个，且不可为空Array，且Array中的text拼接完后，不能为空串。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区中间下方比赛时间，当operation为0时必填，且不可为空字符串。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "liveviewlockscreen",
      children: "LiveViewLockScreen"
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
            children: "picture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锁屏沉浸实况窗展示的图片。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "capsuledata",
      children: "CapsuleData"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "胶囊布局类型：  1：图标+文本类型，胶囊显示：左侧图标，右侧文本。  2：计时器类型，胶囊显示：左侧图标，右侧计时文本。  3：进度类型，胶囊显示：整体进度，左侧图标，右侧百分比/数值占比。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在状态栏上以实况窗胶囊的形式呈现应用实况业务时：  1：胶囊显示。  -1：胶囊不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态图标，本地资源。推荐使用 18*18vp 的纯色矢量图标。  示例：图标文件“icon.svg”存放在应用的“/resources/rawfile”路径下，则取值为“icon.svg”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "胶囊背景色\"#ARGB\"16进制格式，长度为9。  避免与实况胶囊的底色冲突，确保显示效果，以下颜色不能使用：  #FF000000  #FFFFFFFF  #FFF1F3F5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "胶囊在状态栏的动态效果，不携带时默认无特殊效果。  · DEFAULT：无特殊效果。  · FLIP：抢占胶囊位置动态，最高支持5次/活动。  · EXPAND：胶囊自动展开成悬浮卡片动态，最高支持2次/活动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "胶囊状态主文本，长度不超过128字符。  当operation为0且type为1时必填。  当type为1时，该字段用于设置胶囊标题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "胶囊内容，长度不超过128字符；当设备为宽屏或设备横屏时，显示该扩展文本。  当operation为0且type为1或2时必填。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "capsuleTimer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#capsuletimer",
              children: "CapsuleTimer"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["胶囊计时器，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#capsuletimer",
              children: "CapsuleTimer"
            }), "结构体。  当type为2时必选，该字段用于设置胶囊计时器信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#progress",
              children: "Progress"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["胶囊进度信息，具体字段请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#progress",
              children: "Progress"
            }), "结构体。  当type为3时必选，该字段用于设置胶囊进度信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "progress",
      children: "Progress"
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
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进度最大值，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认为1"
              })
            }), "，范围为[1, 2147483647]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度当前值，范围为[0, 2147483647]，小于等于进度最大值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indeterminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进度显示类型，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认显示为数值占比"
              })
            }), "。  true：百分比。  false：数值占比。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "singletextblock",
      children: "SingleTextBlock"
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
            children: "firstLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首行文本，长度不超过128字符，且不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次行文本内容，长度不超过128字符，且不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "underlineColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次行文本内容下划线颜色，\"#ARGB\"16进制格式，长度为9，不设置则不显示下划线。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "firsttextblock",
      children: "FirstTextBlock"
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
            children: "firstLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首行文本，长度不超过128字符，且不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次行文本内容，长度不超过128字符，且不能为空字符串。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lasttextblock",
      children: "LastTextBlock"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "firstLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首行文本，长度不超过128字符，且不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondLine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次行文本内容，长度不超过128字符，且不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "firstLineSuperscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首行文本右上角的上标字段，固定格式\"+x\"，x取值范围为1-9，否则不展示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondLineSuperscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次行文本右上角的上标字段，固定格式\"+x\"，x取值范围为1-9，否则不展示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "richprogress",
      children: "RichProgress"
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
            children: "indicatorIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度条指示器图标，本地资源，不携带时系统显示时采用上次刷新的图像。  当operation为0且indicatorType为1或2时，必填，且不能为空字符串。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度百分比，进度值0-100，决定指示器在进度条中的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进度指示器左侧的进度点及节点图标的颜色，\"#ARGB\"16进制格式，长度为9，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值为#FF317AF7，表示蓝色"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进度指示器右侧的进度点及节点图标的颜色，\"#ARGB\"16进制格式，长度为9，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值为#19000000，表示灰色。深色模式默认值为#19FFFFFF，表示白色"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeIcons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array [String]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度条每个节点的图标，数组长度范围为[2, 5]，本地资源，不携带时系统显示时采用上次刷新的图像。  当operation为0时必填，且不能为空Array。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区进度显示类型：  0：虚线进度（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "）。  1：普通实线进度。  2：粗实线进度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indicatorType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区指示器小图标显示类型：  0：不显示指示器小图标 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "（默认值）"
              })
            }), " 。  1：显示在进度线上方。  2：显示覆盖在进度线上。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "capsuletimer",
      children: "CapsuleTimer"
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
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["胶囊计时器初始值，每秒刷新一次。单位ms，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认为0"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countDown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否倒计时显示计时器，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认正计时"
              })
            }), "。  false：正计时显示。  true：倒计时显示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["胶囊计时器是否暂停，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认不暂停"
              })
            }), "。  false：不暂停。  true：暂停，计时器暂停时，胶囊会显示暂停的那一秒。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "externaldata",
      children: "ExternalData"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["外屏模板类型：  0：默认类型 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "（默认值）"
              })
            }), "  1：背景图片类型"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外屏背景颜色，\"#RGB\"16进制格式，长度为7，不设置时使用系统默认颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外屏背景图片，本地资源，当type为1时，第一次创建实况窗时必须设置，后续不更新时可不设置。  当operation为0且type为1时必填，且不为空字符串。  取值为在指定路径下的文件名。  示例：图标文件“icon.png”存放在应用的“/resources/rawfile”路径下，则取值为“icon.png”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义的外屏通知标题，总长度不超过128字符。  当operation为0时必填，且不为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array [", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "RichText"
            }), " Object]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义的外屏通知内容，由多段富文本RichText组成，文本长度总和不超过128字符，若设置文本颜色，只允许设置为同一种颜色。  当operation为0时必填，且不为空Array。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "richtext",
      children: "RichText"
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foregroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文字颜色，\"#ARGB\"16进制格式，长度为9。不设置foregroundColor时，文本颜色", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认为#FF000000"
              })
            }), "；设置foregroundColor时，数组中的所有对象仅能设置一种颜色。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weather",
      children: "Weather"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "weatherType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["天气类型，weatherType不传入或传入非法值，则不展示天气。合法值参见Live View Kit ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#section2062895313473",
              children: "WeatherType"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "locationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["天气位置类型，locationType不传入或传入非法值，则不展示天气。合法值参见Live View Kit ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#section1597237195618",
              children: "WeatherLocationType"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "highTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "天气最高温度，当前仅支持摄氏度，需小于等于58℃且大于传入的最低温度值（lowTemperature）。不传入或传入非法值，则不展示天气。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lowTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "天气最低温度，当前仅支持摄氏度，需大于等于-95℃且小于传入的最高温度值（highTemperature）。不传入或传入非法值，则不展示天气。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "voipcallpayload-应用内通话消息",
      children: "VoIPCallPayload 应用内通话消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请求体示例请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example#%E5%BA%94%E7%94%A8%E5%86%85%E9%80%9A%E8%AF%9D%E6%B6%88%E6%81%AF",
        children: "应用内通话消息"
      }), "。"]
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
            children: "extraData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传递给应用的数据，应用根据数据自行处理相关逻辑，展示应用内通话消息相关信息。（注意消息体大小限制，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E4%BD%BF%E7%94%A8%E7%BA%A6%E6%9D%9F",
              children: "使用约束"
            }), "）  extraData数据获取请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/harmonyos_samples/push-kit-sample-code-clientdemo-arkts/blob/master/entry/src/main/ets/service/VoipCallService.ets",
              children: "示例代码"
            }), "。"]
          })]
        })
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
421119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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