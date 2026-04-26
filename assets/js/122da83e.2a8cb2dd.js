"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["773668"], {
833371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_canvas_comp_js_components_canvas_canvasrenderingcontext_2_d_js_components_canvas_canvasrenderingcontext_2_d_md_122_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-canvas-comp-js-components-canvas-canvasrenderingcontext-2-d-js-components-canvas-canvasrenderingcontext-2-d-md-122.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_canvas_comp_js_components_canvas_canvasrenderingcontext_2_d_js_components_canvas_canvasrenderingcontext_2_d_md_122_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d","title":"CanvasRenderingContext2D对象","description":"从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CanvasRenderingContext2D对象","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-canvas-canvasrenderingcontext2d"},"sidebar":"ref","previous":{"title":"canvas组件","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas/js-components-canvas-canvas"},"next":{"title":"Image对象","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-image/js-components-canvas-image"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d.md


const frontMatter = {
	title: 'CanvasRenderingContext2D对象',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-canvas-canvasrenderingcontext2d',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-canvas-canvasrenderingcontext2d'
};
const contentTitle = 'CanvasRenderingContext2D对象';

const assets = {

};



const toc = [{
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "fillStyle",
  "id": "fillstyle",
  "level": 3
}, {
  "value": "lineWidth",
  "id": "linewidth",
  "level": 3
}, {
  "value": "strokeStyle",
  "id": "strokestyle",
  "level": 3
}, {
  "value": "lineCap",
  "id": "linecap",
  "level": 3
}, {
  "value": "lineJoin",
  "id": "linejoin",
  "level": 3
}, {
  "value": "miterLimit",
  "id": "miterlimit",
  "level": 3
}, {
  "value": "font",
  "id": "font",
  "level": 3
}, {
  "value": "textAlign",
  "id": "textalign",
  "level": 3
}, {
  "value": "textBaseline",
  "id": "textbaseline",
  "level": 3
}, {
  "value": "globalAlpha",
  "id": "globalalpha",
  "level": 3
}, {
  "value": "lineDashOffset",
  "id": "linedashoffset",
  "level": 3
}, {
  "value": "globalCompositeOperation",
  "id": "globalcompositeoperation",
  "level": 3
}, {
  "value": "shadowBlur",
  "id": "shadowblur",
  "level": 3
}, {
  "value": "shadowColor",
  "id": "shadowcolor",
  "level": 3
}, {
  "value": "shadowOffsetX",
  "id": "shadowoffsetx",
  "level": 3
}, {
  "value": "shadowOffsetY",
  "id": "shadowoffsety",
  "level": 3
}, {
  "value": "imageSmoothingEnabled",
  "id": "imagesmoothingenabled",
  "level": 3
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "fillRect",
  "id": "fillrect",
  "level": 3
}, {
  "value": "clearRect",
  "id": "clearrect",
  "level": 3
}, {
  "value": "strokeRect",
  "id": "strokerect",
  "level": 3
}, {
  "value": "fillText",
  "id": "filltext",
  "level": 3
}, {
  "value": "strokeText",
  "id": "stroketext",
  "level": 3
}, {
  "value": "measureText",
  "id": "measuretext",
  "level": 3
}, {
  "value": "stroke",
  "id": "stroke",
  "level": 3
}, {
  "value": "beginPath",
  "id": "beginpath",
  "level": 3
}, {
  "value": "moveTo",
  "id": "moveto",
  "level": 3
}, {
  "value": "lineTo",
  "id": "lineto",
  "level": 3
}, {
  "value": "closePath",
  "id": "closepath",
  "level": 3
}, {
  "value": "createPattern",
  "id": "createpattern",
  "level": 3
}, {
  "value": "bezierCurveTo",
  "id": "beziercurveto",
  "level": 3
}, {
  "value": "quadraticCurveTo",
  "id": "quadraticcurveto",
  "level": 3
}, {
  "value": "arc",
  "id": "arc",
  "level": 3
}, {
  "value": "arcTo",
  "id": "arcto",
  "level": 3
}, {
  "value": "ellipse",
  "id": "ellipse",
  "level": 3
}, {
  "value": "rect",
  "id": "rect",
  "level": 3
}, {
  "value": "fill",
  "id": "fill",
  "level": 3
}, {
  "value": "clip",
  "id": "clip",
  "level": 3
}, {
  "value": "rotate",
  "id": "rotate",
  "level": 3
}, {
  "value": "scale",
  "id": "scale",
  "level": 3
}, {
  "value": "transform",
  "id": "transform",
  "level": 3
}, {
  "value": "setTransform",
  "id": "settransform",
  "level": 3
}, {
  "value": "translate",
  "id": "translate",
  "level": 3
}, {
  "value": "createPath2D6+",
  "id": "createpath2d6",
  "level": 3
}, {
  "value": "drawImage",
  "id": "drawimage",
  "level": 3
}, {
  "value": "restore",
  "id": "restore",
  "level": 3
}, {
  "value": "save",
  "id": "save",
  "level": 3
}, {
  "value": "createLinearGradient6+",
  "id": "createlineargradient6",
  "level": 3
}, {
  "value": "createRadialGradient6+",
  "id": "createradialgradient6",
  "level": 3
}, {
  "value": "createImageData",
  "id": "createimagedata",
  "level": 3
}, {
  "value": "createImageData",
  "id": "createimagedata-1",
  "level": 3
}, {
  "value": "getImageData",
  "id": "getimagedata",
  "level": 3
}, {
  "value": "putImageData",
  "id": "putimagedata",
  "level": 3
}, {
  "value": "putImageData",
  "id": "putimagedata-1",
  "level": 3
}, {
  "value": "getPixelMap9+",
  "id": "getpixelmap9",
  "level": 3
}, {
  "value": "setLineDash",
  "id": "setlinedash",
  "level": 3
}, {
  "value": "getLineDash",
  "id": "getlinedash",
  "level": 3
}, {
  "value": "transferFromImageBitmap7+",
  "id": "transferfromimagebitmap7",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    color: "color",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "canvasrenderingcontext2d对象",
        children: "CanvasRenderingContext2D对象"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(702379)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用CanvasRenderingContext2D在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvas/js-components-canvas-canvas",
        children: "canvas画布组件"
      }), "上进行绘制，绘制对象可以是矩形、文本、图片等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas1\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n  <input type=\"button\" style=\"width: 180px; height: 60px;\" value=\"handleClick\" onclick=\"handleClick\" />\n  <input type=\"button\" style=\"width: 180px; height: 60px;\" value=\"antialias\" onclick=\"antialias\" />\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  handleClick() {\n    const el = this.$refs.canvas1;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.arc(100, 75, 50, 0, 6.28);\n    ctx.stroke();\n  },\n  antialias() {\n    const el = this.$refs.canvas1;\n    const ctx = el.getContext('2d', { antialias: true });\n    ctx.beginPath();\n    ctx.arc(100, 75, 50, 0, 6.28);\n    ctx.stroke();\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示意图（关闭抗锯齿）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(92622)/* ["default"] */.A) + "",
            width: "230",
            height: "230"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示意图（开启抗锯齿）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(360470)/* ["default"] */.A) + "",
            width: "230",
            height: "230"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#fillstyle",
              children: "fillStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasgradient/js-components-canvas-canvasgradient",
              children: "CanvasGradient"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#linewidth",
              children: "lineWidth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置绘制线条的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#strokestyle",
              children: "strokeStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasgradient/js-components-canvas-canvasgradient",
              children: "CanvasGradient"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#linecap",
              children: "lineCap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定线端点的样式，可选值为：  - butt：线端点以方形结束。  - round：线端点以圆形结束。  - square：线端点以方形结束，该样式下会增加一个长度和线段厚度相同，宽度是线段厚度一半的矩形。  默认值：butt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#linejoin",
              children: "lineJoin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定线段间相交的交点样式，可选值为：  - round：在线段相连处绘制一个扇形，扇形的圆角半径是线段的宽度。  - bevel：在线段相连处使用三角形为底填充， 每个部分矩形拐角独立。  - miter：在相连部分的外边缘处进行延伸，使其相交于一点，形成一个菱形区域，该属性可以通过设置miterLimit属性展现效果。  默认值：miter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#miterlimit",
              children: "miterLimit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置斜接面限制值，该值指定了线条相交处内角和外角的距离。  默认值：10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#font",
              children: "font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本绘制中的字体样式。  语法：ctx.font=\"font-style font-weight font-size font-family\"5+  - font-style(可选)，用于指定字体样式，支持如下几种样式：normal, italic。  - font-weight(可选)，用于指定字体的粗细，支持如下几种类型：normal, bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900。  - font-size(可选)，指定字号和行高，单位只支持px。  - font-family(可选)，指定字体系列，支持如下几种类型：sans-serif, serif, monospace。  默认值：\"normal normal 14px sans-serif\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textalign",
              children: "textAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本绘制中的文本对齐方式，可选值为：  - left：文本左对齐。  - right：文本右对齐。  - center：文本居中对齐。  - start：文本对齐界线开始的地方。  - end：文本对齐界线结束的地方。  ltr布局模式下start和left一致，rtl布局模式下start和right一致。  默认值：left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textbaseline",
              children: "textBaseline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本绘制中的水平对齐方式，可选值为：  - alphabetic：文本基线是标准的字母基线。  - top：文本基线在文本块的顶部。  - hanging：文本基线是悬挂基线。  - middle：文本基线在文本块的中间。  - ideographic：文字基线是表意字基线；如果字符本身超出了alphabetic 基线，那么ideographic基线位置在字符本身的底部。  - bottom：文本基线在文本块的底部。 与 ideographic 基线的区别在于 ideographic 基线不需要考虑下行字母。  默认值： alphabetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#globalalpha",
              children: "globalAlpha"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置透明度。  范围为[0.0, 1.0]，0.0为完全透明，1.0为完全不透明。若给定值小于0.0，则取值0.0；若给定值大于1.0，则取值1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#linedashoffset",
              children: "lineDashOffset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置画布的虚线偏移量，精度为float。  默认值：0.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#globalcompositeoperation",
              children: "globalCompositeOperation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置合成操作的方式。类型字段可选值有source-over，source-atop，source-in，source-out，destination-over，destination-atop，destination-in，destination-out，lighter，copy，xor。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#globalcompositeoperation",
              children: "类型字段说明"
            }), "。  默认值：source-over"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowblur",
              children: "shadowBlur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置绘制阴影时的模糊级别，值越大越模糊，精度为float。  默认值：0.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowcolor",
              children: "shadowColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置绘制阴影时的阴影颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowoffsetx",
              children: "shadowOffsetX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置绘制阴影时和原有对象的水平偏移值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowoffsety",
              children: "shadowOffsetY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置绘制阴影时和原有对象的垂直偏移值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagesmoothingenabled",
              children: "imageSmoothingEnabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置绘制图片时是否进行图像平滑度调整，true为启用，false为不启用。  默认值：true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillstyle",
      children: "fillStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillStyle = '#0000ff';\n    ctx.fillRect(20, 20, 150, 100);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703377)/* ["default"] */.A) + "",
        width: "116",
        height: "75"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linewidth",
      children: "lineWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.lineWidth = 5;\n    ctx.strokeRect(25, 25, 85, 105);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506342)/* ["default"] */.A) + "",
        width: "89",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokestyle",
      children: "strokeStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.lineWidth = 10;\n    ctx.strokeStyle = '#0000ff';\n    ctx.strokeRect(25, 25, 155, 105);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638878)/* ["default"] */.A) + "",
        width: "129",
        height: "94"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linecap",
      children: "lineCap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.lineWidth = 8;\n    ctx.beginPath();\n    ctx.lineCap = 'round';\n    ctx.moveTo(30, 50);\n    ctx.lineTo(220, 50);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37484)/* ["default"] */.A) + "",
        width: "179",
        height: "50"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linejoin",
      children: "lineJoin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.lineWidth = 8;\n    ctx.lineJoin = 'miter';\n    ctx.moveTo(30, 30);\n    ctx.lineTo(120, 60);\n    ctx.lineTo(30, 110);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(730244)/* ["default"] */.A) + "",
        width: "118",
        height: "95"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "miterlimit",
      children: "miterLimit"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.lineWidth =14;\n    ctx.lineJoin = 'miter';\n    ctx.miterLimit = 3;\n    ctx.moveTo(30, 30);\n    ctx.lineTo(120, 60);\n    ctx.lineTo(30, 70);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(733847)/* ["default"] */.A) + "",
        width: "220",
        height: "192"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font",
      children: "font"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.font = '30px sans-serif';\n    ctx.fillText(\"Hello World\", 20, 60);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(565648)/* ["default"] */.A) + "",
        width: "141",
        height: "48"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textalign",
      children: "textAlign"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.strokeStyle = '#0000ff';\n    ctx.moveTo(140, 10);\n    ctx.lineTo(140, 160);\n    ctx.stroke();\n    ctx.font = '18px sans-serif';\n    // Show the different textAlign values\n    ctx.textAlign = 'start';\n    ctx.fillText('textAlign=start', 140, 60);\n    ctx.textAlign = 'end';\n    ctx.fillText('textAlign=end', 140, 80);\n    ctx.textAlign = 'left';\n    ctx.fillText('textAlign=left', 140, 100);\n    ctx.textAlign = 'center';\n    ctx.fillText('textAlign=center',140, 120);\n    ctx.textAlign = 'right';\n    ctx.fillText('textAlign=right',140, 140);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914799)/* ["default"] */.A) + "",
        width: "203",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textbaseline",
      children: "textBaseline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.strokeStyle = '#0000ff';\n    ctx.moveTo(0, 120);\n    ctx.lineTo(400, 120);\n    ctx.stroke();\n    ctx.font = '20px sans-serif';\n    ctx.textBaseline = 'top';\n    ctx.fillText('Top', 10, 120);\n    ctx.textBaseline = 'bottom';\n    ctx.fillText('Bottom', 55, 120);\n    ctx.textBaseline = 'middle';\n    ctx.fillText('Middle', 125, 120);\n    ctx.textBaseline = 'alphabetic';\n    ctx.fillText('Alphabetic', 195, 120);\n    ctx.textBaseline = 'hanging';\n    ctx.fillText('Hanging', 295, 120);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195765)/* ["default"] */.A) + "",
        width: "310",
        height: "78"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalalpha",
      children: "globalAlpha"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(0, 0, 50, 50);\n    ctx.globalAlpha = 0.4;\n    ctx.fillStyle = 'rgb(0,0,255)';\n    ctx.fillRect(50, 50, 50, 50);\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769145)/* ["default"] */.A) + "",
        width: "56",
        height: "54"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linedashoffset",
      children: "lineDashOffset"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.arc(100, 75, 50, 0, 6.28);\n    ctx.setLineDash([10,20]);\n    ctx.lineDashOffset = 10.0;\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(993420)/* ["default"] */.A) + "",
        width: "180",
        height: "132"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalcompositeoperation",
      children: "globalCompositeOperation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型字段说明。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "source-over"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有绘制内容上显示新绘制内容，属于默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "source-atop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有绘制内容顶部显示新绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "source-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有绘制内容中显示新绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "source-out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有绘制内容之外显示新绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destination-over"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在新绘制内容上方显示现有绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destination-atop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在新绘制内容顶部显示现有绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destination-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在新绘制内容中显示现有绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destination-out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在新绘制内容外显示现有绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lighter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示新绘制内容和现有绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示新绘制内容而忽略现有绘制内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用异或操作对新绘制内容与现有绘制内容进行融合。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(20, 20, 50, 50);\n    ctx.globalCompositeOperation = 'source-over';\n    ctx.fillStyle = 'rgb(0,0,255)';\n    ctx.fillRect(50, 50, 50, 50);\n    // Start drawing second example\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(120, 20, 50, 50);\n    ctx.globalCompositeOperation = 'destination-over';\n    ctx.fillStyle = 'rgb(0,0,255)';\n    ctx.fillRect(150, 50, 50, 50);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(337605)/* ["default"] */.A) + "",
        width: "130",
        height: "76"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中，新绘制内容是蓝色矩形，现有绘制内容是红色矩形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowblur",
      children: "shadowBlur"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.shadowBlur = 30;\n    ctx.shadowColor = 'rgb(0,0,0)';\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(20, 20, 100, 80);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974055)/* ["default"] */.A) + "",
        width: "106",
        height: "96"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowcolor",
      children: "shadowColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.shadowBlur = 30;\n    ctx.shadowColor = 'rgb(0,0,255)';\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(30, 30, 100, 100);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(977915)/* ["default"] */.A) + "",
        width: "102",
        height: "90"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowoffsetx",
      children: "shadowOffsetX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.shadowBlur = 10;\n    ctx.shadowOffsetX = 20;\n    ctx.shadowColor = 'rgb(0,0,0)';\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(20, 20, 100, 80);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(644650)/* ["default"] */.A) + "",
        width: "93",
        height: "87"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowoffsety",
      children: "shadowOffsetY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.shadowBlur = 10;\n    ctx.shadowOffsetY = 20;\n    ctx.shadowColor = 'rgb(0,0,0)';\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(30, 30, 100, 100);\n }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(722412)/* ["default"] */.A) + "",
        width: "79",
        height: "85"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imagesmoothingenabled",
      children: "imageSmoothingEnabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var img = new Image();\n    // 'common/image/example.jpg'需要替换为开发者所需的图像资源文件\n    img.src = 'common/image/example.jpg';\n    img.onload = function() {\n    ctx.imageSmoothingEnabled = false;\n    ctx.drawImage(img, 0, 0, 400, 200);\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(534527)/* ["default"] */.A) + "",
        width: "232",
        height: "112"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillrect",
      children: "fillRect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillRect(x: number, y: number, width:number, height: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "填充一个矩形。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "指定矩形左上角点的x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形左上角点的y坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  单位：vp"
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
        children: "  <!-- xxx.hml -->\n  <div>\n    <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n  </div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillRect(20, 20, 200, 150);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390050)/* ["default"] */.A) + "",
        width: "200",
        height: "199"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clearrect",
      children: "clearRect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearRect(x: number, y: number, width:number, height: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定区域内的绘制内容。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "指定矩形上的左上角x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形上的左上角y坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillStyle = 'rgb(0,0,255)';\n    ctx.fillRect(100, 100, 200, 200);\n    ctx.clearRect(110, 110, 80, 50);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(881025)/* ["default"] */.A) + "",
        width: "200",
        height: "208"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokerect",
      children: "strokeRect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeRect(x: number, y: number, width:number, height: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制具有边框的矩形，矩形内部不填充。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "指定矩形的左上角x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.strokeRect(100, 100, 200, 150);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(778946)/* ["default"] */.A) + "",
        width: "142",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filltext",
      children: "fillText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillText(text: string, x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制填充类文本。"
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本的左下角x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本的左下角y坐标。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.font = '35px sans-serif';\n    ctx.fillText(\"Hello World!\", 10, 60);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544151)/* ["default"] */.A) + "",
        width: "172",
        height: "68"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stroketext",
      children: "strokeText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeText(text: string, x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制描边类文本。"
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本的左下角x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本的左下角y坐标。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.font = '25px sans-serif';\n    ctx.strokeText(\"Hello World!\", 10, 60);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(156075)/* ["default"] */.A) + "",
        width: "156",
        height: "52"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "measuretext",
      children: "measureText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "measureText(text: string): TextMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法返回一个文本测算的对象，通过该对象可以获取指定文本的宽度值。"
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行测量的文本。"
          })]
        })
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
            children: "TextMetrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含指定字体的宽度，该宽度可以通过TextMetrics.width来获取。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.font = '20px sans-serif';\n    var txt = 'Hello World';\n    ctx.fillText(\"width:\" + ctx.measureText(txt).width, 20, 60);\n    ctx.fillText(txt, 20, 110);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470267)/* ["default"] */.A) + "",
        width: "179",
        height: "81"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stroke",
      children: "stroke"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stroke(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行边框绘制操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.moveTo(25, 25);\n    ctx.lineTo(25, 250);\n    ctx.lineWidth = '6';\n    ctx.strokeStyle = 'rgb(0,0,255)';\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395628)/* ["default"] */.A) + "",
        width: "20",
        height: "73"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beginpath",
      children: "beginPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "beginPath(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个新的绘制路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.lineWidth = '6';\n    ctx.strokeStyle = '#0000ff';\n    ctx.moveTo(15, 80);\n    ctx.lineTo(280, 80);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(773541)/* ["default"] */.A) + "",
        width: "185",
        height: "35"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moveto",
      children: "moveTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "moveTo(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径从当前点移动到指定点。"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的y坐标。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.moveTo(10, 10);\n    ctx.lineTo(280, 160);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(601016)/* ["default"] */.A) + "",
        width: "205",
        height: "131"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lineto",
      children: "lineTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineTo(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从当前点到指定点进行路径连接。"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的y坐标。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.moveTo(10, 10);\n    ctx.lineTo(280, 160);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(888547)/* ["default"] */.A) + "",
        width: "194",
        height: "128"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closepath",
      children: "closePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "closePath(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结束当前路径形成一个封闭路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.moveTo(30, 30);\n    ctx.lineTo(110, 30);\n    ctx.lineTo(70, 90);\n    ctx.closePath();\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(287216)/* ["default"] */.A) + "",
        width: "93",
        height: "74"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createpattern",
      children: "createPattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createPattern(image: Image, repetition: string): Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定图像和重复方式创建图片填充的模板。"
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
            children: "image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图源对象，具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-image/js-components-canvas-image",
              children: "Image对象"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图像重复的方式，取值为：'repeat'、'repeat-x'、 'repeat-y'、'no-repeat'。"
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
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定图像填充的Pattern对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 1000px; height: 1000px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var img = new Image();\n    // 'common/images/example.jpg'需要替换为开发者所需的图像资源文件\n    img.src = 'common/images/example.jpg';\n    var pat = ctx.createPattern(img, 'repeat');\n    ctx.fillStyle = pat;\n    ctx.fillRect(0, 0, 500, 500);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(375558)/* ["default"] */.A) + "",
        width: "63",
        height: "64"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beziercurveto",
      children: "bezierCurveTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建三次贝塞尔曲线的路径。"
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
            children: "cp1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个贝塞尔参数的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp1y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个贝塞尔参数的y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个贝塞尔参数的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp2y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个贝塞尔参数的y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的y坐标值。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.moveTo(10, 10);\n    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(876662)/* ["default"] */.A) + "",
        width: "314",
        height: "192"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quadraticcurveto",
      children: "quadraticCurveTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建二次贝塞尔曲线的路径。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "cpx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "贝塞尔参数的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "贝塞尔参数的y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的y坐标值。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.moveTo(20, 20);\n    ctx.quadraticCurveTo(100, 100, 200, 20);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473448)/* ["default"] */.A) + "",
        width: "106",
        height: "107"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arc",
      children: "arc"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制弧线路径。"
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
            children: "弧线圆心的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线圆心的y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的圆半径。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的起始弧度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的终止弧度。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.arc(100, 75, 50, 0, 6.28);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186549)/* ["default"] */.A) + "",
        width: "98",
        height: "91"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arcto",
      children: "arcTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依据圆弧经过的点和圆弧半径创建圆弧路径。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第一个点的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第一个点的y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第二个点的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第二个点的y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧的圆半径值。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.moveTo(100, 20);\n    ctx.arcTo(150, 20, 150, 70, 50); // Create an arc\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311205)/* ["default"] */.A) + "",
        width: "94",
        height: "84"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ellipse",
      children: "ellipse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在规定的矩形区域绘制一个椭圆。"
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
            children: "椭圆圆心的x轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆圆心的y轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radiusX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆x轴的半径长度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radiusY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆y轴的半径长度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆的旋转角度，单位为弧度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的起始点角度，以弧度表示。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的结束点角度，以弧度表示。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "counterclockwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否以逆时针方向绘制椭圆，0为顺时针，1为逆时针。其它数值均按默认值处理。  单位：vp  默认值：0"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.ellipse(200, 200, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI, 1);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56590)/* ["default"] */.A) + "",
        width: "204",
        height: "175"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rect",
      children: "rect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rect(x: number, y: number, width: number, height: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建矩形路径。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "指定矩形的左上角x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.rect(20, 20, 100, 100); // Create a 100*100 rectangle at (20, 20)\n    ctx.stroke(); // Draw it\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502131)/* ["default"] */.A) + "",
        width: "85",
        height: "90"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill",
      children: "fill"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fill(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对封闭路径进行填充。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.rect(20, 20, 100, 100); // Create a 100*100 rectangle at (20, 20)\n    ctx.fill(); // Draw it in default setting\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(234215)/* ["default"] */.A) + "",
        width: "66",
        height: "67"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clip",
      children: "clip"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clip(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前路径为剪切路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.rect(100, 100, 200, 200);\n    ctx.stroke();\n    ctx.clip();\n    // Draw red rectangle after clip\n    ctx.fillStyle = \"rgb(255,0,0)\";\n    ctx.fillRect(100, 100, 150, 150);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394350)/* ["default"] */.A) + "",
        width: "94",
        height: "92"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rotate",
      children: "rotate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rotate(rotate: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对当前坐标轴进行顺时针旋转。"
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
            children: "rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置顺时针旋转的弧度值，可以通过Math.PI / 180将角度转换为弧度值。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.rotate(45 * Math.PI / 180); // Rotate the rectangle 45 degrees\n    ctx.fillRect(70, 20, 50, 50);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(683083)/* ["default"] */.A) + "",
        width: "59",
        height: "58"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scale",
      children: "scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scale(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置canvas画布的缩放变换属性，后续的绘制操作将按照缩放比例进行缩放。"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置水平方向的缩放值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置垂直方向的缩放值。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.strokeRect(10, 10, 25, 25);\n    ctx.scale(2, 2);// Scale to 200%\n    ctx.strokeRect(10, 10, 25, 25);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535510)/* ["default"] */.A) + "",
        width: "67",
        height: "64"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transform",
      children: "transform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transform方法对应一个变换矩阵，想对一个图形进行变化的时候，只要设置此变换矩阵相应的参数，对图形的各个定点的坐标分别乘以这个矩阵，就能得到新的定点的坐标。矩阵变换效果可叠加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894921)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "变换后的坐标计算方式（x和y为变换前坐标，x'和y'为变换后坐标）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x' = scaleX * x + skewY * y + translateX"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "y' = skewX * x + scaleY * y + translateY"
      }), "\n"]
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
            children: "scaleX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定水平缩放值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skewX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定水平倾斜值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skewY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定垂直倾斜值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定垂直缩放值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translateX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定水平移动值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translateY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定垂直移动值。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillStyle = 'rgb(0,0,0)';\n    ctx.fillRect(0, 0, 100, 100);\n    ctx.transform(1, 0.5, -0.5, 1, 10, 10);\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(0, 0, 100, 100);\n    ctx.transform(1, 0.5, -0.5, 1, 10, 10);\n    ctx.fillStyle = 'rgb(0,0,255)';\n    ctx.fillRect(0, 0, 100, 100);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952198)/* ["default"] */.A) + "",
        width: "83",
        height: "89"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settransform",
      children: "setTransform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTransform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTransform方法使用的参数和transform()方法相同，但setTransform()方法会重置现有的变换矩阵并创建新的变换矩阵。"
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
            children: "scaleX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定水平缩放值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skewX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定水平倾斜值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skewY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定垂直倾斜值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定垂直缩放值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translateX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定水平移动值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translateY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定垂直移动值。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillStyle = 'rgb(255,0,0)';\n    ctx.fillRect(0, 0, 100, 100);\n    ctx.setTransform(1,0.5, -0.5, 1, 10, 10);\n    ctx.fillStyle = 'rgb(0,0,255)';\n    ctx.fillRect(0, 0, 100, 100);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(977098)/* ["default"] */.A) + "",
        width: "63",
        height: "76"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "translate",
      children: "translate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "translate(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移动当前坐标系的原点。"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置水平平移量。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置竖直平移量。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.fillRect(10, 10, 50, 50);\n    ctx.translate(70, 70);\n    ctx.fillRect(10, 10, 50, 50);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(268759)/* ["default"] */.A) + "",
        width: "76",
        height: "76"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createpath2d6",
      children: "createPath2D6+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createPath2D(path: Path2D, cmds: string): Path2D"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Path2D对象。"
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path2D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path2D对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cmds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SVG的Path描述字符串。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-path2d/js-components-canvas-path2d",
        children: "Path2D对象"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var path1 = ctx.createPath2D();\n    path1.moveTo(100, 100);\n    path1.lineTo(200, 100);\n    path1.lineTo(100, 200);\n    path1.closePath();\n    ctx.stroke(path1);\n    var path2 = ctx.createPath2D(\"M150 150 L50 250 L250 250 Z\");\n    ctx.stroke(path2);\n    var path3 = ctx.createPath2D(path2);\n    ctx.stroke(path3);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619775)/* ["default"] */.A) + "",
        width: "316",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawimage",
      children: "drawImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawImage(image: Image | PixelMap, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number):void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行图像绘制。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁切源图像时距离源图像左上角的x坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁切源图像时距离源图像左上角的y坐标值。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁切源图像时需要裁切的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁切源图像时需要裁切的高度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在x轴的位置。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在y 轴的位置。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域的高度。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    var test = this.$refs.canvas;\n    var ctx = test.getContext('2d');\n    var img = new Image();\n    // 'common/image/test.jpg'需要替换为开发者所需的图像资源文件\n    img.src = 'common/image/test.jpg';\n    ctx.drawImage(img, 0, 0, 200, 200, 10, 10, 200, 200);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457446)/* ["default"] */.A) + "",
        width: "200",
        height: "196"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restore",
      children: "restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "restore(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对保存的绘图上下文进行恢复。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.restore();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "save",
      children: "save"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "save(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对当前的绘图上下文进行保存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.save();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createlineargradient6",
      children: "createLinearGradient6+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createLinearGradient(x0: number, y0: number, x1: number, y1: number): Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个线性渐变色，返回CanvasGradient对象，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasgradient/js-components-canvas-canvasgradient",
        children: "CanvasGradient对象"
      }), "。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "x0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起点的x轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起点的y轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点的x轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点的y轴坐标。  单位：vp"
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
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的CanvasGradient对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n  <input type=\"button\" style=\"width: 180px; height: 60px;\" value=\"fillStyle\" onclick=\"handleClick\" />\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  handleClick() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    // Linear gradient: start(50,0) end(300,100)\n    var gradient = ctx.createLinearGradient(50,0, 300,100);\n    // Add three color stops\n    gradient.addColorStop(0.0, '#ff0000');\n    gradient.addColorStop(0.5, '#ffffff');\n    gradient.addColorStop(1.0, '#00ff00');\n    // Set the fill style and draw a rectangle\n    ctx.fillStyle = gradient;\n    ctx.fillRect(0, 0, 500, 500);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(943599)/* ["default"] */.A) + "",
        width: "301",
        height: "302"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createradialgradient6",
      children: "createRadialGradient6+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个径向渐变色，返回CanvasGradient对象，请参考CanvasGradient。"
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
            children: "x0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始圆的x轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始圆的y轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始圆的半径。必须是非负且有限的。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点圆的x轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点圆的y轴坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点圆的半径。必须为非负且有限的。  单位：vp"
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
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的CanvasGradient对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n  <input type=\"button\" style=\"width: 180px; height: 60px;\" value=\"fillStyle\" onclick=\"handleClick\" />\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  handleClick() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    // Radial gradient: inner circle(200,200,r:50) outer circle(200,200,r:200)\n    var gradient = ctx.createRadialGradient(200,200,50, 200,200,200);\n    // Add three color stops\n    gradient.addColorStop(0.0, '#ff0000');\n    gradient.addColorStop(0.5, '#ffffff');\n    gradient.addColorStop(1.0, '#00ff00');\n    // Set the fill style and draw a rectangle\n    ctx.fillStyle = gradient;\n    ctx.fillRect(0, 0, 500, 500);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(744584)/* ["default"] */.A) + "",
        width: "302",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createimagedata",
      children: "createImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createImageData(width: number, height: number): ImageData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建新的、空白的、指定大小的ImageData对象，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
        children: "ImageData对象"
      }), "。"]
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
            children: "ImageData的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageData的高度。  单位：vp"
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
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的ImageData对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var imageData = ctx.createImageData(50, 100);  // Create ImageData with 50px width and 100px height\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createimagedata-1",
      children: "createImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createImageData(imageData: ImageData): ImageData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据一个现有的ImageData对象，重新创建一个宽、高相同但不会复制图像数据的ImageData对象，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
        children: "ImageData对象"
      }), "。"]
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
            children: "imageData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制现有的ImageData对象。"
          })]
        })
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
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的ImageData对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var imageData = ctx.createImageData(50, 100);  // Create ImageData with 50px width and 100px height\n    var newImageData = ctx.createImageData(imageData);  // Create ImageData using the input imageData\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getimagedata",
      children: "getImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getImageData(sx: number, sy: number, sw: number, sh: number): ImageData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以当前canvas指定区域内的像素创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
        children: "ImageData对象"
      }), "。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "sx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的左上角x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的左上角y坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的高度。  单位：vp"
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
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回包含指定区域像素的ImageData对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas id=\"getImageData\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const test = this.$element('getImageData')\n    const ctx = test.getContext('2d');\n    var imageData = ctx.getImageData(0, 0, 280, 300);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putimagedata",
      children: "putImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "putImageData(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ImageData数据裁剪后填充至新的矩形区域。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "imageData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含像素值的ImageData对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "填充区域在x轴方向的偏移量。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "填充区域在y轴方向的偏移量。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源图像数据矩形裁切范围左上角距离源图像左上角的x轴偏移量。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源图像数据矩形裁切范围左上角距离源图像左上角的y轴偏移量。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源图像数据矩形裁切范围的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源图像数据矩形裁切范围的高度。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas id=\"putImageData\" style=\"width: 200px; height: 150px; background-color: #D5D5D5;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    onShow() {\n        const test = this.$element('putImageData')\n        const ctx = test.getContext('2d');\n        var imgData = ctx.createImageData(100, 100);\n        for (var i = 0; i < imgData.data.length; i += 4) {\n            imgData.data[i + 0] = 39;\n            imgData.data[i + 1] = 135;\n            imgData.data[i + 2] = 217;\n            imgData.data[i + 3] = 255;\n        }\n        ctx.putImageData(imgData, 10, 10, 0, 0, 100, 50);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(731074)/* ["default"] */.A) + "",
        width: "309",
        height: "230"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putimagedata-1",
      children: "putImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "putImageData(imageData: ImageData, dx: number, dy: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ImageData数据填充新的矩形区域。"
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
            children: "imageData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagedata/js-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含像素值的ImageData对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "填充区域在x轴方向的偏移量。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "填充区域在y轴方向的偏移量。  单位：vp"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas id=\"putImageData\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const test = this.$element('putImageData')\n    const ctx = test.getContext('2d');\n    var imgData = ctx.createImageData(100, 100);\n    for (var i = 0; i < imgData.data.length; i += 4) {\n      imgData.data[i + 0] = 255;\n      imgData.data[i + 1] = 0;\n      imgData.data[i + 2] = 0;\n      imgData.data[i + 3] = 255;\n  }\n    ctx.putImageData(imgData, 10, 10);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(209095)/* ["default"] */.A) + "",
        width: "223",
        height: "163"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpixelmap9",
      children: "getPixelMap9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用当前canvas指定区域内的像素创建的PixelMap对象。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "sx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定区域的左上角x坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定区域的左上角y坐标。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定区域的宽度。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定区域的高度。  单位：vp"
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
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回包含指定区域像素的PixelMap对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas id=\"canvasId\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const test = this.$element('canvasId')\n    const ctx = test.getContext('2d');\n    var pixelMap = ctx.getPixelMap(0, 0, 280, 300);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setlinedash",
      children: "setLineDash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setLineDash(segments: Array): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置画布的虚线样式。"
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
            children: "segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为数组用来描述线段如何交替和间距长度。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    ctx.arc(100, 75, 50, 0, 6.28);\n    ctx.setLineDash([10,20]);\n    ctx.stroke();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(849932)/* ["default"] */.A) + "",
        width: "193",
        height: "140"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getlinedash",
      children: "getLineDash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLineDash(): Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获得当前画布的虚线样式。"
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
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数组，该数组用来描述线段如何交替和间距长度。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 200px; height: 150px; \"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var info = ctx.getLineDash();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transferfromimagebitmap7",
      children: "transferFromImageBitmap7+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transferFromImageBitmap(bitmap: ImageBitmap): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["显示给定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagebitmap/js-components-canvas-imagebitmap",
        children: "ImageBitmap对象"
      }), "。"]
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
            children: "bitmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-imagebitmap/js-components-canvas-imagebitmap",
              children: "ImageBitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待显示的ImageBitmap对象。"
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
        children: "<!-- xxx.hml -->\n<div>\n  <canvas ref=\"canvas\" style=\"width: 500px; height: 500px; background-color: #ffff00;\"></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  onShow() {\n    const el = this.$refs.canvas;\n    const ctx = el.getContext('2d');\n    var canvas = this.$refs.canvas.getContext('2d');\n    var offscreen = new OffscreenCanvas(500,500);\n    var offscreenCanvasCtx = offscreen.getContext(\"2d\");\n    offscreenCanvasCtx.fillRect(0, 0, 200, 200);\n\n    var bitmap = offscreen.transferToImageBitmap();\n    canvas.transferFromImageBitmap(bitmap);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654899)/* ["default"] */.A) + "",
        width: "317",
        height: "212"
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
209095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
914799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800560-eea75b23200da39a3c9cb179296f3a91.png");

},
974055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
311205(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABUCAYAAAALSYAIAAAC+UlEQVR4Ae2az04TURjFeQpDYkkMC1kZHsOwk3eAJvJnYYDiHxLLWqKNLOQBDKmIIbKQReUBpA0bhRCSbkyL1k5piWkpdmaOubRjGpTYxfS7d2ZOk2amTdPb+X3nnO+bmw7ABfiUZzBA6PLQFXOC1+R4gid4PZbXFbVUPBVPxXO8FHCB+VEDAE7HDepcAIrEGkaBdx33Emz2UxarL1ex9moN6XQa+7l92C07NNCNnuPtXzaajSa+fyth690WhmJDGL41jN2Pu2jUG/CKJKHOfqxhlOL/d4GtVgvb77exnFxGfDKOwy+HgS1AoMB3F8ayLMxMz2DpyRLy+XzgYiiw4FURVNwUvhbw6OFjrDxbacPvbsDd54Y15UCD9xzg2A5SL1JYmF9A/Wdd4f67CATv70jo2opo+1EsFDF6ZxTVSpXgPVVKHU+KJ5idnkWpVGpXwzClexxCETXexXjHWrWGqftT2PmwY2zTDSV4VYCDzwdIPU9h8+2mkfDDCV5tMXS2GRLzCZxWTo2DH07wXq4DKP8oY+zuGMF7OSx5XH+9juxe9o8LJNe+bq1wK76jfBU1yadJOGr09HY6PVdoOkYCvLrDnXswh+OjY4K/zoL9et8qW5iciMN121vP/Vqn1++NhOIvYTjAYmIRzfOmEY02OuBdYOPNBirlCsH3aktfPucAmUwGub0cwfsCtNepBMBZ7Qzj98YJXhS8KhCAkdsjBK8DfOxmjODFwbvA4I1BghcF39k4uzi/IHhR8L02YaHPRWqON6nQBC+k8KtFJ3iC9/ffB1cVZtprKp6Kp+KNmHNNiwa/fw+jhlHDqGHUCLiAUSMA+V/9geAJnhnPjBdwAaNGADIzXhNkgif4aDVSKp6Kp+I51WhyAcETfLTih4qn4ql47tUIuIBRIwCZN1CaIBM8wUerkVLxVDwVz6lGkwsInuCjFT9UPBVPxXOvRsAFjBoByLyB0gSZ4Ak+Wo2UiqfiqXhONZpcQPAEH634oeKpeCqeezUCLvgNla2M/BTMmxQAAAAASUVORK5CYII=");

},
654899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
888547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
619775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480227-3f9afba2c46056da32f2e104703302e9.png");

},
56590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
733847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADAANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD32iiuV+IPi9fBXhaXVhEk04kSOKFmIEjE8jI6fLuP4UAdVRXkXh79oDw1qRSPVobjS5TgFiPNiz9V5H4jvXpul67pWt24uNL1C2vIiAcwSh8fXHQ+xoA0KKQEHpS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVxvxC8AQePtMt7SbULiza3dpIzGoZCxGAWU4zj2I6n1rsqMgd6APlXxB8CPFujiSWwWHVIFzg27bZMe6N/IE9Pz8+ePWfDuo4dbzTr2InruideoPofUV91EAisjWovD15ZyQ63/Z0tugy63hQqvfJ3dO1AHzRoHxy8YaKqx3VxFqcI/hu0+fHs4wfzz3r1LQP2gfDWpMI9UgudKlPdh5sY5/vKM/+O9qwPFfgP4TXD7rPxRaaTMwyBBdLNH17rk4/AjpXi+t6Tp2lzFbHX7PVEzgGCOVCPqHQD8ieooA+1dL1vS9athcaZqFteRf3oJA2Prjp0NXgwPQ18GWmoXen3K3Nlcy286nKywuUYfQjmvRfDvxy8X6OUju54tUgGBtul+fHs45z9c9KAPq+iq9jcNd2Fvcsmwyxq5X+7kZxVigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArzT44anqOi+BUvtL1C5s5xdpGWgfbuVlbINel1U1HTLLV7J7PULWG6tnwWimQMrYORkH3FAHxDc+I9cvlVLvWNQuFU5US3TuAfxNJBperakUkt7C8ujMdqtHCz7z0wCByc8V9t22iaXZSeZaadZ27427ooFQ49Mge1XlUKMAAD2oA+LrT4a+M73f5fhvUl24z50Bizn034z+Fbdp8D/AB1dNFu02K3RxndNcoNvHcAk/pX1vRQB8xWv7O3iiZGM+o6ZAwOAu92yPXha37L9m7yrhXuvEpZBziK0wc/UseK9+ooARRhQKWiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q==");

},
977098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
769145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA2CAYAAACSjFpuAAADZElEQVRoBe2YW1LbMBSGFTbcljBdSiPJsIWQ8tQFFDMltK+lYQXkqUBnyMXS3zmy5chGxDG1E9ejGX4UK7ajT+fmY4b7OZqWenoCoM0fDYcU04yhKSnGsB4w3B9/OCiUu6HtArq/dCBLBsA67vvCRXtrwWEWg/0FfJcmmQDYfglpJ8kMgwX3VieDBd9UJoKLtp9cbAIPLhpc1OlG7KPa/OR9vwv9fHgcAG0SaHtsJcl0zIIDaObq7R1+HoPWRanJtSY6XMN7BM1cEezbIL2ATYHZjaKxxj09LjoA2BHA2KtyNyAZMLiidzLz44+AwkY1FlS4ju6hHSBLVuN+BcAUqhrQwusSnAWdD0+ABBuZhW681a7TO7obUwAkUAVourEDXQHLdHwJHcdGiGPgknSVjfbYM2bXqDgGKclGfRnjx5evGH9eYXKeYHKuMJ5USWM8KQsYT0g0D5xfLDG5+IPlSpt98W6OB5bR6XY+/2AnKkb6urDh2UQ8vQOXCwixhhAJRlJVSGMkSxLAiCQ1uAB4tIQ4fcTz8mWJ3bZu5jV3YdVlCufY8RSVeRC55tX0DlIsIPkagitwUVq8WTQt3AopBIFYcYCT6JgDQqoccBtQ+TtmJspAFZbLb5J/0FBQ0CZGNK5ufkKKVU1Agk0cpRuTbkICEa0hzn7jebVjLGcMKeCuQFvOIwsaKwL4Nr1FxBNIriC4tdJmFEJD8rIUpLmGritJrBAJIIoesVgGwEKdbNmCGmStTayln3tjwRSOEkUR8r8ENOFJ/wDcTH+ZGBMCIFG8lSF3PaZSYc8V0YMpE05uK7ijb74xF/UB2pQfAEsubC1GY7DgltJFLhtc1Be4vrk8BvUmyVhX61cMBsB6JaN7SaYVC6a1sBt1kABvbgvF/d9jsGuA13eQ1MOZno5cktqgatcsNL1Ow2uaXgnI00csVnUb3oo64suYvrliFp3lj2opWFOADwaQ2lffGnxzzddBE4N9B7yeIRpp46LUOQiemMaXmt9X9cKFKe6yB22pIYyLdsSC369nOPukEY2AiGucjRIDTNBVooSUirqQtBOhY+roT6MHLA8Vg67/UzxSnOwa3nQivd8tvxoqH9v77XzjJp9F6/zoPs9tLMnsc9F1fisA1tmtLp4bLNhFq9RZU+8t+Bf1eKelqJ/9+AAAAABJRU5ErkJggg==");

},
394350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABcCAYAAADnGgJlAAADqklEQVR4Ae2d0U4TQRSGd9p4aWJiAOOF3cbXkkeQC+Fe3wDrhTc+gyRq4dqL4pUU4RlswQS6VRNE2Z3fzLTb3VkMCc30DLI/yaSF0J3db/7zn9PpzjRC8hPb8WPoKGJTTWSqifTuPRx2u/jU62G3t+u1rT5ZBTQQYTzGdhwTuhWegm7cAVYeAqMRoLWFZED5auvP1oGM4CuCa1jFY/kBkCRYxM/G+gZ0qql412IV0qgJC35BijfgaTWX8poQeNBqKlZD8BUgUhUXwRO8m3yklBeqHyqeiq+X4hsy5SSrmqqlEXwgqyF4gqfH+5sgM1MFdsqAHk+PD2QtBE/w9fJ0Kp6Kp+IFPghhVUOrodXQamg1AaKAczUBoBu/J3iCr5fnU/FUPBXPaWGBKKDVCECuvmtlVRMIOsETfL0SKxVPxVPx/pfi8C6DS4sSpK0mSbj4bDYIknV8kqDb4qq/ia1Kgh+NCD6U4ne4znVaSUkqnh5fKl8JvgTDVBtSTRh8t9USvDgpiPP0Iw6eVY18VcNyshTtVHwJxjyWMe9rCJ7g5SqKeVXq83WCij8bDDhXMytXBcFfHH/DTrsdKLR9qtXHsQTBmy2gWMfngyYJ/pTgizxG8IGsj+ADgY+QRg1gyezCd+Jt573yDn7FR3+0GmeQCX5W4uWJT+aR4IOANzs00WocCygqj0Uqf5pcZTx+jA+tth1pM9p5yyIV4MIXCfXqY9vrVgoXShUbfmZ+b9F2d+84JXgTTQQfxNuDgY9nFkOrkbKa0Rjv4xipipyWqas9USbZyZ2DazXLQLLoN1CjE3Rbj+waT7POM28muVYH4zb/ngspiyJg6T5wOoY22dDj3vFuck2+413cBkyHlWZPxii/Dm2aW1KloFeM4n94h+6CPz/DxxfPgc0O0HGb7nSgX9Wk2Wt/Cd3ZBN68Bs5/my82mAjeo+qLuRr8wX7/86SH/CsCTEc20Gyw+Y62G3s86AzQFwB+2a+pMM9y+L5OugCfAV/6B25YlXvxONrlw9605+XLNLBz4PnffZ1vAV4D/b29PKgmj3lvdXu0dA3y1BWiRw4V8P2FdeRLKbflOATvUcXXEQXBE7ybXq6jnv/xfwvFwyTXfXq8UAQU4G1Vw+QqFT0EL6Tw6oASPMHXNbnS40ULC1oNrYZWIxpy1Wxfl99pNbQaWg2tRiAKaDUCkP+Vtwie4Gvs8Vtvt3B4cMgmwGDt6ZrNpZG5keNocITh1yGbAIPj4bG9ieYv5NZFR0F5S0QAAAAASUVORK5CYII=");

},
683083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA6CAYAAAAOeSEWAAAFgUlEQVRoBe2Za08bRxiFd9c3kgKVS11KFZVLMZdCGzVVBAkkJgilEFX50DRfm99V5d/0kkZAEabQQEgxDiGIe0AJ+LLrU52xZ1kbHGyD18axpdWsYe2ZZ847531nrCABfCiX8qGAkrMKW6lqV5WtKlsBrl0N42oYV8P4YlVfha1ZA0joiaMy07gY0AXD6nESA3pch5G6R5lDFwZLUfUEdF3HxvoGtja3YOhJ+HI2t/xhkQzZWDQmgIeHh9HwSQNmgv8kw5r/56sMDS0v2HhMh6EnkEgksL62joGbA1AURVy9Pd9gYX4BhmEIxROGZU2XCXhesEKwRALbW9vo8HcISI/LA5fTBU1zoKW5BaGlECIHkYur7OHBoWlGB+8OcPtWAE7NCVVR4XS4REtYt8sNv9+P+WfzZRnKOSlL86HrrrxcwfXvr8PtdMOhOaCpmmgJzXuGNNvurm4sPl8Ew16s3TJx6VNhufbi0bgwo4Gbg1BVNRm2qibACCevGk+NAOYzn/kaMTE+YUZEOUCfChuNxLD2eg29Pb1wuzxwOpymqhLS2kp12V777hqC00GxhjlppTatE2E5KIYuXXd3Z1cMmpAed42pohXQei/dWbaNvkbMzswmXZxOzsqrRGF9HBYQAyPs3u4e+vv6RWhKxbg+33dJSNlyfbd/1Y6nfz0VoKy2dK7lEgArmQUA1aSy4XAYTY1NcDgcJiwBCCrbbNASlK1Uva21DcHpGUQj0ZKA0jOSsNaKBxCG1NXZJdYmUwsHLAFygZWTID9Hw+Lla/CZplWK9auwU6YV5s9IJIpgcAYjwyMiZzo0mlEyn0qAQls5Way6pv6eAsvNSMTe4kNhpyzkWfX8/tsfuDN0B5c8l4SahYJl+xyBmZ9bm1vx5M8noNPL3ZMdtbTydv8t9t/sY3N9U6QXj9tjhm22QZ/l7wRmSLe1tOHxr49x+O7QtmpLYfhOTkziyhdXUF9fbxqQGNQpzlsItPxetv52PybGJxGLxZLAVu8owuZB0XUDj355JCDr69Jh5cAKgcrlM6y4vF6v8Atbwjgei2PpvyU8/PkhLtdcNl2XoMWC5f63trYOV7+9isnxyeRJhw15VyEsr9VXr/HgpwdFh2U6Yu5u+rwJu9u7om+7CgwTlsDh5TDujd2D0+k0oXMJx1yfYcnJ60b/DUxPTSMWidmmqigqaP2ihGMZFzfw79wz3P/xvsizuULk8hxTTvOXzejp7hGGyCzACbazVlYIyA7lxQEszD/H3ZG7pjPnApPtGXPdqypqP6rDcmhZpBvmd3EqybVqw3oVyoo8R5uXnaY6ZkgPBYbOHs6qKgoJmtHqyqqonDih4jRS9lmENHOSuyvRaCrHWTtMZT0engVuBwpyZYYt1dY0DXW1dXgZXhHfKmpim5TMBE5u8Y5S+rE7HsUEbgXyLx9Tmwffpz5x6sgvpppm6MqerJNc5PujXY/s/ISWIU0HdaUO17KtT6Fk6piG9TUrpNVXq8KI0kCLDJWpqHyfEyz5d7Z2MPrDaDI0VU20mdA0I7mta/A2YG52TpxBcY8sXiWCzBuWg6VKBJbr0QorQXlO1dnRieVQOHm0w8Ny66uEwDkrax3v4MDgicpyN8MD8703e9bH0+8vFKwBhELLIDBDVvwakDIjHr3My59A4no6JN9liJz2gA2TkL+yqQHTtPr6+sTxqvdjL77u7hGH6NwyGpmhm0aV5U1ZwkqFEsDG+ibGRsegqhpeLL4QR6/MzebrfUqaD6VubIE9Yyc8QKeaxxyXDGf87vP+/PFz43wGmKlOGQJaJ+xssJaJKcXRqBUkl/vzgZUKW+Bz6dzuZ84Htswh5aRWYeVMVFpbVbbSFJU8VWXlTFRaW1W20hSVPP8D7GlL6a9iXWoAAAAASUVORK5CYII=");

},
773541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAAjCAYAAADIUKt5AAACdElEQVR4Ae2a0U7CMBSGi8AVanxn75UbTfStjIZXgcG23xyxMkontGtLt/0zzbaynu58/VZKnAI3Ehg4ATXw/AaXXg3AtQwOgmNClNwR2Ggu10/SABKm5AMYxM4pNIWWY9n0/ve0z7usJNesbfs+Qbbdv65ry0N/fsm+LUZb/bmY+3ZVW/Pe12cl+X80ZaC4kYAPgd5I7pMc25CAEMhKcpmt5UuzWWzDJJ+PdWa3MRozD5sfZl1Wkps3x3MSCEGAkoegyBhZE3CTvN4vJUrIH1jIwNmBwzKz2suU4PFwkzzBDbGLERAQ0w+2R0/YWfKX1xWel2AhAy8HnpbAcgnsZCmQaHOW/G7xjhtVQKmahQy8HJioAutNusncUfISi9s3qEkJpVjIwMeB3c+DUWzSLVkcJa/xcP+I2fwD09mKhQzcHJivMJ1/YTr/xHqX7UwOlCVQbIGicCsbjza2PraO/dpisM5t7ELzEheqnH94+v5WCJZTsEC+mbBd3wg4Llf802tzs63evye2JIFjAsklF6nNcnxLPCOBsASSS958+YovFoUdzBjR6rr/37XJJTcHQiPUs7uIz40EQhKg5CFpMlaWBK4uuUlFz+xmPc+7ERgz1+wkPx3K6u+/BnpJc3oNa86tnSl5Akc6Qe7UOEFyPehizAivOpNXqFCnfOeyBzLGukVKHotsI64NMiVvAIp8aOMfuctswl91Jq85kycTgZJHQi1gbXBliSKzeHPjrN6kEf7YNg7he8kzYrKZ3EzfXItTcpNQ2HNKHpanVzRK7oXt4kaU/GJU8S7k+jweW4lMyePyZfQMCFDyDAaBtxCXwJgl/wbMvsSJzBd2OwAAAABJRU5ErkJggg==");

},
849932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
943599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440273-b609c3696c8838301fa8564bfcf54c2f.png");

},
337605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABMCAYAAACh4W85AAAJH0lEQVR4Ae2cXWwc1RXH74x3N7EdIoFImjjBdhTUV5K6CKnljadKfaval6YJD5UMoUUhCQSctCgIXnms1KfGad4gH61DSYJUqUDcVAICVgVFggdAlQDbu178EXtn5v7RuXeuPbOfd72z9m7mRDqau/N57r2/+7/nnhlHQALKgnBrfnfSlnyrZp3kY5f7IlZB6PSKdDKond52Fv4xCBaN1DWDpYW6dA8ILVQyDR3Zah0ZBAZMxYgMAoPAILQqp3fT9XePIlCv8OhedxtUgEBtSQ3qA/BLHlbmF+AV8gnbDLziDKT0w76Tq324WmiqU+l6updU6QbgDpbnZ+AVyiw/C28239jyeXjVrJCHP78Y8fnugS8OgmpKgkBCBsDca5fwn5FHUBocStSWhwdR+skI8MlHuuOkD8j1N6qUBICv70X5huICbvz0UXjDQzHzhwYRWBid5w2X2dAgSoODmD57FgSaaqCmYO3ghJ0EKkFQahCofpk7dwGTO/ciEE6i5rkOvL0DwNR7qvMkUdcyCIEeqdQ5he8wse9BBI5bYXAcNDLpOAiqmBQOpo8/A2DlLgeBGpH6hDRBAsW//BW37t8DKUSipsAa2AN89H5kJiBhX58qkK8kBHQ5TWkoFDExvB++yMQsED2Qwm1ogXDhlxnto2unTxwDWlSwSKXXPacnfY+4IpT1Q+H8ON7dtTNRCDRUDuRuAuG2agiPZL0FRVAU+OHrCKUIRVwd3lfFbwcQrpVVA4au/frZY6oPku6Izb5fBQhRh+bGx3HzB8mDoKR5D00NU8mNCKVkpAoBUCjg6vBwFRBaUTYN0TcnjyfncwfFGAyC9bTHICQ8soQO1lgROkpZWBFYERSQDII1CAIQAt+e4Bih4RRBDUWrAs+hbabm+RAOQKuG2x/rUD8SNEWKlRkYc5AiWiqbLZXbHiwaEE7GJN24ZLPVgXjZ0szmwg04J1FFIBAMDKqza4w2dYzyCB9O6fU/vPBbtPIaV7KgGzPcv4EgBI6A75IinATI3yBMXpS7XOs3nb+6RI6WG9Sx1v0S3p8oCKQGBgYNglNDFRxgYC/wYTTFbLKLppEsRs5GgiAEfEdg+vgJegsDBIGGwbpDTL2o4y3qZn3fZEBKHASThdSJG8rkEQzllgEGhhUIVN+a/2o1hpGF6PGNmBoMCOq59MDwoVE/apWpkuq7y86DgJozURCMGlBW7s+5X+BM7ymM9Z7CC31xO9P7HE7f+we89MsJPDX6Fo6OXsfR0WuV9sR1PPnEjZj9/fJnkCtVRsGGgODgvYM/x9Ojb+D3o//A70bfxFOjlT6W+3z0yTfw/68WFL40pRhBMDx3wjZREPTI1zn5H4sJOKIEV/joEQFcAbgiCFmREKpMv5uzsTGJlRCE1cFHhQ0C4UruR0377Lqz+OCD5bC/V72OBZ2bDUMbQbgKR/jK1gDoXhCCMEZgEGqsAExMoLc6FqC3iyNKEbwICFKVhTBq4EOIRlapFpulCAaEy9mDrAjxTq98gWOWjhRdr00NHlzhqcYzWw0A7WtkBEochs0EwRMCqQShOD6OyZ3NvH0kRdDv8jUIZmrQIOiOj3dseUc3+l0VBIrIw2C8mbePa8FtdajNcQO4BmGkAs5GPndvjBB+5VEcP4/JHbtr5AIqG0+KLKTYomCgqaFH+CpANDGC2a5ND/WhcIQMg0wKNLWdHkNZsLj2QQuFYQqE4re4uu8Be79VJjT6wQoBHa8fTXeecPB6jqYGSpcQ3CUrKLoYBJ01K547h1s7dkSSRNGEUWWZGst36MMPgYfF35ANQdAjhnZTx9PWxAnJgaC+bqIcDy0f8jN4c2iood/xzqaUOIFsch/lILjwREZNDbQSIqidsmmrljJ0JQi0xjXp09nzF/DPgb2Yy+UsLYtCLodCbitGFAgUH5h5Phostg8Ej+aIwhwu7t9v6XNYt2wvCrntmM3uwmxmAPnM7lWbzezGTM8ApjMP4ELuMRXzEAiuAprqUt+6EgQ9K+iP/+Tbt7By7HkEhw/b2aFDCA79BsGR3+IhMYGMWFa5BBMbuGLFSkrNyLKbGvRyXK3DA6BEs8PCEj49fQbBkcMWdgTBkccRHHoc3/3sV7ju/BDXxAG8JQ7G7IY4iGvOAbwifq2mBa0KBEBD4YHr5rssj6BSoGtZO+nTyxX6YndtX72yzphR1Oajd8s7cEUpXDLqKWBt1VB/SmgGhJg/AX3UTv9KQEC+69cCaicdoN9RC+ulP5qV+Ne7XyKbmYIr7kAoaAlcMr3yyYWrHw02xQhG7erXpysVIdawlgCYa9SsojpCYsuWm2paoFGtRw1Jaf0GMwDU254ekygtR8CMPrxJf82laguJd25+gWz2f9Zzfz0/o8dSDwJlFvX8qQNFBoHENUJrpBjdvRnluinmZh0qVwQtnawIqVcEBiGMjbr9pRMrQusxDcUKrAgcI6jlMoPAIDAItHzkGIFjBJVHYBDSDoJE94EgOaFknUJuuIoIP+ylv1LYmp0MU8z0qtakas2W9jX6KKX68T8+HwCLYao40YSMj7cnv0AuOwVHLEM4MjHr6cnj9vv6m0WV4k7U70iWtYX7JppQ0qDo/8fovntexfbeK7in7xK29V+MWX/fJfT1NjY6b1v/5Zi9/OLHQHmKuYUG0J8UE8E+Jv/9Oe7d/ids67uI3r5LiVl//wV88t9icgOupfpWB6ctIJCf3hKwMg/cWQTuLMVtaQFYmG9sdJ66nu4RmkcQkOSYxqCCKa9rS9d7q3+jQM9ZJP8StMVFYGUp4vO6/Gzv9W0AIXSY3vZ1YIUrfaLXkSXtKxWjPsd+RA80WabXsuX3bvIWSblS6z7tA8H8FUeHVbhqQ0ReBVU9nnAdzO024lm2z2gPCPR0qm0tL0xL8LZmE9Vqunbtbw8I3MEd08G24DAIDK2ClkFgEBgEW9lMw3msCKwIrAhpGOm2dWRFYEVgRbAdLWk4jxWBFYEVIQ0j3baOrAisCKwItqMlDeexIrAisCKkYaTb1pEVgRWBFcF2tKThPFYEVgRWhDSMdNs6siKwIrAi2I6WNJzHisCKwIqQhpFuW0dWBFYEVgTb0ZKG81gRWBFYEdIw0m3ryIrAiqAU4XtZgMrDPGGipQAAAABJRU5ErkJggg==");

},
876662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
993420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
535510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABACAYAAABBXsrdAAAEIElEQVR4Ae2aXVLbMBCAM2USCuU3fw/hDA2UA5Qr8NrhrWQ4BQHemcZcoA2chYSScAreeA8lQ4m9nZW09lqRiV0mEztIM1utZf3tp9VKDs2BB2BFMshZEIEzWBhsZ4zDcANSsb0G/qMNm0TscabcZgyG53ngJR2UYFCetH1K6o/BEKtERrkA7siNFtebq+BrhLG7swvlUgWq5aqUShWqEbK5vgnDpyHiC1JKVjrp9gtgoCnKiJ3tL1LH+DEhXbYvYThkMDIKAm0Pw0DjXYDt+rZEgIbpSSu7urySMHQIqi/szxeqg2Wko5qS7RbAwMnpMDgIfA8AoxcXnofPQlD/9bMdhsGN57pqTxDckSdikeiU6hGgGeVGGPXPdbly0n54eHiAC+cCWq2WL07LAeeHAwffDuD8/BwcxwEqC+VYD4Xe07Mqw35vbm7kSDOCQAs0DsMD0GH0+30obhZhbW0dKuUKlEtl+by6Dksfl2B5eRlWPq2EZHVlFXShOlhO+sKHBThpngTbZoZA4sHo9QFPDZG0yb41gG7VtqB53EwhDGVova62iXq+/d0TnkDuxPN2W8UMtaX4uzh6rVaD4zTCoKguThPmAf3bvtgaJuNCMFgbU11TWXo9g58mqCvjEEapWJKnjWawD0Mrp7aTcoSRzpihDBIBlMHo3fZE8CTP4QYijMfBH9okQR4TTrphuPI0Ofx+CI1GQ8j+/j4UCgU4ahxB47AhRb3b+7onr+NoPCaCwHUqM+TphmGYMB6tG+sbZmPRgzBhO+ZNfpmhPx+YB4ABNNWnCZ8s6ne9OyhuFKXB0vTgXx0CPlOaAAL7zgYMWmVXwggFUDIWc5PBUeWGutmAQSvsAfR72mlCxhIU3Uh6r5cbnn0Y1FeCtsaFMIwRt174BhrREcIQ24S8JaKeP2gCg7IXQBUM09HqA5gEKOL9/MPgLs91A5D5h2EwOsqDLAwGy8KwMMx3EusZ8+AZoW8PZlBUcIxTnjnPwE948bMfAsCUFARe1viFjenZgaFsxxuo+GoloyiPA0XV9UYeoNCfIwgoXsdPm6fJAccZO2Gd16/jDEYhXwCSxcKir+fzeXhNqA3mvB3q9Hx2epYdGIPBADqdTki6nS6gYHn3WupUFpXrfXSuO9DtduH+/j47MJSDRGdx3TG6BwsjxCYu0CnWixUzQpM2PcSdoKktlcXtY4r1LAwG18KwMMwXx3R4BlsduozNIs+5L24qjrVZGK+PKT0DI3pKVmeW88hN40feWRr0lrGFZ1ggcmfk8CtSfE3abaL+62OST/I5hvb60TrHhptii4XBFtzCCMHAeMEK3rOee3p8sjCUM+Re/o7kLwrWO0DcM97z1uC2WxhsR1gYFob5BLWeYT3DesbE+5TdJqFtwh74mfsedfuhxpzhHx5uADiaR7fRAAAAAElFTkSuQmCC");

},
92622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
268759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAACiUlEQVR4Ae2bT07CQBTGW9BrwHgJUY9h2CgeQbcKCz2OnkZZGE9g2AoadAPTz0yxCaYx9DEz+CgfyUsb2kzor9/7M2+GBBlAq84gIazqsBwrAhN6GIF5A7Myie6aS5cVZoHMZrnBwQtp2P6XUQYmlGhlhTlY7hNr/A2NWwYG4OH+AYP+AP3rfjAb3Axwd3uH0etoq6GVgWVA76yHRtpAmqRhLU0xfBwS2CqwDn7xAghMqEICkwJ7oktWjnNJkmBIYNUTA4EJ3ZHACGxRiceqw6gwKowKWzXX3ejUiC5Jl6RL0iUD98kYw4RACYzA4rbBywqzi47rqqbgOtfrWVZY4OL8onLLRgqufu0dC5yf9aIAq63Cri6vcGAOYFomjLUNTNug1Wrj5fmlZosgFvicfmL8No5i89m8fsBWVbu7fL2cJYV1ya7BIzChQAiMwDZd6QuJM4ZpAba8se9np5TXwT1XsdfN4xl1xjDnVTYLX68tv4Q1oakE5mYZbo5a7PoJddzf28f75H0h1DoBM8b8msu6OWgIazaamIwnXspVqbACWLGnTNoR+et+AhOuWhHYvwBTuLNZv0sGSLchC1j1wOzc/Zsh7pRCMr56YJKH2cS9BCZUL4ERWNx4R4XVSmHKSgqXVFQr7Gv65TV7j5E1VQObzWaqajD1Csu7kMIYE0NVy2OqVtjyD9VyTmBCBRMYgW154epRSqluUf/Val73e9fydj19nxUplcC6p110Djs46hzlR3cewk6OTzD9mHqVUSqB5dnatejmWW4hsnc+VrHW6dFl1gtMmChCQK0yBoEJXwyBEVjckocKo8KoMK+6qUrmk9xDl6RL0iXpkpKYoe1exjDGsLgx7BtnpskpJKb0UwAAAABJRU5ErkJggg==");

},
702379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
565648(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
375558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
360470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800556-9edd26b91c96915cb51b5e3f6321f307.png");

},
502131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABaCAYAAADJoxqPAAACg0lEQVR4Ae2d4UrDMBSF9/4om/5f3Wvo7w20daCwJ3C+wlC3tVfSbVLKaK4zt03kEyJWw6xfzjk3Gb04kkqEEZbBCKBhgTqeQDVwKlCBGt6qFvGnUmq1d8uZyIeB8n4L3g9VRHbbXSJEj7dZiXx9bg8XA0D2Ql2/vcv11bWMx+NkxmQ8kYf7B9nv9oNsF71Q88dc8qdcXASkMpxEZ9ksXqhFUchyuayBSplGodjvSsmmdzLU/XqVWuSFLJ+B+pti9b+hDlCkVCeqpJUK1HB5/ZOpQAXqIPs/bbFAqQYWBSpQw+We1sqXzEOpKBWlapzDicrAKUAFqi5+KFQGSgEqUHX201RIyzkoFaWiVI3D2FIZOAWoQNXFD4XKQClABarOfpoKaTkHpaJUlKpxGFsqA6cAFai6+KFQGSgFqEDV2U9TIS3noFSUilI1DmNLZeAUoAJVFz8UKgOlDA/VdXJ1/GE0UnTzOcduVDdwKqHWjb+uQS3ycVBq1imWczBCfe9QqDo6+ZpKbbdRlq67uhRve2Xv86pKsmkWb8Ov603NskwW84XM5/MExqK+19ubW6kXs8OFoZTZfh3vlmqz2cjry6usVqukxnr9Lp8fX4NEgBdqexW49hcuoBrEA1CB6rdeDPGEUlEqSh1kO4P9DawHVKCmkWcoFaWiVK0L2KcauAWoQG1E0OEt6Cg/o1SU2lCqAQxtIfLNQ6kGiwNUoGJ/3qXyhW8vP+94/qCX3x8oCsjUQCCbix4HVLeFPz7pon6kyABGE8xfvo4KqhroKSaiPE/F9g9pTrAiVqFGwXEoNXGIbdBANVhQoAKVExUnqnbYcn25K8hUMvVy9fTpPJSKUtNQ6jf5TxtftFrbdwAAAABJRU5ErkJggg==");

},
778946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAABqCAYAAABqKGmcAAAFCUlEQVR4Ae2dfVLzIBCHPY4XeJuL6K28kXoMj9LxrzTvhNqJbWDZEBYDPM5k2sCysL99SiD98GniDwUSFHhKaEMTFJgABwiSFACcJNlo5AXncrlM4zhO8yNH+xqkvAy84MyOXl5eOBrX4PX11U0MWcE5nU5u1plnHo42NXh/f3fMzFeVrX9Pc5PHY3YyDMNWX9hXpsDHx8f0/f2dNOrgpQpwkvSsqtEMzvl8FsYcnomCM86/YVjNRI8zU03n13l1nKZpPlr4CydVG50Mzi27fm/dzDg3Gawf/TJblAKOhaod+AScDpJsEWIJcMLj7uZSFZag1hprcGRdAEfW58C11uDI/gHnwGjcDU3O452p9kTaVV3cnjrsCXDC2jRfAzjNp9gX4P4pCHB8ujZfBjjNp9gmQMCx0bV5r4DTfIptArQGR35Pj12VTVYLeLUGR/YPOAVSfNQu5F2VPGrAkfU5cK08I2gGLoFz/RhK2AvghLU5eI0tONw5Pnj604cHOOnadd0ScLpOf3rwtuCwxknPzMFbWoMjh8/iWNan6VppVxXDEnCqRSOW2nhgEjhcquL6VWphCw7b8UqxiA8bcOIaYeFRAHA8otRRtD914TjjPwSwv3dpjcOlKpyb3TX7U+cfgs6vzsrfw7UUcCR1AnXxV/QU/e2Y/anzD07nV2fl7+FaCjiSOoZ1+1PnH5zOr87K38O1FHAkdQzr9qfOPzidX52Vv4drKeBI6rRY55gxBEfhnzvHEbA0a6Gbi/2pvHmKPCoSG/Hgqn/POOs45WgAR6OwwmaWWZZa4SRg4vfrLw248Bb/BufRgO34oyJG55bg+L9vADhGqSzrtjVwYvMnl6pMfBUFx002hjOOC0b2DziZwCnqpgQ4kRUb4BTNeKbOACeTkF26kS8lGkmq21Wt7xlowsTmXoEOwbkXgLM0BWzBYVeVlpVjtyqxxon8YxAWx8dGxD86a3Bcr/KMBjj+1FRQKidWE0B1i2NNUNjEFLAFhzVOTP9q6wGn2tT92cAdM4bgzK5ZHP9Zeu06tgbHjVwGk8WxXXqNPcuJ1XQuLY5Z42gUrNLGFhw+yFUlFJpBA45GJWxWCtiCw6VqJXgDBY4ZQ3Bm1+yqGgDlMYT9zDiPvsXx4np59tj9fM6uyqdKQpl7kbp2/o+WJ7hcNVlSmacPwFlJXL4AcH40H4ahvPoV9wg4gJOEL+AADuA4BZYVlU8QFsc+VRLKmHF+RGONs40ewAGcbcT8WAMO4ACOU4A1ThIIWxsx4/woxhpnGzqAAzjbiFlZy1P8ynxDweJ5ebah+cqUtxxWklCgUQBwNCphs1IAcFaSUKBRAHA0KmGzUgBwVpJQoFEAcDQqNWST6/eFGgFnuRPSUI4PHYoPHO2AD/TuOODckrbcpVme3epyPjYCTk5J6va14LI8s4ioCXBmicbIT6RaiHdYn7Mgka+o7B17E+DMXwCLfe10r1C1tHfzjAPHdsTNgBP79qCtjMfx7sApMBzAKSByi10ATotZLRBTI+AUUIou7hRoApwCa8E70TiZpmbAGac834kGCp0CjYBz4T6OLt/ZrJoAJ5saOFIrYALO6XRSDwDDOhUwAef5+Xn6/PzkaFiDt7e36Xw+J1EffHf86+tr4mhfg3FM25AEwUnCkEbdKAA43aQ6b6CAk1fPbrwBTjepzhso4OTVsxtvgNNNqvMGCjh59ezGG+B0k+q8gf4HVqqW5/Z/tvgAAAAASUVORK5CYII=");

},
744584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960228-5e81e06fd783caf6758cce562d933fff.png");

},
287216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABKCAYAAADZoljgAAAEuElEQVR4Ae2avS8EQRTAD5UIiQiFguYIlUQvInQKCq3kCgq1ROEPQCsSrVCICh0FLdEoaa7SKAQhoeGMvI3ZzK2dj3c7X7s3m2zm6817b37zdmZu90okXNYJlKxbDAZJgO4gCAL0AN0BAQcmQ6QH6A4IODAZIj1Ad0DAgckQ6a6g//z8ODDdvCa9jfQih4G30Iv8HAToDmY3QC8CdNiUa7UagTTPd6NzAXuRbD8yEukLCwsk7/f5+bk6dxnlhCYpdKS+KLrHx8fJ29tbFPHf399RmrDrRTH5VIJTUNfa2hqlGCdVIpzqk0Kngpj08/OTlMtltOMYG6Zkd3Z2TKmO9RqBDtq3trbI5eVl7sAfHh7GcExlpNCxywvraEtLC1v0Pg/Lio1LCj3pBHYS2trakiq8LMPG//LyUv9kYgf7d3KRdUNDxxKDjWlzcxPbTXrsQisUdHh8fCSVSuW/hIwe7aEq9yePgo7UTV2Kjo9xwbMMBEVfX1+6V4gBg6iqOAp6mmeqhnp7e+u6q/ar62SgcHBwgNIq8xvaZTKZoat6fH19TeAHB0SWT9fDwwPKHR3ea4fOcwpgDw0NRQP0BfzExIS2IKgpRDidXe3QqWJeOjU1xWuyWt/d3W3VHmvMOvSLiwtyd3fH+mA9f3V1Rba3t63bpQYzQ4flhLekUCNsCm8gR0ZG2Crr+Z6eHus2WYOZobPKMPn+/n5t6ynG7vLyciTucl/JDB0T5SwcOMkcHR1ZBf/8/Exubm5YN5zk0dBlkGXt7ChtvpuBZW1sbCwy7zLKwQEpdAxEFqhqfnZ2VlU0lsP6BJAXFxfj/q4zUuisg6LBitpYHcn82toaeX19TVZrLcMHFbqUuY5yGBgKulYSjLJSSewGTCh7M12lWYDc3t4ulbMpIB6tRU9Mre8rKysWR6FmShv0RpcX6ma1WiWrq6u0WJeyUY6xA1G+vr5ep8tmgeerFug85dgBTk9Pk4+PD2w3rrzop74un7nGBQ1aoAv0o5q+vr5IR0cHqg9P+Pj42Nt/IXgFHQDu7u6Ss7MzHkvl+tPTU2VZ24LeQQcAWd+NcL8E2abLsZcZuqm1sbOzk+OyuHpmZoY8PT2JhQStMJ7kmJJlQXelpszQlaw0IPT+/k729/dRPe/v78nS0hKqjy5hOlmyCYJ2b6EDjPn5eRQT0WkFpciwsNfQ4Zw9ODiohAA+SoA83L5f3kOHV7HwpYd3AWSf/6Sa5rfX0KnDAwMDNPsvBeiTk5P/6tMq4OMx3K6vXEAHSHNzc6msRkdHU+ttV6pupOBXbqDDSQZe0bLX7e0t2dvbY6tykc8NdFhGkmd3+q8xE5unye04N9BpCHd1dUXZ1PO4SVLUAU6quryAnBfQMZEKH7Q3NjbIyckJZ/j+V3sBHYtpeHgY28Ur+VxClxJkn3WHSw7Pz2JC543Wk/piQTcY1fTh0TFvxYKug4gFHc0DnYYqmzYIOOsD1TzQGwTM65YFfIDOo2qwvqmhx9GqYcnBzFGxoLPw2DyGiEQ2niiJnKi5WNDZkQboLI2QL26kezy3AbqDyQnQA3QHBByYDJEeoDsgoMkkPaGqqAuRrkJJs0yArhmoiroAXYWSZplfM9Ijef55FxkAAAAASUVORK5CYII=");

},
722412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
37484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAyCAYAAAAX+OqOAAABjklEQVR4Ae3X0Y3CQBAEUUOOQFI4HbKDPS3SSCTAmul7lkbjL6Cray2zDRcCIQS2kBxiIDDITIIYAmSOqVIQMnMghgCZY6oUhMwciCFA5pgqBSEzB2IIkDmmSkHIzIEYAmSOqVIQMnMghgCZY6oUhMwciCFA5pgqBSEzB2IIkDmmSkHIzIEYAmSOqVIQMnMghgCZY6oUhMwciCFA5pgqBSEzB2IIkDmmSkGWyvx4PMb9fh/7vpsABrPL2enr9XrP0cdpmcyn02ls22aCGMxO55zP56M9fn//EpnnySVz9kGeHR99LZF5hvRUzpb5aJHfjq34EfPUkjlT5n/3mvF5YK7X67jdbqY5g9nj5XIZz+fzJ/78LXsyf8rsHoFvEVj2zvytAD4XgSJA5iJhtydA5vYVClAEyFwk7PYEyNy+QgGKAJmLhN2eAJnbVyhAESBzkbDbEyBz+woFKAJkLhJ2ewJkbl+hAEWAzEXCbk+AzO0rFKAIkLlI2O0JkLl9hQIUATIXCbs9ATK3r1CAIvAHxHo4aA0/7xAAAAAASUVORK5CYII=");

},
470267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
534527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440259-db40d6ef77dbc2cf9f8d50eeeb131c6c.png");

},
881025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
894921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
395628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABJCAYAAAA9mQYkAAABDklEQVRYhe3YPVLDMBCG4Xclm/+GhpY7UNBxIgoahuNRcwxuQJMQEtv6KBJmwJYHKRMqdgt7RrPzaLVW4zVJ4oARDok5+Kegvr3rLkEeTMZSAhlpY1Vkk6vt/uEFO77i+vKNx6cbDGD3/DU0ipSktn0V1uvu9llSL6kbp83GpEIMzJYQOro4oBSxik83TRWgFmzAhotdRnkXZ/YOI6Swf/Pg/uGggw466KCDDjrooIMOOuigg/uBwVYEFph9VI4wwKazr0THis36hKaNYAuO7AwrPEwmK5DezzmNRsuamFLF73e2QkADWA80MMTttoVqFvy5kIqPC5m5DcB29PNVUt1FmMmu6VoRuH84+B/ATzUEjCianlc0AAAAAElFTkSuQmCC");

},
638878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAABeCAYAAAAEyHeqAAAD2klEQVR4Ae2dUW/aMBSFHaoKpnbqP9/72r1U2n7Etmp7A7r9kbaTJtF1WgskZ7qESAVBC47xvXZOWiskYN/rc76YJCDswKXzCrjOK0ABQAgIASEgAyAEhIAQkAEQAkJACMiAKMCrA3JACMjAXiNBBaBa/FM4ZQWWVoTKYo+3A4ksS7lcc6WngHhQyiEZZNkZAgn48xoYjYAhi6oG4sF4CNzd1INzWxJ2h6ACTo+/wLknFG7KoqiBcyV6boYP74EqwHCwMwR/HoB+/wqFm8O5KdxiLY9ZdDSY4eI8MgT3hMAY8DOcX5iBoIQMTzpHQxdGodkWfU1BUG1JsgsGHbKPcmDhhYPLEAT1OcJf9IpfOCrucFTcsgTSoNe7RdG7gSseNsBgCoIn/L4H5surFTlZZQmjgQgpdwROTj/ahsC5R0wmzY3EANcrbS96M6tfocKbt5+sQ/AP95NGed5NbJQIsa7vCVYYnBCCEHom2QYhSNK2sEkTgrB6JtkaIUjStrBJE4KweibZGiFI0rawSROCsHom2RohSNK2sEkTgrB6JtkaIUjStrBJE4KweibZGiFYs6165ct0m57ftG+tWdObhMC0PXGSIwRxdDYdhRCYtidOcoQgjs6moxAC0/bESY4QxNHZdBRCYNqeOMkRgjg6m45CCEzbEyc5QhBHZ9NRCIFpe+IkRwji6Gw6SjYQyIc4qX+Qo0VKNhBoCZhDXEKQg4st+0AIWgqYQ3VCkIOLLftACFoKmEP1bCDg1YE/jtlA4C8BaxICMrD84Vr+SEWnUeBI0Gn7684nDwFPCNtTnDwE7SVgC4SADPDEkAw001rw6qDTLCT/dmDlxNBKHj40Jw+BT6fX64iB+yybXr9p3z5tar6WEGiqbyQ2ITBihGYahEBTfSOxCYERIzTTIASa6huJTQiMGKGZBiHQVN9IbEJgxAjNNAiBpvpGYhMCI0ZopkEINNU3EpsQGDFCM41kICjcFN+/AeMRMByzhNRgJJpeA8fHPyA6N6Wel9rUDKkyX/DjcvJGmTe5KYecR7grbb80EbkhCGoqSxROZvduAJB1V4w6ZD+nL+hoDgIBQMohBWHbq/qag4AGrRoUQw9CwFHHKUDwNAPOzt5hMLjCoP+ZRVODwVcM+le4vATKqp6xfr8v4q1e+LrVze1bMh/6vALKEpCv/rHoaSAeLHwINEn9zhAIb/I3384Jn4msQJuj/3mqe0DwvBofayogB2O91I9kq9njkxch8FEtszqEIDNDfbpDCHxUy6wOIcjMUJ/uEAIf1TKrQwgyM9SnO4TAR7XM6hCCzAz16c5/ldYbf66ffcAAAAAASUVORK5CYII=");

},
156075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
506342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABqCAYAAADX5f2sAAADtklEQVR4Ae3cC3LiMAwG4HABDs/AKZgBDsG1IDsua6K6tvxAUmLzd6aD42f8WRWU7jLN+FIXmNRXwAIzkA2CoA75aXBHAy6xIHOAXNuAKNJbKkOWXvXL5rNDpj8NtPwF4AvyFjY7KP62kLdw0Ar38EKmEUTL3IK+n3/k+n552+eR/Cnyp+M7OEAeOQWQqm/ZsORcLesbjOGRa2/gC8BqSVz/ZuTn8zlfLpd5mqYhv1swU2PyyC46IxEK5BTp3/oFOQL5t/vvGkTyb4/U1YKc6sHUe+Tdbjfv93umZx9Nh8Phnfok75hHzkT3aMjH43EF5MxxjoZ8Op0GQs78hGTOVq35fD4PgOxx/aMaV9vE1+tVGTm38Uh7cboIx4bXbSbio/SRG265GLlh7jWG9IesEa0ac5LT7A+Z3HwvxS6R3a/eNV+uf25Mrr1mvbCvLXKhTXVO9vP6x3CXK1/bIhdulkWmkLTs5g6vC9fT7tY3cqgD5FAkfc1GcnpYe4vy4fQXye2Uq43URW6MEPNIVubXRW68eSCXwfHvJ2fmAHIG6H/zgtyQMoBci0z7U3Bapn3m+f3X6lH+/IScHBywxiWQNVSDOYEcgGhcDoNc8i5aSZ/+kJknN24zeHXB6Sxty0u4pa64BOQyKlPkXBrItZdtqb3XMDm5nUB/pB2y/5NRQZ5Guig7+PJ0EUGXRka6iByaNHJkCdMqu3RRsS0gl2GVp4vIfECOoESqNoHscvHa+djZDJEutgAZCbR3lS5y5JXDe2WmgHTB4JCmTaQLcj+rFnUjuXFrLZG85ZRhi0zTBy27wyDXLciN52kyzBa5cEtALoN65WQSnWXDXr2AXKaFJz7ipJsuBCN5y09sxDNa7AY5evedVOoiNyJI5eStRL8tMk0ftBwchhRyMO1ql9tAduAEHchl8YBXF8TJNpLJwlzRKpKtcvZXI3MHLdkGZEnNxFxATsBIVgNZUjMxF5ATMJLVQJbUTMwF5ASMZDWQJTUTcwE5ASNZDWRJzcRcQE7ASFYDWVIzMdftdlP+XLjEwly1f4PIfYay+1+pI3z7z4Pm9l3bJvJWp7+xkR5rIbn+QE58kjmHVtv2EfLj8fj5J6/u0X3d7/chvmsRc/2bka3eSM9tQKNdem/NyBqbG3VOIBucLJCBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsMQ/cznzetSTKTQAAAAASUVORK5CYII=");

},
601016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAACDCAYAAAAu7p91AAAMvklEQVR4Ae1dO2gVzxeOURERRcVnIyqm0WhQCxu1UMQHCYgWClqoWIhNCqNExYAptDMqqChYWQhWmkDAQiIIIj4IghYiRHwGRVCLFGKS+XP274nnN9ndO7s7O689Czcze+bMmXO+M9+d3dmbe+sEH4wAI5AJgbpM2qzMCDACgknDk4ARyIgAkyYjYKzOCDBpeA4wAhkRYNJkBIzVGQEnSDM6OsqZYAS8QcAJ0niDFjvKCAjBu2c8CxiBrAjwSpMVMdavPAJMGk+nANwF0hcNA+VxMmyDko98CGQiTVtbW75RuJd2BOjklwmAbXRQlNGStteq82bNP4Qykebly5di+vTpAko+GIGqIpCJNAjSx48fxaJFi0Qw7z55334REC4rhUAu0iBC7e3tYsGCBXhqpaTzndZVnAH96MjaEftxWUkECpEGEWtubhYtLS14GmY5xrAww+Oo1BHQQhoY7v3792LmzJnizp076qP7pMmk8SlbpfqqjTR4fzMyMiLWrFkjnj17Vqrjxo1LpJFOrbgDPuCLOiDL8DyupP24roaANtLIwz1+/FhMmzZNFgdzDhPQxBE30U2NbSI+H8cojTQIRkdHh1i/fr34/fs3ivws6ex1MAJ0j7oWJ6PtXM+HQOmkAbeAMDNmzBAXLlzI52XAvXBiJ5Vlho5jljlGiLaNkIYCd+LECXHq1CkqKlTHxMtlIaPcmRFIQcA4adCX2bNni8HBwXAekGJgXAaPgDXSALK9vb2ioaHBGsi4OmlxAIz9PdCuaon9spSybdoX21CG53El6nCpjoBV0oCbsFW9ceNG0draqu61bk06m3Tb1mCPugd1PuwiYJ00GD6Qp7u7WzQ2NqLIXElnZdKoVEeuJ/XRJFcZDnXokHEy2s71fAhYJw0kFg98QLp161Zx/fp1FAddQvwjKa8yg8exyxwjRNvWSZME6vDwsKivrxfwCQM+1BGgb0LQSz5Xt8SaSQgYIw0mD8skh2R5V1eXgJVH5QDbcS+VvqzDCKgiYIw0qg4l6cE/vtXV1YmvX78mqWSSU3Jl6pikTN4NqG2VepLJNLlsN02X2/Qi4A1pMOxjx46JHTt26H++Q2chDhZXUj25/lcfxXHdWeY/AsZIAxNJ1wH3O8uWLRM9PT36yIMzvYijaENXoAmXm7VcxI0FdAP0UUbLWnawP5f/RcAYaf47rJ6zgYEBMX/+fK83C5BnSaUepNiKTgS8Jg0C8fbtWzFhwgTx4MEDFFWuxNWErh64qlQOjJIDDoI0iNHVq1ejzQK4fIs76Lt5XDvLMiJAGZqxq8/qxkiD+GKZFzSVib9582Zx+PDh1PsdaqeoT3Issu20c7mva+epvusGzrXgE/wxRpqE8WPFRXOBnyxoamrS/x1tCs7BZZGCWmzsJoXgow9+msREZSxjpLGRHCAPPNeB5zulfywHZ6ChQOlwhoaMn09WB493qWypMdKUHUgt+3fv3hVTpkwR7969q6VqvF0mgMq5TicLzfvR6n0KozKkwUm2Z88eMWfOHDzlkhHIjEClSAOXa/iCL/zo7OzMDJgrHWB1wC1lKK0chZYoKx5rGdRL0siXL4AElakgA5+eBgLBv12fOXMmdadNxR7rxCMQIq+8JE18evJL+/v7o+9oy/sFh5SwWeu1vFa1V8tOrXbVcagebr2BDOtjZa0BPW5n0pDknTx5MtppGxoaMrby0EkYVyfuuVeN2PLXLaxj6Z632jxi0sRA+fz5c7F27dqYFhYxAp7+UK38jgyJpDKVxKroHzp0SOzfv9/YqpPmN/U3rZ5mI2tb2jhyW+xlGSgFeAS90siJpeequYRvB4UPg/b19Sl1oWPorCsNblMJgsUD61iiPJAyaNLozBH8hAiQ5+fPnzrNardFt6Hz1gOd69qwZtJkgBK2qOGYNWuWgJ9Q5EMRgcBY6CVpxuVAFsA5vhTzqqqGD0dv374tVq9erdqt2npyfjxHw0vSFMUc+ZRUZrG/ZcsWcfHixSxdcukm+SrLcxnX0QkcqcjhHWnkSYK5onLTuYOfToT7nV+/fpkeurTxKJ4qdVzZo3xEf8gDz9K8tGPYO9JkgSkt2VnsxG6nJhiA5zs3b97MtE2d5ie2JQw3Toz6RctxhmsJYEA8aB1lAZVBk8ZWnj59+iQmTpwYEQc3D2z54sS4gZHIO9IA/uM+1SsnBc7xpWvWoD0sFexeu3ZN7Nu3T0HTPRUIU9uh1Zg2r3Ibyk2aCIfRcdM3tyOFOspJgXN8FTJco7M8boL68uXLxatXrxJaKyBGnLD8G/L/T0eyXP06AVZu0jjhfRlOSInVNQT8K8LOnTvFgQMHdJkMxE5JgJeIDpNGFdyk3KIcyxr24H5n3rx54smTJzU0A2pWxMaXiK2SRhlLUMSXKWRxvCxlBt8+f/4s5s6d6/W3gyqHCxgGdFgljU4c4+Y2tS+30zYbddxVa29vF+fOnRtzAeUgoD6PKXDFOgLBkMY6kgUcAKIcOXIk+h8eSpoCJs12lVcSZLtZL4yNxqQxBnXtgb5//y6WLl0qbty4UVu5ZA2c91nKyCXaoWQfbZln0uRAns4LWs9hKrYL7LTBw9GnT5/GtjsvBFACPkonTRJ+ONkCxrZwaLDDtm7durGP5Lh66eaqX4UTkGCASZMAjEviy5cvixUrVogfP3645FZlfbFGmsoinjNwuGRraGgQx48fz2mBu+lCoHTSpDlatWU9DYu0Nhkn+DeE06dPj122pfXlNv0IWCWN/nCqZRE+WfDly5dqBe1AtEwaB5KQ1wVYgR4+fCgWLlwoYLuaDzMIGCYN7Jk58sloM/gaGwV+DWHv3r3GxqvyQJZJk7QhXeWUFIu9vr5eNDY2FjPCvVMRYNKkwuNXI1yu4Wv37t0C/gmOD/0IMGn0Y+qERSDPnz9/oi/8gOc7cM6HHgQMkYYmLKmuJyC2Mh6BK1euiA0bNoxvYEkuBAyRJunmnxIol//cKQMC8HAUnvHwqpMBtBhVQ6ShI1MCMWkoMqbq58+fF9u2bYuGYwJlR90CaShRaD2789yjGAKwy9bT01PMSAV7GyaNTBL5vIIZsBwy/EQ8/9p1tiQwabLhFax2W1ubmDRpUrDx6QyMSaMTTc9twf3NvXv3os0C2K7mIx4Bi6QpcmmGfbGMD46l+RAA8uzatUscPXo0n4HAexkmTeBoBhheU1OTePHiRYCR5Q+JSZMfu8r0fPToET/fIdlm0hAwuJqOAJBn8uTJ4vXr15V+QMqkSZ8n3BqDQGtrq1i1alXUAvc/VXtAyqSJmRQsUkPg7NmzorOzk0mjBldWLfrRmax94/R51ywOFdMyXGHg366/fftmenhr4xlaaXRPct32rOEfxMBAnjdv3kSbBffv3w8iprQgSiYNTG6e4GkJCKkNyNPV1SUWL14c9He0MWlCmrUOxdLf3y/gGQ9ewjnkWmFXDJCmsI9swEMEkCwHDx6Mfu0aQ0A5nvtYGiANX575ODGK+kzJAZ9jgw+D3rp1q6hZJ/oHRhq8h9K9W+dErrx3ore3N/qOtg8fPngdS8mkyYNN0sqUJKdjoA6WtI3rriAAq1BdXZ3wlTyOkAZWBpzoWMdzTDWuHlQOdXqOulCmtVE9rttCoLu7W7S0tIwNTy/pxoQOVjwkDUUxiTBUh+uuI7Bp0ybR0dHhzU5bPtLgm7i2OYsGIb1Yl43L56jr+pRg/2ohACvM4OCgmDp1qhgYGKilbr09H2mU3UYCKHeIUdRhI8Ysi5xBgF6Wwe/wwNdMXbp0yRn/ZEeYNDIifO4MAvC91MPDw874g44waRAJLp1EAO51mpubnbrfKZk0qnnAHTPQx7p8DxO3e6Zq/58evRT4J+Wa6wisXLlS9PX1OUEeD0lD0ysTi7ZxPUQE4H5n+/btUWi23gDzkQbvzbXNWVxdAAusy8ZxpaFTQdahbVwPFYGhoSGxZMkSa+HlI41Rd5GhcYMyaeJQYVm5CDBpysWXrQeIgOekCTAjHJLzCDhOGnofQ+vO48oOBowAkybg5FoLLfBbTSaNtZnFA/uKgOOk8RVW9jtkBJg0IWeXYysFASZNKbCy0ZARcJw0dMcs8LvLkGdZYLF5RBpKoMCywOF4hQCTxqt0sbMuIOA4aeglGa27AB37UFUEHCdNVdPCcbuMAJPG5eywb04iwKRxMi3slMsIOEoauH/BexhadxlK9q0qCDBpqpJpjlMbAo6SRo4PVx1ZzueMgHkEPCGNeWB4REYgCYFKksbWt5gkJYHlfiFQSdL4laLi3vr2JuG6v0GSxnXQi9OALdhEgEljE30e20sEgiSNl5lgp71BgEnjTarYUVcQYNK4kgn2wxsEmDTepIoddQWB/wGzD7w5MZAWawAAAABJRU5ErkJggg==");

},
731074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
644650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
473448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
544151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
703377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABLCAYAAAChtqNfAAACUElEQVR4Ae3dzUrDQBSG4enGdOFFCv5eQBoEr0i8BHFrEVy5FLwH/0Fr8smkqUg2ac+QQxje4lALnkznfHmSduME8ciqAyGr1bAYEWhmJ8EWgTaSmvYns7VnuZwtA41rr7NswOQWFf0kPAYDbRrp/k5aLqVbxug9eHxKSFMavofWtbS/d60QvhTCt2bdiL8z0nqw6eUs/CiEph0HZyMHuqql+fxGoZ00LiBOzhinBysdnTgEWhCo00m80jGB5nS1IFAnOV4nDYESaO+WO/i1JX4o4h6K0MzkECiBmr7acQ/N7MQhUALlQ5HX/dAyD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKG7Co0b8RTzuBGP5YyjZru+xU141r06PO0ltOPLwf853wZaEOim4eM8E+jfGT1Og72vLM6BXpw/aLF4VlW+qCrfuvGhqmTYe/D+r5evqsr4+lOXVzteY3t/PnjJVdyesN0CsXvuthPtHYeXyR1Y7zPZxH4nPAYDTTt8wjuj1NSBwUBNR6UooQNphAg0ofVTLCXQKaaS8J4INKF5Uywl0CmmkvCeCDSheVMs/QUAt8sj5xS9wQAAAABJRU5ErkJggg==");

},
952198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABZCAYAAABCKRhmAAATNElEQVR4Ae2de3Bc1X3Hf+ece/ehXUlgyTyMJzzGhdSBJjQ8AqSUhvxBKG3pawaGTjpMhpgwKaEGy68MJWn/6LTptDNNEwJJMTAJtE2gwZRgUlqSzKQ0A6VASggJAWzjhwwC25Klfdz77Xx/557dq5UsBLbklTHM5ezeXUm7n/3+3ucughTIH0maIk3TSefyjx+5PZlXnofs2jkMHsO7dmJ4eCe2D+/AjuEd2Dk8jGGeD8fw8NRz4bF5Xkf3jnblhy0VEfSJQIqCyAokyg7eNg5WYkTi4MTCioHJDt7O3w/n53K1xurfX7tmbXfCLFgLEUGPWPRICVbKMKaoL9qJIDICY5yClSMwZ/wQxcURjI0wIIJzxKDfGMTWwlkHa4pw1qgqqUxVZ6aOI8qc6jslcgbWOHxy6Ul4aGApVonBhUZwippxBCMWsVhELZg0dZpbONqmP5cmzt/d/WbuDHqsw/0nfgCQKkbjCh7vW4zrMl9KkAUxiDITp1KtELLLgB6BGSK6lK3g0jNOxxuFfkDKgPQgkQIaIngxtli5aDEWZ76TQUoM4TmIHvS3IRDxsezI+daDqdauV+aFhR58c9lZSKSCugga4pCaGKmzgBHAGOx2MW6LYlwugpICcxBrIFY0UBEioRG0hz03au16mDf3DuLl3uMx4U7GZ8tfwGfcX+K7g9egbopIxQIEbBzGXIztLsY/GcFFIjhGBIWgROvN/l0P87alH8TWnvfhr+VTeL88hvea72F15R/wVPkipMYgFUEiBqm1SIzgzUKER48awBox+KgITrEGRiO8N/l8+nQwTXxBBKCvLLkU/yzLsEReQCwNGKnj/bIJty/+OzStU2WmRqCHiDd/ifFmoYgnBgZwnTGoisBlfrITZj6FOtAkv+vNfFH/Bjip0Zr1MFJDLHuwOH4TPyhfDohFKkWAh3HqQ+lHm4bmL7r+vFDAusEBnKC+00JMDCulnB9lGsXo7zQraKVZ9LMdx0xq7nqYvT1fnQTTShNO6ihIHR/sfw3b4lNRNyWvUBI3Rg9v/rxPNyAKfMTEuDsq4Apx6NEMgGmVINbUijB9YBKJFbi4yRlAp6rD88Pa9TD7qv8IKxMtZVpJwMNIioJMYH3PBmwpLEfDFNR/EmLnQZUmJkLdWYzFRWyTEu4TUZ96PDMAresLEBNlSoxhJIYLAYxrptAAbrq1+2H23jEJplGQTXClEH/F/jc2lj+BzYXlmQIJk4EpHDR13vYBKjXMACKMRQV8b/BYrHMOF4vBqSZCbLypEypN3rLBokAZvHxFNZNf7X6Y1Q0wVKbxPlOEIOuwUtM0U2yCK+QL+H7fH0NBqZk7heeBCpqaQrV+QeYKHODKGCkU8ezgMRhyDmVhPup7AZpGEaYeMWj6fIyVln+snasGwF0Ps1dh1tWsad6SKdNqZJ8AVx6Xxw/jv/qu8ol8Dh5NPvgIqjNl0i8RILFmAHUGKut963ZXwurBY3GqGJQykGzxhfxUDBXK+1SwIJIYsUL2YBcAzLsgUoeYVEFqjJFU/WYASaVW5DWc954xvFw80VdJmZnTX4YjgOXKcxD62VjhJiZW6HQJrxuDbzmHK41BkVBtEWItjGXPtJj1TukGnOawrLboQw8bmNYwZRrFLUffiX1S1Ppd1aewfFCiQmn6NHtv+l6lVKv3IyxRLZrGYZ+LsdUY3G8dPiIGJ7Ci0u5USKlo+pE2VUIOe5jAbMCYJkQaODt6Ak/1XIRRt0hNmcEmySoljfLGaMXEqokAven7spQ5q89bCdcXBGPW4bHBY7BWBJeIwWlq2gbWFrXL77TLn/nPrJe6rls77dXKnW9p5oQopgFjG1ol/Wm0EtuKy1q+su4MEusTeZacCrUjhVLV6mNR5lcJnb6UhYDFbmfwf9UKPh/FWaDiuCRCrMm+h0mfSnNfvzobW7D31UXDP6lWpvrMdkzxAclHeOafjD9NRGYcf1UYwo97zleI+kD7h3w9b6nKNliv0vb98Fjwt1z5QTCFGDYRbj5mCd4nomDZnfI9VHb9DT67ep0fHyQAminAlVNWhTu1Ax76jXO9zhomgTLSq0qljgF5EesG78WWntNUoaG0VCBsjlgfhAI0Vk7h9v5Xg8Q4hVq3gr3OYaO1uNoYrah0PiUO69fcSHKemoL0Ck3RnHFG0yUwWRH5ysgDbSI2YzjDPoM/X7oRE1EPmi40Q2i+blKED/A6VRjOh5VmX7OC1DrUI8GEE4wVImy2Ee4zBpeIxYli8GerVno1gkva+hfpgoCZ5vJQJvX+6JNhnFt5Cc/0/BqaNtTshMmI7ZVJpRISj3AumHSAyDU8TkU2jUXDGtTZUNHfG2E0cvj+ogHcbAz+9RNXA2+8ASQN7zLVbyZYMDBFQh7agNOEnvd9DPqL3lu0Nodhss50SJC4DGYWmPIgp4WZy1cbhsl/hKamWcwKoixvNWCw23ZUFbtXrwKaY0CD8kyApEkHeqjNfGo0D5C8SdNPtpXpGyGE2NTKiD3QfrMPG4tXYCQ+ru0XtUVnMWGNmu5bwQwq5ScU/K8/Z7IiwY9RVOlUq3UYP24psHsUSa2u5t4FAWg2ML1Zh46SLzvrWTAi2AmcFL2KR0ofx+tuaQtoJ8AAbLZrcA9c+TOM9NpQEYeaEWy/7FKkmAADjwZz/rdj79R83pfp8sypypwK05ea7H2mMGYCBdmHK90D2LhoCPXMLDnhzHeXZgtxpuepbxWDffSp374PSS4E0dDnE17n3zoAmASZIKIvNRMa7d8jz2Fl6et4vvTr6uNCFZRvKM8EaraP1axF41fPBN54LYvkjOkJPebChEmQLZjaWfKp02nyFP5+0V0agJgzcijnzXNqwv5W8FoRLjMVPp8fUK3cg8a93wDSkK0TY0OF0qmW+bw/S2WGSmjy2pl7MihF0kSfa2Jj3x/5+pswc5XQzADbtTx9o6/l/c8TIk2cs/3kvA8jfWmrV2WHm5xPeJ1/64BgtqM9IbNCClUS8Ev9I3ipeA7GbF8rIM0MMvhXpkX+CI0Rv3plv1KNMXLV7wPNca0iQyHU+cYOxf2DCtOPPLx6CzKGG+Ov4bnSuZhwpVkC7VQm81YeLDM97HuswQNXXaEmnqYJkqzXcSjgdf7NOYLpm8vL7ZO4p7wCLxd/2cPcT0eprdjJMJm4a/KuVZTF7kKMTxvBl65b4QONlpO+cdT5xg7F/YMK0yf33tUV2K13TXzMfBkPD17vS0om2+28axpf2gmTNb7DuGOpFePp3jLOMoI1QzcozNB9OxTgpvubBxlm5jM5ArHMTX0J+qH4R3hg0Q2oGwvOhEI5SbD5xN6bcjvq+3KSgShWqBeI4DgRrL9paFIKFPL06d7gfJ47qDC5gUGrI+PLT8LkUZQ9OHNJDS+VuNvOt9n8eHhmmMH8CXxTqUeHcJy1D60hzENbh0/3IUm1cveUTnvbEienQpOjd+djBJnBzDYxaMNHh3N1lGQM6/ruxZg9GnVuWdTU561hKnzncI1xKJuCjoLXrFqladF0b+hQnpPeagYzG/O2QdKldQKb6X4HTKozm3h6hQKnx8/jmfJvYLdb7EcXWXddmxdZq45qpBJ9esQaPMLPjNGuO8cYnKt7mIe22pnuQ3vHMGnOftdHAJyDaRIdHXuI/nm8zQ/nmvhm/Lx8NhIbAxGjddtHhts1NpqFo+EK9tgKvmIMytwO7pxe/bFm6CZPMjjLLlnbPlNVSDW2E++3p0xfTobOkjZAcspWmKYGa+pYW/ob/Khymc7VGYTGHZvJjORelWyUsNqpxYLHY4cPiPH7kkpFiHO4afXQ4Q9z//CbOt1kp4kzpIq8ihXH/Sd+Wj6zNS4mTDXvsHnBxNhS7sMNeo0SB2oFFEwZRYmx/sY1k6L5dCZ3KM5JbzWbTqoiD0yZ+4dJV+DbeDrdlD04zT6Hzy35JsZN1XfUs5SJ6mSAmoj68bWohPOMIIq4VaYIYwo6S1+9aq2yOhTAZvqb0tc7PzC9z/TRnhtqK7ILpxefx09KF6iJU5WcvXOH8rh1GC4uwseN6AZaXoIYG26h4T6kCEOruxRmbzXrtB8En7k/ZRIkZ+7cyOB9Kf0yTb6Oof4voq4DOIs0dkidYMIInij34yzH/fLciyQo2AKkEENshKGhLr12stVpn0OYfhjnUy2n5h6GcU2UpYk7ytfj1cLybHeHIC2W0Xj0B9j+/M+weeur2LJ1Cza/ug3bt2zXY/cbe7rTZ7ZhUi1z5TMDPL8jeVIua1MMul24t28NdkTL+QKw4/d+x08dxwFMaN/Xz8nZCw7/dEk6lPehBzU12p+Z55Xpn6PMdOpJUy/aMVxmHsLdR38e+6Je1L/zbWC8qZPb1osNEMPa/TCpoHeeZ741TP7+oFKujPJ+U9hi+QWuLD6AsXP/AMnoiB+Bs/zOOulToHYnzA2+Np8XnxkUyTXA9OcYpAbsZmx7ZA9o3Wyjc4DLyQ73GPjNBtPA7SKoUq0GmMFntjcc7F9poYSc7RrUmIfJn+X1Ryw9G7CG084GqnGK/3l6FEna1O8KoTJ16kig+aOLIAarkWrljkyZ8wkzqDIzc9dsbaal2V/y0T0YqwNNmrkqFH48QcV2IcTwmnIw+ca8+fm8cLaqm83zOpWZwWRXydBn1iDGA7UmxRnv/Ql27/VbL/PbL8kxvPBuXOcdppbe6i8JklAbEEeraCCOxnD+h5rY9opXIq2aJs41CLJ1I5zoolWqleAz50eZ3LhA5es4na06wowJtobP3VzD6EiiG9qShjfxTlbdDbMVgOYGZn78G1KhsE+J9wl22YkjeOTBcSQ1n6PXqUamRJksCbStzQxvJ+UuuJ+L5nMDMwDTAWOrwvIND445Pn3+D33aQ3AEwv2WAUyw8daJ8EDHNo7c6emeOl/n5gEm/aJPt3yAS3TAdrI8i2vL92DzY1tAJaYM3dywqpLMgAZnOR2NLgGYf2nzBtPnk0BJ9uJ0eRqfGXwQz33sVuD1EYWZ0EnqkeVCeVj5Vxxu5x/vkts5mCGhPtCkPaRBdBtBldx6yN/fwDmFF7CxegNeOfYCJA8/qAB1kz8TSpY6NO1g8gFSAJhfw2NdtGaXrvjUxAcID8DfJpC3e3iY3J7tzZpXCNdRlBSrqrdi3PajbspILvtDYNuY+kcyZKWTZ7UQb+dgBmgHBtNvM2QCzi8EIMSdOFf+Dd/qvx68gICb/3/Rvwj49/8AmtyLnlNj8JELFOxBhkkXgdYVwcfbH+Na+Vv8S+WTeLF4hm58rYtB49prgJ3bkCZJVn/zOzs7gk64v4DWOYDpFb7Y7MTVpXvww+pvYVd0bGvyOFatApseBMbebAH0F0Zlpr6A1XmAML1/5FyHpaF+owS/MCVKccvABoybHr18T78TSYdAgs0fPh/Nkde9f2SgoXMMTUuq8N0A0zc/aMLh4KYDJt8+0HCEe7S8ht8ubcJDfdeCV5pxbMtrKHmBVWoFtUoF2LwNmGi0ukF6I+SXCxgkNfE2lOlVGDpL7ZVQgWXyKO41v4kdhRP12kmObPNX8upsZ8UKVaK/2tGLsL3JP3OOC8hHdmYcBwCTvtGXhedfsAXf+foEXlj7ZXz3lOV4sVrxW6ezOXgSGdR4Cd+mTdpXC6kQoU7Jh6Y5Nd3TuvHcO4KpXR+poVTch49cCIy8mTEZ3Qs8/RRe+d3LsXtwMfbEDg1jUC84pBdf7C8eradIm/4btw87mL2Vu/QqXb99hWqbnGf6Do/fyeb7j0BBGijFY7j91n2YGCVIL6cmmlpa0/W99r/PYORT12B3pYx9i49C8sgDWaBpoIEJNFDzeyw7JbaQldlb5diCCbb3fWEXm1/HWwHHq9EHn7PPeBFPP9FAk+U0A7KWfykSvfohRTPhba/Wxk+34/EN9wN76/pkba9lQu7kuNDvS2/lDv8lUS2YvvwLihQTLjit6wVTK1c+h30T3tMpMILsiMLkSDDKk4/xyOptNe1wbgGrcLoPXvqmwKxpLe3LQk4Nafp7cMKSnfjSFwH9vvkwzyaMDpDhj6jlT/cYQR+uML0yOXJlZKYZ82vLfO7I0WtkJnDySXvx5JPAeC1zj5xykdZ0sDK1cQlgeVNvh/UwU2R4n9KrX8WTTQmzMYLPIQF2x/9kxR5s3Zn4PQD6/71g/7aGNKnrXGEStBzI6c6HP+qjVPADOegLHLJUq3f6ARe/wkw3BExox2egv467vrrDBxLdW9FEky1HvuEZFNkCtsDBvJP3IRXdn+nn5Yzgzg7jrLNewM5d7NWqvjIrDUrqIPkuhLY/0KrMrAeBavEVXH/9XmzfnilQowiF6NPr/f2SI+e9q5JKdQMiSdDfX8edtwNj496K80GDKFWjc63CDtEvtA9JqtXbcPryOp59Zi+aSU29Y0i4dXDNN8gTmZXrG9RzwXcG8z+AQBKifFjn+kObo98v64e+gfqYH/4rM7LJg8tlNe9cKfyFHPQcAPAF8LPS1KF1lj/O2Qt+l8CcP7Vkcp+zD+zQq14U5gL3VfMniJk/MKGDDN9YlRdNt7zAhfQ6ZFJUyNM8cnsSmtl8qN7Mj4B72+Cmg/v/xut1HCw+jZoAAAAASUVORK5CYII=");

},
457446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
390050(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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CiiigA70Ud6K6KWxLDuaKO5orGW4woooqRhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAd6KO9FdFLYlh3NFHc0VjLcYUUUVIwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAO9FHeiuilsSw7mijuaKxluMKKKKkYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAHeijvRXRS2JYdzRR3NFYy3GFFFFSMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKADvRR3oropbEsO5oo7misZbjCiiipGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAB3oo70V0UtiWHc0UdzRWMtxhRRRUjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA70Ud6K6KWxLDBowaKKHTVwuGDRg0UUvZodwwaMGiij2aC4YNGDRRR7NBcMGjBooo9mguGDRg0UUezQXDBowaKKPZoLhg0YNFFHs0FwwaMGiij2aC4YNGDRRR7NBcMGjBooo9mguGDRg0UUezQXDBzRRRWtOCsSz//2Q==");

},
195765(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
730244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
186549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAID0lEQVR4Ae2c+09URxTH/bH+BfXVJjU2/gm1PhpfUUmsSUuQ2BhFxRIeVkkVUZCHgq0mtaaxJiqICjSmRRDFR6OiLdFa8QFW7aKmPkFUQBZcYGHv/TZn7h12WJbXcnd3WIdkM3eXvTNnzud8z9y5d2ZHQQfUK/g+GKUgBB8CMVAgJMkICoQCIUdKkCU1K0UoRShFiGpUilCKUIpQipBEBXKCgKkQXpKz+J+EjhOdaMVx8MYIAJpLh67p7lss5HgOwFsZwkACDqK1pRX37t5DxR8VOPrLUaRsTsXnCxdh7uy5mD5tOubNnYfIiEhkbctGcVExrly+Atu/NrQ52tzAOBAtdMYZ60GQc+gFwNXlMg504zjm6xjMmTUHZSdP4e6du6ivqweB6ezohNalsfOopPctzS2ofVaL21W3ceb0WUSER2D9t+vR7mhnQHQRRggAsR4EdxBlHE3HhfPlyN6WjYS4BFRX34ZmpiKWkji0/kqzPs2l4UXdC2SkZeBgbh4eP3rcWyFC21bk7UDW4R8QpIZOFxLXJbIoZh0So5Z0Ir4fyIGGrgzHk3A0DSuiVmDnjp0gQN0OG0qdA7UZ4P9bA4J8IQy6p8tOIy42DteuXjMcxSPeqs4RGB24XHEZ8XHxLH31gm1VWwGqxxoQZCzB0HUcPnQYsTGx6OrsMqKeRykvreiYWJcGJMQn4Mb1G9BdumEHlVa0E8A6rAFBAarrSNqwEbk5ucYgbcLhA7fljjFhkBI7nZ04sO8AjpeUMgAMSACdaEXfhg2CzQVcOnJzDqLotyLDEZo5PxAj18+OIRgpm1NQUlwCh8Px7inC1aUh50AOCgsK3eMBd3ogQPCBnFKjS0dGegbGjhn77oGofV6L9C3pwe+4OYA3NTah6mYVNiYlB98mHpCDKIeVmhxvHZg2dRrsb+w9B+ZBNGxFXu2zDg3Y/eNuVN+qHjEwhgWi9Hgpu13RPTnjAAKRknhbnqWpDKfTiWVLl4EUwv6CaZOnjV7eDx2E0S02b4haHsUmbn1GppcGA/nd+zX3caL0BFMrXVQEsu2htjV0EORcACujVuLmjZtGSjLhDLVxf3+fZuCLIyKNySbZGOTA6K99n0C02FuwJn6N4X6JO0cdv3TxEo4cOuKGIGmK8glEja0G5efL3Z2TGYYGrP1mnaEKghASIEgDGrA1cyuePnkqbac8UwDNcZrfNEsdOINXhJlj6QppxvQZcHY4R0RqIiilx0/gZf3LEAFhSvrRf4+wOnq1e5CWOS2Ztj24/wC7ftgVIiCM+Me538+B5g/sbqvkl4Q8RXU5uzDlkykhAoKiSwP2/rwXD+8/NDol6cDHAbDSTKkTP5oYAiD41YYGZGZkormpGfpIgGCmJroZOG7suBAAwccBAJuSN4Gkzi4DRwIM08bx48aHFojUzanGiguCY8q+Ryrg0GQpTRvHvC/3rfFBX77yVPT9dzvwoq5e6ujqERjmI9wJ4ydIbfOgQfCBj55J97jHJEvk92WHOb5N/nhyCIHQgYo/K3Ao7zC6F3j15QCJPn/b8hZhC8JCCwTNUBfMXyB1pzxTEy3vLD5WLLXNQ0tNZpQTCLb0cYQM1kW/FqGhoSH0QOTl5rkXdUmUgnooQbArIz0TlJ76+r8Mn/ukiCePnuDsmbNSd4w7lxY0Ry1fIb2tPoGgO6+LIxa7l1maVya881KUpk1ZW7Nw9a+r7gmoOcGTwkZBtT6BoDkFrcjOO5hndJAqlKWDQlDY7XbErI5hahDX5soGgezxCQTvSPSqaLS1tbmffgmE+XeCUrIpP1B2sow9Kg2KDUP0xbBA0GVhQX6BPGoQOk+X2WHzw+Bsd0qflihQfANBEWemotmzZrO1TbJFXdKGJGNFukxpUwgUT3/5BkLIw45WBxLXJrpXgPfTmGfj/nhvu2djq/wK8wulv1IS++8bCA9nX7xwEeFfhKPV3tqtFLGRQB03vm4E7dNbtTI6qHb40l9LQNCDl+uV15Gakhp4B5gpsr2tHYsWLkLd8zq2V4OnTl+cEoxzLAHBDAdQfKyEbTb0uhXXQ0WWdRbA82fPkbwxGbTeiurttRbXX21bWK+lIMgJNpuN7ZW2N9t75mgzcocNQLi/RbuUqJ2lXy3t7Xyr2rPQ2f313ToQgsFNTW+QmZ6J7Kxs99M87hjuSP5eOM+boRTd7EX33c2HPPQ92k26JTUN+/ftBy0BZecOsk5v7QT7M2tBkCMEZ1Req0R8bDwq/650b6fiIAYAIDqme1asATQg03LP8C/DUXWrqqfqqE6hfbEO2Y+tBeHFuU0NTSi/UI6Zn83Enp/2GDs/6XuDBMIfQL16+QppqWlYErkEd/65g46Ojp4qGGR9sgLxOwjWcQpUTcepslPsFwhoqxdtVs/Pz8eZU2fwoOYB21BCPxnx+tVr9vMQ9CCHbrdvz9rO9sXRYEw372gjvazOHI5d/gPBU4SXSKVUQ/uwGxsamUo+nTIVH0z4EKPfG41JEyexJ4D5RwpYGiI4LDWZmxX58XA6LeO5/gPhmaa8APHqEA5QPN/bZ+L/Q+BYPhAh4FSvATZAvwIHYgBDfDE+lM5RICQJEAVCgZB7l2eg055ShFKEUoSoOqUIpQilCKUISVSgQCgQKh2JKhCP1WAtiToUCAVCpSmVmiRRgQKhQKh0JKpAPFaDtSTqUCAUCJWmVGqSRAUKhAKh0pGoAvFYDdaSqEOBUCBUmlKpSRIVKBAKhEpHogrEYzVYS6IOBUISEP8DbKextNv9/M8AAAAASUVORK5CYII=");

},
977915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
234215(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABDCAYAAAAoCNNNAAABlElEQVR4Ae2bwWqDQBRFNWiWBpp/bwIlf9BofySVZh3tJzTZJdD0ltQZ6MgjJOJCwxEeg4OL8XrfeU8ZI/1IhBQhQmMEhHAZgRAIEbIRR1x1xNmpJXeMpLKcvy8LD5/0rcXAdMT+a68if1OxLpS/5srXw48iL1RXn51bAVOIclNqmk41iSeKo3gUcVnrcrHs1xHle6k0SUchwP8HtXhe9OwIhGhAgyNcdUAIhAhrL47AETjCbqgon5TPoCMDlsASWAJLlwUIgRAhDnAEjsARQc/kP+6SGqQGqUFqeB5YI4yAETACRlhs8HMwAkbACBjheWCNMAJGwAgYYbHBz8EIGAEjYITngTXCCBgBI+5gxKZUkiR/O2+jKNLQw+++7X3n7fZjq/nTXFmWjSZm2Uyrl5Xk/yxwuW+B0ZozYXk6nlTvalW7qomqUjXkcOs87A+m7a0bb8+ZQrQvGsV5Ryf4e0OIa+XTqzSqEUe4fgAhEKJzhbBS/nFgeWff0BYDIR6uauCI8C2ybflbz0kNUiN0Eo5wjvgFg/y0NokxOxQAAAAASUVORK5CYII=");

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