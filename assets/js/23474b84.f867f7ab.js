"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["104308"], {
891192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_multimedia_web_full_screen_web_full_screen_md_234_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-multimedia-web-full-screen-web-full-screen-md-234.json
var site_docs_arkweb_web_use_multimedia_web_full_screen_web_full_screen_md_234_namespaceObject = JSON.parse('{"id":"arkweb/web-use-multimedia/web_full_screen/web_full_screen","title":"Web组件支持视频沉浸式全屏播放","description":"Web组件提供了视频进入全屏和退出全屏的事件功能，应用可通过监听这些事件实现进入和退出沉浸式全屏模式。","source":"@site/docs/arkweb/web-use-multimedia/web_full_screen/web_full_screen.md","sourceDirName":"arkweb/web-use-multimedia/web_full_screen","slug":"/arkweb/web-use-multimedia/web_full_screen/","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web_full_screen/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Web组件支持视频沉浸式全屏播放","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web_full_screen","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件支持画中画","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web-picture-in-picture/"},"next":{"title":"使用Web组件打印前端页面","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-print/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-multimedia/web_full_screen/web_full_screen.md


const frontMatter = {
	title: 'Web组件支持视频沉浸式全屏播放',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web_full_screen',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件支持视频沉浸式全屏播放';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
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
        id: "web组件支持视频沉浸式全屏播放",
        children: "Web组件支持视频沉浸式全屏播放"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件提供了视频进入全屏和退出全屏的事件功能，应用可通过监听这些事件实现进入和退出沉浸式全屏模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件引用第三方H5页面加载的视频，当点击视频全屏时，视频仅扩展至整个Web组件区域，无法实现系统全屏显示（如图2所示）。若要达到系统全屏的沉浸式视频播放效果（如图3所示），则需应用监听进入全屏的事件并调整页面其他组件的属性。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "图1 退出全屏模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "图2 非沉浸式全屏模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "图3 沉浸式全屏模式"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onfullscreenenter9",
        children: "onFullScreenEnter"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onfullscreenexit9",
        children: "onFullScreenExit"
      }), "回调监听全屏按键的点击事件。其中，onFullScreenEnter表示Web组件进入全屏模式，onFullScreenExit表示Web组件退出全屏模式。在这两个监听事件中，可根据具体业务场景调整某些全局变量，例如组件的显隐状态、组件的margin属性等，以实现退出和进入沉浸式全屏模式的页面效果，如图1和图3所示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["显隐控制", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility#visibility",
        children: "visibility"
      }), "是ArkUI开发框架提供的组件通用属性。开发者可通过设置组件属性visibility的不同值，控制组件的显隐状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct ShortWebPage {\n  controller: webview.WebviewController = new webview.WebviewController();\n  CONSTANT_HEIGHT = 100;\n  @State marginTop: number = this.CONSTANT_HEIGHT;\n  @State isVisible: boolean = true; // 自定义标志位isVisible，来控制是否需要显示组件\n\n  build() {\n    Column() {\n      Text('TextTextTextText')\n        .width('100%')\n        .height(this.CONSTANT_HEIGHT)\n        .backgroundColor('#e1dede') // 当isVisible标志位为true的时候，组件状态为可见，否则组件状态为不可见，不参与布局、不进行占位\n        .visibility(this.isVisible ? Visibility.Visible :\n          Visibility.None)\n      Web({\n        src: $rawfile('FullScreen.html'), // 示例网址\n        controller: this.controller\n      })\n        .onFullScreenEnter((event) => {\n          console.info('onFullScreenEnter...');\n          // 当全屏的时候，isVisible标志位为false，组件状态为不可见，不参与布局、不进行占位\n          this.isVisible = false;\n        })\n        .onFullScreenExit(() => {\n          console.info('onFullScreenExit...');\n          // 当退出全屏的时候，isVisible标志位为true，组件状态为可见\n          this.isVisible = true;\n        })\n        .width('100%')\n        .height('100%')\n        .zIndex(10)\n        .zoomAccess(true)\n    }.width('100%').height('100%')\n  }\n}\n"
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