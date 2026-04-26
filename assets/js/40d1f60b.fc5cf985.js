"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["792897"], {
535697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_io_intensive_task_development_io_intensive_task_development_md_40d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-time-consuming-task-io-intensive-task-development-io-intensive-task-development-md-40d.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_time_consuming_task_io_intensive_task_development_io_intensive_task_development_md_40d_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development/io-intensive-task-development","title":"I/O密集型任务开发指导 (TaskPool)","description":"使用异步并发可以解决单次I/O任务阻塞的问题。对于I/O密集型任务，若线程中的其他任务仍可能被阻塞，建议采用多线程并发来处理。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development/io-intensive-task-development.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development","slug":"/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"I/O密集型任务开发指导 (TaskPool)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/io-intensive-task-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CPU密集型任务开发指导 (TaskPool和Worker)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development/"},"next":{"title":"同步任务开发指导 (TaskPool和Worker)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development/io-intensive-task-development.md


const frontMatter = {
	title: 'I/O密集型任务开发指导 (TaskPool)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/io-intensive-task-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'I/O密集型任务开发指导 (TaskPool)';

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
        id: "io密集型任务开发指导-taskpool",
        children: "I/O密集型任务开发指导 (TaskPool)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用异步并发可以解决单次I/O任务阻塞的问题。对于I/O密集型任务，若线程中的其他任务仍可能被阻塞，建议采用多线程并发来处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I/O密集型任务的性能关键在于I/O操作的速度和效率，而非CPU的处理能力。这类任务需要频繁进行磁盘读写和网络通信。此处通过频繁读写系统文件来模拟I/O密集型并发任务的处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义并发函数，内部密集调用I/O能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileIo } from '@kit.CoreFileKit';\n\n// 定义并发函数，内部密集调用I/O能力\n// 写入文件的实现\nexport async function write(data: string, filePath: string): Promise<void> {\n  let file: fileIo.File = await fileIo.open(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  await fileIo.write(file.fd, data);\n  fileIo.close(file);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { write } from './write'\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { taskpool } from '@kit.ArkTS';\nimport { common } from '@kit.AbilityKit';\n\n@Concurrent\nasync function concurrentTest(context: common.UIAbilityContext): Promise<boolean> {\n  let filePath1: string = context.filesDir + '/path1.txt'; // 应用文件路径\n  let filePath2: string = context.filesDir + '/path2.txt';\n  // 循环写文件操作\n  let fileList: string[] = [];\n  fileList.push(filePath1);\n  fileList.push(filePath2);\n  const writePromises: Promise<boolean | void>[] = [];\n  for (let i: number = 0; i < fileList.length; i++) {\n    const writePromise = write('Hello World!', fileList[i]).then(() => {\n      console.info(`Succeeded in writing the file. FileList: ${fileList[i]}`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to write the file. Code is ${err.code}, message is ${err.message}`)\n      return false;\n    });\n    writePromises.push(writePromise);\n  }\n  try {\n    await Promise.all(writePromises);\n    return true;\n  } catch (error) {\n    return false;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用TaskPool执行包含密集I/O的并发函数，通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#taskpoolexecute",
            children: "execute()"
          }), "方法执行任务，并在回调中处理调度结果。示例中获取filePath1和filePath2的方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
            children: "获取应用文件路径"
          }), "。在TaskPool中使用context时，需先在并发函数外部准备好，并通过参数传递给并发函数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  uiContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            let context = this.uiContext?.getHostContext() as common.UIAbilityContext;\n            // 使用TaskPool执行包含密集I/O的并发函数\n            // 数组较大时，I/O密集型任务分发也会抢占UI主线程，需要使用多线程能力\n            taskpool.execute(concurrentTest, context).then(() => {\n              // 调度结果处理\n              console.info('taskpool: execute success')\n            })\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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