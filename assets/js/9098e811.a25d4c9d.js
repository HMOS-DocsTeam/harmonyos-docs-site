"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["199015"], {
847608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_offscreencanvas_ts_components_offscreencanvas_md_909_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-canvas-drawing-ts-components-offscreencanvas-ts-components-offscreencanvas-md-909.json
var site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_offscreencanvas_ts_components_offscreencanvas_md_909_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas","title":"OffscreenCanvas","description":"OffscreenCanvas组件用于绘制自定义图形。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas.md","sourceDirName":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas","slug":"/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"OffscreenCanvas","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-offscreencanvas","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-components-offscreencanvas"},"sidebar":"ref","previous":{"title":"Matrix2D","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-matrix2d/ts-components-canvas-matrix2d"},"next":{"title":"OffscreenCanvasRenderingContext2D","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas.md


const frontMatter = {
	title: 'OffscreenCanvas',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-offscreencanvas',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-components-offscreencanvas'
};
const contentTitle = 'OffscreenCanvas';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "构造函数",
  "id": "构造函数",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 3
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "width",
  "id": "width",
  "level": 3
}, {
  "value": "height",
  "id": "height",
  "level": 3
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "transferToImageBitmap",
  "id": "transfertoimagebitmap",
  "level": 3
}, {
  "value": "getContext10+",
  "id": "getcontext10",
  "level": 3
}, {
  "value": "OffscreenCanvas支持并发线程绘制",
  "id": "offscreencanvas支持并发线程绘制",
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
        id: "offscreencanvas",
        children: "OffscreenCanvas"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OffscreenCanvas组件用于绘制自定义图形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
        children: "Canvas"
      }), "组件或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "对象时，渲染、动画和用户交互通常发生在应用程序的主线程上，与画布动画和渲染相关的计算可能会影响应用程序性能。OffscreenCanvas提供了一个可以在屏幕外渲染的画布，这样可以在单独的线程中运行一些任务，从而避免影响应用程序主线程性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3313)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OffscreenCanvas无法在ServiceExtensionAbility中使用，ServiceExtensionAbility中建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing/arkts-apis-graphics-drawing",
        children: "Drawing模块"
      }), "进行离屏绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构造函数",
      children: "构造函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(width: number, height: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造用于创建离屏画布对象的OffscreenCanvas。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OffscreenCanvas组件的宽度。  异常值NaN和Infinity按无效值处理。  默认单位为vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OffscreenCanvas组件的高度。  异常值NaN和Infinity按无效值处理。  默认单位为vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(width: number, height: number, unit: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造用于创建离屏画布对象的OffscreenCanvas，支持配置OffscreenCanvas的单位模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OffscreenCanvas组件的宽度。  异常值NaN和Infinity按无效值处理。  默认单位为vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OffscreenCanvas组件的高度。  异常值NaN和Infinity按无效值处理。  默认单位为vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetricsunit12",
              children: "LengthMetricsUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置OffscreenCanvas对象的单位模式，配置后无法动态更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。  异常值NaN和Infinity按默认值处理。  默认值：DEFAULT"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OffscreenCanvas支持以下属性："
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
            children: "OffscreenCanvas组件的宽度。  默认单位为vp。"
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
            children: "OffscreenCanvas组件的高度。  默认单位为vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "width",
      children: "width"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct OffscreenCanvasPage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(200, 300);\n\n  build() {\n    Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Start, justifyContent: FlexAlign.Start }) {\n      Column() {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .borderWidth(5)\n          .borderColor('#057D02')\n          .backgroundColor('#FFFFFF')\n          .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            offContext.fillStyle = '#CDCDCD'\n            offContext.fillRect(0, 0, this.offCanvas.width, 150)\n            let image = this.offCanvas.transferToImageBitmap()\n            this.context.setTransform(1, 0, 0, 1, 50, 200)\n            this.context.transferFromImageBitmap(image)\n          })\n      }\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491140)/* ["default"] */.A) + "",
        width: "296",
        height: "644"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "height",
      children: "height"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct OffscreenCanvasPage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(200, 300);\n\n  build() {\n    Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Start, justifyContent: FlexAlign.Start }) {\n      Column() {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .borderWidth(5)\n          .borderColor('#057D02')\n          .backgroundColor('#FFFFFF')\n          .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            offContext.fillStyle = '#CDCDCD'\n            offContext.fillRect(0, 0, 100, this.offCanvas.height)\n            let image = this.offCanvas.transferToImageBitmap()\n            this.context.setTransform(1, 0, 0, 1, 50, 200)\n            this.context.transferFromImageBitmap(image)\n          })\n      }\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(987617)/* ["default"] */.A) + "",
        width: "296",
        height: "644"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transfertoimagebitmap",
      children: "transferToImageBitmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transferToImageBitmap(): ImageBitmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OffscreenCanvas组件中最近渲染的图像创建一个ImageBitmap对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap",
              children: "ImageBitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建的ImageBitmap对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct OffscreenCanvasPage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(400, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .borderWidth(5)\n        .borderColor('rgb(39,135,217)')\n        .backgroundColor('#FFFFFF')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = '#CDCDCD'\n          offContext.fillRect(0, 0, 400, 600)\n          offContext.fillStyle = '#000000'\n          offContext.font = '40px serif bold'\n          offContext.fillText(\"Offscreen : Hello World!\", 20, 60)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(188295)/* ["default"] */.A) + "",
        width: "242",
        height: "109"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcontext10",
      children: "getContext10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getContext(contextType: \"2d\", options?: RenderingContextSettings): OffscreenCanvasRenderingContext2D"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回OffscreenCanvas组件的绘图上下文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contextType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OffscreenCanvas组件绘图上下文的类型，当前仅支持\"2d\"类型。  \"2d\"：创建一个表示二维渲染上下文的OffscreenCanvasRenderingContext2D对象。  异常值undefined和null按无效值处理，当前接口返回undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#renderingcontextsettings",
              children: "RenderingContextSettings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置OffscreenCanvasRenderingContext2D对象的参数，见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#renderingcontextsettings",
              children: "RenderingContextSettings"
            }), "。  异常值undefined和null按", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#renderingcontextsettings",
              children: "RenderingContextSettings"
            }), "的默认值处理。  默认值：null"]
          })]
        })]
      })]
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d",
              children: "OffscreenCanvasRenderingContext2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OffscreenCanvas组件的绘图上下文。如果getContext方法的入参contextType为\"2d\"以外类型（包括null或者undefined），返回undefined，使用前应判断返回值是否为undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct OffscreenCanvasExamplePage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offscreenCanvas: OffscreenCanvas = new OffscreenCanvas(600, 800);\n\n  build() {\n    Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Start, justifyContent: FlexAlign.Start }) {\n      Column() {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .backgroundColor('#FFFFFF')\n          .onReady(() => {\n            let offContext = this.offscreenCanvas.getContext(\"2d\", this.settings)\n            offContext.font = '70px sans-serif'\n            offContext.fillText(\"Offscreen : Hello World!\", 20, 60)\n            offContext.fillStyle = \"#0000ff\"\n            offContext.fillRect(230, 350, 50, 50)\n            offContext.fillStyle = \"#EE0077\"\n            offContext.translate(70, 70)\n            offContext.fillRect(230, 350, 50, 50)\n            offContext.fillStyle = \"#77EE0077\"\n            offContext.translate(-70, -70)\n            offContext.fillStyle = \"#00ffff\"\n            offContext.rotate(45 * Math.PI / 180);\n            offContext.fillRect(180, 120, 50, 50);\n            offContext.rotate(-45 * Math.PI / 180);\n            offContext.beginPath()\n            offContext.moveTo(10, 150)\n            offContext.bezierCurveTo(20, 100, 200, 100, 200, 20)\n            offContext.stroke()\n            offContext.fillStyle = '#FF00FF'\n            offContext.fillRect(100, 100, 60, 60)\n            let imageData = this.offscreenCanvas.transferToImageBitmap()\n            this.context.transferFromImageBitmap(imageData)\n          })\n      }.width('100%').height('100%')\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824084)/* ["default"] */.A) + "",
        width: "336",
        height: "719"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offscreencanvas支持并发线程绘制",
      children: "OffscreenCanvas支持并发线程绘制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，当应用创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker线程"
      }), "，支持使用postMessage将OffscreenCanvas实例传到Worker中进行绘制，并使用onmessage接收Worker线程发送的绘制结果进行显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664233)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OffscreenCanvas对象使用getContext获取绘图上下文后，不允许通过postMessage传该对象给其他线程，否则抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已经通过postMessage传OffscreenCanvas对象到某一线程，声明该对象的线程不允许该对象使用getContext和transferToImageBitmap方法，否则抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已经通过postMessage传OffscreenCanvas对象到某一线程，不允许再将该对象通过postMessage传给其他线程，否则抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio的预览器不支持显示在Worker线程中绘制的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct OffscreenCanvasExamplePage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private myWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n  private imgPixelMap: image.PixelMap | undefined = undefined\n\n  aboutToAppear(): void {\n    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n    try {\n      this.imgPixelMap = resourceMgr.getDrawableDescriptor($r(\"app.media.startIcon\").id).getPixelMap();\n    } catch (error) {\n      console.error(`resourceMgr getDrawableDescriptor error, error code: ${(error as BusinessError).code}`);\n    }\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Start, justifyContent: FlexAlign.Start }) {\n      Column() {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .borderWidth(5)\n          .borderColor('#057D02')\n          .backgroundColor('#FFFFFF')\n          .onReady(() => {\n            let offCanvas = new OffscreenCanvas(600, 800)\n            // worker线程中绘制图像\n            this.myWorker.postMessage({ myOffCanvas: offCanvas, imgPixelMap: this.imgPixelMap });\n            this.myWorker.onmessage = (e): void => {\n              if (e.data.myImage) {\n                let image: ImageBitmap = e.data.myImage\n                this.context.transferFromImageBitmap(image)\n              }\n            }\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker线程在onmessage中接收到主线程postMessage发送的OffscreenCanvas，并进行绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/workers/Worker.ets\nimport { MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { image } from '@kit.ImageKit';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  if (e.data.myOffCanvas) {\n    let offCanvas: OffscreenCanvas = e.data.myOffCanvas\n    let offContext = offCanvas.getContext(\"2d\")\n    offContext.fillStyle = '#CDCDCD'\n    offContext.fillRect(0, 0, 200, 150)\n\n    let imgPixelMap: image.PixelMap = e.data.imgPixelMap\n    let imgBitmap: ImageBitmap = new ImageBitmap(imgPixelMap)\n    offContext.drawImage(imgBitmap, 0, 200)\n\n    let path2d = new Path2D(\"M250 150 L150 350 L350 350 Z\")\n    offContext.stroke(path2d)\n\n    let matrix: Matrix2D = new Matrix2D()\n    matrix.scaleX = 1\n    matrix.scaleY = 1\n    matrix.rotateX = -0.5\n    matrix.rotateY = 0.5\n    matrix.translateX = 10\n    matrix.translateY = 10\n    offContext.setTransform(matrix)\n    offContext.fillStyle = \"#707070\"\n    offContext.fillRect(20, 20, 100, 100)\n\n    let image = offCanvas.transferToImageBitmap()\n    workerPort.postMessage({ myImage: image });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421747)/* ["default"] */.A) + "",
        width: "243",
        height: "185"
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
987617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
421747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
3313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
491140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
664233(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
824084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800326-f70d3d9b0bf0646fea39e0505309b9a2.png");

},
188295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAABtCAYAAACbWDwyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAA9jSURBVHhe7doFqG7V1sbxaV27u8UWE7sLCwMVA7sDuwNRMcHAFjEwsLuwu/vY3d3d7Xd/U4cuX/fW87EPeJ2OPyzOu9aaPcczxphrn6EGDRr0U0mS5B/N0L/8myTJP5gUcpI0QAo5SRoghZwkDZBCTpIGSCEnSQOkkJOkAVLISdIAKeQkaYAUcpI0QAo5SRoghZwkDZBCTpIGSCEnSQOkkJOkAVLISdIAKeQkaYAUcpI0QAo5SRoghZwkDZBCTpIGSCEnSQOkkJOkAVLISdIAKeQkaYAUcpI0QAo5SRoghZwkDZBCTpIGSCEnSQOkkJOkAVLISdIAKeQkaYAUcpI0QAo5SRoghZwkDZBCTpIGSCEnSQOkkJOkAVLISdIAKeQkaYAUcpI0QAo5SRrgbxPyTz/9VK8g7rvPkj/Su07d+3j2v8xfjbX7vr8yyR8ZYkLu3YDu1SWeDTXUUL+7H3roocvwww9fhh122F+ftULMZ3Cv/vDOOsXl3joOM8wwv3s2uER/f3X1Vfb/S9TrjrUX7+OdcuYW9bpX8keGGjRo0IBXJhZ3uOGGKyOPPHIZYYQRyvfff1++/PLL8tVXX9X3sSnKTDDBBOW7776rv5Xx3OY9+uijZZpppqmC/vDDD2ubIfh/KrE21sQVeP7555+XUUYZ5Xdz9Mza9c471siajTjiiNXQo6x2rdkPP/xQPv3001r2r9YtxjXqqKPWtoJvvvmm7pm+tPn111/Xsn7rFz/++GP57LPP6u/BIfrSj/GPNNJIdaxffPFF/bfLf/7zn9qP/r03Hr+NUzvspa/1+bczYCHHJo055pjlscceK1deeWW57777yoQTTliWXnrpsvzyy9fFJ1zR9uOPPy4rrbRSffbtt9+WjTbaqEwyySRlv/32K9NOO2159tlnyzbbbFO233778tFHH9W2A5sX/Q0Jwhj6avOv+urLkLrlu20zzOuuu648/PDDZZxxxqnGaW7bbbddOeaYY+oz5V9//fWywQYblIkmmqgaay/jjjtuWW+99cqtt95a70899dTa9uabb14++eSTKpCnn366vPvuu/V9X3THxYkcf/zxdR+0Y0wzzjhjWW655apDuOOOO8riiy9eBfjAAw+Um266qYw11lh177baaqsqwt416m/diNG17rrrVjuBNRlvvPF+netoo41Wtt1223LNNdfU+xNOOKEsvPDC1WmcddZZtV32FHX62oN/KwNKrWPDGNhFF11UBcpY99133zLPPPOUHXbYoW54eNjxxx+/HHnkkVXMNmvHHXesIj7wwAPLTDPNVG677bayxhprlGWXXbYKX3R3cQDQn80TgTzXbqRgEfGUjcxAFAk8Z+ie8/rQnsvYtOWdNsIYlYtop0zUj/S/S3ds6nXfm8sss8xSBXPYYYeVSy+9tIrFOFdYYYVyxBFHlMMPP7zMMMMMVdQiXl9jeu+99+o6zzvvvLVdc2fo5557br2fdNJJ67+Bcajv0hd6xzX33HOX888/v47rhRdeKLPNNlvt6/nnn6/7c+edd9ZxTD311PXfo446qu4trEO0H2vd17qp5954jX+MMcaoTqS7P34Tp0Aw//zz12fW21jA4R199NE1W9BO8nsGfEa2AU8++WTZdddd6+ZccsklddO33nrrsvPOO1evy0h423vvvffXaMLDL7XUUvU3z27DiZtHJmpp9kknnVSNTIoVhjD66KOXu+66q5xyyinlqquuqnUZ1I033ljuv//+Gkmk5YybUzEmlzYuvvji6tlfe+21akyMJFJV4zr55JPL3XffXbML8zKGe+65pzz00EM1tdOf+Ulpve+KQlsMmDMiAuMNcTNQIlt00UVr2SmnnLJGOoL1b0DUMU9juvnmm2vUjTF5LvKqF0Rm00WfHMJzzz1X53vOOeeUt956q4w99ti/lPi5jMxgwQUXLGuttVZ9NvHEE9e9M7cbbrihPjv77LNrf8Yvy1piiSXqZT9F/vPOO6+cccYZ5ZlnnqmRUl0R1x49/vjjVeT2lUCl6fYhHGGsnyj/yCOP1L5kc+aKKGMtpptuurr3GY37ZsBCZrwMDlJphmXDbPJ8881Xn0uRbDyPGukyIRK6lBqiwf7771/FLjoxLmLjiaVTxGmDN91007LZZpuV999/v+yyyy5ltdVWqwbJWDfccMOaqnsvK5DGMYSXX365LLDAAtUxGKtoSJDE6VpyySXLlltuWd58883a/h577FGfv/TSS2WTTTap6aw29ecd8TFYzieMjUN45513ajuyCsYX78HhGCc8V5+D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");

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