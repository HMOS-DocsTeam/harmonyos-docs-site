"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["721068"], {
112302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_distributed_notification_distributed_messageid_notification_distributed_messageid_md_d33_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-distributed-notification-distributed-messageid-notification-distributed-messageid-md-d33.json
var site_docs_notification_kit_notification_distributed_notification_distributed_messageid_notification_distributed_messageid_md_d33_namespaceObject = JSON.parse('{"id":"notification-kit/notification-distributed/notification-distributed-messageid/notification-distributed-messageid","title":"清除跨设备场景下的重复通知","description":"从API version 20开始，为了避免不同渠道发布的通知重复打扰用户（例如，手机协同到当前设备的通知与Push推送服务发布的通知重复），可以使用通知去重功能，清除跨设备场景下的重复通知。","source":"@site/docs/notification-kit/notification-distributed/notification-distributed-messageid/notification-distributed-messageid.md","sourceDirName":"notification-kit/notification-distributed/notification-distributed-messageid","slug":"/notification-kit/notification-distributed/notification-distributed-messageid/","permalink":"/harmonyos-docs-site/notification-kit/notification-distributed/notification-distributed-messageid/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"清除跨设备场景下的重复通知","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-distributed-messageid","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备协同通知概述","permalink":"/harmonyos-docs-site/notification-kit/notification-distributed/notification-distributed-overview/"},"next":{"title":"NotificationSubscriberExtensionAbility (开发概述)","permalink":"/harmonyos-docs-site/notification-kit/notification-subscriber-extension/notification-subscriber-extension-ability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-distributed/notification-distributed-messageid/notification-distributed-messageid.md


const frontMatter = {
	title: '清除跨设备场景下的重复通知',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-distributed-messageid',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '清除跨设备场景下的重复通知';

const assets = {

};



const toc = [{
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束条件",
  "id": "约束条件",
  "level": 2
}, {
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
    img: "img",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "清除跨设备场景下的重复通知",
        children: "清除跨设备场景下的重复通知"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，为了避免不同渠道发布的通知重复打扰用户（例如，手机协同到当前设备的通知与Push推送服务发布的通知重复），可以使用通知去重功能，清除跨设备场景下的重复通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用发送通知时携带唯一标识字段", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1",
        children: "appMessageId"
      }), "，分布式通知接收到多渠道发布的通知后，会根据该字段进行判断，从而实现通知去重。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备只会展示第一条通知，后续收到的重复通知会被静默去重，不展示、不提醒。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 全场景通知去重流程图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(385677)/* ["default"] */.A) + "",
        width: "740",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "appMessageId的唯一性需由开发者保证，同一条通知在各个设备形态上需保证该字段相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该字段仅在发布通知的24小时内有效，超过24小时或者设备重启时都会失效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerpublish-1",
              children: "publish"
            }), "(request: NotificationRequest): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布通知。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用方法见对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest",
              children: "NotificationRequest"
            }), "中", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "appMessageId"
              })
            }), "字段说明。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { notificationManager } from '@kit.NotificationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布通知消息，通知消息中包含appMessageId字段。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// publish回调\nlet publishCallback = (err: BusinessError): void => {\n  if (err) {\n    console.error(`Failed to publish notification. Code is ${err.code}, message is ${err.message}`);\n  } else {\n    console.info(`Succeeded in publishing notification.`);\n  }\n};\n// 通知Request对象\nlet notificationRequest: notificationManager.NotificationRequest = {\n  id: 1,\n  content: {\n    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,\n    normal: {\n      title: 'test_title',\n      text: 'test_text',\n      additionalText: 'test_additionalText'\n    }\n  },\n  appMessageId: 'test_appMessageId_1'\n};\nnotificationManager.publish(notificationRequest, publishCallback);\n"
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
385677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479063-81397ebe2e812b0373cde2558d7dc389.png");

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