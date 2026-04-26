"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["427003"], {
27538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_path_2_d_ui_js_components_path_2_d_md_8ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-canvas-ui-js-components-path-2-d-ui-js-components-path-2-d-md-8ad.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_path_2_d_ui_js_components_path_2_d_md_8ad_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d/ui-js-components-path2d","title":"Path2D对象","description":"路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的stroke接口进行绘制。具体请参考Path2D对象。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d/ui-js-components-path2d.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Path2D对象","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-path2d","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CanvasRenderingContext2D对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d/"},"next":{"title":"OffscreenCanvasRenderingContext2D对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d/ui-js-components-path2d.md


const frontMatter = {
	title: 'Path2D对象',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-path2d',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Path2D对象';

const assets = {

};



const toc = [{
  "value": "画线段",
  "id": "画线段",
  "level": 2
}, {
  "value": "画图形",
  "id": "画图形",
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
        id: "path2d对象",
        children: "Path2D对象"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#stroke-1",
        children: "stroke"
      }), "接口进行绘制。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d/js-components-canvas-path2d",
        children: "Path2D对象"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画线段",
      children: "画线段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Path2D对象，使用多条线段组合图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml --> \n<div class=\"container\">\n  <canvas ref=\"canvas\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    background-color: #F1F3F5;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}\n\ncanvas {\n    width: 600px;\n    height: 600px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    onShow() {\n        let ctx = this.$refs.canvas.getContext('2d', {\n            antialias: true\n        });\n        let path = ctx.createPath2D();\n        // 房顶\n        path.moveTo(10, 300);\n        path.lineTo(210, 100);\n        path.lineTo(410, 300);\n        // 屋子\n        path.moveTo(10, 300);\n        path.lineTo(410, 300);\n        path.lineTo(410, 600);\n        path.lineTo(10, 600);\n        path.closePath();\n        // 窗子\n        path.moveTo(50, 450);\n        path.bezierCurveTo(70, 350, 130, 350, 150, 450);\n        path.closePath();\n        // 门\n        path.moveTo(250, 450);\n        path.rect(250, 450, 100, 600);\n        path.closePath();\n        // 烟囱\n        path.moveTo(365, 250);\n        path.ellipse(310, 215, 30, 130, 0, Math.PI * 0.04, Math.PI * 1.1, 1);\n        // 树\n        path.moveTo(485, 450);\n        path.quadraticCurveTo(510, 500, 485, 600);\n        path.moveTo(550, 450);\n        path.quadraticCurveTo(525, 500, 550, 600);\n        path.moveTo(600, 535);\n        path.arc(520, 450, 85, 0, 6);\n        ctx.stroke(path);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(137822)/* ["default"] */.A) + "",
        width: "438",
        height: "690"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画图形",
      children: "画图形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先使用createPath2D创建出路径对象，只对path1路径进行描边，所以画布上就只会出现path1的路径图形。点击text组件触发addPath方法会把path2路径对象当参数传入path1中，再对path1对象进行描边（stroke）操作后画布出现path1和path2两个图形。点击change文本改变setTransform属性值为setTransform(2, 0.1, 0.1, 2, 0,0)，图形变大并向左倾斜。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <canvas ref=\"canvas\"></canvas>\n    <div class=\"content\">\n        <text onclick=\"addPath\">{{ isAdd }}</text>\n        <text onclick=\"setTransform\">{{ textName }}</text>\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    background-color: #F1F3F5;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}\n\ncanvas {\n    width: 600px;\n    height: 600px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n\n.content {\n    width: 80%;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\ntext {\n    width: 150px;\n    height: 80px;\n    color: white;\n    border-radius: 20px;\n    text-align: center;\n    background-color: #6060e7;\n    margin-bottom: 30px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    data: {\n        ctx: null,\n        path1: null,\n        path2: null,\n        path3: null,\n        isAdd: 'addPath2',\n        isChange: true,\n        textName: 'change'\n    },\n    onShow() {\n        this.ctx = this.$refs.canvas.getContext('2d', {\n            antialias: true\n        });\n        this.path1 = this.ctx.createPath2D();\n        // 正方形\n        this.path1.moveTo(200, 200);\n        this.path1.lineTo(400, 200);\n        this.path1.lineTo(400, 400);\n        this.path1.lineTo(200, 400);\n        this.path1.closePath();\n        this.path2 = this.ctx.createPath2D();\n        // 圆形\n        this.path2.arc(300, 300, 75, 0, 6.28);\n        this.ctx.stroke(this.path1);\n    },\n    addPath() {\n        if (this.isAdd == 'addPath2') {\n            // 删除指定区域的绘制内容\n            this.ctx.clearRect(0, 0, 600, 600);\n            this.ctx.beginPath();\n            // 将另一个的路径添加到当前路径对象中\n            this.path2.addPath(this.path1);\n            this.ctx.stroke(this.path2);\n            this.isAdd = 'clearPath2';\n        } else {\n            this.ctx.clearRect(0, 0, 600, 600);\n            this.ctx.stroke(this.path1);\n            this.isAdd = 'addPath2';\n        }\n    },\n    setTransform() {\n        if (this.isChange) {\n            this.ctx.clearRect(0, 0, 600, 600);\n            this.path3 = this.ctx.createPath2D();\n            this.path3.arc(150, 150, 100, 0, 6.28);\n            // 重置现有的变换矩阵并创建新的变换矩阵\n            this.path3.setTransform(2, 0.1, 0.1, 2, 0, 0);\n            this.ctx.stroke(this.path3);\n            this.isChange = !this.isChange;\n            this.textName = 'back';\n        } else {\n            this.ctx.clearRect(0, 0, 600, 600);\n            this.path3.setTransform(0.5, -0.1, -0.1, 0.5, 0, 0);\n            this.ctx.stroke(this.path3);\n            this.isChange = !this.isChange;\n            this.textName = 'change';\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(82088)/* ["default"] */.A) + "",
        width: "313",
        height: "523"
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
137822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798486-c9d58b7d8bfbf6810c13706008879f1c.png");

},
82088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438181-8593492eb823bfad68a9b6af2813f91b.gif");

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