"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["171604"], {
69854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_styled_string_arkts_styled_string_md_89d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-styled-string-arkts-styled-string-md-89d.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_styled_string_arkts_styled_string_md_89d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-styled-string/arkts-styled-string","title":"属性字符串（StyledString/MutableStyledString）","description":"属性字符串StyledString/MutableStyledString（其中MutableStyledString继承自StyledString，下文统称为StyledString），可用于在字符或段落级别上设置文本样式。将StyledString应用到文本组件上，可以采用多种方式修改文本，包括调整字号、添加字体颜色、使文本具备可点击性，以及通过自定义方式绘制文本等。具体使用方法请参考属性字符串的API文档。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string/arkts-styled-string.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-styled-string","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"属性字符串（StyledString/MutableStyledString）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-styled-string","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图标小符号 (SymbolGlyph/SymbolSpan)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol/"},"next":{"title":"图文混排","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string/arkts-styled-string.md


const frontMatter = {
	title: '属性字符串（StyledString/MutableStyledString）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-styled-string',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '属性字符串（StyledString/MutableStyledString）';

const assets = {

};



const toc = [{
  "value": "创建并应用StyledString和MutableStyledString",
  "id": "创建并应用styledstring和mutablestyledstring",
  "level": 2
}, {
  "value": "设置文本样式",
  "id": "设置文本样式",
  "level": 2
}, {
  "value": "设置段落样式",
  "id": "设置段落样式",
  "level": 2
}, {
  "value": "支持将属性字符串转换成Paragraph",
  "id": "支持将属性字符串转换成paragraph",
  "level": 2
}, {
  "value": "使用图片",
  "id": "使用图片",
  "level": 2
}, {
  "value": "设置事件",
  "id": "设置事件",
  "level": 2
}, {
  "value": "格式转换",
  "id": "格式转换",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    b: "b",
    br: "br",
    code: "code",
    del: "del",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    i: "i",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    s: "s",
    span: "span",
    strong: "strong",
    sub: "sub",
    sup: "sup",
    u: "u",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "属性字符串styledstringmutablestyledstring",
        children: "属性字符串（StyledString/MutableStyledString）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性字符串StyledString/MutableStyledString（其中MutableStyledString继承自StyledString，下文统称为StyledString），可用于在字符或段落级别上设置文本样式。将StyledString应用到文本组件上，可以采用多种方式修改文本，包括调整字号、添加字体颜色、使文本具备可点击性，以及通过自定义方式绘制文本等。具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string",
        children: "属性字符串"
      }), "的API文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性字符串提供多种类型样式对象，涵盖各种常见的文本样式格式，例如文本装饰线样式、文本行高样式、文本阴影样式等。也可以自行创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#customspan",
        children: "CustomSpan"
      }), "，以应用自定义样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建并应用styledstring和mutablestyledstring",
      children: "创建并应用StyledString和MutableStyledString"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textcontroller11",
        children: "TextController"
      }), "提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#setstyledstring12",
        children: "setStyledString"
      }), "方法，将属性字符串附加到文本组件，并推荐在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpageshow",
        children: "onPageShow"
      }), "或者文本组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#onappear",
        children: "onAppear"
      }), "回调中触发绑定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(833059)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "中调用setStyledString方法时，由于该方法运行阶段组件尚未完成创建并成功挂载节点树，因此无法在页面初始化时显示属性字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，在aboutToAppear中调用setStyledString方法，页面初始化时可以显示属性字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct styled_string_demo1 {\n  // 请将$r('app.string.CreateApply_Text_Forty_Five')替换为实际资源文件，在本示例中该资源文件的value值为\"运动45分钟\"\n  styledString1: StyledString = new StyledString( this.getUIContext()\n    .getHostContext()!.resourceManager.getStringSync($r('app.string.CreateApply_Text_Forty_Five').id));\n  // 请将$r('app.string.CreateApply_Text_Third_Five')替换为实际资源文件，在本示例中该资源文件的value值为\"运动35分钟\"\n  mutableStyledString1: MutableStyledString = new MutableStyledString( this.getUIContext()\n    .getHostContext()!.resourceManager.getStringSync($r('app.string.CreateApply_Text_Third_Five').id));\n  controller1: TextController = new TextController();\n  controller2: TextController = new TextController();\n\n  async onPageShow() {\n    // 在生命周期onPageShow回调中绑定属性字符串\n    this.controller1.setStyledString(this.styledString1);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller1 })\n      Text(undefined, { controller: this.controller2 })\n        .onAppear(() => {\n          // 在组件onAppear回调中绑定属性字符串\n          this.controller2.setStyledString(this.mutableStyledString1);\n        })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(189872)/* ["default"] */.A) + "",
        width: "202",
        height: "88"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置文本样式",
      children: "设置文本样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性字符串目前提供了多种Style对象，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#textstyle",
        children: "TextStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#textshadowstyle",
        children: "TextShadowStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationstyle",
        children: "DecorationStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#baselineoffsetstyle",
        children: "BaselineOffsetStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#lineheightstyle",
        children: "LineHeightStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#letterspacingstyle",
        children: "LetterSpacingStyle"
      }), "，用于设置文本的各类样式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建及应用文本字体样式对象（TextStyle）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct styled_string_demo2 {\n  @State str: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('CreateApply_Text_3') as string;\n  textStyleAttrs: TextStyle =\n    new TextStyle({\n      fontWeight: FontWeight.Bolder,\n      fontSize: LengthMetrics.vp(24),\n      fontStyle: FontStyle.Italic,\n      strokeWidth: LengthMetrics.px(5),\n      strokeColor: Color.Green\n    });\n  mutableStyledString: MutableStyledString = new MutableStyledString(this.str, [\n    {\n      start: 2,\n      length: 2,\n      styledKey: StyledStringKey.FONT,\n      styledValue: this.textStyleAttrs\n    },\n    {\n      start: 7,\n      length: 4,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({\n        fontColor: Color.Orange, fontSize: LengthMetrics.vp(12),\n        superscript: SuperscriptStyle.SUPERSCRIPT\n      })\n    }\n  ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller })\n        .margin({ top: 10 })\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(452814)/* ["default"] */.A) + "",
            width: "222",
            height: "62"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建及应用文本阴影对象（TextShadowStyle）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct styled_string_demo3 {\n  @State str: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('CreateApply_Text_Third_Five') as string;\n  mutableStyledString: MutableStyledString = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.TEXT_SHADOW,\n      styledValue: new TextShadowStyle({\n        radius: 5,\n        type: ShadowType.COLOR,\n        color: Color.Red,\n        offsetX: 10,\n        offsetY: 10\n      })\n    }\n  ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller })\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(474641)/* ["default"] */.A) + "",
            width: "198",
            height: "42"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建及应用文本装饰线对象（DecorationStyle）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct styled_string_demo4 {\n  @State str: string =\n    this.getUIContext()\n      .getHostContext()?.resourceManager.getStringByNameSync('CreateApply_Text_Third_Five') as string;\n  mutableStyledString: MutableStyledString = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({ type: TextDecorationType.LineThrough, color: Color.Red, thicknessScale: 3 })\n    },\n    {\n      start: 4,\n      length: 2,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle(\n        {\n          type: TextDecorationType.Underline,\n        },\n        {\n          // 开启多装饰线\n          enableMultiType: true\n        }\n      )\n    },\n    {\n      start: 4,\n      length: 2,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle(\n        {\n          type: TextDecorationType.LineThrough,\n        },\n        {\n          // 开启多装饰线\n          enableMultiType: true\n        }\n      )\n    },\n  ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller })\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(71404)/* ["default"] */.A) + "",
            width: "194",
            height: "50"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建及应用文本基线偏移量对象（BaselineOffsetStyle）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LengthMetrics } from '@kit.ArkUI';\n\n// xxx.ets\n@Entry\n@Component\nstruct styled_string_demo5 {\n  @State str: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('CreateApply_Text_Third_Five') as string;\n\n  mutableStyledString: MutableStyledString = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.BASELINE_OFFSET,\n      styledValue: new BaselineOffsetStyle(LengthMetrics.px(20))\n    }\n  ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller })\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(199325)/* ["default"] */.A) + "",
            width: "195",
            height: "67"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建及应用文本行高对象（LineHeightStyle）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LengthMetrics } from '@kit.ArkUI';\n\n// xxx.ets\n@Entry\n@Component\nstruct styled_string_demo6 {\n  @State str: string =\n    this.getUIContext()\n      .getHostContext()?.resourceManager.getStringByNameSync('StyledStringStyle_Text_5') as string;\n  mutableStyledString: MutableStyledString = new MutableStyledString(this.str, [\n    {\n      start: 8,\n      length: 3,\n      styledKey: StyledStringKey.LINE_HEIGHT,\n      styledValue: new LineHeightStyle(LengthMetrics.vp(50))\n    }\n  ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller })\n    }\n    .width('100%')\n    .margin({ top: 10 })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(356708)/* ["default"] */.A) + "",
            width: "320",
            height: "168"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建及应用文本字符间距对象（LetterSpacingStyle）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LengthMetrics, LengthUnit } from '@kit.ArkUI';\n\n// xxx.ets\n@Entry\n@Component\nstruct styled_string_demo7 {\n  @State str: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('CreateApply_Text_Third_Five') as string;\n  mutableStyledString: MutableStyledString = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 2,\n      styledKey: StyledStringKey.LETTER_SPACING,\n      styledValue: new LetterSpacingStyle(new LengthMetrics(20, LengthUnit.VP))\n    }\n  ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller })\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(188053)/* ["default"] */.A) + "",
            width: "147",
            height: "47"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置段落样式",
      children: "设置段落样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#paragraphstyle",
        children: "ParagraphStyle"
      }), "设置段落样式布局。下图显示了如何分割文本中的段落，段落以换行符 \\n 结尾。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(629597)/* ["default"] */.A) + "",
        width: "451",
        height: "204"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码示例展示了如何创建ParagraphStyle并应用。如果将ParagraphStyle附加到段落开头、末尾或之间的任何位置，均会应用样式，非段落区间内则不会应用样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics} from '@kit.ArkUI';\n\n// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State str: string =\n    this.getUIContext()\n      .getHostContext()?.resourceManager.getStringByNameSync('StyledStringParagraphStyle_Text_1') as string;\n  titleParagraphStyleAttr: ParagraphStyle = new ParagraphStyle({ textAlign: TextAlign.Center });\n  // 段落首行缩进15vp\n  paragraphStyleAttr1: ParagraphStyle = new ParagraphStyle({ textIndent: LengthMetrics.vp(15) });\n  // 行高样式对象\n  lineHeightStyle1: LineHeightStyle = new LineHeightStyle(new LengthMetrics(24));\n  // 创建含段落样式的对象paragraphStyledString1\n  paragraphStyledString1: MutableStyledString =\n    new MutableStyledString(this.str, [\n      {\n        start: 0,\n        length: 4,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.titleParagraphStyleAttr\n      },\n      {\n        start: 0,\n        length: 4,\n        styledKey: StyledStringKey.LINE_HEIGHT,\n        styledValue: new LineHeightStyle(new LengthMetrics(50))\n      }, {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(24), fontWeight: FontWeight.Bolder })\n    },\n      {\n        start: 5,\n        length: 3,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.paragraphStyleAttr1\n      },\n      {\n        start: 5,\n        length: 20,\n        styledKey: StyledStringKey.LINE_HEIGHT,\n        styledValue: this.lineHeightStyle1\n      }\n    ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.paragraphStyledString1);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869682)/* ["default"] */.A) + "",
        width: "411",
        height: "107"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了可以在创建属性字符串时就预设样式，也可以后续通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#replacestyle",
        children: "replaceStyle"
      }), "清空原样式替换新样式，同时需要在附加的文本组件controller上主动触发更新绑定的属性字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\n\n// xxx.ets\n@Entry\n@Component\nstruct Index {\n  context = this.getUIContext().getHostContext();\n  /* 请将$r('app.string.StyledStringParagraphStyle_Text_2')替换为实际资源文件，在本示例中该资源文件的value值为\n   \"段落标题\\n正文第一段落开始0123456789正文第一段落结束，通过replaceStyle清空原样式替换新样式。\"*/\n  @State message1: string =\n    this.context!.resourceManager.getStringSync($r('app.string.StyledStringParagraphStyle_Text_2').id);\n  titleParagraphStyleAttr: ParagraphStyle = new ParagraphStyle({ textAlign: TextAlign.Center });\n  // 段落首行缩进15vp\n  paragraphStyleAttr1: ParagraphStyle = new ParagraphStyle({ textIndent: LengthMetrics.vp(15) });\n  // 行高样式对象\n  lineHeightStyle1: LineHeightStyle = new LineHeightStyle(new LengthMetrics(24));\n  // 创建含段落样式的对象paragraphStyledString1\n  paragraphStyledString1: MutableStyledString =\n    new MutableStyledString(this.message1, [\n      {\n        start: 0,\n        length: 4,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.titleParagraphStyleAttr\n      },\n      {\n        start: 0,\n        length: 4,\n        styledKey: StyledStringKey.LINE_HEIGHT,\n        styledValue: new LineHeightStyle(new LengthMetrics(50))\n      }, {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(24), fontWeight: FontWeight.Bolder })\n    },\n      {\n        start: 5,\n        length: 3,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.paragraphStyleAttr1\n      },\n      {\n        start: 5,\n        length: 20,\n        styledKey: StyledStringKey.LINE_HEIGHT,\n        styledValue: this.lineHeightStyle1\n      }\n    ]);\n  paragraphStyleAttr3: ParagraphStyle = new ParagraphStyle({\n    textAlign: TextAlign.End,\n    maxLines: 1,\n    wordBreak: WordBreak.BREAK_ALL,\n    overflow: TextOverflow.Ellipsis\n  });\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.paragraphStyledString1);\n  }\n\n  build() {\n    Column() {\n      // 显示属性字符串\n      Text(undefined, { controller: this.controller }).width(300)\n      // 请将$r('app.string.Replace_paragraph_style')替换为实际资源文件，在本示例中该资源文件的value值为\"替换段落样式\"\n      Button($r('app.string.Replace_paragraph_style'))\n        .onClick(() => {\n          this.paragraphStyledString1.replaceStyle({\n            start: 5,\n            length: 3,\n            styledKey: StyledStringKey.PARAGRAPH_STYLE,\n            styledValue: this.paragraphStyleAttr3\n          });\n          this.controller.setStyledString(this.paragraphStyledString1);\n        })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620843)/* ["default"] */.A) + "",
        width: "436",
        height: "163"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持将属性字符串转换成paragraph",
      children: "支持将属性字符串转换成Paragraph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils#getparagraphs20",
        children: "getParagraphs"
      }), "将属性字符串根据文本布局选项转换成对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraph",
        children: "Paragraph"
      }), "数组。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下示例展示了通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils",
            children: "MeasureUtils"
          }), "的getParagraphs方法测算文本，当内容超出最大显示行数的时候，截断文本显示并展示“...全文”的效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LengthMetrics } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nclass MyCustomSpan extends CustomSpan {\n  constructor(word: string, width: number, height: number, context: UIContext) {\n    super();\n    this.word = word;\n    this.width = width;\n    this.height = height;\n    this.context = context;\n  }\n\n  onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics {\n    return { width: this.width, height: this.height };\n  }\n\n  onDraw(context: DrawContext, options: CustomSpanDrawInfo) {\n    let canvas = context.canvas;\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 74,\n      blue: 175\n    });\n    const font = new drawing.Font();\n    font.setSize(25);\n    const textBlob = drawing.TextBlob.makeFromString(this.word, font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n    canvas.attachBrush(brush);\n    canvas.drawRect({\n      left: options.x + 10,\n      right: options.x + this.context.vp2px(this.width) - 10,\n      top: options.lineTop + 10,\n      bottom: options.lineBottom - 10\n    });\n    brush.setColor({\n      alpha: 255,\n      red: 23,\n      green: 169,\n      blue: 141\n    });\n    canvas.attachBrush(brush);\n    canvas.drawTextBlob(textBlob, options.x + 20, options.lineBottom - 15);\n    canvas.detachBrush();\n  }\n\n  setWord(word: string) {\n    this.word = word;\n  }\n\n  public width: number = 160;\n  public word: string = 'drawing';\n  public height: number = 10;\n  public context: UIContext;\n}\n\n@Entry\n@Component\nstruct Index {\n  // 请在resources\\base\\element\\string.json文件中配置name为'Full_text'，value为非空字符串的资源\n  @State fullText: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Full_text') as string;\n  // 请将$r('app.string.Original_text')替换为实际资源文件，在本示例中该资源文件的value值为\"原文\"\n  @State originalText: ResourceStr = $r('app.string.Original_text');\n  // 请将$r('app.string.After_typesetting')替换为实际资源文件，在本示例中该资源文件的value值为\"排版后\"\n  @State afterTypesetting: ResourceStr = $r('app.string.After_typesetting');\n  str: string =\n    'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.';\n  mutableStr2 = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.px(20) })\n    },\n    {\n      start: 3,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Brown })\n    }\n  ]);\n\n  // 测算属性字符串在指定宽度下能显示的行数\n  getLineNum(styledString: StyledString, width: LengthMetrics) {\n    let paragraphArr = this.getUIContext().getMeasureUtils().getParagraphs(styledString, { constraintWidth: width });\n    let res = 0;\n    for (let i = 0; i < paragraphArr.length; ++i) {\n      res += paragraphArr[i].getLineCount();\n    }\n    return res;\n  }\n\n  // 测算属性字符串显示maxLines行时最多可以显示的字数\n  getCorrectIndex(styledString: MutableStyledString, maxLines: number, width: LengthMetrics) {\n    let low = 0;\n    let high = styledString.length - 1;\n    // 使用二分查找\n    while (low <= high) {\n      let mid = (low + high) >> 1;\n      console.info('demo: get ' + low + ' ' + high + ' ' + mid);\n      let moreStyledString = new MutableStyledString(this.fullText, [{\n        start: 4,\n        length: 2,\n        styledKey: StyledStringKey.FONT,\n        styledValue: new TextStyle({ fontColor: Color.Blue })\n      }]);\n      moreStyledString.insertStyledString(0, styledString.subStyledString(0, mid));\n      let lineNum = this.getLineNum(moreStyledString, LengthMetrics.px(500));\n      if (lineNum <= maxLines) {\n        low = mid + 1;\n      } else {\n        high = mid - 1;\n      }\n    }\n    return high;\n  }\n\n  mutableStrAllContent = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.px(40) })\n    },\n    {\n      start: 3,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Brown })\n    }\n  ]);\n  customSpan1: MyCustomSpan = new MyCustomSpan('Hello', 120, 10, this.getUIContext());\n  mutableStrAllContent2 = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.px(100) })\n    },\n    {\n      start: 3,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Brown })\n    }\n  ]);\n  controller: TextController = new TextController();\n  controller2: TextController = new TextController();\n  textController: TextController = new TextController();\n  textController2: TextController = new TextController();\n\n  aboutToAppear() {\n    this.mutableStrAllContent2.insertStyledString(0, new StyledString(this.customSpan1));\n    this.mutableStr2.insertStyledString(0, new StyledString(this.customSpan1));\n  }\n\n  build() {\n    Scroll() {\n      Column() {\n        Text(this.originalText)\n        Text(undefined, { controller: this.controller }).width('500px').onAppear(() => {\n          this.controller.setStyledString(this.mutableStrAllContent);\n        })\n        Divider().strokeWidth(8).color('#F1F3F5')\n        Text(this.afterTypesetting)\n        Text(undefined, { controller: this.textController }).onAppear(() => {\n          let now = this.getCorrectIndex(this.mutableStrAllContent, 3, LengthMetrics.px(500));\n          if (now != this.mutableStrAllContent.length - 1) {\n            let moreStyledString = new MutableStyledString(this.fullText, [{\n              start: 4,\n              length: 2,\n              styledKey: StyledStringKey.FONT,\n              styledValue: new TextStyle({ fontColor: Color.Blue })\n            }]);\n            moreStyledString.insertStyledString(0, this.mutableStrAllContent.subStyledString(0, now));\n            this.textController.setStyledString(moreStyledString);\n          } else {\n            this.textController.setStyledString(this.mutableStrAllContent);\n          }\n        })\n          .width('500px')\n        Divider().strokeWidth(8).color('#F1F3F5')\n        Text(this.originalText)\n        Text(undefined, { controller: this.controller2 }).width('500px').onAppear(() => {\n          this.controller2.setStyledString(this.mutableStrAllContent2);\n        })\n        Divider().strokeWidth(8).color('#F1F3F5')\n        Text(this.afterTypesetting)\n        Text(undefined, { controller: this.textController2 }).onAppear(() => {\n          let now = this.getCorrectIndex(this.mutableStrAllContent2, 3, LengthMetrics.px(500));\n          let moreStyledString = new MutableStyledString(this.fullText, [{\n            start: 4,\n            length: 2,\n            styledKey: StyledStringKey.FONT,\n            styledValue: new TextStyle({ fontColor: Color.Blue })\n          }]);\n          moreStyledString.insertStyledString(0, this.mutableStrAllContent2.subStyledString(0, now));\n          this.textController2.setStyledString(moreStyledString);\n        })\n          .width('500px')\n      }.width('100%')\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(871694)/* ["default"] */.A) + "",
            width: "248",
            height: "1055"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用图片",
      children: "使用图片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#imageattachment",
        children: "ImageAttachment"
      }), "来添加图片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了如何将图片和文本附加到同一个MutableStyledString对象上，并实现图文混排。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(718292)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性字符串的构造函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#constructor",
        children: "constructor"
      }), "中，当入参value的类型为ImageAttachment或CustomSpan时，styles参数不生效。需要设置styles时，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#setstyle",
        children: "setStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#insertstyledstring",
        children: "insertStyledString"
      }), "等方法实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { image } from '@kit.ImageKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct StyledStringImageAttachment {\n  @State abled: boolean = true;\n  @State message: string = 'Hello World';\n  imagePixelMap: image.PixelMap | undefined = undefined;\n  @State imagePixelMap3: image.PixelMap | undefined = undefined;\n  mutableStr: MutableStyledString = new MutableStyledString('123');\n  controller: TextController = new TextController();\n  mutableStr2: MutableStyledString = new MutableStyledString('This is set decoration line style to the mutableStr2', [{\n    start: 0,\n    length: 15,\n    styledKey: StyledStringKey.DECORATION,\n    styledValue: new DecorationStyle({\n      type: TextDecorationType.Overline,\n      color: Color.Orange,\n      style: TextDecorationStyle.DOUBLE\n    })\n  }]);\n\n  async aboutToAppear() {\n    console.info('aboutToAppear initial imagePixelMap');\n    // $r('app.media.sea')需要替换为开发者所需的图像资源文件。\n    this.imagePixelMap = await this.getPixmapFromMedia($r('app.media.sea'));\n  }\n\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array = await this.getUIContext().getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer?.slice(0, unit8Array?.buffer?.byteLength));\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n\n  leadingMarginValue: ParagraphStyle = new ParagraphStyle({ leadingMargin: LengthMetrics.vp(5)});\n  //行高样式对象\n  lineHeightStyle1: LineHeightStyle= new LineHeightStyle(new LengthMetrics(24));\n  //Bold样式\n  boldTextStyle: TextStyle = new TextStyle({ fontWeight: FontWeight.Bold });\n  //创建含段落样式的对象paragraphStyledString1\n  // 请将$r('app.string.StyledStringImageAttachment_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n品牌相纸 高清冲印30张\\n限时直降5.15元 限量赠送\"\n  paragraphStyledString1: MutableStyledString =\n    new MutableStyledString(this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.StyledStringImageAttachment_Text_1').id), [\n    {\n      start: 0,\n      length: 28,\n      styledKey: StyledStringKey.PARAGRAPH_STYLE,\n      styledValue: this.leadingMarginValue\n    },\n    {\n      start: 14,\n      length: 9,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(14), fontColor: '#B22222' })\n    },\n    {\n      start: 24,\n      length: 4,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(14), fontWeight: FontWeight.Lighter })\n    },\n    {\n      start: 11,\n      length: 4,\n      styledKey: StyledStringKey.LINE_HEIGHT,\n      styledValue: this.lineHeightStyle1\n    }\n  ]);\n  // 请将$r('app.string.StyledStringImageAttachment_Text_2')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n￥16.21 3000+人好评\"\n  paragraphStyledString2: MutableStyledString =\n    new MutableStyledString(this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.StyledStringImageAttachment_Text_2').id), [\n    {\n      start: 0,\n      length: 5,\n      styledKey: StyledStringKey.PARAGRAPH_STYLE,\n      styledValue: this.leadingMarginValue\n    },\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.LINE_HEIGHT,\n      styledValue: new LineHeightStyle(new LengthMetrics(60))\n    },\n    {\n      start: 0,\n      length: 7,\n      styledKey: StyledStringKey.FONT,\n      styledValue: this.boldTextStyle\n    },\n    {\n      start: 1,\n      length: 1,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(18) })\n    },\n    {\n      start: 2,\n      length: 2,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(36) })\n    },\n    {\n      start: 4,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(20) })\n    },\n    {\n      start: 7,\n      length: 9,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Grey, fontSize: LengthMetrics.vp(14)})\n    }\n  ]);\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          Row() {\n            Column({ space: 10 }) {\n              Text(undefined, { controller: this.controller })\n                .id('text1')\n                .copyOption(CopyOptions.InApp)\n                .draggable(true)\n                .backgroundColor('#FFFFFF')\n                .borderRadius(5)\n              // 请将$r('app.string.StyledStringImageAttachment_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击查看商品卡片\"\n              Button($r('app.string.StyledStringImageAttachment_Button_1'))\n                .enabled(this.abled)\n                .onClick(() => {\n                  if (this.imagePixelMap !== undefined) {\n                    this.mutableStr = new MutableStyledString(new ImageAttachment({\n                      value: this.imagePixelMap,\n                      size: { width: 180, height: 160 },\n                      verticalAlign: ImageSpanAlignment.BASELINE,\n                      objectFit: ImageFit.Fill\n                    }));\n                    this.paragraphStyledString1.appendStyledString(this.paragraphStyledString2);\n                    this.mutableStr.appendStyledString(this.paragraphStyledString1);\n                    this.controller.setStyledString(this.mutableStr);\n                  }\n                  this.abled = false;\n                })\n            }\n            .width('100%')\n          }\n          .height('100%')\n          .backgroundColor('#F8F8FF')\n        }\n        // ...\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.StyledStringImageAttachment_title')替换为实际资源文件，在本示例中该资源文件的value值为\"通过ImageAttachment来添加图片\"\n    .title($r('app.string.StyledStringImageAttachment_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(241630)/* ["default"] */.A) + "",
        width: "300",
        height: "443"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置事件",
      children: "设置事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#gesturestyle",
        children: "GestureStyle"
      }), "设置onClick、onLongPress事件来使文本响应点击长按事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了初始化属性字符串对象即初始样式对象，亦可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#setstyle",
        children: "setStyle"
      }), "接口再叠加新样式或更新已有样式，同时需要在附加的文本组件controller上主动触发更新绑定的属性字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet gUIContext: UIContext;\n\nclass MyCustomSpan extends CustomSpan {\n  constructor(word: string, width: number, height: number, fontSize: number) {\n    super();\n    this.word = word;\n    this.width = width;\n    this.height = height;\n    this.fontSize = fontSize;\n  }\n\n  onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics {\n    return { width: this.width, height: this.height };\n  }\n\n  onDraw(context: DrawContext, options: CustomSpanDrawInfo) {\n    let canvas = context.canvas;\n\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 0,\n      blue: 0\n    });\n    const font = new drawing.Font();\n    font.setSize(gUIContext.vp2px(this.fontSize));\n    const textBlob =\n      drawing.TextBlob.makeFromString(this.word.substring(0, 5), font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n    canvas.attachBrush(brush);\n\n    this.onDrawRectByRadius(context, options.x, options.x + gUIContext.vp2px(this.width), options.lineTop,\n      options.lineBottom, 20);\n    brush.setColor({\n      alpha: 255,\n      red: 255,\n      green: 255,\n      blue: 255\n    });\n    canvas.attachBrush(brush);\n    canvas.drawTextBlob(textBlob, options.x, options.lineBottom - 30);\n    brush.setColor({\n      alpha: 255,\n      red: 255,\n      green: 228,\n      blue: 196\n    });\n    canvas.attachBrush(brush);\n    const textBlob1 =\n      drawing.TextBlob.makeFromString(this.word.substring(5), font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n    canvas.drawTextBlob(textBlob1, options.x + gUIContext.vp2px(100), options.lineBottom - 30);\n\n    canvas.detachBrush();\n  }\n\n  onDrawRectByRadius(context: DrawContext, left: number, right: number, top: number, bottom: number, radius: number) {\n    let canvas = context.canvas;\n    let path = new drawing.Path();\n\n    // 画带radius的rect\n    path.moveTo(left + radius, top);\n    path.lineTo(right - radius, top);\n    path.arcTo(right - 2 * radius, top, right, top + 2 * radius, 270, 90);\n    path.lineTo(right, bottom - radius);\n    path.arcTo(right - 2 * radius, bottom - 2 * radius, right, bottom, 0, 90);\n\n    path.lineTo(left + 2 * radius, bottom);\n    path.arcTo(left, bottom - 2 * radius, left + 2 * radius, bottom, 90, 90);\n    path.lineTo(left, top + 2 * radius);\n    path.arcTo(left, top, left + 2 * radius, top + 2 * radius, 180, 90);\n\n    canvas.drawPath(path);\n  }\n\n  setWord(word: string) {\n    this.word = word;\n  }\n\n  public width: number = 160;\n  public word: string = 'drawing';\n  public height: number = 10;\n  public fontSize: number = 16;\n}\n\n@Entry\n@Component\nexport struct StyledStringGestureStyle {\n  customSpan3: MyCustomSpan = new MyCustomSpan('99VIP88%off', 200, 40, 30);\n  customSpanStyledString: MutableStyledString = new MutableStyledString(this.customSpan3);\n  textController: TextController = new TextController();\n  isPageShow: boolean = true;\n  @State backgroundColor1: ResourceColor | undefined = undefined;\n  gestureStyleAttr: GestureStyle = new GestureStyle({\n    onClick: () => {\n      this.backgroundColor1 = Color.Green;\n    },\n    onLongPress: () => {\n      this.backgroundColor1 = Color.Grey;\n    }\n  });\n\n  aboutToAppear() {\n    gUIContext = this.getUIContext();\n  }\n\n  async onPageShow() {\n    if (!this.isPageShow) {\n      return;\n    }\n    this.isPageShow = false;\n    this.customSpanStyledString.setStyle({\n      start: 0,\n      length: 1,\n      styledKey: StyledStringKey.GESTURE,\n      styledValue: this.gestureStyleAttr\n    })\n    this.textController.setStyledString(this.customSpanStyledString);\n  }\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          Row() {\n            Column() {\n              // 请将$r('app.string.StyledStringGestureStyle_button_content')替换为实际资源文件，在本示例中该资源文件的value值为\"响应属性字符串事件改变背景色\"\n              Button($r('app.string.StyledStringGestureStyle_button_content'))\n                .backgroundColor(this.backgroundColor1)\n                .width('80%')\n                .margin(10)\n              Text(undefined, { controller: this.textController })\n                .id('text1')\n                .copyOption(CopyOptions.InApp)\n                .fontSize(30)\n            }\n            .width('100%')\n          }\n          .height('100%')\n        }\n        // ...\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.TStyledStringGestureStyle_title')替换为实际资源文件，在本示例中该资源文件的value值为\"设置事件\"\n    .title($r('app.string.TStyledStringGestureStyle_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(355089)/* ["default"] */.A) + "",
        width: "460",
        height: "143"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "格式转换",
      children: "格式转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#tohtml14",
        children: "toHtml"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#fromhtml",
        children: "fromHtml"
      }), "接口实现属性字符串与HTML格式字符串的相关转换，当前支持转换的HTML标签范围："]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["、", (0,jsx_runtime.jsxs)(_components.span, {
        children: ["、", (0,jsx_runtime.jsx)(_components.img, {}), "、", (0,jsx_runtime.jsx)(_components.br, {}), "、", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["、", (0,jsx_runtime.jsxs)(_components.b, {
            children: ["、", (0,jsx_runtime.jsxs)(_components.a, {
              children: ["、", (0,jsx_runtime.jsxs)(_components.i, {
                children: ["、", (0,jsx_runtime.jsxs)(_components.em, {
                  children: ["、", (0,jsx_runtime.jsxs)(_components.s, {
                    children: ["、", (0,jsx_runtime.jsxs)(_components.u, {
                      children: ["、", (0,jsx_runtime.jsxs)(_components.del, {
                        children: ["、", (0,jsx_runtime.jsxs)(_components.sup, {
                          children: ["、", (0,jsx_runtime.jsx)(_components.sub, {
                            children: "。"
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
    }), (0,jsx_runtime.jsx)(_components.strong, {
      children: (0,jsx_runtime.jsxs)(_components.b, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          children: (0,jsx_runtime.jsx)(_components.i, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.s, {
                children: (0,jsx_runtime.jsxs)(_components.u, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                      children: "以下示例展示了如何将属性字符串转换成HTML格式，并展示了如何从HTML格式转换回属性字符串。"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "// xxx.ets\nimport { image } from '@kit.ImageKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct StyledStringHtml {\n  imagePixelMap: image.PixelMap | undefined = undefined;\n  @State html: string | undefined = undefined;\n  @State styledString: StyledString | undefined = undefined;\n  controller1: TextController = new TextController;\n  controller2: TextController = new TextController;\n  private uiContext: UIContext = this.getUIContext();\n\n  async aboutToAppear() {\n    console.info('aboutToAppear initial imagePixelMap');\n    this.imagePixelMap = await this.getPixmapFromMedia($r('app.media.startIcon'));\n  }\n\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array = await this.uiContext.getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength));\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          Column() {\n            Text(undefined, { controller: this.controller1 }).height(100)\n            Row() {\n              // 请将$r('app.string.StyledStringHtml_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"添加属性字符串\"\n              Button($r('app.string.StyledStringHtml_Button_1')).onClick(() => {\n                // 请将$r('app.string.StyledStringHtml_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"属性字符串\"\n                let mutableStyledString1: MutableStyledString =\n                  new MutableStyledString(this.getUIContext()\n                    .getHostContext()!.resourceManager.getStringSync($r('app.string.StyledStringHtml_Text_1').id), [{\n                  start: 0,\n                  length: 6,\n                  styledKey: StyledStringKey.FONT,\n                  styledValue: new TextStyle({ fontColor: Color.Green, fontSize: LengthMetrics.px(50) })\n                }]);\n                if (this.imagePixelMap !== undefined) {\n                  let mutableStyledString2 = new MutableStyledString(new ImageAttachment({\n                    value: this.imagePixelMap,\n                    size: { width: 50, height: 50 },\n                  }));\n                  mutableStyledString1.appendStyledString(mutableStyledString2);\n                }\n                this.styledString = mutableStyledString1;\n                this.controller1.setStyledString(mutableStyledString1);\n              }).margin(5)\n              // 请将$r('app.string.StyledStringHtml_Button_2')替换为实际资源文件，在本示例中该资源文件的value值为\"toHtml\"\n              Button($r('app.string.StyledStringHtml_Button_2')).onClick(() => {\n                this.html = StyledString.toHtml(this.styledString);\n              }).margin(5)\n              // 请将$r('app.string.StyledStringHtml_Button_3')替换为实际资源文件，在本示例中该资源文件的value值为\"fromHtml\"\n              Button($r('app.string.StyledStringHtml_Button_3')).onClick(async () => {\n                let styledString = await StyledString.fromHtml(this.html);\n                this.controller2.setStyledString(styledString);\n              }).margin(5)\n            }\n\n            Text(undefined, { controller: this.controller2 }).height(100)\n            Text(this.html)\n          }.width('100%')\n        }\n        // ...\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.StyledStringHtml_title')替换为实际资源文件，在本示例中该资源文件的value值为\"格式转换\"\n    .title($r('app.string.StyledStringHtml_title'))\n  }\n}\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.img, {
                      src: (__webpack_require__(315477)/* ["default"] */.A) + "",
                      width: "363",
                      height: "366"
                    })
                  }), "\n"]
                })
              })
            })
          })
        }), (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.s, {
            children: (0,jsx_runtime.jsxs)(_components.u, {
              children: [(0,jsx_runtime.jsxs)(_components.ul, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  children: "\n"
                }), (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    children: "\n"
                  }), (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsxs)(_components.a, {
                      children: ["将HTML中", (0,jsx_runtime.jsxs)(_components.strong, {
                        children: ["、", (0,jsx_runtime.jsx)(_components.b, {
                          children: "、"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.b, {
                        children: (0,jsx_runtime.jsxs)(_components.a, {
                          children: ["、", (0,jsx_runtime.jsxs)(_components.i, {
                            children: ["、", (0,jsx_runtime.jsxs)(_components.em, {
                              children: ["、", (0,jsx_runtime.jsxs)(_components.s, {
                                children: ["、", (0,jsx_runtime.jsxs)(_components.u, {
                                  children: ["、", (0,jsx_runtime.jsxs)(_components.del, {
                                    children: ["、", (0,jsx_runtime.jsxs)(_components.sup, {
                                      children: ["、", (0,jsx_runtime.jsx)(_components.sub, {
                                        children: "标签及其style属性中的background-color转换为属性字符串并转回HTML。"
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
                  }), (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.b, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        children: (0,jsx_runtime.jsx)(_components.i, {
                          children: (0,jsx_runtime.jsx)(_components.em, {
                            children: (0,jsx_runtime.jsx)(_components.s, {
                              children: (0,jsx_runtime.jsxs)(_components.u, {
                                children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
                                  children: (0,jsx_runtime.jsx)(_components.code, {
                                    children: "// xxx.ets\n@Entry\n@Component\nstruct HtmlSpanStringDemo {\n  @State html: string =\n    \"<p>This is <b>b</b> <strong>strong</strong> <em>em</em> <i>i</i> <u>u</u> <del>del</del> <s>s</s> <span style =   \\\"foreground-color:blue\\\"> <a href='https://www.example.com'>www.example</a> </span> <span   style=\\\"background-color: red;\\\">red span</span> <sup>superscript</sup> and <sub>subscript</sub></p>\";\n  @State spanString: StyledString | undefined = undefined;\n  @State resultText: string = ''; // 保存结果文本的状态\n  controller: TextController = new TextController;\n\n  build() {\n    Column() {\n      // 显示转换后的spanString\n      Text(undefined, { controller: this.controller }).height(100).id('text1')\n\n      // TextArea显示每个步骤的结果\n      TextArea({ text: this.html })\n        .width('100%')\n        .height(100)\n        .margin(5)\n\n      // 按钮1:将HTML转换为SpanString\n      // 请将$r('app.string.Converted_HTML_to_SpanString')替换为实际资源文件，在本示例中该资源文件的value值为\"Converted HTML to SpanString\"\n      Button($r('app.string.Converted_HTML_to_SpanString')).onClick(async () => {\n        this.spanString = await StyledString.fromHtml(this.html);\n        this.controller.setStyledString(this.spanString);\n        this.resultText = 'Converted HTML to SpanString successfully.';\n      }).margin(5)\n\n      // 按钮2:将SpanString转换为HTML\n      // 请将$r('app.string.Converted_SpanString_to_HTML')替换为实际资源文件，在本示例中该资源文件的value值为\"Converted SpanString to HTML\"\n      Button($r('app.string.Converted_SpanString_to_HTML')).onClick(() => {\n        if (this.spanString) {\n          // 将spanString转换为HTML并替换当前的HTML状态\n          const newHtml = StyledString.toHtml(this.spanString);\n          if (newHtml !== this.html) { // 通过检查内容是否已经相同来防止重复\n            this.html = newHtml;\n          }\n          this.resultText = 'Converted SpanString to HTML successfully.';\n        } else {\n          this.resultText = 'SpanString is undefined.';\n        }\n      }).margin(5)\n\n      // 按钮3:将HTML转换回SpanString\n      /* 请将$r('app.string.Converted_HTML_back_to_SpanString')替换为实际资源文件，在本示例中该资源文件的\n       value值为\"Converted HTML back to SpanString\" */\n      Button($r('app.string.Converted_HTML_back_to_SpanString')).onClick(async () => {\n        this.spanString = await StyledString.fromHtml(this.html);\n        this.controller.setStyledString(this.spanString);\n        this.resultText = 'Converted HTML back to SpanString successfully.';\n      }).margin(5)\n\n      // 重置：重置HTML和SpanString\n      // 请将$r('app.string.Reset')替换为实际资源文件，在本示例中该资源文件的value值为\"Reset\"\n      Button($r('app.string.Reset')).onClick(() => {\n        this.html =\n          \"<p>This is <b>b</b> <strong>strong</strong> <em>em</em> <i>i</i> <u>u</u> <del>del</del> <s>s</s> <span   style = \\\"foreground-color:blue\\\"> <a href='https://www.example.com'>www.example</a> </span> <span   style=\\\"background-color: red;\\\">red span</span> <sup>superscript</sup> and <sub>subscript</sub></p>\";\n        this.spanString = undefined;\n        this.controller.setStyledString(new StyledString('')); // 使用空的StyledString实例\n        this.resultText = 'Reset HTML and SpanString successfully.';\n      }).margin(5)\n    }.width('100%').padding(20)\n  }\n}\n"
                                  })
                                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                  children: (0,jsx_runtime.jsx)(_components.img, {
                                    src: (__webpack_require__(685203)/* ["default"] */.A) + "",
                                    width: "390",
                                    height: "369"
                                  })
                                }), "\n"]
                              })
                            })
                          })
                        })
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.b, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      children: (0,jsx_runtime.jsx)(_components.i, {
                        children: (0,jsx_runtime.jsx)(_components.em, {
                          children: (0,jsx_runtime.jsx)(_components.s, {
                            children: (0,jsx_runtime.jsx)(_components.u, {
                              children: "\n"
                            })
                          })
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.b, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    children: (0,jsx_runtime.jsx)(_components.i, {
                      children: (0,jsx_runtime.jsx)(_components.em, {
                        children: (0,jsx_runtime.jsx)(_components.s, {
                          children: (0,jsx_runtime.jsxs)(_components.u, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.h2, {
                              id: "场景示例",
                              children: "场景示例"
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "该示例通过ParagraphStyle、LineHeightStyle、TextStyle对象展示了会员过期提示的效果。"
                            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                              children: (0,jsx_runtime.jsx)(_components.code, {
                                children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct StyledStringSceneExample {\n  alignCenterParagraphStyleAttr: ParagraphStyle = new ParagraphStyle({ textAlign: TextAlign.Center });\n  //行高样式对象\n  lineHeightStyle1: LineHeightStyle = new LineHeightStyle(LengthMetrics.vp(24));\n  //Bold样式\n  boldTextStyle: TextStyle = new TextStyle({ fontWeight: FontWeight.Bold });\n  //创建含段落样式的对象paragraphStyledString1\n  // 请将$r('app.string.StyledStringSceneExample_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"您的豪华钻石已过期1天\\n续费可继续享受会员专属权益\"\n  paragraphStyledString1: MutableStyledString =\n    new MutableStyledString(this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.StyledStringSceneExample_Text_1').id), [\n      {\n        start: 0,\n        length: 4,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.alignCenterParagraphStyleAttr\n      },\n      {\n        start: 0,\n        length: 4,\n        styledKey: StyledStringKey.LINE_HEIGHT,\n        styledValue: new LineHeightStyle(LengthMetrics.vp(40))\n      },\n      {\n        start: 11,\n        length: 14,\n        styledKey: StyledStringKey.FONT,\n        styledValue: new TextStyle({ fontSize: LengthMetrics.vp(14), fontColor: Color.Grey })\n      },\n      {\n        start: 11,\n        length: 4,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.alignCenterParagraphStyleAttr\n      },\n      {\n        start: 11,\n        length: 4,\n        styledKey: StyledStringKey.LINE_HEIGHT,\n        styledValue: this.lineHeightStyle1\n      }\n    ]);\n  // 请将$r('app.string.StyledStringSceneExample_Text_2')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n￥4.88￥15\"\n  paragraphStyledString2: MutableStyledString =\n    new MutableStyledString(this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.StyledStringSceneExample_Text_2').id), [\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.PARAGRAPH_STYLE,\n      styledValue: this.alignCenterParagraphStyleAttr\n    },\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.LINE_HEIGHT,\n      styledValue: new LineHeightStyle(LengthMetrics.vp(60))\n    },\n    {\n      start: 0,\n      length: 6,\n      styledKey: StyledStringKey.FONT,\n      styledValue: this.boldTextStyle\n    },\n    {\n      start: 1,\n      length: 1,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(18) })\n    },\n    {\n      start: 2,\n      length: 4,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(40) })\n    },\n    {\n      start: 6,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Grey, fontSize: LengthMetrics.vp(14) })\n    },\n    {\n      start: 6,\n      length: 3,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({ type: TextDecorationType.LineThrough, color: Color.Grey })\n    }\n  ]);\n  // 请将$r('app.string.StyledStringSceneExample_Text_3')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n02时06分后将失去该优惠\"\n  paragraphStyledString3: MutableStyledString =\n    new MutableStyledString(this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.StyledStringSceneExample_Text_3').id), [\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.PARAGRAPH_STYLE,\n      styledValue: this.alignCenterParagraphStyleAttr\n    },\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.LINE_HEIGHT,\n      styledValue: new LineHeightStyle(LengthMetrics.vp(30))\n    },\n    {\n      start: 1,\n      length: 2,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: '#FFD700', fontWeight: FontWeight.Bold })\n    },\n    {\n      start: 4,\n      length: 2,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: '#FFD700', fontWeight: FontWeight.Bold })\n    }\n  ]);\n  controller: TextController = new TextController();\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          Row() {\n            Column({ space: 5 }) {\n              Text(undefined, { controller: this.controller })\n                .id('text1')\n                .width(240)\n                .copyOption(CopyOptions.InApp)\n                .draggable(true)\n                .onAppear(() => {\n                  this.paragraphStyledString2.appendStyledString(this.paragraphStyledString3);\n                  this.paragraphStyledString1.appendStyledString(this.paragraphStyledString2);\n                  this.controller.setStyledString(this.paragraphStyledString1);\n                })\n              // 请将$r('app.string.StyledStringSceneExample_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"限时4.88元 立即续费\"\n              Button($r('app.string.StyledStringSceneExample_Button_1'))\n                .width(200)\n                .fontColor(Color.White)\n                .fontSize(18)\n                .backgroundColor('#3CB371')\n                .margin({ bottom: 10 })\n            }\n            .borderWidth(1).borderColor('#FFDEAD')\n            .margin({ left: 10 })\n          }\n          .height('60%')\n        }\n        // ...\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.StyledStringSceneExample_title')替换为实际资源文件，在本示例中该资源文件的value值为\"场景示例\"\n    .title($r('app.string.StyledStringSceneExample_title'))\n  }\n}\n"
                              })
                            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: (0,jsx_runtime.jsx)(_components.img, {
                                src: (__webpack_require__(105779)/* ["default"] */.A) + "",
                                width: "367",
                                height: "325"
                              })
                            }), "\n"]
                          })
                        })
                      })
                    })
                  })
                })
              })]
            })
          })
        })]
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
355089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437893-43e7479f89da9244ddb00b73bc6c94a4.gif");

},
833059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
315477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957848-9f28ad45f048a84a8dffe55e10f65d99.gif");

},
241630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798198-0e26a1bcf32288ae08f5d72d35aa2b24.png");

},
718292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
869682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437891-90980690915773d4d32278aa4a36467a.png");

},
685203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477849-7f010caeab429980ac0c48097b1c9630.gif");

},
629597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798196-acdd0a114b75a13ffb3b9861360f34fc.png");

},
620843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957846-ad0220cdda529b1e1cec6cbbcb904988.gif");

},
474641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477843-4056787468b11e9d05e1b63395e9662f.png");

},
199325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437889-216a2be4c9caab746679f369670f9260.png");

},
71404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
105779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798200-17f7d96a454cc638586178f88b8446d7.png");

},
871694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477847-2b7656b0c8b7ab24181084ff601fb563.png");

},
356708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957844-d43b3e18e48d3dfd2d8ad1247afeef5c.png");

},
189872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437887-83a59fe16f3ce9ac1b17bec73f0c010f.png");

},
452814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
188053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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