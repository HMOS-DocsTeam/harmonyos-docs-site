"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["364698"], {
4845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_background_task_kit_agent_powered_reminder_agent_powered_reminder_md_953_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-background-task-kit-agent-powered-reminder-agent-powered-reminder-md-953.json
var site_docs_background_task_kit_agent_powered_reminder_agent_powered_reminder_md_953_namespaceObject = JSON.parse('{"id":"background-task-kit/agent-powered-reminder/agent-powered-reminder","title":"代理提醒(ArkTS)","description":"功能介绍","source":"@site/docs/background-task-kit/agent-powered-reminder/agent-powered-reminder.md","sourceDirName":"background-task-kit/agent-powered-reminder","slug":"/background-task-kit/agent-powered-reminder/","permalink":"/harmonyos-docs-site/background-task-kit/agent-powered-reminder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"代理提醒(ArkTS)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agent-powered-reminder","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"延迟任务(ArkTS)","permalink":"/harmonyos-docs-site/background-task-kit/work-scheduler/"},"next":{"title":"Core File Kit简介","permalink":"/harmonyos-docs-site/core-file-kit/core-file-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/background-task-kit/agent-powered-reminder/agent-powered-reminder.md


const frontMatter = {
	title: '代理提醒(ArkTS)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agent-powered-reminder',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '代理提醒(ArkTS)';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "代理提醒开放能力申请",
  "id": "代理提醒开放能力申请",
  "level": 3
}, {
  "value": "申请权限",
  "id": "申请权限",
  "level": 3
}, {
  "value": "请求通知授权",
  "id": "请求通知授权",
  "level": 3
}, {
  "value": "功能开发",
  "id": "功能开发",
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
        id: "代理提醒arkts",
        children: "代理提醒(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用退到后台或进程终止后，仍然有一些提醒用户的定时类通知，为满足此类功能场景，系统提供了代理提醒的能力。当应用退至后台或进程终止后，系统会代理应用做定时提醒。当前支持的提醒类型包括：倒计时、日历和闹钟。为了防止代理提醒被滥用于广告、营销类提醒，影响用户体验，部分设备上代理提醒增加了管控机制，应用无法直接使用代理提醒，管控后的使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "管控限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设备限制"
          })
        }), "：代理提醒适用于手机、平板、PC/2in1、智慧屏、智能穿戴设备。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "管控限制"
          })
        }), "："]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机、平板、PC/2in1设备存在管控，智慧屏、智能穿戴设备无管控限制。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["管控后可通过日历Calendar Kit替代代理提醒，实现相应的提醒功能，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/calendar-kit/calendarmanager-overview",
          children: "开发指南"
        }), "；或者参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BB%A3%E7%90%86%E6%8F%90%E9%86%92%E5%BC%80%E6%94%BE%E8%83%BD%E5%8A%9B%E7%94%B3%E8%AF%B7",
          children: "代理提醒开放能力申请"
        }), "向华为侧申请代理提醒权限，申请通过后会开通权益，即可正常调用代理提醒接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用限制"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["代理提醒仅对如下类型的应用开放申请：工具类、商务类、效率类、金融理财类、教育类、生活服务类、旅游类、医疗类、运动健康类、游戏类应用。若您的应用不在上述类型中，则不符合申请条件。符合上述类型的应用，请在线上申请时一并在附件中提交应用分类截图。应用分类信息可登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站，在“APP”页签中选择“应用上架”->“应用信息”查询。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景限制"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "营销类场景（如电商/红包/优惠券抢购、直播预约等）不支持申请代理提醒权限，以下给出几种常见的开放代理提醒申请的场景示例："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生活类提醒（闹钟提醒、记账提醒、时间/日程提醒、临期提醒、习惯打卡、计时提醒、日历/纪念日提醒、行程提醒）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "运动健康类提醒（运动/训练提醒、经期提醒、喝水提醒、饮食记录提醒、测血糖/吃药提醒、睡眠提醒、疫苗/产检提醒）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "学习类提醒（学习提醒、课程提醒、背单词提醒）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "办公类提醒（排班、办公打卡提醒）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏类提醒（游戏内玩家重要任务预警提醒，包含角色/资产受到损害，游戏任务完成提醒）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(647132)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理提醒需要同时满足应用限制和场景限制。单个应用可能涉及多个场景，例如某个游戏类应用包含直播预约和游戏任务完成提醒两种场景，因为直播预约属于营销类场景，因此不支持申请代理提醒。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "个数限制"
          })
        }), "："]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个普通应用有效/未过期的提醒数量不超过30个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 10开始，所有应用有效/未过期的提醒数量总和不超过12000个。API version 9及之前的版本，有效/未过期的提醒数量总和不超过2000个。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678967)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当到达设置的提醒时间点时，通知中心会弹出相应提醒。若未点击提醒上的关闭/CLOSE按钮，则代理提醒是有效/未过期的；若点击了关闭/CLOSE按钮，则代理提醒过期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当代理提醒是周期性提醒时，如设置每天提醒，无论是否点击关闭/CLOSE按钮，代理提醒都是有效的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "跳转限制"
          })
        }), "：点击提醒通知后跳转的应用必须是申请代理提醒的本应用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当到达设置的提醒时间点后，代理提醒使用Notification Kit发布通知，通知会显示在通知中心，通知样式请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/notification-kit/notification-overview#%E9%80%9A%E7%9F%A5%E6%A0%B7%E5%BC%8F",
          children: "Notification Kit通知样式"
        }), "中的文本类型。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，本能力支持模拟器开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是代理提醒的相关接口，下表均以Promise形式为例，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager",
        children: "后台代理提醒"
      }), "文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 主要接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publishReminder(reminderReq: ReminderRequest): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布后台代理提醒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelReminder(reminderId: number): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消指定id的代理提醒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getValidReminders(): Promise<Array<ReminderRequest>>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取当前应用设置的所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "有效（未过期）的代理提醒"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelAllReminders(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消当前应用设置的所有代理提醒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "addNotificationSlot(slot: NotificationSlot): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加通知渠道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeNotificationSlot(slotType: notification.SlotType): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的通知渠道类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代理提醒开放能力申请",
      children: "代理提醒开放能力申请"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "，选择“开发与服务”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在项目列表中找到您的项目，在项目下的应用列表中选择需要申请代理提醒的应用。如果无对应应用，请先", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
            children: "创建HarmonyOS应用"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入“项目设置”->“开放能力管理”页面，点击“代理提醒”卡片对应的“申请”按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(343729)/* ["default"] */.A) + "",
            width: "1851",
            height: "381"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在“新建业务申请”窗口填写申请原因，上传代理提醒功能场景截图和应用分类信息截图，然后点击“提交”。应用分类信息可登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站，在“APP”页签中选择“应用上架”->“应用信息”查询。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(418783)/* ["default"] */.A) + "",
            width: "877",
            height: "567"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回“开放能力接入”页面，原“申请”按钮变为“申请中”，8个工作日反馈申请结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(64581)/* ["default"] */.A) + "",
            width: "1506",
            height: "116"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请审批通过后，互动中心会发送通知给您，同时“申请中”按钮会变为置灰显示的“申请”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["能力申请通过后，勾选代理提醒的能力开关，点击右上角“保存”。至此，您的应用已成功接入开放能力。此时，调试和发布应用必须重新生成Profile文件并使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing",
            children: "手动签名"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(481037)/* ["default"] */.A) + "",
            width: "1531",
            height: "195"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请ohos.permission.PUBLISH_AGENT_REMINDER权限，配置方式请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求通知授权",
      children: "请求通知授权"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/notification-kit/notification-enable",
        children: "请求通知授权"
      }), "。获得用户授权后，才能使用代理提醒功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能开发",
      children: "功能开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { notificationManager } from '@kit.NotificationKit';\nimport { reminderAgentManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义目标提醒代理。开发者根据实际需要，选择定义如下类型的提醒。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "定义倒计时实例。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let timer: reminderAgentManager.ReminderRequestTimer = {\n  reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_TIMER,  // 提醒类型为倒计时类型\n  ringDuration: Constant.REMINDER_DURATION,\n  title: context.resourceManager.getStringSync($r('app.string.timer').id),  // 指明提醒标题, \"app.string.timer\"资源文件中的value值为\"计时器\"\n  content: context.resourceManager.getStringSync($r('app.string.countdown_close').id),  // 指明提醒内容, \"app.string.countdown_close\"资源文件中的value值为\"计时器已结束\"\n  wantAgent: {  // // 点击提醒通知后跳转的目标UIAbility信息\n    pkgName: 'com.example.reminderagentmanager',\n    abilityName: 'EntryAbility'\n  },\n  notificationId: 100, // 指明提醒使用的通知的ID号，相同ID号的提醒会覆盖\n  slotType: notificationManager.SlotType.CONTENT_INFORMATION,  // 指明提醒的Slot类型\n  triggerTimeInSeconds: this.countdownTime\n};\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "定义日历实例。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let calendar: reminderAgentManager.ReminderRequestCalendar = {\n  reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_CALENDAR,  // 提醒类型为日历类型\n  dateTime: {  // 指明提醒的目标时间\n    year: date.getFullYear(),\n    month: date.getUTCMonth() + 1,\n    day: date.getDate(),\n    hour: date.getHours(),\n    minute: date.getMinutes(),\n  },\n  actionButton:  // 设置弹出的提醒通知信息上显示的按钮类型和标题\n  [{\n    title: context.resourceManager.getStringSync($r('app.string.calendar_close').id),  // \"app.string.calendar_close\"资源文件中的value值为\"关闭日历提醒\"\n    type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_CLOSE\n  }],\n  // 点击提醒通知后跳转的目标UIAbility信息\n  wantAgent: { pkgName: 'com.example.reminderagentmanager', abilityName: 'EntryAbility' },\n  ringDuration: Constant.REMINDER_DURATION,  // 指明响铃时长（单位：秒）\n  title: context.resourceManager.getStringSync($r('app.string.calendar').id),  // 指明提醒标题, \"app.string.calendar\"资源文件中的value值为\"日历\"\n  content: context.resourceManager.getStringSync($r('app.string.calendar_reach').id),  // 指明提醒内容, \"app.string.calendar_reach\"资源文件中的value值为\"日历提醒时间到了\"\n  slotType: notificationManager.SlotType.CONTENT_INFORMATION  // 指明提醒的Slot类型\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "定义闹钟实例。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let alarm: reminderAgentManager.ReminderRequestAlarm = {\n  reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_ALARM,  // 提醒类型为闹钟类型\n  hour: time.hour,  // 指明提醒的目标时刻\n  minute: time.minute,  // 指明提醒的目标分钟\n  actionButton:  // 设置弹出的提醒通知信息上显示的按钮类型和标题\n  [\n    {\n      title: context.resourceManager.getStringSync($r('app.string.alarm_clock_close').id),  // \"app.string.alarm_clock_close\"资源文件中的value值为\"关闭闹钟\"\n      type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_CLOSE\n    },\n    {\n      title: context.resourceManager.getStringSync($r('app.string.alarm_clock_postpone').id),  // \"app.string.alarm_clock_postpone\"资源文件中的value值为\"推迟闹钟\"\n      type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_SNOOZE\n    }\n  ],\n  slotType: notificationManager.SlotType.CONTENT_INFORMATION,  // 指明提醒的Slot类型\n  ringDuration: Constant.REMINDER_DURATION,  // 指明响铃时长（单位：秒）\n  wantAgent: {  // 点击提醒通知后跳转的目标UIAbility信息\n    pkgName: 'com.example.reminderagentmanager',\n    abilityName: 'EntryAbility'\n  },\n  title: context.resourceManager.getStringSync($r('app.string.alarm_clock').id),  // 指明提醒标题, \"app.string.alarm_clock\"资源文件中的value值为\"闹钟\"\n  content: context.resourceManager.getStringSync($r('app.string.alarm_clock_reach').id),  // 指明提醒内容, \"app.string.alarm_clock_reach\"资源文件中的value值为\"闹钟时间已到\"\n  snoozeTimes: 0,  // 指明延迟提醒次数\n  timeInterval: 0,  // 执行延迟提醒间隔（单位：秒）\n  daysOfWeek: []  // 指明每周哪几天需要重复提醒\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布相应的提醒代理。代理发布后，应用即可使用后台代理提醒功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let reminderId: number = await reminderAgentManager.publishReminder(\n  this.calendarReminders[index].reminderRequestCalendar!);\nLogger.info(TAG, `publish reminder result: id is ${reminderId}`);\nthis.calendarReminders[index].reminderId = reminderId;  // 保存发布的提醒ID\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据需要删除提醒任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Logger.info(TAG, `cancel reminder id is ${this.calendarReminders[index].reminderId}`)\nawait reminderAgentManager.cancelReminder(this.calendarReminders[index].reminderId);\n"
          })
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
647132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
481037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438305-71292204e28a51ad384d1bf5e4b60795.png");

},
678967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
343729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958258-a2d18d8eca794a16fa6b8d336fc581da.png");

},
64581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798610-e8c536febe001320940a94e85333c64e.png");

},
418783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478259-0a7d0124d9751c214e927c06c25f5f61.png");

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