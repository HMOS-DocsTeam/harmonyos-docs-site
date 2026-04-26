"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["235819"], {
719654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_geometric_shape_drawing_c_geometric_shape_drawing_c_md_c1b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-primitive-drawing-geometric-shape-drawing-c-geometric-shape-drawing-c-md-c1b.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_geometric_shape_drawing_c_geometric_shape_drawing_c_md_c1b_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c/geometric-shape-drawing-c","title":"几何形状绘制（C/C++）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c/geometric-shape-drawing-c.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c","slug":"/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"几何形状绘制（C/C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geometric-shape-drawing-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"字块绘制（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts/"},"next":{"title":"图片绘制（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c/geometric-shape-drawing-c.md


const frontMatter = {
	title: '几何形状绘制（C/C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geometric-shape-drawing-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '几何形状绘制（C/C++）';

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
        id: "几何形状绘制cc",
        children: "几何形状绘制（C/C++）"
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
      children: "大部分的几何形状均可以选择使用画笔或者使用画刷来实现绘制，其中点的绘制只能使用画笔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["几何形状绘制的常用接口如下表所示，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h",
        children: "drawing_canvas.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Drawing_Point* OH_Drawing_PointCreate (float x, float y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个坐标点对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPoint (OH_Drawing_Canvas *canvas, const OH_Drawing_Point2D *point)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Rect* OH_Drawing_RectCreate (float left, float top, float right, float bottom)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个矩形对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDrawArc (OH_Drawing_Canvas*, const OH_Drawing_Rect*, float startAngle, float sweepAngle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个弧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDrawCircle (OH_Drawing_Canvas*, const OH_Drawing_Point*, float radius)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个圆形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Path* OH_Drawing_PathCreate (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个路径对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDrawPath (OH_Drawing_Canvas*, const OH_Drawing_Path*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个自定义路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Region* OH_Drawing_RegionCreate (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个区域对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDrawRegion (OH_Drawing_Canvas*, const OH_Drawing_Region*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一块区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDrawRect (OH_Drawing_Canvas*, const OH_Drawing_Rect*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_RoundRect* OH_Drawing_RoundRectCreate (const OH_Drawing_Rect*, float xRad, float yRad)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个圆角矩形对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDrawRoundRect (OH_Drawing_Canvas*, const OH_Drawing_RoundRect*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个圆角矩形。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制点",
      children: "绘制点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点只能基于画笔在画布上进行绘制，通过使用OH_Drawing_CanvasDrawPoint()接口绘制点。接口接受两个参数，一个是画布对象Canvas，请确保已创建或获取得到画布Canvas，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
        children: "画布的获取与绘制结果的显示（C/C++）"
      }), "；另一个是要绘制的点的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔对象\nOH_Drawing_Pen* pen = OH_Drawing_PenCreate();\n// 设置画笔颜色\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画笔线宽为40\nOH_Drawing_PenSetWidth(pen, 40);\n// 设置画布的画笔\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 绘制5个点\nAdaptationUtil* adaptationUtil = AdaptationUtil::GetInstance();\nOH_Drawing_Point2D point1 = {value200_, value200_};\nOH_Drawing_CanvasDrawPoint(canvas, &point1);\nOH_Drawing_Point2D point2 = {value400_, value400_};\nOH_Drawing_CanvasDrawPoint(canvas, &point2);\nOH_Drawing_Point2D point3 = {value600_, value600_};\nOH_Drawing_CanvasDrawPoint(canvas, &point3);\nOH_Drawing_Point2D point4 = {value800_, value800_};\nOH_Drawing_CanvasDrawPoint(canvas, &point4);\nOH_Drawing_Point2D point5 = {value1000_, value1000_};\nOH_Drawing_CanvasDrawPoint(canvas, &point5);\n// 去除掉画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(166669)/* ["default"] */.A) + "",
        width: "487",
        height: "495"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制圆弧",
      children: "绘制圆弧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行圆弧的绘制，通过使用OH_Drawing_CanvasDrawArc()接口绘制圆弧。使用接口需要传入4个参数，分别如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要画布对象Canvas，请确保已创建或获取得到画布Canvas，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
          children: "画布的获取与绘制结果的显示（C/C++）"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绘制圆弧还需要一个矩形，会以矩形的边为轮廓进行绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要一个浮点参数，表示弧形的起始角度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要另一个浮点参数，表示弧形的扫描角度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画笔绘制圆弧为例，简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔对象\nOH_Drawing_Pen* pen = OH_Drawing_PenCreate();\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画笔线宽为20\nOH_Drawing_PenSetWidth(pen, 20);\n// 设置画布的画笔\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建矩形对象，左上坐标为（100，200）右下坐标为（500，300）\nOH_Drawing_Rect* rect = OH_Drawing_RectCreate(100, 200, 500, 300);\n// 基于矩形对象绘制圆弧，其实角度10°，扫描角度200°\nOH_Drawing_CanvasDrawArc(canvas, rect, 10, 200);\n// 去除掉画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_RectDestroy(rect);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(890513)/* ["default"] */.A) + "",
        width: "401",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制圆",
      children: "绘制圆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行圆的绘制，通过使用OH_Drawing_CanvasDrawCircle()接口绘制圆。使用接口需要传入3个参数，分别如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要画布对象Canvas，请确保已创建或获取得到画布Canvas，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
          children: "画布的获取与绘制结果的显示（C/C++）"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绘制圆还需要一个指向圆心点对象的指针，会以此点为圆心进行绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最后需要一个浮点参数，表示圆的半径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画笔绘制圆为例，简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔对象\nOH_Drawing_Pen* pen = OH_Drawing_PenCreate();\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画笔线宽为20\nOH_Drawing_PenSetWidth(pen, 20);\n// 设置画布的画笔\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建圆心点\nOH_Drawing_Point *point = OH_Drawing_PointCreate(value700_, value700_);\n// 基于圆心点和半径在画布上绘制圆\nOH_Drawing_CanvasDrawCircle(canvas, point, value600_);\n// 去除掉画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_PointDestroy(point);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(666698)/* ["default"] */.A) + "",
        width: "507",
        height: "493"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制路径",
      children: "绘制路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行路径的绘制，路径具体可以用于绘制直线、弧线、贝塞尔曲线等，也可以通过路径组合的方式组成其他复杂的形状。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绘制路径的相关接口和实现如下，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-path-h/capi-drawing-path-h",
        children: "drawing_path"
      }), "。常用的接口如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用OH_Drawing_PathCreate()接口可以创建一个路径对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用OH_Drawing_PathMoveTo()接口可以设置自定义路径的起始点位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用OH_Drawing_PathLineTo()接口可以添加一条从起始点或路径的最后点位置（若路径没有内容则默认为(0,0)）到目标点位置的线段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画笔和画刷绘制五角星为例，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔对象\nOH_Drawing_Pen* pen = OH_Drawing_PenCreate();\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画笔线宽为10\nOH_Drawing_PenSetWidth(pen, 10);\n// 设置 画笔转角样式\nOH_Drawing_PenSetJoin(pen, LINE_ROUND_JOIN);\n// 设置画布中的画笔\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建画刷，此例对闭合路径进行了颜色填充，所以需要使用画刷\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MIN, RGBA_MAX, RGBA_MIN));\n// 设置画布中的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\nint len = value551_;\nfloat aX = value630_;\nfloat aY = value551_;\nfloat dX = aX - len * std::sin(18.0f);\nfloat dY = aY + len * std::cos(18.0f);\nfloat cX = aX + len * std::sin(18.0f);\nfloat cY = dY;\nfloat bX = aX + (len / 2.0);\nfloat bY = aY + std::sqrt((cX - dX) * (cX - dX) + (len / 2.0) * (len / 2.0));\nfloat eX = aX - (len / 2.0);\nfloat eY = bY;\n// 创建路径\nOH_Drawing_Path* path = OH_Drawing_PathCreate();\n// 到起始点\nOH_Drawing_PathMoveTo(path, aX, aY);\n// 绘制直线\nOH_Drawing_PathLineTo(path, bX, bY);\nOH_Drawing_PathLineTo(path, cX, cY);\nOH_Drawing_PathLineTo(path, dX, dY);\nOH_Drawing_PathLineTo(path, eX, eY);\n// 直线闭合，形成五角星\nOH_Drawing_PathClose(path);\n// 绘制闭合路径\nOH_Drawing_CanvasDrawPath(canvas, path);\n// 去除掉画布中的画笔和画刷\nOH_Drawing_CanvasDetachPen(canvas);\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_PathDestroy(path);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912512)/* ["default"] */.A) + "",
        width: "499",
        height: "494"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制区域",
      children: "绘制区域"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["区域不是一个特定的形状，可以设置为指定的矩形或路径，也可以对两个区域进行组合操作。可以使用画笔或画刷在画布上进行区域的绘制。详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-region-h/capi-drawing-region-h",
        children: "drawing_region.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持设置矩形区域和路径区域，分别通过OH_Drawing_RegionSetRect()接口和OH_Drawing_RegionSetPath()接口来设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画刷绘制矩形的组合区域为例，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 设置画刷填充颜色\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画布的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 矩形区域1\nOH_Drawing_Region *region1 = OH_Drawing_RegionCreate();\nOH_Drawing_Rect *rect1 = OH_Drawing_RectCreate(value100_, value100_, value600_, value600_);\nOH_Drawing_RegionSetRect(region1, rect1);\n// 矩形区域2\nOH_Drawing_Region *region2 = OH_Drawing_RegionCreate();\nOH_Drawing_Rect *rect2 = OH_Drawing_RectCreate(value300_, value300_, value900_, value900_);\nOH_Drawing_RegionSetRect(region2, rect2);\n// 两个矩形区域组合\nOH_Drawing_RegionOp(region1, region2, OH_Drawing_RegionOpMode::REGION_OP_MODE_XOR);\nOH_Drawing_CanvasDrawRegion(canvas, region1);\n// 去除掉画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_RegionDestroy(region1);\nOH_Drawing_RegionDestroy(region2);\nOH_Drawing_RectDestroy(rect1);\nOH_Drawing_RectDestroy(rect2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(33096)/* ["default"] */.A) + "",
        width: "480",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制矩形",
      children: "绘制矩形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行矩形的绘制。使用OH_Drawing_RectCreate()接口创建矩形。接口需要传入四个浮点数，分别表示矩形的左、上、右、下四个位置的坐标，连接这4个坐标形成一个矩形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\n// 设置画刷的填充颜色\nOH_Drawing_BrushSetColor(brush, 0xffff0000);\n// 设置画布的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\nOH_Drawing_Rect* rect = OH_Drawing_RectCreate(0, 0, value800_, value800_);\n// 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_RectDestroy(rect);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605455)/* ["default"] */.A) + "",
        width: "480",
        height: "353"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制圆角矩形",
      children: "绘制圆角矩形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用画笔或画刷在画布上进行圆角矩形的绘制。使用OH_Drawing_RoundRectCreate()接口创建圆角矩形。接口需要传入3个参数，分别如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要传入指向OH_Drawing_Rect矩形对象的指针，用于在此矩形的基础上切圆角进行绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要一个浮点参数，表示x轴上的圆角半径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "还需要一个浮点参数，表示y轴上的圆角半径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\n// 设置画刷的填充颜色\nOH_Drawing_BrushSetColor(brush, 0xffff0000);\n// 设置画布的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建矩形\nOH_Drawing_Rect* rect = OH_Drawing_RectCreate(value100_, value100_, value900_, value600_);\n// 创建圆角矩形\nOH_Drawing_RoundRect* roundRect = OH_Drawing_RoundRectCreate(rect, 30, 30);\n// 绘制圆角矩形\nOH_Drawing_CanvasDrawRoundRect(canvas, roundRect);\n// 去除掉画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_RoundRectDestroy(roundRect);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(580655)/* ["default"] */.A) + "",
        width: "505",
        height: "296"
      })
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
33096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438703-b6b6a45895a3a4269e83ef54545822c6.jpg");

},
580655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
890513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958664-8e82fa63b9fcc60d3becf4930a2be9bb.png");

},
166669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438709-9c2d399d578fb2d55babc51b8754eb39.png");

},
605455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAFhCAYAAACoOHnoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAGHaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj48dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz4slJgLAAAIoUlEQVR4Xu3cz2pkaQHG4fc7lcyEGZ2tC2EWboVZKF6AoIOIV+ZqrkQQHIS5HEEXLhTGUTvpqvO5yL/qTFIBQ/NWdZ4HDgmVvOlFKueXqlPpsZ1vZzLztPHwhj2HdnmF28fcfr3nti/5d1vbvHBve++1bfPM/n77/c+aSUZmNhnrzFhn5rIkSzLmLpuMZGwejuDojKt1CvA7/s/tfGJ3d/Mj2/3NE/Nrj2zfcWj8Prd54d723mvb5pn97XZmfO/rzMx58/OzJNsxs8ma8zkztmuynCWb5cEGjs9Yt28O/RTw3jw8qezzLYEkj8T3xkzm5SZzs2Ruks2aZEmuNtdvP3pqB0dkzDnnodP9obvxoV1s3/EhbvPCve2917bNM/v97br3/r5tksusybrm08tNljHy7UWSrPksHgFz/MY//vTHQz8HvFdPnaJ8S+DazNyP6ZzJGBnrmqurN5mf/yif/fwXOVs+zUfbZDvWzGXN+Tjb/yJwlMbfne2BI/bYCWok+S7JP7/8XX729R+ynp1nzDVjzusPehEWJ2A88wosgKO0S/K33/4mP/76zxmZSd5mZpNlLsl46tklOB7LvPkN0+FwOE7lyE2AV6HlhHmlAgAUCDBw8mZmknHzFk6DAANAgQADJ8+VYE6RAAMnaTz4M47phMaJcX8FgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGgAIBBoACAQaAAgEGTtdIxsPb4EQIMHCS5s1x+/5Isj74HDhmAgwABQIMAAUCDJy8kZFk3ryF07CMm2snDofDcSpH7t6/vQoMp2fs7l/HAHASRpLLJH/91a/zk2++ScZMsk2yZMwlGbeZhuM1/vLFTwUYOAm3r3Ye68x3b5ZcfvnLfPHV77M7v8hmTcbcXV9YG5uHUzg64+o//xZg4GjNuyed92+c2a7fZvfxkvX8h/lkd5Hz3ch/z2dm1nwiwJyAsZvrPFTgR+76dw7tYvuOD3GbF+5t7722bZ7Zj5uPjyeu8s4ku3WXtzM5W0cu3o5kGfnXRTKy5gdeX8oJGOv27WP3b4C660u5j6R8JrlcMs9GtpuZJTObJOucybJkWR7ZwJEZb+Y6n/9d9CmHdrF9x4e4zQv3tvde2zbP7G+3jzwBfXvGGtePcudcs4zkPDNju7u+/rvxFDTHb6zTI2DgeM0kmfsZntcPjefI2M1kjqybkd0ykmxzPpeMmzjDMRtzHrwEDNC3f5a6e3B891A4cyS7cf2Jm8R/yMFJEGAAKPA8DQAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAUCDAAFAgwABQIMAAU/A+obnePpKCOyQAAAABJRU5ErkJggg==");

},
666698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478665-d3f4455ec118c2c17b0b18c63a8e8b67.png");

},
912512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799016-265c4e50d3cb715695d6b050ed4f913c.png");

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