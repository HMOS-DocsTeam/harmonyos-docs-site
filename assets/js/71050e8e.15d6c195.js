"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["333143"], {
309423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_draw_arkts_drawing_customization_on_canvas_arkts_drawing_customization_on_canvas_md_710_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-draw-arkts-drawing-customization-on-canvas-arkts-drawing-customization-on-canvas-md-710.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_draw_arkts_drawing_customization_on_canvas_arkts_drawing_customization_on_canvas_md_710_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas/arkts-drawing-customization-on-canvas","title":"使用画布绘制自定义图形 (Canvas)","description":"Canvas提供画布组件，用于自定义绘制图形，开发者使用CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象在Canvas组件上进行绘制，绘制对象可以是基础形状、文本、图片等。","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas/arkts-drawing-customization-on-canvas.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用画布绘制自定义图形 (Canvas)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-drawing-customization-on-canvas","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置自定义节点跨语言属性","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage/"},"next":{"title":"自定义绘制修改器 (DrawModifier)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-user-defined-extension-drawmodifier/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas/arkts-drawing-customization-on-canvas.md


const frontMatter = {
	title: '使用画布绘制自定义图形 (Canvas)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-drawing-customization-on-canvas',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用画布绘制自定义图形 (Canvas)';

const assets = {

};



const toc = [{
  "value": "使用画布组件绘制自定义图形",
  "id": "使用画布组件绘制自定义图形",
  "level": 2
}, {
  "value": "初始化画布组件",
  "id": "初始化画布组件",
  "level": 2
}, {
  "value": "画布组件绘制方式",
  "id": "画布组件绘制方式",
  "level": 2
}, {
  "value": "画布组件常用方法",
  "id": "画布组件常用方法",
  "level": 2
}, {
  "value": "使用状态变量驱动画布刷新",
  "id": "使用状态变量驱动画布刷新",
  "level": 2
}, {
  "value": "控制在画布组件不可见时不进行绘制",
  "id": "控制在画布组件不可见时不进行绘制",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用画布绘制自定义图形-canvas",
        children: "使用画布绘制自定义图形 (Canvas)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas提供画布组件，用于自定义绘制图形，开发者使用CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象在Canvas组件上进行绘制，绘制对象可以是基础形状、文本、图片等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用画布组件绘制自定义图形",
      children: "使用画布组件绘制自定义图形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以由以下三种形式在画布绘制自定义图形："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
          children: "CanvasRenderingContext2D"
        }), "对象在Canvas画布上绘制。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct CanvasExample1 {\n  // 用来配置CanvasRenderingContext2D对象的参数，包括是否开启抗锯齿，true表明开启抗锯齿。\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  // 用来创建CanvasRenderingContext2D对象，通过在canvas中调用CanvasRenderingContext2D对象来绘制。\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      // 在canvas中调用CanvasRenderingContext2D对象。\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#F5DC62')\n        .onReady(() => {\n          // 可以在这里绘制内容。\n          this.context.strokeRect(50, 50, 200, 150);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(117860)/* ["default"] */.A) + "",
        width: "220",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "离屏绘制是指将需要绘制的内容先绘制在缓存区，再将其转换成图片，一次性绘制到Canvas上，加快了绘制速度。过程为："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过transferToImageBitmap方法将离屏画布最近渲染的图像创建为一个ImageBitmap对象。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过CanvasRenderingContext2D对象的transferFromImageBitmap方法显示给定的ImageBitmap对象。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体使用参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d",
            children: "OffscreenCanvasRenderingContext2D"
          }), "对象。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct CanvasExample2 {\n  // 用来配置CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象的参数，包括是否开启抗锯齿。true表明开启抗锯齿\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // 用来创建OffscreenCanvas对象，width为离屏画布的宽度，height为离屏画布的高度。通过在canvas中调用OffscreenCanvasRenderingContext2D对象来绘制。\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#F5DC62')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext('2d', this.settings);\n          // 可以在这里绘制内容\n          offContext.strokeRect(50, 50, 200, 150);\n          // 将离屏绘制渲染的图像在普通画布上显示\n          let image = this.offCanvas.transferToImageBitmap();\n          this.context.transferFromImageBitmap(image);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(923939)/* ["default"] */.A) + "",
        width: "220",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756685)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在画布组件中，通过CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象在Canvas组件上进行绘制时调用的接口相同，另外，接口参数如无特别说明，单位均为vp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在Canvas上加载Lottie动画时，需要先按照如下方式下载Lottie。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import lottie from '@ohos/lottie'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-tpc/lottieArkTS",
        children: "lottie"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "初始化画布组件",
      children: "初始化画布组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReady(event: () => void)是Canvas组件初始化完成时的事件回调，调用该事件后，可获取Canvas组件的确定宽高，进一步使用CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象调用相关API进行图形绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Canvas(this.context)\n  .width('100%')\n  .height('100%')\n  .backgroundColor('#F5DC62')\n  .onReady(() => {\n    this.context.fillStyle = '#0097D4';\n    this.context.fillRect(50, 50, 100, 100);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824730)/* ["default"] */.A) + "",
        width: "220",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画布组件绘制方式",
      children: "画布组件绘制方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Canvas组件的事件回调onReady()被调用之后，开发者可以直接使用Canvas组件进行绘制。或者可以脱离Canvas组件和onReady()生命周期，单独定义Path2D对象构造理想的路径，并在onReady()调用之后使用Canvas组件进行绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过CanvasRenderingContext2D对象直接调用相关API进行绘制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Canvas(this.context)\n  .width('100%')\n  .height('100%')\n  .backgroundColor('#F5DC62')\n  .onReady(() => {\n    this.context.beginPath();\n    this.context.moveTo(50, 50);\n    this.context.lineTo(280, 160);\n    this.context.stroke();\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(559669)/* ["default"] */.A) + "",
        width: "220",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["先单独定义path2D对象构造理想的路径，再通过调用CanvasRenderingContext2D对象和OffscreenCanvasRenderingContext2D对象的stroke接口或者fill接口进行绘制，具体使用可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d",
          children: "Path2D"
        }), "对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Canvas(this.context2)\n  .width('100%')\n  .height('100%')\n  .backgroundColor('#F5DC62')\n  .onReady(() => {\n    let region = new Path2D();\n    region.arc(100, 75, 50, 0, 6.28);\n    this.context2.stroke(region);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(160220)/* ["default"] */.A) + "",
        width: "220",
        height: "219"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画布组件常用方法",
      children: "画布组件常用方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OffscreenCanvasRenderingContext2D对象和CanvasRenderingContext2D对象提供了大量的属性和方法，可以用来绘制文本、图形，处理像素等，是Canvas组件的核心。常用接口有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#fill",
        children: "fill"
      }), "（对封闭路径进行填充）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#clip",
        children: "clip"
      }), "（设置当前路径为剪切路径）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#stroke",
        children: "stroke"
      }), "（进行边框绘制操作）等等，同时提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#fillstyle",
        children: "fillStyle"
      }), "（指定绘制的填充色）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#globalalpha",
        children: "globalAlpha"
      }), "（设置透明度）与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#strokestyle",
        children: "strokeStyle"
      }), "（设置描边的颜色）等属性修改绘制内容的样式。将通过以下几个方面简单介绍画布组件常见使用方法："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制基础形状。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#arc",
            children: "arc"
          }), "（绘制弧线路径）、 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#ellipse",
            children: "ellipse"
          }), "（绘制一个椭圆）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#rect",
            children: "rect"
          }), "（创建矩形路径）等接口绘制基础形状。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Canvas(this.context)\n  .width('100%')\n  .height('100%')\n  .backgroundColor('#F5DC62')\n  .onReady(() => {\n    // 绘制矩形\n    this.context.beginPath();\n    this.context.rect(100, 50, 100, 100);\n    this.context.stroke();\n    // 绘制圆形\n    this.context.beginPath();\n    this.context.arc(150, 250, 50, 0, 6.28);\n    this.context.stroke();\n    // 绘制椭圆\n    this.context.beginPath();\n    this.context.ellipse(150, 450, 50, 100, Math.PI * 0.25, Math.PI * 0, Math.PI * 2);\n    this.context.stroke();\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(314278)/* ["default"] */.A) + "",
        width: "220",
        height: "355"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制文本。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#filltext",
            children: "fillText"
          }), "（文本填充）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#stroketext",
            children: "strokeText"
          }), "（文本描边）等接口进行文本绘制，示例中设置了font为50像素高加粗的\"sans-serif\"字体，然后调用fillText方法在(50, 100)处绘制文本\"Hello World!\"，设置strokeStyle为红色，lineWidth为2，font为50像素高加粗的\"sans-serif\"字体，然后调用strokeText方法在(50, 150)处绘制文本\"Hello World!\"的轮廓。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Canvas(this.context)\n  .width('100%')\n  .height('100%')\n  .backgroundColor('#F5DC62')\n  .onReady(() => {\n    // 文本填充\n    this.context.font = '50px bolder sans-serif';\n    this.context.fillText('Hello World!', 50, 100);\n    // 文本描边\n    this.context.strokeStyle = '#ff0000';\n    this.context.lineWidth = 2;\n    this.context.font = '50px bolder sans-serif';\n    this.context.strokeText('Hello World!', 50, 150);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973715)/* ["default"] */.A) + "",
        width: "360",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制文本边框。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#measuretext",
            children: "measureText"
          }), "（文本测量）计算绘制文本的宽度和高度，使用测量的宽度和高度作为边框的尺寸。在示例中，设置textBaseline为'top'，font为30像素的\"monospace\"字体，通过measureText测量出文本的宽度和高度，然后调用fillText方法在(20, 100)处绘制文本\"Hello World!\"，并调用strokeRect方法在同一位置使用测量的宽度和高度绘制相应尺寸的边框。接着，设置font为60像素的粗体\"sans-serif\"字体，再次通过measureText测量文本的宽度和高度，接着调用fillText方法在(20, 150)处绘制文本\"Hello World!\"，并调用strokeRect方法在同一位置使用测量的宽度和高度绘制对应尺寸的边框。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasComponentTextBorder {\n  drawText: string = 'Hello World'\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#F5DC62')\n        .onReady(() => {\n          // 文本的水平对齐方式为'top'\n          this.context.textBaseline = 'top';\n          // 文本字号为30px，字体系列为monospace\n          this.context.font = '30px monospace';\n          let textWidth = this.context.measureText(this.drawText).width;\n          let textHeight = this.context.measureText(this.drawText).height;\n          this.context.fillText(this.drawText, 20, 100);\n          this.context.strokeRect(20, 100, textWidth, textHeight);\n          // 文本字体粗细为粗体，字号为60px，字体系列为sans-serif\n          this.context.font = 'bold 60px sans-serif';\n          textWidth = this.context.measureText(this.drawText).width;\n          textHeight = this.context.measureText(this.drawText).height;\n          this.context.fillText(this.drawText, 20, 150);\n          this.context.strokeRect(20, 150, textWidth, textHeight);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900419)/* ["default"] */.A) + "",
        width: "361",
        height: "287"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用自定义字体绘制文本。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#getglobalinstance",
            children: "getGlobalInstance"
          }), "获取应用全局字体管理器的实例，然后使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#loadfontsync",
            children: "loadFontSync"
          }), "接口从设置的路径中加载自定义字体并通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#font",
            children: "font"
          }), "（设置文本绘制中的字体样式）接口设置文本绘制中的字体样式，接着通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#filltext",
            children: "fillText"
          }), "（绘制填充类文本）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#stroketext",
            children: "strokeText"
          }), "（绘制描边类文本）等接口进行文本绘制。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { text } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct CustomFont {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#F5DC62')\n        .onReady(() => {\n          // 加载自定义字体\n          let fontCollection = text.FontCollection.getGlobalInstance();\n          fontCollection.loadFontSync('customFont', $rawfile('customFont.ttf'));\n          this.context.font = '30vp customFont';\n          this.context.fillText('Hello World!', 20, 50);\n          this.context.strokeText('Hello World!', 20, 100);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(606869)/* ["default"] */.A) + "",
        width: "392",
        height: "213"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制图片和图像像素信息处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#drawimage",
            children: "drawImage"
          }), "（图像绘制）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#putimagedata",
            children: "putImageData"
          }), "（使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
            children: "ImageData"
          }), "数据填充新的矩形区域）等接口绘制图片，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#createimagedata",
            children: "createImageData"
          }), "（创建新的ImageData 对象）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#getpixelmap",
            children: "getPixelMap"
          }), "（以当前canvas指定区域内的像素创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "对象）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#getimagedata",
            children: "getImageData"
          }), "（以当前canvas指定区域内的像素创建ImageData对象）等接口进行图像像素信息处理。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct CanvasComponentDrawingPictureAndImagePixel {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  // \"/common/images/image.png\"需要替换为开发者所需的图像资源文件\n  private img: ImageBitmap = new ImageBitmap('/common/images/image.png');\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#F5DC62')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext('2d', this.settings);\n          // 使用drawImage接口将图片画在（0，0）为起点，宽高130的区域\n          offContext.drawImage(this.img, 0, 0, 130, 130);\n          // 使用getImageData接口，获得canvas组件区域中，（50，50）为起点，宽高130范围内的绘制内容\n          let imageData = offContext.getImageData(50, 50, 130, 130);\n          // 使用putImageData接口将得到的ImageData画在起点为（150， 150）的区域中\n          offContext.putImageData(imageData, 150, 150);\n          // 将离屏绘制的内容画到canvas组件上\n          let image = this.offCanvas.transferToImageBitmap();\n          this.context.transferFromImageBitmap(image);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(702659)/* ["default"] */.A) + "",
        width: "167",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他方法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Canvas中还提供其他类型的方法。渐变（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient",
            children: "CanvasGradient"
          }), "对象）相关的方法：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#createlineargradient",
            children: "createLinearGradient"
          }), "（创建一个线性渐变色）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#createradialgradient",
            children: "createRadialGradient"
          }), "（创建一个径向渐变色）等。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Canvas(this.context)\n  .width('100%')\n  .height('100%')\n  .backgroundColor('#F5DC62')\n  .onReady(() => {\n    // 创建一个径向渐变色的CanvasGradient对象\n    let grad = this.context.createRadialGradient(200, 200, 50, 200, 200, 200);\n    // 为CanvasGradient对象设置渐变断点值，包括偏移和颜色\n    grad.addColorStop(0.0, '#E87361');\n    grad.addColorStop(0.5, '#FFFFF0');\n    grad.addColorStop(1.0, '#BDDB69');\n    // 用CanvasGradient对象填充矩形\n    this.context.fillStyle = grad;\n    this.context.fillRect(0, 0, 400, 400);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(449268)/* ["default"] */.A) + "",
        width: "220",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用状态变量驱动画布刷新",
      children: "使用状态变量驱动画布刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用状态变量来驱动Canvas刷新，将变化的数据通过@Watch监听，并绑定自定义的draw()方法。当数据刷新时，@Watch绑定的方法会执行绘制逻辑，使Canvas刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct CanvasContentUpdate {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  @State @Watch('draw')content: string = 'Hello World';\n\n  draw() {\n    this.context.clearRect(0, 0, 400, 200); // 清空Canvas的内容\n    this.context.fillText(this.content, 50, 100); // 重新绘制\n  }\n\n  build() {\n    Column() {\n      Canvas(this.context)\n        .width('100%')\n        .height('25%')\n        .backgroundColor('rgb(39, 135, 217)')\n        .onReady(() => {\n          this.context.font = '65px sans-serif';\n          this.context.fillText(this.content, 50, 100);\n        })\n      TextInput({\n        text:$$this.content // 修改文本输入框里的内容时，状态变量的更新会驱动Canvas刷新\n      })\n        .fontSize(35)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78031)/* ["default"] */.A) + "",
        width: "360",
        height: "250"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制在画布组件不可见时不进行绘制",
      children: "控制在画布组件不可见时不进行绘制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用以下两种方式监听Canvas组件可见性，避免不可见时仍在无效绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 13开始，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-uicommonevent/ts-uicommonevent#setonvisibleareaapproximatechange",
            children: "setOnVisibleAreaApproximateChange"
          }), "接口监听Canvas组件可见性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ColorMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Page {\n  private canvasContext: CanvasRenderingContext2D = new CanvasRenderingContext2D()\n  private timerId: number = -1;\n\n  drawRandomCircle(): void {\n    let center: [number, number] = [Math.random() * 200 + 50, Math.random() * 200 + 50]\n    let radius: number = Math.random() * 20 + 10\n    let color: ColorMetrics =\n      ColorMetrics.rgba(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),\n        Math.floor(Math.random() * 255))\n\n    // 清空原先内容与画布状态\n    this.canvasContext.reset()\n\n    // 开始绘制\n    this.canvasContext.fillStyle = color.color\n    let path: Path2D = new Path2D()\n    path.ellipse(center[0], center[1], radius, radius, 0, 0, Math.PI * 2)\n    this.canvasContext.fill(path)\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.canvasContext)\n        .width(300)\n        .height(300)\n        .onReady(() => {\n          let frameNode = this.canvasContext.canvas;\n          frameNode.commonEvent.setOnVisibleAreaApproximateChange({ ratios: [0.0] },\n            (isVisible: boolean, currentRatio: number) => {\n            // canvas不可见\n            if (!isVisible && currentRatio <= 0) {\n              clearInterval(this.timerId)\n              this.timerId = -2\n            }\n            // canvas可见\n            if (isVisible) {\n              if (this.timerId == -2) {\n                this.timerId = setInterval(() => {\n                  this.drawRandomCircle()\n                }, 500)\n              }\n            }\n          })\n        })\n      Button(\"draw sth\")\n        .onClick(() => {\n          if (this.timerId < 0) {\n            this.timerId = setInterval(() => {\n              this.drawRandomCircle()\n            }, 500)\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(361325)/* ["default"] */.A) + "",
            width: "342",
            height: "460"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 17开始，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareaapproximatechange17",
            children: "onVisibleAreaApproximateChange"
          }), "接口监听Canvas组件可见性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ColorMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Page {\n  private canvasContext: CanvasRenderingContext2D = new CanvasRenderingContext2D()\n  private timerId: number = -1;\n\n  drawRandomCircle(): void {\n    let center: [number, number] = [Math.random() * 200 + 50, Math.random() * 200 + 50]\n    let radius: number = Math.random() * 20 + 10\n    let color: ColorMetrics =\n      ColorMetrics.rgba(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),\n        Math.floor(Math.random() * 255))\n\n    // 清空原先内容与画布状态\n    this.canvasContext.reset()\n\n    // 开始绘制\n    this.canvasContext.fillStyle = color.color\n    let path: Path2D = new Path2D()\n    path.ellipse(center[0], center[1], radius, radius, 0, 0, Math.PI * 2)\n    this.canvasContext.fill(path)\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.canvasContext)\n        .width(300)\n        .height(300)\n        .onVisibleAreaApproximateChange({ ratios: [0.0] },\n            (isVisible: boolean, currentRatio: number) => {\n              // canvas不可见\n              if (!isVisible && currentRatio <= 0) {\n                clearInterval(this.timerId)\n                this.timerId = -2\n              }\n              // canvas可见\n              if (isVisible) {\n                if (this.timerId == -2) {\n                  this.timerId = setInterval(() => {\n                    this.drawRandomCircle()\n                  }, 500)\n                }\n              }\n            })\n      Button(\"draw sth\")\n        .onClick(() => {\n          if (this.timerId < 0) {\n            this.timerId = setInterval(() => {\n              this.drawRandomCircle()\n            }, 500)\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(128951)/* ["default"] */.A) + "",
            width: "342",
            height: "460"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绘制规则基础形状。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ClearRect {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#F5DC62')\n        .onReady(() => {\n          // 设定填充样式，填充颜色设为蓝色\n          this.context.fillStyle = '#0097D4';\n          // 以(50, 50)为左上顶点，画一个宽高200的矩形\n          this.context.fillRect(50, 50, 200, 200);\n          // 以(70, 70)为左上顶点，清除宽150高100的区域\n          this.context.clearRect(70, 70, 150, 100);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(881146)/* ["default"] */.A) + "",
        width: "220",
        height: "219"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绘制不规则图形。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Path2d {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Row() {\n      Column() {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .backgroundColor('#F5DC62')\n          .onReady(() => {\n            // 使用Path2D的接口构造一个五边形\n            let path = new Path2D();\n            path.moveTo(150, 50);\n            path.lineTo(50, 150);\n            path.lineTo(100, 250);\n            path.lineTo(200, 250);\n            path.lineTo(250, 150);\n            path.closePath();\n            // 设定填充色为蓝色\n            this.context.fillStyle = '#0097D4';\n            // 使用填充的方式，将Path2D描述的五边形绘制在canvas组件内部\n            this.context.fill(path);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487267)/* ["default"] */.A) + "",
        width: "360",
        height: "219"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制可拖动的光标。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#beginpath",
            children: "beginPath"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#moveto",
            children: "moveTo"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#lineto",
            children: "lineTo"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#arc",
            children: "arc"
          }), "方法设置光标的位置，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#stroke",
            children: "stroke"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#fill",
            children: "fill"
          }), "方法绘制光标，将是否按下和位置变化通过@Watch监听，并绑定自定义的drawCursor()方法。当拖动光标时，@Watch绑定的方法会执行绘制逻辑，计算并更新光标的颜色和位置。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct CursorMoving {\n  // 监听是否按下，刷新光标颜色\n  @State @Watch('drawCursor') isTouchDown: boolean = false;\n  // 监听位置变化，刷新页面\n  @State @Watch('drawCursor') cursorPosition: RectPosition = {\n    x: 0,\n    y: 0,\n    width: 0,\n    height: 0,\n  };\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private canvasContext: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private sw: number = 360; // Canvas固定宽度\n  private sh: number = 270; // Canvas固定高度\n  private cursorWH: number = 50; // 光标区域宽高\n  private dashedLineW: number = 7; // 光标宽高\n  private arcRadius: number = 6; // 光标中心圆半径\n  private isReadyMove: boolean = false;\n  private touchPosition: Position = {\n    x: 0,\n    y: 0,\n  };\n  private cursorCenterPosition: Position = {\n    x: 0,\n    y: 0,\n  };\n\n  build() {\n    Column() {\n      // 绘制光标\n      Canvas(this.canvasContext)\n        .width(this.sw)\n        .height(this.sh)\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          this.cursorPosition.x = (this.sw - this.cursorWH) / 2;\n          this.cursorPosition.y = (this.sh - this.cursorWH) / 2;\n          this.cursorPosition.width = this.cursorWH;\n          this.cursorPosition.height = this.cursorWH;\n          this.cursorCenterPosition = {\n            x: this.cursorPosition.x + this.cursorPosition.width / 2,\n            y: this.cursorPosition.y + this.cursorPosition.height / 2\n          };\n          this.drawCursor();\n        })\n        .onTouch(event => {\n          if (event.type === TouchType.Down) {\n            this.isReadyMove = this.isTouchCursorArea(event.touches[0]);\n            if (this.isReadyMove) {\n              this.isTouchDown = true;\n            }\n\n            this.touchPosition = {\n              x: event.touches[0].displayX,\n              y: event.touches[0].displayY\n            };\n          } else if (event.type === TouchType.Move) {\n            if (this.isReadyMove) {\n              let moveX = event.changedTouches[0].displayX - this.touchPosition.x;\n              let moveY = event.changedTouches[0].displayY - this.touchPosition.y;\n              this.touchPosition = {\n                x: event.changedTouches[0].displayX,\n                y: event.changedTouches[0].displayY\n              };\n              this.cursorPosition.x += moveX;\n              this.cursorPosition.y += moveY;\n\n              this.cursorCenterPosition = {\n                x: this.cursorPosition.x + this.cursorPosition.width / 2,\n                y: this.cursorPosition.y + this.cursorPosition.height / 2\n              };\n              // 光标区域中心点位置限制\n              if (this.cursorCenterPosition.x < 0) {\n                this.cursorPosition.x = -this.cursorPosition.width / 2;\n              }\n              if (this.cursorCenterPosition.y < 0) {\n                this.cursorPosition.y = -this.cursorPosition.height / 2;\n              }\n              if (this.cursorCenterPosition.x > this.sw) {\n                this.cursorPosition.x = this.sw - this.cursorPosition.width / 2;\n              }\n              if (this.cursorCenterPosition.y > this.sh) {\n                this.cursorPosition.y = this.sh - this.cursorPosition.height / 2;\n              }\n            }\n          } else {\n            this.isTouchDown = false;\n          }\n        });\n    }\n    .height('100%')\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  // 绘制裁剪框\n  drawCursor() {\n    // 算出菱形四个点\n    let positionL: Position = { x: this.cursorPosition.x, y: this.cursorPosition.y + this.cursorPosition.height / 2 };\n    let positionT: Position = { x: this.cursorPosition.x + this.cursorPosition.width / 2, y: this.cursorPosition.y };\n    let positionR: Position = {\n      x: this.cursorPosition.x + this.cursorPosition.width,\n      y: this.cursorPosition.y + this.cursorPosition.height / 2\n    };\n    let positionB: Position = {\n      x: this.cursorPosition.x + this.cursorPosition.width / 2,\n      y: this.cursorPosition.y + this.cursorPosition.height\n    };\n    let lineWidth = 2;\n    this.canvasContext.clearRect(0, 0, this.sw, this.sh);\n    this.canvasContext.lineWidth = lineWidth;\n    this.canvasContext.strokeStyle = this.isTouchDown ? '#ff1a5cae' : '#ffffffff';\n\n    // 画出四角\n    this.canvasContext.beginPath();\n    this.canvasContext.moveTo(positionL.x + this.dashedLineW, positionL.y - this.dashedLineW);\n    this.canvasContext.lineTo(positionL.x, positionL.y);\n    this.canvasContext.lineTo(positionL.x + this.dashedLineW, positionL.y + this.dashedLineW);\n\n    this.canvasContext.moveTo(positionT.x - this.dashedLineW, positionT.y + this.dashedLineW);\n    this.canvasContext.lineTo(positionT.x, positionT.y);\n    this.canvasContext.lineTo(positionT.x + this.dashedLineW, positionT.y + this.dashedLineW);\n\n    this.canvasContext.moveTo(positionR.x - this.dashedLineW, positionR.y - this.dashedLineW);\n    this.canvasContext.lineTo(positionR.x, positionR.y);\n    this.canvasContext.lineTo(positionR.x - this.dashedLineW, positionR.y + this.dashedLineW);\n\n    this.canvasContext.moveTo(positionB.x - this.dashedLineW, positionB.y - this.dashedLineW);\n    this.canvasContext.lineTo(positionB.x, positionB.y);\n    this.canvasContext.lineTo(positionB.x + this.dashedLineW, positionB.y - this.dashedLineW);\n\n    this.canvasContext.stroke();\n\n    // 画出中心圆\n    this.canvasContext.beginPath();\n    this.canvasContext.strokeStyle = this.isTouchDown ? '#ff1a5cae' : '#ff9ba59b';\n    this.canvasContext.fillStyle = this.isTouchDown ? '#ff1a5cae' : '#ff9ba59b';\n    this.canvasContext.arc(this.cursorPosition.x + this.cursorPosition.width / 2,\n      this.cursorPosition.y + this.cursorPosition.width / 2, this.arcRadius, 0, 2 * Math.PI);\n    this.canvasContext.fill();\n    this.canvasContext.stroke();\n\n    // 画出四条线\n    this.canvasContext.beginPath();\n    this.canvasContext.lineWidth = 0.7;\n    this.canvasContext.moveTo(positionL.x, positionL.y);\n    this.canvasContext.lineTo(0, positionL.y);\n\n    this.canvasContext.moveTo(positionT.x, positionT.y);\n    this.canvasContext.lineTo(positionT.x, 0);\n\n    this.canvasContext.moveTo(positionR.x, positionR.y);\n    this.canvasContext.lineTo(this.sw, positionR.y);\n\n    this.canvasContext.moveTo(positionB.x, positionB.y);\n    this.canvasContext.lineTo(positionB.x, this.sh);\n\n    this.canvasContext.stroke();\n  }\n\n  // 判断点击位置是否在棱形中\n  isTouchCursorArea(touch: TouchObject) {\n    let tempLength = Math.sqrt((touch.x - this.cursorCenterPosition.x) * (touch.x - this.cursorCenterPosition.x) +\n      (touch.y - this.cursorCenterPosition.y) * (touch.y - this.cursorCenterPosition.y));\n    if (tempLength < (this.cursorWH / 2 / 1.414)) {\n      return true;\n    }\n    return false;\n  }\n}\n\nexport interface RectPosition {\n  x: number;\n  y: number;\n  height: number;\n  width: number;\n};\n\nexport interface Position {\n  x: number;\n  y: number;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(345523)/* ["default"] */.A) + "",
        width: "540",
        height: "405"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/custom-canvas",
          children: "自定义Canvas画布"
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
128951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798374-82c12f96b5080f62e0af38a6d7f4fc50.gif");

},
702659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798372-db71d2e25bfe72b3c1b932375bc81ca6.png");

},
559669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
487267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADbAWgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9Vvmo20bfajb7V/n2frWnkGKMUbfajb7UC0F/Ojn2pNvtRt9qB6eQYzRt/wA4o2+1G32oDQN1G6lx7UY9qA0E3U6kx7Um32oDTyDmjmjb7UbfagWgYPoKXtSbfajb7UB6MXBNJuo2+1Lj2oDTqJ+H60uT6Um32o2+1AaC4/zmjH+c0m32o2+1A7i4/wA5ox/nNJt9qNvtQFw5pcf5zSbfal/P86Av5hj/ADml7Un5/nSbfagL+YuT6UtN2+1G32oJsvIdSf560m32pfz/ADoKv5i4OKTP+cUY9qTb7UBoLj/OaMf5zSbfajb7UBoLj/OaMf5zSbfajb7UBoLj/OaOv/6qPz/Ok2+1AX8xf89aWk/P86Tb7UBfzHUmKTb7UbfagWg7mim7faigVl5Bt9qNvtRt9qNvtQVfzDb7Ubfajb7UbfagL+Ybfajb7Ubfajb7UBfzDb7Ubfajb7UbfagL+Ybfajb7Ubfajb7UBfzDb7Ubfajb7UbfagL+Ybfajb7UY9qMe1AX8w2+1G32ox7UbfagLht9qNvtRt9qNvtQF/MNvtRt9qNvtRt9qAv5ht9qNvtRt9qNvtQF/MNvtRt9qNvtRt9qAv5ht9qNvtRt9qNvtQF/MNvtRt9qNvtRt9qAv5ht9qNvtRt9qNvtQF/MNvtRt9qNvtRt9qAv5ht9qNvtRt9qNvtQF/MNvtRt9qNvtRt9qAv5ht9qNvtRt9qNvtQF/MNvtRt9qNvtRt9qAv5ht9qNvtRt9qNvtQF/MNvtRt9qNvtRt9qAv5ht9qKNvtRQF/MNvtRt9qNvtRt9qAuG32o2+1G32o2+1AXDb7Ubfajb7UbfagLht9qNvtRt9qNvtQFw2+1G32o2+1G32oC4bfajb7UbfajGO1ABjB6Vj/ED4gaP8LPB99r2vX0en6Xp6b5pn5JPRUVerOxwFUck/ovj/wAf6P8AC7wfe69r19Fp2l6em+aV+ST0VFXqzscBVHJJ/GvzY/am/aj1j9pfxfHPMsmn+HrF2Gl6WHz5QPBllxw0zjqeiglV4yW/b/BbwXx/HOYc0708HTf7ypbfryQ6OTXyitX0T/IvFjxYwXB+C5VaeKmvchfb+9Lqorour081+iHwO+OWg/tA+A4te0C4Zot3lXVrOAtxYS4BMcqgnB7ggkMuCCe3XY9q/J/4FfHLXv2ffHcOvaDIu4gRXllIx+z6jBnJikH6qw5VsEdwf0x+B3xx0H9oHwHDr2gzfu8iK7tZCPP0+bAJikHr3VhwykEdwPY8dPAvF8E4r67gb1MBUfuy3cG/sTf/AKTLr11PL8HfGLDcW4f6pjGoYyC96OymlvKC/OPTpodft9qNvtRj2o2+1fzwfuIbfajb7Ubfajb7UBcNvtRt9qNvtRt9qAuG32o2+1G32o2+1AXDb7Ubfajb7UbfagLht9qNvtRt9qNvtQFw2+1G32o2+1G32oC4bfajb7Ubfajb7UBcNvtRt9qNvtRt9qAuG32o2+1G32o2+1AXDb7Ubfajb7UbfagLht9qNvtRt9qNvtQFw2+1G32o2+1G32oC4bfajb7Ubfajb7UBcNvtRRt9qKAuL+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfnWR4+8f6P8L/CF9r2vX0Wn6Xp6b5pn5Oeioq9WdjgKo5JNHj7x9pHww8IXuva9fRafpenpvmmf8lRV6s7HAVRySa/Nf8Aan/al1j9pfxdHNMsmn+HbF2/szSw+fLB4M0uOGmYHk9FBKrxkt+3eC/gvj+Ocw5pXp4Om/3lS3z5IdHJr5RWr6J/kXix4sYLg/A8sbTxU17kL/8Ak0u0V0XV6eaP2pv2o9Y/aX8XxzTLJp/h2xdhpmlh8+UDwZZccNMwPJ6KCVXjJbyvOKM4oxiv9WuHeHsBkeX0sryymqdGmrJL8W31b3berd2z/NrPc9xub46pmOYVHOrUd23+S7JLRLogxxXafAr4569+z547h17QpF5AivLORj5Gow5yYnH6qw5VsEdweLpO1dma5VhMywdTAY+mqlKompRaummcuW5lisvxUMZg5uFSDTjJOzTR+svwP+OGg/tAeA4de0GbMZIiurWQjz7CbAJikHr3DDhlII9B1+f85r8oPgV8dNe/Z88dQ69oUi/MBFeWUrHyNRhzkxOP1VhyrYI7g/ph8EPjfoPx/wDAcOvaDNuiJEV1ayEC4sJsAmKQevcMOGUgj0H+WPjr4F4vgrGPHYFOpgKj92W7pt7Qm/8A0mXXrqf6NeDnjFheLcKsHjGoY2C96PSaW84r/wBKj06aHX/n+dH5/nRn/OaPz/Ov55P3IPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADoo/P8AOigA/P8AOj8/zo/P86Pz/OgA/P8AOj8/zo/P86Pz/OgA/P8AOj8/zo/P86Pz/OgA/P8AOj8/zo/P86PzoAPz/Osjx7490j4YeEb3XtevotP0vT03zTP+Sqq9WdjgKo5JNHjzx7pPwx8JX2u69fRadpenpvmmf8lVR1Z2OAqjkk1+bP7VP7U2sftL+LklkWTT/Ddi7f2Zpe/OwHgzS44aZgeT0UEqvGS37d4L+DGYcc5heV6eDpv95Ut8+SHeTXyitX0T/I/FjxXwXB+BsrTxU17lO/8A5NLtFdO7080ftUftS6x+0v4ujmlWTT/Dli7f2ZpYfPlg8GaXHDTMDyeiglV4yW8pzijOORRjFf6tcO8O5fkeX0sryumqdGmrJL8W31b3berd2z/NnPc+xucY6pmOYVHOrUd23+S7JLRLogxiiiivcPHCiiigBO1dr8Cfjpr37PnjuHXtCkU7gIryylYiDUYc5MTjt3KsOVbBHcHi6TtXn5tlOEzPB1MBj6aqUqialFq6aZ3ZbmWKy/FQxuCm4VINOMk7NNH6y/BD43aD8f8AwHDr2gz7oWIiuraQgT2E2AWikHqOoYcMpBHt1+f85r8ofgR8dde/Z78dxa7ocisrARXtlKxEGow5yYn9PVXHKtgjuD+l/wAEfjboPx/8Bw69oM+6FiIrq2kIE9hNgFopR6jqCOGUgjrx/lj46eBmL4Jxjx2CvUwFR+7Ld02/sTf/AKTLr11P9G/B3xiwvFuFWDxbUMbBe9HpNLecV+cenTQ6/wDP86Pz/OjP+c0fn+dfzyfuIfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nRR+f50UAH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR09fzoAOnr+dZHjvx5pPwy8JXuu67fQ6dpenpvnmk7dgqjqzscBVHJJo8d+O9J+GfhK91zXb6HTtL09PMnmk7dgqjqzscBVHJJxX5tftV/tT6x+0v4tjkkWTT/Ddi7f2bpe7OzPBmlxw0zAnJ6KCVHct+2+C/gzmHHOY3leng6bXtKlvnyQ7ya+UVq+if5J4r+K2C4PwNlaeKmv3dO//AJNLtFdO7080n7VX7U+sftL+LY5JFk0/w3Yu39maXvzsB4M0uOGmYHk9FBKrxkt5TnBNGcE/zoxiv9W+HeHcvyPL6WV5XTVOlTVkl+Lb6t7tvVvV6H+bGfZ9jc4x1TMcwqOdWo7tv8l2SWiXRBjFFFFe4eOFFFFABRRRQAUUUUAJ2rt/gR8dte/Z68dRa7ocisrARXtlKxEGow5yYn9O5VxyrYI7g8TSdq87NspwmZ4OpgMfTVSlUTUotXTTO/LMzxWX4qGNwU3CpBpxknZpo/Wf4JfGzQfj94Eh17QZ90LER3NtIQJ7GbALRSj1HUEcMpBGc8dbn/Oa/KL4DfHjXv2efHUWu6HIrK4EV9YysRBqMOc+W/oRyVccq2COMg/ph8E/jXoPx98CQa/oM+6BiI7m3kIE9jNgFopR2I6gjhlIIJzX+WHjp4GYvgnGPG4K9TAVH7st3Bv7E3/6TLS/qf6N+DvjFheLcKsJi2oY2C96PSaW84r849Omh1v5/nR+f50Z/wA5o/P86/ns/cA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA/P86KPz/OigA/P86Pz/Oj8/zo/P8AOgA/P86Pz/Oj8/zo/P8AOgA6ev51k+OvHWk/DPwle65rl9Dp2l6fH5k88nbsFUdWdjgKo5JOKTxx460n4Z+FL3XNcvotO0vT08yeeTt2CqOrMzEKFHJJAFfm3+1b+1Tq/wC0x4sjZll07wzYu39m6Zu5GcgzTY4aZgT7ICVHdm/bPBfwZzDjrMb608HTa9pUt8+SPebXyitXtZ/kviv4rYHg/A9J4qafs4f+3S7RXTu9PQ/ar/ao1f8AaX8WxyOsmn+GrF2/s3TN3K54M0uOGmYE89FBKjuzeT9Cf50gOM/zpcYr/Vzhzh3L8jy+lleV01To01ZJfi2+re7b1b30P82M+z7HZxjqmY5jUc6tR3bf5LsktEuiDGKKKK9w8YKKKKACiiigAooooAKKKKACiiigBO1dv8Bfjxr37PPjqPXNDdWSQCK+sZWIg1GHOfLf0I5KuOVbBHGQeJo7V52bZTg8zwdTAY+mqlKompRaummehleaYrL8VDG4KbhUg04yTs00frN8FPjVoPx88Bwa/oNxugciO5t5MCexmwC0Uo7EdQRwwIIJzXW/n+dflF8Bfj1r37PPjuPXNDdZI5AIr6xlciDUYQc+W/oRyVccqcEcZB/TD4LfGvQvj14Ht9e0GcvDIfLuLeTAnsZgPmikXsR2I4YEEEg1/lf46eB2L4Jxv1zB3qYGo/clu4N7Qn/7bLqvM/0b8HfGDDcXYX6ri2oYymvej0mlvOK/9KXR+R1v5/nR+f50fnR+f51/Ph+3h+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50Ufn+dFAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQBznxb+GVj8ZfhtrHhfUsC11i2MQl27jbSjDRzAeqOFfHfbjvX5P+J/C994J8Saho+qQ/Z9S0u4ktbmL+5JGxVsHuOOD0IINfsGOa+I/+CofwO/snxLpvxAsYNsGsbNP1bA+7cRp+6lP+/EmzPbyE7vX9gfRI8Rf7MzqfDOLlalitYX2VRK1v+346ebjFH8u/Sa4FWPyqHEGFj+8w+k7bum3v/269fRyPkiigdKK/wBJD+BwooooAKKKKACiiigAooooAKKKKACiiigAooozxQAJG0uFRHkdiFVEG5nJ4AA9Sa/U39lL4IJ+z/8ABHSdCkjRdWmH2/VmUctdyAb1z3EahYge4jB718bf8E4/gd/wtD42DXr2Hdo/gvbesWHyy3hz9nT/AIDhpT7xKP4hX6H1/nz9MDxEdfFUeEMHP3adqlWz3k17kWvJPma7tdVp/bv0X+BXRw9XifEx96d4U7/yr4pL1a5U+yfcMf5zR+f50fn+dH5/nX8Qn9eh+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50Ufn+dFAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAYzXOfFz4aWXxk+GmteF9QO211m2MQl27vs8oIeKUDuY5FRwO5THeuj/AD/Ogc12Zfj6+CxNPGYWTjUpyUotbpp3T+85cdg6GMw88NiYqUJpxa7pqzX3H49+JvC174M8RX+j6pD9n1LS7iS0uoifuSRsVYA9xxwe4INUK+tv+CofwN/sjxRpvxAsYNsGs7bDVcD7tzGn7qQ/78SbM9vIXu9fJI6V/s34Z8bUOLOHMNndHecbTX8s1pJfft5NH+UfiDwlW4az7EZTVvaErxf80HrF/do/NMKKKK+9PiwooooAKKKKACiiigAooooAKKKKAA9KVY2kwEWSR2IUKo3MxPAAHck0meK+hP8AgnH8Dv8AhaPxtXXr2Ddo/gvZfMWGVlvDn7On/ASGlPvEo/iFfK8bcVYXhvJMTneMfuUYt27vaMV5yk0vmfScI8N4jPs3oZThviqySv2W8m/JK7+R9k/so/BFfgB8ENJ0OSNV1aYG/wBWI/iu5QC657hAFiB7iMHvXo34UpNJ+f51/i3n2d4vOMxrZpjpc1StJyk/NvZeSVkj/WLJMpw+V4Cjl2ESjTpRUV6JW183u33D8/zo/P8AOj8/zo/P868k9QPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/Oij8/zooAPz/Oj8/wA6Pz/Oj8/zoAPz/Oj8/wA6Pz/Oj8/zoAPz/OjFH5/nR+f50Ac58XfhlY/Gb4Z6z4X1A7bXWbYxCXbu+zyqQ8UoHcxyKjgd9mO9fk94m8L3vgzxFf6RqkP2fUtLuJLS6iJ/1ckbFWHuMg4PcYNfsIOa+If+CofwO/sfxVpvxAsYNtvrW2w1XA+7cxp+6kP+/EmzPbyFzy9f2D9EfxG/s3OqnDOMl+6xWsLvRVEtv+346ebjFH8t/Sa4FWPyqHEGFj+8w+k7Lem+v/br18k2fJVFA6UV/pGfwSFFFFABRRRQAUUUUAFFFFABQelFHWgBQjOPkV5GJChVGWYngAD1zX6l/sofBBf2f/gfpOhyxqmrTg3+rEc5u5QC659IwFiB6ER5718a/wDBOX4Hf8LS+Ny65ewbtH8F7L5yw+WW8Ofs6f8AASGlPvEo/iFfoiTxX+ff0wPEX2+Ko8IYKfu07VKtusmvci/Re80+sl12/tz6L/AvscPV4nxMdZ3hTuvsr45L1a5U12fcPwo/P86Pz/Oj8/zr+Hz+vg/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86KPz/OigA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgAxXN/F74ZWPxm+Ges+F9Q+S21i2MSy7d32aVSHimA7mORUfHfZjvXSfn+dA5rsy/MMRgcVTxmFk41KclKLW6ad0/vOTHYKhjMPPC4mKlCacWu6as0fj14k8MXvg3xDfaTqcJt9S0u4ktbqIn/VyRsVYZ7jIOD0PWqNfWn/BUL4G/wBj+LNN+IFjBtt9b22Oq4H3bmNP3Uh/34k2e3kDPL18liv9nPDPjahxZw5hs7o2vONpr+Wa0kvk9vJpn+UniBwlW4az3EZTVvaEm4v+aD1i/u0fmmFFFFfeHxYUUUUAFFFFABRRRQAHpQEZ1+RXdiQAqjLMTwAB6k0V9Bf8E5vgcPin8bl1y9g3aP4L2X8hYfLLeHP2aP8A4CQ0pzx+6A/iFfL8acVYXhvJMTneMfuUYuVu72jFecpNL5n0fCXDeIz7NqGU4Ve9Vklfst5N+SV38j7J/ZO+B6/s/wDwO0nQ5o1TV7gHUNWI5zdygFlz6RqFiB6ER5716R+FBPFH5/nX+LWfZ5i84zKvmmNlzVK0nKT829l5JWS8j/WPI8ow+VYCjl2ESjTpRUV6JdfN7t9w/P8AOj8/zo/P86Pz/OvIPUD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6Pz/Oj8/zo/P86AD8/wA6KPz/ADooAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADoxR+f50fn+dAHNfGD4Y2Pxn+GWteF9QPl2+sWxiWXbu+zSqQ8UoHcxyKj477cdyK/J/wAR+Gr3wd4gvtJ1SFrbUdMupLS6h6+XJG5Rxnv8wOCOCOa/YT868Z+M37B3gf45fEK68Tapc+JNP1K+jjS5GmXUMMU7IoQSFXhc7yqopwQCEHGck/0/9HPxuwnBdXE4DO3J4WquaPKuZxqLTbtKO/nFH88eOnhDieLKeHxmUKP1in7r5nyqUHrvZ/C9vVn5oke1GD6Cv0C/4dWfDf8A6C/jr/wPtP8A5Fo/4dV/Df8A6C/jr/wPtP8A5Fr+q/8AibTgH+et/wCC3/mfzj/xLPxp/LS/8Gf8A/P3B9BRg+gr9Av+HVfw3/6C/jr/AMD7T/5Fo/4dV/Df/oL+Ov8AwPtP/kWj/ibTgD+et/4Lf+Yf8Szcafy0v/Bn/APz9wfQUYPoK/QL/h1X8N/+gv46/wDA+0/+RaP+HVfw3/6C/jr/AMD7T/5Fo/4m04A/nrf+C3/mH/Es3Gn8tL/wZ/wD8/cH0FAB9BX6Bf8ADqv4b/8AQX8df+B9p/8AItH/AA6s+G4/5i/jr/wPtP8A5Fo/4m04B/nrf+Cn/mH/ABLNxp/LS/8ABn/APgER7x8gZjtHyjlmJ4AA7kkiv1I/ZM+B4/Z/+B2k6LNGqaxcg6hqxHObuUAsuf8ApmoWIHofLyOtcZ4D/wCCcHw9+HvjjSfEFveeKr+60W5S7ghvry3kt2kTlC6pAjHa21gAw5UZzXvmea/mn6RXjxgOMMJh8o4fc1Qi3Oo5LlcpL4Y27LftdrsfvvgX4M43hfE18zzpR9s1yQUXzJResnfu3ZLrZPowx7Ufn+dH5/nR+f51/JZ/TAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nRR+f50UAH5/nR+f50fn+dH5/nQAfn+dH5/nR+f50fn+dAB+f50fn+dH5/nR+f50AH5/nR+f50fn+dH5/nQAv4UlH5/nR+f50BcPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPz/ADo/P86Pz/Oj8/zoAPwo/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86Pz/Oj8/wA6Pz/OgA/P86KPz/OigA/P86Pz/OlxRigeon5/nR+f50uKMUBqJ+f50fn+dLijFAaifn+dH5/nS4oxQGon5/nR+f50uKMUBqJ+f50fn+dLijFAaifn+dH5/nS4oxQGon5/nR+f50uKMUBqJ+f50fn+dLijFAaifn+dH5/nS4oxQGon5/nR+f50uKMUBqJ+f50fn+dLijFAaifn+dH5/nS4oxQGon5/nR+f50uKMUBqJ+f50fn+dLijFAaifn+dH5/nS4oxQGon5/nR+f50uKMUBqJ+f50fn+dLijFAaifn+dH5/nS4oxQGon5/nR+f50uKMUBqJ+f50fn+dLijFAaifn+dH5/nS4oxQGon5/nRS4ooDU//2Q==");

},
78031(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958022-9538ba766ca93375b2c5de2dc64c5ba6.gif");

},
606869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478021-b8135d2cf7e606292dbd50542d160584.jpeg");

},
900419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958020-f0861c9dc79675ea334c2d989eace4f9.png");

},
923939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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qSh7gtgooopAFFFFABTl6U2nL0qo7gxvc0UdzRSAKhu/+PKf/rm38qmqG75s5x/0zb+VC3Ewtf8Ajzg/65r/ACqas621TT1tYQb+1BCLkecvp9al/tbTv+f+1/7/AC/402ncEXKKp/2tp3/P/a/9/l/xo/tbTv8An/tf+/y/40rMZcoqn/a2nf8AP/a/9/l/xo/tbTv+f+1/7/L/AI0WYFyiqf8Aa2nf8/8Aa/8Af5f8aP7W07/n/tf+/wAv+NFmBcoqn/a2nf8AP/a/9/l/xo/tbTv+f+1/7/L/AI0WYFyiqf8Aa2nf8/8Aa/8Af5f8aP7W07/n/tf+/wAv+NFmBcoqn/a2nf8AP/a/9/l/xo/tbTv+f+1/7/L/AI0WYFyq99/x4XH/AFyb+VR/2tp3/P8A2v8A3+X/ABqG81TT2sbhVvrYkxsABMvPH1ppO4mXrf8A49ov9wfyqSo7f/j3i/3B/KpKT3BBRRRSGFFFFABTl6U2nL0qo7gxvc0UdzRSAKKKKQBRRRTuFgoooouFgoooouFgoooouFgoooouFgoooouFgoooouFgoooouwsFFFFIAooooAKKKKACnL0ptOXpVR3Bje5oo7mikAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcvSm05elVHcGN7mijuaKQBRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApy9KbTl6VUdwY3uaKO5opAFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACnL0ptOXpVR3Bje5oo7mikAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcvSm05elVHcGN7minFRk0baGhXG0U7bRtpWC42inbaNtFguNop22jbRYLjaKdto20WC42inbaNtFguNop22jbRYLjaKdto20WC42inbaNtFguNop22jbRYLjaKdto20WC42inbaNtFguNop22jbRYLjacvSjbTlUYpxWoNn//2Q==");

},
314278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
117860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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qSh7gtgooopAFFFFABTl6U2nL0qo7gxvc0UdzRSAKhu/+PKf/rm38qmqG75s5x/0zb+VC3Ewtf8Ajzg/65r/ACqas621TT1tYQb+1BCLkecvp9al/tbTv+f+1/7/AC/402ncEXKKp/2tp3/P/a/9/l/xo/tbTv8An/tf+/y/40rMZcoqn/a2nf8AP/a/9/l/xo/tbTv+f+1/7/L/AI0WYFyiqf8Aa2nf8/8Aa/8Af5f8aP7W07/n/tf+/wAv+NFmBcoqn/a2nf8AP/a/9/l/xo/tbTv+f+1/7/L/AI0WYFyiqf8Aa2nf8/8Aa/8Af5f8aP7W07/n/tf+/wAv+NFmBcoqn/a2nf8AP/a/9/l/xo/tbTv+f+1/7/L/AI0WYFyq99/x4XH/AFyb+VR/2tp3/P8A2v8A3+X/ABqG81TT2sbhVvrYkxsABMvPH1ppO4mXrf8A49ov9wfyqSo7f/j3i/3B/KpKT3BBRRRSGFFFFABTl6U2nL0qo7gxvc0UdzRSAKKKKQBRRRTuFgoooouFgoooouFgoooouFgoooouFgoooouFgoooouFgoooouwsFFFFIAooooAKKKKACnL0ptOXpVR3Bje5oo7mikAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcvSm05elVHcGN7mijuaKQBRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApy9KbTl6VUdwY3uaKO5opAFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACnL0ptOXpVR3Bje5oo7mikAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcvSm05elVHcGN7minFRk0baGhXG0U7bRtpWC42inbaNtFguNop22jbRYLjaKdto20WC42inbaNtFguNop22jbRYLjaKdto20WC42inbaNtFguNop22jbRYLjaKdto20WC42inbaNtFguNop22jbRYLjacvSjbTlUYpxWoNn//2Q==");

},
449268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
824730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
756685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
345523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478025-5be73121d199bfd83cbe561713fd91ef.gif");

},
881146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
160220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
973715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438065-a7fe26a6205cdc253edfa47a156f1f52.jpg");

},
361325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478023-d1957a0030a9fbea7ffbc8ab13c588f2.gif");

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