"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["575351"], {
811720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_calendar_kit_calendarmanager_event_developer_calendarmanager_event_developer_md_7ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-calendar-kit-calendarmanager-event-developer-calendarmanager-event-developer-md-7ca.json
var site_docs_calendar_kit_calendarmanager_event_developer_calendarmanager_event_developer_md_7ca_namespaceObject = JSON.parse('{"id":"calendar-kit/calendarmanager-event-developer/calendarmanager-event-developer","title":"日程管理","description":"日程指特定的事件或者活动安排，日程管理即对这些事件、活动进行规划和控制，能更有效地利用相关资源、提高生产力和效率，使人们更好地管理时间和任务。","source":"@site/docs/calendar-kit/calendarmanager-event-developer/calendarmanager-event-developer.md","sourceDirName":"calendar-kit/calendarmanager-event-developer","slug":"/calendar-kit/calendarmanager-event-developer/","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-event-developer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"日程管理","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-event-developer","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"日历账户管理","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-calendar-developer/"},"next":{"title":"注册并管理一键服务日程","permalink":"/harmonyos-docs-site/calendar-kit/calendar-service/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/calendar-kit/calendarmanager-event-developer/calendarmanager-event-developer.md


const frontMatter = {
	title: '日程管理',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-event-developer',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '日程管理';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "日程管理",
        children: "日程管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程指特定的事件或者活动安排，日程管理即对这些事件、活动进行规划和控制，能更有效地利用相关资源、提高生产力和效率，使人们更好地管理时间和任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Calendar Kit中的日程", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#event",
        children: "Event"
      }), "归属于某个对应的日历账户", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#calendar",
        children: "Calendar"
      }), "，一个日历账户下可以有多个日程，一个日程只属于一个Calendar。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取到日历账户对象之后，即可对该账户下的日程进行管理，包括日程的创建、删除、修改、查询等操作。在创建、修改日程时，支持对日程的标题、开始时间、结束时间、日程类型、日程地点、日程提醒时间、日程重复规则等相关信息进行设置，以便进行更丰富更有效的日程管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是日程管理的相关接口，更多详细接口及使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager",
        children: "@ohos.calendarManager"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCalendarManager(context: Context): CalendarManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据上下文获取CalendarManager对象，用于管理日历。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据日历账户信息，创建一个Calendar对象，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "addEvent(event: Event): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建日程，入参Event不填日程id，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "editEvent(event: Event): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过跳转到日程创建界面创建单个日程，入参Event不填日程id，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteEvent(id: number): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定日程id的日程，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateEvent(event: Event): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新日程，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Calendar下符合查询条件的Event，使用Promise异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, AbilityConstant, common, PermissionRequestResult, Permissions, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { calendarManager } from '@kit.CalendarKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请权限。使用Calendar Kit时，需要在module.json5中声明申请读写日历日程所需的权限：ohos.permission.READ_CALENDAR和ohos.permission.WRITE_CALENDAR。具体指导可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据上下文获取日程管理器对象calendarMgr，用于对日历账户进行相关管理操作。推荐在EntryAbility.ets文件中进行操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const DOMAIN = 0x0000;\n\nexport let calendarMgr: calendarManager.CalendarManager | null = null;\n\nexport let mContext: common.UIAbilityContext | null = null;\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', \"Ability onCreate\");\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', \"Ability onDestroy\");\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN, 'testTag', '%{public}s', \"Ability onWindowStageCreate\");\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n    });\n    mContext = this.context;\n    const permissions: Permissions[] = ['ohos.permission.READ_CALENDAR', 'ohos.permission.WRITE_CALENDAR'];\n    let atManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(mContext, permissions).then((result: PermissionRequestResult) => {\n      hilog.info(DOMAIN, 'testTag', 'get Permission success');\n      calendarMgr = calendarManager.getCalendarManager(mContext);\n    }).catch((error: BusinessError) => {\n      hilog.error(DOMAIN, 'testTag', 'get Permission error, Cause: %{public}s', JSON.stringify(error));\n    })\n  }\n\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(DOMAIN, 'testTag', '%{public}s', \"Ability onWindowStageDestroy\");\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(DOMAIN, 'testTag', '%{public}s', \"Ability onForeground\");\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(DOMAIN, 'testTag', '%{public}s', \"Ability onBackground\");\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据日历账户信息创建Calendar对象，用于进行日程管理。设置日历配置信息，可以根据需要打开日程提醒、设置日历账户颜色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nlet calendar: calendarManager.Calendar | undefined = undefined;\n// 指定日历账户信息\nconst calendarAccount: calendarManager.CalendarAccount = {\n  name: 'MyCalendar',\n  type: calendarManager.CalendarType.LOCAL,\n  // 日历账户显示名称，该字段如果不填，创建的日历账户在界面显示为空字符串。\n  displayName: 'MyCalendar'\n};\n// 日历配置信息\nconst config: calendarManager.CalendarConfig = {\n  // 打开日程提醒\n  enableReminder: true,\n  // 设置日历账户颜色\n  color: '#aabbcc'\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建日历账户\ncalendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n  hilog.info(DOMAIN, 'testTag', `Succeeded in creating calendar data->${JSON.stringify(data)}`);\n  calendar = data;\n  // 请确保日历账户创建成功后，再进行相关日程的管理\n\n  // 设置日历配置信息，打开日程提醒、设置日历账户颜色\n  calendar.setConfig(config).then(() => {\n    hilog.info(DOMAIN, 'testTag', `Succeeded in setting config, data->${JSON.stringify(config)}`);\n  }).catch((err: BusinessError) => {\n    hilog.error(DOMAIN, 'testTag', `Failed to set config. Code: ${err.code}, message: ${err.message}`);\n  });\n  // ...\n}).catch((error: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to create calendar. Code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前日历账户下添加日历日程，注意入参中不需要填写日程id。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建日程时，支持设置日程的标题、开始时间、结束时间、日程类型、日程地点、日程提醒时间、日程重复规则等相关信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日程创建成功后会返回一个日程id，作为日程的唯一标识，后续可按照日程id进行指定日程的更新或删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前支持以下两种方式来创建日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一：可以在日历账户下通过addEvent()或addEvents()接口创建日程。其中可使用addEvent()接口创建单个日程，也可以使用addEvents()接口批量创建日程，此处以创建单个日程为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：在获取到日历管理器对象后，可通过editEvent()接口创建单个日程。调用此接口创建日程时，会跳转到日程创建页面，在日程创建页面进行相关操作完成日程的创建, editEvent()不支持自定义周期性日程创建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let eventId : number | undefined = undefined;\nconst date = new Date();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const event: calendarManager.Event = {\n  // 日程标题\n  title: 'title',\n  // 日程类型，不推荐三方开发者使用calendarManager.EventType.IMPORTANT，重要日程类型不支持一键服务跳转功能及无法自定义提醒时间\n  type: calendarManager.EventType.NORMAL,\n  // 日程开始时间\n  startTime: date.getTime(),\n  // 日程结束时间\n  endTime: date.getTime() + 60 * 60 * 1000,\n  // 距开始时间提前10分钟提醒\n  reminderTime: [10],\n  // 日程重复规则，可选属性。如果日程为周期性日程需要填写该属性。\n  recurrenceRule: {\n    // 日程重复规则类型，支持按天、按周、按月、按年重复\n    recurrenceFrequency: calendarManager.RecurrenceFrequency.DAILY,\n    // 日程重复次数，该字段和expire属性只需要填写一个，如果两个都填写按照count属性计算。\n    count: 100,\n    // 重复日程间隔时间，与recurrenceFrequency相关，此示例表示日程每隔2天进行重复。\n    interval: 2,\n    // 日程过期时间，该字段和count属性只需要填写一个，如果两个都填写按照count属性计算。\n    expire: date.getTime() + 60 * 60 * 1000 * 3,\n    // 日程排除日期，将该日期从重复日程中排除掉\n    excludedDates: [date.getTime() + 60 * 60 * 1000 * 2]\n  },\n  // 日程服务，可选字段，需要一键服务功能的日程，填写该属性。\n  service: {\n    // 服务类型，比如一键查看、一键入会、一键追剧等。\n    type: calendarManager.ServiceType.TRIP,\n    // 服务的uri。可以跳转到三方应用相应界面，格式为DeepLink。使用DeepLink方式需要在华为HAG云侧进行注册，注册提供的信息为应用包名、应用的服务类型。\n    // DeepLink包括scheme、host、path以及参数（不包含参数值）\n    uri: 'xxx://xxx.xxx.com/xxx',\n    // 服务辅助描述信息，可选字段\n    description: '一键服务'\n  }\n\n};\n// 方式一\ncalendar.addEvent(event).then((data: number) => {\n  hilog.info(DOMAIN, 'testTag', `Succeeded in adding event, id -> ${data}`);\n  eventId = data;\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to addEvent. Code: ${err.code}, message: ${err.message}`);\n});\n// 方式二\nconst eventInfo: calendarManager.Event = {\n  // 日程标题\n  title: 'title',\n  // 日程类型\n  type: calendarManager.EventType.NORMAL,\n  // 日程开始时间\n  startTime: date.getTime(),\n  // 日程结束时间\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendarMgr?.editEvent(eventInfo).then((id: number): void => {\n  hilog.info(DOMAIN, 'testTag', `create Event id = ${id}`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to create Event. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照日程id进行指定日程的更新，更新日程相关信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const updateEvent: calendarManager.Event = {\n  title: 'updateTitle',\n  description: 'updateEventTest',\n  type: calendarManager.EventType.NORMAL,\n  id: eventId,\n  startTime: date.getTime(),\n  endTime: date.getTime() + 60 * 60 * 1000\n};\ncalendar.updateEvent(updateEvent).then(() => {\n  hilog.info(DOMAIN, 'testTag', `Succeeded in updating event`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to update event. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询当前日历账户下的所有日程。由于涉及数据隐私安全，进行了权限管控的应用无法获取其他创建的日程信息。根据不同的查询条件和查询字段，返回不同的查询结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当没有查询条件和查询字段时，可查询指定日历账户下的所有日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "calendar.getEvents().then((data: calendarManager.Event[]) => {\n  hilog.info(DOMAIN, 'testTag', `Succeeded in getting events, data -> ${JSON.stringify(data)}`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to get events. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "还支持根据日程id、日程开始和结束时间、日程标题等查询条件来查询日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据日程id查询\nconst filterId = calendarManager.EventFilter.filterById([eventId]);\ncalendar.getEvents(filterId).then((data: calendarManager.Event[]) => {\n  hilog.info(DOMAIN, 'testTag', `Succeeded in getting events filter by eventId, data -> ${JSON.stringify(data)}`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to get events. Code: ${err.code}, message: ${err.message}`);\n});\n\n// 根据日程标题查询\nconst filterTitle = calendarManager.EventFilter.filterByTitle('update');\ncalendar.getEvents(filterTitle).then((data: calendarManager.Event[]) => {\n  hilog.info(DOMAIN, 'testTag', `Succeeded in getting events filter by title, data -> ${JSON.stringify(data)}`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to get events. Code: ${err.code}, message: ${err.message}`);\n});\n\n// 根据日程开始和结束时间查询\nconst filterTime = calendarManager.EventFilter.filterByTime(1686931200000, 1687017600000);\ncalendar.getEvents(filterTime).then((data: calendarManager.Event[]) => {\n  hilog.info(DOMAIN, 'testTag', `Succeeded in getting events filter by time, data -> ${JSON.stringify(data)}`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to filter by time. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照日程id进行指定日程的删除。可以通过deleteEvent()接口进行单个日程的删除，也可以通过deleteEvents()接口批量删除指定日程，此处以删除单个指定日程为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "calendar.deleteEvent(eventId).then(() => {\n  hilog.info(DOMAIN, 'testTag', \"Succeeded in deleting event\");\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to delete event. Code: ${err.code}, message: ${err.message}`);\n});\n"
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