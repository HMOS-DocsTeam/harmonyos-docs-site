"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["245712"], {
770582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_distributed_notification_distributed_overview_notification_distributed_overview_md_aff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-distributed-notification-distributed-overview-notification-distributed-overview-md-aff.json
var site_docs_notification_kit_notification_distributed_notification_distributed_overview_notification_distributed_overview_md_aff_namespaceObject = JSON.parse('{"id":"notification-kit/notification-distributed/notification-distributed-overview/notification-distributed-overview","title":"跨设备协同通知概述","description":"跨设备协同通知旨在以手机为中心，实现与手表等其他设备的通知消息协同交互。典型场景如下：","source":"@site/docs/notification-kit/notification-distributed/notification-distributed-overview/notification-distributed-overview.md","sourceDirName":"notification-kit/notification-distributed/notification-distributed-overview","slug":"/notification-kit/notification-distributed/notification-distributed-overview/","permalink":"/harmonyos-docs-site/notification-kit/notification-distributed/notification-distributed-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"跨设备协同通知概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-distributed-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"取消通知","permalink":"/harmonyos-docs-site/notification-kit/notification-cancel/"},"next":{"title":"清除跨设备场景下的重复通知","permalink":"/harmonyos-docs-site/notification-kit/notification-distributed/notification-distributed-messageid/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-distributed/notification-distributed-overview/notification-distributed-overview.md


const frontMatter = {
	title: '跨设备协同通知概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-distributed-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '跨设备协同通知概述';

const assets = {

};



const toc = [{
  "value": "约束条件",
  "id": "约束条件",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
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
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "跨设备协同通知概述",
        children: "跨设备协同通知概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨设备协同通知旨在以手机为中心，实现与手表等其他设备的通知消息协同交互。典型场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/notification-kit/notification-distributed/notification-distributed-messageid",
          children: "清除跨设备场景下的重复通知"
        }), "：清除跨设备协同消息和本地设备发布的重复消息，避免多源通知重复打扰用户。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨设备协同支持的设备：从API Version 18开始，支持手机与手表之间通知消息的协同；从API Version 20开始，支持手机与平板、2in1设备之间通知消息的协同。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["跨设备协同支持的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#slottype",
          children: "通知渠道"
        }), "：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "手表：带快捷回复的社交通信类通知（社交通信）、实况窗。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "平板：社交通信、服务提醒、实况窗、客服消息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "2in1：社交通信、服务提醒、客服消息。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(662300)/* ["default"] */.A) + "",
        width: "1041",
        height: "694"
      })
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
662300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959062-447d931bcf42d677e6e6a1046427ad66.png");

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