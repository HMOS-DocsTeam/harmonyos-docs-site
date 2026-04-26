"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["841113"], {
782201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_offscreencanvasrenderingcontext_2_d_ts_offscreencanvasrenderingcontext_2_d_md_63b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-canvas-drawing-ts-offscreencanvasrenderingcontext-2-d-ts-offscreencanvasrenderingcontext-2-d-md-63b.json
var site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_offscreencanvasrenderingcontext_2_d_ts_offscreencanvasrenderingcontext_2_d_md_63b_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d","title":"OffscreenCanvasRenderingContext2D","description":"使用OffscreenCanvasRenderingContext2D在Canvas上进行离屏绘制，绘制对象可以是形状、文本、图片等。离屏绘制是指将需要绘制的内容先绘制在缓存区，然后将其转换成图片，一次性绘制到Canvas上。离屏绘制使用CPU进行绘制，绘制速度较慢，对绘制速度有要求的场景应避免使用离屏绘制。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d.md","sourceDirName":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d","slug":"/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"OffscreenCanvasRenderingContext2D","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-offscreencanvasrenderingcontext2d","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-offscreencanvasrenderingcontext2d"},"sidebar":"ref","previous":{"title":"OffscreenCanvas","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas"},"next":{"title":"Path2D","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d.md


const frontMatter = {
	title: 'OffscreenCanvasRenderingContext2D',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-offscreencanvasrenderingcontext2d',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-offscreencanvasrenderingcontext2d'
};
const contentTitle = 'OffscreenCanvasRenderingContext2D';

const assets = {

};



