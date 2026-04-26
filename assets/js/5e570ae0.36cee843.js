"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["28780"], {
904664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_canvas_canvas_ts_components_canvas_canvas_md_5e5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-canvas-drawing-ts-components-canvas-canvas-ts-components-canvas-canvas-md-5e5.json
var site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_canvas_canvas_ts_components_canvas_canvas_md_5e5_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas","title":"Canvas","description":"提供画布组件，用于自定义绘制图形。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas.md","sourceDirName":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas","slug":"/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Canvas","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-components-canvas-canvas"},"sidebar":"ref","previous":{"title":"Divider","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider"},"next":{"title":"CanvasGradient","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvasgradient/ts-components-canvas-canvasgradient"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas.md


const frontMatter = {
	title: 'Canvas',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-components-canvas-canvas'
};
const contentTitle = 'Canvas';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "Canvas23+",
  "id": "canvas23",
  "level": 3
}, {
  "value": "Canvas",
  "id": "canvas-1",
  "level": 3
}, {
  "value": "Canvas12+",
  "id": "canvas12",
  "level": 3
}, {
  "value": "CanvasParams23+",
  "id": "canvasparams23",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "enableAnalyzer12+",
  "id": "enableanalyzer12",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onReady",
  "id": "onready",
  "level": 3
}, {
  "value": "onReady23+",
  "id": "onready23",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（使用CanvasRenderingContext2D中的方法）",
  "id": "示例1使用canvasrenderingcontext2d中的方法",
  "level": 3
}, {
  "value": "示例2（使用DrawingRenderingContext中的方法）",
  "id": "示例2使用drawingrenderingcontext中的方法",
  "level": 3
}, {
  "value": "示例3（使用attributeModifier动态设置Canvas组件的属性及方法）",
  "id": "示例3使用attributemodifier动态设置canvas组件的属性及方法",
  "level": 3
}, {
  "value": "示例4（创建不缓存指令Canvas并进行绘制）",
  "id": "示例4创建不缓存指令canvas并进行绘制",
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
        id: "canvas",
        children: "Canvas"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供画布组件，用于自定义绘制图形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(820524)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canvas23",
      children: "Canvas23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas(params: CanvasParams)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用CanvasParams创建不缓存指令的Canvas组件。创建Canvas组件时，最大面积不超过10000px*10000px，超过最大面积则无法正常创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132742)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用本接口创建的Canvas组件将在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#onready23",
          children: "onReady23+"
        }), "回调的入参中返回一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext",
          children: "DrawingRenderingContext12+"
        }), "对象，可用于在该Canvas组件上进行绘制。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用这个接口创建的Canvas组件在组件不可见时将不响应绘制指令。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不可见场景主要包括组件所在的页面进入后台、组件滑到窗口外、设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility#visibility",
          children: "visibility"
        }), "属性为隐藏等，不包括组件被其他组件或是其他窗口遮挡导致不可见的场景。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#canvasparams23",
              children: "CanvasParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canvas组件的构造参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canvas-1",
      children: "Canvas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas(context?: CanvasRenderingContext2D | DrawingRenderingContext)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Canvas组件时，最大面积不超过10000px*10000px，超过最大面积则无法正常创建。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext",
              children: "DrawingRenderingContext12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canvas12",
      children: "Canvas12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas(context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Canvas组件，支持设置CanvasRenderingContext2D对象或DrawingRenderingContext对象，支持设置AI分析选项。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext",
              children: "DrawingRenderingContext12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageAIOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageaioptions12",
              children: "ImageAIOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。  异常值null和undefined按", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageaioptions12",
              children: "ImageAIOptions"
            }), "的默认值处理，默认取值为{ type: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT], aiController: new ImageAnalyzerController() }，即开启主体识别和文字识别功能。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "canvasparams23",
      children: "CanvasParams23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Canvas的具体配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetricsunit12",
              children: "LengthMetricsUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述Canvas绘制时所采用的单位模式。  仅可在创建Canvas时设置，后续不可修改。  默认值：LengthMetricsUnit.DEFAULT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageAIOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageaioptions12",
              children: "ImageAIOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableanalyzer12",
      children: "enableAnalyzer12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要搭配", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#startimageanalyzer12",
        children: "StartImageAnalyzer"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d#stopimageanalyzer12",
        children: "StopImageAnalyzer"
      }), "一起使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不能和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-overlay/ts-universal-attributes-overlay#overlay",
        children: "overlay"
      }), "属性同时使用，两者同时设置时overlay中CustomBuilder属性将失效。该特性依赖设备能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60446)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件支持AI分析，需要组件内容支持主体识别、文字识别或对象查找。  设置为true时，组件可进行AI分析，设置为false时，组件不可进行AI分析。  异常值null和undefined按默认值处理。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持如下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onready",
      children: "onReady"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReady(event: VoidCallback)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canvas组件初始化完成或者发生大小变化时的事件回调，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当该事件被触发时画布被清空，该事件之后Canvas组件宽高确定且可获取，可使用Canvas相关API进行绘制。当Canvas组件仅发生位置变化时，只触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-area-change-event/ts-universal-component-area-change-event#onareachange",
        children: "onAreaChange"
      }), "事件，不触发onReady事件。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-area-change-event/ts-universal-component-area-change-event#onareachange",
        children: "onAreaChange"
      }), "事件在onReady事件后触发。"]
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#voidcallback12",
              children: "VoidCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canvas组件初始化完成或者发生大小变化时的事件回调事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onready23",
      children: "onReady23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReady(event: Callback<DrawingRenderingContext | undefined> | undefined)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canvas组件初始化完成或者发生大小变化时的事件回调，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当该事件被触发时画布被清空，该事件之后Canvas组件宽高确定且可获取，可使用Canvas相关API进行绘制。当Canvas组件仅发生位置变化时，只触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-area-change-event/ts-universal-component-area-change-event#onareachange",
        children: "onAreaChange"
      }), "事件，不触发onReady事件。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-area-change-event/ts-universal-component-area-change-event#onareachange",
        children: "onAreaChange"
      }), "事件在onReady事件后触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 23开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "event"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext",
              children: "DrawingRenderingContext"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1使用canvasrenderingcontext2d中的方法",
      children: "示例1（使用CanvasRenderingContext2D中的方法）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例实现了如何在Canvas组件使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "中的方法进行绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.context.fillRect(0, 30, 100, 100)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(792766)/* ["default"] */.A) + "",
        width: "220",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2使用drawingrenderingcontext中的方法",
      children: "示例2（使用DrawingRenderingContext中的方法）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例实现了如何在Canvas组件使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext",
        children: "DrawingRenderingContext"
      }), "中的方法进行绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CanvasExample {\n  private context: DrawingRenderingContext = new DrawingRenderingContext();\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('rgb(213,213,213)')\n        .onReady(() => {\n          this.context.canvas.drawCircle(200, 200, 100)\n          this.context.invalidate()\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(354042)/* ["default"] */.A) + "",
        width: "244",
        height: "312"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3使用attributemodifier动态设置canvas组件的属性及方法",
      children: "示例3（使用attributeModifier动态设置Canvas组件的属性及方法）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例展示了如何使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置Canvas组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enableanalyzer12",
        children: "enableAnalyzer"
      }), "属性和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onready",
        children: "onReady"
      }), "方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(602061)/* ["default"] */.A) + "",
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
        children: "// xxx.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass MyCanvasModifier implements AttributeModifier<CanvasAttribute> {\n  context: CanvasRenderingContext2D = new CanvasRenderingContext2D()\n\n  applyNormalAttribute(instance: CanvasAttribute): void {\n    // 从（0，0）绘制一张宽高为200vp的图片\n    instance.onReady(() => {\n      // \"common/img.png\"需要替换为开发者所需的图像资源文件\n      let image = new ImageBitmap(\"common/img.png\")\n      this.context.drawImage(image, 0, 0, 200, 200)\n    })\n    // 设置开启组件AI分析功能，点击start后，长按触发AI识别功能\n    instance.enableAnalyzer(true)\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo {\n  @State modifier: MyCanvasModifier = new MyCanvasModifier()\n  private settings: RenderingContextSettings = new RenderingContextSettings(true)\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings)\n  private config: ImageAnalyzerConfig = {\n    types: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT]\n  }\n  private aiController: ImageAnalyzerController = new ImageAnalyzerController()\n  private options: ImageAIOptions = {\n    types: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT],\n    aiController: this.aiController\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Button('start')\n          .width(100)\n          .height(50)\n          .margin(5)\n          .onClick(() => {\n            this.context.startImageAnalyzer(this.config)\n              .then(() => {\n                console.info(\"analysis complete\")\n              })\n              .catch((error: BusinessError) => {\n                let e: BusinessError = error as BusinessError\n                console.error(`Error code: ${e.code}, message: ${e.message}`)\n              })\n          })\n        Button('stop')\n          .width(100)\n          .height(50)\n          .margin(5)\n          .onClick(() => {\n            this.context.stopImageAnalyzer()\n          })\n        Button('getTypes')\n          .width(100)\n          .height(50)\n          .margin(5)\n          .onClick(() => {\n            this.aiController.getImageAnalyzerSupportTypes()\n          })\n        Canvas(this.context, this.options)\n          .borderWidth(1)\n          .height(200)\n          .width(200)\n          .attributeModifier(this.modifier)\n          .onAppear(() => {\n            this.modifier.context = this.context\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614361)/* ["default"] */.A) + "",
        width: "313",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4创建不缓存指令canvas并进行绘制",
      children: "示例4（创建不缓存指令Canvas并进行绘制）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例介绍了如何使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#canvasparams23",
        children: "CanvasParams"
      }), "创建不缓存指令的Canvas组件并进行绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增CanvasParams接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetricsUnit } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct CanvasExample {\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas({ unit: LengthMetricsUnit.DEFAULT })\n        .onReady((drawingContext?: DrawingRenderingContext) => {\n          if (!drawingContext) {\n            return\n          }\n          // 使用DrawingRenderingContext进行绘制。\n          let brush = new drawing.Brush()\n          brush.setColor({\n            alpha: 255,\n            red: 39,\n            green: 135,\n            blue: 217\n          })\n          drawingContext.canvas.attachBrush(brush)\n          drawingContext.canvas.drawCircle(200, 200, 100)\n          drawingContext.invalidate()\n\n          // 使用CanvasRenderingContext2D进行绘制。\n          let context2D: CanvasRenderingContext2D =\n            CanvasRenderingContext2D.getContext2DFromDrawingContext(drawingContext, { antialias: true })\n          context2D.fillStyle = 'rgb(39,135,217)'\n          context2D.fillRect(110, 30, 100, 100)\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(188505)/* ["default"] */.A) + "",
        width: "202",
        height: "123"
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
60446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
354042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
132742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
792766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439971-a9e075b4f2e9195c7800c577b99708be.png");

},
820524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
614361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479927-2a57d95a28957774a815b94fe35b12cd.png");

},
602061(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
188505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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