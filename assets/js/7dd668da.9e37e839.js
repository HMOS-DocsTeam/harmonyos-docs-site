"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["453740"], {
633509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_debugging_cloudfoundation_commandtool_errorcode_cloudfoundation_commandtool_errorcode_md_7dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-prefetch-service-cloudfoundation-prefetch-debugging-cloudfoundation-commandtool-errorcode-cloudfoundation-commandtool-errorcode-md-7dd.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_debugging_cloudfoundation_commandtool_errorcode_cloudfoundation_commandtool_errorcode_md_7dd_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-debugging/cloudfoundation-commandtool-errorcode/cloudfoundation-commandtool-errorcode","title":"错误码","description":"| 错误码 | 描述 | 解决方法 |","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-debugging/cloudfoundation-commandtool-errorcode/cloudfoundation-commandtool-errorcode.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-debugging/cloudfoundation-commandtool-errorcode","slug":"/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-debugging/cloudfoundation-commandtool-errorcode/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-debugging/cloudfoundation-commandtool-errorcode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"错误码","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-commandtool-errorcode","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"调试周期性预加载","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-debugging/cloudfoundation-commandtool-debug/"},"next":{"title":"使用模拟器调试","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-emulator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-debugging/cloudfoundation-commandtool-errorcode/cloudfoundation-commandtool-errorcode.md


const frontMatter = {
	title: '错误码',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-commandtool-errorcode',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '错误码';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
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
        id: "错误码",
        children: "错误码"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解决方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1008200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "周期性预加载执行失败。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请从以下方面进行排查：  - 检查设备网络连接情况。  - 确保周期性预加载配置正确。若配置不正确，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-config",
              children: "配置预加载"
            }), "重新配置。  - 确保云函数数据存储到中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1008200009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令行工具内部错误。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请通过[在线工单系统](", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/add/101704353566310877?level2=101704353626565886&level3=101723605535783370&keyWord=Cloud",
              children: "https://developer.huawei.com/consumer/cn/support/feedback/#/add/101704353566310877?level2=101704353626565886&level3=101723605535783370&keyWord=Cloud"
            }), " Foundation Kit&channel=ICS0000)联系技术支持人员定位问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1008240000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP包不在debug模式下。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请确保HAP包的“Build Mode”设置为“debug”，且已申请调试证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1008240007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法获取当前HAP包信息，例如APP ID等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查应用包名合法性，输入正确的应用包名。"
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