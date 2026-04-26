"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["540844"], {
113546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_geometric_shape_drawing_arkts_geometric_shape_drawing_arkts_md_8a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-primitive-drawing-geometric-shape-drawing-arkts-geometric-shape-drawing-arkts-md-8a5.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_geometric_shape_drawing_arkts_geometric_shape_drawing_arkts_md_8a5_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts/geometric-shape-drawing-arkts","title":"几何形状绘制（ArkTS）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts/geometric-shape-drawing-arkts.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts","slug":"/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"几何形状绘制（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geometric-shape-drawing-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图元绘制概述","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview/"},"next":{"title":"图片绘制（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts/geometric-shape-drawing-arkts.md


const frontMatter = {
	title: '几何形状绘制（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geometric-shape-drawing-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '几何形状绘制（ArkTS）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "绘制点",
  "id": "绘制点",
  "level": 2
}, {
  "value": "绘制圆弧",
  "id": "绘制圆弧",
  "level": 2
}, {
  "value": "绘制圆",
  "id": "绘制圆",
  "level": 2
}, {
  "value": "绘制路径",
  "id": "绘制路径",
  "level": 2
}, {
  "value": "绘制区域",
  "id": "绘制区域",
  "level": 2
}, {
  "value": "绘制矩形",
  "id": "绘制矩形",
  "level": 2
}, {
  "value": "绘制圆角矩形",
  "id": "绘制圆角矩形",
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
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "几何形状绘制arkts",
        children: "几何形状绘制（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持绘制的几何形状，主要包括以下几种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "圆弧"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "圆"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "路径"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "区域"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "矩形"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "圆角矩形"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大部分的几何形状均可以选择使用画笔或使用画刷来实现绘制，其中点的绘制只能使用画笔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["几何形状绘制的常用接口如下表所示，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
        children: "drawing.Canvas"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawPoint(x: number, y: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawArc(arc: common2D.Rect, startAngle: number, sweepAngle: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个弧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawCircle(x: number, y: number, radius: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个圆形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawPath(path: Path): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个自定义路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawRegion(region: Region): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一块区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawRect(left: number, top: number, right: number, bottom: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawRoundRect(roundRect: RoundRect): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个圆角矩形。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制点",
      children: "绘制点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点只能基于画笔在画布上进行绘制，通过使用drawPoint()接口绘制点。绘制点需要接受两个参数，分别为需要绘制的点的x坐标和y坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置画笔\nlet pen = new drawing.Pen();\n// 设置颜色\npen.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置线宽\npen.setStrokeWidth(40);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\n// 绘制5个点\ncanvas.drawPoint(VALUE_200, VALUE_200);\ncanvas.drawPoint(VALUE_400, VALUE_400);\ncanvas.drawPoint(VALUE_600, VALUE_600);\ncanvas.drawPoint(VALUE_800, VALUE_800);\ncanvas.drawPoint(VALUE_1000, VALUE_1000);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211389)/* ["default"] */.A) + "",
        width: "480",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制圆弧",
      children: "绘制圆弧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行圆弧的绘制，通过使用drawArc()接口绘制圆弧。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绘制圆弧需要一个矩形（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
        children: "common2D.Rect"
      }), "），以矩形的边为轮廓进行绘制，还需要两个参数，分别表示弧形的起始角度（startAngle）和扫描角度（sweepAngle）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画笔绘制圆弧为例，简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nlet pen = new drawing.Pen();\n// 设置颜色\npen.setColor({\n  alpha: 0xFF,\n  red: 0xFF,\n  green: 0x00,\n  blue: 0x00\n});\n// 设置线宽\npen.setStrokeWidth(20);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\n// 创建矩形对象\nconst rect: common2D.Rect = {\n  left: VALUE_100,\n  top: VALUE_200,\n  right: VALUE_1000,\n  bottom: VALUE_600\n};\n// 绘制矩形\ncanvas.drawArc(rect, 0, 180);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(261447)/* ["default"] */.A) + "",
        width: "479",
        height: "422"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制圆",
      children: "绘制圆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行圆的绘制，通过使用drawCircle()接口绘制圆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制圆需要圆心点的x坐标和y坐标，以及圆半径（radius）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画笔绘制圆为例，简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nlet pen = new drawing.Pen();\n// 设置颜色\npen.setColor({\n  alpha: 0xFF,\n  red: 0xFF,\n  green: 0x00,\n  blue: 0x00\n});\n// 设置线宽\npen.setStrokeWidth(20);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\n// 绘制圆\ncanvas.drawCircle(VALUE_630, VALUE_630, VALUE_500);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155424)/* ["default"] */.A) + "",
        width: "480",
        height: "496"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制路径",
      children: "绘制路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行路径的绘制，路径具体可以用于绘制直线、弧线、贝塞尔曲线等，也可以通过路径组合的方式组成其他复杂的形状。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绘制路径的相关接口和实现如下，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-path/arkts-apis-graphics-drawing-path",
        children: "Path"
      }), "。常用的接口如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用new drawing.Path()可以创建一个路径对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用moveTo()接口可以设置自定义路径的起始点位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用lineTo()接口可以添加一条从起始点或路径的最后点位置（若路径没有内容则默认为(0,0)）到目标点位置的线段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画笔和画刷绘制五角星为例，简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let height_ = VALUE_1800;\nlet width_ = VALUE_1800;\nlet len = height_ / 4;\nlet aX = width_ / 3;\nlet aY = height_ / 6;\nlet dX = aX - len * Math.sin(18.0);\nlet dY = aY + len * Math.cos(18.0);\nlet cX = aX + len * Math.sin(18.0);\nlet cY = dY;\nlet bX = aX + (len / 2.0);\nlet bY = aY + Math.sqrt((cX - dX) * (cX - dX) + (len / 2.0) * (len / 2.0));\nlet eX = aX - (len / 2.0);\nlet eY = bY;\n\n// 创建一个path对象，然后使用接口连接成一个五角星形状\nlet path = new drawing.Path();\n// 指定path的起始位置\npath.moveTo(aX, aY);\n// 用直线连接到目标点\npath.lineTo(bX, bY);\npath.lineTo(cX, cY);\npath.lineTo(dX, dY);\npath.lineTo(eX, eY);\n// 闭合形状，path绘制完毕\npath.close();\n\n// 创建画笔对象\nlet pen = new drawing.Pen();\n// 设置抗锯齿\npen.setAntiAlias(true);\n// 设置描边颜色\npen.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置线宽\npen.setStrokeWidth(10.0);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\n// 创建画刷\nlet brush = new drawing.Brush();\n// 设置填充颜色\nbrush.setColor(0xFF, 0x00, 0xFF, 0x00);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 绘制路径\ncanvas.drawPath(path);\n// 去除填充效果\ncanvas.detachBrush();\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(955156)/* ["default"] */.A) + "",
        width: "480",
        height: "487"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制区域",
      children: "绘制区域"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["区域不是一个特定的形状，可以设置为指定的矩形或路径，也可以对两个区域进行组合操作。可以使用画笔或画刷对区域进行绘制。详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-region/arkts-apis-graphics-drawing-region",
        children: "Region"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持设置矩形区域和路径区域，分别通过setRect()接口和setPath()接口来设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画刷绘制矩形的组合区域为例，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色\nbrush.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 创建左上角的region1\nlet region1 = new drawing.Region();\nregion1.setRect(VALUE_100, VALUE_100, VALUE_600, VALUE_600);\n// 创建右下角的region2\nlet region2 = new drawing.Region();\nregion2.setRect(VALUE_300, VALUE_300, VALUE_900, VALUE_900);\n// 将两个区域以XOR的方式组合\nregion1.op(region2, drawing.RegionOp.XOR);\n// 绘制区域\ncanvas.drawRegion(region1);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(403885)/* ["default"] */.A) + "",
        width: "480",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制矩形",
      children: "绘制矩形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行矩形的绘制。使用drawRect()接口绘制矩形。接口需要传入四个浮点数，分别表示矩形的左、上、右、下四个位置的坐标，连接这4个坐标形成一个矩形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画刷绘制矩形为例，简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色\nbrush.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 绘制矩形\ncanvas.drawRect(VALUE_200, VALUE_200, VALUE_1000, VALUE_700);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388203)/* ["default"] */.A) + "",
        width: "480",
        height: "375"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制圆角矩形",
      children: "绘制圆角矩形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行圆角矩形的绘制。使用drawRoundRect()接口绘制圆角矩形。接口接受1个入参roundRect，对应为圆角矩形对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "圆角矩形对象通过new drawing.RoundRect()接口构造，构造函数接受3个参数，分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "common2D.Rect（矩形对象），圆角矩形是在该矩形的基础上切圆角形成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x轴上的圆角半径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "y轴上的圆角半径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画刷绘制圆角矩形为例，简单示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色\nbrush.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 创建矩形对象\nlet rect: common2D.Rect = {\n  left: VALUE_200,\n  top: VALUE_200,\n  right: VALUE_1000,\n  bottom: VALUE_700\n};\nconsole.info('rect:', rect.right);\n// 创建圆角矩形对象\nlet rrect = new drawing.RoundRect(rect, 30, 30);\n// 绘制圆角矩形\ncanvas.drawRoundRect(rrect);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(559701)/* ["default"] */.A) + "",
        width: "501",
        height: "403"
      })
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
559701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478659-95311014fa91b5c70edef31035ac93b1.png");

},
388203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
155424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478657-7af99e605983744044da4fbe90c305e5.jpg");

},
955156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799008-7ac6b069cffd08ff767d3bb610f54006.jpg");

},
403885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438703-b6b6a45895a3a4269e83ef54545822c6.jpg");

},
211389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438701-c0712845ba51ee611e32fbf5f55ea8e9.jpg");

},
261447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958656-d574fcc60caf0d333c078f47db100deb.png");

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