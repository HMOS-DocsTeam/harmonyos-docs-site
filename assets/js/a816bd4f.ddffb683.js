"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["309934"], {
238510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_common_event_publish_common_event_publish_md_a81_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-app-events-common-event-communication-common-event-publish-common-event-publish-md-a81.json
var site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_common_event_publish_common_event_publish_md_a81_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish/common-event-publish","title":"发布公共事件","description":"场景介绍","source":"@site/docs/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish/common-event-publish.md","sourceDirName":"system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish","slug":"/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"发布公共事件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/common-event-publish","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"取消动态订阅公共事件","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-unsubscription/"},"next":{"title":"订阅公共事件（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish/common-event-publish.md


const frontMatter = {
	title: '发布公共事件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/common-event-publish',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '发布公共事件';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "发布不携带信息的公共事件",
  "id": "发布不携带信息的公共事件",
  "level": 2
}, {
  "value": "发布携带信息的公共事件",
  "id": "发布携带信息的公共事件",
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
        id: "发布公共事件",
        children: "发布公共事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要发布某个公共事件时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-commoneventmanager/js-apis-commoneventmanager#commoneventmanagerpublish",
        children: "publish()"
      }), "方法发布事件。发布的公共事件可以携带数据，供订阅者解析并进行下一步处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(291529)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已发出的粘性公共事件后来订阅者也可以接收到，其他公共事件都需要先订阅再接收，订阅参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-subscription",
        children: "公共事件订阅章节"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-commoneventmanager/js-apis-commoneventmanager#commoneventmanagerpublish",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publish(event: string, callback: AsyncCallback<void>)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布公共事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["publish(event: string, options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventpublishdata/js-apis-inner-commonevent-commoneventpublishdata",
              children: "CommonEventPublishData"
            }), ", callback: AsyncCallback<void>)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定发布信息并发布公共事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "发布不携带信息的公共事件",
      children: "发布不携带信息的公共事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不携带信息的公共事件，只能发布无序公共事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'ProcessModel';\nconst DOMAIN_NUMBER: number = 0xFF00;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "传入需要发布的事件名称和回调函数，发布事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 发布公共事件，其中的event字段需要替换为实际的事件名称。\ncommonEventManager.publish('event', (err: BusinessError) => {\n  if (err) {\n    hilog.error(DOMAIN_NUMBER, TAG,\n      `Publish failed, code is ${JSON.stringify(err.code)}, message is ${JSON.stringify(err.message)}`);\n  } else {\n    // ...\n    hilog.info(DOMAIN_NUMBER, TAG, `Publish success`);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "发布携带信息的公共事件",
      children: "发布携带信息的公共事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["携带信息的公共事件，可以发布为无序公共事件、有序公共事件和粘性事件，可以通过参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventpublishdata/js-apis-inner-commonevent-commoneventpublishdata",
        children: "CommonEventPublishData"
      }), "的isOrdered、isSticky的字段进行设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'ProcessModel';\nconst DOMAIN_NUMBER: number = 0xFF00;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建需要发布的公共事件信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 公共事件相关信息\nlet options: commonEventManager.CommonEventPublishData = {\n  code: 1, // 公共事件的初始代码\n  data: 'initial data', // 公共事件的初始数据\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "传入需要发布的事件名称、需要发布的指定信息和回调函数，发布事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 发布公共事件，其中的event字段需要替换为实际的事件名称。\ncommonEventManager.publish('event', options, (err: BusinessError) => {\n  if (err) {\n    hilog.error(DOMAIN_NUMBER, TAG,\n      `Failed to publish common event. Code is ${err.code}, message is ${err.message}`);\n  } else {\n    // ...\n    hilog.info(DOMAIN_NUMBER, TAG, `Succeeded in publishing common event.`);\n  }\n});\n"
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
291529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

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