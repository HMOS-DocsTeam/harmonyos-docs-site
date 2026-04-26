"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["46822"], {
111360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_badge_notification_badge_md_550_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-badge-notification-badge-md-550.json
var site_docs_notification_kit_notification_badge_notification_badge_md_550_namespaceObject = JSON.parse('{"id":"notification-kit/notification-badge/notification-badge","title":"管理通知角标","description":"针对未读的通知，系统提供了角标设置接口，将未读通知个数显示在桌面图标的右上角角标上。","source":"@site/docs/notification-kit/notification-badge/notification-badge.md","sourceDirName":"notification-kit/notification-badge","slug":"/notification-kit/notification-badge/","permalink":"/harmonyos-docs-site/notification-kit/notification-badge/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"管理通知角标","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-badge","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"请求通知授权","permalink":"/harmonyos-docs-site/notification-kit/notification-enable/"},"next":{"title":"管理通知渠道","permalink":"/harmonyos-docs-site/notification-kit/notification-slot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-badge/notification-badge.md


const frontMatter = {
	title: '管理通知角标',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-badge',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '管理通知角标';

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
}, {
  "value": "常见问题",
  "id": "常见问题",
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
        id: "管理通知角标",
        children: "管理通知角标"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对未读的通知，系统提供了角标设置接口，将未读通知个数显示在桌面图标的右上角角标上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知增加时，角标上显示的未读通知个数需要增加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知被查看后，角标上显示的未读通知个数需要减少，没有未读通知时，不显示角标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当角标设定个数取值小于或等于0时，表示清除角标。取值大于99时，通知角标将显示99+。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "增加角标数，支持如下两种方法："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["发布通知时，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1",
              children: "NotificationRequest"
            }), "的badgeNumber字段里携带，桌面收到通知后，在原角标数上累加、呈现。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagersetbadgenumber10",
              children: "setBadgeNumber()"
            }), "设置，桌面按设置的角标数呈现。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["减少角标数，目前仅支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagersetbadgenumber10",
            children: "setBadgeNumber()"
          }), "设置。"]
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
                children: "setBadgeNumber(badgeNumber: number): Promise<void>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置角标个数。"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入NotificationManager模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { notificationManager } from '@kit.NotificationKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[PublishOperation]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "增加角标个数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发布通知时，可在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/notification/js-apis-inner-notification-notificationrequest/js-apis-inner-notification-notificationrequest#notificationrequest-1",
            children: "NotificationRequest"
          }), "的badgeNumber字段里携带相关信息，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/notification-kit/publish-notification/text-notification",
            children: "通知发布"
          }), "章节。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例为调用setBadgeNumber接口增加角标，在发布完新的通知后，调用该接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let badgeNumber: number = 9;\nnotificationManager.setBadgeNumber(badgeNumber).then(() => {\n  hilog.info(DOMAIN_NUMBER, TAG, `Succeeded in setting badge number.`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN_NUMBER, TAG,\n    `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "减少角标个数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一条通知被查看后，应用需要调用接口设置剩下未读通知个数，桌面刷新角标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let badgeNumber: number = 8;\nnotificationManager.setBadgeNumber(badgeNumber).then(() => {\n  hilog.info(DOMAIN_NUMBER, TAG, `Succeeded in setting badge number.`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN_NUMBER, TAG,\n    `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于setBadgeNumber为异步接口，使用setBadgeNumber连续设置角标时，为了确保执行顺序符合预期，需要确保上一次设置完成后才能进行下一次设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反例"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每次接口调用是相互独立的、没有依赖关系的，实际执行时无法保证调用顺序。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let badgeNumber: number = 10;\nnotificationManager.setBadgeNumber(badgeNumber).then(() => {\n  hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 10 success.`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN_NUMBER, TAG,\n    `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);\n});\nbadgeNumber = 11;\nnotificationManager.setBadgeNumber(badgeNumber).then(() => {\n  hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 11 success.`);\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN_NUMBER, TAG,\n    `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正例"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多次接口调用存在依赖关系，确保上一次设置完成后才能进行下一次设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let badgeNumber: number = 10;\nnotificationManager.setBadgeNumber(badgeNumber).then(() => {\n  hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 10 success.`);\n  badgeNumber = 11;\n  notificationManager.setBadgeNumber(badgeNumber).then(() => {\n    hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 11 success.`);\n  }).catch((err: BusinessError) => {\n    hilog.error(DOMAIN_NUMBER, TAG,\n      `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);\n  });\n}).catch((err: BusinessError) => {\n  hilog.error(DOMAIN_NUMBER, TAG,\n    `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);\n});\n"
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