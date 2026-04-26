"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["834089"], {
786566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_struct_capi_hidebug_hidebug_mallocdispatch_capi_hidebug_hidebug_mallocdispatch_md_d0d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-debug-optimize-api-performance-analysis-api-performance-analysis-c-performance-analysis-struct-capi-hidebug-hidebug-mallocdispatch-capi-hidebug-hidebug-mallocdispatch-md-d0d.json
var site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_struct_capi_hidebug_hidebug_mallocdispatch_capi_hidebug_hidebug_mallocdispatch_md_d0d_namespaceObject = JSON.parse('{"id":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch/capi-hidebug-hidebug-mallocdispatch","title":"HiDebug_MallocDispatch","description":"概述","source":"@site/docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch/capi-hidebug-hidebug-mallocdispatch.md","sourceDirName":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch","slug":"/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch/capi-hidebug-hidebug-mallocdispatch","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch/capi-hidebug-hidebug-mallocdispatch","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"HiDebug_MallocDispatch","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-mallocdispatch","kit":"系统","last_updated":"2026-04-22","slug":"capi-hidebug-hidebug-mallocdispatch"},"sidebar":"ref","previous":{"title":"HiDebug_StackFrame","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-stackframe/capi-hidebug-hidebug-stackframe"},"next":{"title":"HiDebug_Backtrace_Object__*","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-backtrace-object--8h/capi-hidebug-hidebug-backtrace-object--8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-mallocdispatch/capi-hidebug-hidebug-mallocdispatch.md


const frontMatter = {
	title: 'HiDebug_MallocDispatch',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-mallocdispatch',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-hidebug-hidebug-mallocdispatch'
};
const contentTitle = 'HiDebug_MallocDispatch';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员函数",
  "id": "成员函数",
  "level": 3
}, {
  "value": "成员函数说明",
  "id": "成员函数说明",
  "level": 2
}, {
  "value": "malloc()",
  "id": "malloc",
  "level": 3
}, {
  "value": "calloc()",
  "id": "calloc",
  "level": 3
}, {
  "value": "realloc()",
  "id": "realloc",
  "level": 3
}, {
  "value": "free()",
  "id": "free",
  "level": 3
}, {
  "value": "mmap()",
  "id": "mmap",
  "level": 3
}, {
  "value": "munmap()",
  "id": "munmap",
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
        id: "hidebug_mallocdispatch",
        children: "HiDebug_MallocDispatch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiDebug_MallocDispatch {...} HiDebug_MallocDispatch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序进程可替换/恢复的HiDebug_MallocDispatch表结构类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug",
        children: "HiDebug"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h",
        children: "hidebug_type.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员函数",
      children: "成员函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#malloc",
              children: "void* (*malloc)(size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者自定义malloc函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#calloc",
              children: "void* (*calloc)(size_t, size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者自定义calloc函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#realloc",
              children: "void* (*realloc)(void*, size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者自定义realloc函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#free",
              children: "void (*free)(void*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者自定义free函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#mmap",
              children: "void* (*mmap)(void*, size_t, int, int, int, off_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者自定义mmap函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#munmap",
              children: "int (*munmap)(void*, size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者自定义munmap函数指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "成员函数说明",
      children: "成员函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "malloc",
      children: "malloc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* (*malloc)(size_t)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者自定义malloc函数指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "calloc",
      children: "calloc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* (*calloc)(size_t, size_t)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者自定义calloc函数指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realloc",
      children: "realloc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* (*realloc)(void*, size_t)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者自定义realloc函数指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "free",
      children: "free()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*free)(void*)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者自定义free函数指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mmap",
      children: "mmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* (*mmap)(void*, size_t, int, int, int, off_t)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者自定义mmap函数指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "munmap",
      children: "munmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int (*munmap)(void*, size_t)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者自定义munmap函数指针。"
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