"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["813372"], {
74074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_text_draw_text_display_complex_text_arkts_complex_text_arkts_md_d52_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-text-draw-text-display-complex-text-arkts-complex-text-arkts-md-d52.json
var site_docs_arkgraphics_2_d_text_draw_text_display_complex_text_arkts_complex_text_arkts_md_d52_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/text/draw-text-display/complex-text-arkts/complex-text-arkts","title":"复杂文本绘制与显示（ArkTS）","description":"在进行文本绘制时，可以通过选择合适的字体、大小和颜色完成简单文本的绘制与显示；此外，还支持通过设置其他丰富的样式、语言、段落等进行复杂文本的绘制。","source":"@site/docs/arkgraphics-2d/text/draw-text-display/complex-text-arkts/complex-text-arkts.md","sourceDirName":"arkgraphics-2d/text/draw-text-display/complex-text-arkts","slug":"/arkgraphics-2d/text/draw-text-display/complex-text-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/complex-text-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"复杂文本绘制与显示（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-text-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"简单文本绘制与显示（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/simple-text-arkts/"},"next":{"title":"自定义文本绘制与显示（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/draw-text-display/text-custom-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/text/draw-text-display/complex-text-arkts/complex-text-arkts.md


const frontMatter = {
	title: '复杂文本绘制与显示（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-text-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '复杂文本绘制与显示（ArkTS）';

const assets = {

};



const toc = [{
  "value": "多语言文本绘制与显示",
  "id": "多语言文本绘制与显示",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "效果展示",
  "id": "效果展示",
  "level": 3
}, {
  "value": "多行文本绘制与显示",
  "id": "多行文本绘制与显示",
  "level": 2
}, {
  "value": "实现说明",
  "id": "实现说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "效果展示",
  "id": "效果展示-1",
  "level": 3
}, {
  "value": "多样式文本绘制与显示",
  "id": "多样式文本绘制与显示",
  "level": 2
}, {
  "value": "装饰线",
  "id": "装饰线",
  "level": 3
}, {
  "value": "字体特征",
  "id": "字体特征",
  "level": 3
}, {
  "value": "可变字体",
  "id": "可变字体",
  "level": 3
}, {
  "value": "文本阴影",
  "id": "文本阴影",
  "level": 3
}, {
  "value": "占位符",
  "id": "占位符",
  "level": 3
}, {
  "value": "自动间距",
  "id": "自动间距",
  "level": 3
}, {
  "value": "垂直对齐",
  "id": "垂直对齐",
  "level": 3
}, {
  "value": "上下标",
  "id": "上下标",
  "level": 3
}, {
  "value": "高对比度",
  "id": "高对比度",
  "level": 3
}, {
  "value": "行高调整",
  "id": "行高调整",
  "level": 3
}, {
  "value": "行间距调整",
  "id": "行间距调整",
  "level": 3
}, {
  "value": "示例一（装饰线、字体特征）",
  "id": "示例一装饰线字体特征",
  "level": 3
}, {
  "value": "示例二（可变字体、文本阴影、占位符）",
  "id": "示例二可变字体文本阴影占位符",
  "level": 3
}, {
  "value": "示例三（垂直对齐）",
  "id": "示例三垂直对齐",
  "level": 3
}, {
  "value": "示例四（上下标文本）",
  "id": "示例四上下标文本",
  "level": 3
}, {
  "value": "示例五（高对比度）",
  "id": "示例五高对比度",
  "level": 3
}, {
  "value": "示例六（行高调整方式一）",
  "id": "示例六行高调整方式一",
  "level": 3
}, {
  "value": "示例七（行高调整方式二）",
  "id": "示例七行高调整方式二",
  "level": 3
}, {
  "value": "示例八（行间距调整）",
  "id": "示例八行间距调整",
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
        id: "复杂文本绘制与显示arkts",
        children: "复杂文本绘制与显示（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行文本绘制时，可以通过选择合适的字体、大小和颜色完成简单文本的绘制与显示；此外，还支持通过设置其他丰富的样式、语言、段落等进行复杂文本的绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复杂文本绘制主要包含以下几个场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多语言文本绘制与显示"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多行文本绘制与显示"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多样式文本绘制与显示"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多语言文本绘制与显示",
      children: "多语言文本绘制与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多语言支持是全球化应用的基础。多语言文本绘制需要支持不同语言的字符集及其独特的显示需求，例如右到左语言（如阿拉伯语）或竖排文本（如中文）。开发者需要理解不同语言的渲染特性，确保文本的正确显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在多语言文本使用的场景下，主要通过指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#textstyle",
        children: "TextStyle"
      }), "文本样式中的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "locale"
        })
      }), "字段来实现，可直接通过locale字段的值优先匹配对应字体，跳过遍历列表匹配字体的过程，从而降低匹配时间和内存使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过context获取到Canvas画布对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 绘制代码逻辑写在这里\nlet canvas = context.canvas;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化文本样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let myTextStyle: text.TextStyle = {\n  color: {\n    alpha: 255,\n    red: 255,\n    green: 0,\n    blue: 0\n  },\n  fontSize: 50,\n  // 设置语言偏好为简体中文\n  locale: 'zh-Hans'\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化段落样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let myParagraphStyle: text.ParagraphStyle = {\n  textStyle: myTextStyle,\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化段落对象，并添加文本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let fontCollection = text.FontCollection.getGlobalInstance();\nlet paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n// 更新文本样式\nparagraphBuilder.pushStyle(myTextStyle);\n// 添加文本\nparagraphBuilder.addText('你好，世界');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排版段落并进行文本绘制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 生成段落\nlet paragraph = paragraphBuilder.build();\n// 布局\nparagraph.layoutSync(1250);\n// 绘制文本\nparagraph.paint(canvas, 10, 0);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "效果展示",
      children: "效果展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562378)/* ["default"] */.A) + "",
        width: "720",
        height: "1156"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多行文本绘制与显示",
      children: "多行文本绘制与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多行文本相对于单行文本比较复杂，一般针对多行文本，需要进行文本排版、断词策略设置、文本对齐方式、最大行数限制等，主要通过设置段落样式实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现说明",
      children: "实现说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "段落样式"
        })
      }), "（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraphstyle",
        children: "ParagraphStyle"
      }), "）是对多行文本中每段内容的样式设置，包括断词策略、文本对齐方式、最大行数限制等。开发者可以通过对不同段落进行样式化，以提高文本的可读性和美观性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过context获取到Canvas画布对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 绘制代码逻辑写在这里\nlet canvas = context.canvas;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化文本样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let myTextStyle: text.TextStyle = {\n  color: {\n    alpha: 255,\n    red: 255,\n    green: 0,\n    blue: 0\n  },\n  fontSize: 50,\n  // 当wordBreak为text.WordBreak.BREAK_HYPHEN时，需要为段落设置语言偏好，段落会在不同语言偏好下呈现不同的文本断词效果\n  locale: 'en-gb'\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化段落样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let myParagraphStyle: text.ParagraphStyle = {\n  textStyle: myTextStyle,\n  // 文本对齐方式\n  align: text.TextAlign.LEFT,\n  // 最大行数\n  maxLines: 3,\n  // 断词策略\n  wordBreak: text.WordBreak.BREAK_WORD\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化段落对象，并添加占位符和文本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let fontCollection = text.FontCollection.getGlobalInstance();\nlet paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n// 更新文本样式\nparagraphBuilder.pushStyle(myTextStyle);\n// 添加文本\nparagraphBuilder.addText('Hello World Hello World Hello World Hello World Hello World Hello World ' +\n  'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ' +\n  'Hello World Hello World Hello World Hello World Hello World ');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排版段落并进行文本绘制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 生成段落\nlet paragraph = paragraphBuilder.build();\n// 布局\nparagraph.layoutSync(1250);\n// 绘制文本\nparagraph.paint(canvas, 10, 0);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "效果展示-1",
      children: "效果展示"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "段落样式设置（断词策略、文本对齐方式、最大行数限制）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "效果示意"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.LEFT，最大行数为3，断词策略为text.WordBreak.BREAK_WORD。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.RIGHT，最大行数为3，断词策略为text.WordBreak.BREAK_WORD。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.JUSTIFY，最大行数为10，断词策略为text.WordBreak.BREAK_WORD。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.LEFT，最大行数为3，断词策略为text.WordBreak.BREAK_ALL。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.LEFT，最大行数为10，断词策略为text.WordBreak.BREAK_ALL。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.LEFT，最大行数为10，断词策略为text.WordBreak.BREAK_HYPHEN，  不设置语言偏好。段落无连字符“-”断词效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.LEFT，最大行数为10，断词策略为text.WordBreak.BREAK_HYPHEN，  语言偏好为en-gb（英式英语）。段落产生连字符“-”断词效果，并根据语言偏好呈现英式语言环境断词效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本对齐方式为text.TextAlign.LEFT，最大行数为10，断词策略为text.WordBreak.BREAK_HYPHEN，  语言偏好为en-us（美式英语）。段落产生连字符“-”断词效果，并根据语言偏好呈现美式语言环境断词效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多样式文本绘制与显示",
      children: "多样式文本绘制与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除基本文字、排版属性之外，针对应用中不同文本的设计，开发者可能需要设置使用不同的绘制样式或能力，以凸显对应文本的独特表现或风格，此时可以结合使用多种绘制样式进行文本的渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的多样式绘制及各绘制样式侧重效果如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "装饰线样式绘制："
          })
        }), " 主要通过不同的线条样式对文本进行装饰，可以使文本更加突出，富有表现力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "字体特性绘制："
          })
        }), " 主要通过字体的变化，包括粗细、斜体等特性来改变文本的外观，增强文本的可读性和美观性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可变字体绘制："
          })
        }), " 对应提供文本在不同的显示环境和设备上灵活调整的能力，可满足更为精细的视觉效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "文本阴影绘制："
          })
        }), " 主要通过在文本周围添加阴影效果，以提升文本的层次感和立体感，从而使文本更具吸引力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "占位符绘制："
          })
        }), " 可以在不确定文本内容时保持文本布局的稳定性，使得文本显示更为流畅和自然。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自动间距绘制："
          })
        }), " 可以在一些字符混排切换的地方自动添加额外间距，提升阅读体验。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "垂直对齐："
          })
        }), " 调整文本在垂直方向排版位置，提升排版质量。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "上下标："
          })
        }), " 可以将任意字符处理成上标或下标，更精准表达文本含义。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "高对比度文字绘制："
          })
        }), " 主要通过将深色文字变黑、浅色文字变白，增强文本的对比效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "行高调整："
          })
        }), " 调整行高可改变文本行的垂直间距，使行间距更松散或更紧凑，显著改善文本垂直截断问题，提高可读性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "行间距调整："
          })
        }), " 通过调整行间距的方式可以实现行高调整一样的效果，优化阅读体验。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰线",
      children: "装饰线"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["装饰线（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#decoration",
        children: "Decoration"
      }), "）是指在文本上方、下方或中间添加的装饰性线条，当前支持上划线、下划线、删除线。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过添加文本装饰线，提升文本的视觉效果和可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用装饰线需要初始化装饰线样式对象，并添加到文本样式中，从而在文本绘制时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%B8%80%E8%A3%85%E9%A5%B0%E7%BA%BF%E5%AD%97%E4%BD%93%E7%89%B9%E5%BE%81",
        children: "示例一"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字体特征",
      children: "字体特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字体特征"
        })
      }), "（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#fontfeature",
        children: "FontFeature"
      }), "）绘制专注于在文本渲染过程中对字体特性（如粗体、斜体、字体变种等）的处理，允许字体在不同的排版场景下表现出不同的效果，可用于增强文本的表现力，使其更符合设计和阅读需求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常见的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "FontFeature"
        })
      }), "包含有liga、frac、case等，需要对应的ttf文件支持才能正常使能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%B8%80%E8%A3%85%E9%A5%B0%E7%BA%BF%E5%AD%97%E4%BD%93%E7%89%B9%E5%BE%81",
        children: "示例一"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可变字体",
      children: "可变字体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可变字体"
        })
      }), "（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#fontvariation",
        children: "FontVariation"
      }), "）是一种在一个字体文件中包含多个字形变体的字体格式，允许在一个字体文件内灵活地调整字体的各种属性（如字重、字宽、斜体等）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与传统字体文件（每种变体需要一个独立的文件）不同，可变字体在一个字体文件中包含多个变体轴，可通过使用可变字体实现文本渲染绘制时的平滑过渡。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%BA%8C%E5%8F%AF%E5%8F%98%E5%AD%97%E4%BD%93%E6%96%87%E6%9C%AC%E9%98%B4%E5%BD%B1%E5%8D%A0%E4%BD%8D%E7%AC%A6",
        children: "示例二"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本阴影",
      children: "文本阴影"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文本阴影"
        })
      }), "（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#textshadow",
        children: "TextShadow"
      }), "）为文本提供了深度感，使得文本在背景上更具立体感。通常用于提升文本的视觉吸引力或增强可读性，尤其是在色彩对比度较低的场景下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，TextShadow有三个属性，分别为阴影颜色color、阴影基于当前文本的偏移位置point、阴影半径blurRadius。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用阴影效果需要在文本样式中设置对应的阴影效果数组，从而在文本绘制时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%BA%8C%E5%8F%AF%E5%8F%98%E5%AD%97%E4%BD%93%E6%96%87%E6%9C%AC%E9%98%B4%E5%BD%B1%E5%8D%A0%E4%BD%8D%E7%AC%A6",
        children: "示例二"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "占位符",
      children: "占位符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "占位符绘制用于处理文本中占位符符号的渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "占位符也是用来实现图文混排的关键，是指在实际图像或内容注册之前，用来预先提供或替代某个位置的视觉元素。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%BA%8C%E5%8F%AF%E5%8F%98%E5%AD%97%E4%BD%93%E6%96%87%E6%9C%AC%E9%98%B4%E5%BD%B1%E5%8D%A0%E4%BD%8D%E7%AC%A6",
        children: "示例二"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动间距",
      children: "自动间距"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使能自动间距，则会在文本排版时自动调整CJK（中文字符、日文字符、韩文字符）与西文（拉丁字母、西里尔字母、希腊字母）、CJK与数字、CJK与版权符号、版权符号与数字、版权符号与西文之间的间距。例如，在中英文混排场景中，使能自动间距即可在中英文切换的地方自动添加额外间距，提升阅读体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let myParagraphStyle: text.ParagraphStyle = {\n  autoSpace: true\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "垂直对齐",
      children: "垂直对齐"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "垂直对齐用于调整文本在一行中垂直方向的排版位置。开启行高缩放或行内存在不同字号文本混排时使能垂直对齐，可以让文本实现顶部对齐、居中对齐、底部对齐或基线对齐（默认）。关键代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let myParagraphStyle: text.ParagraphStyle = {\n  verticalAlign: text.TextVerticalAlign.CENTER\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%B8%89%E5%9E%82%E7%9B%B4%E5%AF%B9%E9%BD%90",
        children: "示例三"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上下标",
      children: "上下标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使能上下标，能将文本作为上标或下标参与排版。一般用于数学公式、化学式等场景。关键代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let superScriptStyle: text.TextStyle = {\n    badgeType: text.TextBadgeType.TEXT_SUPERSCRIPT\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E5%9B%9B%E4%B8%8A%E4%B8%8B%E6%A0%87%E6%96%87%E6%9C%AC",
        children: "示例四"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "高对比度",
      children: "高对比度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "高对比度可将深色文字变黑、浅色文字变白。开发者可选择开启或关闭应用的高对比度文字渲染，或遵循系统设置中的高对比度文字配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高对比度模式有3种，具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#texthighcontrast20",
        children: "TextHighContrast"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%BA%94%E9%AB%98%E5%AF%B9%E6%AF%94%E5%BA%A6",
        children: "示例五"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "行高调整",
      children: "行高调整"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前行高调整方式包括两种：设置行高上限/下限和使用行高缩放系数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "行高调整（方式一）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，支持通过设置行高上限和下限调整行高，关键代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let myTextStyle: text.TextStyle = {\n    // 设置行高上限\n    lineHeightMaximum: 65,\n    // 设置行高下限\n    lineHeightMinimum: 65\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用效果参考下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E5%85%AD%E8%A1%8C%E9%AB%98%E8%B0%83%E6%95%B4%E6%96%B9%E5%BC%8F%E4%B8%80",
        children: "示例六"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "行高调整（方式二）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置行高缩放系数调整行高，关键代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let myTextStyle: text.TextStyle = {\n    // 开启行高缩放开关\n    heightOnly: true,\n    // 设置行高缩放系数\n    heightScale: 1.5,\n    // 设置行高缩放风格\n    lineHeightStyle: text.LineHeightStyle.FONT_HEIGHT\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用效果参考下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E4%B8%83%E8%A1%8C%E9%AB%98%E8%B0%83%E6%95%B4%E6%96%B9%E5%BC%8F%E4%BA%8C",
        children: "示例七"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "行间距调整",
      children: "行间距调整"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，支持设置行间距改善文本行之间的距离，提高阅读体验，关键代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let myParagraphStyle: text.ParagraphStyle = {\n  // 设置行间距\n  lineSpacing: 100,\n  // 关闭段落上升部和下降部\n  textHeightBehavior: text.TextHeightBehavior.DISABLE_ALL,\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体使用效果可参见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B%E5%85%AB%E8%A1%8C%E9%97%B4%E8%B7%9D%E8%B0%83%E6%95%B4",
        children: "示例八"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例一装饰线字体特征",
      children: "示例一（装饰线、字体特征）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以文本样式中的装饰线和字体特征为例，呈现多样式文本的绘制与显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext } from '@kit.ArkUI'\nimport { UIContext } from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    // 初始化装饰线对象\n    let decorations: text.Decoration =\n      {\n        // 装饰线类型，支持上划线、下划线、删除线\n        textDecoration: text.TextDecorationType.UNDERLINE,\n        // 装饰线颜色\n        color: {\n          alpha: 255,\n          red: 255,\n          green: 0,\n          blue: 0\n        },\n        // 装饰线样式，支持波浪，虚线，直线等\n        decorationStyle:text.TextDecorationStyle.SOLID,\n        // 装饰线的高度\n        decorationThicknessScale: 1\n      };\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 200,\n      // 设置装饰线\n      decoration: decorations,\n      // 开启字体特征\n      fontFeatures: [{name: 'frac', value: 1}]\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 更新文本样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('1/2 1/3 1/4 ');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(1250);\n    // 绘制文本\n    paragraph.paint(canvas, 0, 0);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode();\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600\n};\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode == null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      }\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  @State src: Resource = $r('app.media.startIcon');\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Image(this.src)\n          .width('0%').height('0%')\n          .onComplete(\n            () => {\n              performTask();\n            })\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示意效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式设置（装饰线样式、字体特征）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不开启装饰线和字体特征"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启装饰线和字体特征"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例二可变字体文本阴影占位符",
      children: "示例二（可变字体、文本阴影、占位符）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以可变字体、文本阴影、占位符三个特性为例，呈现多样式文本的绘制与显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext } from '@kit.ArkUI'\nimport { UIContext } from '@kit.ArkUI'\nimport { drawing } from '@kit.ArkGraphics2D'\nimport { text } from '@kit.ArkGraphics2D'\nimport { common2D } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 120,\n      // 可变字体\n      fontVariations: [{axis: 'wght', value: 555}],\n      // 文本阴影\n      textShadows: [{color: { alpha: 0xFF, red: 0xFF, green: 0x00, blue: 0x00 }, point: {x:10,y:10}, blurRadius: 10}],\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 初始化占位符对象\n    let myPlaceholderSpan: text.PlaceholderSpan = {\n      // 宽度\n      width: 300,\n      // 高度\n      height: 300,\n      // 基线对齐策略\n      align: text.PlaceholderAlignment.BOTTOM_OF_ROW_BOX,\n      // 使用的文本基线类型\n      baseline: text.TextBaseline.ALPHABETIC,\n      // 相比基线的偏移量。只有对齐策略是OFFSET_AT_BASELINE时生效\n      baselineOffset: 100\n    };\n    // 添加占位符\n    paragraphBuilder.addPlaceholder(myPlaceholderSpan);\n\n    // 更新文本样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('Hello Test');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(1250);\n    // 绘制文本\n    paragraph.paint(canvas, 0, 0);\n\n    //获取全部占位符的数组\n    let placeholderRects = paragraph.getRectsForPlaceholders();\n    // 获取第一个占位符的左边界\n    let left = placeholderRects[0].rect.left;\n    // 获取第一个占位符的上边界\n    let top = placeholderRects[0].rect.top;\n    // 获取第一个占位符的右边界\n    let right = placeholderRects[0].rect.right;\n    // 获取第一个占位符的下边界\n    let bottom = placeholderRects[0].rect.bottom;\n    let pen: drawing.Pen =  new drawing.Pen();\n    let penColor : common2D.Color = { alpha: 0xFF, red: 0xFF, green: 0x00, blue: 0x00 };\n    pen.setColor(penColor);\n    canvas.attachPen(pen);\n    // 使用draw方法绘制占位符矩形框\n    canvas.drawRect(left,top,right,bottom);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode();\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600,\n};\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode == null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      };\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  @State src: Resource = $r('app.media.startIcon');\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Image(this.src)\n          .width('0%').height('0%')\n          .onComplete(\n            () => {\n              performTask();\n            })\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示意效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式设置（可变字体、文本阴影、占位符）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不开启可变字体和文本阴影，不使用占位符"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启可变字体和文本阴影，使用占位符"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例三垂直对齐",
      children: "示例三（垂直对齐）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以垂直对齐-居中对齐特性为例，呈现文本垂直方向排版的特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext, UIContext } from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 30,\n      // 开启行高缩放\n      heightOnly: true,\n      // 行高缩放系数为字号的2倍\n      heightScale: 2\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n      // 设置垂直对齐-居中对齐模式\n      verticalAlign: text.TextVerticalAlign.CENTER,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 设置待排版文本要应用的样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('VerticalAlignment-center');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(1000);\n    // 绘制文本\n    paragraph.paint(canvas, 0, 0);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode();\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600\n};\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode == null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      }\n      renderNode.pivot = { x: 50, y: 50 };\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  @State src: Resource = $r('app.media.startIcon');\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Text('Test for vertical alignment')\n          .onAppear(() => {\n            performTask();\n          })\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示意效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式设置（垂直对齐）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果（黑框仅为展示文本绘制区域，实际不绘制）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基线对齐（默认）"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "顶部对齐"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "居中对齐"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "底部对齐"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例四上下标文本",
      children: "示例四（上下标文本）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以下标样式为例，呈现上下标文本排版特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext, UIContext } from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 30,\n    };\n\n    let subScriptStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 30,\n      // 设置下标样式\n      badgeType: text.TextBadgeType.TEXT_SUBSCRIPT\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 设置待排版文本要应用的样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('The chemical formula for water: H');\n    paragraphBuilder.pushStyle(subScriptStyle);\n    paragraphBuilder.addText('2');\n    paragraphBuilder.pushStyle(myTextStyle);\n    paragraphBuilder.addText('o');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(1000);\n    // 绘制文本\n    paragraph.paint(canvas, 0, 0);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode();\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600\n};\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode == null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      }\n      renderNode.pivot = { x: 50, y: 50 };\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  @State src: Resource = $r('app.media.startIcon');\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Text('Test for superscript and subscript')\n          .onAppear(() => {\n            performTask();\n          })\n      }\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示意效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式设置（上下标）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "上标文本"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下标文本"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例五高对比度",
      children: "示例五（高对比度）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以高对比度为例，呈现高对比度文字的绘制与显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext, UIContext} from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    // 开启APP的文字渲染高对比度配置\n    text.setTextHighContrast(text.TextHighContrast.TEXT_APP_ENABLE_HIGH_CONTRAST);\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 111,\n        green: 255,\n        blue: 255\n      },\n      fontSize: 100,\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 更新文本样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('Hello World');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(1250);\n    // 绘制文本\n    paragraph.paint(canvas, 10, 800);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode();\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600\n};\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode == null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      };\n      renderNode.pivot = { x: 0.2, y: 0.8 };\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Text('Test high contrast')\n          .onAppear(() => {\n            performTask();\n          })\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示意效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "高对比度设置"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不开启高对比度"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启高对比度"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例六行高调整方式一",
      children: "示例六（行高调整方式一）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以行高上限与行高下限设置相同值为例，呈现固定行高时的绘制表现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext, UIContext } from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 50,\n      // 设置行高上限\n      lineHeightMaximum: 65,\n      // 设置行高下限\n      lineHeightMinimum: 65,\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 设置待排版文本要应用的样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('Hello World!');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(1000);\n    // 绘制文本\n    paragraph.paint(canvas, 0, 0);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode()\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600\n}\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext)\n    if (this.rootNode == null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      }\n      renderNode.pivot = { x: 50, y: 50 };\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode()\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  @State src: Resource = $r('app.media.startIcon')\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Text('Test for line height limit')\n          .onAppear(() => {\n            performTask();\n          })\n      }\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "行高上限值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "行高下限值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果（黑框仅为展示文本绘制区域，实际不绘制）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例七行高调整方式二",
      children: "示例七（行高调整方式二）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以行高缩放且行高缩放样式FontHeight为例，呈现行高调整后文字的绘制与显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext, UIContext } from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 50,\n      // 开启行高缩放开关\n      heightOnly: true,\n      // 设置行高缩放系数\n      heightScale: 1.5,\n      // 设置行高缩放风格\n      lineHeightStyle: text.LineHeightStyle.FONT_HEIGHT,\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 设置待排版文本要应用的样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('Hello World!');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(1000);\n    // 绘制文本\n    paragraph.paint(canvas, 0, 0);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode();\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600\n}\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext)\n    if (this.rootNode == null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      };\n      renderNode.pivot = { x: 50, y: 50 };\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode()\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  @State src: Resource = $r('app.media.startIcon')\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Text('Test for line height limit')\n          .onAppear(() => {\n            performTask();\n          })\n      }\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "行高缩放样式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果（黑框仅为展示文本绘制区域，实际不绘制）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FontHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例八行间距调整",
      children: "示例八（行间距调整）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以关闭段落上升部下降部并设置行间距为例，呈现行间距增加后的文本绘制与显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, RenderNode, DrawContext, UIContext } from '@kit.ArkUI'\nimport { text } from '@kit.ArkGraphics2D'\n\n// 创建一个MyRenderNode类，并绘制文本。\nclass MyRenderNode extends RenderNode {\n  async draw(context: DrawContext) {\n    let canvas = context.canvas;\n\n    let myTextStyle: text.TextStyle = {\n      color: {\n        alpha: 255,\n        red: 255,\n        green: 0,\n        blue: 0\n      },\n      fontSize: 50,\n    };\n\n    let myParagraphStyle: text.ParagraphStyle = {\n      textStyle: myTextStyle,\n      // 设置行间距\n      lineSpacing: 100,\n      // 关闭段落上升部和下降部\n      textHeightBehavior: text.TextHeightBehavior.DISABLE_ALL,\n    };\n\n    let fontCollection = text.FontCollection.getGlobalInstance();\n    let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);\n\n    // 设置待排版文本要应用的样式\n    paragraphBuilder.pushStyle(myTextStyle);\n    // 添加文本\n    paragraphBuilder.addText('Hello World!');\n\n    // 生成段落\n    let paragraph = paragraphBuilder.build();\n    // 布局\n    paragraph.layoutSync(200);\n    // 绘制文本\n    paragraph.paint(canvas, 0, 0);\n  }\n}\n\n// 创建一个MyRenderNode对象\nconst textNode = new MyRenderNode();\n// 定义newNode的像素格式\ntextNode.frame = {\n  x: 0,\n  y: 0,\n  width: 400,\n  height: 600\n}\ntextNode.pivot = { x: 0.2, y: 0.8 };\ntextNode.scale = { x: 1, y: 1 };\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode == null) {\n      return this.rootNode\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.frame = {\n        x: 0,\n        y: 0,\n        width: 10,\n        height: 500\n      }\n      renderNode.pivot = { x: 50, y: 50 };\n    }\n    return this.rootNode;\n  }\n\n  addNode(node: RenderNode): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.appendChild(node);\n    }\n  }\n\n  clearNodes(): void {\n    if (this.rootNode == null) {\n      return;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode != null) {\n      renderNode.clearChildren();\n    }\n  }\n}\n\nlet myNodeController: MyNodeController = new MyNodeController();\n\nasync function performTask() {\n  myNodeController.clearNodes();\n  myNodeController.addNode(textNode);\n}\n\n@Entry\n@Component\nstruct Font08 {\n  @State src: Resource = $r('app.media.startIcon')\n  build() {\n    Column() {\n      Row() {\n        NodeContainer(myNodeController)\n          .height('100%')\n          .width('100%')\n        Text('Test for lineSpacing and height behavior')\n          .onAppear(() => {\n            performTask();\n          })\n      }\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体效果如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "上升部下降部开关"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示意效果（黑框仅为展示文本绘制区域，实际不绘制）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISABLE_ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
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
562378(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438721-21256a8ce4cd221f23915bb2edc6b81e.png");

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