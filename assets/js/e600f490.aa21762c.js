"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["989208"], {
414034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_text_faq_arkts_text_faq_md_e60_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-development-faq-arkts-text-faq-arkts-text-faq-md-e60.json
var site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_text_faq_arkts_text_faq_md_e60_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq/arkts-text-faq","title":"使用文本常见问题","description":"本文档介绍使用文本的常见问题并提供参考。","source":"@site/docs/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq/arkts-text-faq.md","sourceDirName":"arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq","slug":"/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用文本常见问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-text-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"按钮与选择组件常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq/"},"next":{"title":"动态属性设置常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq/arkts-text-faq.md


const frontMatter = {
	title: '使用文本常见问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-text-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用文本常见问题';

const assets = {

};



const toc = [{
  "value": "文本显示（Text/Span）常见问题",
  "id": "文本显示textspan常见问题",
  "level": 2
}, {
  "value": "Text组件尾部省略号后为什么还有一段空白，没有占满组件宽度",
  "id": "text组件尾部省略号后为什么还有一段空白没有占满组件宽度",
  "level": 3
}, {
  "value": "Text组件如何实现行末展开样式",
  "id": "text组件如何实现行末展开样式",
  "level": 3
}, {
  "value": "Text组件如何实现内容超长时自动显示省略样式吗？",
  "id": "text组件如何实现内容超长时自动显示省略样式吗",
  "level": 3
}, {
  "value": "在文本前后添加自定义标签",
  "id": "在文本前后添加自定义标签",
  "level": 3
}, {
  "value": "Text组件如何实现表情与文字一起显示",
  "id": "text组件如何实现表情与文字一起显示",
  "level": 3
}, {
  "value": "文本超长时如何展示",
  "id": "文本超长时如何展示",
  "level": 3
}, {
  "value": "selection如何触发弹出自定义菜单并设置菜单字体大小",
  "id": "selection如何触发弹出自定义菜单并设置菜单字体大小",
  "level": 3
}, {
  "value": "如何屏蔽文本的长按手势",
  "id": "如何屏蔽文本的长按手势",
  "level": 3
}, {
  "value": "设置enableVariableFontWeight为true后字重不能跟随设置调节",
  "id": "设置enablevariablefontweight为true后字重不能跟随设置调节",
  "level": 3
}, {
  "value": "文本输入（TextInput/TextArea/Search）常见问题",
  "id": "文本输入textinputtextareasearch常见问题",
  "level": 2
}, {
  "value": "TextInput被遮挡时光标仍然不消失",
  "id": "textinput被遮挡时光标仍然不消失",
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
        id: "使用文本常见问题",
        children: "使用文本常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档介绍使用文本的常见问题并提供参考。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本显示textspan常见问题",
      children: "文本显示（Text/Span）常见问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下内容介绍了使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "组件进行文本显示时可能遇到的常见问题，包括文本截断、添加标签、显示表情等场景的处理方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text组件尾部省略号后为什么还有一段空白没有占满组件宽度",
      children: "Text组件尾部省略号后为什么还有一段空白，没有占满组件宽度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Text组件上未设置宽度，当内容过长时，省略号与组件边缘之间会留有较大空白，且内容更新时省略号的位置会发生变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(316898)/* ["default"] */.A) + "",
        width: "329",
        height: "174"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Text组件未设置宽度且内容超长时，组件宽度将采用父组件传递的布局约束的最大宽度。不同内容、不同的断词模式导致排版塑型结果不同，因此省略开始位置也会不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#wordbreak11",
        children: "wordBreak"
      }), "属性为WordBreak.BREAK_ALL，任意2个字符间断行使文本内容尽量占满组件区域。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n@Entry\n@Component\nexport struct WordBreakd {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n\n  // 'Text_WordBreak'资源文件中的value值为'混合Hello World! honorificabilitudinitatibus'\n  @State message: string = this.manager.getStringByNameSync('Text_WordBreak');\n  build() {\n    NavDestination() {\n    Column() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize('25fp')\n        .maxLines(1)\n        .textOverflow({ overflow: TextOverflow.Ellipsis})\n        .onClick(() => {\n          this.message = 'Welcome try try try 1235628327434348';\n        })\n        .border({ width: 1})\n        .wordBreak(WordBreak.BREAK_ALL) // 修改断词模式\n    }\n    .width(300)\n    .border({ width: 1, color: Color.Blue})\n    .margin({left: 30, top: 50})\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(382431)/* ["default"] */.A) + "",
        width: "316",
        height: "59"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text组件如何实现行末展开样式",
      children: "Text组件如何实现行末展开样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自行测算截断字符，并在行末添加...展开或者...图标作为组件内容。实现方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils#getparagraphs20",
        children: "属性字符串转Paragraph数组"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-text-expand-collapse",
        children: "文本展开折叠"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text组件如何实现内容超长时自动显示省略样式吗",
      children: "Text组件如何实现内容超长时自动显示省略样式吗？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在固定尺寸的组件区域内，不同字号的内容显示的最大行数会有所不同。期望实现内容超长时自动显示省略样式，则无需设置固定的maxLines值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#heightadaptivepolicy10",
        children: "heightAdaptivePolicy"
      }), "为TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST，该模式会删除超过布局约束的行，从而实现类似设置maxLines的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nexport struct HeightAdaptivePolicy {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n\n  // 'Text_Adaptive_Layout'资源文件中的value值为'混合Hello World! 多行文本 中英文数字混合 1282378283 ~'\n  @State message: string = this.manager.getStringByNameSync('Text_Adaptive_Layout');\n  @State fontSize: number = 25;\n  build() {\n    NavDestination() {\n      Column({ space: 10 }) {\n        Text(this.message)\n          .id('HelloWorld')\n          .fontSize(this.fontSize)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .border({ width: 1 })\n          .heightAdaptivePolicy(TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST) // 调整自适应布局策略\n          .width(300)\n          .height(200)\n        Row() {\n          Button('fontSize+5')\n            .onClick(() => {\n              this.fontSize += 5;\n            })\n          Button('fontSize-5')\n            .onClick(() => {\n              this.fontSize -= 5;\n            })\n        }\n      }\n      .margin({ left: 30, top: 50 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(990181)/* ["default"] */.A) + "",
        width: "314",
        height: "244"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在文本前后添加自定义标签",
      children: "在文本前后添加自定义标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如何在文本的前后各添加一个标签，例如“专题”或“Top1”，且这些标签的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background",
        children: "背景设置"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size",
        children: "尺寸设置"
      }), "需要能够自定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施一"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果标签和中间的长文本需在同一行显示，开发者可能会考虑使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "实现，但是Span不支持设置尺寸。此时，可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-flex-layout",
        children: "弹性布局 (Flex)"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
        children: "Row"
      }), "中放置标签和长文本，并为长文本设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textoverflow",
        children: "textOverflow"
      }), "属性，以确保文本超长时能够自适应截断，显示在一行之内。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现步骤："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.将标签和长文本放在同一个沿水平方向布局的容器Row中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.中间长文本设置textOverflow属性为TextOverflow.Ellipsis，空间不足时截断文本，显示省略号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现案例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display#%E5%AE%9E%E7%8E%B0%E7%83%AD%E6%90%9C%E6%A6%9C",
        children: "实现热搜榜"
      }), "，该示例中，文字“1”、“爆”就是“我是热搜词条”的两个标签。这种实现方式写法简便，适合单行文本添加标签的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施二"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需在多行文本前后添加标签并且不截断文本，上述方案会导致三个Text中的文本不能对齐，因为多行文本会在Row的宽度内折行。此时，可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout",
        children: "层叠布局 (Stack)"
      }), "中放置标签和长文本，给中间多行文本设置首行文本缩进距离", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textindent10",
        children: "textIndent"
      }), "。多行文本后面的标签则需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#offset",
        children: "offset"
      }), "属性调整位置。这种实现方式，可以让三个Text组件中的文字水平对齐。实现步骤如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现步骤："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.将标签和长文本放在Stack中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.在组件显示之前的回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "中，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils#measuretextsize12",
        children: "measureTextSize"
      }), "计算前标签的宽度，作为中间多行文本的首行缩进距离。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.在组件显示之前的回调aboutToAppear中，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils#getparagraphs20",
        children: "getParagraphs"
      }), "计算中间多行文本最后一行的宽度、除最后一行文本之外的高度，作为后标签的偏移量offset。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.设置后标签相对于Stack左上角的偏移量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nexport struct LengthMetric {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n\n  // 'Text_Add_Tags_Front_and_Post'资源文件中的value值为'这是一段长文本，超长部分折行，前后添加标签'\n  @State message: string = this.manager.getStringByNameSync('Text_Add_Tags_Front_and_Post');\n  // 'Text_Add_Tags_Front'前标签'\n  @State frontTag: string = this.manager.getStringByNameSync('Text_Add_Tags_Front');\n  // 'Text_Add_Tags_Post'资源文件中的value值为'后标签'\n  @State backTag: string = this.manager.getStringByNameSync('Text_Add_Tags_Post');\n  @State frontPaddingVp: number = 20;\n  @State backPaddingVp: number = 10;\n  @State fontTagWidthVp: Length = 0;\n  @State backTagWidthVp: Length = 0;\n  @State backOffsetVpX: Length = 0;\n  @State backOffsetVpY: Length = 0;\n  @State messageLines: number = 0;\n  @State stackWidthVp: number = 300;\n\n  // 显示之前，测算前后标签的位置，中间文本的缩进距离\n  aboutToAppear(): void {\n    // 计算前标签的宽度fontTagWidthVp，作为message的首行缩进距离\n    let frontTagSize: SizeOptions = this.getUIContext().getMeasureUtils().measureTextSize({\n      textContent: this.frontTag,\n    });\n    this.fontTagWidthVp = this.getUIContext().px2vp(Number(frontTagSize.width)) + this.frontPaddingVp * 2\n\n    // 计算frontTag+message占据的行数\n    let linesFrontTagPlusMessage = 0;\n    let mutableStr = new MutableStyledString(this.message,\n      [{\n        start: 0,\n        length: 1,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: new ParagraphStyle({ textIndent: LengthMetrics.vp(this.fontTagWidthVp) })\n      }]\n    )\n    let paragraphArr = this.getUIContext()\n      .getMeasureUtils()\n      .getParagraphs(mutableStr, { constraintWidth: LengthMetrics.vp(this.stackWidthVp) });\n    for (let i = 0; i < paragraphArr.length; ++i) {\n      linesFrontTagPlusMessage += paragraphArr[i].getLineCount();\n    }\n\n    // 后标签offsetX的偏移量backOffsetVpX=frontTag+message最后一行的宽度\n    this.backOffsetVpX =\n      this.getUIContext().px2vp((paragraphArr[paragraphArr.length-1].getLineWidth(linesFrontTagPlusMessage - 1)))\n    // 后标签offsetY的偏移量backOffsetVpY=frontTag+message总高度-最后一行的高度\n    let heightFrontTagPlusMessageVp = 0;\n    for (let i = 0; i < paragraphArr.length; ++i) {\n      heightFrontTagPlusMessageVp += this.getUIContext().px2vp(paragraphArr[i].getHeight());\n    }\n    let lastLineHeight =\n      this.getUIContext().px2vp(paragraphArr[paragraphArr.length-1].getLineHeight(linesFrontTagPlusMessage - 1))\n    this.backOffsetVpY = heightFrontTagPlusMessageVp - lastLineHeight\n  }\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        Blank()\n          .height(200)\n        Stack() {\n          Text(this.frontTag)\n            .padding({ left: this.frontPaddingVp, right: this.frontPaddingVp })\n            .backgroundColor('rgb(39, 135, 217)')\n          Text(this.message)\n            .textIndent(this.fontTagWidthVp)\n            .padding(0)\n          Text(this.backTag)\n            .padding({ left: this.backPaddingVp, right: this.backPaddingVp })\n            .backgroundColor('rgb(0, 74, 175)')\n            .offset({\n              x: this.backOffsetVpX,\n              y: this.backOffsetVpY\n            })\n        }\n        .alignContent(Alignment.TopStart) // 顶部起始端对齐\n        .width(this.stackWidthVp)\n      }\n      .height('100%')\n      .width('90%')\n      .padding('5%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(363893)/* ["default"] */.A) + "",
        width: "307",
        height: "49"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text组件如何实现表情与文字一起显示",
      children: "Text组件如何实现表情与文字一起显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "emoji表情有时以表情符号的形式表示，如何将表情符号转换为emoji表情，并在Text组件中与文字一同显示？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用正则表达式解析表情符号，再将表情符号与图片资源建立映射，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
        children: "ImageSpan"
      }), "同时展示表情和文字。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.media.xxx')替换为实际资源文件\nimport { common } from '@kit.AbilityKit';\n@Entry\n@Component\nexport struct DisplayedTogether {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n\n  // 'Text_Full_Text'资源文件中的value值为\n  // '你好我是Text[grin]，你好我[rolling_on_the_floor_laughing]是Text，[slightly_smiling_face]你好我是Text[grin]'\n  @State fulltext: string = this.manager.getStringByNameSync('Text_Full_Text');\n\n  static classifyTextAndEmojis(input: string): Map<string, string[]> {\n    const emojiRegex = /\\[([a-zA-Z_]+)\\]/g; // 根据实际情况编写正则表达式\n    const resultMap = new Map<string, string[]>(); // 用map记录普通文本和表情\n    resultMap.set('text', []);\n    resultMap.set('emojis', []);\n\n    let lastIndex = 0;\n    let match: RegExpExecArray | null = null;\n\n    while ((match = emojiRegex.exec(input)) !== null) {\n      // 添加普通文本\n      if (match.index >= lastIndex) {\n        resultMap.get('text')?.push(input.substring(lastIndex, match.index));\n      }\n      // 添加匹配到的表情\n      resultMap.get('emojis')?.push(match[1]);\n      lastIndex = match.index + match[0].length;\n    }\n    // 添加最后一段文本\n    if (lastIndex < input.length) {\n      resultMap.get('text')?.push(input.substring(lastIndex));\n    }\n    return resultMap;\n  }\n\n  static getEmojiImg(emojis: string[]): Resource[] { // 根据正则匹配结果返回自定义表情资源\n    let emojisImg: Resource[] = []\n    for (let i = 0; i < emojis.length; i++) {\n      switch (emojis[i]) {\n        case 'rolling_on_the_floor_laughing':\n          emojisImg.push($r('app.media.rolling_on_the_floor_laughing'))\n          break;\n        case 'slightly_smiling_face':\n          emojisImg.push($r('app.media.slightly_smiling_face'))\n          break;\n        case 'grin':\n          emojisImg.push($r('app.media.grin'))\n          break;\n        default:\n          break;\n      }\n    }\n    return emojisImg\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        TextInput({\n          // 请将$r('app.string.Text_emoji')替换为实际资源文件，在本示例中该资源文件的value值为\"用户输入带表情的文本，例如：你好[grin]\"\n          placeholder: $r('app.string.Text_emoji')\n        })\n          .width('80%')\n          .padding(10)\n          .border({ width: 1, color: '#EEEEEE' })\n          .onChange((value: string) => {\n            // 输入变化时，更新 fulltext\n            this.fulltext = value;\n          });\n\n        Text() {\n          ForEach(DisplayedTogether.classifyTextAndEmojis(this.fulltext).get('text'),\n            (item: string, index: number) => { // 展示文本和自定义表情资源\n              Span(item)\n                .fontSize(18)\n                .fontColor('#666666')\n                .fontWeight(FontWeight.Regular)\n\n              ImageSpan(DisplayedTogether.getEmojiImg(\n                DisplayedTogether.classifyTextAndEmojis(this.fulltext).get('emojis'))[index])\n                .verticalAlign(ImageSpanAlignment.BOTTOM)\n                .height(24)\n            })\n        }\n        .width('80%')\n        .padding(15)\n      }\n      .width('100%')\n      .height('100%')\n      .justifyContent(FlexAlign.Center)\n      .alignItems(HorizontalAlign.Center)\n      .padding(20)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(245529)/* ["default"] */.A) + "",
        width: "300",
        height: "115"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本超长时如何展示",
      children: "文本超长时如何展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text组件中内容过多，超出父组件容器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
        children: "Column"
      }), "的高度，会导致文本溢出容器边界，如何让文本显示在父组件容器的区域内？"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施一"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text文本是自动折行的，当没有限制Text高度", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
        children: "height"
      }), "时，Text高度在文本的行数增加时自动调整。可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#maxlines",
        children: "maxLines"
      }), "属性限制文本的最大行数，如果有多余的文本默认会被截断。也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textoverflow",
        children: "textOverflow"
      }), "属性来指定截断方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了限制Text组件不超过三行的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct TextLong {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n\n  // 'Text_Long_String'资源文件中的value值为'这是一段超长文本'\n  @State message: string = this.manager.getStringByNameSync('Text_Long_String').repeat(50);\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(this.message)\n          .height('auto')\n          .maxLines(3)\n      }\n      .height(200)\n      .width('80%')\n      .margin('10%')\n      .borderWidth(1)\n      .justifyContent(FlexAlign.Center)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(217629)/* ["default"] */.A) + "",
        width: "313",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施二"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述方法会导致部分文本被裁剪掉，如果需要保留全部文本，可以把Text组件放在滚动容器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "内，再通过手势滑动来浏览全部文本，具体示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct TextLongTow {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n\n  // 'Text_Long_String'资源文件中的value值为'这是一段超长文本'\n  @State message: string = this.manager.getStringByNameSync('Text_Long_String').repeat(50);\n\n  build() {\n    NavDestination() {\n      Column() {\n        Scroll() {\n          Text(this.message)\n        }\n        .scrollBar(BarState.Off)\n      }\n      .height(200)\n      .width('80%')\n      .margin('10%')\n      .borderWidth(1)\n      .justifyContent(FlexAlign.Center)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284144)/* ["default"] */.A) + "",
        width: "346",
        height: "224"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selection如何触发弹出自定义菜单并设置菜单字体大小",
      children: "selection如何触发弹出自定义菜单并设置菜单字体大小"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#bindselectionmenu11",
        children: "bindSelectionMenu"
      }), "自定义选择菜单中，可通过TextResponseType设置文本选择菜单的响应类型。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#selection11",
        children: "selection"
      }), "如何触发弹出自定义菜单并设置菜单字体大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若希望由selection触发自定义菜单，可将TextResponseType设置为DEFAULT。同时，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
        children: "Menu"
      }), "组件上通过配置font属性，即可自定义菜单的字体大小，灵活适配界面设计需求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample8 {\n  controller: TextController = new TextController();\n  options: TextOptions = { controller: this.controller };\n  @State selectStart: number = 0;\n  @State selectEnd: number = 0;\n\n  build() {\n    Column() {\n      Column() {\n        Text(\"TextTextTextText\")\n          .fontSize(14)\n          .selection(this.selectStart, this.selectEnd)\n          .copyOption(CopyOptions.InApp)\n          .bindSelectionMenu(TextSpanType.TEXT, this.CustomMenu, TextResponseType.DEFAULT, {\n            onDisappear: () => {\n              this.selectStart = -1;\n              this.selectEnd = -1;\n            },\n          })\n          .textAlign(TextAlign.Center)\n          .borderWidth(1)\n          .borderColor(Color.Red)\n        Button(\"Set selection\")\n          .onClick(() => {\n            this.selectStart = 0;\n            this.selectEnd = 10;\n          })\n          .fontSize(14)\n          .margin({ top: 20 })\n      }\n      .width('100%')\n      .padding({ top: 300 })\n    }\n    .height('100%')\n  }\n\n  @Builder\n  CustomMenu() {\n    Column() {\n      Menu() {\n        MenuItem({ content: \"Item Content\" })\n        MenuItem({ content: \"Item Content\" })\n        MenuItem({ content: \"Item Content\" })\n      }\n      .font({ size: 14 })\n      .radius($r('sys.float.ohos_id_corner_radius_card'))\n      .clip(true)\n      .backgroundColor('#F0F0F0')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(803993)/* ["default"] */.A) + "",
        width: "214",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何屏蔽文本的长按手势",
      children: "如何屏蔽文本的长按手势"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#copyoptions9",
        children: "CopyOptions"
      }), "将文本设置为可选择，此时长按文本会选择文字内容并弹出系统菜单，如何使长按手势不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "想要使长按手势对文本不生效，可以设置触发时间小于系统菜单触发时间（500ms）的自定义长按手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample8 {\n  build() {\n    Column() {\n      Text(\"TextTextTextText\")\n        .copyOption(CopyOptions.InApp)\n        .gesture(LongPressGesture({ repeat: false, duration: 400 })\n          .onAction(() => {\n          }))\n        .margin({\n          top: 100,\n          bottom: 100,\n          left: 100,\n          right: 100\n        })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置enablevariablefontweight为true后字重不能跟随设置调节",
      children: "设置enableVariableFontWeight为true后字重不能跟随设置调节"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text组件调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#fontweight12",
        children: "fontWeight"
      }), "接口，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#fontsettingoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "FontSettingOptions"
      }), "类型的入参options设置enableVariableFontWeight值为true之后，在系统设置的“字体大小和界面缩放”页面中调节字体粗细，Text组件的字重不跟随变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果需要Text组件字重跟随系统设置变化，需要在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#configuration%E6%A0%87%E7%AD%BE",
          children: "configuration标签"
        }), "设置followSystem。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字体配置项options控制是否启用可变字重调节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当options的参数enableVariableFontWeight取值true时，启用可变字重调节。weight取值为[100, 900]范围内任意整数时，字重取值为weight。此时如果在设置中调节字体粗细，字重始终是开发者设置的数值weight，字体粗细不会变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当options的参数enableVariableFontWeight取值false时，禁用可变字重调节。weight取值为[100, 900]范围内的整百数值时，字重取值为weight。weight是非整百数值时，字重取默认值400。此时更改设置中的字体粗细，字重会随设置变化。此时如果在设置中调节字体粗细，字重会随设置变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本输入textinputtextareasearch常见问题",
      children: "文本输入（TextInput/TextArea/Search）常见问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下内容介绍了使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
        children: "Search"
      }), "组件输入文本时可能遇到的问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textinput被遮挡时光标仍然不消失",
      children: "TextInput被遮挡时光标仍然不消失"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Stack中堆叠了多个组件，包含一个输入框（TextInput），当TextInput组件被遮挡时，偶尔会出现带有小圆圈的手柄，显示在其他组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当TextInput组件处于选中状态并显示操作手柄时，选中区域和操作手柄可能不在同一图层渲染。其中，选中区域与输入框在同一图层，而操作手柄则在更高的图层上。因此，当输入框被其他元素遮挡时，选中区域也会被遮挡，但操作手柄仍然可见。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TextInput被遮挡时，如果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputcontroller8",
        children: "TextInputController"
      }), "设置焦点和选中区域会出现上述现象。涉及的选中区域设置接口包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#selectall11",
        children: "selectAll"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#settextselection10",
        children: "setTextSelection"
      }), "。建议检查应用代码中以下接口的调用时机，在输入框被遮挡后避免设置选中区域。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#settextselection12",
              children: "setTextSelection"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TextArea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#settextselection10",
              children: "setTextSelection"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TextInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#selectall11",
              children: "selectAll"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TextInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#settextselection10",
              children: "setTextSelection"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了一个典型的问题场景，存在一个内容为“TextInput被遮挡不显示”的TextInput组件被隐藏，但点击按钮后，图片上会出现TextInput操作手柄。此时，开发者需要检查应用代码，确保在输入框被遮挡时没有设置选中区域。移除设置输入框选中区域的代码逻辑，即可解决操作手柄出现的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct CursorPersistsWhenTextInputIsCoveredExample {\n  controller: TextInputController = new TextInputController();\n  @State message1: string = 'TextInput被遮挡不显示';\n\n  build() {\n    NavDestination() {\n      Column({ space: 50 }) {\n        Stack() {\n          TextInput({ text: this.message1, controller: this.controller })\n            .copyOption(CopyOptions.LocalDevice)\n            .backgroundColor(Color.Green)\n            .width(200)\n            .id('textInput_1')\n\n          // $r('app.media.foreground')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.foreground'))\n            .width(200)\n            .height(200)\n            .backgroundColor('rgb(213,213,213)')\n        }\n\n        Button('点击出现手柄')\n          .onClick(() => {\n            this.getUIContext().getFocusController().requestFocus('textInput_1')\n            this.controller.setTextSelection(0, 5, { menuPolicy: MenuPolicy.HIDE })\n          })\n      }\n      .padding('10%')\n      .alignItems(HorizontalAlign.Center)\n      .height('100%')\n      .width('90%')\n    }\n    .backgroundColor('#f1f2f3')\n    .title($r('app.string.Cursor_Persists_When_TextInput_Is_Covered'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554176)/* ["default"] */.A) + "",
        width: "268",
        height: "297"
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
803993(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958170-cbebd426e26d256707e8446cf8957717.gif");

},
217629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798520-3137262ad72472e20fc777d8bd497954.png");

},
382431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798518-67d7db3618dcdcf87d98f0e1563c7456.gif");

},
554176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478171-b655f8ae3ed82890e6d09fa8f2c64e79.gif");

},
363893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958168-3ce602dd20aa188143d7058dc2f67462.png");

},
990181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438213-8d35a8908f9f9ab3b94a0eca642353bb.gif");

},
284144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438215-0e19ba7adc7af6a83037e111f4fc24bf.gif");

},
245529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478169-bf111c8328e697125ae67c7ad70bb7b0.png");

},
316898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

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