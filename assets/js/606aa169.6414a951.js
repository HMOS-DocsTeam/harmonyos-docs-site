"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["622888"], {
690431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_common_event_overview_common_event_overview_md_606_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-app-events-common-event-communication-common-event-overview-common-event-overview-md-606.json
var site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_common_event_overview_common_event_overview_md_606_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview/common-event-overview","title":"公共事件简介","description":"CES（Common Event Service，公共事件服务）为应用程序提供订阅、发布、退订公共事件的能力。","source":"@site/docs/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview/common-event-overview.md","sourceDirName":"system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview","slug":"/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"公共事件简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/common-event-overview","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Basic Services Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/basic-services-kit-overview/"},"next":{"title":"动态订阅公共事件","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-subscription/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview/common-event-overview.md


const frontMatter = {
	title: '公共事件简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/common-event-overview',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '公共事件简介';

const assets = {

};



const toc = [{
  "value": "公共事件分类",
  "id": "公共事件分类",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "安全注意事项",
  "id": "安全注意事项",
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
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "公共事件简介",
        children: "公共事件简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CES（Common Event Service，公共事件服务）为应用程序提供订阅、发布、退订公共事件的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "公共事件分类",
      children: "公共事件分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公共事件从系统角度可分为：系统公共事件和自定义公共事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统公共事件：CES内部定义的公共事件，当前仅支持系统应用和系统服务发布，例如HAP安装、更新、卸载等公共事件。目前支持的系统公共事件请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions",
          children: "系统定义的公共事件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义公共事件：应用定义的公共事件，可用于实现跨进程的事件通信能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公共事件按发送方式可分为：无序公共事件、有序公共事件和粘性公共事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无序公共事件：CES在转发公共事件时，不考虑订阅者是否接收到该事件，也不保证订阅者接收到该事件的顺序与其订阅顺序一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有序公共事件：CES在转发公共事件时，根据订阅者设置的优先级等级，优先将公共事件发送给优先级较高的订阅者，等待其成功接收该公共事件之后再将事件发送给优先级较低的订阅者。如果有多个订阅者具有相同的优先级，则他们将随机接收到公共事件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["粘性公共事件：能够让订阅者收到在订阅前已经发送的公共事件就是粘性公共事件。普通的公共事件只能在订阅后发送才能收到，而粘性公共事件的特殊性就是可以先发送后订阅，同时也支持先订阅后发送。发送粘性事件必须是系统应用或系统服务，粘性事件发送后会一直存在系统中，且发送者需要申请ohos.permission.COMMONEVENT_STICKY权限，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个应用都可以按需订阅公共事件，订阅成功，当公共事件发布时，系统会将其发送给对应的应用。这些公共事件可能来自系统、其他应用和应用自身。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 公共事件示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(645437)/* ["default"] */.A) + "",
        width: "800",
        height: "628"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安全注意事项",
      children: "安全注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "公共事件发布方"
          })
        }), "：如果不加限制，任何应用都可以订阅公共事件并读取相关信息，应避免在公共事件中携带敏感信息。采用以下方式，可以限制公共事件接收方的范围。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventpublishdata/js-apis-inner-commonevent-commoneventpublishdata",
              children: "CommonEventPublishData"
            }), "中的subscriberPermissions参数指定订阅者所需权限。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventpublishdata/js-apis-inner-commonevent-commoneventpublishdata",
              children: "CommonEventPublishData"
            }), "中的bundleName参数指定订阅者的包名。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "公共事件订阅方"
          })
        }), "：订阅自定义公共事件后，任意应用都可以向订阅者发送潜在的恶意公共事件。采用以下方式，可以限制公共事件发布方的范围。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventsubscribeinfo/js-apis-inner-commonevent-commoneventsubscribeinfo",
              children: "CommonEventSubscribeInfo"
            }), "中的publisherPermission参数指定发布者所需权限。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventsubscribeinfo/js-apis-inner-commonevent-commoneventsubscribeinfo",
              children: "CommonEventSubscribeInfo"
            }), "中的publisherBundleName参数指定发布者的包名。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义公共事件名称应确保全局唯一，否则可能与其他公共事件冲突。"
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
645437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958446-eb91a5ed036043361860d9a7abc85544.png");

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