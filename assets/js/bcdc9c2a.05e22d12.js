"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["708483"], {
978968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_shortcut_settings_notification_shortcut_settings_md_bcd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-shortcut-settings-notification-shortcut-settings-md-bcd.json
var site_docs_notification_kit_notification_shortcut_settings_notification_shortcut_settings_md_bcd_namespaceObject = JSON.parse('{"id":"notification-kit/notification-shortcut-settings/notification-shortcut-settings","title":"应用内通知设置快捷入口开发指导","description":"使用场景","source":"@site/docs/notification-kit/notification-shortcut-settings/notification-shortcut-settings.md","sourceDirName":"notification-kit/notification-shortcut-settings","slug":"/notification-kit/notification-shortcut-settings/","permalink":"/harmonyos-docs-site/notification-kit/notification-shortcut-settings/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"应用内通知设置快捷入口开发指导","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-shortcut-settings","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通知订阅扩展能力开发步骤","permalink":"/harmonyos-docs-site/notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps/"},"next":{"title":"Payment Kit简介","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-shortcut-settings/notification-shortcut-settings.md


const frontMatter = {
	title: '应用内通知设置快捷入口开发指导',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-shortcut-settings',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用内通知设置快捷入口开发指导';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "功能验证",
  "id": "功能验证",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用内通知设置快捷入口开发指导",
        children: "应用内通知设置快捷入口开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的通知设置页面属于3层页面，用户查找难度较大，导致应用的通知关闭率上升。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为改善这一情况，我们在通知消息的左滑菜单和系统的应用通知设置页面中，添加了快速进入应用内通知设置功能页面的入口，直接引导用户跳转至应用内的通知分类管理页面，提升用户通知管理的体验，降低应用通知关闭率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“设置 > 通知和状态栏 > XX应用”页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(363067)/* ["default"] */.A) + "",
        width: "520",
        height: "700"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知中心页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(751861)/* ["default"] */.A) + "",
        width: "520",
        height: "700"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config",
        children: "应用链接说明"
      }), "，其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config#linkfeature%E6%A0%87%E7%AD%BE%E8%AF%B4%E6%98%8E",
        children: "linkFeature"
      }), "使用AppNotificationMgmt即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能验证",
      children: "功能验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景1"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在手机的“设置 > 通知和状态栏”页面，选择当前应用，进入应用详情页。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击“前往XX应用管理”的选项，即可跳转至应用内对应的通知设置页面。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在手机通知中心页面，左滑应用已发布的通知。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击“前往XX应用管理”的选项，即可跳转至应用内对应的通知设置页面。"
          }), "\n"]
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
363067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959068-1ff4ce8c3fa32bbce0104c530ec0897f.png");

},
751861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479069-179aad24291f5a059fc5bb3df6c2f5f9.png");

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