"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["16227"], {
25412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_optimized_ide_hvigor_improve_performance_ide_hvigor_improve_performance_md_454_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-optimized-ide-hvigor-improve-performance-ide-hvigor-improve-performance-md-454.json
var site_docs_ide_build_optimized_ide_hvigor_improve_performance_ide_hvigor_improve_performance_md_454_namespaceObject = JSON.parse('{"id":"ide-build-optimized/ide-hvigor-improve-performance/ide-hvigor-improve-performance","title":"并行构建","description":"大部分工程都包含了多个子工程，其中一些子工程是相互独立的，也就是说，它们之间没有状态共享。在大多数情况下，通过并行构建可以有效地减少多个子工程的整体构建时间。然而，在特定的情况下，如子工程之间存在大量的依赖关系，可能无法显著缩短构建时间。节省的具体时间取决于您的工程结构和子工程之间的依赖关系。","source":"@site/docs/ide-build-optimized/ide-hvigor-improve-performance/ide-hvigor-improve-performance.md","sourceDirName":"ide-build-optimized/ide-hvigor-improve-performance","slug":"/ide-build-optimized/ide-hvigor-improve-performance/","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-improve-performance/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"并行构建","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-improve-performance","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"守护进程","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-daemon/"},"next":{"title":"增量构建","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-incremental-build/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-optimized/ide-hvigor-improve-performance/ide-hvigor-improve-performance.md


const frontMatter = {
	title: '并行构建',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-improve-performance',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '并行构建';

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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "并行构建",
        children: "并行构建"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大部分工程都包含了多个子工程，其中一些子工程是相互独立的，也就是说，它们之间没有状态共享。在大多数情况下，通过并行构建可以有效地减少多个子工程的整体构建时间。然而，在特定的情况下，如子工程之间存在大量的依赖关系，可能无法显著缩短构建时间。节省的具体时间取决于您的工程结构和子工程之间的依赖关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor默认开启并行构建，您也可以通过以下几种方式来控制是否启用并行构建："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过DevEco Studio菜单栏构建：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "File >"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DevEco Studio > Preferences/Settings"
              })
            }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "> Build, Execution, Deployment > Build Tools > Hvigor"
              })
            }), "，勾选或取消勾选字段", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Execute tasks in parallel mode********(may require larger heap size)"
              })
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过命令行构建：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "执行命令，其中<task>替换为具体任务名："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 启用并行构建\nhvigorw <task> --parallel\n// 关闭并行构建\nhvigorw <task> --no-parallel\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
                children: "hvigor-config.json5"
              }), "中配置execution.parallel选项。"]
            }), "\n"]
          }), "\n"]
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