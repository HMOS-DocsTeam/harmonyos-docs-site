"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["121258"], {
293164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_canvas_comp_js_components_canvas_path_2_d_js_components_canvas_path_2_d_md_f27_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-canvas-comp-js-components-canvas-path-2-d-js-components-canvas-path-2-d-md-f27.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_canvas_comp_js_components_canvas_path_2_d_js_components_canvas_path_2_d_md_f27_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d/js-components-canvas-path2d","title":"Path2D对象","description":"路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的stroke接口进行绘制。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d/js-components-canvas-path2d.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d/js-components-canvas-path2d","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d/js-components-canvas-path2d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Path2D对象","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-path2d","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-canvas-path2d"},"sidebar":"ref","previous":{"title":"ImageData对象","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata"},"next":{"title":"ImageBitmap对象","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagebitmap/js-components-canvas-imagebitmap"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d/js-components-canvas-path2d.md


const frontMatter = {
	title: 'Path2D对象',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-path2d',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-canvas-path2d'
};
const contentTitle = 'Path2D对象';

const assets = {

};



const toc = [{
  "value": "addPath",
  "id": "addpath",
  "level": 2
}, {
  "value": "setTransform",
  "id": "settransform",
  "level": 2
}, {
  "value": "closePath",
  "id": "closepath",
  "level": 2
}, {
  "value": "moveTo",
  "id": "moveto",
  "level": 2
}, {
  "value": "lineTo",
  "id": "lineto",
  "level": 2
}, {
  "value": "bezierCurveTo",
  "id": "beziercurveto",
  "level": 2
}, {
  "value": "quadraticCurveTo",
  "id": "quadraticcurveto",
  "level": 2
}, {
  "value": "arc",
  "id": "arc",
  "level": 2
}, {
  "value": "arcTo",
  "id": "arcto",
  "level": 2
}, {
  "value": "ellipse",
  "id": "ellipse",
  "level": 2
}, {
  "value": "rect",
  "id": "rect",
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
        id: "path2d对象",
        children: "Path2D对象"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d#stroke",
        children: "stroke"
      }), "接口进行绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551916)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 4开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addpath",
      children: "addPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addPath(path: Object): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将另一个路径添加到当前的路径对象中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加到当前路径的路径对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path1 = ctx.createPath2D(\"M250 150 L150 350 L350 350 Z\");\n    var path2 = ctx.createPath2D();\n    path2.addPath(path1);\n    ctx.stroke(path2);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(803417)/* ["default"] */.A) + "",
        width: "300",
        height: "254"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settransform",
      children: "setTransform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTransform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置路径变换矩阵。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴的缩放比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skewX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴的倾斜角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skewY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴的倾斜角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴的缩放比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translateX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴的平移距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translateY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴的平移距离。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 300px; height: 250px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D(\"M250 150 L150 350 L350 350 Z\");\n    path.setTransform(0.8, 0, 0, 0.4, 0, 0);\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(144002)/* ["default"] */.A) + "",
        width: "190",
        height: "154"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "closepath",
      children: "closePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "closePath(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将路径的当前点移回到路径的起点，当前点到起点间画一条直线。如果形状已经闭合或只有一个点，则此功能不执行任何操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.moveTo(200, 100);\n    path.lineTo(300, 100);\n    path.lineTo(200, 200);\n    path.closePath();\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(868639)/* ["default"] */.A) + "",
        width: "299",
        height: "165"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moveto",
      children: "moveTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "moveTo(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将路径的当前坐标点移动到目标点，移动过程中不绘制线条。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点X轴坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点Y轴坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 300px; height: 250px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.moveTo(50, 100);\n    path.lineTo(250, 100);\n    path.lineTo(150, 200);\n    path.closePath();\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395661)/* ["default"] */.A) + "",
        width: "169",
        height: "143"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lineto",
      children: "lineTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineTo(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从当前点绘制一条直线到目标点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点X轴坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点Y轴坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 400px; height: 450px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.moveTo(100, 100);\n    path.lineTo(100, 200);\n    path.lineTo(200, 200);\n    path.lineTo(200, 100);\n    path.closePath();\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(229372)/* ["default"] */.A) + "",
        width: "176",
        height: "176"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beziercurveto",
      children: "bezierCurveTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建三次贝塞尔曲线的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个贝塞尔参数的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp1y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个贝塞尔参数的y坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个贝塞尔参数的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp2y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个贝塞尔参数的y坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的y坐标值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 300px; height: 250px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.moveTo(10, 10);\n    path.bezierCurveTo(20, 100, 200, 100, 200, 20);\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(762033)/* ["default"] */.A) + "",
        width: "146",
        height: "117"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quadraticcurveto",
      children: "quadraticCurveTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建二次贝塞尔曲线的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "贝塞尔参数的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "贝塞尔参数的y坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的y坐标值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 300px; height: 250px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.moveTo(10, 10);\n    path.quadraticCurveTo(100, 100, 200, 20);\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(918280)/* ["default"] */.A) + "",
        width: "139",
        height: "97"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arc",
      children: "arc"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制弧线路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线圆心的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线圆心的y坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的圆半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的起始弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的终止弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "counterclockwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否逆时针绘制圆弧，true为逆时针，false为顺时针。  默认值：false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 300px; height: 250px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.arc(100, 75, 50, 0, 6.28);\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64365)/* ["default"] */.A) + "",
        width: "120",
        height: "107"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arcto",
      children: "arcTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依据圆弧经过的点和圆弧半径创建圆弧路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第一个点的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第一个点的y坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第二个点的x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第二个点的y坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧的圆半径值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 300px; height: 250px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.arcTo(150, 20, 150, 70, 50);\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(341960)/* ["default"] */.A) + "",
        width: "122",
        height: "99"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ellipse",
      children: "ellipse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在规定的矩形区域绘制一个椭圆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆圆心的x轴坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆圆心的y轴坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radiusX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆x轴的半径长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radiusY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆y轴的半径长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆的旋转角度，单位为弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的起始点角度，以弧度表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的结束点角度，以弧度表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "counterclockwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否以逆时针方向绘制椭圆，0为顺时针，1为逆时针。其它数值均按默认值处理。  默认值：0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 500px; height: 450px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.ellipse(200, 200, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI, 1);\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962535)/* ["default"] */.A) + "",
        width: "226",
        height: "210"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rect",
      children: "rect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rect(x: number, y: number, width: number, height: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建矩形路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角x坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas\" style=\"width: 500px; height: 450px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path = ctx.createPath2D();\n    path.rect(20, 20, 100, 100);\n    ctx.stroke(path);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(330501)/* ["default"] */.A) + "",
        width: "111",
        height: "112"
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
341960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
144002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
962535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
918280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
762033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
803417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440277-ea0bcc8befbc39eb97a981e933deb65b.png");

},
64365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
395661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
868639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480233-91b8b8c13f73a7b32e4d63dc209f9828.png");

},
551916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
330501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
229372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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