const toc = [{
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
  "value": "imageSmoothingQuality",
  "id": "imagesmoothingquality",
  "level": 3
}, {
  "value": "direction",
  "id": "direction",
  "level": 3
}, {
  "value": "filter",
  "id": "filter",
  "level": 3
}, {
  "value": "letterSpacing18+",
  "id": "letterspacing18",
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
  "value": "strokeRect",
  "id": "strokerect",
  "level": 3
}, {
  "value": "clearRect",
  "id": "clearrect",
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
  "value": "stroke",
  "id": "stroke-1",
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
  "value": "roundRect20+",
  "id": "roundrect20",
  "level": 3
}, {
  "value": "fill",
  "id": "fill",
  "level": 3
}, {
  "value": "fill",
  "id": "fill-1",
  "level": 3
}, {
  "value": "clip",
  "id": "clip",
  "level": 3
}, {
  "value": "clip",
  "id": "clip-1",
  "level": 3
}, {
  "value": "reset12+",
  "id": "reset12",
  "level": 3
}, {
  "value": "saveLayer12+",
  "id": "savelayer12",
  "level": 3
}, {
  "value": "restoreLayer12+",
  "id": "restorelayer12",
  "level": 3
}, {
  "value": "resetTransform",
  "id": "resettransform",
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
  "value": "setTransform",
  "id": "settransform-1",
  "level": 3
}, {
  "value": "getTransform",
  "id": "gettransform",
  "level": 3
}, {
  "value": "translate",
  "id": "translate",
  "level": 3
}, {
  "value": "drawImage",
  "id": "drawimage",
  "level": 3
}, {
  "value": "drawImage",
  "id": "drawimage-1",
  "level": 3
}, {
  "value": "drawImage",
  "id": "drawimage-2",
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
  "value": "getPixelMap",
  "id": "getpixelmap",
  "level": 3
}, {
  "value": "setPixelMap",
  "id": "setpixelmap",
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
  "value": "setLineDash",
  "id": "setlinedash",
  "level": 3
}, {
  "value": "getLineDash",
  "id": "getlinedash",
  "level": 3
}, {
  "value": "toDataURL",
  "id": "todataurl",
  "level": 3
}, {
  "value": "transferToImageBitmap",
  "id": "transfertoimagebitmap",
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
  "value": "createLinearGradient",
  "id": "createlineargradient",
  "level": 3
}, {
  "value": "createRadialGradient",
  "id": "createradialgradient",
  "level": 3
}, {
  "value": "createConicGradient10+",
  "id": "createconicgradient10",
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
    length: "length",
    li: "li",
    number: "number",
    ol: "ol",
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
        id: "offscreencanvasrenderingcontext2d",
        children: "OffscreenCanvasRenderingContext2D"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OffscreenCanvasRenderingContext2D在Canvas上进行离屏绘制，绘制对象可以是形状、文本、图片等。离屏绘制是指将需要绘制的内容先绘制在缓存区，然后将其转换成图片，一次性绘制到Canvas上。离屏绘制使用CPU进行绘制，绘制速度较慢，对绘制速度有要求的场景应避免使用离屏绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(821143)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从 API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OffscreenCanvasRenderingContext2D无法在ServiceExtensionAbility中使用，ServiceExtensionAbility中建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing/arkts-apis-graphics-drawing",
        children: "Drawing模块"
      }), "进行离屏绘制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#beginpath",
        children: "beginPath"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#moveto",
        children: "moveTo"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lineto",
        children: "lineTo"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#closepath",
        children: "closePath"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#beziercurveto",
        children: "bezierCurveTo"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#quadraticcurveto",
        children: "quadraticCurveTo"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#arc",
        children: "arc"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#arcto",
        children: "arcTo"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ellipse",
        children: "ellipse"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rect",
        children: "rect"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#roundrect20",
        children: "roundRect"
      }), "接口只能对OffscreenCanvasRenderingContext2D中的路径生效，无法对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d",
        children: "Path2D"
      }), "对象中设置的路径生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构造函数",
      children: "构造函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(width: number, height: number, settings?: RenderingContextSettings)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造离屏Canvas画布对象，支持配置画布宽高和OffscreenCanvasRenderingContext2D对象的参数。"
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
            children: "离屏画布的宽度，默认单位：vp  异常值NaN和Infinity按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离屏画布的高度，默认单位：vp  异常值NaN和Infinity按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "settings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#renderingcontextsettings",
              children: "RenderingContextSettings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置OffscreenCanvasRenderingContext2D对象的参数，见RenderingContextSettings接口描述。  异常值undefined按", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#renderingcontextsettings",
              children: "RenderingContextSettings"
            }), "的默认值处理。  默认值：null"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造离屏Canvas画布对象，支持配置画布宽高、OffscreenCanvasRenderingContext2D对象的参数和单位模式。"
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
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离屏画布的宽度，默认单位：vp  异常值NaN和Infinity按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离屏画布的高度，默认单位：vp  异常值NaN和Infinity按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "settings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#renderingcontextsettings",
              children: "RenderingContextSettings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置OffscreenCanvasRenderingContext2D对象的参数，见RenderingContextSettings接口描述。  异常值undefined按", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#renderingcontextsettings",
              children: "RenderingContextSettings"
            }), "的默认值处理。  默认值：null"]
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
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置OffscreenCanvasRenderingContext2D对象的单位模式，配置后无法动态更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。  异常值undefined、NaN和Infinity按默认值处理。  默认值：DEFAULT"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(696126)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillStyle、shadowColor与 strokeStyle 中string类型格式为 'rgb(255, 255, 255)'，'rgba(255, 255, 255, 1.0)'，'#FFFFFF'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillstyle",
      children: "fillStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定绘制的填充色，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient",
              children: "CanvasGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvaspattern/ts-components-canvas-canvaspattern",
              children: "CanvasPattern"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct FillStyleExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          // 使用string设置fillStyle属性\n          offContext.fillStyle = '#0000ff'\n          offContext.fillRect(20, 20, 150, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct FillStyleExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          // 使用number设置fillStyle属性\n          offContext.fillStyle = 0x0000FF\n          offContext.fillRect(20, 20, 150, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549866)/* ["default"] */.A) + "",
        width: "98",
        height: "95"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linewidth",
      children: "lineWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置绘制线条的宽度，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：1（px）  默认单位：vp  lineWidth取值不支持0和负数，0、负数和NaN按默认值处理，Infinity会导致和lineWidth属性相关的接口无法绘制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineWidthExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          // 设置lineWidth属性\n          offContext.lineWidth = 5\n          offContext.strokeRect(25, 25, 85, 105)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185531)/* ["default"] */.A) + "",
        width: "98",
        height: "103"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokestyle",
      children: "strokeStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置线条的颜色，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient",
              children: "CanvasGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvaspattern/ts-components-canvas-canvaspattern",
              children: "CanvasPattern"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct StrokeStyleExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.lineWidth = 10\n          // 使用string设置strokeStyle属性\n          offContext.strokeStyle = '#0000ff'\n          offContext.strokeRect(25, 25, 155, 105)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct StrokeStyleExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.lineWidth = 10\n          // 使用number设置strokeStyle属性\n          offContext.strokeStyle = 0x0000ff\n          offContext.strokeRect(25, 25, 155, 105)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(63398)/* ["default"] */.A) + "",
        width: "111",
        height: "71"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linecap",
      children: "lineCap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定线端点的样式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvaslinecap%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasLineCap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：'butt'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineCapExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.lineWidth = 8\n          offContext.beginPath()\n          // 设置lineCap属性\n          offContext.lineCap = 'round'\n          offContext.moveTo(30, 50)\n          offContext.lineTo(220, 50)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(580382)/* ["default"] */.A) + "",
        width: "263",
        height: "96"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linejoin",
      children: "lineJoin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定线段间相交的交点样式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvaslinejoin%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasLineJoin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：'miter'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineJoinExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.beginPath()\n          offContext.lineWidth = 8\n          // 设置lineJoin属性\n          offContext.lineJoin = 'miter'\n          offContext.moveTo(30, 30)\n          offContext.lineTo(120, 60)\n          offContext.lineTo(30, 110)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(110230)/* ["default"] */.A) + "",
        width: "124",
        height: "98"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "miterlimit",
      children: "miterLimit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置斜接面限制值，该值指定了线条相交处内角和外角的距离，仅当设置了lineJoin为miter才生效，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：10px  单位：px  miterLimit取值不支持0和负数，0、负数和NaN按默认值处理，Infinity会导致和miterLimit属性相关的接口无法绘制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct MiterLimit {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.lineWidth = 8\n          offContext.lineJoin = 'miter'\n          // 设置miterLimit属性\n          offContext.miterLimit = 3\n          offContext.moveTo(30, 30)\n          offContext.lineTo(60, 35)\n          offContext.lineTo(30, 37)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912864)/* ["default"] */.A) + "",
        width: "111",
        height: "81"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font",
      children: "font"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本绘制中的字体样式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "语法：ctx.font = 'font-style font-weight font-size font-family'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "font-style(可选)，用于指定字体样式，支持如下几种样式：'normal','italic'。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "font-weight(可选)，用于指定字体的粗细，支持如下几种类型：'normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "font-size(可选)，指定字号和行高，单位支持px、vp。使用时需要添加单位。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "font-family(可选)，指定字体系列，支持如下几种类型：'sans-serif', 'serif', 'monospace'。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持通过该接口设置注册过的自定义字体（只能在主线程使用，不支持在worker线程中使用；DevEco Studio的预览器不支持显示自定义字体）。自定义字体注册有以下两种方式。一种是通过ArkUI的异步接口this.uiContext.getFont().", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-font/arkts-apis-uicontext-font#registerfont",
        children: "registerFont"
      }), "注册，调用后立即绘制可能会导致自定义字体不生效。另一种是直接调用字体引擎的fontCollection.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#loadfontsync",
        children: "loadFontSync"
      }), "接口来注册自定义字体到字体引擎。在直接调用字体引擎接口注册自定义字体时，fontCollection的实例需要是text.FontCollection.getGlobalInstance()，因为组件默认会从该实例加载字体。如果使用其他实例，可能会导致自定义字体不生效。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：'normal normal 14px sans-serif'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { text } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct FontDemo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings);\n          // 常规字体样式，常规粗细，字体大小为30px，字体系列为sans-serif\n          offContext.font = 'normal normal 30px sans-serif'\n          offContext.fillText(\"Hello px\", 20, 60)\n          // 斜体样式，加粗，字体大小为30vp，字体系列为monospace\n          offContext.font = 'italic bold 30vp monospace'\n          offContext.fillText(\"Hello vp\", 20, 100)\n          // 加载rawfile目录下的自定义字体文件HarmonyOS_Sans_Thin_Italic.ttf\n          let fontCollection = text.FontCollection.getGlobalInstance();\n          fontCollection.loadFontSync('HarmonyOS_Sans_Thin_Italic', $rawfile(\"HarmonyOS_Sans_Thin_Italic.ttf\"))\n          // 加粗，字体大小为30vp，字体系列为HarmonyOS_Sans_Thin_Italic\n          offContext.font = \"bold 30vp HarmonyOS_Sans_Thin_Italic\"\n          offContext.fillText(\"Hello customFont\", 20, 140)\n          let image = this.offCanvas.transferToImageBitmap();\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(874195)/* ["default"] */.A) + "",
        width: "424",
        height: "256"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textalign",
      children: "textAlign"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本绘制中的文本对齐方式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvastextalign%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasTextAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ltr布局模式下'start'和'left'一致，rtl布局模式下'start'和'right'一致。  默认值：'left'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.strokeStyle = 'rgb(39,135,217)'\n          offContext.moveTo(140, 10)\n          offContext.lineTo(140, 160)\n          offContext.stroke()\n\n          offContext.font = '50px sans-serif'\n\n          // 设置textAlign属性为start\n          offContext.textAlign = 'start'\n          offContext.fillText('textAlign=start', 140, 60)\n          // 设置textAlign属性为end\n          offContext.textAlign = 'end'\n          offContext.fillText('textAlign=end', 140, 80)\n          // 设置textAlign属性为left\n          offContext.textAlign = 'left'\n          offContext.fillText('textAlign=left', 140, 100)\n          // 设置textAlign属性为center\n          offContext.textAlign = 'center'\n          offContext.fillText('textAlign=center', 140, 120)\n          // 设置textAlign属性为right\n          offContext.textAlign = 'right'\n          offContext.fillText('textAlign=right', 140, 140)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(927791)/* ["default"] */.A) + "",
        width: "511",
        height: "332"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textbaseline",
      children: "textBaseline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本绘制中的水平对齐方式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvastextbaseline%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasTextBaseline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：'alphabetic'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextBaseline {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.strokeStyle = '#0000ff'\n          offContext.moveTo(0, 120)\n          offContext.lineTo(400, 120)\n          offContext.stroke()\n\n          offContext.font = '20px sans-serif'\n\n          // 设置textBaseline属性为top\n          offContext.textBaseline = 'top'\n          offContext.fillText('Top', 10, 120)\n          // 设置textBaseline属性为bottom\n          offContext.textBaseline = 'bottom'\n          offContext.fillText('Bottom', 55, 120)\n          // 设置textBaseline属性为middle\n          offContext.textBaseline = 'middle'\n          offContext.fillText('Middle', 125, 120)\n          // 设置textBaseline属性为alphabetic\n          offContext.textBaseline = 'alphabetic'\n          offContext.fillText('Alphabetic', 195, 120)\n          // 设置textBaseline属性为hanging\n          offContext.textBaseline = 'hanging'\n          offContext.fillText('Hanging', 295, 120)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(237860)/* ["default"] */.A) + "",
        width: "660",
        height: "230"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalalpha",
      children: "globalAlpha"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置透明度，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "范围为[0.0, 1.0]，0.0为完全透明，1.0为完全不透明。若给定值小于0.0，则取值0.0；若给定值大于1.0，则取值1.0。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制。API version 18及以后，设置NaN或Infinity时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  默认值：1.0"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GlobalAlpha {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = 'rgb(0,0,255)'\n          offContext.fillRect(0, 0, 50, 50)\n          // 设置globalAlpha属性\n          offContext.globalAlpha = 0.4\n          offContext.fillStyle = 'rgb(0,0,255)'\n          offContext.fillRect(50, 50, 50, 50)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11561)/* ["default"] */.A) + "",
        width: "222",
        height: "213"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linedashoffset",
      children: "lineDashOffset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置画布的虚线偏移量，精度为float，仅当设置setLineDash时属性才生效，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：0.0  单位：vp  异常值NaN和Infinity按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineDashOffset {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.arc(100, 75, 50, 0, 6.28)\n          offContext.setLineDash([10, 20])\n          // 设置lineDashOffset属性\n          offContext.lineDashOffset = 10.0\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775154)/* ["default"] */.A) + "",
        width: "191",
        height: "250"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalcompositeoperation",
      children: "globalCompositeOperation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置合成操作的方式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型字段可选值有'source-over'，'source-atop'，'source-in'，'source-out'，'destination-over'，'destination-atop'，'destination-in'，'destination-out'，'lighter'，'copy'，'xor'。  默认值：'source-over'"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GlobalCompositeOperation {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context1: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private context2: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private context3: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private context4: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private context5: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private context6: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Column() {\n      Row() {\n        // 1. source-over：新图形覆盖在原有图形上方（默认行为）\n        Canvas(this.context1)\n          .width('45%')\n          .borderWidth(1)\n          .margin(5)\n          .onReady(() => {\n            let ctx1 = this.context1;\n            let offContext = new OffscreenCanvasRenderingContext2D(ctx1.width, ctx1.height, this.settings);\n            offContext.fillStyle = 'rgb(39,135,217)';\n            offContext.fillRect(25, 25, 75, 75); // 原有图形\n            offContext.globalCompositeOperation = 'source-over'; // 默认值，可省略\n            offContext.fillStyle = 'rgb(23,169,141)';\n            offContext.fillRect(75, 75, 75, 75); // 新图形覆盖\n            let image = offContext.transferToImageBitmap();\n            this.context1.transferFromImageBitmap(image);\n          })\n        // 2. destination-out：新图形擦除原有图形（橡皮擦核心逻辑）\n        Canvas(this.context2)\n          .width('45%')\n          .borderWidth(1)\n          .margin(5)\n          .onReady(() => {\n            let ctx2 = this.context2;\n            let offContext = new OffscreenCanvasRenderingContext2D(ctx2.width, ctx2.height, this.settings);\n            // 先绘制背景\n            offContext.fillStyle = 'rgb(39,135,217)';\n            offContext.fillRect(0, 0, ctx2.width, ctx2.height);\n            // 设置合成模式为擦除\n            offContext.globalCompositeOperation = 'destination-out';\n            // 绘制圆形作为橡皮擦\n            offContext.beginPath();\n            offContext.arc(ctx2.width / 2, ctx2.height / 2, 60, 0, Math.PI * 2);\n            offContext.fill(); // 擦除圆形区域的背景\n            let image = offContext.transferToImageBitmap();\n            this.context2.transferFromImageBitmap(image);\n          })\n      }\n      .height('30%')\n\n      Row() {\n        // 3. source-in：仅保留新图形与原有图形重叠的部分（裁剪或蒙版）\n        Canvas(this.context3)\n          .width('45%')\n          .borderWidth(1)\n          .margin(5)\n          .onReady(() => {\n            let ctx3 = this.context3;\n            let offContext = new OffscreenCanvasRenderingContext2D(ctx3.width, ctx3.height, this.settings);\n            // 先绘制原有图形（圆形蒙版）\n            offContext.beginPath();\n            offContext.arc(ctx3.width / 2, ctx3.height / 2, 80, 0, Math.PI * 2);\n            offContext.fillStyle = '#fff';\n            offContext.fill();\n            // 设置合成模式\n            offContext.globalCompositeOperation = 'source-in';\n            // 绘制新图形（渐变矩形）\n            const gradient = offContext.createLinearGradient(0, 0, ctx3.width, ctx3.height);\n            gradient.addColorStop(0, 'rgb(23,169,141)');\n            gradient.addColorStop(1, 'rgb(39,135,217)');\n            offContext.fillStyle = gradient;\n            offContext.fillRect(0, 0, 200, 200); // 仅圆形区域显示渐变\n            let image = offContext.transferToImageBitmap();\n            this.context3.transferFromImageBitmap(image);\n          })\n        // 4. lighter：新图形与原有图形叠加（亮度相加，滤色效果）\n        Canvas(this.context4)\n          .width('45%')\n          .borderWidth(1)\n          .margin(5)\n          .onReady(() => {\n            let ctx4 = this.context4;\n            let offContext = new OffscreenCanvasRenderingContext2D(ctx4.width, ctx4.height, this.settings);\n            // 原有图形（半透明红色圆）\n            offContext.beginPath();\n            offContext.arc(70, 100, 50, 0, Math.PI * 2);\n            offContext.fillStyle = 'rgba(234, 67, 53, 0.7)';\n            offContext.fill();\n            // 设置合成模式\n            offContext.globalCompositeOperation = 'lighter';\n            // 新图形（半透明蓝色圆）\n            offContext.beginPath();\n            offContext.arc(110, 100, 50, 0, Math.PI * 2);\n            offContext.fillStyle = 'rgba(66, 133, 244, 0.7)';\n            offContext.fill(); // 重叠区域变成紫色（亮度叠加）\n            let image = offContext.transferToImageBitmap();\n            this.context4.transferFromImageBitmap(image);\n          })\n      }\n      .height('30%')\n\n      Row() {\n        // 5. destination-atop：保留原有图形与新图形重叠的部分，移除其他区域\n        Canvas(this.context5)\n          .width('45%')\n          .borderWidth(1)\n          .margin(5)\n          .onReady(() => {\n            let ctx5 = this.context5;\n            let offContext = new OffscreenCanvasRenderingContext2D(ctx5.width, ctx5.height, this.settings);\n            // 原有图形（绿色矩形）\n            offContext.fillStyle = 'rgb(23,169,141)';\n            offContext.fillRect(0, 0, ctx5.width, ctx5.height);\n            // 设置合成模式\n            offContext.globalCompositeOperation = 'destination-atop';\n            // 新图形（小圆形）\n            offContext.beginPath();\n            offContext.arc(ctx5.width / 2, ctx5.height / 2, 60, 0, Math.PI * 2);\n            offContext.fillStyle = '#000';\n            offContext.fill(); // 仅矩形与圆形重叠的部分保留\n            let image = offContext.transferToImageBitmap();\n            this.context5.transferFromImageBitmap(image);\n          })\n        // 6. 文字蒙版（“source-in”的高级用法）\n        Canvas(this.context6)\n          .width('45%')\n          .borderWidth(1)\n          .margin(5)\n          .onReady(() => {\n            let ctx6 = this.context6;\n            let offContext = new OffscreenCanvasRenderingContext2D(ctx6.width, ctx6.height, this.settings);\n            // 先绘制文字（作为蒙版）\n            offContext.font = 'bold 40vp';\n            offContext.textAlign = 'center';\n            offContext.textBaseline = 'middle';\n            offContext.fillText('CANVAS', ctx6.width / 2, ctx6.height / 2);\n            // 设置合成模式\n            offContext.globalCompositeOperation = 'source-in';\n            // 绘制渐变背景（仅文字区域显示）\n            let textGradient = offContext.createLinearGradient(50, 0, 300, 100);\n            textGradient.addColorStop(0.0, 'rgb(39,135,217)');\n            textGradient.addColorStop(0.5, 'rgb(255,238,240)');\n            textGradient.addColorStop(1.0, 'rgb(23,169,141)');\n            offContext.fillStyle = textGradient;\n            offContext.fillRect(0, 0, 200, 200); // 渐变仅填充文字区域\n            let image = offContext.transferToImageBitmap();\n            this.context6.transferFromImageBitmap(image);\n          })\n      }\n      .height('30%')\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515927)/* ["default"] */.A) + "",
        width: "303",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowblur",
      children: "shadowBlur"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置绘制阴影时的模糊级别，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值越大越模糊，精度为float，取值范围≥0。  默认值：0.0  单位：px  shadowBlur取值不支持负数，负数、NaN和Infinity按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ShadowBlur {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          // 设置shadowBlur属性\n          offContext.shadowBlur = 30\n          offContext.shadowColor = 'rgb(0,0,0)'\n          offContext.fillStyle = 'rgb(39,135,217)'\n          offContext.fillRect(20, 20, 100, 80)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(86279)/* ["default"] */.A) + "",
        width: "242",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowcolor",
      children: "shadowColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置绘制阴影时的阴影颜色，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["颜色格式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), "中string类型说明。  默认值：透明黑色"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ShadowColor {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.shadowBlur = 30\n          // 设置shadowColor属性\n          offContext.shadowColor = 'rgb(255,192,0)'\n          offContext.fillStyle = 'rgb(39,135,217)'\n          offContext.fillRect(30, 30, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711970)/* ["default"] */.A) + "",
        width: "288",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowoffsetx",
      children: "shadowOffsetX"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置绘制阴影时和原有对象的水平偏移值，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：0.0  默认单位：vp  异常值NaN和Infinity按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ShadowOffsetX {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.shadowBlur = 10\n          // 设置shadowOffsetX属性\n          offContext.shadowOffsetX = 20\n          offContext.shadowColor = 'rgb(0,0,0)'\n          offContext.fillStyle = 'rgb(255,0,0)'\n          offContext.fillRect(20, 20, 100, 80)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(571100)/* ["default"] */.A) + "",
        width: "123",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowoffsety",
      children: "shadowOffsetY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置绘制阴影时和原有对象的垂直偏移值，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：0.0  默认单位：vp  异常值NaN和Infinity按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ShadowOffsetY {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.shadowBlur = 10\n          // 设置shadowOffsetY属性\n          offContext.shadowOffsetY = 20\n          offContext.shadowColor = 'rgb(0,0,0)'\n          offContext.fillStyle = 'rgb(255,0,0)'\n          offContext.fillRect(30, 30, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(342090)/* ["default"] */.A) + "",
        width: "120",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imagesmoothingenabled",
      children: "imageSmoothingEnabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置绘制图片时是否进行图像平滑度调整，true为启用，false为不启用，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397230)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ImageSmoothingEnabled {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // \"common/images/icon.jpg\"需要替换为开发者所需的图像资源文件\n  private img:ImageBitmap = new ImageBitmap(\"common/images/icon.jpg\");\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          // 设置imageSmoothingEnabled属性\n          offContext.imageSmoothingEnabled = false\n          offContext.drawImage(this.img, 0, 0, 400, 200)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(489513)/* ["default"] */.A) + "",
        width: "337",
        height: "274"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imagesmoothingquality",
      children: "imageSmoothingQuality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "imageSmoothingEnabled为true时，用于设置图像平滑度，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#imagesmoothingquality%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "ImageSmoothingQuality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：\"low\""
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(384358)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // xxx.ets\n  @Entry\n  @Component\n  struct ImageSmoothingQualityDemoOff {\n    private settings: RenderingContextSettings = new RenderingContextSettings(true);\n    private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.\nsettings);\n    private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n    // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n    private img:ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n\n    build() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center,\njustifyContent: FlexAlign.Center }) {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .backgroundColor('#ffff00')\n          .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            let offctx = offContext\n            offctx.imageSmoothingEnabled = true\n            // 设置imageSmoothingQuality属性\n            offctx.imageSmoothingQuality = 'high'\n            offctx.drawImage(this.img, 0, 0, 400, 200)\n\n            let image = this.offCanvas.transferToImageBitmap()\n            this.context.transferFromImageBitmap(image)\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(982933)/* ["default"] */.A) + "",
        width: "717",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "direction",
      children: "direction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置绘制文字时使用的文字方向，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvasdirection%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值：\"inherit\""
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // xxx.ets\n  @Entry\n  @Component\n  struct DirectionDemoOff {\n    private settings: RenderingContextSettings = new RenderingContextSettings(true);\n    private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.\nsettings);\n    private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n    build() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center,\njustifyContent: FlexAlign.Center }) {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .backgroundColor('#ffff00')\n          .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            let offctx = offContext\n            offctx.font = '48px serif';\n            offctx.textAlign = 'start'\n            offctx.fillText(\"Hi ltr!\", 200, 50);\n\n            // 设置direction属性\n            offctx.direction = \"rtl\";\n            offctx.fillText(\"Hi rtl!\", 200, 100);\n\n            let image = offctx.transferToImageBitmap()\n            this.context.transferFromImageBitmap(image)\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(671254)/* ["default"] */.A) + "",
        width: "719",
        height: "355"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filter",
      children: "filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置图像的滤镜，可以组合任意数量的滤镜，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持的滤镜效果如下：  - 'none': 无滤镜效果。  - 'blur(", (0,jsx_runtime.jsxs)(_components.length, {
              children: [")'：给图像设置高斯模糊，取值范围≥0，支持单位px、vp、rem，默认值：blur(0px)。  - 'brightness([", (0,jsx_runtime.jsx)(_components.number, {})]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180652)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // xxx.ets\n  @Entry\n  @Component\n  struct FilterDemoOff {\n    private settings: RenderingContextSettings = new RenderingContextSettings(true);\n    private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n    private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n    // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n    private img: ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n\n    build() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            let img = this.img\n\n            offContext.drawImage(img, 0, 0, 100, 100);\n\n            offContext.filter = 'grayscale(50%)';\n            offContext.drawImage(img, 100, 0, 100, 100);\n\n            offContext.filter = 'sepia(60%)';\n            offContext.drawImage(img, 200, 0, 100, 100);\n\n            offContext.filter = 'saturate(30%)';\n            offContext.drawImage(img, 0, 100, 100, 100);\n\n            offContext.filter = 'hue-rotate(90deg)';\n            offContext.drawImage(img, 100, 100, 100, 100);\n\n            offContext.filter = 'invert(100%)';\n            offContext.drawImage(img, 200, 100, 100, 100);\n\n            offContext.filter = 'opacity(25%)';\n            offContext.drawImage(img, 0, 200, 100, 100);\n\n            offContext.filter = 'brightness(0.4)';\n            offContext.drawImage(img, 100, 200, 100, 100);\n\n            offContext.filter = 'contrast(200%)';\n            offContext.drawImage(img, 200, 200, 100, 100);\n\n            offContext.filter = 'blur(5px)';\n            offContext.drawImage(img, 0, 300, 100, 100);\n\n            // Applying multiple filters\n            offContext.filter = 'opacity(50%) contrast(200%) grayscale(50%)';\n            offContext.drawImage(img, 100, 300, 100, 100);\n\n            let image = this.offCanvas.transferToImageBitmap()\n            this.context.transferFromImageBitmap(image)\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804954)/* ["default"] */.A) + "",
        width: "720",
        height: "650"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "letterspacing18",
      children: "letterSpacing18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于指定绘制文本时字母之间的间距，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // xxx.ets\n  import { LengthMetrics, LengthUnit } from '@kit.ArkUI';\n\n  @Entry\n  @Component\n  struct letterSpacingDemo {\n    private settings: RenderingContextSettings = new RenderingContextSettings(true);\n    private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n    private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n    build() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .backgroundColor('rgb(213,213,213)')\n          .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            offContext.font = '30vp'\n            // 使用string设置direction属性\n            offContext.letterSpacing = '10vp'\n            offContext.fillText('hello world', 30, 50)\n            // 使用LengthMetrics对象设置direction属性\n            offContext.letterSpacing = new LengthMetrics(10, LengthUnit.VP)\n            offContext.fillText('hello world', 30, 100)\n            let image = this.offCanvas.transferToImageBitmap()\n            this.context.transferFromImageBitmap(image)\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(716450)/* ["default"] */.A) + "",
        width: "468",
        height: "178"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillrect",
      children: "fillRect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillRect(x: number, y: number, w: number, h: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "填充一个矩形。"
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
            children: "指定矩形左上角点的x坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形左上角点的y坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct FillRect {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillRect(30, 30, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n       })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959661)/* ["default"] */.A) + "",
        width: "194",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokerect",
      children: "strokeRect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeRect(x: number, y: number, w: number, h: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制具有边框的矩形，矩形内部不填充。"
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
            children: "指定矩形的左上角x坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct StrokeRect {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.strokeRect(30, 30, 200, 150)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296380)/* ["default"] */.A) + "",
        width: "160",
        height: "226"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clearrect",
      children: "clearRect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearRect(x: number, y: number, w: number, h: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定区域内的绘制内容。"
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
            children: "指定矩形上的左上角x坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形上的左上角y坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct ClearRect {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = 'rgb(0,0,255)'\n          offContext.fillRect(20, 20, 200, 200)\n          offContext.clearRect(30, 30, 150, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(796756)/* ["default"] */.A) + "",
        width: "160",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filltext",
      children: "fillText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillText(text: string, x: number, y: number, maxWidth?: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制填充类文本。"
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本内容。  异常值undefined或null按无效值处理，不进行绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本绘制起点的x轴坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本绘制起点的y轴坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定文本允许的最大宽度。  异常值null按无效值处理，不进行绘制，undefined、NaN或Infinity按默认值处理。  默认单位：vp  默认值：不限制宽度。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct FillText {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.font = '30px sans-serif'\n          offContext.fillText(\"Hello World!\", 20, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(783456)/* ["default"] */.A) + "",
        width: "190",
        height: "225"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stroketext",
      children: "strokeText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeText(text: string, x: number, y: number, maxWidth?: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制描边类文本。"
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本内容。  异常值undefined或null按无效值处理，不进行绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本绘制起点的x轴坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本绘制起点的y轴坐标。  异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本的最大宽度。  异常值null按无效值处理，不进行绘制，undefined、NaN或Infinity按默认值处理。  默认单位：vp  默认值：不限制宽度。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct StrokeText {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.font = '55px sans-serif'\n          offContext.strokeText(\"Hello World!\", 20, 60)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61668)/* ["default"] */.A) + "",
        width: "172",
        height: "91"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#textmetrics",
              children: "TextMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本的尺寸信息。  传入异常值undefined或null时按\"undefined\"或\"null\"计算。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct MeasureText {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.font = '50px sans-serif'\n          offContext.fillText(\"Hello World!\", 20, 100)\n          offContext.fillText(\"width:\" + offContext.measureText(\"Hello World!\").width, 20, 200)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455068)/* ["default"] */.A) + "",
        width: "334",
        height: "117"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stroke",
      children: "stroke"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stroke(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据当前的路径，进行边框绘制操作。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Stroke {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.moveTo(125, 25)\n          offContext.lineTo(125, 105)\n          offContext.lineTo(175, 105)\n          offContext.lineTo(175, 25)\n          offContext.strokeStyle = 'rgb(255,0,0)'\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223432)/* ["default"] */.A) + "",
        width: "402",
        height: "243"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stroke-1",
      children: "stroke"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stroke(path: Path2D): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的路径，进行边框绘制操作。"
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d",
              children: "Path2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的Path2D。  异常值undefined或null按无效值处理，不进行绘制。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Stroke {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  private path2Da: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          this.path2Da.moveTo(25, 25)\n          this.path2Da.lineTo(25, 105)\n          this.path2Da.lineTo(75, 105)\n          this.path2Da.lineTo(75, 25)\n          offContext.strokeStyle = 'rgb(0,0,255)'\n          offContext.stroke(this.path2Da)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(274273)/* ["default"] */.A) + "",
        width: "353",
        height: "234"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct BeginPath {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.beginPath()\n          offContext.lineWidth = 6\n          offContext.strokeStyle = '#0000ff'\n          offContext.moveTo(15, 80)\n          offContext.lineTo(280, 160)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802337)/* ["default"] */.A) + "",
        width: "335",
        height: "183"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的x坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的y坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(843647)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 18之前，若未执行moveTo接口或moveTo接口传入无效参数，路径以(0,0)为起点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 18及以后，若未执行moveTo接口或moveTo接口传入无效参数，路径以初次调用的lineTo、arcTo、bezierCurveTo或quadraticCurveTo接口中的起始点为起点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct MoveTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.beginPath()\n          offContext.moveTo(10, 10)\n          offContext.lineTo(280, 160)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(604952)/* ["default"] */.A) + "",
        width: "148",
        height: "94"
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的x坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的y坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.beginPath()\n          offContext.moveTo(10, 10)\n          offContext.lineTo(280, 160)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(335126)/* ["default"] */.A) + "",
        width: "148",
        height: "94"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ClosePath {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            offContext.beginPath()\n            offContext.moveTo(30, 30)\n            offContext.lineTo(110, 30)\n            offContext.lineTo(70, 90)\n            offContext.closePath()\n            offContext.stroke()\n            let image = this.offCanvas.transferToImageBitmap()\n            this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(680426)/* ["default"] */.A) + "",
        width: "82",
        height: "77"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createpattern",
      children: "createPattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定图像和重复方式创建图片填充的模板。"
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
            children: "image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap",
              children: "ImageBitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图源对象，具体参考ImageBitmap对象。  异常值undefined或null按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvaspattern/ts-components-canvas-canvaspattern",
              children: "CanvasPattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(861821)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CreatePattern {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n  private img:ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let pattern = offContext.createPattern(this.img, 'repeat')\n          offContext.fillStyle = pattern as CanvasPattern\n          offContext.fillRect(0, 0, 200, 200)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(834048)/* ["default"] */.A) + "",
        width: "218",
        height: "211"
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
            children: "第一个贝塞尔参数的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp1y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个贝塞尔参数的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个贝塞尔参数的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp2y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个贝塞尔参数的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\nimport { Point } from '@kit.TestKit';\n\n@Entry\n@Component\nstruct BezierCurveTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  private start: Point = { x: 50, y: 50 };\n  private end: Point = { x: 250, y: 100 };\n  private cp1: Point = { x: 200, y: 30 };\n  private cp2: Point = { x: 130, y: 80 };\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          // 三次贝塞尔曲线\n          offContext.beginPath();\n          offContext.moveTo(this.start.x, this.start.y);\n          offContext.bezierCurveTo(this.cp1.x, this.cp1.y, this.cp2.x, this.cp2.y, this.end.x, this.end.y);\n          offContext.stroke();\n\n          // 起点和终点\n          offContext.fillStyle = 'rgb(39,135,217)';\n          offContext.beginPath();\n          offContext.arc(this.start.x, this.start.y, 5, 0, 2 * Math.PI); // 起点\n          offContext.arc(this.end.x, this.end.y, 5, 0, 2 * Math.PI); // 终点\n          offContext.fill();\n\n          // 控制点\n          offContext.fillStyle = 'rgb(23,169,141)';\n          offContext.beginPath();\n          offContext.arc(this.cp1.x, this.cp1.y, 5, 0, 2 * Math.PI); // 控制点一\n          offContext.arc(this.cp2.x, this.cp2.y, 5, 0, 2 * Math.PI); // 控制点二\n          offContext.fill();\n          let image = this.offCanvas.transferToImageBitmap();\n          this.context.transferFromImageBitmap(image);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(792865)/* ["default"] */.A) + "",
        width: "305",
        height: "122"
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
            children: "贝塞尔参数的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "贝塞尔参数的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径结束时的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\nimport { Point } from '@kit.TestKit';\n\n@Entry\n@Component\nstruct QuadraticCurveTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  private start: Point = { x: 50, y: 20 };\n  private end: Point = { x: 50, y: 100 };\n  private cp: Point = { x: 230, y: 30 };\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings);\n          // 二次贝塞尔曲线\n          offContext.beginPath();\n          offContext.moveTo(this.start.x, this.start.y);\n          offContext.quadraticCurveTo(this.cp.x, this.cp.y, this.end.x, this.end.y);\n          offContext.stroke();\n\n          // 起始点和结束点\n          offContext.fillStyle = 'rgb(39,135,217)';\n          offContext.beginPath();\n          offContext.arc(this.start.x, this.start.y, 5, 0, 2 * Math.PI); // 起始点\n          offContext.arc(this.end.x, this.end.y, 5, 0, 2 * Math.PI); // 结束点\n          offContext.fill();\n\n          // 控制点\n          offContext.fillStyle = 'rgb(23,169,141)';\n          offContext.beginPath();\n          offContext.arc(this.cp.x, this.cp.y, 5, 0, 2 * Math.PI);\n          offContext.fill();\n\n          let image = this.offCanvas.transferToImageBitmap();\n          this.context.transferFromImageBitmap(image);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(603456)/* ["default"] */.A) + "",
        width: "313",
        height: "138"
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
            children: "弧线圆心的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线圆心的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的圆半径。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的起始弧度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：弧度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的终止弧度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：弧度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "counterclockwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否逆时针绘制圆弧。  true：逆时针绘制圆弧；false：顺时针绘制圆弧。  默认值：false，设置null或undefined按默认值处理。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Arc {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.beginPath()\n          offContext.arc(100, 75, 50, 0, 6.28)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470567)/* ["default"] */.A) + "",
        width: "360",
        height: "173"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arcto",
      children: "arcTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依据给定的控制点和圆弧半径创建圆弧路径。"
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
            children: "第一个控制点的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个控制点的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个控制点的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个控制点的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧的圆半径值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct ArcTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n\n          // 切线\n          offContext.beginPath()\n          offContext.strokeStyle = '#808080'\n          offContext.lineWidth = 1.5;\n          offContext.moveTo(360, 20);\n          offContext.lineTo(360, 170);\n          offContext.lineTo(110, 170);\n          offContext.stroke();\n\n          // 圆弧\n          offContext.beginPath()\n          offContext.strokeStyle = '#000000'\n          offContext.lineWidth = 3;\n          offContext.moveTo(360, 20)\n          offContext.arcTo(360, 170, 110, 170, 150)\n          offContext.stroke()\n\n          // 起始点\n          offContext.beginPath();\n          offContext.fillStyle = '#00ff00';\n          offContext.arc(360, 20, 4, 0, 2 * Math.PI);\n          offContext.fill();\n\n          // 控制点\n          offContext.beginPath();\n          offContext.fillStyle = '#ff0000';\n          offContext.arc(360, 170, 4, 0, 2 * Math.PI);\n          offContext.arc(110, 170, 4, 0, 2 * Math.PI);\n          offContext.fill();\n\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924719)/* ["default"] */.A) + "",
        width: "360",
        height: "141"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此示例中，arcTo()创建的圆弧为黑色，圆弧的两条切线为灰色。控制点为红色，起始点为绿色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以想象两条切线：一条切线从起始点到第一个控制点，另一条切线从第一个控制点到第二个控制点。arcTo()在这两条切线间创建一个圆弧，并使圆弧与这两条切线都相切。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ellipse",
      children: "ellipse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在规定的矩形区域绘制一个椭圆。"
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
            children: "椭圆圆心的x轴坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆圆心的y轴坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radiusX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆x轴的半径长度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radiusY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆y轴的半径长度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆的旋转角度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位为弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的起始点角度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位为弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的结束点角度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位为弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "counterclockwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否以逆时针方向绘制椭圆。  true：逆时针方向绘制椭圆。  false：顺时针方向绘制椭圆。  默认值：false，设置null或undefined按默认值处理。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.beginPath()\n          offContext.ellipse(200, 200, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI * 2, false)\n          offContext.stroke()\n          offContext.beginPath()\n          offContext.ellipse(200, 300, 50, 100, Math.PI * 0.25, Math.PI * 0.5, Math.PI * 2, true)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(44074)/* ["default"] */.A) + "",
        width: "360",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rect",
      children: "rect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rect(x: number, y: number, w: number, h: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建矩形路径。"
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
            children: "指定矩形的左上角x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.rect(20, 20, 100, 100) // Create a 100*100 rectangle at (20, 20)\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(106063)/* ["default"] */.A) + "",
        width: "360",
        height: "166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "roundrect20",
      children: "roundRect20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "roundRect(x: number, y: number, w: number, h: number, radii?: number | Array<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建圆角矩形路径，此方法不会直接渲染内容，如需将圆角矩形绘制到画布上，可以使用fill或stroke方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角x坐标值。  null按0处理，undefined按无效值处理，不进行绘制。  如需绘制完整矩形，取值范围：[0, Canvas宽度)。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标值。  null按0处理，undefined按无效值处理，不进行绘制。  如需绘制完整矩形，取值范围：[0, Canvas高度)。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度，设置负值为向左绘制。  null按0处理，undefined按无效值处理，不进行绘制。  如需绘制完整矩形，取值范围：[-x, Canvas宽度 - x]。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度，设置负值为向上绘制。  null按0处理，undefined按无效值处理，不进行绘制。  如需绘制完整矩形，取值范围：[-y, Canvas高度 - y]。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-canvas/errorcode-canvas",
        children: "Canvas组件错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可能原因"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "103701"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. The param radii is a list that has zero or more than four elements; 2. The param radii contains negative value."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了绘制六个圆角矩形："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个(10vp, 10vp)为起点，宽高为100vp，四个矩形角圆弧半径为10vp的圆角矩形并填充；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个(120vp, 10vp)为起点，宽高为100vp，四个矩形角圆弧半径为10vp的圆角矩形并填充；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个(10vp, 120vp)为起点，宽高为100vp，左上矩形角圆弧半径及右下矩形角圆弧半径为10vp，右上矩形角圆弧半径及左下矩形角圆弧半径为20vp的圆角矩形并描边；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个(120vp, 120vp)为起点，宽高为100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径及左下矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp的圆角矩形并描边；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个(10vp, 230vp)为起点，宽高为100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp，左下矩形角圆弧半径为40vp的圆角矩形并描边；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个(220vp, 330vp)为起点，宽高为-100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp，左下矩形角圆弧半径为40vp的圆角矩形并描边。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          try {\n            offContext.fillStyle = '#707070'\n            offContext.beginPath()\n            // 创建一个(10vp, 10vp)为起点，宽高为100vp，四个矩形角圆弧半径为10vp的圆角矩形\n            offContext.roundRect(10, 10, 100, 100, 10)\n            // 创建一个(120vp, 10vp)为起点，宽高为100vp，四个矩形角圆弧半径为10vp的圆角矩形\n            offContext.roundRect(120, 10, 100, 100, [10])\n            offContext.fill()\n            offContext.beginPath()\n            // 创建一个(10vp, 120vp)为起点，宽高为100vp，左上矩形角圆弧半径及右下矩形角圆弧半径为10vp，右上矩形角圆弧半径及左下矩形角圆弧半径为20vp的圆角矩形\n            offContext.roundRect(10, 120, 100, 100, [10, 20])\n            // 创建一个(120vp, 120vp)为起点，宽高为100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径及左下矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp的圆角矩形\n            offContext.roundRect(120, 120, 100, 100, [10, 20, 30])\n            // 创建一个(10vp, 230vp)为起点，宽高为100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp，左下矩形角圆弧半径为40vp的圆角矩形\n            offContext.roundRect(10, 230, 100, 100, [10, 20, 30, 40])\n            // 创建一个(220vp, 330vp)为起点，宽高为-100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp，左下矩形角圆弧半径为40vp的圆角矩形\n            offContext.roundRect(220, 330, -100, -100, [10, 20, 30, 40])\n            offContext.stroke()\n          } catch (error) {\n            let e: BusinessError = error as BusinessError;\n            console.error(`Failed to create roundRect. Code: ${e.code}, message: ${e.message}`);\n          }\n          // 在离屏画布最近渲染的图像上创建一个ImageBitmap对象\n          let image = this.offCanvas.transferToImageBitmap()\n          // 将创建的ImageBitmap对象显示在Canvas画布上\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100245)/* ["default"] */.A) + "",
        width: "364",
        height: "364"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill",
      children: "fill"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fill(fillRule?: CanvasFillRule): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对当前路径进行填充。"
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
          children: "参数:"
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
            children: "fillRule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvasfillrule%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasFillRule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要填充对象的规则。  可选参数为：\"nonzero\"，\"evenodd\"。  异常值undefined或null按默认值处理。  默认值：\"nonzero\""
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Fill {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = '#000000'\n          offContext.rect(20, 20, 100, 100) // Create a 100*100 rectangle at (20, 20)\n          offContext.fill()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(164010)/* ["default"] */.A) + "",
        width: "78",
        height: "58"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill-1",
      children: "fill"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fill(path: Path2D, fillRule?: CanvasFillRule): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对指定路径进行填充。"
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
          children: "参数:"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d",
              children: "Path2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path2D填充路径。  异常值undefined或null按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fillRule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvasfillrule%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasFillRule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要填充对象的规则。  可选参数为：\"nonzero\"，\"evenodd\"。  异常值undefined或null按默认值处理。  默认值：\"nonzero\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Fill {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let region = new Path2D()\n          region.moveTo(30, 90)\n          region.lineTo(110, 20)\n          region.lineTo(240, 130)\n          region.lineTo(60, 130)\n          region.lineTo(190, 20)\n          region.lineTo(270, 90)\n          region.closePath()\n          // Fill path\n          offContext.fillStyle = '#00ff00'\n          offContext.fill(region, \"evenodd\")\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(175428)/* ["default"] */.A) + "",
        width: "206",
        height: "122"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clip",
      children: "clip"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clip(fillRule?: CanvasFillRule): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前路径为剪切路径。"
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
          children: "参数:"
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
            children: "fillRule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvasfillrule%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasFillRule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要剪切对象的规则。  可选参数为：\"nonzero\"，\"evenodd\"。  异常值undefined或null按默认值处理。  默认值：\"nonzero\""
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Clip {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.rect(0, 0, 100, 200)\n          offContext.stroke()\n          offContext.clip()\n          offContext.fillStyle = \"rgb(255,0,0)\"\n          offContext.fillRect(0, 0, 200, 200)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(28103)/* ["default"] */.A) + "",
        width: "200",
        height: "240"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clip-1",
      children: "clip"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clip(path: Path2D, fillRule?: CanvasFillRule): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置指定路径为剪切路径。"
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
          children: "参数:"
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
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d",
              children: "Path2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path2D剪切路径。  异常值undefined或null按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fillRule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#canvasfillrule%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "CanvasFillRule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要剪切对象的规则。  可选参数为：\"nonzero\"，\"evenodd\"。  异常值undefined或null按默认值处理。  默认值：\"nonzero\""
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Clip {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let region = new Path2D()\n          region.moveTo(30, 90)\n          region.lineTo(110, 20)\n          region.lineTo(240, 130)\n          region.lineTo(60, 130)\n          region.lineTo(190, 20)\n          region.lineTo(270, 90)\n          region.closePath()\n          offContext.clip(region,\"evenodd\")\n          offContext.fillStyle = \"rgb(0,255,0)\"\n          offContext.fillRect(0, 0, 600, 600)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973785)/* ["default"] */.A) + "",
        width: "206",
        height: "122"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reset12",
      children: "reset12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reset(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OffscreenCanvasRenderingContext2D重置为其默认状态，清除后台缓冲区、绘制状态栈、绘制路径和样式。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Reset {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = '#0000ff'\n          offContext.fillRect(20, 20, 150, 100)\n          offContext.reset()\n          offContext.fillRect(20, 150, 150, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311709)/* ["default"] */.A) + "",
        width: "128",
        height: "165"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "savelayer12",
      children: "saveLayer12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "saveLayer(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个图层。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct saveLayer {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = \"#0000ff\"\n          offContext.fillRect(50, 100, 300, 100)\n          offContext.fillStyle = \"#00ffff\"\n          offContext.fillRect(50, 150, 300, 100)\n          offContext.globalCompositeOperation = 'destination-over'\n          offContext.saveLayer()\n          offContext.globalCompositeOperation = 'source-over'\n          offContext.fillStyle = \"#ff0000\"\n          offContext.fillRect(100, 50, 100, 300)\n          offContext.fillStyle = \"#00ff00\"\n          offContext.fillRect(150, 50, 100, 300)\n          offContext.restoreLayer()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(418237)/* ["default"] */.A) + "",
        width: "154",
        height: "240"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restorelayer12",
      children: "restoreLayer12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "restoreLayer(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复图像变换和裁剪状态至saveLayer前的状态，并将图层绘制在canvas上。restoreLayer示例同saveLayer。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resettransform",
      children: "resetTransform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resetTransform(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用单位矩阵重新设置当前矩阵。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ResetTransform {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.setTransform(1,0.5, -0.5, 1, 10, 10)\n          offContext.fillStyle = 'rgb(0,0,255)'\n          offContext.fillRect(0, 0, 100, 100)\n          offContext.resetTransform()\n          offContext.fillStyle = 'rgb(255,0,0)'\n          offContext.fillRect(0, 0, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60051)/* ["default"] */.A) + "",
        width: "170",
        height: "164"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rotate",
      children: "rotate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rotate(angle: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对当前坐标轴进行顺时针旋转。"
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
            children: "angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置顺时针旋转的弧度值，可以通过 degree * Math.PI / 180 将角度转换为弧度值。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  单位：弧度"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Rotate {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.rotate(45 * Math.PI / 180)\n          offContext.fillRect(70, 20, 50, 50)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(626057)/* ["default"] */.A) + "",
        width: "95",
        height: "105"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置水平方向的缩放值。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置垂直方向的缩放值。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Scale {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.lineWidth = 3\n          offContext.strokeRect(30, 30, 50, 50)\n          offContext.scale(2, 2) // Scale to 200%\n          offContext.strokeRect(30, 30, 50, 50)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(279153)/* ["default"] */.A) + "",
        width: "220",
        height: "198"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transform",
      children: "transform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transform(a: number, b: number, c: number, d: number, e: number, f: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transform方法对应一个变换矩阵，想对一个图形进行变化的时候，只要设置此变换矩阵相应的参数，对图形的各个定点的坐标分别乘以这个矩阵，就能得到新的定点的坐标。矩阵变换效果可叠加。"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805504)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图形中各个点变换后的坐标可通过下方坐标计算公式计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "变换后的坐标计算方式（x和y为变换前坐标，x'和y'为变换后坐标）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x' = a * x + c * y + e"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "y' = b * x + d * y + f"
      }), "\n"]
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
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scaleX：指定水平缩放值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skewY：指定垂直倾斜值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skewX：指定水平倾斜值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scaleY：指定垂直缩放值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "translateX：指定水平移动值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "translateY：指定垂直移动值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Transform {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = 'rgb(112,112,112)'\n          offContext.fillRect(0, 0, 100, 100)\n          offContext.transform(1, 0.5, -0.5, 1, 10, 10)\n          offContext.fillStyle = 'rgb(0,74,175)'\n          offContext.fillRect(0, 0, 100, 100)\n          offContext.transform(1, 0.5, -0.5, 1, 10, 10)\n          offContext.fillStyle = 'rgb(39,135,217)'\n          offContext.fillRect(0, 0, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(917135)/* ["default"] */.A) + "",
        width: "252",
        height: "252"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settransform",
      children: "setTransform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTransform方法使用的参数和transform()方法相同，但setTransform()方法会重置现有的变换矩阵并创建新的变换矩阵。"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(263805)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图形中各个点变换后的坐标可通过下方坐标计算公式计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "变换后的坐标计算方式（x和y为变换前坐标，x'和y'为变换后坐标）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x' = a * x + c * y + e"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "y' = b * x + d * y + f"
      }), "\n"]
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
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scaleX：指定水平缩放值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skewY：指定垂直倾斜值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skewX：指定水平倾斜值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scaleY：指定垂直缩放值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "translateX：指定水平移动值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "translateY：指定垂直移动值，支持设置负数。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct SetTransform {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillStyle = 'rgb(255,0,0)'\n          offContext.fillRect(0, 0, 100, 100)\n          offContext.setTransform(1,0.5, -0.5, 1, 10, 10)\n          offContext.fillStyle = 'rgb(0,0,255)'\n          offContext.fillRect(0, 0, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(689970)/* ["default"] */.A) + "",
        width: "113",
        height: "96"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settransform-1",
      children: "setTransform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTransform(transform?: Matrix2D): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以Matrix2D对象为模板重置现有的变换矩阵并创建新的变换矩阵。"
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
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-matrix2d/ts-components-canvas-matrix2d",
              children: "Matrix2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变换矩阵。  异常值undefined或null按无效值处理。  默认值：null"
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
        children: "// xxx.ets\n @Entry\n @Component\n struct TransFormDemo {\n   private settings: RenderingContextSettings = new RenderingContextSettings(true);\n   private context1: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n   private offcontext1: OffscreenCanvasRenderingContext2D = new OffscreenCanvasRenderingContext2D(600, 200, this.settings);\n   private context2: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n   private offcontext2: OffscreenCanvasRenderingContext2D = new OffscreenCanvasRenderingContext2D(600, 200, this.settings);\n\n   build() {\n     Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n       Text('context1');\n       Canvas(this.context1)\n         .width('230vp')\n         .height('160vp')\n         .backgroundColor('#ffff00')\n         .onReady(() => {\n           this.offcontext1.fillRect(100, 20, 50, 50);\n           this.offcontext1.setTransform(1, 0.5, -0.5, 1, 10, 10);\n           this.offcontext1.fillRect(100, 20, 50, 50);\n           let image = this.offcontext1.transferToImageBitmap();\n           this.context1.transferFromImageBitmap(image);\n         })\n       Text('context2');\n       Canvas(this.context2)\n         .width('230vp')\n         .height('160vp')\n         .backgroundColor('#0ffff0')\n         .onReady(() => {\n           this.offcontext2.fillRect(100, 20, 50, 50);\n           let storedTransform = this.offcontext1.getTransform();\n           this.offcontext2.setTransform(storedTransform);\n           this.offcontext2.fillRect(100, 20, 50, 50);\n           let image = this.offcontext2.transferToImageBitmap();\n           this.context2.transferFromImageBitmap(image);\n         })\n     }\n     .width('100%')\n     .height('100%')\n   }\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(568717)/* ["default"] */.A) + "",
        width: "288",
        height: "289"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gettransform",
      children: "getTransform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getTransform(): Matrix2D"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前被应用到上下文的转换矩阵。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-matrix2d/ts-components-canvas-matrix2d",
              children: "Matrix2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前被应用到上下文的转换矩阵。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct TransFormDemo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context1: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offcontext1: OffscreenCanvasRenderingContext2D =\n    new OffscreenCanvasRenderingContext2D(600, 100, this.settings);\n  private context2: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offcontext2: OffscreenCanvasRenderingContext2D =\n    new OffscreenCanvasRenderingContext2D(600, 100, this.settings);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Text('context1');\n      Canvas(this.context1)\n        .width('230vp')\n        .height('120vp')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.offcontext1.fillRect(50, 50, 50, 50);\n          this.offcontext1.setTransform(1.2, Math.PI / 8, Math.PI / 6, 0.5, 30, -25);\n          this.offcontext1.fillRect(50, 50, 50, 50);\n          let image = this.offcontext1.transferToImageBitmap();\n          this.context1.transferFromImageBitmap(image);\n        })\n      Text('context2');\n      Canvas(this.context2)\n        .width('230vp')\n        .height('120vp')\n        .backgroundColor('#0ffff0')\n        .onReady(() => {\n          this.offcontext2.fillRect(50, 50, 50, 50);\n          let storedTransform = this.offcontext1.getTransform();\n          console.info(`Matrix [scaleX = ${storedTransform.scaleX}, scaleY = ${storedTransform.scaleY}, rotateX = ${storedTransform.rotateX}, rotateY = ${storedTransform.rotateY}, translateX = ${storedTransform.translateX}, translateY = ${storedTransform.translateY}]`)\n          this.offcontext2.setTransform(storedTransform);\n          this.offcontext2.fillRect(50, 50, 50, 50);\n          let image = this.offcontext2.transferToImageBitmap();\n          this.context2.transferFromImageBitmap(image);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543334)/* ["default"] */.A) + "",
        width: "548",
        height: "512"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置水平平移量。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置垂直平移量。  API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Translate {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillRect(10, 10, 50, 50)\n          offContext.translate(70, 70)\n          offContext.fillRect(10, 10, 50, 50)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(987585)/* ["default"] */.A) + "",
        width: "116",
        height: "115"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawimage",
      children: "drawImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行图像绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用，卡片中不支持PixelMap对象。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap",
              children: "ImageBitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在x轴的位置。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在y轴的位置。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(968991)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct DrawImage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n  private img: ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.drawImage(this.img, 0, 0)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(624063)/* ["default"] */.A) + "",
        width: "360",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawimage-1",
      children: "drawImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number, dw: number, dh: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将图像拉伸或压缩绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用，卡片中不支持PixelMap对象。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap",
              children: "ImageBitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在x轴的位置。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在y轴的位置。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域的宽度。  负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域的高度。  负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206684)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct DrawImage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n  private img: ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.drawImage(this.img, 0, 0, 300, 300)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(514398)/* ["default"] */.A) + "",
        width: "360",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "drawimage-2",
      children: "drawImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawImage(image: ImageBitmap | PixelMap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将图像裁剪后拉伸或压缩绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用，卡片中不支持PixelMap对象。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap",
              children: "ImageBitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
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
            children: "裁切源图像时距离源图像左上角的x坐标值。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  image类型为ImageBitmap时，默认单位：vp  image类型为PixelMap时，API version 18前，默认单位：px；API version 18及以后，默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁切源图像时距离源图像左上角的y坐标值。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  image类型为ImageBitmap时，默认单位：vp  image类型为PixelMap时，API version 18前，默认单位：px；API version 18及以后，默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁切源图像时需要裁切的宽度。  负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  image类型为ImageBitmap时，默认单位：vp  image类型为PixelMap时，API version 18前，默认单位：px；API version 18及以后，默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁切源图像时需要裁切的高度。  负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  image类型为ImageBitmap时，默认单位：vp  image类型为PixelMap时，API version 18前，默认单位：px；API version 18及以后，默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在x轴的位置。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域左上角在y轴的位置。  异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域的宽度。  负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制区域的高度。  负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。  默认单位：vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(213211)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct DrawImage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n  private img: ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.drawImage(this.img, 0, 0, 500, 500, 0, 0, 400, 300)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395807)/* ["default"] */.A) + "",
        width: "360",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createimagedata",
      children: "createImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createImageData(sw: number, sh: number): ImageData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据当前ImageData对象重新创建一个宽、高相同的ImageData对象，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
        children: "ImageData"
      }), "，该接口存在内存拷贝行为，高耗时，应避免频繁使用。createImageData示例同putImageData。"]
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
            children: "sw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageData的宽度。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageData的高度。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的ImageData对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createimagedata-1",
      children: "createImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createImageData(imageData: ImageData): ImageData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据已创建的ImageData对象创建新的ImageData对象（不会复制图像数据），请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
        children: "ImageData"
      }), "，该接口存在内存拷贝行为，高耗时，应避免频繁使用。createImageData示例同putImageData。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被复制的ImageData对象。  异常值undefined和null按width和height为0的ImageData处理。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的ImageData对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpixelmap",
      children: "getPixelMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以当前canvas指定区域内的像素创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "对象，该接口存在内存拷贝行为，高耗时，应避免频繁使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
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
            children: "需要输出的区域的左上角x坐标。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的左上角y坐标。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的宽度。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的高度。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
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
            children: "新的PixelMap对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(456277)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio的预览器不支持显示使用setPixelMap绘制的内容。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
          children: "copyCodeResource"
        }), "相关介绍。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GetPixelMap {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n  private img: ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.drawImage(this.img, 100, 100, 130, 130)\n          let pixelmap = offContext.getPixelMap(150, 150, 130, 130)\n          offContext.setPixelMap(pixelmap)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(679359)/* ["default"] */.A) + "",
        width: "252",
        height: "245"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setpixelmap",
      children: "setPixelMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setPixelMap(value?: PixelMap): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将当前传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "对象绘制在画布上。setPixelMap示例同getPixelMap。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含像素值的PixelMap对象。  异常值undefined和null按无效值处理，不进行绘制。  默认值：null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getimagedata",
      children: "getImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getImageData(sx: number, sy: number, sw: number, sh: number): ImageData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以当前canvas指定区域内的像素创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
        children: "ImageData"
      }), "对象，该接口存在内存拷贝行为，高耗时，应避免频繁使用。"]
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
            children: "需要输出的区域的左上角x坐标。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的左上角y坐标。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的宽度。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要输出的区域的高度。  异常值undefined、null、NaN和Infinity按0处理。  默认单位：vp"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的ImageData对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(740701)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GetImageData {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  // \"/common/images/1234.png\"需要替换为开发者所需的图像资源文件\n  private img:ImageBitmap = new ImageBitmap(\"/common/images/1234.png\");\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.drawImage(this.img, 0, 0, 130, 130)\n          let imageData = offContext.getImageData(50,50,130,130)\n          offContext.putImageData(imageData, 150, 150)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619662)/* ["default"] */.A) + "",
        width: "250",
        height: "213"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putimagedata",
      children: "putImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "putImageData(imageData: ImageData, dx: number | string, dy: number | string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
        children: "ImageData"
      }), "数据填充新的矩形区域。"]
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
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含像素值的ImageData对象。  异常值undefined或null按无效值处理，不进行绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct PutImageData {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let imageDataNum = offContext.createImageData(100, 100)\n          let imageData = offContext.createImageData(imageDataNum)\n          for (let i = 0; i < imageData.data.length; i += 4) {\n            imageData.data[i + 0] = 112\n            imageData.data[i + 1] = 112\n            imageData.data[i + 2] = 112\n            imageData.data[i + 3] = 255\n          }\n          offContext.putImageData(imageData, 10, 10)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(235033)/* ["default"] */.A) + "",
        width: "300",
        height: "250"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putimagedata-1",
      children: "putImageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "putImageData(imageData: ImageData, dx: number | string, dy: number | string, dirtyX: number | string, dirtyY: number | string, dirtyWidth?: number | string, dirtyHeight: number | string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
        children: "ImageData"
      }), "数据裁剪后填充至新的矩形区域。"]
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
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata",
              children: "ImageData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含像素值的ImageData对象。  异常值undefined或null按无效值处理，不进行绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirtyHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct PutImageData {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let imageDataNum = offContext.createImageData(100, 100)\n          let imageData = offContext.createImageData(imageDataNum)\n          for (let i = 0; i < imageData.data.length; i += 4) {\n            imageData.data[i + 0] = 112\n            imageData.data[i + 1] = 112\n            imageData.data[i + 2] = 112\n            imageData.data[i + 3] = 255\n          }\n          offContext.putImageData(imageData, 10, 10, 0, 0, 100, 50)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970429)/* ["default"] */.A) + "",
        width: "300",
        height: "250"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setlinedash",
      children: "setLineDash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setLineDash(segments: number[]): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置画布的虚线样式。"
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
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述线段如何交替和线段间距长度的数组。  异常值undefined或null按无效值处理。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct SetLineDash {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.arc(100, 75, 50, 0, 6.28)\n          offContext.setLineDash([10, 20])\n          offContext.stroke()\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916120)/* ["default"] */.A) + "",
        width: "309",
        height: "266"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getlinedash",
      children: "getLineDash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLineDash(): number[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获得当前画布的虚线样式。"
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
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数组，该数组用来描述线段如何交替和间距长度。  异常值undefined或null按无效值处理。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct OffscreenCanvasGetLineDash {\n  @State message: string = 'Hello World';\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .backgroundColor('#D5D5D5')\n          .onReady(() => {\n            let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n            offContext.arc(100, 75, 50, 0, 6.28)\n            offContext.setLineDash([10, 20])\n            offContext.stroke()\n            let res = offContext.getLineDash()\n            this.message = JSON.stringify(res)\n            let image = this.offCanvas.transferToImageBitmap()\n            this.context.transferFromImageBitmap(image)\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952997)/* ["default"] */.A) + "",
        width: "416",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "todataurl",
      children: "toDataURL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toDataURL(type?: string, quality?: any): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成一个包含图片展示的URL，该接口存在内存拷贝行为，高耗时，应避免频繁使用。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定图像格式。  可选参数为：\"image/png\"，\"image/jpeg\"，\"image/webp\"。  异常值undefined或null按默认值处理。  默认值：image/png"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定图片格式为image/jpeg或image/webp的情况下，可以从0到1的区间内选择图片的质量。如果超出取值范围，将会使用默认值0.92。  异常值undefined、null、NaN和Infinity按默认值处理。  默认值：0.92"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的URL地址。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct ToDataURL {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(100, 100);\n  @State dataURL: string = \"\";\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width(100)\n        .height(100)\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.fillRect(0, 0, 100, 100)\n          this.dataURL = offContext.toDataURL()\n        })\n      Text(this.dataURL)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor('#ffff00')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758471)/* ["default"] */.A) + "",
        width: "292",
        height: "320"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transfertoimagebitmap",
      children: "transferToImageBitmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transferToImageBitmap(): ImageBitmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在离屏画布最近渲染的图像上创建一个ImageBitmap对象。"
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
            children: "存储离屏画布上渲染的像素数据。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct PutImageData {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let imageData = offContext.createImageData(100, 100)\n          for (let i = 0; i < imageData.data.length; i += 4) {\n            imageData.data[i + 0] = 112\n            imageData.data[i + 1] = 112\n            imageData.data[i + 2] = 112\n            imageData.data[i + 3] = 255\n          }\n          offContext.putImageData(imageData, 10, 10)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(765482)/* ["default"] */.A) + "",
        width: "300",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restore",
      children: "restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "restore(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对保存的绘图上下文进行恢复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(246624)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当restore()次数未超出save()次数时，从栈中弹出存储的绘制状态并恢复CanvasRenderingContext2D对象的属性、剪切路径和变换矩阵的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当restore()次数超出save()次数时，此方法不做任何改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当没有保存状态时，此方法不做任何改变。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.save() // save the default state\n          offContext.fillStyle = \"#00ff00\"\n          offContext.fillRect(20, 20, 100, 100)\n          offContext.restore() // restore to the default state\n          offContext.fillRect(150, 75, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(879982)/* ["default"] */.A) + "",
        width: "250",
        height: "210"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          offContext.save() // save the default state\n          offContext.fillStyle = \"#00ff00\"\n          offContext.fillRect(20, 20, 100, 100)\n          offContext.restore() // restore to the default state\n          offContext.fillRect(150, 75, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(736231)/* ["default"] */.A) + "",
        width: "250",
        height: "210"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createlineargradient",
      children: "createLinearGradient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个线性渐变色。"
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
            children: "起点的x轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起点的y轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点的x轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点的y轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient",
              children: "CanvasGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的CanvasGradient对象，用于在offscreenCanvas上创建渐变效果。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct CreateLinearGradient {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let grad = offContext.createLinearGradient(50,0, 300,100)\n          grad.addColorStop(0.0, 'rgb(39,135,217)')\n          grad.addColorStop(0.5, 'rgb(255,238,240)')\n          grad.addColorStop(1.0, 'rgb(23,169,141)')\n          offContext.fillStyle = grad\n          offContext.fillRect(0, 0, 400, 400)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333575)/* ["default"] */.A) + "",
        width: "252",
        height: "492"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createradialgradient",
      children: "createRadialGradient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个径向渐变色。"
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
            children: "起始圆的x轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始圆的y轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始圆的半径。必须是非负且有限的。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点圆的x轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点圆的y轴坐标。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终点圆的半径。必须为非负且有限的。  异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。  默认单位：vp"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient",
              children: "CanvasGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的CanvasGradient对象，用于在offscreenCanvas上创建渐变效果。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct CreateRadialGradient {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n  \n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let grad = offContext.createRadialGradient(200,200,50, 200,200,200)\n          grad.addColorStop(0.0, 'rgb(39,135,217)')\n          grad.addColorStop(0.5, 'rgb(255,238,240)')\n          grad.addColorStop(1.0, 'rgb(112,112,112)')\n          offContext.fillStyle = grad\n          offContext.fillRect(0, 0, 440, 440)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983880)/* ["default"] */.A) + "",
        width: "284",
        height: "554"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createconicgradient10",
      children: "createConicGradient10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createConicGradient(startAngle: number, x: number, y: number): CanvasGradient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个圆锥渐变色。"
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
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始渐变的角度。角度测量从中心右侧水平开始，顺时针移动。  异常值undefined和null按0处理，NaN和Infinity按无效值处理。  单位：弧度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆锥渐变的中心x轴坐标。  异常值undefined和null按0处理，NaN和Infinity按无效值处理。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆锥渐变的中心y轴坐标。  异常值undefined和null按0处理，NaN和Infinity按无效值处理。  默认单位：vp"
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
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient",
              children: "CanvasGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的CanvasGradient对象，用于在offscreenCanvas上创建渐变效果。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct OffscreenCanvasConicGradientPage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffffff')\n        .onReady(() => {\n          let offContext = this.offCanvas.getContext(\"2d\", this.settings)\n          let grad = offContext.createConicGradient(0, 50, 80)\n          grad.addColorStop(0.0, '#ff0000')\n          grad.addColorStop(0.5, '#ffffff')\n          grad.addColorStop(1.0, '#00ff00')\n          offContext.fillStyle = grad\n          offContext.fillRect(0, 30, 100, 100)\n          let image = this.offCanvas.transferToImageBitmap()\n          this.context.transferFromImageBitmap(image)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(229632)/* ["default"] */.A) + "",
        width: "292",
        height: "290"
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
740701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
223432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
843647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
333575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439973-eac98480752309be03f9e0b3c00109de.png");

},
549866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABfCAYAAAATQRJ9AAADS0lEQVR4Ae2cvW4TQRSFhxCC7TUJBSUvYCmVJZSIPAPiMSBCiHdASotCeIUIwcukCIqU4IqODlHE9jqRDrq73tVdhyomzGj9FUczLtY/8+mcOzPe2XClnlD8MQgzdYTij0G4rRuuW+OkLIlEcCC6mqlbfKmZMuXKZG2pnmZqi2zgS12rr5k256/jxpMD0VOuns5+vNHp6JNOR0dOhzodtUPfRoc6+/6x1OhI5z/fKtfT6K5ogJiqr8dr79QN59oII6cLbYR26GG4UGcu6w+3jzTWrnJtRIXhQGSaKlMnHCiE31prtX5pLZQaDo410Y6u57F825q57HU1CKsBFk2rCOJSu0UNXHYwl7keEINjGYhlBvFfXFuDsDczV3TDge61OpaasTscfNZYz3WlflQYDRAGw0C0uz7cBDHRHiBiQzdHACKBCAREAhDMjYAARGNyQLEuZk0U6+gzNIumS+1ppr7KHWXb+FzU3W8I4ogaRDYHcfeD/rcFICBqEJUjABElpm5GEyAA4TNrFbc4msUaR0RzxJi9puYGXIx9J1bWrKxZWXvn4QgcgSNwRCIuAAQgGnHk12/sNfFXafw1hEUUs6ZEYgoQgGjUC2oENYIawazJxSI1wg2GX2D97z4gAEGx9q5L1BEZd4NHOi07n75Wp0cfrSCILyndDW4g+sq1qW54X/x3fD/8ViVv5bb1h4OvcxBxbhqoprDOEYCoBiVGewNEf/2VHoSThtbDidqqZ9sfNNVOYwYTEUR5fs6eNjDRC030WpfarzXWvtqoafEbXyrXk+JEbQwA1WfWe03V8d6yVpRHfe24r6k9j39Y/C32qItN5doq2pgHGhdAdJTL1C0ArAYIq42mrajP5KhBVBZZrdYejhL3WG813isOIu6UtYJgLSAiraQ9BEAkAgEQgEgnmxcjItZrakQirgAEIIgnH4M4AkfgCByRiAsAAQjiyLvA9ynWibgDEIAgpoimRFwACEAQR94Fvk+xTsQdgAAEMUU0JeICQACCOPIu8H2KdSLuAAQgiCmiKREXAAIQxJF3ge9TrBNxByAAQUwRTYm4ABCAII68C3yfYp2IOwABCGKKaErEBYAABHHkXeD7FOtE3AEIQBBTPpr+AOCPcOLU6RH8AAAAAElFTkSuQmCC");

},
395807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800346-97103e8e014bdc934156c1af7e24e2fb.png");

},
515927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800332-bcad7a92d55ac66705f8f3c20a5d7e20.png");

},
274273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
470567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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ooooAKKKKACiiigAooooAE+8v1FFCfeX6iivfyn+G/X9DGQP95vqaKH+831NFeLW/iP1f5mkQooorIoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAT7y/UUUJ95fqKK9/Kf4b9f0MZA/wB5vqaKH+831NFeLW/iP1f5mkQooorIoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAT7y/UUUJ95fqKK9/Kf4b9f0MZA/3m+poof7zfU0V4tb+I/V/maRCiiisigooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKABPvL9RRQn3l+oor38p/hv1/QxkDn5m+poqSS2xI3zdz2potcjr+lcFbA1ud6dX1XcqMkNop32X/a/Sj7L/tfpWf1Gt2/FFcyG0U77L/tfpR9l/2v0o+o1u34oOZDaKd9l/2v0o+y/wC1+lH1Gt2/FBzIbRTvsv8AtfpR9l/2v0o+o1u34oOZDaKd9l/2v0o+y/7X6UfUa3b8UHMhtFO+y/7X6UfZf9r9KPqNbt+KDmQ2infZf9r9KPsv+1+lH1Gt2/FBzIbRTvsv+1+lH2X/AGv0o+o1u34oOZDaKd9l/wBr9KPsv+1+lH1Gt2/FBzIbRTvsv+1+lH2X/a/Sj6jW7fig5kNop32X/a/Sj7L/ALX6UfUa3b8UHMhtFO+y/wC1+lH2X/a/Sj6jW7fig5kNop32X/a/Sj7L/tfpR9RrdvxQcyG0U77L/tfpR9l/2v0o+o1u34oOZDaKd9l/2v0o+y/7X6UfUa3b8UHMhtFO+y/7X6UfZf8Aa/Sj6jW7fig5kNop32X/AGv0o+y/7X6UfUa3b8UHMhtFO+y/7X6UfZf9r9KPqNbt+KDmQ2infZf9r9KPsv8AtfpR9RrdvxQcyG0U77L/ALX6UfZf9r9KPqNbt+KDmQ2infZf9r9KDa4/i/Sj6jW7fig5kNQ4ZfqKKkjtv3q/N39KK9/KcDW5Jade67GMpI//2Q==");

},
775154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479981-531d8ba3b4ffa27fb109461ceb299a0c.png");

},
983880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479965-19e28b459eb549d21ba7b2a47608f76a.png");

},
916120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAAEKCAYAAABzM8J8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAABodSURBVHhe7Z1brB1V/cebGHzSRBshgDdCREO8YIoQQQOKtxfBoqUJWO/YoBKIoiYFpRiJJl6iD4KCoCBEifECqLTVau8Uivf7FWgpUlCMPunb+uezku/JMCX/DWef2WfvdT4Pn+zZs+fM2Tuz5jO/tdZvrbXsd7/7XRERaYVl/R0iIrOMUhORplBqItIUSk1EmkKpiUhTKDURaQqlJiJNodREpCmUmog0hVITkaZQaiLSFEpNRJpCqYlIUyg1EWkKpSYiTaHURKQplJqINIVSE5GmUGoi0hRKTUSaQqmJSFMoNRFpCqUmIk2h1ESkKZSaiDSFUhORplBqItIUSk1EmkKpiUhTKDURaQqlJoPys5/9rPzhD38of/zjH8vPf/7z8tvf/rbceeed5Z577qn7fv/735df/epX5de//nV9D7/5zW8q/N1f//rX+srnv/zlL+sr5+XvoP//RJSaDMrdd99dRXXHHXfU7fvvv7/87W9/q9LasWNH+dOf/lSPQ1bAft7/+c9/ruKL3P7yl7/Uv+M14kOG/f8notRkUO66664abRGlIbCdO3fWSI3P9u7dW8VExIXE+ByBISwivNtvv73s2bOnbieai/giuv7/E1FqMihUGe+9994aXaUaiozY94tf/KJKiiopr4iP45EbUR2RGSBFpIf8ODbRHOfr/z8RpSaDgngQEXIi2iI627JlSxUXIkNUbCOtHMv+n/70p2X37t1VcvxdojOOhQiu//9ElJoMzq5du2rkRWRG29ratWvL+vXry+c+97myffv22rZGNRNJpRrKazoJIrBUP9lOxNf/XyJKTQZl3759VVjIKaK6+OKLy1vf+tbyyle+sixfvrw8+clPLkceeWQ55ZRTqvA+85nPlA0bNtTjkRjy4jx0HHBO5Ej0ZvVTHg2lJoNCtZGoiuiLqiQiolqJ3IjAqI7SmbBx48Zy0003lcsuu6y85jWvKc9+9rPLYYcdVtasWVMuv/zy+nlSPBK5KTV5NJTajENbFb2DVOu44anmIQ9kknYqjkvuFzKgverWW28tV1111UHnmzTdHLRUK3nl92zevLmsW7eunHHG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");

},
970429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
571100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
279153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440001-800c5b1db93c301011ca097f24d1df51.png");

},
175428(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
696126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
736231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959964-765cb0be51f21943e338d2d73cd1ddd0.png");

},
397230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
580382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAABgCAYAAAAQLbfxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATTSURBVHhe7dtfaxxVHMbx+bP/sk3TJG3SKlIvpK0WocUbCejL8MY3oW9JBONFi6Be+CJ6I9LrXrYKIpWSZndn5udzZtJkm2clZi+y0n6hn2dmH5bCCZyzZ3Znsgj9A4BTlF4CgNJLAFB6CQBKLwFA6SUAKL0EAKWXAKD0EgCUXgKA0ksAUHoJAEovAUDpJQAovQQApZcAoPQSAJReAoDSSwBQegkASi8BQOklACi9BACllwCg9BIAlF4CgNJLAFB6CQBKLwFA6SUAKL0EAKWXAKD0EgCUXgKA0ksAUHoJAEovAUDp5dKagY49HcuIaq1T6/Wi9wJvuybX/Oh3mq6rT79nhZReLk+DTYNspfOj17UWDQALFHPzJH2Q6nzh3Lp4Si+X9mrArwbYaODV+slrACfaRSHttNPOQce0g6iGXb/o/RdM6eX5dYNpooiqGcakuhEHsRMv6s2Y1btxWG8DOOVltRmHzdV4MXtfNmIy1QJRnVxirJrSy/PJozkaTB278evj+3F5LYtLZR6jTEdZy4Y6HwGYs5b143LWi6HmyMZ6Fr89vhfPnm1pLmnHbfPs4im9PK+6Tsc89r/5QItCFmVvHNlA//kwiyK7ElmRR6YewJx8qLmh46Us8mItxjp/9OimduClzbFVUHp5tjKq6McsdH2UvlCJUfxd3Y2BBpnlWgjSgLUqZtoxtK+1MgI4Je/kmic9zZlhNo6d61l7Kb543l0spZdnar9IKXUZoRWu6cVsmscfz/cin18V2wWilMHrfxAAnbQ4pPmhY5GPtEiU0dduezq9u3jeXTCll2dK3zFURfeb7NG9DU///Cx6WaEB9jTgolsc2gWCxQFY6Hhx0JwpSn249nV5MYjJ5L7PuRVQenmmdnHotTuHuk6/VAzi+cHHMdRg+/lmlNmOBq0F4ngHAcC0i0O67L4a+TiL8Xgjhn1dVsxu+pxbAaWXZ2p/nchjEuvd7mF6Ra+349O9flzbzGJUbGsHoRXxePcA4F/lZZS6nLi+1Yuvvk5zKu3G5+bbiii9/C8amcZGe4z6HXW9+Ovgk9j7fBhrWv3KdkVMgx9FofNC5wDm9brL8EEWw14RX37xbhzObnRz6n9A6eWyGu0mqmY3njy5FT/9fC++e/BhfPvwo9h/cDu+f3ALwJz9h3di/4c78eMv78XT32/Hy8mW5tDcHcYrpvRyaelXjCrdMp3u8upH3aQ7JnMNuGgXDgAnqvS9XTXQPBlp9z2KepZun14wr1ZE6eXS2qfLhhqgFom67F6nW0LTLxoAXtNocYhZ2iXog1Rzpqq73ffCubUCSi+XVWmHMEvPV+i8TruFJj22vdH2VVopARyrm7EWhWvaXa9r3vRjqm6qufNGfufQSVumdA9EuklKf4CjDsAic3MnXZanp5rfrKcy57R3T6ZLCdEisfA9AFy6RaB9HOFUvyJKLwFA6SUAKL0EAKWXAKD0EgCUXgKA0ksAUHoJAEovAUDpJQAovQQApZcAoPQSAJReAoDSSwBQegkASi8BQOklACi9BACllwCg9BIAlF4CgNJLAFB6CQBKLwFA6SUAKL0EAKWXAKD0EgCUXgKA0ksAUHoJAEovAUDpJQAovQQApZcAoPQSAJReAoDSSwBQegkASi8BvO2y+Ae0mn/Gq3ycMQAAAABJRU5ErkJggg==");

},
973785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
86279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
235033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
765482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAhBSURBVHhe7drbalRZEIDheVo1QTxL9FJE8KG8UZCg5uwh54ioz7GHWrCDE3roVM9FTZHv4mMf2r4r/rV6mb++fv06AXQgWEAbggW0IVhAG4IFtCFYQBuCBbQhWEAbS4N1cnIyff78edrb25u+ffs2nZ2dTaenp+Oz/f398Q5WdXh4OB0cHEy7u7tjzua5i8+Ojo4unyEsDVYMUwzO8fHxuN/Z2Rnx+vLlyxBDBquKGYvZCnEfMxXX+Gx7e/tyDiEsDVYMTayCsdOKYM07rXiO9/BfbG1tjUjFTMVshXgfi+QcNJhd6wxr3knFfayEEau4j+H6899BVhwxnJ+fj2OGiFYsimGO2KLvcHMtDdbFxcUYnnlnFe9i1xUrY0Ts6ooJGXEO+unTp3HUEM+xs5p3WvPPRJgtDVZEKsI0r3gxYBGsuP/9+/fC78B1RZRitiJWP378mH7+/Hm524p3i77DzbU0WPG/N3GNAYqtelxjGx/vNjc3xzOs6s9dVcxT7NzjOcSu689ZhKXBitVvDlRs3WNF/PXr1/TmzZvpxYsX08OHD2Fl6+vr08bGxvTo0aNpbW1tev369fTu3btxrhVBuzqP3Gypn4Qh3s33MXAPHjyAlcUM3bt3b1wjWnGNeYu5m+cNZoJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyBAsSgkWGYJFKcEiQ7AoJVhkCBalBIsMwaKUYJEhWJQSLDIEi1KCRYZgUUqwyFgarJOTkzE8e3t74xrPBwcHY6jW1tbGgMGqIloRrPv3749rPMfc7e7ujlm7Oo/cbEuDtb+/P0J1eHh4uert7OyM++fPny8cQriuOVZxH7F6+vTpmK157hbNJDfX0mDFSheDc3x8PGIV97HDih3XkydPxrDBfxGxiuv6+vqYqfknoWBx1bXOsGax6n3//n06OzubNjc3pzt37oxzB1jVs2fPpo2NjRGs27dvT48fP54+fPgw5s0ZFlctDVbsrOIaA7S9vT1dXFxM5+fn09bW1vTq1at/rJSQdevWrbGzunv37nh++fLl9PHjxzFnzrC4ammwYnseYlcVwYp3sfLFML19+3bcw6pijubjhlgE379/f3leGvdX55Gb7VrBivOqWPHiGoMVh+6np6fj3aLvwHXFfMWZaAQqFsWjo6MhZis+W/Qdbq6lwYoVcA5UDFYMVRzEz/Fa9B24rthdzX8mE/dxdYbFv1kaLID/C8EC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQLaECygDcEC2hAsoA3BAtoQLKANwQKa+Dr9DYgX+Aqnw5w9AAAAAElFTkSuQmCC");

},
213211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
296380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959942-89c9a9704d572add733589fc518e4ae3.png");

},
60051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
100245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800302-21986376ff4080010efdc8ac0d5215e4.jpeg");

},
418237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
61668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAABbCAYAAADupm55AAAWu0lEQVR4Ae1ceXCVVZa/iGR7LzshCYSwJSE7BBC0Ubvt6bHanpqlyilrqtvqbazqcaZqpqZLsccu2xVBEVRAAUGwQYVAWCQBZQsQlM2wBJAQFLNAgBCykO0tefCb+t37fbyXt0CEZwfk/vHV977t3nPP+Z3fOffcmwgnwtCtD62DG8QA8WMevcWRC2G40UM4EYFufWgd3CAGiB/P4/vGknAYHX7fHen2f3jEQKASP57H902AfgBr6SXb8D3zMI3xXb9V37lkO5FGe7xngQsRcMEKPgueEjzl9ZTV87c5FiVHzzF6v2f1kNn8zrMP814wz2yf/frr2+zHW85IQ4embN7Pze++2/m7A5Z2NW1L+373Q/gynwIIhbkWUJyIhANRcMAKB8INL+Nv5sTXG7ipuHB0g0cUnIgz2guDAwQv22D7kbD7OMb12vf3nOOySPkcCIVD/qbcvBftB3hsg3J6AsPT0PxOyacYhm2SbTgWz296yuJCOHyPnu9464/6ZZtK1ijYZT9W0Abe7/JajdMi9eaU+k2U71I+NSaOl7+p+2v3fSPPFRAVOHt+z3vUjdm3af/en4VKlD2FpmFj4cQgOfBAiTQVQSA5MBB2DDQUagI20ESuZz9K8DCsLRVYt1WgojZG9k2j13WEo3ibwCelAnYkGYq+OQWbgOWZ47MjXoKVTqcMacrHa44hGi4MgguxXs/5HsfO8VphQ5x0OOXEZDPv9sx2b+xMZ161WWDdNoH6zmGwS91zsuO/PTXOKOw4IlC8U+DDdQIODJaAb0QE9lcOwe6jsXBgRMA2egLNfz+B3nFHRxOc5vcmYD0d33zWu7MPw3YiBY/+VuCXfxD4uiUroAdSWUtWC/z6CYFHf0VQ5RmeHxLwm54DJPgInBBMeUnAiXtR+CnbiZYsuP0glTwZqzcL2JBmAOhmAavyrZWbBX71G4Ff/l6gHfmwI8pLZsWs+fcK/O4JgS8OD4EL8V6MRNmt2H5Y4Dd/EHj4EY4hB07JsL2JMr0zkHKMFJTsFGjBMByoGgE7wiRoqU9/YZX3yaZPvSTQjXQUPEhdZkn7HKzpjybcix0V/eHAhJsCLPvuaVP3tQr93sDktXm43w3Uhr/7wjssdGAI6i4NRzcyUd2SaRjJl7KpkE+2E2A5KNlNUOXI1ECFUN/3vftxCxOGZ16hQnNQ+BnPDFehKD3ENsdh9VbeG20oxhOwClTufI7efO1DhdUwnL9swZFTebiEJHx+9G44kdCDQfmeDeE4fHIkuhGPH/9cwIUEqPBqKpr9D8SMhZQvDY8/oWR3pwQM2ebhKav5vfdZyW5+4zkWB4ZKpmxBEsorR8MGpk0M/UwVvNtR95maTXmZMiVirARsvmTYA3UCTVfyUXaUz+7xCzi26TlW9uV9qH7d41Jyu69V6FdO7TkWsr/b9v5k79k331XyqHf9MKwbsDWt12JYiwzlJmAdoELYqHcY8BXKW+BnXlbAX7WJSoyVrEHmsmMCVm/hPROw12/Lu23PaxqBhqRylxax/WGYu5Ttp/QA7BXEYM9J3v+ZdNj9laFwYoyPou2Iw7sfKdnLq5IlINyGuzlZPeW2IwXFOwSaJWAzYEOIAVj/fdDAzHuffoljMAFLQrHi8GmBi5fHYNc1AOvZ97V+ewLJ+z2T+b3v3+x1QMC6kGUwbCClWLBmqzLWht1UTL7h7QQsvejanuQpOAHrQC5WXgWsBdsreG881vgBrPJu/3Jdq1+V26kc8+XZbH8s5i3nGNJ7gJHhbMYChvg8fNvSDy6koXR/kodDKjZsuByHDtyH4l18N9eY0KnJkGlMb1nVtakbFTG83zWvTR1Jhg0IWF+CML9/6kXKlYSxDyj9cgJ7qu0unG7LR9kR3hvXY9xmf707kz15uO1g9ut5z7st9Q4jw40dPoBlSlB7iaEwGzXNgRmWwFi7zQ1YGpe5lQodqnrgQgwaEYWvzgzE8TNDcaF7OGyIhg0DJKCZv3LGPkWmBLkyJeCEj+HEBCxTAhtGG+1GyDyMs+QuRKDBFYeK6gScqB+JRtdwOBBjGEABypftlZIpYzOsaL0yGZ3IwHkbo4NZ6VDltdmLBLowCk8+RaOPwNQ3mQ+SiQky5qgWPDeT9ybhif+l8dWkxoloyeCUsRMxONUShyO1qTjVPBSdSDQqIpzBs79QOZ52WNCEZLQiGTZYcM4Vh0OnklDTOsqY0KYaOSxTAsWw7jw2Sur0fHc8KqoTUXlmGFqRItmeDMsJa/6DyvnI/t+290PNpTFYX6ZA7A2o3l/7klIgwPK+mVJ4vnMjv/0Dtj0FToxGTTNzWLcH9fwdiXVyBp8DxbBZsOFuwwhWtCAGM+cJbNsbj7P2JJxzxmJ/VSRmzRVosGdJhdrl+xFGrqUY1glWCqzYcZhguAdFErDpBntxZm7BGUcYZi8U+LJyCBqvJKO2KxTbvrwbBNklOUHjJIqgDTz5YT//N41GS8X/PEuD0tkIIis6kIKvTmfhaL3A4hUsI6Xhww0E8DiDUWiscMyYJ9CJLGzeR2CYZadI2BCJdWUCS1ffjZNNSbiAeFReDMeyTwQ27CDABsEhx85KSzgWrhDYe3Q0/jJVYPZSgbKKBDRcSUZFfRhK9zByDUNJGSddbsAytSHgW2DBq7MFyg7FouHyQJyxW7Fig8CSlQJPPc/xpSDvAQVY6uTb9rtQ3TLWACwniYHse2ve9wPYFNReSoOLDHuxAHYM9XswTDFc25FpADZbMicV2Y5kvLGAE5U0VDWGY02pkAY/fjZGMtELbwo0X8mDTdYxww2GzZGlG1UliMBOWSUYLyddNmRID+UMvN4eg8JiGnokTjYPkH1/uleg3jYYNqTLikMHcjzSEjP8ehsgEguLaMgcvL+Khk2XxiMTFG2h7Hn42WMC57rG4qwjA+edA1Df/hOQQZkyNCEEVafH40h9fzReHi7LcWQ9G2IxdS71MhltiMf2owIrtwrsPEpwp6ETozBnCZ+TBekMFiwsVBPMx34r0Ox6GHu/FvhricCiVaxiTILtag6bKBlWRbIwdGIwXpvDtrJR74iSuli/S+DkxSh0IB+TH1JRIed+9c5VwLb+oAA7VKYEDHErNgqs3CJQyGOzOlZsFlixSaBom5DPWcsr+YKGz0UXBqALFvz3cwRAFpatFzhcHQs7MmBHKk42xmNFMXPCEZj1PkHBMG6RgKXSWWukEQn67Yf42wRspmQ/hrdpc9hXKt5YJFB1LgU2jIQTadhXNUCCuxujMPNdvjPCo2rgD7QWnLZFo7YtBWedsahpGmMANhr/9Di/j0JxWSi6MRTPvcHrGEyfR5lY4gqXKcsl3IMFhbyXYRTrQ7Hva4G6SyPlBGnBxwIdGCurCO1Ix7sfE4B5ON5gwdcXOHaVQi1ayfbH40DNXaAzn+3KlulIK0ahC9TfEFklaEYCyk+MkDqj3p6dRtbPRGmFwLZylqmYR4/GN02D8M5SyjFCOhAZlpNjArYR4Th2Otdg2KwfAsMOQW0blZKAFmSgGamy/qfOI9ACHsPluRXMSRNQ/IXy4E7cjQ4k4HTLRLRjBKrOEqhqlYYJuh0DsGQtDVwg2UDVV6ONlCDbmHRxpSgcpTIlGCerBDZky3Y27ydjTMSX1ezv72TOqlZ/uBoWhc/2kcVyUVEr0OS4VwIrcDmN+XCCdCqePyjsj05ZzkpF+clBOFxLMDwky2zT3yEDjsKfXqfs46TzvPU+72Xh+ZkEG9md4IvC4//J63Q8+UcFbqYZBArTHAfi8PC/UvbRuP8f+H2cjAQErA35qG4Lx9m2iXDIBQ21KKEWJ5JRXMYqQTzKT1Dn1GUCtu1nyhODZevYJqsUHJNa0GlBKk41Uv9xyHuQz03ADsCRmgIslFFl9A8JsBko/GQgtu4Lw9Z9odiyNwRbeN4XatwLwwwZ+lRKQIZleCveQ1AVSA9euT4Oq0qsKNoYilUbQ7H6swGYt4TGeQTVbTFoxmj5DeuFdmQZDMtZfCi2HVLtMO0gMAjIV+aQlVMwfTZBQWUzp6VD8Bv+TsKmz5lHR6KsPDnACpWZGpB1Y/Dn19h3Il5+mwBLxxfH2e8YzFrMPphrR6AdaahrHo9WDMbZLjJmAma+x3w5Do32+wxmZv9xOFo9Ck5k49i3ZH7WeMnSaiJHOcur6QgFKK9m8X8CHAiRoZ9OrCaYBVerDQqsBK4HYCvT5UStsoE5egEOnqbcdCz2ryY3NnmOwyOPcgzxyJEMmy0d5yJCUVE9FouK+B0jg6mP2+PsJ4dVDGtDJmpbyGycWVPhqhxEpuAaP5ctuaTKUK4mXUzgLZg+n4oYJ2enNhmiuJKUj07kwAbmxAXoRh7qO9PQfJnGt0qG9UwJJMNKwI6TpTPmsFS8YoUkfLS2nwQNZXGXR/g7Hi/I8B2JecsIvEFGLuvPGByXFScaItGBbByuIzv/PWa8R/lHYt5Sfs8lVwLBildmEmjJcqGgHeNx8Uo+Zi0hIMZKo6vqwEC48C9odJFx77066VMOxQK4Ra7aXehm6KY+firzYeaqBB9X+hzIluBTYzNZVqUELRiE8hMjYUMoGG1IEh9vog0mGUvMqsiu9mbE4N9+r3RAwLI/tqkAW+ABWDquefjT0611zw9gU1DbNlzmnTXNgQr2qjykAJuHDXuUQhgW3/mYLDgJz88SeHuRwOwPBN5aLMAQKo+F6vrtxQQAJzrRRg6rGJazbTtCZQ5LI6o6LJdmB8rZ9GUkYvFyGmKosZHCXJ+mYuMxZzGfRWJJIc/mHgR/Sud3FlzGYMxfRuPHYc2WKMz/SKANuTh5nqAiWEPAaoaaGGVjXqHAi28QJKlGPj34qlNwxcyOX6Ado9CNByVAyWAm8/GsJl4/gg15cOInsMGK91dS1nws36gA68l6/M0cVi3NErBqaZb7BAjukv0832+AXI1TOVkUJj3EcUUhbzLPObKS0cEKxpZ8vLWI32VKEDNlUYc/Pd1a924QsByEVc7+7ciVgCVrkol2VQpcwUPY9RVD+RhZL1XlIuZWoehCjLFSQyBwlhyHKVMJAHdKIAF7kEYskDksJ1UuRGLqbL6XhNfmsu1MY/shtyBS4czrhuGb86lyP8L+IwRNoF1YlJ+A5Vq8Ba+8zXZT8NN/Fqg8M8bY08D8j20ScKGoahZock3E3q/74+m/qHzyeG2u0TfzVKYmcSg7QKZPx+bPuTrGPrirjXVjXlvBfQxO3IMNu+jYnPREGYDNCwhYlqa4iUUxLDe/hKKuy4pOTMKpTk7sfmFMVs2FCMo9CC/NYh9RyJ9McKqVLtqiwZWOVgyVuTJlus0By5SASslETXPPFaCeddgIIyVQgKW3kx3JMiU7+6EbI2XJRdVVoyU4mVs2IxRFn3JyNhhOuYAQZaQEuVgly2SKYXfIlEAtzSrAWnHsdDjaMQH1jv7Y/9VAyaQEKw8q/sNiAjkbG7+gESfKHFWFO38sQTAxtbHgZGMMLjruw/EL/L4A//gYDcwwyY04BCzToTB8vJ5pwyhUNiRj4x5GCE7suClGOXA3YvHkFAJypKzRtsoIonJLsn47QjD1LbY9DI/+mmBiBSAC78tokOsXsGybkzoCVi3NMioxVYjH7MV0tGj8SS68sLSmxslzRV0o6ru4GytSMixTLk4KqSvWiRVQmer9YACbcR3ARmOtXJrN8kgJaNx4vLeKxszHma5ELFgmUNeRgEYk4HhDCKbNptHH48+vUtnDZP2SK13c7VUky1pkpGi5cOA09hLQeahYF+Lw7/9FUKXKyRFnzudciaixWWSd91TTKHRiGGbOJRi4oUUxqbejqWs1e2e7XQjHms0EgQXtGC5XmJgbE8xqQYF7XcPwuz+y7xwZNV6VkzSC1dzpRYBbcbojCruPhcCGoXJyePxcPOodsTh8OgTT5xLM+Sj5nBM2FY45q1cpQSaWbyCYybqKKd1ypxpVgiSZEnBSxYM72dqRg8YrAzF/hUBtZwzOOCKxab+QtlGTuETk/0jpl+zaiBBZ2XjmBdrILP2ZwOUY/Dn3rXPPT0owBHVtabIMcq2lWRp37XYaMFPu1lJVAlXaYYll5kKBczbmnun4/IgVW/cNMMoso+Xa+6mLQ41N2zF4WlYJsmFufiFgdx6icccZy79kFSo1Am1IxJsLBFquZKMT2dhTFYpj9UnowkSccaTgRVmnVcyiZueBlK0ARqbhMf1dgiUNH33KfplfsmSkVsy4hMzQfqo1Ei2YIBdSVpZwrFwKplxsS7E1l6MLNwnsrAiXy75nHWnYfcKKc84c6UylB/th05674ASrGHSICJkfU38KsByrJ2AZ3pOxfgdTggQcqBomHYtpASPEjPkCF5wcbwaOnY3Dl99w6XsCDtfE4zm5R6MA437Msanl59WlBOpENCEFFbUmUNU4A0ejQDr829/3A9gkLF4lsHpTP9R3ZAT0OAKWg19RIvC6LNQrxiDYGEK7kYydRwSmzhHYui8Ce44Owae7BZ6dztDG/DJB5rycdP3HFIHl64VkDKYQLkRjz3GB5esEFJORCdgmAcK8V4XIxUVckhyEnQcS8Pp8ITcsM9y6WYKg8zS+p4IVYM2QuPmQQNFGIVfoCBDmn+oZQdVfgpr59rR3BP66hlGCixne4ZTfsL9o1HRE4YW3BDaUCew7PgQlZf1kBaLBybFzc7zJzBFYXiKwaoPANMnaBJ9bZjXpSsJLb6qN2AdPDken3IOgHIphftMegbkfCOw4GIfS8mg8/4bA0bpofFUfJ+3zwM8JWNbWI/FNS3+U7IjBgg/JziQUymwCl789dXTr/fYBLI3EDSiccatJy7WEptL5nhkaPQfP72hQFseZbzJE8z3+KYxiFreyCES+Y+7sZztm2/yeCnUfNKIqFbHsxH2qZtsmU7BvtnE9A5jvUB62Hy/HrvI781v3O2yPumHao+TxfGb2aeqLz7gRhm1SRv5VBsdCnZi6Ue/SadX4VV7uDRrlPEqPyjZKf+o+2zBl99aFuq9swN+UifalLDx4z5SFz5Q8t/LZD2BvfaFvZYVq2b5f/GjA3gasop3A7QQasBqwt0UqYDqtBqwGrAas6Q367A5lWhfB0YVmWM2wmmE1mwSHTbQeffWoGVYzrGZYzQy+zKB1EhydaIbVDKsZVrNJcNhE69FXj5phNcNqhtXM4MsMWifB0YlmWM2wmmE1mwSHTbQeffWoGVYzrGZYzQy+zKB1EhydaIbVDKsZVrNJcNhE69FXj5phNcNqhtXM4MsMWifB0YlmWM2wmmE1mwSHTbQeffWoGVYzrGZYzQy+zKB1EhydaIbVDKsZVrNJcNhE69FXj5phNcNqhtXM4MsMWifB0YlmWM2wmmE1mwSHTbQeffXYK4bl/2P1Vp6/e97v6GtfvWmd3JxOegVYreSbU7LWX/D0pwHrJ3pogAUPYMHWpQasBqxPuhdskAWzPQ1YDVgN2GB6lG7r1g3PfWEbzbCaYTXD9oXn6T7vDCbWDKsZVjOsZrs7g+36ws6aYTXDaobtC8/Tfd4ZrK4ZVjOsZljNdncG2/WFnTXDaobVDNsXnqf7vDNYXTOsZljNsJrt7gy26ws7a4bVDKsZti88T/d5Z7C6ZljNsJphNdvdGWzXF3bWDKsZVjNsX3ie7vPOYHXNsJphNcNqtrsz2K4v7OzDsC7NOLcV4/QFaPqyz14DVgNZs2ZfAtXsWwNWR5TbKqJowGrAasCa9K3POo0INgY0w2qG1QwbbK/S7WmmNjGgGVYzrGZY0xv0WTNjsDGgGVYz7G3FsP8Pwt7Uo7lQNf8AAAAASUVORK5CYII=");

},
11561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
679359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440041-b4c8d51ff21a7ced9c6c07a73d8281a8.png");

},
834048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959988-48ca3d95bfaa2e009e83312fd6b15a38.jpg");

},
180652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
626057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
711970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
821143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
680426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABNCAYAAAA1rDPVAAAFHklEQVR4Ae2ay28bVRTG74rGscdJm4Y0iXlW0BaEyoISUlQKQagL+APaqlSojVRCkXhsYM2GqggWqAu64Q/gIaEuiBESK0rFtorKEiFRlBKhPhZp5uF+6Js7155xEyfx3InHo7O4Go8dz53zm+9859zrKB8VyEjPQPkYhIz0DASkJSEJSAGZPh1tWloOFVmGj/ggMHOeL3jxB7EOSBMAj8kgPAzCjPbP0p1zLlNFzbw8N6+T95FuLnvX2iBIJwqkBB9Zj9WCKwRIDZHq8zHQHB4GYEb8/fSvkyA9lOGijKAtI/KiRHMf6yiSQWk1HHlD4eTZ1njrrIIZ8fetv35X4ZXXFZax/z57MUHk4bgOSO1XHio496XCLbwMD1VQJdndvPHHCgKUcQcP45PPFTyMZThnMgu6iW1DIH04cDGKo2cUVrAPQbMYmKBtgjXX5HEMR2cJ8Sm4UWZ0E+RWfGfDIKnCq9cHUP9tGA0Mx1oSmxCNldCXK5j/XeHqn7vDDNAebXuu9Eo0D2kdkMmJCJO+eBeHwwKgCwuDsxkglViCi4dw8h2qsRZ7aMn7MUHk4bgJkBqYixFMzTDAR6JWyCbIMjw4aMDB1BEFF8/CDas15yDgQoBsedeNRg2X6o/Bx3izqtsJkm1OBT/8orB4dwY+tkeFjSAfKApIBqMVwSp+/qLC7XvT8FFNrRb6H4sJ1XgLNZy7oBBgezSfmZcLgUIoshUE083DLhw7zRR/MjVIXs9FCcsYxrFZdgbPhA14EK6iWvMWDqQOqIyFf8qoX2aFHU2lFhcDcDGE+hWFa3/RMnaEPaRuswoO0gsraxWnP2RRmI4CN2m4ueCZ2iuYwKn3qfCJWEp3d71eKHcTVTsJh56mxyimDin42ItGVx5WDr83PcOUPgD6by9ApJ0zBchtEcgS/kMV3//ECj6Cxib2DqlEju9+Vvh3+aXQa7NdfibFkBZe/PtdgzQQdOAOzn+lcAeH4GNog4pizziI26jh0wsKDUxGOzz9k85WQMYvwtceduDEHNPziWirrfPT1yk8huNzXCntDftHblLYXSV1vof2GNKcd63I5KRO2DgvLJZQv7wthJr8fLWAqpi/orDw9264YS/qiCL1rjmLTxlnPqAq6Xdsi9oBGsXxOInZ96jGyebOTtDcOG7/Xv7PLSlSB8rGegUjOPgq25jH29JUL/8IOICD6dcIfH/YiOv1NPcf8w/sfnHoe7YKUhcgB0v3HsW3l8YRYFdClWyw6Y3f/KhwY3kmsgDudep1vIBsKokpq6F88bXCTf9gAiRbo5uo4bOLbOK5IaH/VkA2Aa6Wkg/izbAi74lSnCm9E8ffZkrvSwBeK1366X2rqd36IV8XlWuLZcz/OgIXOxFgKKzSf1xnleYO+2rw+/c9yyDjIPQm7dzHTOMXEGAccx9xKTmR8Y9n8XvYutcZgTR7hyV4GMXzhxUOvMg9xudSb7nlVckZgdRKYBXmWIKDpeDp8GcDvaTsz42JTg8xU5CcWMPkf2gQnmnIjWK3LvU6QbDxWcYgNTjdHxqIPBJscSAyloxBFgtWp4cvIC1lhoAUkPmyDVGkKFIUWbjWR9ofS2ktIAVkvvxRFCmKFEUWsmJLaktqS2pLatMHZKzNQDYtLAlEQArItdOsFxYkihRFiiILWf0ltSW1JbUltXvRVvTLnOKR4pHikeKR/eJXvbhP8UjxSPFI8cheeE+/zCkeKR4pHike2S9+1Yv7FI8Uj8yXR/4PbM76ov4dwOoAAAAASUVORK5CYII=");

},
917135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
716450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACyAdQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7jooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooHzEAcknA+ucYooAKKKKACiiigAooooAKKKKACij/DP4etFABRRR/hn8PWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKByoI5ByAfp1pM55HIoAWiiigAooooAKKQHdjHOen54/nS0AFFFFABRRRQAU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yxi4z/wGvYf2TP2JYPgXrF1418X6wPF3xEvt5e9Yu8Np5mS5RpPmkkbJ3SHnBwBy+4A+p6KKKAPzy/4K9gnQvhjgf8vN/wD+gQV+hNr8ttGAoChVVQvYV8p/t8fsw+Mf2lNN8GQeE5dMjk0ia7e5/tG5eIHzFi27cI3/ADzP519WxgpGq/7NAD6KKKAPzy/4K9gnQvhjgf8ALzf/APoEFfoVDzbpj+7Xyl+3x+zD4x/aU03wZB4Tl0yOTSJrt7n+0bl4gfMWLbtwjf8APM/nX1bGCkar/s0APr4p/wCCrXhq61T4C6Hq1vG0sOla5GbraDhY5IpEDH0w3lr9Xx1Nfa1YfjTwZpHxC8K6p4c12zW90jUrc21xC38SMpzg9mUhSD6igDjP2YvGNj4+/Z9+H+radMksLaNb2sioQfLniRY5kOOhDo3HoVrhf2/vGth4P/ZZ8YRXcqLdawkWl2kJIzNJJIAcD1WNZGIHTbXztb/sh/tF/s263qMfwS8Zxah4avZfMW1uZIY2GRj95DOrR71Hy+YpywGQFHFazfsP/Fn4zabrniL40eM4te8Tx6TdQeH9HimxbQXUkTBHlKKqRqHCnbGpBIQsSq7SAer/APBNH/k03Qf+v68/9KHr6lrxP9jv4Pa98CfgbpnhLxG1m2q2t1cTyfYZTJGQ8jMoDFV9q9soAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z");

},
44074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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Hci6R8YviHprkefeT2GvDGMeVNZrZL+O/TJRj2HbFfRZIv8AZsY+1Nf+naaf4XMavxR9f0O+ooor502CiiigAooooAKKKKACiiigBkUIiHVj9afRRVSk5O8gCiiipAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAE+8v1FFCfeX6iivfyn+G/X9DGQP95vqaKH+831NFeLW/iP1f5mkQooorIoKKKKACiiigAooooAK8/8cQnwT8T9C8SDcLDVIf8AhHdVZB0Z5Vewmc9diTPPAAozu1EMfkQlfQKp63o9v4i0m5sbyGC6s7yF4J4JkEkc0bjayMp4IIJBB9a9bJ8fDC1n7VXhJOMl3i1+adpLtJJmdRXRcIoqlo2kpommW9qk11OlvEkKyXEzTSuFUKC7sSzMQBliSSck5Jq7Xm1IxUmoO66Pb8Co36hRRRWZQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAn3l+oooT7y/UUV7+U/w36/oYyB/vN9TRQ/3m+porxa38R+r/ADNIhRRRWRQUUUUAFFFFABRRRQAUUUUAGKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKABPvL9RRQn3l+oor38p/hv1/QxkD/eb6mih/vN9TRXi1v4j9X+ZpEKKKKyKCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAE+8v1FFCfeX6iivfyn+G/X9DGQP8Aeb6mih/vN9TRXi1v4j9X+ZpEKKKKyKCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKM1yvjHxncQX8Oi6NFFd69dR+cEkz5FjAWK/aJyuCE3KyqgIeV1ZVwqySR92BwNTFVPZ0/m3sl1bfRLqTKSSuzqdwpar6faNZ26rJIJpQoDvt272HUgdgTk49+9WK5akYxk1F3XcadwooorMYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAJ95fqKKE+8v1FFe/lP8N+v6GMgf7zfU0UP95vqaK8Wt/Efq/zNIhRRRWRQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUm6gBaYJM1meLPGOn+CNGbUNUuobKzVlj3yk5kkYgJGij5nkYnCooLOxCqCSBXMGHW/irhpf7R8K+HQuTGshg1fUgezMpzZxleyn7QdwybdkZW9rA5LUrQ+sVmqdL+Z7ekVvJ+S26tLUxqVEnZbk+v/EG88R6nPo3hfy5L21Yw6hqUkRktNHbuhAI865xz5Kn5AQ0hjBQSb3g3wZa+CtNmgtmmuJrqX7Rd3dy/mXN9MQFMsr4G5sKqgABURURFRERFteHvD1n4U0eHT9PtbexsbVPLgt7eMRxQoCSFVRwBzV7GK0zLNKbh9VwScafW+8musv0itF5u7bhHXmluFFFFeCahRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAJ95fqKKE+8v1FFe/lP8N+v6GMgf7zfU0UP95vqaK8Wt/Efq/zNIhRRRWRQUUUUAFFFFABRRRQAUUUUAYfhzxvZ+JdT1DT18y11LS5ClxZ3A2TBNxCzqP4oXxlZFJUncpw6Oi7PnZrE8YfDvSfHi2p1S1WaawZntLmOR7e7smYAMYZ42WWIso2kow3KSDkHFYS/Dzxfocm3S/HX2qFv4fEGiRag0fsr272rEYwMuXY45Y19JHB5di0nRq+yfWM1Jq/92UVLftJK23M9zLmlHRq53I570ectcOnhz4jbMf8ACYeCfcjwfdAkcY66off17Ui/CzWta3f21488RXEcvyy2mlQ2+mWzJ3VXVGu0zz8y3IYdip5qZZLhaetXFw/7dU5P5e4l98kJTfZnReL/AB9o/wAP9NjvNd1bTtItpnEUUl3OsQmc8hEDcu55wq5J9K5q48c+JPGjbPDugNpdmcj+1vEVvJAMesVjlbiQgggiY2w7qzgjOx4P+Evh3wHeteaZpsMepSqUl1GZnur+dTjKvczF5mXgcM5AwPSukVCDya0+vZZhdcNTdSX809EvNQV9fWTj3iPllL4tDlPDfwls9G1ZdWvLy917xAqMg1O/ZWktwwwy28ahYrdSMAiFFLgAuXb5q6t491OxRXj47MsRi589eTb6dkuyS0S7JJJFxioqyCiiiuEoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAT7y/UUUJ95fqKK9/Kf4b9f0MZA/3m+poof7zfU0V4tb+I/V/maRCiiisigooooAKKKKACiiigAooooAMZpN3FLRQJq43b/nFOxRRTu2MMUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAT7y/UUUJ95fqKK9/Kf4b9f0MZA/3m+poof7zfU0V4tb+I/V/maRCiiisigooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKABPvL9RRQn3l+oor38p/hv1/QxkD/eb6mih/vN9TRXi1v4j9X+ZpEKKKKyKCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAE+8v1FFCfeX6iivfyn+G/X9DGQP95vqaKH+831NFeLW/iP1f5mkQooorIoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAT7y/UUUJ95fqKK9/Kf4b9f0MZA/3m+pookPzN9T/OivFrfxH6v8zSIUUUVkUFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAJ95fqKKEPzJ9RRXv5T/Dfr+hjIsPZqGb73BNJ9kX3oopTpx5np/VyVJh9kX3o+yL70UVPs49h8zD7IvvR9kX3ooo9nHsHMw+yL70fZF96KKPZx7BzMPsi+9H2Rfeiij2cewczD7IvvR9kX3ooo9nHsHMw+yL70fZF96KKPZx7BzMPsi+9H2Rfeiij2cewczD7IvvR9kX3ooo9nHsHMw+yL70fZF96KKPZx7BzMPsi+9H2Rfeiij2cewczD7IvvR9kX3ooo9nHsHMw+yL70fZF96KKPZx7BzMPsi+9H2Rfeiij2cewczD7IvvR9kX3ooo9nHsHMw+yL70fZF96KKPZx7BzMPsi+9H2Rfeiij2cewczD7IvvR9kX3ooo9nHsHMw+yL70fZF96KKPZx7BzMPsi+9H2Rfeiij2cewczD7IvvR9kX3ooo9nHsHMw+yL70fZF96KKPZx7BzMVbRcr97qKKKK9LARjyvTr/AJCbZ//Z");

},
689970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
603456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
185531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
237860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439979-11b0aadd06db4718d96007e2e6f80300.jpg");

},
796756(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479943-802fb410835056e89ef46854b8da40b6.png");

},
927791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440025-12205b8c964bff8a4d3f7a9e9f1fe729.png");

},
489513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440029-12439abe3f119c6c23adb82fe0ef18f5.png");

},
792865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
624063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959994-95bcdfa924155b3938d90d90e25cea2a.png");

},
106063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACmAWgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9iGfEjfM3U96Tf/tN+dK/32/3j/Osvxf4tsfA3h681bVJWg0+wiM08iRPMyqMD5Y0DO5JIAVQWJIABJFf4JpYitX9lSbcm7JK9229l5n6h7qV2ae//ab86N/+0351w3/DQ2gD/mH+PP8Awh9c/wDkOj/hofw//wBA/wAef+EPrn/yHXp/6v5z/wA+an3Mj21Hujud/wDtN+dG/wD2m/OuG/4aH8P/APQP8ef+EPrn/wAh0f8ADQ/h/wD6B/jz/wAIfXP/AJDo/wBX85/581PuYe2o90dzv/2m/Ojf/tN+dcN/w0P4f/6B/jz/AMIfXP8A5Do/4aH8P/8AQP8AHn/hD65/8h0f6v5z/wA+an3MPbUe6O53/wC0350b/wDab864b/hofw//ANA/x5/4Q+uf/IdH/DQ/h/8A6B/jz/wh9c/+Q6P9X85/581PuYe2o90dzv8A9pvzo3/7TfnXDf8ADQ/h/wD6B/jz/wAIbXP/AJDroPBPjnTviBokmoaZJcvDDcSWsi3NnPZzQyxsVdHinRJEII/iUZ4IyDmsMVlGaYak69enOMVZXaaV3sVGpSk7RZs7/wDab86N/wDtN+dLRXke3qfzP72acqE3/wC0350b/wDab86Wij29T+Z/ew5UJv8A9pvzo3/7TfnS0Ue3qfzP72HKhN/+0350b/8Aab86Wij29T+Z/ew5UJv/ANpvzo3/AO0350tFHt6n8z+9hyoTf/tN+dG//ab86Wij29T+Z/ew5UJv/wBpvzo3/wC0350tFHt6n8z+9hyoTf8A7TfnRv8A9pvzpaKPb1P5n97DlQm//ab86N/+0350tFHt6n8z+9hyoTf/ALTfnRv/ANpvzpaKPb1P5n97DlQm/wD2m/Ojf/tN+dLRR7ep/M/vYcqE3/7TfnRv/wBpvzpaKPb1P5n97DlQm/8A2m/Ojf8A7TfnS0Ue3qfzP72HKhN/+0350b/9pvzpaKPb1P5n97DlQm//AGm/Ojf/ALTfnS0Ue3qfzP72HKhN/wDtN+dG/wD2m/Oloo9vU/mf3sOVArkyL8zcEd6KE5ZfqKK97Ka1Tkl7z37sylYH5Zvqf51wv7SfPwR176Qf+lEVd0332/3j/OuF/aS/5Ihrn+7B/wClEVLh/wD5HWH/AOvkf/SiajtTfod055ak2/Wl7t9aK8CTdzZITb7mjb7mlopczKE2+5o2+5paKOZgJt9zRt9zS0UczATb9a4f4KDB8Xf9jPe/+yV3NcT8F/ueLv8AsZr3/wBp17eX3eX4r/tz/wBKZnL4kdtRRRXhGgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAJ95fqKKE+8v1FFe/lP8N+v6GMgb77f7x/nXDftJf8AJENc/wB2D/0oiruW++3+8f51w37SX/JENc/3YP8A0oiq+H/+R1h/+vkf/SiKv8N+h3I6t9aKB1b60V8/Lc6QoooqQCiiigAooooAK4n4Mfc8Xf8AYzXv/sldtXE/Bj7ni7/sZr3/ANkr3cu/5F+J/wC4f/pRnP4kdtRRRXhGgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAJ95fqKKE+8v1FFe/lP8N+v6GMgb77f7x/nXDftJf8kQ1z/dg/8ASiKu5b77f7x/nXDftJf8kQ1z/dg/9KIqvh//AJHWH/6+R/8ASiKv8N+h3I6t9aKB1b60V8/Lc6QoooqQCiiigAooooAK4n4Mfc8Xf9jNe/8AsldtXE/Bj7ni7/sZr3/2Svdy7/kX4n/uH/6UZz+JHbUUUV4RoFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUACfeX6iihPvL9RRXv5T/AA36/oYyBvvt/vH+dcN+0l/yRDXP92D/ANKIq7lvvt/vH+dcN+0l/wAkQ1z/AHYP/SiKr4f/AOR1h/8Ar5H/ANKIq/w36Hcjq31oo7t9aK+fludIUUUVIBRRRQAUUUUAFcT8GPueLv8AsZr3/wBkrtq4n4Mfc8Xf9jNe/wDsle7l3+4Yn/uH/wClGc/iR21FFFeEaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAn3l+oooT7y/UUV7+U/w36/oYyBz8zfU/zrhf2kufgnrw9oP/SiKu6f7zf7x/nWT408I2fjzw1eaTqCyNY38flTCKV4ZMZByroQysCAQykEECscrxVPDZnTxFW/LCabtq7J3CUW4NI1mXk03atcSfgRpp/5mDx5/wCFTff/AByj/hROnf8AQwePP/Covv8A45VvB5Ze/wBYf/gv/wC2BSn2O22j1o2j1rif+FE6d/0MHjz/AMKi+/8AjlH/AAonTv8AoYPHn/hUX3/xyj6nlv8A0EP/AMF//bBzVOx220etG0etcT/wonTv+hg8ef8AhUX3/wAco/4UTp3/AEMHjz/wqL7/AOOUfU8t/wCgh/8Agv8A+2Dmqdjtto9aNo9a4n/hROnf9DB48/8ACovv/jlH/CidO/6GDx5/4VF9/wDHKPqeW/8AQQ//AAX/APbBzVOx2vy+9cX8FPu+L/8AsZ73/wBkpP8AhRGnf9DB48/8Ki+/+OVu+BvAlj8PtGmsdPa8kjnuZbuWS7upLqeaWRtzu8kjFmJ6dcAAAAYro9pgcPgq1KlVc5T5bLlstG29eZ/kHvuSujbooor5s2CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKABPvL9RRQn3l+oor38p/hv1/QxkD/eb6mjFD/eb6mivFrfxH6v8zSIYoxRRWRQYoxRRQAYoxRRQAYoxRRQAYoxiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAE+8v1FFCfeX6iivfyn+G/X9DGQP95vqaKH+831NFeLW/iP1f5mkQooorIoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAT7y/UUUJ95fqKK9/Kf4b9f0MZA/wB5vqaKH+831NFeLW/iP1f5mkQooorIoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAT7y/UUUJ95fqKK9/Kf4b9f0MZA/3m+poof7zfU0V4tb+I/V/maRCiiisigooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKABPvL9RRQn3l+oor38p/hv1/QxkSPYyGRvu9fWgWEh/iX8zRRVVMHS5np18+47h9gk/vL+Z/wo+wSf3l/M/4UUVH1Sl2/MLh9gk/vL+Z/wo+wSf3l/M/4UUUfVKXb8wuH2CT+8v5n/Cj7BJ/eX8z/AIUUUfVKXb8wuH2CT+8v5n/Cj7BJ/eX8z/hRRR9UpdvzC4fYJP7y/mf8KPsEn95fzP8AhRRR9UpdvzC4fYJP7y/mf8KPsEn95fzP+FFFH1Sl2/MLh9gk/vL+Z/wo+wSf3l/M/wCFFFH1Sl2/MLh9gk/vL+Z/wo+wSf3l/M/4UUUfVKXb8wuH2CT+8v5n/Cj7BJ/eX8z/AIUUUfVKXb8wuH2CT+8v5n/Cj7BJ/eX8z/hRRR9UpdvzC4fYJP7y/mf8KPsEn95fzP8AhRRR9UpdvzC4fYJP7y/mf8KPsEn95fzP+FFFH1Sl2/MLh9gk/vL+Z/wo+wSf3l/M/wCFFFH1Sl2/MLh9gk/vL+Z/wo+wSf3l/M/4UUUfVKXb8wuH2CT+8v5n/Cj7BJ/eX8z/AIUUUfVKXb8wuH2CT+8v5n/Cj7BJ/eX8z/hRRR9UpdvzC4fYJP7y/mf8KPsEn95fzP8AhRRR9UpdvzC4fYJP7y/mf8KPsEn95fzP+FFFH1Sl2/MLh9gk/vL+Z/wo+wSf3l/M/wCFFFH1Sl2/MLh9gk/vL+Z/wo+wSf3l/M/4UUUfVKXb8wuH2CT+8v5n/Cj7BIP4l/M0UUfVKXb8wuCWMgkX7nX1ooor1svwdHken59iJM//2Q==");

},
968991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
959661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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v42/+VVH/Dp//gph/wBGI/tUf+GX8bf/ACqr/WhwPQflRgeg/KgD/Je/4dP/APBTD/oxH9qj/wAMv42/+VVH/Dp//gph/wBGI/tUf+GX8bf/ACqr/WhwPQflRgeg/KgD/Je/4dP/APBTD/oxH9qj/wAMv42/+VVf2Rf8GxX7MH7Qv7MfwY/an0f9oX4K/E74Maz4t+Jvw71Lw9pnxK8G6x4Pu9Y0vTvDWqx3uqabFrUFp9r060uDbWlzdRkpFcXcceCwwf6f8D0H5UoOM4VQcrgxpHA4QEOyGeNbeYq0iq7KZJAzqCxY8kAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z");

},
246624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
456277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
514398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479995-f0651e5096dc172faf5df603ecf04ce1.png");

},
671254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959940-8cdfa0d860941f61f4f2c2b8bb401b92.jpeg");

},
619662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479961-1f5eb8c7bf20e2e81a242553cf724683.png");

},
206684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
804954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479941-b6c083bc703059ae96445acead7afcd2.jpeg");

},
758471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440043-de93a08ea243ea758054e27b00687b90.png");

},
164010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAA6CAYAAAAeGW/KAAACeElEQVR4Ae1bTW/TQBAd20UQO+ktiDNHKvUGSAhUfml7quAfpfwAInHgjNYOemjW2ThUztZZN96N9A5PVrz+GD2/2ZnZzEqDEsTxHIiftCphUtW2ePb1EFehhmJhYTCHQ4M5YsKgRIdqa1drr18Axyvqqef1EKfGXeLh1zVW669YrW92+PHzBjHxsP6C1Ra/cWXtNPYjT6+8A8RVeFEKilyQ54JsiyITxIS1oxBkheD2+zsYvIHBS9QR5ule4lSmxUyQy/8QEcREtmfP7f17GCyt6yZFXE7ivIHxoOJInD+geIlT14jpmr53391/QI1llPlNp7KzJq7B0utOT6UUY8ZJXGBEjkbc2GlAXZWKC5hLSVwAaRo0SNyzEKclV1dHb7CAwp1zv/ePOrZ/jbvWf+xKu2hznC/VGDJGxT2L4vzJ6pi049C9VBzTkWlVR8Wdm+KGBADfNQwODA7TrqRQcVQcFWfXuHQFeOwKhm9yHztGV6Wr0lXpqgOSYlYOA0jqK/RJHIljkT/ov1ymI0xHmI4wHRkQMBhVB5DEdCSQJBJH4vhP/qCcrW8JKsE8boYGr2wP8G49LhOIIjDnOsV9JC7wYyRK3AwXlSAvBKK4aKFt8qng7tsVGrxOpyNTW991g4jBNQw+4g8+72DwCamgxls0uNxuS+q6iPpSh1Oce5QAt1uRDBZ2u09tDevapf6iRArYoIKisa1cSp7aOC15PcTp3i1VXGtYjTkcTvHlQp65QQlF28umxDnlTbe09Ig492Jt0nOGuXOpHl1D4bT2HSBuWiNCVBf7HhIXWIaROBI37fRCxVFxVFy0MuqYSE1XpavSVc/CVf8BStaYviwvHN0AAAAASUVORK5CYII=");

},
311709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAClCAIAAAAbPWIZAAACtUlEQVR4nO3c0WoTQRhH8f+3SVqKFumd7+BjCD6y4EMJYsXUNDufF9JSMalQTU6N53cxhM0sM+RkYa+muiPQRG/gf2cAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZALbcfbnTVdU1V43Mx93SM9KpRc4703K+yOLjIZbYE2C+7OWX5PXl+Wa9+ZRKOj+NyY6LJzitk9uczR/ev3n39pgBFteV6qzXm3mR89GZktGp3G397kPfffVwPKFpPeVmu3lVt0/7eX9vd4Cuql5VrpPVXOtU5k4qvevvM/8yns60MY1UFp9vl+ujBqiuUdukM20z7rb7cMyuiyc4bUy5GL2e+v6ev8y3IJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQC279TEMY2z1MhYpm6OvKdnpKdR61S6DrXC7iegOj1t51xldfNj6Z0bqD3j6UyrMfUi88U09hyw+sf2nZz7opdfxybnty+3+ZaMPfu/18l0itN6kbFdrafN1aP3Pl09diBmH/DR+3dUkuopdZAztB8NoMPzLQhmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQBmAJgBYAaAGQD2HdCMPr1A2QIeAAAAAElFTkSuQmCC");

},
543334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440003-faedf1f7c41e98b2bada95c797117743.png");

},
783456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800294-d2341c817b8256208703716bb56e5692.png");

},
229632(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800316-6748a7d30ee9a35b35d1bfcaed79061d.png");

},
604952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
805504(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
924719(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
342090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
912864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABRCAYAAADctfi9AAAER0lEQVR4Ae2cPWsUQRjHZ+8SvbtN1CBKiCQRJIIoiEERtLURBAtrK3tLK7H1QwiCjUVIY6mQ76HfILUBc2/hL89uHm4yN7vMZndM7vwXw+zO2909v/nN7By5mBFSMM1mDAzBzSY44WZG6IFpNmNgxuiBaTZjQPNmeOUhvP8D3hJGkOTuD7LhS7nkUreULcPT7dx+vK8bowDzuhijiyOkOMIyhljBAD0MM2B53TgDlmIMSVIn7dKsnbSt+ybZ3x/DAHg5EIHy5q3Bl69PsPt9A7s/ruA3tnGAuxjgFoa4ihFWMELnBDiByOD7g183LgHwejjKnkhTLPYMjJGUwCQGC4sGCxcMnr80ePHK4N2HFn7uP8av/Yfo4w4GuIYBOoQXafUJgKeH2BUkXYU3nSfGIEttg5akRYP7jwzBRQIn1gbAkz0sRR+raF8UaK2CNAGamDYSs4Bve8+sB5k4S0fdpWeW+wfAS4/3sEtopxNA+fLpuU9y80zL4ACvMcJl2hfJvmB48nTZSQ3aLYNWYrC2YbB+22Bja5I2twzef7yBTzur+LxzHYd4QPMigQtcNuUMt4wRuhhgG308PU738AebOMTNLPWxiT7W0cfaMbBOdsSQY8YsL03n+b0HmGfvVXogz48Dk4O5fDcoh3NJAk2WWj3U+w729pi8Pu0EqQhP9y99Ap2c4cSwPC1nef6tiwIkoNMCKutXER4hlAXzX9cRXsQHitgwCY/wuJzGtsw3Ps2jeTTPZ0bsMppH82hebMt849M8mkfzfGbELqN5NI/mxbbMNz7No3k0z2dG7DKaR/NoXmzLfOPTPJpH83xmxC6jeZHMq/ubxxDwhHfG8EIgFbUhvDOGN8x+VSV/lX4yFQGzywkvIjw70EXX8hM4XxKYRX20nPACgqTBqpLLnlfU3t4PXeP0vqivXU54JUG2A1X1OhRe1XHt9oR3juCpdSFLpkCsDM83cNUXtWfPvF4XmWcvmW6bqnGsDG9eg32az6UgpK8Lomg87RPa3h5H+2oZ4dVYNu1ghsLQPqHtFZTk2lfLCI/wih+LdZbMY26bUGSS3aZuDNyxaF4k8zTQmtcFJ/3dsQgvEjwfLA2+5r42ZWVuP8JrCJ4EPf/PUNNbiBwB9CuwMjhV6wgvEjyFpUD1viqgsvaER3jTS0XZjJmXOt2DNFfL5PP5vi2RMvezq5GS23W61Npl7jXNc4LmBqjsXqFpbsOz+0m9fW9fE15JcOxANX2t0DRX29zXIbwzAuSCsO8Vmi+325VdK3B3SdXysr5cNs/hpCgDZtcRHuEVb8j2TOF1s3GieTSv2RlFQ8PiSfNoXthMoVHNxonm0bxmZxQNDYsnzaN5YTOFRjUbJ5pH85qdUTQ0LJ40j+aFzRQa1WycaB7Na3ZG0dCweNI8mhc2U2hUs3GieTSv2RlFQ8PiSfNoXthMoVHNxonm0bxmZxQNDYvnX1kPYJloUXGyAAAAAElFTkSuQmCC");

},
802337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAC3AU8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+qiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACjOP8e3+f8AIor88/8Agpx+3H/wwB+zM/xr0zQtG8Y+MNU8c+FPBPhHwhrt1f2Wma1qWr3F5f6rFNdaYVu4WtPCOh+IL+CWJ5BFfxwG5ikjkhtZfquCODeIfEPi3h/gfhPBf2hxHxNmVDKsmwXtaVBYnH12/Y0Z1q8oUaVKbi/a1KsowjC7kznxWKo4LD1cViJOFGjHmqSUZSaV+iim2/0ufoZ+I64/H0+p6D1PSiv50PgN/wAHJf7JfjyTTNM+OPw5+JXwH1WeLF3rFvFa/EvwDCzLtjEuqaHBpfi62jmkZDDM3gyWNMyC6vEhCu/7WfBL9rD9mr9o/TIdU+B3xw+GvxHEsQkl0rw/4q0uXxRYbk8wRav4Qmnt/FOkXaoQzWeo6NZ3Cr8xhxmv0vxL+jP47+ENSVPxB8MOLcjw0JyUc3eU1sXklblTlJUc1ymOMy6aWrj7XEUrwSk9WkcuDzrKswivqeMoTslo5qFWV7fFTnaSflbY+g6KOu3p83Tn0AJ4IBGQc8gY5zjBwf5/z/Svwzldk7PVtJKMnJyTs48iXOmno043TPSTT6q3e6/zv17BRRnnH+fSil5rVd7eXnqGtr2dvMKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVwPxF+Ffw1+L3h258JfFPwF4P8AiJ4YvGSS40Hxp4b0fxLpbzRxvFHcC11izu447mOJhFFcxBJoYl8uF0SWdZe+orqwWOxuW4zDZhl2OxmW4/B1Y18JjsBiKuExmFrw/h1sPiaEo1aU4N35oSi2rpu2gnGEvdqQVSD0lCWsZLs11/zPwy+Pn/Bvl+wN8XpNR1TwLpPjj9n/AF+9Es0D/DfxLJqHhVL+RHzNP4P8ZjXbKzsVYQgadoF/4cstvmRwmzDyvJ+KXxx/4Nx/2xPhdqA8S/s5/EnwN8Z7WwuPtOlxf2ld/B/4kWk8cgltZrOHV7u88LpPCF8x75vHdhPBceWbWzZA00f9vVFf2f4aftCPpS+G9CGWUeP58ZZBCnSoy4d8QMFS4py2pQpRhH2Ma2Nl/aNOM4ws/Z4yyv8Aw7pM+dxnCmS4yTm8NLDVb3VbCTdGfN0ei0/HY/gR039uT/gs5/wTkvP7F+Kl58X7Twrazrp/9jftE+Ebr4ieB72WMlYrPRviDqQnvvJzEWt08J+OLe1vARcESrtZf0x/Z+/4OcfDl0dM0r9qD9nrUdGclYNS8Z/BfV4tXtBIzbVuf+EE8X3un3NnaKWDXPleONXu1VJHtbS8kkS3X+q3VNJ03W7C60vWrC01bS72J4LzS9Qtba9069gkUrJBe2d5DcwXUMg+WWGRPLdMqFXJJ/NH49f8Ec/+Ce/7QP2291v4DaJ8PfEt7byQHxZ8GZB8M9SikdSv2s6NosL+Cr67XJYXOq+FL+Z3w0zSlVx+6x+lp9DjxovQ+kP9FfA8L51jIXxnHXg5Wjk+Io4i9vrOIy2NTAPFOcpTqShWqZlC3JH2LaZ5T4dz7Ln7bKc6VWEdFQx8XOS1WilreNrXb63+fb/AH/gql+wN+0j9mtPh5+0b4LtfEV1LBBF4R8ezS/DTxHJeT4EdlaWHjqDRv7WuWlZIk/sCbXLeaVlhgmkndFr9BY3WWNJUZGjdVdXQkoVkXehBPXevKk439QByB/IP8e/+DY3xRax3eqfs0/tHafrqh3a08I/Gjw8+jXps97BYP+E48HQahaajerFth2HwRpsdyyMrzxoAkn59zfCn/gtr/wAE27qa68N2n7Q3h3wb4cjuHNz4C1R/jT8Gm0yMtJLqc+g6ZL4z8KaZYyRQef8AaPEWhaPqNrbcOLFmeNZf0M/oveMcHX+jb9Kvh/B5rXV6HBPi7h45BmqrJxUsNDMKiwE6kk5Rio0cuxDafNzOy5n/AKx5zl7UM6yWu4prmxGCn7WCTteThFPS13rbXS9tv7/+MEn+EBm/2VPRjwQAfUlR754pK/jA+A//AAcufH/walhon7R/wR8D/FKK2aOG+8TeB7/Ufhp4wVTIvmz3OmXlr4k8LXV+se5mg06z8LWtwvkQA20hkmm/bL9n7/gux/wT0+Oqw2Oq/E3Uvgb4jkaJP7E+NOjSeG9OMjoC7R+NdLudb8CxxKxwP7S8Q6bdygMRaNtJH8+eKH0CfpR+FcJ43M/DLMeI8itOpT4i4KqUOKMpq0INfv2sseKzLD0pQ/eKpXwdGCT1mrO3r4HijJMdpHGKhUdkqOJj7KfNp7t5WV30s30XXT9jaK5fwj438F+PtGs/EXgTxb4Z8aeHdQRXsNf8Ka7pfiDRr1HUPGbXUdJu7y1uC0ZD4ilcqMh9rhlHUf5x3+n19R1HfBBx/IONwONy7ETwmPwWLwWJpznTlh8ZhqmGrqUG1NOjVjGqnCSlGSlCLTi9ND3oyjOKlCSlGSupRakmvVXQUUZ/nj+n8+KK5LNbpr1Vt9Lq9rq7tdXVyvu1139P80FFFFH/AA9lq16pXt87AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFCS5lK13F3i9dHpr57dRNX32A8nJ5J6k8k8nqTyep/AkdCRSYHoO3YdsY/LAx6YHcUtFWqlSLUoTnCUWnGUJSi4tNPTlaV9Lc1rpPcb1Tj9l7xbbT23ve602eh8hfHr9gf8AY4/aa8yX41/s7fDXxhq8qFH8Vx6JH4c8aGPnbD/wmnhd9G8UrFGxaRI21WaAMzEQAklvxK+P/wDwbOfAnxMl/qn7OHxs8bfCvVpZZri08NeP7C2+IfhBQzlotNg1K3n0LxZpttGoWKPUry88T3KjdLJYu22Mf05UV/Qvhj9K/wCkL4PzpPgPxX4vyrBUXBLJMRmNTOMhlGGif9j5v9cwMJNXhKdKlTm4aXvZry8bkWT5ioxxWBw76OdGmqdfdaqcUveTet9Lep/Bd4r/AOCS3/BW39h3Xp/G3wGPirxFb6dBLcHxX+y18S9cOrXNtEfNNnqPgt38NeM9VSRUUT6dD4b1ixvG/dRTOSErovhZ/wAF7P8Ago3+zlq6eDv2gfDmi/FT+zblF1DQ/jB4Huvhz8RbW2VsSae+q+HLHw5Pa3Q2SJ9r8ReGfEF7C5kS6S8eMJF/dgCwBUM20kNtzlQ4OVkQHOyRWAKum1gQMGvL/ij8E/g98btFfw98Yfhd4A+J2isZGXT/ABx4T0TxJb27zLsklsl1OyuPsFw6AK1zYm3uCBzKSST/AF1hf2hvCviLhaWVfSe+jV4ZeKuHlCNKvxRkWAo8L8VwX/LzFU8ThqddTrJuU/ZYapgHKc5ScraP52XCWJwk/a5LnGLwPLpGjXlPE0umrj8KWqXXa/U/Dn4B/wDBx7+xp8RZrLSvjN4P+JfwB1i4gUXOpahYR/ETwPFeABFgTXvCMMPiVUErFoZJ/ACQMkUhuJQ2yKT9pPg5+0z+z3+0NpUOtfA/4zfDn4oWU0PntH4R8V6RquqWSFVYJq+iwXTaxo1yu9VmtdWsbG4gkJjmhifKj8hvj1/wbv8A7CvxVfUdS+Gn/Cwf2f8AxBeJJLbjwf4gm8T+DYb1iJDNJ4W8dvq88dh5ksoXSdA8UaFZxokUGnrpajB/GL4zf8G737cfwc1WPxX+zp498GfGWLSpUutEu9A8RS/CP4m2N5bsZYpINN8QXttosDI6RG2u7Lx5dXJmADwQKglfq/4hL+zn8cXGfhx4x8XfR34jxScKWQeJWCjmnC9DFvSFBZrUxMKVHDylJJVJZ45JRvyTk2T9e4syxP63gKObUIW/2jCT9nVa01ad1Lzioq/ySf8AcQFJBYMjrjcu1lcsg/jCx7nIbBCkLh2BEZek/wDr/p/n8e1fwKaR/wAFD/8AgsX/AME+NRtvD3xhn+JkmjW149ta6H+054E1Lxbol/cIQLiPRviHfrZ+JtSgkWLEP9hePLjTZYV3xJNDIGb9Sf2fv+Dm7wBqrWGlftN/ADX/AAdK8Cx3vjH4Q6tbeKtKN4yqq3cvg7xLc6LqumaczF2uIrXxH4i1CFVX7LFdsTEfgeOf2aX0hsgy6WeeH0+E/G3heS9rh868Ns8weYYqpRWsYyyytOjiaykk5KFB16jekPaJXO3D8Y5VVahilXy6u7c1LF0ZU4p6aRqX5ZX6OyR/VFRXwl8Af+CmH7Df7S7WVv8ACr9ovwFca5qDxW9v4N8W3k/gHxnJeTFQtpZ+HvGdtoeoarKHdIQ2kx6jFPOSkErcCvu0FWAK5IO4DpyR2GCVPOR8rMvbdkHH8N8VcDcZcDY6plnGXC3EHC+ZUqkqU8Bn2U4vKsWpRbX7uhi6dOtXTadnCiouztJn0mFxeFxaTw9elWvsoVY3a7rTtt3+dgooHzEgAkjg8dPrRn05+n+e3SvlLpPkd1PdJ/ajp78dNFdpWeuqN/VOMuqk1+nm7BRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiikoxi7xUUk01aCWum9nr39drDWn2pecdovbfr0MnXNB0PxPpV7oPiTRtK1/RNRiMGoaTrWnWeq6dewH70NzZahDc2k8T9HjmgkVhjgYr8vP2gf+CLH/BPT9oJb+6vfgpa/CjxJfq2fFXwRvB8PL23mY7/ALXD4esrW58CzXRlaWSd7/wnerciVxIgZLeSD9WaK/QeCfFXxJ8OMdDMeBOOeKuE8VGUG5ZHnWMwEJKDTTnSozVGrBWvKlWpVISt7zexx4nL8Di01icJQrppq1WnGSV7d73269dT+On49/8ABsd8QdJS41P9m79ojw34vg8yXyfCnxf0S78J6otsAxWGPxd4Uj17S9Sun+WJo7nwv4djZiZYZmXcI/hs6J/wW9/4JsGZ7e3/AGjfCngjQg8Ty6bMPjf8Ff7OhAkSdreKXx74I0S1ESpKkl5aaFqdhGYklSzkxAP7+SA33gG6feAPTpjOcY7eh5HNBAbcG5D53gkkPk5O4HhgTzg5Ff3Lwt+008YPqFHh3xp4Q8OfH7haUfYV6PG3D2Cp5pWo6KKoZnhMH7OGKirqVbEYDEOV1Jyck7/NYngzAc31jLq+Ny2sraYSrywbvfms2mu1lofxrfAr/g5l+MugHTNC/aR+APg74iW0DRWepeKvhjq9/wCAvEiwKxjnvJ/DOuJ4k8L6tqkRVy1tbaj4V06ZiILVdPRnB/bX4Af8Fxf+Cd3x4jhtLn4xH4LeJJyp/wCEb+N2my+DEjMm0Ls8WrJqfgNoo3kEQRvE8M+I2ItUjUY+pfj5/wAE6/2JP2mhPdfGP9nX4c6/rtyNkvizSdIl8G+NJV24iE/i/wAGXGgeILmO3kaWWFL2/uIYHkYxwFSyn8Rv2gf+DZf4Sa7Hdal+zT8dfFnw8vmmmmh8LfFGxg8d+H2DljHZW2v6MPDet6TbxHCR3l1YeKLxo8C4WRwXf6f/AFn/AGanjpyxz/hfj/6MnFWObVbHcO1XxHwhDEWaVWWElHH1sPBtpOnDLcJBR1vBJyjzujxhlv8ACrYTOKEff/e01TrcqtdJtJc+1rNu13vt/Tb4c8TeHfGOkWniHwlr+ieKPD+oQpc6frvh3V9N1rR762lUSRTWWo6ZdXVpdRyRsro1tLKhDD5hzjcr+CHxF/wTC/4LA/sCa3d+MPgafHeqafpcfnS+Kv2WvH+saxHqdsm6V4b/AMARNofjHWYQwDXGnX3gfVNPmlbCR3R3Fe/+EX/BwR+378A9Tg8J/tC+DPC/xjTSbgRatpvxB8KX3wt+JKQRyeX9hbWfDdlpVhZSgq4W91XwRq1yxB+1NcybGXz80/Zt5rxdgqmd/Rt8bfC/xxyqEXVjluFzjC8P8UQpys6Ea2BxEq2GjW5eWnOnVxWEftFK8KWxVLjOnh5ezznLMZl85NRVRQnUoJ+7717tyj292/qf3P0V+AfwG/4OL/2IPic1tpvxW0f4kfs+a26K0934h0dvHXgppWADWtt4j8GpdaxEkbscXOpeD9PR1UO80ZbYf2c+En7QXwN+POjReIPgv8Xfh18UNJliWVp/BXi7RNentctteHUbKxvJL3TLyByIrmwv7W2vbSX9zdQRzKy1/FXiV9Hjxv8ACLEVKPiP4Y8XcLRhOUPrmNynEVcqm4PlvRzjCRxGVV4Ss5KdLGSik1zNXV/psHm2WZgo/Usdh8Q5JPkhO04vTSUJWknZp7HsFFLjK5XnIBADKS6vkBkIJDbdjbgpJXjeAGXLQcgMOhAI4PGQDjnkEZwQeQeDzX41yyeqUpecYykl/iaVo/lpuj0Nt7rtdNJ7aJ7N+QtFFFSk3dpXS3aaa6ed+uumnUNe1gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo/rb+uwBRRRR0td27Xe+mr7vTd620vZsVlv/Xy7fIUHGcfxDa3YkDJAJGGwCScZxk8g14/8WP2fvgd8d9I/sL4z/CT4efFDS187yrbxx4S0TxE9qbgASvY3epWc95YztjJubO4hud7NJ5vmMXr1+ivUynOs4yLG08xyXNcxynH0WnSxuX4zEYTF0rbexr0KlOpDlu+VQkoq703FKFKrZVqVOsldclWClB7aNtbfPTS2zP5//j1/wbofsS/EcXuo/CLVviN+z9rdy0s1pbaDrTePfBcM7Bi6y+GfGUl7rSwPI26OCx8baNFbgIlvbvBGkSfjF8Xf+DfX/goB8BvEkXi/9n3xf4Z+MKaTKbzRdb8A+Mp/hd8T7J7ZPM89dM16/wBLsLG7QFY7dNK8cajLdybkjERVq/udor+1PDb9or9KLw+w9PK8ZxphvEPh1U6WHrZF4kZfDimliMLBxU8PVx+InSzSKlCNlKljeRJ6UXPmm/msbwlk+MbqQoywVZ/8vMFKVBq+rtytXd9bvXY/gc8N/wDBT7/gr/8AsF6pbeF/jbN451DTUuvJsvDn7U3w71XVVvZFKif+zvG9yugeMNRt/JjQRPa+MdQsYEgiazWNQskf6u/AH/g5l+EOvmy0r9pX4F+Kvh3dSxxQ3Pi34W6ra+PtAW7GyO5ub/w1rB8O6/o+ns5eaAWGoeKriOMGJxcsgd/6ZvEvhPwv4y0i68P+LfD2jeKPD98pS90DxHpdhrmh3qFssl7pep21zbXUbhYw0cyvkglnYgGvyt/aA/4If/8ABPH49DU76P4Qv8GfFGpLuHiT4H6kPA6W1wu4pNF4QktdW+H65J23Xl+E4p7xGcy3InYTr+yx+k99CXxobw/jz9GapwBnGKSp4rjXwYxzwLVZpQjjf7GhPLlLkUpSmsTQzKb5dIO94+csj4kyz38szb61RjqsPmEXUb2295tPpzdLtdT6f/Z//wCCiv7En7Tkdhb/AAh/aJ8A63r+oy+Rb+EdX1H/AIQzxpJdsyqttB4N8aQaB4ivXLnYhs7OWC5A861uJIm4+0/f/PQH+TCv41vjv/wbLfF3w+ZNU/Zv+Pfg/wAf20KTzxeG/ijpF94E19PJ/exxWniHQ5fEeiapL1Es95p/haxt2khWdws6uvxTJ4g/4Ldf8E2mmk1D/ho/wj4M0ZIoJE1mJ/jZ8GbayicfZjbXcj+OPBWh2cxBWGawvdHvWj/dyyxliGmp9CH6O3i0vrX0YfpV8JY/F1bOnwT4pqXDWft1L8lJYp4fB18TUUk4OUMpdO6UvaSi+eVLifNcJJLOMkrxW0sRgb16bSS972W8Ukl7t+/mf3/bh2IJyR17jBIxjOQCD360tfx2/AX/AIOa/iJo50zR/wBpb9njQPGEcWLXUPFfwl1q68J62oHl7rs+D/FDa3pup6i3zCWGHxL4aswzs0KFcRp+3PwC/wCC1H/BPL4+RWttB8b7D4UeJ7hljbwr8bLU/D24SYvtWJfE2oXFz4EnL5LIsPi6VwgJkWM8V/Nvif8AQX+lD4TqvieIfDDOczyehJtcQ8Iwp8V5PVoLVYmVXKnWq4Si4+8quNoUVytXp/afs4LifJMdONOnjFRqWs4Ymn7Hlel0+dx1V9099GfqzRWXomv6F4lsLbVfDut6TrumXkEVxaaho2pWWq2d5DOnmxT2t3p09zbTwyRFZY5BKTIr/uw2yYR6pHod3059cg9wVwA3oWXnrj+TMRhsRha1WjiMPXo1aU/ZzpVaVSnVpztf2dSlOKmqlruyjpFSeyue3CcZr3ZQmuk4P3dlpe9vx/MSiiisSgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKN/Xo+qd09AavZvVrr/XoHp7Zx/wACAB/MAA+1NZEdWV0VlcMGVlDKwcYcMCCDuHDZHPenUVcKk6c1VpuUaqslUi2qqWluSaalTaauuRpX1SuD13Xr5pdNdvlZ+Z8JfH3/AIJnfsL/ALSst3ffFP8AZu+H954ivYpFn8ZeFbB/APi+SY58ua98QeC5dD1HVpotxNqdWnv4IiCsts8Tsj/iN+0B/wAGyHgLVVuNV/Zn/aC13wtchpJo/Bvxi0WDxTpVyzD91bw+M/C40bVNMiiAYO934X8QTTB0Xzk2vIP6pqK/pPws+mB9JDweq4aHBfirxPh8tw6jB5LmuNlnuV1aUWl9XWXZw8XhYRlG0X7KFOXKtJJq55GP4fyXHrmr4GnOr/z8i40pLrZ2V27vV63vb1/gW1n/AIJ5f8FkP+Ceeqaj4r+DsXxUl0TTn33PiH9mLxzqfjLRdTgjfPm6r8PLEQeI9Sso2zK8Ou/D2W1hjBuXj8qNp4/3i/4Ig/tpftv/ALWl38cdC/akm0nWPDnwbsvCukWviDVPAY8DfEa78b+JrnVLtdN1eDSl0nQ7uw0jQ9HeS7ji8MWeqtLqGjXl3ez2ZuXr+ggFlwEYqFwVAClQcFSSjBkYsrENvVgwOCKhWCBGd0hijeVkeRo40QyOm0IzFVG4qAwUH5VEj7VB2FP1vxf+nBV8d/DfN+F/EfwR8LqvH2Np4anlnipkWU0sq4iwUaOIpVK3t4U5VJVamKoRqYaT+u0acPaOfI5RhbzsBw1HLMZTr4bMsdLCx96tl1ebqQqaJKMW0nBJ2fNr2u7ktFFFfwdtolJLopfFH+6/en8Pw/FLb4nufUL0S8ovmSXRJrey0CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==");

},
987585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
861821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
982933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439985-f8c820ef169140f3458c089434f5d34e.jpeg");

},
384358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
879982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959964-765cb0be51f21943e338d2d73cd1ddd0.png");

},
110230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
28103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479953-f734c698fc6e658e19aea73b06c138ef.png");

},
263805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
455068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479985-662dfeb2347ee0b0f8f9f55060da934f.jpg");

},
63398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
568717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800344-99dfdba31b1944458dfc1b46166ee93b.jpeg");

},
874195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800330-ea46d5f19f4d4644927a8494a77b850e.jpeg");

},
952997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479963-6f6caba617276b8a5d0a1b3e74fb8006.png");

},
335126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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