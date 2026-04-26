"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["437799"], {
527952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_update_notification_update_md_c18_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-update-notification-update-md-c18.json
var site_docs_notification_kit_notification_update_notification_update_md_c18_namespaceObject = JSON.parse('{"id":"notification-kit/notification-update/notification-update","title":"更新通知","description":"从API version 18开始，支持应用只更新已发布的通知。主要用于上传下载进度更新、IM会话消息更新等场景。","source":"@site/docs/notification-kit/notification-update/notification-update.md","sourceDirName":"notification-kit/notification-update","slug":"/notification-kit/notification-update/","permalink":"/harmonyos-docs-site/notification-kit/notification-update/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"更新通知","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-update","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"为通知添加行为意图","permalink":"/harmonyos-docs-site/notification-kit/publish-notification/notification-with-wantagent/"},"next":{"title":"取消通知","permalink":"/harmonyos-docs-site/notification-kit/notification-cancel/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-update/notification-update.md


const frontMatter = {
	title: '更新通知',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-update',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '更新通知';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "更新通知",
        children: "更新通知"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持应用只更新已发布的通知。主要用于上传下载进度更新、IM会话消息更新等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通知发布更新接口说明详见下表，通知更新可通过入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1",
        children: "NotificationRequest"
      }), "携带updateOnly字段来指定，不指定该字段默认为false。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当updateOnly为true时，若相同ID通知存在，则更新通知；若相同ID通知不存在，则更新失败，并且不创建新的通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当updateOnly为false时，若相同ID通知存在，则更新通知；若相同ID通知不存在，则创建通知。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerpublish",
              children: "publish"
            }), "(request: NotificationRequest, callback: AsyncCallback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布更新通知。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以进度条通知发布更新为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { notificationManager } from '@kit.NotificationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[PublishOperation]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布进度条通知。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let notificationRequest: notificationManager.NotificationRequest = {\n  id: 5,\n  content: {\n    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,\n    normal: {\n      title: 'test_title',\n      text: 'test_text',\n      additionalText: 'test_additionalText'\n    }\n  },\n  // 构造进度条模板，name字段当前需要固定配置为downloadTemplate\n  template: {\n    name: 'downloadTemplate',\n    data: { title: 'File Title', fileName: 'music.mp4', progressValue: 50 }\n  }\n};\n\n// 发布通知\nnotificationManager.publish(notificationRequest, (err: BusinessError) => {\n  if (err) {\n    hilog.error(DOMAIN_NUMBER, TAG,\n      `Failed to publish notification. Code is ${err.code}, message is ${err.message}`);\n    return;\n  }\n  hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in publishing notification.');\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1",
            children: "NotificationRequest"
          }), "接口携带updateOnly字段更新进度条通知。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let notificationRequest: notificationManager.NotificationRequest = {\n  id: 5,\n  updateOnly: true,\n  content: {\n    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,\n    normal: {\n      title: 'test_title',\n      text: 'test_text',\n      additionalText: 'test_additionalText'\n    }\n  },\n  // 构造进度条模板，name字段当前需要固定配置为downloadTemplate\n  template: {\n    name: 'downloadTemplate',\n    data: { title: 'File Title', fileName: 'music.mp4', progressValue: 99 }\n  }\n};\n\n// 更新发布通知\nnotificationManager.publish(notificationRequest, (err: BusinessError) => {\n  if (err) {\n    hilog.error(DOMAIN_NUMBER, TAG,\n      `Failed to update notification. Code is ${err.code}, message is ${err.message}`);\n    return;\n  }\n  hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in updating notification.');\n});\n"
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