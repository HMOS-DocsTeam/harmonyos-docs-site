"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["316289"], {
808263(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_determine_application_mode_determine_application_mode_md_e93_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-request-app-permissions-determine-application-mode-determine-application-mode-md-e93.json
var site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_determine_application_mode_determine_application_mode_md_e93_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode/determine-application-mode","title":"选择申请权限的方式","description":"应用访问数据或执行操作时，需评估是否需要相关权限。如需权限，应在应用安装包中申请。","source":"@site/docs/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode/determine-application-mode.md","sourceDirName":"system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode","slug":"/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"选择申请权限的方式","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/determine-application-mode","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用权限管控概述","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview/"},"next":{"title":"声明权限","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode/determine-application-mode.md


const frontMatter = {
	title: '选择申请权限的方式',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/determine-application-mode',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '选择申请权限的方式';

const assets = {

};



const toc = [{
  "value": "应用申请权限的方式",
  "id": "应用申请权限的方式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "选择申请权限的方式",
        children: "选择申请权限的方式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用访问数据或执行操作时，需评估是否需要相关权限。如需权限，应在应用安装包中申请。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个权限的等级和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%8E%88%E6%9D%83%E6%96%B9%E5%BC%8F",
        children: "授权方式"
      }), "不同，因此申请权限的方式也不同。申请权限前，开发者需要："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据API接口中的“需要权限”或“@permission”字段，确认权限名称，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
          children: "权限列表"
        }), "页面检索确认权限类型。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考操作路径，申请相应的权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据目标权限的开放范围和授权方式，开发者可以参考以下操作路径申请权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用申请权限的方式",
      children: "应用申请权限的方式"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "权限类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "授权方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "操作路径"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all",
              children: "开放权限（系统授权）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "system_grant"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), " > 访问接口"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user",
              children: "开放权限（用户授权）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user_grant"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), " > ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
              children: "向用户申请授权"
            }), " > 访问接口"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
              children: "受限开放权限（系统授权）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "system_grant"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
              children: "申请使用受限权限"
            }), " > ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), " > 访问接口"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
              children: "受限开放权限（用户授权）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user_grant"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
              children: "申请使用受限权限"
            }), " > ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), " > ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
              children: "向用户申请授权"
            }), " > 访问接口"]
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