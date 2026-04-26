"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["875795"], {
364779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_startup_duration_events_hiappevent_watcher_app_launch_event_hiappevent_watcher_app_launch_event_md_bd4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-startup-duration-events-hiappevent-watcher-app-launch-event-hiappevent-watcher-app-launch-event-md-bd4.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_startup_duration_events_hiappevent_watcher_app_launch_event_hiappevent_watcher_app_launch_event_md_bd4_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event/hiappevent-watcher-app-launch-event","title":"启动耗时事件介绍","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event/hiappevent-watcher-app-launch-event.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"启动耗时事件介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-launch-event","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅应用终止事件（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events-ndk/"},"next":{"title":"订阅启动耗时事件（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event/hiappevent-watcher-app-launch-event.md


const frontMatter = {
	title: '启动耗时事件介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-launch-event',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '启动耗时事件介绍';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "事件检测原理",
  "id": "事件检测原理",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "启动耗时优化指导",
  "id": "启动耗时优化指导",
  "level": 2
}, {
  "value": "事件params属性描述",
  "id": "事件params属性描述",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "启动耗时事件介绍",
        children: "启动耗时事件介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在使用应用时，如果出现点击应用后启动缓慢的情况，并且整个过程超过了一定的时间，就会被定义为启动耗时事件。系统会采集相关流程耗时，并生成HiappEvent事件，供应用开发者分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何使用HiAppEvent提供订阅启动耗时事件的接口可参见以下文档："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-arkts",
          children: "订阅启动耗时事件（ArkTS）"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(954440)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动耗时事件支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-faproject",
        children: "元服务场景"
      }), "下使用HiAppEvent进行订阅。不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-typical-scenarios/app-clone",
        children: "应用分身场景"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ime-kit/inputmethod-application-guide",
        children: "输入法应用场景"
      }), "下使用HiAppEvent进行订阅。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件检测原理",
      children: "事件检测原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检测原理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/perf-detection",
        children: "启动耗时事件检测"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统在监控应用启动时，依赖多个系统内部事件的打点记录。若这些事件在完成应用启动的5秒内全部完成打点上报，系统将立即生成启动耗时事件，并通过回调函数将事件内容传递给应用；若非关键事件存在缺失，系统将在5秒后根据实际接收到的事件生成启动耗时事件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["单设备上的所有应用在每个自然日内最多可以累计上报2000次启动耗时事件，系统会在每日 0 点重置统计计数。若在一次启动流程中，涉及多个同一依赖事件的触发（如在启动过程中调用多次", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability-1",
          children: "startAbility"
        }), "），会导致实际可上报的启动耗时事件数量少于理论上限。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["启动完成前（如应用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-launch-overview/ide-profiler-launch-case",
          children: "首帧绘制"
        }), "前）终止启动不会生成启动耗时事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动耗时优化指导",
      children: "启动耗时优化指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动耗时优化方法可参看", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization",
        children: "优化应用冷启动时延问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件params属性描述",
      children: "事件params属性描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "事件生成时间，单位为ms。"
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
            children: "process_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动类型。0：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization#section1235404851116",
              children: "冷启动"
            }), "，1：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization#section1235404851116",
              children: "热启动"
            }), "，4：温启动（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/preload-application",
              children: "预加载"
            }), "后启动应用）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon_input_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击桌面应用图标离手时间戳，若无法获取（如语音唤醒）则表示系统开始启动应用的时间戳，单位为ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animation_finish_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动效完成耗时，单位为ms。  在无法获取点击离手时间戳或依赖的系统内部事件打点次数超限时，该值为 0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extend_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手指离开屏幕到开发者调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext#reportdrawncompleted12",
              children: "reportDrawnCompleted"
            }), "接口时间，单位为ms。  若用户不调用或手指离开屏幕后5s未调用reportDrawnCompleted接口，该值为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response_latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指离开屏幕到动效开始的耗时，单位为ms。  在无法获取点击离手时间戳或依赖的系统内部事件打点次数超限时，该值为 0。从API version 22开始提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "laun_to_start_ability_dur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指离开屏幕到系统开始启动Ability的耗时，单位为ms。  在无法获取点击离手时间戳或依赖的系统内部事件打点次数超限时，该值为 0。从API version 22开始提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startability_processstart_dur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization#section196451814101216",
              children: "冷启动过程"
            }), "中系统开始启动Ability到完成应用进程创建的耗时，单位为ms。  仅在冷启动中存在该值，若依赖的系统内部事件打点次数超限或在非冷启动类型中，该值为 0。从API version 22开始提供。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "processstart_to_appattach_dur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冷启动过程中应用进程初始化的耗时，单位为ms。  仅在冷启动中存在该值，若依赖的系统内部事件打点次数超限或在非冷启动类型中，该值为 0。从API version 22开始提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appattach_to_appforeground_dur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冷启动过程中完成应用进程初始化到应用切换到前台的耗时，单位为ms。  该阶段包括资源加载、虚拟机创建、Application&Ability 对象的创建与初始化、依赖模块加载等。  仅在冷启动中存在该值，若依赖的系统内部事件打点次数超限或在非冷启动类型中，该值为 0。从API version 22开始提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startability_appforeground_dur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动过程中系统开始启动Ability到应用切换到前台状态的耗时，单位为ms。  在冷启动中，该值为startability_processstart_dur、processstart_to_appattach_dur和appattach_to_appforeground_dur三者之和；其余启动类型中，该过程包括系统启动Ability和应用切换到前台。从API version 22开始提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appforegr_abilityonforegr_dur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用切换到前台状态到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            }), "切换至前台（系统触发", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
              children: "onForeground"
            }), "回调）的耗时，单位为ms。从API version 22开始提供。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityonforeg_startwindow_dur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统完成创建应用窗口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/application-window-stage",
              children: "WindowStage"
            }), "（系统触发", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
              children: "onWindowStageCreate()"
            }), "回调）到UIAbility切换到前台的耗时，单位为ms。  仅在冷启动和预加载启动中存在该值，若依赖的系统内部事件打点次数超限或在热启动类型中，该值为0。从API version 22开始提供。"]
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
954440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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