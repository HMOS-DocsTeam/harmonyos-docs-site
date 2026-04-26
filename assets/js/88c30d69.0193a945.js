"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["726399"], {
975537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_multi_time_consuming_tasks_multi_time_consuming_tasks_md_88c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-guide-multi-time-consuming-tasks-multi-time-consuming-tasks-md-88c.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_multi_time_consuming_tasks_multi_time_consuming_tasks_md_88c_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks/multi-time-consuming-tasks","title":"使用TaskPool执行多个耗时任务","description":"多个任务同时执行时，由于任务复杂度不同，执行时间和返回数据的时间也会不同。如果宿主线程需要所有任务执行完毕的数据，可以通过TaskGroup的方式实现。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks/multi-time-consuming-tasks.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用TaskPool执行多个耗时任务","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-time-consuming-tasks","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用TaskPool执行独立的耗时任务","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/independent-time-consuming-task/"},"next":{"title":"TaskPool任务与宿主线程通信","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks/multi-time-consuming-tasks.md


const frontMatter = {
	title: '使用TaskPool执行多个耗时任务',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-time-consuming-tasks',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用TaskPool执行多个耗时任务';

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
        id: "使用taskpool执行多个耗时任务",
        children: "使用TaskPool执行多个耗时任务"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多个任务同时执行时，由于任务复杂度不同，执行时间和返回数据的时间也会不同。如果宿主线程需要所有任务执行完毕的数据，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#taskgroup10",
        children: "TaskGroup"
      }), "的方式实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了以上情况，如果需要处理的数据量较大，例如一个列表中有10000条数据，将这些数据放在一个Task中处理会非常耗时。那么就可以将原始数据拆分成多个子列表，为每个子列表分配一个独立的Task执行，等待全部Task执行完成后合并结果形成完整的数据，这样可以节省处理时间，提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以多个任务进行图片加载为例进行说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现子线程中需要执行的任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export class IconItemSource {\n  image: string | Resource = '';\n  text: string | Resource = '';\n\n  constructor(image: string | Resource = '', text: string | Resource = '') {\n    this.image = image;\n    this.text = text;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { IconItemSource } from './IconItemSource';\n\n// 在Task中执行的方法，需要添加@Concurrent注解，否则无法正常调用。\n@Concurrent\nexport function loadPicture(count: number): IconItemSource[] {\n  let iconItemSourceList: IconItemSource[] = [];\n  // 遍历添加6*count个IconItem的数据\n  for (let index = 0; index < count; index++) {\n    const numStart: number = index * 6;\n    // 此处循环使用6张图片资源\n    iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 1}`));\n    iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 2}`));\n    iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 3}`));\n    iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 4}`));\n    iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 5}`));\n    iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 6}`));\n  }\n  return iconItemSourceList;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将需要执行的Task放到一个TaskGroup里面，当TaskGroup中的所有Task执行完毕后，会将所有Task的结果都放在一个数组中并返回给宿主线程，而不是每执行完一个Task就返回一次，这样宿主线程就可以在返回的数据里拿到所有Task的执行结果，便于后续使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { taskpool } from '@kit.ArkTS';\nimport { IconItemSource } from './IconItemSource';\nimport { loadPicture } from './IndependentTask';\n\nlet iconItemSourceList: IconItemSource[] = [];\n\nlet taskGroup: taskpool.TaskGroup = new taskpool.TaskGroup();\ntaskGroup.addTask(new taskpool.Task(loadPicture, 30));\ntaskGroup.addTask(new taskpool.Task(loadPicture, 20));\ntaskGroup.addTask(new taskpool.Task(loadPicture, 10));\ntaskpool.execute(taskGroup).then((ret: object) => {\n  let tmpLength = (ret as IconItemSource[][]).length\n  for (let i = 0; i < tmpLength; i++) {\n    for (let j = 0; j < ret[i].length; j++) {\n      if (ret[i] && ret[i][j]) {\n        iconItemSourceList.push(ret[i][j]);\n      }\n    }\n  }\n  // The length of iconItemSourceList is 360\n  console.info('The length of iconItemSourceList is ' + (iconItemSourceList?.length ?? 0));\n})\n"
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