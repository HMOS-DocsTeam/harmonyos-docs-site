"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["646093"], {
952737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_drawing_effect_complex_drawing_effect_arkts_complex_drawing_effect_arkts_md_a02_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-drawing-effect-complex-drawing-effect-arkts-complex-drawing-effect-arkts-md-a02.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_drawing_effect_complex_drawing_effect_arkts_complex_drawing_effect_arkts_md_a02_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts/complex-drawing-effect-arkts","title":"复杂绘制效果（ArkTS）","description":"除了基础填充颜色、描边颜色和一些样式设置的绘制效果外，还支持通过画刷和画笔实现更多复杂的绘制效果。比如：","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts/complex-drawing-effect-arkts.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts","slug":"/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"复杂绘制效果（ArkTS）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-drawing-effect-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基础绘制效果（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-arkts/"},"next":{"title":"基础绘制效果（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts/complex-drawing-effect-arkts.md


const frontMatter = {
	title: '复杂绘制效果（ArkTS）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/complex-drawing-effect-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '复杂绘制效果（ArkTS）';

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
        id: "复杂绘制效果arkts",
        children: "复杂绘制效果（ArkTS）"
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
      children: ["可以使用setBlendMode()接口将混合模式应用于画刷或画笔中，该接口需要接受一个参数BlendMode，即混合模式的类型，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#blendmode",
        children: "BlendMode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawContext, FrameNode, NodeController, RenderNode, UIContext } from '@kit.ArkUI';\nimport { common2D, drawing } from '@kit.ArkGraphics2D';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function drawRenderNode(canvas: drawing.Canvas) {\n  canvas.saveLayer(null, null);\n  const brushCircle = new drawing.Brush();\n  const colorCircle: common2D.Color = {alpha: 255, red: 0, green: 0, blue: 255};\n  brushCircle.setColor(colorCircle);\n  canvas.attachBrush(brushCircle);\n  canvas.drawCircle(500, 500, 200);\n  const brush = new drawing.Brush();\n  //  设置混合模式\n  brush.setBlendMode(drawing.BlendMode.SRC_IN);\n  canvas.saveLayer(null, brush);\n\n  const brushRect = new drawing.Brush();\n  const colorRect: common2D.Color = {alpha: 255, red: 255, green: 255, blue: 0};\n  brushRect.setColor(colorRect);\n  canvas.attachBrush(brushRect);\n  const rect: common2D.Rect = {left:100, top:100, right:500, bottom:500};\n  canvas.drawRect(rect);\n  canvas.restore();\n  canvas.restore();\n  canvas.detachBrush();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348898)/* ["default"] */.A) + "",
        width: "376",
        height: "379"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "路径效果",
      children: "路径效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径效果如虚线效果，只用于画笔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用createDashPathEffect()接口设置路径效果。接口接受2个参数，分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浮点数数组intervals：表示虚线或者点线的间隔。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浮点数phase：表示在intervals数组中的偏移量，即从数组的哪个位置开始应用虚线或点线效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形虚线路径效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nlet pen = new drawing.Pen();\n// 设置线宽\npen.setStrokeWidth(10.0);\n// 设置颜色\npen.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 表示10px的实线，5px的间隔，2px的实线，5px的间隔，以此循环\nlet intervals = [10, 5, 2, 5];\n// 设置虚线路径效果\nlet effect = drawing.PathEffect.createDashPathEffect(intervals, 0);\npen.setPathEffect(effect);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\n// 创建矩形\nlet rect: common2D.Rect = {\n  left: VALUE_200,\n  top: VALUE_200,\n  right: VALUE_1000,\n  bottom: VALUE_700\n};\n// 绘制矩形\ncanvas.drawRect(rect);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置虚线效果后的效果图"
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
      children: "着色器效果基于画刷或画笔实现，可使用setShaderEffect()接口设置画刷或画笔的着色器效果。当前支持不同的着色器效果，如线性渐变着色器效果、径向渐变着色器效果、扇形渐变着色器效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["着色器相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
        children: "ShaderEffect"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线性渐变着色器效果",
      children: "线性渐变着色器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用createLinearGradient()接口创建想要设置的线性渐变着色器效果。接口接受6个参数，分别是开始点、结束点、颜色数组、平铺模式、相对位置数组以及矩阵对象。"
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
          children: "矩阵对象，用于对着色器做矩阵变换，默认为null，表示单位矩阵。"
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
        children: "let startPt: common2D.Point = { x: VALUE_100, y: VALUE_100 };\nlet endPt: common2D.Point = { x: VALUE_900, y: VALUE_900 };\nlet colors = [0xFFFFFF00, 0xFFFF0000, 0xFF0000FF];\n// 创建线性渐变着色器\nlet shaderEffect = drawing.ShaderEffect.createLinearGradient(startPt, endPt, colors, drawing.TileMode.CLAMP);\n// 创建画刷\nlet brush = new drawing.Brush();\n// 设置线性着色器\nbrush.setShaderEffect(shaderEffect);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\nlet rect: common2D.Rect = {\n  left: VALUE_100,\n  top: VALUE_100,\n  right: VALUE_900,\n  bottom: VALUE_900\n};\n// 绘制矩形\ncanvas.drawRect(rect);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(477013)/* ["default"] */.A) + "",
        width: "490",
        height: "451"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "径向渐变着色器效果",
      children: "径向渐变着色器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用createRadialGradient()接口创建想要设置的径向渐变着色器效果。接口接受6个参数，分别是圆心坐标（centerPt）、半径（radius）、颜色数组（colors）、平铺模式（TileMode）、相对位置数组（pos）以及矩阵对象（matrix）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其实现方式与线性渐变着色器类似，不同的是，径向渐变是由圆心开始向外径向渐变的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画刷设置径向渐变着色器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let centerPt: common2D.Point = { x: VALUE_500, y: VALUE_500 };\nlet colors = [0xFFFF0000, 0xFF00FF00, 0xFF0000FF];\n// 创建径向渐变着色器\nlet shaderEffect = drawing.ShaderEffect.createRadialGradient(centerPt, VALUE_600, colors, drawing.TileMode.CLAMP);\n// 创建画刷\nlet brush = new drawing.Brush();\n// 设置径向渐变着色器\nbrush.setShaderEffect(shaderEffect);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\nlet rect: common2D.Rect = {\n  left: VALUE_100,\n  top: VALUE_100,\n  right: VALUE_900,\n  bottom: VALUE_900\n};\n// 绘制矩形\ncanvas.drawRect(rect);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752986)/* ["default"] */.A) + "",
        width: "1251",
        height: "1219"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扇形渐变着色器效果",
      children: "扇形渐变着色器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用createSweepGradient()接口创建想要设置的扇形渐变着色器效果。接口接受7个参数，分别是圆心坐标（centerPt）、颜色数组（colors）、平铺模式（TileMode）、扇形渐变的起始角度（startAngle）、扇形渐变的结束角度（endAngle）、相对位置数组（pos）以及矩阵对象（matrix）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其实现方式也与线性渐变着色器类似，不同的是，扇形渐变是在围绕中心点旋转的过程中渐变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画刷设置扇形渐变着色器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let centerPt: common2D.Point = { x: VALUE_500, y: VALUE_500 };\nlet colors = [0xFF00FFFF, 0xFFFF00FF, 0xFFFFFF00];\n// 创建扇形渐变着色器\nlet shaderEffect = drawing.ShaderEffect.createSweepGradient(centerPt, colors, drawing.TileMode.CLAMP, 0, 360);\n// 创建画刷\nlet brush = new drawing.Brush();\n// 设置扇形渐变着色器\nbrush.setShaderEffect(shaderEffect);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\nlet rect: common2D.Rect = {\n  left: VALUE_100,\n  top: VALUE_100,\n  right: VALUE_900,\n  bottom: VALUE_900\n};\n// 绘制矩形\ncanvas.drawRect(rect);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464819)/* ["default"] */.A) + "",
        width: "1251",
        height: "1204"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滤波器效果",
      children: "滤波器效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滤波器效果可基于画刷或画笔实现。当前支持不同的滤波器效果，比如图像滤波器、颜色滤波器、蒙版滤波器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["滤波器相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-imagefilter/arkts-apis-graphics-drawing-imagefilter",
        children: "ImageFilter"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "颜色滤波器效果",
      children: "颜色滤波器效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["颜色滤波器可基于画笔或画刷实现，颜色滤波器的相关接口和具体参数的说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-colorfilter/arkts-apis-graphics-drawing-colorfilter",
        children: "ColorFilter"
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
      children: "可使用createMatrixColorFilter()接口创建具有5x4颜色矩阵的颜色滤波器。接口接受1个参数，表示为颜色矩阵，它是一个长度为20的浮点数数组。数组格式如下："
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
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色\nbrush.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置颜色矩阵\nlet matrix: number[] = [\n  1, 0, 0, 0, 0,\n  0, 1, 0, 0, 0,\n  0, 0, 0.5, 0.5, 0,\n  0, 0, 0.5, 0.5, 0\n];\n// 创建5x4颜色矩阵的颜色滤波器\nlet filter = drawing.ColorFilter.createMatrixColorFilter(matrix);\n// 设置颜色滤波器\nbrush.setColorFilter(filter);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\nlet rect: common2D.Rect = {\n  left: VALUE_300,\n  top: VALUE_300,\n  right: VALUE_900,\n  bottom: VALUE_900\n};\n// 绘制矩形\ncanvas.drawRect(rect);\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置5x4颜色矩阵的颜色滤波器后的效果图"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-imagefilter/arkts-apis-graphics-drawing-imagefilter",
        children: "ImageFilter"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前只支持两种图像滤波器："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于颜色滤波器的图像滤波器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过createFromColorFilter()接口实现，接口接受2个参数，颜色滤波器colorFilter和图像滤波器imageFilter，即把颜色滤波器的效果叠加到图像滤波器imageFilter上，imageFilter可为空，imageFilter为空则只添加颜色滤波器效果。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "具有模糊效果的图像滤波器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过createBlurImageFilter()接口实现，接口接受4个参数，sigmaX，sigmaY，cTileMode和imageFilter。sigmaX和sigmaY是模糊的标准差，cTileMode是平铺模式，imageFilter是输入的图像滤波器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最终效果即为在输入的图像滤波器imageFilter的基础上进行模糊化处理，即滤波器效果可叠加，imageFilter可为空，imageFilter为空则只添加模糊效果。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画笔添加模糊效果的图像滤波器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置画笔\nlet pen = new drawing.Pen();\n// 设置线宽\npen.setStrokeWidth(10.0);\n// 设置颜色\npen.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 创建模糊效果图像滤波器\nlet filter = drawing.ImageFilter.createBlurImageFilter(20, 20, drawing.TileMode.CLAMP);\n// 设置图像滤波器\npen.setImageFilter(filter);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\nlet rect: common2D.Rect = {\n  left: VALUE_300,\n  top: VALUE_300,\n  right: VALUE_900,\n  bottom: VALUE_900\n};\n// 绘制矩形\ncanvas.drawRect(rect);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置模糊效果后的效果图"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-maskfilter/arkts-apis-graphics-drawing-maskfilter",
        children: "MaskFilter"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用createBlurMaskFilter()接口创建想要设置具有模糊效果的蒙版滤波器。接口接受2个参数，分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["blurType：用于指定要应用的模糊类型，详细分类请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#blurtype12",
          children: "BlurType"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sigma：用于指定要应用的高斯模糊的标准差，标准差必须大于0。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以绘制矩形并使用画笔设置蒙版滤波器效果为例，关键示例和效果示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nlet pen = new drawing.Pen();\n// 设置线宽\npen.setStrokeWidth(10.0);\n// 设置颜色\npen.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 创建模糊效果的蒙版滤波器\nlet filter = drawing.MaskFilter.createBlurMaskFilter(drawing.BlurType.NORMAL, 20);\n// 设置模糊效果\npen.setMaskFilter(filter);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\nlet rect: common2D.Rect = {\n  left: VALUE_300,\n  top: VALUE_300,\n  right: VALUE_900,\n  bottom: VALUE_900\n};\n// 绘制矩形\ncanvas.drawRect(rect);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设置模糊效果后的效果图"
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
752986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798996-49b48478577c3d93ba181b2542c07875.jpg");

},
477013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478645-6ffb2f675b0a813090eca983d957c132.png");

},
464819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438691-6cdebfb386614eff19ba6fdfc19afd8a.jpg");

},
348898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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