"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["927577"], {
778827(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_faq_push_faq_2_push_faq_2_md_7c4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-faq-push-faq-2-push-faq-2-md-7c4.json
var site_docs_push_kit_guide_push_faq_push_faq_2_push_faq_2_md_7c4_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-faq/push-faq-2/push-faq-2","title":"关于云侧接口推送成功但设备收不到推送消息的问题","description":"云侧消息下发成功后，可能会因为消息频控、通知开关未打开等原因，导致端侧消息未展示。","source":"@site/docs/push-kit-guide/push-faq/push-faq-2/push-faq-2.md","sourceDirName":"push-kit-guide/push-faq/push-faq-2","slug":"/push-kit-guide/push-faq/push-faq-2/","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"关于云侧接口推送成功但设备收不到推送消息的问题","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-2","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何处理推送消息时遇到的问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-1/"},"next":{"title":"如何处理误分类问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-faq/push-faq-2/push-faq-2.md


const frontMatter = {
	title: '关于云侧接口推送成功但设备收不到推送消息的问题',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-2',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '关于云侧接口推送成功但设备收不到推送消息的问题';

const assets = {

};



const toc = [{
  "value": "收不到推送消息的可能原因",
  "id": "收不到推送消息的可能原因",
  "level": 2
}, {
  "value": "如何定位此类问题",
  "id": "如何定位此类问题",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "关于云侧接口推送成功但设备收不到推送消息的问题",
        children: "关于云侧接口推送成功但设备收不到推送消息的问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "云侧消息下发成功后，可能会因为消息频控、通知开关未打开等原因，导致端侧消息未展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "收不到推送消息的可能原因",
      children: "收不到推送消息的可能原因"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["消息被频控，请检查是否", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E5%BC%80%E9%80%9A%E6%9D%83%E7%9B%8A",
          children: "开通消息自分类权益"
        }), "。调测阶段建议发送测试消息，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-faq/push-faq-5",
          children: "关于通知消息被频控的问题"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端设备的网络连接异常。如终端设备切到测试环境，且未连接外部网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端的通知开关关闭。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用的Push Token已经失效，如应用已卸载，未安装等（Push Token失效原因请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-preparations/push-get-token#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D",
          children: "场景介绍"
        }), "），请重新生成Push Token发送消息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用在前台，推送的是语音播报消息（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
          children: "push-type"
        }), "为2）。请将应用切至后台重新推送语音播报消息，或重新推送普通通知消息（push-type字段设置为0）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["skills标签配置问题，正确的配置方法请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E7%82%B9%E5%87%BB%E6%B6%88%E6%81%AF%E5%8A%A8%E4%BD%9C",
          children: "点击消息动作"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查消息是否是静默通知。发送了资讯营销类的消息，或是未申请自分类权益，都会静默通知。当收到消息时，由于静默通知仅在通知中心展示，并不会锁屏和横幅通知、响铃和振动，需要去通知中心查看。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何定位此类问题",
      children: "如何定位此类问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push Kit建议您", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-msg-receipt",
          children: "开发消息回执"
        }), "，Push服务端会将消息送达状态以回执消息形式发送给您的应用回执服务端，您可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-msg-receipt#%E5%9B%9E%E6%89%A7%E7%8A%B6%E6%80%81%E7%A0%81",
          children: "回执状态码"
        }), "定位问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["您还可以登录", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "进行消息追踪和token信息查询，查询路径：“开发与服务 > 增长 > 推送服务 > 自助分析（Beta）”。"]
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