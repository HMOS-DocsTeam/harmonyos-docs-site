"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["915773"], {
846932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_loading_browsing_web_set_back_forward_cache_web_set_back_forward_cache_md_601_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-loading-browsing-web-set-back-forward-cache-web-set-back-forward-cache-md-601.json
var site_docs_arkweb_web_manage_loading_browsing_web_set_back_forward_cache_web_set_back_forward_cache_md_601_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-loading-browsing/web-set-back-forward-cache/web-set-back-forward-cache","title":"设置Web组件前进后退缓存","description":"Web组件为开发者提供了启用和配置前进后退缓存（以下简称BFCache）的功能。启用此功能后，能够显著提升用户返回至先前浏览网页的速度，尤其对于网络条件不佳的用户，可提供更为流畅的浏览体验。","source":"@site/docs/arkweb/web-manage-loading-browsing/web-set-back-forward-cache/web-set-back-forward-cache.md","sourceDirName":"arkweb/web-manage-loading-browsing/web-set-back-forward-cache","slug":"/arkweb/web-manage-loading-browsing/web-set-back-forward-cache/","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-set-back-forward-cache/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"设置Web组件前进后退缓存","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-set-back-forward-cache","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"加速Web页面的访问","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-predictor/"},"next":{"title":"Web组件在不同的窗口间迁移","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-component-migrate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-loading-browsing/web-set-back-forward-cache/web-set-back-forward-cache.md


const frontMatter = {
	title: '设置Web组件前进后退缓存',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-set-back-forward-cache',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置Web组件前进后退缓存';

const assets = {

};



const toc = [{
  "value": "Web组件开启BFCache",
  "id": "web组件开启bfcache",
  "level": 2
}, {
  "value": "设置缓存的页面数量和页面留存的时间",
  "id": "设置缓存的页面数量和页面留存的时间",
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
        id: "设置web组件前进后退缓存",
        children: "设置Web组件前进后退缓存"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件为开发者提供了启用和配置前进后退缓存（以下简称BFCache）的功能。启用此功能后，能够显著提升用户返回至先前浏览网页的速度，尤其对于网络条件不佳的用户，可提供更为流畅的浏览体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BFCache功能启用后，Web组件会在用户离开当前页面时在内存中保存该页面的快照。当用户在短期内通过Web组件的前进或后退功能重新访问同一页面时，能够迅速恢复页面状态，避免重复发起HTTP请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件开启bfcache",
      children: "Web组件开启BFCache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#initializewebengine",
        children: "initializeWebEngine()"
      }), "初始化ArkWeb内核之前调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#enablebackforwardcache12",
        children: "enableBackForwardCache()"
      }), "来开启BFCache。enableBackForwardCache可以接收一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/kts-apis-webview-backforwardcachesupportedfeatures/kts-apis-webview-backforwardcachesupportedfeatures",
        children: "BackForwardCacheSupportedFeatures"
      }), "参数，用于控制是否允许具备同层渲染特性和视频托管特性的页面进入BFCache。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\n\nexport default class EntryAbility extends UIAbility {\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n        let features = new webview.BackForwardCacheSupportedFeatures();\n        features.nativeEmbed = true;\n        features.mediaTakeOver = true;\n        webview.WebviewController.enableBackForwardCache(features);\n        webview.WebviewController.initializeWebEngine();\n        AppStorage.setOrCreate(\"abilityWant\", want);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置缓存的页面数量和页面留存的时间",
      children: "设置缓存的页面数量和页面留存的时间"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启用BFCache后默认仅能存储一个页面，Web组件默认进入BFCache的页面可保持存活状态600秒。开发者可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setbackforwardcacheoptions12",
        children: "setBackForwardCacheOptions()"
      }), "设置每个Web实例的前进后退缓存策略。包括调整缓存中页面的最大数量，使BFCache能够容纳更多页面，从而在用户连续进行前进后退操作时，提供更快的加载速度。同时，开发者还能修改每个页面在缓存中的停留时间，延长页面在BFCache中的驻留期限，进而优化用户的浏览体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，设置Web组件可以缓存的最大数量为10，每个页面在缓存中停留300秒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Row() {\n        Button('Add options').onClick((event: ClickEvent) => {\n          let options = new webview.BackForwardCacheOptions();\n          options.size = 10;\n          options.timeToLive = 300;\n          this.controller.setBackForwardCacheOptions(options);\n        })\n        Button('Backward').onClick((event: ClickEvent) => {\n          this.controller.backward();\n        })\n        Button('Forward').onClick((event: ClickEvent) => {\n          this.controller.forward();\n        })\n      }\n      Web({ src: 'https://www.example.com', controller: this.controller })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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