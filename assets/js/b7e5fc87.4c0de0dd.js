"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["833503"], {
872212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_faq_ide_hvigor_log_ide_hvigor_log_md_b7e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-faq-ide-hvigor-log-ide-hvigor-log-md-b7e.json
var site_docs_ide_hvigor_faq_ide_hvigor_log_ide_hvigor_log_md_b7e_namespaceObject = JSON.parse('{"id":"ide-hvigor-faq/ide-hvigor-log/ide-hvigor-log","title":"使用日志记录","description":"日志是构建工具主要的输出显示部分，如果日志过于冗长，真正的告警和异常将更容易被隐藏；而另一方面，当出现问题时，你也需要相关的信息来定位问题。Hvigor定义了四种日志级别，如下所示。","source":"@site/docs/ide-hvigor-faq/ide-hvigor-log/ide-hvigor-log.md","sourceDirName":"ide-hvigor-faq/ide-hvigor-log","slug":"/ide-hvigor-faq/ide-hvigor-log/","permalink":"/harmonyos-docs-site/ide-hvigor-faq/ide-hvigor-log/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用日志记录","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-log","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"混淆加固","permalink":"/harmonyos-docs-site/ide-build-obfuscation/"},"next":{"title":"编译构建常见问题","permalink":"/harmonyos-docs-site/ide-hvigor-faq/ide-hvigor-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-faq/ide-hvigor-log/ide-hvigor-log.md


const frontMatter = {
	title: '使用日志记录',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-log',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '使用日志记录';

const assets = {

};



const toc = [{
  "value": "日志级别",
  "id": "日志级别",
  "level": 2
}, {
  "value": "选择日志级别",
  "id": "选择日志级别",
  "level": 2
}, {
  "value": "日志级别命令行选项",
  "id": "日志级别命令行选项",
  "level": 3
}, {
  "value": "堆栈跟踪命令行选项",
  "id": "堆栈跟踪命令行选项",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "使用日志记录",
        children: "使用日志记录"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志是构建工具主要的输出显示部分，如果日志过于冗长，真正的告警和异常将更容易被隐藏；而另一方面，当出现问题时，你也需要相关的信息来定位问题。Hvigor定义了四种日志级别，如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志级别",
      children: "日志级别"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "日志级别"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "日志信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WARN"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "告警信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试信息"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择日志级别",
      children: "选择日志级别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您可以使用命令行中的日志选项开关来控制输出不同的日志级别，还可通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
        children: "hvigor-config.json5"
      }), "中日志选项logging.level来设置。在stacktrace命令选项中，您可以找到影响堆栈跟踪记录的命令开关，当然，你也可以通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
        children: "hvigor-config.json5"
      }), "中日志选项debugging.stacktrace来设置堆栈跟踪日志开关。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志级别命令行选项",
      children: "日志级别命令行选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 日志级别命令行选项"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "日志选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输出日志级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e 或 --error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误且更高级别"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w 或 --warn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "告警且更高级别"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i 或 --info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "信息且更高级别"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d 或 --debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试且更高级别（即所有日志信息）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "堆栈跟踪命令行选项",
      children: "堆栈跟踪命令行选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--stacktrace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制台将打印完整的堆栈跟踪信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--no-stacktrace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果出现构建错误（例如编译错误），则不会将堆栈跟踪信息打印到控制台。"
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