"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["347903"], {
236022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_drawing_effect_basic_drawing_effect_c_basic_drawing_effect_c_md_cfa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-drawing-effect-basic-drawing-effect-c-basic-drawing-effect-c-md-cfa.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_drawing_effect_basic_drawing_effect_c_basic_drawing_effect_c_md_cfa_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c/basic-drawing-effect-c","title":"基础绘制效果（C/C++）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c/basic-drawing-effect-c.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c","slug":"/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"基础绘制效果（C/C++）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/basic-drawing-effect-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"复杂绘制效果（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-arkts/"},"next":{"title":"复杂绘制效果（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/basic-drawing-effect-c/basic-drawing-effect-c.md


const frontMatter = {
	title: '基础绘制效果（C/C++）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/basic-drawing-effect-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '基础绘制效果（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "填充效果",
  "id": "填充效果",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "描边效果",
  "id": "描边效果",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
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
        id: "基础绘制效果cc",
        children: "基础绘制效果（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行绘制时，可以进行一些基础效果的设置，比如设置填充颜色、设置抗锯齿、设置图形描边、设置图形线条连接样式等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要通过画刷（Brush）设置填充基础效果，通过画笔（Pen）设置描边基础效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "填充效果",
      children: "填充效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过画刷设置基础的填充颜色，还可以通过画刷使用混合模式、着色器效果、滤波器效果等实现更多复杂绘制效果，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c",
        children: "复杂绘制效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用画刷（Brush）设置绘制效果的常用接口如下表所示，详细的使用和参数请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h",
        children: "drawing_brush"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Drawing_Brush* OH_Drawing_BrushCreate (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个画刷对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasAttachBrush (OH_Drawing_Canvas*, const OH_Drawing_Brush*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画刷给画布，画布将使用设置的画刷样式和颜色填充绘制的图形形状。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_BrushSetColor (OH_Drawing_Brush* , uint32_t color)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画刷的颜色属性，颜色属性描述了画刷填充图形时使用的颜色，用一个32位（ARGB）的变量表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_BrushSetAntiAlias (OH_Drawing_Brush* , bool)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画刷的抗锯齿属性，设置为true则画刷在绘制图形时会对图形的边缘像素进行半透明的模糊处理，以使图形边缘更加平滑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDetachBrush (OH_Drawing_Canvas*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于去除画布中的画刷，执行后画布将不使用此前设置的画刷，恢复到默认的填充效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_BrushDestroy (OH_Drawing_Brush*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于销毁画刷对象并回收该对象占有的内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_Drawing_BrushCreate()接口创建画刷Brush对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建画刷\nOH_Drawing_Brush* brush = OH_Drawing_BrushCreate();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用画刷设置基础绘制效果（可选以下的一个或者多个效果）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Drawing_BrushSetColor()接口设置填充颜色。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 设置填充颜色为红色\nuint32_t color = 0xffff0000;\nOH_Drawing_BrushSetColor(brush, color);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "color是一个32位（ARGB）的变量，例如0xffff0000。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Drawing_BrushSetAntiAlias()接口开启抗锯齿效果，以使图形边缘更加平滑。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 开启抗锯齿效果\nOH_Drawing_BrushSetAntiAlias(brush, true);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用OH_Drawing_CanvasAttachBrush()接口给Canvas画布设置画刷。接口接受两个参数，一个是画布对象Canvas，请确保已创建或获取得到画布Canvas，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
            children: "画布的获取与绘制结果的显示（C/C++）"
          }), "；另一个是要设置的画刷对象。画布将会使用设置的画刷样式和颜色等填充图形。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置画布的画刷\nOH_Drawing_CanvasAttachBrush(canvas, brush);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需绘制图元，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview",
            children: "图元绘制"
          }), "一节。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不需要填充效果时，可以使用OH_Drawing_CanvasDetachBrush()去除。入参为画布对象Canvas。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 去除画布中的画刷\nOH_Drawing_CanvasDetachBrush(canvas);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要画刷进行效果填充时，请及时使用OH_Drawing_BrushDestroy()接口销毁Brush对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁各类对象\nOH_Drawing_BrushDestroy(brush);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "描边效果",
      children: "描边效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过画笔设置基础的描边颜色，还可以通过画笔使用混合模式、路径效果、着色器效果、滤波器效果等实现更多复杂绘制效果，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c",
        children: "复杂绘制效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用画笔（Pen）设置绘制效果的常用接口如下表所示，详细的使用和参数请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-pen-h/capi-drawing-pen-h",
        children: "drawing_pen"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Drawing_Pen* OH_Drawing_PenCreate (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个画笔对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasAttachPen (OH_Drawing_Canvas* , const OH_Drawing_Pen* )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画笔给画布，画布将会使用设置画笔的样式和颜色去绘制图形形状的轮廓。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_PenSetColor (OH_Drawing_Pen* , uint32_t color)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画笔的颜色属性，颜色属性描述了画笔绘制图形轮廓时使用的颜色，用一个32位（ARGB）的变量表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_PenSetWidth (OH_Drawing_Pen* , float width)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画笔的线宽。0线宽被视作特殊的极细线宽，在绘制时始终会被绘制为1像素，不随画布的缩放而改变；负数线宽在实际绘制时会被视作0线宽。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_PenSetAntiAlias (OH_Drawing_Pen* , bool )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画笔的抗锯齿属性，设置为true则画笔在绘制图形时会对图形的边缘像素进行半透明的模糊处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_PenSetCap (OH_Drawing_Pen* , OH_Drawing_PenLineCapStyle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画笔线帽样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_PenSetJoin (OH_Drawing_Pen* , OH_Drawing_PenLineJoinStyle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置画笔绘制转角的样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasDetachPen (OH_Drawing_Canvas*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于去除画布中的画笔，执行后画布将不去绘制图形形状的轮廓，恢复到默认的填充效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_PenDestroy (OH_Drawing_Pen*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于销毁画笔对象并回收该对象占有的内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_Drawing_PenCreate()接口创建画笔Pen对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建画笔\nOH_Drawing_Pen* pen = OH_Drawing_PenCreate();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用OH_Drawing_CanvasAttachPen()接口给Canvas画布设置画笔。接口接受两个参数，一个是画布对象Canvas，请确保已创建或获取得到画布Canvas，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
            children: "画布的获取与绘制结果的显示（C/C++）"
          }), "；另一个是要设置的画笔对象。画布将会使用设置的画笔样式和颜色等绘制图形轮廓。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置画布的画笔\nOH_Drawing_CanvasAttachPen(canvas, pen);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用画笔设置具体的描边效果（可选以下的一个或者多个效果）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Drawing_PenSetColor()接口设置画笔颜色，对应为绘制图形轮廓时使用的颜色。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 设置画笔颜色为红色\nuint32_t color = 0xffff0000;\nOH_Drawing_PenSetColor(pen, color);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "color是一个32位（ARGB）的变量，例如0xffff0000。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Drawing_PenSetWidth()接口设置画笔的线宽。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 设置画笔的线宽为50像素\nfloat width = 50.0;\nOH_Drawing_PenSetWidth(pen, width);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "width表示线宽的像素值。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Drawing_PenSetAntiAlias()接口设置画笔抗锯齿，以使图形绘制边缘更平滑。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 设置画笔抗锯齿\nOH_Drawing_PenSetAntiAlias(pen, true);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Drawing_PenSetCap()接口设置画笔线帽样式。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 设置画笔线帽样式\nOH_Drawing_PenSetCap(pen, OH_Drawing_PenLineCapStyle::LINE_ROUND_CAP);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "OH_Drawing_PenLineCapStyle线帽样式可选分类对应如下："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "线帽样式"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "示意图"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "LINE_FLAT_CAP"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "没有线帽样式，线条头尾端点处横切。"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "LINE_SQUARE_CAP"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "线帽的样式为方框，线条的头尾端点处多出一个方框，方框宽度和线段一样宽，高度是线段宽度的一半。"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "LINE_ROUND_CAP"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "线帽的样式为圆弧，线条的头尾端点处多出一个半圆弧，半圆的直径与线段宽度一致。"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Drawing_PenSetJoin()接口设置画笔转角样式。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 设置画笔转角样式\nOH_Drawing_PenSetJoin(pen, OH_Drawing_PenLineJoinStyle::LINE_BEVEL_JOIN);\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "OH_Drawing_PenLineJoinStyle转角样式可选分类对应如下："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "转角样式"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "示意图"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "LINE_MITER_JOIN"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "转角类型为尖角"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "LINE_ROUND_JOIN"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "转角类型为圆头"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "LINE_BEVEL_JOIN"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "转角类型为平头"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                })]
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需绘制图元，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/primitive-drawing-overview",
            children: "图元绘制"
          }), "一节。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当不需要描边效果时，可以使用OH_Drawing_CanvasDetachPen()去除。入参为画布对象Canvas，请确保已创建或获取得到画布Canvas，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c",
            children: "画布的获取与绘制结果的显示（C/C++）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 去除掉画布中的画笔\nOH_Drawing_CanvasDetachPen(canvas);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要画笔进行描边时，请及时使用OH_Drawing_PenDestroy()接口销毁Pen对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁各类对象\nOH_Drawing_PenDestroy(pen);\n"
          })
        }), "\n"]
      }), "\n"]
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