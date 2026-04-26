"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["754537"], {
734776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_taskpool_async_task_guide_taskpool_async_task_guide_md_5a1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-taskpool-async-task-guide-taskpool-async-task-guide-md-5a1.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_taskpool_async_task_guide_taskpool_async_task_guide_md_5a1_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide/taskpool-async-task-guide","title":"TaskPool指定任务并发度场景","description":"TaskPool支持使用异步队列来控制任务的并发度，能有效避免资源过载，减少任务阻塞，适用于网络请求、视频流处理和数据库操作等场景。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide/taskpool-async-task-guide.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"TaskPool指定任务并发度场景","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-async-task-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"C++线程间数据共享场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared/"},"next":{"title":"ArkUI瀑布流渲染场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide/taskpool-async-task-guide.md


const frontMatter = {
	title: 'TaskPool指定任务并发度场景',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-async-task-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'TaskPool指定任务并发度场景';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "taskpool指定任务并发度场景",
        children: "TaskPool指定任务并发度场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TaskPool支持使用异步队列来控制任务的并发度，能有效避免资源过载，减少任务阻塞，适用于网络请求、视频流处理和数据库操作等场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处提供使用TaskPool创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#asyncrunner18",
        children: "异步队列"
      }), "的开发指导，以相机预览流采集数据处理的功能为例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于处理过程是一个频繁且耗时的任务，当相机采集速度过快时，将丢弃之前的采集数据，仅保留最新的一帧数据进行处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要用到的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// TaskpoolAsyncLevel.ets\nimport { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { PromptAction } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义耗时任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// TaskpoolAsyncLevel.ets\n@Concurrent\nfunction collectFrame() {\n  // 采集数据，并且进行处理\n  // 模拟处理过程，这里是个耗时任务，持续时间为30秒\n  let t = new Date().getTime()\n  while (new Date().getTime() - t < 30000) {\n    continue;\n  }\n  console.info('collectFrame finished');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建异步队列并执行采集任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// TaskpoolAsyncLevel.ets\n@Entry\n@Component\nstruct TaskpoolAsyncLevel {\n  @State message: string = '触发采集任务';\n  @State returnMessage: string = 'return...';\n  @State promptAction: PromptAction = this.getUIContext().getPromptAction();\n  \n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            // 创建并发度为5的异步队列，等待队列个数为5，当加入的任务数量超过5时，等待列表中处于队头的任务会被丢弃\n            let asyncRunner:taskpool.AsyncRunner = new taskpool.AsyncRunner('async', 5, 5);\n            // 触发采集任务\n            for (let i = 0; i < 20; i++) {\n              let task:taskpool.Task = new taskpool.Task(`async${i}`,collectFrame);\n              asyncRunner.execute(task).then(() => {\n                console.info('the current task name is ' + task.name);\n              }).catch((e:BusinessError) => {\n                console.error('async: error is ' + e);\n              });\n            }\n            console.info('asyncRunner task finished');\n            this.returnMessage = 'asyncRunner task finished';\n            this.promptAction.showToast({ message: this.returnMessage });\n          })\n        // ...\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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