"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["568446"], {
709874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_textblock_drawing_arkts_textblock_drawing_arkts_md_29b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-primitive-drawing-textblock-drawing-arkts-textblock-drawing-arkts-md-29b.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_textblock_drawing_arkts_textblock_drawing_arkts_md_29b_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts/textblock-drawing-arkts","title":"字块绘制（ArkTS）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts/textblock-drawing-arkts.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts","slug":"/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"字块绘制（ArkTS）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/textblock-drawing-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图片绘制（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts/"},"next":{"title":"几何形状绘制（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts/textblock-drawing-arkts.md


const frontMatter = {
	title: '字块绘制（ArkTS）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/textblock-drawing-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '字块绘制（ArkTS）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本字块绘制",
  "id": "基本字块绘制",
  "level": 2
}, {
  "value": "文字描边",
  "id": "文字描边",
  "level": 2
}, {
  "value": "英文文字描边",
  "id": "英文文字描边",
  "level": 3
}, {
  "value": "中文文字描边",
  "id": "中文文字描边",
  "level": 3
}, {
  "value": "文字渐变",
  "id": "文字渐变",
  "level": 2
}, {
  "value": "主题字体",
  "id": "主题字体",
  "level": 2
}, {
  "value": "单字绘制",
  "id": "单字绘制",
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
        id: "字块绘制arkts",
        children: "字块绘制（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字块（TextBlob）是指文本的集合。无论是单个的文字还是大块的文本，都可以通过字块来绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了基本的字块绘制之外，还可以给文字添加各种绘制效果。常见的字块绘制场景包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%96%87%E5%AD%97%E6%8F%8F%E8%BE%B9",
        children: "文字描边"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%96%87%E5%AD%97%E6%B8%90%E5%8F%98",
        children: "文字渐变"
      }), "等，更多效果请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/drawing-effect-overview",
        children: "绘制效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节不涉及文本测量和布局排版相关内容，如需在开发中处理此类文本绘制需求，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/text/text-overview",
        children: "文本开发概述"
      }), "，该文档系统讲解了排版策略与相关使用指导。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本字块绘制",
      children: "基本字块绘制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas通过drawTextBlob()来绘制字块。函数接受三个参数：TextBlob字块对象，以及文字基线左端点的x坐标和y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画布Canvas对象具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts",
        children: "画布的获取与绘制结果的显示（ArkTS）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字块对象可以通过多种方式创建得到，详细的字块创建方式和接口使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-textblob/arkts-apis-graphics-drawing-textblob",
        children: "TextBlob"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用makeFromString()接口创建字块为例，接口接受3个参数，分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要显示的字符串text。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["font字型对象。其中font用于设置和获取字体的各种属性，如字体大小、文本样式、字体对齐方式、字体渲染方式、字体描边方式等，详细的API介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-font/arkts-apis-graphics-drawing-font",
            children: "Font"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文本编码方式。当前支持的文本编码方式如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "TEXT_ENCODING_UTF8：使用1个字节表示UTF-8或ASCII；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "TEXT_ENCODING_UTF16：使用2个字节表示大部分unicode；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "TEXT_ENCODING_UTF32：使用4个字节表示全部unicode；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "TEXT_ENCODING_GLYPH_ID：使用2个字节表示glyph index。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本效果的示例代码和效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建字型对象\nconst font = new drawing.Font();\n// 设置字体大小\nfont.setSize(100);\n// 创建字块对象\nconst textBlob = drawing.TextBlob.makeFromString('Hello world', font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n// 绘制字块\ncanvas.drawTextBlob(textBlob, VALUE_200, VALUE_300);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(530878)/* ["default"] */.A) + "",
        width: "910",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文字描边",
      children: "文字描边"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于基本的字块绘制，还可以通过画笔实现文字描边效果，描边效果的更多介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-arkts#%E6%8F%8F%E8%BE%B9%E6%95%88%E6%9E%9C",
        children: "描边效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下以英文文字描边和中文文字描边给出示例和指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "英文文字描边",
      children: "英文文字描边"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "英文文字描边的简要示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nlet pen = new drawing.Pen();\n// 设置抗锯齿\npen.setAntiAlias(true);\n// 设置描边线宽\npen.setStrokeWidth(3.0);\n// 设置描边颜色\npen.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 创建字型对象\nconst font = new drawing.Font();\n// 设置字体大小\nfont.setSize(100);\n// 添加画笔描边效果\ncanvas.attachPen(pen);\n// 创建字块对象\nconst textBlob = drawing.TextBlob.makeFromString('Hello world', font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n// 绘制字块\ncanvas.drawTextBlob(textBlob, VALUE_200, VALUE_300);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(300985)/* ["default"] */.A) + "",
        width: "934",
        height: "404"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "中文文字描边",
      children: "中文文字描边"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先需要通过画笔描边，然后需要调用画刷填充内部颜色，去除字体中间的杂质和重叠部分，实现中文文字描边效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "中文文字描边的简要示例和示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 创建画笔\nlet pen = new drawing.Pen();\n// 设置抗锯齿\nbrush.setAntiAlias(true);\n// 设置描边颜色\nbrush.setColor(0xFF, 0xFF, 0xFF, 0xFF);\n\npen.setAntiAlias(true);\n// 设置描边线宽\npen.setStrokeWidth(3.0);\n// 设置描边颜色\npen.setColor(0xFF, 0xFF, 0x00, 0x00);\n\n// 创建字型对象\nconst font = new drawing.Font();\n// 设置字体大小\nfont.setSize(100);\n// 添加画笔描边效果\ncanvas.attachPen(pen);\n// 创建字块对象\nconst textBlob = drawing.TextBlob.makeFromString(STROKE_SAMPLE, font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n// 绘制字块\ncanvas.drawTextBlob(textBlob, VALUE_200,  VALUE_300);\n// 去除描边效果\ncanvas.detachPen();\n\ncanvas.attachBrush(brush);\ncanvas.drawTextBlob(textBlob, VALUE_200, VALUE_300);\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284891)/* ["default"] */.A) + "",
        width: "131",
        height: "54"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文字渐变",
      children: "文字渐变"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于基本字块绘制，还可以通过着色器实现文字渐变的效果，着色器的更多介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts#%E7%9D%80%E8%89%B2%E5%99%A8%E6%95%88%E6%9E%9C",
        children: "着色器效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为文字添加了线性渐变着色器效果的简要示例和示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let startPt: common2D.Point = { x: VALUE_100, y: VALUE_100 };\nlet endPt: common2D.Point = { x: VALUE_900, y: VALUE_900 };\nlet colors = [0xFFFFFF00, 0xFFFF0000, 0xFF0000FF];\n// 创建线性渐变着色器\nlet shaderEffect = drawing.ShaderEffect.createLinearGradient(startPt, endPt, colors, drawing.TileMode.CLAMP);\n// 创建画刷\nlet brush = new drawing.Brush();\n// 设置着色器\nbrush.setShaderEffect(shaderEffect);\n// 添加画刷填充效果\ncanvas.attachBrush(brush);\n// 创建字型\nconst font = new drawing.Font();\n// 设置字体大小\nfont.setSize(VALUE_200);\n// 创建字块\nconst textBlob = drawing.TextBlob.makeFromString('Hello world', font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n// 绘制字块\ncanvas.drawTextBlob(textBlob, VALUE_100, VALUE_300);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(218920)/* ["default"] */.A) + "",
        width: "1251",
        height: "436"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主题字体",
      children: "主题字体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主题字体，特指系统", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "主题应用"
        })
      }), "中能使用的字体，属于一种特殊的自定义字体。如需涉及文本测量和布局排版相关内容，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/text/font-manager/theme-font-arkts",
        children: "使用主题字体（ArkTS）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置跟随主题字体的示例代码和效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建线性渐变着色器\nconst font = new drawing.Font();\n// 设置文字大小\nfont.setSize(100);\n// 设置跟随主题字体\nfont.setThemeFontFollowed(true);\n// 创建字块对象\nconst textBlob = drawing.TextBlob.makeFromString('Hello World', font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n// 绘制字块\ncanvas.drawTextBlob(textBlob, VALUE_200, VALUE_300);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "未跟随主题字体的效果图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "跟随主题字体的效果图（不同主题字体显示效果不同，此处仅示意）"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(641017)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在应用入口文件（默认工程中为EntryAbility.ets）中复写onConfigurationUpdate函数，以响应切换主题字体的操作，确保切换后页面能够及时刷新并生效。具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/text/font-manager/theme-font-arkts",
        children: "使用主题字体（ArkTS）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单字绘制",
      children: "单字绘制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单字绘制是图形渲染中针对文本渲染的一种精细化控制技术。相比字块绘制，其核心优势在于能够利用字体退化机制，在当前字体无法显示某字符时，自动退化到使用系统字体绘制字符，提升对特殊字符的兼容性，避免字符缺失。同时，单字绘制支持逐字符配置字体特征（如连字、替代字形），满足复杂排版需求，增强用户体验。详细API说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas#drawsinglecharacter12",
        children: "drawing.Canvas"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础场景：绘制无字体特征的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于无需字体特征的常规文本渲染场景，可以使用drawSingleCharacter绘制单个字符，使用measureSingleCharacter测量单个字符的宽度，示例代码和效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建字型对象\nconst font = new drawing.Font();\n// 设置文字大小\nfont.setSize(100);\nlet startX = 100;\nlet startY = 100;\nlet text = ['H', 'e', 'l', 'l', 'o'];\nfor (let s of text) {\n  // 单字绘制\n  canvas.drawSingleCharacter(s, font, startX, startY);\n  // 测量单个字符的宽度\n  let textWidth = font.measureSingleCharacter(s);\n  startX += textWidth;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(731181)/* ["default"] */.A) + "",
        width: "344",
        height: "159"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进阶场景：绘制带字体特征的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于需要字体特征的文本渲染场景，可以使用drawSingleCharacterWithFeatures绘制单个字符，使用measureSingleCharacterWithFeatures测量单个字符的宽度，示例代码和效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建字型对象\nconst font = new drawing.Font();\n// 设置文字大小\nfont.setSize(100);\nlet startX = 100;\nlet startY = 100;\nlet text = ['a', '2', '+', 'b', '2'];\n// 创建字体特征对象数组\nlet fontFeatures: drawing.FontFeature[] = [{name: 'frac', value: 1}];\nfor (let s of text) {\n  // 单字绘制\n  canvas.drawSingleCharacterWithFeatures(s, font, startX, startY, fontFeatures);\n  // 测量单个字符的宽度\n  let textWidth = font.measureSingleCharacterWithFeatures(s, fontFeatures);\n  startX += textWidth;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74721)/* ["default"] */.A) + "",
        width: "143",
        height: "46"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(291550)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果 drawSingleCharacterWithFeatures 与 measureSingleCharacter 混合使用，或者 drawSingleCharacter 与 measureSingleCharacterWithFeatures 混合使用，字体绘制可能会重叠。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkGraphics2D/Drawing/ArkTSGraphicsDraw",
          children: "图形绘制（ArkTS）"
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
291550(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
284891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
731181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
74721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
218920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799012-096e3522b4286af33d0d4822ddd8eff3.jpg");

},
300985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958660-0cf83e0acd7e322265bd82d67948e08d.jpg");

},
641017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
530878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438705-be8206ecfe17292334f54f5ba99e97a6.jpg");

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