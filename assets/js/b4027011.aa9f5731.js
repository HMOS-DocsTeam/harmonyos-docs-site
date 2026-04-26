"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["931909"], {
4098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_live_view_kit_guide_liveview_preparations_liveview_joint_commission_test_liveview_joint_commission_test_md_b40_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-live-view-kit-guide-liveview-preparations-liveview-joint-commission-test-liveview-joint-commission-test-md-b40.json
var site_docs_live_view_kit_guide_liveview_preparations_liveview_joint_commission_test_liveview_joint_commission_test_md_b40_namespaceObject = JSON.parse('{"id":"live-view-kit-guide/liveview-preparations/liveview-joint-commission-test/liveview-joint-commission-test","title":"接入联调测试","description":"若开发者需要在设备上调试、验证实况窗，可通过“调测设备管理”入口，添加设备进行调测。添加到调测名单中的设备，不做本地构建实况窗权限的校验。","source":"@site/docs/live-view-kit-guide/liveview-preparations/liveview-joint-commission-test/liveview-joint-commission-test.md","sourceDirName":"live-view-kit-guide/liveview-preparations/liveview-joint-commission-test","slug":"/live-view-kit-guide/liveview-preparations/liveview-joint-commission-test/","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-preparations/liveview-joint-commission-test/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"接入联调测试","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-joint-commission-test","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开通实况窗服务权益","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-preparations/liveview-rights/"},"next":{"title":"申请实况窗正式权限","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-preparations/liveview-formal-authority/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/live-view-kit-guide/liveview-preparations/liveview-joint-commission-test/liveview-joint-commission-test.md


const frontMatter = {
	title: '接入联调测试',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-joint-commission-test',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '接入联调测试';

const assets = {

};



const toc = [{
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "添加调测设备",
  "id": "添加调测设备",
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
        id: "接入联调测试",
        children: "接入联调测试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者需要在设备上调试、验证实况窗，可通过“调测设备管理”入口，添加设备进行调测。添加到调测名单中的设备，不做本地构建实况窗权限的校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调测设备管理能力可用于应用实况窗场景上线前的用户验证，开发者可将用户设备添加至调测设备列表中，以体验应用即将上线的实况窗场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在调测设备上对实况窗充分测试后，开发者可申请开通实况窗正式权限"
        })
      }), "（在申请权限时，请在附件中一并提交调测设备联调的交互效果截图）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "添加的调测设备管理名单数据，系统将在24小时内处理并生效，调测权限有效期与Push Token有效期保持一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调测设备管理需根据Push Token添加调测设备，每个应用可添加的设备上限为100。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加调测设备",
      children: "添加调测设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站，点击“开发与服务”，在项目列表中找到开发者的项目，通过“增长 > 推送服务 > 配置”导航到“配置”页签。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择开发者的应用，点击实况窗-调测设备管理，根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "Push Token"
          }), "添加调测设备后即可进行接入调测。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(897471)/* ["default"] */.A) + "",
            width: "948",
            height: "561"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(743232)/* ["default"] */.A) + "",
            width: "1640",
            height: "599"
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
897471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799326-2b46ea80f06233d60f3859141060933c.png");

},
743232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439021-80724f93031f55689963487a469d3a70.png");

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