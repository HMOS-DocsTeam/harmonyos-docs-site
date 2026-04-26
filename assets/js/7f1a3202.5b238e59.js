"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["298548"], {
952576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_faq_push_faq_1_push_faq_1_md_7f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-faq-push-faq-1-push-faq-1-md-7f1.json
var site_docs_push_kit_guide_push_faq_push_faq_1_push_faq_1_md_7f1_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-faq/push-faq-1/push-faq-1","title":"如何处理推送消息时遇到的问题","description":"当使用REST API接口进行消息推送时，您可能遇到一些问题，请按照如下思路进行处理：","source":"@site/docs/push-kit-guide/push-faq/push-faq-1/push-faq-1.md","sourceDirName":"push-kit-guide/push-faq/push-faq-1","slug":"/push-kit-guide/push-faq/push-faq-1/","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"如何处理推送消息时遇到的问题","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-1","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取AAID","permalink":"/harmonyos-docs-site/push-kit-guide/push-get-aaid/"},"next":{"title":"关于云侧接口推送成功但设备收不到推送消息的问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-faq/push-faq-1/push-faq-1.md


const frontMatter = {
	title: '如何处理推送消息时遇到的问题',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-1',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '如何处理推送消息时遇到的问题';

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
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "如何处理推送消息时遇到的问题",
        children: "如何处理推送消息时遇到的问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用REST API接口进行消息推送时，您可能遇到一些问题，请按照如下思路进行处理："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["优先检查", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct",
            children: "消息推送接口"
          }), "URL（", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://push-api.cloud.huawei.com/****v3****/****[projectId]****/messages:send）是否正确"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["请使用v3版本的推送接口URL，不要使用v1或v2版本的推送接口URL，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-faq/push-faq-8",
              children: "场景化消息中的请求URL版本问题"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["请检查推送接口地址中的projectId，确保与您当前应用所属的项目保持一致，若不一致请更新推送接口URL中的projectId，并重新", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-jwt-token",
              children: "生成鉴权令牌"
            }), "，应用重新", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-get-token",
              children: "获取Push Token"
            }), "，再进行消息推送。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若调用消息推送接口返回了错误码，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response#%E4%B8%9A%E5%8A%A1%E5%93%8D%E5%BA%94%E7%A0%81",
            children: "业务响应码"
          }), "进行排查。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若调用消息推送接口返回成功，但设备未展示消息，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-faq/push-faq-2",
            children: "“如何处理云侧推送消息成功端侧消息未展示的问题”"
          }), "进行排查。"]
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