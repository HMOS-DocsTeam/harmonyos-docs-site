"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["279394"], {
865925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_calendar_kit_calendarmanager_practice_developer_calendarmanager_practice_developer_md_ee0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-calendar-kit-calendarmanager-practice-developer-calendarmanager-practice-developer-md-ee0.json
var site_docs_calendar_kit_calendarmanager_practice_developer_calendarmanager_practice_developer_md_ee0_namespaceObject = JSON.parse('{"id":"calendar-kit/calendarmanager-practice-developer/calendarmanager-practice-developer","title":"日历服务实践案例","description":"场景介绍","source":"@site/docs/calendar-kit/calendarmanager-practice-developer/calendarmanager-practice-developer.md","sourceDirName":"calendar-kit/calendarmanager-practice-developer","slug":"/calendar-kit/calendarmanager-practice-developer/","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-practice-developer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"日历服务实践案例","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-practice-developer","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"注册并管理一键服务日程","permalink":"/harmonyos-docs-site/calendar-kit/calendar-service/"},"next":{"title":"Contacts Kit简介","permalink":"/harmonyos-docs-site/contacts-kit/contacts-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/calendar-kit/calendarmanager-practice-developer/calendarmanager-practice-developer.md


const frontMatter = {
	title: '日历服务实践案例',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-practice-developer',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '日历服务实践案例';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "一键服务典型场景",
  "id": "一键服务典型场景",
  "level": 2
}, {
  "value": "出行服务场景",
  "id": "出行服务场景",
  "level": 3
}, {
  "value": "酒店住宿场景",
  "id": "酒店住宿场景",
  "level": 3
}, {
  "value": "直播预约场景",
  "id": "直播预约场景",
  "level": 3
}, {
  "value": "抢购预约场景",
  "id": "抢购预约场景",
  "level": 3
}, {
  "value": "还款提醒场景",
  "id": "还款提醒场景",
  "level": 3
}, {
  "value": "课程提醒场景",
  "id": "课程提醒场景",
  "level": 3
}, {
  "value": "影音娱乐场景",
  "id": "影音娱乐场景",
  "level": 3
}, {
  "value": "运动训练场景",
  "id": "运动训练场景",
  "level": 3
}, {
  "value": "会议场景",
  "id": "会议场景",
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
        id: "日历服务实践案例",
        children: "日历服务实践案例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过日历服务，开发者可将带有时间属性的事件作为日程写入，并支持通过“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/calendar-kit/calendar-service",
        children: "一键服务"
      }), "”功能快速跳转，帮助用户快速直达对应服务，并完成各类信息的归一化管理。各典型场景选择适用的模板，并按照模板格式填写各个字段信息，确保用户体验完整、一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写入日历的日程可通过通知中心、桌面卡片以及日历应用内部等多种入口向用户展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同场景下，一键服务按钮出现时机如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "桌面卡片、月视图日程列表卡片：日程开始时间前15分钟显示，日程结束时自动隐藏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日程详情：始终显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日程通知：通知弹出时显示，通知中心内点击对应日程卡片后显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(260558)/* ["default"] */.A) + "",
        width: "525",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考日程管理前三步的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/calendar-kit/calendarmanager-calendar-developer#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "开发步骤"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入相关依赖。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["申请权限。使用Calendar Kit时，需要在module.json5中声明申请读写日历日程所需的权限：ohos.permission.READ_CALENDAR和ohos.permission.WRITE_CALENDAR。具体指导可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据上下文获取日程管理器对象calendarMgr，用于对日历账户进行相关管理操作。推荐在EntryAbility.ets文件中进行操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一键服务典型场景",
      children: "一键服务典型场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一键服务典型场景及对应显示内容如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#servicetype",
              children: "ServiceType取值"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "按钮显示内容"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "会议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Meeting'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加入会议"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "追剧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Watching'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "立即观看"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "还款"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Repayment'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马上还款"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "直播"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Live'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启直播"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "购物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Shopping'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始选购"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "查看"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Trip'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "立即查看"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "上课"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Class'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始上课"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "赛事"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'SportsEvents'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "立即观看"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "运动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'SportsExercise'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始运动"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行各场景的开发前，请确保已导入相关依赖、申请相关权限等，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
        children: "开发准备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "出行服务场景",
      children: "出行服务场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户通过购票平台预订火车票、机票或其他交通方式后，系统可以自动将其行程信息添加至日历，并在适当的时间节点进行提醒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "航班、车次信息加出发地、目的地信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行程开始时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行程结束时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2小时前、4小时前分别提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充检票口信息、座位号信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.TRIP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { calendarMgr } from '../entryability/EntryAbility';\nimport { calendarManager } from '@kit.CalendarKit';\n\nlet tripCalendar: calendarManager.Calendar | undefined = undefined;\nlet oriEvent: calendarManager.Event | null = null;\nlet id: number = 0;\n\nasync createTripCalendarAndEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'TripCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '高铁出行'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-10-01T08:17:00').getTime();\n  const endTime = new Date('2025-10-01T12:51:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    // 日程标题\n    title: '行程信息：G107 上海虹桥-北京南',\n    // 开始时间\n    startTime: startTime,\n    // 结束时间\n    endTime: endTime,\n    // 是否全天日程\n    isAllDay:false,\n    // 提醒时间\n    reminderTime:[120, 240],\n    // 备注\n    description: '检票口：南二楼1口或北广场B2候车室 \\n座位号：02车04二等座',\n    // 一键服务\n    service: {\n      // 服务类型\n      type: calendarManager.ServiceType.TRIP,\n      // 服务的uri，格式为DeepLink类型。请根据“一键服务”指导文档配置。\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    tripCalendar = await calendarMgr?.createCalendar(calendarAccount);\n    if (!tripCalendar || tripCalendar === null) {\n      console.error('Failed to create calendar. tripCalendar is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await tripCalendar.setConfig(config);\n    // 添加日程\n    id = await tripCalendar.addEvent(event);\n    oriEvent = event;\n    oriEvent.id = id;\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nasync getTripEvent(): Promise<void> {\n  // 校验calendar是否为空\n  if (!tripCalendar || tripCalendar === null) {\n    console.error('Failed to get event, calendar is null.');\n    return;\n  }\n  try {\n    // 查询行程\n    const filter = calendarManager.EventFilter.filterById([id]);\n    let data: calendarManager.Event[] = await tripCalendar.getEvents(filter, ['title', 'type', 'startTime', 'endTime']);\n    if (data && data.length > 0) {\n      oriEvent = data[0];\n    }\n    console.info(`Succeeded in getting events, data -> ${JSON.stringify(data)}`);\n  } catch (err) {\n    console.error(`Failed to get events. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nasync updateTripEvent(): Promise<void> {\n  // 校验calendar是否为空\n  if (!tripCalendar || tripCalendar === null) {\n    console.error('Failed to update event, calendar is null.');\n    return;\n  }\n  if (!oriEvent || oriEvent === null) {\n    console.error('Failed to update event, oriEvent is null');\n    return;\n  }\n  // 修改行程的开始时间startTime和结束时间endTime\n  oriEvent.startTime = new Date('2025-10-01T07:03:00').getTime();\n  oriEvent.endTime = new Date('2025-10-01T11:51:00').getTime();\n  try {\n    // 更新行程\n    await tripCalendar.updateEvent(oriEvent);\n    console.info(\"Succeeded in updating event\");\n  } catch (err) {\n    console.error(`Failed to update event. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nasync deleteTripEvent(): Promise<void> {\n  // 校验calendar是否为空\n  if (!tripCalendar || tripCalendar === null) {\n    console.error('Failed to delete event, calendar is null.');\n    return;\n  }\n  try {\n    // 删除行程\n    await tripCalendar.deleteEvent(id);\n    oriEvent = null;\n    console.info(`Succeeded in deleting Event`);\n  } catch (err) {\n    console.error(`Failed to delete Event, Code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870586)/* ["default"] */.A) + "",
        width: "522",
        height: "1183"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "酒店住宿场景",
      children: "酒店住宿场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "酒店入住信息（酒店标题地址）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "地点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager#location",
              children: "location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "酒店的地理位置"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入住时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离店时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "全天日程"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isAllDay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：表示添加全天日程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：全天日程时表示当天上午9点提醒（非全天日程则是日程开始时间）。  1440：表示前一天上午9点提醒。  不填时，默认为不提醒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充入住时间、离店时间信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.TRIP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createHotelCalendarAndEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'hotelCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '酒店住宿'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-05-01T15:00:00').getTime();\n  const endTime = new Date('2025-05-02T12:00:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: '入住信息:酒店(上海新天地店)',\n    location: {\n      location: '上海新天地',\n      longitude: 121.47506199999998,\n      latitude: 31.219150000000013\n    },\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: true,\n    // 提醒时间：全天日程是按9点往前计算分钟数\n    reminderTime: [0, 1440],\n    description: '入住:15:00后\\n离店:12:00前',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.TRIP,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(460234)/* ["default"] */.A) + "",
        width: "525",
        height: "1156"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "直播预约场景",
      children: "直播预约场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直播名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直播开始时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直播结束时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准时、10分钟前分别提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充直播相关详情介绍"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.LIVE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createLiveCalendarAndEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'liveCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '直播抢购'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-11-04T21:00:00').getTime();\n  const endTime = new Date('2025-11-04T22:00:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: '直播抢购',\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: false,\n    reminderTime: [0, 10],\n    description: '限时特惠,秋季最大福利就在直播间',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.LIVE,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(280854)/* ["default"] */.A) + "",
        width: "519",
        height: "1177"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "抢购预约场景",
      children: "抢购预约场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "购物节（抢购活动）名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抢购开始时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抢购结束时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准时、10分钟前分别提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充购物节相关介绍"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.SHOPPING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createShoppingCalendarAndEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'shoppingCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '购物'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-12-19T19:00:00').getTime();\n  const endTime = new Date('2025-12-19T20:00:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: '购物节预热',\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: false,\n    reminderTime: [0, 10],\n    description: '9.9限时秒杀,还有精彩福利',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.SHOPPING,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(289942)/* ["default"] */.A) + "",
        width: "521",
        height: "1177"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "还款提醒场景",
      children: "还款提醒场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "还款提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "还款日日期"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "还款日日期"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "全天日程"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isAllDay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：表示添加全天日程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：全天日程时表示当天上午9点提醒（非全天日程则是日程开始时间）。  不填时，默认为不提醒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充待还款金额信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.REPAYMENT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createRepaymentCalendarAndEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'repaymentCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '金融理财'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-10-20T00:00:00').getTime();\n  const endTime = new Date('2025-10-20T23:59:59').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: '还款提醒',\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: true,\n    // 全天日程时，提醒时间为0表示当天上午9点提醒\n    reminderTime: [0],\n    description: '本月账单：待还款10989.35元',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.REPAYMENT,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(688917)/* ["default"] */.A) + "",
        width: "515",
        height: "1179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "课程提醒场景",
      children: "课程提醒场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "课程名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "课程开始时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "课程结束时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准时、10分钟前分别提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充课程相关介绍"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.CLASS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createClassCalendarAndEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'classCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '我的课表'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-11-03T09:00:00').getTime();\n  const endTime = new Date('2025-11-03T09:45:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: '语文课',\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: false,\n    reminderTime: [0, 10],\n    description: '语文课上课前准备诗歌朗读',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.CLASS,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(146599)/* ["default"] */.A) + "",
        width: "515",
        height: "1168"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "影音娱乐场景",
      children: "影音娱乐场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "赛事名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "赛事开始时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "赛事结束时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准时、10分钟前分别提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充赛事相关介绍"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.SPORTS_EVENTS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createSportsCalendarAndEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'sportsEventsCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '足球比赛'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-10-19T20:00:00').getTime();\n  const endTime = new Date('2025-10-19T21:30:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: '2026年足球联赛',\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: false,\n    reminderTime: [0, 10],\n    description: 'A组 xx队首战',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.SPORTS_EVENTS,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(901968)/* ["default"] */.A) + "",
        width: "515",
        height: "1170"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运动训练场景",
      children: "运动训练场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练课程名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练开始时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练结束时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准时、30分钟前分别提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充训练计划相关介绍"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.SPORTS_EXERCISE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例及示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createSportsExerciseEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'sportsExerciseCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '运动健康'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  const startTime = new Date('2025-10-26T10:30:00').getTime();\n  const endTime = new Date('2025-10-26T10:45:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: '健身操·15分钟无跑跳燃脂',\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: false,\n    reminderTime: [0, 30],\n    description: '训练日第17天',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.SPORTS_EXERCISE,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907282)/* ["default"] */.A) + "",
        width: "520",
        height: "1171"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "会议场景",
      children: "会议场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了该场景中主要字段的推荐配置及其说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应设置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议取值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日程标题"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议主题"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开始时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议开始时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "endTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会议结束时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "与会人"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "attendee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与会人信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提醒时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reminderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准时、15分钟前分别提醒"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日历账户（在日历中对用户体现）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生态应用名（建议与应用市场中名称一致）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可补充会议相关介绍"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一键服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ServiceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calendarManager.ServiceType.MEETING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建日程示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nasync createMeetingEvent(): Promise<void> {\n  // 指定日历账户信息\n  const calendarAccount: calendarManager.CalendarAccount = {\n    name: 'meetingCalendar',\n    type: calendarManager.CalendarType.LOCAL,\n    // 日历账户显示名称：建议使用应用实际名称。\n    displayName: '会议'\n  };\n  // 日历配置信息\n  const config: calendarManager.CalendarConfig = {\n    // 设置日历账户颜色\n    color: '#aabbcc'\n  };\n  // 与会人信息\n  let attendee: calendarManager.Attendee[] = [\n    {\n      name: 'Chris',\n      email: 'test1@example.com',\n      role: calendarManager.AttendeeRole.ORGANIZER\n    },\n    {\n      name: 'Jack',\n      email: 'test2@example.com',\n      role: calendarManager.AttendeeRole.PARTICIPANT,\n      type: calendarManager.AttendeeType.REQUIRED\n    },\n    {\n      name: 'Jerry',\n      email: 'test3@example.com',\n      role: calendarManager.AttendeeRole.PARTICIPANT,\n      type: calendarManager.AttendeeType.REQUIRED\n    }\n  ];\n  const startTime = new Date('2025-10-20T09:00:00').getTime();\n  const endTime = new Date('2025-10-20T10:00:00').getTime();\n  // 日程配置信息\n  const event: calendarManager.Event = {\n    type: calendarManager.EventType.NORMAL,\n    title: 'xxx会议',\n    startTime: startTime,\n    endTime: endTime,\n    isAllDay: false,\n    reminderTime: [0, 15],\n    attendee: attendee,\n    description: 'xx事务评审',\n    // 一键服务\n    service: {\n      type: calendarManager.ServiceType.MEETING,\n      uri: 'demo://mobile/player?params='\n    }\n  }\n  try {\n    // 创建日历账户\n    let data: calendarManager.Calendar | undefined= await calendarMgr?.createCalendar(calendarAccount);\n    if (!data || data === null) {\n      console.error('Failed to create calendar. data is null.');\n      return;\n    }\n    // 请确保日历账户创建成功后，再进行相关日程的管理\n    // 设置日历配置信息，设置日历账户颜色\n    await data.setConfig(config);\n    // 添加日程\n    id = await data.addEvent(event);\n    console.info(`Succeeded in creating calendar and event, result: ${JSON.stringify(id)}`);\n  } catch (error) {\n    console.error(`Failed to create calendar or event. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145518)/* ["default"] */.A) + "",
        width: "514",
        height: "1165"
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
280854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438869-49315049ee3ef2e0e0971d03164522cc.png");

},
901968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438871-a6f0b989bc084359232a3aa25f5195a3.png");

},
260558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958822-a173b3d8ef9ab9ca70f8ee26e4901fef.png");

},
907282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958826-5b375265145a7ecb4c49d8225a1d8b07.png");

},
146599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799176-f5c7165ede6a0bc1c479b2d8bec1cd8f.png");

},
145518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478827-c7bd52e04a79c198c03e35fd4c2aa4d6.png");

},
289942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958824-574b0fad0c0fdec4dd2b65fd9f0ed72e.png");

},
870586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478823-feaed6d93bbf295fbee789a3309c0fba.png");

},
460234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799174-c347c5b4abecb704fe49e8d534fd6578.png");

},
688917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478825-51f0de8bcd8bb47e2458a13d52d59a3b.png");

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