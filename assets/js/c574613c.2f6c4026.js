"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["866456"], {
449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_long_time_task_long_time_task_guide_long_time_task_guide_md_c57_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-long-time-task-long-time-task-guide-long-time-task-guide-md-c57.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_long_time_task_long_time_task_guide_long_time_task_guide_md_c57_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide/long-time-task-guide","title":"长时任务开发指导（TaskPool）","description":"此处提供使用TaskPool进行长时任务的开发指导，以定期采集传感器数据为例。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide/long-time-task-guide.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide","slug":"/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"长时任务开发指导（TaskPool）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/long-time-task-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"长时任务并发场景简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-overview/"},"next":{"title":"常驻任务并发场景简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide/long-time-task-guide.md


const frontMatter = {
	title: '长时任务开发指导（TaskPool）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/long-time-task-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '长时任务开发指导（TaskPool）';

const assets = {

};



const toc = [{
  "value": "使用TaskPool进行传感器数据监听",
  "id": "使用taskpool进行传感器数据监听",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "长时任务开发指导taskpool",
        children: "长时任务开发指导（TaskPool）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处提供使用TaskPool进行长时任务的开发指导，以定期采集传感器数据为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用taskpool进行传感器数据监听",
      children: "使用TaskPool进行传感器数据监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入所需的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { sensor } from '@kit.SensorServiceKit';\nimport { taskpool } from '@kit.ArkTS';\nimport { BusinessError, emitter } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义长时任务，内部监听sensor数据，并通过emitter注册销毁通知。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\n@Concurrent\nasync function SensorListener() : Promise<void> {\n  sensor.on(sensor.SensorId.ACCELEROMETER, (data) => {\n    emitter.emit({ eventId: 0 }, { data: data });\n  }, { interval: 1000000000 });\n\n  emitter.on({ eventId: 1 }, () => {\n    sensor.off(sensor.SensorId.ACCELEROMETER)\n    emitter.off(1)\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "给sensor添加ohos.permission.ACCELEROMETER权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// module.json5\n\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.ACCELEROMETER\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "宿主线程定义注册及销毁的行为。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "注册：发起长时任务，并通过emitter接收监听数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "销毁：发送取消传感器监听的事件，并结束长时任务。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { sensor } from '@kit.SensorServiceKit';\nimport { taskpool } from '@kit.ArkTS';\nimport { BusinessError, emitter } from '@kit.BasicServicesKit';\n\n@Concurrent\nasync function sensorListener(): Promise<void> {\n  sensor.on(sensor.SensorId.ACCELEROMETER, (data) => {\n    emitter.emit({ eventId: 0 }, { data: data });\n  }, { interval: 1000000000 });\n\n  emitter.on({ eventId: 1 }, () => {\n    sensor.off(sensor.SensorId.ACCELEROMETER)\n    emitter.off(1)\n  })\n}\n\n@Entry\n@Component\nstruct Index {\n  sensorTask?: taskpool.LongTask\n  @State addListener: string = 'Add listener';\n  @State deleteListener: string = 'Delete listener';\n\n  build() {\n    Column() {\n      Text(this.addListener)\n        .id('Add listener')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.sensorTask = new taskpool.LongTask(sensorListener);\n          emitter.on({ eventId: 0 }, (data) => {\n            // Do something here\n            console.info(`Receive ACCELEROMETER data: {${data.data?.x}, ${data.data?.y}, ${data.data?.z}`);\n          });\n          taskpool.execute(this.sensorTask).then(() => {\n            console.info('Add listener of ACCELEROMETER success');\n          }).catch((e: BusinessError) => {\n            // Process error\n          })\n          this.addListener = 'success';\n        })\n      Text(this.deleteListener)\n        .id('Delete listener')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          emitter.emit({ eventId: 1 });\n          emitter.off(0);\n          if (this.sensorTask != undefined) {\n            taskpool.terminateTask(this.sensorTask);\n          } else {\n            console.error('sensorTask is undefined.');\n          }\n          this.deleteListener = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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