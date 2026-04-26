"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["824610"], {
78521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_target_application_share_design_specification_share_design_specification_md_13b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-target-application-share-design-specification-share-design-specification-md-13b.json
var site_docs_share_kit_guide_system_share_share_target_application_share_design_specification_share_design_specification_md_13b_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-target-application/share-design-specification/share-design-specification","title":"目标应用设计规范","description":"本章节主要介绍目标应用接入系统分享面板时，所涉及的设计规范要求。具体参见：设计指南-分享方式区","source":"@site/docs/share-kit-guide/system-share/share-target-application/share-design-specification/share-design-specification.md","sourceDirName":"share-kit-guide/system-share/share-target-application/share-design-specification","slug":"/share-kit-guide/system-share/share-target-application/share-design-specification/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-design-specification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"目标应用设计规范","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-design-specification","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"共享联系人信息到分享推荐区","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-intents-share/"},"next":{"title":"分享链接","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-service-scenarios/share-utd-link/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-target-application/share-design-specification/share-design-specification.md


const frontMatter = {
	title: '目标应用设计规范',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-design-specification',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '目标应用设计规范';

const assets = {

};



const toc = [{
  "value": "应用名称和图标规范",
  "id": "应用名称和图标规范",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "目标应用设计规范",
        children: "目标应用设计规范"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节主要介绍目标应用接入系统分享面板时，所涉及的设计规范要求。具体参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/share-0000001957076313#section132401520173711",
        children: "设计指南-分享方式区"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用名称和图标规范",
      children: "应用名称和图标规范"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用实现了用于接收分享内容的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
        children: "UIExtensionAbility"
      }), "后，可在配置文件（src/main/module.json5）的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
        children: "skills"
      }), "配置中注册。并配置actions为ohos.want.action.sendData。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当分享内容类型为应用所支持的类型时，应用图标将出现在分享面板的分享方式区内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以针对不同的ability，设置不同的名称和图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abilities\": [\n  {\n    \"name\": \"TestUIAbility\",\n    \"srcEntry\": \"./ets/entryability/TestUIAbility.ets\",\n    \"label\": \"$string:EntryAbility_label\", // ability名称\n    \"icon\": \"$media:layered_image\", // ability图标\n    \"description\": \"$string:EntryAbility_desc\",\n    \"startWindowIcon\": \"$media:startIcon\",\n    \"startWindowBackground\": \"$color:start_window_background\",\n    \"exported\": true,\n    \"skills\": [\n      {\n        \"actions\": [\n          \"ohos.want.action.sendData\"\n        ],\n        \"uris\": [\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.text\",\n            \"maxFileSupported\": 1\n          }\n        ]\n      }\n    ]\n  }\n],\n\"extensionAbilities\": [\n  {\n    \"name\": \"TestShareAbility\",\n    \"srcEntry\": \"./ets/abilities/TestShareAbility.ts\",\n    \"type\": \"share\", // 支持分享数据处理\n    \"exported\": true,\n    \"label\": \"$string:xx_label\", // ability名称\n    \"icon\": \"$media:icon\", // ability图标\n    \"description\": \"$string:TestShareAbility_desc\",\n    \"skills\": [\n      {\n        \"actions\": [\n          \"ohos.want.action.sendData\"\n        ],\n        \"uris\": [\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.text\",\n            \"maxFileSupported\": 1\n          }\n        ]\n      }\n    ]\n  }\n]\n"
      })
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