"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["482570"], {
861893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_subscriber_extension_notification_subscriber_extension_ability_notification_subscriber_extension_ability_md_47c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-subscriber-extension-notification-subscriber-extension-ability-notification-subscriber-extension-ability-md-47c.json
var site_docs_notification_kit_notification_subscriber_extension_notification_subscriber_extension_ability_notification_subscriber_extension_ability_md_47c_namespaceObject = JSON.parse('{"id":"notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability/notification-subscriber-extension-ability","title":"NotificationSubscriberExtensionAbility (开发概述)","description":"功能简介","source":"@site/docs/notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability/notification-subscriber-extension-ability.md","sourceDirName":"notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability","slug":"/notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability/","permalink":"/harmonyos-docs-site/notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NotificationSubscriberExtensionAbility (开发概述)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-subscriber-extension-ability","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"清除跨设备场景下的重复通知","permalink":"/harmonyos-docs-site/notification-kit/notification-distributed/notification-distributed-messageid/"},"next":{"title":"通知订阅扩展能力开发步骤","permalink":"/harmonyos-docs-site/notification-kit/notification-subscriber-extension/ion-subscriber-extension-ability-development-steps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability/notification-subscriber-extension-ability.md


const frontMatter = {
	title: 'NotificationSubscriberExtensionAbility (开发概述)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-subscriber-extension-ability',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'NotificationSubscriberExtensionAbility (开发概述)';

const assets = {

};



const toc = [{
  "value": "功能简介",
  "id": "功能简介",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "应用场景",
  "id": "应用场景",
  "level": 2
}, {
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "notificationsubscriberextensionability-开发概述",
        children: "NotificationSubscriberExtensionAbility (开发概述)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能简介",
      children: "功能简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此扩展能力的核心作用是让三方应用接收系统通知，应用可在此扩展能力中实现手机与穿戴设备之间的数据传输。应用发送通知给分布式通知服务后，该服务会把通知转发给三方应用实现的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability",
        children: "NotificationSubscriberExtensionAbility"
      }), "。若一定时间内无新通知发布，当前运行的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/js-apis-notificationsubscriberextensionability/js-apis-notificationsubscriberextensionability",
        children: "NotificationSubscriberExtensionAbility"
      }), "会被系统自动销毁。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户已通过手机中的穿戴应用程序与穿戴设备配对。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户已在手机的穿戴应用中，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/notification-api/notification-arkts/js-apis-notificationextensionsubscription/js-apis-notificationextensionsubscription#notificationextensionsubscriptionopensubscriptionsettings",
          children: "openSubscriptionSettings"
        }), "接口拉起的半模态弹窗中，开启了“允许获取本机通知”与“已获取的本机通知”的开关。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/terminology#hfp",
          children: "HFP"
        }), "连接的设备，需保证HFP连接一直处于连接状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用场景",
      children: "应用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使用场景"
          })
        }), "：手机通知同步到穿戴设备"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "传输方式"
          })
        }), "：支持低功耗蓝牙（Bluetooth Low Energy）和传统蓝牙两种同步方式"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本示例仅支持标准系统上运行，支持设备：手机和平板。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本示例为Stage模型，支持API22及以上版本SDK。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本示例需要使用DevEco Studio 6.0.2 Release及以上版本才可编译运行。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["三方穿戴应用需申请", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionsubscribe_notification",
          children: "ohos.permission.SUBSCRIBE_NOTIFICATION"
        }), "权限，权限为system_basic级别。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76710)/* ["default"] */.A) + "",
        width: "791",
        height: "593"
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
76710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799414-1cbf72008415613911375962f76000ad.png");

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