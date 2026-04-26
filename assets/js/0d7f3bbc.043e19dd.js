"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["863987"], {
305071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_render_layout_web_getpage_height_web_getpage_height_md_0d7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-render-layout-web-getpage-height-web-getpage-height-md-0d7.json
var site_docs_arkweb_web_render_layout_web_getpage_height_web_getpage_height_md_0d7_namespaceObject = JSON.parse('{"id":"arkweb/web-render-layout/web-getpage-height/web-getpage-height","title":"获取网页内容高度","description":"通过调用getPageHeight可获取当前网页内容的实际高度，开发者可以根据具体需求选择合适的方法。","source":"@site/docs/arkweb/web-render-layout/web-getpage-height/web-getpage-height.md","sourceDirName":"arkweb/web-render-layout/web-getpage-height","slug":"/arkweb/web-render-layout/web-getpage-height/","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-getpage-height/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"获取网页内容高度","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-getpage-height","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"优化跳转至新Web组件过程中的页面闪烁现象","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-router-flash-optimization/"},"next":{"title":"应用侧调用前端页面函数","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-render-layout/web-getpage-height/web-getpage-height.md


const frontMatter = {
	title: '获取网页内容高度',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-getpage-height',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '获取网页内容高度';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "普通静态展示页面",
  "id": "普通静态展示页面",
  "level": 2
}, {
  "value": "复杂动态网页使用JSBridge传递特定回调",
  "id": "复杂动态网页使用jsbridge传递特定回调",
  "level": 2
}, {
  "value": "加载普通网页",
  "id": "加载普通网页",
  "level": 3
}, {
  "value": "加载大图片的网页",
  "id": "加载大图片的网页",
  "level": 3
}, {
  "value": "加载大量图片的网页",
  "id": "加载大量图片的网页",
  "level": 3
}, {
  "value": "无法使用JSBridge场景",
  "id": "无法使用jsbridge场景",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取网页内容高度",
        children: "获取网页内容高度"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getpageheight",
        children: "getPageHeight"
      }), "可获取当前网页内容的实际高度，开发者可以根据具体需求选择合适的方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在网页加载过程中，获取的高度可能不够精确，特别是在网页还未渲染完成时。因为动态内容加载后会更新这个值。网页内容可能需要长时间加载。目前网站为优化首次加载速度，会使用动态网页加载技术，用户在看到网页首帧时，页面资源还在动态加载页面，特别是包含图片、动态内容的页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["非静态网页不建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpageend",
        children: "onPageEnd"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpagevisible9",
        children: "onPageVisible"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onfirstcontentfulpaint10",
        children: "onFirstContentfulPaint"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onfirstmeaningfulpaint12",
        children: "onFirstMeaningfulPaint"
      }), "事件等Web组件生命周期回调和Web性能指标回调中获取。需要根据当前网页的特点，通过JSBridge或延迟等方案，在前端特定的回调通知里获取当前网页内容的实际高度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "普通静态展示页面",
      children: "普通静态展示页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "普通静态网页，可以在onPageEnd等Web组件生命周期回调和Web性能指标回调中通过getPageHeight获取网页内容的高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Row() {\n      Column() {\n        Web({ src: $rawfile('index.html'), controller: this.controller })\n          .onPageEnd(() => {\n            console.info(\"page height: onPageEnd: \" + this.controller.getPageHeight());\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复杂动态网页使用jsbridge传递特定回调",
      children: "复杂动态网页使用JSBridge传递特定回调"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态网页可以通过JSBridge传递特定回调，通知到应用侧调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\nclass TestClass {\n  testController: webview.WebviewController;\n\n  constructor(controller: webview.WebviewController) {\n    this.testController = controller;\n  }\n\n  notifyToGet(): void {\n    console.info(\"page height: \" + this.testController.getPageHeight());\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State jsbObj: TestClass = new TestClass(this.controller);\n\n  build() {\n    Row() {\n      Column() {\n        Web({ src: $rawfile('index.html'), controller: this.controller })\n          .javaScriptAccess(true)\n          .javaScriptProxy({\n            object: this.jsbObj,\n            name: \"jsbObj\",\n            methodList: [\"notifyToGet\"],\n            controller: this.controller\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "加载普通网页",
      children: "加载普通网页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "普通网页可以通过load事件，在网页的所有资源都完全加载完成后触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前端代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Title</title>\n</head>\n<body>\n<script>\n    window.addEventListener(\"load\", function() {\n        if (typeof jsbObj !== 'undefined') {\n            jsbObj.notifyToGet();\n        } else {\n            console.info(\"jsbObj is undefined\");\n        }\n    })\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "加载大图片的网页",
      children: "加载大图片的网页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当网页含有大图片时，可使用图片加载完成回调触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在前端代码中，请将示例图片路径替换为实际使用的图片资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Title</title>\n</head>\n<body>\n<img src=\"example.jpg\" id=\"largeImage\" alt=\"Large Image\">\n<script>\n    var img = document.getElementById('largeImage');\n\n    img.addEventListener('load', function() {\n        if (typeof jsbObj !== 'undefined') {\n            jsbObj.notifyToGet();\n        } else {\n            console.info(\"jsbObj is error\");\n        }\n    });\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "加载大量图片的网页",
      children: "加载大量图片的网页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对图片密集网页，在所有图片加载完成后触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在前端代码中，请替换图片为真实图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Title</title>\n</head>\n<body>\n    <img src=\"example1.jpg\" >\n    <img src=\"example2.jpg\" >\n<script>\n    function waitForImages() {\n        const images = Array.from(document.images);\n        const promises = images.map(img => {\n            if (img.complete) return Promise.resolve();\n            return new Promise(resolve => {\n                img.onload = img.onerror = resolve;\n            });\n        });\n\n        return Promise.all(promises).then(() => {\n            if (typeof jsbObj !== 'undefined') {\n                jsbObj.notifyToGet();\n            } else {\n                console.info(\"jsbObj is error\");\n            }\n        })\n    }\n    document.addEventListener(\"DOMContentLoaded\", waitForImages);\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无法使用jsbridge场景",
      children: "无法使用JSBridge场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在无法使用JSBridge的场景下，可以通过添加setTimeout等函数来延迟获取当前页面的高度。具体的延迟时间可以根据网页的复杂度来确定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Row() {\n      Column() {\n        Web({ src: $rawfile('index.html'), controller: this.controller })\n          .onPageEnd(() => {\n            setTimeout(()=>{\n                console.info(\"page height: onPageEnd: setTimeout: \" + this.controller.getPageHeight());\n            },2000)\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
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