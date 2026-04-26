"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["486174"], {
753452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_calendar_kit_calendarmanager_calendar_developer_calendarmanager_calendar_developer_md_b0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-calendar-kit-calendarmanager-calendar-developer-calendarmanager-calendar-developer-md-b0e.json
var site_docs_calendar_kit_calendarmanager_calendar_developer_calendarmanager_calendar_developer_md_b0e_namespaceObject = JSON.parse('{"id":"calendar-kit/calendarmanager-calendar-developer/calendarmanager-calendar-developer","title":"日历账户管理","description":"日历账户‌用于存储和管理个人或团队的日程，通过日历账户，用户可以方便地查看、编辑和共享日程信息。","source":"@site/docs/calendar-kit/calendarmanager-calendar-developer/calendarmanager-calendar-developer.md","sourceDirName":"calendar-kit/calendarmanager-calendar-developer","slug":"/calendar-kit/calendarmanager-calendar-developer/","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-calendar-developer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"日历账户管理","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-calendar-developer","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Calendar Kit简介","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-overview/"},"next":{"title":"日程管理","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-event-developer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/calendar-kit/calendarmanager-calendar-developer/calendarmanager-calendar-developer.md


const frontMatter = {
	title: '日历账户管理',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-calendar-developer',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '日历账户管理';

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
        id: "日历账户管理",
        children: "日历账户管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日历账户‌用于存储和管理个人或团队的日程，通过日历账户，用户可以方便地查看、编辑和共享日程信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日历管理器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#calendarmanager",
        children: "CalendarManager"
      }), "用于管理日历账户", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#calendar",
        children: "Calendar"
      }), "。日历账户主要包含账户信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#calendaraccount",
        children: "CalendarAccount"
      }), "和配置信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#calendarconfig",
        children: "CalendarConfig"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以创建属于应用特有的日历账户，还可以对日历账户进行新增、删除、更新和查询。此外，每个日程", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#event",
        children: "Event"
      }), "归属于某一个特定的日历账户，可以通过日历账户对该账户下面的日程进行管理，具体相关指导可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/calendar-kit/calendarmanager-event-developer",
        children: "日程管理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是日历账户管理的相关接口，更多详细接口及使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager",
        children: "@ohos.calendarManager"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "根据上下文获取日历管理器对象CalendarManager，用于管理日历。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据日历账户信息，创建一个Calendar对象，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCalendar(calendarAccount?: CalendarAccount): Promise<Calendar>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认Calendar对象或者指定Calendar对象，使用Promise异步回调。  默认Calendar是日历存储首次运行时创建的，若创建Event时不关注其Calendar归属，则无须通过createCalendar()创建Calendar，直接使用默认Calendar。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getAllCalendars(): Promise<Calendar[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用所有创建的Calendar对象以及默认Calendar对象，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteCalendar(calendar: Calendar): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定Calendar对象，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getConfig(): CalendarConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取日历配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setConfig(config: CalendarConfig): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日历配置信息，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getAccount(): CalendarAccount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取日历账户信息。"
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
          children: "根据日历账户信息，创建一个日历账户Calendar对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建日历账户之前，开发者需要先根据账户信息进行查询，如果账户不存在则抛出异常信息，捕获到异常再进行日历账户的创建，否则可能会出现账户重复创建的问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nlet calendar: calendarManager.Calendar | undefined = undefined;\n// 指定日历账户信息\nconst calendarAccount: calendarManager.CalendarAccount = {\n  // 日历账户名称\n  name: 'MyCalendar',\n  // 日历账户类型\n  type: calendarManager.CalendarType.LOCAL,\n  // 日历账户显示名称，该字段如果不填，创建的日历账户在界面显示为空字符串。\n  displayName: 'MyCalendar'\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建日历账户\ncalendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n  hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in creating calendar data->${JSON.stringify(data)}`);\n  calendar = data;\n  // 请确保日历账户创建成功后，再进行后续相关操作\n  // ...\n}).catch((error: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to create calendar. Code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日历账户创建之后，日历账户颜色默认为黑色，不指定日历账户颜色可能导致部分版本/设备深色模式下显示效果不佳。开发者需要调用setConfig()接口设置日历配置信息，包括是否打开日历账户下的日程提醒能力、设置日历账户颜色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const calendarAccounts: calendarManager.CalendarAccount = {\n  name: 'MyCalendar',\n  type: calendarManager.CalendarType.LOCAL,\n  displayName: 'MyCalendar'\n};\n// 日历配置信息\ncalendarMgr?.getCalendar(calendarAccounts, (err, data) => {\n  //获取日历账户\n  if (err) {\n    hilog.error(DOMAIN, 'testTag', `Failed to get calendar, Code is ${err.code}, message is ${err.message}`);\n  } else {\n    const config: calendarManager.CalendarConfig = {\n      // 打开日程提醒\n      enableReminder: true,\n      // 设置日历账户颜色\n      color: '#aabbcc'\n    };\n    // 设置日历配置信息\n    data.setConfig(config).then(() => {\n      hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in setting config, data->${JSON.stringify(config)}`);\n    }).catch((err: BusinessError) => {\n      hilog.error(DOMAIN, 'testTag', `Failed to set config. Code: ${err.code}, message: ${err.message}`);\n    })\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以查询指定日历账户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "calendarMgr?.getCalendar(calendarAccount).then((data: calendarManager.Calendar) => {\n  hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "也可以查询默认日历账户，默认日历账户是日历存储首次运行时创建的，若创建日程时不关注归属哪个账户，则无须单独创建日历账户，可以直接使用默认日历账户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "calendarMgr?.getCalendar().then((data: calendarManager.Calendar) => {\n  hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to get calendar. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取当前应用所有创建的日历账户及默认日历账户Calendar对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于涉及数据隐私安全，进行了权限管控的应用无法获取其他应用创建的账户信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "calendarMgr?.getAllCalendars().then((data: calendarManager.Calendar[]) => {\n  hilog.info(DOMAIN, 'testTag', '%{public}s', `Succeeded in getting all calendars, data -> ${JSON.stringify(data)}`);\n  data.forEach((calendar) => {\n    const account = calendar.getAccount();\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `account -> ${JSON.stringify(account)}`);\n  })\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to get all calendars. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除指定的日历账户，删除账户后，该账户下的所有日程会全部删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (!calendar || calendar === null) {\n  hilog.error(DOMAIN, 'testTag', 'Failed to delete calendar. calendar is null');\n  return;\n}\ncalendarMgr?.deleteCalendar(calendar).then(() => {\n  hilog.info(DOMAIN, 'testTag', '%{public}s', \"Succeeded in deleting calendar\");\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN, 'testTag', `Failed to delete calendar. Code: ${err.code}, message: ${err.message}`);\n});\n"
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