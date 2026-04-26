"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["653239"], {
643311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_process_page_content_web_safe_area_insets_web_safe_area_insets_md_1cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-process-page-content-web-safe-area-insets-web-safe-area-insets-md-1cd.json
var site_docs_arkweb_web_process_page_content_web_safe_area_insets_web_safe_area_insets_md_1cd_namespaceObject = JSON.parse('{"id":"arkweb/web-process-page-content/web-safe-area-insets/web-safe-area-insets","title":"网页中安全区域计算和避让适配","description":"早期设备屏幕多为矩形，应用界面能够完整展示。随着全面屏、刘海屏等异形屏幕的普及，屏幕边缘可能出现圆角、摄像头或系统导航条，导致界面部分被遮挡。","source":"@site/docs/arkweb/web-process-page-content/web-safe-area-insets/web-safe-area-insets.md","sourceDirName":"arkweb/web-process-page-content/web-safe-area-insets","slug":"/arkweb/web-process-page-content/web-safe-area-insets/","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-safe-area-insets/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"网页中安全区域计算和避让适配","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-safe-area-insets","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件的PDF文档预览能力","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-pdf-preview/"},"next":{"title":"使用Web组件菜单处理网页内容","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-menu/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-process-page-content/web-safe-area-insets/web-safe-area-insets.md


const frontMatter = {
	title: '网页中安全区域计算和避让适配',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-safe-area-insets',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '网页中安全区域计算和避让适配';

const assets = {

};



const toc = [{
  "value": "开启Web组件沉浸式效果",
  "id": "开启web组件沉浸式效果",
  "level": 2
}, {
  "value": "设置网页在可视窗口中的布局方式",
  "id": "设置网页在可视窗口中的布局方式",
  "level": 2
}, {
  "value": "网页元素避让适配",
  "id": "网页元素避让适配",
  "level": 2
}, {
  "value": "网页元素避让非安全区域最佳实践",
  "id": "网页元素避让非安全区域最佳实践",
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
    meta: "meta",
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
        id: "网页中安全区域计算和避让适配",
        children: "网页中安全区域计算和避让适配"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "早期设备屏幕多为矩形，应用界面能够完整展示。随着全面屏、刘海屏等异形屏幕的普及，屏幕边缘可能出现圆角、摄像头或系统导航条，导致界面部分被遮挡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全区域是指屏幕中未被设备硬件或系统UI遮挡的区域，不与系统非安全区域（如状态栏、挖孔区和导航栏）重叠。应用的布局默认限定在安全区域内，但系统提供沉浸式布局能力，允许应用通过配置使界面扩展至非安全区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在沉浸式效果下，Web组件中的网页元素可能会被状态栏、挖孔区及导航条遮挡。此情况下，需要网页开发者进行避让适配，确保网页中的文字、表单和交互组件等关键内容避让非安全区域，从而保证用户可以完整地阅读和操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件提供利用W3C CSS进行安全区域计算和避让适配的能力，支持异形屏幕设备在沉浸式效果下网页的正常显示，网页开发者可以利用该能力对被遮挡的元素进行避让。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开启web组件沉浸式效果",
      children: "开启Web组件沉浸式效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件默认布局在安全区域内。开启", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects",
        children: "沉浸式效果"
      }), "后，Web网页将扩展至状态栏和导航栏，从而最大化利用屏幕可视区域，增强视觉连贯性，改善用户的UI体验。开发者可通过以下方式启用Web组件的沉浸式效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlayoutfullscreen9",
            children: "setWindowLayoutFullScreen"
          }), "设置应用窗口全屏。窗口全屏时，Web组件可布局至非安全区域。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.getMainWindow().then(window => {\n      // 设置窗口全屏\n      window.setWindowLayoutFullScreen(true);\n    });\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .width('100%').height('100%')\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#expandsafearea",
            children: "expandSafeArea"
          }), "设置Web组件扩展安全区域，可以自定义扩展类型和方向。下面的示例中，Web组件可扩展至状态栏和导航栏，实现沉浸式效果。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .width('100%').height('100%')\n        // 扩展至系统默认非安全区域（状态栏、导航栏），并设置只扩展上方区域和下方区域\n        .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置网页在可视窗口中的布局方式",
      children: "设置网页在可视窗口中的布局方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["viewport-fit用于设置网页在可视窗口中的布局方式，是", (0,jsx_runtime.jsx)(_components.meta, {
        name: "viewport"
      }), "标签的一个属性。设置方式如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<meta name='viewport' content='viewport-fit=cover'>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表1所示，viewport-fit默认为auto，与contain表现一致，表示网页内容全部包含在安全区域内。cover表示网页内容完全覆盖可视窗口，可能与非安全区域发生重叠。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " viewport-fit属性取值说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "viewport-fit取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "auto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值，与contain表现一致。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无需特殊适配的普通网页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页内容被严格限制在安全区域内，不与非安全区域重叠。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要确保完整显示的网页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页内容完全覆盖可视窗口，可能与非安全区域重叠。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要最大化渲染可视窗口的网页，由网页开发者进行避让适配。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664585)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件当前还不支持开启沉浸式效果时将网页内容限制在安全区域内。因此，当设置viewport-fit=contain时，表现与cover一致，网页内容完全填充Web组件区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网页元素避让适配",
      children: "网页元素避让适配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "safe-area-inset-*是一组CSS环境变量，定义了安全区域与Web可视窗口边缘的距离，即网页内容要完整显示时，在top、right、bottom和left四个方向上需要避让的距离，如下图所示。不同于其他CSS属性，环境变量的属性名称对大小写敏感。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " safe-area-inset-*示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(33873)/* ["default"] */.A) + "",
        width: "737",
        height: "820"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设置viewport-fit=cover时，ArkWeb内核将持续监测Web组件及系统非安全区域的位置与尺寸，根据两者的重叠部分计算网页在四个方向上需避让的具体距离，并设置给环境变量safe-area-inset-*。在矩形显示器（如普通PC/2in1设备的屏幕）上，这些值为零。在非矩形显示器（如圆形表盘或移动设备屏幕）上，safe-area-inset-*所界定的内矩形区域即为安全区域，网页内容在该区域内可完整显示，避免被非矩形显示区域裁剪。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页元素的避让适配依赖CSS函数env()，该函数用于获取浏览器或系统提供的环境变量。使用env()函数可以获取safe-area-inset-*的值。网页开发者无需关注设备非安全区域的具体位置和尺寸，在CSS样式中应用env(safe-area-inset-*)即可定义网页需要避让的距离，实现跨设备的避让。语法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 分别表示上、右、下、左，四个方向上的避让值 */\nenv(safe-area-inset-top);\nenv(safe-area-inset-right);\nenv(safe-area-inset-bottom);\nenv(safe-area-inset-left);\n\n/* 基于fallback设置避让值，第二个参数表示环境变量不存在时的回退值 */\n/* 下述长度单位参见：https://developer.mozilla.org/zh-CN/docs/Web/CSS/length */\nenv(safe-area-inset-top, 20px);\nenv(safe-area-inset-right, 1em);\nenv(safe-area-inset-bottom, 0.5vh);\nenv(safe-area-inset-left, 1.4rem);\n\n/* env()可基于部分数学计算函数`calc()`,`min()`,`max()`进行组合计算 */\ncalc(env(safe-area-inset-top) + 10px)\nmin(env(safe-area-inset-left), 50px)\nmax(env(safe-area-inset-bottom), 30px)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(580356)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用env(safe-area-inset-*)进行避让时需要设置viewport-fit=cover。viewport-fit=contain时，env(safe-area-inset-*)值为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网页元素避让非安全区域最佳实践",
      children: "网页元素避让非安全区域最佳实践"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件启用沉浸式效果时，渲染内容可能与非安全区域重叠，影响用户的阅读和交互，如图2所示。非安全区域包括顶部状态栏、屏幕挖孔区和底部导航条。在沉浸式效果下，index.html网页的标题栏被屏幕挖孔区遮挡，底部的Tab区域与导航条发生重叠。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Web组件开启沉浸式效果时网页元素被非安全区域遮挡"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(811348)/* ["default"] */.A) + "",
        width: "296",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, viewport-fit=cover\">\n    <style>\n        body {\n            margin: 0;\n            background: #f6f6f6;\n        }\n        .edge {\n            position: fixed;\n            display: flex;\n            width: 100%;\n            background: #fefefe;\n        }\n        .title-bar {\n            align-items: center;\n            justify-content: center;\n            top: 0;\n            height: 40px;\n        }\n        .content {\n            margin: 8px;\n            padding-top: 40px;\n        }\n        .tabs {\n            justify-content: space-around;\n            bottom: 0;\n            height: 40px;\n        }\n        .tab {\n            padding: 10px;\n        }\n        .tab.active {\n            color: Blue;\n        }\n    </style>\n</head>\n<body>\n    <div>\n        <div class=\"edge title-bar\">Example page</div>\n        <div class=\"content\">\n            <p>Contents of page</p>\n        </div>\n    </div>\n    <div class=\"edge tabs\">\n        <div class=\"tab active\">Tab1</div>\n        <div class=\"tab\">Tab2</div>\n        <div class=\"tab\">Tab3</div>\n    </div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页开发者可利用env(safe-area-inset-*)定义CSS样式，确保文字、图片和交互组件避让非安全区域。在以下示例中，通过env(safe-area-inset-*)更新了index.html的CSS样式，使网页主要内容避让非安全区域，效果见图3。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".title-bar {\n    align-items: center;\n    justify-content: center;\n    top: 0;\n    height: 40px;\n    padding-top: env(safe-area-inset-top); /* 设置padding-top避让上方非安全区域 */\n}\n.content {\n    margin: 8px;\n    padding-top: calc(env(safe-area-inset-top) + 40px); /* 同步title-bar增加padding-top高度 */\n}\n.tabs {\n    justify-content: space-around;\n    bottom: 0;\n    height: calc(env(safe-area-inset-bottom) + 40px); /* 增加tab区域高度以避让下方非安全区域 */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " Web组件开启沉浸式效果时网页元素避让非安全区域"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(798615)/* ["default"] */.A) + "",
        width: "315",
        height: "644"
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
33873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958234-05726c4ff8b09fff043fe96b2f1cbf3b.png");

},
798615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798586-65a46d1bcfbfcaba9ada6a3a85f337d2.png");

},
664585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
580356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
811348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478235-33d9ad6c6444597e732cc27526feafcd.png");

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