"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["482604"], {
728112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_operation_state_canvas_operation_state_c_canvas_operation_state_c_md_779_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-canvas-operation-state-canvas-operation-state-c-canvas-operation-state-c-md-779.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_operation_state_canvas_operation_state_c_canvas_operation_state_c_md_779_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-c/canvas-operation-state-c","title":"画布操作及状态处理（C/C++）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-c/canvas-operation-state-c.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-c","slug":"/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"画布操作及状态处理（C/C++）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-operation-state-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"画布操作及状态处理（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts/"},"next":{"title":"绘制效果概述","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/drawing-effect-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-c/canvas-operation-state-c.md


const frontMatter = {
	title: '画布操作及状态处理（C/C++）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-operation-state-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '画布操作及状态处理（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "裁剪操作",
  "id": "裁剪操作",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发示例",
  "id": "开发示例",
  "level": 3
}, {
  "value": "矩阵变换操作",
  "id": "矩阵变换操作",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "平移",
  "id": "平移",
  "level": 3
}, {
  "value": "旋转",
  "id": "旋转",
  "level": 3
}, {
  "value": "缩放",
  "id": "缩放",
  "level": 3
}, {
  "value": "画布状态保存与恢复",
  "id": "画布状态保存与恢复",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-2",
  "level": 3
}, {
  "value": "开发示例",
  "id": "开发示例-1",
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
        id: "画布操作及状态处理cc",
        children: "画布操作及状态处理（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建或获取Canvas画布之后，可以基于画布进一步地进行图形操作和状态处理。画布操作属于可选操作，开发者可以根据场景需要进行。需要先进行画布操作，再进行后续绘制，只有这样画布操作才有效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的画布操作如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "裁剪。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "矩阵变换，如平移、缩放、旋转等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态保存与恢复。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "裁剪操作",
      children: "裁剪操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "裁剪是图形处理中的常见操作，裁剪针对的是画布本身，可以用于限制绘图区域，只在指定的区域内进行绘制。需要先进行裁剪操作，再进行绘制，才会有对应效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的裁剪操作主要如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "裁剪矩形。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "裁剪圆角矩形。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "裁剪自定义路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "裁剪一个区域。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["裁剪操作常用接口如下表所示，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h",
        children: "drawing_canvas.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "void OH_Drawing_CanvasClipRect (OH_Drawing_Canvas *, const OH_Drawing_Rect *, OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasClipRoundRect (OH_Drawing_Canvas *, const OH_Drawing_RoundRect *, OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个圆角矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasClipPath (OH_Drawing_Canvas *, const OH_Drawing_Path *, OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个自定义路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ErrorCode OH_Drawing_CanvasClipRegion (OH_Drawing_Canvas *canvas, const OH_Drawing_Region *region, OH_Drawing_CanvasClipOp clipOp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处以在画布上裁剪矩形为例给出示例和效果图，其他裁剪操作的逻辑基本相同，注意调用对应的接口并确保要裁剪的数据类型对应准确即可，此处不再一一展开。详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h",
        children: "drawing_canvas.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_Drawing_CanvasClipRect接口裁剪矩形。有以下四个入参："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["第一个参数是画布Canvas，裁剪操作将在这个画布上进行。请确保已创建或获取得到画布Canvas，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
          children: "画布的获取与绘制结果的显示（C/C++）"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "第二个参数是要裁剪的矩形区域。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "第三个参数是裁剪的操作类型，包括交集（INTERSECT）和差集（DIFFERENCE）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "第四个参数表示是否需要进行抗锯齿处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush *brush = OH_Drawing_BrushCreate();\n// 设置画刷填充颜色为蓝色\nOH_Drawing_BrushSetColor(brush, 0xff0000ff);\n// 在画布中设置画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value400_, value400_, value1200_, value1200_);\n// 裁剪矩形区域\nOH_Drawing_CanvasClipRect(canvas, rect, OH_Drawing_CanvasClipOp::INTERSECT, true);\nOH_Drawing_Point *point = OH_Drawing_PointCreate(value600_, value600_);\n// 绘制圆形\nOH_Drawing_CanvasDrawCircle(canvas, point, value600_);\n// 去除画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n// 销毁画刷对象并收回其占的内存\nOH_Drawing_BrushDestroy(brush);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "裁剪后的图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "矩阵变换操作",
      children: "矩阵变换操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩阵变换也是常见的画布操作，是一种坐标系的转换，用于进行图形的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的矩阵变换主要如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "平移"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缩放"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "旋转"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["矩阵变换操作常用接口如下表所示，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-matrix-h/capi-drawing-matrix-h",
        children: "drawing_matrix.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "void OH_Drawing_CanvasTranslate (OH_Drawing_Canvas *, float dx, float dy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于平移画布一段距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasScale (OH_Drawing_Canvas *, float sx, float sy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画布缩放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasRotate (OH_Drawing_Canvas *, float degrees, float px, float py)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画布旋转一定的角度，正数表示顺时针旋转，负数反之。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasSkew (OH_Drawing_Canvas *, float sx, float sy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画布倾斜变换。等同于将当前画布矩阵左乘（premultiply）倾斜变换矩阵，并应用到画布上。其中倾斜变换矩阵为："
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "平移",
      children: "平移"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_Drawing_MatrixCreateTranslation()接口实现画布平移。接口接受2个参数，分别为水平方向和垂直方向的平移量，单位为px。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 设置填充颜色\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画布中的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建在水平和垂直方向分别平移300px的矩阵对象\nOH_Drawing_Matrix *matrix = OH_Drawing_MatrixCreateTranslation(value300_, value300_);\n// 对Canvas进行矩阵变换\nOH_Drawing_CanvasConcatMatrix(canvas, matrix);\n// 绘制矩形\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value200_, value300_, value700_, value600_);\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_MatrixDestroy(matrix);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "平移后的效果图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "旋转",
      children: "旋转"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_Drawing_MatrixCreateRotation()接口实现画布旋转，接口接受3个参数，分别为：旋转角度、旋转中心的x坐标和y坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 设置填充颜色\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画布中的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建旋转的矩阵对象，三个参数分别是旋转角度和旋转中心坐标\nOH_Drawing_Matrix* matrix = OH_Drawing_MatrixCreateRotation(45, value200_, value300_);\n// 对Canvas进行矩阵变换\nOH_Drawing_CanvasConcatMatrix(canvas, matrix);\n// 绘制矩形\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value200_, value300_, value700_, value600_);\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\nOH_Drawing_RectDestroy(rect);\nOH_Drawing_MatrixDestroy(matrix);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "旋转后的效果图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "缩放",
      children: "缩放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_Drawing_MatrixCreateScale()接口进行画布缩放，接口接受4个参数，分别为沿x轴和y轴的缩放因子、旋转中心的x轴和y轴坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷对象\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n// 设置填充颜色\nOH_Drawing_BrushSetColor(brush, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画布中的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n// 创建缩放的矩阵对象，4个参数分别是旋转中心坐标和水平垂直方向的缩放因子\nOH_Drawing_Matrix* matrix = OH_Drawing_MatrixCreateScale(2, 2, value200_, value300_);\n// 对Canvas进行矩阵变换\nOH_Drawing_CanvasConcatMatrix(canvas, matrix);\n// 绘制矩形\nOH_Drawing_Rect *rect = OH_Drawing_RectCreate(value200_, value300_, value700_, value600_);\nOH_Drawing_CanvasDrawRect(canvas, rect);\n// 去除画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\nOH_Drawing_RectDestroy(rect);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "放大后的效果图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画布状态保存与恢复",
      children: "画布状态保存与恢复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存操作用于保存当前画布的状态到一个栈顶，恢复操作用于恢复保存在栈顶的画布状态，恢复操作一旦执行，保存和恢复操作中间一系列平移、缩放、裁剪等操作都会被清除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-2",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画布状态保存与恢复使用的接口如下表所示，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h",
        children: "drawing_canvas.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "void OH_Drawing_CanvasSave (OH_Drawing_Canvas *)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存当前画布的状态（画布矩阵）到一个栈顶。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasRestore (OH_Drawing_Canvas *)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于恢复保存在栈顶的画布状态（画布矩阵）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasRestoreToCount (OH_Drawing_Canvas *, uint32_t saveCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于恢复到指定数量的画布状态（画布矩阵）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发示例-1",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔对象\nOH_Drawing_Pen* pen = OH_Drawing_PenCreate();\n// 设置画笔描边颜色\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MIN, RGBA_MIN));\n// 设置画笔线宽为20\nOH_Drawing_PenSetWidth(pen, 20);\n// 在画布中设置画笔\nOH_Drawing_CanvasAttachPen(canvas, pen);\n// 保存当前画布状态，当前是不存在放大等操作的，这个原始状态会被保存下来\nOH_Drawing_CanvasSave(canvas);\nOH_Drawing_Matrix *matrix = OH_Drawing_MatrixCreateScale(2, 2, 2, 2);\n// 放大画布\nOH_Drawing_CanvasConcatMatrix(canvas, matrix);\nOH_Drawing_Point* point = OH_Drawing_PointCreate(value300_, value300_);\n// 绘制圆形，因为执行过放大操作，所以此时绘制的是大圆\nOH_Drawing_CanvasDrawCircle(canvas, point, value200_);\n// 恢复操作，将恢复到没有放大的原始状态\nOH_Drawing_CanvasRestore(canvas);\n// 绘制圆形，因为已经恢复没有放大的原始状态，所以此时绘制的小圆\nOH_Drawing_CanvasDrawCircle(canvas, point, value200_);\n// 去除画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n// 销毁画笔对象并收回其占的内存\nOH_Drawing_PenDestroy(pen);\nOH_Drawing_PointDestroy(point);\nOH_Drawing_MatrixDestroy(matrix);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573056)/* ["default"] */.A) + "",
        width: "503",
        height: "478"
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
573056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438685-08f0d62ad7ed7776d71462805025c069.png");

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