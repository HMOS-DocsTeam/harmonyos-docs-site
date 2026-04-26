"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["458782"], {
627467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_text_display_arkts_common_components_text_display_md_9b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-common-components-text-display-arkts-common-components-text-display-md-9b0.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_text_display_arkts_common_components_text_display_md_9b0_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display/arkts-common-components-text-display","title":"文本显示 (Text/Span)","description":"Text是文本组件，用于展示用户视图，如显示文章的文字内容。该组件支持绑定自定义文本选择菜单，用户可根据需要选择不同功能。此外，还可以扩展自定义菜单，丰富可用选项，进一步提升用户体验。Span则用于展示行内文本。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display/arkts-common-components-text-display.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"文本显示 (Text/Span)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-display","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文本概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction/"},"next":{"title":"文本输入 (TextInput/TextArea/Search)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display/arkts-common-components-text-display.md


const frontMatter = {
	title: '文本显示 (Text/Span)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-display',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '文本显示 (Text/Span)';

const assets = {

};



const toc = [{
  "value": "创建文本",
  "id": "创建文本",
  "level": 2
}, {
  "value": "添加子组件",
  "id": "添加子组件",
  "level": 2
}, {
  "value": "创建自定义文本样式",
  "id": "创建自定义文本样式",
  "level": 2
}, {
  "value": "添加事件",
  "id": "添加事件",
  "level": 2
}, {
  "value": "设置垂直居中",
  "id": "设置垂直居中",
  "level": 2
}, {
  "value": "设置选中菜单",
  "id": "设置选中菜单",
  "level": 2
}, {
  "value": "弹出选中菜单",
  "id": "弹出选中菜单",
  "level": 3
}, {
  "value": "关闭选中菜单",
  "id": "关闭选中菜单",
  "level": 3
}, {
  "value": "屏蔽系统菜单回调和自定义扩展菜单",
  "id": "屏蔽系统菜单回调和自定义扩展菜单",
  "level": 3
}, {
  "value": "屏蔽系统服务类菜单",
  "id": "屏蔽系统服务类菜单",
  "level": 3
}, {
  "value": "默认菜单支持自定义刷新能力",
  "id": "默认菜单支持自定义刷新能力",
  "level": 3
}, {
  "value": "设置AI菜单",
  "id": "设置ai菜单",
  "level": 2
}, {
  "value": "实现热搜榜",
  "id": "实现热搜榜",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "文本显示-textspan",
        children: "文本显示 (Text/Span)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text是文本组件，用于展示用户视图，如显示文章的文字内容。该组件支持绑定自定义文本选择菜单，用户可根据需要选择不同功能。此外，还可以扩展自定义菜单，丰富可用选项，进一步提升用户体验。Span则用于展示行内文本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "组件的API文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq#%E6%96%87%E6%9C%AC%E6%98%BE%E7%A4%BAtextspan%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",
        children: "文本显示（Text/Span）常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建文本",
      children: "创建文本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text可通过以下两种方式来创建："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "string字符串。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('我是一段文本')\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806500)/* ["default"] */.A) + "",
        width: "170",
        height: "60"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用Resource资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源引用类型可以通过$r创建Resource类型对象，文件位置为/resources/base/element/string.json，具体内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"string\": [\n    {\n      \"name\": \"module_desc\",\n      \"value\": \"模块描述\"\n    }\n  ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.module_desc')替换为实际资源文件，在本示例中该资源文件的value值为\"模块描述\"\nText($r('app.string.module_desc'))\n  .baselineOffset(0)\n  .fontSize(30)\n  .border({ width: 1 })\n  .padding(10)\n  .width(300)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(521706)/* ["default"] */.A) + "",
            width: "410",
            height: "123"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加子组件",
      children: "添加子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "只能作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "组件的子组件显示文本内容。可以在一个Text内添加多个Span来显示一段信息，例如产品说明书、承诺书等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Span。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Span组件需嵌入在Text组件中才能显示，单独使用时不会显示任何内容。Text与Span同时配置文本内容时，Span内容将覆盖Text内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.TextSpan_textContent_text')替换为实际资源文件，在本示例中该资源文件的value值为\"我是Text\"\nText($r('app.string.TextSpan_textContent_text')) {\n  // 请将$r('app.string.TextSpan_textContent_span')替换为实际资源文件，在本示例中该资源文件的value值为\"我是Span\"\n  Span($r('app.string.TextSpan_textContent_span'))\n}\n.padding(10)\n.borderWidth(1)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(146947)/* ["default"] */.A) + "",
            width: "122",
            height: "63"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置文本装饰线及颜色。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#decoration",
            children: "decoration"
          }), "设置文本装饰线及颜色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text() {\n  // 请将$r('app.string.TextSpan_textContent_span_one')替换为实际资源文件，在本示例中该资源文件的value值为\"我是Span1，\"\n  Span($r('app.string.TextSpan_textContent_span_one'))\n    .fontSize(16)\n    .fontColor(Color.Grey)\n    .decoration({ type: TextDecorationType.LineThrough, color: Color.Red })\n  // 请将$r('app.string.TextSpan_textContent_span_two')替换为实际资源文件，在本示例中该资源文件的value值为\"我是Span2\"\n  Span($r('app.string.TextSpan_textContent_span_two'))\n    .fontColor(Color.Blue)\n    .fontSize(16)\n    .fontStyle(FontStyle.Italic)\n    .decoration({ type: TextDecorationType.Underline, color: Color.Black })\n  // 请将$r('app.string.TextSpan_textContent_span_three')替换为实际资源文件，在本示例中该资源文件的value值为\"，我是Span3\"\n  Span($r('app.string.TextSpan_textContent_span_three'))\n    .fontSize(16)\n    .fontColor(Color.Grey)\n    .decoration({ type: TextDecorationType.Overline, color: Color.Green })\n}\n.borderWidth(1)\n.padding(10)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(314913)/* ["default"] */.A) + "",
            width: "322",
            height: "61"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#textcase",
            children: "textCase"
          }), "设置文字一直保持大写或者小写状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text() {\n  Span('I am Upper-span').fontSize(12)\n    .textCase(TextCase.UpperCase)\n}\n.borderWidth(1)\n.padding(10)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(797450)/* ["default"] */.A) + "",
            width: "166",
            height: "67"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于Span组件无尺寸信息，仅支持添加点击事件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
            children: "onClick"
          }), "、悬浮事件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#onhover",
            children: "onHover"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nexport struct TextSpanOnHover {\n  @State textStr1: string = '';\n  @State textStr2: string = '';\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          Text() {\n            Span('I am Upper-span')\n              .textCase(TextCase.UpperCase)\n              .fontSize(30)\n              .onClick(() => {\n                hilog.info(0x0000, 'Sample_TextComponent', 'Span onClick is triggering');\n                this.textStr1 = 'Span onClick is triggering';\n              })\n              .onHover(() => {\n                hilog.info(0x0000, 'Sample_TextComponent', 'Span onHover is triggering');\n                this.textStr2 = 'Span onHover is triggering';\n              })\n          }\n\n          Text('onClick：' + this.textStr1)\n            .fontSize(20)\n          Text('onHover：' + this.textStr2)\n            .fontSize(20)\n        }.width('100%')\n      }\n      .height('100%')\n    }\n    // ···\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(429045)/* ["default"] */.A) + "",
            width: "449",
            height: "132"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建自定义文本样式",
      children: "创建自定义文本样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text组件支持创建自定义文本样式，以下为修改文本样式的主要属性。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "baselineOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本基线的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentTransition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置数字翻牌效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本是否可复制粘贴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "decoration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本装饰线样式，如类型、颜色及其粗细。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableAutoSpacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启中文与西文的自动间距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableDataDetector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否进行文本特殊实体识别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字体相关属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字体颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFamily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字体族。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFeature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文字特性效果，比如数字等宽的特性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字体大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字体风格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字体粗细。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "halfLeading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本是否将行间距平分至行的顶部与底部。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "heightAdaptivePolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本自适应布局调整字号的方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "letterSpacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字符间距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本行高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineSpacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的行间距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marqueeOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置跑马灯配置项，如开关、步长、循环次数、方向等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自适应字体最大尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxLines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本最大显示行数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自适应字体最小尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optimizeTrailingSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制每行末尾空格的优化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "privacySensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否支持卡片敏感隐私信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shaderStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本渐变色样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textCase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本大小写转换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本段落在水平方向的对齐方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textIndent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置首行文本缩进。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textOverflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制文本超长处理方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textSelectable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本是否可选择。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textVerticalAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本段落在垂直方向的对齐方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wordBreak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置断行规则。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面对常用的接口进行举例说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textalign",
            children: "textAlign"
          }), "属性设置文本对齐样式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.TextAlign_Start')替换为实际资源文件，在本示例中该资源文件的value值为\"左对齐\"\nText($r('app.string.TextAlign_Start'))\n  .width(300)\n  .textAlign(TextAlign.Start)\n  .border({ width: 1 })\n  .padding(10)\n// 请将$r('app.string.TextAlign_Center')替换为实际资源文件，在本示例中该资源文件的value值为\"中间对齐\"\nText($r('app.string.TextAlign_Center'))\n  .width(300)\n  .textAlign(TextAlign.Center)\n  .border({ width: 1 })\n  .padding(10)\n// 请将$r('app.string.TextAlign_End')替换为实际资源文件，在本示例中该资源文件的value值为\"右对齐\"\nText($r('app.string.TextAlign_End'))\n  .width(300)\n  .textAlign(TextAlign.End)\n  .border({ width: 1 })\n  .padding(10)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(906267)/* ["default"] */.A) + "",
            width: "379",
            height: "154"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textoverflow",
            children: "textOverflow"
          }), "属性控制文本超长处理，textOverflow需配合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#maxlines",
            children: "maxLines"
          }), "一起使用（默认情况下文本自动折行）。从API version 18开始，文本超长时设置跑马灯的方式展示时，支持设置跑马灯的配置项，比如开关、步长、循环次数、方向等。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('This is the setting of textOverflow to Clip text content This is the setting of textOverflow ' +\n  'to None text content. This is the setting of textOverflow to Clip text content This is the setting ' +\n  'of textOverflow to None text content.')\n  .width(250)\n  .textOverflow({ overflow: TextOverflow.None })\n  .maxLines(1)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n// 'app.string.CustomTextStyle_textContent_epsis'资源文件中的value值为\n// '我是超长文本，超出的部分显示省略号 I am an extra long text, with ellipses displayed for any excess。'\nText($r('app.string.CustomTextStyle_textContent_epsis'))\n  .width(250)\n  .textOverflow({ overflow: TextOverflow.Ellipsis })\n  .maxLines(1)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n// 'app.string.CustomTextStyle_textContent_marq'资源文件中的value值为\n// '当文本溢出其尺寸时，文本将滚动显示\n// When the text overflows its dimensions,the text will scroll for displaying.'\nText($r('app.string.CustomTextStyle_textContent_marq'))\n  .width(250)\n  .textOverflow({ overflow: TextOverflow.MARQUEE })\n  .maxLines(1)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n// 'app.string.CustomTextStyle_textContent_marq_def'资源文件中的value值为\n// '当文本溢出其尺寸时，文本将滚动显示，支持设置跑马灯配置项\n// When the text overflows its dimensions, the text will scroll for displaying.'\nText($r('app.string.CustomTextStyle_textContent_marq_def'))\n  .width(250)\n  .textOverflow({ overflow: TextOverflow.MARQUEE })\n  .maxLines(1)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .marqueeOptions({\n    start: true,\n    fromStart: true,\n    step: 6,\n    loop: -1,\n    delay: 0,\n    fadeout: false,\n    marqueeStartPolicy: MarqueeStartPolicy.DEFAULT\n  })\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(774860)/* ["default"] */.A) + "",
            width: "567",
            height: "338"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#lineheight",
            children: "lineHeight"
          }), "属性设置文本行高。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('This is the text with the line height set. This is the text with the line height set.')\n  .width(300).fontSize(12).border({ width: 1 }).padding(10)\nText('This is the text with the line height set. This is the text with the line height set.')\n  .width(300)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .lineHeight(20)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(126084)/* ["default"] */.A) + "",
            width: "368",
            height: "142"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#decoration",
            children: "decoration"
          }), "属性设置文本装饰线样式、颜色及其粗细。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('This is the text')\n  .decoration({\n    type: TextDecorationType.LineThrough,\n    color: Color.Red\n  })\n  .borderWidth(1).padding(15).margin(5)\nText('This is the text')\n  .decoration({\n    type: TextDecorationType.Overline,\n    color: Color.Red\n  })\n  .borderWidth(1).padding(15).margin(5)\nText('This is the text')\n  .decoration({\n    type: TextDecorationType.Underline,\n    color: Color.Red\n  })\n  .borderWidth(1).padding(15).margin(5)\nText('This is the text')\n  .decoration({\n    type: TextDecorationType.Underline,\n    color: Color.Blue,\n    style: TextDecorationStyle.DASHED\n  })\n  .borderWidth(1).padding(15).margin(5)\nText('This is the text')\n  .decoration({\n    type: TextDecorationType.Underline,\n    color: Color.Blue,\n    style: TextDecorationStyle.DOTTED\n  })\n  .borderWidth(1).padding(15).margin(5)\nText('This is the text')\n  .decoration({\n    type: TextDecorationType.Underline,\n    color: Color.Blue,\n    style: TextDecorationStyle.DOUBLE\n  })\n  .borderWidth(1).padding(15).margin(5)\nText('This is the text')\n  .decoration({\n    type: TextDecorationType.Underline,\n    color: Color.Blue,\n    style: TextDecorationStyle.WAVY,\n    thicknessScale: 4\n  })\n  .borderWidth(1).padding(15).margin(5)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(632989)/* ["default"] */.A) + "",
            width: "129",
            height: "370"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#baselineoffset",
            children: "baselineOffset"
          }), "属性设置文本基线的偏移量。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('This is the text content with baselineOffset 0.')\n  .baselineOffset(0)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\nText('This is the text content with baselineOffset 30.')\n  .baselineOffset(30)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\nText('This is the text content with baselineOffset -20.')\n  .baselineOffset(-20)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(797526)/* ["default"] */.A) + "",
            width: "376",
            height: "207"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#letterspacing",
            children: "letterSpacing"
          }), "属性设置文本字符间距。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('This is the text content with letterSpacing 0.')\n  .letterSpacing(0)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\nText('This is the text content with letterSpacing 3.')\n  .letterSpacing(3)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\nText('This is the text content with letterSpacing -1.')\n  .letterSpacing(-1)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(9044)/* ["default"] */.A) + "",
            width: "371",
            height: "176"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#minfontsize",
            children: "minFontSize"
          }), "与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#maxfontsize",
            children: "maxFontSize"
          }), "自适应字体大小。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["minFontSize用于设置文本的最小显示字号，maxFontSize用于设置文本的最大显示字号。这两个属性必须同时设置才能生效，并且需要与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#maxlines",
            children: "maxLines"
          }), "属性或布局大小限制配合使用，单独设置任一属性将不会产生效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* 请将$r('app.string.CustomTextStyle_textContent_one_style')替换为实际资源文件，\n * 在本示例中该资源文件的value值为\"我的最大字号为30，最小字号为5，宽度为250，maxLines为1\"\n */\nText($r('app.string.CustomTextStyle_textContent_one_style'))\n  .width(250)\n  .maxLines(1)\n  .maxFontSize(30)\n  .minFontSize(5)\n  .border({ width: 1 })\n  .padding(10)\n  .margin(5)\n/* 请将$r('app.string.CustomTextStyle_textContent_two_style')替换为实际资源文件，\n * 在本示例中该资源文件的value值为\"我的最大字号为30，最小字号为5，宽度为250，maxLines为2\"\n */\nText($r('app.string.CustomTextStyle_textContent_two_style'))\n  .width(250)\n  .maxLines(2)\n  .maxFontSize(30)\n  .minFontSize(5)\n  .border({ width: 1 })\n  .padding(10)\n  .margin(5)\n/* 请将$r('app.string.CustomTextStyle_textContent_no_max')替换为实际资源文件，\n * 在本示例中该资源文件的value值为\"我的最大字号为30，最小字号为15，宽度为250,高度为50\"\n */\nText($r('app.string.CustomTextStyle_textContent_no_max'))\n  .width(250)\n  .height(50)\n  .maxFontSize(30)\n  .minFontSize(15)\n  .border({ width: 1 })\n  .padding(10)\n  .margin(5)\n/* 请将$r('app.string.CustomTextStyle_textContent_high')替换为实际资源文件，\n * 在本示例中该资源文件的value值为\"我的最大字号为30，最小字号为15，宽度为250,高度为100\"\n */\nText($r('app.string.CustomTextStyle_textContent_high'))\n  .width(250)\n  .height(100)\n  .maxFontSize(30)\n  .minFontSize(15)\n  .border({ width: 1 })\n  .padding(10)\n  .margin(5)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(171119)/* ["default"] */.A) + "",
            width: "389",
            height: "424"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textcase",
            children: "textCase"
          }), "属性设置文本大小写。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('This is the text content with textCase set to Normal.')\n  .textCase(TextCase.Normal)\n  .padding(10)\n  .border({ width: 1 })\n  .padding(10)\n  .margin(5)\n\n// 文本全小写展示\nText('This is the text content with textCase set to LowerCase.')\n  .textCase(TextCase.LowerCase)\n  .border({ width: 1 })\n  .padding(10)\n  .margin(5)\n\n// 文本全大写展示\nText('This is the text content with textCase set to UpperCase.')\n  .textCase(TextCase.UpperCase)\n  .border({ width: 1 })\n  .padding(10)\n  .margin(5)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(330550)/* ["default"] */.A) + "",
            width: "353",
            height: "203"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#copyoption9",
            children: "copyOption"
          }), "属性设置文本是否可复制粘贴。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.CustomTextStyle_textContent_incopy')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段可复制文本。\"\nText($r('app.string.CustomTextStyle_textContent_incopy'))\n  .fontSize(30)\n  .copyOption(CopyOptions.InApp)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(261977)/* ["default"] */.A) + "",
            width: "213",
            height: "128"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#fontfamily",
            children: "fontFamily"
          }), "属性设置字体列表。应用当前支持'HarmonyOS Sans'字体和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-font/js-apis-font",
            children: "注册自定义字体"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('This is the text content with fontFamily')\n  .fontSize(30)\n  .fontFamily('HarmonyOS Sans')\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(353057)/* ["default"] */.A) + "",
            width: "322",
            height: "86"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#contenttransition20",
            children: "contentTransition"
          }), "属性设置数字翻牌效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct ContentTransition {\n  private static readonly INITIAL_SCORE: number = 98;\n  @State number: number = ContentTransition.INITIAL_SCORE;\n  @State numberTransition: NumericTextTransition =\n    new NumericTextTransition({ flipDirection: FlipDirection.DOWN, enableBlur: false });\n  build() {\n    NavDestination() {\n      Column() {\n        Text(this.number + '')\n          .borderWidth(1)\n          .fontSize(40)\n          .contentTransition(this.numberTransition)\n        Button('chang number')\n          .onClick(() => {\n            this.number++\n          })\n          .margin(10)\n      }\n      .width('100%')\n      .height('100%')\n    }\n    // ···\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(25704)/* ["default"] */.A) + "",
            width: "239",
            height: "149"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#optimizetrailingspace20",
            children: "optimizeTrailingSpace"
          }), "设置是否在文本布局过程中优化每行末尾的空格，可解决行尾空格影响对齐显示效果问题。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  // 启用优化行尾空格功能\n  Text('Trimmed space enabled     ')\n    .fontSize(30)\n    .fontWeight(FontWeight.Bold)\n    .margin({ top: 20 })\n    .optimizeTrailingSpace(true)\n    .textAlign(TextAlign.Center)\n  // 不启用优化行尾空格功能\n  Text('Trimmed space disabled     ')\n    .fontSize(30)\n    .fontWeight(FontWeight.Bold)\n    .margin({ top: 20 })\n    .optimizeTrailingSpace(false)\n    .textAlign(TextAlign.Center)\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(503803)/* ["default"] */.A) + "",
            width: "404",
            height: "144"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#linespacing20",
            children: "lineSpacing"
          }), "设置文本的行间距。当不配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#linespacingoptions20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "LineSpacingOptions"
          }), "时，首行上方和尾行下方默认会有行间距，当onlyBetweenLines设置为true时，行间距仅适用于行与行之间，首行上方无额外的行间距。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Extend(Text)\nfunction style() {\n  .width(250)\n  .height(100)\n  .maxFontSize(30)\n  .minFontSize(15)\n  .border({ width: 1 })\n}\n\n@Entry\n@Component\nexport struct LineSpacing {\n  build() {\n    NavDestination() {\n      Column() {\n        Text('The line spacing of this context is set to 20_px, and the spacing is effective only between the lines.')\n          .lineSpacing(LengthMetrics.px(20), { onlyBetweenLines: true })\n          .style()\n      }\n    }\n    // ···\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(324094)/* ["default"] */.A) + "",
            width: "262",
            height: "117"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#enableautospacing20",
            children: "enableAutoSpacing"
          }), "设置是否开启中文与西文的自动间距。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct EnableAutoSpacing {\n  @State enableSpacing: boolean = false;\n\n  build() {\n    NavDestination() {\n    Column() {\n      Row({ space: 20 }) {\n        // 请将$r('app.string.Enable_automatic_spacing')替换为实际资源文件，在本示例中该资源文件的value值为\"开启自动间距\"\n        Button($r('app.string.Enable_automatic_spacing'))\n          .onClick(() => this.enableSpacing = true)\n          .backgroundColor(this.enableSpacing ? '#4CAF50' : '#E0E0E0')\n          .fontColor(this.enableSpacing ? Color.White : Color.Black)\n        // 请将$r('app.string.off_automatic_spacing')替换为实际资源文件，在本示例中该资源文件的value值为\"关闭自动间距\"\n        Button($r('app.string.off_automatic_spacing'))\n          .onClick(() => this.enableSpacing = false)\n          .backgroundColor(!this.enableSpacing ? '#F44336' : '#E0E0E0')\n          .fontColor(!this.enableSpacing ? Color.White : Color.Black)\n      }\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n      .margin({ top: 30, bottom: 20 })\n      // 请将$r('app.string.Automatic_spacing_has_been_enabled')替换为实际资源文件，在本示例中该资源文件的value值为\"当前状态:已开启自动间距\"\n      // 请将$r('app.string.Automatic_spacing_has_been_turned_off')替换为实际资源文件，在本示例中该资源文件的value值为\"当前状态:已关闭自动间距\"\n      Text(this.enableSpacing ? $r('app.string.Automatic_spacing_has_been_enabled') : $r('app.string.Automatic_spacing_has_been_turned_off'))\n        .fontSize(16)\n        .fontColor(this.enableSpacing ? '#4CAF50' : '#F44336')\n        .margin({ bottom: 20 })\n\n      // 设置是否应用中西文自动间距\n      /* 请将$r('app.string.Chinese_and_Western_Auto_Spacing_automatic_spacing')替换为实际资源文件，\n       * 在本示例中该资源文件的value值为\"中西文Auto Spacing自动间距\"\n       */\n      Text($r('app.string.Chinese_and_Western_Auto_Spacing_automatic_spacing'))\n        .fontSize(24)\n        .padding(15)\n        .backgroundColor('#F5F5F5')\n        .width('90%')\n        .enableAutoSpacing(this.enableSpacing)\n    }\n    .width('100%')\n    .height('100%')\n    .padding(20)\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(628290)/* ["default"] */.A) + "",
            width: "318",
            height: "166"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#shaderstyle20",
            children: "shaderStyle"
          }), "设置渐变色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct ShaderStyle {\n  @State message: string = 'Hello World';\n  @State linearGradientOptions: LinearGradientOptions =\n    {\n      direction: GradientDirection.LeftTop,\n      colors: [[Color.Red, 0.0], [Color.Blue, 0.3], [Color.Green, 0.5]],\n      repeating: true,\n    };\n\n  build() {\n    NavDestination() {\n      Column({ space: 5 }) {\n        // 请将$r('app.string.direction_LeftTop')替换为实际资源文件，在本示例中该资源文件的value值为\"direction为LeftTop的线性渐变\"\n        Text($r('app.string.direction_LeftTop')).fontSize(18).width('90%').fontColor(0xCCCCCC)\n          .margin({ top: 40, left: 40 })\n        Text(this.message)\n          .fontSize(50)\n          .width('80%')\n          .height(50)\n          .shaderStyle(this.linearGradientOptions)\n      }\n      .height('100%')\n      .width('100%')\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(94963)/* ["default"] */.A) + "",
            width: "304",
            height: "90"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件",
      children: "添加事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text组件可以添加通用事件，可以绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
        children: "onClick"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "等事件来响应操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n@Entry\n@Component\nexport struct GeneralEvents {\n  @State textStr1: string = '';\n  @State textStr2: string = '';\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          Text('This is a text component.')\n            .fontSize(30)\n            .onClick(() => {\n              hilog.info(0x0000, 'Sample_TextComponent', 'Text onClick is triggering');\n              this.textStr1 = 'Text onClick is triggering';\n            })\n            .onTouch(() => {\n              hilog.info(0x0000, 'Sample_TextComponent', 'Text onTouch is triggering');\n              this.textStr2 = 'Text onTouch is triggering';\n            })\n          Text('onClick：' + this.textStr1)\n            .fontSize(20)\n          Text('onTouch：' + this.textStr2)\n            .fontSize(20)\n        }.width('100%')\n      }\n      .height('100%')\n    }\n    // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(705500)/* ["default"] */.A) + "",
        width: "449",
        height: "132"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置垂直居中",
      children: "设置垂直居中"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，Text组件支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textverticalalign20",
        children: "textVerticalAlign"
      }), "属性实现文本段落在垂直方向的对齐。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例展示了如何通过textVerticalAlign属性设置文本垂直居中对齐效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.media.startIcon')替换为实际资源文件\nText() {\n  Span('Hello')\n    .fontSize(50)\n  ImageSpan($r('app.media.startIcon'))\n    .width(30).height(30)\n    .verticalAlign(ImageSpanAlignment.FOLLOW_PARAGRAPH)\n  Span('World')\n}\n.textVerticalAlign(TextVerticalAlign.CENTER)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(3191)/* ["default"] */.A) + "",
            width: "315",
            height: "110"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置选中菜单",
      children: "设置选中菜单"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "弹出选中菜单",
      children: "弹出选中菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置Text被选中时，会弹出包含复制、翻译、搜索的菜单。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Text组件需要设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#copyoption9",
            children: "copyOption"
          }), "属性才可以被选中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.selected_menu')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，用来展示选中菜单\"\nText($r('app.string.selected_menu'))\n  .fontSize(30)\n  .copyOption(CopyOptions.InApp)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(426239)/* ["default"] */.A) + "",
            width: "498",
            height: "196"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Text组件通过设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#bindselectionmenu11",
            children: "bindSelectionMenu"
          }), "属性绑定自定义选择菜单。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "controller: TextController = new TextController();\noptions: TextOptions = { controller: this.controller };\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.show_selected_menu')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，用来展示选中菜单\"\nText($r('app.string.show_selected_menu'), this.options)\n  .fontSize(30)\n  .copyOption(CopyOptions.InApp)\n  .bindSelectionMenu(TextSpanType.TEXT, this.RightClickTextCustomMenu, TextResponseType.RIGHT_CLICK, {\n    onAppear: () => {\n      // 请将$r('app.string.SelectMenu_Text_Ejected')替换为实际资源文件，在本示例中该资源文件的value值为\"自定义选择菜单弹出时触发该回调\"\n      hilog.info(0x0000, 'Sample_TextComponent',\n        this.getUIContext()\n          .getHostContext()!.resourceManager.getStringSync($r('app.string.SelectMenu_Text_Ejected').id));\n    },\n    onDisappear: () => {\n      // 'SelectMenu_Text_Close'资源文件中的value值为'自定义选择菜单关闭时触发该回调'\n      hilog.info(0x0000, 'Sample_TextComponent',\n        this.getUIContext()\n          .getHostContext()!.resourceManager.getStringSync($r('app.string.SelectMenu_Text_Close').id));\n    }\n  })\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义菜单项\n@Builder\nRightClickTextCustomMenu() {\n  Column() {\n    Menu() {\n      MenuItemGroup() {\n        // 请将$r('app.media.app_icon')替换为实际资源文件\n        MenuItem({ startIcon: $r('app.media.app_icon'), content: 'CustomMenu One', labelInfo: '' })\n          .onClick(() => {\n            // 使用closeSelectionMenu接口关闭菜单\n            this.controller.closeSelectionMenu();\n          })\n        MenuItem({ startIcon: $r('app.media.app_icon'), content: 'CustomMenu Two', labelInfo: '' })\n        MenuItem({ startIcon: $r('app.media.app_icon'), content: 'CustomMenu Three', labelInfo: '' })\n      }\n    }.backgroundColor('#F0F0F0')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(370138)/* ["default"] */.A) + "",
            width: "396",
            height: "178"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Text组件通过设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#editmenuoptions12",
            children: "editMenuOptions"
          }), "属性扩展自定义选择菜单，可以设置扩展项的文本内容、图标以及回调方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.show_selected_menu')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，用来展示选中菜单\"\nText($r('app.string.show_selected_menu'))\n  .fontSize(20)\n  .copyOption(CopyOptions.LocalDevice)\n  .editMenuOptions({\n    onCreateMenu: this.onCreateMenu, onMenuItemClick: this.onMenuItemClick\n  })\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义onCreateMenu，onMenuItemClick\n// 请将$r('app.media.app_icon')替换为实际资源文件\nonCreateMenu = (menuItems: Array<TextMenuItem>) => {\n  let item1: TextMenuItem = {\n    content: 'customMenu1',\n    icon: $r('app.media.app_icon'),\n    id: TextMenuItemId.of('customMenu1'),\n  };\n  let item2: TextMenuItem = {\n    content: 'customMenu2',\n    id: TextMenuItemId.of('customMenu2'),\n    icon: $r('app.media.app_icon'),\n  };\n  menuItems.push(item1);\n  menuItems.unshift(item2);\n  return menuItems;\n}\nonMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {\n  if (menuItem.id.equals(TextMenuItemId.of('customMenu2'))) {\n    // 请将$r('app.string.SelectMenu_Text_customMenu')替换为实际资源文件，在本示例中该资源文件的value值为\"拦截 id: customMenu2 start:\"\n    hilog.info(0x0000, 'Sample_TextComponent',\n      this.getUIContext().getHostContext()!.resourceManager.getStringSync($r('app.string.SelectMenu_Text_customMenu')\n        .id) + textRange.start + '; end:' +\n      textRange.end);\n    return true;\n  }\n  if (menuItem.id.equals(TextMenuItemId.COPY)) {\n    // 请将$r('app.string.SelectMenu_Text_copy')替换为实际资源文件，在本示例中该资源文件的value值为\"拦截 COPY start:\"\n    hilog.info(0x0000, 'Sample_TextComponent',\n      this.getUIContext().getHostContext()!.resourceManager.getStringSync($r('app.string.SelectMenu_Text_copy').id) +\n      textRange.start + '; end:' + textRange.end);\n    return true;\n  }\n  if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {\n    // 请将$r('app.string.SelectMenu_Text_SelectionAll')替换为实际资源文件，在本示例中该资源文件的value值为\"不拦截 SELECT_ALL start:\"\n    hilog.info(0x0000, 'Sample_TextComponent',\n      this.getUIContext()\n        .getHostContext()!.resourceManager.getStringSync($r('app.string.SelectMenu_Text_SelectionAll').id) +\n      textRange.start + '; end:' +\n      textRange.end);\n    return false;\n  }\n  return false;\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(269263)/* ["default"] */.A) + "",
            width: "396",
            height: "154"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关闭选中菜单",
      children: "关闭选中菜单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Text组件时，若需要实现点击空白处关闭选中的场景，分为以下两种情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Text组件区域内点击空白处，会正常关闭选中态和菜单；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在Text组件区域外点击空白处，前提是Text组件设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#selection11",
            children: "selection"
          }), "属性，具体示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nexport struct SelectionChange {\n  @State text: string =\n    'This is set selection to Selection text content This is set selection to Selection text content.';\n  @State start: number = 0;\n  @State end: number = 20;\n\n  build() {\n    NavDestination() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.Start }) {\n        Text(this.text)\n          .fontSize(12)\n          .border({ width: 1 })\n          .lineHeight(20)\n          .margin(30)\n          .copyOption(CopyOptions.InApp)\n          .selection(this.start, this.end)\n          .onTextSelectionChange((selectionStart, selectionEnd) => {\n            // 更新选中态位置\n            this.start = selectionStart;\n            this.end = selectionEnd;\n          })\n      }\n      .height(600)\n      .width(335)\n      .borderWidth(1)\n      .onClick(() => {\n        // 监听父组件的点击事件，将选中首尾位置均设置为-1，即可清除选中\n        this.start = -1;\n        this.end = -1;\n      })\n    }\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333980)/* ["default"] */.A) + "",
        width: "296",
        height: "301"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏蔽系统菜单回调和自定义扩展菜单",
      children: "屏蔽系统菜单回调和自定义扩展菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#editmenuoptions12",
        children: "editMenuOptions"
      }), "屏蔽系统菜单回调和自定义扩展菜单项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nexport struct CustomAndBlockMenus {\n  private static readonly CREATE_MENU_ITEM_ID_1: string = 'create1';\n  private static readonly CREATE_MENU_ITEM_ID_2: string = 'create2';\n  private static readonly PREPARE_MENU_ITEM_ID: string = 'prepare1';\n  private controller: TextController = new TextController();\n  @State private text: string = 'Text editMenuOptions';\n  @State private endIndex: number = 0;\n  @State blockCallbackText: string = '';\n\n  // 创建菜单项辅助方法\n  private createMenuItem(id: string, content: string): TextMenuItem {\n    // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n    return {\n      content: content,\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of(id)\n    };\n  }\n\n  // 查找菜单项索引\n  private findMenuItemIndex(menuItems: Array<TextMenuItem>, menuItemId: TextMenuItemId): number {\n    return menuItems.findIndex((item: TextMenuItem) => item.id.equals(menuItemId));\n  }\n\n  // 创建菜单回调\n  private onCreateMenu = (menuItems: Array<TextMenuItem>): Array<TextMenuItem> => {\n    const createItem1: TextMenuItem = this.createMenuItem(\n      CustomAndBlockMenus.CREATE_MENU_ITEM_ID_1,\n      'create1'\n    );\n\n    const createItem2: TextMenuItem = this.createMenuItem(\n      CustomAndBlockMenus.CREATE_MENU_ITEM_ID_2,\n      'create2'\n    );\n\n    // 添加自定义菜单项\n    menuItems.push(createItem1);\n    menuItems.unshift(createItem2);\n\n    // 移除不需要的系统菜单项\n    this.removeMenuItemById(menuItems, TextMenuItemId.AI_WRITER);\n    this.removeMenuItemById(menuItems, TextMenuItemId.TRANSLATE);\n\n    return menuItems;\n  }\n\n  // 移除指定菜单项\n  private removeMenuItemById(menuItems: Array<TextMenuItem>, menuItemId: TextMenuItemId): void {\n    const targetIndex: number = this.findMenuItemIndex(menuItems, menuItemId);\n    if (targetIndex !== -1) {\n      menuItems.splice(targetIndex, 1);\n    }\n  }\n\n  // 菜单项点击回调\n  private onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange): boolean => {\n    const menuItemId: TextMenuItemId = menuItem.id;\n\n    // 处理自定义菜单项，return false，点击自定义菜单项后菜单会关闭\n    if (menuItemId.equals(TextMenuItemId.of(CustomAndBlockMenus.CREATE_MENU_ITEM_ID_2))) {\n      let msg = '拦截 id: create2 start:' + textRange.start + '; end:' + textRange.end;\n      this.blockCallbackText = msg;\n      return false;\n    }\n    // 处理自定义菜单项，return true，点击自定义菜单项后菜单不会关闭\n    if (menuItemId.equals(TextMenuItemId.of(CustomAndBlockMenus.PREPARE_MENU_ITEM_ID))) {\n      let msg = '拦截 id: prepare1 start:' + textRange.start + '; end:+' + textRange.end;\n      this.blockCallbackText = msg;\n      return true;\n    }\n\n    // 处理系统菜单项，return true，拦截系统默认逻辑，此时点击复制菜单不会关闭\n    if (menuItemId.equals(TextMenuItemId.COPY)) {\n      let msg = '拦截 COPY start:' + textRange.start + '; end:' + textRange.end;\n      this.blockCallbackText = msg;\n      // 可以通过文本控制器关闭菜单，手柄也会消失，仅保持选中区域，点击可消失\n      this.controller.closeSelectionMenu();\n      return true;\n    }\n    // 处理系统菜单项，return false，不拦截系统默认逻辑，自定义逻辑亦会被执行\n    if (menuItemId.equals(TextMenuItemId.SELECT_ALL)) {\n      let msg = '不拦截 SELECT_ALL start:' + textRange.start + '; end:' + textRange.end;\n      this.blockCallbackText = msg;\n      return false;\n    }\n\n    return false;\n  }\n  // 准备菜单回调\n  private onPrepareMenu = (menuItems: Array<TextMenuItem>): Array<TextMenuItem> => {\n    const prepareItem: TextMenuItem = this.createMenuItem(\n      CustomAndBlockMenus.PREPARE_MENU_ITEM_ID,\n      `prepare1_${this.endIndex}`\n    );\n\n    menuItems.unshift(prepareItem);\n    return menuItems;\n  }\n  // 编辑菜单选项\n  @State private editMenuOptions: EditMenuOptions = {\n    onCreateMenu: this.onCreateMenu,\n    onMenuItemClick: this.onMenuItemClick,\n    onPrepareMenu: this.onPrepareMenu\n  };\n  // 文本选择变化回调\n  private onTextSelectionChange = (selectionStart: number, selectionEnd: number): void => {\n    this.endIndex = selectionEnd;\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(this.text, { controller: this.controller })\n          .fontSize(20)\n          .copyOption(CopyOptions.LocalDevice)\n          .editMenuOptions(this.editMenuOptions)\n          .margin({ top: 100 })\n          .onTextSelectionChange(this.onTextSelectionChange)\n        Text(this.blockCallbackText).borderWidth(1)\n      }\n      .width('90%')\n      .margin('5%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(617696)/* ["default"] */.A) + "",
        width: "467",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏蔽系统服务类菜单",
      children: "屏蔽系统服务类菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablesystemservicemenuitems20",
            children: "disableSystemServiceMenuItems"
          }), "屏蔽文本选择菜单内所有系统服务菜单项。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { TextMenuController } from '@kit.ArkUI';\n// xxx.ets\n@Entry\n@Component\nexport struct ServiceMenuItems {\n  aboutToAppear(): void {\n    // 禁用所有系统服务菜单\n    TextMenuController.disableSystemServiceMenuItems(true);\n  }\n\n  aboutToDisappear(): void {\n    // 页面消失恢复系统服务菜单\n    TextMenuController.disableSystemServiceMenuItems(false);\n  }\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          // 请将$r('app.string.Service_MenuItems_Text')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，长按弹出文本选择菜单。\"\n          Text($r('app.string.Service_MenuItems_Text'))\n            .height(60)\n            .fontStyle(FontStyle.Italic)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n            .copyOption(CopyOptions.InApp)\n            .editMenuOptions({\n              onCreateMenu: (menuItems: Array<TextMenuItem>) => {\n                // menuItems不包含被屏蔽的系统菜单项\n                return menuItems;\n              },\n              onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {\n                return false;\n              }\n            })\n        }.width('100%')\n      }\n      .height('100%')\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(406976)/* ["default"] */.A) + "",
            width: "323",
            height: "125"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablemenuitems20",
            children: "disableMenuItems"
          }), "屏蔽文本选择菜单内指定的系统服务菜单项。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { TextMenuController } from '@kit.ArkUI';\n\n// xxx.ets\n@Entry\n@Component\nexport struct DisableMenuItems {\n  aboutToAppear(): void {\n    // 禁用搜索菜单\n    TextMenuController.disableMenuItems([TextMenuItemId.SEARCH])\n  }\n\n  aboutToDisappear(): void {\n    // 恢复系统服务菜单\n    TextMenuController.disableMenuItems([])\n  }\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          // 请将$r('app.string.Service_MenuItems_Text')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，长按弹出文本选择菜单。\"\n          Text($r('app.string.Service_MenuItems_Text'))\n            .height(60)\n            .fontStyle(FontStyle.Italic)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n            .copyOption(CopyOptions.InApp)\n            .editMenuOptions({\n              onCreateMenu: (menuItems: Array<TextMenuItem>) => {\n                // menuItems不包含搜索\n                return menuItems;\n              },\n              onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {\n                return false\n              }\n            })\n        }.width('100%')\n      }\n      .height('100%')\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(357293)/* ["default"] */.A) + "",
            width: "312",
            height: "114"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认菜单支持自定义刷新能力",
      children: "默认菜单支持自定义刷新能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，当文本选择区域变化后显示菜单之前触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#%E5%B1%9E%E6%80%A7-1",
        children: "onPrepareMenu"
      }), "回调，可在该回调中进行菜单数据设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.media.xxx')替换为实际资源文件\n// xxx.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0000;\n@Entry\n@Component\n\nexport struct PrepareMenu {\n  @State text: string = 'Text editMenuOptions';\n  @State endIndex: number = 0;\n  onCreateMenu = (menuItems: Array<TextMenuItem>) => {\n    let item1: TextMenuItem = {\n      content: 'create1',\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('create1'),\n    };\n    let item2: TextMenuItem = {\n      content: 'create2',\n      id: TextMenuItemId.of('create2'),\n      icon: $r('app.media.startIcon'),\n    };\n    menuItems.push(item1);\n    menuItems.unshift(item2);\n    return menuItems;\n  }\n  onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {\n    if (menuItem.id.equals(TextMenuItemId.of('create2'))) {\n      hilog.info(DOMAIN, 'testTag', '%{public}s', 'intercept id: create2 start:' + textRange.start + '; end:' + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.of('prepare1'))) {\n      hilog.info(DOMAIN, 'testTag', '%{public}s', 'intercept id: prepare1 start:' + textRange.start + '; end:' + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.COPY)) {\n      hilog.info(DOMAIN, 'testTag', '%{public}s', 'intercept COPY start:' + textRange.start + '; end:' + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {\n      hilog.info(DOMAIN, 'testTag', '%{public}s', 'No interception SELECT_ALL start:' + textRange.start + '; end:' + textRange.end);\n      return false;\n    }\n    return false;\n  }\n  onPrepareMenu = (menuItems: Array<TextMenuItem>) => {\n    let item1: TextMenuItem = {\n      content: 'prepare1_' + this.endIndex,\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('prepare1'),\n    };\n    menuItems.unshift(item1);\n    return menuItems;\n  }\n  @State editMenuOptions: EditMenuOptions = {\n    onCreateMenu: this.onCreateMenu,\n    onMenuItemClick: this.onMenuItemClick,\n    onPrepareMenu: this.onPrepareMenu\n  };\n\n  build() {\n    NavDestination() {\n    Column() {\n      Text(this.text)\n        .fontSize(20)\n        .copyOption(CopyOptions.LocalDevice)\n        .editMenuOptions(this.editMenuOptions)\n        .margin({ top: 100 })\n        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {\n          this.endIndex = selectionEnd;\n        })\n    }\n    .width('90%')\n    .margin('5%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905074)/* ["default"] */.A) + "",
        width: "229",
        height: "228"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置ai菜单",
      children: "设置AI菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#enabledatadetector11",
        children: "enableDataDetector"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#datadetectorconfig11",
        children: "dataDetectorConfig"
      }), "属性实现AI菜单的显示。AI菜单的表现形式包括：单击AI实体（指可被识别的内容，包括地址、邮箱等）弹出菜单的实体识别选项，选中文本后，文本选择菜单与鼠标右键菜单中显示的实体识别选项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(266970)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持在文本选择菜单与鼠标右键菜单中显示实体识别选项。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#enabledatadetector11",
        children: "enableDataDetector"
      }), "设置为true，且", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#copyoption9",
        children: "copyOption"
      }), "设置为CopyOptions.LocalDevice时，该功能生效。菜单选项包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitemid12",
        children: "TextMenuItemId"
      }), "中的url(打开链接)、email(新建邮件)、phoneNumber(呼叫)、address(导航至该位置)、dateTime(新建日程提醒)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能生效时，需选中范围内，包括一个完整的AI实体，才能展示对应的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要单击AI实体弹出菜单的实体识别选项，可以配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#enabledatadetector11",
            children: "enableDataDetector"
          }), "为true。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果在单击的交互方式之外，还需要文本选择菜单与鼠标右键菜单中显示的实体识别选项，可以配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#enabledatadetector11",
            children: "enableDataDetector"
          }), "为true，且", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#copyoption9",
            children: "copyOption"
          }), "设置为CopyOptions.LocalDevice，具体示例如下所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 'app.string.AIMenu_Text_One'资源文件中的value值为'电话号码：(86) (755) ********  \\n \\n 链接：www.********.com\n// \\n \\n 邮箱：***@example.com\\n \\n 地址：XX省XX市XX区XXXX \\n \\n 时间：XX年XX月XX日XXXX'\nText($r('app.string.AIMenu_Text_One'))\n  .fontSize(16)\n  .copyOption(CopyOptions.LocalDevice)\n  .enableDataDetector(true)// 使能实体识别\n  .dataDetectorConfig({\n    // 配置识别样式\n    // types可支持PHONE_NUMBER电话号码、URL链接、EMAIL邮箱、ADDRESS地址、DATE_TIME时间\n    // types设置为null或者[]时，识别所有类型的实体\n    types: [], onDetectResultUpdate: (result: string) => {\n    }\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要调整识别出的样式，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#datadetectorconfig11",
            children: "dataDetectorConfig"
          }), "实现，具体可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdatadetectorconfig11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "TextDataDetectorConfig"
          }), "配置项。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要调整菜单的位置，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#editmenuoptions12",
            children: "editMenuOptions"
          }), "实现，具体可以参考示例", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E7%A4%BA%E4%BE%8B12%E6%96%87%E6%9C%AC%E6%89%A9%E5%B1%95%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95",
            children: "文本扩展自定义菜单"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(665630)/* ["default"] */.A) + "",
            width: "596",
            height: "295"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(669792)/* ["default"] */.A) + "",
        width: "575",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现热搜榜",
      children: "实现热搜榜"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#maxlines",
        children: "maxLines"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textoverflow",
        children: "textOverflow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textalign",
        children: "textAlign"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#constraintsize",
        children: "constraintSize"
      }), "属性展示了热搜榜的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentCard } from '../../common/Card';\n\n@Entry\n@Component\nexport struct TextHotSearch {\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          Column() {\n            Row() {\n              Text('1').fontSize(14).fontColor(Color.Red).margin({ left: 10, right: 10 })\n              // 请将$r('app.string.TextHotSearch_textContent_one')替换为实际资源文件，在本示例中该资源文件的value值为\"我是热搜词条1\"\n              Text($r('app.string.TextHotSearch_textContent_one'))\n                .fontSize(12)\n                .fontColor(Color.Blue)\n                .maxLines(1)\n                .textOverflow({ overflow: TextOverflow.Ellipsis })\n                .fontWeight(300)\n              // 请将$r('app.string.TextHotSearch_textContent_two')替换为实际资源文件，在本示例中该资源文件的value值为\"爆\"\n              Text($r('app.string.TextHotSearch_textContent_two'))\n                .margin({ left: 6 })\n                .textAlign(TextAlign.Center)\n                .fontSize(10)\n                .fontColor(Color.White)\n                .fontWeight(600)\n                .backgroundColor(0x770100)\n                .borderRadius(5)\n                .width(15)\n                .height(14)\n            }.width('100%').margin(5)\n\n            Row() {\n              Text('2').fontSize(14).fontColor(Color.Red).margin({ left: 10, right: 10 })\n              /* 请将$r('app.string.TextHotSearch_textContent_three')替换为实际资源文件，\n               * 在本示例中该资源文件的value值为\"我是热搜词条2 我是热搜词条2 我是热搜词条2 我是热搜词条2 我是热搜词条2\"\n               */\n              Text($r('app.string.TextHotSearch_textContent_three'))\n                .fontSize(12)\n                .fontColor(Color.Blue)\n                .fontWeight(300)\n                .constraintSize({ maxWidth: 200 })\n                .maxLines(1)\n                .textOverflow({ overflow: TextOverflow.Ellipsis })\n              // 请将$r('app.string.TextHotSearch_textContent_four')替换为实际资源文件，在本示例中该资源文件的value值为\"热\"\n              Text($r('app.string.TextHotSearch_textContent_four'))\n                .margin({ left: 6 })\n                .textAlign(TextAlign.Center)\n                .fontSize(10)\n                .fontColor(Color.White)\n                .fontWeight(600)\n                .backgroundColor(0xCC5500)\n                .borderRadius(5)\n                .width(15)\n                .height(14)\n            }.width('100%').margin(5)\n\n            Row() {\n              Text('3').fontSize(14).fontColor(Color.Orange).margin({ left: 10, right: 10 })\n              // 请将$r('app.string.TextHotSearch_textContent_five')替换为实际资源文件，在本示例中该资源文件的value值为\"我是热搜词条3\"\n              Text($r('app.string.TextHotSearch_textContent_five'))\n                .fontSize(12)\n                .fontColor(Color.Blue)\n                .fontWeight(300)\n                .maxLines(1)\n                .constraintSize({ maxWidth: 200 })\n                .textOverflow({ overflow: TextOverflow.Ellipsis })\n              // 请将$r('app.string.TextHotSearch_textContent_four')替换为实际资源文件，在本示例中该资源文件的value值为\"热\"\n              Text($r('app.string.TextHotSearch_textContent_four'))\n                .margin({ left: 6 })\n                .textAlign(TextAlign.Center)\n                .fontSize(10)\n                .fontColor(Color.White)\n                .fontWeight(600)\n                .backgroundColor(0xCC5500)\n                .borderRadius(5)\n                .width(15)\n                .height(14)\n            }.width('100%').margin(5)\n\n            Row() {\n              Text('4').fontSize(14).fontColor(Color.Grey).margin({ left: 10, right: 10 })\n              /* 请将$r('app.string.TextHotSearch_textContent_six')替换为实际资源文件，\n               * 在本示例中该资源文件的value值为\"我是热搜词条4 我是热搜词条4 我是热搜词条4 我是热搜词条4 我是热搜词条4\"\n               */\n              Text($r('app.string.TextHotSearch_textContent_six'))\n                .fontSize(12)\n                .fontColor(Color.Blue)\n                .fontWeight(300)\n                .constraintSize({ maxWidth: 200 })\n                .maxLines(1)\n                .textOverflow({ overflow: TextOverflow.Ellipsis })\n            }.width('100%').margin(5)\n          }.width('100%')\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549040)/* ["default"] */.A) + "",
        width: "497",
        height: "208"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/text-effects",
          children: "文字特效合集"
        })
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
3191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437847-cb3eb3803307b8ac7968af58f9e7336e.png");

},
353057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
171119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477797-3e0b82ae5f2b5abada3aabbbbec7e2d6.png");

},
266970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
126084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477795-7c7d5fb18095cb023e1e2fa5afeb1716.png");

},
632989(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798146-4b4323711997806fe9133430ba5b5551.jpg");

},
806500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
774860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957794-dfd94a91942d0a5e494da3589254b8e7.gif");

},
906267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAACaCAYAAABIUeiYAAAgAElEQVR4nO3deZwcVbn/8c9zTlV3zyQk7JAYiEuAICByCbJESMIuARQBZYtJ2EERFUGQnyzywoUk7CDgFYPKKm5X4SqKgiCoBEHQq0E2IYDsJGSW7qpznt8f1d0zk2TCRDMhST/v16tmJj3VVdX9mnzr9KlznhJVVYwxxqzW3Nt9AMYYYwafhb0xxrQAC3tjjGkBFvbGGNMCLOyNMaYFWNgbY0wLsLA3xpgWYGFvjDEtwMLeGGNagIW9Mca0AAt7Y4xpAUl/v1BVVJUQAlmWUSqViick/T7FGGPMCpJlGQB5npOmKc45nOu//b7UsBcRnn32WcaOHYuq4pxr7sAYY8zbp1QqNRvknZ2deO+bub0k/YZ94wzhnKNUKrFgwQJijNayN8aYlUC1WqVUKtHe3o5zrt+Qb1hqn72q4r2ns7MTAO/98jtSY4wx/7ZyuQwUoT+QRrhdoDXGmBZgYW+MMS3Awt4YY1qAhb0xxrQAC3tjjGkBFvbGGNMCLOyNMaYFrMAZUrHnR62fY5SlnG5CfQUAqf/cz+Hqkh+GvNfP9W1IsuT1pff+GuvL0g7QGGNWGSsw7Ouzu/oN5iWtL4v8e1l3uWhQNwJ/kX839/Vv7MMYY1YBKyzstR6k0shXeItsXYYWdb/bWdI2Yq/zjTa/i7XgjTGrsRWWcF1dGS+98joLO7t7wlliv+uHEMjzHNWeCpwNixZjy7LAgw8+xGOPPdHncaWoCNf3MUdXdzc33XwztSxHgSwsfhzFfpfpJRpjzEprhYV9Wk6ZPPmj3Pnru4v29Fv0mBSF2BqHV3SxdHV1Ua1WSdO0z7qK8OXzzuemm29BobnEGFEcUWkuQSEttXPxpVdxyqlfJI+Cc0kz3FUhBCVG5S3qChljzCpjULpxGmHb0Oi5UecYN24ckUZ8S7PHfFEzZ13C3LlzmxuKOBIPO2y/HdOPnNantz0odHTVCPS5DMysiy7jz488Qh5Cr30keJ+wxhpr84c//IkpU46mu7tKeyVF6p1NeZ7z7dnXkiQJpdS6d4wxq75BCft/vfQqkw/4GLUIaZoSa50kvo1qFCZ/9GAcWrTZ1RPFoyhCJHGBvfbYjbPOOhNfSlHvcb5EHgRxKX9++M+ss+47yKLiejW709QR8JBUyCJUBLJaYNtx2zFq442pZpHLr/gGW261FXtMmoCXCHjyPCeEiHOOq771LUKMfPKEY4qTkBPEW9AbY1YPotp/z7SqMm/ePEaPHk2e54jIW9ZMBlgwfz73PfAgkpTo7q6ReuW88y5gvfU24Oijp5AmDlFBVMhdfYCjKiGrMWLDEWz9/q3RGMEJ4gQE8gj7TT6Q6dOn8cILz3DTzTcADlQIQRFfIiAkDt41cgNuuP66elgLtRCY+/fHOWLaVC6ccQGTJk3AuZ5um9NOO4P7/nA/P/7hDxi2xlBKSULiPTEGK+tsjFlpNcrQx9j/9c/eK/crxqjPPPOMioiGEDTGuLTVm0Je0yzLNATVPKp2Zbnu+MHd9J7f/VFrWa4x5sW2gmrUUCwxasijxjyqZqrPPfMv3W7bHbRWyzUPURd0dui47cfr3Mef0s5qpp21oB3VmnZluXbVgk7aa389/8IrtSuoZrWo3V3dGmpV1RA15EGzLOj99/9Rd/jgRD3/glnamQV97c1OnbTXPrrDLpP01dde16iqWVbT4sCyYjHGmJVUjFFFZEDrDko/hfMpSeJwLiLATTffSrWaMW67/yJJ+raUFalPshKcE7JqNzhYd/11WWP4cI6YMhWc0NWd47xj9OiNSZIEjUopTfCJkqYO56Ba7cI7SFKhXEmLfnoRnHMkiWPcdtvxizvu4H9+9nN22GkCu+85mWot8OOf3M6aa62JRiVJ0uJThTHGrEaWe9grxdxXcKhCLQvMvPgyxu2wIz7xBAXFo/WLs1GlOVdWgVJbCSSSE7n1xz/kb/94glt+8L98/LCjGDFyFEniuOaaa5k8eV9AibH3MMy+IS1JqdgHUM3hjQULOeqYExFXon3IcBRPtaZ8/YKZdHRlRBHyEBGXoNEtYVKWMcasmpb7BVoBYgggnjwKv/jVnVQqZR6a8yA77jQBdeCkTJ4FYt5BuVShmNWqfPncc9h55/G0V8pUSo5KKeWss87kvK9+jSRt5/KLLsUpHHfMdGbP/jYzL7yUz59ycn2/Hhd9fdSNgjr++exL/PS2n/HAnAf569/+Bl7Yftx2fPnsL7LpmHcRQ+TOu37H1y+8iIm77Q7q2XTMJmw65j0c8JF9eN/7tsDZ8EtjzGpgEEbjKIkrWum1Ws45Xz6PncbvwKUzLkAFcoGf/uw3zLhgFvf94U5EtTm8UkTI8wAKrl4354AP78usiy6hq7vGJmPGEPOcJE2YPfvbHHnkMRxz9LGsPbyCqEOQXmEvHHPc8WR5xi4TduHTnz2JtdZZk7XWGMawIRW8RMRFdp00nq3evxUdHR28/OLL/ObX93DnL3/FDttvy+bv3ZRyWlr+b5ExxqxggxD2goojq+WceOJJeBEunnUBoooQcMXIeJwL5KFGyaU9A+01IlIvqSDFgMxqLaOrs0qlfTjf+c4NTJ96GFFhs03GsOUWmzNh4kQefej3SzoMfvrTW/FeqGUBn3om7b4Hl118CVtvsXl98L/inGPKlGm8/vpL/OH+37HdtltzxhdOohjZb1NojTGrh0Hps88jfO+mW5g79+98Z/a1iCoOQURxKKKRmNdIvcOJ9CzOkdYv4GYh0Nld47RTv8iQtqF89bxz+cbVV/P0s88D4D1cc/WVPPrQH1GK0NZFRpGWEsWLUi4lECOxlrP28GF4V7xs54pxn5VKhUQ8DiH1gpOIFwY0zNQYY1YFg3IF8sVXX+Pqq7/JIYcexsajRoFGNBbFxqQxd1YFh6O4fLr4Ij7hgQfm8NBDj3Dd7GvZYftt2Hj0Rhx00MeanwTqQ/CLXhtV0rTXSB+lOSNWKMb+12qBdddbb8kHrT39/cU2XU8pZmOMWcUNSpodccRUttr6/Xz6pGMZMqRM0rjKqQ7B4dTh1BeVJjUuYXG8+WbGqaedxfiddmbURusjUuWGG64jaOS5F15CtaeCpojQ0dGxhJdT1KPXENl33wNZe831aG+rLPmNUI8ozV7/xWo+GGPMKmxQRuNcOWsGY987lj89/AgnnPR5klKJWrUKqqhA8QW2Gb87LjrqZcsIMWPWrAsYv+P2fHjy3ox+x/p8/av/rx6/FaIoDz14HyBkeeSyS69k5Ih38M+XX2Jh1s3mW2zaUwPHBTqznFdefo3pU09AXMqPfnIDohGRoshaHnJEAknswkkXxVDOokvIKh4bY1Yng1IbZ9NN340T2GijUZx37pngk/qom8Wbyg4pfieKONh6i81JnTB79rcYOXIE9aY7QH20TVFGzQEP/GEOr732K7JEmLDLzkzeZ49eBc+EUlri2GOOY/jwYdx2+60kSWN0f48YY1FnR5QQcpJkBd7PxRhjVpBBqI0TUS2mVQU8kWJ4TUJP/3qxZxCl+KKN3nItgt8JnZ1dtLW1LbK/SKPJHYMSo+A9VFG8CHkeqaSuHviRjq5uEl/GO4dPGieMHlmWFbNxVYkxNmtMWD0cY8yqQJehNs4gNGMdUr8piQc8SmzcB6r3aaX5c2gmsOCaZ4T29vYlbrv5kxecL7ZTkqKnPelTjtjR3tbG0grnN+riS30kEGBBb4xZLQ1Sn0Wx2UZLfmnxWYymr19IxfWK5iWcqRYdHSMRpM8poNd2e11s7bdqvjHGtIbBCfsl3WO2n6yNfee99rr196K9S/Uptb2eWTzcuIG40LubZ7H1Fnu+Mca0jsEJ+wGEfIPv9xCW8Hmgz7bcUrcvi65njDEtzJLQGGNagIW9Mca0AAt7Y4xpARb2xhjTAizsjTGmBVjYG2NMC7CwN8aYFrBMYZ/n+WAdhzHGmGVQq9UGVBOnYUCTqlSVkSNH4r0nhPBvH5wxxpjlI01Tsiwb8PoDCvskSXj11VcJISx26z9jjDErnnMO732ziONbGXDYn3/++YjIMn1sMMYYMzgapY3POOOMAa0/oHr273znO5v9Q42ywMYYY94+tVoNEaFSqQyoe31A7f/G+cDu4mSMMSuHNE0RkQF3rQ94NM5b36HKGGPMiiIiy3SzJRtnb4wxLcDC3hhjWoCFvTHGtAALe2OMaQEW9sYY0wIs7I0xpgVY2BtjTAuwWVJmhYuAALro9whusekc2rMS9V8K5HnWnOQXY8Q5h0btWac3J70e1eY3XcrckUWPLSgQI4mXnmNZytQTDTmyyBhoReg5Qu31dJvDYgaftezNCidL+B6j8vIrr/LGGwsWWVtBFwlxhTwPgFCrZYg4YlTyENHi132WLMvpmWMoxVmF0M8Sl3iM89/s4M2ODmpd3fQ+YSxpGyHkvPjK60SFopRUcdqIPc9svOr6c4wZfBb2ZoUTXcIC7D15Mmef++XiHwJIBHEs6c/0xX+9zIRddqe7Ky9WVgfOE5AlLI6uWs6bCzvrByD17S6JIsTFlqnTjuawQ6dSqrTVtwHaT4NcfcKkD32Es78yk5xGwC9pf9LP48Ysf9aNY94Wqtq3BIcT0rZ2XFuZenzjcIR63odMKaWNLhRlxMiNeO8WW7Prbntz5523s8YaQ9lxx4lLzE7nIE0T5r/xBo889CBZlpPVMl5+vZtGCztG8N5RTmHD9YYhi5SNdZJACtVaoFwqumeeevpZ/vnUC8SoDBnSzsKFC2lra6Mrz/nYoYfyg+/fwgfHj6dS8nR2dDBk6FA0KCHPeP/WW7LG0CEApKkFvhl8FvZmhXvl9YW0lStUhiRk3YoK5CLEmPDKKwvoqoFDEYUoQqUEPm2cGOodIV65+LJZHH30cez5of347W9/w223/RAnffvbASLC5z53Kk/mj6MCaVri+7fcyiWXX9c8JlXFe88WW27CpRdfgE88lVLa3IYkFbLqApLUEWLAec+cP83ha1+5HBHHkCHtdHdXUY2Ii/hUaUuFs88+m46ODiptbZSThO7ODoiByy+/nHHbvh9VKxluVowBlTgePXo0eZ4jIlYQzfxHFDj4sGP5xz/+gU8TXP0xcQm5CiHPKCUO0aLHXbwnDxm3fO87jHn3O5qPb7fTBD5ywEf4wmmnsHBhJ23tbTggXcKfZ2euTJ1+NP986gnuvuvXpN4RY0STvhdQP3XSySRJiYMP/BiXXHYJ3iVo/ULqU0+/TAwZ7xyxNuuvvxbfuOZKco0kkoDArT/4ETNmzODGG69n9MgROA34UjvVqDz06N/49Gc/z5dOP43Je03CC3R3V0mTBOdkwDefMGZRjUbKQO4zYi17s8KFEBm7+WZ87ztXNXutI7D9+N0YP/4DXHLhV5vd9hEYv9OeJL4EBBBFNSGQ4H2KA/72f3O55trZhBjqF18T0iQFp5xxxqm8a9SGSBScVPCJQzQn78457ZxzuHTG15v7f+Th/+PUU05h1AbrsNuED+JTh6jDq+O6W35MqVRmz713o1JKIEScQpLUAMfHDzyAl19+mcOnHMmXvnQme+2xKyLC//zodi6ceQEnHn8U++89Ceqvq61SKvZqd34zK4iFvVnhPBGvAafFUMtGsDvNSTTQaG83u2IUZJGroY1hkwJ0dHTwl7/8lR13+gCJd6AJXV1dzJnzR2Jeqw94LNZWBY2RJEn4y6N/5fhPnsTVV1xGjIoGZd999iJxgeOPPxZxDgEShdvuupfON+dz3LHHojFDREi9qw/XKY746KOOYvS7xnDGmWdy4823snBBF8/Pm8fMGV9n/E4f6HUUPV9t1KVZUSzszQon1HCUcPVROEist6Aj0hh/3jcZlypGxTnHzK9/Ba/1IZcBdpk0gVjrHfbF9rz3iDq+O/u/+djHDuEvf3+Me++5j1IpJeSRJ55+nE+d/Bl++cufN3efZzXKlQoxRkppWty5TSFtjPUHEGGzzTbhHSM25onHn8V7zzs2GsWo0RsRHM2TWM9Lc/QejGnMYLKwNytcBFzq0ea8JEcEIo6kVC768OvN+jz03Fi5PyLFXdREik8KEfD1lNZFwtSLIAjeO0aO2JBPTJnKccd/ku7OLqZPn05bRRi72Sa89urr3HDjDzjskANpjL3Ps4wkKfr7q9UqlbZ2sqj878/v4KKLLqKjswuAceN25MIZ55PFyLTpR3PgwQfhnGP40DU45OMfZ/r0aZQTobtao1IuL9f31pj+WNibFa9UQpMyC7pyUp8UffMC0Zd56Y0FdNQoWviq4JQsy+jq6gSGLXFztVpGnudsP34iXhRIiAHK5TJ5Ma5nyc+rdjN1+lRm33ALtTwy5YjDAUU1ctNNt3D4EdPYa89dWW/NIX2eJyIMHTqUvffZl5deW4ACEydO5MTjjmLjjUfjpWjFl0vCLTfMJsuV5557ke/ddBPf/Na3mX3ddYzfaUe+9tXze82oNWZwWdibFa5Wy3nyyb8xafc9cXicQnRCUOXPj/yVCRP3AAk4VZyLpGkZkcVjsdFm994T8px7772ruYYCu0zYHVzS07bXXmUTBBLnyGKkUi4jawzj57+4g48fuB+qNTbeeCM233wzjpp+FD/9yc00WvdQhH0IgW99678Zvs66lOpDNPfZez8OPvgAjjtyOi5WQcFLwgWzLuInP/oFd933K04/7bO4erkH0aILyi9eI8KY5c7C3qxQAvzkxtkAfYYcBoWdd9mTbbb5Ly6/dEazfoz26W6vPyoQJaISiUC5nJI4j6jifQQ8WR4IWY1EXL0PP8er9My5EnBJwl8ffoRq53z23vcjzLz0G0zcdRc2XGdNRDK+++0rmTv379RqxcVktBiBg0S8F0aO3BAXc0KMROdYuLCTtdZcu/gkkVTqr6B4bTlK2fecrtI0HZT315j+WNibFa4xXyPP82YxMxGoVqukad8/ycZM2xBCc93mdrQYthmyGkrOKaecTp5VASiXK6TeozFSrNUYYNnYMHR2VZn6iSP5yEcP4IzTTubhh+Zw3LHH8+Pv34STFBFl7NjNCDHr75UAHkEQKWbpjtt2G2zYvFkZ2Z+lWSnEWLT08zzv83hjzl/voC+GafpmK7m9rcLIDdbnheef46UXX+OlF19l3rx5bLjhBrS1FRdAo8ai1k498FVh330PYvTod/Hlc75EDIHvzr6G1197hR//5HZwsLCjq7jY6xP6m3uoIuQIp572/0ADozca1WeATfNpNp7evM2sZW9WuMYs7N4B7hyEEKhWq33W7W8UTpokEJVatcpOO32AH+50c5+LnQsXdpMknhACXd1VnnrqKTZ597uJGhAVTjj+M8xf8Aa33XYXilLyjoov8aMf3kr70DWIKNU8p00rvL6gg6ee/icf2nO3PvvQ+ms55ZQvcNfd9zB79tV4kSLYG/MABJxLqLS1Lb830Jh/g4W9WSnEWNSlH2hfdswDMQTKpZSi+g30dNN42ttL3H33vZx++hlEcVQq7Vxx5UWoBpykHHLIwRz/6WOoVFJClpOWElDPmsPXKM48CFOOmMprr82nq7NK+5AhnHvOl1h0XPyuu+3Nwq5urrz6Kt635ZaLdeGEEKjVuslqtf/o/THmP2W1ccxKIWqxJI5eref+ByZW80jipD6SpVETvme6UojFpCVxxZQqVeh4cyHDhrUBDlTIiThxaIj4RkoLBAKCbzbQ8xySBEJQiHnzuoIivDF/AcOHDyMqxQViqV9nqG8vqpJlAXGeUmL/d8zyZbVxzCrHSc9dqgZyB6dy0rsJvXhXj+/1a6l/GTZsaJ8Hk8YlK9+3Oe4b26vvvlT/X+K8gO/55CHAWsOHNY+/p+um57idCOWS/Tczbz+7QGuMMS3Awt4YY1qAhb0xxrQAC3tjjGkBFvbGGNMCLOyNMaYFWNgbY0wLsLA3xpgWYGFvjDEtwMLeGGNawIDmcZdKJWKMiMhS7wVqjDFmxcjzHFVd7D4P/Rlw0Y5HH32UGGOfuwsZY4x5e/S++c9ADLhlP27cOJIkoWalWo0x5m1XqVTIsoxyuTyg9QcU9m+++SYiQq1WsxLHxhizEuju7kZE6OzsHND6Awr7JEmoVqvEGJfpY4MxxpjBUavVSJKEUqk0oPUHlNwhBEQE51y/9+I0xhiz4qRpiogM6MYlsAwXaFXV7lRljDErkWVpfNvQGmOMaQEW9sYY0wIs7I0xpgVY2BtjTAuwsDfGmBZgYW+MMS3Awt4YY1qAhb0xZrWmqnR3dzd/jjEOeCLS0sQY+4xzX7BgwVK323vdGCMhBEII//FxDJTVPjDGrPa89+R5jnNuuU0MbcxerdVqpGlKpVJ5y0lOIQTyPKdUKq3wCsLWsjfGrKYUUGq1Kogw/oPjOfvss5uP96zT3zNZZN2+6zdKvk+ffiQTJ03CJwnOSb/bjLGoQrDrrrtz/fU3Fp8M/rMXuEysZW+MWYU1uk0EEFRBFaJTvEaEQLmU8sIrb5AOXYuPH3ooAUVVcVIEc1Ah5DltqSPGSJZHAgJRQLL69kvkeU65DImUccTi+SIE30aXCkEUNOAU8uB4s7OTzs4q3hdtahGHauQT00/ggouvZfyk3SglHo9SLlXo7sqoVBxpWmLoGu3L/Z2ysDfGrBZUlccff5KZMy7ElYfhVBEiEc//PfYEWa3C1d+8sdnX3uhy8UlEY409d53A/vvvx9y5j3HsiSeRV0sgXYDDyxr4JHLPvbfVW+NFgEdAfUqpPBTUIQgalccee4zDP3EUIkKe57S1taEa8N7jvafscg4/5DCcg2oWyHNBa920t6V8+tMnccihBy/398fC3hizWogx0tXVwcMPP4wmFcChgHhHFkBjZM6cB5oXaJt995ITQ5X3bvoeRITN3zuWX//6lzil+MAAXH3V9fzmrl/z7HP/4ic//TmOSAw5Ac9f//53hlTauPrq6/Ba48QTjmWTMZvxwAP3AXD22edz++23cf/995Kmgheh2l2jXClRy5Xtx09kzGabcvN115DXAmlpcHrXRZdyRUFVmTdvHqNHjybPc6t6aYxZyfTtxgHQCLhAwJMDl15+Bd+/+Rbuu+duPD395I3edcUhgEdRjVSznDvuvJsP7b0nUMWJZ4899ucD22/LJ6YdzvRpJ6F5F4LgShVefG0+pXKZNudYZ3g7v/rl7UX3DhAieAcnn3wqc+Y8yB13/Jy2SgknkTcXdrL/hw9infXW4+ZbvkuivS6iDjBmVRXv/YBGF1nL3hizWugpww5ay1EvvLmwkxu+ezNHHHIwXhux3ldoPlQ8P+SRc845l8f+9iQnfmoaaeJYML+bT554MhtsuDb33/tLsmqNxHvwngMPmcbTzzzD7377K8oOkEBxGnGIRCDlootmMHPGpeyx+34cccThVIYKV1x+Fdtusy2XX34hebWLUqltUN8fC3tjzCpMen2PRTtfQCTBiWPatBNYe60NOfkzJzWfseg4nFh/tkYFgbZKhR98//tMmXIM++y3Fx2d3bgkZcSG69LZ1cnMmRdx7llnIkAtq5KKUvIOL+B94/OCoAgxQiQniuOzn/8UnV05N9xwE9F1se0HtufCWV8jKSV4HCFGsjxQKaWD8k5Z2BtjVmH1rhsgRCUnI/EpPvV85nOn8fyLz6MqbL/TboRalXLZofUgzvIA4kjShLt+9XOGlhJUAyLKqFEjeN/7xzJl2lFstvkWjBn7TpwoifPc9bvfc/c9f2DCztuTljxJmoIGksQVR6IOFU+MypsLOvnTI48y8+KLmDdvHhutP4oTP3kMSUm56pprmbj7hxja3s4njzuK7T+wHRtssD55VLyTgfbkDJiFvTFm9SDgJQUcnzv1LH4/58+USiW22mJzuua/SlarUmlfC1WHeE9ndzeVSjtP/vNxKuWkuHAbcpz3OJ9y8cWz2G2vfZk7dy4Xz/oaIkKpnHDSJ4/ni6efyT2//QWSgIqA9lxUzbKM3ffanaHD1+Hl51+iMnQIW26zNTddfz3tpTKOHJ84Djroo3RnkVkzLuWyS77BhdmFlCslhg0dys9++uPl/vZY2BtjVmGR5mVNdTgnHHbEdJ588lm+8tWvc8rnP8dVV1yI14BIRPGAI9af+frrb7DX5A8To5I4BxRDIwPgBLbcckvuufd+vPfUaoE0dewxcWduvf5mjjvheL5x9RVkUXv1+4Nzjq+cfz7tw9Zm7Jh3klYqHDH1OGbOmMl5Z3+xvndF8dx7zz387p7fcu/dv6CaB+YvWEB3V9egvFM2g9YYs4orRqKoKnvuuT//fHoeV15yMTvtsA1pUlySLQYRKkJAyBByhAAS6hdti0Vo1LyBzq4q9/3uPt797ndzyudPxXvBiZImwje/eSWjN94IFaGa1fqMUvRJwrbjxrHVlmOplEtoVJ556mm6O7twOKS5QF7t5o3XX0WAJPGsvfZabDRq5KC8Sxb2xpjVgneOww+fwuzZ17HNVmNJFKRekiDiUFLQYhFNAI/EoqXfUIxEFxA49NDDGTFiBDfe8G1CCBxwwEEAlEsJ7W1tfOH00xAR2oa096mQoKokiS8u00o3XpQsr7HbrnsgSn1/Sc+lZQkgESfFp4k4SDUULOyNMaswB/VWsnNw5NSD2WzMSJJyAomDJKVaU2qZEgLkFEuQelkFhSi+GJEjEY2RoMKFV1zLv55/mW9dfTkp8P0bb+L5f73ML+64G+98Ec6uTAwOyQMuViEW43pUBVHwqmS0c+/vH0IEJkzYERWlu9bd7EYKCBFPbLwGIJEBD7NfJtZnb4xZrTSCstFA3nmXiZQcxJAjvgyAc75nFq1q8zlOhPvn/InvXHcd533xVEasvy55Htho5Lp88fTT2G3SLmgE1UhUIYrw1NPPsMG66zW7gIrtO7Is44VX5/PZz36evfaaRClNUCKJLyH14Zm9B44O9nRVC3tjzOpHipHuTpXf/OY3tJchryk+7Rupb7wxn732O6BeWAGCKk/+4x/ssJt8OwUAAAKaSURBVN1/se/kPcizGt57hMj+++1NZ1cHzpeYMnU6z857ASmVERFOP+N0RKRPzZ2zzjqL397/IJuPHcN5556FA2IIJN6jRMDjUET/89r6A3pLrFyCMWZ1E/NAFOGxJ57gPe8ZQ9lLMQS+V3zFqOR5xpNPPc2mm2yCk0Y5Y08eIfVLCmFHLcArr7xKR9dCUGX4mmuz3lrDmi3zxieGRx99lKfnPcc+H/oQvlGGRwEpOnEiCa8vWMALz73AmHe9i3I5XeZ8XZZyCRb2xpjVj0ZidOQo3gt5VxWfQJKWm6s06tFnWUaSFOPsvfe9ttGrEhq9fq7394c81NdXxMli21VVVIo7Y3nni04brW9LAkpC0OIE4DSCSJ/tDOhlWm0cY0wrU1WUSMgVJ55yuURRxrInFEPIEElIU49qRJyjqJgQi6Ga2nv8Sk/QhzzgvJB4QPMirTVtruKc67lloavXvdei26ZnW/V5vCJoCIhzfT51DAYLe2PMakecxwNtzYb64pdA016tfOkzAsb1+bYon/ieTfaj55aDvp810p7f1rc32H0mNvTSGGNagIW9Mca0AAt7Y4xpARb2xhjTAizsjTGmBVjYG2NMC7CwN8aYFjCgsFdVQgiEEAb7eIwxxgxArVYjhMBSiiD0MaBJVUmSkCRJs9CPMcaYt1epVGqWSxiIAbXsvffWsjfGmJVIlmXNOjwD0W/LvlFYJ89zarUapVJp+RyhMcaY5SrPc5xzSy1W2W/Vy0YluBBCs4KbMcaYlUuje72R0/219Jda4jjPc5LEaqUZY8zKTFXJ85w0TftdZ6lhb4wxZvVg4+yNMaYFWNgbY0wLsLA3xpgWYGFvjDEtwMLeGGNagIW9Mca0AAt7Y4xpARb2xhjTAv4/DvEyCVGzG7QAAAAASUVORK5CYII=");

},
357293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798156-8576146ae4131839db2cc8f20b99820e.jpg");

},
705500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798152-4275760d158140b468914f95bd646d9b.gif");

},
905074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437851-cbf1e3e54a7034840c87955065ec369e.gif");

},
521706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798142-e04b4f1625ce36b8a9f8e990242eb4b0.png");

},
146947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
261977(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437843-959f75ea0571ff9a740e911d5b4fc056.png");

},
426239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957802-37070621c86bd26f5811ef1170bdf435.jpg");

},
503803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798150-7b9ba7727662c4b5d12803dd9af54af7.jpg");

},
94963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477801-3c295ab9a067e8b99b6e1dcc733f7dc1.png");

},
406976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477805-ca7ea7556461566a410ac45a286fd680.jpg");

},
370138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477803-13844ff357c28f1c1c33caf2610b9485.gif");

},
797526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437841-50d753a87bee92fa206ac5c4405348f1.png");

},
628290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957800-ca8c740ce6f45f6c8f168c3d57fc8b02.gif");

},
669792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477807-8911210654d048ef0795dcf3e82be39d.png");

},
429045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798144-72733aa955600461e948c03f51deb410.gif");

},
314913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957792-31578dbca8bb73534cc07cb18e97dfc2.png");

},
665630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957806-7a7fe4ef716cc31f6dd1a20b86bdda84.png");

},
330550(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798148-86dfad7cb81cec76b461eff9da2f7cfc.png");

},
9044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957796-856dd34635aa4ed7d0ac7e726b286eb4.png");

},
269263(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798154-a50a2281fd782ff1e939c56339598c54.gif");

},
797450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAABDCAYAAAAWAX5GAAAOXElEQVR4nO2de5QVxZ3HP1XVfe8wwwjo4JqggkaJj2hgYySCMMAgbwlgFFGMgEYJvtCowKorLGgwPgFdsx7fL5RVEwlghBiFqIuPaNzdc7K77skeGfAVPAwzcB/dXfXbP/remQFmFJxxuJj+nDPn3tuPX1dXfevXv/pVNSgRERISSgy9rwuQkNASiTATSpJEmAklSSLMhJIkEWZCSZIIM6EkSYSZUJIkwkwoSRJhJpQkiTATSpJEmAklSSLMhJKkTcIUEcIwJAzD9ipPwn5IGIYEQdCuNr22nOz7PsYYRIQoitqrTAn7Gb7vN2rAOdcuNtskTBEhk8lgrSWVSrVLgRL2P4IgaHRS7UWbhAmgtW7XAiXsf6RSKUQEpVS72UwGPwklSSLMhJIkEWZCSZIIM6EkSYSZUJIkwkwoSRJhJpQkbc5jdizF2SVV+IN261sd/Xb93qb8WiifKHAFU8XdimKNFGdgXLM9+0++eT8TpiZuguat6mgXcaqi3eaftLCteO092daaDdhrZapd7YNC9kBq7dyBO4j9UJhF2mdOtoggNIlGdtrT8mfbtqm9EqYUyrerjT1h//GSzenQbhQEAdbaxt8tTfgX94dhyK7/ek0UOsRBFDX3kq7xnCAIEJHdVrq0tsikuDrKWosTsK4oT0UmmyW+vEKI91nnmo4TAI0ATsCJEDmLoMlks1gnhJGNt1tHPsgTRhYRsCJYaxERcrlcq/UlImSzWZwIgiIIQ0QU1sWe0zniPwvOKUQ0iMa54r1qrBVsJNiIxvosXtc5Ry6XY8uWLeRyucZ6zOfzu9V9R9NhwnTOobVmzJgxjYLUeufLNzQ0EAQBV155JRs2bNhNuPPm3czq1Wvi4Aooeo/iCqdhw4aRzWYb526LfPTRR4wcOXK3MllrmThxItoYnGh+OOEsRo+dwNBho5h15Ww2bv6E0AqC5oONHzNqzHhqThvN6ePO4L77HyGTs2yrz4LSTDnvAoYNG8Npw8cwfuIkhgwdwYQzJiFosrmA0WMnMvGMyQypGcltty+lrm4bAGVlZa3WmVIKz/NYs+Ylpk67mAU3/YLP6raDMjgUa3//KsPHTGDwaaMZO/5Mnvn1KhqyIUGYb7QRBhFPLXuWBQtvxjnX2GnLyspYsWIF999/P1VVVaTTaUQE5xy1tbVMnTo1Pn8fLWns0Ee5Uor6+u2xlykItTmVlZU4gTfeeIuPPv6Efv36YUxTOF/fsIOFN93CyFHDixYBsNbx4EMPkc0FeL6PtbaZbaGi8wHs2JHdbaGB1potWz7DOSGysLn2U5546hHSvsfWum1ccOFMBldXM2fOLLp2q6KuLsNjjz6A0vD2H9/jlP6DWLVqJZ0rK8hmA2bPnkvv3kcW7k9QCqyNvWkmE/HLf7kDay2bN21mzLgfcv3cuYwaNQJjdLP7aXoaOBHGjRtPzyO+xdVXX0V9fYYJE89k2tRpnHPOWZiyCrKh5d57f4nWjhdffJmhw0eybu3z8flOSKU8Hn7kUYIo4MYb/6Hx/sMwZEcmxxNPPsXkyefStWsXrLUYY4iiiNpNmwnDEN/321UDe0qHeUytBKU1kTKEAkpr4kYoPF4AK7D8mRVMPOs8/vf/agmcRXDxcQLWT1N16GHMuuZawsiCaMQa/rq1nvseXsb2yBA6jVamEMNZLJZ8ZAilDFGy0/WU1jjt4bSizIdOqU4c3asnR/Y6lJP6fofnfvU0v1m9Gh8QsUQiHHNUL3of0YNJZ47nZ9f+jHOnno+LHNgcvY8+gsMP7cFRvQ7j6F6HcvghVRgVoZVGAYcf9g16H/VNqqtP4b4HH2XhojtwkQAWcDhs43cB6hqybNmWYcmSxZxw7NH079eHF1b+iq5dK1BaEOVQYjnh2704/qgjuGLmdEYOH8qls66Nm1YiPvnrFrocUkX5QVX8+f2NoOIm156PSqXp+e3vMPaMSQTi8NLpQofSeBVd8Hy/0Ebxk6t9o/rPp2SGaiKQD4QHHniI6dPP4+xJk/j5z28hDt41qFgcV1xxKRs2bODDjz/GOgBhxoyfsnTpXVRWVsBOg5gvh1Kxt0qnU4grxMQKRMXxpkMh4vj7vn3IbG9AGYUVxY5cHqc0eQuiDX5ZOVqbxlGK0YZiQsf3PbRRhWyApmmM3eTRKys6IdaycVMtFoMVSKd8xo4aDlEIYigObmwUJ4569jyShm3b4hpQhvkLFzB92o+54fq5XDxjBs7JTmHOYT2+wYQJ45k583KsE5RWiNr3stj3JSigFCAhmUyGAw4oZ8qUc3hp7cuIqMbKdGEeTytWrHiec849F+cca373Cl26VHLccceRzxdiK0WhwWO0jvOe0oJglVIFHRcHNGCdQynFQw8+xoFdK0HiOBOlEBRoj2w2y/k/Ppd5/3g9WimU8fjpZbMYOHgYg6qHcPIpp7L6xbVxIwuIU2ysreWDD2pZ98prTDnvfC666AI8z0OcQ0QhAk4UrvBdK1iy5E4uv/xK+p06mMeXLSeTyeAZjV/Qu1YacXGcXVdXx73/fB8L/2keAE4p3nr7HWqGDuakvsdTv62e+vrtO92/iwKuuHQGH324mRdeeJHAOgLbkb6xZUoqXfSTi2Zy3XXXIQLduh0IePzXn//CsccciVLgaYWn4OCqbhx88ME8/Ngy7r77bv74zr/hgHTaLzicnXObjbHSLinQIIgQkXiUKw5jNAMHDidydXTp0oVDvnkEv131a5DYG/l+mu/2/T7p8jJ2bG/g5gXzGDOihkhAMNyz+A6OPeZYjIn9WBDkUTics0RRxMUXX0I6bchmFKtWrcDgUFr4n/9+n+nTL8IqQ7pTiigMeXb5crp3r+J7fU7kN88/iyA8v2IVgwZVM3fOtUyePBljDJlshj59T6ZzeSe21tfz0COP0PPwHjhg7cuvUnPaCEyh740ePZrbbruNeTdej/Hj+kmnfFJGs2rl85zY5yROHVSNNvveX5WMMJ1zbN78IfPnz+eGGwN846O04cILZ7B+3RrEhnhG43lxpT3zr8s55tg+LFp0K0EY4vk+kQ1oKWfYuXNnnLPsusC6GOgbozBiCMOIdetfxPgOz3jko7hFo3yAWEs2H/Dun97CFQZRqULUJS6O2VKeR7pQo86GpFMeNgrRxqCUYtXKlaAsSxc/yOzZc7jj1ptxTujduzfr1/+BUCCXz5JOp8nlsiil8I1BiYBSjBs9gprB1QwbMZIfnX02+TBHp7IUb776ZhxRF6ICl88QhI5bbr2Vuq11rH/5JZxzZLMRnTt53LRwXmO86GsFIoSRcNddd3HWpMksXnz7V9XMe0yHCVPEoBRoJ0gkhRhcE0UOYxTv/ek/qeralafXPhk/SlEohJqaUWzbtpVuB3Yjykcoq9CFvOE7b79OeafyeIDkBB1ZJHLgpwojTI1BU1GmUNbyl/c/pNe3DkPFISs/mTGTsaefjoscvtFobfE9UMpDo0n7gIApKyMV5SjTDhtZUp4pOF6FiOAbhbJxGBHnQhVae0QCnpeCTAbfA1+D0oYrLruQ6ppRvPnGOwwbUo3yFKJBi6O8zMcYTbqigkU3304URlx3w7XEEYRP+QE+KE0QQcpPYTwPh+AphUecijd+J3CK7Z9t5c3X16GVRhtoyOQZO2oMr/zhNQYOPBWjDbkgwgoYoxg8aADPPvscC+YvJNXYiZtSc3qn318tHShMwUYWF0WkTJwcVorGVMklMy9h2bInwIGnNGEYobXmxBOO4847F7NgwTwQhULjrGA8RWVFJ+IEO4g4OpelERuhVBqlmlIwYT5i4YL5nDdlGuPOGM1BVd14/fUNbNy4kaVL7sAYXUitxLGdV0g1aWlKmRogrR2e0s2ChHgQFOTzYPO89fbbbNpcSz6fx2iDE8eoESNicSvXGPr6nuK55csYP/5HfH/V9zjooEq0ErQC1cz6nNlXMWHCFCZPnsaQ0wYCmscff5zLL7sU5SKUCMbziSKF8eMoWrm4c8y5ZjbXXDULX+s4drVQlvJZ9ItFzJ07l9+/tDY+XkAr1ZhKW3rnbQwePJTO5eUE+SAepOniNKjQUTNJHRZMiAhaawYNGojWqpi1wDmhoWEHNTVD6NHjUIyJBev7Bt/XLF16J7lcFkH4bp/jKa/YPa9WHNz079+fdNovjDqbAsp02mPQoAG89trv+LuDu7OpdhMXXnABv129klQqjY3iWHPgwFNRuplHUM2vAdXVAwvx5s54nseAAf35j39/j3WvrOfdd95lzZo1vPbq62jA8zUnn3wSzcOL7t27cfXVs7h76ZKWK6wQFy576lGuv34un37yKZkd23nyiceZcs4kPM9Q1a0L1QP64WmhuYMTgXQ6xejRI1AqzhAVIiB+cPJJ9D/lB+SyWbpXHUTfvn2IIhu3CfGA6+mnn2Lo0Bq0NrvlmjsK1Zb/taIYo7Xn23Gfy5dc/9D8XGnl3Pa4g9YqskXbe3ovX1DuRhOy64bWL/mFZSserJr/+HyPKSJ4nrfTlHNbKJnBzx7Rai22lN5ovjSu6eteC3AvWvNLiXtX+7sa+bxy76VLaQ8bHcX+JUwsLS/jakmYzXv2F/f4Dke5ZqJo7XHZfC1lS7Jqft+66dCvAfuZMFsTVXHGpKU1ktB6w+4BX1lD6z2w/QXxXXvM0OzR/bWh/r4k+z6T2i6oVj4T9le+JsJM+LqRCDOhJEmEmVCSJMJMKEkSYSaUJIkwE0qSRJgJJUmbhemc2+eveibsW6TwOnJ70qaZn4qKCgYMGIBSqum1hoS/OdLpNEopKisr281mm4R5zz334ArvxyRe828X1Ww9Z7vZbMuyt4SEr4pk8JNQkiTCTChJEmEmlCSJMBNKkkSYCSVJIsyEkiQRZkJJkggzoSRJhJlQkiTCTChJEmEmlCSJMBNKkkSYCSXJ/wMfGx5a3QoLOQAAAABJRU5ErkJggg==");

},
324094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437845-ec90f9b27af05b3388148c1f601f91dc.jpg");

},
549040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798158-013098655a3e293b4058424d837204dc.png");

},
25704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477799-568ffee496cc72ffe5e0f9924ac61759.gif");

},
617696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957804-519fc9e1b3b3c70953e3a121e0941090.gif");

},
333980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437849-dd69f7e7c67856f753f6d287bec2e6a5.gif");

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