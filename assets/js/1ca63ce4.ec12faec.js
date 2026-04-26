"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["764468"], {
290495(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_operation_state_canvas_operation_state_arkts_canvas_operation_state_arkts_md_1ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-canvas-operation-state-canvas-operation-state-arkts-canvas-operation-state-arkts-md-1ca.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_operation_state_canvas_operation_state_arkts_canvas_operation_state_arkts_md_1ca_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts/canvas-operation-state-arkts","title":"画布操作及状态处理（ArkTS）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts/canvas-operation-state-arkts.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts","slug":"/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"画布操作及状态处理（ArkTS）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-operation-state-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"画布的获取与绘制结果的显示（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c/"},"next":{"title":"画布操作及状态处理（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts/canvas-operation-state-arkts.md


const frontMatter = {
	title: '画布操作及状态处理（ArkTS）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-operation-state-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '画布操作及状态处理（ArkTS）';

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
        id: "画布操作及状态处理arkts",
        children: "画布操作及状态处理（ArkTS）"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多画布操作和具体接口参数使用，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
        children: "drawing.Canvas"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "裁剪操作",
      children: "裁剪操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "裁剪是图形处理中的常见操作，裁剪针对的是画布本身，可以用于限制绘图区域，只在指定的区域进行绘制。需要先进行裁剪操作，再进行绘制，才会有对应效果。"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
        children: "drawing.Canvas"
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
            children: "clipRect(rect: common2D.Rect, clipOp?: ClipOp, doAntiAlias?: boolean): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clipRoundRect(roundRect: RoundRect, clipOp?: ClipOp, doAntiAlias?: boolean): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个圆角矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clipPath(path: Path, clipOp?: ClipOp, doAntiAlias?: boolean): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个自定义路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clipRegion(region: Region, clipOp?: ClipOp): void"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
        children: "drawing.Canvas"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用clipRect()接口裁剪矩形。有以下3个入参："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rect是要裁剪的矩形区域。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["clipOp是裁剪方式，包括交集（INTERSECT）和差集（DIFFERENCE），具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#clipop12",
          children: "ClipOp"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "doAntiAlias表示是否需要抗锯齿处理，如果为true则启用抗锯齿功能，在绘制图形时会对图形的边缘像素进行半透明的模糊处理，如果为false则不开启。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色为蓝色\nbrush.setColor(0xFF, 0x00,  0x00, 0xFF);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 创建矩形对象\nlet rect: common2D.Rect = { left: VALUE_200, top: VALUE_200, right: VALUE_600, bottom: VALUE_600 };\n// 裁剪矩形区域\ncanvas.clipRect(rect);\n// 绘制圆形\ncanvas.drawCircle(VALUE_300, VALUE_300, VALUE_300);\n// 去除填充效果\ncanvas.detachBrush();\n"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
        children: "drawing.Canvas"
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
            children: "translate(dx: number, dy: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于平移画布一段距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scale(sx: number, sy: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画布缩放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotate(degrees: number, sx: number, sy: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画布旋转一定的角度，正数表示顺时针旋转，负数反之。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skew(sx: number, sy: number) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画布倾斜变换，包括水平轴和垂直轴上的偏移。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "平移",
      children: "平移"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用translate()接口实现画布平移。接口接受2个参数，分别为水平方向和垂直方向的平移量，单位为px。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色为红色\nbrush.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 执行平移操作\ncanvas.translate(VALUE_300, VALUE_300);\n// 绘制矩形\ncanvas.drawRect({ left: VALUE_200, top: VALUE_200, right: VALUE_600, bottom: VALUE_600 });\n// 去除填充效果\ncanvas.detachBrush();\n"
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
      children: "使用rotate()接口实现画布旋转，接口接受3个参数，分别为：旋转角度、旋转中心的x坐标和y坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色为红色\nbrush.setColor(0xFF, 0xFF, 0x00, 0x00);\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 顺时针旋转45度\ncanvas.rotate(45, VALUE_200, VALUE_200);\n// 绘制矩形\ncanvas.drawRect({ left: VALUE_200, top: VALUE_200, right: VALUE_600, bottom: VALUE_600 });\n// 去除填充效果\ncanvas.detachBrush();\n"
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
      children: "使用scale()接口进行画布缩放，接口接受2个参数，分别为沿x轴和y轴的缩放因子。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画刷\nlet brush = new drawing.Brush();\n// 设置颜色为红色\nbrush.setColor({ alpha: 0xFF, red: 0xFF, green: 0x00, blue: 0x00 });\n// 设置画刷填充效果\ncanvas.attachBrush(brush);\n// 执行放大操作\ncanvas.scale(2, 2);\n// 绘制矩形\ncanvas.drawRect({ left: VALUE_200, top: VALUE_200, right: VALUE_600, bottom: VALUE_600 });\n// 去除填充效果\ncanvas.detachBrush();\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "缩放后的效果图"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
        children: "canvas"
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
            children: "save(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存当前画布的状态（画布矩阵）到一个栈顶。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restore(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于恢复保存在栈顶的画布状态（画布矩阵）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restoreToCount(count: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于恢复到指定数量的画布状态（画布矩阵）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例和示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建画笔\nlet pen = new drawing.Pen();\n// 设置颜色为红色\npen.setColor({ alpha: 0xFF, red: 0xFF, green: 0x00, blue: 0x00 });\n// 设置描边宽度为20px\npen.setStrokeWidth(20);\n// 设置画笔描边效果\ncanvas.attachPen(pen);\n// 保存操作，当前是不存在放大等操作的，这个原始状态会被保存下来\ncanvas.save();\n// x轴和y轴方向分别放大2倍\ncanvas.scale(2, 2);\n// 绘制圆形，因为执行过放大操作，所以此时绘制的是大圆\ncanvas.drawCircle(VALUE_300, VALUE_300, VALUE_200);\n// 恢复操作，恢复到没有放大的原始状态\ncanvas.restore();\n// 绘制圆形，因为已经恢复到没有放大的原始状态，所以此时绘制的是小圆\ncanvas.drawCircle(VALUE_300, VALUE_300, VALUE_200);\n// 去除描边效果\ncanvas.detachPen();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(773417)/* ["default"] */.A) + "",
        width: "480",
        height: "506"
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
773417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958636-2e9520a50ae5115890dff3bcdf64ae50.jpg");

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