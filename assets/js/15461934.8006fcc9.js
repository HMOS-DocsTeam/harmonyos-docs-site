"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["986269"], {
75730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_enterprise_space_kit_guide_enterprisespace_spacemanager_guide_enterprisespace_del_restricted_access_process_list_enterprisespace_del_restricted_access_process_list_md_154_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-enterprise-space-kit-guide-enterprisespace-spacemanager-guide-enterprisespace-del-restricted-access-process-list-enterprisespace-del-restricted-access-process-list-md-154.json
var site_docs_enterprise_space_kit_guide_enterprisespace_spacemanager_guide_enterprisespace_del_restricted_access_process_list_enterprisespace_del_restricted_access_process_list_md_154_namespaceObject = JSON.parse('{"id":"enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-del-restricted-access-process-list/enterprisespace-del-restricted-access-process-list","title":"删除系统服务进程不可访问后台用户数据路径列表","description":"场景介绍","source":"@site/docs/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-del-restricted-access-process-list/enterprisespace-del-restricted-access-process-list.md","sourceDirName":"enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-del-restricted-access-process-list","slug":"/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-del-restricted-access-process-list/","permalink":"/harmonyos-docs-site/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-del-restricted-access-process-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"删除系统服务进程不可访问后台用户数据路径列表","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-del-restricted-access-process-list","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"新增系统服务进程不可访问后台用户数据路径列表","permalink":"/harmonyos-docs-site/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-add-restricted-access-process-list/"},"next":{"title":"设置工作空间策略","permalink":"/harmonyos-docs-site/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-set-workspace-policy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-del-restricted-access-process-list/enterprisespace-del-restricted-access-process-list.md


const frontMatter = {
	title: '删除系统服务进程不可访问后台用户数据路径列表',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-del-restricted-access-process-list',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '删除系统服务进程不可访问后台用户数据路径列表';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "删除系统服务进程不可访问后台用户数据路径列表",
        children: "删除系统服务进程不可访问后台用户数据路径列表"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.1(21)开始，支持删除系统服务进程不可访问后台用户数据路径列表的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enterprise Space Kit为应用提供删除系统服务进程不可访问后台用户数据路径列表的功能。用于应用删除管控系统服务进程时的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#deleterestrictedaccessbackgrounduserdataprocesslist",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#deleterestrictedaccessbackgrounduserdataprocesslist",
              children: "deleteRestrictedAccessBackgroundUserdataProcessList"
            }), "(userData: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#userdataenum",
              children: "UserDataEnum"
            }), "), processName: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除系统服务进程不可访问后台用户数据路径列表。使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Enterprise Space Kit模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { spaceManager } from '@kit.EnterpriseSpaceKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager#deleterestrictedaccessbackgrounduserdataprocesslist",
            children: "deleteRestrictedAccessBackgroundUserdataProcessList"
          }), "，删除系统服务进程不可访问后台用户数据路径列表，并且查看打印信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;\nconst processName: string = 'testSa';\ntry {\n  await spaceManager.deleteRestrictedAccessBackgroundUserdataProcessList(userData, processName);\n  console.info(`Succeeded in deleting restricted access background user data process list`);\n} catch (err) {\n  console.error(`Failed to delete restricted access background user data process list. Code: ${err.code}, message: ${err.message}`);\n}\n"
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