"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["49073"], {
623983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_knock_share_knock_share_between_phones_knock_share_between_phones_overview_knock_share_between_phones_overview_md_207_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-knock-share-knock-share-between-phones-knock-share-between-phones-overview-knock-share-between-phones-overview-md-207.json
var site_docs_share_kit_guide_knock_share_knock_share_between_phones_knock_share_between_phones_overview_knock_share_between_phones_overview_md_207_namespaceObject = JSON.parse('{"id":"share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview/knock-share-between-phones-overview","title":"概述","description":"Share Kit推出碰一碰分享，支持用户通过碰一碰发起跨端分享，可实现传输图片、共享Wi-Fi等。","source":"@site/docs/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview/knock-share-between-phones-overview.md","sourceDirName":"share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview","slug":"/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview/","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-between-phones-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分享文本","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-service-scenarios/share-utd-text/"},"next":{"title":"内容分享","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview/knock-share-between-phones-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-between-phones-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Share Kit推出碰一碰分享，支持用户通过碰一碰发起跨端分享，可实现传输图片、共享Wi-Fi等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用进入一个可以分享的界面，比如打开或者选中的一个文件、一条备忘录、一个联系人详情，或个人热点/Wi-Fi等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用可以分享多个内容，如选中的多张图片等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18818)/* ["default"] */.A) + "",
        width: "480",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549286)/* ["default"] */.A) + "",
        width: "4969",
        height: "4194"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用注册碰一碰分享事件，并与亮屏且解锁的对端设备碰一碰。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用发现设备，调用碰一碰分享事件回调，在回调事件中构造分享数据并发送。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标设备接收并处理分享数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用解除注册碰一碰分享事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["手机应用发起碰一碰分享时，双端设备需要在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "亮屏、且解锁"
        })
      }), "的状态下并且都已开启华为分享服务（系统默认开启），设备顶部轻碰即可触发。如果用户已手动关闭华为分享服务开关，轻碰事件触发时，用户会接收到系统通知提示开启。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(890252)/* ["default"] */.A) + "",
        width: "525",
        height: "342"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Share Kit的处理机制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任意一端设备不支持碰一碰能力时，轻碰无任何响应。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用无法获得分享结果，Share Kit会通过系统通知消息告知用户对端接收或拒绝。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持的手机系统：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-500#section62333015377",
            children: "HarmonyOS NEXT Release"
          }), "及以上版本，可使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/common-basic-arkts/js-apis-syscap/js-apis-syscap#caniuse",
            children: "canIUse"
          }), "判断系统能力是否支持。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (canIUse('SystemCapability.Collaboration.HarmonyShare')) {\n  // 支持一碰分享的能力.\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["集成开发环境：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-500#section1457031563711",
            children: "DevEco Studio NEXT Beta1"
          }), "及以上版本。"]
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
890252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479183-2c67d82dde836ce36ae0fc3c678a52ba.png");

},
549286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959182-d565449d10d058de5c7c6450c3020009.png");

},
18818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439221-e5cdbc74b3417785b65b1194b402c6f0.gif");

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