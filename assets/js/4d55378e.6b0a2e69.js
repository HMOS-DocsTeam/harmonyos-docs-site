"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["647499"], {
256037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_apptask_timeout_guidelines_apptask_timeout_guidelines_md_4d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-fault-analysis-apptask-timeout-guidelines-apptask-timeout-guidelines-md-4d5.json
var site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_apptask_timeout_guidelines_apptask_timeout_guidelines_md_4d5_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines/apptask-timeout-guidelines","title":"任务超时检测","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines/apptask-timeout-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"任务超时检测","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apptask-timeout-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Resource Leak（资源泄漏）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/resource-leak-guidelines/"},"next":{"title":"App Killed（应用终止）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines/apptask-timeout-guidelines.md


const frontMatter = {
	title: '任务超时检测',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apptask-timeout-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '任务超时检测';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "主线程超时检测",
  "id": "主线程超时检测",
  "level": 2
}, {
  "value": "检测原理",
  "id": "检测原理",
  "level": 3
}, {
  "value": "日志获取",
  "id": "日志获取",
  "level": 3
}, {
  "value": "日志规格",
  "id": "日志规格",
  "level": 3
}, {
  "value": "任务执行超时检测",
  "id": "任务执行超时检测",
  "level": 2
}, {
  "value": "检测原理",
  "id": "检测原理-1",
  "level": 3
}, {
  "value": "日志获取",
  "id": "日志获取-1",
  "level": 3
}, {
  "value": "日志规格",
  "id": "日志规格-1",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "任务超时检测",
        children: "任务超时检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在开发应用时，某一段业务逻辑期望执行一定时间，如果该业务逻辑执行时长超过预期时间，即为任务超时。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["任务超时检测主要包括主线程超时检测和任务执行超时检测，二者均可使用HiCollie实现自定义时长来对开发者选择的业务逻辑进行主动检测，主线程超时也可采用默认时长进行检测。详见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk",
        children: "HiCollie使用指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(301842)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines",
        children: "AppFreeze（应用冻屏）检测"
      }), "相比任务超时检测，主要是由系统侧提供检测周期性检测逻辑，无需开发者感知和适配。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主线程超时检测",
      children: "主线程超时检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测原理",
      children: "检测原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测主线程处理事件耗时情况，当任务时长超过阈值时，会触发日志采集流程，包含堆栈采集和trace采集两种流程。两种流程触发条件互斥，同一次超时只会触发一种采集流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据主线程单次事件处理时长，触发不同的采集流程。具体的触发条件、采集日志格式及频率限制如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "采集流程"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发条件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "采集日志格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "前提条件与限制"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "堆栈采集"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150ms < 主线程处理时长 < 450ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名格式：MAIN_THREAD_JANK_秒级时间_进程PID.txt。  例如：MAIN_THREAD_JANK_20240613211739_40986.txt。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "应用启动10s内不进行检测。"
              })
            }), "  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["关闭", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ide-debug-app/ide-developer-mode#section0736139111917",
                  children: "开发者选项"
                }), "：应用在一个生命周期内，一天最多触发一次主线程超时事件堆栈采集流程。"]
              })
            }), "  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["启用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ide-debug-app/ide-developer-mode#section530763213432",
                  children: "开发者选项"
                }), "：应用在一个生命周期内，一小时最多触发一次主线程超时事件采集堆栈采集流程。"]
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trace采集"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程处理时长 > 450ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名格式：MAIN_THREAD_JANK_unix时间戳_进程PID.trace。  例如：MAIN_THREAD_JANK_1762064185461_40986.trace。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 触发trace采集的前提：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["开发者使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology#nolog%E7%89%88%E6%9C%AC",
                  children: "nolog"
                }), "版本，并且关闭", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ide-debug-app/ide-developer-mode#section530763213432",
                  children: "开发者选项"
                })]
              })
            }), "。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "应用一天内，最多触发一次主线程超时事件trace采集流程。"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(201493)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "边界值（主线程处理时长等于450ms）不触发任何采集流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭开发者模式后，可能无法使用DevEco Studio。因此，可以提前安装应用，再关闭开发者模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "堆栈采集流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当主线程处理超时（150ms < 主线程处理时长 < 450ms）后，启动周期性检测任务，每隔150ms执行一次任务。前2轮检测中，至少有一轮检测到主线程处理时长超过150ms才会生成堆栈文件。分以下三种情况："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）第1轮检测到主线程处理超时（主线程处理时长 > 150ms），开始执行堆栈采集，每隔150ms采集1次堆栈，共采集10次堆栈，第11轮收集堆栈并上报事件，结束检测。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(86686)/* ["default"] */.A) + "",
            width: "1382",
            height: "425"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）第1轮未检测到主线程处理超时（主线程处理时长 > 150ms），第2轮检测到主线程处理超时（主线程处理时长 > 150ms），开始执行堆栈采集流程，每隔150ms采集1次，共采集10次堆栈，第12轮收集堆栈并上报事件，结束检测。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(102206)/* ["default"] */.A) + "",
            width: "1618",
            height: "431"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）前2轮均未检测到主线程处理超时（主线程处理时长 > 150ms），结束检测。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(381244)/* ["default"] */.A) + "",
            width: "946",
            height: "383"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "trace采集流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当主线程处理超时（主线程处理时长 > 450ms），调用开启trace采集接口，启动周期性检测，每隔150ms检测主线程处理时长超过150ms（检测轮数 = 20）。分两种情况："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）20轮均未检测到主线程处理超时（主线程处理时长 > 150ms），无trace文件生成，结束检测。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(167080)/* ["default"] */.A) + "",
            width: "1281",
            height: "408"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）20轮检测至少有一轮检测发生主线程处理超时（主线程处理时长 > 150ms），生成trace文件并上报事件，结束检测。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(270666)/* ["default"] */.A) + "",
            width: "1383",
            height: "403"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志获取",
      children: "日志获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程超时日志保存在应用沙箱目录下，可通过以下方式获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过HiAppEvent接口订阅"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiAppEvent给开发者提供了故障订阅接口，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
        children: "HiAppEvent介绍"
      }), "。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-arkts",
        children: "订阅主线程超时事件（ArkTS）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events-ndk",
        children: "订阅主线程超时事件（C/C++）"
      }), "完成主线程超时事件订阅，并通过事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "external_log"
      }), "字段读取故障日志文件名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志规格",
      children: "日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主线程超时检测采集日志老化规格"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般情况，栈文件的大小为7-10KB，trace大小为1-5MB。应用沙箱内的watchdog目录最大保存10M内容，超出后，会自动触发此目录老化机制，按照文件名顺序最多删除100文件。目录地址：/data/storage/el2/log/watchdog/。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主线程超时检测采集堆栈规格"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "抓栈功能目前只支持ARM64架构，抓栈结果为解析后的混合栈信息，包含native帧和JS帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "抓栈结果部分示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "9 #00 pc 0000757c /system/bin/appspawn(55679d09bcdea35bb1e0d4e1d9a3e58f)\n    9 #01 pc 000731c0 /system/lib/ld-musl-aarch64.so.1(add9e521e4eaf5cb009d4260f3b69ccd)\n        9 #02 pc 000090a9 /system/bin/appspawn(main+396)(55679d09bcdea35bb1e0d4e1d9a3e58f)\n            9 #03 pc 0000ab5d /system/bin/appspawn(AppSpawnRun+100)(55679d09bcdea35bb1e0d4e1d9a3e58f)\n                9 #04 pc 0000e7f1 /system/lib/chipset-pub-sdk/libbegetutil.z.so(RunLoop_+200)(52ace27d827ad482439bf32cc75bb17b)\n                ......\n                                        9 #21 pc 00107aec /system/lib/ld-musl-aarch64.so.1(__pthread_cond_timedwait+628)(add9e521e4eaf5cb009d4260f3b69ccd)\n1 #00 pc 00032e67 /system/lib/platformsdk/libmmi-util.z.so(OHOS::MMI::UDSSocket::OnReadPackets(OHOS::MMI::CircleStreamBuffer&, std::__h::function<void (OHOS::MMI::NetPacket&)>)+158)(99e56bc765f9208f7b7ba8b268886a59)\n    1 #01 pc 0000312e5 /system/lib/platformsdk/libmmi-client.z.so(OHOS::MMI::ClientMsgHandler::OnMsgHandler(OHOS::MMI::UDSClient const&, OHOS::MMI::NetPacket&)+340)(66ac85e964777ae89f0c26c339093cd1)\n        1 #02 pc 0003016b /system/lib/platformsdk/libmmi-client.z.so(OHOS::MMI::ClientMsgHandler::OnPointerEvent(OHOS::MMI::UDSClient const&, OHOS::MMI::NetPacket&)+1222)(66ac85e964777ae89f0c26c339093cd1)\n            1 #03 pc 0003b96b /system/lib/platformsdk/libmmi-client.z.so(OHOS::MMI::InputManagerImpl::OnPointerEvent(std::__h::shared_ptr<OHOS::MMI::PointerEvent>)+1370)(66ac85e964777ae89f0c26c339093cd1)\n                1 #04 pc 00095903 /system/lib/platformsdk/libwm.z.so(OHOS::Rosen::InputEventListener::OnInputEvent(std::__h::shared_ptr<OHOS::MMI::PointerEvent>) const+478)(9c40c5f416d6f830435126998fbcad42)\n                ......\n                                        1 #21 pc 003f5c55 /system/lib/platformsdk/libark_jsruntime.so(4e6a2651ec80a7f639233f414d6486fe)\n                                            1 #22 at anonymous (/entry/build/default/cache/default/default@CompileArkTS/esmodule/debug/entry/src/main/ets/pages/Index.js:67:17)\n                                                1 #23 at wait2 (/entry/build/default/cache/default/default@CompileArkTS/esmodule/debug/entry/src/main/ets/pages/Index.js:16:12)\n                                                ......\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每次抓栈拷贝16KB主线程调用栈信息进行回栈解析，所以每一次抓栈结果最多可以展示进程16KB调用信息，共进行10次，重复栈帧会聚合在一起，不同调用层次通过行缩进进行区分，最终以树型方式进行展示。当抓栈失败（如主线程阻塞在内核或信号被屏蔽等情况）时，将会输出“/proc/self/wchan”文件内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示结果中每一行表示一个栈信息，每一行栈帧信息所表示的意义可以按如下方式解读："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "native帧格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "9 #02 pc 000090a9 /system/bin/appspawn(main+396)(55679d09bcdea35bb1e0d4e1d9a3e58f)\n^  ^       ^               ^              ^                   ^\n1  2       3               4              5                   6\n\n1 表示采样到此帧的次数。\n2 表示帧的调用层级，行缩进大小与该层级对应，所有同一层级帧采样到的次数和不大于10次，#00采样次数和为10（设置采样的次数）。\n3 为native帧PC值。\n4 表示调用的文件路径。\n5 调用的函数名及代码行偏移。\n6 so文件md5值。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JS帧格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "1 #23 at wait2 (/entry/build/default/cache/default/XXX/entry/src/main/ets/pages/Index.js:16:12)\n^  ^    ^               ^\n1  2    3               4\n\n1 表示采样到此帧的次数，同样最大为采样次数。\n2 表示帧的调用层级，与native帧意义相同。\n3 表示调用函数名wait2。\n4 表示调用函数所在的路径，文件及行列号。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主线程超时检测采集trace规格"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["trace文件大小约为1-5M左右。trace文件可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/developtools_smartperf_host",
            children: "HiSmartPerf"
          }), "工具进行可视化分析。工具下载链接：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/developtools_smartperf_host/releases",
            children: "developtools_smartperf_host官方发行版"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["trace文件说明参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/developtools_smartperf_host/blob/master/smartperf_host/ide/src/doc/md/quickstart_systemtrace.md",
            children: "web端加载trace说明"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "任务执行超时检测",
      children: "任务执行超时检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测原理-1",
      children: "检测原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "概述"
        })
      }), "：业务逻辑超出预期时间即为任务超时。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "检测原理"
        })
      }), "：开发者自定义超时时间，随后在执行业务逻辑时，如果业务逻辑超出预期时间即为任务执行超时。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测原理如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(811708)/* ["default"] */.A) + "",
        width: "698",
        height: "523"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志获取-1",
      children: "日志获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务执行超时日志可通过以下方式获取："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过HiAppEvent接口订阅"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiAppEvent给开发者提供了故障订阅接口，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
        children: "HiAppEvent介绍"
      }), "。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-arkts",
        children: "订阅任务执行超时事件（ArkTS）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk",
        children: "订阅任务执行超时事件（C/C++）"
      }), "完成任务执行超时事件订阅，并通过事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "external_log"
      }), "字段读取故障日志文件名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志规格-1",
      children: "日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["任务执行超时事件日志规格与应用冻屏日志相同，可详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "应用冻屏日志规格"
      }), "。"]
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
301842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
102206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798844-542e1c1360a95b40ce16d052f7ddfd2f.png");

},
86686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478493-b478e7d56c20aabae6282defc1d8c5fc.png");

},
381244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438539-270c8b2c52b0fbbe6445824ee467ae5b.png");

},
167080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958494-c2f22e19365926dfc94a2133ffaff3be.png");

},
811708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798846-ba30428dbd9787445c7a7ebeedeaa151.png");

},
201493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
270666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478495-9962ca9da4f1c88fcfc2ddf8f8df897f.png");

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