"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["520621"], {
182614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_background_task_kit_work_scheduler_work_scheduler_md_ad4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-background-task-kit-work-scheduler-work-scheduler-md-ad4.json
var site_docs_background_task_kit_work_scheduler_work_scheduler_md_ad4_namespaceObject = JSON.parse('{"id":"background-task-kit/work-scheduler/work-scheduler","title":"延迟任务(ArkTS)","description":"概述","source":"@site/docs/background-task-kit/work-scheduler/work-scheduler.md","sourceDirName":"background-task-kit/work-scheduler","slug":"/background-task-kit/work-scheduler/","permalink":"/harmonyos-docs-site/background-task-kit/work-scheduler/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"延迟任务(ArkTS)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/work-scheduler","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"长时任务(ArkTS)","permalink":"/harmonyos-docs-site/background-task-kit/continuous-task/"},"next":{"title":"代理提醒(ArkTS)","permalink":"/harmonyos-docs-site/background-task-kit/agent-powered-reminder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/background-task-kit/work-scheduler/work-scheduler.md


const frontMatter = {
	title: '延迟任务(ArkTS)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/work-scheduler',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '延迟任务(ArkTS)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 3
}, {
  "value": "运行原理",
  "id": "运行原理",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "实现延迟任务回调扩展能力",
  "id": "实现延迟任务回调扩展能力",
  "level": 3
}, {
  "value": "实现延迟任务调度",
  "id": "实现延迟任务调度",
  "level": 3
}, {
  "value": "延迟任务调度功能验证",
  "id": "延迟任务调度功能验证",
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
        id: "延迟任务arkts",
        children: "延迟任务(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用退至后台后，需要执行时效性要求不高的任务，例如有网络时不定期主动获取邮件等，可以使用延迟任务。当应用满足设定的触发条件（包括网络类型、充电类型、存储状态、电池状态、定时状态等）时，将任务添加到执行队列，系统会根据内存、功耗、设备温度、用户使用习惯等统一调度拉起应用，执行相应的延迟任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行原理",
      children: "运行原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 延迟任务实现原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(353310)/* ["default"] */.A) + "",
        width: "1156",
        height: "633"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用调用延迟任务接口添加、删除、查询延迟任务，延迟任务管理模块会根据任务设置的条件（通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workinfo",
        children: "WorkInfo"
      }), "参数设置，包括网络类型、充电类型、存储状态等）和系统状态（包括内存、功耗、设备温度、用户使用习惯等）统一决策调度时机。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当满足调度条件或调度结束时，系统会回调应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-workschedulerextensionability/js-apis-workschedulerextensionability",
        children: "WorkSchedulerExtensionAbility"
      }), "中 onWorkStart() 或 onWorkStop() 的方法，同时会为应用单独创建一个Extension扩展进程用以承载", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-workschedulerextensionability/js-apis-workschedulerextensionability",
        children: "WorkSchedulerExtensionAbility"
      }), "，并给", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-workschedulerextensionability/js-apis-workschedulerextensionability",
        children: "WorkSchedulerExtensionAbility"
      }), "一定的活动周期，开发者可以在对应回调方法中实现自己的任务逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数量限制"
            })
          }), "：一个应用同一时刻最多申请10个延迟任务。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "执行频率限制"
            })
          }), "：系统会根据应用的活跃分组，对延迟任务做分级管控，限制延迟任务调度的执行频率。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 应用活跃程度分组"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "应用活跃分组"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "延迟任务执行频率"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "活跃分组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最小间隔2小时"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "经常使用分组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最小间隔4小时"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "常用分组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最小间隔24小时"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "极少使用分组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最小间隔48小时"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "受限使用分组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "禁止"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "从未使用分组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "禁止"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "超时"
            })
          }), "：WorkSchedulerExtensionAbility单次回调最长运行2分钟。如果超时不取消，系统会终止对应的Extension进程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "调度延迟"
            })
          }), "：系统会根据内存、功耗、设备温度、用户使用习惯等统一调度，如当系统内存资源不足或温度达到一定档位时，系统将延迟调度该任务。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WorkSchedulerExtensionAbility接口调用限制"
            })
          }), "：为保障系统安全性和稳定性，防止延迟任务滥用系统资源，对WorkSchedulerExtensionAbility能力进行管控，在WorkSchedulerExtensionAbility中限制以下接口的调用："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager",
            children: "@ohos.resourceschedule.backgroundTaskManager (后台任务管理)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/background-tasks-api/background-tasks-arkts/background-tasks-arkts-dep/js-apis-backgroundtaskmanager/js-apis-backgroundtaskmanager",
            children: "@ohos.backgroundTaskManager (后台任务管理)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
            children: "@ohos.multimedia.camera (相机管理)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio/arkts-apis-audio",
            children: "@ohos.multimedia.audio (音频管理)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media/arkts-apis-media",
            children: "@ohos.multimedia.media (媒体服务)"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 延迟任务主要接口"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是延迟任务开发使用的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler",
        children: "延迟任务调度"
      }), "文档。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulerstartwork",
              children: "startWork(work: WorkInfo): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请延迟任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulerstopwork",
              children: "stopWork(work: WorkInfo, needCancel?: boolean): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消延迟任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulergetworkstatus",
              children: "getWorkStatus(workId: number, callback: AsyncCallback<WorkInfo>): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取延迟任务状态（Callback形式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulergetworkstatus-1",
              children: "getWorkStatus(workId: number): Promise<WorkInfo>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取延迟任务状态（Promise形式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulerobtainallworks10",
              children: "obtainAllWorks(callback: AsyncCallback<Array<WorkInfo>>): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有延迟任务（Callback形式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulerobtainallworks",
              children: "obtainAllWorks(): Promise<Array<WorkInfo>>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有延迟任务（Promise形式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulerstopandclearworks",
              children: "stopAndClearWorks(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止并清除任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulerislastworktimeout10",
              children: "isLastWorkTimeOut(workId: number, callback: AsyncCallback<boolean>): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取上次任务是否超时（针对RepeatWork，Callback形式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler#workschedulerislastworktimeout",
              children: "isLastWorkTimeOut(workId: number): Promise<boolean>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取上次任务是否超时（针对RepeatWork，Promise形式）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 延迟任务回调接口"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是延迟任务回调开发使用的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-workschedulerextensionability/js-apis-workschedulerextensionability",
        children: "延迟任务调度回调"
      }), "文档。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-workschedulerextensionability/js-apis-workschedulerextensionability#onworkstart",
              children: "onWorkStart(work: workScheduler.WorkInfo): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "延迟调度任务开始的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-workschedulerextensionability/js-apis-workschedulerextensionability#onworkstop",
              children: "onWorkStop(work: workScheduler.WorkInfo): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "延迟调度任务结束的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "延迟任务调度开发步骤分为两步：实现延迟任务调度扩展能力、实现延迟任务调度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "延迟任务调度扩展能力"
          })
        }), "：实现WorkSchedulerExtensionAbility开始和结束的回调接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "延迟任务调度"
          })
        }), "：调用延迟任务接口，实现延迟任务申请、取消等功能。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现延迟任务回调扩展能力",
      children: "实现延迟任务回调扩展能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建工程目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程entry Module对应的ets目录(./entry/src/main/ets)下，新建目录及ArkTS文件，例如新建一个目录并命名为WorkSchedulerExtension。在WorkSchedulerExtension目录下，新建一个ArkTS文件并命名为WorkSchedulerExtension.ets，用以实现延迟任务回调接口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { WorkSchedulerExtensionAbility, workScheduler } from '@kit.BackgroundTasksKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现WorkSchedulerExtension生命周期接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class WorkSchedulerAbility extends WorkSchedulerExtensionAbility {\n  // 延迟任务开始回调\n  onWorkStart(workInfo: workScheduler.WorkInfo) {\n    console.info(`onWorkStart, workInfo = ${JSON.stringify(workInfo)}`);\n    // 打印 parameters中的参数，如：参数key1\n    console.info(`work info parameters: ${JSON.parse(workInfo.parameters?.toString()).key1}`);\n  }\n\n  // 延迟任务结束回调。当延迟任务2分钟超时或应用调用stopWork接口取消任务时，触发该回调。\n  onWorkStop(workInfo: workScheduler.WorkInfo) {\n    console.info(`onWorkStop, workInfo is ${JSON.stringify(workInfo)}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中注册WorkSchedulerExtensionAbility，并设置如下标签："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "type标签设置为“workScheduler”。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "srcEntry标签设置为当前ExtensionAbility组件所对应的代码路径。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n      \"extensionAbilities\": [\n        {\n          \"name\": \"MyWorkSchedulerExtensionAbility\",\n          \"srcEntry\": \"./ets/WorkSchedulerExtension/WorkSchedulerExtension.ets\",\n          \"type\": \"workScheduler\"\n        }\n      ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现延迟任务调度",
      children: "实现延迟任务调度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { workScheduler } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请延迟任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let workInfo: workScheduler.WorkInfo = {\n  workId: 1,\n  networkType: workScheduler.NetworkType.NETWORK_TYPE_ANY,\n  bundleName: 'ohos.samples.workschedulerextensionability',\n  abilityName: 'WorkSchedulerAbility',\n  // ...\n}\n\ntry {\n  workScheduler.startWork(workInfo);\n  console.info(`startWork success`);\n}\ncatch (error) {\n  console.error(`startWork failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消延迟任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建workinfo\nlet workInfo: workScheduler.WorkInfo = {\n  workId: 1,\n  networkType: workScheduler.NetworkType.NETWORK_TYPE_WIFI,\n  bundleName: 'ohos.samples.workschedulerextensionability',\n  abilityName: 'WorkSchedulerAbility',\n}\n\ntry {\n  workScheduler.stopWork(workInfo);\n  console.info(`stopWork success`);\n} catch (error) {\n  console.error(`stopWork failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "延迟任务调度功能验证",
      children: "延迟任务调度功能验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认延迟任务WorkSchedulerExtensionAbility回调方法onWorkStart、onWorkStop实现是否正确、是否可以成功回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["延迟任务申请成功之后，需要等到条件满足后才可以执行延迟任务回调，为了快速验证延迟任务回调功能是否正确，可以通过以下", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
        children: "hidumper命令"
      }), "手动触发延迟任务执行回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hidumper -s 1904 -a '-t com.example.application MyWorkSchedulerExtensionAbility'\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------WorkSchedule----------------------------------\n"
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
353310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438303-7f2de53233f62a6019c307a80f38994b.png");

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