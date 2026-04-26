"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290487"], {
83468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_sendable_module_arkts_sendable_module_md_38a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-sendable-object-arkts-sendable-module-arkts-sendable-module-md-38a.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_sendable_module_arkts_sendable_module_md_38a_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module/arkts-sendable-module","title":"共享模块","description":"共享模块是进程内只会加载一次的模块，使用\\"use shared\\"这一指令来标记一个模块是否为共享模块。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module/arkts-sendable-module.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"共享模块","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable-module","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"共享容器","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction/"},"next":{"title":"Sendable对象冻结","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-freeze/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module/arkts-sendable-module.md


const frontMatter = {
	title: '共享模块',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable-module',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '共享模块';

const assets = {

};



const toc = [{
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "共享模块",
        children: "共享模块"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "共享模块是进程内只会加载一次的模块，使用\"use shared\"这一指令来标记一个模块是否为共享模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非共享模块在同一线程内只加载一次，而在不同线程中会多次加载，每个线程都会生成新的模块对象。因此，目前只能使用共享模块实现进程单例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"use shared\"需要与\"use strict\"一样写在ArkTS文件顶层，写在import语句之后其他语句之前。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享属性不具备传递性。非共享模块A即使引入了共享模块B，也不会因此变成共享模块。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块只支持ets文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块内不允许使用side-effects-import。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块在同一进程内仅加载一次，可在不同线程间共享。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块加载时，导入的非共享模块不会立即加载。在共享模块内访问依赖的非共享模块导出变量时，当前线程会懒加载对应的非共享模块。非共享模块在线程间隔离，不同线程访问时会进行一次懒加载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于side-effects-import不涉及导出变量，因此不会被加载，也不受支持。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// test.ets\nconsole.info(\"This runs immediately when imported\");\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// sharedModule.ets\n// 不允许使用side-effects-import，编译报错\nimport \"./test\";\n\"use shared\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块导出的变量必须是可共享对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["共享模块在并发实例间可共享，因此导出的所有对象必须是可共享的。可共享对象参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
            children: "Sendable支持的数据类型"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块不支持re-export写法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// test.ets\nexport let num = 1;\nexport let str = 'aaa';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// share.ets\n// 共享模块\n'use shared'\nexport * from './test'; // 编译报错\nexport {num, str} from './test'; // 产生运行时报错\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块可以引用其他共享模块或非共享模块，引用和被引用场景没有限制。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅支持使用静态加载、napi_load_module或napi_load_module_with_info加载共享模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// test.ets\nimport { num } from './A'; // 支持静态加载\n\nimport { worker } from '@kit.ArkTS';\nlet wk = new worker.ThreadWorker(\"./A\"); // 不支持其他方式加载共享模块, 将产生运行时报错\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// A.ets\n'use shared'\nexport let num: number = 10;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享模块导出Sendable对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 共享模块sharedModule.ets\nimport { ArkTSUtils } from '@kit.ArkTS';\n\n// 声明当前模块为共享模块，只能导出可Sendable数据\n\"use shared\"\n\n// 共享模块，SingletonA全局唯一\n@Sendable\nclass SingletonA {\n  private count_: number = 0;\n  lock_: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock()\n\n  public async getCount(): Promise<number> {\n    return this.lock_.lockAsync(() => {\n      return this.count_;\n    })\n  }\n\n  public async increaseCount() {\n    await this.lock_.lockAsync(() => {\n      this.count_++;\n    })\n  }\n}\n\nexport let singletonA = new SingletonA();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在多个线程中操作共享模块导出的对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { taskpool } from '@kit.ArkTS';\nimport { singletonA } from './sharedModule';\n\n@Concurrent\nasync function increaseCount() {\n  await singletonA.increaseCount();\n  console.info(\"SharedModule: count is:\" + await singletonA.getCount());\n}\n\n@Concurrent\nasync function printCount() {\n  console.info(\"SharedModule: count is:\" + await singletonA.getCount());\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"MainThread print count\")\n          .onClick(async () => {\n            await printCount();\n          })\n        Button(\"Taskpool print count\")\n          .onClick(async () => {\n            await taskpool.execute(printCount);\n          })\n        Button(\"MainThread increase count\")\n          .onClick(async () => {\n            await increaseCount();\n          })\n        Button(\"Taskpool increase count\")\n          .onClick(async () => {\n            await taskpool.execute(increaseCount);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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