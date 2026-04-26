"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["72268"], {
751210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_background_tasks_api_background_tasks_c_background_tasks_struct_capi_transienttask_transienttask_transienttaskinfo_capi_transienttask_transienttask_transienttaskinfo_md_6c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-background-tasks-api-background-tasks-c-background-tasks-struct-capi-transienttask-transienttask-transienttaskinfo-capi-transienttask-transienttask-transienttaskinfo-md-6c2.json
var site_docs_ref_background_tasks_api_background_tasks_c_background_tasks_struct_capi_transienttask_transienttask_transienttaskinfo_capi_transienttask_transienttask_transienttaskinfo_md_6c2_namespaceObject = JSON.parse('{"id":"background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-transienttaskinfo/capi-transienttask-transienttask-transienttaskinfo","title":"TransientTask_TransientTaskInfo","description":"概述","source":"@site/docs-ref/background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-transienttaskinfo/capi-transienttask-transienttask-transienttaskinfo.md","sourceDirName":"background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-transienttaskinfo","slug":"/background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-transienttaskinfo/capi-transienttask-transienttask-transienttaskinfo","permalink":"/harmonyos-docs-site/ref/background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-transienttaskinfo/capi-transienttask-transienttask-transienttaskinfo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"TransientTask_TransientTaskInfo","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask-transienttask-transienttaskinfo","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-transienttask-transienttask-transienttaskinfo"},"sidebar":"ref","previous":{"title":"TransientTask_DelaySuspendInfo","permalink":"/harmonyos-docs-site/ref/background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-delaysuspendinfo/capi-transienttask-transienttask-delaysuspendinfo"},"next":{"title":"backgroundTaskManager错误码","permalink":"/harmonyos-docs-site/ref/background-tasks-api/background-tasks-arkts-errcode/errorcode-backgroundtaskmgr/errorcode-backgroundtaskmgr"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-transienttaskinfo/capi-transienttask-transienttask-transienttaskinfo.md


const frontMatter = {
	title: 'TransientTask_TransientTaskInfo',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask-transienttask-transienttaskinfo',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-transienttask-transienttask-transienttaskinfo'
};
const contentTitle = 'TransientTask_TransientTaskInfo';

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
  "value": "成员变量",
  "id": "成员变量",
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
        id: "transienttask_transienttaskinfo",
        children: "TransientTask_TransientTaskInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct TransientTask_TransientTaskInfo {...} TransientTask_TransientTaskInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义所有短时任务信息结构体。用于返回当日剩余总配额和已申请的所有短时任务信息。"
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
        href: "/ref/background-tasks-api/background-tasks-c/background-tasks-module/capi-transienttask/capi-transienttask",
        children: "TransientTask"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-type-h/capi-transient-task-type-h",
        children: "transient_task_type.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "int32_t remainingQuota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当日剩余总配额。单位：毫秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-delaysuspendinfo/capi-transienttask-transienttask-delaysuspendinfo",
              children: "TransientTask_DelaySuspendInfo"
            }), " transientTasks[", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-type-h/capi-transient-task-type-h#%E5%AE%8F%E5%AE%9A%E4%B9%89",
              children: "TRANSIENT_TASK_MAX_NUM"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已申请的所有短时任务信息。包括短时任务请求ID、剩余时间（单位：毫秒）。"
          })]
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