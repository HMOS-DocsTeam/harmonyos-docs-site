"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["588964"], {
5597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_development_guideline_ffrt_development_guideline_md_e8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-development-guideline-ffrt-development-guideline-md-e8a.json
var site_docs_system_basicfun_ffrt_kit_ffrt_development_guideline_ffrt_development_guideline_md_e8a_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-development-guideline/ffrt-development-guideline","title":"Function Flow Runtime开发指导","description":"介绍","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-development-guideline/ffrt-development-guideline.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-development-guideline","slug":"/system-basicfun/ffrt-kit/ffrt-development-guideline/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-development-guideline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Function Flow Runtime开发指导","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-development-guideline","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Function Flow Runtime任务伙伴(C++)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp/"},"next":{"title":"Function Flow Runtime C API","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-api-guideline-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-development-guideline/ffrt-development-guideline.md


const frontMatter = {
	title: 'Function Flow Runtime开发指导',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-development-guideline',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime开发指导';

const assets = {

};



const toc = [{
  "value": "介绍",
  "id": "介绍",
  "level": 2
}, {
  "value": "维测",
  "id": "维测",
  "level": 2
}, {
  "value": "超时监测",
  "id": "超时监测",
  "level": 3
}, {
  "value": "长耗时任务监测",
  "id": "长耗时任务监测",
  "level": 3
}, {
  "value": "运行信息转储",
  "id": "运行信息转储",
  "level": 3
}, {
  "value": "黑匣子日志",
  "id": "黑匣子日志",
  "level": 3
}, {
  "value": "Trace打点",
  "id": "trace打点",
  "level": 3
}, {
  "value": "Debug日志",
  "id": "debug日志",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "使用建议",
  "id": "使用建议",
  "level": 2
}, {
  "value": "建议1：函数化",
  "id": "建议1函数化",
  "level": 3
}, {
  "value": "建议2：使用FFRT提供的替代API",
  "id": "建议2使用ffrt提供的替代api",
  "level": 3
}, {
  "value": "建议3：Deadline机制",
  "id": "建议3deadline机制",
  "level": 3
}, {
  "value": "建议4：从线程模型迁移",
  "id": "建议4从线程模型迁移",
  "level": 3
}, {
  "value": "建议5：推荐使用C++接口",
  "id": "建议5推荐使用c接口",
  "level": 3
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "线程局部变量使用约束",
  "id": "线程局部变量使用约束",
  "level": 3
}, {
  "value": "线程绑定使用约束",
  "id": "线程绑定使用约束",
  "level": 3
}, {
  "value": "标准库同步原语使用约束",
  "id": "标准库同步原语使用约束",
  "level": 3
}, {
  "value": "FFRT同步原语使用约束",
  "id": "ffrt同步原语使用约束",
  "level": 3
}, {
  "value": "对进程fork()场景的支持说明",
  "id": "对进程fork场景的支持说明",
  "level": 3
}, {
  "value": "以动态库方式部署FFRT",
  "id": "以动态库方式部署ffrt",
  "level": 3
}, {
  "value": "输入输出依赖数量的限制",
  "id": "输入输出依赖数量的限制",
  "level": 3
}, {
  "value": "进程或者线程退出时的限制",
  "id": "进程或者线程退出时的限制",
  "level": 3
}, {
  "value": "常见反模式",
  "id": "常见反模式",
  "level": 2
}, {
  "value": "C API中初始化FFRT对象后，对象的置空与销毁由用户负责",
  "id": "c-api中初始化ffrt对象后对象的置空与销毁由用户负责",
  "level": 3
}, {
  "value": "变量生命周期错误",
  "id": "变量生命周期错误",
  "level": 3
}, {
  "value": "Using FFRT in DevEco Studio",
  "id": "using-ffrt-in-deveco-studio",
  "level": 2
}, {
  "value": "Using FFRT C API",
  "id": "using-ffrt-c-api",
  "level": 3
}, {
  "value": "Using FFRT C++ API",
  "id": "using-ffrt-c-api-1",
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
        id: "function-flow-runtime开发指导",
        children: "Function Flow Runtime开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "介绍",
      children: "介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT编程模型是一种基于任务和数据驱动的并发编程模型，允许开发者通过任务及其依赖关系描述的方式进行应用开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过FFRT编程模型，开发者可专注于应用功能开发，由FFRT在运行时根据任务依赖状态和可用执行资源自动并发调度和执行任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文用于指导开发者基于FFRT编程模型实现并行编程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "维测",
      children: "维测"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "超时监测",
      children: "超时监测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT提供开发者队列级和任务级超时维测机制，用来监控用户业务中承载重要职责的队列和任务在FFRT调度的端到端时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当队列中任务发生超时，FFRT打印告警日志并通过回调接口通知到业务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当任务发生超时，FFRT打印告警日志并调用进程级回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(44972)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务超时时执行的回调函数进程范围内唯一，需要在任务提交之前由业务方配置到FFRT中，不支持在提交任务或任务超时检测过程中配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体接口包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "C++接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#set-queue-timeout",
              children: "queue_attr::timeout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_queue_attr_t",
              children: "ffrt_queue_attr_set_timeout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置队列超时时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#set-queue-callback",
              children: "queue_attr::callback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_queue_attr_t",
              children: "ffrt_queue_attr_set_callback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置队列超时回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "长耗时任务监测",
      children: "长耗时任务监测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "机制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长耗时任务打印机制 当任务执行时间超过一秒时，会触发一次堆栈打印，后续该任务堆栈打印频率调整为一分钟。连续打印十次后，打印频率调整为十分钟。再触发十次打印后，打印频率固定为三十分钟。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该机制的堆栈打印调用的是DFX的GetBacktraceStringByTid接口，该接口会向阻塞线程发送抓栈信号，触发中断并抓取调用栈返回。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在对应进程日志中搜索RecordSymbolAndBacktrace关键字，对应的日志示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "W C01719/ffrt: 60500:RecordSymbolAndBacktrace:159 Tid[16579] function occupies worker for more than [1]s.\nW C01719/ffrt: 60501:RecordSymbolAndBacktrace:164 Backtrace:\nW C01719/ffrt: #00 pc 00000000000075f0 /system/lib64/module/file/libhash.z.so\nW C01719/ffrt: #01 pc 0000000000008758 /system/lib64/module/file/libhash.z.so\nW C01719/ffrt: #02 pc 0000000000012b98 /system/lib64/module/file/libhash.z.so\nW C01719/ffrt: #03 pc 000000000002aaa0 /system/lib64/platformsdk/libfilemgmt_libn.z.so\nW C01719/ffrt: #04 pc 0000000000054b2c /system/lib64/platformsdk/libace_napi.z.so\nW C01719/ffrt: #05 pc 00000000000133a8 /system/lib64/platformsdk/libuv.so\nW C01719/ffrt: #06 pc 00000000000461a0 /system/lib64/chipset-sdk/libffrt.so\nW C01719/ffrt: #07 pc 0000000000046d44 /system/lib64/chipset-sdk/libffrt.so\nW C01719/ffrt: #08 pc 0000000000046a6c /system/lib64/chipset-sdk/libffrt.so\nW C01719/ffrt: #09 pc 00000000000467b0 /system/lib64/chipset-sdk/libffrt.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该维测会打印出Worker上执行时间超过阈值的任务堆栈、Worker线程号、执行时间，请自行根据堆栈找对应组件确认阻塞原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不涉及。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行信息转储",
      children: "运行信息转储"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "机制"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT提供一个对外的接口ffrt_dump以便转储FFRT子系统运行时的内部信息，主要包含："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT统计信息：提交任务数，运行任务数，协程切换次数，任务完成数；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worker线程信息：每个QoS下的Worker数量，Worker id，当前运行的任务id，任务名以及任务类型；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "普通任务信息：当前进程中还未释放的普通任务，dump每个任务的任务名，id及调用栈信息；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "队列任务信息：当前进程中还未释放的队列任务，dump每个任务的任务名，id及调用栈信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前进程发生freeze时，OH的DFX模块会主动调用ffrt_dump接口转储FFRT的信息，落盘到freeze文件中，存储到/data/log/faultlog/faultlogger/目录下，用户可以直接利用该文件中的任务调用栈信息定位对应任务的卡顿问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ready task ptr: qos 0 readptr 79 writeptr 79\nready task ptr: qos 1 readptr 360 writeptr 360\nready task ptr: qos 2 readptr 19 writeptr 19\nready task ptr: qos 3 readptr 0 writeptr 0\nready task ptr: qos 4 readptr 0 writeptr 0\nready task ptr: qos 5 readptr 65 writeptr 65\nready task ptr: qos 6 readptr 0 writeptr 0\nready task ptr: qos 7 readptr 0 writeptr 0\nsubmit queue: readptr 24 writeptr 24\nintr wake: status 255\nproc status: taskCnt 23 vercnt 0sigCnt0\n    |-> worker count\n        qos 0: worker num:1 tid:31676\n        qos 2: worker num:3 tid:51349, 28769, 28565\n        qos 5: worker num:1 tid:30605\n    |-> worker status\n        qos 0: worker tid 31676 is running nothing\n        qos 2: worker tid 51349 is running nothing\n        qos 2: worker tid 28769 is running, task id 24591 name sq_CesSrvMain_12_PublishCommonEventDetailed_24591 fromTid 43928 createTime 2024-11-27 02:52:27.325248 executeTime 2024-11-27 02:52:27.326150\n        qos 2: worker tid 28565 is running, task id 24611 name sq_dfx_freeze_task_queue_16_NotifyAppFaultTask_24611 fromTid 43833 createTime 2024-11-27 02:52:38.114787 executeTime 2024-11-27 02:52:38.115424\n        qos 5: worker tid 30605 is running, task id 24595 name sq_AbilityManagerService_19_SubmitTaskInner_24595 fromTid 43610 createTime 2024-11-27 02:52:27.844237 executeTime 2024-11-27 02:52:27.844573\n    |-> ready queue status\n    |-> blocked by task dependence\n        <1/1>stack: task id 3,qos 2,name AgingTask fromTid 43417 createTime 2024-11-27 01:21:39.641673 executeTime 2024-11-27 01:21:39.642290\n#00 pc 0000000000065c5c /system/lib64/ndk/libffrt.so(CoYield()+560)(22be57f01a789a03813d26a19c3a4042)\n#01 pc 00000000000a3268 /system/lib64/ndk/libffrt.so(ffrt::this_task::SleepUntilImpl(std::__h::chrono::time_point<std::__h::chrono::steady_clock, std::__h::chrono::duration<long long, std::__h::ratio<1l, 1000000000l>>> const&)+356)(22be57f01a789a03813d26a19c3a4042)\n#02 pc 00000000000a39b4 /system/lib64/ndk/libffrt.so(ffrt_usleep+60)(22be57f01a789a03813d26a19c3a4042)\n#03 pc 0000000000420de0 /system/lib64/libbms.z.so(2eb52bd03af1b9a31e14ffe60bfc39da)\n#04 pc 00000000000a6a2c /system/lib64/ndk/libffrt.so(ffrt::CPUEUTask::Execute()+300)(22be57f01a789a03813d26a19c3a4042)\n#05 pc 0000000000066d18 /system/lib64/ndk/libffrt.so(22be57f01a789a03813d26a19c3a4042)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于OH DFX模块在freeze时有处理时间的要求，存在较小概率会导致ffrt_dump中收集的信息不全，freeze处理时间耗尽，此时落盘的信息会有缺失。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "黑匣子日志",
      children: "黑匣子日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "机制"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程Crash发生时，FFRT模块收到信号（SIGABRT、SIGBUS、SIGFPE、SIGILL、SIGSTKFLT、SIGSTOP、SIGSYS和SIGTRAP），将FFRT当前重要的运行时信息保存至faultlog中，包括：正在运行的task；当前Worker的运行信息和调用栈信息；当前普通任务信息；当前队列任务信息等。用户可利用这些信息中的内容辅助定位Crash问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C01719/CameraDaemon/ffrt: 9986:operator():254 <<<=== ffrt black box(BBOX) start ===>>>\nC01719/CameraDaemon/ffrt: 9987:SaveCurrent:63 <<<=== current status ===>>>\nC01719/CameraDaemon/ffrt: 9988:SaveCurrent:68 signal SIGABRT triggered: source tid 5962, task id 17, qos 2, name SvrWatchdog\nC01719/CameraDaemon/ffrt: 9989:SaveWorkerStatus:94 <<<=== worker status ===>>>\nC01719/CameraDaemon/ffrt: 9990:SaveWorkerStatus:100 qos 0: worker tid 6410 is running nothing\nC01719/CameraDaemon/ffrt: 9991:SaveWorkerStatus:100 qos 2: worker tid 5968 is running nothing\nC01719/CameraDaemon/ffrt: 9992:SaveWorkerStatus:100 qos 2: worker tid 5964 is running nothing\nC01719/CameraDaemon/ffrt: 9993:SaveWorkerStatus:100 qos 2: worker tid 5963 is running nothing\nC01719/CameraDaemon/ffrt: 9994:SaveWorkerStatus:105 qos 2: worker tid 5962 is running task id 17 name SvrWatchdog\nC01719/CameraDaemon/ffrt: 9995:SaveWorkerStatus:100 qos 2: worker tid 5967 is running nothing\nC01719/CameraDaemon/ffrt: 9996:SaveWorkerStatus:100 qos 2: worker tid 5965 is running nothing\nC01719/CameraDaemon/ffrt: 9997:SaveWorkerStatus:100 qos 2: worker tid 5961 is running nothing\nC01719/CameraDaemon/ffrt: 9998:SaveWorkerStatus:100 qos 2: worker tid 1146 is running nothing\nC01719/CameraDaemon/ffrt: 9999:SaveWorkerStatus:100 qos 2: worker tid 1145 is running nothing\nC01719/CameraDaemon/ffrt: 10000:SaveWorkerStatus:100 qos 2: worker tid 5966 is running nothing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不涉及。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trace打点",
      children: "Trace打点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "机制"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT任务的调度和执行过程中，利用了OH系统的Trace打点能力，对任务在FFRT框架中的状态流转做了实时跟踪，用户可以借助Trace图形化工具来分析任务的行为是否符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动Trace抓取"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell \"hitrace -t 10 -b 20480 -o /data/local/tmp/in_systrace.ftrace sched freq idle ffrt\"\n# -t：指定trace采集时长，在采集过程中所有的trace记录会落盘保存\n# -b：指定trace记录缓存大小，buffer不足的情况下可能导致部分记录被覆盖没有落盘\n# -o：指定trace落盘存储路径\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图形化工具呈现"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将Trace落盘的文件从设备中取出来，借助图形化工具进行分析，例如：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://perfetto.dev/",
            children: "Perfetto"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户也可以在自己业务代码中加入Trace打点，以界定问题的范围。需注意在高频调用流程中，加入Trace打点会有系统开销，会对业务性能造成影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debug日志",
      children: "Debug日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "机制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FFRT默认不开启Debug级别的日志，用户可以通过命令的方式打开，以获取更丰富的维测信息支撑开发阶段的问题定位。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开FFRT Debug日志开关："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell hilog -b DEBUG -D 0xD001719\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "恢复默认FFRT INFO日志级别:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell hilog -b INFO -D 0xD001719\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "4190  5631 D C01719/neboard:EngineServiceAbility:1/ffrt: 275337:Detach:147 qos 3 thread not joinable\n3257  6075 D C01719/com.ohos.sceneboard/ffrt: 513070:SetDefaultThreadAttr:148 qos apply tid[6075] level[3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于FFRT是系统底座，支撑大量上层业务及框架的运行，全局打开Debug日志会导致日志超限，影响其他模块日志的正常输出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何使用FFRT提供的Native API接口，创建并行任务和串行队列任务以及销毁相应资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目CMakeLists.txt中添加动态链接库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "libffrt.z.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目中包含对应的头文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"ffrt/task.h\"\n#include \"ffrt/mutex.h\"\n#include \"ffrt/shared_mutex.h\"\n#include \"ffrt/condition_variable.h\"\n#include \"ffrt/sleep.h\"\n#include \"ffrt/queue.h\"\n#include \"ffrt/loop.h\"\n#include \"ffrt/timer.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对执行的函数进行封装："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 第一种使用模板，支持C++\ntemplate<class T>\nstruct function {\n    ffrt_function_header_t header;\n    T closure;\n};\n\ntemplate<class T>\nvoid exec_function_wrapper(void* t)\n{\n    auto f = reinterpret_cast<function<std::decay_t<T>>*>(t);\n    f->closure();\n}\n\ntemplate<class T>\nvoid destroy_function_wrapper(void* t)\n{\n    auto f = reinterpret_cast<function<std::decay_t<T>>*>(t);\n    f->closure = nullptr;\n}\n\ntemplate<class T>\ninline ffrt_function_header_t* create_function_wrapper(T&& func,\n    ffrt_function_kind_t kind = ffrt_function_kind_general)\n{\n    using function_type = function<std::decay_t<T>>;\n    static_assert(sizeof(function_type) <= ffrt_auto_managed_function_storage_size,\n        \"size of function must be less than ffrt_auto_managed_function_storage_size\");\n\n    auto p = ffrt_alloc_auto_managed_function_storage_base(kind);\n    auto f = new (p)function_type;\n    f->header.exec = exec_function_wrapper<T>;\n    f->header.destroy = destroy_function_wrapper<T>;\n    f->closure = std::forward<T>(func);\n    return reinterpret_cast<ffrt_function_header_t*>(f);\n}\n\n// 第二种创建方式\ntypedef struct {\n    ffrt_function_header_t header;\n    ffrt_function_t func;\n    ffrt_function_t after_func;\n    void* arg;\n} ffrt_function_wrapper_t;\n\nstatic inline void ffrt_exec_function_wrapper(void* t)\n{\n   ffrt_function_wrapper_t* f = (ffrt_function_wrapper_t *)t;\n   if (f->func) {\n       f->func(f->arg);\n   }\n}\n\nstatic inline void ffrt_destroy_function_wrapper(void* t)\n{\n    ffrt_function_wrapper_t* f = (ffrt_function_wrapper_t *)t;\n    if (f->after_func) {\n        f->after_func(f->arg);\n    }\n}\n\n#define FFRT_STATIC_ASSERT(cond, msg) int x(int static_assertion_##msg[(cond) ? 1 : -1])\nstatic inline ffrt_function_header_t *ffrt_create_function_wrapper(ffrt_function_t func,\n    ffrt_function_t after_func, void* arg, ffrt_function_kind_t kind)\n{\n    FFRT_STATIC_ASSERT(sizeof(ffrt_function_wrapper_t) <= ffrt_auto_managed_function_storage_size,\n        size_of_function_must_be_less_than_ffrt_auto_managed_function_storage_size);\n\n    ffrt_function_wrapper_t* f = (ffrt_function_wrapper_t *)ffrt_alloc_auto_managed_function_storage_base(kind);\n    f->header.exec = ffrt_exec_function_wrapper;\n    f->header.destroy = ffrt_destroy_function_wrapper;\n    f->func = func;\n    f->after_func = after_func;\n    f->arg = arg;\n    return (ffrt_function_header_t *)f;\n}\n\n// 样例：待提交执行的函数\nvoid OnePlusForTest(void* arg)\n{\n    (*static_cast<int*>(arg)) += 1;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置任务属性值，包括QoS等级、任务名称等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ******初始化并行任务属性******\nffrt_task_attr_t attr;\nffrt_task_attr_init(&attr);\n\n// ******创建串行队列******\n\n// 创建串行队列的属性\nffrt_queue_attr_t queue_attr;\n// 创建串行队列的handle\nffrt_queue_t queue_handle;\n\n// 初始化队列属性\n(void)ffrt_queue_attr_init(&queue_attr);\n\n// 如有需要，设置指定QoS等级\nffrt_queue_attr_set_qos(&queue_attr, static_cast<ffrt_qos_t>(ffrt_qos_inherit));\n// 如有需要，设置超时时间(ms)\nffrt_queue_attr_set_timeout(&queue_attr, 10000);\n// 如有需要，设置超时回调\nint x = 0;\nffrt_queue_attr_set_callback(&queue_attr, ffrt_create_function_wrapper(OnePlusForTest, NULL, &x,\n    ffrt_function_kind_queue));\n\n// 基于属性，初始化队列\nqueue_handle = ffrt_queue_create(ffrt_queue_serial, \"test_queue\", &queue_attr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提交任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int a = 0;\n// ******并行任务******\n// 提交不带handle返回值的并行任务\nffrt_submit_base(\n    ffrt_create_function_wrapper(OnePlusForTest, NULL, &a, ffrt_function_kind_general), NULL, NULL, &attr);\n// 提交带handle返回值的并行任务\nffrt_task_handle_t task = ffrt_submit_h_base(\n    ffrt_create_function_wrapper(OnePlusForTest, NULL, &a, ffrt_function_kind_general), NULL, NULL, &attr);\n\n// ******串行任务******\n// 提交不返回handle的串行队列任务\nffrt_queue_submit(queue_handle,\n    ffrt_create_function_wrapper(OnePlusForTest, NULL, &a, ffrt_function_kind_queue), NULL);\n// 提交带handle的串行队列任务\nffrt_task_handle_t handle = ffrt_queue_submit_h(queue_handle,\n    ffrt_create_function_wrapper(OnePlusForTest, NULL, &a, ffrt_function_kind_queue), NULL);\n\n// 如果需要等待执行结果，则调用wait\nconst std::vector<ffrt_dependence_t> wait_deps = {{ffrt_dependence_task, task}};\nffrt_deps_t wait{static_cast<uint32_t>(wait_deps.size()), wait_deps.data()};\nffrt_wait_deps(&wait);\n\nffrt_queue_wait(handle);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在任务不需要任何销毁动作时可以通过简化接口提交任务（可选）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int a = 0;\n// 在步骤3场景中的after_func函数指针为NULL时，可以使用简化接口提交任务，避免冗余的任务结构封装。\n// ******并行任务******\n// 通过简化接口提交不带handle返回值的并行任务\nffrt_submit_f(OnePlusForTest, &a, NULL, NULL, &attr);\n// 通过简化接口提交带handle返回值的并行任务\nffrt_task_handle_t task = ffrt_submit_h_f(OnePlusForTest, &a, NULL, NULL, &attr);\n\n// ******串行任务******\n// 通过简化接口提交不返回handle的串行队列任务\nffrt_queue_submit_f(queue_handle, OnePlusForTest, &a, NULL);\n// 通过简化接口提交带handle的串行队列任务\nffrt_task_handle_t handle = ffrt_queue_submit_h_f(queue_handle, OnePlusForTest, &a, NULL);\n\n// 如果需要等待执行结果，则调用wait\nconst std::vector<ffrt_dependence_t> wait_deps = {{ffrt_dependence_task, task}};\nffrt_deps_t wait{static_cast<uint32_t>(wait_deps.size()), wait_deps.data()};\nffrt_wait_deps(&wait);\n\nffrt_queue_wait(handle);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "任务提交完成后销毁相应资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ******销毁并行任务******\nffrt_task_attr_destroy(&attr);\nffrt_task_handle_destroy(task);\n\n// ******销毁串行队列任务******\n// 先销毁任务handle，再销毁队列\nffrt_queue_attr_destroy(&queue_attr);\nffrt_task_handle_destroy(handle);\nffrt_queue_destroy(queue_handle);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议1函数化",
      children: "建议1：函数化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "程序过程各步骤以函数封装表达，函数满足类纯函数特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无全局数据访问。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无内部状态保留。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过ffrt_submit_base()或ffrt_submit_f()接口以异步任务方式提交函数执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将函数访问的数据对象以及访问方式在ffrt_submit_base()接口中的in_deps和out_deps参数表达。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "程序员通过in_deps和out_deps参数表达任务间依赖关系以保证程序执行的正确性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "做到纯函数的好处在于：1. 能够最大化挖掘并行度，2.避免DataRace和锁的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实际中，可以根据场景放松纯函数的约束，但前提是："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确定添加的in_deps和out_deps可确保程序正确执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过FFRT提供的锁机制保护对全局变量的访问。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议2使用ffrt提供的替代api",
      children: "建议2：使用FFRT提供的替代API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止在FFRT任务中使用系统线程库API创建线程，使用submit提交任务。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用FFRT提供的锁，条件变量，睡眠，IO等API代替系统线程库API。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用系统线程库API可能造成工作线程阻塞，引起额外性能开销。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议3deadline机制",
      children: "建议3：Deadline机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必须用于具备周期/重复执行特征的处理流程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在有明确时间约束和性能关键的处理流程中使用，避免滥用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在相对大颗粒度的处理流程中使用，例如具有16.6ms时间约束的帧处理流程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议4从线程模型迁移",
      children: "建议4：从线程模型迁移"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建线程替代为创建FFRT任务。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "线程从逻辑上类似无in_deps的任务。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "识别线程间的依赖关系，并将其表达在任务的依赖关系in_deps和out_deps上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程内计算过程分解为异步任务调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过任务依赖关系和锁机制避免并发任务数据竞争问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议5推荐使用c接口",
      children: "建议5：推荐使用C++接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT的C++接口是基于C接口实现，在使用API接口时可以手动添加C++相关头文件后配套使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程局部变量使用约束",
      children: "线程局部变量使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT Task中使用线程局部变量存在风险，说明如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程局部变量包括C/C++语言提供的thread_local定义的变量和使用pthread_key_create创建的变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT支持任务调度，任务被调度到任意可用线程执行，进而使用线程局部变量是有风险的，这一点和所有其他支持任务并发调度的框架一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT的任务默认以协程的方式运行，任务执行过程中可能发生协程退出，恢复执行时，执行该任务的线程可能发生变更。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程绑定使用约束",
      children: "线程绑定使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FFRT支持任务调度，任务调度到哪个线程是随机的，thread_idx/线程优先级/线程亲和性等与线程绑定的行为禁止在任务中使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标准库同步原语使用约束",
      children: "标准库同步原语使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT任务中使用标准库的递归互斥锁可能发生死锁，需要更换为FFRT提供的递归互斥锁，说明如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "递归互斥锁在lock()成功时记录调用者“执行栈”作为锁的所有者，在后续lock()时会判断调用者是否为当前执行栈，如果是则返回成功，以支持在同一个执行栈中嵌套获取锁。在标准库的实现中，“执行栈”以线程标识表示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在FFRT任务中使用标准库的递归互斥锁，如果在外层和内层lock()之间，发生任务（协程）退出，任务恢复执行时在不同于首次调用lock()的FFRT Worker线程上，则判断当前线程不是所有者，lock()失败，FFRT Worker线程被挂起，后面的unlock()不会被执行，从而出现死锁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt同步原语使用约束",
      children: "FFRT同步原语使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于std::runtime_error无法跨线程处理，在ffrt的任务中使用try-catch时，不建议在catch块中使用ffrt的同步原语，否则可能导致异常无法正确捕获引发crash。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对进程fork场景的支持说明",
      children: "对进程fork()场景的支持说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在未使用FFRT的进程中，创建子进程，支持在该子进程中使用FFRT。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在已经使用FFRT的进程中，单独以fork()方式创建子进程，不支持在该子进程中使用FFRT。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在已经使用FFRT的进程中，同时以fork()和exec()方式创建子进程，支持在子进程中使用FFRT。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "以动态库方式部署ffrt",
      children: "以动态库方式部署FFRT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只能以动态库方式部署FFRT，静态库部署可能有多实例问题，例如：当多个被同一进程加载的so都以静态库的方式使用FFRT时，FFRT会被实例化成多份，其行为是未知的，这也不是FFRT设计的初衷。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "输入输出依赖数量的限制",
      children: "输入输出依赖数量的限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用ffrt_submit_base接口进行任务提交时，每个任务的输入依赖和输出依赖的数量之和不能超过8个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用ffrt_submit_h_base接口进行任务提交时，每个任务的输入依赖和输出依赖的数量之和不能超过7个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数既作为输入依赖又作为输出依赖的时候，统计依赖数量时只统计一次，如输入依赖是{&x}，输出依赖也是{&x}，实际依赖的数量是1。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进程或者线程退出时的限制",
      children: "进程或者线程退出时的限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进程退出时，FFRT内部的线程池等进程内共享的资源已经释放，禁止调用FFRT任务提交等接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程退出时，FFRT内部的thread local资源已经释放，正在退出的线程禁止调用FFRT任务提交等接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见反模式",
      children: "常见反模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-api中初始化ffrt对象后对象的置空与销毁由用户负责",
      children: "C API中初始化FFRT对象后，对象的置空与销毁由用户负责"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为保证较高的性能，FFRT的C API中内部不包含对对象的销毁状态的标记，用户需要合理地进行资源的释放，重复调用各个对象的销毁操作，其结果是未定义的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例1，重复调用销毁函数可能造成不可预知的数据损坏："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include \"ffrt/cpp/task.h\"\n\nvoid abnormal_case_1()\n{\n    ffrt_task_handle_t h = ffrt_submit_h_base(\n        ffrt::create_function_wrapper(std::function<void()>([](){ printf(\"Test task running...\\n\"); })),\n        NULL, NULL, NULL);\n    // ...\n    ffrt_task_handle_destroy(h);\n    ffrt_task_handle_destroy(h); // 重复释放\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例2，未调用销毁函数会造成内存泄漏："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include \"ffrt/cpp/task.h\"\n\nvoid abnormal_case_2()\n{\n    ffrt_task_handle_t h = ffrt_submit_h_base(\n        ffrt::create_function_wrapper(std::function<void()>([](){ printf(\"Test task running...\\n\"); })),\n        NULL, NULL, NULL);\n    // ...\n    // 内存泄露\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议示例，仅调用一次销毁函数，如有必要可进行置空："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <stdio.h>\n#include \"ffrt/cpp/task.h\"\n\nvoid normal_case()\n{\n    ffrt_task_handle_t h = ffrt_submit_h_base(\n        ffrt::create_function_wrapper(std::function<void()>([](){ printf(\"Test task running...\\n\"); })),\n        NULL, NULL, NULL);\n    // ...\n    ffrt_task_handle_destroy(h);\n    h = nullptr; // 必要时置空任务句柄变量\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量生命周期错误",
      children: "变量生命周期错误"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FFRT提交任务中应注意对象或资源在其生命周期内可能出现的误用，这些错误会导致程序崩溃、数据损坏或者难以调试的问题。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例1，变量生命周期已结束导致的UAF问题："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <unistd.h>\n#include \"ffrt/cpp/task.h\"\n\nvoid abnormal_case_3()\n{\n    int x = 0;\n    ffrt::submit([&] {\n        usleep(1000); // 模拟业务处理逻辑\n        x++;          // 此时变量生命周期可能已结束，对变量的访问会发生UAF问题\n    });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例2，互斥锁生命周期已结束继续使用导致功能异常："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <unistd.h>\n#include \"ffrt/cpp/mutex.h\"\n#include \"ffrt/cpp/task.h\"\n\nvoid abnormal_case_4()\n{\n    ffrt::mutex lock;\n    ffrt::submit([&] {\n        lock.lock();   // 对FFRT锁进行操作时，要保证其生命周期\n        usleep(1000);  // 模拟业务处理逻辑\n        lock.unlock(); // 对FFRT锁进行操作时，要保证其生命周期\n    });\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "using-ffrt-in-deveco-studio",
      children: "Using FFRT in DevEco Studio"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-ffrt-c-api",
      children: "Using FFRT C API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NDK（Native Development Kit）是系统提供的Native API的集合，方便开发者使用C或C++语言实现应用的关键功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT C API已集成在NDK中，在DevEco Studio中可以直接使用对应的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ffrt/task.h\"\n#include \"ffrt/mutex.h\"\n#include \"ffrt/shared_mutex.h\"\n#include \"ffrt/condition_variable.h\"\n#include \"ffrt/sleep.h\"\n#include \"ffrt/queue.h\"\n#include \"ffrt/loop.h\"\n#include \"ffrt/timer.h\"\n#include \"ffrt/type_def.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-ffrt-c-api-1",
      children: "Using FFRT C++ API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT的部署依赖FFRT动态库libffrt.so和一组头文件，其中动态库仅导出C接口，C++接口调用C接口，并基于头文件的方式将API中的C++元素编译到用户的动态库中，从而保证了ABI兼容性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(552898)/* ["default"] */.A) + "",
        width: "366",
        height: "342"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果要使用FFRT C++ API，需要使用FFRT C++接口三方库", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ohpm.openharmony.cn/#/cn/detail/@ppd%2Fffrt",
        children: "@ppd/ffrt"
      }), "，该三方库是由FFRT官方维护的FFRT C++ API库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块目录下执行三方库安装命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm install @ppd/ffrt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也可以直接在oh-package.json5文件中配置对应的依赖，由DevEco Studio自动进行三方库下载安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块CMakeLists.txt文件中添加头文件搜索路径和链接依赖："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# ${MODULES_PATH}表示三方库安装位置，需要开发者自己定义或者直接替换成绝对路径或者相对路径。\ninclude_directories(${MODULES_PATH}/@ppd/ffrt/include)\ntarget_link_libraries(${TARGET_NAME} PUBLIC libffrt.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "至此就可以在代码中使用FFRT C++接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// include all C or C++ header files\n#include \"ffrt/ffrt.h\"\n\n// include specified header files\n#include \"ffrt/cpp/task.h\"\n#include \"ffrt/cpp/mutex.h\"\n#include \"ffrt/cpp/shared_mutex.h\"\n#include \"ffrt/cpp/condition_variable.h\"\n#include \"ffrt/cpp/sleep.h\"\n#include \"ffrt/cpp/queue.h\"\n"
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
552898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798810-3a6ba1ccd788ea0b83aab0492b178822.png");

},
44972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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