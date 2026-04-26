"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["448899"], {
954829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_canvas_comp_js_lite_components_canvas_canvasrenderingcontext_2_d_js_lite_components_canvas_canvasrenderingcontext_2_d_md_c8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-lite-comp-js-lite-canvas-comp-js-lite-components-canvas-canvasrenderingcontext-2-d-js-lite-components-canvas-canvasrenderingcontext-2-d-md-c8a.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_canvas_comp_js_lite_components_canvas_canvasrenderingcontext_2_d_js_lite_components_canvas_canvasrenderingcontext_2_d_md_c8a_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvasrenderingcontext2d/js-lite-components-canvas-canvasrenderingcontext2d","title":"CanvasRenderingContext2D对象","description":"使用CanvasRenderingContext2D在canvas画布组件上进行绘制，绘制对象可以是矩形、文本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvasrenderingcontext2d/js-lite-components-canvas-canvasrenderingcontext2d.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvasrenderingcontext2d","slug":"/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvasrenderingcontext2d/js-lite-components-canvas-canvasrenderingcontext2d","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvasrenderingcontext2d/js-lite-components-canvas-canvasrenderingcontext2d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CanvasRenderingContext2D对象","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-components-canvas-canvasrenderingcontext2d","kit":"应用框架","last_updated":"2026-04-22","slug":"js-lite-components-canvas-canvasrenderingcontext2d"},"sidebar":"ref","previous":{"title":"canvas组件","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvas/js-lite-components-canvas-canvas"},"next":{"title":"文件组织","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file/js-service-widget-file"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvasrenderingcontext2d/js-lite-components-canvas-canvasrenderingcontext2d.md


const frontMatter = {
	title: 'CanvasRenderingContext2D对象',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-components-canvas-canvasrenderingcontext2d',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-lite-components-canvas-canvasrenderingcontext2d'
};
const contentTitle = 'CanvasRenderingContext2D对象';

const assets = {

};



