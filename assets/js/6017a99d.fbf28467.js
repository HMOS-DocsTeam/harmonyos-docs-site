"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["494745"], {
790123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_main_thread_jank_events_hiappevent_watcher_mainthreadjank_events_hiappevent_watcher_mainthreadjank_events_md_601_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-main-thread-jank-events-hiappevent-watcher-mainthreadjank-events-hiappevent-watcher-mainthreadjank-events-md-601.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_main_thread_jank_events_hiappevent_watcher_mainthreadjank_events_hiappevent_watcher_mainthreadjank_events_md_601_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events/hiappevent-watcher-mainthreadjank-events","title":"主线程超时事件介绍","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events/hiappevent-watcher-mainthreadjank-events.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"主线程超时事件介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-mainthreadjank-events","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅地址越界事件（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-ndk/"},"next":{"title":"订阅主线程超时事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events/hiappevent-watcher-mainthreadjank-events.md


const frontMatter = {
	title: '主线程超时事件介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-mainthreadjank-events',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '主线程超时事件介绍';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "检测原理",
  "id": "检测原理",
  "level": 2
}, {
  "value": "自定义参数",
  "id": "自定义参数",
  "level": 2
}, {
  "value": "setEventConfig接口说明",
  "id": "seteventconfig接口说明",
  "level": 3
}, {
  "value": "setEventConfig接口参数设置说明",
  "id": "seteventconfig接口参数设置说明",
  "level": 3
}, {
  "value": "configEventPolicy接口说明",
  "id": "configeventpolicy接口说明",
  "level": 3
}, {
  "value": "configEventPolicy接口参数设置说明",
  "id": "configeventpolicy接口参数设置说明",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetEventConfig接口说明",
  "id": "oh_hiappevent_seteventconfig接口说明",
  "level": 3
}, {
  "value": "OH_HiAppEvent_SetEventConfig接口参数设置说明",
  "id": "oh_hiappevent_seteventconfig接口参数设置说明",
  "level": 3
}, {
  "value": "事件字段说明",
  "id": "事件字段说明",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "主线程超时事件介绍",
        children: "主线程超时事件介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用的主线程执行耗时任务时，开发者会感知到应用卡顿，但卡顿时间未达到系统设定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines",
        children: "应用冻屏"
      }), "时间限制，因此不会生成故障日志。为了更好地定位和分析问题，开发者可以查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E6%A3%80%E6%B5%8B%E5%8E%9F%E7%90%86",
        children: "主线程超时事件检测原理"
      }), "，根据生成的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "主线程超时事件日志规格"
      }), "，分析主线程任务的执行情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文面向开发者介绍主线程超时检测原理，以及各字段的含义和规格。如需了解如何使用HiAppEvent接口订阅主线程超时事件，请参考以下文档。目前提供ArkTS和C/C++两种接口，按需选择。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-arkts",
          children: "订阅主线程超时事件（ArkTS）"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk",
          children: "订阅主线程超时事件（C/C++）"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577120)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主线程超时事件支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-typical-scenarios/app-clone",
        children: "应用分身"
      }), "场景下使用 HiAppEvent 进行订阅，支持在元服务场景下使用HiAppEvent 进行订阅，从 API version 22 开始支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ime-kit/inputmethod-application-guide",
        children: "输入法应用"
      }), "场景下使用 HiAppEvent 进行订阅。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测原理",
      children: "检测原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E4%B8%BB%E7%BA%BF%E7%A8%8B%E8%B6%85%E6%97%B6%E6%A3%80%E6%B5%8B",
        children: "主线程超时检测原理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义参数",
      children: "自定义参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setEventConfig接口不提供主线程超时结束自动停止采样栈的功能；从API version 22开始，提供configEventPolicy接口，该接口提供主线程超时结束自动停止采样栈的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "seteventconfig接口说明",
      children: "setEventConfig接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent#hiappeventseteventconfig15",
              children: "setEventConfig(name: string, config: Record<string, ParamType>): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置主线程采样栈参数接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "seteventconfig接口参数设置说明",
      children: "setEventConfig接口参数设置说明"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时事件名称，此处应为常量hiappevent.event.MAIN_THREAD_JANK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, ParamType>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时采样栈配置参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程超时采样栈配置参数的定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195516)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "log_type参数为必选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "log_type=0或2时，不设置其他参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "log_type=1时，所有参数均需设置。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "log_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集MAIN_THREAD_JANK事件日志类型。  log_type=0：默认值，主线程连续两次超时150ms~450ms，采集调用栈；主线程超时450ms，采集trace。  log_type=1：仅采集调用栈。  log_type=2：仅采集trace。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sample_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时检测间隔和采样间隔。  单位为ms，默认值：150，取值范围为[50, 500]。  系统根据开发者设置的sample_interval进行超时检测判断，并使用该sample_interval作为周期性任务检测的间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ignore_startup_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "忽略启动时间内的主线程超时检测。单位为s，最小值：3，默认值：10。  线程启动一定时间内，不进行超时检测。一些进程启动时间较长，此时抓全的超时采样栈，分析意义不大。因此，在开发者定义启动时间间隔内，不进行超时检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sample_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时采样次数。系统检测到当前主线程执行任务时长达到可采样阈值时，开始周期性采集堆栈，每个间隔采集一次堆栈，共采集sample_count次。  默认值：10次。  最小值：1次，最大值需要结合自定义的sample_interval进行动态计算，计算公式：sample_count <= (2500 / sample_interval - 4)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_times_per_app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同一个应用的PID一个生命周期内，主线程超时采样上报次数。一个生命周期内只能设置一次。  默认值：1次，单位：次。  开发者选项打开，每小时范围：[1, 3]。  开发者选项关闭，每天上报次数范围：[1, 3]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sample_count说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）2500的含义：根据系统规定，主线程超时事件从检测到上报的时间不可以超过2.5s（即：2500ms）。因此sample_count的设置值不能超过系统按计算公式得出的最大值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）4的含义：第一次超时间隔检测时间 + 第二次超时间隔（系统提供两次再次发生超时事件的检测机会）时间 + 收集并上报堆栈信息的时间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）开发者要结合需求场景，进行合理的设置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参数设置示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示setEventConfig接口中log_type分别为0，1，2三种类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）log_type=0，用于采样栈或采样trace。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog, hiAppEvent } from '@kit.PerformanceAnalysisKit';\n\nlet params: Record<string, hiAppEvent.ParamType> = {\n  \"log_type\": \"0\"\n};\nhiAppEvent.setEventConfig(hiAppEvent.event.MAIN_THREAD_JANK, params).then(() => {\n  hilog.info(0x0000, 'hiAppEvent', `Setting default value successfully.`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'hiAppEvent', `Failed to set default value. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）log_type=1，仅用于采集调用栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog, hiAppEvent } from '@kit.PerformanceAnalysisKit';\n\nlet params: Record<string, hiAppEvent.ParamType> = {\n  \"log_type\": \"1\",\n  \"sample_interval\": \"100\",\n  \"ignore_startup_time\": \"11\",\n  \"sample_count\": \"21\",\n  \"report_times_per_app\": \"3\"\n};\nhiAppEvent.setEventConfig(hiAppEvent.event.MAIN_THREAD_JANK, params).then(() => {\n  hilog.info(0x0000, 'hiAppEvent', `Successfully set sampling stack parameters.`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'hiAppEvent', `Failed to set sample stack value. Code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）log_type=2，仅用于采集trace。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog, hiAppEvent } from '@kit.PerformanceAnalysisKit';\n\nlet params: Record<string, hiAppEvent.ParamType> = {\n  \"log_type\": \"2\"\n};\nhiAppEvent.setEventConfig(hiAppEvent.event.MAIN_THREAD_JANK, params).then(() => {\n  hilog.info(0x0000, 'hiAppEvent', `Set to only collect trace successfully.`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'hiAppEvent', `Failed to set only collect trace. code: ${err.code}, message: ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configeventpolicy接口说明",
      children: "configEventPolicy接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent#hiappeventconfigeventpolicy22",
              children: "configEventPolicy(policy: EventPolicy): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置主线程采样栈参数接口。支持超时卡顿结束自动停止采样。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configeventpolicy接口参数设置说明",
      children: "configEventPolicy接口参数设置说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用上述hiappevent提供的接口，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent#eventpolicy22",
        children: "EventPolicy"
      }), " 中配置采样栈接口的参数。"]
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
            children: "mainThreadJankPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent#mainthreadjankpolicy22",
              children: "MainThreadJankPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时事件配置策略。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数设置示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示configEventPolicy接口中logType分别为0，1，2三种类型："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）logType=0，用于采样栈或采样trace。仅需配置autoStopSampling参数，其他参数均取默认值，无需设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog, hiAppEvent } from '@kit.PerformanceAnalysisKit';\n\nlet policy: hiAppEvent.EventPolicy = {\n  \"mainThreadJankPolicy\" : {\n    \"logType\": 0, // 采集日志类型\n    \"autoStopSampling\": true // 超时结束，停止采集堆栈\n  }\n};\nhiAppEvent.configEventPolicy(policy).then(() => {\n  hilog.info(0x0000, 'hiAppEvent', `Setting default value successfully.`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'hiAppEvent', `Failed to set default value. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）logType=1，仅用于采集调用栈。触发检测的阈值用户自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog, hiAppEvent } from '@kit.PerformanceAnalysisKit';\n\nlet policy: hiAppEvent.EventPolicy = {\n  \"mainThreadJankPolicy\" : {\n    \"logType\": 1, // 采集日志类型\n    \"sampleInterval\": 70, // 触发检测的阈值，采集堆栈间隔\n    \"ignoreStartupTime\": 11, // 应用启动期间忽略主线程超时检测的时间\n    \"sampleCount\": 20, // 主线程超时采样次数\n    \"reportTimesPerApp\": 3, // 主线程超时采样上报次数\n    \"autoStopSampling\": true // 超时结束，停止采集堆栈\n  }\n};\nhiAppEvent.configEventPolicy(policy).then(() => {\n  hilog.info(0x0000, 'hiAppEvent', `Successfully set sampling stack parameters.`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'hiAppEvent', `Failed to set sample stack value. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）logType=2，仅用于采集trace。其他参数均不生效，无需设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog, hiAppEvent } from '@kit.PerformanceAnalysisKit';\n\nlet policy: hiAppEvent.EventPolicy = {\n  \"mainThreadJankPolicy\" : {\n    \"logType\": 2 // 采集日志类型\n  }\n};\nhiAppEvent.configEventPolicy(policy).then(() => {\n  hilog.info(0x0000, 'hiAppEvent', `Set to only collect trace successfully.`);\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'hiAppEvent', `Failed to set only collect trace. code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_seteventconfig接口说明",
      children: "OH_HiAppEvent_SetEventConfig接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#oh_hiappevent_seteventconfig",
              children: "int OH_HiAppEvent_SetEventConfig(const char* name, HiAppEvent_Config* config)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置主线程采样栈参数接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_hiappevent_seteventconfig接口参数设置说明",
      children: "OH_HiAppEvent_SetEventConfig接口参数设置说明"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时事件名称，此处为预定义的宏EVENT_MAIN_THREAD_JANK或EVENT_MAIN_THREAD_JANK_V2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiAppEvent_Config*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主线程超时采样栈配置参数，可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#oh_hiappevent_setconfigitem",
              children: "OH_HiAppEvent_SetConfigItem"
            }), "函数设置config参数的配置项。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "name为EVENT_MAIN_THREAD_JANK"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口不提供主线程超时结束自动停止采样栈的功能，config参数作如下配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(776260)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAIN_THREAD_JANK_PARAM_LOG_TYPE为必选配置项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"0\"或\"2\"时，无其他配置项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"1\"时，所有配置项均需设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置项的值均为可转换为整型的字符串字面量或字符指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于API version 21及之前的版本，配置项名称只可使用相关字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于API version 22及之后的版本，配置项名称可使用预定义的宏及相关字符串。更推荐使用宏，避免开发者手写字符串造成非预期结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文中值的取值范围说明均按转换后的变量类型进行阐述。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必须配置"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏：MAIN_THREAD_JANK_PARAM_LOG_TYPE  字符串：log_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集日志的类型。  值为\"0\"：默认值，主线程连续两次超时150ms~450ms，采集调用栈；主线程超时450ms，采集trace。  值为\"1\"：仅采集调用栈。  值为\"2\"：仅采集trace。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏：MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL  字符串：sample_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时检测间隔和采样间隔。  单位为ms，默认值：150，取值范围为[50, 500]。  系统根据开发者设置的MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL的值进行超时检测判断，并使用该值作为周期性任务检测的间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏：MAIN_THREAD_JANK_PARAM_IGNORE_STARTUP_TIME  字符串：ignore_startup_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "忽略启动时间内的主线程超时检测。  单位为s，最小值：3，默认值：10。  线程启动一定时间内，不进行超时检测。一些进程启动时间较长，此时抓全的超时采样栈，分析意义不大。因此，在开发者定义启动时间间隔内，不进行超时检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏：MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT  字符串：sample_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时采样次数。系统检测到当前主线程执行任务时长达到可采样阈值时，开始周期性采集堆栈，每个间隔采集一次堆栈，共采集MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT次。  默认值：10次。  最小值：1次，最大值需要结合自定义的MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL进行动态计算，计算公式：MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT <= (2500 / MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL - 4)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏：MAIN_THREAD_JANK_PARAM_REPORT_TIMES_PER_APP  字符串：report_times_per_app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同一个应用的PID一个生命周期内，主线程超时采样上报次数。一个生命周期内只能设置一次。  默认值：1次，单位：次。  开发者选项打开，每小时范围：[1, 3]。  开发者选项关闭，每天上报次数范围：[1, 3]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）2500的含义：根据系统规定，主线程超时事件从检测到上报的时间不可以超过2.5s（即：2500ms）。因此MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT的设置值不能超过系统按计算公式得出的最大值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）4的含义：第一次超时间隔检测时间 + 第二次超时间隔（系统提供两次再次发生超时事件的检测机会）时间 + 收集并上报堆栈信息的时间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）开发者要结合需求场景，进行合理的设置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参数设置示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示OH_HiAppEvent_SetEventConfig接口中config参数的配置项MAIN_THREAD_JANK_PARAM_LOG_TYPE分别为\"0\"，\"1\"，\"2\"三种类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"0\"时，用于采样栈或采样trace。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\nHiAppEvent_Config* config = OH_HiAppEvent_CreateConfig();\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_LOG_TYPE, \"0\");\nint ret = OH_HiAppEvent_SetEventConfig(EVENT_MAIN_THREAD_JANK, config);\nif (ret == HIAPPEVENT_SUCCESS) {\n    OH_LOG_INFO(LogType::LOG_APP, \"Setting default value successfully.\");\n}\nOH_HiAppEvent_DestroyConfig(config);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"1\"时，仅用于采集调用栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\nHiAppEvent_Config* config = OH_HiAppEvent_CreateConfig();\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_LOG_TYPE, \"1\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL, \"100\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_IGNORE_STARTUP_TIME, \"11\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT, \"21\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_REPORT_TIMES_PER_APP, \"3\");\n\nint ret = OH_HiAppEvent_SetEventConfig(EVENT_MAIN_THREAD_JANK, config);\nif (ret == HIAPPEVENT_SUCCESS) {\n    OH_LOG_INFO(LogType::LOG_APP, \"Successfully set sampling stack parameters.\");\n}\nOH_HiAppEvent_DestroyConfig(config);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"2\"时，仅用于采集trace。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\nHiAppEvent_Config* config = OH_HiAppEvent_CreateConfig();\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_LOG_TYPE, \"2\");\n\nint ret = OH_HiAppEvent_SetEventConfig(EVENT_MAIN_THREAD_JANK, config);\nif (ret == HIAPPEVENT_SUCCESS) {\n    OH_LOG_INFO(LogType::LOG_APP, \"Set to only collect trace successfully\");\n}\nOH_HiAppEvent_DestroyConfig(config);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "name为EVENT_MAIN_THREAD_JANK_V2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API VERSION 22开始，name可以为EVENT_MAIN_THREAD_JANK_V2，接口提供主线程超时结束自动停止采样栈的功能，config参数作如下配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288032)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置项名称为相关预定义的宏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "config的所有配置项均为可选项，不配置或者为空时取默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"0\"时，仅需设置MAIN_THREAD_JANK_PARAM_AUTO_STOP_SAMPLING，其他配置项均取默认值，无需设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"2\"时，其他配置项均不生效，无需设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAIN_THREAD_JANK_PARAM_AUTO_STOP_SAMPLING为\"true\"或\"false\"，转换为布尔类型；其他配置项的值均为可转换为整型的字符串字面量或字符指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文中值的取值范围说明均按转换后的变量类型进行阐述。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必须配置"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAIN_THREAD_JANK_PARAM_LOG_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集日志的类型。  值为\"0\"：默认值，主线程连续两次超时150ms~450ms，采集调用栈；主线程超时450ms，采集trace。  值为\"1\"：仅采集调用栈。  值为\"2\"：仅采集trace。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时检测间隔和采样间隔。  单位为ms，默认值：150，取值范围为[50, 500]。  系统根据开发者设置的MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL的值进行超时检测判断，并使用该值作为周期性任务检测的间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAIN_THREAD_JANK_PARAM_IGNORE_STARTUP_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "忽略启动时间内的主线程超时检测。  单位为s，最小值：3，默认值：10。  线程启动一定时间内，不进行超时检测。一些进程启动时间较长，此时抓全的超时采样栈，分析意义不大。因此，在开发者定义启动时间间隔内，不进行超时检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时采样次数。系统检测到当前主线程执行任务时长达到可采样阈值时，系统检测到当前主线程执行任务超过采样限制后，开始周期性采集堆栈，每个间隔采集一次堆栈，共采集MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT次。  默认值：10次。  最小值：1次，最大值需要结合自定义的MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL进行动态计算，计算公式：MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT <= (2500 / MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL - 4)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAIN_THREAD_JANK_PARAM_REPORT_TIMES_PER_APP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同一个应用的PID一个生命周期内，主线程超时采样上报次数。一个生命周期内只能设置一次。  默认值：1次，单位：次。  开发者选项打开，每小时范围：[1, 3]。  开发者选项关闭，每天上报次数范围：[1, 3]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAIN_THREAD_JANK_PARAM_AUTO_STOP_SAMPLING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程超时结束时，是否自动停止采样主线程堆栈。  true: 超时结束或达到设置的采样次数，停止采样。  false：达到设置的采样次数时停止采样。  默认值：false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）2500的含义：根据系统规定，主线程超时事件从检测到上报的时间不可以超过2.5s（即：2500ms）。因此MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT的设置值不能超过系统按计算公式得出的最大值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）4的含义：第一次超时间隔检测时间 + 第二次超时间隔（系统提供两次再次发生超时事件的检测机会）时间 + 收集并上报堆栈信息的时间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）开发者要结合需求场景，进行合理的设置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参数设置示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示OH_HiAppEvent_SetEventConfig接口中config参数的配置项MAIN_THREAD_JANK_PARAM_LOG_TYPE分别为\"0\"，\"1\"，\"2\"三种类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"0\"时，用于采样栈或采样trace。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\nHiAppEvent_Config* config = OH_HiAppEvent_CreateConfig();\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_LOG_TYPE, \"0\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_AUTO_STOP_SAMPLING, \"true\");\nint ret = OH_HiAppEvent_SetEventConfig(EVENT_MAIN_THREAD_JANK_V2, config);\nif (ret == HIAPPEVENT_SUCCESS) {\n    OH_LOG_INFO(LogType::LOG_APP, \"Setting default value successfully.\");\n}\nOH_HiAppEvent_DestroyConfig(config);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"1\"时，仅用于采集调用栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\nHiAppEvent_Config* config = OH_HiAppEvent_CreateConfig();\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_LOG_TYPE, \"1\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_SAMPLE_INTERVAL, \"100\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_IGNORE_STARTUP_TIME, \"11\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_SAMPLE_COUNT, \"21\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_REPORT_TIMES_PER_APP, \"3\");\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_AUTO_STOP_SAMPLING, \"true\");\n\nint ret = OH_HiAppEvent_SetEventConfig(EVENT_MAIN_THREAD_JANK_V2, config);\nif (ret == HIAPPEVENT_SUCCESS) {{\n    OH_LOG_INFO(LogType::LOG_APP, \"Successfully set sampling stack parameters.\");\n}\nOH_HiAppEvent_DestroyConfig(config);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）MAIN_THREAD_JANK_PARAM_LOG_TYPE为\"2\"时，仅用于采集trace。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include \"hiappevent/hiappevent.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\nHiAppEvent_Config* config = OH_HiAppEvent_CreateConfig();\nOH_HiAppEvent_SetConfigItem(config, MAIN_THREAD_JANK_PARAM_LOG_TYPE, \"2\");\n\nint ret = OH_HiAppEvent_SetEventConfig(EVENT_MAIN_THREAD_JANK_V2, config);\nif (ret == HIAPPEVENT_SUCCESS) {\n    OH_LOG_INFO(LogType::LOG_APP, \"Set to only collect trace successfully\");\n}\nOH_HiAppEvent_DestroyConfig(config);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件字段说明",
      children: "事件字段说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件触发时间，单位为ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundle_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundle_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的进程id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的用户id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "begin_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程任务开始时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程任务结束时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "external_log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主线程超时日志文件路径。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "为避免目录空间超限（参考log_over_limit），导致新生成的日志文件写入失败，日志文件处理完后请及时删除。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log_over_limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成的主线程超时日志文件与已存在的日志文件总大小是否超过10M上限。true表示超过上限，日志写入失败；false表示未超过上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app_start_jiffies_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者可以获取主线程超时事件时，任务执行的开始时间。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "触发采样栈，打印开始时间信息。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "heaviest_stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["生成的主线程超时日志文件中，打印多次的调用栈。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "触发采样栈，打印多次的调用栈信息。"
              })
            })]
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
776260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
288032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
577120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
195516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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