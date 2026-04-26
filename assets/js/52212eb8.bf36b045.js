"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["358173"], {
155816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_same_layer_web_same_layer_md_522_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-same-layer-web-same-layer-md-522.json
var site_docs_arkweb_web_same_layer_web_same_layer_md_522_namespaceObject = JSON.parse('{"id":"arkweb/web-same-layer/web-same-layer","title":"同层渲染","description":"在系统中，应用可以使用Web组件加载Web网页。当非系统框架的UI组件功能或性能不如系统组件时，可使用同层渲染技术，通过ArkUI组件渲染这些组件（简称为同层组件）。","source":"@site/docs/arkweb/web-same-layer/web-same-layer.md","sourceDirName":"arkweb/web-same-layer","slug":"/arkweb/web-same-layer/","permalink":"/harmonyos-docs-site/arkweb/web-same-layer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"同层渲染","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-same-layer","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件的智能分词能力","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-data-detector/"},"next":{"title":"使用离线Web组件","permalink":"/harmonyos-docs-site/arkweb/web-offline-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-same-layer/web-same-layer.md


const frontMatter = {
	title: '同层渲染',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-same-layer',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '同层渲染';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "Web网页",
  "id": "web网页",
  "level": 3
}, {
  "value": "三方UI框架",
  "id": "三方ui框架",
  "level": 3
}, {
  "value": "整体架构",
  "id": "整体架构",
  "level": 2
}, {
  "value": "规格约束",
  "id": "规格约束",
  "level": 2
}, {
  "value": "可被同层渲染的ArkUI组件",
  "id": "可被同层渲染的arkui组件",
  "level": 3
}, {
  "value": "Web网页的同层渲染标签",
  "id": "web网页的同层渲染标签",
  "level": 3
}, {
  "value": "Web页面中同层渲染输入框",
  "id": "web页面中同层渲染输入框",
  "level": 2
}, {
  "value": "绘制XComponent+AVPlayer和Button组件",
  "id": "绘制xcomponentavplayer和button组件",
  "level": 2
}, {
  "value": "同层标签设置为最高层级",
  "id": "同层标签设置为最高层级",
  "level": 2
}, {
  "value": "同层渲染纹理贴图对齐方式",
  "id": "同层渲染纹理贴图对齐方式",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "同层渲染组件被拉伸该如何解决？",
  "id": "同层渲染组件被拉伸该如何解决",
  "level": 3
}, {
  "value": "如何将同层渲染组件捕获到的事件透传到web前端？",
  "id": "如何将同层渲染组件捕获到的事件透传到web前端",
  "level": 3
}, {
  "value": "同层渲染页面显示该插件不支持该如何解决？",
  "id": "同层渲染页面显示该插件不支持该如何解决",
  "level": 3
}, {
  "value": "涉及界面交互的ArkUI组件（如TextInput等）光标与输入框错位该如何解决？",
  "id": "涉及界面交互的arkui组件如textinput等光标与输入框错位该如何解决",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    embed: "embed",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    input: "input",
    li: "li",
    object: "object",
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
    video: "video",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "同层渲染",
        children: "同层渲染"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在系统中，应用可以使用Web组件加载Web网页。当非系统框架的UI组件功能或性能不如系统组件时，可使用同层渲染技术，通过ArkUI组件渲染这些组件（简称为同层组件）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web网页",
      children: "Web网页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "小程序的地图组件，可以使用ArkUI的XComponent组件渲染来提升性能。小程序的输入框组件，可以使用ArkUI的TextInput组件渲染，达到与系统应用一致的输入体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在网页侧，应用开发者可将", (0,jsx_runtime.jsx)(_components.embed, {}), "、", (0,jsx_runtime.jsxs)(_components.object, {
          children: ["的网页UI组件（简称为同层标签），按一定规则进行同层渲染，详细规格见同层渲染规格小节。\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在应用侧，应用开发者可以通过Web组件的同层渲染事件上报接口，感知到H5同层标签的生命周期以及输入事件，进行同层渲染组件的相应业务逻辑处理。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在应用侧，应用开发者可以使用ArkUI的NodeContainer等接口，构建H5同层标签对应的同层渲染组件。可支持同层渲染的ArkUI常用组件包括：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
              children: "TextInput"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
              children: "XComponent"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
              children: "Canvas"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video",
              children: "Video"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
              children: "Web"
            }), "。具体规格可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A7%84%E6%A0%BC%E7%BA%A6%E6%9D%9F",
              children: "同层渲染规格小节"
            }), "。"]
          }), "\n\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "三方ui框架",
            children: "三方UI框架"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Flutter提供了PlatformView与Texture抽象组件，这些组件可使用系统组件渲染，用于支持Flutter组件功能不足的部分。Weex2.0框架的Camera、Video和Canvas组件可以使用系统组件渲染，以增强功能和性能。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "在三方框架页面侧，由于Flutter、Weex等三方框架不在操作系统范围内，本文不列举可被同层渲染的三方框架UI组件的范围与使用方式。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["在应用侧，应用开发者可以使用ArkUI的NodeContainer等接口，构建三方框架同层标签对应的同层渲染组件。可支持同层渲染的ArkUI常用组件包括：", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
                children: "TextInput"
              }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
                children: "XComponent"
              }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
                children: "Canvas"
              }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video",
                children: "Video"
              }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
                children: "Web"
              }), "。具体规格可参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E8%A7%84%E6%A0%BC%E7%BA%A6%E6%9D%9F",
                children: "同层渲染规格"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "整体架构",
            children: "整体架构"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ArkWeb同层渲染特性主要提供两种能力：同层标签生命周期和事件命中转发处理。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["同层标签生命周期主要关联前端标签（", (0,jsx_runtime.jsx)(_components.embed, {}), "/", (0,jsx_runtime.jsxs)(_components.object, {
              children: ["），同时命中到同层标签的事件会被上报到开发者侧，由开发者分发到对应组件树。整体框架如下图所示：", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "图1"
                  })
                }), " 同层渲染整体架构"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(589913)/* ["default"] */.A) + "",
                  width: "742",
                  height: "681"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "规格约束",
                children: "规格约束"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "可被同层渲染的arkui组件",
                children: "可被同层渲染的ArkUI组件"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "以下规格对Web网页和三方框架场景均生效。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "支持的组件范围:"
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["基础组件：", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer",
                    children: "AlphabetIndexer"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank",
                    children: "Blank"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
                    children: "Button"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-calendarpicker/ts-basic-components-calendarpicker",
                    children: "CalendarPicker"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
                    children: "Checkbox"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup",
                    children: "CheckboxGroup"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
                    children: "ContainerSpan"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel",
                    children: "DataPanel"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
                    children: "DatePicker"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider",
                    children: "Divider"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-gauge/ts-basic-components-gauge",
                    children: "Gauge"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
                    children: "Hyperlink"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
                    children: "Image"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-imageanimator/ts-basic-components-imageanimator",
                    children: "ImageAnimator"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
                    children: "ImageSpan"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
                    children: "LoadingProgress"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee",
                    children: "Marquee"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock",
                    children: "PatternLock"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
                    children: "Progress"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode",
                    children: "QRCode"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
                    children: "Radio"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating",
                    children: "Rating"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh",
                    children: "Refresh"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
                    children: "ScrollBar"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
                    children: "Search"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
                    children: "Span"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
                    children: "Select"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
                    children: "Slider"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
                    children: "Text"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
                    children: "TextArea"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock",
                    children: "TextClock"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
                    children: "TextInput"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker",
                    children: "TextPicker"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer",
                    children: "TextTimer"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker",
                    children: "TimePicker"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
                    children: "Toggle"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["容器类组件：", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
                    children: "Badge"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
                    children: "Column"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit",
                    children: "ColumnSplit"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-counter/ts-container-counter",
                    children: "Counter"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
                    children: "Flex"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol",
                    children: "GridCol"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow",
                    children: "GridRow"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
                    children: "Grid"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
                    children: "GridItem"
                  }), "，", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
                    children: "List"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
                    children: "ListItem"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
                    children: "ListItemGroup"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
                    children: "RelativeContainer"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
                    children: "Row"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-rowsplit/ts-container-rowsplit",
                    children: "RowSplit"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
                    children: "Scroll"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
                    children: "Stack"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
                    children: "Swiper"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
                    children: "Tabs"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
                    children: "TabContent"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
                    children: "NodeContainer"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer",
                    children: "SideBarContainer"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepper/ts-basic-components-stepper",
                    children: "Stepper"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepperitem/ts-basic-components-stepperitem",
                    children: "StepperItem"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
                    children: "WaterFlow"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem",
                    children: "FlowItem"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["自绘制类组件：", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
                    children: "XComponent"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
                    children: "Canvas"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video",
                    children: "Video"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
                    children: "Web"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["命令式自定义绘制节点：", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
                    children: "BuilderNode"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
                    children: "ComponentContent"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
                    children: "ContentSlot"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
                    children: "FrameNode"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics",
                    children: "Graphics"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
                    children: "NodeController"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
                    children: "RenderNode"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-arkui-xcomponentnode/js-apis-arkui-xcomponentnode",
                    children: "XComponentNode"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater",
                    children: "AttributeUpdater"
                  }), ", ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule",
                    children: "CAPI"
                  }), "（支持同层渲染的组件范围同ArkTS）"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "支持的组件通用属性与事件:"
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["不支持的通用属性：", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-restoreid/ts-universal-attributes-restoreid",
                    children: "分布式迁移标识"
                  }), "，", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-use-effect/ts-universal-attributes-use-effect",
                    children: "特效绘制合并"
                  }), "。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "其他未明确标注不支持的属性与事件及组件能力，均默认支持。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "web网页的同层渲染标签",
                children: "Web网页的同层渲染标签"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "此规格仅针对Web网页，不适用于三方框架场景。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["如果应用需要在Web组件加载的网页中使用同层渲染，需要按照以下规格将网页中的", (0,jsx_runtime.jsx)(_components.embed, {}), "、", (0,jsx_runtime.jsxs)(_components.object, {
                  children: ["标签指定为同层渲染组件。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "支持的H5标签："
                      })
                    })
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["支持", (0,jsx_runtime.jsx)(_components.embed, {}), "标签：在开启同层渲染后，仅支持type类型为native前缀的标签识别为同层组件，不支持自定义属性。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["支持", (0,jsx_runtime.jsxs)(_components.object, {
                        children: ["标签：在开启同层渲染后，支持将非标准MIME type的object标签识别为同层组件，支持通过param/value的自定义属性解析。\n", (0,jsx_runtime.jsxs)(_components.li, {
                          children: ["不支持W3C规范标准标签（如", (0,jsx_runtime.jsx)(_components.input, {}), "、", (0,jsx_runtime.jsx)(_components.video, {
                            children: "）定义为同层标签。"
                          })]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                          children: ["不支持同时配置", (0,jsx_runtime.jsxs)(_components.object, {
                            children: ["标签和", (0,jsx_runtime.jsx)(_components.embed, {}), "标签作为同层标签。\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "标签类型只支持英文字符，不区分大小写。"
                            }), "\n\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "同层标签支持的css属性："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "display，position，z-index，visibility，opacity, background-color，background-image，width，height，padding，padding-left，padding-top，padding-right，padding-bottom，margin，margin-left，margin-top，margin-right，margin-bottom，border-width，border-style，border-color，border-left-width，border-left-style，border-left-color，border-top-width，border-top-style，border-top-color，border-right-width，border-right-style，border-right-color，border-bottom-width，border-bottom-style，border-bottom-color，border-left，border-right，border-top，border-bottom，border，border-top-left-radius，border-top-right-radius，border-bottom-left-radius，border-bottom-right-radius，border-radius，transition，transform（仅支持translate/scale，scale对应参数只支持大于等于0的值）"
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "除上面支持的css属性范围，其他的css属性均不保证符合预期，比如transform属性中的rotate，skew等。"
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "同层标签的生命周期管理："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: ["当同层标签生命周期变化时触发", (0,jsx_runtime.jsx)(_components.a, {
                                href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedlifecyclechange11",
                                children: "onNativeEmbedLifecycleChange()"
                              }), "回调。"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "支持创建、销毁、位置宽高变化。"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "支持同层组件所在Web页面进入前进后退缓存。"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "同层标签的输入事件分发处理："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                children: ["支持触摸事件TouchEvent的DOWN/UP/MOVE/CANCEL。支持", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedgestureevent11",
                                  children: "配置触摸事件消费结果"
                                }), "，默认为应用侧消费。"]
                              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                children: ["不支持同层标签所在的应用页面缩放和", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#initialscale9",
                                  children: "initialScale"
                                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoom",
                                  children: "zoom"
                                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomin",
                                  children: "zoomIn"
                                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomout",
                                  children: "zoomOut"
                                }), "等缩放接口。"]
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "暂不支持鼠标、键盘、触摸板事件上报。"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "支持默认将鼠标和触摸板左键事件（MousePress/MouseRelease/MouseMOVE）转换为触摸事件（TouchDOWN/TouchUP/TouchMOVE）上报。"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsx)(_components.strong, {
                                  children: "同层标签的可见状态变化："
                                })
                              })
                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: ["当同层标签可见状态变化时触发", (0,jsx_runtime.jsx)(_components.a, {
                                href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedvisibilitychange12",
                                children: "onNativeEmbedVisibilityChange"
                              }), "回调。"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "支持同层标签相对于视口的可见状态上报。"
                              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                children: ["默认不支持由于同层标签CSS样式或尺寸变化导致的可见状态变化上报，具体规格参考", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedvisibilitychange12",
                                  children: "onNativeEmbedVisibilityChange"
                                }), "。"]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: (0,jsx_runtime.jsxs)(_components.strong, {
                                  children: ["同层渲染", (0,jsx_runtime.jsxs)(_components.object, {
                                    children: ["标签内嵌param元素状态变化：", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: ["当同层渲染", (0,jsx_runtime.jsxs)(_components.object, {
                                        children: ["内嵌标签param元素变化时触发", (0,jsx_runtime.jsx)(_components.a, {
                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedobjectparamchange21",
                                          children: "onNativeEmbedObjectParamChange()"
                                        }), "回调。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "支持上报param元素的增加、修改、删除三种状态变化。"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "接口每次最多上报500个param元素变化信息，超出部分将分多次上报。"
                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                            children: ["详细上报信息参考", (0,jsx_runtime.jsx)(_components.a, {
                                              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#nativeembedparamdatainfo21",
                                              children: "NativeEmbedParamDataInfo"
                                            }), "。"]
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                          children: (0,jsx_runtime.jsx)(_components.strong, {
                                            children: (0,jsx_runtime.jsx)(_components.strong, {
                                              children: "约束限制："
                                            })
                                          })
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                              children: "Web页面内同层标签数量应控制在5个以内。超过5个，渲染性能将会下降。"
                                            }), "\n"]
                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                              children: "受GPU限制，同层标签最大高度不超过8000px，最大纹理大小为8000px。"
                                            }), "\n"]
                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                              children: ["开启同层渲染后，Web组件打开的所有Web页面将不支持同步渲染模式", (0,jsx_runtime.jsx)(_components.a, {
                                                href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#rendermode12",
                                                children: "RenderMode"
                                              }), "。"]
                                            }), "\n"]
                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                              children: "Video组件：在非全屏Video变为全屏时，Video组件变为非纹理导出模式，视频播放状态保持延续；恢复为非全屏时，变为纹理导出模式，视频播放状态保持延续。"
                                            }), "\n"]
                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                              children: "Web组件：仅支持一层同层渲染嵌套，不支持多层同层渲染嵌套。输入事件只支持滑动、点击、长按，不支持拖拽、旋转、缩放。"
                                            }), "\n"]
                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                              children: ["涉及界面交互的ArkUI组件（如TextInput等）：建议在页面布局中使用Stack包裹同层组件容器与BuilderNode，并使两者位置一致，NodeContainer要与", (0,jsx_runtime.jsx)(_components.embed, {}), "/", (0,jsx_runtime.jsxs)(_components.object, {
                                                children: ["标签对齐，以保障组件正常交互。如两者位置不一致，可能出现的问题有：TextInput/TextArea等附属的文本选择框位置错位（如下图）、LoadingProgress/Marquee等组件的动画启停与组件可见状态不匹配。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                                      children: "图2"
                                                    })
                                                  }), " 未使用Stack包裹，TextInput的位置错位"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                                    src: (__webpack_require__(612216)/* ["default"] */.A) + "",
                                                    width: "251",
                                                    height: "429"
                                                  })
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                                      children: "图3"
                                                    })
                                                  }), " 使用Stack包裹，TextInput的位置正常"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                                    src: (__webpack_require__(327540)/* ["default"] */.A) + "",
                                                    width: "250",
                                                    height: "422"
                                                  })
                                                }), "\n\n\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                  id: "web页面中同层渲染输入框",
                                                  children: "Web页面中同层渲染输入框"
                                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                  children: "在Web页面中，可以使用ArkUI系统的TextInput组件进行同层渲染。此处利用同层渲染展示三个输入框，渲染效果图如下："
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: (0,jsx_runtime.jsx)(_components.strong, {
                                                      children: "图4"
                                                    })
                                                  }), " 同层渲染输入框"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                                    src: (__webpack_require__(870506)/* ["default"] */.A) + "",
                                                    width: "388",
                                                    height: "619"
                                                  })
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                      children: "在Web页面中标记需要同层渲染的HTML标签。"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                      children: ["同层渲染支持", (0,jsx_runtime.jsx)(_components.embed, {}), "/", (0,jsx_runtime.jsxs)(_components.object, {
                                                        children: ["两种标签。type类型可任意指定，两个字符串参数均不区分大小写，ArkWeb内核将会统一转换为小写。其中，tag字符串使用全字符串匹配，type使用字符串前缀匹配。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                          children: ["若开发者不使用该接口或该接口接收的为非法字符串（空字符串）时，ArkWeb内核将使用默认设置，即\"embed\" + \"native/\"前缀模式。若指定类型与w3c定义的", (0,jsx_runtime.jsx)(_components.embed, {}), "或", (0,jsx_runtime.jsxs)(_components.object, {
                                                            children: ["标准类型重合，如registerNativeEmbedRule(\"object\", \"application/pdf\")，ArkWeb将遵循w3c标准行为，不会将其识别为同层标签。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                  children: ["采用", (0,jsx_runtime.jsx)(_components.embed, {}), "标签。"]
                                                                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                                                    children: "<!--HAP's src/main/resources/rawfile/text.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染html</title>\n    <meta name=\"viewport\">\n</head>\n\n<body style=\"background:white\">\n\n<embed id = \"input1\" type=\"native/view\" style=\"width: 100%; height: 100px; margin: 30px; margin-top: 600px\"/>\n\n<embed id = \"input2\" type=\"native/view2\" style=\"width: 100%; height: 100px; margin: 30px; margin-top: 50px\"/>\n\n<embed id = \"input3\" type=\"native/view3\" style=\"width: 100%; height: 100px; margin: 30px; margin-top: 50px\"/>\n\n</body>\n</html>\n"
                                                                  })
                                                                }), "\n"]
                                                              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                  children: ["采用", (0,jsx_runtime.jsxs)(_components.object, {
                                                                    children: ["标签。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "需要使用registerNativeEmbedRule注册object标签。"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "// ...\nWeb({src: $rawfile(\"text.html\"), controller: this.browserTabController})\n  // 注册同层标签为\"object\"，类型为\"test\"前缀。\n  .registerNativeEmbedRule(\"object\", \"test\")\n  // ...\n"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "与registerNativeEmbedRule相对应的前端页面代码，类型可使用\"test\"及以\"test\"为前缀的字串。"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "<!--HAP's src/main/resources/rawfile/text2.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染html</title>\n    <meta name=\"viewport\">\n</head>\n\n<body style=\"background:white\">\n\n<object id = \"input1\" type=\"test/input\" style=\"width: 100%; height: 100px; margin: 30px; margin-top: 600px\"></object>\n\n<object id = \"input2\" type=\"test/input\" style=\"width: 100%; height: 100px; margin: 30px; margin-top: 50px\"></object>\n\n<object id = \"input3\" type=\"test/input\" style=\"width: 100%; height: 100px; margin: 30px; margin-top: 50px\"></object>\n\n</body>\n</html>\n"
                                                                      })
                                                                    }), "\n\n\n\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "在应用侧开启同层渲染功能。"
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                        children: ["同层渲染功能默认不开启，如果要使用同层渲染的功能，可通过", (0,jsx_runtime.jsx)(_components.a, {
                                                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#enablenativeembedmode11",
                                                                          children: "enableNativeEmbedMode"
                                                                        }), "来开启。"]
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                        children: (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        // 配置同层渲染开关开启。\n        .enableNativeEmbedMode(true)\n    }\n  }\n}\n"
                                                                        })
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "创建自定义组件。"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "同层渲染功能开启后，展示在对应区域的系统组件。"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                        children: (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "@Component\nstruct TextInputComponent {\n  @Prop params: Params\n  @State bkColor: Color = Color.White\n\n  build() {\n    Column() {\n      TextInput({text: '', placeholder: 'please input your word...'})\n        .placeholderColor(Color.Gray)\n        .id(this.params?.elementId)\n        .placeholderFont({size: 13, weight: 400})\n        .caretColor(Color.Gray)\n        .width(this.params?.width)\n        .height(this.params?.height)\n        .fontSize(14)\n        .fontColor(Color.Black)\n    }\n    //自定义组件中的最外层容器组件宽高应该为同层标签的宽高。\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n\n@Builder\nfunction TextInputBuilder(params:Params) {\n  TextInputComponent({params: params})\n    .width(params.width)\n    .height(params.height)\n    .backgroundColor(Color.White)\n}\n"
                                                                        })
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "创建节点控制器。"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "用于控制和反馈对应NodeContainer上的节点行为。"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                        children: (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "class MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | undefined | null;\n  private embedId_: string = \"\";\n  private surfaceId_: string = \"\";\n  private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n  private width_: number = 0;\n  private height_: number = 0;\n  private type_: string = \"\";\n  private isDestroy_: boolean = false;\n\n  setRenderOption(params: NodeControllerParams) {\n    this.surfaceId_ = params.surfaceId;\n    this.renderType_ = params.renderType;\n    this.embedId_ = params.embedId;\n    this.width_ = params.width;\n    this.height_ = params.height;\n    this.type_ = params.type;\n  }\n\n  // 必须要重写的方法，用于构建节点数、返回节点数挂载在对应NodeContainer中。\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新。\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.isDestroy_) { // rootNode为null。\n      return null;\n    }\n    if (!this.rootNode) {// rootNode 为undefined时。\n      this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n      if(this.rootNode) {\n        this.rootNode.build(wrapBuilder(TextInputBuilder), {  textOne: \"myTextInput\", width: this.width_, height: this.height_  })\n        return this.rootNode.getFrameNode();\n      }else{\n        return null;\n      }\n    }\n    // 返回FrameNode节点。\n    return this.rootNode.getFrameNode();\n  }\n\n  updateNode(arg: Object): void {\n    this.rootNode?.update(arg);\n  }\n\n  getEmbedId(): string {\n    return this.embedId_;\n  }\n  \n  setDestroy(isDestroy: boolean): void {\n    this.isDestroy_ = isDestroy;\n    if (this.isDestroy_) {\n      this.rootNode = null;\n    }\n  }\n \n  postEvent(event: TouchEvent | undefined): boolean {\n    return this.rootNode?.postTouchEvent(event) as boolean\n  }\n}\n"
                                                                        })
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "监听同层渲染的生命周期变化。"
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                        children: ["开启该功能后，当网页中存在同层渲染支持的标签时，ArkWeb内核会触发由", (0,jsx_runtime.jsx)(_components.a, {
                                                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedlifecyclechange11",
                                                                          children: "onNativeEmbedLifecycleChange"
                                                                        }), "注册的回调函数。"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                        children: ["开发者则需要调用", (0,jsx_runtime.jsx)(_components.a, {
                                                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedlifecyclechange11",
                                                                          children: "onNativeEmbedLifecycleChange"
                                                                        }), "来监听同层渲染标签的生命周期变化。"]
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                        children: (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "build() {\n  Row() {\n    Column() {\n      Stack() {\n        ForEach(this.componentIdArr, (componentId: string) => {\n          NodeContainer(this.nodeControllerMap.get(componentId))\n            .position(this.positionMap.get(componentId))\n            .width(this.widthMap.get(componentId))\n            .height(this.heightMap.get(componentId))\n        }, (embedId: string) => embedId)\n        // Web组件加载本地text.html页面。\n        Web({src: $rawfile(\"text.html\"), controller: this.browserTabController})\n          // 配置同层渲染开关开启。\n          .enableNativeEmbedMode(true)\n            // 注册同层标签为<object>，类型为\"test\"前缀。\n          .registerNativeEmbedRule(\"object\", \"test\")\n            // 获取<embed>标签的生命周期变化数据。\n          .onNativeEmbedLifecycleChange((embed) => {\n            console.info(\"NativeEmbed surfaceId\" + embed.surfaceId);\n            // 如果使用embed.info.id作为映射nodeController的key，请在h5页面显式指定id。\n            const componentId = embed.info?.id?.toString() as string\n            if (embed.status == NativeEmbedStatus.CREATE) {\n              console.info(\"NativeEmbed create\" + JSON.stringify(embed.info));\n              // 创建节点控制器、设置参数。\n              let nodeController = new MyNodeController()\n              // embed.info.width和embed.info.height单位是px格式，需要转换成ets侧的默认单位vp。\n              nodeController.setRenderOption({surfaceId : embed.surfaceId as string,\n                type : embed.info?.type as string,\n                renderType : NodeRenderType.RENDER_TYPE_TEXTURE,\n                embedId : embed.embedId as string,\n                width : this.uiContext.px2vp(embed.info?.width),\n                height : this.uiContext.px2vp(embed.info?.height)})\n              this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`}\n              nodeController.setDestroy(false);\n              //根据web传入的embed的id属性作为key，将nodeController存入Map。\n              this.nodeControllerMap.set(componentId, nodeController);\n              this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n              this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n              this.positionMap.set(componentId, this.edges);\n              // 将web传入的embed的id属性存入@State状态数组变量中，用于动态创建nodeContainer节点容器,需要将push动作放在set之后。\n              this.componentIdArr.push(componentId)\n            } else if (embed.status == NativeEmbedStatus.UPDATE) {\n              let nodeController = this.nodeControllerMap.get(componentId);\n              console.info(\"NativeEmbed update\" + JSON.stringify(embed));\n              this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`}\n              this.positionMap.set(componentId, this.edges);\n              this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n              this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n              interface UpdateNodeParams {\n                textOne: string;\n                width: number;\n                height: number;\n              }\n              const updateParams: UpdateNodeParams = {\n                textOne: 'update',\n                width: this.uiContext.px2vp(embed.info?.width),\n                height: this.uiContext.px2vp(embed.info?.height)\n              }\n              nodeController?.updateNode(updateParams);\n            } else if (embed.status == NativeEmbedStatus.DESTROY) {\n              console.info(\"NativeEmbed destroy\" + JSON.stringify(embed));\n              let nodeController = this.nodeControllerMap.get(componentId);\n              nodeController?.setDestroy(true);\n              this.nodeControllerMap.delete(componentId);\n              this.positionMap.delete(componentId);\n              this.widthMap.delete(componentId);\n              this.heightMap.delete(componentId);\n              this.componentIdArr = this.componentIdArr.filter((value: string) => value !== componentId);\n            } else {\n              console.info(\"NativeEmbed status\" + embed.status);\n            }\n          })\n      }.height(\"80%\")\n    }\n  }\n}\n"
                                                                        })
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "同层渲染手势事件。"
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                        children: ["开启该功能后，每当在同层渲染的区域进行触摸操作时，ArkWeb内核会触发", (0,jsx_runtime.jsx)(_components.a, {
                                                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedgestureevent11",
                                                                          children: "onNativeEmbedGestureEvent"
                                                                        }), "注册的回调函数。"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                        children: ["开发者则需要调用", (0,jsx_runtime.jsx)(_components.a, {
                                                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedgestureevent11",
                                                                          children: "onNativeEmbedGestureEvent"
                                                                        }), "来监听同层渲染区域的手势事件。"]
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                        children: (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "build() {\n  Row() {\n    Column() {\n      Stack() {\n        ForEach(this.componentIdArr, (componentId: string) => {\n          NodeContainer(this.nodeControllerMap.get(componentId))\n            .position(this.positionMap.get(componentId))\n            .width(this.widthMap.get(componentId))\n            .height(this.heightMap.get(componentId))\n        }, (embedId: string) => embedId)\n        // Web组件加载本地text.html页面。\n        Web({src: $rawfile(\"text.html\"), controller: this.browserTabController})\n          // 配置同层渲染开关开启。\n          .enableNativeEmbedMode(true)\n            // 获取<embed>标签的生命周期变化数据。\n          .onNativeEmbedLifecycleChange((embed) => {\n            // 生命周期变化实现。\n          })\n          .onNativeEmbedGestureEvent((touch) => {\n            console.info(\"NativeEmbed onNativeEmbedGestureEvent\" + JSON.stringify(touch.touchEvent));\n            this.componentIdArr.forEach((componentId: string) => {\n              let nodeController = this.nodeControllerMap.get(componentId);\n              // 将获取到的同层区域的事件发送到该区域embedId对应的nodeController上。\n              if(nodeController?.getEmbedId() == touch.embedId) {\n                let ret = nodeController?.postEvent(touch.touchEvent)\n                if(ret) {\n                  console.info(\"onNativeEmbedGestureEvent success \" + componentId);\n                } else {\n                  console.info(\"onNativeEmbedGestureEvent fail \" + componentId);\n                }\n                if(touch.result) {\n                  // 通知Web组件手势事件消费结果。\n                  touch.result.setGestureEventResult(ret);\n                }\n              }\n            })\n          })\n      }\n    }\n  }\n}\n"
                                                                        })
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                        children: "同层渲染鼠标事件"
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                        children: ["开启该功能后，在同层渲染的区域进行下述动作时，ArkWeb内核会触发", (0,jsx_runtime.jsx)(_components.a, {
                                                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedmouseevent20",
                                                                          children: "onNativeEmbedMouseEvent"
                                                                        }), "注册的回调函数："]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                          children: "使用鼠标左键、中键、右键进行点击或长按。"
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                          children: "使用触摸板进行对应鼠标左键、中键、右键点击长按的操作。"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                        children: ["开发者则需要调用", (0,jsx_runtime.jsx)(_components.a, {
                                                                          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onnativeembedmouseevent20",
                                                                          children: "onNativeEmbedMouseEvent"
                                                                        }), "来监听同层渲染区域的鼠标事件。"]
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                        children: (0,jsx_runtime.jsx)(_components.code, {
                                                                          children: "build() {\n  Row() {\n    Column() {\n      Stack() {\n        ForEach(this.componentIdArr, (componentId: string) => {\n          NodeContainer(this.nodeControllerMap.get(componentId))\n            .position(this.positionMap.get(componentId))\n            .width(this.widthMap.get(componentId))\n            .height(this.heightMap.get(componentId))\n        }, (embedId: string) => embedId)\n        // Web组件加载本地text.html页面。\n        Web({src: $rawfile(\"text.html\"), controller: this.browserTabController})\n          // 配置同层渲染开关开启。\n          .enableNativeEmbedMode(true)\n            // 获取<embed>标签的生命周期变化数据。\n          .onNativeEmbedLifecycleChange((embed) => {\n            // 生命周期变化实现。\n          })\n          .onNativeEmbedGestureEvent((touch) => {\n            // 处理同层渲染手势事件。\n          })\n          .onNativeEmbedMouseEvent((mouse) => {\n            console.info(\"NativeEmbed onNativeEmbedMouseEvent\" + JSON.stringify(mouse.mouseEvent));\n            this.componentIdArr.forEach((componentId: string) => {\n              let nodeController = this.nodeControllerMap.get(componentId);\n              // 将获取到的同层区域的事件发送到该区域embedId对应的nodeController上。\n              if(nodeController?.getEmbedId() == mouse.embedId) {\n                let ret = nodeController?.postInputEvent(mouse.mouseEvent)\n                if(ret) {\n                  console.info(\"onNativeEmbedMouseEvent success \" + componentId);\n                } else {\n                  console.info(\"onNativeEmbedMouseEvent fail \" + componentId);\n                }\n                if(mouse.result) {\n                  // 通知Web组件鼠标事件消费结果。\n                  mouse.result.setMouseEventResult(ret);\n                }\n              }\n            })\n          })\n      }\n    }\n  }\n}\n"
                                                                        })
                                                                      }), "\n"]
                                                                    }), "\n\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: (0,jsx_runtime.jsx)(_components.strong, {
                                                                          children: "完整示例："
                                                                        })
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: ["使用前请在module.json5中添加网络权限，添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
                                                                        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
                                                                        children: "在配置文件中声明权限"
                                                                      }), "。"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "\"requestPermissions\":[\n  {\n    \"name\" : \"ohos.permission.INTERNET\"\n  }\n],\n"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "应用侧代码。"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "import { webview } from '@kit.ArkWeb';\nimport { UIContext } from '@kit.ArkUI';\nimport { NodeController, BuilderNode, NodeRenderType, FrameNode } from '@kit.ArkUI';\n\n@Observed\ndeclare class Params{\n  public elementId: string\n  public textOne: string\n  public textTwo: string\n  public width: number\n  public height: number\n}\n\ndeclare class NodeControllerParams {\n  public surfaceId: string\n  public type: string\n  public renderType: NodeRenderType\n  public embedId: string\n  public width: number\n  public height: number\n}\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用。\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | undefined | null;\n  private embedId_: string = '';\n  private surfaceId_: string = '';\n  private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n  private width_: number = 0;\n  private height_: number = 0;\n  private type_: string = '';\n  private isDestroy_: boolean = false;\n\n  setRenderOption(params: NodeControllerParams) {\n    this.surfaceId_ = params.surfaceId;\n    this.renderType_ = params.renderType;\n    this.embedId_ = params.embedId;\n    this.width_ = params.width;\n    this.height_ = params.height;\n    this.type_ = params.type;\n  }\n\n  // 必须要重写的方法，用于构建节点数、返回节点数挂载在对应NodeContainer中。\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新。\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.isDestroy_) { // rootNode为null。\n      return null;\n    }\n    if (!this.rootNode) { // rootNode 为undefined时。\n      this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n      if (this.rootNode) {\n        this.rootNode.build(\n          wrapBuilder(textInputBuilder), {  textOne: 'myTextInput', width: this.width_, height: this.height_  });\n        return this.rootNode.getFrameNode();\n      }else{\n        return null;\n      }\n    }\n    // 返回FrameNode节点。\n    return this.rootNode.getFrameNode();\n  }\n\n  updateNode(arg: Object): void {\n    this.rootNode?.update(arg);\n  }\n\n  getEmbedId(): string {\n    return this.embedId_;\n  }\n\n  setDestroy(isDestroy: boolean): void {\n    this.isDestroy_ = isDestroy;\n    if (this.isDestroy_) {\n      this.rootNode = null;\n    }\n  }\n\n  postEvent(event: TouchEvent | undefined): boolean {\n    return this.rootNode?.postTouchEvent(event) as boolean;\n  }\n\n  postInputEvent(event: MouseEvent | undefined): boolean {\n    return this.rootNode?.postInputEvent(event) as boolean;\n  }\n}\n\n@Component\nstruct TextInputComponent {\n  @Prop params: Params;\n  @State bkColor: Color = Color.White;\n\n  build() {\n    Column() {\n      TextInput({text: '', placeholder: 'please input your word...'})\n        .placeholderColor(Color.Gray)\n        .id(this.params?.elementId)\n        .placeholderFont({size: 13, weight: 400})\n        .caretColor(Color.Gray)\n        .fontSize(14)\n        .fontColor(Color.Black)\n    }\n    //自定义组件中的最外层容器组件宽高应该为同层标签的宽高。\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n\n// @Builder中为动态组件的具体组件内容。\n@Builder\nfunction textInputBuilder(params:Params) {\n  TextInputComponent({params: params})\n    .backgroundColor(Color.White)\n}\n\n@Entry\n@Component\nstruct Page{\n  browserTabController: WebviewController = new webview.WebviewController()\n  private nodeControllerMap: Map<string, MyNodeController> = new Map();\n  @State componentIdArr: Array<string> = [];\n  @State widthMap: Map<string, number> = new Map();\n  @State heightMap: Map<string, number> = new Map();\n  @State positionMap: Map<string, Edges> = new Map();\n  @State edges: Edges = {};\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Column() {\n        Stack() {\n          ForEach(this.componentIdArr, (componentId: string) => {\n            NodeContainer(this.nodeControllerMap.get(componentId))\n              .position(this.positionMap.get(componentId))\n              .width(this.widthMap.get(componentId))\n              .height(this.heightMap.get(componentId))\n          }, (embedId: string) => embedId)\n          // Web组件加载本地test2.html页面。\n          Web({src: $rawfile('test2.html'), controller: this.browserTabController})\n          // 注册同层标签为'object'，类型为'test'前缀\n            .registerNativeEmbedRule('object', 'test')\n            // 配置同层渲染开关开启。\n            .enableNativeEmbedMode(true)\n            // 获取embed标签的生命周期变化数据。\n            .onNativeEmbedLifecycleChange((embed) => {\n              console.info('NativeEmbed surfaceId' + embed.surfaceId);\n              // 如果使用embed.info.id作为映射nodeController的key，请在h5页面显式指定id。\n              const componentId = embed.info?.id?.toString() as string;\n              if (embed.status === NativeEmbedStatus.CREATE) {\n                console.info('NativeEmbed create' + JSON.stringify(embed.info));\n                // 创建节点控制器、设置参数。\n                let nodeController = new MyNodeController();\n                // embed.info.width和embed.info.height单位是px格式，需要转换成ets侧的默认单位vp。\n                nodeController.setRenderOption({surfaceId : embed.surfaceId as string,\n                  type : embed.info?.type as string,\n                  renderType : NodeRenderType.RENDER_TYPE_TEXTURE,\n                  embedId : embed.embedId as string,\n                  width : this.uiContext.px2vp(embed.info?.width),\n                  height : this.uiContext.px2vp(embed.info?.height)});\n                this.edges = {\n                  left: `${embed.info?.position?.x as number}px`,\n                  top: `${embed.info?.position?.y as number}px`\n                };\n                nodeController.setDestroy(false);\n                //根据web传入的embed的id属性作为key，将nodeController存入Map。\n                this.nodeControllerMap.set(componentId, nodeController);\n                this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n                this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n                this.positionMap.set(componentId, this.edges);\n                // 将web传入的embed的id属性存入@State状态数组变量中，用于动态创建nodeContainer节点容器,需要将push动作放在set之后。\n                this.componentIdArr.push(componentId);\n              } else if (embed.status === NativeEmbedStatus.UPDATE) {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                console.info('NativeEmbed update' + JSON.stringify(embed));\n                this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`};\n                this.positionMap.set(componentId, this.edges);\n                this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n                this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n                interface UpdateNodeParams {\n                  textOne: string;\n                  width: number;\n                  height: number;\n                }\n                const updateParams: UpdateNodeParams = {\n                  textOne: 'update',\n                  width: this.uiContext.px2vp(embed.info?.width),\n                  height: this.uiContext.px2vp(embed.info?.height)\n                }\n                nodeController?.updateNode(updateParams);\n              } else if (embed.status === NativeEmbedStatus.DESTROY) {\n                console.info('NativeEmbed destroy' + JSON.stringify(embed));\n                let nodeController = this.nodeControllerMap.get(componentId);\n                nodeController?.setDestroy(true);\n                this.nodeControllerMap.delete(componentId);\n                this.positionMap.delete(componentId);\n                this.widthMap.delete(componentId);\n                this.heightMap.delete(componentId);\n                this.componentIdArr = this.componentIdArr.filter((value: string) => value != componentId);\n              } else {\n                console.info('NativeEmbed status' + embed.status);\n              }\n            })\n            // 获取同层渲染组件触摸事件信息。\n            .onNativeEmbedGestureEvent((touch) => {\n              console.info('NativeEmbed onNativeEmbedGestureEvent' + JSON.stringify(touch.touchEvent));\n              this.componentIdArr.forEach((componentId: string) => {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                // 将获取到的同层区域的事件发送到该区域embedId对应的nodeController上。\n                if (nodeController?.getEmbedId() === touch.embedId) {\n                  let ret = nodeController?.postEvent(touch.touchEvent);\n                  if (ret) {\n                    console.info('onNativeEmbedGestureEvent success ' + componentId);\n                  } else {\n                    console.info('onNativeEmbedGestureEvent fail ' + componentId);\n                  }\n                  if (touch.result) {\n                    // 通知Web组件手势事件消费结果。\n                    touch.result.setGestureEventResult(ret);\n                  }\n                }\n              })\n            })\n            .onNativeEmbedMouseEvent((mouse) => {\n              console.info('NativeEmbed onNativeEmbedMouseEvent' + JSON.stringify(mouse.mouseEvent));\n              this.componentIdArr.forEach((componentId: string) => {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                // 将获取到的同层区域的事件发送到该区域embedId对应的nodeController上。\n                if (nodeController?.getEmbedId() === mouse.embedId) {\n                  let ret = nodeController?.postInputEvent(mouse.mouseEvent);\n                  if (ret) {\n                    console.info('onNativeEmbedMouseEvent success ' + componentId);\n                  } else {\n                    console.info('onNativeEmbedMouseEvent fail ' + componentId);\n                  }\n                  if (mouse.result) {\n                    // 通知Web组件鼠标事件消费结果。\n                    mouse.result.setMouseEventResult(ret);\n                  }\n                }\n              })\n            })\n        }\n      }\n    }\n  }\n}\n"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "绘制xcomponentavplayer和button组件",
                                                                      children: "绘制XComponent+AVPlayer和Button组件"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "应用侧代码组件使用示例。"
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "// 创建NodeController\nimport { webview } from '@kit.ArkWeb';\nimport { UIContext, NodeController, BuilderNode, NodeRenderType, FrameNode } from '@kit.ArkUI';\nimport { AVPlayerDemo } from './PlayerDemo';\n\n@Observed\ndeclare class Params {\n  public textOne : string\n  public textTwo : string\n  public width : number\n  public height : number\n}\n\ndeclare class NodeControllerParams {\n  public surfaceId : string\n  public type : string\n  public renderType : NodeRenderType\n  public embedId : string\n  public width : number\n  public height : number\n}\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用。\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | undefined | null;\n  private embedId_ : string = '';\n  private surfaceId_ : string = '';\n  private renderType_ :NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n  private width_ : number = 0;\n  private height_ : number = 0;\n  private type_ : string = '';\n  private isDestroy_ : boolean = false;\n\n  setRenderOption(params : NodeControllerParams) {\n    this.surfaceId_ = params.surfaceId;\n    this.renderType_ = params.renderType;\n    this.embedId_ = params.embedId;\n    this.width_ = params.width;\n    this.height_ = params.height;\n    this.type_ = params.type;\n  }\n  // 必须要重写的方法，用于构建节点数、返回节点数挂载在对应NodeContainer中。\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新。\n  makeNode(uiContext: UIContext): FrameNode | null{\n    if (this.isDestroy_) { // rootNode为null。\n      return null;\n    }\n    if (!this.rootNode) { // rootNode 为undefined时。\n      this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_});\n      if (this.type_ === 'native/video') {\n        this.rootNode.build(\n          wrapBuilder(videoBuilder), {textOne: 'myButton', width : this.width_, height : this.height_});\n      } else {\n        // other\n      }\n    }\n    // 返回FrameNode节点。\n    return this.rootNode.getFrameNode();\n  }\n\n  updateNode(arg: Object): void {\n    this.rootNode?.update(arg);\n  }\n  getEmbedId() : string {\n    return this.embedId_;\n  }\n\n  setDestroy(isDestroy : boolean) : void {\n    this.isDestroy_ = isDestroy;\n    if (this.isDestroy_) {\n      this.rootNode = null;\n    }\n  }\n\n  postEvent(event: TouchEvent | undefined) : boolean {\n    return this.rootNode?.postTouchEvent(event) as boolean;\n  }\n\n  postInputEvent(event: MouseEvent | undefined): boolean {\n    return this.rootNode?.postInputEvent(event) as boolean;\n  }\n}\n\n@Component\nstruct VideoComponent {\n  @ObjectLink params: Params;\n  @State bkColor: Color = Color.Red;\n  mXComponentController: XComponentController = new XComponentController();\n  @State playerChanged: boolean = false;\n  player?: AVPlayerDemo;\n\n  build() {\n    Column() {\n      Button(this.params.textOne);\n\n      XComponent({ id: 'video_player_id', type: XComponentType.SURFACE, controller: this.mXComponentController})\n        .border({width: 1, color: Color.Red})\n        .onLoad(() => {\n          this.player = new AVPlayerDemo();\n          this.player.setSurfaceID(this.mXComponentController.getXComponentSurfaceId());\n          this.playerChanged = !this.playerChanged;\n          this.player.avPlayerLiveDemo();\n        })\n        .width(300)\n        .height(200)\n    }\n    //自定义组件中的最外层容器组件宽高应该为同层标签的宽高。\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n// @Builder中为动态组件的具体组件内容。\n@Builder\nfunction videoBuilder(params: Params) {\n  VideoComponent({ params: params })\n    .backgroundColor(Color.Gray)\n}\n\n@Entry\n@Component\nstruct WebIndex {\n  browserTabController: WebviewController = new webview.WebviewController();\n  private nodeControllerMap: Map<string, MyNodeController> = new Map();\n  @State componentIdArr: Array<string> = [];\n  @State widthMap: Map<string, number> = new Map();\n  @State heightMap: Map<string, number> = new Map();\n  @State positionMap: Map<string, Edges> = new Map();\n  @State edges: Edges = {};\n  uiContext: UIContext = this.getUIContext();\n\n  aboutToAppear() {\n    // 配置web开启调试模式。\n    webview.WebviewController.setWebDebuggingAccess(true);\n  }\n\n  build(){\n    Row() {\n      Column() {\n        Stack() {\n          ForEach(this.componentIdArr, (componentId: string) => {\n            NodeContainer(this.nodeControllerMap.get(componentId))\n              .position(this.positionMap.get(componentId))\n              .width(this.widthMap.get(componentId))\n              .height(this.heightMap.get(componentId))\n          }, (embedId: string) => embedId)\n          // Web组件加载本地test.html页面。\n          Web({ src: $rawfile('test3.html'), controller: this.browserTabController })\n            // 配置同层渲染开关开启。\n            .enableNativeEmbedMode(true)\n              // 获取<embed>标签的生命周期变化数据。\n            .onNativeEmbedLifecycleChange((embed) => {\n              console.info('NativeEmbed surfaceId' + embed.surfaceId);\n              // 1. 如果使用embed.info.id作为映射nodeController的key，请在h5页面显式指定id。\n              const componentId = embed.info?.id?.toString() as string;\n              if (embed.status === NativeEmbedStatus.CREATE) {\n                console.info('NativeEmbed create' + JSON.stringify(embed.info));\n                // 创建节点控制器，设置参数。\n                let nodeController = new MyNodeController();\n                // 1. embed.info.width和embed.info.height单位是px格式，需要转换成ets侧的默认单位vp。\n                nodeController.setRenderOption({\n                  surfaceId : embed.surfaceId as string, type : embed.info?.type as string,\n                  renderType : NodeRenderType.RENDER_TYPE_TEXTURE, embedId : embed.embedId as string,\n                  width : this.uiContext.px2vp(embed.info?.width), height : this.uiContext.px2vp(embed.info?.height)});\n                this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`};\n                nodeController.setDestroy(false);\n                // 根据web传入的embed的id属性作为key，将nodeController存入map。\n                this.nodeControllerMap.set(componentId, nodeController);\n                this.widthMap.set(componentId,  this.uiContext.px2vp(embed.info?.width));\n                this.heightMap.set(componentId,  this.uiContext.px2vp(embed.info?.height));\n                this.positionMap.set(componentId, this.edges);\n                // 将web传入的embed的id属性存入@State状态数组变量中，用于动态创建nodeContainer节点容器，需要将push动作放在set之后。\n                this.componentIdArr.push(componentId);\n              } else if (embed.status === NativeEmbedStatus.UPDATE) {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`};\n                this.positionMap.set(componentId, this.edges);\n                this.widthMap.set(componentId,  this.uiContext.px2vp(embed.info?.width));\n                this.heightMap.set(componentId,  this.uiContext.px2vp(embed.info?.height));\n                interface UpdateNodeParams {\n                     textOne: string;\n                     width: number;\n                     height: number;\n                   }\n                   const updateParams: UpdateNodeParams = {\n                     textOne: 'update',\n                     width: this.uiContext.px2vp(embed.info?.width),\n                     height: this.uiContext.px2vp(embed.info?.height)\n                   }\n                   nodeController?.updateNode(updateParams);\n              } else if (embed.status === NativeEmbedStatus.DESTROY) {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                nodeController?.setDestroy(true);\n                this.nodeControllerMap.delete(componentId);\n                this.positionMap.delete(componentId);\n                this.widthMap.delete(componentId);\n                this.heightMap.delete(componentId);\n                this.componentIdArr = this.componentIdArr.filter((value: string) => value != componentId);\n              } else {\n                console.info('NativeEmbed status' + embed.status);\n              }\n            })// 获取同层渲染组件触摸事件信息。\n            .onNativeEmbedGestureEvent((touch) => {\n              console.info('NativeEmbed onNativeEmbedGestureEvent' + JSON.stringify(touch.touchEvent));\n              this.componentIdArr.forEach((componentId: string) => {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                // 将获取到的同层区域的事件发送到该区域embedId对应的nodeController上。\n                if (nodeController?.getEmbedId() === touch.embedId) {\n                  let ret = nodeController?.postEvent(touch.touchEvent);\n                  if (ret) {\n                    console.info('onNativeEmbedGestureEvent success ' + componentId);\n                  } else {\n                    console.info('onNativeEmbedGestureEvent fail ' + componentId);\n                  }\n                  if (touch.result) {\n                    // 通知Web组件手势事件消费结果。\n                    touch.result.setGestureEventResult(ret);\n                  }\n                }\n              })\n            })\n            .onNativeEmbedMouseEvent((mouse) => {\n              console.info('NativeEmbed onNativeEmbedMouseEvent' + JSON.stringify(mouse.mouseEvent));\n              this.componentIdArr.forEach((componentId: string) => {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                // 将获取到的同层区域的事件发送到该区域embedId对应的nodeController上。\n                if(nodeController?.getEmbedId() === mouse.embedId) {\n                  let ret = nodeController?.postInputEvent(mouse.mouseEvent);\n                  if(ret) {\n                    console.info('onNativeEmbedMouseEvent success ' + componentId);\n                  } else {\n                    console.info('onNativeEmbedMouseEvent fail ' + componentId);\n                  }\n                  if(mouse.result) {\n                    // 通知Web组件鼠标事件消费结果。\n                    mouse.result.setMouseEventResult(ret);\n                  }\n                }\n              })\n            })\n        }\n      }\n    }\n  }\n}\n"
                                                                          })
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "应用侧代码示例，视频播放，使用时需替换为正确的视频链接地址。"
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@ohos.base';\n\nexport class AVPlayerDemo {\n  private count: number = 0;\n  private surfaceId: string = ''; // surfaceId用于播放画面显示，具体的值需要通过Xcomponent接口获取，相关文档链接见上面Xcomponent创建方法。\n  private isSeek: boolean = true; // 用于区分模式是否支持seek操作。\n\n  setSurfaceID(id: string){\n    console.log('setSurfaceID : ' + id);\n    this.surfaceId = id;\n  }\n  // 注册avplayer回调函数。\n  setAVPlayerCallback(avPlayer: media.AVPlayer) {\n    // seek操作结果回调函数。\n    avPlayer.on('seekDone', (seekDoneTime: number) => {\n      console.info(`AVPlayer seek succeeded, seek time is ${seekDoneTime}`);\n    })\n    // error回调监听函数，当avplayer在操作过程中出现错误时，调用reset接口触发重置流程。\n    avPlayer.on('error', (err: BusinessError) => {\n      console.error(`Invoke avPlayer failed, code is ${err.code}, message is ${err.message}`);\n      avPlayer.reset();\n    })\n    // 状态机变化回调函数。\n    avPlayer.on('stateChange', async (state: string, reason: media.StateChangeReason) => {\n      switch (state) {\n        case 'idle': // 成功调用reset接口后触发该状态机上报。\n          console.info('AVPlayer state idle called.');\n          avPlayer.release(); // 调用release接口销毁实例对象。\n          break;\n        case 'initialized': // avplayer 设置播放源后触发该状态上报。\n          console.info('AVPlayer state initialized called.');\n          avPlayer.surfaceId = this.surfaceId; // 设置显示画面，当播放的资源为纯音频时无需设置。\n          avPlayer.prepare();\n          break;\n        case 'prepared': // prepared调用成功后上报该状态机。\n          console.info('AVPlayer state prepared called.');\n          avPlayer.play(); // 调用播放接口开始播放。\n          break;\n        case 'playing': // play成功调用后触发该状态机上报。\n          console.info('AVPlayer state playing called.');\n          if(this.count !== 0) {\n            if (this.isSeek) {\n              console.info('AVPlayer start to seek.');\n              avPlayer.seek(avPlayer.duration); // seek到视频末尾。\n            } else {\n              // 当播放模式不支持seek操作时继续播放到结尾。\n              console.info('AVPlayer wait to play end.');\n            }\n          } else {\n            avPlayer.pause(); // 调用暂停接口暂停播放。\n          }\n          this.count++;\n          break;\n        case 'paused': // pause成功调用后触发该状态机上报。\n          console.info('AVPlayer state paused called.');\n          avPlayer.play(); // 再次播放接口开始播放。\n          break;\n        case 'completed': //播放接口后触发该状态机上报。\n          console.info('AVPlayer state completed called.');\n          avPlayer.stop(); // 调用播放接口。\n          break;\n        case 'stopped': // stop接口后触发该状态机上报。\n          console.info('AVPlayer state stopped called.');\n          avPlayer.reset(); // 调用reset接口初始化avplayer状态。\n          break;\n        case 'released': //播放接口后触发该状态机上报。\n          console.info('AVPlayer state released called.');\n          break;\n        default:\n          break;\n      }\n    })\n  }\n\n  // 通过url设置网络地址来实现播放直播码流。\n  async avPlayerLiveDemo(){\n    try {\n      // 创建avPlayer实例对象。\n      let avPlayer: media.AVPlayer = await media.createAVPlayer();\n      // 创建状态机变化回调函数。\n      this.setAVPlayerCallback(avPlayer);\n      this.isSeek = false; // 不支持seek操作。\n      // 使用时需要自行替换视频链接。\n      avPlayer.url = 'xxx/demo.mp4';\n    } catch (error) {\n      console.error('Failed to create or play video: ', error);\n    }\n  }\n}\n"
                                                                          })
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "前端页面示例。"
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "<!--HAP's src/main/resources/rawfile/test3.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染测试html</title>\n    <meta name=\"viewport\">\n</head>\n<body>\n<div>\n    <div id=\"bodyId\">\n        <embed id=\"nativeVideo\" type = \"native/video\" width=\"1000\" height=\"1500\" src=\"test\" style = \"background-color:red\"/>\n    </div>\n</div>\n</body>\n</html>\n"
                                                                          })
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "实现效果："
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: (0,jsx_runtime.jsx)(_components.img, {
                                                                            src: (__webpack_require__(988097)/* ["default"] */.A) + "",
                                                                            width: "362",
                                                                            height: "569"
                                                                          })
                                                                        }), "\n"]
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "同层标签设置为最高层级",
                                                                      children: "同层标签设置为最高层级"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: ["同层渲染支持私有属性arkwebnativestyle，该属性仅在开启同层渲染后的", (0,jsx_runtime.jsx)(_components.embed, {}), "和", (0,jsx_runtime.jsxs)(_components.object, {
                                                                        children: ["中生效，该属性的display属性用于控制同层标签的显示层级，使其高于其他Web元素。如果多个同层标签都设置了arkwebnativestyle的display属性，并且属性相同，则它们的层级顺序将遵循W3C标准层级排序规则：先比较z-index属性值，当z-index相同时，按照元素在DOM中的先后顺序排序。display属性取值说明如下：", (0,jsx_runtime.jsx)(_components.p, {}), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                                                                children: "display取值"
                                                                              }), (0,jsx_runtime.jsx)(_components.th, {
                                                                                children: "说明"
                                                                              })]
                                                                            })
                                                                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                                                children: "overlay"
                                                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                                                children: "设置同层标签层级高于其他Web元素。"
                                                                              })]
                                                                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                                                                children: "overlay-infinity"
                                                                              }), (0,jsx_runtime.jsx)(_components.td, {
                                                                                children: "设置同层标签层级高于其他Web元素和设置overlay的同层标签。"
                                                                              })]
                                                                            })]
                                                                          })]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                            children: "应用侧代码："
                                                                          }), "\n"]
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "import { webview } from '@kit.ArkWeb';\nimport { UIContext } from '@kit.ArkUI';\nimport { NodeController, BuilderNode, NodeRenderType, FrameNode } from '@kit.ArkUI';\n\n@Observed\ndeclare class Params{\n  public elementId: string\n  public textOne: string\n  public textTwo: string\n  public width: number\n  public height: number\n}\n\ndeclare class NodeControllerParams {\n  public surfaceId: string\n  public type: string\n  public renderType: NodeRenderType\n  public embedId: string\n  public width: number\n  public height: number\n}\n\n// 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用。\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | undefined | null;\n  private embedId_: string = '';\n  private surfaceId_: string = '';\n  private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n  private width_: number = 0;\n  private height_: number = 0;\n  private type_: string = '';\n  private isDestroy_: boolean = false;\n\n  setRenderOption(params: NodeControllerParams) {\n    this.surfaceId_ = params.surfaceId;\n    this.renderType_ = params.renderType;\n    this.embedId_ = params.embedId;\n    this.width_ = params.width;\n    this.height_ = params.height;\n    this.type_ = params.type;\n  }\n\n  // 必须要重写的方法，用于构建节点数、返回节点数挂载在对应NodeContainer中。\n  // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新。\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.isDestroy_) { // rootNode为null。\n      return null;\n    }\n    if (!this.rootNode) {// rootNode 为undefined时。\n      this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n      if (this.type_ === 'native/view1') {\n        this.rootNode.build(\n          wrapBuilder(textInputBuilder1), {  textOne: 'myTextInput', width: this.width_, height: this.height_  });\n        return this.rootNode.getFrameNode();\n      } else if (this.type_ === 'native/view2') {\n        this.rootNode.build(\n          wrapBuilder(textInputBuilder2), {  textOne: 'myTextInput', width: this.width_, height: this.height_  });\n        return this.rootNode.getFrameNode();\n      } else{\n        return null;\n      }\n    }\n    // 返回FrameNode节点。\n    return this.rootNode.getFrameNode();\n  }\n\n  updateNode(arg: Object): void {\n    this.rootNode?.update(arg);\n  }\n\n  getEmbedId(): string {\n    return this.embedId_;\n  }\n\n  setDestroy(isDestroy: boolean): void {\n    this.isDestroy_ = isDestroy;\n    if (this.isDestroy_) {\n      this.rootNode = null;\n    }\n  }\n\n  postEvent(event: TouchEvent | undefined): boolean {\n    return this.rootNode?.postTouchEvent(event) as boolean;\n  }\n}\n\n@Component\nstruct TextInputComponent1 {\n  @Prop params: Params;\n  @State bkColor: Color = Color.White;\n\n  build() {\n    Column() {\n      Text('display:overlay-infinity')\n      TextInput({text: '', placeholder: 'please input your word...'})\n        .placeholderColor(Color.Gray)\n        .id(this.params?.elementId)\n        .placeholderFont({size: 13, weight: 400})\n        .caretColor(Color.Gray)\n        .fontSize(14)\n        .fontColor(Color.Black)\n    }\n    // 自定义组件中的最外层容器组件宽高应该为同层标签的宽高。\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n\n// @Builder中为动态组件的具体组件内容。\n@Builder\nfunction textInputBuilder1(params:Params) {\n  TextInputComponent1({params: params})\n    .backgroundColor(Color.Pink)\n}\n\n@Component\nstruct TextInputComponent2 {\n  @Prop params: Params;\n  @State bkColor: Color = Color.White;\n\n  build() {\n    Column() {\n      Text('display:overlay')\n      TextInput({text: '', placeholder: 'please input your word...'})\n        .placeholderColor(Color.Gray)\n        .id(this.params?.elementId)\n        .placeholderFont({size: 13, weight: 400})\n        .caretColor(Color.Gray)\n        .fontSize(14)\n        .fontColor(Color.Black)\n    }\n    // 自定义组件中的最外层容器组件宽高应该为同层标签的宽高。\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n\n\n// @Builder中为动态组件的具体组件内容。\n@Builder\nfunction textInputBuilder2(params:Params) {\n  TextInputComponent2({params: params})\n    .backgroundColor(Color.Gray)\n}\n\n@Entry\n@Component\nstruct Page{\n  browserTabController: webview.WebviewController = new webview.WebviewController();\n  private nodeControllerMap: Map<string, MyNodeController> = new Map();\n  @State componentIdArr: Array<string> = [];\n  @State widthMap: Map<string, number> = new Map();\n  @State heightMap: Map<string, number> = new Map();\n  @State positionMap: Map<string, Edges> = new Map();\n  @State edges: Edges = {};\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Column() {\n        Stack() {\n          ForEach(this.componentIdArr, (componentId: string) => {\n            NodeContainer(this.nodeControllerMap.get(componentId))\n              .position(this.positionMap.get(componentId))\n              .width(this.widthMap.get(componentId))\n              .height(this.heightMap.get(componentId))\n          }, (embedId: string) => embedId)\n          // Web组件加载本地test4.html页面。\n          Web({src: $rawfile('test4.html'), controller: this.browserTabController})\n          // 配置同层渲染开关开启。\n            .enableNativeEmbedMode(true)\n            // 获取<embed>标签的生命周期变化数据。\n            .onNativeEmbedLifecycleChange((embed) => {\n              console.info('NativeEmbed surfaceId' + embed.surfaceId);\n              // 如果使用embed.info.id作为映射nodeController的key，请在h5页面显式指定id。\n              const componentId = embed.info?.id?.toString() as string\n              if (embed.status === NativeEmbedStatus.CREATE) {\n                console.info('NativeEmbed create' + JSON.stringify(embed.info));\n                // 创建节点控制器、设置参数。\n                let nodeController = new MyNodeController();\n                // embed.info.width和embed.info.height单位是px格式，需要转换成ets侧的默认单位vp。\n                nodeController.setRenderOption({surfaceId : embed.surfaceId as string,\n                  type : embed.info?.type as string,\n                  renderType : NodeRenderType.RENDER_TYPE_TEXTURE,\n                  embedId : embed.embedId as string,\n                  width : this.uiContext.px2vp(embed.info?.width),\n                  height : this.uiContext.px2vp(embed.info?.height)});\n                this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`};\n                nodeController.setDestroy(false);\n                // 根据web传入的embed的id属性作为key，将nodeController存入Map。\n                this.nodeControllerMap.set(componentId, nodeController);\n                this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n                this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n                this.positionMap.set(componentId, this.edges);\n                // 将web传入的embed的id属性存入@State状态数组变量中，用于动态创建nodeContainer节点容器,需要将push动作放在set之后。\n                this.componentIdArr.push(componentId);\n              } else if (embed.status === NativeEmbedStatus.UPDATE) {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                console.info('NativeEmbed update' + JSON.stringify(embed));\n                this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`};\n                this.positionMap.set(componentId, this.edges);\n                this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n                this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n                interface UpdateNodeParams {\n                  textOne: string;\n                  width: number;\n                  height: number;\n                }\n                const updateParams: UpdateNodeParams = {\n                  textOne: 'update',\n                  width: this.uiContext.px2vp(embed.info?.width),\n                  height: this.uiContext.px2vp(embed.info?.height)\n                }\n                nodeController?.updateNode(updateParams);\n              } else if (embed.status === NativeEmbedStatus.DESTROY) {\n                console.info('NativeEmbed destroy' + JSON.stringify(embed));\n                let nodeController = this.nodeControllerMap.get(componentId);\n                nodeController?.setDestroy(true);\n                this.nodeControllerMap.delete(componentId);\n                this.positionMap.delete(componentId);\n                this.widthMap.delete(componentId);\n                this.heightMap.delete(componentId);\n                this.componentIdArr = this.componentIdArr.filter((value: string) => value != componentId);\n              } else {\n                console.info('NativeEmbed status' + embed.status);\n              }\n            })// 获取同层渲染组件触摸事件信息。\n            .onNativeEmbedGestureEvent((touch) => {\n              console.info('NativeEmbed onNativeEmbedGestureEvent' + JSON.stringify(touch.touchEvent));\n              this.componentIdArr.forEach((componentId: string) => {\n                let nodeController = this.nodeControllerMap.get(componentId);\n                // 将获取到的同层区域的事件发送到该区域embedId对应的nodeController上。\n                if (nodeController?.getEmbedId() === touch.embedId) {\n                  let ret = nodeController?.postEvent(touch.touchEvent);\n                  if (ret) {\n                    console.info('onNativeEmbedGestureEvent success ' + componentId);\n                  } else {\n                    console.info('onNativeEmbedGestureEvent fail ' + componentId);\n                  }\n                  if (touch.result) {\n                    // 通知Web组件手势事件消费结果。\n                    touch.result.setGestureEventResult(ret);\n                  }\n                }\n              })\n            })\n            .border({width: 2, color: Color.Gray})\n            .height('50%')\n        }\n      }\n    }\n  }\n}\n"
                                                                          })
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                              children: "前端页面示例："
                                                                            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                              children: ["示例代码使用", (0,jsx_runtime.jsx)(_components.embed, {}), "标签，若使用", (0,jsx_runtime.jsxs)(_components.object, {
                                                                                children: ["标签，请在ets侧注册", (0,jsx_runtime.jsxs)(_components.object, {
                                                                                  children: ["标签及type类型。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                                    children: (0,jsx_runtime.jsx)(_components.code, {
                                                                                      children: "<!--HAP's src/main/resources/rawfile/test4.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染html</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n</head>\n<body>\n<div>\n    <div id = \"test\" style = \"position: absolute; z-index: 9999; text-align: center; background-color: rgb(61, 157, 180); top: 40px; left: 30px; width: 300px; height: 120px\">\n        z-index: 9999\n    </div>\n\n    <embed id = \"input1\" type = \"native/view1\" arkwebnativestyle = \"display:overlay-infinity\" style = \"position: absolute; top: 60px; left: 50px; width: 300px; height: 100px\">\n\n    <embed id = \"input2\" type = \"native/view2\" arkwebnativestyle = \"display:overlay\" style = \"position: absolute; top: 150px; left: 40px; width: 300px; height: 100px\">\n</div>\n</body>\n</html>\n"
                                                                                    })
                                                                                  }), "\n\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                      children: "实现效果："
                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                      children: "未设置arkwebnativestyle的display属性："
                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                      children: (0,jsx_runtime.jsx)(_components.img, {
                                                                                        src: (__webpack_require__(469777)/* ["default"] */.A) + "",
                                                                                        width: "604",
                                                                                        height: "601"
                                                                                      })
                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                      children: "设置arkwebnativestyle的display属性："
                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                      children: (0,jsx_runtime.jsx)(_components.img, {
                                                                                        src: (__webpack_require__(822180)/* ["default"] */.A) + "",
                                                                                        width: "604",
                                                                                        height: "601"
                                                                                      })
                                                                                    }), "\n"]
                                                                                  }), "\n\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                                    id: "同层渲染纹理贴图对齐方式",
                                                                                    children: "同层渲染纹理贴图对齐方式"
                                                                                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                                    children: ["ArkWeb同层渲染场景下的私有属性arkwebnativestyle，仅在开启同层渲染后的", (0,jsx_runtime.jsx)(_components.embed, {}), "和", (0,jsx_runtime.jsxs)(_components.object, {
                                                                                      children: ["标签中生效，从API version 23开始，增加属性object-fit:stretch（默认值，纹理按同层标签bounds尺寸拉伸对齐），object-fit:none（纹理不拉伸，左顶角对齐）两种配置，用于控制单个同层标签的纹理对齐方式以实现灵活展示效果，适用于同层标签宽高动态变化的场景，可解决标签宽高改变时出现的短暂纹理拉伸问题。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                        children: "属性取值说明如下："
                                                                                      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                                                        children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                                                          children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                                                            children: [(0,jsx_runtime.jsx)(_components.th, {
                                                                                              children: "属性取值"
                                                                                            }), (0,jsx_runtime.jsx)(_components.th, {
                                                                                              children: "说明"
                                                                                            })]
                                                                                          })
                                                                                        }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                                                          children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                                                            children: [(0,jsx_runtime.jsx)(_components.td, {
                                                                                              children: "object-fit:stretch"
                                                                                            }), (0,jsx_runtime.jsx)(_components.td, {
                                                                                              children: "默认值，纹理按同层标签bounds尺寸拉伸对齐。"
                                                                                            })]
                                                                                          }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                                                            children: [(0,jsx_runtime.jsx)(_components.td, {
                                                                                              children: "object-fit:none"
                                                                                            }), (0,jsx_runtime.jsx)(_components.td, {
                                                                                              children: "纹理不拉伸，左顶角对齐。"
                                                                                            })]
                                                                                          })]
                                                                                        })]
                                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                            children: "应用侧代码："
                                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                                            children: (0,jsx_runtime.jsx)(_components.code, {
                                                                                              children: "  // 创建NodeController\n  import { webview } from '@kit.ArkWeb';\n  import { UIContext } from '@kit.ArkUI';\n  import { NodeController, BuilderNode, NodeRenderType, FrameNode } from '@kit.ArkUI';\n\n  @Observed\n  declare class Params{\n    elementId: string\n    textOne: string\n    textTwo: string\n    width: number\n    height: number\n  }\n\n  declare class NodeControllerParams {\n    surfaceId: string\n    type: string\n    renderType: NodeRenderType\n    embedId: string\n    width: number\n    height: number\n  }\n\n  // 用于控制和反馈对应的NodeContainer上的节点的行为，需要与NodeContainer一起使用。\n  class MyNodeController extends NodeController {\n    private rootNode: BuilderNode<[Params]> | undefined | null;\n    private embedId_: string = \"\";\n    private surfaceId_: string = \"\";\n    private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n    private width_: number = 0;\n    private height_: number = 0;\n    private type_: string = \"\";\n    private isDestroy_: boolean = false;\n\n    setRenderOption(params: NodeControllerParams) {\n      this.surfaceId_ = params.surfaceId;\n      this.renderType_ = params.renderType;\n      this.embedId_ = params.embedId;\n      this.width_ = params.width;\n      this.height_ = params.height;\n      this.type_ = params.type;\n    }\n\n    // 必须要重写的方法，用于构建节点数、返回节点数挂载在对应NodeContainer中。\n    // 在对应NodeContainer创建的时候调用、或者通过rebuild方法调用刷新。\n    makeNode(uiContext: UIContext): FrameNode | null {\n      if (this.isDestroy_) { // rootNode为null。\n        return null;\n      }\n      if (!this.rootNode) {// rootNode 为undefined时。\n        this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n        if(this.rootNode) {\n          this.rootNode.build(wrapBuilder(ImageBuilder), {  textOne: \"myImage\", width: this.width_, height: this.height_  })\n          return this.rootNode.getFrameNode();\n        }else{\n          return null;\n        }\n      }\n      // 返回FrameNode节点。\n      return this.rootNode.getFrameNode();\n    }\n\n    updateNode(arg: Object): void {\n      this.rootNode?.update(arg);\n    }\n\n    getEmbedId(): string {\n      return this.embedId_;\n    }\n\n    setDestroy(isDestroy: boolean): void {\n      this.isDestroy_ = isDestroy;\n      if (this.isDestroy_) {\n        this.rootNode = null;\n      }\n    }\n\n    postEvent(event: TouchEvent | undefined): boolean {\n      return this.rootNode?.postTouchEvent(event) as boolean\n    }\n\n    postInputEvent(event: MouseEvent | undefined): boolean {\n      return this.rootNode?.postInputEvent(event) as boolean\n    }\n  }\n\n  @Component\n  struct ImageComponent {\n    @Prop params: Params\n    private imageOne: Resource = $rawfile('demo.PNG');\n    @State src: Resource = this.imageOne\n\n    build() {\n      Column(){\n        Image(this.src)\n      }\n      .width(this.params.width)\n      .height(this.params.height)\n    }\n  }\n\n\n  // @Builder中为动态组件的具体组件内容。\n  @Builder\n  function ImageBuilder(params:Params) {\n    ImageComponent({params: params})\n  }\n\n  @Entry\n  @Component\n  struct Page{\n    browserTabController: WebviewController = new webview.WebviewController()\n    private nodeControllerMap: Map<string, MyNodeController> = new Map();\n    @State componentIdArr: Array<string> = [];\n    @State widthMap: Map<string, number> = new Map();\n    @State heightMap: Map<string, number> = new Map();\n    @State positionMap: Map<string, Edges> = new Map();\n    @State edges: Edges = {};\n    uiContext: UIContext = this.getUIContext();\n\n    build() {\n      Row() {\n        Column() {\n          Stack() {\n            ForEach(this.componentIdArr, (componentId: string) => {\n              NodeContainer(this.nodeControllerMap.get(componentId))\n                .position(this.positionMap.get(componentId))\n                .width(this.widthMap.get(componentId))\n                .height(this.heightMap.get(componentId))\n            }, (embedId: string) => embedId)\n            // Web组件加载本地text.html页面。\n            Web({src: $rawfile(\"test.html\"), controller: this.browserTabController})\n              // 配置同层渲染开关开启。\n              .enableNativeEmbedMode(true)\n                // 获取<embed>标签的生命周期变化数据。\n              .onNativeEmbedLifecycleChange((embed) => {\n                console.info(\"NativeEmbed surfaceId\" + embed.surfaceId);\n                // 如果使用embed.info.id作为映射nodeController的key，请在h5页面显式指定id。\n                const componentId = embed.info?.id?.toString() as string\n                if (embed.status == NativeEmbedStatus.CREATE) {\n                  console.info(\"NativeEmbed create\" + JSON.stringify(embed.info));\n                  // 创建节点控制器、设置参数。\n                  let nodeController = new MyNodeController()\n                  // embed.info.width和embed.info.height单位是px格式，需要转换成ets侧的默认单位vp。\n                  nodeController.setRenderOption({surfaceId : embed.surfaceId as string,\n                    type : embed.info?.type as string,\n                    renderType : NodeRenderType.RENDER_TYPE_TEXTURE,\n                    embedId : embed.embedId as string,\n                    width : this.uiContext.px2vp(embed.info?.width),\n                    height : this.uiContext.px2vp(embed.info?.height)})\n                  this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`}\n                  nodeController.setDestroy(false);\n                  //根据web传入的embed的id属性作为key，将nodeController存入Map。\n                  this.nodeControllerMap.set(componentId, nodeController);\n                  this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n                  this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n                  this.positionMap.set(componentId, this.edges);\n                  // 将web传入的embed的id属性存入@State状态数组变量中，用于动态创建nodeContainer节点容器,需要将push动作放在set之后。\n                  this.componentIdArr.push(componentId)\n                } else if (embed.status == NativeEmbedStatus.UPDATE) {\n                  let nodeController = this.nodeControllerMap.get(componentId);\n                  console.info(\"NativeEmbed update\" + JSON.stringify(embed));\n                  this.edges = {left: `${embed.info?.position?.x as number}px`, top: `${embed.info?.position?.y as number}px`}\n                  this.positionMap.set(componentId, this.edges);\n                  this.widthMap.set(componentId, this.uiContext.px2vp(embed.info?.width));\n                  this.heightMap.set(componentId, this.uiContext.px2vp(embed.info?.height));\n                  interface UpdateNodeParams {\n                    textOne: string;\n                    width: number;\n                    height: number;\n                  }\n                  const updateParams: UpdateNodeParams = {\n                    textOne: 'update',\n                    width: this.uiContext.px2vp(embed.info?.width),\n                    height: this.uiContext.px2vp(embed.info?.height)\n                  }\n                  nodeController?.updateNode(updateParams);\n                } else if (embed.status == NativeEmbedStatus.DESTROY) {\n                  console.info(\"NativeEmbed destroy\" + JSON.stringify(embed));\n                  let nodeController = this.nodeControllerMap.get(componentId);\n                  nodeController?.setDestroy(true);\n                  this.nodeControllerMap.delete(componentId);\n                  this.positionMap.delete(componentId);\n                  this.widthMap.delete(componentId);\n                  this.heightMap.delete(componentId);\n                  this.componentIdArr = this.componentIdArr.filter((value: string) => value !== componentId);\n                } else {\n                  console.info(\"NativeEmbed status\" + embed.status);\n                }\n              })\n          }\n        }\n      }\n    }\n  }\n"
                                                                                            })
                                                                                          }), "\n"]
                                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                            children: "前端页面示例："
                                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                                            children: ["示例代码使用", (0,jsx_runtime.jsx)(_components.embed, {}), "标签，若使用", (0,jsx_runtime.jsxs)(_components.object, {
                                                                                              children: ["标签，请在ets侧注册", (0,jsx_runtime.jsxs)(_components.object, {
                                                                                                children: ["标签及type类型。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                                                                                    children: "  <!--HAP's src/main/resources/rawfile/test.html-->\n  <!DOCTYPE html>\n  <html>\n  <head>\n      <title>同层渲染测试html</title>\n  </head>\n  <body>\n  <div>\n      <!-- 属性设置为object-fit:none，纹理不拉伸，左顶角对齐。-->\n      <embed id=\"nativeVideo\"\n             type=\"native/camera\"\n             arkwebnativestyle=\"object-fit:none\"/>\n  </div>\n  </body>\n  </html>\n"
                                                                                                  })
                                                                                                }), "\n\n\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                                                  id: "常见问题",
                                                                                                  children: "常见问题"
                                                                                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                                                  id: "同层渲染组件被拉伸该如何解决",
                                                                                                  children: "同层渲染组件被拉伸该如何解决？"
                                                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                                                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                                                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                                      children: "组件高度过大"
                                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                                      children: "受GPU限制，同层标签存在8000px的高度限制，如果html5中同层标签高度过高，会存在组件被拉伸的情况，这时需要将同层标签的高度设为8000px以下。"
                                                                                                    }), "\n"]
                                                                                                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                                                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                                      children: "自定义组件宽高未指定为同层渲染标签的宽高"
                                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                                      children: "自定义的同层渲染组件宽高需要与同层标签的宽高保持一致，示例如下："
                                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                                                                                        children: "  @Component\n  struct TextInputComponent {\n    @Prop params: Params\n    @State bkColor: Color = Color.White\n\n    build() {\n      Column() {\n        TextInput({text: '', placeholder: 'please input your word...'})\n          .fontColor(Color.Black)\n      }\n      // 自定义组件中的最外层容器组件宽高应该为同层标签的宽高。\n      .width(this.params.width)\n      .height(this.params.height)\n    }\n  }\n"
                                                                                                      })
                                                                                                    }), "\n"]
                                                                                                  }), "\n"]
                                                                                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                                                  id: "如何将同层渲染组件捕获到的事件透传到web前端",
                                                                                                  children: "如何将同层渲染组件捕获到的事件透传到web前端？"
                                                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                                                  children: ["同层渲染手势事件通过", (0,jsx_runtime.jsx)(_components.a, {
                                                                                                    href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-eventresult/arkts-basic-components-web-eventresult#setgestureeventresult14",
                                                                                                    children: "setGestureEventResult()"
                                                                                                  }), "设置手势事件消费结果，可以选择系统组件侧或ArkWeb侧消费手势事件。如果要实现系统组件侧和ArkWeb侧同时消费手势事件，可以在", (0,jsx_runtime.jsx)(_components.a, {
                                                                                                    href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-eventresult/arkts-basic-components-web-eventresult#setgestureeventresult14",
                                                                                                    children: "setGestureEventResult()"
                                                                                                  }), "中将stopPropagation设置为false，即系统组件侧消费的同时可以将手势事件向上冒泡给ArkWeb。"]
                                                                                                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                                                  id: "同层渲染页面显示该插件不支持该如何解决",
                                                                                                  children: "同层渲染页面显示该插件不支持该如何解决？"
                                                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                                                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                                                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                                                      children: ["同层渲染开关", (0,jsx_runtime.jsx)(_components.a, {
                                                                                                        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#enablenativeembedmode11",
                                                                                                        children: "enableNativeEmbedMode"
                                                                                                      }), "未开启"]
                                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                                      children: "使用同层渲染技术需要显式开启同层渲染开关"
                                                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                                                                                        children: "Web({ src: $rawfile(\"text.html\"), controller: this.controller })\n  // 配置同层渲染开关开启。\n  .enableNativeEmbedMode(true)\n"
                                                                                                      })
                                                                                                    }), "\n"]
                                                                                                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                                                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                                      children: "同层标签使用有误"
                                                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                                                      children: ["如果使用", (0,jsx_runtime.jsx)(_components.embed, {}), "标签，需要显式书写embed，并且type类型以\"native/\"开头；如果使用", (0,jsx_runtime.jsxs)(_components.object, {
                                                                                                        children: ["标签，需要注册", (0,jsx_runtime.jsxs)(_components.object, {
                                                                                                          children: ["标签及type类型。", (0,jsx_runtime.jsx)(_components.p, {}), "\n\n\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                                                            id: "涉及界面交互的arkui组件如textinput等光标与输入框错位该如何解决",
                                                                                                            children: "涉及界面交互的ArkUI组件（如TextInput等）光标与输入框错位该如何解决？"
                                                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                                                            children: "首先，需使用Stack包裹同层组件容器和BuilderNode。其次，同层组件容器NodeContainer应与同层标签的位置绑定。示例如下："
                                                                                                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                                                            children: (0,jsx_runtime.jsx)(_components.code, {
                                                                                                              children: "ForEach(this.componentIdArr, (componentId: string) => {\n  NodeContainer(this.nodeControllerMap.get(componentId))\n    // 同层组件容器应与同层标签的宽高和位置绑定。\n    .position(this.positionMap.get(componentId))\n    .width(this.widthMap.get(componentId))\n    .height(this.heightMap.get(componentId))\n}, (embedId: string) => embedId)\n"
                                                                                                            })
                                                                                                          }), "\n"]
                                                                                                        })]
                                                                                                      })]
                                                                                                    })]
                                                                                                  })]
                                                                                                })]
                                                                                              })]
                                                                                            })]
                                                                                          })]
                                                                                        })]
                                                                                      })]
                                                                                    })]
                                                                                  })]
                                                                                })]
                                                                              })]
                                                                            })]
                                                                          })]
                                                                        })]
                                                                      })]
                                                                    })]
                                                                  })]
                                                                })]
                                                              })]
                                                            })]
                                                          })]
                                                        })]
                                                      })]
                                                    })]
                                                  })]
                                                })]
                                              })]
                                            })]
                                          })]
                                        })]
                                      })]
                                    })]
                                  })]
                                })
                              })
                            })]
                          })]
                        })]
                      })]
                    })]
                  })]
                })]
              })]
            })]
          })]
        })]
      })]
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
988097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478245-361aa82bbdb6eee1af2c049f9ef602cc.png");

},
612216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798594-1d079abf40b761c8edd721cd607199b9.png");

},
822180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438291-f8fb67001a38ee9357b6d8bd5f177afc.png");

},
589913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478243-1a028b48829ca3b8ac4947681e3b8420.png");

},
469777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798596-f6d74b10f873829d06a279df1d4c4a79.png");

},
870506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958244-8b4627424f3e56ccb08f92ea314b2d6d.png");

},
327540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438289-a2e8a42cf7bd6b3e553f57f10598a0f2.png");

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