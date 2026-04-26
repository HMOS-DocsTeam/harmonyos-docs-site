"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290792"], {
841045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_sendablelrucache_recent_list_sendablelrucache_recent_list_md_8e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-sendablelrucache-recent-list-sendablelrucache-recent-list-md-8e2.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_sendablelrucache_recent_list_sendablelrucache_recent_list_md_8e2_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list/sendablelrucache-recent-list","title":"获取最近访问列表场景","description":"为了快速访问最近使用的Sendable对象，从API version 18开始，ArkTS引入了SendableLruCache。开发者可以通过向SendableLruCache实例中添加、删除和获取Sendable对象，实现快速访问最近使用的Sendable对象。本文提供使用SendableLruCache实现获取最近使用列表的开发指导，以书架为例，每次打开一本图书后，需将图书信息更新到最近访问列表中，并在下次访问书架页面时显示最近访问的图书列表。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list/sendablelrucache-recent-list.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"获取最近访问列表场景","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sendablelrucache-recent-list","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkUI瀑布流渲染场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow/"},"next":{"title":"多线程取消TaskPool任务场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list/sendablelrucache-recent-list.md


const frontMatter = {
	title: '获取最近访问列表场景',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sendablelrucache-recent-list',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '获取最近访问列表场景';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "获取最近访问列表场景",
        children: "获取最近访问列表场景"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了快速访问最近使用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable"
      }), "对象，从API version 18开始，ArkTS引入了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-sendablelrucache/arkts-apis-arkts-utils-sendablelrucache",
        children: "SendableLruCache"
      }), "。开发者可以通过向SendableLruCache实例中添加、删除和获取Sendable对象，实现快速访问最近使用的Sendable对象。本文提供使用SendableLruCache实现获取最近使用列表的开发指导，以书架为例，每次打开一本图书后，需将图书信息更新到最近访问列表中，并在下次访问书架页面时显示最近访问的图书列表。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(335609)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用SendableLruCache实例对象时需加锁，避免多线程同时操作导致数据不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存放到SendableLruCache实例中的对象必须是Sendable对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建SendableLruCache实例对象，并根据业务需求预设最大容量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此例设置SendableLruCache实例的最大容量为4，用SendableClass类管理，并导出SendableClass类实例对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// LruCache.ets\nimport { ArkTSUtils } from '@kit.ArkTS';\n\n// 使用use shared标记为共享模块\n'use shared'\n\n// SendableClass实例对象在不同线程间可共享\n@Sendable\nclass SendableClass {\n  // 使用SendableLruCache实例对象时需加锁，避免多线程同时操作导致数据不一致\n  private lock_: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock();\n  private books_: ArkTSUtils.SendableLruCache<string, string> = new ArkTSUtils.SendableLruCache<string, string>(4);\n\n  constructor() {\n    this.books_.put('fourth', 'Book4');\n    this.books_.put('third', 'Book3');\n    this.books_.put('second', 'Book2');\n    this.books_.put('first', 'Book1');\n  }\n\n  // 封装put、get、keys方法，加锁操作\n  public async put(key: string, value: string) {\n    await this.lock_.lockAsync(() => {\n      this.books_.put(key, value);\n    })\n  }\n\n  public async get(key: string): Promise<string | undefined> {\n    return this.lock_.lockAsync(() => {\n      return this.books_.get(key);\n    });\n  }\n\n  public async keys(): Promise<string[]> {\n    return this.lock_.lockAsync(() => {\n      return this.books_.keys();\n    });\n  }\n}\n\nexport let lruCache = new SendableClass();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Index.ets页面同目录下创建4个图书页面，每个页面显示相应的图书信息，并将每个页面的路径注册到src/main/resources/base/profile/main_pages.json文件中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Book1.ets\n@Entry\n@Component\nstruct Index1 {\n  @State message: string = 'Hello World!';\n\n  build() {\n    RelativeContainer() {\n      Text('第一本书的内容')\n        .id('first book')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: 'container', align: VerticalAlign.Center },\n          middle: { anchor: 'container', align: HorizontalAlign.Center }\n        })\n      Button('返回')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .position({ x: '50%' })\n        .onClick(() => {\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/GetRecentList' });\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Book2.ets\n@Entry\n@Component\nstruct Index2 {\n  @State message: string = 'Hello World!';\n\n  build() {\n    RelativeContainer() {\n      Text('第二本书的内容')\n        .id('second book')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: 'container', align: VerticalAlign.Center },\n          middle: { anchor: 'container', align: HorizontalAlign.Center }\n        })\n      Button('返回')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .position({ x: '50%' })\n        .onClick(() => {\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/GetRecentList' });\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Book3.ets\n@Entry\n@Component\nstruct Index3 {\n  @State message: string = 'Hello World!';\n\n  build() {\n    RelativeContainer() {\n      Text('第三本书的内容')\n        .id('third book')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: 'container', align: VerticalAlign.Center },\n          middle: { anchor: 'container', align: HorizontalAlign.Center }\n        })\n      Button('返回')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .position({ x: '50%' })\n        .onClick(() => {\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/GetRecentList' });\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Book4.ets\n@Entry\n@Component\nstruct Index4 {\n  @State message: string = 'Hello World!';\n\n  build() {\n    RelativeContainer() {\n      Text('第四本书的内容')\n        .id('fourth book')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: 'container', align: VerticalAlign.Center },\n          middle: { anchor: 'container', align: HorizontalAlign.Center }\n        })\n      Button('返回')\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .position({ x: '50%' })\n        .onClick(() => {\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/GetRecentList' });\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// main_pages.json\n\n{\n  \"src\": [\n    \"pages/Index\",\n    \"pages/Book1\",\n    \"pages/Book2\",\n    \"pages/Book3\",\n    \"pages/Book4\",\n    \"pages/GetRecentList\"\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "访问书架页面时，自动展示最近访问的图书列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// GetRecentList.ets\nimport { taskpool } from '@kit.ArkTS';\nimport { lruCache } from '../utils/LruCache'\n// ...\n\n@Concurrent\nasync function updateBooks(key: string, value: string) {\n  // 在子线程更新最近访问列表\n  await lruCache.put(key, value);\n}\n\n@Entry\n@Component\nstruct GetRecentList {\n  @State message: string = '书架';\n  @State books: string[] = [];\n\n  async aboutToAppear () {\n    // 自动获取最近访问的图书列表\n    this.books = await lruCache.keys();\n  }\n\n  build() {\n    Column({ space: 1 }) {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: 'container', align: VerticalAlign.Center },\n          middle: { anchor: 'container', align: HorizontalAlign.Center }\n        })\n      Button(this.books[3])\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .onClick(async () => {\n          // 获取绑定的图书信息\n          let value = await lruCache.get(this.books[3]);\n          // 更新最近访问列表\n          taskpool.execute(updateBooks, this.books[3], value);\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/' + value });\n        })\n      Button(this.books[2])\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .onClick(async () => {\n          // 获取绑定的图书信息\n          let value = await lruCache.get(this.books[2]);\n          // 更新最近访问列表\n          taskpool.execute(updateBooks, this.books[2], value);\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/' + value });\n        })\n      Button(this.books[1])\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .onClick(async () => {\n          // 获取绑定的图书信息\n          let value = await lruCache.get(this.books[1]);\n          // 更新最近访问列表\n          taskpool.execute(updateBooks, this.books[1], value);\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/' + value });\n        })\n      Button(this.books[0])\n        .fontSize(20)\n        .padding(10)\n        .fontWeight(FontWeight.Bold)\n        .onClick(async () => {\n          // 获取绑定的图书信息\n          let value = await lruCache.get(this.books[0]);\n          // 更新最近访问列表\n          taskpool.execute(updateBooks, this.books[0], value);\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/' + value });\n        })\n      // ...\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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
335609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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