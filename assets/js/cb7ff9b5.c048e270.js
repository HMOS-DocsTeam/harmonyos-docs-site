"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["766076"], {
343642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_canvasrenderingcontext_2_d_ui_js_components_canvasrenderingcontext_2_d_md_cb7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-canvas-ui-js-components-canvasrenderingcontext-2-d-ui-js-components-canvasrenderingcontext-2-d-md-cb7.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_canvasrenderingcontext_2_d_ui_js_components_canvasrenderingcontext_2_d_md_cb7_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d/ui-js-components-canvasrenderingcontext2d","title":"CanvasRenderingContext2D对象","description":"使用CanvasRenderingContext2D在Canvas画布组件上进行绘制，绘制对象可以是图形、文本、线段、图片等。具体请参考CanvasRenderingContext2D对象。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d/ui-js-components-canvasrenderingcontext2d.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CanvasRenderingContext2D对象","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-canvasrenderingcontext2d","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Canvas对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas/"},"next":{"title":"Path2D对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d/ui-js-components-canvasrenderingcontext2d.md


const frontMatter = {
	title: 'CanvasRenderingContext2D对象',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-canvasrenderingcontext2d',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'CanvasRenderingContext2D对象';

const assets = {

};



const toc = [{
  "value": "画线段",
  "id": "画线段",
  "level": 2
}, {
  "value": "画边框",
  "id": "画边框",
  "level": 2
}, {
  "value": "填充渐变色",
  "id": "填充渐变色",
  "level": 2
}, {
  "value": "填充文字",
  "id": "填充文字",
  "level": 2
}, {
  "value": "添加图片",
  "id": "添加图片",
  "level": 2
}, {
  "value": "添加方法",
  "id": "添加方法",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "canvasrenderingcontext2d对象",
        children: "CanvasRenderingContext2D对象"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用CanvasRenderingContext2D在Canvas画布组件上进行绘制，绘制对象可以是图形、文本、线段、图片等。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D对象"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画线段",
      children: "画线段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用moveTo和lineTo画出一条线段，当使用closePath方法时会结束当前路径形成一个封闭图形。设置quadraticCurveTo（二次贝塞尔曲线）或bezierCurveTo（三次贝塞尔曲线）的值组成图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <canvas ref=\"canvas1\"></canvas>\n  <select @change=\"change\">\n    <option value=\"value1\"> line </option>\n    <option value=\"value2\"> quadratic </option>\n    <option value=\"value3\"> bezier </option>\n    <option value=\"value4\"> arc/ellipse </option>\n    <option value=\"value5\"> lineJoin/miterLimit </option>\n  </select>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n}\n\ncanvas {\n    width: 600px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\nselect {\n    margin-top: 50px;\n    width: 250px;\n    height: 100px;\n    background-color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    data: {\n        el: null,\n        ctx: null,\n    },\n    onShow() {\n        this.el = this.$refs.canvas1;\n        this.ctx = this.el.getContext(\"2d\", { antialias: true });\n        // 清除画布上的内容\n        this.ctx.clearRect(0, 0, 600, 500);\n        // 创建一个新的绘制路径\n        this.ctx.beginPath();\n        // 线端点以方形结束\n        this.ctx.lineCap = 'butt';\n        // 描边的宽度\n        this.ctx.lineWidth = 15;\n        // 创建一个新的绘制路径\n        this.ctx.beginPath();\n        // 路径从当前点移动到指定点\n        this.ctx.moveTo(200, 100);\n        // 从当前点到指定点进行路径连接\n        this.ctx.lineTo(400, 100);\n        // 边框绘制\n        this.ctx.stroke();\n        this.ctx.beginPath();\n        // 线端点以圆形结束\n        this.ctx.lineCap = 'round';\n        this.ctx.moveTo(200, 200);\n        this.ctx.lineTo(400, 200);\n        this.ctx.stroke();\n        // 线端点以方形结束\n        this.ctx.beginPath();\n        this.ctx.lineCap = 'square';\n        this.ctx.moveTo(200, 300);\n        this.ctx.lineTo(400, 300);\n        this.ctx.stroke();\n    },\n    change(e) {\n        if (e.newValue == 'value1') {\n            this.el = this.$refs.canvas1;\n            this.ctx = this.el.getContext(\"2d\", { antialias: true });\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 上\n            this.ctx.beginPath();\n            this.ctx.lineCap = 'butt';\n            this.ctx.moveTo(200, 100);\n            this.ctx.lineTo(400, 100);\n            this.ctx.stroke();\n            // 中\n            this.ctx.beginPath();\n            this.ctx.lineCap = 'round';\n            this.ctx.moveTo(200, 200);\n            this.ctx.lineTo(400, 200);\n            this.ctx.stroke();\n            // 下\n            this.ctx.beginPath();\n            this.ctx.lineCap = 'square';\n            this.ctx.moveTo(200, 300);\n            this.ctx.lineTo(400, 300);\n            this.ctx.stroke();\n        } else if (e.newValue == 'value2') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 上\n            this.ctx.beginPath();\n            this.ctx.moveTo(100, 150);\n            // 二次贝塞尔曲线的路径\n            this.ctx.quadraticCurveTo(300, 50, 500, 150);\n            this.ctx.stroke();\n            // 左\n            this.ctx.beginPath();\n            this.ctx.moveTo(200, 150);\n            this.ctx.quadraticCurveTo(250, 250, 250, 400);\n            this.ctx.stroke();\n            // 右\n            this.ctx.beginPath();\n            this.ctx.moveTo(400, 150);\n            this.ctx.quadraticCurveTo(350, 250, 350, 400);\n            this.ctx.stroke();\n        } else if (e.newValue == 'value3') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 下\n            this.ctx.beginPath();\n            this.ctx.moveTo(100, 200);\n            // 三次贝塞尔曲线的路径\n            this.ctx.bezierCurveTo(150, 100, 200, 100, 250, 200);\n            this.ctx.stroke();\n            // 左\n            this.ctx.beginPath();\n            this.ctx.moveTo(350, 200);\n            this.ctx.bezierCurveTo(400, 100, 450, 100, 500, 200);\n            this.ctx.stroke();\n            // 右\n            this.ctx.beginPath();\n            this.ctx.moveTo(200, 350);\n            this.ctx.bezierCurveTo(250, 500, 350, 500, 400, 350);\n            this.ctx.stroke();\n        } else if (e.newValue == 'value4') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            this.ctx.beginPath();\n            this.ctx.moveTo(100, 200);\n            // 弧线\n            this.ctx.arcTo(150, 300, 350, 300, 150);\n            this.ctx.stroke();\n            this.ctx.beginPath();\n            // 椭圆\n            this.ctx.ellipse(400, 250, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI, 1);\n            this.ctx.stroke();\n        } else if (e.newValue == 'value5') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 左上\n            this.ctx.beginPath();\n            // 在线段相连处绘制一个扇形\n            this.ctx.lineJoin = 'round';\n            this.ctx.moveTo(100, 100);\n            this.ctx.lineTo(200, 200);\n            this.ctx.lineTo(100, 250);\n            this.ctx.stroke();\n            // 左下\n            this.ctx.beginPath();\n            // 在线段相连处使用三角形为底填充\n            this.ctx.lineJoin = 'bevel';\n            this.ctx.moveTo(100, 300);\n            this.ctx.lineTo(200, 400);\n            this.ctx.lineTo(100, 450);\n            this.ctx.stroke();\n            // 右上\n            this.ctx.beginPath();\n            //线条相交处内角和外角的距离\n            this.ctx.lineJoin = 'miter';\n            this.ctx.miterLimit = 3;\n            this.ctx.moveTo(400, 100);\n            this.ctx.lineTo(450, 200);\n            this.ctx.lineTo(400, 250);\n            // 结束当前路径形成一个封闭路径\n            this.ctx.closePath();\n            this.ctx.stroke();\n            // 右下\n            this.ctx.beginPath();\n            this.ctx.lineJoin = 'miter';\n            this.ctx.miterLimit = 10;\n            this.ctx.moveTo(400, 300);\n            this.ctx.lineTo(450, 400);\n            this.ctx.lineTo(400, 450);\n            this.ctx.closePath();\n            this.ctx.stroke();\n        }\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97214)/* ["default"] */.A) + "",
        width: "313",
        height: "552"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画边框",
      children: "画边框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局定义画布（el）及画笔（ctx），初始化创建一个边框宽度为5的长方形。对边框的宽度（lineWidth）、颜色（strokeStyle）、虚化程度（setLineDash）进行改变，选用select组件添加change事件，下拉选择时触发change事件后画出改变后的图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <canvas ref=\"canvas1\"></canvas>\n  <select @change=\"change\">\n    <option value=\"value1\">strokeRect</option>\n    <option value=\"value2\">arc</option>\n    <option value=\"value3\">lineDashRect</option>\n    <option value=\"value4\">fillRect</option>\n  </select>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n    display: flex;\n}\n\ncanvas {\n    width: 600px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\nselect {\n    margin-top: 50px;\n    width: 250px;\n    height: 100px;\n    background-color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    data: {\n        el: null,\n        ctx: null,\n    },\n    onShow() {\n        this.el = this.$refs.canvas1;\n        this.ctx = this.el.getContext(\"2d\", { antialias: true });\n        this.ctx.lineWidth = 5;\n        this.ctx.strokeRect(200, 150, 200, 200);\n    },\n    change(e) {\n        if (e.newValue == 'value1') {\n            // 清除画布上的内容\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 边框宽度\n            this.ctx.lineWidth = 5;\n            // 边框颜色\n            this.ctx.strokeStyle = '#110000';\n            // 边框的虚化程度\n            this.ctx.setLineDash([0, 0]);\n            // 画具有边框的矩形\n            this.ctx.strokeRect(200, 150, 200, 200);\n        } else if (e.newValue == 'value2') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            this.ctx.lineWidth = 30;\n            this.ctx.strokeStyle = '#0000ff';\n            this.ctx.setLineDash([0, 0]);\n            // 画圆\n            this.ctx.arc(300, 250, 150, 0, 6.28);\n            //进行边框绘制\n            this.ctx.stroke();\n        } else if (e.newValue == 'value3') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            this.ctx.lineWidth = 5;\n            this.ctx.setLineDash([5, 5]);\n            this.ctx.strokeRect(200, 150, 200, 200);\n        } else if (e.newValue == 'value4') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 画一个有填充颜色的矩形\n            this.ctx.fillStyle = '#0000ff';\n            this.ctx.fillRect(200, 150, 200, 200);\n        }\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(244609)/* ["default"] */.A) + "",
        width: "313",
        height: "552"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "填充渐变色",
      children: "填充渐变色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#createlineargradient",
        children: "createLinearGradient"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#createradialgradient",
        children: "createRadialGradient"
      }), "属性创建渐变容器，接着用addColorStop方法添加多个色块组成渐变色，再设置fillStyle为gradient将渐变色填充到矩形中，最后设置阴影的模糊级别（shadowBlur）、阴影颜色（shadowColor）及阴影偏移量（shadowOffset）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <canvas ref=\"canvas1\"></canvas>\n  <select @change=\"change\">\n    <option value=\"value1\">LinearGradient</option>\n    <option value=\"value2\">RadialGradient</option>\n    <option value=\"value3\">shadowBlur</option>\n    <option value=\"value4\">shadowOffset</option>\n  </select>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n    display: flex;\n}\n\ncanvas {\n    width: 600px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\nselect {\n    margin-top: 50px;\n    width: 250px;\n    height: 100px;\n    background-color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    data: {\n        el: null,\n        ctx: null,\n    },\n    onShow() {\n        this.el = this.$refs.canvas1;\n        this.ctx = this.el.getContext(\"2d\", { antialias: true });\n        // 创建一个线性渐变色\n        let gradient = this.ctx.createLinearGradient(100, 100, 400, 300);\n        // 添加渐变颜色\n        gradient.addColorStop(0.0, 'red');\n        gradient.addColorStop(0.7, 'white');\n        gradient.addColorStop(1.0, 'green');\n        // 填充颜色为渐变色\n        this.ctx.fillStyle = gradient;\n        this.ctx.fillRect(100, 100, 400, 300);\n    },\n    change(e) {\n        if (e.newValue == 'value1') {\n            // 清除画布上的内容\n            this.ctx.clearRect(0, 0, 600, 500);\n            let gradient = this.ctx.createLinearGradient(100, 100, 400, 300);\n            gradient.addColorStop(0.0, 'red');\n            gradient.addColorStop(0.7, 'white');\n            gradient.addColorStop(1.0, 'green');\n            this.ctx.fillStyle = gradient;\n            // 设置绘制阴影时的模糊级别\n            this.ctx.shadowBlur = 0;\n            // 绘制阴影时和原有对象的垂直偏移值\n            this.ctx.shadowOffsetY = 0;\n            // 绘制阴影时和原有对象的水平偏移值\n            this.ctx.shadowOffsetX = 0;\n            this.ctx.fillRect(100, 100, 400, 300);\n        } else if (e.newValue == 'value2') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 创建一个径向渐变色\n            let gradient = this.ctx.createRadialGradient(300, 250, 20, 300, 250, 100);\n            gradient.addColorStop(0.0, 'red');\n            gradient.addColorStop(0.7, 'white');\n            gradient.addColorStop(1.0, 'green');\n            this.ctx.shadowBlur = 0;\n            this.ctx.shadowOffsetY = 0;\n            this.ctx.shadowOffsetX = 0;\n            this.ctx.fillStyle = gradient;\n            this.ctx.fillRect(100, 100, 400, 300);\n        } else if (e.newValue == 'value3') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            let gradient = this.ctx.createLinearGradient(100, 100, 400, 400);\n            gradient.addColorStop(0.0, 'red');\n            gradient.addColorStop(0.5, 'white');\n            gradient.addColorStop(1, '#17ea35');\n            // 设置绘制阴影时的模糊级别\n            this.ctx.shadowBlur = 30;\n            // 绘制阴影时的阴影颜色\n            this.ctx.shadowColor = 'rgb(229, 16, 16)';\n            this.ctx.fillStyle = gradient;\n            this.ctx.fillRect(100, 100, 400, 300);\n        } else if (e.newValue == 'value4') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            this.ctx.clearRect(0, 0, 600, 500);\n            let gradient = this.ctx.createRadialGradient(300, 250, 20, 300, 250, 200);\n            gradient.addColorStop(0.0, 'red');\n            gradient.addColorStop(0.5, 'white');\n            gradient.addColorStop(1, '#17ea35');\n            // 设置绘制阴影时的模糊级别\n            this.ctx.shadowBlur = 30;\n            this.ctx.shadowOffsetY = 30;\n            // 绘制阴影时的阴影颜色\n            this.ctx.shadowColor = 'rgb(23, 1, 1)';\n            this.ctx.fillStyle = gradient;\n            this.ctx.fillRect(100, 100, 400, 300);\n        }\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(867683)/* ["default"] */.A) + "",
        width: "313",
        height: "552"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "填充文字",
      children: "填充文字"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先创建文本，再用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#filltext",
        children: "fillText"
      }), "方法把文字写在画布上。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#globalalpha",
        children: "globalAlpha"
      }), "属性改变基线透明度，使基线不会挡住文字，再设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#textalign",
        children: "textAlign"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#textbaseline",
        children: "textBaseline"
      }), "属性确定文字基于基线的位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <canvas ref=\"canvas1\"></canvas>\n  <select @change=\"change\">\n    <option value=\"value1\">text</option>\n    <option value=\"value2\">textBaseline</option>\n    <option value=\"value3\">textAlign</option>\n  </select>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n}\n\ncanvas {\n    width: 600px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\nselect {\n    margin-top: 50px;\n    width: 250px;\n    height: 100px;\n    background-color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    data: {\n        el: null,\n        ctx: null,\n    },\n    onShow() {\n        this.el = this.$refs.canvas1;\n        this.ctx = this.el.getContext(\"2d\", { antialias: true });\n        // 创建文本\n        let text = \"Hello World\";\n        // 设置字体\n        this.ctx.font = '30px';\n        this.ctx.fillText(\"with:\" + this.ctx.measureText(text).width, 200, 300);\n        // 填充字体文本\n        this.ctx.fillText(text, 200, 250);\n    },\n    change(e) {\n        if (e.newValue == 'value1') {\n            // 清除画布上的内容\n            this.ctx.clearRect(0, 0, 600, 500);\n            // 开始新的路径\n            this.ctx.beginPath();\n            // 初始化textAlign值\n            this.ctx.textAlign = 'left';\n            // 初始化textBaseline\n            this.ctx.textBaseline = 'alphabetic';\n            // 设置字体\n            this.ctx.font = '30px Arial';\n            let text = \"Hello World\";\n            // 获取字体width\n            this.ctx.fillText(\"with:\" + this.ctx.measureText(text).width, 200, 300);\n            // 填充字体文本\n            this.ctx.fillText(text, 200, 250);\n        } else if (e.newValue == 'value2') {\n            this.ctx.clearRect(0, 0, 600, 500);\n            this.ctx.beginPath();\n            // 设置透明度\n            this.ctx.globalAlpha = 0.1;\n            // 设置线宽度\n            this.ctx.lineWidth = 10;\n            // 设置线段颜色\n            this.ctx.strokeStyle = '#0000ff';\n            // 从当前点移动到指定点\n            this.ctx.moveTo(0, 240);\n            // 当前点到指定点进行路径连接\n            this.ctx.lineTo(600, 240);\n            this.ctx.stroke();\n            this.ctx.font = '35px';\n            this.ctx.globalAlpha = 1;\n            // 初始化textAlign值\n            this.ctx.textAlign = 'left';\n            // 设置textBaseline\n            this.ctx.textBaseline = 'top';\n            this.ctx.fillText('Top', 50, 240);\n            this.ctx.textBaseline = 'bottom';\n            this.ctx.fillText('Bottom', 200, 240);\n            this.ctx.textBaseline = 'middle';\n            this.ctx.fillText('Middle', 400, 240);\n        } else if (e.newValue == 'value3') {\n            // 清除画布上的内容\n            this.ctx.clearRect(0, 0, 600, 500);\n            this.ctx.beginPath();\n            this.ctx.globalAlpha = 0.1;\n            this.ctx.lineWidth = 10;\n            this.ctx.strokeStyle = '#0000ff';\n            this.ctx.moveTo(300, 0);\n            this.ctx.lineTo(300, 500);\n            this.ctx.stroke();\n            this.ctx.font = '35px';\n            this.ctx.globalAlpha = 1;\n            // 初始化 textBaseline\n            this.ctx.textBaseline = 'alphabetic';\n            // 设置textAlign\n            this.ctx.textAlign = 'left';\n            this.ctx.fillText('textAlign=left', 300, 100);\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('textAlign=center', 300, 250);\n            this.ctx.textAlign = 'right';\n            this.ctx.fillText('textAlign=right', 300, 400);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(430402)/* ["default"] */.A) + "",
        width: "313",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(609480)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ltr布局模式下start和left一致，rtl布局模式下start和right一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加图片",
      children: "添加图片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建图片对象后使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#drawimage",
        children: "drawImage"
      }), "方法画出图片，给图片设置一些动画样式如scale（缩放）、translate（平移）或rotate（旋转）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"content\">\n    <canvas ref=\"canvas0\"></canvas>\n    <text onclick=\"change\">change</text>\n    <canvas ref=\"canvas1\"></canvas>\n    <text onclick=\"rotate\">rotate</text>\n    <canvas ref=\"canvas2\"></canvas>\n    <text onclick=\"scale\">scale</text>\n    <canvas ref=\"canvas3\"></canvas>\n    <text onclick=\"translate\" style=\"width: 300px;\">translate</text>\n    <canvas ref=\"canvas4\"></canvas>\n    <text onclick=\"transform\" style=\"width: 300px;\">transform</text>\n    <canvas ref=\"canvas5\"></canvas>\n    <text onclick=\"setTransform\" style=\"width: 300px;\">setTransform</text>\n    <canvas ref=\"canvas6\"></canvas>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    flex-direction: column;\n    background-color: #F1F3F5;\n    align-items: center;\n}\n\ncanvas {\n    width: 600px;\n    height: 300px;\n    margin-bottom: 100px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\n.content {\n    width: 80%;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\ntext {\n    font-size: 35px;\n    width: 200px;\n    height: 80px;\n    color: white;\n    border-radius: 20px;\n    text-align: center;\n    background-color: #6060e7;\n    margin-bottom: 30px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\n\nexport default {\n    data: {\n        compositeOperation: 'source-over'\n    },\n    onShow() {\n        let ctx = this.$refs.canvas0.getContext('2d');\n        // 创建图片对象\n        let img = new Image();\n        // 设置图片路径\n        // \"common/images/2.png\"需要替换为开发者所需的图像资源文件\n        img.src = 'common/images/2.png';\n        // 设置图片宽度\n        img.width = 150;\n        // 设置图片高度\n        img.height = 150;\n        // 图片平铺容器\n        var pat = ctx.createPattern(img, 'repeat');\n        ctx.fillStyle = pat;\n        ctx.fillRect(0, 0, 600, 300);\n    },\n    change() {\n        // 创建画布后得到画笔\n        let ctx = this.$refs.canvas1.getContext('2d');\n        ctx.clearRect(0, 0, 600, 1000);\n        if (this.compositeOperation == 'source-over') {\n            this.compositeOperation = 'destination-over';\n        } else {\n            this.compositeOperation = 'source-over';\n        }\n        ctx.globalCompositeOperation = this.compositeOperation;\n        let img = new Image();\n        img.src = 'common/images/2.png';\n        // 图片成功获取触发方法\n        img.onload = function () {\n            ctx.drawImage(img, 150, 20, 200, 200);\n        };\n        let img1 = new Image();\n        // \"common/images/3.png\"需要替换为开发者所需的图像资源文件\n        img1.src = 'common/images/3.png';\n        img1.onload = function () {\n            // 画上图片\n            ctx.drawImage(img1, 250, 80, 200, 200);\n        };\n        // 图片获取失败触发方法\n        img1.onerror = function () {\n            promptAction.showToast({ message: 'error', duration: 2000 })\n        };\n    },\n    rotate() {\n        let ctx = this.$refs.canvas2.getContext('2d');\n        ctx.clearRect(0, 0, 600, 300);\n        // 旋转\n        ctx.rotate(10 * Math.PI / 180);\n        let img = new Image();\n        img.src = 'common/images/2.png';\n        img.onload = function () {\n            ctx.drawImage(img, 300, 0, 100, 100);\n        };\n    },\n    scale() {\n        let ctx = this.$refs.canvas3.getContext('2d');\n        ctx.clearRect(0, 0, 600, 200);\n        // 缩放\n        ctx.scale(1.3, 1.2);\n        let img = new Image();\n        img.src = 'common/images/2.png';\n        img.onload = function () {\n            ctx.drawImage(img, 0, 0, 50, 50);\n        };\n    },\n    translate() {\n        let ctx = this.$refs.canvas4.getContext('2d');\n        ctx.clearRect(0, 0, 600, 300);\n        ctx.translate(10, 0);\n        let img = new Image();\n        img.src = 'common/images/2.png';\n        img.onload = function () {\n            ctx.drawImage(img, 0, 50, 300, 200);\n        };\n    },\n    transform() {\n        let ctx = this.$refs.canvas5.getContext('2d');\n        ctx.clearRect(0, 0, 600, 300);\n        ctx.transform(1.1, 0.1, 0.1, 1, 10, 0);\n        let img = new Image();\n        img.src = 'common/images/2.png';\n        img.onload = function () {\n            ctx.drawImage(img, 0, 50, 100, 100);\n        };\n    },\n    setTransform() {\n        let ctx = this.$refs.canvas6.getContext('2d');\n        ctx.clearRect(0, 0, 600, 300);\n        ctx.setTransform(1.1, 0.1, 0.1, 1, 10, 0);\n        let img = new Image();\n        img.src = 'common/images/2.png';\n        img.onload = function () {\n            ctx.drawImage(img, 0, 50, 100, 100);\n        };\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(42181)/* ["default"] */.A) + "",
        width: "298",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(803536)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setTransform方法使用的参数和transform()方法相同，但setTransform()方法会重置现有的变换矩阵并创建新的变换矩阵。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "变换后的坐标计算方式（x和y为变换前坐标，x'和y'为变换后坐标）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "x' = scaleX * x + skewY * y + translateX"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "y' = skewX * x + scaleY * y + translateY"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加方法",
      children: "添加方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "save方法可对画笔样式进行存储，restore可对存储的画笔进行恢复。如下面的示例，先设置画笔为红色，在保存画笔后对画布进行清除并改变画笔为蓝色，当我们直接使用画笔时会画出一个蓝色矩形，对存储的画笔进行恢复后就可画出红色矩形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"content\">\n    <canvas ref=\"canvas\"></canvas>\n  </div>\n  <div class=\"content\">\n    <text onclick=\"save\">save</text>\n    <text onclick=\"clear\">clear</text>\n    <text onclick=\"restore\">restore</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    background-color: #F1F3F5;\n    align-items: center;\n}\n\ncanvas {\n    margin-top: 300px;\n    width: 600px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\n.content {\n    width: 80%;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\ntext {\n    width: 150px;\n    height: 80px;\n    color: white;\n    border-radius: 20px;\n    text-align: center;\n    background-color: #6060e7;\n    margin-bottom: 30px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\n\nexport default {\n    data: {\n        ctx: '',\n    },\n    onShow() {\n        this.ctx = this.$refs.canvas.getContext('2d');\n        this.ctx.fillStyle = 'red';\n        this.ctx.fillRect(200, 150, 200, 200);\n    },\n    save() {\n        // 画笔储存\n        this.ctx.save();\n        promptAction.showToast({ message: 'save succeed' });\n    },\n    clear() {\n        this.ctx.clearRect(0, 0, 600, 500);\n        // 改变画笔颜色\n        this.ctx.fillStyle = '#2133d2';\n    },\n    restore() {\n        this.ctx.beginPath();\n        // 画笔恢复\n        this.ctx.restore();\n        this.ctx.fillRect(200, 150, 200, 200);\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(94343)/* ["default"] */.A) + "",
        width: "313",
        height: "589"
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
42181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958134-d201506fdf9151a6ff7cb6c82ab5f9a0.gif");

},
430402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438179-a16e6d11dc5509a579e1dfd13ad03ff6.gif");

},
97214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958132-1477f245f11c89e7cd9271b467c779a8.gif");

},
609480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
803536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
94343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478135-0a528deddb42410969b26d18e1044381.gif");

},
867683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798484-45a9666dcb5809b4886437c9eb61fdfb.gif");

},
244609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478133-c14ffae20f33a318723b6a2cabc85803.gif");

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