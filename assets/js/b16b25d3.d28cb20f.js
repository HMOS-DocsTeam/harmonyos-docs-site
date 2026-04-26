"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["280393"], {
118398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_measureutils_arkts_apis_uicontext_measureutils_md_b16_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-uicontext-arkts-apis-uicontext-measureutils-arkts-apis-uicontext-measureutils-md-b16.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_measureutils_arkts_apis_uicontext_measureutils_md_b16_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils","title":"Class (MeasureUtils)","description":"提供文本宽度、高度等相关计算。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Class (MeasureUtils)","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-measureutils","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-uicontext-measureutils"},"sidebar":"ref","previous":{"title":"Class (MarqueeDynamicSyncScene)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-marqueedynamicsyncscene/arkts-apis-uicontext-marqueedynamicsyncscene"},"next":{"title":"Class (MediaQuery)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-mediaquery/arkts-apis-uicontext-mediaquery"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils.md


const frontMatter = {
	title: 'Class (MeasureUtils)',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-measureutils',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-uicontext-measureutils'
};
const contentTitle = 'Class (MeasureUtils)';

const assets = {

};



const toc = [{
  "value": "measureText12+",
  "id": "measuretext12",
  "level": 2
}, {
  "value": "measureTextSize12+",
  "id": "measuretextsize12",
  "level": 2
}, {
  "value": "getParagraphs20+",
  "id": "getparagraphs20",
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
        id: "class-measureutils",
        children: "Class (MeasureUtils)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供文本宽度、高度等相关计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620869)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["以下API需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getmeasureutils12",
          children: "getMeasureUtils()"
        }), "方法获取MeasureUtils实例，再通过此实例调用对应方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如需更多测算文本参数，建议使用图形对应测算接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraph",
          children: "Paragraph"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用文本计算接口时，不推荐同时用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextsetfontsizescale13",
          children: "ApplicationContext.setFontSizeScale"
        }), "设置应用字体大小缩放比例。为了确保时序正确性，建议开发者自行监听字体缩放变化，以保证测算结果的准确性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在测算裁剪后的文本时，由于某些Unicode字符（如emoji）的码位长度大于1，直接按字符串长度裁剪会导致不准确的结果。建议基于Unicode码点进行迭代处理，避免错误截断字符，确保测算结果准确，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#measuretextsize12",
          children: "measureTextSize方法的示例2"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "measuretext12",
      children: "measureText12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "measureText(options: MeasureOptions): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算指定文本作为单行文本显示时的宽度。如果文本包含多行（由换行符\\n分隔），则返回其中最长的行的宽度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(958134)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["measureText接口的计算结果始终是单行文本的宽度，入参options中配置的布局约束（如constraintWidth、maxLines）对measureText的结果没有影响。如果需要计算布局约束下的宽度，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#measuretextsize12",
        children: "measureTextSize"
      }), "方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-measure/js-apis-measure#measureoptions",
              children: "MeasureOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被计算文本描述信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本宽度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明:"
              })
            }), "  浮点数会向上取整。  单位：px"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过MeasureUtils的measureText方法获取\"Hello World\"文字的宽度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MeasureUtils } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State uiContext: UIContext = this.getUIContext();\n  @State uiContextMeasure: MeasureUtils = this.uiContext.getMeasureUtils();\n  @State textWidth: number = this.uiContextMeasure.measureText({\n    textContent: \"Hello World\",\n    fontSize: '50px'\n  });\n\n  build() {\n    Row() {\n      Column() {\n        Text(`The width of 'Hello World': ${this.textWidth}`)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "measuretextsize12",
      children: "measureTextSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "measureTextSize(options: MeasureOptions): SizeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算指定文本单行布局下的宽度和高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-measure/js-apis-measure#measureoptions",
              children: "MeasureOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被计算文本描述信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
              children: "SizeOptions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回文本所占布局宽度和高度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明:"
              })
            }), "  没有传参constraintWidth的情况下，文本宽度返回值浮点数会向上取整。  文本宽度以及高度返回值单位均为px。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过MeasureUtils的measureTextSize方法获取\"Hello World\"文字的宽度和高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MeasureUtils } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State uiContext: UIContext = this.getUIContext();\n  @State uiContextMeasure: MeasureUtils = this.uiContext.getMeasureUtils();\n  textSize: SizeOptions = this.uiContextMeasure.measureTextSize({\n    textContent: \"Hello World\",\n    fontSize: '50px'\n  });\n  build() {\n    Row() {\n      Column() {\n        Text(`The width of 'Hello World': ${this.textSize.width}`)\n        Text(`The height of 'Hello World': ${this.textSize.height}`)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过MeasureUtils的measureTextSize方法和unicode码点计算，手动实现文本截断。与设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#maxlines",
        children: "maxLines"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textoverflow",
        children: "textOverflow"
      }), "实现同样的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TextDemo {\n  @State isExpanded: boolean = false;\n  @State displayedText: string = '';\n  @State defaultFontSize: number = 16;\n  @State textWidth: number = 150;\n  @State numLength: number = 0;\n  @State numUnicode: number = 0;\n  private fullText: string =\n    '这是一个超长文本示例，当文本内容超过三行时，超出部分会显示省略号。点击省略号可展开全部内容。此处为测试文本，用于验证多行文本截断效果。';\n  private maxLines: number = 3;\n\n  aboutToAppear() {\n    const codePoints = this.getCodePoints(this.fullText);\n    this.numLength = this.fullText.length;\n    this.numUnicode = codePoints.length;\n    this.calculateText(this.maxLines, this.fullText);\n  }\n\n  getCodePoints(text: string): number[] { // 使用codePointAt分割文本\n    const codePoints: number[] = [];\n    let index = 0;\n    while (index < text.length) {\n      const codePoint = text.codePointAt(index);\n      if (codePoint === undefined) {\n        break;\n      }\n      codePoints.push(codePoint);\n      index += codePoint > 0xFFFF ? 2 : 1; // 处理四字节字符\n    }\n    return codePoints;\n  }\n\n  lastUnicodeLength(str: string) { // 获得字符串最后一个字符的unicode长度\n    if (!str || str.length < 1) {\n      return 0;\n    }\n    if (str.length < 2) {\n      return 1;\n    }\n    let lastCodePoint = str.codePointAt(str.length - 2);\n    if (lastCodePoint == undefined) {\n      return 1;\n    }\n    let lastStr = String.fromCodePoint(lastCodePoint);\n    return lastStr.length;\n  }\n\n  calculateText(maxLines: number, fullText: string) { // 计算文本是否需要截断\n    const noMaxLinesSize = this.getUIContext().getMeasureUtils().measureTextSize({\n      textContent: fullText,\n      constraintWidth: this.textWidth\n    });\n    const hasMaxLinesSize = this.getUIContext().getMeasureUtils().measureTextSize({\n      textContent: fullText,\n      constraintWidth: this.textWidth,\n      maxLines: this.maxLines\n    });\n\n    this.displayedText = this.displayedText = this.fullText;\n    if (Number(noMaxLinesSize.height) > Number(hasMaxLinesSize.height)) { // 存在截断\n      while (this.displayedText.length > 0) {\n        this.displayedText =\n          this.displayedText.slice(0,\n            this.displayedText.length - this.lastUnicodeLength(this.displayedText)); // 删掉几个字\n        let textAfterCut = this.displayedText + \"…\"; // 加上省略号\n        let sizeAfterCut = this.getUIContext().getMeasureUtils().measureTextSize({\n          textContent: textAfterCut,\n          constraintWidth: this.textWidth\n        });\n        if (Number(sizeAfterCut.height) <= Number(hasMaxLinesSize.height)) {\n          break;\n        } else {\n          console.info(\"displayedText: \" + this.displayedText);\n        }\n      }\n      this.displayedText = this.displayedText + \"…\";\n    }\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`用length计算的文本长度 ${this.numLength}`)\n      Text(`用codePointAt计算的文本长度 ${this.numUnicode}`)\n      Text('下面是需要截断的文本')\n      Text(this.fullText)\n        .borderWidth(1)\n\n      Text('下面是设置了maxLines和texOverflow')\n      Text(this.fullText)\n        .maxLines(this.maxLines)\n        .textOverflow({ overflow: TextOverflow.Ellipsis })\n        .width(this.textWidth)\n        .borderWidth(1)\n\n      Text('下面是计算后分割的文本')\n      Text(this.displayedText)\n        .width(this.textWidth)\n        .borderWidth(1)\n    }\n    .padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60570)/* ["default"] */.A) + "",
        width: "338",
        height: "370"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getparagraphs20",
      children: "getParagraphs20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getParagraphs(styledString: StyledString, options?: TextLayoutOptions): Array<Paragraph>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将属性字符串根据文本布局选项转换成对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraph",
        children: "Paragraph"
      }), "数组。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "styledString"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#styledstring",
              children: "StyledString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待转换的属性字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textlayoutoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E20",
              children: "TextLayoutOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本布局选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraph",
              children: "Paragraph"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraph",
              children: "Paragraph"
            }), "的数组。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过MeasureUtils的getParagraphs方法测算文本，当内容超出最大显示行数的时候，截断文本显示并展示“...全文”的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nclass MyCustomSpan extends CustomSpan {\n  constructor(word: string, width: number, height: number, context: UIContext) {\n    super();\n    this.word = word;\n    this.width = width;\n    this.height = height;\n    this.context = context;\n  }\n\n  onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics {\n    return { width: this.width, height: this.height };\n  }\n\n  onDraw(context: DrawContext, options: CustomSpanDrawInfo) {\n    let canvas = context.canvas;\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 74,\n      blue: 175\n    });\n    const font = new drawing.Font();\n    font.setSize(25);\n    const textBlob = drawing.TextBlob.makeFromString(this.word, font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n    canvas.attachBrush(brush);\n    canvas.drawRect({\n      left: options.x + 10,\n      right: options.x + this.context.vp2px(this.width) - 10,\n      top: options.lineTop + 10,\n      bottom: options.lineBottom - 10\n    });\n    brush.setColor({\n      alpha: 255,\n      red: 23,\n      green: 169,\n      blue: 141\n    });\n    canvas.attachBrush(brush);\n    canvas.drawTextBlob(textBlob, options.x + 20, options.lineBottom - 15);\n    canvas.detachBrush();\n  }\n\n  setWord(word: string) {\n    this.word = word;\n  }\n\n  width: number = 160;\n  word: string = \"drawing\";\n  height: number = 10;\n  context: UIContext;\n}\n\n@Entry\n@Component\nstruct Index {\n  str: string =\n    \"Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\";\n  mutableStr2 = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.px(20) })\n    },\n    {\n      start: 3,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Brown })\n    }\n  ]);\n\n  // 测算属性字符串在指定宽度下能显示的行数\n  getLineNum(styledString: StyledString, width: LengthMetrics) {\n    let paragraphArr = this.getUIContext().getMeasureUtils().getParagraphs(styledString, { constraintWidth: width });\n    let res = 0;\n    for (let i = 0; i < paragraphArr.length; ++i) {\n      res += paragraphArr[i].getLineCount();\n    }\n    return res;\n  }\n\n  // 测算属性字符串显示maxLines行时最多可以显示的字数\n  getCorrectIndex(styledString: MutableStyledString, maxLines: number, width: LengthMetrics) {\n    let low = 0;\n    let high = styledString.length - 1;\n    // 使用二分查找\n    while (low <= high) {\n      let mid = (low + high) >> 1;\n      console.info(\"demo: get \" + low + \" \" + high + \" \" + mid);\n      let moreStyledString = new MutableStyledString(\"... 全文\", [{\n        start: 4,\n        length: 2,\n        styledKey: StyledStringKey.FONT,\n        styledValue: new TextStyle({ fontColor: Color.Blue })\n      }]);\n      moreStyledString.insertStyledString(0, styledString.subStyledString(0, mid));\n      let lineNum = this.getLineNum(moreStyledString, LengthMetrics.px(500));\n      if (lineNum <= maxLines) {\n        low = mid + 1;\n      } else {\n        high = mid - 1;\n      }\n    }\n    return high;\n  }\n\n  mutableStrAllContent = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.px(40) })\n    },\n    {\n      start: 3,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Brown })\n    }\n  ]);\n  customSpan1: MyCustomSpan = new MyCustomSpan(\"Hello\", 120, 10, this.getUIContext());\n  mutableStrAllContent2 = new MutableStyledString(this.str, [\n    {\n      start: 0,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.px(100) })\n    },\n    {\n      start: 3,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Brown })\n    }\n  ]);\n  controller: TextController = new TextController();\n  controller2: TextController = new TextController();\n  textController: TextController = new TextController();\n  textController2: TextController = new TextController();\n\n  aboutToAppear() {\n    this.mutableStrAllContent2.insertStyledString(0, new StyledString(this.customSpan1));\n    this.mutableStr2.insertStyledString(0, new StyledString(this.customSpan1));\n  }\n\n  build() {\n    Scroll() {\n      Column() {\n        Text('原文')\n        Text(undefined, { controller: this.controller }).width('500px').onAppear(() => {\n          this.controller.setStyledString(this.mutableStrAllContent);\n        })\n        Divider().strokeWidth(8).color('#F1F3F5')\n        Text('排版后')\n        Text(undefined, { controller: this.textController }).onAppear(() => {\n          let now = this.getCorrectIndex(this.mutableStrAllContent, 3, LengthMetrics.px(500));\n          if (now != this.mutableStrAllContent.length - 1) {\n            let moreStyledString = new MutableStyledString(\"... 全文\", [{\n              start: 4,\n              length: 2,\n              styledKey: StyledStringKey.FONT,\n              styledValue: new TextStyle({ fontColor: Color.Blue })\n            }]);\n            moreStyledString.insertStyledString(0, this.mutableStrAllContent.subStyledString(0, now));\n            this.textController.setStyledString(moreStyledString);\n          } else {\n            this.textController.setStyledString(this.mutableStrAllContent);\n          }\n        })\n          .width('500px')\n        Divider().strokeWidth(8).color('#F1F3F5')\n        Text('原文')\n        Text(undefined, { controller: this.controller2 }).width('500px').onAppear(() => {\n          this.controller2.setStyledString(this.mutableStrAllContent2);\n        })\n        Divider().strokeWidth(8).color('#F1F3F5')\n        Text('排版后')\n        Text(undefined, { controller: this.textController2 }).onAppear(() => {\n          let now = this.getCorrectIndex(this.mutableStrAllContent2, 3, LengthMetrics.px(500));\n          let moreStyledString = new MutableStyledString(\"... 全文\", [{\n            start: 4,\n            length: 2,\n            styledKey: StyledStringKey.FONT,\n            styledValue: new TextStyle({ fontColor: Color.Blue })\n          }]);\n          moreStyledString.insertStyledString(0, this.mutableStrAllContent2.subStyledString(0, now));\n          this.textController2.setStyledString(moreStyledString);\n        })\n          .width('500px')\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(939625)/* ["default"] */.A) + "",
        width: "1251",
        height: "2362"
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
958134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
620869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
60570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479411-1b3e8224d53427f2c8b7c0a45321fadf.png");

},
939625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799762-56569b9bf6cdf37d3ebed4d23c0fc377.png");

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