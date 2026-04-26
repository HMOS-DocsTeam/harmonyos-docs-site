"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["118437"], {
696294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_calendar_api_calendar_arkts_js_apis_calendarmanager_js_apis_calendarmanager_md_bd3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-calendar-api-calendar-arkts-js-apis-calendarmanager-js-apis-calendarmanager-md-bd3.json
var site_docs_ref_calendar_api_calendar_arkts_js_apis_calendarmanager_js_apis_calendarmanager_md_bd3_namespaceObject = JSON.parse('{"id":"calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager","title":"@ohos.calendarManager (日程管理能力)","description":"本模块提供日历与日程管理能力，包括日历和日程的创建、删除、修改、查询等。","source":"@site/docs-ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager.md","sourceDirName":"calendar-api/calendar-arkts/js-apis-calendarmanager","slug":"/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager","permalink":"/harmonyos-docs-site/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@ohos.calendarManager (日程管理能力)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager","kit":"应用服务","last_updated":"2026-04-22","slug":"js-apis-calendarmanager"},"sidebar":"ref","previous":{"title":"deferredLink (延迟链接能力)","permalink":"/harmonyos-docs-site/ref/app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api"},"next":{"title":"日历服务错误码","permalink":"/harmonyos-docs-site/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager.md


const frontMatter = {
	title: '@ohos.calendarManager (日程管理能力)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'js-apis-calendarmanager'
};
const contentTitle = '@ohos.calendarManager (日程管理能力)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "calendarManager.getCalendarManager",
  "id": "calendarmanagergetcalendarmanager",
  "level": 2
}, {
  "value": "CalendarManager",
  "id": "calendarmanager",
  "level": 2
}, {
  "value": "createCalendar",
  "id": "createcalendar",
  "level": 3
}, {
  "value": "createCalendar",
  "id": "createcalendar-1",
  "level": 3
}, {
  "value": "deleteCalendar",
  "id": "deletecalendar",
  "level": 3
}, {
  "value": "deleteCalendar",
  "id": "deletecalendar-1",
  "level": 3
}, {
  "value": "getCalendar",
  "id": "getcalendar",
  "level": 3
}, {
  "value": "getCalendar",
  "id": "getcalendar-1",
  "level": 3
}, {
  "value": "getCalendar",
  "id": "getcalendar-2",
  "level": 3
}, {
  "value": "getAllCalendars",
  "id": "getallcalendars",
  "level": 3
}, {
  "value": "getAllCalendars",
  "id": "getallcalendars-1",
  "level": 3
}, {
  "value": "editEvent12+",
  "id": "editevent12",
  "level": 3
}, {
  "value": "Calendar",
  "id": "calendar",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "addEvent",
  "id": "addevent",
  "level": 3
}, {
  "value": "addEvent",
  "id": "addevent-1",
  "level": 3
}, {
  "value": "addEvents",
  "id": "addevents",
  "level": 3
}, {
  "value": "addEvents",
  "id": "addevents-1",
  "level": 3
}, {
  "value": "deleteEvent",
  "id": "deleteevent",
  "level": 3
}, {
  "value": "deleteEvent",
  "id": "deleteevent-1",
  "level": 3
}, {
  "value": "deleteEvents",
  "id": "deleteevents",
  "level": 3
}, {
  "value": "deleteEvents",
  "id": "deleteevents-1",
  "level": 3
}, {
  "value": "updateEvent",
  "id": "updateevent",
  "level": 3
}, {
  "value": "updateEvent",
  "id": "updateevent-1",
  "level": 3
}, {
  "value": "getEvents",
  "id": "getevents",
  "level": 3
}, {
  "value": "getEvents",
  "id": "getevents-1",
  "level": 3
}, {
  "value": "getEvents",
  "id": "getevents-2",
  "level": 3
}, {
  "value": "getConfig",
  "id": "getconfig",
  "level": 3
}, {
  "value": "setConfig",
  "id": "setconfig",
  "level": 3
}, {
  "value": "setConfig",
  "id": "setconfig-1",
  "level": 3
}, {
  "value": "getAccount",
  "id": "getaccount",
  "level": 3
}, {
  "value": "queryEventInstances18+",
  "id": "queryeventinstances18",
  "level": 3
}, {
  "value": "CalendarAccount",
  "id": "calendaraccount",
  "level": 2
}, {
  "value": "CalendarConfig",
  "id": "calendarconfig",
  "level": 2
}, {
  "value": "Event",
  "id": "event",
  "level": 2
}, {
  "value": "CalendarType",
  "id": "calendartype",
  "level": 2
}, {
  "value": "Location",
  "id": "location",
  "level": 2
}, {
  "value": "EventFilter",
  "id": "eventfilter",
  "level": 2
}, {
  "value": "filterById",
  "id": "filterbyid",
  "level": 3
}, {
  "value": "filterByTime",
  "id": "filterbytime",
  "level": 3
}, {
  "value": "filterByTitle",
  "id": "filterbytitle",
  "level": 3
}, {
  "value": "EventType",
  "id": "eventtype",
  "level": 2
}, {
  "value": "RecurrenceRule",
  "id": "recurrencerule",
  "level": 2
}, {
  "value": "RecurrenceFrequency",
  "id": "recurrencefrequency",
  "level": 2
}, {
  "value": "Attendee",
  "id": "attendee",
  "level": 2
}, {
  "value": "EventService",
  "id": "eventservice",
  "level": 2
}, {
  "value": "ServiceType",
  "id": "servicetype",
  "level": 2
}, {
  "value": "AttendeeRole12+",
  "id": "attendeerole12",
  "level": 2
}, {
  "value": "AttendeeStatus18+",
  "id": "attendeestatus18",
  "level": 2
}, {
  "value": "AttendeeType18+",
  "id": "attendeetype18",
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
        id: "ohoscalendarmanager-日程管理能力",
        children: "@ohos.calendarManager (日程管理能力)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供日历与日程管理能力，包括日历和日程的创建、删除、修改、查询等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["日历管理器", (0,jsx_runtime.jsx)(_components.a, {
          href: "#calendarmanager",
          children: "CalendarManager"
        }), "用于管理日历", (0,jsx_runtime.jsx)(_components.a, {
          href: "#calendar",
          children: "Calendar"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["日历", (0,jsx_runtime.jsx)(_components.a, {
          href: "#calendar",
          children: "Calendar"
        }), "主要包含账户信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "#calendaraccount",
          children: "CalendarAccount"
        }), "和配置信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "#calendarconfig",
          children: "CalendarConfig"
        }), "。日历Calendar与日程", (0,jsx_runtime.jsx)(_components.a, {
          href: "#event",
          children: "Event"
        }), "属于从属关系，需要先创建日历Calendar对象，然后再通过日历Calendar创建日程Event对象，一个Calendar可以有多个Event，一个Event只属于一个Calendar。日历管理器是对日历的管理，日程过滤器是对日程的管理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(263903)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进行日历或日程的读取时，需要申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进行日历或日程的添加、删除或修改时，需要申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请对应权限之后，支持的相关操作可见下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "申请的权限"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的日历账户操作范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的日程操作范围"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.READ_CALENDAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 读取系统默认日历账户  - 读取当前应用创建的日历账户"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 读取系统默认日历账户下当前应用创建的日程  - 读取当前应用创建的日历账户下当前应用创建的日程"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.WRITE_CALENDAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 添加、删除或修改当前应用创建的日历账户"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 添加、删除或修改系统默认日历账户下当前应用创建的日程  - 添加、删除或修改当前应用创建的日历账户下当前应用创建的日程"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.READ_WHOLE_CALENDAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 读取所有日历账户"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 读取所有应用创建的日程"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.WRITE_WHOLE_CALENDAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 添加、删除或修改所有日历账户"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 添加、删除或修改所有应用创建的日程"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { calendarManager } from '@kit.CalendarKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "calendarmanagergetcalendarmanager",
      children: "calendarManager.getCalendarManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCalendarManager(context: Context): CalendarManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上下文获取CalendarManager对象，用于管理日历。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文Context，Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "Context"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CalendarManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的CalendarManager对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(780718)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例中的mContext的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取上下文mContext\n// 获取日历管理器calendarMgr\n// 该文件为系统生成，目录：entry/src/main/ets/entryability/EntryAbility.ets\n// 文档后续示例代码都需要配置此文件才能正常运行\nimport {\n  abilityAccessCtrl,\n  AbilityConstant,\n  common,\n  PermissionRequestResult,\n  Permissions,\n  UIAbility,\n  Want\n} from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { calendarManager } from '@kit.CalendarKit';\nimport { window } from '@kit.ArkUI';\n\nexport let calendarMgr: calendarManager.CalendarManager | null = null;\nexport let mContext: common.UIAbilityContext | null = null;\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    console.info(\"Ability onCreate\");\n  }\n\n  onDestroy(): void {\n    console.info(\"Ability onDestroy\");\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    console.info(\"Ability onWindowStageCreate\");\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        console.error(`Failed to load the content. Code: ${err.code}, message: ${err.message}`);\n        return;\n      }\n      console.info(`Succeeded in loading the content. Data: ${JSON.stringify(data)}`);\n    });\n    mContext = this.context;\n    const permissions: Permissions[] = ['ohos.permission.READ_CALENDAR', 'ohos.permission.WRITE_CALENDAR'];\n    let atManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(mContext, permissions).then((result: PermissionRequestResult) => {\n      console.info(`get Permission success, result: ${JSON.stringify(result)}`);\n      calendarMgr = calendarManager.getCalendarManager(mContext);\n    }).catch((error: BusinessError) => {\n      console.error(`get Permission error, error. Code: ${error.code}, message: ${error.message}`);\n    })\n  }\n\n  onWindowStageDestroy(): void {\n    // 主窗口已销毁，释放 UI 相关资源\n    console.info(\"Ability onWindowStageDestroy\");\n  }\n\n  onForeground(): void {\n    // Ability 进入前台\n    console.info(\"Ability onForeground\");\n  }\n\n  onBackground(): void {\n    // Ability 进入后台\n    console.info(\"Ability onBackground\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "calendarmanager",
      children: "CalendarManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下列API示例中需先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#calendarmanagergetcalendarmanager",
        children: "getCalendarManager()"
      }), "方法获取CalendarManager对象，再通过此对象调用对应方法，进行Calendar的创建、删除、修改、查询等操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createcalendar",
      children: "createCalendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日历账户信息，创建一个Calendar对象，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calendarAccount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendaraccount",
              children: "CalendarAccount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当创建账户成功时，err为undefined，data为创建成功的Calendar；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nconst calendarAccount: calendarManager.CalendarAccount = {\n  name: 'CreateMyCalendarByCallBack',\n  type: calendarManager.CalendarType.LOCAL\n};\ntry {\n  calendarMgr?.createCalendar(calendarAccount, (err: BusinessError, data: calendarManager.Calendar) => {\n    if (err) {\n      console.error(`Failed to create calendar. Code: ${err.code}, message: ${err.message}`);\n    } else {\n      console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);\n    }\n  });\n} catch (error) {\n  // 检查权限是否已成功申请或者参数是否正确。\n  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createcalendar-1",
      children: "createCalendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日历账户信息，创建一个Calendar对象，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calendarAccount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendaraccount",
              children: "CalendarAccount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的Calendar对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nconst calendarAccount: calendarManager.CalendarAccount = {\n  name: 'CreateMyCalendarByPromise',\n  type: calendarManager.CalendarType.LOCAL,\n  displayName : 'MyApplication'\n};\ncalendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n  console.info(`Succeeded in creating calendar data->${JSON.stringify(data)}`);\n}).catch((error : BusinessError) => {\n  // 检查权限是否已成功申请或者参数是否正确。\n  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deletecalendar",
      children: "deleteCalendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteCalendar(calendar: Calendar, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定Calendar对象，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将删除的Calendar对象。无法删除默认账户。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当删除账户成功时，err为undefined；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nconst calendarAccount: calendarManager.CalendarAccount = {\n  name: 'DeleteMyCalendarByCallBack',\n  type: calendarManager.CalendarType.LOCAL\n};\ncalendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n  console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);\n  calendarMgr?.getCalendar(calendarAccount, (err: BusinessError, data: calendarManager.Calendar) => {\n    if (err) {\n      console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n    } else {\n      console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n      calendarMgr?.deleteCalendar(data, (err1: BusinessError) => {\n        if (err1) {\n          // 检查参数是否正确。\n          console.error(`Failed to delete calendar. Code: ${err1.code}, message: ${err1.message}`);\n        } else {\n          console.info(\"Succeeded in deleting calendar\");\n        }\n      });\n    }\n  });\n}).catch((error: BusinessError) => {\n  // 检查权限是否已成功申请或者参数是否正确。\n  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deletecalendar-1",
      children: "deleteCalendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteCalendar(calendar: Calendar): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定Calendar对象，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将删除的Calendar对象。无法删除默认账户。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nconst calendarAccount: calendarManager.CalendarAccount = {\n  name: 'DeleteMyCalendarByPromise',\n  type: calendarManager.CalendarType.LOCAL\n};\ncalendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n  console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);\n  calendarMgr?.getCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendarMgr?.deleteCalendar(data).then(() => {\n      console.info(\"Succeeded in deleting calendar\");\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to delete calendar. Code: ${err.code}, message: ${err.message}`);\n    });\n  }).catch((err: BusinessError) => {\n    // 检查权限是否已成功申请或者参数是否正确。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  });\n}).catch((error: BusinessError) => {\n  // 检查权限是否已成功申请或者参数是否正确。\n  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcalendar",
      children: "getCalendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCalendar(callback: AsyncCallback<Calendar>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取默认Calendar对象，默认Calendar是日历存储首次运行时创建的，若创建Event时不关注其Calendar归属，则无须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createcalendar",
        children: "createCalendar()"
      }), "创建Calendar，直接使用默认Calendar，使用callback异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当查询账户成功时，err为undefined，data为查询到的Calendar；否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请或者参数是否正确。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcalendar-1",
      children: "getCalendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定Calendar对象，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calendarAccount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendaraccount",
              children: "CalendarAccount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定日历账户信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当查询账户成功时，err为undefined，data为查询到的Calendar；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified account was not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nconst calendarAccount: calendarManager.CalendarAccount = {\n  name: 'MyCalendar',\n  type: calendarManager.CalendarType.LOCAL\n};\ncalendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n  console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);\n  calendarMgr?.getCalendar(calendarAccount, (err: BusinessError, data: calendarManager.Calendar) => {\n    if (err) {\n      console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n      // 检查权限是否已成功申请或者参数是否正确。\n    } else {\n      console.info(`Succeeded in getting calendar data -> ${JSON.stringify(data)}`);\n    }\n  });\n}).catch((error: BusinessError) => {\n  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);\n  // 检查权限是否已成功申请或者参数是否正确。\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcalendar-2",
      children: "getCalendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCalendar(calendarAccount?: CalendarAccount): Promise<Calendar>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认Calendar对象或者指定Calendar对象，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calendarAccount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendaraccount",
              children: "CalendarAccount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定日历账户信息，用来获取指定Calendar对象，不填时，表示获取默认Calendar对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回查询到的Calendar对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified account was not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\ncalendarMgr?.getCalendar().then((data: calendarManager.Calendar) => {\n  console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n}).catch((err: BusinessError) => {\n  // 检查权限是否已成功申请。\n  console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallcalendars",
      children: "getAllCalendars"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllCalendars(callback: AsyncCallback<Calendar[]>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用所有创建的Calendar对象以及默认Calendar对象，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当查询账户成功时，err为undefined，data为查询到的Calendar数组；否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\ncalendarMgr?.getAllCalendars((err: BusinessError, data: calendarManager.Calendar[]) => {\n  if (err) {\n    console.error(`Failed to get all calendars. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting all calendars, data -> ${JSON.stringify(data)}`);\n    data.forEach((calendar) => {\n      const account = calendar.getAccount();\n      console.info(`account -> ${JSON.stringify(account)}`);\n    })\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallcalendars-1",
      children: "getAllCalendars"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllCalendars(): Promise<Calendar[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用所有创建的Calendar对象以及默认Calendar对象，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendar",
              children: "Calendar"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回查询到的Calendar对象数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\ncalendarMgr?.getAllCalendars().then((data: calendarManager.Calendar[]) => {\n  console.info(`Succeeded in getting all calendars, data -> ${JSON.stringify(data)}`);\n  data.forEach((calendar) => {\n    const account = calendar.getAccount();\n    console.info(`account -> ${JSON.stringify(account)}`);\n  })\n}).catch((err: BusinessError) => {\n  // 检查权限是否已成功申请。\n  console.error(`Failed to get all calendars. Code: ${err.code}, message: ${err.message}`);\n  \n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editevent12",
      children: "editEvent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "editEvent(event: Event): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过跳转到日程创建页面创建单个日程，入参Event不填日程id，使用Promise异步回调。使用该接口创建的日程，系统日历可以进行查询和修改，申请到READ_WHOLE_CALENDAR权限的三方应用可以查询，申请到WRITE_WHOLE_CALENDAR权限的三方应用可以修改。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回日程的id，日程id是日程的唯一标识符，是数据库的自增主键。创建失败时没有返回值；当返回值小于0时代表用户取消创建；当返回值大于0时代表日程创建成功；没有等于0的情况。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nconst date = new Date();\nconst event: calendarManager.Event = {\n  title: 'title',\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.editEvent(event).then((eventId: number): void => {\n  console.info(`create Event id = ${eventId}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "calendar",
      children: "Calendar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下列API示例中需先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createcalendar",
        children: "createCalendar()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getcalendar",
        children: "getCalendar()"
      }), "中任一方法获取Calendar对象，再通过此对象调用对应方法，对该Calendar下的日程进行创建、删除、修改、查询等操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户id，日历账户id是日历账户的唯一标识符，是数据库的自增主键，小于0代表日历账户创建失败，大于0代表日历账户创建成功，没有等于0的情况。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addevent",
      children: "addEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addEvent(event: Event, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建日程，入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "#event",
        children: "Event"
      }), "不填日程id、instanceStartTime和instanceEndTime，使用callback异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当添加日程成功时，err为undefined，data为日程id；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst event: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar().then((data: calendarManager.Calendar) => {\n  console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n  calendar = data;\n  calendar.addEvent(event, (err: BusinessError, data: number): void => {\n    if (err) {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to addEvent. Code: ${err.code}, message: ${err.message}`);\n    } else {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }\n  });\n}).catch((err: BusinessError) => {\n  // 检查权限是否已成功申请。\n  console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addevent-1",
      children: "addEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addEvent(event: Event): Promise<number>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建日程，入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "#event",
        children: "Event"
      }), "不填日程id、instanceStartTime和instanceEndTime，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回日程的id，id大于0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst event: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    calendar.addEvent(event).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to addEvent. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addevents",
      children: "addEvents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addEvents(events: Event[], callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["批量创建日程，入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "#event",
        children: "Event"
      }), "不填日程id、instanceStartTime和instanceEndTime，使用callback异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event对象数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当添加日程成功时，err为undefined；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst events: calendarManager.Event[] = [\n  {\n    type: calendarManager.EventType.NORMAL,\n    startTime: date.getTime(),\n    endTime: date.getTime() + 60 * 60 * 1000\n  },\n  {\n    type: calendarManager.EventType.NORMAL,\n    startTime: date.getTime(),\n    endTime: date.getTime() + 60 * 60 * 1000\n  }\n];\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    calendar.addEvents(events, (err: BusinessError) => {\n      if (err) {\n        // 检查权限是否已成功申请或者参数是否正确。\n        console.error(`Failed to add events. Code: ${err.code}, message: ${err.message}`);\n      } else {\n        console.info(\"Succeeded in adding events\");\n      }\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addevents-1",
      children: "addEvents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addEvents(events: Event[]): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["批量创建日程，入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "#event",
        children: "Event"
      }), "不填日程id、instanceStartTime和instanceEndTime，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.WRITE_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event对象数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst events: calendarManager.Event[] = [\n  {\n    type: calendarManager.EventType.NORMAL,\n    startTime: date.getTime(),\n    endTime: date.getTime() + 60 * 60 * 1000\n  },\n  {\n    type: calendarManager.EventType.NORMAL,\n    startTime: date.getTime(),\n    endTime: date.getTime() + 60 * 60 * 1000\n  }\n];\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    calendar.addEvents(events).then(() => {\n      console.info(\"Succeeded in adding events\");\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteevent",
      children: "deleteEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteEvent(id: number, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定id的日程，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程id，传入的日程id为整数，表示已创建日程的id，是日程的唯一标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当删除日程成功时，err为undefined；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nlet id: number = 0;\nconst date = new Date();\nconst event: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    calendar.addEvent(event).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id = data;\n      calendar?.deleteEvent(id, (err: BusinessError) => {\n        if (err) {\n          // 检查参数是否正确。\n          console.error(`Failed to delete event. Code: ${err.code}, message: ${err.message}`);\n        } else {\n          console.info(`Succeeded in deleting event`);\n        }\n      });\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteevent-1",
      children: "deleteEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteEvent(id: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定id的日程，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程id。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nlet id: number = 0;\nconst date = new Date();\nconst event: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar data->${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id = data;\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    calendar.deleteEvent(id).then(() => {\n      console.info(\"Succeeded in deleting event\");\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to delete event. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteevents",
      children: "deleteEvents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteEvents(ids: number[], callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日程id，批量删除日程，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程id数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当删除多个日程成功时，err为undefined；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nlet id1: number = 0;\nlet id2: number = 0;\nconst date = new Date();\nconst event1: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\nconst event2: calendarManager.Event = {\n  type: calendarManager.EventType.IMPORTANT,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event1).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id1 = data;\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    await calendar.addEvent(event2).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id2 = data;\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    calendar.deleteEvents([id1, id2], (err: BusinessError) => {\n      if (err) {\n        // 检查参数是否正确。\n        console.error(`Failed to delete events. Code: ${err.code}, message: ${err.message}`);\n      } else {\n        console.info(\"Succeeded in deleting events\");\n      }\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteevents-1",
      children: "deleteEvents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteEvents(ids: number[]): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日程id，批量删除日程，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程id数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nlet id1: number = 0;\nlet id2: number = 0;\nconst date = new Date();\nconst event1: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\nconst event2: calendarManager.Event = {\n  type: calendarManager.EventType.IMPORTANT,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event1).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id1 = data;\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    await calendar.addEvent(event2).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id2 = data;\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    calendar.deleteEvents([id1, id2]).then(() => {\n      console.info(\"Succeeded in deleting events\");\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to delete events. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updateevent",
      children: "updateEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateEvent(event: Event, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更新日程，入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "#event",
        children: "Event"
      }), "需要填写被修改日程的id，使用callback异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当更新日程成功时，err为undefined；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst oriEvent: calendarManager.Event = {\n  title: 'update',\n  type: calendarManager.EventType.NORMAL,\n  description: 'updateEventTest',\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(oriEvent).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      oriEvent.id = data;\n      oriEvent.title = 'newUpdate';\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    calendar.updateEvent(oriEvent, (err: BusinessError) => {\n      if (err) {\n        // 检查参数是否正确。\n        console.error(`Failed to update event. Code: ${err.code}, message: ${err.message}`);\n      } else {\n        console.info(\"Succeeded in updating event\");\n      }\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updateevent-1",
      children: "updateEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateEvent(event: Event): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更新日程，入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "#event",
        children: "Event"
      }), "需要填写被修改日程的id，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst oriEvent: calendarManager.Event = {\n  title: 'update',\n  type: calendarManager.EventType.NORMAL,\n  description: 'updateEventTest',\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(oriEvent).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      oriEvent.id = data;\n      oriEvent.title = 'newUpdate';\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    calendar.updateEvent(oriEvent).then(() => {\n      console.info(`Succeeded in updating event`);\n    }).catch((err: BusinessError) => {\n      // 参数是否正确。\n      console.error(`Failed to update event. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getevents",
      children: "getEvents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEvents(callback: AsyncCallback<Event[]>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前日历下所有日程，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 20之前，默认查询字段包括id、type、title、startTime、endTime、isAllDay、description、timeZone、location、service、attendee、reminderTime。从API version 20开始，默认查询字段包括id、type、title、startTime、endTime、isAllDay、description、timeZone、location、service、attendee、reminderTime、identifier。若查询字段为空，则不返回该字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当查询日程成功时，err为undefined，data为查询到的Event数组；否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    calendar.getEvents((err: BusinessError, data: calendarManager.Event[]) => {\n      if (err) {\n        console.error(`Failed to get events. Code: ${err.code}, message: ${err.message}`);\n      } else {\n        console.info(`Succeeded in getting events, data -> ${JSON.stringify(data)}`);\n      }\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getevents-1",
      children: "getEvents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>):void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Calendar下符合查询条件的Event，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventfilter",
              children: "EventFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventKey"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(keyof ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), ")[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当查询日程成功时，err为undefined，data为查询到的Event数组；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nlet id1: number = 0;\nlet id2: number = 0;\nconst date = new Date();\nconst event1: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\nconst event2: calendarManager.Event = {\n  type: calendarManager.EventType.IMPORTANT,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event1).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    await calendar.addEvent(event2).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    const filter = calendarManager.EventFilter.filterById([id1, id2]);\n    calendar.getEvents(filter, ['title', 'type', 'startTime', 'endTime'], (err: BusinessError, data: calendarManager.Event[]) => {\n      if (err) {\n        // 检查参数是否正确。\n        console.error(`Failed to get events. Code: ${err.code}, message: ${err.message}`);\n      } else {\n        console.info(`Succeeded in getting events, data -> ${JSON.stringify(data)}`);\n      }\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getevents-2",
      children: "getEvents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Calendar下符合查询条件的Event，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只有一个入参时，参数必须为查询条件，对应参数类型为EventFilter。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当没有入参时，可查询指定日历账户下的所有日程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventfilter",
              children: "EventFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventKey"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(keyof ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), ")[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询字段。API version 20之前，不填时默认查询字段包括id、type、title、startTime、endTime、isAllDay、description、timeZone、location、service、attendee、reminderTime；从API version 20开始，不填时默认查询字段包括id、type、title、startTime、endTime、isAllDay、description、timeZone、location、service、attendee、reminderTime、identifier。若查询字段为空，则不返回该字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回的是Event对象数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst event: calendarManager.Event = {\n  title: 'MyEvent',\n  type: calendarManager.EventType.IMPORTANT,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    // 根据MyEvent进行模糊查询，如果存在类似标题为MyEvent1类型的日程，也可查询出来\n    const filter = calendarManager.EventFilter.filterByTitle('MyEvent');\n    calendar.getEvents(filter).then((data: calendarManager.Event[]) => {\n      console.info(`Succeeded in getting events, data -> ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to get events. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getconfig",
      children: "getConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getConfig(): CalendarConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取日历配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendarconfig",
              children: "CalendarConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    const config = calendar.getConfig();\n    console.info(`Succeeded in getting config, config -> ${JSON.stringify(config)}`);\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setconfig",
      children: "setConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setConfig(config: CalendarConfig, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置日历配置信息，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendarconfig",
              children: "CalendarConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当设置Config成功时，err为undefined；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter value error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst config: calendarManager.CalendarConfig = {\n  enableReminder: true,\n  color: '#aabbcc'\n};\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    calendar.setConfig(config, (err: BusinessError) => {\n      if (err) {\n        // 检查权限是否已成功申请或者参数是否正确。\n        console.error(`Failed to set config. Code: ${err.code}, message: ${err.message}`);\n      } else {\n        console.info(`Succeeded in setting config, config -> ${JSON.stringify(config)}`);\n      }\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setconfig-1",
      children: "setConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setConfig(config: CalendarConfig): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置日历配置信息，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendarconfig",
              children: "CalendarConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter value error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst config: calendarManager.CalendarConfig = {\n  enableReminder: true,\n  color: '#aabbcc'\n};\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    calendar.setConfig(config).then(() => {\n      console.info(`Succeeded in setting config, data->${JSON.stringify(config)}`);\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to set config. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getaccount",
      children: "getAccount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAccount(): CalendarAccount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取日历账户信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendaraccount",
              children: "CalendarAccount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\ncalendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    const account = calendar.getAccount();\n    console.info(`succeeded in getting account, account -> ${JSON.stringify(account)}`);\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queryeventinstances18",
      children: "queryEventInstances18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Calendar下符合查询条件的日程实例，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： API version 21之前，使用此接口需申请ohos.permission.READ_CALENDAR权限；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，使用此接口需申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程开始时间，类型为13位时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程结束时间，类型为13位时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要查询的日程id数组，可为空数组或undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventKey"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(keyof ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), ")[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有查询日程的字段。不填时，默认查询字段为：id、title、startTime、endTime、instanceStartTime、instanceEndTime、isAllDay、description、timeZone、location、service。若查询字段为空，则不返回该字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#event",
              children: "Event"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回的是Event对象数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts-errorcode/errorcode-calendarmanager/errorcode-calendarmanager",
        children: "日历服务错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal program errors. Possible causes: 1. dataShare database execution error; 2. null pointer error; 3. Data parsing error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst date = new Date();\nconst event: calendarManager.Event = {\n  title: 'MyEvent',\n  type: calendarManager.EventType.IMPORTANT,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    calendar?.queryEventInstances(date.getTime(), date.getTime() + 60 * 60 * 1000, undefined,\n      [\"title\", \"startTime\", \"endTime\", \"instanceStartTime\", \"instanceEndTime\",]).then((data: calendarManager.Event[]) => {\n      console.info(`Succeeded in getting event instances, data -> ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to get event instances. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "calendaraccount",
      children: "CalendarAccount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日历账户信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "账户名称（面向开发者），长度限制为[0,5000]字符，长度超限制可能会导致创建账户失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calendartype",
              children: "CalendarType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "账户类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "账户显示在日历应用上的名称（面向用户）。不填时，默认为空字符串，长度限制为[0,64]字符，长度超限制会导致日历应用上账户名显示不全，被截断。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "calendarconfig",
      children: "CalendarConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日历配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableReminder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否打开Calendar下所有Event提醒能力。当取值为true时，该Calendar下所有Event具备提醒能力；当取值为false时，不具备提醒能力，默认具备提醒能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event",
      children: "Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程对象，包含日程标题、开始时间、结束时间等信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程id。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addevent",
              children: "addEvent()"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addevents",
              children: "addEvents()"
            }), "创建日程时，不填写此参数；当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deleteevent",
              children: "deleteEvent()"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deleteevents",
              children: "deleteEvents()"
            }), "删除日程时，日程id数组，日程id需为整数，传入其他非法入参会报错。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventtype",
              children: "EventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程标题。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败，不填时，默认为空字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#location",
              children: "Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程地点。不填时，默认为undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程开始时间，需要13位时间戳。全天日程时，该字段转换为传入日期00:00对应的时间戳。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程结束时间，需要13位时间戳。全天日程时，该字段转换为传入日期24:00对应的时间戳。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isAllDay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否为全天日程。当取值为true时，说明为全天日程；当取值为false时，说明不是全天日程，默认为非全天日程。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attendee"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#attendee",
              children: "Attendee"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["会议日程参与者。不填时，默认为null。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeZone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程时区。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败，不填或异常值时，默认为当前所在时区，当需要创建与当前不一样的时区时，可填入对应的时区。可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-date-time/js-apis-date-time#systemdatetimegettimezone",
              children: "systemDateTime.getTimezone()"
            }), "获取当前系统时区。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程提醒时间，单位为分钟。填写x分钟，即距开始时间提前x分钟提醒，不填时，默认为不提醒。为负值时表示延期多长时间提醒。全天日程时此字段表示上午9:00前x分钟提醒，可取负值，负值表示上午9:00后多长时间提醒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recurrenceRule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#recurrencerule",
              children: "RecurrenceRule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程重复规则，设置了此字段的日程为重复日程。不填时，默认为非重复日程。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程描述。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败，不填时，默认为空字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventservice",
              children: "EventService"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程服务。不填时，默认没有一键服务。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "identifier12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["写入方可指定日程唯一标识。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败，不填时，默认为null。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isLunar12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否为农历日程。当取值为true时，说明为农历日程；当取值为false时，说明不是农历日程，默认为非农历日程。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "instanceStartTime18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程实例开始时间，需要13位时间戳。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addevent",
              children: "addEvent()"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addevents",
              children: "addEvents()"
            }), "创建日程时，不填写此参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "instanceEndTime18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程实例结束时间，需要13位时间戳。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addevent",
              children: "addEvent()"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addevents",
              children: "addEvents()"
            }), "创建日程时，不填写此参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "calendartype",
      children: "CalendarType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "账户类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'local'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地账户。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMAIL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'email'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "邮箱账户。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BIRTHDAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'birthday'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生日账户。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CALDAV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'caldav'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持CalDAV协议账户。CalDAV是一种基于WebDAV的互联网开放协议，用于在多设备间同步、共享和管理日历、事件和任务数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'subscribed'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅账户。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "location",
      children: "Location"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程地点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点位置。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败，不填时，默认为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "longitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点经度。取值范围[-180, 180]，默认为undefined。超过取值范围地图将无法正常显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "latitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点纬度。取值范围[-90, 90]，默认为undefined。超过取值范围地图将无法正常显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eventfilter",
      children: "EventFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程过滤器，查询日程时进行筛选过滤，获取符合条件的日程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filterbyid",
        children: "filterById()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filterbytime",
        children: "filterByTime()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filterbytitle",
        children: "filterByTitle()"
      }), "任一方法获取日程过滤器，传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getevents",
        children: "getEvents()"
      }), "过滤。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filterbyid",
      children: "filterById"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static filterById(ids: number[]): EventFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日程id过滤日程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程id数组，日程id需为整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventfilter",
              children: "EventFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回日程过滤器对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nlet id1: number = 0;\nlet id2: number = 0;\nconst date = new Date();\nconst event1: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\nconst event2: calendarManager.Event = {\n  type: calendarManager.EventType.IMPORTANT,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event1).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id1 = data;\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    await calendar.addEvent(event2).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n      id2 = data;\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    const filter = calendarManager.EventFilter.filterById([id1, id2]);\n    calendar.getEvents(filter).then((data: calendarManager.Event[]) => {\n      console.info(`Succeeded in getting events filter by id, data -> ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to filter by id. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filterbytime",
      children: "filterByTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static filterByTime(start: number, end: number): EventFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日程时间过滤日程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间。格式为13位时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间。格式为13位时间戳。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventfilter",
              children: "EventFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回日程过滤器对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst event1: calendarManager.Event = {\n  type: calendarManager.EventType.NORMAL,\n  startTime: 1686931200000,\n  endTime: 1687017600000\n};\nconst event2: calendarManager.Event = {\n  type: calendarManager.EventType.IMPORTANT,\n  startTime: 1686931200000,\n  endTime: 1687017600000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event1).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n      // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    await calendar.addEvent(event2).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    const filter = calendarManager.EventFilter.filterByTime(1686931200000, 1687017600000);\n    calendar.getEvents(filter).then((data: calendarManager.Event[]) => {\n      console.info(`Succeeded in getting events filter by time, data -> ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to filter by time. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filterbytitle",
      children: "filterByTitle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static filterByTitle(title: string): EventFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日程标题过滤日程，该条件为模糊匹配。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Applications.CalendarData"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventfilter",
              children: "EventFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回日程过滤器对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet calendar : calendarManager.Calendar | undefined = undefined;\nconst event: calendarManager.Event = {\n  title: 'MyEvent',\n  type: calendarManager.EventType.NORMAL,\n  startTime: 1686931200000,\n  endTime: 1687017600000\n};\ncalendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {\n  if (err) {\n    // 检查权限是否已成功申请。\n    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n    calendar = data;\n    await calendar.addEvent(event).then((data: number) => {\n      console.info(`Succeeded in adding event, id -> ${data}`);\n    }).catch((err: BusinessError) => {\n       // 检查权限是否已成功申请或者参数是否正确。\n      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);\n    });\n    const filter = calendarManager.EventFilter.filterByTitle('MyEvent');\n    calendar.getEvents(filter).then((data: calendarManager.Event[]) => {\n      console.info(`Succeeded in getting events filter by title, data -> ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      // 检查参数是否正确。\n      console.error(`Failed to filter by title. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eventtype",
      children: "EventType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通日程，例如会议，闹钟等日常提醒的日程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMPORTANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重要日程，例如结婚纪念日等具有重要意义的日期，不推荐三方开发者使用，重要日程类型不支持一键服务跳转功能及无法自定义提醒时间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recurrencerule",
      children: "RecurrenceRule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复日程重复规则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recurrenceFrequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#recurrencefrequency",
              children: "RecurrenceFrequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日程重复规则类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重复周期截止日。格式为13位时间戳，不填时则日程无截止日期。  当expire与count和interval同时设置时，以先到达的限制条件及效果为准。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重复日程的重复次数，取值为非负整数，浮点数输入将向下取整，不填时默认为0，表示不会限定重复次数，会一直重复。取值为负时，效果等同于取值为0。  当count与interval和expire同时设置时，以先到达的限制条件及效果为准。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "interval12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重复日程的重复周期，取值为非负整数，浮点数输入将向下取整。  不填时默认为0，当取值为0、1或负值时，表示日程每天/周/月/年重复一次。  当interval与count和expire同时设置时，以先到达的限制条件及效果为准。  此属性与recurrenceFrequency重复规则相关，不同的重复规则下，表示的重复周期不同，以interval取2为例，分为以下几种情况：  每天重复时：表示日程每两天重复一次。  每周重复时：表示日程每两周重复一次。  每月重复时：表示日程每两月重复一次。  每年重复时：表示日程每两年重复一次。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludedDates12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重复日程的排除日期，参数取值为时间戳格式，不填时，默认为空，表示没有排除的日期，0或负数为无效值，与空值效果相同。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "daysOfWeek12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照一周第几天重复。不填时，默认为空，表示没有一周第几天重复的规则。范围为[1, 7]，对应周一到周日，其他值为无效值，与空值效果相同。该字段数组与其相关字段数组为一一对应关系，如weeksOfMonth为[1, 2, 3]，daysOfWeek为[1, 2, 3]，则表示按照每月的第一周的周一，第二周的周二，第三周的周三进行重复。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "daysOfMonth12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照一个月第几天重复。不填时，默认为空，表示没有一个月第几天重复的规则。范围为[1, 31]，[1, 31]对应1到31号，其他值为无效值，与空值效果相同。若当月没有29号、30号或31号，则29、30、31也为无效值。该字段数组与其相关字段数组为一一对应关系，如monthsOfYear为[1, 2, 3]，daysOfMonth为[1, 2, 3]，则表示按照一月一号，二月二号，三月三号进行重复。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "daysOfYear12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照一年第几天重复。不填时，默认为空，表示没有一年第几天重复的规则。范围为[1, 366]，[1, 366]表示一年的1到366天，其他值为无效值，与空值效果相同。若当年没有366天，366也为无效值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weeksOfMonth12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照一个月第几周重复。不填时，默认为空，表示没有一个月第几周重复的规则。范围为[1, 5]，[1, 5]为每月的第1到第5周，其他值为无效值，与空值效果相同。若当月没有第五周，5也为无效值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weeksOfYear12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照一年中第几周重复。不填时，默认为空，表示没有一年第几周重复的规则。范围为[1, 53]，[1, 53]为每年的第1到第53周，其他值为无效值，与空值效果相同。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "monthsOfYear12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照一年中第几个月重复。不填时，默认为空，表示没有一年第几个月重复的规则。范围为[1, 12]，[1, 12]为每年的1到12月，其他值为无效值，与空值效果相同。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recurrencefrequency",
      children: "RecurrenceFrequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程重复规则类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YEARLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每年重复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MONTHLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每月重复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEEKLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每周重复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAILY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每天重复。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendee",
      children: "Attendee"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会议日程参与者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["会议日程参与者的姓名。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["会议日程参与者的邮箱，邮箱格式为“用户名@域名.后缀”，用户名部分只能包含字母、数字、下划线“_”、点 “.”、连字符 “-”。不能以点 “.” 开头或结尾。 不能连续出现两个点（即“..”）。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "role12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#attendeerole12",
              children: "AttendeeRole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["会议日程参与者的角色，不填时默认为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#attendeestatus18",
              children: "AttendeeStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["会议日程参与者的状态，不填时默认为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#attendeetype18",
              children: "AttendeeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["会议日程参与者的类型，不填时默认为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eventservice",
      children: "EventService"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#servicetype",
              children: "ServiceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务的uri，格式为DeepLink类型。可以跳转到三方应用相应界面。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务辅助描述。长度限制为[0,5000]字符，长度超限制可能会导致日程创建失败，不填时，默认为空字符串。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "servicetype",
      children: "ServiceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程服务类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEETING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Meeting'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键入会。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WATCHING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Watching'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键追剧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPAYMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Repayment'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键还款。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Live'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键直播。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOPPING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Shopping'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键购物。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Trip'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键查看。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLASS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Class'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键上课。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_EVENTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'SportsEvents'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键看赛事。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPORTS_EXERCISE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'SportsExercise'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一键运动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendeerole12",
      children: "AttendeeRole12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会议日程参与者角色类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'organizer'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议组织者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PARTICIPANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'participant'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议参与者。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendeestatus18",
      children: "AttendeeStatus18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会议日程参与者状态类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参与者状态未知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TENTATIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参与者状态暂定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCEPTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参与者已接受。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DECLINED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参与者已拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNRESPONSIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参与者未响应。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendeetype18",
      children: "AttendeeType18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会议日程参与者受邀类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.CalendarData"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议日程主送者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPTIONAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议日程抄送者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RESOURCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议中使用的资源（电视或投影仪等）。"
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
263903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
780718(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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