const toc = [{
  "value": "fillRect()",
  "id": "fillrect",
  "level": 2
}, {
  "value": "fillStyle",
  "id": "fillstyle",
  "level": 2
}, {
  "value": "strokeRect()",
  "id": "strokerect",
  "level": 2
}, {
  "value": "fillText()",
  "id": "filltext",
  "level": 2
}, {
  "value": "lineWidth",
  "id": "linewidth",
  "level": 2
}, {
  "value": "strokeStyle",
  "id": "strokestyle",
  "level": 2
}, {
  "value": "stroke()5+",
  "id": "stroke5",
  "level": 3
}, {
  "value": "beginPath()5+",
  "id": "beginpath5",
  "level": 3
}, {
  "value": "moveTo()5+",
  "id": "moveto5",
  "level": 3
}, {
  "value": "lineTo()5+",
  "id": "lineto5",
  "level": 3
}, {
  "value": "closePath()5+",
  "id": "closepath5",
  "level": 3
}, {
  "value": "font",
  "id": "font",
  "level": 2
}, {
  "value": "textAlign",
  "id": "textalign",
  "level": 2
}, {
  "value": "arc()5+",
  "id": "arc5",
  "level": 2
}, {
  "value": "rect()5+",
  "id": "rect5",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    color: "color",
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
        id: "canvasrenderingcontext2d对象",
        children: "CanvasRenderingContext2D对象"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用CanvasRenderingContext2D在canvas画布组件上进行绘制，绘制对象可以是矩形、文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <canvas ref=\"canvas1\" style=\"width: 200px; height: 150px; background-color: #ffff00;\"></canvas>\n    <input type=\"button\" style=\"width: 180px; height: 60px;\" value=\"fillStyle\" onclick=\"handleClick\" />\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  handleClick() {\n    const el = this.$refs.canvas1;\n    const ctx = el.getContext('2d');\n    ctx.beginPath();\n    ctx.arc(100, 75, 50, 0, 6.28);\n    ctx.stroke();\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(490978)/* ["default"] */.A) + "",
        width: "230",
        height: "230"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fillrect",
      children: "fillRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "填充一个矩形。"
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
            children: "指定矩形左上角点的x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形左上角点的y坐标。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(598629)/* ["default"] */.A) + "",
        width: "148",
        height: "109"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.fillRect(20, 20, 200, 150);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fillstyle",
      children: "fillStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定绘制的填充色。"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置填充区域的颜色。"
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
        src: (__webpack_require__(528673)/* ["default"] */.A) + "",
        width: "116",
        height: "75"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.fillStyle = '#0000ff';\nctx.fillRect(20, 20, 150, 100);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "strokerect",
      children: "strokeRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制具有边框的矩形，矩形内部不填充。"
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
            children: "指定矩形的左上角x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(257305)/* ["default"] */.A) + "",
        width: "142",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.strokeRect(30, 30, 200, 150);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filltext",
      children: "fillText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绘制填充类文本。"
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本的左下角x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要绘制的文本的左下角y坐标。"
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
        src: (__webpack_require__(266092)/* ["default"] */.A) + "",
        width: "172",
        height: "68"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.font = '35px sans-serif';\nctx.fillText(\"Hello World!\", 20, 60);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linewidth",
      children: "lineWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定绘制线条的宽度值。"
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
            children: "lineWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置绘制线条的宽度。"
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
        src: (__webpack_require__(152216)/* ["default"] */.A) + "",
        width: "89",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.lineWidth = 5;\nctx.strokeRect(25, 25, 85, 105);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "strokestyle",
      children: "strokeStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置描边的颜色。"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定描边使用的颜色"
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
        src: (__webpack_require__(631439)/* ["default"] */.A) + "",
        width: "129",
        height: "94"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.lineWidth = 10;\nctx.strokeStyle = '#0000ff';\nctx.strokeRect(25, 25, 155, 105);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stroke5",
      children: "stroke()5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行边框绘制操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774354)/* ["default"] */.A) + "",
        width: "27",
        height: "96"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.moveTo(25, 25);\nctx.lineTo(25, 105);\nctx.strokeStyle = 'rgb(0,0,255)';\nctx.stroke();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beginpath5",
      children: "beginPath()5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个新的绘制路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(371370)/* ["default"] */.A) + "",
        width: "185",
        height: "35"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.beginPath();\nctx.lineWidth = 6;\nctx.strokeStyle = '#0000ff';\nctx.moveTo(15, 80);\nctx.lineTo(280, 80);\nctx.stroke();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moveto5",
      children: "moveTo()5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径从当前点移动到指定点。"
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
            children: "指定位置的x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的y坐标。"
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
        src: (__webpack_require__(833959)/* ["default"] */.A) + "",
        width: "205",
        height: "131"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.beginPath();\nctx.moveTo(10, 10);\nctx.lineTo(280, 160);\nctx.stroke();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lineto5",
      children: "lineTo()5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从当前点到指定点进行路径连接。"
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
            children: "指定位置的x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定位置的y坐标。"
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
        src: (__webpack_require__(248212)/* ["default"] */.A) + "",
        width: "194",
        height: "128"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.beginPath();\nctx.moveTo(10, 10);\nctx.lineTo(280, 160);\nctx.stroke();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closepath5",
      children: "closePath()5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结束当前路径形成一个封闭路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533367)/* ["default"] */.A) + "",
        width: "93",
        height: "74"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.beginPath();\nctx.moveTo(30, 30);\nctx.lineTo(110, 30);\nctx.lineTo(70, 90);\nctx.closePath();\nctx.stroke();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "font",
      children: "font"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本绘制中的字体样式。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体样式支持：sans-serif, serif, monospace，该属性默认值为30px HYQiHei-65S。"
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
        src: (__webpack_require__(131775)/* ["default"] */.A) + "",
        width: "141",
        height: "48"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.font = '30px sans-serif';\nctx.fillText(\"Hello World\", 20, 60);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textalign",
      children: "textAlign"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本绘制中的文本对齐方式。"
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
            children: "align"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选值为：  - left（默认）：文本左对齐；  - right：文本右对齐；  - center：文本居中对齐；"
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
        src: (__webpack_require__(551655)/* ["default"] */.A) + "",
        width: "235",
        height: "94"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.strokeStyle = '#0000ff';\nctx.moveTo(140, 10);\nctx.lineTo(140, 160);\nctx.stroke();\n\nctx.font = '18px sans-serif';\n\n// Show the different textAlign values\nctx.textAlign = 'left';\nctx.fillText('textAlign=left', 140, 100);\nctx.textAlign = 'center';\nctx.fillText('textAlign=center',140, 120);\nctx.textAlign = 'right';\nctx.fillText('textAlign=right',140, 140);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arc5",
      children: "arc()5+"
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
            children: "参数"
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
            children: "弧线圆心的x坐标值，单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线圆心的y坐标值，单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的圆半径，单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的起始弧度，单位：弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的终止弧度，单位：弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anticlockwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否逆时针绘制圆弧。  true：逆时针方向绘制弧线。  false：顺时针方向绘制弧线。  默认值：false。"
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
        src: (__webpack_require__(601170)/* ["default"] */.A) + "",
        width: "98",
        height: "91"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.beginPath();\nctx.arc(100, 75, 50, 0, 6.28);\nctx.stroke();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rect5",
      children: "rect()5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建矩形路径。"
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
            children: "指定矩形的左上角x坐标值，单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的左上角y坐标值，单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的宽度，单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定矩形的高度，单位：vp。"
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
        src: (__webpack_require__(880997)/* ["default"] */.A) + "",
        width: "85",
        height: "90"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.rect(20, 20, 100, 100); // Create a 100*100 rectangle at (20, 20)\nctx.stroke(); // Draw it\n"
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
266092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
833959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAACDCAYAAAAu7p91AAAMvklEQVR4Ae1dO2gVzxeOURERRcVnIyqm0WhQCxu1UMQHCYgWClqoWIhNCqNExYAptDMqqChYWQhWmkDAQiIIIj4IghYiRHwGRVCLFGKS+XP274nnN9ndO7s7O689Czcze+bMmXO+M9+d3dmbe+sEH4wAI5AJgbpM2qzMCDACgknDk4ARyIgAkyYjYKzOCDBpeA4wAhkRYNJkBIzVGQEnSDM6OsqZYAS8QcAJ0niDFjvKCAjBu2c8CxiBrAjwSpMVMdavPAJMGk+nANwF0hcNA+VxMmyDko98CGQiTVtbW75RuJd2BOjklwmAbXRQlNGStteq82bNP4Qykebly5di+vTpAko+GIGqIpCJNAjSx48fxaJFi0Qw7z55334REC4rhUAu0iBC7e3tYsGCBXhqpaTzndZVnAH96MjaEftxWUkECpEGEWtubhYtLS14GmY5xrAww+Oo1BHQQhoY7v3792LmzJnizp076qP7pMmk8SlbpfqqjTR4fzMyMiLWrFkjnj17Vqrjxo1LpJFOrbgDPuCLOiDL8DyupP24roaANtLIwz1+/FhMmzZNFgdzDhPQxBE30U2NbSI+H8cojTQIRkdHh1i/fr34/fs3ivws6ex1MAJ0j7oWJ6PtXM+HQOmkAbeAMDNmzBAXLlzI52XAvXBiJ5Vlho5jljlGiLaNkIYCd+LECXHq1CkqKlTHxMtlIaPcmRFIQcA4adCX2bNni8HBwXAekGJgXAaPgDXSALK9vb2ioaHBGsi4OmlxAIz9PdCuaon9spSybdoX21CG53El6nCpjoBV0oCbsFW9ceNG0draqu61bk06m3Tb1mCPugd1PuwiYJ00GD6Qp7u7WzQ2NqLIXElnZdKoVEeuJ/XRJFcZDnXokHEy2s71fAhYJw0kFg98QLp161Zx/fp1FAddQvwjKa8yg8exyxwjRNvWSZME6vDwsKivrxfwCQM+1BGgb0LQSz5Xt8SaSQgYIw0mD8skh2R5V1eXgJVH5QDbcS+VvqzDCKgiYIw0qg4l6cE/vtXV1YmvX78mqWSSU3Jl6pikTN4NqG2VepLJNLlsN02X2/Qi4A1pMOxjx46JHTt26H++Q2chDhZXUj25/lcfxXHdWeY/AsZIAxNJ1wH3O8uWLRM9PT36yIMzvYijaENXoAmXm7VcxI0FdAP0UUbLWnawP5f/RcAYaf47rJ6zgYEBMX/+fK83C5BnSaUepNiKTgS8Jg0C8fbtWzFhwgTx4MEDFFWuxNWErh64qlQOjJIDDoI0iNHVq1ejzQK4fIs76Lt5XDvLMiJAGZqxq8/qxkiD+GKZFzSVib9582Zx+PDh1PsdaqeoT3Issu20c7mva+epvusGzrXgE/wxRpqE8WPFRXOBnyxoamrS/x1tCs7BZZGCWmzsJoXgow9+msREZSxjpLGRHCAPPNeB5zulfywHZ6ChQOlwhoaMn09WB493qWypMdKUHUgt+3fv3hVTpkwR7969q6VqvF0mgMq5TicLzfvR6n0KozKkwUm2Z88eMWfOHDzlkhHIjEClSAOXa/iCL/zo7OzMDJgrHWB1wC1lKK0chZYoKx5rGdRL0siXL4AElakgA5+eBgLBv12fOXMmdadNxR7rxCMQIq+8JE18evJL+/v7o+9oy/sFh5SwWeu1vFa1V8tOrXbVcagebr2BDOtjZa0BPW5n0pDknTx5MtppGxoaMrby0EkYVyfuuVeN2PLXLaxj6Z632jxi0sRA+fz5c7F27dqYFhYxAp7+UK38jgyJpDKVxKroHzp0SOzfv9/YqpPmN/U3rZ5mI2tb2jhyW+xlGSgFeAS90siJpeequYRvB4UPg/b19Sl1oWPorCsNblMJgsUD61iiPJAyaNLozBH8hAiQ5+fPnzrNardFt6Hz1gOd69qwZtJkgBK2qOGYNWuWgJ9Q5EMRgcBY6CVpxuVAFsA5vhTzqqqGD0dv374tVq9erdqt2npyfjxHw0vSFMUc+ZRUZrG/ZcsWcfHixSxdcukm+SrLcxnX0QkcqcjhHWnkSYK5onLTuYOfToT7nV+/fpkeurTxKJ4qdVzZo3xEf8gDz9K8tGPYO9JkgSkt2VnsxG6nJhiA5zs3b97MtE2d5ie2JQw3Toz6RctxhmsJYEA8aB1lAZVBk8ZWnj59+iQmTpwYEQc3D2z54sS4gZHIO9IA/uM+1SsnBc7xpWvWoD0sFexeu3ZN7Nu3T0HTPRUIU9uh1Zg2r3Ibyk2aCIfRcdM3tyOFOspJgXN8FTJco7M8boL68uXLxatXrxJaKyBGnLD8G/L/T0eyXP06AVZu0jjhfRlOSInVNQT8K8LOnTvFgQMHdJkMxE5JgJeIDpNGFdyk3KIcyxr24H5n3rx54smTJzU0A2pWxMaXiK2SRhlLUMSXKWRxvCxlBt8+f/4s5s6d6/W3gyqHCxgGdFgljU4c4+Y2tS+30zYbddxVa29vF+fOnRtzAeUgoD6PKXDFOgLBkMY6kgUcAKIcOXIk+h8eSpoCJs12lVcSZLtZL4yNxqQxBnXtgb5//y6WLl0qbty4UVu5ZA2c91nKyCXaoWQfbZln0uRAns4LWs9hKrYL7LTBw9GnT5/GtjsvBFACPkonTRJ+ONkCxrZwaLDDtm7durGP5Lh66eaqX4UTkGCASZMAjEviy5cvixUrVogfP3645FZlfbFGmsoinjNwuGRraGgQx48fz2mBu+lCoHTSpDlatWU9DYu0Nhkn+DeE06dPj122pfXlNv0IWCWN/nCqZRE+WfDly5dqBe1AtEwaB5KQ1wVYgR4+fCgWLlwoYLuaDzMIGCYN7Jk58sloM/gaGwV+DWHv3r3GxqvyQJZJk7QhXeWUFIu9vr5eNDY2FjPCvVMRYNKkwuNXI1yu4Wv37t0C/gmOD/0IMGn0Y+qERSDPnz9/oi/8gOc7cM6HHgQMkYYmLKmuJyC2Mh6BK1euiA0bNoxvYEkuBAyRJunmnxIol//cKQMC8HAUnvHwqpMBtBhVQ6ShI1MCMWkoMqbq58+fF9u2bYuGYwJlR90CaShRaD2789yjGAKwy9bT01PMSAV7GyaNTBL5vIIZsBwy/EQ8/9p1tiQwabLhFax2W1ubmDRpUrDx6QyMSaMTTc9twf3NvXv3os0C2K7mIx4Bi6QpcmmGfbGMD46l+RAA8uzatUscPXo0n4HAexkmTeBoBhheU1OTePHiRYCR5Q+JSZMfu8r0fPToET/fIdlm0hAwuJqOAJBn8uTJ4vXr15V+QMqkSZ8n3BqDQGtrq1i1alXUAvc/VXtAyqSJmRQsUkPg7NmzorOzk0mjBldWLfrRmax94/R51ywOFdMyXGHg366/fftmenhr4xlaaXRPct32rOEfxMBAnjdv3kSbBffv3w8iprQgSiYNTG6e4GkJCKkNyNPV1SUWL14c9He0MWlCmrUOxdLf3y/gGQ9ewjnkWmFXDJCmsI9swEMEkCwHDx6Mfu0aQ0A5nvtYGiANX575ODGK+kzJAZ9jgw+D3rp1q6hZJ/oHRhq8h9K9W+dErrx3ore3N/qOtg8fPngdS8mkyYNN0sqUJKdjoA6WtI3rriAAq1BdXZ3wlTyOkAZWBpzoWMdzTDWuHlQOdXqOulCmtVE9rttCoLu7W7S0tIwNTy/pxoQOVjwkDUUxiTBUh+uuI7Bp0ybR0dHhzU5bPtLgm7i2OYsGIb1Yl43L56jr+pRg/2ohACvM4OCgmDp1qhgYGKilbr09H2mU3UYCKHeIUdRhI8Ysi5xBgF6Wwe/wwNdMXbp0yRn/ZEeYNDIifO4MAvC91MPDw874g44waRAJLp1EAO51mpubnbrfKZk0qnnAHTPQx7p8DxO3e6Zq/58evRT4J+Wa6wisXLlS9PX1OUEeD0lD0ysTi7ZxPUQE4H5n+/btUWi23gDzkQbvzbXNWVxdAAusy8ZxpaFTQdahbVwPFYGhoSGxZMkSa+HlI41Rd5GhcYMyaeJQYVm5CDBpysWXrQeIgOekCTAjHJLzCDhOGnofQ+vO48oOBowAkybg5FoLLfBbTSaNtZnFA/uKgOOk8RVW9jtkBJg0IWeXYysFASZNKbCy0ZARcJw0dMcs8LvLkGdZYLF5RBpKoMCywOF4hQCTxqt0sbMuIOA4aeglGa27AB37UFUEHCdNVdPCcbuMAJPG5eywb04iwKRxMi3slMsIOEoauH/BexhadxlK9q0qCDBpqpJpjlMbAo6SRo4PVx1ZzueMgHkEPCGNeWB4REYgCYFKksbWt5gkJYHlfiFQSdL4laLi3vr2JuG6v0GSxnXQi9OALdhEgEljE30e20sEgiSNl5lgp71BgEnjTarYUVcQYNK4kgn2wxsEmDTepIoddQWB/wGzD7w5MZAWawAAAABJRU5ErkJggg==");

},
774354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAABgCAYAAADsMQlXAAAB3UlEQVRoBe2YAW7DIAxFe+zlMNv9doBpbdbgybgOthZScA1aG5iykELz9L8xUE7QsZw6suAosACwAEBo5K22cYWFCESo56VhDVWhWX9gjRyMrx0wF3f/m40h5h4mAf3Z0+GuMsyzJeLwP4Ex8S3XXZgKFmf4TatqK3iogoUAMC/26awK9nMBmKYvuKJCQ6mGvU3ffWDzjMrOsODoMJQqZRLWfDQS7AJLsOWaQRnBDC7WLTFS2YBJB8wxG6PRxUb5ktK6OWalANnvOWC8jtbczcpyEEwJbJOpwX3NMBkLWb/etgy0X+HNEvVwh5Ey1oL3VNxhhGEzm8N4w5cUca2BsqPBMHrDxjigSvYgmMY6ldMJRCMbdX5x1rnDSIf+8dEORlMI57G6+yvrCsMFRodsVeevbOdXqT+sq41dYbmAtZgbOc/WUSEq/jHrOkAGTMRys1qyxIwBsmmd/PARG0MI/hueZ47ZOR4nSXt1HTcB26VqusLTuPePT8BDznxxgqUleI/mBuOj6bwutwGyh0htbsrSK/O1Act7U9FyLBspL6tmkDIvt2ykzwaszMHYa9hYYVa+6+vauLWwPprU+H2+8p6qlgZJrd6vHgZM2WF9GDZanVPfGzYqO6wPr2vjLyQRIYcd7ha3AAAAAElFTkSuQmCC");

},
131775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
490978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
248212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
880997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABaCAYAAADJoxqPAAACg0lEQVR4Ae2d4UrDMBSF9/4om/5f3Wvo7w20daCwJ3C+wlC3tVfSbVLKaK4zt03kEyJWw6xfzjk3Gb04kkqEEZbBCKBhgTqeQDVwKlCBGt6qFvGnUmq1d8uZyIeB8n4L3g9VRHbbXSJEj7dZiXx9bg8XA0D2Ql2/vcv11bWMx+NkxmQ8kYf7B9nv9oNsF71Q88dc8qdcXASkMpxEZ9ksXqhFUchyuayBSplGodjvSsmmdzLU/XqVWuSFLJ+B+pti9b+hDlCkVCeqpJUK1HB5/ZOpQAXqIPs/bbFAqQYWBSpQw+We1sqXzEOpKBWlapzDicrAKUAFqi5+KFQGSgEqUHX201RIyzkoFaWiVI3D2FIZOAWoQNXFD4XKQClABarOfpoKaTkHpaJUlKpxGFsqA6cAFai6+KFQGSgFqEDV2U9TIS3noFSUilI1DmNLZeAUoAJVFz8UKgOlDA/VdXJ1/GE0UnTzOcduVDdwKqHWjb+uQS3ycVBq1imWczBCfe9QqDo6+ZpKbbdRlq67uhRve2Xv86pKsmkWb8Ov603NskwW84XM5/MExqK+19ubW6kXs8OFoZTZfh3vlmqz2cjry6usVqukxnr9Lp8fX4NEgBdqexW49hcuoBrEA1CB6rdeDPGEUlEqSh1kO4P9DawHVKCmkWcoFaWiVK0L2KcauAWoQG1E0OEt6Cg/o1SU2lCqAQxtIfLNQ6kGiwNUoGJ/3qXyhW8vP+94/qCX3x8oCsjUQCCbix4HVLeFPz7pon6kyABGE8xfvo4KqhroKSaiPE/F9g9pTrAiVqFGwXEoNXGIbdBANVhQoAKVExUnqnbYcn25K8hUMvVy9fTpPJSKUtNQ6jf5TxtftFrbdwAAAABJRU5ErkJggg==");

},
257305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAABqCAYAAABqKGmcAAAFCUlEQVR4Ae2dfVLzIBCHPY4XeJuL6K28kXoMj9LxrzTvhNqJbWDZEBYDPM5k2sCysL99SiD98GniDwUSFHhKaEMTFJgABwiSFACcJNlo5AXncrlM4zhO8yNH+xqkvAy84MyOXl5eOBrX4PX11U0MWcE5nU5u1plnHo42NXh/f3fMzFeVrX9Pc5PHY3YyDMNWX9hXpsDHx8f0/f2dNOrgpQpwkvSsqtEMzvl8FsYcnomCM86/YVjNRI8zU03n13l1nKZpPlr4CydVG50Mzi27fm/dzDg3Gawf/TJblAKOhaod+AScDpJsEWIJcMLj7uZSFZag1hprcGRdAEfW58C11uDI/gHnwGjcDU3O452p9kTaVV3cnjrsCXDC2jRfAzjNp9gX4P4pCHB8ujZfBjjNp9gmQMCx0bV5r4DTfIptArQGR35Pj12VTVYLeLUGR/YPOAVSfNQu5F2VPGrAkfU5cK08I2gGLoFz/RhK2AvghLU5eI0tONw5Pnj604cHOOnadd0ScLpOf3rwtuCwxknPzMFbWoMjh8/iWNan6VppVxXDEnCqRSOW2nhgEjhcquL6VWphCw7b8UqxiA8bcOIaYeFRAHA8otRRtD914TjjPwSwv3dpjcOlKpyb3TX7U+cfgs6vzsrfw7UUcCR1AnXxV/QU/e2Y/anzD07nV2fl7+FaCjiSOoZ1+1PnH5zOr87K38O1FHAkdQzr9qfOPzidX52Vv4drKeBI6rRY55gxBEfhnzvHEbA0a6Gbi/2pvHmKPCoSG/Hgqn/POOs45WgAR6OwwmaWWZZa4SRg4vfrLw248Bb/BufRgO34oyJG55bg+L9vADhGqSzrtjVwYvMnl6pMfBUFx002hjOOC0b2DziZwCnqpgQ4kRUb4BTNeKbOACeTkF26kS8lGkmq21Wt7xlowsTmXoEOwbkXgLM0BWzBYVeVlpVjtyqxxon8YxAWx8dGxD86a3Bcr/KMBjj+1FRQKidWE0B1i2NNUNjEFLAFhzVOTP9q6wGn2tT92cAdM4bgzK5ZHP9Zeu06tgbHjVwGk8WxXXqNPcuJ1XQuLY5Z42gUrNLGFhw+yFUlFJpBA45GJWxWCtiCw6VqJXgDBY4ZQ3Bm1+yqGgDlMYT9zDiPvsXx4np59tj9fM6uyqdKQpl7kbp2/o+WJ7hcNVlSmacPwFlJXL4AcH40H4ahvPoV9wg4gJOEL+AADuA4BZYVlU8QFsc+VRLKmHF+RGONs40ewAGcbcT8WAMO4ACOU4A1ThIIWxsx4/woxhpnGzqAAzjbiFlZy1P8ynxDweJ5ebah+cqUtxxWklCgUQBwNCphs1IAcFaSUKBRAHA0KmGzUgBwVpJQoFEAcDQqNWST6/eFGgFnuRPSUI4PHYoPHO2AD/TuOODckrbcpVme3epyPjYCTk5J6va14LI8s4ioCXBmicbIT6RaiHdYn7Mgka+o7B17E+DMXwCLfe10r1C1tHfzjAPHdsTNgBP79qCtjMfx7sApMBzAKSByi10ATotZLRBTI+AUUIou7hRoApwCa8E70TiZpmbAGac834kGCp0CjYBz4T6OLt/ZrJoAJ5saOFIrYALO6XRSDwDDOhUwAef5+Xn6/PzkaFiDt7e36Xw+J1EffHf86+tr4mhfg3FM25AEwUnCkEbdKAA43aQ6b6CAk1fPbrwBTjepzhso4OTVsxtvgNNNqvMGCjh59ezGG+B0k+q8gf4HVqqW5/Z/tvgAAAAASUVORK5CYII=");

},
533367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABKCAYAAADZoljgAAAEuElEQVR4Ae2avS8EQRTAD5UIiQiFguYIlUQvInQKCq3kCgq1ROEPQCsSrVCICh0FLdEoaa7SKAQhoeGMvI3ZzK2dj3c7X7s3m2zm6817b37zdmZu90okXNYJlKxbDAZJgO4gCAL0AN0BAQcmQ6QH6A4IODAZIj1Ad0DAgckQ6a6g//z8ODDdvCa9jfQih4G30Iv8HAToDmY3QC8CdNiUa7UagTTPd6NzAXuRbD8yEukLCwsk7/f5+bk6dxnlhCYpdKS+KLrHx8fJ29tbFPHf399RmrDrRTH5VIJTUNfa2hqlGCdVIpzqk0Kngpj08/OTlMtltOMYG6Zkd3Z2TKmO9RqBDtq3trbI5eVl7sAfHh7GcExlpNCxywvraEtLC1v0Pg/Lio1LCj3pBHYS2trakiq8LMPG//LyUv9kYgf7d3KRdUNDxxKDjWlzcxPbTXrsQisUdHh8fCSVSuW/hIwe7aEq9yePgo7UTV2Kjo9xwbMMBEVfX1+6V4gBg6iqOAp6mmeqhnp7e+u6q/ar62SgcHBwgNIq8xvaZTKZoat6fH19TeAHB0SWT9fDwwPKHR3ea4fOcwpgDw0NRQP0BfzExIS2IKgpRDidXe3QqWJeOjU1xWuyWt/d3W3VHmvMOvSLiwtyd3fH+mA9f3V1Rba3t63bpQYzQ4flhLekUCNsCm8gR0ZG2Crr+Z6eHus2WYOZobPKMPn+/n5t6ynG7vLyciTucl/JDB0T5SwcOMkcHR1ZBf/8/Exubm5YN5zk0dBlkGXt7ChtvpuBZW1sbCwy7zLKwQEpdAxEFqhqfnZ2VlU0lsP6BJAXFxfj/q4zUuisg6LBitpYHcn82toaeX19TVZrLcMHFbqUuY5yGBgKulYSjLJSSewGTCh7M12lWYDc3t4ulbMpIB6tRU9Mre8rKysWR6FmShv0RpcX6ma1WiWrq6u0WJeyUY6xA1G+vr5ep8tmgeerFug85dgBTk9Pk4+PD2w3rrzop74un7nGBQ1aoAv0o5q+vr5IR0cHqg9P+Pj42Nt/IXgFHQDu7u6Ss7MzHkvl+tPTU2VZ24LeQQcAWd+NcL8E2abLsZcZuqm1sbOzk+OyuHpmZoY8PT2JhQStMJ7kmJJlQXelpszQlaw0IPT+/k729/dRPe/v78nS0hKqjy5hOlmyCYJ2b6EDjPn5eRQT0WkFpciwsNfQ4Zw9ODiohAA+SoA83L5f3kOHV7HwpYd3AWSf/6Sa5rfX0KnDAwMDNPsvBeiTk5P/6tMq4OMx3K6vXEAHSHNzc6msRkdHU+ttV6pupOBXbqDDSQZe0bLX7e0t2dvbY6tykc8NdFhGkmd3+q8xE5unye04N9BpCHd1dUXZ1PO4SVLUAU6quryAnBfQMZEKH7Q3NjbIyckJZ/j+V3sBHYtpeHgY28Ur+VxClxJkn3WHSw7Pz2JC543Wk/piQTcY1fTh0TFvxYKug4gFHc0DnYYqmzYIOOsD1TzQGwTM65YFfIDOo2qwvqmhx9GqYcnBzFGxoLPw2DyGiEQ2niiJnKi5WNDZkQboLI2QL26kezy3AbqDyQnQA3QHBByYDJEeoDsgoMkkPaGqqAuRrkJJs0yArhmoiroAXYWSZplfM9Ijef55FxkAAAAASUVORK5CYII=");

},
601170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
371370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAAjCAYAAADIUKt5AAACdElEQVR4Ae2a0U7CMBSGi8AVanxn75UbTfStjIZXgcG23xyxMkontGtLt/0zzbaynu58/VZKnAI3Ehg4ATXw/AaXXg3AtQwOgmNClNwR2Ggu10/SABKm5AMYxM4pNIWWY9n0/ve0z7usJNesbfs+Qbbdv65ry0N/fsm+LUZb/bmY+3ZVW/Pe12cl+X80ZaC4kYAPgd5I7pMc25CAEMhKcpmt5UuzWWzDJJ+PdWa3MRozD5sfZl1Wkps3x3MSCEGAkoegyBhZE3CTvN4vJUrIH1jIwNmBwzKz2suU4PFwkzzBDbGLERAQ0w+2R0/YWfKX1xWel2AhAy8HnpbAcgnsZCmQaHOW/G7xjhtVQKmahQy8HJioAutNusncUfISi9s3qEkJpVjIwMeB3c+DUWzSLVkcJa/xcP+I2fwD09mKhQzcHJivMJ1/YTr/xHqX7UwOlCVQbIGicCsbjza2PraO/dpisM5t7ELzEheqnH94+v5WCJZTsEC+mbBd3wg4Llf802tzs63evye2JIFjAsklF6nNcnxLPCOBsASSS958+YovFoUdzBjR6rr/37XJJTcHQiPUs7uIz40EQhKg5CFpMlaWBK4uuUlFz+xmPc+7ERgz1+wkPx3K6u+/BnpJc3oNa86tnSl5Akc6Qe7UOEFyPehizAivOpNXqFCnfOeyBzLGukVKHotsI64NMiVvAIp8aOMfuctswl91Jq85kycTgZJHQi1gbXBliSKzeHPjrN6kEf7YNg7he8kzYrKZ3EzfXItTcpNQ2HNKHpanVzRK7oXt4kaU/GJU8S7k+jweW4lMyePyZfQMCFDyDAaBtxCXwJgl/wbMvsSJzBd2OwAAAABJRU5ErkJggg==");

},
551655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480421-b6ddb70674e84fe2e9b3ce518023b428.png");

},
152216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABqCAYAAADX5f2sAAADtklEQVR4Ae3cC3LiMAwG4HABDs/AKZgBDsG1IDsua6K6tvxAUmLzd6aD42f8WRWU7jLN+FIXmNRXwAIzkA2CoA75aXBHAy6xIHOAXNuAKNJbKkOWXvXL5rNDpj8NtPwF4AvyFjY7KP62kLdw0Ar38EKmEUTL3IK+n3/k+n552+eR/Cnyp+M7OEAeOQWQqm/ZsORcLesbjOGRa2/gC8BqSVz/ZuTn8zlfLpd5mqYhv1swU2PyyC46IxEK5BTp3/oFOQL5t/vvGkTyb4/U1YKc6sHUe+Tdbjfv93umZx9Nh8Phnfok75hHzkT3aMjH43EF5MxxjoZ8Op0GQs78hGTOVq35fD4PgOxx/aMaV9vE1+tVGTm38Uh7cboIx4bXbSbio/SRG265GLlh7jWG9IesEa0ac5LT7A+Z3HwvxS6R3a/eNV+uf25Mrr1mvbCvLXKhTXVO9vP6x3CXK1/bIhdulkWmkLTs5g6vC9fT7tY3cqgD5FAkfc1GcnpYe4vy4fQXye2Uq43URW6MEPNIVubXRW68eSCXwfHvJ2fmAHIG6H/zgtyQMoBci0z7U3Bapn3m+f3X6lH+/IScHBywxiWQNVSDOYEcgGhcDoNc8i5aSZ/+kJknN24zeHXB6Sxty0u4pa64BOQyKlPkXBrItZdtqb3XMDm5nUB/pB2y/5NRQZ5Guig7+PJ0EUGXRka6iByaNHJkCdMqu3RRsS0gl2GVp4vIfECOoESqNoHscvHa+djZDJEutgAZCbR3lS5y5JXDe2WmgHTB4JCmTaQLcj+rFnUjuXFrLZG85ZRhi0zTBy27wyDXLciN52kyzBa5cEtALoN65WQSnWXDXr2AXKaFJz7ipJsuBCN5y09sxDNa7AY5evedVOoiNyJI5eStRL8tMk0ftBwchhRyMO1ql9tAduAEHchl8YBXF8TJNpLJwlzRKpKtcvZXI3MHLdkGZEnNxFxATsBIVgNZUjMxF5ATMJLVQJbUTMwF5ASMZDWQJTUTcwE5ASNZDWRJzcRcQE7ASFYDWVIzMdftdlP+XLjEwly1f4PIfYay+1+pI3z7z4Pm9l3bJvJWp7+xkR5rIbn+QE58kjmHVtv2EfLj8fj5J6/u0X3d7/chvmsRc/2bka3eSM9tQKNdem/NyBqbG3VOIBucLJCBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsAQiGcgGAgZLIJKBbCBgsMQ/cznzetSTKTQAAAAASUVORK5CYII=");

},
598629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAABtCAYAAABHoUgFAAACT0lEQVR4Ae3WUW4CMRBEweX+h4YrpIX1pOCKxN+wK7d7ijxvfxI4mMBz8FkeJYG3QinB0QQU6micHqZQOnA0AYU6GqeHKZQOHE3gz4V6vV7v53l8fjyDb9ulUD9ekBUBhVKIo78aCqVQCrUybL7735VQhCIUcTpx1qwJRShCrVtjvhONUIQiFHE6cdasCUUoQq1bY74TjVCEIhRxOnHWrAlFKEKtW2O+E41QhCIUcTpx1qwJRShCrVtjvhONUIQiFHE6cdasCUUoQq1bY74TjVCEIhRxOnHWrAlFKEKtW2O+E41QhCIUcTpx1qwJRShCrVtjvhONUIQiFHE6cdasCUUoQq1bY74TjVCEIhRxOnHWrAlFKEKtW2O+E41QhCIUcTpx1qwJRShCrVtjvhONUIQiFHE6cdasCUUoQq1bY74TjVCEIhRxOnHWrAlFKEKtW2O+E41QhCIUcTpx1qwJRShCrVtjvhONUIQiFHE6cdasCUUoQq1bY74TjVCEIhRxOnHWrAlFKEKtW2O+E41QhCIUcTpx1qwJRShCrVtjvhONUIQiFHE6cdasCUUoQq1bY74TjVCEIhRxOnHWrAlFKEKtW2O+E41QhCIUcTpx1qwJRShCrVtjvhONUIQiFHE6cdasCUUoQq1bY74TjVCEIhRxOnHWrAlFKEKtW2O+E41QhCIUcTpx1qwJRaj/KdS3zfX9OxJ47jimU1YJKFSV9CXvUahLLro6pkJVSV/yHoW65KKrYypUlfQl71GoSy66OqZCVUlf8h6FuuSiq2N+AEllF5X1oREYAAAAAElFTkSuQmCC");

},
528673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABLCAYAAAChtqNfAAACUElEQVR4Ae3dzUrDQBSG4enGdOFFCv5eQBoEr0i8BHFrEVy5FLwH/0Fr8smkqUg2ac+QQxje4lALnkznfHmSduME8ciqAyGr1bAYEWhmJ8EWgTaSmvYns7VnuZwtA41rr7NswOQWFf0kPAYDbRrp/k5aLqVbxug9eHxKSFMavofWtbS/d60QvhTCt2bdiL8z0nqw6eUs/CiEph0HZyMHuqql+fxGoZ00LiBOzhinBysdnTgEWhCo00m80jGB5nS1IFAnOV4nDYESaO+WO/i1JX4o4h6K0MzkECiBmr7acQ/N7MQhUALlQ5HX/dAyD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKEItcjxqkEoQhHqpc0yD0IRilCLHK8ahCIUoV7aLPMgFKG7Co0b8RTzuBGP5YyjZru+xU141r06PO0ltOPLwf853wZaEOim4eM8E+jfGT1Og72vLM6BXpw/aLF4VlW+qCrfuvGhqmTYe/D+r5evqsr4+lOXVzteY3t/PnjJVdyesN0CsXvuthPtHYeXyR1Y7zPZxH4nPAYDTTt8wjuj1NSBwUBNR6UooQNphAg0ofVTLCXQKaaS8J4INKF5Uywl0CmmkvCeCDSheVMs/QUAt8sj5xS9wQAAAABJRU5ErkJggg==");

},
631439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAABeCAYAAAAEyHeqAAAD2klEQVR4Ae2dUW/aMBSFHaoKpnbqP9/72r1U2n7Etmp7A7r9kbaTJtF1WgskZ7qESAVBC47xvXZOWiskYN/rc76YJCDswKXzCrjOK0ABQAgIASEgAyAEhIAQkAEQAkJACMiAKMCrA3JACMjAXiNBBaBa/FM4ZQWWVoTKYo+3A4ksS7lcc6WngHhQyiEZZNkZAgn48xoYjYAhi6oG4sF4CNzd1INzWxJ2h6ACTo+/wLknFG7KoqiBcyV6boYP74EqwHCwMwR/HoB+/wqFm8O5KdxiLY9ZdDSY4eI8MgT3hMAY8DOcX5iBoIQMTzpHQxdGodkWfU1BUG1JsgsGHbKPcmDhhYPLEAT1OcJf9IpfOCrucFTcsgTSoNe7RdG7gSseNsBgCoIn/L4H5surFTlZZQmjgQgpdwROTj/ahsC5R0wmzY3EANcrbS96M6tfocKbt5+sQ/AP95NGed5NbJQIsa7vCVYYnBCCEHom2QYhSNK2sEkTgrB6JtkaIUjStrBJE4KweibZGiFI0rawSROCsHom2RohSNK2sEkTgrB6JtkaIUjStrBJE4KweibZGiFYs6165ct0m57ftG+tWdObhMC0PXGSIwRxdDYdhRCYtidOcoQgjs6moxAC0/bESY4QxNHZdBRCYNqeOMkRgjg6m45CCEzbEyc5QhBHZ9NRCIFpe+IkRwji6Gw6SjYQyIc4qX+Qo0VKNhBoCZhDXEKQg4st+0AIWgqYQ3VCkIOLLftACFoKmEP1bCDg1YE/jtlA4C8BaxICMrD84Vr+SEWnUeBI0Gn7684nDwFPCNtTnDwE7SVgC4SADPDEkAw001rw6qDTLCT/dmDlxNBKHj40Jw+BT6fX64iB+yybXr9p3z5tar6WEGiqbyQ2ITBihGYahEBTfSOxCYERIzTTIASa6huJTQiMGKGZBiHQVN9IbEJgxAjNNAiBpvpGYhMCI0ZopkEINNU3EpsQGDFCM41kICjcFN+/AeMRMByzhNRgJJpeA8fHPyA6N6Wel9rUDKkyX/DjcvJGmTe5KYecR7grbb80EbkhCGoqSxROZvduAJB1V4w6ZD+nL+hoDgIBQMohBWHbq/qag4AGrRoUQw9CwFHHKUDwNAPOzt5hMLjCoP+ZRVODwVcM+le4vATKqp6xfr8v4q1e+LrVze1bMh/6vALKEpCv/rHoaSAeLHwINEn9zhAIb/I3384Jn4msQJuj/3mqe0DwvBofayogB2O91I9kq9njkxch8FEtszqEIDNDfbpDCHxUy6wOIcjMUJ/uEAIf1TKrQwgyM9SnO4TAR7XM6hCCzAz16c5/ldYbf66ffcAAAAAASUVORK5CYII=");

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