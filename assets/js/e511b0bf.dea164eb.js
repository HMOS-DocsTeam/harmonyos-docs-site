"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["757974"], {
989489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_offscreencanvas_ui_js_components_offscreencanvas_md_e51_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-canvas-ui-js-components-offscreencanvas-ui-js-components-offscreencanvas-md-e51.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_offscreencanvas_ui_js_components_offscreencanvas_md_e51_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas/ui-js-components-offscreencanvas","title":"OffscreenCanvasRenderingContext2D对象","description":"使用OffscreenCanvas在离屏Canvas画布组件上进行绘制，绘制对象可以是矩形、文本、图片等。 离屏，即GPU在当前缓冲区以外新开辟的一个缓冲区。具体请参考OffscreenCanvasRenderingContext2D对象。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas/ui-js-components-offscreencanvas.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"OffscreenCanvasRenderingContext2D对象","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-offscreencanvas","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Path2D对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d/"},"next":{"title":"栅格布局","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-components-grid/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas/ui-js-components-offscreencanvas.md


const frontMatter = {
	title: 'OffscreenCanvasRenderingContext2D对象',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-offscreencanvas',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'OffscreenCanvasRenderingContext2D对象';

const assets = {

};



const toc = [{
  "value": "判断位置",
  "id": "判断位置",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "offscreencanvasrenderingcontext2d对象",
        children: "OffscreenCanvasRenderingContext2D对象"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用OffscreenCanvas在离屏Canvas画布组件上进行绘制，绘制对象可以是矩形、文本、图片等。 离屏，即GPU在当前缓冲区以外新开辟的一个缓冲区。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-offscreencanvasrenderingcontext2d/js-offscreencanvasrenderingcontext2d",
        children: "OffscreenCanvasRenderingContext2D对象"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例创建了一个OffscreenCanvas画布，再在画布上创建一个getContext2d对象，并设置filter属性改变图片样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <canvas ref=\"canvas1\"></canvas>\n  <select @change=\"change()\">\n    <option value=\"blur(5px)\">blur</option>\n    <option value=\"grayscale(50%)\">grayscale</option>\n    <option value=\"hue-rotate(45deg)\">hue-rotate</option>\n    <option value=\"invert(100%)\">invert</option>\n    <option value=\"drop-shadow(8px 8px 10px green)\">drop-shadow</option>\n    <option value=\"brightness(0.4)\">brightness</option>\n    <option value=\"opacity(0.25)\">opacity</option>\n    <option value=\"saturate(30%)\">saturate</option>\n    <option value=\"sepia(60%)\">sepia</option>\n    <option value=\"contrast(200%)\">contrast</option>\n  </select>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n}\n\ncanvas {\n    width: 600px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\nselect {\n    margin-top: 50px;\n    width: 250px;\n    height: 100px;\n    background-color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\n\nexport default {\n    data: {\n        el: null,\n        ctx: null,\n        offscreen: null,\n        offCanvas: null,\n        img: null,\n    },\n    onShow() {\n        this.ctx = this.$refs.canvas1.getContext('2d');\n        this.offscreen = new OffscreenCanvas(600, 500);\n        this.offCanvas = this.offscreen.getContext('2d');\n        this.img = new Image();\n        // \"common/images/2.png\"需要替换为开发者所需的图像资源文件\n        this.img.src = 'common/images/2.png';\n        // 图片成功获取触发方法\n        let _this = this;\n        this.img.onload = function () {\n            _this.offCanvas.drawImage(_this.img, 100, 100, 400, 300);\n        };\n        this.img.onerror = function () {\n            promptAction.showToast({ message: 'error', duration: 2000 })\n        };\n        var bitmap = this.offscreen.transferToImageBitmap();\n        this.ctx.transferFromImageBitmap(bitmap);\n    },\n    change(e) {\n        this.offCanvas.filter = e.newValue;\n        this.offCanvas.drawImage(this.img, 100, 100, 400, 300);\n        var bitmap = this.offscreen.transferToImageBitmap();\n        this.ctx.transferFromImageBitmap(bitmap);\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(341024)/* ["default"] */.A) + "",
        width: "280",
        height: "317"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "判断位置",
      children: "判断位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用isPointInPath判断坐标点是否在路径的区域内，使用isPointInStroke判断坐标点是否在路径的边缘线上，并在页面上显示返回结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"content\">\n    <text>坐标：{{X}}, {{Y}}</text>\n    <text>In path:{{textValue}}</text>\n    <text>In stroke:{{textValue1}}</text>\n  </div>\n  <canvas ref=\"canvas\"></canvas>\n  <button onclick=\"change\">Add(50)</button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n    display: flex;\n}\n\ncanvas {\n    width: 600px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\n.content {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\ntext {\n    font-size: 30px;\n    width: 300px;\n    height: 80px;\n    text-align: center;\n}\n\nbutton {\n    width: 180px;\n    height: 75px;\n    margin-top: 50px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    data: {\n        textValue: 0,\n        textValue1: 0,\n        X: 0,\n        Y: 250,\n    },\n    onShow() {\n        let canvas = this.$refs.canvas.getContext('2d');\n        let offscreen = new OffscreenCanvas(500, 500);\n        let offscreenCanvasCtx = offscreen.getContext('2d');\n        let offscreenCanvasCtx1 = offscreen.getContext('2d');\n        offscreenCanvasCtx1.arc(this.X, this.Y, 2, 0, 6.28);\n        offscreenCanvasCtx.lineWidth = 20;\n        offscreenCanvasCtx.rect(200, 150, 200, 200);\n        offscreenCanvasCtx.stroke();\n        this.textValue1 = offscreenCanvasCtx.isPointInStroke(this.X, this.Y) ? 'true' : 'false';\n        this.textValue = offscreenCanvasCtx.isPointInPath(this.X, this.Y) ? 'true' : 'false';\n        let bitmap = offscreen.transferToImageBitmap();\n        canvas.transferFromImageBitmap(bitmap);\n    },\n    change() {\n        if (this.X < 500) {\n            this.X = this.X + 50;\n        } else {\n            this.X = 0;\n        }\n        let canvas = this.$refs.canvas.getContext('2d');\n        let offscreen = new OffscreenCanvas(500, 500);\n        let offscreenCanvasCtx = offscreen.getContext('2d');\n        let offscreenCanvasCtx1 = offscreen.getContext('2d');\n        offscreenCanvasCtx1.arc(this.X, this.Y, 1, 0, 6.28)\n        offscreenCanvasCtx.lineWidth = 20\n        offscreenCanvasCtx.rect(200, 150, 200, 200);\n        offscreenCanvasCtx.stroke();\n        this.textValue1 = offscreenCanvasCtx.isPointInStroke(this.X, this.Y) ? 'true' : 'false';\n        this.textValue = offscreenCanvasCtx.isPointInPath(this.X, this.Y) ? 'true' : 'false';\n        let bitmap = offscreen.transferToImageBitmap();\n        canvas.transferFromImageBitmap(bitmap);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(41939)/* ["default"] */.A) + "",
        width: "313",
        height: "546"
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
341024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958136-5d0712928310ca18b5a0f0caf8f8b571.gif");

},
41939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478137-14cd784c796db27f88a3459bd32306a0.gif");

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