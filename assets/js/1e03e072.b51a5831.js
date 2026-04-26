"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["756139"], {
911237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_introduction_screentimeguard_introduction_md_1e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-introduction-screentimeguard-introduction-md-1e0.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_introduction_screentimeguard_introduction_md_1e0_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-introduction/screentimeguard-introduction","title":"Screen Time Guard Kit简介","description":"在应用安全隐私保护前提下，为开发者提供屏幕使用时间管控、应用使用限制等开放能力，满足不同用户对时间管理多样化诉求，更好的服务终端用户。","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-introduction/screentimeguard-introduction.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-introduction","slug":"/screen-time-guard-kit-guide/screentimeguard-introduction/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Screen Time Guard Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持的国家/地区","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-appendix/scenario-fusion-appendix-support-regions/"},"next":{"title":"配置签名","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-app-signature/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-introduction/screentimeguard-introduction.md


const frontMatter = {
	title: 'Screen Time Guard Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Screen Time Guard Kit简介';

const assets = {

};



const toc = [{
  "value": "能力介绍",
  "id": "能力介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "screen-time-guard-kit简介",
        children: "Screen Time Guard Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用安全隐私保护前提下，为开发者提供屏幕使用时间管控、应用使用限制等开放能力，满足不同用户对时间管理多样化诉求，更好的服务终端用户。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力介绍",
      children: "能力介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview",
        children: "用户授权管理"
      }), "：用来管理用户的授权信息，分别为请求用户授权访问，取消授权访问，授权情况查询。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/screen-time-guard-kit-guide/screentimeguard-app-picker-pages/screentimeguard-app-picker-overview",
        children: "应用选择页"
      }), "：提供接口拉起具有不同功能的半模态页面，用户可在页面中勾选想进行管理的应用、快速跳转到其它应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-guard-strategy-manage-overview",
        children: "守护策略管理"
      }), "：提供接口实现时间策略的添加、修改、查询、删除、启动和停止操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-apps-restriction-overview",
        children: "应用访问限制"
      }), "：对选定范围内的应用进行立即生效的允许/禁止管理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "token：被管控应用的唯一标识。该token不包含应用自身信息如包名、应用名等，保障用户数据隐私安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guard strategy：守护策略，分为起止时间策略、总时长策略和共享时长策略三种类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "起止时间策略：通过设定策略生效的开始时间和结束时间，可设定部分应用在这段时间内禁用或者可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "总时长策略：通过设定从当前开始的一个时间长度，可限定全部或部分应用在该时间长度内禁用或者可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "共享时长策略：通过设定一个时间长度，可限定全部或部分应用总共能使用该时间长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管控范围：所有应用都可被管控，除了系统内置允许清单应用（如时钟、电话等）、管控发起应用本身、已授权的管控应用和健康使用设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的设备：Screen Time Guard Kit目前仅支持Phone、Tablet，支持模拟器设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的国家/地区：目前仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持主空间调用，不支持在隐私空间及其它子空间中调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持调用方的分身应用接入。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "”。"]
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