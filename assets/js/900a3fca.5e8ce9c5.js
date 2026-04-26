"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["463939"], {
196087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_scenes_push_background_push_background_md_900_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-scenes-push-background-push-background-md-900.json
var site_docs_push_kit_guide_push_scenes_push_background_push_background_md_900_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-scenes/push-background/push-background","title":"推送后台消息","description":"场景介绍","source":"@site/docs/push-kit-guide/push-scenes/push-background/push-background.md","sourceDirName":"push-kit-guide/push-scenes/push-background","slug":"/push-kit-guide/push-scenes/push-background/","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-background/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"推送后台消息","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-background","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"撤回语音播报消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-extend-noti/push-revoke-extend-noti/"},"next":{"title":"推送实况窗消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-update-liveview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-scenes/push-background/push-background.md


const frontMatter = {
	title: '推送后台消息',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-background',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '推送后台消息';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "推送后台消息",
        children: "推送后台消息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后台消息用于内容不频繁更新的场景，不会显示通知、播放铃声或改变应用角标。终端设备接收到后台消息后，如果应用进程在前台则将消息内容传给应用；如果应用进程不在前台则缓存消息，等待应用启动后再传给应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(536645)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终端缓存消息默认仅缓存最新的一条消息，最多缓存7天。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送后台消息能力支持Phone、Tablet、PC/2in1。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备。"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(434196)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "后台消息优先级较低，建议每小时不超过2条，否则消息可能会被丢弃。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "后台消息推送会受设备电量状态、系统休眠、用户使用行为等影响，消息可能不会及时下发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(895807)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者希望在应用进程不在前台时，可根据实际情况选择消息缓存的策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者仅需缓存终端侧的最新一条消息，可不执行步骤2~步骤4。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若开发者需缓存终端侧更多消息，可参考开发步骤2~步骤4开发适配端侧数据库并开启数据代理写入，Push Kit将后台消息写入数据库中，当您的应用进程在前台时，需要自行读取数据库中的消息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见指导", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "获取Push Token"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）应用客户端参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkdata/app-data-persistence/data-persistence-by-rdb-store",
            children: "指导"
          }), "新建一个数据库（如", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pushmessage.db"
            })
          }), "），并严格按照如下格式创建一张数据表（如", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "t_push_message"
            })
          }), "）。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "字段类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INTEGER"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "自增主键。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "message_id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "消息id。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "push_type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "场景类型。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "message_action"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INTEGER"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "消息动作。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "message"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "消息内容。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "field1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "扩展字段1。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "field2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "扩展字段2。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "field3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "扩展字段3。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "field4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "扩展字段4。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "field5"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TEXT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "扩展字段5。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "create_time"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INTEGER"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "消息写入数据库的时间戳，单位毫秒（ms）。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）在项目模块级目录的 src/main/resources/base/profile/ 下创建 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PushMessage.json"
            })
          }), " 文件，文件内容如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"path\": \"pushmessage/t_push_message\",\n  \"type\": \"rdb\",\n  \"scope\": \"application\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["path：值为步骤2中创建的数据表路径，格式为 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "[数据库名称]/[数据表名称]"
              })
            }), " （如pushmessage/t_push_message）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["type：固定值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "rdb"
              })
            }), "，表示关系型数据库。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["scope：表示数据库的范围，可填", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "application"
              })
            }), "（应用级）或", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "module"
              })
            }), "（hap模块级）。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）在项目模块级目录的 src/main/module.json5 文件添加", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "proxyData"
            })
          }), " 如下配置："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"proxyData\":[{\n      \"uri\": \"datashareproxy://{bundleName}/PushMessage\",\n      \"requiredWritePermission\": \"ohos.permission.WRITE_PRIVACY_PUSH_DATA\",\n      \"metadata\":{\n        \"name\": \"dataProperties\",\n        \"resource\": \"$profile:PushMessage\"\n      }\n    }]\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["uri：固定格式为 datashareproxy://{bundleName}/PushMessage，请将 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "{bundleName}"
              })
            }), " 替换为您应用的bundleName，PushMessage为固定名称，请勿随意更改。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["requiredWritePermission：固定值为 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ohos.permission.WRITE_PRIVACY_PUSH_DATA"
              })
            }), "，推送服务需要使用该权限往数据库里写入后台消息数据。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["metadata：扩展配置，name固定值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dataProperties"
              })
            }), "，resource固定格式为 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "$profile:文件名称"
              })
            }), "，文件名称固定为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "PushMessage"
              })
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在项目中现有的UIAbility类（以PushMessageAbility为例）的onCreate()中，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
            children: "receiveMessage"
          }), "()方法接收后台消息。注意，您仅能使用UIAbility接收后台消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/abilities/PushMessageAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { pushService, pushCommon } from '@kit.PushKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n/**\n * 此处以PushMessageAbility为例，接收后台消息内容\n */\nexport default class PushMessageAbility extends UIAbility {\n  onCreate(): void {\n    try {\n      pushService.receiveMessage('BACKGROUND', this, (data: pushCommon.PushPayload) => {\n        // process message，并建议对Callback进行try-catch\n        try {\n          hilog.info(0x0000, 'testTag', 'Receive background message');\n        } catch (e) {\n          let errRes: BusinessError = e as BusinessError;\n          hilog.error(0x0000, 'testTag', 'Failed to process data: %{public}d %{public}s', errRes.code, errRes.message);\n        }\n      });\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      hilog.error(0x0000, 'testTag', 'Failed to get background message: %{public}d %{public}s', e.code, e.message);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在项目工程的 src/main/module.json5文件的abilities模块的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "skills"
            })
          }), "标签中配置", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "actions"
            })
          }), "内容为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "action.ohos.push.listener"
            })
          }), "（有且只能有一个ability定义该action，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "若同时添加uris参数，则uris内容需为空"
            })
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"abilities\": [\n  {\n    \"name\": \"PushMessageAbility\",\n    \"srcEntry\": \"./ets/abilities/PushMessageAbility.ets\",\n    \"launchType\": \"singleton\",\n    \"startWindowIcon\": \"$media:startIcon\",\n    \"startWindowBackground\": \"$color:start_window_background\",\n    \"exported\": false,\n    \"skills\": [\n      // 保持现有skill对象不变\n      {\n        \"actions\": [\n          \"com.app.action\"\n        ]\n      },\n      // 新增一个独立的skill对象，配置actions参数\n      {\n        \"actions\": [\n          \"action.ohos.push.listener\"\n        ]\n      }\n    ]\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用服务端调用REST API推送后台消息，消息详情可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro",
            children: "场景化消息API接口功能介绍"
          }), "，请求示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/[projectId]/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type: 6\n\n// Request Body\n{\n  \"payload\": {\n    \"extraData\": \"携带的额外数据\",\n    \"proxyData\": \"ENABLE\"\n  },\n  \"target\": {\n    \"token\": [\"MAMzLg**********lPW\"]\n  }\n}\n"
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
            children: "push-type：6表示后台消息场景。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["token：Push Token，可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-get-token",
              children: "获取Push Token"
            }), "获取。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["extraData：携带的额外数据，字符串类型。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#backgroundpayload-%E5%90%8E%E5%8F%B0%E6%B6%88%E6%81%AF",
              children: "extraData"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["proxyData（选填）：进程不存在时是否开启数据代理静默写入到应用自身缓存，当前只能传全大写\"ENABLE\"开启代理。若您不希望开启代理写入，请不要在消息体中填写此字段。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#backgroundpayload-%E5%90%8E%E5%8F%B0%E6%B6%88%E6%81%AF",
              children: "proxyData"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当设备中的应用进程在前台时会直接拉起应用并将数据传递，您可以在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
            children: "receiveMessage"
          }), "()方法中获取消息数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用进程不在前台且", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#backgroundpayload-%E5%90%8E%E5%8F%B0%E6%B6%88%E6%81%AF",
            children: "proxyData"
          }), "为“ENABLE”时，推送服务将后台消息写入到数据库中，建议您在应用进程在前台时将数据库中数据迁移到您业务数据库中（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "避免数据库大小无限制增长"
            })
          }), "）。当应用进程不在前台且无", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#backgroundpayload-%E5%90%8E%E5%8F%B0%E6%B6%88%E6%81%AF",
            children: "proxyData"
          }), "时则为缓存消息（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "发送多条消息时仅缓存最新的一条"
            })
          }), "），等下次应用进程在前台时调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicegettoken-1",
            children: "getToken"
          }), "()接口，Push Kit将重新发送缓存消息，您可以在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
            children: "receiveMessage"
          }), "()方法获取消息数据。"]
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
895807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
536645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
434196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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