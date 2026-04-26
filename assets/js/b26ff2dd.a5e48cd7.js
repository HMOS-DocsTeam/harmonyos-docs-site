"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["627320"], {
678087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_faq_push_faq_9_push_faq_9_md_b26_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-faq-push-faq-9-push-faq-9-md-b26.json
var site_docs_push_kit_guide_push_faq_push_faq_9_push_faq_9_md_b26_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-faq/push-faq-9/push-faq-9","title":"应用处于后台时应用内如何接收消息","description":"应用处于后台时仅有如下两个场景可以在应用内接收消息：","source":"@site/docs/push-kit-guide/push-faq/push-faq-9/push-faq-9.md","sourceDirName":"push-kit-guide/push-faq/push-faq-9","slug":"/push-kit-guide/push-faq/push-faq-9/","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-9/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"应用处于后台时应用内如何接收消息","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-9","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"场景化消息中的请求URL版本问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-8/"},"next":{"title":"要实现即时聊天功能应该使用什么类型的场景化消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-10/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-faq/push-faq-9/push-faq-9.md


const frontMatter = {
	title: '应用处于后台时应用内如何接收消息',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-9',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用处于后台时应用内如何接收消息';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用处于后台时应用内如何接收消息",
        children: "应用处于后台时应用内如何接收消息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用处于后台时仅有如下两个场景可以在应用内接收消息："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若应用需要实现语音播报等能力时，服务端可发送", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "语音播报消息"
          })
        }), "（即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D",
          children: "push-type"
        }), "为", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "2"
          })
        }), "）。该场景中客户端应用内消息接收请参考RemoteNotificationExtensionAbility中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-arkts/push-remote-notification-extension-ability/push-remote-notification-extension-ability#onreceivemessage",
          children: "接口调用示例"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若应用需要实现网络音视频通话能力时，服务端可发送", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "应用内通话消息"
          })
        }), "（即push-type为", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "10"
          })
        }), "）。该场景中客户端应用内消息接收请参考VoIPExtensionAbility中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-arkts/push-voip-ability/push-voip-ability#onreceivemessage",
          children: "接口调用示例"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用处于内容不频繁更新，不会显示通知、播放铃声或改变应用角标场景时，服务端可发送", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "后台消息"
        })
      }), "（即push-type为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "6"
        })
      }), "），若", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#backgroundpayload-%E5%90%8E%E5%8F%B0%E6%B6%88%E6%81%AF",
        children: "proxyData"
      }), "为“ENABLE”时，推送服务将后台消息写入到数据库中，不会拉起应用进程。"]
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