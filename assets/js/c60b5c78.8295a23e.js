"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["346804"], {
479688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_render_layout_web_fit_content_web_fit_content_md_c60_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-render-layout-web-fit-content-web-fit-content-md-c60.json
var site_docs_arkweb_web_render_layout_web_fit_content_web_fit_content_md_c60_namespaceObject = JSON.parse('{"id":"arkweb/web-render-layout/web-fit-content/web-fit-content","title":"Web组件大小自适应页面内容布局","description":"使用Web组件大小自适应页面内容布局模式layoutMode(WebLayoutMode.FIT\\\\_CONTENT)时，能使Web组件的大小根据页面内容自适应变化。","source":"@site/docs/arkweb/web-render-layout/web-fit-content/web-fit-content.md","sourceDirName":"arkweb/web-render-layout/web-fit-content","slug":"/arkweb/web-render-layout/web-fit-content/","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-fit-content/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Web组件大小自适应页面内容布局","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-fit-content","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件渲染模式","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-render-mode/"},"next":{"title":"优化跳转至新Web组件过程中的页面闪烁现象","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-router-flash-optimization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-render-layout/web-fit-content/web-fit-content.md


const frontMatter = {
	title: 'Web组件大小自适应页面内容布局',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-fit-content',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件大小自适应页面内容布局';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "规格与约束",
  "id": "规格与约束",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "设置了FIT_CONTENT，但Web组件内仍出现滚动条",
  "id": "设置了fit_content但web组件内仍出现滚动条",
  "level": 3
}, {
  "value": "设置FIT_CONTENT后，页面白屏或页面消失不显示",
  "id": "设置fit_content后页面白屏或页面消失不显示",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    meta: "meta",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "web组件大小自适应页面内容布局",
        children: "Web组件大小自适应页面内容布局"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Web组件大小自适应页面内容布局模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#layoutmode11",
        children: "layoutMode"
      }), "(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#weblayoutmode11",
        children: "WebLayoutMode"
      }), ".FIT_CONTENT)时，能使Web组件的大小根据页面内容自适应变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多设备适配Web页面请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-adaptation",
        children: "Web响应式布局"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用于Web组件需要根据网页高度撑开，与其他系统组件一起滚动的场景，如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浏览长文章。Web组件同一布局层级有其他系统组件，如评论区、工具栏等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长页面首页。Web组件同一布局层级有其他系统组件，如宫格菜单。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Web布局跟随系统："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图一所示，Web组件的高度为一屏，H5页面的高度为8000px，大于Web组件的高度，此时Web组件内部将会出现滚动条。滚动Web组件时，页面的一部分将被隐藏，且不能充分利用整个屏幕展示Web页面，这会导致用户体验不佳。实际效果如图二所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "图一 Web布局跟随系统"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "图二 Web布局跟随系统实机效果"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Web组件大小自适应页面内容布局："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图三所示，Web组件高度将自动与H5页面保持一致。右图显示，Web组件与H5页面的高度均为8000px。此时，Web组件内部不会生成滚动条，在滑动页面时，可同时带动其他ArkUI组件滚动，以整个屏幕展示Web组件。实际效果见图四。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "图三 Web组件大小自适应页面内容布局"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "图四 Web组件大小自适应页面内容布局实机效果"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格与约束",
      children: "规格与约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["建议配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-render-layout/web-render-mode",
          children: "渲染模式"
        }), "为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-render-layout/web-render-mode#%E5%90%8C%E6%AD%A5%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",
          children: "同步渲染模式"
        }), "，避免因为组件大小超出限制导致异常场景（白屏，布局错误）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["建议配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#overscrollmode11",
          children: "过滚动模式(overScrollMode)"
        }), "为关闭状态。当过滚动模式开启时，当用户在Web界面上滑动到边缘时，Web会通过弹性动画弹回界面，会与Scroll组件的回弹相互冲突，影响体验。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#keyboardavoidmode12",
          children: "键盘避让(keyboardAvoidMode)"
        }), "属性配置为RESIZE_CONTENT时，该避让模式不生效。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持对页面进行缩放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持通过Web组件的height属性修改组件高度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持根据页面内容自适应组件高度，不支持自适应宽度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持瀑布流页面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebHeightPage {\n  private webviewController: WebviewController = new webview.WebviewController();\n  private scroller: Scroller = new Scroller();\n\n  build() {\n    Navigation() {\n      Column() {\n        Scroll(this.scroller) {\n          Column() {\n            Web({\n              src: $rawfile('fit_content.html'),\n              controller: this.webviewController,\n              renderMode: RenderMode.SYNC_RENDER // 设置为同步渲染模式\n            })\n              .layoutMode(WebLayoutMode.FIT_CONTENT) // 设置为Web组件大小自适应页面内容\n              .overScrollMode(OverScrollMode.NEVER) // 设置过滚动模式为关闭状态\n            Text('Comments')\n              .fontSize(28)\n              .fontColor('#FF0F0F')\n              .height(100)\n              .width('100%')\n              .backgroundColor('#f89f0f')\n          }\n        }\n      }\n    }\n    .title('Title')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fit_content.html页面代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- fit_content.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\">\n    <title>Fit-Content</title>\n</head>\n<body>\n<div>\n    <div><h2 id=\"使用场景\">使用场景</h2>\n        <p>ArkWeb（方舟Web）提供了Web组件，用于在应用程序中显示Web页面内容。常见使用场景包括：</p>\n        <ul>\n            <li><p>\n                应用集成Web页面：应用可以在页面中使用Web组件，嵌入Web页面内容，以降低开发成本，提升开发、运营效率。</p>\n            </li>\n            <li><p>\n                浏览器网页浏览场景：浏览器类应用可以使用Web组件，打开三方网页，使用无痕模式浏览Web页面，设置广告拦截等。</p>\n            </li>\n            <li><p>小程序：小程序类宿主应用可以使用Web组件，渲染小程序的页面。</p></li>\n        </ul>\n    </div>\n    <div><h2 id=\"能力范围\">能力范围</h2>\n        <p>Web组件为开发者提供了丰富的控制Web页面能力。包括：</p>\n        <ul>\n            <li><p>Web页面加载：声明式加载Web页面和离屏加载Web页面等。</p></li>\n            <li><p>生命周期管理：组件生命周期状态变化，通知Web页面的加载状态变化等。</p></li>\n            <li><p>常用属性与事件：User-Agent管理、Cookie与存储管理、字体与深色模式管理、权限管理等。</p>\n            </li>\n            <li><p>\n                与应用界面交互：自定义文本选择菜单、上下文菜单、文件上传界面等与应用界面交互能力。</p>\n            </li>\n            <li><p>App通过JavaScriptProxy，与Web页面进行JavaScript交互。</p></li>\n            <li><p>安全与隐私：无痕浏览模式、广告拦截、坚盾守护模式等。</p></li>\n            <li><p>维测能力：DevTools工具调试能力，使用crashpad收集Web组件崩溃信息。\n            </p></li>\n            <li><p>\n                其他高阶能力：与系统组件同层渲染、Web组件的网络托管、Web组件的媒体播放托管、Web组件输入框拉起自定义输入法、等。</p>\n            </li>\n        </ul>\n    </div>\n    <div><h2 id=\"约束与限制\">约束与限制</h2>\n        <ul>\n            <li>Web内核版本：ArkWeb基于Chromium内核开发，使用的Chromium版本为M114。</li>\n        </ul>\n    </div>\n</div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置了fit_content但web组件内仍出现滚动条",
      children: "设置了FIT_CONTENT，但Web组件内仍出现滚动条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["内部H5页面高度超过了7680px（物理像素），但没有设置渲染模式为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-render-layout/web-render-mode#%E5%90%8C%E6%AD%A5%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",
          children: "同步渲染模式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["未配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#metaviewport12",
          children: "metaviewport"
        }), "属性。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["更改渲染模式为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-render-layout/web-render-mode#%E5%90%8C%E6%AD%A5%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",
          children: "同步渲染模式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在H5页面增加meta配置", (0,jsx_runtime.jsx)(_components.meta, {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置fit_content后页面白屏或页面消失不显示",
      children: "设置FIT_CONTENT后，页面白屏或页面消失不显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能的原因："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "核心内容dom节点高度为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "css样式height：<number> vh和Web组件大小自适应页面布局存在计算冲突，请检查height：<number> vh是否是由body节点以内的第一个高度css样式。如以下结构，id为2的dom节点高度将为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<body>\n  <div id = \"1\">\n    <div id = \"2\" style = \"height: 100vh\">子dom</div>\n    <div id = \"3\" style = \"height: 20px\">子dom</div>\n  </div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子dom使用具体高度样式撑开父元素。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<body>\n  <div id = \"1\">\n    <div id = \"2\"><div style = \"height: 20px\"></div></div>\n    <div id = \"3\" style = \"height: 20px\">子dom</div>\n  </div>\n</body>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "父元素使用实际高度样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<body>\n  <div id = \"1\">\n    <div id = \"2\" style = \"height: 20px\">子dom</div>\n    <div id = \"3\" style = \"height: 20px\">子dom</div>\n  </div>\n</body>\n"
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