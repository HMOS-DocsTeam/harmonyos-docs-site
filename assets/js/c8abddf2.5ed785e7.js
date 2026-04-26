"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["47864"], {
241628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_perf_detection_perf_detection_md_c8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-perf-detection-perf-detection-md-c8a.json
var site_docs_system_debug_optimize_performance_analysis_kit_perf_detection_perf_detection_md_c8a_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/perf-detection/perf-detection","title":"性能检测","description":"启动耗时事件检测","source":"@site/docs/system-debug-optimize/performance-analysis-kit/perf-detection/perf-detection.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/perf-detection","slug":"/system-debug-optimize/performance-analysis-kit/perf-detection/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/perf-detection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"性能检测","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perf-detection","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"功耗检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/power-detection/"},"next":{"title":"使用HiLog打印日志（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hilog-dev/hilog-guidelines-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/perf-detection/perf-detection.md


const frontMatter = {
	title: '性能检测',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perf-detection',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '性能检测';

const assets = {

};



const toc = [{
  "value": "启动耗时事件检测",
  "id": "启动耗时事件检测",
  "level": 2
}, {
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "事件获取方式",
  "id": "事件获取方式",
  "level": 3
}, {
  "value": "滑动事件检测",
  "id": "滑动事件检测",
  "level": 2
}, {
  "value": "简介",
  "id": "简介-1",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理-1",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制-1",
  "level": 3
}, {
  "value": "滑动丢帧日志采集机制",
  "id": "滑动丢帧日志采集机制",
  "level": 2
}, {
  "value": "滑动丢帧事件日志规格",
  "id": "滑动丢帧事件日志规格",
  "level": 2
}, {
  "value": "日志获取方式",
  "id": "日志获取方式",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "性能检测",
        children: "性能检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动耗时事件检测",
      children: "启动耗时事件检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动耗时事件是用于度量应用启动过程在系统可感知阶段耗时的事件，主要是针对用户可感知的应用启动过程进行性能度量，包括桌面启动、状态栏启动、最近任务列表启动等场景。开发者订阅此事件可以获取到启动过程中关键阶段耗时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动事件统计时间起点为用户点击屏幕，默认结束点为启动动效完成，使用者可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#reportdrawncompleted10",
        children: "reportDrawCompleted"
      }), "接口根据实际情况传入定制结束时间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(579419)/* ["default"] */.A) + "",
        width: "525",
        height: "213"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "icon_input_time：用户点击屏幕时间点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "animation_finish_time：系统定义的启动耗时，开发者无法干预，该时间为手指离开屏幕到启动动效结束的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["extend_time：开发者定制的启动耗时，该时间为手指离开屏幕到开发者调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext#reportdrawncompleted12",
        children: "reportDrawnCompleted"
      }), "接口的时间。开发者可以根据业务需要在合适的时机调用reportDrawnCompleted接口，不调用或手指离开屏幕后5s未调用则该指标大小为0。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动事件是指用户操作的应用启动，不包括进程自动重启等情况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动时间为行为类事件，触发后即上报不受阈值限制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "事件获取方式",
      children: "事件获取方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过订阅HiAppEvent获取启动耗时事件及其相关信息，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
        children: "HiAppEvent介绍"
      }), "。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-arkts",
        children: "订阅启动耗时事件（ArkTS）"
      }), "完成启动耗时事件订阅。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滑动事件检测",
      children: "滑动事件检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介-1",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动丢帧事件用于检测列表滑动过程中产生的卡顿，订阅此事件后，会在列表滑动中出现超过50ms的卡顿时上报故障事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理-1",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "计算方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当列表滑动过程中应用主线程或者RenderService绘制流程中出现卡顿时上报此事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中滑动过程从手势识别为滑动开始到页面滑动停止结束。从应用主线程和RenderService绘制分别计算卡顿时长。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上报阈值："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最大单帧耗时超过50ms则为滑动丢帧，具体规则为max_render_frametime或max_app_frametime超过50ms时 会触发该事件上报。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(960388)/* ["default"] */.A) + "",
            width: "654",
            height: "315"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制-1",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动单帧耗时不超过50ms时不会触发上报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滑动丢帧日志采集机制",
      children: "滑动丢帧日志采集机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动丢帧事件会触发主线程的调用栈采集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动时间"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滑动丢帧的采样栈功能仅在滑动过程中开启。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采栈时间"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在滑动过程中，如果应用主线程出现了达到上报阈值的卡顿，则触发采栈。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滑动丢帧事件日志规格",
      children: "滑动丢帧事件日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日志老化规格"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般情况，栈文件的大小为7-10KB。应用沙箱内的watchdog目录最大保存10M内容，超出后，需要用户手动清 理文件。目录地址：/data/storage/el2/log/watchdog/。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若用户未主动清理，系统会触发清理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件里如何获取日志"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从external_logs中获取日志路径。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采样栈的格式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "抓栈功能目前只支持ARM64架构，抓栈结果为解析后的混合栈信息，包含native帧和JS帧。此日志为避免过度消耗系统资源，一个进程一天至多采集一次。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抓栈结果部分示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(743084)/* ["default"] */.A) + "",
        width: "1259",
        height: "225"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此采样栈包含在滑动出现超过50ms卡顿时应用主线程调用信息，由于一般滑动卡顿过程较短，因此在出现问题时采集了一次调用栈。可根据同一场景卡顿上报的采样栈数据进行聚类，以判断该场景下滑动卡顿的具体根因。采样栈具体解析方法详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "主线程超时调用栈日志规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志获取方式",
      children: "日志获取方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiAppEvent给开发者提供了故障订阅接口，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
        children: "HiAppEvent介绍"
      }), "。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/frame-drops-event-during-scrolling/hiappevent-watcher-scroll-jank-arkts",
        children: "订阅滑动丢帧事件（ArkTS）"
      }), "完成滑动丢帧事件订阅。"]
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
960388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958496-478649dba485196dcf2603bea36515ff.png");

},
579419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438541-040e83f99120515c4ecd60a55fbccda0.png");

},
743084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478497-ff45acd0733598f7db839a777d052a01.png");

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