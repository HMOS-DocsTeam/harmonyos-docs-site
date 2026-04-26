"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["369031"], {
916393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_textblock_drawing_c_textblock_drawing_c_md_2cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-primitive-drawing-textblock-drawing-c-textblock-drawing-c-md-2cb.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_textblock_drawing_c_textblock_drawing_c_md_2cb_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c/textblock-drawing-c","title":"字块绘制（C/C++）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c/textblock-drawing-c.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c","slug":"/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"字块绘制（C/C++）","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/textblock-drawing-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图片绘制（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c/"},"next":{"title":"文本开发概述","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/text-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c/textblock-drawing-c.md


const frontMatter = {
	title: '字块绘制（C/C++）',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/textblock-drawing-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '字块绘制（C/C++）';

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
        id: "字块绘制cc",
        children: "字块绘制（C/C++）"
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
      children: "使用OH_Drawing_CanvasDrawTextBlob()接口绘制字块，接口接受4个参数，分别为：画布Canvas对象、字块对象、文字基线左端点的x坐标和y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画布Canvas对象具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
        children: "画布的获取与绘制结果的显示（C/C++）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字块对象可以通过多种方式创建得到，详细的字块创建方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-blob-h/capi-drawing-text-blob-h",
        children: "drawing_text_blob.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用OH_Drawing_TextBlobCreateFromString()接口创建字块为例，接口接受3个参数，分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要显示的文本字符串内容。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指向OH_Drawing_Font字体对象的指针。OH_Drawing_Font用于设置和获取字体的各种属性，如字体大小、文本样式、字体对齐方式、字体渲染方式、字体描边方式等，详细的API介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-font-h/capi-drawing-font-h",
          children: "draw_font"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文本编码方式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建字体对象\nOH_Drawing_Font *font = OH_Drawing_FontCreate();\n// 设置字体大小\nOH_Drawing_FontSetTextSize(font, value100_);\n// 需要绘制的文字\nconst char *str = \"Hello world\";\n// 创建字块对象\nOH_Drawing_TextBlob *textBlob =\n    OH_Drawing_TextBlobCreateFromString(str, font, OH_Drawing_TextEncoding::TEXT_ENCODING_UTF8);\n// 绘制字块\nOH_Drawing_CanvasDrawTextBlob(canvas, textBlob, value200_, value800_);\n// 释放字块对象\nOH_Drawing_TextBlobDestroy(textBlob);\n// 释放字体对象\nOH_Drawing_FontDestroy(font);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(596791)/* ["default"] */.A) + "",
        width: "887",
        height: "379"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文字描边",
      children: "文字描边"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于基本的字块绘制，还可以通过画笔实现文字描边效果，描边效果的更多介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c#%E6%8F%8F%E8%BE%B9%E6%95%88%E6%9E%9C",
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
        children: "// 创建画笔\nOH_Drawing_Pen *pen = OH_Drawing_PenCreate();\n// 设置抗锯齿\nOH_Drawing_PenSetAntiAlias(pen, true);\n// 设置描边颜色\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置描边线宽为3\nOH_Drawing_PenSetWidth(pen, 3);\n// 设置画笔描边效果\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建字型对象\nOH_Drawing_Font *font = OH_Drawing_FontCreate();\n// 设置字体大小\nOH_Drawing_FontSetTextSize(font, value150_);\nconst char *str = \"Hello world\";\n// 创建字块对象\nOH_Drawing_TextBlob *textBlob =\n    OH_Drawing_TextBlobCreateFromString(str, font, OH_Drawing_TextEncoding::TEXT_ENCODING_UTF8);\n// 绘制字块\nOH_Drawing_CanvasDrawTextBlob(canvas, textBlob, value200_, value800_);\n// 去除描边效果\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁各类对象\nOH_Drawing_TextBlobDestroy(textBlob);\nOH_Drawing_FontDestroy(font);\nOH_Drawing_PenDestroy(pen);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(237283)/* ["default"] */.A) + "",
        width: "1248",
        height: "456"
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
        children: "// 创建画刷\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\n// 创建画笔\nOH_Drawing_Pen *pen = OH_Drawing_PenCreate();\n// 设置画刷抗锯齿\nOH_Drawing_BrushSetAntiAlias(brush, true);\n// 设置画刷描边颜色\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(0xFF, 0xFF, 0xFF, 0xFF));\n// 设置画笔抗锯齿\nOH_Drawing_PenSetAntiAlias(pen, true);\n// 设置描边线宽为3\nOH_Drawing_PenSetWidth(pen, 3);\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(0xFF, 0xFF, 0x00, 0x00));\n// 设置画笔描边效果\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建字型对象\nOH_Drawing_Font *font = OH_Drawing_FontCreate();\n// 设置字体大小\nOH_Drawing_FontSetTextSize(font, value150_);\nconst char *str = \"你好\";\n// 创建字块对象\nOH_Drawing_TextBlob *textBlob =\n    OH_Drawing_TextBlobCreateFromString(str, font, OH_Drawing_TextEncoding::TEXT_ENCODING_UTF8);\n// 绘制字块\nOH_Drawing_CanvasDrawTextBlob(canvas, textBlob, value200_, value800_);\n// 去除描边效果\nOH_Drawing_CanvasDetachPen(canvas);\n// 设置画刷描边效果\nOH_Drawing_CanvasAttachBrush(canvas, brush);\nOH_Drawing_CanvasDrawTextBlob(canvas, textBlob, value200_, value800_);\n\n// 销毁各类对象\nOH_Drawing_TextBlobDestroy(textBlob);\nOH_Drawing_FontDestroy(font);\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_BrushDestroy(brush);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388176)/* ["default"] */.A) + "",
        width: "150",
        height: "77"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文字渐变",
      children: "文字渐变"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于基本字块绘制，还可以通过着色器实现文字渐变的效果，着色器的更多介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c#%E7%9D%80%E8%89%B2%E5%99%A8%E6%95%88%E6%9E%9C",
        children: "着色器效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为文字添加了线性渐变着色器效果的简要示例和示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开始点\nOH_Drawing_Point *startPt = OH_Drawing_PointCreate(value100_, value100_);\n// 结束点\nOH_Drawing_Point *endPt = OH_Drawing_PointCreate(value900_, value900_);\n// 颜色数组\nuint32_t colors[] = {0xFFFFFF00, 0xFFFF0000, 0xFF0000FF};\n// 相对位置数组\nfloat pos[] = {0.0f, 0.5f, 1.0f};\n// 创建线性渐变着色器效果\nOH_Drawing_ShaderEffect *colorShaderEffect =\n    OH_Drawing_ShaderEffectCreateLinearGradient(startPt, endPt, colors, pos, 3, OH_Drawing_TileMode::CLAMP);\n// 创建画刷对象\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\n// 基于画刷设置着色器效果\nOH_Drawing_BrushSetShaderEffect(brush, colorShaderEffect);\n// 设置画刷填充效果\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建字型对象\nOH_Drawing_Font *font = OH_Drawing_FontCreate();\n// 设置字体大小\nOH_Drawing_FontSetTextSize(font, value150_);\nconst char *str = \"Hello world\";\n// 创建字块对象\nOH_Drawing_TextBlob *textBlob =\n    OH_Drawing_TextBlobCreateFromString(str, font, OH_Drawing_TextEncoding::TEXT_ENCODING_UTF8);\n// 绘制字块\nOH_Drawing_CanvasDrawTextBlob(canvas, textBlob, value200_, value800_);\n// 取消填充效果\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_TextBlobDestroy(textBlob);\nOH_Drawing_FontDestroy(font);\nOH_Drawing_BrushDestroy(brush);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(71279)/* ["default"] */.A) + "",
        width: "1157",
        height: "419"
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
        href: "/arkgraphics-2d/text/font-manager/theme-font-c",
        children: "使用主题字体（C/C++）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置跟随主题字体的示例代码和效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建字型对象\nOH_Drawing_Font *font = OH_Drawing_FontCreate();\n// 设置文字大小\nOH_Drawing_FontSetTextSize(font, value100_);\n// 设置跟随主题字体\nOH_Drawing_FontSetThemeFontFollowed(font, true);\n// 需要绘制的文字\nconst char *str = \"Hello World\";\n// 创建字块对象\nOH_Drawing_TextBlob *textBlob =\n    OH_Drawing_TextBlobCreateFromString(str, font, OH_Drawing_TextEncoding::TEXT_ENCODING_UTF8);\n// 绘制字块\nOH_Drawing_CanvasDrawTextBlob(canvas, textBlob, value200_, value800_);\n// 释放字块对象\nOH_Drawing_TextBlobDestroy(textBlob);\n// 释放字型对象\nOH_Drawing_FontDestroy(font);\n"
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
        src: (__webpack_require__(884401)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在应用入口文件（默认工程中为EntryAbility.ets）中重写onConfigurationUpdate函数，以响应切换主题字体的操作，确保切换后页面能够及时刷新并生效。具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/text/font-manager/theme-font-c",
        children: "使用主题字体（C/C++）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单字绘制",
      children: "单字绘制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单字绘制是图形渲染中针对文本渲染的一种精细化控制技术。相比字块绘制，其核心优势在于能够利用字体退化机制，在当前字体无法显示某字符时，自动退化到使用系统字体绘制字符，提升对特殊字符的兼容性，避免字符缺失。同时，单字绘制支持逐字符配置字体特征（如连字、替代字形），满足复杂排版需求，增强用户体验。详细API说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasdrawsinglecharacter",
        children: "drawing_canvas.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础场景：绘制无字体特征的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于无需字体特征的常规文本渲染场景，可以使用OH_Drawing_CanvasDrawSingleCharacter绘制单个字符，使用OH_Drawing_FontMeasureSingleCharacter测量单个字符的宽度，示例代码和效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建字型对象\nOH_Drawing_Font *font = OH_Drawing_FontCreate();\n// 设置文字大小\nOH_Drawing_FontSetTextSize(font, value100_);\nfloat startX = 100;\nfloat startY = 100;\nint strLen = 5;\nconst char* str = \"Hello\";\nfor (int i = 0; i < strLen; ++i) {\n    // 单字绘制\n    OH_Drawing_CanvasDrawSingleCharacter(canvas, &str[i], font, startX, startY);\n    float textWidth = 0.f;\n    // 测量单个字符的宽度\n    OH_Drawing_FontMeasureSingleCharacter(font, &str[i], &textWidth);\n    startX += textWidth;\n}\n// 释放字型对象\nOH_Drawing_FontDestroy(font);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499536)/* ["default"] */.A) + "",
        width: "344",
        height: "159"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进阶场景：绘制带字体特征的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于需要字体特征的文本渲染场景，可以使用OH_Drawing_CanvasDrawSingleCharacterWithFeatures绘制单个字符，使用OH_Drawing_FontMeasureSingleCharacterWithFeatures测量单个字符的宽度，示例代码和效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建字型对象\nOH_Drawing_Font *font = OH_Drawing_FontCreate();\n// 设置文字大小\nOH_Drawing_FontSetTextSize(font, value100_);\n// 创建字体特征对象\nOH_Drawing_FontFeatures* features = OH_Drawing_FontFeaturesCreate();\nOH_Drawing_FontFeaturesAddFeature(features, \"frac\", 1);\nfloat startX = 100;\nfloat startY = 100;\nint strLen = 5;\nconst char* str = \"a2+b2\";\nfor (int i = 0; i < strLen; ++i) {\n    // 单字绘制\n    OH_Drawing_CanvasDrawSingleCharacterWithFeatures(canvas, &str[i], font, startX, startY, features);\n    float textWidth = 0.f;\n    // 测量单个字符的宽度\n    OH_Drawing_FontMeasureSingleCharacterWithFeatures(font, &str[i], features, &textWidth);\n    startX += textWidth;\n}\n// 释放字体特征对象\nOH_Drawing_FontFeaturesDestroy(features);\n// 释放字型对象\nOH_Drawing_FontDestroy(font);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916725)/* ["default"] */.A) + "",
        width: "143",
        height: "46"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(123708)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果 OH_Drawing_CanvasDrawSingleCharacterWithFeatures 与 OH_Drawing_FontMeasureSingleCharacter 混合使用，或者 OH_Drawing_CanvasDrawSingleCharacter 与 OH_Drawing_FontMeasureSingleCharacterWithFeatures 混合使用，字体绘制可能会重叠。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkGraphics2D/Drawing/NDKGraphicsDraw",
          children: "图形绘制（C/C++）"
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
237283(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438713-2a59a40bf79df0d8eb6a333555599c43.jpg");

},
123708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
499536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
71279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478669-0221633e0185b2bf71b38a9267aa51d8.jpg");

},
916725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
388176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
884401(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
596791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799018-b8d8566218a17c87ea50c8b856e77ebb.jpg");

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