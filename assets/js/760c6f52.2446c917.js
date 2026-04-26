"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["623859"], {
424618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_drawingrenderingcontext_ts_drawingrenderingcontext_md_760_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-canvas-drawing-ts-drawingrenderingcontext-ts-drawingrenderingcontext-md-760.json
var site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_drawingrenderingcontext_ts_drawingrenderingcontext_md_760_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext","title":"DrawingRenderingContext","description":"DrawingRenderingContext对象与Canvas组件绑定后，可在Canvas组件上进行绘制，绘制对象可以是形状、文本、图片等。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext.md","sourceDirName":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext","slug":"/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"DrawingRenderingContext","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawingrenderingcontext","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-drawingrenderingcontext"},"sidebar":"ref","previous":{"title":"CanvasRenderingContext2D","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d"},"next":{"title":"ImageBitmap","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext.md


const frontMatter = {
	title: 'DrawingRenderingContext',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawingrenderingcontext',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-drawingrenderingcontext'
};
const contentTitle = 'DrawingRenderingContext';

const assets = {

};



const toc = [{
  "value": "constructor",
  "id": "constructor",
  "level": 2
}, {
  "value": "size",
  "id": "size",
  "level": 2
}, {
  "value": "canvas",
  "id": "canvas",
  "level": 2
}, {
  "value": "invalidate",
  "id": "invalidate",
  "level": 2
}, {
  "value": "DrawingCanvas12+对象说明",
  "id": "drawingcanvas12对象说明",
  "level": 2
}, {
  "value": "Size",
  "id": "size-1",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（绘制图形）",
  "id": "示例1绘制图形",
  "level": 3
}, {
  "value": "示例2（绘制文本）",
  "id": "示例2绘制文本",
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
    img: "img",
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
        id: "drawingrenderingcontext",
        children: "DrawingRenderingContext"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DrawingRenderingContext对象与Canvas组件绑定后，可在Canvas组件上进行绘制，绘制对象可以是形状、文本、图片等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(281085)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(unit?: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造使用drawing接口进行绘制的Canvas画布对象，支持配置DrawingRenderingContext对象的单位模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetricsunit12",
              children: "LengthMetricsUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置DrawingRenderingContext对象的单位模式，配置后无法更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。  异常值undefined、NaN和Infinity按默认值处理。  默认值：DEFAULT"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "size",
      children: "size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get size(): Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取DrawingRenderingContext的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
              href: "#size-1",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DrawingRenderingContext的尺寸信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "canvas",
      children: "canvas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get canvas(): DrawingCanvas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取绘制内容的画布对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
              href: "#drawingcanvas12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DrawingCanvas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制内容的画布对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "invalidate",
      children: "invalidate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invalidate(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使组件无效，触发组件的重新渲染。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawingcanvas12对象说明",
      children: "DrawingCanvas12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DrawingCanvas = Canvas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可用于向DrawingRenderingContext上绘制内容的画布对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
              children: "Canvas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个Canvas对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "size-1",
      children: "Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DrawingRenderingContext的尺寸信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取DrawingRenderingContext的宽度，其值为关联的Canvas组件的宽度。  支持单位：vp、px。  默认单位为vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取DrawingRenderingContext的高度，其值为关联的Canvas组件的高度。  支持单位：vp、px。  默认单位为vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1绘制图形",
      children: "示例1（绘制图形）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了如何使用DrawingRenderingContext中的方法绘制图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common2D, drawing } from '@kit.ArkGraphics2D';\n\n// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private context: DrawingRenderingContext = new DrawingRenderingContext();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('50%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          let brush = new drawing.Brush();\n          // 使用RGBA(39, 135, 217, 255)填充圆心为(200, 200)，半径为100的圆\n          brush.setColor({\n            alpha: 255,\n            red: 39,\n            green: 135,\n            blue: 217\n          });\n          this.context.canvas.attachBrush(brush);\n          this.context.canvas.drawCircle(200, 200, 100);\n          this.context.canvas.detachBrush();\n          this.context.invalidate();\n        })\n      Button(\"Clear\")\n        .width('120')\n        .height('50')\n        .onClick(() => {\n          let color: common2D.Color = {\n            alpha: 0,\n            red: 0,\n            green: 0,\n            blue: 0\n          };\n          // 使用RGBA(0, 0, 0, 0)填充画布\n          this.context.canvas.clear(color);\n          this.context.invalidate();\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图1 绘制圆心为(200, 200)，半径为100的圆，填充色为RGBA(39, 135, 217, 255)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(329314)/* ["default"] */.A) + "",
        width: "360",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图2 点击Clear按钮清空画布"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558349)/* ["default"] */.A) + "",
        width: "360",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2绘制文本",
      children: "示例2（绘制文本）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例实现了通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-typeface/arkts-apis-graphics-drawing-typeface#makefromrawfile18",
        children: "makeFromRawFile"
      }), "（从API version 18开始）加载自定义字体。并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas#drawtextblob",
        children: "drawTextBlob"
      }), "绘制文本，drawing接口绘制自定义文字时，不需要调用this.uiContext.getFont().", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-font/arkts-apis-uicontext-font#registerfont",
        children: "registerFont"
      }), "或者fontCollection.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#loadfontsync",
        children: "loadFontSync"
      }), "提前注册字体，而是通过drawing.Typeface.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-typeface/arkts-apis-graphics-drawing-typeface#makefromrawfile18",
        children: "makeFromRawFile"
      }), "（从API version 18开始）传入rawfile目录下的自定义字体文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\n// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private context: DrawingRenderingContext = new DrawingRenderingContext();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('50%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          let font = new drawing.Font();\n          font.setSize(50);\n          // 加载rawfile目录下的自定义字体文件HarmonyOS_Sans_Bold.ttf\n          const myTypeFace = drawing.Typeface.makeFromRawFile($rawfile('HarmonyOS_Sans_Bold.ttf'));\n          font.setTypeface(myTypeFace);\n          const textBlob =\n            drawing.TextBlob.makeFromString(\"Hello World\", font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n          this.context.canvas.drawTextBlob(textBlob, 60, 100);\n          this.context.invalidate();\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840763)/* ["default"] */.A) + "",
        width: "423",
        height: "303"
      })
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
558349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
329314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440013-fbdf2c68195858536bea5a75c88bb70e.png");

},
281085(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
840763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479969-bd01111b9398d675552ced8e734cce94.png");

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