"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["912219"], {
253302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_canvas_h_capi_drawing_canvas_h_md_fe7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-drawing-canvas-h-capi-drawing-canvas-h-md-fe7.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_canvas_h_capi_drawing_canvas_h_md_fe7_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h","title":"drawing_canvas.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"drawing_canvas.h","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-canvas-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-drawing-canvas-h"},"sidebar":"ref","previous":{"title":"drawing_brush.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h"},"next":{"title":"drawing_color.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-color-h/capi-drawing-color-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h.md


const frontMatter = {
	title: 'drawing_canvas.h',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-canvas-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-drawing-canvas-h'
};
const contentTitle = 'drawing_canvas.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_Drawing_SrcRectConstraint",
  "id": "oh_drawing_srcrectconstraint",
  "level": 3
}, {
  "value": "OH_Drawing_PointMode",
  "id": "oh_drawing_pointmode",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasClipOp",
  "id": "oh_drawing_canvasclipop",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasShadowFlags",
  "id": "oh_drawing_canvasshadowflags",
  "level": 3
}, {
  "value": "OH_Drawing_VertexMode",
  "id": "oh_drawing_vertexmode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Drawing_CanvasDrawSingleCharacterWithFeatures()",
  "id": "oh_drawing_canvasdrawsinglecharacterwithfeatures",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawPixelMapRectConstraint()",
  "id": "oh_drawing_canvasdrawpixelmaprectconstraint",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawRecordCmdNesting()",
  "id": "oh_drawing_canvasdrawrecordcmdnesting",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasCreate()",
  "id": "oh_drawing_canvascreate",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasCreateWithPixelMap()",
  "id": "oh_drawing_canvascreatewithpixelmap",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDestroy()",
  "id": "oh_drawing_canvasdestroy",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasBind()",
  "id": "oh_drawing_canvasbind",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasAttachPen()",
  "id": "oh_drawing_canvasattachpen",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDetachPen()",
  "id": "oh_drawing_canvasdetachpen",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasAttachBrush()",
  "id": "oh_drawing_canvasattachbrush",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDetachBrush()",
  "id": "oh_drawing_canvasdetachbrush",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasSave()",
  "id": "oh_drawing_canvassave",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasSaveLayer()",
  "id": "oh_drawing_canvassavelayer",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasRestore()",
  "id": "oh_drawing_canvasrestore",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasGetSaveCount()",
  "id": "oh_drawing_canvasgetsavecount",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasRestoreToCount()",
  "id": "oh_drawing_canvasrestoretocount",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawLine()",
  "id": "oh_drawing_canvasdrawline",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawPath()",
  "id": "oh_drawing_canvasdrawpath",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawPixelMapNine()",
  "id": "oh_drawing_canvasdrawpixelmapnine",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawPixelMapRect()",
  "id": "oh_drawing_canvasdrawpixelmaprect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawBackground()",
  "id": "oh_drawing_canvasdrawbackground",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawRegion()",
  "id": "oh_drawing_canvasdrawregion",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawPoint()",
  "id": "oh_drawing_canvasdrawpoint",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawPoints()",
  "id": "oh_drawing_canvasdrawpoints",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawBitmap()",
  "id": "oh_drawing_canvasdrawbitmap",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawBitmapRect()",
  "id": "oh_drawing_canvasdrawbitmaprect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawRect()",
  "id": "oh_drawing_canvasdrawrect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawCircle()",
  "id": "oh_drawing_canvasdrawcircle",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawColor()",
  "id": "oh_drawing_canvasdrawcolor",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawOval()",
  "id": "oh_drawing_canvasdrawoval",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawArc()",
  "id": "oh_drawing_canvasdrawarc",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawArcWithCenter()",
  "id": "oh_drawing_canvasdrawarcwithcenter",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawRoundRect()",
  "id": "oh_drawing_canvasdrawroundrect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawNestedRoundRect()",
  "id": "oh_drawing_canvasdrawnestedroundrect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawSingleCharacter()",
  "id": "oh_drawing_canvasdrawsinglecharacter",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawTextBlob()",
  "id": "oh_drawing_canvasdrawtextblob",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasClipRect()",
  "id": "oh_drawing_canvascliprect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasClipRoundRect()",
  "id": "oh_drawing_canvascliproundrect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasClipPath()",
  "id": "oh_drawing_canvasclippath",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasClipRegion()",
  "id": "oh_drawing_canvasclipregion",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasRotate()",
  "id": "oh_drawing_canvasrotate",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasTranslate()",
  "id": "oh_drawing_canvastranslate",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasScale()",
  "id": "oh_drawing_canvasscale",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasSkew()",
  "id": "oh_drawing_canvasskew",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasGetWidth()",
  "id": "oh_drawing_canvasgetwidth",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasGetHeight()",
  "id": "oh_drawing_canvasgetheight",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasGetLocalClipBounds()",
  "id": "oh_drawing_canvasgetlocalclipbounds",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasGetTotalMatrix()",
  "id": "oh_drawing_canvasgettotalmatrix",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasConcatMatrix()",
  "id": "oh_drawing_canvasconcatmatrix",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawShadow()",
  "id": "oh_drawing_canvasdrawshadow",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasClear()",
  "id": "oh_drawing_canvasclear",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasSetMatrix()",
  "id": "oh_drawing_canvassetmatrix",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasResetMatrix()",
  "id": "oh_drawing_canvasresetmatrix",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawImageRectWithSrc()",
  "id": "oh_drawing_canvasdrawimagerectwithsrc",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawImageRect()",
  "id": "oh_drawing_canvasdrawimagerect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawVertices()",
  "id": "oh_drawing_canvasdrawvertices",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasReadPixels()",
  "id": "oh_drawing_canvasreadpixels",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasReadPixelsToBitmap()",
  "id": "oh_drawing_canvasreadpixelstobitmap",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasIsClipEmpty()",
  "id": "oh_drawing_canvasisclipempty",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasGetImageInfo()",
  "id": "oh_drawing_canvasgetimageinfo",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawRecordCmd()",
  "id": "oh_drawing_canvasdrawrecordcmd",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasQuickRejectPath()",
  "id": "oh_drawing_canvasquickrejectpath",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasQuickRejectRect()",
  "id": "oh_drawing_canvasquickrejectrect",
  "level": 3
}, {
  "value": "OH_Drawing_CanvasDrawPixelMapMesh()",
  "id": "oh_drawing_canvasdrawpixelmapmesh",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "drawing_canvash",
        children: "drawing_canvas.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件中定义了与画布相关的功能函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画布自带一个黑色，开启抗锯齿，不具备其他任何样式的默认画刷，当且仅当画布中主动设置的画刷和画笔都不存在时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkGraphics2D/Drawing/NDKAPIDrawing",
        children: "Drawing API示例(C/C++)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_drawing/drawing_canvas.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_drawing.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing",
        children: "Drawing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_srcrectconstraint",
              children: "OH_Drawing_SrcRectConstraint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_SrcRectConstraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源矩形区域约束类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_pointmode",
              children: "OH_Drawing_PointMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_PointMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制多个点的方式枚举，方式分为离散点、直线或开放多边形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_CanvasClipOp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布裁剪方式的枚举集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasshadowflags",
              children: "OH_Drawing_CanvasShadowFlags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_CanvasShadowFlags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阴影标志枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_vertexmode",
              children: "OH_Drawing_VertexMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_VertexMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定如何解释给定顶点的几何形状的枚举类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvascreate",
              children: "OH_Drawing_Canvas* OH_Drawing_CanvasCreate(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个画布对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvascreatewithpixelmap",
              children: "OH_Drawing_Canvas* OH_Drawing_CanvasCreateWithPixelMap(OH_Drawing_PixelMap* pixelMap)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于将一个像素图对象绑定到画布中，使得画布绘制的内容输出到像素图中（即CPU渲染）。绑定像素图对象后的画布为非录制类型画布。  像素图对象应该在销毁画布对象之后调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-pixel-map-h/capi-drawing-pixel-map-h#oh_drawing_pixelmapdissolve",
              children: "OH_Drawing_PixelMapDissolve"
            }), "解除绑定。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdestroy",
              children: "void OH_Drawing_CanvasDestroy(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于销毁画布对象并回收该对象占有的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasbind",
              children: "void OH_Drawing_CanvasBind(OH_Drawing_Canvas* canvas, OH_Drawing_Bitmap* bitmap)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于将一个位图对象绑定到画布中，使得画布绘制的内容输出到位图中（即CPU渲染）。绑定位图对象后的画布为非录制类型画布。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、bitmap任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasattachpen",
              children: "void OH_Drawing_CanvasAttachPen(OH_Drawing_Canvas* canvas, const OH_Drawing_Pen* pen)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置画笔给画布，画布将会使用设置画笔的样式和颜色去绘制图形形状的轮廓。执行该方法后，若画笔的效果发生改变并且开发者希望该变化生效于接下来的绘制动作，需要再次执行该方法以确保变化生效。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、pen任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdetachpen",
              children: "void OH_Drawing_CanvasDetachPen(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于去除掉画布中的画笔，使用后画布将不去绘制图形形状的轮廓。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasattachbrush",
              children: "void OH_Drawing_CanvasAttachBrush(OH_Drawing_Canvas* canvas, const OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置画刷给画布，画布将会使用设置的画刷样式和颜色去填充绘制的图形形状。执行该方法后，若画刷的效果发生改变并且开发者希望该变化生效于接下来的绘制动作，需要再次执行该方法以确保变化生效。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、brush任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdetachbrush",
              children: "void OH_Drawing_CanvasDetachBrush(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于去除掉画布中的画刷，使用后画布将不使用此前设置的画刷去填充图形形状。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvassave",
              children: "void OH_Drawing_CanvasSave(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于保存当前画布的状态（画布矩阵）到一个栈顶。需要与恢复接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasrestore",
              children: "OH_Drawing_CanvasRestore"
            }), "配合使用。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvassavelayer",
              children: "void OH_Drawing_CanvasSaveLayer(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect, const OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["保存矩阵和裁剪区域，为后续绘制分配位图。调用恢复接口。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasrestore",
              children: "OH_Drawing_CanvasRestore"
            }), "将放弃对矩阵和剪切区域所做的更改，并绘制位图。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasrestore",
              children: "void OH_Drawing_CanvasRestore(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于恢复保存在栈顶的画布状态（画布矩阵）。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasgetsavecount",
              children: "uint32_t OH_Drawing_CanvasGetSaveCount(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于获取栈中保存的画布状态（画布矩阵）的数量。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasrestoretocount",
              children: "void OH_Drawing_CanvasRestoreToCount(OH_Drawing_Canvas* canvas, uint32_t saveCount)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于恢复到指定数量的画布状态（画布矩阵）。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawline",
              children: "void OH_Drawing_CanvasDrawLine(OH_Drawing_Canvas* canvas, float x1, float y1, float x2, float y2)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一条直线段。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawpath",
              children: "void OH_Drawing_CanvasDrawPath(OH_Drawing_Canvas* canvas, const OH_Drawing_Path* path)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个自定义路径。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、path任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawpixelmapnine",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPixelMapNine(OH_Drawing_Canvas* canvas, OH_Drawing_PixelMap* pixelMap,const OH_Drawing_Rect* center, const OH_Drawing_Rect* dst, OH_Drawing_FilterMode mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过绘制两条水平线和两条垂直线将像素图分割成9个部分：四个边，四个角和中心。  若角落的4个区域尺寸不超过目标矩形，则会在不缩放的情况下被绘制在目标矩形，反之则会按比例缩放绘制在目标矩形。  如果还有剩余空间，剩下的5个区域会通过拉伸或压缩来绘制，以便能够完全覆盖目标矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawpixelmaprect",
              children: "void OH_Drawing_CanvasDrawPixelMapRect(OH_Drawing_Canvas* canvas, OH_Drawing_PixelMap* pixelMap,const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst, const OH_Drawing_SamplingOptions* samplingOptions)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于将像素图的指定区域绘制到画布的指定区域。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、pixelMap、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawbackground",
              children: "void OH_Drawing_CanvasDrawBackground(OH_Drawing_Canvas* canvas, const OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个背景，此背景以画刷填充。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、brush任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawregion",
              children: "void OH_Drawing_CanvasDrawRegion(OH_Drawing_Canvas* canvas, const OH_Drawing_Region* region)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一块区域。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、region任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawpoint",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPoint(OH_Drawing_Canvas* canvas, const OH_Drawing_Point2D* point)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画一个点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawpoints",
              children: "void OH_Drawing_CanvasDrawPoints(OH_Drawing_Canvas* canvas, OH_Drawing_PointMode mode,uint32_t count, const OH_Drawing_Point2D* point2D)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画多个点，绘制方式分为绘制单独的点、绘制成线段或绘制成开放多边形。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、point2D任意一个为NULL或者count等于0时返回OH_DRAWING_ERROR_INVALID_PARAMETER；mode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawbitmap",
              children: "void OH_Drawing_CanvasDrawBitmap(OH_Drawing_Canvas* canvas, const OH_Drawing_Bitmap* bitmap, float left, float top)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个位图，位图又称为点阵图像、像素图或栅格图像，是由像素（图片元素）的单个点组成。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、bitmap任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawbitmaprect",
              children: "void OH_Drawing_CanvasDrawBitmapRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Bitmap* bitmap,const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst, const OH_Drawing_SamplingOptions* samplingOptions)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将位图的指定区域绘制到画布的指定区域。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、bitmap、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawrect",
              children: "void OH_Drawing_CanvasDrawRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个矩形。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、OH_Drawing_Rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawcircle",
              children: "void OH_Drawing_CanvasDrawCircle(OH_Drawing_Canvas* canvas, const OH_Drawing_Point* point, float radius)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个圆形。本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。canvas、point任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  radius小于等于0时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawcolor",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawColor(OH_Drawing_Canvas* canvas, uint32_t color,OH_Drawing_BlendMode blendMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于使用指定的颜色及混合模式来填充整个画布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawoval",
              children: "void OH_Drawing_CanvasDrawOval(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个椭圆。本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawarc",
              children: "void OH_Drawing_CanvasDrawArc(OH_Drawing_Canvas* canvas,const OH_Drawing_Rect* rect, float startAngle, float sweepAngle)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个弧。当扫描角度的绝对值大于360度时，本接口绘制的是一个椭圆。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawarcwithcenter",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawArcWithCenter(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect,float startAngle, float sweepAngle, bool useCenter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制一段圆弧。该方法允许指定圆弧的起始角度、扫描角度以及圆弧的起点和终点是否连接圆弧的中心点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawroundrect",
              children: "void OH_Drawing_CanvasDrawRoundRect(OH_Drawing_Canvas* canvas, const OH_Drawing_RoundRect* roundRect)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一个圆角矩形。本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。canvas、roundRect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawnestedroundrect",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawNestedRoundRect(OH_Drawing_Canvas* canvas, const OH_Drawing_RoundRect* outer,const OH_Drawing_RoundRect* inner)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制两个嵌套的圆角矩形，外部矩形边界必须包含内部矩形边界，否则无绘制效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawsinglecharacter",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawSingleCharacter(OH_Drawing_Canvas* canvas, const char* str,const OH_Drawing_Font* font, float x, float y)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于绘制单个字符。当前字型中的字体不支持待绘制字符时，退化到使用系统字体绘制字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawtextblob",
              children: "void OH_Drawing_CanvasDrawTextBlob(OH_Drawing_Canvas* canvas, const OH_Drawing_TextBlob* textBlob, float x, float y)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画一段文字。若构造OH_Drawing_TextBlob的字体不支持待绘制字符，则该部分字符无法绘制。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、textBlob任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvascliprect",
              children: "void OH_Drawing_CanvasClipRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect,OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于裁剪一个矩形。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  clipOp不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvascliproundrect",
              children: "void OH_Drawing_CanvasClipRoundRect(OH_Drawing_Canvas* canvas, const OH_Drawing_RoundRect* roundRect,OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于裁剪一个圆角矩形。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、roundRect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  clipOp不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclippath",
              children: "void OH_Drawing_CanvasClipPath(OH_Drawing_Canvas* canvas, const OH_Drawing_Path* path,OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于裁剪一个自定义路径。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、path任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  clipOp不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipregion",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasClipRegion(OH_Drawing_Canvas* canvas, const OH_Drawing_Region* region,OH_Drawing_CanvasClipOp clipOp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于裁剪一个区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasrotate",
              children: "void OH_Drawing_CanvasRotate(OH_Drawing_Canvas* canvas, float degrees, float px, float py)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画布旋转一定的角度，正数表示顺时针旋转，负数反之。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvastranslate",
              children: "void OH_Drawing_CanvasTranslate(OH_Drawing_Canvas* canvas, float dx, float dy)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于平移画布一段距离。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasscale",
              children: "void OH_Drawing_CanvasScale(OH_Drawing_Canvas* canvas, float sx, float sy)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画布缩放。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasskew",
              children: "void OH_Drawing_CanvasSkew(OH_Drawing_Canvas* canvas, float sx, float sy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于画布倾斜变换。等同于将当前画布矩阵左乘（premultiply）倾斜变换矩阵，并应用到画布上。其中倾斜变换矩阵为："
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasgetwidth",
              children: "int32_t OH_Drawing_CanvasGetWidth(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取画布宽度。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasgetheight",
              children: "int32_t OH_Drawing_CanvasGetHeight(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取画布高度。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasgetlocalclipbounds",
              children: "void OH_Drawing_CanvasGetLocalClipBounds(OH_Drawing_Canvas* canvas, OH_Drawing_Rect* rect)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取画布裁剪区域的边界。该接口不可用于录制类型画布。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasgettotalmatrix",
              children: "void OH_Drawing_CanvasGetTotalMatrix(OH_Drawing_Canvas* canvas, OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取画布3x3矩阵。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、matrix任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasconcatmatrix",
              children: "void OH_Drawing_CanvasConcatMatrix(OH_Drawing_Canvas* canvas, OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["画布现有矩阵左乘以传入矩阵，不影响该接口之前的绘制操作。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、matrix任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawshadow",
              children: "void OH_Drawing_CanvasDrawShadow(OH_Drawing_Canvas* canvas, OH_Drawing_Path* path, OH_Drawing_Point3D planeParams,OH_Drawing_Point3D devLightPos, float lightRadius, uint32_t ambientColor, uint32_t spotColor,OH_Drawing_CanvasShadowFlags flag)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["绘制射灯类型阴影，使用路径描述环境光阴影的轮廓。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、path任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  flag不在枚举范围内返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclear",
              children: "void OH_Drawing_CanvasClear(OH_Drawing_Canvas* canvas, uint32_t color)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于使用指定颜色去清空画布。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvassetmatrix",
              children: "void OH_Drawing_CanvasSetMatrix(OH_Drawing_Canvas* canvas, OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置画布的矩阵状态。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、matrix任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasresetmatrix",
              children: "void OH_Drawing_CanvasResetMatrix(OH_Drawing_Canvas* canvas)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重置当前画布的矩阵为单位矩阵。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawimagerectwithsrc",
              children: "void OH_Drawing_CanvasDrawImageRectWithSrc(OH_Drawing_Canvas* canvas, const OH_Drawing_Image* image,const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst, const OH_Drawing_SamplingOptions* samplingOptions,OH_Drawing_SrcRectConstraint srcRectConstraint)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将图片绘制到画布的指定区域上，源矩形选定的区域会缩放平移到目标矩形。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、image、src、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawimagerect",
              children: "void OH_Drawing_CanvasDrawImageRect(OH_Drawing_Canvas* canvas, OH_Drawing_Image* image,OH_Drawing_Rect* rect, OH_Drawing_SamplingOptions* samplingOptions)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将图片绘制到画布的指定区域上。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、image、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawvertices",
              children: "void OH_Drawing_CanvasDrawVertices(OH_Drawing_Canvas* canvas, OH_Drawing_VertexMode vertexMmode,int32_t vertexCount, const OH_Drawing_Point2D* positions, const OH_Drawing_Point2D* texs,const uint32_t* colors, int32_t indexCount, const uint16_t* indices, OH_Drawing_BlendMode mode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于画顶点数组描述的三角网格。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas或positions为NULL、vertexCount值小于3、indexCount值小于3且不为0，存在以上任意一种情况时设置错误码为OH_DRAWING_ERROR_INVALID_PARAMETER；  vertexMmode、mode任意一个不在枚举范围内时设置错误码为OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasreadpixels",
              children: "bool OH_Drawing_CanvasReadPixels(OH_Drawing_Canvas* canvas, OH_Drawing_Image_Info* imageInfo,void* dstPixels, uint32_t dstRowBytes, int32_t srcX, int32_t srcY)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从画布中拷贝像素数据到指定地址。该接口不可用于录制类型画布。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、imageInfo、dstPixels任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasreadpixelstobitmap",
              children: "bool OH_Drawing_CanvasReadPixelsToBitmap(OH_Drawing_Canvas* canvas,OH_Drawing_Bitmap* bitmap, int32_t srcX, int32_t srcY)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从画布拷贝像素数据到位图中。该接口不可用于录制类型画布。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  canvas、bitmap任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasisclipempty",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasIsClipEmpty(OH_Drawing_Canvas* canvas, bool* isClipEmpty)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于判断裁剪后可绘制区域是否为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasgetimageinfo",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasGetImageInfo(OH_Drawing_Canvas* canvas, OH_Drawing_Image_Info* imageInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取画布的图像信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawrecordcmd",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawRecordCmd(OH_Drawing_Canvas* canvas, OH_Drawing_RecordCmd* recordCmd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于绘制录制指令对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawrecordcmdnesting",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawRecordCmdNesting(OH_Drawing_Canvas* canvas, OH_Drawing_RecordCmd* recordCmd)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于绘制录制指令对象，支持嵌套。  本接口支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h#oh_drawing_recordcmdutilsbeginrecording",
              children: "OH_Drawing_RecordCmdUtilsBeginRecording"
            }), "接口生成的画布对象作为入参，嵌套调用。不建议多层嵌套，会影响性能。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasquickrejectpath",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasQuickRejectPath(OH_Drawing_Canvas* canvas, const OH_Drawing_Path* path,bool* quickReject)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断路径与画布区域是否不相交。画布区域包含边界。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasquickrejectrect",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasQuickRejectRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect,bool* quickReject)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断矩形和画布区域是否不相交。画布区域包含边界。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawpixelmaprectconstraint",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPixelMapRectConstraint(OH_Drawing_Canvas* canvas,OH_Drawing_PixelMap* pixelMap, const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst,const OH_Drawing_SamplingOptions* samplingOptions, OH_Drawing_SrcRectConstraint constraint)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于将像素图的指定区域绘制到画布的指定区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawsinglecharacterwithfeatures",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawSingleCharacterWithFeatures(OH_Drawing_Canvas* canvas, const char* str,const OH_Drawing_Font* font, float x, float y, OH_Drawing_FontFeatures* fontFeatures)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制单个字符，字符带有字体特征。当前字型中的字体不支持待绘制字符时，退化到使用系统字体绘制字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasdrawpixelmapmesh",
              children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPixelMapMesh(OH_Drawing_Canvas* cCanvas, OH_Drawing_PixelMap* pixelMap, uint32_t meshWidth, uint32_t meshHeight, const float* vertices, uint32_t verticesSize, uint32_t vertOffset, const uint32_t* colors, uint32_t colorsSize, uint32_t colorOffset)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在网格上绘制像素图，网格均匀分布在像素图上。（只支持brush，使用pen没有绘制效果。）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_srcrectconstraint",
      children: "OH_Drawing_SrcRectConstraint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_SrcRectConstraint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源矩形区域约束类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRICT_SRC_RECT_CONSTRAINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "严格约束，源矩形区域必须完全包含在图像中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAST_SRC_RECT_CONSTRAINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快速约束，源矩形区域可以部分位于图像之外。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_pointmode",
      children: "OH_Drawing_PointMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_PointMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制多个点的方式枚举，方式分为离散点、直线或开放多边形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POINT_MODE_POINTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分别绘制每个点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POINT_MODE_LINES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将每两个点绘制为线段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POINT_MODE_POLYGON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将点阵列绘制为开放多边形。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasclipop",
      children: "OH_Drawing_CanvasClipOp"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_CanvasClipOp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画布裁剪方式的枚举集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DIFFERENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定区域裁剪（取差集）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTERSECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定区域保留（取交集）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasshadowflags",
      children: "OH_Drawing_CanvasShadowFlags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_CanvasShadowFlags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阴影标志枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHADOW_FLAGS_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无阴影标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHADOW_FLAGS_TRANSPARENT_OCCLUDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遮挡物对象不透明标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHADOW_FLAGS_GEOMETRIC_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不分析阴影标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHADOW_FLAGS_ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能以上所有阴影标志。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_vertexmode",
      children: "OH_Drawing_VertexMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_VertexMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于指定如何解释给定顶点的几何形状的枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERTEX_MODE_TRIANGLES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每三个顶点表示一个三角形，如果顶点数不是3的倍数，则多余的顶点会被忽略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERTEX_MODE_TRIANGLES_STRIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相邻三个顶点表示一个三角形，每个新的顶点将与前两个顶点组成一个新的三角形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERTEX_MODE_TRIANGLE_FAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个顶点作为中心点，后续的每个顶点都与前一个顶点和中心点组成一个三角形。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawsinglecharacterwithfeatures",
      children: "OH_Drawing_CanvasDrawSingleCharacterWithFeatures()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawSingleCharacterWithFeatures(OH_Drawing_Canvas* canvas, const char* str, const OH_Drawing_Font* font, float x, float y, OH_Drawing_FontFeatures* fontFeatures)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制单个字符，字符带有字体特征。当前字型中的字体不支持待绘制字符时，退化到使用系统字体绘制字符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* str"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待绘制的单个字符。可以传入字符串，但只会以UTF-8编码解析并绘制字符串中的首个字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-font/capi-drawing-oh-drawing-font",
              children: "const OH_Drawing_Font"
            }), "* font"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向字型对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-font/capi-drawing-oh-drawing-font",
              children: "OH_Drawing_Font"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符对象基线左端点（靠近字符左下角）的横坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符对象基线左端点（靠近字符左下角）的纵坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfeatures/capi-drawing-oh-drawing-fontfeatures",
              children: "OH_Drawing_FontFeatures"
            }), "* fontFeatures"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向字体特征容器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfeatures/capi-drawing-oh-drawing-fontfeatures",
              children: "OH_Drawing_FontFeatures"
            }), "的指针。容器中未加入任何字体特征时使用TTF(TrueType Font)文件中预设的字体特征。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行结果。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas、str、font或者fontFeatures任意一个为NULL或者str的长度为0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawpixelmaprectconstraint",
      children: "OH_Drawing_CanvasDrawPixelMapRectConstraint()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPixelMapRectConstraint(OH_Drawing_Canvas* canvas,OH_Drawing_PixelMap* pixelMap, const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst, const OH_Drawing_SamplingOptions* samplingOptions, OH_Drawing_SrcRectConstraint constraint)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将像素图的指定区域绘制到画布的指定区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向像素图", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "const OH_Drawing_Rect"
            }), "* src"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素图指定矩形区域，为NULL将指定整个像素图区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "const OH_Drawing_Rect"
            }), "* dst"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标画布指定矩形区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "const OH_Drawing_SamplingOptions"
            }), "* samplingOptions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向采样选项对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "的指针，为NULL将使用默认采样选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_srcrectconstraint",
              children: "OH_Drawing_SrcRectConstraint"
            }), " constraint"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["约束类型，支持可选的具体类型可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_srcrectconstraint",
              children: "OH_Drawing_SrcRectConstraint"
            }), "枚举。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行结果。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas、pixelMap或dst为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawrecordcmdnesting",
      children: "OH_Drawing_CanvasDrawRecordCmdNesting()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawRecordCmdNesting(OH_Drawing_Canvas* canvas, OH_Drawing_RecordCmd* recordCmd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于绘制录制指令对象，支持嵌套。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h#oh_drawing_recordcmdutilsbeginrecording",
        children: "OH_Drawing_RecordCmdUtilsBeginRecording"
      }), "接口生成的画布对象作为入参，嵌套调用。不建议多层嵌套，会影响性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Canvas* canvas"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针，仅支持录制类型画布。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_RecordCmd* recordCmd"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向录制指令对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd",
              children: "OH_Drawing_RecordCmd"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行操作码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas或者recordCmd为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvascreate",
      children: "OH_Drawing_CanvasCreate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_Canvas* OH_Drawing_CanvasCreate(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个画布对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数会返回一个指针，指针指向创建的画布对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvascreatewithpixelmap",
      children: "OH_Drawing_CanvasCreateWithPixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_Canvas* OH_Drawing_CanvasCreateWithPixelMap(OH_Drawing_PixelMap* pixelMap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将一个像素图对象绑定到画布中，使得画布绘制的内容输出到像素图中（即CPU渲染）。绑定像素图对象后的画布为非录制类型画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["像素图对象应该在销毁画布对象之后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-pixel-map-h/capi-drawing-pixel-map-h#oh_drawing_pixelmapdissolve",
        children: "OH_Drawing_PixelMapDissolve"
      }), "解除绑定。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向像素图", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "，如果对象返回为NULL，则创建失败，原因可能是可用内存不足或者像素图对象为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdestroy",
      children: "OH_Drawing_CanvasDestroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDestroy(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于销毁画布对象并回收该对象占有的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasbind",
      children: "OH_Drawing_CanvasBind()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasBind(OH_Drawing_Canvas* canvas, OH_Drawing_Bitmap* bitmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将一个位图对象绑定到画布中，使得画布绘制的内容输出到位图中（即CPU渲染）。绑定位图对象后的画布为非录制类型画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、bitmap任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-bitmap/capi-drawing-oh-drawing-bitmap",
              children: "OH_Drawing_Bitmap"
            }), "* bitmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向位图对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasattachpen",
      children: "OH_Drawing_CanvasAttachPen()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasAttachPen(OH_Drawing_Canvas* canvas, const OH_Drawing_Pen* pen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置画笔给画布，画布将会使用设置画笔的样式和颜色去绘制图形形状的轮廓。执行该方法后，若画笔的效果发生改变并且开发者希望该变化生效于接下来的绘制动作，需要再次执行该方法以确保变化生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、pen任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pen/capi-drawing-oh-drawing-pen",
              children: "OH_Drawing_Pen"
            }), "* pen"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画笔对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdetachpen",
      children: "OH_Drawing_CanvasDetachPen()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDetachPen(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于去除掉画布中的画笔，使用后画布将不去绘制图形形状的轮廓。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasattachbrush",
      children: "OH_Drawing_CanvasAttachBrush()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasAttachBrush(OH_Drawing_Canvas* canvas, const OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置画刷给画布，画布将会使用设置的画刷样式和颜色去填充绘制的图形形状。执行该方法后，若画刷的效果发生改变并且开发者希望该变化生效于接下来的绘制动作，需要再次执行该方法以确保变化生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、brush任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdetachbrush",
      children: "OH_Drawing_CanvasDetachBrush()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDetachBrush(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于去除掉画布中的画刷，使用后画布将不使用此前设置的画刷去填充图形形状。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvassave",
      children: "OH_Drawing_CanvasSave()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasSave(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于保存当前画布的状态（画布矩阵）到一个栈顶。需要与恢复接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasrestore",
        children: "OH_Drawing_CanvasRestore"
      }), "配合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvassavelayer",
      children: "OH_Drawing_CanvasSaveLayer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasSaveLayer(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect, const OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存矩阵和裁剪区域，为后续绘制分配位图。调用恢复接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasrestore",
        children: "OH_Drawing_CanvasRestore"
      }), "将放弃对矩阵和剪切区域所做的更改，并绘制位图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针，用于限制图层大小，为NULL表示无限制。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画刷对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "的指针，绘制位图时会应用画刷对象的透明度，滤波器效果，混合模式，为NULL表示不应用任何效果。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasrestore",
      children: "OH_Drawing_CanvasRestore()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasRestore(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于恢复保存在栈顶的画布状态（画布矩阵）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasgetsavecount",
      children: "OH_Drawing_CanvasGetSaveCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_Drawing_CanvasGetSaveCount(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取栈中保存的画布状态（画布矩阵）的数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数会返回一个32位的值描述画布状态（画布矩阵）的数量，画布初始状态数量为1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasrestoretocount",
      children: "OH_Drawing_CanvasRestoreToCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasRestoreToCount(OH_Drawing_Canvas* canvas, uint32_t saveCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于恢复到指定数量的画布状态（画布矩阵）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t saveCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要恢复的画布状态深度。小于等于1时，恢复为初始状态；大于已保存的画布状态数量时，不执行任何操作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawline",
      children: "OH_Drawing_CanvasDrawLine()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawLine(OH_Drawing_Canvas* canvas, float x1, float y1, float x2, float y2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一条直线段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段起始点的横坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段起始点的纵坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段结束点的横坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段结束点的纵坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawpath",
      children: "OH_Drawing_CanvasDrawPath()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawPath(OH_Drawing_Canvas* canvas, const OH_Drawing_Path* path)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一个自定义路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、path任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-path/capi-drawing-oh-drawing-path",
              children: "OH_Drawing_Path"
            }), "* path"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向路径对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawpixelmapnine",
      children: "OH_Drawing_CanvasDrawPixelMapNine()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPixelMapNine(OH_Drawing_Canvas* canvas, OH_Drawing_PixelMap* pixelMap,const OH_Drawing_Rect* center, const OH_Drawing_Rect* dst, OH_Drawing_FilterMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过绘制两条水平线和两条垂直线将像素图分割成9个部分：四个边，四个角和中心。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若角落的4个区域尺寸不超过目标矩形，则会在不缩放的情况下被绘制在目标矩形，反之则会按比例缩放绘制在目标矩形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果还有剩余空间，剩下的5个区域会通过拉伸或压缩来绘制，以便能够完全覆盖目标矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向像素图", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* center"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针，表示分割像素图的中心矩形。矩形四条边所在的直线将像素图分成了9个部分。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* dst"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针，表示画布上的目标区域。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-sampling-options-h/capi-drawing-sampling-options-h#oh_drawing_filtermode",
              children: "OH_Drawing_FilterMode"
            }), " mode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["过滤模式枚举", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-sampling-options-h/capi-drawing-sampling-options-h#oh_drawing_filtermode",
              children: "OH_Drawing_FilterMode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas、pixelMap或dst为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawpixelmaprect",
      children: "OH_Drawing_CanvasDrawPixelMapRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawPixelMapRect(OH_Drawing_Canvas* canvas, OH_Drawing_PixelMap* pixelMap,const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst, const OH_Drawing_SamplingOptions* samplingOptions)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将像素图的指定区域绘制到画布的指定区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、pixelMap、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向像素图", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* src"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素图指定矩形区域，为NULL将指定整个像素图区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* dst"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标画布指定矩形区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "* samplingOptions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向采样选项对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "的指针，为NULL将使用默认采样选项。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawbackground",
      children: "OH_Drawing_CanvasDrawBackground()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawBackground(OH_Drawing_Canvas* canvas, const OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一个背景，此背景以画刷填充。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、brush任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawregion",
      children: "OH_Drawing_CanvasDrawRegion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawRegion(OH_Drawing_Canvas* canvas, const OH_Drawing_Region* region)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一块区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、region任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-region/capi-drawing-oh-drawing-region",
              children: "OH_Drawing_Region"
            }), "* region"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向区域对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawpoint",
      children: "OH_Drawing_CanvasDrawPoint()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPoint(OH_Drawing_Canvas* canvas, const OH_Drawing_Point2D* point)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一个点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* point"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向点对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas或者point为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawpoints",
      children: "OH_Drawing_CanvasDrawPoints()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawPoints(OH_Drawing_Canvas* canvas, OH_Drawing_PointMode mode,uint32_t count, const OH_Drawing_Point2D* point2D)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画多个点，绘制方式分为绘制单独的点、绘制成线段或绘制成开放多边形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、point2D任意一个为NULL或者count等于0时返回OH_DRAWING_ERROR_INVALID_PARAMETER；mode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_pointmode",
              children: "OH_Drawing_PointMode"
            }), " mode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["绘制多个点的方式，支持方式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_pointmode",
              children: "OH_Drawing_PointMode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点的数量，即点数组中点的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* point2D"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向多个点的数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawbitmap",
      children: "OH_Drawing_CanvasDrawBitmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawBitmap(OH_Drawing_Canvas* canvas, const OH_Drawing_Bitmap* bitmap, float left, float top)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一个位图，位图又称为点阵图像、像素图或栅格图像，是由像素（图片元素）的单个点组成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、bitmap任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-bitmap/capi-drawing-oh-drawing-bitmap",
              children: "OH_Drawing_Bitmap"
            }), "* bitmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向位图对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位图对象左上角的横坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位图对象左上角的纵坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawbitmaprect",
      children: "OH_Drawing_CanvasDrawBitmapRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawBitmapRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Bitmap* bitmap,const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst, const OH_Drawing_SamplingOptions* samplingOptions)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将位图的指定区域绘制到画布的指定区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、bitmap、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-bitmap/capi-drawing-oh-drawing-bitmap",
              children: "OH_Drawing_Bitmap"
            }), "* bitmap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向位图对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-bitmap/capi-drawing-oh-drawing-bitmap",
              children: "OH_Drawing_Bitmap"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* src"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源位图指定矩形区域，为NULL将指定整个源位图区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* dst"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标画布指定矩形区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "* samplingOptions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向采样选项对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "的指针，为NULL将使用默认采样选项。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawrect",
      children: "OH_Drawing_CanvasDrawRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一个矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、OH_Drawing_Rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向矩形对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawcircle",
      children: "OH_Drawing_CanvasDrawCircle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawCircle(OH_Drawing_Canvas* canvas, const OH_Drawing_Point* point, float radius)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于画一个圆形。本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。canvas、point任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "radius小于等于0时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point/capi-drawing-oh-drawing-point",
              children: "OH_Drawing_Point"
            }), "* point"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向坐标点对象的指针，表示圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形的半径，小于等于0时无效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawcolor",
      children: "OH_Drawing_CanvasDrawColor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawColor(OH_Drawing_Canvas* canvas, uint32_t color,OH_Drawing_BlendMode blendMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于使用指定的颜色及混合模式来填充整个画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指定的颜色，用一个32位（ARGB）的变量表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            }), " blendMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指定的混合模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas为空。  返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE，表示blendMode不在枚举范围内。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawoval",
      children: "OH_Drawing_CanvasDrawOval()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawOval(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于画一个椭圆。本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向矩形对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawarc",
      children: "OH_Drawing_CanvasDrawArc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawArc(OH_Drawing_Canvas* canvas,const OH_Drawing_Rect* rect, float startAngle, float sweepAngle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一个弧。当扫描角度的绝对值大于360度时，本接口绘制的是一个椭圆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向矩形对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧的起始角度，0度时起始点位于椭圆的右端点，正数时以顺时针方向放置起始点，负数时以逆时针方向放置起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float sweepAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧的扫描角度，正数时顺时针扫描，负数时逆时针扫描。它的有效范围在-360度到360度之间，当绝对值大于360度时，该函数绘制的是一个椭圆。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawarcwithcenter",
      children: "OH_Drawing_CanvasDrawArcWithCenter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawArcWithCenter(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect,float startAngle, float sweepAngle, bool useCenter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制一段圆弧。该方法允许指定圆弧的起始角度、扫描角度以及圆弧的起点和终点是否连接圆弧的中心点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧的起始角度，单位为度，该参数为浮点数。0度时起始点位于椭圆的右端点，为正数时以顺时针方向放置起始点，为负数时以逆时针方向放置起始点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float sweepAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧的扫描角度，单位为度，该参数为浮点数。为正数时顺时针扫描，为负数时逆时针扫描。扫描角度可以超过360度，将绘制一个完整的椭圆。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool useCenter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示绘制时弧形的起点和终点是否连接弧形的中心点。true表示连接，false表示不连接。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas或者rect为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawroundrect",
      children: "OH_Drawing_CanvasDrawRoundRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawRoundRect(OH_Drawing_Canvas* canvas, const OH_Drawing_RoundRect* roundRect)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于画一个圆角矩形。本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。canvas、roundRect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-roundrect/capi-drawing-oh-drawing-roundrect",
              children: "OH_Drawing_RoundRect"
            }), "* roundRect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向圆角矩形对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawnestedroundrect",
      children: "OH_Drawing_CanvasDrawNestedRoundRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawNestedRoundRect(OH_Drawing_Canvas* canvas, const OH_Drawing_RoundRect* outer,const OH_Drawing_RoundRect* inner)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制两个嵌套的圆角矩形，外部矩形边界必须包含内部矩形边界，否则无绘制效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-roundrect/capi-drawing-oh-drawing-roundrect",
              children: "OH_Drawing_RoundRect"
            }), "* outer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向圆角矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-roundrect/capi-drawing-oh-drawing-roundrect",
              children: "OH_Drawing_RoundRect"
            }), "的指针，表示外部圆角矩形边界。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-roundrect/capi-drawing-oh-drawing-roundrect",
              children: "OH_Drawing_RoundRect"
            }), "* inner"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向圆角矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-roundrect/capi-drawing-oh-drawing-roundrect",
              children: "OH_Drawing_RoundRect"
            }), "的指针，表示内部圆角矩形边界。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas、outer或者inner为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawsinglecharacter",
      children: "OH_Drawing_CanvasDrawSingleCharacter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawSingleCharacter(OH_Drawing_Canvas* canvas, const char* str,const OH_Drawing_Font* font, float x, float y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于绘制单个字符。当前字型中的字体不支持待绘制字符时，退化到使用系统字体绘制字符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* str"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待绘制的单个字符。可以传入字符串，但只会以UTF-8编码解析并绘制字符串中的首个字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-font/capi-drawing-oh-drawing-font",
              children: "OH_Drawing_Font"
            }), "* font"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向字型对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-font/capi-drawing-oh-drawing-font",
              children: "OH_Drawing_Font"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符对象基线左端点（靠近字符左下角）的横坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符对象基线左端点（靠近字符左下角）的纵坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas、str、font任意一个为NULL或者str的长度为0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawtextblob",
      children: "OH_Drawing_CanvasDrawTextBlob()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawTextBlob(OH_Drawing_Canvas* canvas, const OH_Drawing_TextBlob* textBlob, float x, float y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画一段文字。若构造OH_Drawing_TextBlob的字体不支持待绘制字符，则该部分字符无法绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、textBlob任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textblob/capi-drawing-oh-drawing-textblob",
              children: "OH_Drawing_TextBlob"
            }), "* textBlob"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向文本对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本对象基线左端点（靠近文本左下角）的横坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本对象基线左端点（靠近文本左下角）的纵坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvascliprect",
      children: "OH_Drawing_CanvasClipRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasClipRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect,OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪一个矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clipOp不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向矩形对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), " clipOp"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["裁剪方式。支持可选的具体裁剪方式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool doAntiAlias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为true则做抗锯齿处理，值为false不做抗锯齿处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvascliproundrect",
      children: "OH_Drawing_CanvasClipRoundRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasClipRoundRect(OH_Drawing_Canvas* canvas, const OH_Drawing_RoundRect* roundRect,OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪一个圆角矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、roundRect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clipOp不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-roundrect/capi-drawing-oh-drawing-roundrect",
              children: "OH_Drawing_RoundRect"
            }), "* roundRect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向圆角矩形对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), " clipOp"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["裁剪方式。支持可选的具体裁剪方式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool doAntiAlias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否需要做抗锯齿处理，值为true时为需要，为false时为不需要。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasclippath",
      children: "OH_Drawing_CanvasClipPath()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasClipPath(OH_Drawing_Canvas* canvas, const OH_Drawing_Path* path,OH_Drawing_CanvasClipOp clipOp, bool doAntiAlias)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪一个自定义路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、path任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clipOp不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-path/capi-drawing-oh-drawing-path",
              children: "OH_Drawing_Path"
            }), "* path"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向路径对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), " clipOp"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["裁剪方式。支持可选的具体裁剪方式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool doAntiAlias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "真为抗锯齿，假则不做抗锯齿处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasclipregion",
      children: "OH_Drawing_CanvasClipRegion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasClipRegion(OH_Drawing_Canvas* canvas, const OH_Drawing_Region* region,OH_Drawing_CanvasClipOp clipOp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪一个区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-region/capi-drawing-oh-drawing-region",
              children: "OH_Drawing_Region"
            }), "* region"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向区域对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-region/capi-drawing-oh-drawing-region",
              children: "OH_Drawing_Region"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), " clipOp"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示裁剪类型。支持可选的具体裁剪方式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasclipop",
              children: "OH_Drawing_CanvasClipOp"
            }), "枚举。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas或者region为空。  返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE，表示clipOp不在枚举范围内。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasrotate",
      children: "OH_Drawing_CanvasRotate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasRotate(OH_Drawing_Canvas* canvas, float degrees, float px, float py)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画布旋转一定的角度，正数表示顺时针旋转，负数反之。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float degrees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心的横坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心的纵坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvastranslate",
      children: "OH_Drawing_CanvasTranslate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasTranslate(OH_Drawing_Canvas* canvas, float dx, float dy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于平移画布一段距离。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴方向的移动距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向的移动距离。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasscale",
      children: "OH_Drawing_CanvasScale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasScale(OH_Drawing_Canvas* canvas, float sx, float sy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画布缩放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float sx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴方向的缩放比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向的缩放比例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasskew",
      children: "OH_Drawing_CanvasSkew()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasSkew(OH_Drawing_Canvas* canvas, float sx, float sy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画布倾斜变换。等同于将当前画布矩阵左乘（premultiply）倾斜变换矩阵，并应用到画布上。其中倾斜变换矩阵为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "|1 sx 0|"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "|sy 1 0|"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "|0 0 1|。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float sx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沿x轴的倾斜量。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沿y轴的倾斜量。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasgetwidth",
      children: "OH_Drawing_CanvasGetWidth()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Drawing_CanvasGetWidth(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画布宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回画布宽度，单位为像素。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasgetheight",
      children: "OH_Drawing_CanvasGetHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Drawing_CanvasGetHeight(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画布高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回画布高度，单位为像素。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasgetlocalclipbounds",
      children: "OH_Drawing_CanvasGetLocalClipBounds()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasGetLocalClipBounds(OH_Drawing_Canvas* canvas, OH_Drawing_Rect* rect)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画布裁剪区域的边界。该接口不可用于录制类型画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、rect任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针，开发者可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-rect-h/capi-drawing-rect-h#oh_drawing_rectcreate",
              children: "OH_Drawing_RectCreate"
            }), "接口创建。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasgettotalmatrix",
      children: "OH_Drawing_CanvasGetTotalMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasGetTotalMatrix(OH_Drawing_Canvas* canvas, OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画布3x3矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、matrix任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩阵对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "的指针，开发者可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-matrix-h/capi-drawing-matrix-h#oh_drawing_matrixcreate",
              children: "OH_Drawing_MatrixCreate"
            }), "接口创建。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasconcatmatrix",
      children: "OH_Drawing_CanvasConcatMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasConcatMatrix(OH_Drawing_Canvas* canvas, OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画布现有矩阵左乘以传入矩阵，不影响该接口之前的绘制操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、matrix任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩阵对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawshadow",
      children: "OH_Drawing_CanvasDrawShadow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawShadow(OH_Drawing_Canvas* canvas, OH_Drawing_Path* path, OH_Drawing_Point3D planeParams,OH_Drawing_Point3D devLightPos, float lightRadius, uint32_t ambientColor, uint32_t spotColor,OH_Drawing_CanvasShadowFlags flag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制射灯类型阴影，使用路径描述环境光阴影的轮廓。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、path任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "flag不在枚举范围内返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-path/capi-drawing-oh-drawing-path",
              children: "OH_Drawing_Path"
            }), "* path"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向路径对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-path/capi-drawing-oh-drawing-path",
              children: "OH_Drawing_Path"
            }), "的指针，用于生成阴影。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point3d/capi-drawing-oh-drawing-point3d",
              children: "OH_Drawing_Point3D"
            }), " planeParams"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示遮挡物相对于画布在Z轴上的偏移量，其值取决于x与y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point3d/capi-drawing-oh-drawing-point3d",
              children: "OH_Drawing_Point3D"
            }), " devLightPos"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线相对于画布的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float lightRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光源半径，需大于或等于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t ambientColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境阴影颜色，用一个32位（ARGB）的变量表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t spotColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点阴影颜色，用一个32位（ARGB）的变量表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_canvasshadowflags",
              children: "OH_Drawing_CanvasShadowFlags"
            }), " flag"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阴影标志枚举", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_canvasshadowflags",
              children: "OH_Drawing_CanvasShadowFlags"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasclear",
      children: "OH_Drawing_CanvasClear()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasClear(OH_Drawing_Canvas* canvas, uint32_t color)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于使用指定颜色去清空画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述颜色的32位（ARGB）变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvassetmatrix",
      children: "OH_Drawing_CanvasSetMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasSetMatrix(OH_Drawing_Canvas* canvas, OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置画布的矩阵状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、matrix任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩阵对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "的指针，开发者可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-matrix-h/capi-drawing-matrix-h#oh_drawing_matrixcreate",
              children: "OH_Drawing_MatrixCreate"
            }), "接口创建。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasresetmatrix",
      children: "OH_Drawing_CanvasResetMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasResetMatrix(OH_Drawing_Canvas* canvas)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置当前画布的矩阵为单位矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawimagerectwithsrc",
      children: "OH_Drawing_CanvasDrawImageRectWithSrc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawImageRectWithSrc(OH_Drawing_Canvas* canvas, const OH_Drawing_Image* image,const OH_Drawing_Rect* src, const OH_Drawing_Rect* dst, const OH_Drawing_SamplingOptions* samplingOptions,OH_Drawing_SrcRectConstraint srcRectConstraint)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将图片绘制到画布的指定区域上，源矩形选定的区域会缩放平移到目标矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、image、src、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image/capi-drawing-oh-drawing-image",
              children: "OH_Drawing_Image"
            }), "* image"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向图片对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image/capi-drawing-oh-drawing-image",
              children: "OH_Drawing_Image"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* src"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向源矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* dst"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "* samplingOptions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向采样选项对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "的指针，为NULL将使用默认采样选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_srcrectconstraint",
              children: "OH_Drawing_SrcRectConstraint"
            }), " srcRectConstraint"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["约束类型，支持可选的具体类型可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_srcrectconstraint",
              children: "OH_Drawing_SrcRectConstraint"
            }), "枚举。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawimagerect",
      children: "OH_Drawing_CanvasDrawImageRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawImageRect(OH_Drawing_Canvas* canvas, OH_Drawing_Image* image,OH_Drawing_Rect* rect, OH_Drawing_SamplingOptions* samplingOptions)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将图片绘制到画布的指定区域上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、image、dst任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image/capi-drawing-oh-drawing-image",
              children: "OH_Drawing_Image"
            }), "* image"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向图片对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image/capi-drawing-oh-drawing-image",
              children: "OH_Drawing_Image"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "* samplingOptions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向采样选项对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "的指针，为NULL将使用默认采样选项。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawvertices",
      children: "OH_Drawing_CanvasDrawVertices()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_CanvasDrawVertices(OH_Drawing_Canvas* canvas, OH_Drawing_VertexMode vertexMmode,int32_t vertexCount, const OH_Drawing_Point2D* positions, const OH_Drawing_Point2D* texs,const uint32_t* colors, int32_t indexCount, const uint16_t* indices, OH_Drawing_BlendMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于画顶点数组描述的三角网格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas或positions为NULL、vertexCount值小于3、indexCount值小于3且不为0，存在以上任意一种情况时设置错误码为OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vertexMmode、mode任意一个不在枚举范围内时设置错误码为OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画布对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_vertexmode",
              children: "OH_Drawing_VertexMode"
            }), " vertexMmode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["绘制顶点的连接方式，支持方式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h#oh_drawing_vertexmode",
              children: "OH_Drawing_VertexMode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t vertexCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "顶点数组元素的数量，值必须大于等于3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* positions"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述顶点位置的数组指针，不能为空，其长度必须等于vertexCount。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* texs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述顶点对应纹理空间坐标的数组指针，可以为空，若不为空其长度必须等于vertexCount。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述顶点对应颜色的数组指针，用于在三角形中进行插值，可以为空，若不为空其长度必须等于vertexCount。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t indexCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "索引的数量，可以为0，若不为0则值必须大于等于3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint16_t* indices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述顶点对应索引的数组指针，可以为空，若不为空其长度必须等于indexCount。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            }), " mode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["混合模式枚举，支持方式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasreadpixels",
      children: "OH_Drawing_CanvasReadPixels()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_Drawing_CanvasReadPixels(OH_Drawing_Canvas* canvas, OH_Drawing_Image_Info* imageInfo,void* dstPixels, uint32_t dstRowBytes, int32_t srcX, int32_t srcY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从画布中拷贝像素数据到指定地址。该接口不可用于录制类型画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、imageInfo、dstPixels任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image-info/capi-drawing-oh-drawing-image-info",
              children: "OH_Drawing_Image_Info"
            }), "* imageInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向图片信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image-info/capi-drawing-oh-drawing-image-info",
              children: "OH_Drawing_Image_Info"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* dstPixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标像素存储首地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t dstRowBytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一行像素的大小，小于等于0时无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t srcX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布像素的x轴偏移量，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t srcY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布像素的y轴偏移量，单位为像素。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回true表示像素成功拷贝到目标像素存储首地址，函数返回false表示拷贝失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasreadpixelstobitmap",
      children: "OH_Drawing_CanvasReadPixelsToBitmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_Drawing_CanvasReadPixelsToBitmap(OH_Drawing_Canvas* canvas,OH_Drawing_Bitmap* bitmap, int32_t srcX, int32_t srcY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从画布拷贝像素数据到位图中。该接口不可用于录制类型画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canvas、bitmap任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-bitmap/capi-drawing-oh-drawing-bitmap",
              children: "OH_Drawing_Bitmap"
            }), "* bitmap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向位图对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-bitmap/capi-drawing-oh-drawing-bitmap",
              children: "OH_Drawing_Bitmap"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t srcX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布像素的x轴偏移量，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t srcY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布像素的y轴偏移量，单位为像素。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回true表示像素成功拷贝到位图，函数返回false表示拷贝失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasisclipempty",
      children: "OH_Drawing_CanvasIsClipEmpty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasIsClipEmpty(OH_Drawing_Canvas* canvas, bool* isClipEmpty)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于判断裁剪后可绘制区域是否为空。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isClipEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示裁剪后可绘制区域是否为空。true表示为空，false表示不为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas或者isClipEmpty为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasgetimageinfo",
      children: "OH_Drawing_CanvasGetImageInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasGetImageInfo(OH_Drawing_Canvas* canvas, OH_Drawing_Image_Info* imageInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取画布的图像信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image-info/capi-drawing-oh-drawing-image-info",
              children: "OH_Drawing_Image_Info"
            }), "* imageInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向图像信息对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image-info/capi-drawing-oh-drawing-image-info",
              children: "OH_Drawing_Image_Info"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas或者imageInfo为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawrecordcmd",
      children: "OH_Drawing_CanvasDrawRecordCmd()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawRecordCmd(OH_Drawing_Canvas* canvas, OH_Drawing_RecordCmd* recordCmd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于绘制录制指令对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针，仅支持录制类型画布。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd",
              children: "OH_Drawing_RecordCmd"
            }), "* recordCmd"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向录制指令对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd",
              children: "OH_Drawing_RecordCmd"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas或者recordCmd为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasquickrejectpath",
      children: "OH_Drawing_CanvasQuickRejectPath()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasQuickRejectPath(OH_Drawing_Canvas* canvas, const OH_Drawing_Path* path,bool* quickReject)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断路径与画布区域是否不相交。画布区域包含边界。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-path/capi-drawing-oh-drawing-path",
              children: "OH_Drawing_Path"
            }), "* path"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向路径对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-path/capi-drawing-oh-drawing-path",
              children: "OH_Drawing_Path"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* quickReject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示路径与画布区域是否不相交，true表示路径与画布区域不相交，false表示路径与画布区域相交。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas、path或者quickReject为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasquickrejectrect",
      children: "OH_Drawing_CanvasQuickRejectRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasQuickRejectRect(OH_Drawing_Canvas* canvas, const OH_Drawing_Rect* rect,bool* quickReject)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断矩形和画布区域是否不相交。画布区域包含边界。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* canvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "* rect"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩形对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* quickReject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示矩形与画布区域是否不相交，true表示矩形与画布区域不相交，false表示矩形与画布区域相交。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数canvas、rect或者quickReject为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_canvasdrawpixelmapmesh",
      children: "OH_Drawing_CanvasDrawPixelMapMesh()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_CanvasDrawPixelMapMesh(OH_Drawing_Canvas* cCanvas, OH_Drawing_PixelMap* pixelMap, uint32_t meshWidth, uint32_t meshHeight, const float* vertices, uint32_t verticesSize, uint32_t vertOffset, const uint32_t* colors, uint32_t colorsSize, uint32_t colorOffset)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在网格上绘制像素图，网格均匀分布在像素图上。（只支持brush，使用pen没有绘制效果。）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "* cCanvas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画布对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向像素图", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t meshWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网格的列数，取值为大于0的整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t meshHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网格的行数，取值为大于0的整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* vertices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向网格顶点数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t verticesSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网格顶点数组的大小，大小必须为((meshWidth + 1) * (meshHeight + 1) + vertoffset) * 2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t vertOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在绘图前需要跳过的顶点数，取值为大于等于0的整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向网格颜色数组的指针，可为nullptr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t colorsSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网格颜色数组的大小，若存在则大小必须为(meshWidth + 1) * (meshHeight + 1) + colorOffset。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t colorOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在绘图前需要跳过的颜色数，取值为大于等于0的整数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行错误码。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INCORRECT_PARAMETER，表示出现cCanvas、pixelMap、vertices等参数为空或传参不符合取值规则的情况。"
          })]
        })
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