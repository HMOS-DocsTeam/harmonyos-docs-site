"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["341348"], {
66835(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_server_push_server_intro_push_server_intro_md_508_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-server-push-server-intro-push-server-intro-md-508.json
var site_docs_push_kit_guide_push_server_push_server_intro_push_server_intro_md_508_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-server/push-server-intro/push-server-intro","title":"端云调试概述","description":"推送场景化消息章节中囊括了Push Kit的所有推送场景，每个推送场景的开发可大致分为两大步骤：","source":"@site/docs/push-kit-guide/push-server/push-server-intro/push-server-intro.md","sourceDirName":"push-kit-guide/push-server/push-server-intro","slug":"/push-kit-guide/push-server/push-server-intro/","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-server-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"端云调试概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-server-intro","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推送应用内通话消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-voip/"},"next":{"title":"基于服务账号生成鉴权令牌","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-jwt-token/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-server/push-server-intro/push-server-intro.md


const frontMatter = {
	title: '端云调试概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-server-intro',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '端云调试概述';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "端云调试概述",
        children: "端云调试概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-scenes-send",
        children: "推送场景化消息"
      }), "章节中囊括了Push Kit的所有推送场景，每个推送场景的开发可大致分为两大步骤："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取Push Token，完成端侧基于推送场景的ArkTS代码开发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向Push Kit服务侧请求，发送场景化消息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章则在其基础上提供了更详细的服务侧（以下简称“云侧”）开发内容，以便您在完成端侧开发后更好地进行端云联调。阅读本章节时，请确保您至少已成功", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-preparations/push-get-token",
        children: "获取Push Token"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703679)/* ["default"] */.A) + "",
        width: "929",
        height: "671"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Kit云侧主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用服务端向华为Push Kit云侧", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-scenes-send",
          children: "推送场景化消息"
        }), "，发送后应用服务端将收到云侧返回的响应消息。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push Kit云侧将应用的场景化消息下发给应用终端，终端（Push Kit端侧）向云侧返回消息响应状态。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push Kit云侧将消息响应状态回执给应用服务端。开发者可以选择", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-msg-receipt",
          children: "（可选）开发消息回执"
        }), "，以便您的服务端能收到云侧消息下发到端侧后的响应状态。未开通消息回执不会影响消息下发。"]
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
703679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959128-359e28521036c0afa0c9dc919402f427.png");

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