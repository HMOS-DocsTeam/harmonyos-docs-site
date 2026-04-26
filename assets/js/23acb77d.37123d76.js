"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["401763"], {
288692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_share_terminology_share_terminology_md_23a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-share-terminology-share-terminology-md-23a.json
var site_docs_share_kit_guide_share_terminology_share_terminology_md_23a_namespaceObject = JSON.parse('{"id":"share-kit-guide/share-terminology/share-terminology","title":"Share Kit术语","description":"Content area内容预览区","source":"@site/docs/share-kit-guide/share-terminology/share-terminology.md","sourceDirName":"share-kit-guide/share-terminology","slug":"/share-kit-guide/share-terminology/","permalink":"/harmonyos-docs-site/share-kit-guide/share-terminology/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Share Kit术语","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-terminology","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Share Kit简介","permalink":"/harmonyos-docs-site/share-kit-guide/share-introduction/"},"next":{"title":"宿主应用发起分享需使用精细化的utd类型","permalink":"/harmonyos-docs-site/share-kit-guide/share-access-precautions/share-access-utd/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/share-terminology/share-terminology.md


const frontMatter = {
	title: 'Share Kit术语',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-terminology',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Share Kit术语';

const assets = {

};



const toc = [{
  "value": "Content area内容预览区",
  "id": "content-area内容预览区",
  "level": 2
}, {
  "value": "Host app宿主应用",
  "id": "host-app宿主应用",
  "level": 2
}, {
  "value": "Operation area操作区",
  "id": "operation-area操作区",
  "level": 2
}, {
  "value": "Recommendation area推荐区",
  "id": "recommendation-area推荐区",
  "level": 2
}, {
  "value": "Sharing mode area分享方式区",
  "id": "sharing-mode-area分享方式区",
  "level": 2
}, {
  "value": "Sharing details page分享详情页",
  "id": "sharing-details-page分享详情页",
  "level": 2
}, {
  "value": "Source device源端设备",
  "id": "source-device源端设备",
  "level": 2
}, {
  "value": "Target app目标应用",
  "id": "target-app目标应用",
  "level": 2
}, {
  "value": "Target device目标设备",
  "id": "target-device目标设备",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "share-kit术语",
        children: "Share Kit术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "content-area内容预览区",
      children: "Content area内容预览区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "负责显示分享内容标题、预览、是否选中等信息，供用户选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "host-app宿主应用",
      children: "Host app宿主应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分享行为的发起者。通过调用分享接口，配置分享的内容、预览样式等信息后展示分享面板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operation-area操作区",
      children: "Operation area操作区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容相关的操作，由系统提供的复制、保存、另存为、打印等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommendation-area推荐区",
      children: "Recommendation area推荐区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对接华为分享和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/intents-kit-guide/intents-introduction",
        children: "意图框架"
      }), "，通过算法高效、精准推荐能够处理内容的设备和目标应用用户。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sharing-mode-area分享方式区",
      children: "Sharing mode area分享方式区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过HarmonyOS的包管理服务获取支持分享内容的目标应用。支持2种跳转方式："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、跳转目标应用内UIAbility组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、跳转目标应用提供的ExtensionAbility组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用组件需通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中配置UIAbility组件和ExtensionAbility组件的描述信息，以声明支持分享的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sharing-details-page分享详情页",
      children: "Sharing details page分享详情页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击分享方式可跳转\"分享详情页\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(698170)/* ["default"] */.A) + "",
        width: "5760",
        height: "3552"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-device源端设备",
      children: "Source device源端设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分享内容的发起端设备。发起端设备通过华为分享服务，将分享数据发送到对端设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "target-app目标应用",
      children: "Target app目标应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分享内容的接收者。需要在应用中构建数据处理能力并按照目标应用接入指南进行能力声明，使得包管理服务可以识别应用支持的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "target-device目标设备",
      children: "Target device目标设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分享内容的接收设备。接收端将根据分享数据类型，选择合适的应用存储或打开分享内容。"
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
698170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799528-0c5a09546b4dd2d3c9fb33464ce23bbb.png");

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