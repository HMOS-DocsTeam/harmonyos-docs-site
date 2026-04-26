"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["253840"], {
979366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_location_kit_location_preparation_location_permission_guidelines_location_permission_guidelines_md_c9c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-location-kit-location-preparation-location-permission-guidelines-location-permission-guidelines-md-c9c.json
var site_docs_location_kit_location_preparation_location_permission_guidelines_location_permission_guidelines_md_c9c_namespaceObject = JSON.parse('{"id":"location-kit/location-preparation/location-permission-guidelines/location-permission-guidelines","title":"申请位置权限开发指导","description":"场景概述","source":"@site/docs/location-kit/location-preparation/location-permission-guidelines/location-permission-guidelines.md","sourceDirName":"location-kit/location-preparation/location-permission-guidelines","slug":"/location-kit/location-preparation/location-permission-guidelines/","permalink":"/harmonyos-docs-site/location-kit/location-preparation/location-permission-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"申请位置权限开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-permission-guidelines","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Location Kit简介","permalink":"/harmonyos-docs-site/location-kit/location-kit-intro/"},"next":{"title":"申请开放能力权限指导","permalink":"/harmonyos-docs-site/location-kit/location-preparation/location-apply-open-capability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/location-kit/location-preparation/location-permission-guidelines/location-permission-guidelines.md


const frontMatter = {
	title: '申请位置权限开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-permission-guidelines',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '申请位置权限开发指导';

const assets = {

};



const toc = [{
  "value": "场景概述",
  "id": "场景概述",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "申请位置权限开发指导",
        children: "申请位置权限开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景概述",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在使用Location Kit系统能力前，需要检查是否已经获取用户授权访问设备位置信息。如未获得授权，可以向用户申请需要的位置权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供的定位权限有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.LOCATION：用于获取精准位置，精准度在米级别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.APPROXIMATELY_LOCATION：用于获取模糊位置，精确度为5公里。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.LOCATION_IN_BACKGROUND：用于应用切换到后台仍然需要获取定位信息的场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Location Kit接口对权限的要求参见API参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager",
        children: "@ohos.geoLocationManager (位置服务)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可以在应用配置文件中声明所需要的权限并向用户申请授权，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当APP运行在前台，且访问设备位置信息时，申请位置权限的方式如下："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "申请位置权限的方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否允许申请"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "申请成功后获取的位置的精确度"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "申请ohos.permission.APPROXIMATELY_LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到模糊位置，精确度为5公里。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同时申请ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到精准位置，精准度在米级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当APP运行在后台时，申请位置权限的方式如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用在后台运行时也需要访问设备位置，除了按照步骤2申请权限外，还需要申请LOCATION类型的长时任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["长时任务申请可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/continuous-task",
        children: "长时任务介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/location-service",
          children: "位置信息"
        })
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