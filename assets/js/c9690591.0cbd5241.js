"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["454068"], {
936576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_hiappevent_faq_hiappevent_faq_md_c96_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-hiappevent-faq-hiappevent-faq-md-c96.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_hiappevent_faq_hiappevent_faq_md_c96_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq/hiappevent-faq","title":"HiAppEvent常见问题","description":"查不到已通过HiAppEvent订阅的事件内容","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq/hiappevent-faq.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"HiAppEvent常见问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-faq","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅音频卡顿事件（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event-c/"},"next":{"title":"使用FaultLogExtensionAbility订阅事件","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-faq/hiappevent-faq.md


const frontMatter = {
	title: 'HiAppEvent常见问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-faq',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'HiAppEvent常见问题';

const assets = {

};



const toc = [{
  "value": "查不到已通过HiAppEvent订阅的事件内容",
  "id": "查不到已通过hiappevent订阅的事件内容",
  "level": 2
}, {
  "value": "无法获取external_log日志文件",
  "id": "无法获取external_log日志文件",
  "level": 2
}, {
  "value": "无法删除external_log日志文件",
  "id": "无法删除external_log日志文件",
  "level": 2
}, {
  "value": "同一应用内，事件的回调不区分线程、进程",
  "id": "同一应用内事件的回调不区分线程进程",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hiappevent常见问题",
        children: "HiAppEvent常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查不到已通过hiappevent订阅的事件内容",
      children: "查不到已通过HiAppEvent订阅的事件内容"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发调试阶段，崩溃、应用冻屏等故障发生后，无法在DevEco Studio的HiLog窗口中获取已通过HiAppEvent订阅的事件内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能的原因&解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发生崩溃、应用冻屏等故障后，应用已退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解决办法：再次启动应用，查看相应的事件内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无法获取external_log日志文件",
      children: "无法获取external_log日志文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hilog中出现如下日志："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "eventInfo.params.external_log=[]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HiAppEvent file does not exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能的原因&解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况一"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log日志文件所在目录的空间已达到上限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["external_log所在的目录为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory",
        children: "应用沙箱目录"
      }), "，目录空间受限。log_over_limit字段用于判断external_log日志文件所在目录的空间是否达到上限。如果log_over_limit的值为true，表示external_log日志文件所在目录空间已达到上限，事件包含的日志文件将无法写入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log是一个字符串数组。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log=[\"/data/storage/el2/log/hiappevent/APP_CRASH_时间戳_xxxx.log\"]。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可采取的解决措施"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%97%A0%E6%B3%95%E5%88%A0%E9%99%A4external_log%E6%97%A5%E5%BF%97%E6%96%87%E4%BB%B6",
        children: "无法删除external_log日志文件"
      }), "中的解决措施，清理历史日志文件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况二"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分系统事件（如启动耗时事件）本身没有external_log，因而没有external_log日志文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可采取的解决措施"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查看对应的事件介绍章节，确认事件是否包含external_log：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/event-subscription-overview#%E7%B3%BB%E7%BB%9F%E4%BA%8B%E4%BB%B6",
        children: "系统事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况三"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件发生在事件订阅之前。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调用事件订阅接口addWatcher()前，没有开始监听系统事件。因此事件订阅之前的事件没有external_log日志文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可采取的解决措施"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认事件订阅与事件发生的时序关系。先事件订阅，然后事件发生，才能获取到事件的external_log日志文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况四"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统事件没有触发成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果系统事件没发生，就不会有external_log日志文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可采取的解决措施"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看系统事件的其他日志，确认系统事件是否已经触发成功。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况五"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log日志文件生成后又被删除了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，在一个应用中，A和B两个模块都订阅了系统事件C。A模块处理完系统事件C的回调后，删除了external_log日志文件。随后B模块在系统事件C的回调中访问external_log日志文件，会提示日志文件不存在。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可采取的解决措施"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查其他模块是否已删除external_log日志文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无法删除external_log日志文件",
      children: "无法删除external_log日志文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log日志文件所在目录的空间已达到上限，但无法删除external_log日志文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者如果有权限访问设备的“/data/app/el2/100/log/应用包名”目录，可以手动删除external_log日志文件。文件目录为/data/app/el2/100/log/应用包名/hiappevent（或resourcelimit或watchdog）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者若没有权限访问设备的“/data/app/el2/100/log/应用包名”目录，可以在应用代码中删除external_log日志文件。代码示例如下。文件删除接口可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileiounlink",
          children: "fileIo.unlink"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';\n\n  hiAppEvent.addWatcher({\n    // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n    name: \"AppCrashWatcher\",\n    // 订阅过滤条件，这里是订阅了系统事件中的崩溃事件\n    appEventFilters: [\n      {\n        domain: hiAppEvent.domain.OS,\n        names: [hiAppEvent.event.APP_CRASH]\n      }\n    ],\n    // 实现onReceive回调，监听到事件后实时回调\n    onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n      hilog.info(0x0000, 'testTag', `domain=${domain}`);\n      for (const eventGroup of appEventGroups) {\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventName=${eventGroup.name}`);\n        for (const eventInfo of eventGroup.appEventInfos) {\n          // 开发者可以获取到崩溃事件发生的时间戳\n          hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.time=${JSON.stringify(eventInfo.params['time'])}`);\n          // 开发者可以获取到崩溃应用的包名\n          hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.bundle_name=${JSON.stringify(eventInfo.params['bundle_name'])}`);\n          // 开发者可以获取到崩溃事件发生时的故障日志文件\n          hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.external_log=${JSON.stringify(eventInfo.params['external_log'])}`);\n\n          if (eventInfo.params['external_log'] != undefined) {\n            for (let index = 0; index < eventInfo.params['external_log'].length; ++index) {\n              let externalLog: string = eventInfo.params['external_log'][index];\n              hilog.info(0x0000, 'testTag', `externalLog=${externalLog}`);\n              // 验证访问权限：\n              let res = fileIo.accessSync(externalLog);\n              if (res) {\n                hilog.info(0x0000, 'testTag', `HiAppEvent file exists`);\n              } else {\n                hilog.error(0x0000, 'testTag', `HiAppEvent file does not exist`);\n              }\n              // 验证读写权限：\n              fileIo.open(externalLog, fileIo.OpenMode.READ_WRITE).then((file: fileIo.File) => {\n              hilog.info(0x0000, 'testTag', `HiAppEvent file=${externalLog} fd=${file.fd}`);\n              fileIo.closeSync(file);\n              }).catch((err: BusinessError) => {\n                hilog.info(0x0000, 'testTag',\n                `HiAppEvent open file=${externalLog} failed with error message=${err.message}, error code=${err.code}`);\n              });\n              // 删除external_log日志文件：\n              fileIo.unlink(externalLog).then(() => {\n                console.info(\"HiAppEvent remove file:\" + externalLog + \" succeed\");\n              }).catch((err: BusinessError) => {\n                console.error(\"HiAppEvent remove file:\" + externalLog + \" failed with error message: \" + err.message +\n                \", error code: \" + err.code);\n              });\n            }\n          }\n        }\n      }\n    }\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "访问及删除external_log日志文件的日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "externalLog=/data/storage/el2/log/hiappevent/APP_CRASH_1751081104816_35595.log\nHiAppEvent file exists\nHiAppEvent file=/data/storage/el2/log/hiappevent/APP_CRASH_1751081104816_35595.log fd=61\nHiAppEvent remove file:/data/storage/el2/log/hiappevent/APP_CRASH_1751081104816_35595.log succeed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(308807)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log返回的路径是应用沙箱目录，非真实物理路径。应用有权限访问自己的沙箱目录。external_log日志空间受限，应用处理完日志文件后应及时删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "同一应用内事件的回调不区分线程进程",
      children: "同一应用内，事件的回调不区分线程、进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，在同一个应用内，有A、B两个进程，进程A已调用addWatcher()接口订阅崩溃事件。如果进程B发生崩溃，进程A能收到进程B的崩溃回调。只要进程A和B的应用名一致即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口参考链接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent#hiappeventaddwatcher",
        children: "hiAppEvent.addWatcher"
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
308807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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