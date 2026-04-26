"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["354573"], {
839410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_publish_notification_text_notification_text_notification_md_2c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-publish-notification-text-notification-text-notification-md-2c6.json
var site_docs_notification_kit_publish_notification_text_notification_text_notification_md_2c6_namespaceObject = JSON.parse('{"id":"notification-kit/publish-notification/text-notification/text-notification","title":"发布文本类型通知","description":"文本类型通知主要应用于发送短信息、提示信息等，支持普通文本类型和多行文本类型。","source":"@site/docs/notification-kit/publish-notification/text-notification/text-notification.md","sourceDirName":"notification-kit/publish-notification/text-notification","slug":"/notification-kit/publish-notification/text-notification/","permalink":"/harmonyos-docs-site/notification-kit/publish-notification/text-notification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"发布文本类型通知","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-notification","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理通知渠道","permalink":"/harmonyos-docs-site/notification-kit/notification-slot/"},"next":{"title":"发布进度条类型通知","permalink":"/harmonyos-docs-site/notification-kit/publish-notification/progress-bar-notification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/publish-notification/text-notification/text-notification.md


const frontMatter = {
	title: '发布文本类型通知',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-notification',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '发布文本类型通知';

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
        id: "发布文本类型通知",
        children: "发布文本类型通知"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本类型通知主要应用于发送短信息、提示信息等，支持普通文本类型和多行文本类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 基础类型通知中的内容分类"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFICATION_CONTENT_BASIC_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFICATION_CONTENT_MULTILINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多行文本类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通知发布接口说明详见下表，通知发布的详情可通过入参", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1",
        children: "NotificationRequest"
      }), "来进行指定，可以包括通知内容、通知ID、通知的通道类型和通知发布时间等信息。"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publish(request: NotificationRequest, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布通知。"
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
            children: "import { notificationManager } from '@kit.NotificationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[PublishOperation]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造NotificationRequest对象，并发布通知。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["普通文本类型通知由标题、文本内容和附加信息三个字段组成。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationcontent/js-apis-inner-notification-notificationcontent#notificationbasiccontent",
                children: "NotificationBasicContent"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let notificationRequest: notificationManager.NotificationRequest = {\n  id: 1,\n  content: {\n    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT, // 普通文本类型通知\n    normal: {\n      title: 'test_title',\n      text: 'test_text',\n      additionalText: 'test_additionalText',\n    }\n  }\n};\nnotificationManager.publish(notificationRequest, (err: BusinessError) => {\n  if (err) {\n    hilog.error(DOMAIN_NUMBER, TAG,\n      `Failed to publish notification. Code is ${err.code}, message is ${err.message}`);\n    return;\n  }\n  hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in publishing notification.');\n});\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["多行文本类型通知继承了普通文本类型的字段，同时新增了多行文本内容、内容概要和通知展开时的标题。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationcontent/js-apis-inner-notification-notificationcontent#notificationmultilinecontent",
                children: "NotificationMultiLineContent"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let notificationRequest: notificationManager.NotificationRequest = {\n  id: 3,\n  content: {\n    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_MULTILINE, // 多行文本类型通知\n    multiLine: {\n      title: 'test_multi_line_title',\n      text: 'test_text',\n      briefText: 'test_briefText',\n      longTitle: 'test_longTitle',\n      lines: ['line_01', 'line_02', 'line_03'],\n    }\n  }\n};\n// 发布通知\nnotificationManager.publish(notificationRequest, (err: BusinessError) => {\n  if (err) {\n    hilog.error(DOMAIN_NUMBER, TAG,\n      `Failed to publish notification. Code is ${err.code}, message is ${err.message}`);\n    return;\n  }\n  hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in publishing notification.');\n});\n"
              })
            }), "\n"]
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