"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["741098"], {
907339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_enable_notification_enable_md_2ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-enable-notification-enable-md-2ad.json
var site_docs_notification_kit_notification_enable_notification_enable_md_2ad_namespaceObject = JSON.parse('{"id":"notification-kit/notification-enable/notification-enable","title":"请求通知授权","description":"应用需要获取用户授权才能发送通知。在通知发布前调用requestEnableNotification()接口，弹窗让用户选择是否允许发送通知。当用户拒绝授权后，将无法通过该接口再次拉起弹窗。如果应用需要向用户再次申请通知授权，则可以使用openNotificationSettings接口拉起通知管理半模态弹窗。","source":"@site/docs/notification-kit/notification-enable/notification-enable.md","sourceDirName":"notification-kit/notification-enable","slug":"/notification-kit/notification-enable/","permalink":"/harmonyos-docs-site/notification-kit/notification-enable/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"请求通知授权","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-enable","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Notification Kit简介","permalink":"/harmonyos-docs-site/notification-kit/notification-overview/"},"next":{"title":"管理通知角标","permalink":"/harmonyos-docs-site/notification-kit/notification-badge/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-enable/notification-enable.md


const frontMatter = {
	title: '请求通知授权',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-enable',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '请求通知授权';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "请求通知授权",
        children: "请求通知授权"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用需要获取用户授权才能发送通知。在通知发布前调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerrequestenablenotification10-1",
        children: "requestEnableNotification()"
      }), "接口，弹窗让用户选择是否允许发送通知。当用户拒绝授权后，将无法通过该接口再次拉起弹窗。如果应用需要向用户再次申请通知授权，则可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanageropennotificationsettings13",
        children: "openNotificationSettings"
      }), "接口拉起通知管理半模态弹窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager",
        children: "@ohos.notificationManager (NotificationManager模块)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 通知授权接口功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isNotificationEnabled():Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询通知是否授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestEnableNotification(context: UIAbilityContext): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求发送通知的许可，第一次调用会弹窗让用户选择。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openNotificationSettings(context: UIAbilityContext): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起通知管理弹窗。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入NotificationManager模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { notificationManager } from '@kit.NotificationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\n\nconst TAG: string = '[PublishOperation]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉起通知弹窗，向用户请求通知授权。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过requestEnableNotification的错误码判断用户是否授权。若返回的错误码为1600004，即为拒绝授权。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\nnotificationManager.isNotificationEnabled().then((data: boolean) => {\n  hilog.info(DOMAIN_NUMBER, TAG, `isNotificationEnabled success, data: ${data}` );\n  if (!data) {\n    notificationManager.requestEnableNotification(context).then(() => {\n      hilog.info(DOMAIN_NUMBER, TAG, `[ANS] requestEnableNotification success`);\n    }).catch((err: BusinessError) => {\n      if (1600004 == err.code) {\n        hilog.error(DOMAIN_NUMBER, TAG,\n          `[ANS] requestEnableNotification refused, code is ${err.code}, message is ${err.message}`);\n      } else {\n        hilog.error(DOMAIN_NUMBER, TAG,\n          `[ANS] requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);\n      }\n    });\n  }\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN_NUMBER, TAG,\n    `isNotificationEnabled fail, code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）拉起通知管理半模态弹窗，向用户再次申请通知授权。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\nnotificationManager.isNotificationEnabled().then((data: boolean) => {\n  hilog.info(DOMAIN_NUMBER, TAG, `isNotificationEnabled success, data:  ${data}`);\n  if (!data) {\n    notificationManager.openNotificationSettings(context).then(() => {\n      hilog.info(DOMAIN_NUMBER, TAG, `[ANS] openNotificationSettings success`);\n    }).catch((err: BusinessError) => {\n      hilog.error(DOMAIN_NUMBER, TAG,\n        `[ANS] openNotificationSettings failed, code is ${err.code}, message is ${err.message}`);\n    });\n  }\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN_NUMBER, TAG,\n    `isNotificationEnabled fail, code is ${err.code}, message is ${err.message}`);\n});\n"
          })
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