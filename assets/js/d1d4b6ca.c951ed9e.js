"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["764619"], {
890476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_canvas_path_2_d_ts_components_canvas_path_2_d_md_d1d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-canvas-drawing-ts-components-canvas-path-2-d-ts-components-canvas-path-2-d-md-d1d.json
var site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_canvas_path_2_d_ts_components_canvas_path_2_d_md_d1d_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d","title":"Path2D","description":"路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的stroke接口或者fill接口进行绘制。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d.md","sourceDirName":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d","slug":"/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Path2D","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-path2d","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-components-canvas-path2d"},"sidebar":"ref","previous":{"title":"OffscreenCanvasRenderingContext2D","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d"},"next":{"title":"Circle","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-path2d/ts-components-canvas-path2d.md


const frontMatter = {
	title: 'Path2D',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-path2d',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-components-canvas-path2d'
};
const contentTitle = 'Path2D';

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
  "value": "constructor",
  "id": "constructor-1",
  "level": 3
}, {
  "value": "constructor12+",
  "id": "constructor12-1",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-2",
  "level": 3
}, {
  "value": "constructor12+",
  "id": "constructor12-2",
  "level": 3
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "addPath",
  "id": "addpath",
  "level": 3
}, {
  "value": "closePath",
  "id": "closepath",
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
    li: "li",
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
        id: "path2d",
        children: "Path2D"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的stroke接口或者fill接口进行绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445961)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从 API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Path2D对象不支持重置已设置的路径，如需新路径可重新创建一个空的Path2D对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Path2D对象的方法无法对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d",
        children: "OffscreenCanvasRenderingContext2D"
      }), "对象中设置的路径生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构造函数",
      children: "构造函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造一个空的Path2D对象。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(unit: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造一个空的Path2D对象，支持配置Path2D对象的单位模式。"
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
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置Path2D对象的单位模式，配置后无法动态更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。  异常值NaN和Infinity按默认值处理。  默认值：DEFAULT"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor-1",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(path: Path2D)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用路径对象构造Path2D对象。"
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
            children: "Path2D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12-1",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(path: Path2D, unit: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用路径对象构造Path2D对象，支持配置Path2D对象的单位模式。"
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
            children: "路径对象。"
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
            children: ["用来配置Path2D对象的单位模式，配置后无法动态更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。  异常值NaN和Infinity按默认值处理。  默认值：DEFAULT"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor-2",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(d: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用符合SVG路径描述规范的路径字符串构造Path2D对象。"
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
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["符合SVG路径描述规范的路径字符串，格式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path#svg%E8%B7%AF%E5%BE%84%E6%8F%8F%E8%BF%B0%E8%A7%84%E8%8C%83",
              children: "SVG路径描述规范"
            }), "，异常值按无效值处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12-2",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(description: string, unit: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用符合SVG路径描述规范的路径字符串构造Path2D对象，支持配置Path2D对象的单位模式。"
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
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["符合SVG路径描述规范的路径字符串，格式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path#svg%E8%B7%AF%E5%BE%84%E6%8F%8F%E8%BF%B0%E8%A7%84%E8%8C%83",
              children: "SVG路径描述规范"
            }), "，异常值按无效值处理。"]
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
            children: ["用来配置Path2D对象的单位模式，配置后无法动态更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。  异常值NaN和Infinity按默认值处理。  默认值：DEFAULT"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addpath",
      children: "addPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addPath(path: Path2D, transform?: Matrix2D): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将另一个路径添加到当前的路径对象中，并使用Matrix2D对象对新添加的路径对象进行图形变换。"
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path2D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加到当前路径的路径对象，路径单位：px。  异常值undefined和null按无效值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
            children: "新增路径的变换矩阵对象。  异常值undefined和null按无效值处理。  默认值：null"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct AddPath {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Da: Path2D = new Path2D(\"M250 150 L150 350 L350 350 Z\");\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.addPath(this.path2Da)\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(79591)/* ["default"] */.A) + "",
        width: "260",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closepath",
      children: "closePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "closePath(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将路径的当前点移回到路径的起点，当前点到起点间画一条直线。如果形状已经闭合或只有一个点，则此功能不执行任何操作。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct ClosePath {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.moveTo(200, 100)\n          this.path2Db.lineTo(300, 100)\n          this.path2Db.lineTo(200, 200)\n          this.path2Db.closePath()\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(829155)/* ["default"] */.A) + "",
        width: "200",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moveto",
      children: "moveTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "moveTo(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将路径的当前坐标点移动到目标点，移动过程中不绘制线条。"
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
            children: "目标点X轴坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点Y轴坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(518025)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API version 18之前，若未设置moveTo接口或moveTo接口传入无效参数，路径以(0, 0)为起点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API version 18及以后，若未设置moveTo接口或moveTo接口传入无效参数，路径以初次调用的lineTo、arcTo、bezierCurveTo或quadraticCurveTo接口中的起始点为起点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct MoveTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.moveTo(50, 100)\n          this.path2Db.lineTo(250, 100)\n          this.path2Db.lineTo(150, 200)\n          this.path2Db.closePath()\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(603497)/* ["default"] */.A) + "",
        width: "210",
        height: "122"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lineto",
      children: "lineTo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineTo(x: number, y: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从当前点绘制一条直线到目标点。"
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
            children: "目标点X轴坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点Y轴坐标。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct LineTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.moveTo(100, 100)\n          this.path2Db.lineTo(100, 200)\n          this.path2Db.lineTo(200, 200)\n          this.path2Db.lineTo(200, 100)\n          this.path2Db.closePath()\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(298784)/* ["default"] */.A) + "",
        width: "153",
        height: "135"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct BezierCurveTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.moveTo(10, 10)\n          this.path2Db.bezierCurveTo(20, 100, 200, 100, 200, 20)\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(633751)/* ["default"] */.A) + "",
        width: "113",
        height: "66"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct QuadraticCurveTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.moveTo(10, 10)\n          this.path2Db.quadraticCurveTo(100, 100, 200, 20)\n          this.context.stroke(this.path2Db)\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(866879)/* ["default"] */.A) + "",
        width: "149",
        height: "58"
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
            children: "弧线的起始弧度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位：弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弧线的终止弧度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位：弧度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "counterclockwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否逆时针绘制圆弧。  true：逆时针方向绘制圆弧。  false：顺时针方向绘制圆弧。  默认值：false，设置null或undefined按默认值处理。"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct Arc {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.arc(100, 75, 50, 0, 6.28)\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(226787)/* ["default"] */.A) + "",
        width: "76",
        height: "62"
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
            children: "圆弧经过的第一个点的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第一个点的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第二个点的x坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆弧经过的第二个点的y坐标值。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  默认单位：vp"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct ArcTo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.moveTo(0, 0)\n          this.path2Db.arcTo(150, 20, 150, 70, 50)\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(256016)/* ["default"] */.A) + "",
        width: "152",
        height: "124"
      })
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
            children: "椭圆的旋转角度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位：弧度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的起始点角度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位：弧度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆绘制的结束点角度。  API version 18之前，设置NaN或Infinity时，整条路径不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。  单位：弧度"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.ellipse(200, 200, 50, 100, 0, Math.PI * 1, Math.PI * 2)\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(98385)/* ["default"] */.A) + "",
        width: "190",
        height: "217"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private path2Db: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.path2Db.rect(20, 20, 100, 100);\n          this.context.stroke(this.path2Db)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392866)/* ["default"] */.A) + "",
        width: "214",
        height: "196"
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
        children: "// xxx.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private pathA: Path2D = new Path2D();\n  private pathB: Path2D = new Path2D();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#D5D5D5')\n        .onReady(() => {\n          try {\n            this.context.fillStyle = '#707070'\n            // 创建一个(10vp, 10vp)为起点，宽高为100vp，四个矩形角圆弧半径为10vp的圆角矩形\n            this.pathA.roundRect(10, 10, 100, 100, 10)\n            // 创建一个(120vp, 10vp)为起点，宽高为100vp，四个矩形角圆弧半径为10vp的圆角矩形\n            this.pathA.roundRect(120, 10, 100, 100, [10])\n            this.context.fill(this.pathA)\n            // 创建一个(10vp, 120vp)为起点，宽高为100vp，左上矩形角圆弧半径及右下矩形角圆弧半径为10vp，右上矩形角圆弧半径及左下矩形角圆弧半径为20vp的圆角矩形\n            this.pathB.roundRect(10, 120, 100, 100, [10, 20])\n            // 创建一个(120vp, 120vp)为起点，宽高为100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径及左下矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp的圆角矩形\n            this.pathB.roundRect(120, 120, 100, 100, [10, 20, 30])\n            // 创建一个(10vp, 230vp)为起点，宽高为100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp，左下矩形角圆弧半径为40vp的圆角矩形\n            this.pathB.roundRect(10, 230, 100, 100, [10, 20, 30, 40])\n            // 创建一个(220vp, 330vp)为起点，宽高为-100vp，左上矩形角圆弧半径为10vp，右上矩形角圆弧半径为20vp，右下矩形角圆弧半径为30vp，左下矩形角圆弧半径为40vp的圆角矩形\n            this.pathB.roundRect(220, 330, -100, -100, [10, 20, 30, 40])\n            this.context.stroke(this.pathB)\n          } catch (error) {\n            let e: BusinessError = error as BusinessError;\n            console.error(`Failed to create roundRect. Code: ${e.code}, message: ${e.message}`);\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109194)/* ["default"] */.A) + "",
        width: "364",
        height: "364"
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
256016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
633751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABCCAYAAABgkDnTAAAGuElEQVR4Ae2abYhUVRjHj4Xtzs44+26zii+pK5poRn4LjbAoP0gUUR+SMpQgyTXozV6obyIF2YcWTAjMLTGJrCgDwS+hSGL2hkVGZasEbbublrRzZ8b9x/+ee+ae3ZnRXd3mnrk9Hw7nvt9zzu/5P+c5z70qhwaEJY0cUta+fc5sJ8qcTyIHFnONXVc6V+k47610rtLxK7nHbqvZvtR7zHV2XemeSsd5b6VzlY6Xv0flQCi6nMOCAER4zJwbWduNr/Y2Ozjed7p8z3j7Unq9yqMBprz73jTkUV/cN8elDsfIxbGwIKawZ+8M5DHFh1hAA6SUjkEeycDIWZtCyMnIxmsExDWPKeTQKUq0vFOp8myIKeTBoiGWXlsdBY+A+MQWBQ+3CMSLQkz4qsuhHqf+uhp5tAWK5PHqQBv9ngCimfjbkcV9KBRdRjSNGt1I9/YZ+KXQeaNCHgsjg2fGpahEz4/4mvDgRrpUzo0mwInOwkwjXaq1gafgIYF5NxHiIncgamiNWL2GLnU58iA8ghSIthEx2OO+h2QAcUHgTs3cWH3vVVSijrTSOIuZ+PQwLazZUmP1G2YPnEvbBd+ok/BQj5vv5DjNDpTYGJkiR0Hk3NiIrhcUhjEPHug2aHVhcWlAo2tLElmk0PvHauSCJVm49Ki+wVsQ7Zd34tfBxRgO3IZAtMdGrw33H1U4O7zSzx5FZ0y6XWUhFpDCbXcpZP25MVQhYUbd4Ojfz7kvja3dDACvdxeizk02Y9U99Plz/Umc0ZhANHnLGXhpKyHqpVnUhlVWiYSoXegcHPk2Aw8zA5CiRMYJmU5G8EuRxWQnPFMFiAxo0siiDtt3K/R7ywOIaScaHaXlD2AaXnuTgV8TPNQ5MR4VIDYgC0ZgCb/esZfz4yIfrP29MUwA24ngOKpV50sLaMXWHVShWVZEtza0DbksRPsCbnPZ8XqPwkBh4Yhlh07+siMsJjEcR4j8UJ7Ak35ueUXQX3eSIGOCSEA5pNHzkcKhr6djCLP8ddL/AaIO8lL46e96/HZ+KXJoD1yoyWhFb7RjgJhAwU+/1YFLj207FT4+2IkhTPWTwCHIeCmR6TUTkf9yrg2HvsqggLQ/BtpTcT6sIXdqu1cGPIPowOJlnBvmYAgpX5UMt+OUZ9URegs+P3kNfh7sDJZX7KN7xjoGJZZ3F/x4/PJ2hR/7O+Cho/iDlQ28trYNIF33ow3dbysc/qYV2eI3w/JjEXU/LwOiscQp8NCCkwOtePEVhXNYHCTN3ezopQea/aJ7nIJj37fijnsVhnBD8XcVfT9/XXHDhdr9uQyIBpLJVjBya8WrOxXePzAffRda/aQw11BZXOWvNfUnLXbefKM0z4iiJgijOraJcz7369CXb0L3LoUt25mN4Rf70cDMfVG0u/I7rwDiyIfyE82fSGHNIwr3r1Pox3XIoSmwZHZ+5PXR7hs4jDAbkUUH1j+lcPcDCn3eEifyoeMZnwmDaJIAdEce5mPHHoVd+xROnKEyuTgm0PHCnHjL10uGel9pfReuxVsfKGx6nkHarfDQFszttZWZmjCItBwOkLYgben8zeOHvrT/fXLPJwonemehgNkooB0XwA+r/FfFJJV5r1lAsyZAPofuzy5GReZdds37dGG0zK/vNC59jDVVNxvHTk7HhmcUjnzHa5bAQ8ZaLpn32s91e3tCIZZzATpUpxoz+H04g0efVujZV4d39iUxiLk4j3Y/C8S/xzQ4qoADblQ4uua5SiUcbAPwLBIYQAa7P5yMbW8obNis8A9mIuuDa7bg8Zm2IYbPKtcvl4795xB1ZwnCqIyDw+02HDiaRHePwsbNuhw/1YzjvZNw/DTdG7NCBDwVeUxFoVjaUEBp4TVfnlH4olfh2OlJ6HpOoetZhf2fzcPBoxl/3uMal79VhB7DqM4YRe2As42oChA5UMYdcpsDxZql3o8MGR3m0IIhLEMWK5DFSqx/XGHdRoWHNymsrVAe6lIwZW0Xwa+Ch9sxhJXIo8V32cwyFfz3m3eaNhjlG4Baifbg1Mp2FSCOzbpDdYTXlzt2sYE115u69FoDMnxH6TW1d84ZiHEYzKj6IBCLEXXtKdAYjUAUiLVrvcaK41CLEkWJokQXlCxKFCWKEkWJMVCBQBSIE/KdVebEGBiSQBSIEtjInBgDFQhEgSiBjQsqcKENEtjEwBsIRIEo0am40xioQCAKRIlOXVCBC22QwCYG3kAgCkSJTsWdxkAFAlEgSnTqggpcaIMENjHwBgJRIEp0Ku40BioQiAJRolMXVOBCGySwiYE3+BcyLXhqCm19EgAAAABJRU5ErkJggg==");

},
518025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
392866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADECAIAAABsn0jpAAAFL0lEQVR4nO3c3YpjRRiF4fVVVZLuZmYYFPHE+3CQERHvW5ARZPA2BPGkRdTpTvau+jxI2sHT/OzVwfc5Cg29qabe1A+hE5kCjIp7APi/I0GYkSDMSBBmJAgzEoQZCcKMBGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzNqZnlNybKQm9VSR4kyPxWXFYaZS6lJRzIptaNH/JzohwVEVXaGU5vnu/bvXP3z/y/pO23G+0eHCIlVCmVJTTvrq7efffPuX9HfkcsvI0QmG1KQhpaTUlHp48/aLr797GfU3RT/jEHFBGb3fKZvq9NO7KTRLQ6NK/dknmJJCCmUotGqhNte67Xm/GdtzDhAXluWPjEjVVl+p9yIpm5TKsUyFxyYYqZyllFbKmHpmtlLmVRtFg7PgFal9HVHnIU3l6XLapeWOUyecBWOWpAxpVcqqZO2j9XgokpY9z+JooahRM9fr1soooVRKcS3Xkb3oUlVKWZVVeTeW/QNwiqKMeFQ8KjaqN7m/Iu+/YeO5nwUl5f5GPEtDGipVWaS5ane+4WEREXraeodCEbHgWero60hIq6cb8QjNKlOMErENvqXmiqSklcZtlk2OJo3UtM/v2ScYKU0Z+4NDSEVZS6pkKjgKXo9Qas54iOgqt1KG+n6BWcwpZ8F/Qwvp47DzsK7jSmQejlKHrXjp9YPPiGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzEgQZiQIMxKEGQnCjARhRoIwI0GYkSDMSBBmJAgzEoQZCcKMBGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzEgQZiQIMxKEGQnCjARhRoIwI0GYkSDMSBBmJAgzEoQZCcKMBGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzEgQZiQIMxKEGQnCjARhRoIwI0GYkSDMSBBmJAgzEoQZCcKMBGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzEgQZiQIMxKEGQnCjARhRoIwI0GYkSDMSBBmJAgzEoQZCcKMBGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzEgQZiQIMxKEGQnCjARhRoIwI0GYkSDMSBBmJAgzEoQZCcKMBGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzEgQZudKsEihDCnO9EAs7uPsLTqP7dhfDOVG8Xh4PV5ovlWMzJYx59mGh8sKKZTSfsZy/4PMjWIXmpYZw7EJZtF4qRiKSeqKD2ohjYgp1M86QlxU0bhRrlWbelN0SSpb5XKTeGyC0VXvFf3wBopZmdJqv7OzGV+PzPKY2ipuFbeKlDI0LzmDR2/Ekoakp95CCvWVxp3K/LSw4wqkIvM2dKNcKUeoKkvkWGwhOWUjfqWyU1aVXY4xUqVOPT9UdQK8Il3Zx0PEHPWFRszT3GI9NErZLTOAozfiVGylSdpIilCpXVOr+iz1Z7AKXo2Su7ta10VT9l1rrZQIKXI+XE4u7+iNOFUeJCmGlL2Hxvjx3a/vf9bYsg9fk+y/Z2qs1YrefPlJKKWtYrnTYOTxuUQqpZaaQ23afZrz63Zz3/VIgVekZotae+40as5Ta4+RKiGVeZlV8JQE/yNVlFXBXeS6hZ4mcKl18GwJAsfhM2KYkSDMSBBmJAgzEoQZCcKMBGFGgjAjQZiRIMxIEGYkCDMShBkJwowEYUaCMCNBmJEgzEgQZiQIMxKE2T9+NVO4LZz2SQAAAABJRU5ErkJggg==");

},
98385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480003-6140084c1a3cfde593ff44c3368c314b.png");

},
829155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAC1CAYAAAAa5LCBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAgzSURBVHhe7d19b1NlGMfxq+0eYBMf1m4Y4h8IogLBF+A7UUNwc4kg6kAT40swJoAgCMHJYkjkZehb8AlFfAzGyGhJdDhlY63Xdc4O66T8hkAf1n0/2HWuJWvafnvf9zmnJTdfG6gZgIbyi+cAGiAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQOCfP7iNmv+Jr50jt3i+XO42P8f9QSD/EXdGzr8WrOrf9fspztt9F8Xvj9sRMdSSKBb8Foaqf0ckzUMgt6j6U7DPbGHEbsz7kzCXPinbJ2bB/vtrHojflB6/SddmCjb4yLRfMuOX9STXQnMQSJ2YVhXi1Xlhk43t/dV2PTtv5v9V23oP+S9PIvXxrM9v29yCnT25zj77dNgGH654JAt+CUvJZiGQZeKuqPpr8mZ77jmzc+d+s9nrMYVp7xMwmVAVcvb79KCd/uSavfz8Nnt003d+a3uSy5KhBU3BS88t4snmkayP85z1+TKkv62nmq3rz9sfM7324blZO/DSdnts0yW/bbEW4bWt2QikIZ9sxZzfxetzfBfnrTzF76z6n7xnMF0ZsCOnF2z/nl029MgFn/XN+qVeTxLz4hoFTUEgK0gnL+mrdStP6XqoYFcqD9ipT3zkGN9uG0tfeDxVvzwW5ktbtdA8BLKC9A5K1ybNPy2NH7GxoFxZb4cnZ2zf81usVDzvI8cNvyxk183+P80Y9x+B3JEIJF2TNPcUYiOBWaXSayd95Dg4vs3j+NFzmPdrxCWN/g6ahUA6SiTQ49OqHh855nzkeMbj+N7HiRgpsocqRg+0CoF0jGxB/qCPHFV7Y3yHDRc/95/OJdksPVQ8ZK3Evd0RYlpV8DXHBjs6NWN7X9jqcXzlacz5ZXFICaNGuxBIW9RveYrdfXmfVhXs5NlrNjG61UpDP8UOfP9pjBzZ6MHWqnYgkJbLtkDFMV81fwB8WnW1zw5PVW3f7p02Ury4OK0K8TXWH/F3WJC3A4G03NLWp14/L199wE58PG8HR3d5HF97DhHP0nWWf49WI5CWS6dKPX4+fXXAjp75y/bvif0cX3ocMbGKKRU6BYG0WOQRa4vLPq06duZvmxjbbMNDPyTTrdh3nuJh6RQ8Ei1V9WlVj5UrfXbC1xwTY0/ayNDPyU7AOO6KNz51HgJpmdiUm7fpSr8dmZyzV/c8Y6WhCz6tuu6X9S3GwZaqTkMgTRNbntL9F7WbcQzasam/7eD4VhtJDjyMIHqTa/BQdCYelaaJJ32c4sDDvF32OI6embXXxx63keKPPnLE5tv6LVTZ1it0EgJpsthaVS7n7OikxzG6zdccEUe2h7wecXQiAmmSeFdHvCF2ujxg750xm3hphw2XLvpyPEaVLA4OIel0BNIUMa0q2OXyBnvvozk7MPa0bSyd95/GIev1Iwd3f6fjEbrv0gV5euDhX3ZgfIsvyL+p2wnIYSOrCYHcs5gyZSKOOGTd7NDknzYx6nEUf/E4IogYOeLujlP930EnI5B7km3KTfeD5603+YCF96fM3hh/yqdVsSCP/RzZqJEepMgIsnoQyD3Jnuixh9zsSnnQjkz+Y6+PbreNxYsNtlbF9YljNSGQ+yBWFtOV9Xbi7IwdHH/CisXYQx5rjj4/Ma1azQjkHtx8P0dy+Mh1e3X3Zl9zfO8TqRglsijixLRqtSKQu1bzaVVsrVpnx6YWfOTYZSOln3zkiDxi9MimU8SxmhHIXVncWpWsOeZ8zRHvBPzSs4hFeKgPgjhWMwJZUUyRspEg3iYby+6CT6s2+Joj/dyq4eLXvhyPjbnZ+8eJolsQyB1L1xMFP10p99rhyWu2f/dWHzl+8Gzm/I6MKOI66CYE8j/E+HClkrf34z3k408nx1bFfo6YcKWXEki3IZA7kL6fI7ZWPWiHT5m99uJO21i8sLjiiEuIo1sRyIpiU2665jj+8ay9uTcOH8k+fSTE1IqP5ulWBLKCGB8q5X5754NZe2VP7OeITbkxWsRdF6f4PsIgjm5EIA1lT/aajxw1Oz71j72978kkjvSfIIjLY8TI9negWxFIQ3nr9WXF9RuD9u6Jmu0f22YjpW89ifjkkTi2KptO1R9nhW5EILdIF9t9uX47dOqGvfXKE8mBh/PJaBHq1xqMHt2Of+W2ThxbFdujqrUtViydt0uXdtqGgXg/RxZHvJ5k0yviWAsIZJn0rqjZOsvXHvJ757J/nw2yEUV8TxxrCVOsZdInfi0+XT13NYkjl2yzyrZUEcdaQyC3UV3cmLsccaw1BNJAeqfE6BH70NOjrLA2EcgtsqlUuqecD5Re2wikoYiCMEAggEQggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAgwG2Z/Qshslk/nItpOAAAAABJRU5ErkJggg==");

},
226787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
866879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
298784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACHCAYAAAAFgPtRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAANySURBVHhe7d29ahRRGIDhM7sbwRRWKcUrUNDa0hsQewtbG2/EIqWFYKG24n14ByJ4A4qKJgH3Zzzf/GQFE7B5M9/A+4TDbqbJYefdM5tizzTr9rAtEmgxPEoYIxPOyIQzMuGMTDgjE87IhDMy4YxMOCMTzsiEMzLhjEw4IxPOyIQzMuGMTDgjE87IhDMy4YxMOCMTzsiEMzLhjEy4xJHFF9vn9OV2v4h/maTbFMSUov+mjt917Mq2LIfjpXs2pZjFrn9aNXU+ceSwjrM6pp5dPskja8uqHNXHG3Vs64josok5fS2b8q0+rrojfYIZ5zqN1BuurGpkzeFZeX5cyo+T/eqxnHjGbe1nnMtBfS98/HCnvH3zqYZ2rR5Z1xETNLJR8siacnB0UtZfbtbfvtcxnrgsU47V9VZ5/KSU168+D5FlXXGnk/aD/7hS7IbztalHNjWu/dgmGDHLTT/Balt/DOxfif+7/B9xQqccf/MSeZm0kY0Tm8dp62drYhdLv5I1w3Wz7S5NcTmKEc/zndKZXxYwM3tdIqxxaC588wlnZMIZmXBGJpyRCWdkwhmZcEYmnJEJZ2TCGZlwRiackQlnZMIZmXBGJpyRCWdkwhmZcEYmnJEJZ2TCGZlwRiackQlnZMIZmXBGJpyRCWdkwqWN7Hw7z2GGbhY1X2kjm2dU02yY3JbTbmSVNrJ2OGG72LG8LLudsDOOfu/+cb/Y/Q0trkrEtShP618+7p5nlPpmEas67j/4We7dLuV0W48Oy1ts6JlFZLVc3y0vX8Q+/uFqd8COsCKwRXlW1vXvNt2dUXJJf9ubVffpLJ7Hycu48C7Lu/e/yqOH12tkEdfVRhbGFSxjYCHxzSL6ae1qWIuJTt7/WtW5bc4vlTnnOKW0n8n6k9XUCcZKNga3/68zk34FCwZ2kcSRjeLERVoRXNYJz+BlnNBMXh1XiDnzLSickQlnZMIZmXBGJpyRCWdkwhmZcEYmnJEJZ2TCGZlwRiackQlnZMIZmXBGJpyRCWdkwhmZcEYmnJEJZ2TCGZlwRiackQlnZMIZmXBGJpyRCWdkwhmZcEYmnJEJZ2TCGZlwRiackQlnZMIZmXBGJpyRCWdkwhmZcEYmnJEJZ2TCGZlwRiackQlnZMIZmXBGJpyRCWdkwhmZcEYmnJEJZ2TCGZlgpfwBLH7WwG6qROMAAAAASUVORK5CYII=");

},
445961(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
79591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
603497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
109194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800302-21986376ff4080010efdc8ac0d5215e4.jpeg");

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