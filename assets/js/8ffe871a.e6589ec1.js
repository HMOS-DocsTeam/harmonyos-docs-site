"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["824080"], {
886679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_background_tasks_api_background_tasks_arkts_js_apis_resourceschedule_backgroundtaskmanager_js_apis_resourceschedule_backgroundtaskmanager_md_8ff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-background-tasks-api-background-tasks-arkts-js-apis-resourceschedule-backgroundtaskmanager-js-apis-resourceschedule-backgroundtaskmanager-md-8ff.json
var site_docs_ref_background_tasks_api_background_tasks_arkts_js_apis_resourceschedule_backgroundtaskmanager_js_apis_resourceschedule_backgroundtaskmanager_md_8ff_namespaceObject = JSON.parse('{"id":"background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager","title":"@ohos.resourceschedule.backgroundTaskManager (后台任务管理)","description":"本模块提供申请后台任务的接口。当应用退至后台时，开发者可以通过本模块接口为应用申请短时、长时任务，避免应用进程被终止或挂起。开发指导请参考长时任务开发指南、短时任务开发指南。","source":"@site/docs-ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager.md","sourceDirName":"background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager","slug":"/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager","permalink":"/harmonyos-docs-site/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ohos.resourceschedule.backgroundTaskManager (后台任务管理)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resourceschedule-backgroundtaskmanager","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-resourceschedule-backgroundtaskmanager"},"sidebar":"ref","previous":{"title":"@ohos.reminderAgentManager (后台代理提醒)","permalink":"/harmonyos-docs-site/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager"},"next":{"title":"@ohos.resourceschedule.workScheduler (延迟任务调度)","permalink":"/harmonyos-docs-site/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-workscheduler/js-apis-resourceschedule-workscheduler"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager.md


const frontMatter = {
	title: '@ohos.resourceschedule.backgroundTaskManager (后台任务管理)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resourceschedule-backgroundtaskmanager',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-resourceschedule-backgroundtaskmanager'
};
const contentTitle = '@ohos.resourceschedule.backgroundTaskManager (后台任务管理)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "backgroundTaskManager.requestSuspendDelay",
  "id": "backgroundtaskmanagerrequestsuspenddelay",
  "level": 2
}, {
  "value": "backgroundTaskManager.getRemainingDelayTime",
  "id": "backgroundtaskmanagergetremainingdelaytime",
  "level": 2
}, {
  "value": "backgroundTaskManager.getRemainingDelayTime",
  "id": "backgroundtaskmanagergetremainingdelaytime-1",
  "level": 2
}, {
  "value": "backgroundTaskManager.cancelSuspendDelay",
  "id": "backgroundtaskmanagercancelsuspenddelay",
  "level": 2
}, {
  "value": "backgroundTaskManager.getTransientTaskInfo20+",
  "id": "backgroundtaskmanagergettransienttaskinfo20",
  "level": 2
}, {
  "value": "backgroundTaskManager.startBackgroundRunning",
  "id": "backgroundtaskmanagerstartbackgroundrunning",
  "level": 2
}, {
  "value": "backgroundTaskManager.startBackgroundRunning",
  "id": "backgroundtaskmanagerstartbackgroundrunning-1",
  "level": 2
}, {
  "value": "backgroundTaskManager.stopBackgroundRunning",
  "id": "backgroundtaskmanagerstopbackgroundrunning",
  "level": 2
}, {
  "value": "backgroundTaskManager.stopBackgroundRunning",
  "id": "backgroundtaskmanagerstopbackgroundrunning-1",
  "level": 2
}, {
  "value": "backgroundTaskManager.startBackgroundRunning12+",
  "id": "backgroundtaskmanagerstartbackgroundrunning12",
  "level": 2
}, {
  "value": "backgroundTaskManager.updateBackgroundRunning12+",
  "id": "backgroundtaskmanagerupdatebackgroundrunning12",
  "level": 2
}, {
  "value": "backgroundTaskManager.getAllContinuousTasks20+",
  "id": "backgroundtaskmanagergetallcontinuoustasks20",
  "level": 2
}, {
  "value": "backgroundTaskManager.getAllContinuousTasks20+",
  "id": "backgroundtaskmanagergetallcontinuoustasks20-1",
  "level": 2
}, {
  "value": "backgroundTaskManager.on(&#39;continuousTaskCancel&#39;)15+",
  "id": "backgroundtaskmanageroncontinuoustaskcancel15",
  "level": 2
}, {
  "value": "backgroundTaskManager.off(&#39;continuousTaskCancel&#39;)15+",
  "id": "backgroundtaskmanageroffcontinuoustaskcancel15",
  "level": 2
}, {
  "value": "backgroundTaskManager.on(&#39;continuousTaskSuspend&#39;)20+",
  "id": "backgroundtaskmanageroncontinuoustasksuspend20",
  "level": 2
}, {
  "value": "backgroundTaskManager.off(&#39;continuousTaskSuspend&#39;)20+",
  "id": "backgroundtaskmanageroffcontinuoustasksuspend20",
  "level": 2
}, {
  "value": "backgroundTaskManager.on(&#39;continuousTaskActive&#39;)20+",
  "id": "backgroundtaskmanageroncontinuoustaskactive20",
  "level": 2
}, {
  "value": "backgroundTaskManager.off(&#39;continuousTaskActive&#39;)20+",
  "id": "backgroundtaskmanageroffcontinuoustaskactive20",
  "level": 2
}, {
  "value": "backgroundTaskManager.startBackgroundRunning21+",
  "id": "backgroundtaskmanagerstartbackgroundrunning21",
  "level": 2
}, {
  "value": "backgroundTaskManager.updateBackgroundRunning21+",
  "id": "backgroundtaskmanagerupdatebackgroundrunning21",
  "level": 2
}, {
  "value": "backgroundTaskManager.stopBackgroundRunning21+",
  "id": "backgroundtaskmanagerstopbackgroundrunning21",
  "level": 2
}, {
  "value": "DelaySuspendInfo",
  "id": "delaysuspendinfo",
  "level": 2
}, {
  "value": "TransientTaskInfo20+",
  "id": "transienttaskinfo20",
  "level": 2
}, {
  "value": "BackgroundMode",
  "id": "backgroundmode",
  "level": 2
}, {
  "value": "ContinuousTaskNotification12+",
  "id": "continuoustasknotification12",
  "level": 2
}, {
  "value": "ContinuousTaskCancelInfo15+",
  "id": "continuoustaskcancelinfo15",
  "level": 2
}, {
  "value": "ContinuousTaskCancelReason15+",
  "id": "continuoustaskcancelreason15",
  "level": 2
}, {
  "value": "BackgroundSubMode16+",
  "id": "backgroundsubmode16",
  "level": 2
}, {
  "value": "BackgroundModeType16+",
  "id": "backgroundmodetype16",
  "level": 2
}, {
  "value": "ContinuousTaskSuspendInfo20+",
  "id": "continuoustasksuspendinfo20",
  "level": 2
}, {
  "value": "ContinuousTaskSuspendReason20+",
  "id": "continuoustasksuspendreason20",
  "level": 2
}, {
  "value": "ContinuousTaskActiveInfo20+",
  "id": "continuoustaskactiveinfo20",
  "level": 2
}, {
  "value": "ContinuousTaskInfo20+",
  "id": "continuoustaskinfo20",
  "level": 2
}, {
  "value": "ContinuousTaskRequest21+",
  "id": "continuoustaskrequest21",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "isModeSupported21+",
  "id": "ismodesupported21",
  "level": 3
}, {
  "value": "requestAuthFromUser22+",
  "id": "requestauthfromuser22",
  "level": 3
}, {
  "value": "checkSpecialScenarioAuth22+",
  "id": "checkspecialscenarioauth22",
  "level": 3
}, {
  "value": "BackgroundTaskMode21+",
  "id": "backgroundtaskmode21",
  "level": 2
}, {
  "value": "BackgroundTaskSubmode21+",
  "id": "backgroundtasksubmode21",
  "level": 2
}, {
  "value": "UserAuthResult22+",
  "id": "userauthresult22",
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
        id: "ohosresourceschedulebackgroundtaskmanager-后台任务管理",
        children: "@ohos.resourceschedule.backgroundTaskManager (后台任务管理)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供申请后台任务的接口。当应用退至后台时，开发者可以通过本模块接口为应用申请短时、长时任务，避免应用进程被终止或挂起。开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/continuous-task",
        children: "长时任务开发指南"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/transient-task",
        children: "短时任务开发指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831785)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerrequestsuspenddelay",
      children: "backgroundTaskManager.requestSuspendDelay"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请短时任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(810357)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["短时任务的申请和使用过程中的约束与限制请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/transient-task#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请短时任务的原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "短时任务即将超时的回调函数，一般在超时前6秒，通过此回调通知应用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#delaysuspendinfo",
              children: "DelaySuspendInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回短时任务信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller information verification failed for a transient task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { backgroundTaskManager } from '@kit.BackgroundTasksKit';\n\nlet myReason = 'test requestSuspendDelay';\ntry {\n  let delayInfo = backgroundTaskManager.requestSuspendDelay(myReason, () => {\n  // 回调函数。应用申请的短时任务即将超时，通过此函数回调应用，执行一些清理和标注工作，并取消短时任务\n  // 此处回调与应用的业务功能不耦合，短时任务申请成功后，正常执行应用本身的业务\n    console.info(\"Request suspension delay will time out.\");\n  })\n  let id = delayInfo.requestId;\n  let time = delayInfo.actualDelayTime;\n  console.info(\"The requestId is: \" + id);\n  console.info(\"The actualDelayTime is: \" + time);\n} catch (error) {\n  console.error(`requestSuspendDelay failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagergetremainingdelaytime",
      children: "backgroundTaskManager.getRemainingDelayTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRemainingDelayTime(requestId: number, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本次短时任务的剩余时间，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["短时任务的请求ID。通过申请短时任务", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerrequestsuspenddelay",
              children: "requestSuspendDelay"
            }), "接口获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回本次短时任务的剩余时间，单位：ms。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller information verification failed for a transient task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { backgroundTaskManager } from '@kit.BackgroundTasksKit';\n\nlet id = 1;\nbackgroundTaskManager.getRemainingDelayTime(id, (error: BusinessError, res: number) => {\n  if(error) {\n    console.error(`callback => Operation getRemainingDelayTime failed. code is ${error.code} message is ${error.message}`);\n  } else {\n    console.info('callback => Operation getRemainingDelayTime succeeded. Data: ' + JSON.stringify(res));\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagergetremainingdelaytime-1",
      children: "backgroundTaskManager.getRemainingDelayTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRemainingDelayTime(requestId: number): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本次短时任务的剩余时间，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["短时任务的请求ID。通过申请短时任务", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerrequestsuspenddelay",
              children: "requestSuspendDelay"
            }), "接口获取。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象，返回本次短时任务的剩余时间，单位：ms。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller information verification failed for a transient task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { backgroundTaskManager } from '@kit.BackgroundTasksKit';\n\nlet id = 1;\nbackgroundTaskManager.getRemainingDelayTime(id).then((res: number) => {\n  console.info('promise => Operation getRemainingDelayTime succeeded. Data: ' + JSON.stringify(res));\n}).catch((error: BusinessError) => {\n  console.error(`promise => Operation getRemainingDelayTime failed. code is ${error.code} message is ${error.message}`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagercancelsuspenddelay",
      children: "backgroundTaskManager.cancelSuspendDelay"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancelSuspendDelay(requestId: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消短时任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["短时任务的请求ID。通过申请短时任务", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerrequestsuspenddelay",
              children: "requestSuspendDelay"
            }), "接口获取。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller information verification failed for a transient task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { backgroundTaskManager } from '@kit.BackgroundTasksKit';\n\nlet id = 1;\ntry {\n  backgroundTaskManager.cancelSuspendDelay(id);\n} catch (error) {\n  console.error(`cancelSuspendDelay failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagergettransienttaskinfo20",
      children: "backgroundTaskManager.getTransientTaskInfo20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getTransientTaskInfo(): Promise<TransientTaskInfo>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有短时任务信息，如当日剩余总配额等，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#transienttaskinfo20",
              children: "TransientTaskInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回所有短时任务信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller information verification failed for a transient task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  backgroundTaskManager.getTransientTaskInfo().then((res: backgroundTaskManager.TransientTaskInfo) => {\n    console.info(`Operation getTransientTaskInfo succeeded. data: ` + JSON.stringify(res));\n  }).catch((error : BusinessError) => {\n    console.error(`Operation getTransientTaskInfo failed. code is ${error.code} message is ${error.message}`);\n  });\n} catch (error) {\n  console.error(`Operation getTransientTaskInfo failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerstartbackgroundrunning",
      children: "backgroundTaskManager.startBackgroundRunning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请长时任务，支持申请一种类型，使用callback异步回调。长时任务申请成功后，会有通知栏消息，没有提示音。一个UIAbility（FA模型则为ServiceAbility）同一时刻仅支持通过本接口支持申请一个长时任务，可以通过API version 21新增接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning21",
        children: "startBackgroundRunning"
      }), "申请多个长时任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundmode",
              children: "BackgroundMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知参数，用于指定点击长时任务通知后跳转的界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，申请长时任务成功时，err为undefined，否则为错误对象。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not System App."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { wantAgent, WantAgent } from '@kit.AbilityKit';\n// 在元服务中，请删除WantAgent导入\n\nfunction callback(error: BusinessError, data: void) {\n  if (error) {\n    console.error(`Operation startBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n  } else {\n    console.info(\"Operation startBackgroundRunning succeeded\");\n  }\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n      // 点击通知后，将要执行的动作列表\n      wants: [\n        {\n          bundleName: \"com.example.myapplication\",\n          abilityName: \"EntryAbility\"\n        }\n      ],\n      // 点击通知后，动作类型\n      actionType: wantAgent.OperationType.START_ABILITY,\n      // 使用者自定义的一个私有值\n      requestCode: 0,\n      // 点击通知后，动作执行属性\n      wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n\n    try {\n      // 通过wantAgent模块下getWantAgent方法获取WantAgent对象\n      // 在元服务中，请使用wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: object) => {替换下面一行代码\n      wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: WantAgent) => {\n        try {\n          backgroundTaskManager.startBackgroundRunning(this.context,\n            backgroundTaskManager.BackgroundMode.AUDIO_PLAYBACK, wantAgentObj, callback)\n        } catch (error) {\n          console.error(`Operation startBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n        }\n      });\n    } catch (error) {\n      console.error(`Operation getWantAgent failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerstartbackgroundrunning-1",
      children: "backgroundTaskManager.startBackgroundRunning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请长时任务，支持申请一种类型，使用Promise异步回调。长时任务申请成功后，会有通知栏消息，没有提示音。一个UIAbility（FA模型则为ServiceAbility）同一时刻仅支持通过本接口支持申请一个长时任务，可以通过API version 21新增接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning21",
        children: "startBackgroundRunning"
      }), "申请多个长时任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundmode",
              children: "BackgroundMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知参数，用于指定点击长时任务通知后跳转的界面。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "无返回结果的Promise对象。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not System App."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { wantAgent, WantAgent } from '@kit.AbilityKit';\n// 在元服务中，请删除WantAgent导入\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n      // 点击通知后，将要执行的动作列表\n      wants: [\n        {\n          bundleName: \"com.example.myapplication\",\n          abilityName: \"EntryAbility\"\n        }\n      ],\n      // 点击通知后，动作类型\n      actionType: wantAgent.OperationType.START_ABILITY,\n      // 使用者自定义的一个私有值\n      requestCode: 0,\n      // 点击通知后，动作执行属性\n      wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n\n    try {\n      // 通过wantAgent模块下getWantAgent方法获取WantAgent对象\n      // 在元服务中，请使用wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: object) => {替换下面一行代码\n      wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: WantAgent) => {\n        try {\n          backgroundTaskManager.startBackgroundRunning(this.context,\n            backgroundTaskManager.BackgroundMode.AUDIO_PLAYBACK, wantAgentObj).then(() => {\n              console.info(\"Operation startBackgroundRunning succeeded\");\n            }).catch((error: BusinessError) => {\n              console.error(`Operation startBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n            });\n        } catch (error) {\n          console.error(`Operation startBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n        }\n      });\n    } catch (error) {\n      console.error(`Operation getWantAgent failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerstopbackgroundrunning",
      children: "backgroundTaskManager.stopBackgroundRunning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopBackgroundRunning(context: Context, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消当前UIAbility（FA模型则为ServiceAbility）下所有长时任务，使用callback异步回调。也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstopbackgroundrunning21",
        children: "stopBackgroundRunning"
      }), "接口取消指定Id的长时任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，取消长时任务成功时，err为undefined，否则为错误对象。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nfunction callback(error: BusinessError, data: void) {\n  if (error) {\n    console.error(`Operation stopBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n  } else {\n    console.info(\"Operation stopBackgroundRunning succeeded\");\n  }\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.stopBackgroundRunning(this.context, callback);\n    } catch (error) {\n      console.error(`Operation stopBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerstopbackgroundrunning-1",
      children: "backgroundTaskManager.stopBackgroundRunning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopBackgroundRunning(context: Context): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消当前UIAbility（FA模型则为ServiceAbility）下所有长时任务，使用Promise异步回调。也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstopbackgroundrunning21",
        children: "stopBackgroundRunning"
      }), "接口取消指定Id的长时任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "无返回结果的Promise对象。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.stopBackgroundRunning(this.context).then(() => {\n        console.info(\"Operation stopBackgroundRunning succeeded\");\n      }).catch((error: BusinessError) => {\n        console.error(`Operation stopBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n      });\n    } catch (error) {\n      console.error(`Operation stopBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerstartbackgroundrunning12",
      children: "backgroundTaskManager.startBackgroundRunning12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent): Promise<ContinuousTaskNotification>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请长时任务，支持申请多种类型，使用Promise异步回调。长时任务申请成功后，会有通知栏消息，没有提示音。一个UIAbility（FA模型则为ServiceAbility）同一时刻仅支持通过本接口支持申请一个长时任务，可以通过API version 21新增接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning21",
        children: "startBackgroundRunning"
      }), "申请多个长时任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgModes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务类型，取值范围请参考长时任务类型中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/background-task-kit/continuous-task#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
              children: "配置项"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 支持传入一个或多个类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知参数，用于指定点击长时任务通知后跳转的界面。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#continuoustasknotification12",
              children: "ContinuousTaskNotification"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustasknotification12",
              children: "ContinuousTaskNotification"
            }), "类型对象。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { notificationManager } from '@kit.NotificationKit';\nimport { wantAgent, WantAgent } from '@kit.AbilityKit';\n// 在元服务中，请删除WantAgent导入\n\nexport default class EntryAbility extends UIAbility {\n  id: number = 0; // 保存通知id\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n      // 点击通知后，将要执行的动作列表\n      wants: [\n        {\n          bundleName: \"com.example.myapplication\",\n          abilityName: \"EntryAbility\"\n        }\n      ],\n      // 点击通知后，动作类型\n      actionType: wantAgent.OperationType.START_ABILITY,\n      // 使用者自定义的一个私有值\n      requestCode: 0,\n      // 点击通知后，动作执行属性\n      wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n\n    try {\n      // 通过wantAgent模块下getWantAgent方法获取WantAgent对象\n      // 在元服务中，请使用wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: object) => {替换下面一行代码\n      wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: WantAgent) => {\n        try {\n          let list: Array<string> = [\"dataTransfer\"];\n          // 在元服务中，let list: Array<string> = [\"audioPlayback\"];\n          backgroundTaskManager.startBackgroundRunning(this.context, list, wantAgentObj).then((res: backgroundTaskManager.ContinuousTaskNotification) => {\n            console.info(\"Operation startBackgroundRunning succeeded\");\n            // 对于上传下载类的长时任务，应用可以使用res中返回的notificationId来更新通知，比如发送带进度条的模板通知\n            this.id = res.notificationId;\n          }).catch((error: BusinessError) => {\n            console.error(`Operation startBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n          });\n        } catch (error) {\n          console.error(`Operation startBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n        }\n      });\n    } catch (error) {\n      console.error(`Operation getWantAgent failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n\n  // 应用更新进度\n  updateProcess(process: number) {\n    // 定义通知类型，更新进度时的通知类型必须为实况窗\n    let downLoadTemplate: notificationManager.NotificationTemplate = {\n      name: 'downloadTemplate', // 当前只支持downloadTemplate，保持不变\n      data: {\n        title: '文件下载：music.mp4', // 必填\n        fileName: 'senTemplate', // 必填\n        progressValue: process, // 应用更新进度值，自定义\n      }\n    };\n    let request: notificationManager.NotificationRequest = {\n      content: {\n        // 系统实况类型，保持不变\n        notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_SYSTEM_LIVE_VIEW,\n        systemLiveView: {\n          typeCode: 8, // 上传下载类型需要填写 8，当前仅支持此类型。保持不变\n          title: \"test\", // 应用自定义\n          text: \"test\", // 应用自定义\n        }\n      },\n      id: this.id, // 必须是申请长时任务返回的id，否则应用更新通知失败\n      notificationSlotType: notificationManager.SlotType.LIVE_VIEW, // 实况窗类型，保持不变\n      template: downLoadTemplate // 应用需要设置的模版名称\n    };\n\n    try {\n      notificationManager.publish(request).then(() => {\n        console.info(\"publish success, id= \" + this.id);\n      }).catch((err: BusinessError) => {\n        console.error(`publish fail: ${JSON.stringify(err)}`);\n      });\n    } catch (err) {\n      console.error(`publish fail: ${JSON.stringify(err)}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerupdatebackgroundrunning12",
      children: "backgroundTaskManager.updateBackgroundRunning12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateBackgroundRunning(context: Context, bgModes: string[]): Promise<ContinuousTaskNotification>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新长时任务类型，使用Promise异步回调。长时任务更新成功后，会有通知栏消息，没有提示音。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更新长时任务前，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagergetallcontinuoustasks20",
        children: "getAllContinuousTasks"
      }), "接口获取当前所有长时任务信息，如果当前没有已经存在的长时任务，会更新失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口仅支持更新如下三个接口申请的长时任务："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning",
        children: "startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>): void"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning-1",
        children: "startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning12",
        children: "startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent): Promise<ContinuousTaskNotification>"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bgModes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新后的长时任务类型，取值范围请参考长时任务类型中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/background-task-kit/continuous-task#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
              children: "配置项"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 支持传入一个或多个类型。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#continuoustasknotification12",
              children: "ContinuousTaskNotification"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustasknotification12",
              children: "ContinuousTaskNotification"
            }), "类型对象。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transaction failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      // 必须先执行startBackgroundRunning，才能调用updateBackgroundRunning，这里假设已经申请过\n      let list: Array<string> = [\"audioPlayback\"];\n      backgroundTaskManager.updateBackgroundRunning(this.context, list).then(() => {\n        console.info(\"Operation updateBackgroundRunning succeeded\");\n      }).catch((error: BusinessError) => {\n        console.error(`Operation updateBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n      });\n    } catch (error) {\n      console.error(`Operation updateBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagergetallcontinuoustasks20",
      children: "backgroundTaskManager.getAllContinuousTasks20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllContinuousTasks(context: Context): Promise<ContinuousTaskInfo[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有长时任务信息，如长时任务ID、长时任务类型等，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#continuoustaskinfo20",
              children: "ContinuousTaskInfo"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回所有长时任务信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      // 如果当前没有申请长时任务，则获取到一个空数组\n      backgroundTaskManager.getAllContinuousTasks(this.context).then((res: backgroundTaskManager.ContinuousTaskInfo[]) => {\n        console.info(`Operation getAllContinuousTasks succeeded. data: ` + JSON.stringify(res));\n      }).catch((error: BusinessError) => {\n        console.error(`Operation getAllContinuousTasks failed. code is ${error.code} message is ${error.message}`);\n      });\n    } catch (error) {\n      console.error(`Operation getAllContinuousTasks failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagergetallcontinuoustasks20-1",
      children: "backgroundTaskManager.getAllContinuousTasks20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllContinuousTasks(context: Context, includeSuspended: boolean): Promise<ContinuousTaskInfo[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有长时任务信息，如长时任务ID、长时任务类型等。可选择是否获取暂停的长时任务信息，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includeSuspended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否获取暂停的长时任务信息， true表示获取， false表示不获取。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#continuoustaskinfo20",
              children: "ContinuousTaskInfo"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回所有长时任务信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      // 如果当前没有申请长时任务，则获取到一个空数组\n      backgroundTaskManager.getAllContinuousTasks(this.context, false).then((res: backgroundTaskManager.ContinuousTaskInfo[]) => {\n        console.info(`Operation getAllContinuousTasks succeeded. data: ` + JSON.stringify(res));\n      }).catch((error: BusinessError) => {\n        console.error(`Operation getAllContinuousTasks failed. code is ${error.code} message is ${error.message}`);\n      });\n    } catch (error) {\n      console.error(`Operation getAllContinuousTasks failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanageroncontinuoustaskcancel15",
      children: "backgroundTaskManager.on('continuousTaskCancel')15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'continuousTaskCancel', callback: Callback<ContinuousTaskCancelInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册长时任务取消的监听，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件回调类型，固定取值为'continuousTaskCancel'，表示长时任务取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustaskcancelinfo15",
              children: "ContinuousTaskCancelInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回长时任务取消原因等信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible cause: 1. Callback parameter error; 2. Register a exist callback type; 3. Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nfunction callback(info: backgroundTaskManager.ContinuousTaskCancelInfo) {\n  console.info('continuousTaskCancel callback id ' + info.id);\n  console.info('continuousTaskCancel callback reason ' + info.reason);\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.on(\"continuousTaskCancel\", callback);\n    } catch (error) {\n      console.error(`Operation onContinuousTaskCancel failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanageroffcontinuoustaskcancel15",
      children: "backgroundTaskManager.off('continuousTaskCancel')15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解除长时任务取消的监听，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消长时任务，固定取值为'continuousTaskCancel'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustaskcancelinfo15",
              children: "ContinuousTaskCancelInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消监听的回调函数，未传入则取消所有注册回调。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible cause: 1. Callback parameter error; 2. Unregister type has not register; 3. Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nfunction callback(info: backgroundTaskManager.ContinuousTaskCancelInfo) {\n  console.info('continuousTaskCancel callback id ' + info.id);\n  console.info('continuousTaskCancel callback reason ' + info.reason);\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.off(\"continuousTaskCancel\", callback);\n    } catch (error) {\n      console.error(`Operation onContinuousTaskCancel failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanageroncontinuoustasksuspend20",
      children: "backgroundTaskManager.on('continuousTaskSuspend')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'continuousTaskSuspend', callback: Callback<ContinuousTaskSuspendInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册长时任务暂停的监听，使用callback异步回调。注册该回调后，如果系统首次检测到应用未执行相应的业务，不会直接取消长时任务，而是将长时任务标记为暂停状态，如果连续检测失败，仍会取消长时任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务处于暂停状态时，应用退后台会被挂起，回前台自动激活。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件回调类型，固定取值为'continuousTaskSuspend'，表示长时任务暂停。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustasksuspendinfo20",
              children: "ContinuousTaskSuspendInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回长时任务暂停原因等信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nfunction callback(info: backgroundTaskManager.ContinuousTaskSuspendInfo) {\n  console.info('continuousTaskSuspend callback continuousTaskId: ' + info.continuousTaskId);\n  console.info('continuousTaskSuspend callback suspendState: ' + info.suspendState);\n  console.info('continuousTaskSuspend callback suspendReason: ' + info.suspendReason);\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.on(\"continuousTaskSuspend\", callback);\n    } catch (error) {\n      console.error(`Operation onContinuousTaskSuspend failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanageroffcontinuoustasksuspend20",
      children: "backgroundTaskManager.off('continuousTaskSuspend')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消长时任务暂停的监听，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件回调类型，固定取值为'continuousTaskSuspend'，表示长时任务暂停。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustasksuspendinfo20",
              children: "ContinuousTaskSuspendInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消监听的回调函数，未传入则取消所有注册的暂停回调。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nfunction callback(info: backgroundTaskManager.ContinuousTaskSuspendInfo) {\n  console.info('continuousTaskSuspend callback continuousTaskId: ' + info.continuousTaskId);\n  console.info('continuousTaskSuspend callback suspendState: ' + info.suspendState);\n  console.info('continuousTaskSuspend callback suspendReason: ' + info.suspendReason);\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.off(\"continuousTaskSuspend\", callback);\n    } catch (error) {\n      console.error(`Operation offContinuousTaskSuspend failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanageroncontinuoustaskactive20",
      children: "backgroundTaskManager.on('continuousTaskActive')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'continuousTaskActive', callback: Callback<ContinuousTaskActiveInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册长时任务激活的监听，使用callback异步回调。应用回前台激活暂停的长时任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件回调类型，固定取值为'continuousTaskActive'，表示长时任务激活。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustaskactiveinfo20",
              children: "ContinuousTaskActiveInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回长时任务激活相关信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nfunction callback(info: backgroundTaskManager.ContinuousTaskActiveInfo) {\n  console.info('continuousTaskActive callback id: ' + info.id);\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.on(\"continuousTaskActive\", callback);\n    } catch (error) {\n      console.error(`Operation onContinuousTaskActive failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanageroffcontinuoustaskactive20",
      children: "backgroundTaskManager.off('continuousTaskActive')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消长时任务激活的监听，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件回调类型，固定取值为'continuousTaskActive'，表示长时任务激活。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustaskactiveinfo20",
              children: "ContinuousTaskActiveInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消监听的回调函数，未传入则取消所有注册的激活回调。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nfunction callback(info: backgroundTaskManager.ContinuousTaskActiveInfo) {\n  console.info('continuousTaskActive callback id: ' + info.id);\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.off(\"continuousTaskActive\", callback);\n    } catch (error) {\n      console.error(`Operation offContinuousTaskActive failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerstartbackgroundrunning21",
      children: "backgroundTaskManager.startBackgroundRunning21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请长时任务，一个UIAbility（FA模型则为ServiceAbility）下支持通过本接口申请多个长时任务，使用Promise异步回调。通过本接口申请长时任务时，支持与已存在的长时任务合并通知，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#continuoustaskrequest21",
        children: "ContinuousTaskRequest"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一时间最多可存在10个长时任务，长时任务申请成功后，会有通知栏消息，没有提示音。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果通过本接口申请的一个长时任务中同时包含多种类型，且包含数据传输类型，则在通知栏会发送2个长时任务通知，一个为数据传输类型，另一个为其他类型的合并通知。任意一个通知被移除时，长时任务取消，且另一个通知也会同步移除。接口返回的长时任务通知Id为数据传输类型的Id，主要用于数据传输的进度更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustaskrequest21",
              children: "ContinuousTaskRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务请求信息，包括长时任务主类型、子类型等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#continuoustasknotification12",
              children: "ContinuousTaskNotification"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回长时任务通知信息，包括长时任务ID等。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { wantAgent, WantAgent } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  notificationId: number = 0; // 保存通知id\n  continuousTaskId: number | undefined = -1;\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n      // 请开发者替换为实际被拉起应用的bundleName和abilityName\n      wants: [\n        {\n          bundleName: \"com.example.myapplication\",\n          abilityName: \"EntryAbility\"\n        }\n      ],\n      // 设置点击通知后的动作类型\n      actionType: wantAgent.OperationType.START_ABILITY,\n      // 开发者自定义的请求码，用于标识将被执行的动作\n      requestCode: 0,\n      // 设置点击通知后的动作执行属性\n      wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n\n    try {\n      // 通过wantAgent模块下getWantAgent方法获取WantAgent对象\n      wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: WantAgent) => {\n        try {\n          // 如果要合并通知，主类型和子类型都必须相同，combinedTaskNotification为true，continuousTaskId必须存在且合法\n          // 申请主类型为MODE_LOCATION的长时任务\n          let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_LOCATION];\n          let subModeList: Array<number> = [backgroundTaskManager.BackgroundTaskSubmode.SUBMODE_NORMAL_NOTIFICATION];\n          let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();\n          continuousTaskRequest.backgroundTaskModes =  modeList;\n          continuousTaskRequest.backgroundTaskSubmodes = subModeList;\n          continuousTaskRequest.wantAgent = wantAgentObj;\n          continuousTaskRequest.combinedTaskNotification = false;\n          continuousTaskRequest.continuousTaskId = this.continuousTaskId;\n          backgroundTaskManager.startBackgroundRunning(this.context, continuousTaskRequest).then((res: backgroundTaskManager.ContinuousTaskNotification) => {\n            console.info(`Operation startBackgroundRunning succeeded. notificationId is ${res.notificationId} continuousTaskId is ${res.continuousTaskId}`);\n            this.notificationId = res.notificationId;\n            this.continuousTaskId = res.continuousTaskId;\n          }).catch((error: BusinessError) => {\n            console.error(`Operation startBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n          });\n        } catch (error) {\n          console.error(`Operation startBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n        }\n      });\n    } catch (error) {\n      console.error(`Operation getWantAgent failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerupdatebackgroundrunning21",
      children: "backgroundTaskManager.updateBackgroundRunning21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新长时任务，使用Promise异步回调。长时任务更新成功后，会有通知栏消息，没有提示音。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新长时任务还存在如下约束限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本接口仅支持更新如下接口申请的长时任务：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#backgroundtaskmanagerstartbackgroundrunning21",
          children: "startBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已经合并的长时任务，且后台任务主类型和子类型均相同，仅支持更新ContinuousTaskRequest.wantAgent中的wants信息（abilityName等），如果类型不同，更新失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果待更新的长时任务或指定的更新类型中包含数据传输类型，直接返回失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustaskrequest21",
              children: "ContinuousTaskRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务请求信息，包括待更新的长时任务ID等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#continuoustasknotification12",
              children: "ContinuousTaskNotification"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回更新后的长时任务通知信息，包括长时任务ID等。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { wantAgent, WantAgent } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  notificationId: number = 0; // 保存通知id\n  continuousTaskId: number | undefined = -1; // 长时任务ID\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let wantAgentInfo: wantAgent.WantAgentInfo = {\n      // 添加需要被拉起应用的bundleName和abilityName, 请开发者替换为实际的bundleName和abilityName\n      wants: [\n        {\n          bundleName: \"com.example.myapplication\",\n          abilityName: \"EntryAbility\"\n        }\n      ],\n      // 设置点击通知后的动作类型\n      actionType: wantAgent.OperationType.START_ABILITY,\n      // 开发者自定义的请求码，用于标识将被执行的动作\n      requestCode: 0,\n      // 设置点击通知后的动作执行属性\n      wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n\n    try {\n      // 通过wantAgent模块下getWantAgent方法获取WantAgent对象\n      wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj: WantAgent) => {\n        try {\n          // 必须先执行startBackgroundRunning，才能调用updateBackgroundRunning，请开发者提前申请长时任务\n          let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_LOCATION];\n          let subModeList: Array<number> = [backgroundTaskManager.BackgroundTaskSubmode.SUBMODE_NORMAL_NOTIFICATION];\n          let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();\n          continuousTaskRequest.backgroundTaskModes = modeList;\n          continuousTaskRequest.backgroundTaskSubmodes = subModeList;\n          continuousTaskRequest.wantAgent = wantAgentObj;\n          continuousTaskRequest.combinedTaskNotification = false;\n          continuousTaskRequest.continuousTaskId = this.continuousTaskId; // 对于更新接口，长时任务ID必须要传且为存在的ID，否则更新失败\n          backgroundTaskManager.updateBackgroundRunning(this.context, continuousTaskRequest).then((res: backgroundTaskManager.ContinuousTaskNotification) => {\n            console.info(\"Operation updateBackgroundRunning succeeded\");\n            this.notificationId = res.notificationId;\n          }).catch((error: BusinessError) => {\n            console.error(`Operation updateBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n          });\n        } catch (error) {\n          console.error(`Operation updateBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n        }\n      });\n    } catch (error) {\n      console.error(`Operation getWantAgent failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmanagerstopbackgroundrunning21",
      children: "backgroundTaskManager.stopBackgroundRunning21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopBackgroundRunning(context: Context, continuousTaskId: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消指定Id的长时任务，使用Promise异步回调。也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstopbackgroundrunning",
        children: "stopBackgroundRunning"
      }), "取消当前UIAbility下所有长时任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continuousTaskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerstartbackgroundrunning21",
              children: "startBackgroundRunning"
            }), "接口的返回值获取当前申请的长时任务ID，或者通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagergetallcontinuoustasks20-1",
              children: "getAllContinuousTasks"
            }), "接口获取所有长时任务信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "无返回结果的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notification verification failed for a continuous task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task storage failed."
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
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  continuousTaskId: number = 0;\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      backgroundTaskManager.stopBackgroundRunning(this.context, this.continuousTaskId).then(() => {\n        console.info(\"Operation stopBackgroundRunning succeeded\");\n      }).catch((error: BusinessError) => {\n        console.error(`Operation stopBackgroundRunning failed. code is ${error.code} message is ${error.message}`);\n      });\n    } catch (error) {\n      console.error(`Operation stopBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delaysuspendinfo",
      children: "DelaySuspendInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "短时任务信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask"]
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
            children: "requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "短时任务的请求ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "actualDelayTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用实际申请的短时任务时间，单位：ms。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 申请时间最长为3分钟，低电量（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-battery-info/js-apis-battery-info#batterycapacitylevel9",
              children: "BatteryCapacityLevel"
            }), "为LEVEL_LOW）时最长为1分钟。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transienttaskinfo20",
      children: "TransientTaskInfo20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有短时任务信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask"]
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
            children: "remainingQuota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用当日所剩余总配额，单位：ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transientTasks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#delaysuspendinfo",
              children: "DelaySuspendInfo"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前已申请的所有短时任务信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundmode",
      children: "BackgroundMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DATA_TRANSFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据传输。  使用场景举例：非托管形式的上传、下载，如在浏览器后台上传或下载数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 在数据传输时，应用需要更新进度，如果进度长时间（超过10分钟）未更新，数据传输的长时任务会被取消。  更新进度的通知类型必须为实况窗，具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerstartbackgroundrunning12",
              children: "startBackgroundRunning()"
            }), "中的示例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_PLAYBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音视频播放。  使用场景举例：音频、视频在后台播放，音视频投播。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 20开始，申请/更新AUDIO_PLAYBACK类型长时任务但不接入AVSession，申请/更新长时任务成功后会在通知栏显示通知。  接入AVSession后，后台任务模块不会发送通知栏通知，由AVSession发送通知。  对于API version 19及之前的版本，后台任务模块不会在通知栏显示通知。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_RECORDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制。  使用场景举例：录音、录屏退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定位导航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_INTERACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙相关业务。  使用场景举例：通过蓝牙传输文件时退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MULTI_DEVICE_CONNECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多设备互联。  使用场景举例：分布式业务连接、投播。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VOIP13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音视频通话。  使用场景举例：某些聊天类应用（具有音视频业务）音频、视频通话时退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_KEEPING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计算任务。  使用场景举例：杀毒软件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 21开始，对PC/2in1设备、非PC/2in1设备但申请了ACL权限为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionkeep_background_running_system",
              children: "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM"
            }), "的应用开放。 API version 20及之前版本，仅对PC/2in1设备开放。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustasknotification12",
      children: "ContinuousTaskNotification12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务通知信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "slotType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#slottype",
              children: "notificationManager.SlotType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务通知的渠道类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 长时任务申请或更新成功后不支持提示音。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#contenttype",
              children: "notificationManager.ContentType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务通知的内容类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notificationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务通知 Id。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continuousTaskId15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务 Id。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustaskcancelinfo15",
      children: "ContinuousTaskCancelInfo15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务取消信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
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
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustaskcancelreason15",
              children: "ContinuousTaskCancelReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务取消原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被取消的长时任务 Id。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustaskcancelreason15",
      children: "ContinuousTaskCancelReason15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务取消原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "USER_CANCEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_CANCEL_REMOVE_NOTIFICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户移除通知。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请DATA_TRANSFER类型长时任务，但是数据传输速率低。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["申请AUDIO_PLAYBACK类型长时任务，但是未接入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avsession-kit/avsession-overview",
              children: "AVSession"
            }), "。预留接口，暂未启用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请AUDIO_PLAYBACK类型长时任务，但是未播放音视频。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请AUDIO_RECORDING类型长时任务，但是未录制。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_NOT_USE_LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请LOCATION类型长时任务，但是未使用定位导航。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_NOT_USE_BLUETOOTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请BLUETOOTH_INTERACTION类型长时任务，但是未使用蓝牙相关业务。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请MULTI_DEVICE_CONNECTION类型长时任务，但是未使用多设备互联。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_CANCEL_USE_ILLEGALLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用非法类型的长时任务，如申请AUDIO_PLAYBACK类型长时任务，但是使用音视频播放及定位导航业务。预留接口，暂未启用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundsubmode16",
      children: "BackgroundSubMode16+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务子类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAR_KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["车钥匙。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 只有申请BLUETOOTH_INTERACTION类型的长时任务，车钥匙子类型才能生效。  2. 不支持通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerupdatebackgroundrunning12",
              children: "updateBackgroundRunning"
            }), "接口更新为此类型长时任务。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundmodetype16",
      children: "BackgroundModeType16+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务类型类别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'subMode'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustasksuspendinfo20",
      children: "ContinuousTaskSuspendInfo20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务暂停信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
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
            children: "continuousTaskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被暂停的长时任务 Id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suspendState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务状态，false表示激活，true表示暂停。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suspendReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuoustasksuspendreason20",
              children: "ContinuousTaskSuspendReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务暂停原因。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustasksuspendreason20",
      children: "ContinuousTaskSuspendReason20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务暂停原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
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
            children: "SYSTEM_SUSPEND_DATA_TRANSFER_LOW_SPEED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请DATA_TRANSFER类型长时任务，但是数据传输速率低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_USE_AVSESSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["申请AUDIO_PLAYBACK类型长时任务，但是未接入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avsession-kit/avsession-overview",
              children: "AVSession"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请AUDIO_PLAYBACK类型长时任务，但是未播放音视频。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_AUDIO_RECORDING_NOT_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请AUDIO_RECORDING类型长时任务，但是未录制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_LOCATION_NOT_USED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请LOCATION类型长时任务，但是未使用定位导航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_BLUETOOTH_NOT_USED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请BLUETOOTH_INTERACTION类型长时任务，但是未使用蓝牙相关业务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_MULTI_DEVICE_NOT_USED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请MULTI_DEVICE_CONNECTION类型长时任务，但是未使用多设备互联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_USED_ILLEGALLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用非法类型的长时任务，如申请AUDIO_PLAYBACK类型长时任务，但是使用音视频播放及定位导航业务。预留接口，暂未启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM_SUSPEND_SYSTEM_LOAD_WARNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统高负载暂停长时任务。预留接口，暂未启用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustaskactiveinfo20",
      children: "ContinuousTaskActiveInfo20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务激活信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
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
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被激活的长时任务 Id。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustaskinfo20",
      children: "ContinuousTaskInfo20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长时任务信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIAbility名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的UID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程的PID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isFromWebView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否通过Webview方式申请，即通过系统代理应用申请长时任务。true表示通过Webview方式申请，false表示不通过Webview方式申请。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundModes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundmode",
              children: "长时任务类型"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundSubModes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundsubmode16",
              children: "长时任务子类型"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notificationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知 Id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continuousTaskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长时任务ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIAbility Id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wantAgentBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            }), " 配置的包名。WantAgent为通知参数，用于指定点击长时任务通知后跳转的界面，在申请长时任务时作为参数传入。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wantAgentAbilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            }), " 配置的ability名称。WantAgent为通知参数，用于指定点击长时任务通知后跳转的界面，在申请长时任务时作为参数传入。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suspendState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请的长时任务是否处于暂停状态。true表示处于暂停状态，false表示处于激活状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appIndex23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用分身ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuoustaskrequest21",
      children: "ContinuousTaskRequest21+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning21",
        children: "startBackgroundRunning()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerupdatebackgroundrunning21",
        children: "updateBackgroundRunning()"
      }), "接口的入参，用于指定申请或更新的长时任务信息。其中："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#backgroundtaskmanagerstartbackgroundrunning21",
          children: "startBackgroundRunning()"
        }), "接口申请长时任务时，如果待申请长时任务与当前应用下已存在长时任务，两者的主类型和子类型均相同，且combinedTaskNotification均取值为true，则会合并通知。否则不会合并通知。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果长时任务本身没有通知，则不会合并，长时任务类型是否会通知请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#backgroundtaskmode21",
          children: "BackgroundTaskMode"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果长时任务类型中包含数据传输类型，则不会合并通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通知合并后不能取消合并，已合并的不能更新成不合并。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通知合并后，点击通知栏消息，会跳转到第一个申请的长时任务对应的UIAbility，如果调用了更新接口，则跳转到最后一次更新的长时任务对应的UIAbility。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#backgroundtaskmanagerupdatebackgroundrunning21",
          children: "updateBackgroundRunning()"
        }), "接口更新长时任务时，传入的continuousTaskId必须存在，否则更新失败。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 22开始支持特殊场景类型", (0,jsx_runtime.jsx)(_components.a, {
          href: "#backgroundtaskmode21",
          children: "MODE_SPECIAL_SCENARIO_PROCESSING"
        }), "的长时任务。必须单独使用且不支持通知合并，即申请或更新长时任务时，长时任务类型只能有特殊场景类型，否则返回错误。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
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
            children: "backgroundTaskModes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmode21",
              children: "BackgroundTaskMode"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务主类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 主类型与子类型必须匹配。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundTaskSubmodes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtasksubmode21",
              children: "BackgroundTaskSubmode"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务子类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 主类型与子类型必须匹配。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagent",
              children: "WantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知参数，用于指定点击长时任务通知后跳转的界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "combinedTaskNotification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否合并通知，true表示合并，false表示不合并，默认为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 该属性在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerupdatebackgroundrunning21",
              children: "updateBackgroundRunning"
            }), "接口中不生效，如需在已有任务上合并通知，请重新申请该任务，并在申请时设置为支持合并。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continuousTaskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["长时任务ID，默认值为-1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 如果combinedTaskNotification取值为true，则该值为必填项，且必须是存在的ID。  作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerupdatebackgroundrunning21",
              children: "updateBackgroundRunning"
            }), "接口入参时，该属性必填，且必须是存在的ID。  可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagergetallcontinuoustasks20-1",
              children: "getAllContinuousTasks"
            }), "接口查看当前所有长时任务信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ismodesupported21",
      children: "isModeSupported21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isModeSupported(): boolean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#continuoustaskrequest21",
        children: "ContinuousTaskRequest"
      }), "设置的长时任务主类型，是否支持申请长时任务。是否支持申请长时任务请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmode21",
        children: "BackgroundTaskMode"
      }), "的说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回长时任务主类型是否支持。true表示支持，false表示不支持。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
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
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let isModeSupported: boolean = false;\n    let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();\n    let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_TASK_KEEPING];\n    continuousTaskRequest.backgroundTaskModes = modeList;\n    try {\n      isModeSupported = continuousTaskRequest.isModeSupported();\n      console.info(`Operation isModeSupported succeeded. isModeSupported is ${isModeSupported}`);\n    } catch (error) {\n      console.error(`Operation startBackgroundRunning failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestauthfromuser22",
      children: "requestAuthFromUser22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestAuthFromUser(context: Context, callback: Callback<UserAuthResult>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请求用户授权是否能在后台长时间运行，使用callback异步回调。接口调用成功会发送横幅通知，有提示音。仅适用于特殊场景类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmode21",
        children: "MODE_SPECIAL_SCENARIO_PROCESSING"
      }), "的长时任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet、PC/2in1中可正常调用，在其他设备类型中返回9800005错误码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userauthresult22",
              children: "UserAuthResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户操作后，返回授权结果。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction callbackAuth(authResult: backgroundTaskManager.UserAuthResult) {\n  console.info('Operation requestAuthFromUser success. auth result: ' + JSON.stringify(authResult));\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();\n    let modeList: Array<number> = [backgroundTaskManager.BackgroundTaskMode.MODE_SPECIAL_SCENARIO_PROCESSING];\n    continuousTaskRequest.backgroundTaskModes = modeList;\n    let subModeList: Array<number> = [backgroundTaskManager.BackgroundTaskSubmode.SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION];\n    continuousTaskRequest.backgroundTaskSubmodes = subModeList;\n    try {\n      continuousTaskRequest.requestAuthFromUser(this.context, callbackAuth);\n      console.info('Operation requestAuthFromUser succeeded.');\n    } catch (error) {\n      console.error(`Operation requestAuthFromUser failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkspecialscenarioauth22",
      children: "checkSpecialScenarioAuth22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "checkSpecialScenarioAuth(context: Context): Promise<UserAuthResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询用户是否授权能在后台长时间运行。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.KEEP_BACKGROUND_RUNNING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet、PC/2in1中可正常调用，在其他设备类型中返回9800005错误码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用运行的上下文。  FA模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
              children: "Context"
            }), "。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Stage模型中，仅支持UIAbility申请；FA模型中，仅支持ServiceAbility申请。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
              href: "#userauthresult22",
              children: "UserAuthResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回用户授权结果。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr",
        children: "backgroundTaskManager错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9800004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service operation failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous task verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { backgroundTaskManager } from '@kit.BackgroundTasksKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    try {\n      let continuousTaskRequest = new backgroundTaskManager.ContinuousTaskRequest();\n      continuousTaskRequest.checkSpecialScenarioAuth(this.context).then((res: backgroundTaskManager.UserAuthResult) => {\n        console.info('Operation checkSpecialScenarioAuth succeeded. data: ' + JSON.stringify(res));\n      }).catch((error: BusinessError) => {\n        console.error(`Operation checkSpecialScenarioAuth failed. code is ${error.code} message is ${error.message}`);\n      });\n    } catch (error) {\n      console.error(`Operation checkSpecialScenarioAuth failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtaskmode21",
      children: "BackgroundTaskMode21+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["长时任务主类型。通常与长时任务子类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtasksubmode21",
        children: "BackgroundTaskSubmode"
      }), "配合使用，对照关系请参考长时任务主类型与子类型对照表，两者共同作为API version 21新增的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerstartbackgroundrunning21",
        children: "申请"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmanagerupdatebackgroundrunning21",
        children: "更新"
      }), "长时任务接口入参，用于指定长时任务类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅当主类型为MODE_SPECIAL_SCENARIO_PROCESSING特殊场景类型，或非PC/2in1设备主类型为MODE_TASK_KEEPING计算任务时，调用长时任务相关接口时需同时申请ACL权限", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionkeep_background_running_system",
        children: "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM"
      }), "，其他场景无需申请该权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MODE_DATA_TRANSFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据传输。  使用场景举例：非托管形式的上传、下载，如在浏览器后台上传或下载数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 在数据传输时，应用需要更新进度，如果进度长时间（超过10分钟）未更新，数据传输的长时任务会被取消。  2. 更新进度的通知类型必须为实况窗，具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmanagerstartbackgroundrunning12",
              children: "startBackgroundRunning()"
            }), "中的示例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_AUDIO_PLAYBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音视频播放。  使用场景举例：音频、视频在后台播放，音视频投播。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 申请/更新MODE_AUDIO_PLAYBACK类型长时任务但不接入AVSession，申请/更新长时任务成功后会在通知栏显示通知。接入AVSession后，后台任务模块不会发送通知栏通知，由AVSession发送通知。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_AUDIO_RECORDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制。  使用场景举例：录音、录屏退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定位导航。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_BLUETOOTH_INTERACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙相关业务。  使用场景举例：通过蓝牙传输文件时退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_MULTI_DEVICE_CONNECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多设备互联。  使用场景举例：分布式业务连接、投播。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_VOIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音视频通话。  使用场景举例：某些聊天类应用（具有音视频业务）音频、视频通话时退后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_TASK_KEEPING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计算任务。  使用场景举例：杀毒软件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 仅对PC/2in1设备开放，或者非PC/2in1设备但申请了ACL权限为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionkeep_background_running_system",
              children: "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM"
            }), "的应用开放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_AV_PLAYBACK_AND_RECORD22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体相关业务。  使用场景举例：音视频播放、录制、音视频通话场景，场景需与长时任务子类型相匹配。在上述场景下，选择此类型或者对应的长时任务主类型均可。例如：音视频播放场景可以申请MODE_AUDIO_PLAYBACK或者MODE_AV_PLAYBACK_AND_RECORD长时任务主类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_SPECIAL_SCENARIO_PROCESSING22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["特殊场景类型（仅对Phone、Tablet、PC/2in1设备开放）。  使用场景举例：应用在后台导出媒体文件、应用使用三方投播组件在后台进行投播，场景需与长时任务子类型相匹配。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果应用需要在后台长时间运行，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#requestauthfromuser22",
              children: "requestAuthFromUser"
            }), "接口请求用户授权、通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#checkspecialscenarioauth22",
              children: "checkSpecialScenarioAuth"
            }), "接口查询用户授权结果。  2. 仅对申请ACL权限", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionkeep_background_running_system",
              children: "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM"
            }), "的应用开放。  3. 必须单独使用且不支持通知合并，即申请或更新长时任务时，长时任务类型只能有特殊场景类型，否则返回错误。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtasksubmode21",
      children: "BackgroundTaskSubmode21+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["长时任务子类型。通常与长时任务主类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "#backgroundtaskmode21",
        children: "BackgroundTaskMode"
      }), "配合使用，对照关系请参考长时任务主类型与子类型对照表，两者共同作为API version 21新增的申请、更新长时任务接口入参，用于指定长时任务类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SUBMODE_CAR_KEY_NORMAL_NOTIFICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车钥匙类型，通知类型为普通文本通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通文本通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_LIVE_VIEW_NOTIFICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音视频播放，通知类型为普通文本通知。根据实际场景选择是否接入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avsession-kit/avsession-overview",
              children: "AVSession"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_AVSESSION_AUDIO_PLAYBACK22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已接入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avsession-kit/avsession-overview",
              children: "AVSession"
            }), "的音视频播放场景，通知类型为普通文本类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录音，通知类型为普通文本通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏，通知类型为普通文本通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话，通知类型为普通文本通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体处理，例如：应用在后台导出媒体文件，通知类型为普通文本通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频投播，例如：应用使用三方投播组件在后台进行投播，通知类型为普通文本通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_WORK_OUT_NORMAL_NOTIFICATION23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["运动，例如：应用在后台有室内跑步场景，通知类型为普通文本通知。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "长时任务主类型与子类型对照表："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtaskmode21",
              children: "长时任务主类型"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtasksubmode21",
              children: "长时任务子类型"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_DATA_TRANSFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_LIVE_VIEW_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_AUDIO_PLAYBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_AUDIO_RECORDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_BLUETOOTH_INTERACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION  SUBMODE_CAR_KEY_NORMAL_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_MULTI_DEVICE_CONNECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_VOIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_TASK_KEEPING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_NORMAL_NOTIFICATION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_AV_PLAYBACK_AND_RECORD22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION22+  SUBMODE_AVSESSION_AUDIO_PLAYBACK22+  SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION22+  SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION22+  SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE_SPECIAL_SCENARIO_PROCESSING22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION22+  SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION22+  SUBMODE_WORK_OUT_NORMAL_NOTIFICATION23+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userauthresult22",
      children: "UserAuthResult22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户授权结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask"]
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
            children: "NOT_SUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。例如：申请的长时任务主类型非MODE_SPECIAL_SCENARIO_PROCESSING时，不支持申请用户授权是否能在后台长时间运行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_DETERMINED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户未操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DENIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRANTED_ONCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["本次允许。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 在应用退出时该授权记录会被清除。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRANTED_ALWAYS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["始终允许。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当接收到以下公共事件时，相关授权记录将被清除：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_added",
              children: "COMMON_EVENT_PACKAGE_ADDED"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_removed",
              children: "COMMON_EVENT_PACKAGE_REMOVED"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_bundle_removed",
              children: "COMMON_EVENT_BUNDLE_REMOVED"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_fully_removed",
              children: "COMMON_EVENT_PACKAGE_FULLY_REMOVED"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_package_changed",
              children: "COMMON_EVENT_PACKAGE_CHANGED"
            }), "。"]
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
810357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
831785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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