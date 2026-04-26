"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["928116"], {
408509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_optimized_ide_hvigor_incremental_build_ide_hvigor_incremental_build_md_934_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-optimized-ide-hvigor-incremental-build-ide-hvigor-incremental-build-md-934.json
var site_docs_ide_build_optimized_ide_hvigor_incremental_build_ide_hvigor_incremental_build_md_934_namespaceObject = JSON.parse('{"id":"ide-build-optimized/ide-hvigor-incremental-build/ide-hvigor-incremental-build","title":"增量构建","description":"增量构建是Hvigor执行任务的一种优化，如果在两次执行任务过程中，执行任务的输入和输出没有更改，Hvigor会跳过该任务的执行。","source":"@site/docs/ide-build-optimized/ide-hvigor-incremental-build/ide-hvigor-incremental-build.md","sourceDirName":"ide-build-optimized/ide-hvigor-incremental-build","slug":"/ide-build-optimized/ide-hvigor-incremental-build/","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-incremental-build/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"增量构建","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-incremental-build","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"并行构建","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-improve-performance/"},"next":{"title":"性能优化实验特性","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-experimental-properties/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-optimized/ide-hvigor-incremental-build/ide-hvigor-incremental-build.md


const frontMatter = {
	title: '增量构建',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-incremental-build',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '增量构建';

const assets = {

};



const toc = [{
  "value": "原理介绍",
  "id": "原理介绍",
  "level": 2
}, {
  "value": "任务的输入和输出",
  "id": "任务的输入和输出",
  "level": 3
}, {
  "value": "它是如何工作的",
  "id": "它是如何工作的",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "增量构建",
        children: "增量构建"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增量构建是Hvigor执行任务的一种优化，如果在两次执行任务过程中，执行任务的输入和输出没有更改，Hvigor会跳过该任务的执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hvigor自定义任务要与增量构建兼容，需指定输入和输出，有关增量构建的更多介绍，请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section18840102817255",
        children: "原理介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor默认启用增量构建，您也可以通过以下几种方式来控制是否启用增量构建："
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
                children: "Re-execute the task in incremental mode"
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
                children: "// 启用增量构建\nhvigorw <task> --incremental\n// 关闭增量构建\nhvigorw <task> --no-incremental\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
                children: "hvigor-config.json5"
              }), "中配置execution.incremental选项。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "原理介绍",
      children: "原理介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任何构建工具的一个重要部分是能够避免重复执行已经执行完成的工作。在重复编译时，如果之前的源文件已经被编译过，除非发生了影响输入输出的更改，那么该文件就不需要重新编译。编译过程本身会耗费大量时间，因此跳过此种任务的编译，将会节省大量时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor自然支持此种增量构建行为。当您执行任务且控制台输出任务被标记为UP-TO-DATE，这意味着增量构建正在工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio中，第一次构建后会生成build缓存目录，再次构建时，"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果执行", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build > Clean Project"
          })
        }), "操作后，再重新build，则会执行全量构建；"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果没有执行", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build > Clean Project"
          })
        }), "操作，则重新build时会执行增量构建。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "任务的输入和输出",
      children: "任务的输入和输出"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在正常情况下，任务根据一些输入生成一些输出。作为增量构建的一部分，Hvigor记录上次构建的任何任务的输入和输出情况，对比当次构建的输入和输出，如果没有发生更改，那么Hvigor将认为该任务没有更改，从而跳过该任务的执行。因此也请注意，尽管任务在通常情况下至少有一个输入，但是在定义任务时，请至少定义一个输出，否则增量构建将无法工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对此定义增量任务，您只需告诉Hvigor哪些任务属性是输入，哪些任务属性是输出。如果任务属性影响了输出，请务必将其注册为输入，否则任务将可能被视为最新，与预期效果不一致。相反，如果任务属性不影响输出，请不要将其注册为输入，否则任务将可能会在不需要时被执行。同时请注意非确定性任务不应配置为增量任务，因为这些任务可能为完全相同的输入生成不同的输出，导致最新检查不起作用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "它是如何工作的",
      children: "它是如何工作的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在第一次执行之前，Hvigor会获取输入的快照信息，该信息包括输入文件名称、路径、大小、最后修改时间以及对应的哈希值。任务执行成功之后，Hvigor会获取输出的快照信息，该信息包括输出文件名称、路径、大小、最后修改时间以及对应的哈希值。当然，Hvigor对任务本身也进行了快照存储。Hvigor会在下次执行任务时会保留这两个快照信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此后每次执行任务之前，Hvigor都会获取输入和输出的新快照信息。如果新快照信息与之前的快照信息相同，Hvigor就会认为输出已经是最新的并且跳过该任务的执行。如果它们不相同，Hvigor就会执行该任务，执行成功之后，输入和输出的新快照信息将被存储。"
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