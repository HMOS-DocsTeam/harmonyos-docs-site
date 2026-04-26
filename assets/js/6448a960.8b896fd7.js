"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["371698"], {
210871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_async_concurrency_overview_async_concurrency_overview_md_644_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-async-concurrency-overview-async-concurrency-overview-md-644.json
var site_docs_arkts_arkts_concurrency_async_concurrency_overview_async_concurrency_overview_md_644_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/async-concurrency-overview/async-concurrency-overview","title":"异步并发 (Promise和async/await)","description":"Promise和async/await是标准的JS异步语法，提供异步并发能力。异步代码执行时会被挂起，在异步操作完成后恢复执行，确保同一时间只有一段代码在运行。以下是典型的异步并发使用场景：","source":"@site/docs/arkts/arkts-concurrency/async-concurrency-overview/async-concurrency-overview.md","sourceDirName":"arkts/arkts-concurrency/async-concurrency-overview","slug":"/arkts/arkts-concurrency/async-concurrency-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/async-concurrency-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"异步并发 (Promise和async/await)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/async-concurrency-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"并发概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/concurrency-overview/"},"next":{"title":"多线程并发概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/async-concurrency-overview/async-concurrency-overview.md


const frontMatter = {
	title: '异步并发 (Promise和async/await)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/async-concurrency-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '异步并发 (Promise和async/await)';

const assets = {

};



const toc = [{
  "value": "Promise",
  "id": "promise",
  "level": 2
}, {
  "value": "async/await",
  "id": "asyncawait",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "异步并发-promise和asyncawait",
        children: "异步并发 (Promise和async/await)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise和async/await是标准的JS异步语法，提供异步并发能力。异步代码执行时会被挂起，在异步操作完成后恢复执行，确保同一时间只有一段代码在运行。以下是典型的异步并发使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I/O 非阻塞操作：网络请求、文件读写、定时器等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务轻量且无 CPU 阻塞：单次任务执行时间短。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "逻辑依赖清晰：任务有明确的顺序或并行关系。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步并发是一种编程语言的特性，允许程序在执行某些操作时不必等待其完成，可以继续执行其他异步代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promise",
      children: "Promise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise是一种用于处理异步操作的对象，可将异步操作转换为类似同步操作的风格，便于代码编写和维护。Promise通过状态机制管理异步操作的不同阶段，有三种状态：pending（进行中）、fulfilled（已完成，也叫resolved）和rejected（已拒绝）。创建后处于pending状态，异步操作完成后转换为fulfilled或rejected状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise提供了then、catch、finally方法来注册回调函数，以处理异步操作的成功或失败结果。当Promise状态改变时，回调函数会被加入微任务队列等待执行，依赖事件循环机制在宏任务执行完成后优先执行微任务，从而保证回调函数的异步调度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最基本的用法是通过构造函数实例化一个Promise对象，传入一个带有两个参数的函数，称为executor函数。executor函数接收两个参数：resolve和reject，分别表示异步操作成功和失败时的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，以下代码创建了一个Promise对象并模拟了一个异步操作："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const promise: Promise<number> = new Promise((resolve: Function, reject: Function) => {\n  setTimeout(() => {\n    const randomNumber: number = Math.random();\n    if (randomNumber > 0.5) {\n      resolve(randomNumber);\n    } else {\n      reject(new Error('Random number is too small'));\n    }\n  }, 1000);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，setTimeout函数模拟了一个异步操作，1秒后生成一个随机数。如果随机数大于0.5，调用resolve回调函数并传递该随机数；否则调用reject回调函数并传递一个错误对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise对象创建后，可以使用then方法和catch方法指定fulfilled状态和rejected状态的回调函数。then方法可接受两个参数，一个处理fulfilled状态的函数，另一个处理rejected状态的函数。只传一个参数则表示当Promise对象状态变为fulfilled时，then方法会自动调用这个回调函数，并将Promise对象的结果作为参数传递给它。使用catch方法注册一个回调函数，用于处理“失败”的结果，即捕获Promise的状态改变为rejected状态或操作失败抛出的异常。Promise还可以使用finally注册回调函数，无论Promise最终状态如何（fulfilled或rejected），都会执行该回调函数。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// ...\n  /*\n   * Promise对象创建后，可以使用then方法和catch方法指定fulfilled状态和rejected状态的回调函数。\n   * then方法可接受两个参数，一个处理fulfilled状态的函数，另一个处理rejected状态的函数。\n   *\n   * 只传一个参数则表示当Promise对象状态变为fulfilled时，then方法会自动调用这个回调函数，并将Promise对象的结果作为参数传递给它。\n   * 使用catch方法注册一个回调函数，用于处理“失败”的结果，即捕获Promise的状态改变为rejected状态或操作失败抛出的异常。\n   */\n  // 使用 then 方法定义成功和失败的回调\n  promise.then((result: number) => {\n    console.info(`Succesed number is ${result}`); // 成功时执行\n  }, (error: BusinessError) => {\n    console.error(error.message); // 失败时执行\n  }\n  );\n\n  // 使用 then 方法定义成功的回调，catch 方法定义失败的回调\n  promise.then((result: number) => {\n    console.info(`Random number is ${result}`); // 成功时执行\n  }).catch((error: BusinessError) => {\n    console.error(error.message); // 失败时执行\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，then方法的回调函数接收Promise对象的成功结果，并输出至控制台。如果Promise对象进入rejected状态，catch方法的回调函数接收错误对象，并输出至控制台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(248444)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Promise被reject且未通过catch方法处理时，会触发globalUnhandledRejectionDetected事件。可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager#errormanageronglobalunhandledrejectiondetected18",
        children: "errorManager.on('globalUnhandledRejectionDetected')"
      }), "接口监听该事件，以全局捕获未处理的Promise reject。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "asyncawait",
      children: "async/await"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async/await是用于处理异步操作的Promise语法糖，使编写异步代码更加简单和易读。使用async关键字声明异步函数，并使用await关键字等待Promise的解析（fulfilled或rejected），以同步方式编写异步操作的代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async函数返回Promise对象，实现异步操作。函数内部可包含零个或多个await关键字，await会暂停执行，直到关联的Promise完成状态转换（fulfilled或rejected）。若函数执行过程中抛出异常，该异常将直接触发返回的Promise进入rejected状态，错误对象可通过catch方法或then的第二个回调参数捕获。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是一个使用async/await的示例，模拟同步方法执行异步操作的场景，3秒后返回一个字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function myAsyncFunction(): Promise<string> {\n  const result: string = await new Promise((resolve: Function) => {\n    setTimeout(() => {\n      resolve('Hello, world!');\n    }, 3000);\n  });\n  console.info(result); // 输出： Hello, world!\n  return result;\n}\n\n@Entry\n@Component\nstruct PromiseAsyncAwait {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            let res = await myAsyncFunction();\n            console.info('Result is: ' + res);\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述示例代码中，使用await等待Promise解析，并存储在result变量中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，等待异步操作时，需将操作放在async函数中，并搭配await使用，且await关键字只在async函数内有效。同时也可使用try/catch块来捕获异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function myAsyncFunction(): Promise<void> {\n  try {\n     const result: string = await new Promise((resolve: Function) => {\n        resolve('Hello, world!');\n     });\n  } catch (e) {\n     console.error(`Get exception: ${e}`);\n  }\n}\n"
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
248444(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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