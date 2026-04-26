"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["656532"], {
31685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_commonlibrary_faq_commonlibrary_faq_md_c7a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-commonlibrary-faq-commonlibrary-faq-md-c7a.json
var site_docs_arkts_arkts_utils_commonlibrary_faq_commonlibrary_faq_md_c7a_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/commonlibrary-faq/commonlibrary-faq","title":"基础库常见问题","description":"解析大文件xml发生内存溢出（Out of Memory）","source":"@site/docs/arkts/arkts-utils/commonlibrary-faq/commonlibrary-faq.md","sourceDirName":"arkts/arkts-utils/commonlibrary-faq","slug":"/arkts/arkts-utils/commonlibrary-faq/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/commonlibrary-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"基础库常见问题","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/commonlibrary-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"非线性容器","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/nonlinear-container/"},"next":{"title":"并发概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/concurrency-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/commonlibrary-faq/commonlibrary-faq.md


const frontMatter = {
	title: '基础库常见问题',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/commonlibrary-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基础库常见问题';

const assets = {

};



const toc = [{
  "value": "解析大文件xml发生内存溢出（Out of Memory）",
  "id": "解析大文件xml发生内存溢出out-of-memory",
  "level": 2
}, {
  "value": "定时器被误删除",
  "id": "定时器被误删除",
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
        id: "基础库常见问题",
        children: "基础库常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解析大文件xml发生内存溢出out-of-memory",
      children: "解析大文件xml发生内存溢出（Out of Memory）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于ArkTS侧提供的XML解析接口暂不支持流式解析模式，建议通过Native工程调用第三方C/C++库来实现。推荐使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "libxml2"
        })
      }), "库，该库具有成熟稳定、性能优越的特点，能够支持SAX等流式解析方式，有效降低内存占用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体实施步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "创建Native工程"
          })
        }), "：在HarmonyOS项目中创建C++模块。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "集成libxml2"
          })
        }), "：下载并配置libxml2库源码或预编译库，在CMakeLists.txt中进行引用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "编写解析代码"
          })
        }), "：使用libxml2提供的API实现流式解析逻辑。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "XML对象处理"
          })
        }), "：当XML文件大小超过100MB时，建议在Native侧处理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于如何在ArkTS侧引用编译生成的三方so库，请参考文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-21",
        children: "如何在ArkTS侧引用其他三方so库"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "libxml2库支持的回调函数主要如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "回调函数指针"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发时机"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "用途"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startDocument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文档开始时"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化环境，分配资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endDocument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文档结束时"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放资源，打印统计信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读到开始标签（如<tag>）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取标签名及其属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读到结束标签（如</tag>）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理标签结束逻辑，如出栈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读到标签间的文本内容"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理文本数据（注意可能被多次调用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 用户自定义数据\nParseContext context;\n\n// 初始化SAX Handler结构体\nxmlSAXHandler SAXHandler = { 0 };\n\n// 绑定回调函数，用于在解析过程中处理XML数据\nSAXHandler.startDocument = startDocument;\nSAXHandler.endDocument = endDocument;\nSAXHandler.startElement = startElement;\nSAXHandler.endElement = endElement;\nSAXHandler.characters = characters;\n\n// 解析文件\n// 用户自定义数据指针\nint ret = xmlSAXUserParseFile(&SAXHandler, &context, xmlFileName);\n\nif (ret != 0) {\n    printf(\"Failed to parse XML file.\\n\");\n    return 1;\n}\n\n// 清理libxml2全局状态\nxmlCleanupParser();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定时器被误删除",
      children: "定时器被误删除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于定时器ID为进程共享，是从0开始的，开发者误操作容易导致定时器被删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如以下场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export class testClass {\n    // 初始值设置为0\n    private timeoutId: number = 0;\n    private intervalId: number = 0;\n\n    // 在某些情况下没有调用setTimeout设置定时器就调用了clearAnimation函数删除了定时器，就会导致timeoutId为0的定时器被删除\n    clearAnimation(): void {\n        clearInterval(this.intervalId);\n        clearTimeout(this.timeoutId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过以下方法快速定位："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重写globalThis.clearTimeout函数，实现在调用clearTimeout函数时打印调用栈，快速定位定时器是在哪里被删除的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用顺序为先调用clearTimeout.ts文件中的test()函数，再调用TimerTest.ets文件中testClass类的clearAnimation()函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 自定义TS文件clearTimeout.ts\n\n// test函数需要在程序调用clearTimeout函数之前调用\nexport function test() {\n    // 完全兼容原始 clearTimeout 类型\n    const origClear = globalThis.clearTimeout;\n    globalThis.clearTimeout = (...args: any[]) => {\n        const timeoutId = args[0];\n\n        // 检查所有可能的 timerId = 0 的情况\n        if (timeoutId === 0 || timeoutId === \"0\") {\n            console.info(\"清除 timerId = 0 !\", new Error().stack);\n            // 触发断点\n            debugger;\n        }\n\n        // 使用 apply 确保正确传递所有参数\n        return origClear.apply(this, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 自定义ets文件TimerTest.ets\n\nexport class testClass {\n    // 初始值设置为0\n    private timeoutId: number = 0;\n    private intervalId: number = 0;\n\n    // 在某些情况下没有调用setTimeout设置定时器就调用了clearAnimation函数删除了定时器，就会导致timeoutId为0的定时器被删除\n    clearAnimation(): void {\n        clearInterval(this.intervalId);\n        clearTimeout(this.timeoutId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { test } from './clearTimeout';\nimport { testClass } from './TimerTest';\n\n@Entry\n@Component\nstruct Index {\n    @State message: string = 'Hello World';\n\n    build() {\n      Row() {\n        Column() {\n          Text(this.message)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n            .onClick(() => {\n                test();\n                let testCase = new testClass();\n                testCase.clearAnimation();\n                this.message = 'success';\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }\n}\n"
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