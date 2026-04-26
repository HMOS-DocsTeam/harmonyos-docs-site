"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["324184"], {
272813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_drawing_effect_complex_drawing_effect_c_complex_drawing_effect_c_md_814_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-drawing-effect-complex-drawing-effect-c-complex-drawing-effect-c-md-814.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_drawing_effect_complex_drawing_effect_c_complex_drawing_effect_c_md_814_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c/complex-drawing-effect-c","title":"复杂绘制效果（C/C++）","description":"除了基础填充颜色、描边颜色和一些样式设置的绘制效果外，还支持通过画刷和画笔实现更多复杂的绘制效果。比如：","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c/complex-drawing-effect-c.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c","slug":"/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"复杂绘制效果（C/C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-drawing-effect-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基础绘制效果（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c/"},"next":{"title":"图元绘制概述","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c/complex-drawing-effect-c.md


const frontMatter = {
	title: '复杂绘制效果（C/C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-drawing-effect-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '复杂绘制效果（C/C++）';

const assets = {

};



const toc = [{
  "value": "混合模式",
  "id": "混合模式",
  "level": 2
}, {
  "value": "路径效果",
  "id": "路径效果",
  "level": 2
}, {
  "value": "着色器效果",
  "id": "着色器效果",
  "level": 2
}, {
  "value": "线性渐变着色器效果",
  "id": "线性渐变着色器效果",
  "level": 3
}, {
  "value": "径向渐变着色器效果",
  "id": "径向渐变着色器效果",
  "level": 3
}, {
  "value": "扇形渐变着色器效果",
  "id": "扇形渐变着色器效果",
  "level": 3
}, {
  "value": "滤波器效果",
  "id": "滤波器效果",
  "level": 2
}, {
  "value": "颜色滤波器效果",
  "id": "颜色滤波器效果",
  "level": 3
}, {
  "value": "图像滤波器效果",
  "id": "图像滤波器效果",
  "level": 3
}, {
  "value": "蒙版滤波器效果",
  "id": "蒙版滤波器效果",
  "level": 3
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
        id: "复杂绘制效果cc",
        children: "复杂绘制效果（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了基础填充颜色、描边颜色和一些样式设置的绘制效果外，还支持通过画刷和画笔实现更多复杂的绘制效果。比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "混合模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "路径效果，如虚线效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "着色器效果，如线性渐变、径向渐变等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滤波效果，如模糊效果等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混合模式",
      children: "混合模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混合模式可以用于画笔或画刷，它定义了如何将源像素（要绘制的内容）与目标像素（已存在于画布上的内容）进行组合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用OH_Drawing_BrushSetBlendMode()接口将混合模式应用于画刷中，使用OH_Drawing_PenSetBlendMode()接口将混合模式应用于画笔中。这两个接口都需要接受一个参数OH_Drawing_BlendMode，即混合模式的类型，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
        children: "OH_Drawing_BlendMode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以使用画刷设置叠加混合模式为例（为了防止混合模式的效果被背景色干扰，示例中的canvas并未设置背景色，使用的是默认的黑色背景），关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 设置目标像素颜色\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 将目标像素的画刷效果设置到Canvas中\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建矩形对象\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value100_, value100_, value600_, value600_);\n// 绘制矩形（目标像素）\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 设置源像素颜色\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MIN, RGBA_MIN, 0xFF));\n// 设置混合模式为叠加模式\nOH_Drawing_BrushSetBlendMode(brush, OH_Drawing_BlendMode::BLEND_MODE_PLUS);\n// 将源像素的画刷效果设置到Canvas中\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建圆心的点对象\nOH_Drawing_Point *point = OH_Drawing_PointCreate(value600_, value600_);\n// 绘制圆（源像素）\nOH_Drawing_CanvasDrawCircle(canvas, point, value300_);\n// 去除掉画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_PointDestroy(point);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(261858)/* ["default"] */.A) + "",
        width: "422",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "路径效果",
      children: "路径效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径效果如虚线效果，只用于画笔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用OH_Drawing_CreateDashPathEffect()接口设置路径效果。接口接受3个参数，分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浮点数数组intervals：表示虚线或者点线的间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "整数count：表示intervals数组中的元素数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浮点数phase：表示在intervals数组中的偏移量，即从数组的哪个位置开始应用虚线或点线效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形虚线路径效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nOH_Drawing_Pen *pen = OH_Drawing_PenCreate();\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, 0xffff0000);\n// 设置画笔线宽为10\nOH_Drawing_PenSetWidth(pen, 10);\n// 表示10px的实线，5px的间隔，2px的实线，5px的间隔，以此循环\nfloat intervals[] = {10, 5, 2, 5};\n// 设置虚线路径效果\nOH_Drawing_PathEffect *pathEffect = OH_Drawing_CreateDashPathEffect(intervals, 4, 0.0);\nOH_Drawing_PenSetPathEffect(pen, pathEffect);\n// 在画布上设置画笔，请确保已获取得到画布对象\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建矩形\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value300_, value300_, value900_, value900_);\n// 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除掉画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_PathEffectDestroy(pathEffect);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "不设置虚线路径效果的示意图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置虚线效果的示意图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "着色器效果",
      children: "着色器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "着色器效果基于画刷或画笔实现，可使用OH_Drawing_BrushSetShaderEffect()接口设置画刷的着色器效果，或者使用 OH_Drawing_PenSetShaderEffect()接口设置画笔的着色器效果。当前支持不同的着色器效果，如线性渐变着色器效果、径向渐变着色器效果、扇形渐变着色器效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["着色器相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h",
        children: "drawing_shader_effect"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线性渐变着色器效果",
      children: "线性渐变着色器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用OH_Drawing_ShaderEffectCreateLinearGradient()接口创建想要设置的线性渐变着色器效果。接口接受6个参数，分别为开始点、结束点、颜色数组、相对位置数组、颜色数组的大小以及平铺模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始点和结束点用来确定渐变方向。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "颜色数组用于存储渐变使用到的颜色。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相对位置数组则用于确定每种颜色在渐变中的相对位置，如果相对位置为空，颜色将会被均匀地分布在开始点和结束点之间。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "平铺模式用于确定如何在渐变区域之外继续渐变效果，平铺模式分为以下4类："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CLAMP：当图像超出其原始边界时，复制边缘颜色。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "REPEAT：在水平和垂直方向上重复图像。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MIRROR：在水平和垂直方向上重复图像，并在相邻的图像之间交替使用镜像图像。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DECAL：只在原始域内绘制，在其他地方返回透明黑色。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画刷设置线性渐变着色器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开始点\nOH_Drawing_Point *startPt = OH_Drawing_PointCreate(20, 20);\n// 结束点\nOH_Drawing_Point *endPt = OH_Drawing_PointCreate(value900_, value900_);\n// 颜色数组\nuint32_t colors[] = {0xFFFFFF00, 0xFFFF0000, 0xFF0000FF};\n// 相对位置数组\nfloat pos[] = {0.0f, 0.5f, 1.0f};\n// 创建线性渐变着色器效果\nOH_Drawing_ShaderEffect *colorShaderEffect =\n    OH_Drawing_ShaderEffectCreateLinearGradient(startPt, endPt, colors, pos, 3, OH_Drawing_TileMode::CLAMP);\n// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 基于画刷设置着色器效果\nOH_Drawing_BrushSetShaderEffect(brush, colorShaderEffect);\n// 在画布上设置画刷，请确保已获取得到画布对象\nOH_Drawing_CanvasAttachBrush(canvas, brush);\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value100_, value100_, value900_, value900_);\n // 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除掉画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_ShaderEffectDestroy(colorShaderEffect);\nOH_Drawing_PointDestroy(startPt);\nOH_Drawing_PointDestroy(endPt);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此例绘制的具有线性渐变着色器效果的矩形如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(871265)/* ["default"] */.A) + "",
        width: "466",
        height: "412"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "径向渐变着色器效果",
      children: "径向渐变着色器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用OH_Drawing_ShaderEffectCreateRadialGradient()接口创建想要设置的径向渐变着色器效果。接口接受6个参数，分别为圆心坐标（centerPt）、半径（radius）、颜色数组（colors）、相对位置数组（pos）、颜色和位置的数量（size）以及平铺模式（OH_Drawing_TileMode）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其实现方式与线性渐变着色器类似，不同的是，径向渐变是由圆心开始向外径向渐变的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画刷设置径向渐变着色器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 圆心坐标\nOH_Drawing_Point *centerPt = OH_Drawing_PointCreate(value500_, value500_);\n// 半径\nfloat radius = value600_;\n// 颜色数组\nuint32_t gColors[] = {0xFFFF0000, 0xFF00FF00, 0xFF0000FF};\n// 相对位置数组\nfloat_t gPos[] = {0.0f, 0.25f, 0.75f};\n// 创建径向渐变着色器效果\nOH_Drawing_ShaderEffect *colorShaderEffect =\n    OH_Drawing_ShaderEffectCreateRadialGradient(centerPt, radius, gColors, gPos, 3, OH_Drawing_TileMode::REPEAT);\n// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 基于画刷设置着色器效果\nOH_Drawing_BrushSetShaderEffect(brush, colorShaderEffect);\n// 在画布上设置画刷，请确保已获取得到画布对象\nOH_Drawing_CanvasAttachBrush(canvas, brush);\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value100_, value100_, value900_, value900_);\n // 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除掉画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_ShaderEffectDestroy(colorShaderEffect);\nOH_Drawing_PointDestroy(centerPt);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此例绘制的具有径向渐变着色器效果的矩形如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(381901)/* ["default"] */.A) + "",
        width: "487",
        height: "425"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扇形渐变着色器效果",
      children: "扇形渐变着色器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用OH_Drawing_ShaderEffectCreateSweepGradient()接口创建想要设置的扇形渐变着色器效果。接口接受5个参数，分别是中心点、颜色数组、相对位置数组、颜色和相对位置的数量以及平铺模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其实现方式也与线性渐变着色器类似，不同的是，扇形渐变是在围绕中心点旋转的过程中渐变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画刷设置扇形渐变着色器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 中心点\nOH_Drawing_Point *centerPt = OH_Drawing_PointCreate(value500_, value500_);\n// 颜色数组\nuint32_t colors[3] = {0xFF00FFFF, 0xFFFF00FF, 0xFFFFFF00};\n// 相对位置数组\nfloat pos[3] = {0.0f, 0.5f, 1.0f};\n// 创建扇形渐变着色器效果\nOH_Drawing_ShaderEffect* colorShaderEffect =\n    OH_Drawing_ShaderEffectCreateSweepGradient(centerPt, colors, pos, 3, OH_Drawing_TileMode::CLAMP);\n// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 基于画刷设置着色器效果\nOH_Drawing_BrushSetShaderEffect(brush, colorShaderEffect);\n// 在画布上设置画刷，请确保已获取得到画布对象\nOH_Drawing_CanvasAttachBrush(canvas, brush);\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value100_, value100_, value900_, value900_);\n // 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除掉画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_ShaderEffectDestroy(colorShaderEffect);\nOH_Drawing_PointDestroy(centerPt);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此例绘制的具有扇形渐变着色器效果的矩形如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455969)/* ["default"] */.A) + "",
        width: "466",
        height: "441"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滤波器效果",
      children: "滤波器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滤波器效果可基于画刷或画笔实现。可使用OH_Drawing_PenSetFilter()接口设置画笔的滤波器效果，或者使用OH_Drawing_BrushSetFilter()接口设置画刷的滤波器效果。当前支持不同的滤波器效果，比如图像滤波器、颜色滤波器、蒙版滤波器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["滤波器相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-filter-h/capi-drawing-filter-h",
        children: "drawing_filter.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "颜色滤波器效果",
      children: "颜色滤波器效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["颜色滤波器可基于画笔或画刷实现，颜色滤波器的相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-color-filter-h/capi-drawing-color-filter-h",
        children: "drawing_color_filter.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前可实现多种颜色滤波器，包括如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具有混合模式的颜色滤波器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具有5x4颜色矩阵的颜色滤波器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将SRGB的伽玛曲线应用到RGB颜色通道的颜色滤波器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将RGB颜色通道应用于SRGB的伽玛曲线的颜色滤波器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将其输入的亮度值乘以透明度通道， 并将红色、绿色和蓝色通道设置为零的颜色滤波器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由两个颜色滤波器组合而成的颜色滤波器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以具有5x4颜色矩阵的颜色滤波器为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用OH_Drawing_ColorFilterCreateMatrix()接口创建具有5x4颜色矩阵的颜色滤波器。接口接受1个参数，表示为颜色矩阵，它是一个长度为20的浮点数数组。数组格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ a0, a1, a2, a3, a4 ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ b0, b1, b2, b3, b4 ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ c0, c1, c2, c3, c4 ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ d0, d1, d2, d3, d4 ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于每个原始的像素颜色色值（R, G, B, A），变换后的色值（R', G', B', A'）计算公式为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "R' = a0*R + a1*G + a2*B + a3*A + a4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "G' = b0*R + b1*G + b2*B + b3*A + b4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B' = c0*R + c1*G + c2*B + c3*A + c4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A' = d0*R + d1*G + d2*B + d3*A + d4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画刷设置具有5x4颜色矩阵的颜色滤波器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\n// 设置画刷抗锯齿\nOH_Drawing_BrushSetAntiAlias(brush, true);\n// 设置画刷填充颜色\nOH_Drawing_BrushSetColor(brush, 0xffff0000);\n// 设置颜色矩阵\nconst float matrix[20] = {\n    1, 0, 0, 0, 0,\n    0, 1, 0, 0, 0,\n    0, 0, 0.5f, 0.5f, 0,\n    0, 0, 0.5f, 0.5f, 0\n};\n    \n// 创建滤波器颜色\nOH_Drawing_ColorFilter* colorFilter = OH_Drawing_ColorFilterCreateMatrix(matrix);\n// 创建一个滤波器对象\nOH_Drawing_Filter *filter = OH_Drawing_FilterCreate();\n// 为滤波器对象设置颜色滤波器\nOH_Drawing_FilterSetColorFilter(filter, colorFilter);\n// 设置画刷的滤波器效果\nOH_Drawing_BrushSetFilter(brush, filter);\n// 在画布上设置画刷，请确保已获取得到画布对象\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建矩形\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value300_, value300_, value900_, value900_);\n// 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除掉画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\nOH_Drawing_ColorFilterDestroy(colorFilter);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_FilterDestroy(filter);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "不设置颜色滤波器效果的示意图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置5x4颜色矩阵的颜色滤波器效果的示意图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图像滤波器效果",
      children: "图像滤波器效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图像滤波器可基于画笔或画刷来实现，图像滤波器的相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-image-filter-h/capi-drawing-image-filter-h",
        children: "drawing_image_filter.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前只支持两种图像滤波器："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于颜色滤波器的图像滤波器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过OH_Drawing_ImageFilterCreateFromColorFilter()接口实现，接口接受2个参数，颜色滤波器colorFilter和图像滤波器input，即把颜色滤波器的效果叠加到图像滤波器input上，input可为空，input为空则只添加颜色滤波器效果。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "具有模糊效果的图像滤波器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过OH_Drawing_ImageFilterCreateBlur()接口实现，接口接受4个参数，分别为X轴上的模糊标准差、Y轴上的模糊标准差、平铺模式和图像滤波器（input）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最终效果即为在输入的图像滤波器（input）的基础上进行模糊化处理，即滤波器效果可叠加，input可为空，input为空则只添加模糊效果。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画笔添加模糊效果的图像滤波器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nOH_Drawing_Pen *pen = OH_Drawing_PenCreate();\n// 设置画笔抗锯齿\nOH_Drawing_PenSetAntiAlias(pen, true);\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, 0xffff0000);\n// 设置画笔线宽为20\nOH_Drawing_PenSetWidth(pen, 20);\n// 创建图像滤波器实现模糊效果\nOH_Drawing_ImageFilter *imageFilter =\n    OH_Drawing_ImageFilterCreateBlur(20.0f, 20.0f, OH_Drawing_TileMode::CLAMP, nullptr);\n// 创建一个滤波器对象\nOH_Drawing_Filter *filter = OH_Drawing_FilterCreate();\n// 为滤波器对象设置图像滤波器\nOH_Drawing_FilterSetImageFilter(filter, imageFilter);\n// 设置画笔的滤波器效果\nOH_Drawing_PenSetFilter(pen, filter);\n// 在画布上设置画笔，请确保已获取得到画布对象\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建矩形\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value300_, value300_, value900_, value900_);\n// 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除掉画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_ImageFilterDestroy(imageFilter);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_FilterDestroy(filter);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "不设置图像滤波器效果的示意图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置图像滤波器效果的示意图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "蒙版滤波器效果",
      children: "蒙版滤波器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蒙版滤波器的模糊效果仅对透明度和形状边缘进行模糊处理，相对于图像滤波器的模糊效果来说计算成本更低。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["蒙版滤波器可基于画笔或画刷实现，蒙版滤波器的相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-mask-filter-h/capi-drawing-mask-filter-h",
        children: "drawing_mask_filter.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用OH_Drawing_MaskFilterCreateBlur()接口创建想要设置具有模糊效果的蒙版滤波器。接口接受3个参数，分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["blurType：用于指定要应用的模糊类型，详细分类请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-mask-filter-h/capi-drawing-mask-filter-h#oh_drawing_blurtype",
          children: "OH_Drawing_BlurType"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sigma：用于指定要应用的高斯模糊的标准差，标准差必须大于0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "respectCTM：指定模糊的标准差是否会被CTM（coordinate transformation matrix，坐标变换矩阵）修改，默认为true，表示会被对应修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画笔设置蒙版滤波器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nOH_Drawing_Pen *pen = OH_Drawing_PenCreate();\n// 设置画笔抗锯齿\nOH_Drawing_PenSetAntiAlias(pen, true);\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, 0xffff0000);\n// 设置画笔线宽为20\nOH_Drawing_PenSetWidth(pen, 20);\n// 创建蒙版滤波器\nOH_Drawing_MaskFilter *maskFilter = OH_Drawing_MaskFilterCreateBlur(OH_Drawing_BlurType::NORMAL, 20, true);\n// 创建一个滤波器对象\nOH_Drawing_Filter *filter = OH_Drawing_FilterCreate();\n// 为滤波器对象设置蒙版滤波器\nOH_Drawing_FilterSetMaskFilter(filter, maskFilter);\n// 设置画笔的滤波器效果\nOH_Drawing_PenSetFilter(pen, filter);\n// 在画布上设置画笔，请确保已获取得到画布对象\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 创建矩形\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value300_, value300_, value900_, value900_);\n// 绘制矩形\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除掉画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_MaskFilterDestroy(maskFilter);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_FilterDestroy(filter);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "不设置蒙版滤波器效果的示意图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置蒙版滤波器效果的示意图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
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
381901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438697-9d0c18497e2b27082df56492f4ac0fc9.png");

},
261858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438695-9e11c8b314a1144a43658e93e5022a77.png");

},
455969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958652-b7cde60bfa74c1967bc5bbd1df293f28.png");

},
871265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799002-a64168e520aba47071d2da30c0833334.png");

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