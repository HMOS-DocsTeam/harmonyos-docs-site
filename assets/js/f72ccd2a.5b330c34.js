"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["144198"], {
654964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_content_scrolling_web_content_scrolling_md_f72_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-content-scrolling-web-content-scrolling-md-f72.json
var site_docs_arkweb_web_manage_page_interaction_web_content_scrolling_web_content_scrolling_md_f72_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-content-scrolling/web-content-scrolling","title":"Web页面显示内容滚动","description":"当Web页面的内容高度或宽度超过可视区域时，页面才能滚动。Web页面滚动有多种方式，包括使用外接设备、ArkTS侧接口调用和JS侧接口调用。","source":"@site/docs/arkweb/web-manage-page-interaction/web-content-scrolling/web-content-scrolling.md","sourceDirName":"arkweb/web-manage-page-interaction/web-content-scrolling","slug":"/arkweb/web-manage-page-interaction/web-content-scrolling/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-content-scrolling/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Web页面显示内容滚动","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-content-scrolling","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件嵌套滚动","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-nested-scrolling/"},"next":{"title":"Web组件对接软键盘","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-docking-softkeyboard/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-content-scrolling/web-content-scrolling.md


const frontMatter = {
	title: 'Web页面显示内容滚动',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-content-scrolling',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web页面显示内容滚动';

const assets = {

};



const toc = [{
  "value": "使用外接设备控制Web页面滚动",
  "id": "使用外接设备控制web页面滚动",
  "level": 2
}, {
  "value": "调用ArkTS侧接口控制Web页面滚动",
  "id": "调用arkts侧接口控制web页面滚动",
  "level": 2
}, {
  "value": "调用JS侧接口控制Web页面滚动",
  "id": "调用js侧接口控制web页面滚动",
  "level": 2
}, {
  "value": "点击状态栏回顶",
  "id": "点击状态栏回顶",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "web页面显示内容滚动",
        children: "Web页面显示内容滚动"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Web页面的内容高度或宽度超过可视区域时，页面才能滚动。Web页面滚动有多种方式，包括使用外接设备、ArkTS侧接口调用和JS侧接口调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用外接设备控制web页面滚动",
      children: "使用外接设备控制Web页面滚动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用以下方式，通过触屏、触摸板和鼠标滚轮控制Web页面滚动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过触屏控制Web页面滚动：支持在触摸屏上单指上下左右滑动可以控制页面滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过触摸板控制Web页面滚动：支持在笔记本触摸板或者外接触摸板双指上下左右滑动，可以控制页面滚动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过鼠标滚轮控制Web页面滚动：支持用鼠标滚轮上下滑动来控制页面滚动。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用arkts侧接口控制web页面滚动",
      children: "调用ArkTS侧接口控制Web页面滚动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#scrollto",
            children: "scrollTo"
          }), "：在指定时间内，将页面滚动到指定的绝对位置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回页面顶部。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.webController.scrollTo(0, 0);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#scrollby",
            children: "scrollBy"
          }), "：在指定时间内将页面滚动指定的偏移量。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以作为Web组件嵌套滚动中，控制Web组件滚动的接口，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkweb/web-manage-page-interaction/web-nested-scrolling#%E6%BB%9A%E5%8A%A8%E5%81%8F%E7%A7%BB%E9%87%8F%E7%94%B1%E6%BB%9A%E5%8A%A8%E7%88%B6%E7%BB%84%E4%BB%B6%E7%BB%9F%E4%B8%80%E6%B4%BE%E5%8F%91",
            children: "滚动偏移量由滚动父组件统一派发"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#pageup",
            children: "pageUp"
          }), "：将Web组件的内容向上滚动半个视口大小或者滚动到页面最顶部，通过top入参控制。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#pagedown",
            children: "pageDown"
          }), "：将Web组件的内容向下滚动半个视口大小或者滚动到页面最底部，通过bottom入参控制。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用js侧接口控制web页面滚动",
      children: "调用JS侧接口控制Web页面滚动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "scrollBy：相对当前滚动位置滚动一定距离（正数向下/右，负数向上/左）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "window.scrollBy(deltaX, deltaY);// deltaX是元素要在横轴上滚动的距离，deltaY是元素要在纵轴上滚动的距离。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "渐进式滚动（如“阅读更多”按钮）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "document.getElementById(\"read-more\").addEventListener(\"click\", ()=>{\n  window.scrollBy(0, 300);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "scrollTo：将页面滚动到绝对坐标位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "window.scrollTo(x, y);// X是你想要显示在左上角的元素沿水平轴的像素，Y是你想要显示在左上角的元素沿垂直轴的像素。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 返回页面顶部。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "window.scrollTo(0, 0);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 跳转到页面特定位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "window.scrollTo(0, 500); // 滚动到某个固定像素位置（如：500px）\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "点击状态栏回顶",
      children: "点击状态栏回顶"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Web页面处于非顶部状态或向下抛滑时，此时若需返回Web页面顶部，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#backtotop22",
        children: "backToTop"
      }), "方法，开启后通过点击状态栏，打断抛滑并将Web页面滚动到页面顶部。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        .backToTop(true)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的HTML文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" id=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <style>\n        .blue {\n          background-color: lightblue;\n        }\n        .green {\n          background-color: lightgreen;\n        }\n        .blue, .green {\n         font-size:16px;\n         height:200px;\n         text-align: center;       /* 水平居中 */\n         line-height: 200px;       /* 垂直居中（值等于容器高度） */\n        }\n    </style>\n</head>\n<body>\n<div class=\"blue\" >webArea</div>\n<div class=\"green\">webArea</div>\n<div class=\"blue\">webArea</div>\n<div class=\"green\">webArea</div>\n<div class=\"blue\">webArea</div>\n<div class=\"green\">webArea</div>\n<div class=\"blue\">webArea</div>\n<div class=\"green\">webArea</div>\n<div class=\"blue\">webArea</div>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "效果展示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(816434)/* ["default"] */.A) + "",
            width: "445",
            height: "960"
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
816434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438261-e8a3f9e9767734569d5d0d44dc357f42.gif");

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