"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["795011"], {
268808(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_set_attributes_events_web_set_dark_mode_web_set_dark_mode_md_617_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-set-attributes-events-web-set-dark-mode-web-set-dark-mode-md-617.json
var site_docs_arkweb_web_set_attributes_events_web_set_dark_mode_web_set_dark_mode_md_617_namespaceObject = JSON.parse('{"id":"arkweb/web-set-attributes-events/web-set-dark-mode/web-set-dark-mode","title":"Web深色模式适配","description":"系统提供浅色和深色的主题模式供用户选择。深色模式在低光环境下能够降低屏幕亮度，减少光线刺激，改善阅读体验。Web组件根据网页样式进行渲染。若网页未适配深色模式，会造成与系统主题的割裂感。网页开发者应考虑用户的主题偏好，适配深色模式，以保证用户体验的一致性。","source":"@site/docs/arkweb/web-set-attributes-events/web-set-dark-mode/web-set-dark-mode.md","sourceDirName":"arkweb/web-set-attributes-events/web-set-dark-mode","slug":"/arkweb/web-set-attributes-events/web-set-dark-mode/","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-set-dark-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Web深色模式适配","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-set-dark-mode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理Cookie及数据存储","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt/"},"next":{"title":"在新窗口中打开页面","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-open-in-new-window/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-set-attributes-events/web-set-dark-mode/web-set-dark-mode.md


const frontMatter = {
	title: 'Web深色模式适配',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-set-dark-mode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web深色模式适配';

const assets = {

};



const toc = [{
  "value": "网页深色模式适配",
  "id": "网页深色模式适配",
  "level": 2
}, {
  "value": "Web深色模式设置",
  "id": "web深色模式设置",
  "level": 2
}, {
  "value": "Web组件背景色适配",
  "id": "web组件背景色适配",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "网页未切换为深色样式",
  "id": "网页未切换为深色样式",
  "level": 3
}, {
  "value": "强制深色模式开启后，网页样式异常",
  "id": "强制深色模式开启后网页样式异常",
  "level": 3
}, {
  "value": "未开启深色模式，但Web网页背景变深",
  "id": "未开启深色模式但web网页背景变深",
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
    img: "img",
    li: "li",
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
        id: "web深色模式适配",
        children: "Web深色模式适配"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供浅色和深色的主题模式供用户选择。深色模式在低光环境下能够降低屏幕亮度，减少光线刺激，改善阅读体验。Web组件根据网页样式进行渲染。若网页未适配深色模式，会造成与系统主题的割裂感。网页开发者应考虑用户的主题偏好，适配深色模式，以保证用户体验的一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb提供灵活控制Web组件深色模式的能力，支持独立于系统进行设置。此外，ArkWeb还可以强制不同网页适配深色模式，以兼容不同的系统主题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网页深色模式适配",
      children: "网页深色模式适配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在网页开发过程中，可以使用color-scheme和prefers-color-scheme属性进行深色模式适配。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "color-scheme是一个CSS属性，用于表示网页支持的配色方案，可以影响表单、滚动条和CSS系统颜色。CSS系统颜色指Web组件内置的颜色，是部分元素未定义样式时应用的默认颜色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当声明支持深色配色方案时，Web组件可以将网页内的表单、滚动条以及使用CSS系统颜色的元素切换为深色样式。如果元素自定义了颜色样式，则不受color-scheme的影响，保持自定义的颜色样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "color-scheme未设置时，默认为normal，表示未指定配色方案，使用Web组件的默认配色方案，表现与light一致。使用样例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* 使用方式1：使用meta标签全局设置 */\n<meta name=\"color-scheme\" content=\"light\"> /* 只支持浅色模式 */\n\n/* 使用方式2：使用style全局设置 */\n:root {\n  color-scheme: light dark; /* 支持浅色和深色模式，跟随系统切换 */\n}\n\n/* 使用方式3：使用style针对特定元素设置 */\ndiv {\n  color-scheme: light; /* 只支持浅色模式 */\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，color-scheme.html页面在Web深色模式关闭和开启时的渲染效果如下图所示。关闭深色模式，网页采用浅色配色方案，input2应用自定义背景样式。开启深色模式，网页采用深色配色方案，input2保持自定义样式，而网页背景、字体、表单、进度条及按钮的颜色均自动切换为深色配色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- color-scheme.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <meta name=\"color-scheme\" content=\"light dark\">\n</head>\n<body>\n  <h1>Example page</h1>\n  <input name=\"input1\" type=\"text\" placeholder=\"please enter text\">\n  <br><br>\n  <input name=\"input2\" type=\"text\" placeholder=\"please enter text\" style=\"background-color: lightgray;\">\n  <br><br>\n  <progress value=\"50\" max=\"100\"></progress>\n  <br><br>\n  <input type=\"checkbox\">\n  <input type=\"checkbox\" checked>\n  <br><br>\n  <button>submit</button>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " color-scheme效果图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(389855)/* ["default"] */.A) + "",
            width: "724",
            height: "410"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "prefers-color-scheme是CSS中的一个媒体查询功能，可以检测系统的主题颜色。网页开发者可以通过该特性，为不同的系统主题颜色定义不同的网页CSS样式，以适应用户的主题偏好。使用样例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<style>\n  /* 默认样式 */\n  body { background-color: White; }\n\n  /* 浅色样式，Web关闭深色模式时覆盖默认样式 */\n  @media (prefers-color-scheme: light) {\n    body { background-color: Gray; }\n  }\n\n  /* 深色样式，Web开启深色模式时覆盖默认样式 */\n  @media (prefers-color-scheme: dark) {\n    body { background-color: Black; }\n  }\n</style>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "color-scheme可声明网页配色方案，切换网页元素的默认样式。然而，其作用范围有限，使用prefers-color-scheme可以更灵活地定义网页深色模式。prefers-color-scheme可以结合color-scheme使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，在color-scheme.html中增加以下样式定义。当Web深色模式开启时，网页将应用深色配色，并应用@media (prefers-color-scheme: dark)中定义的样式，渲染效果如图2所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<style>\n  @media (prefers-color-scheme: dark) {\n    body { background-color: Gray; color: LightYellow; }\n    input { background-color: Lightgray; }\n  }\n</style>\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图2"
            })
          }), " prefers-color-scheme效果图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(506476)/* ["default"] */.A) + "",
            width: "304",
            height: "300"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web深色模式设置",
      children: "Web深色模式设置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#darkmode9",
        children: "darkMode()"
      }), "接口可以配置Web深色模式，默认状态为关闭。应用可设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
        children: "WebDarkMode.Auto"
      }), "，表示Web深色模式跟随系统设置。也可以手动设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
        children: "WebDarkMode.On"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
        children: "WebDarkMode.Off"
      }), "来控制深色模式的开启与关闭。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
        children: "WebDarkMode.On"
      }), "，或设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
        children: "WebDarkMode.Auto"
      }), "并启用系统深色模式时，Web将进入深色模式。在深色模式下，Web会应用媒体查询@media(prefers-color-scheme: dark)中定义的深色样式。如果网页未定义深色样式，则保持原有样式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若要使未适配深色模式的网页强制转换为深色样式，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#forcedarkaccess9",
        children: "forceDarkAccess()"
      }), "接口开启强制深色模式。强制深色模式可以覆盖网页默认样式，转换网页背景和文字的颜色，以适应在深色模式下显示。强制深色模式无法保证所有颜色转换符合预期。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在强制深色模式下，高亮度色值将被转换为适合低光环境的色值，低亮度色值则保持不变。具体色值转换算法沿用Chromium内核标准，随Chromium内核的更新迭代。色值转换只针对不支持深色配色方案的元素。如果网页全局声明支持深色配色方案，则整个网页的色值均不会被Web转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(714795)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若在@media(prefers-color-scheme: dark)中定义了元素的深色样式但未通过color-scheme声明支持深色配色方案，Web会在该深色样式的色值基础上进行转换，如表1所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 深色模式/强制深色模式/color-scheme三者关系"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "深色模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "强制深色模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "color-scheme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "预期结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "关闭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无影响"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页采用color-scheme支持的配色方案。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页采用color-scheme支持的配色方案，并应用@media(prefers-color-scheme: dark)中定义的样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持深色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页采用深色配色方案，并应用@media(prefers-color-scheme: dark)中定义的样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持深色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据算法转换网页高亮元素色值。若网页在@media(prefers-color-scheme: dark)中定义了样式，则会在该样式色值上进行转换。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#forcedarkaccess9",
        children: "forceDarkAccess()"
      }), "接口仅在Web深色模式开启时生效。在下面的示例中，应用设置Web深色模式跟随系统。系统开启深色模式时，Web进入强制深色模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State mode: WebDarkMode = WebDarkMode.Auto;\n  @State access: boolean = true;\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('darkModePage.html'), controller: this.controller })\n        .darkMode(this.mode)\n        .forceDarkAccess(this.access)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resources/rawfile/darkModePage.html页面代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- darkModePage.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <style type=\"text/css\">\n        body { background: LightBlue; color: Black; }\n        @media (prefers-color-scheme: dark) {\n            body { background: LightGray; color: Brown; }\n        }\n    </style>\n</head>\n<body class=\"contentCss\">\n  <p>Dark mode debug page</p>\n  <input name=\"input1\" placeholder=\"please enter text\" style=\"color-scheme: light dark;\">\n  <br><br>\n  <input name=\"input2\" placeholder=\"please enter text\">\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "darkModePage.html页面在深色模式关闭、深色模式开启及强制深色模式开启时的样式如图3所示。关闭深色模式，网页采用默认样式。开启深色模式，input1的配色方案切换为深色，网页应用@media(prefers-color-scheme: dark)中定义的灰色背景、棕色文字样式。开启强制深色模式，input1的配色方案为深色，未被Web转换，而网页背景色、文字颜色及input2背景色均依据（2）中色值转换为（3）所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " Web深色模式和强制深色模式效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(798152)/* ["default"] */.A) + "",
        width: "1027",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件背景色适配",
      children: "Web组件背景色适配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件发生旋转或大小改变等事件时，Web网页尺寸改变，变化过程中可能会漏出Web组件的背景色。深色模式下，建议将Web组件背景色置为黑色，与网页背景保持一致，以提升用户体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件背景色可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "backgroundColor()"
      }), "设置。未设置背景色时，Web组件默认背景色为白色。仅当强制深色模式下，默认背景色变为黑色。未开启强制深色模式时，可通过以下方法进行适配。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用侧设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
            children: "WebDarkMode.On"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
            children: "WebDarkMode.Off"
          }), "控制深色模式开启和关闭时，背景色跟随深色模式开启和关闭状态改变。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State isDark: boolean = false;\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('darkModePage.html'), controller: this.controller })\n        .darkMode(this.isDark ? WebDarkMode.On : WebDarkMode.Off)\n        .backgroundColor(this.isDark ? Color.Black : Color.White)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用侧设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
            children: "WebDarkMode.Auto"
          }), "跟随系统深色模式时，监听系统设置，背景色跟随系统改变。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, ConfigurationConstant, UIAbility, Want, Configuration } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 将当前colorMode放在AppStorage中。\n    AppStorage.setOrCreate<ConfigurationConstant.ColorMode>('currentColorMode', this.context.config.colorMode);\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n  // ...\n  onConfigurationUpdate(newConfig: Configuration): void {\n    // 动态更新深浅色状态。\n    const currentColorMode: ConfigurationConstant.ColorMode | undefined = AppStorage.get('currentColorMode');\n    if (currentColorMode !== newConfig.colorMode) {\n      AppStorage.setOrCreate<ConfigurationConstant.ColorMode>('currentColorMode', newConfig.colorMode);\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { ConfigurationConstant } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State bgColor: Color = Color.White;\n  @StorageProp('currentColorMode') @Watch('onCurrentColorModeChange')\n  currentColorMode: ConfigurationConstant.ColorMode = ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET;\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('darkModePage.html'), controller: this.controller })\n        .darkMode(WebDarkMode.Auto)\n        .backgroundColor(this.bgColor)\n    }\n  }\n  \n  onCurrentColorModeChange(): void {\n    // 根据系统设置切换背景色。\n    if (this.currentColorMode === ConfigurationConstant.ColorMode.COLOR_MODE_DARK) {\n      this.bgColor = Color.Black;\n    } else {\n      this.bgColor = Color.White;\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "网页未切换为深色样式",
      children: "网页未切换为深色样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页未切换为深色样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页未切换为深色样式的原因有多种，可以按以下步骤排查："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查Web是否开启深色模式。Web深色模式接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#darkmode9",
          children: "darkMode()"
        }), "默认状态为关闭，需显式声明为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
          children: "WebDarkMode.On"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webdarkmode9",
          children: "WebDarkMode.Auto"
        }), "，才能开启深色模式。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Web已开启深色模式时，检查网页是否定义深色样式。网页的深色样式需要网页开发者适配。如果未定义深色样式，即使Web开启深色模式，网页样式也会保持不变。若需强制适配，可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#forcedarkaccess9",
          children: "forceDarkAccess()"
        }), "接口开启强制深色模式。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web已开启强制深色模式时，检查网页是否声明支持深色配色方案。通过color-scheme声明支持深色配色方案的网页，在强制深色模式下色值不会被Web转换。同时，如果网页内元素自定义了颜色样式，则不会被color-scheme影响。因此表现为网页样式未切换为深色样式。此时，需要网页开发者进行适配修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "强制深色模式开启后网页样式异常",
      children: "强制深色模式开启后，网页样式异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强制深色模式开启，网页样式转换显示异常，例如字体显示不清、样式不美观或颜色转换不当等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强制深色模式下，Web使用Chromium色值转换算法自动调整元素颜色样式。不同网页的布局和样式写法各异，算法无法确保所有转换均符合预期。建议网页开发者自定义深色样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未开启深色模式但web网页背景变深",
      children: "未开启深色模式，但Web网页背景变深"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件未开启深色模式，但Web网页背景变深。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web网页未设置背景颜色，或者设置背景颜色透明时，会呈现Web组件的背景颜色。因此出现该问题时，可排查Web组件是否设置了深色的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "backgroundColor()"
      }), "。"]
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
389855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798558-d478be1f07f02085635f8ea47c4595fe.png");

},
506476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438253-eead1a19e16df0ffecb4fea0f19e9736.png");

},
714795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
798152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958208-42613db5aea6890ce80427adca683957.png");

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