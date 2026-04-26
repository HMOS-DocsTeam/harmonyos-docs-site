"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["778841"], {
958156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_previewer_01_ide_previewer_debug_ide_previewer_debug_md_849_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-previewer-01-ide-previewer-debug-ide-previewer-debug-md-849.json
var site_docs_ide_previewer_01_ide_previewer_debug_ide_previewer_debug_md_849_namespaceObject = JSON.parse('{"id":"ide-previewer-01/ide-previewer-debug/ide-previewer-debug","title":"使用预览器调试应用","description":"使用真机或模拟器进行调试时，修改后的代码需要经过较长时间的编译和安装过程，才能刷新至调试环境。使用预览器进行调试，可快速地修改代码和运行应用，在DevEco Studio中直接查看修改后的界面显示效果。","source":"@site/docs/ide-previewer-01/ide-previewer-debug/ide-previewer-debug.md","sourceDirName":"ide-previewer-01/ide-previewer-debug","slug":"/ide-previewer-01/ide-previewer-debug/","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-debug/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"使用预览器调试应用","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-debug","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"预览数据模拟","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-mock/"},"next":{"title":"支持使用预览器的API清单","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-api-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-previewer-01/ide-previewer-debug/ide-previewer-debug.md


const frontMatter = {
	title: '使用预览器调试应用',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-debug',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用预览器调试应用';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "普通预览与预览调试能力对比",
  "id": "普通预览与预览调试能力对比",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用预览器调试应用",
        children: "使用预览器调试应用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用真机或模拟器进行调试时，修改后的代码需要经过较长时间的编译和安装过程，才能刷新至调试环境。使用预览器进行调试，可快速地修改代码和运行应用，在DevEco Studio中直接查看修改后的界面显示效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用预览器运行调试Ability生命周期代码和界面代码，预览器调试支持基础调试能力，包括断点、调试执行、变量查看等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个工程内不支持启动多个预览调试任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个预览器只能支持普通预览或预览调试模式，不可同时支持两种模式。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用预览器进行调试不支持以下场景：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持Attach调试。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持跨Ability调试。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持C++调试。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持Hot Reload。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持多进程和worker/taskpool调试。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "普通预览与预览调试能力对比",
      children: "普通预览与预览调试能力对比"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 普通预览与预览调试能力对比"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "普通预览"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "预览调试"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "页面预览"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "运行模式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "调试模式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ets页面预览"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "动态预览"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指定页面文件预览"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inspector双向预览"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta2版本开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta2版本开始，支持查看，不支持修改"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "实时预览"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断点中断时不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "极速预览"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta2版本开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "组件预览"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "多语言切换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta2版本开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta2版本开始支持，但断点中断时不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "动态修改分辨率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta2版本开始，支持横竖屏切换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta2版本开始，支持横竖屏切换，但断点中断时不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "引用HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.0.0 Beta3版本开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
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