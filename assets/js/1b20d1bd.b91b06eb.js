"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["691928"], {
170024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_graphics_js_apis_arkui_graphics_md_1b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-ui-interface-arkui-js-apis-arkui-graphics-js-apis-arkui-graphics-md-1b2.json
var site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_graphics_js_apis_arkui_graphics_md_1b2_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics","title":"Graphics","description":"自定义节点相关属性定义的详细信息。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics.md","sourceDirName":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics","slug":"/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Graphics","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-graphics"},"sidebar":"ref","previous":{"title":"FrameNode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode"},"next":{"title":"NodeController","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics.md


const frontMatter = {
	title: 'Graphics',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-graphics'
};
const contentTitle = 'Graphics';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "Size",
  "id": "size",
  "level": 2
}, {
  "value": "Position",
  "id": "position",
  "level": 2
}, {
  "value": "PositionT12+",
  "id": "positiont12",
  "level": 2
}, {
  "value": "Frame",
  "id": "frame",
  "level": 2
}, {
  "value": "Pivot",
  "id": "pivot",
  "level": 2
}, {
  "value": "Scale",
  "id": "scale",
  "level": 2
}, {
  "value": "Translation",
  "id": "translation",
  "level": 2
}, {
  "value": "Rotation",
  "id": "rotation",
  "level": 2
}, {
  "value": "Offset",
  "id": "offset",
  "level": 2
}, {
  "value": "Matrix4",
  "id": "matrix4",
  "level": 2
}, {
  "value": "Vector2",
  "id": "vector2",
  "level": 2
}, {
  "value": "Vector3",
  "id": "vector3",
  "level": 2
}, {
  "value": "Vector2T&lt;T&gt;12+",
  "id": "vector2tt12",
  "level": 2
}, {
  "value": "DrawContext",
  "id": "drawcontext",
  "level": 2
}, {
  "value": "size",
  "id": "size-1",
  "level": 3
}, {
  "value": "sizeInPixel12+",
  "id": "sizeinpixel12",
  "level": 3
}, {
  "value": "canvas",
  "id": "canvas",
  "level": 3
}, {
  "value": "Edges&lt;T&gt;12+",
  "id": "edgest12",
  "level": 2
}, {
  "value": "LengthUnit12+",
  "id": "lengthunit12",
  "level": 2
}, {
  "value": "SizeT&lt;T&gt;12+",
  "id": "sizett12",
  "level": 2
}, {
  "value": "LengthMetricsUnit12+",
  "id": "lengthmetricsunit12",
  "level": 2
}, {
  "value": "LengthMetrics12+",
  "id": "lengthmetrics12",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 3
}, {
  "value": "px12+",
  "id": "px12",
  "level": 3
}, {
  "value": "vp12+",
  "id": "vp12",
  "level": 3
}, {
  "value": "fp12+",
  "id": "fp12",
  "level": 3
}, {
  "value": "percent12+",
  "id": "percent12",
  "level": 3
}, {
  "value": "lpx12+",
  "id": "lpx12",
  "level": 3
}, {
  "value": "resource12+",
  "id": "resource12",
  "level": 3
}, {
  "value": "ColorMetrics12+",
  "id": "colormetrics12",
  "level": 2
}, {
  "value": "numeric12+",
  "id": "numeric12",
  "level": 3
}, {
  "value": "rgba12+",
  "id": "rgba12",
  "level": 3
}, {
  "value": "colorWithSpace20+",
  "id": "colorwithspace20",
  "level": 3
}, {
  "value": "resourceColor12+",
  "id": "resourcecolor12",
  "level": 3
}, {
  "value": "blendColor12+",
  "id": "blendcolor12",
  "level": 3
}, {
  "value": "color12+",
  "id": "color12",
  "level": 3
}, {
  "value": "red12+",
  "id": "red12",
  "level": 3
}, {
  "value": "green12+",
  "id": "green12",
  "level": 3
}, {
  "value": "blue12+",
  "id": "blue12",
  "level": 3
}, {
  "value": "alpha12+",
  "id": "alpha12",
  "level": 3
}, {
  "value": "Corners&lt;T&gt;12+",
  "id": "cornerst12",
  "level": 2
}, {
  "value": "CornerRadius12+",
  "id": "cornerradius12",
  "level": 2
}, {
  "value": "BorderRadiuses12+",
  "id": "borderradiuses12",
  "level": 2
}, {
  "value": "Rect12+",
  "id": "rect12",
  "level": 2
}, {
  "value": "RoundRect12+",
  "id": "roundrect12",
  "level": 2
}, {
  "value": "Circle12+",
  "id": "circle12",
  "level": 2
}, {
  "value": "CommandPath12+",
  "id": "commandpath12",
  "level": 2
}, {
  "value": "ShapeMask12+",
  "id": "shapemask12",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "constructor12+",
  "id": "constructor12-1",
  "level": 3
}, {
  "value": "setRectShape12+",
  "id": "setrectshape12",
  "level": 3
}, {
  "value": "setRoundRectShape12+",
  "id": "setroundrectshape12",
  "level": 3
}, {
  "value": "setCircleShape12+",
  "id": "setcircleshape12",
  "level": 3
}, {
  "value": "setOvalShape12+",
  "id": "setovalshape12",
  "level": 3
}, {
  "value": "setCommandPath12+",
  "id": "setcommandpath12",
  "level": 3
}, {
  "value": "ShapeClip12+",
  "id": "shapeclip12",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12-2",
  "level": 3
}, {
  "value": "setRectShape12+",
  "id": "setrectshape12-1",
  "level": 3
}, {
  "value": "setRoundRectShape12+",
  "id": "setroundrectshape12-1",
  "level": 3
}, {
  "value": "setCircleShape12+",
  "id": "setcircleshape12-1",
  "level": 3
}, {
  "value": "setOvalShape12+",
  "id": "setovalshape12-1",
  "level": 3
}, {
  "value": "setCommandPath12+",
  "id": "setcommandpath12-1",
  "level": 3
}, {
  "value": "edgeColors12+",
  "id": "edgecolors12",
  "level": 2
}, {
  "value": "edgeWidths12+",
  "id": "edgewidths12",
  "level": 2
}, {
  "value": "borderStyles12+",
  "id": "borderstyles12",
  "level": 2
}, {
  "value": "borderRadiuses12+",
  "id": "borderradiuses12-1",
  "level": 2
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
    number: "number",
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
        id: "graphics",
        children: "Graphics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义节点相关属性定义的详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(519573)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawContext, Size, Offset, Position, Pivot, Scale, Translation, Matrix4, Rotation, Frame, LengthMetricsUnit } from \"@kit.ArkUI\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "size",
      children: "Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于返回组件布局大小的宽和高。默认单位为vp，不同的接口使用Size类型时会再定义单位，以接口定义的单位为准。"
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
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件大小的宽度。  单位：vp  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件大小的高度。  单位：vp  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "position",
      children: "Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Position = Vector2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置或返回组件的位置。"
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
              href: "#vector2",
              children: "Vector2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含x和y两个值的向量。  单位：vp"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "positiont12",
      children: "PositionT12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PositionT<T> = Vector2T<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置或返回组件的位置。"
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
              href: "#vector2tt12",
              children: "Vector2T<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含x和y两个值的向量。  单位：vp"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frame",
      children: "Frame"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置或返回组件的布局大小和位置。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平方向位置。  单位：vp  取值范围：(-∞, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直方向位置。  单位：vp  取值范围：(-∞, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件的宽度。  单位：vp  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件的高度。  单位：vp  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pivot",
      children: "Pivot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Pivot = Vector2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置组件的轴心坐标，轴心会作为组件的旋转/缩放中心点，影响旋转和缩放效果。"
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
              href: "#vector2",
              children: "Vector2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴心的x和y轴坐标。该参数为浮点数，默认值为0.5， 取值范围为[0.0, 1.0]。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scale",
      children: "Scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Scale = Vector2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置组件的缩放比例。"
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
              href: "#vector2",
              children: "Vector2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x和y轴的缩放参数。该参数为浮点数，默认值为1.0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "translation",
      children: "Translation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Translation = Vector2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置组件的平移量。"
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
              href: "#vector2",
              children: "Vector2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x和y轴的平移量。  单位：px"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rotation",
      children: "Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Rotation = Vector3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置组件的旋转角度。"
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
              href: "#vector3",
              children: "Vector3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x、y、z轴方向的旋转角度。  单位：度"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offset",
      children: "Offset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Offset = Vector2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置组件或效果的偏移。"
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
              href: "#vector2",
              children: "Vector2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x和y轴方向的偏移量。  单位：vp"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "matrix4",
      children: "Matrix4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Matrix4 = [number,number,number,number,number,number,number,number,number,number,number,number,number,number,number,number]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置四阶矩阵。"
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
            children: "[number,number,number,number,  number,number,number,number,  number,number,number,number,  number,number,number,number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数为长度为16（4*4）的number数组。  各number取值范围：(-∞, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置组件的变换信息，该类型为一个 4x4 矩阵，使用一个长度为16的number[]进行表示，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const transform: Matrix4 = [\n  1, 0, 45, 0,\n  0, 1,  0, 0,\n  0, 0,  1, 0,\n  0, 0,  0, 1\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector2",
      children: "Vector2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示包含x和y两个值的向量。"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量x轴方向的值。  取值范围：(-∞, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量y轴方向的值。  取值范围：(-∞, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector3",
      children: "Vector3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示包含x、y、z三个值的向量。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴方向的旋转角度。  取值范围：(-∞, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向的旋转角度。  取值范围：(-∞, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z轴方向的旋转角度。  取值范围：(-∞, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector2tt12",
      children: "Vector2T<T>12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示T类型的包含x和y两个值的向量。"
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量x轴方向的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量y轴方向的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawcontext",
      children: "DrawContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图形绘制上下文，提供绘制所需的画布宽度和高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "size-1",
      children: "size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get size(): Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画布的宽度和高度。"
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
              href: "#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布的宽度和高度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sizeinpixel12",
      children: "sizeInPixel12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get sizeInPixel(): Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取以px为单位的画布的宽度和高度。"
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
              href: "#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布的宽度和高度，以px为单位。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canvas",
      children: "canvas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get canvas(): drawing.Canvas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用于绘制的画布。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
              children: "drawing.Canvas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于绘制的画布。"
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
        children: "import { RenderNode, FrameNode, NodeController, DrawContext } from \"@kit.ArkUI\";\n\nclass MyRenderNode extends RenderNode {\n  flag: boolean = false;\n\n  draw(context: DrawContext) {\n    const size = context.size;\n    const canvas = context.canvas;\n    const sizeInPixel = context.sizeInPixel;\n  }\n}\n\nconst renderNode = new MyRenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 100, height: 100 };\nrenderNode.backgroundColor = 0xff519db4;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(980875)/* ["default"] */.A) + "",
        width: "288",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edgest12",
      children: "Edges<T>12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置边框的属性。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左侧边框的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "顶部边框的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧边框的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "底部边框的属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lengthunit12",
      children: "LengthUnit12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长度属性单位枚举。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述以px像素单位为单位的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述以vp像素单位为单位的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述以fp像素单位为单位的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERCENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述以%像素单位为单位的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LPX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述以lpx像素单位为单位的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sizett12",
      children: "SizeT<T>12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置宽高的属性。"
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
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度的属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lengthmetricsunit12",
      children: "LengthMetricsUnit12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长度属性单位枚举。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述以默认的vp像素单位为单位的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述以px像素单位为单位的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lengthmetrics12",
      children: "LengthMetrics12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置长度属性，当长度单位为PERCENT时，值为1表示100%。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#lengthunit12",
              children: "LengthUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的单位，默认为VP。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(value: number, unit?: LengthUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LengthMetrics的构造函数。若参数unit不传入值或传入undefined，返回值使用默认单位VP；若unit传入非LengthUnit类型的值，返回默认值0VP。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#lengthunit12",
              children: "LengthUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "px12",
      children: "px12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static px(value: number): LengthMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成单位为PX的长度属性。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。  取值范围：(-∞, +∞)"
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
              href: "#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LengthMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vp12",
      children: "vp12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static vp(value: number): LengthMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成单位为VP的长度属性。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。  取值范围：(-∞, +∞)"
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
              href: "#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LengthMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fp12",
      children: "fp12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static fp(value: number): LengthMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成单位为FP的长度属性。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。  取值范围：(-∞, +∞)"
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
              href: "#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LengthMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "percent12",
      children: "percent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static percent(value: number): LengthMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成单位为PERCENT的长度属性，值为1表示100%。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。  取值范围：[0, 1]"
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
              href: "#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LengthMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lpx12",
      children: "lpx12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static lpx(value: number): LengthMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成单位为LPX的长度属性。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。  取值范围：(-∞, +∞)"
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
              href: "#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LengthMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource12",
      children: "resource12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static resource(value: Resource): LengthMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成Resource类型资源的长度属性。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度属性的值。"
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
              href: "#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LengthMetrics 类的实例。"
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
      children: "使用LengthMetrics设置Row的padding和margin属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics, LengthUnit } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SizeExample {\n  build() {\n    Column({ space: 10 }) {\n      Text('margin and padding:')\n        .fontSize(12)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n      Row() {\n        Row() {\n          Row()\n            .size({ width: '100%', height: '100%' })\n            .backgroundColor('#ffd5d5d5')\n        }\n        .width(80)\n        .height(80)\n        .padding({\n          top: new LengthMetrics(20, LengthUnit.VP),\n          bottom: LengthMetrics.px(15),\n          start: LengthMetrics.vp(10),\n          end: LengthMetrics.fp(20)\n        })\n        .margin({\n          top: LengthMetrics.percent(0.1),\n          bottom: LengthMetrics.lpx(20),\n          start: LengthMetrics.resource($r('app.float.row_margin_start')),\n          end: LengthMetrics.vp(10)\n        })\n        .backgroundColor(Color.White)\n      }\n      .backgroundColor(\"#ff2787d9\")\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61838)/* ["default"] */.A) + "",
        width: "344",
        height: "230"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "colormetrics12",
      children: "ColorMetrics12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于混合颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numeric12",
      children: "numeric12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static numeric(value: number): ColorMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用HEX格式颜色实例化 ColorMetrics 类。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEX格式颜色。  取值范围：支持rgb或者argb"
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
              href: "#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rgba12",
      children: "rgba12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用rgb或者rgba格式颜色实例化 ColorMetrics 类。"
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
            children: "red"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的R分量（红色），值是0~255的整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的G分量（绿色），值是0~255的整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的B分量（蓝色），值是0~255的整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alpha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " alpha小于0为全透明，大于1为不透明。"]
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
              href: "#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colorwithspace20",
      children: "colorWithSpace20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#colorspace20",
        children: "ColorSpace"
      }), "和rgba格式颜色实例化ColorMetrics类。仅部分属性支持在display-p3色彩空间中设置颜色。"]
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
            children: "colorSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#colorspace20",
              children: "ColorSpace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["颜色空间，用于指定颜色的色彩空间。使用ColorSpace.DISPLAY_P3，需要对应窗口调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowcolorspace9-1",
              children: "setWindowColorSpace"
            }), "接口，将当前窗口设置为广色域模式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "red"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的R分量（红色），值是0~1的浮动数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的G分量（绿色），值是0~1的浮动数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的B分量（蓝色），值是0~1的浮动数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alpha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。"
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
              href: "#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorMetrics类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resourcecolor12",
      children: "resourceColor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static resourceColor(color: ResourceColor): ColorMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用资源格式颜色实例化 ColorMetrics 类。"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源格式颜色。"
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
              href: "#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorMetrics 类的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-system-resource/errorcode-system-resource",
        children: "系统资源错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible cause:1.The type of the input color parameter is not ResourceColor;2.The format of the input color string is not RGB or RGBA."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "180003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to obtain the color resource."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blendcolor12",
      children: "blendColor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blendColor(overlayColor: ColorMetrics): ColorMetrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前颜色的上方叠加上一层指定的颜色（overlayColor），并返回混合后的新颜色。"
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
            children: "overlayColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要叠加在上方的颜色对象。alpha属性决定叠加强度。1.0表示完全覆盖，0.0表示完全透明，混合结果为原色。"
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
              href: "#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的颜色对象，其red、green、blue和alpha通道均为当前颜色与叠加颜色混合后的结果值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "混合公式："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混合后透明度为完全不透明，rgb按照以下公式计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "result_rgb = overlay_rgb*(overlay_alpha) + (1 - overlay_alpha) * base_rgb"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. The type of the input parameter is not ColorMetrics."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "color12",
      children: "color12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get color(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ColorMetrics的颜色，返回的是rgba字符串的格式。"
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
            children: "rgba字符串格式的颜色。 示例：'rgba(255, 100, 255, 0.5)'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "red12",
      children: "red12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get red(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ColorMetrics颜色的R分量（红色）。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的R分量（红色），值是0~255的整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "green12",
      children: "green12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get green(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ColorMetrics颜色的G分量（绿色）。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的G分量（绿色），值是0~255的整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blue12",
      children: "blue12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get blue(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ColorMetrics颜色的B分量（蓝色）。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的B分量（蓝色），值是0~255的整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alpha12",
      children: "alpha12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get alpha(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ColorMetrics颜色的A分量（透明度）。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色的A分量（透明度），值是0~255的整数。"
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
        children: "import { ColorMetrics } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction getBlendColor(baseColor: ResourceColor): ColorMetrics {\n  let sourceColor: ColorMetrics;\n  try {\n    // 在使用ColorMetrics的resourceColor和blendColor需要追加捕获异常处理\n    // 可能返回的arkui子系统错误码有401和180003\n    // 61 157 180\n    sourceColor = ColorMetrics.resourceColor(baseColor).blendColor(ColorMetrics.resourceColor(\"#083d9db4\"));\n    console.info(`current color is ${sourceColor.color} r:${sourceColor.red} g:${sourceColor.green} b:${sourceColor.blue} a :${sourceColor.alpha}`);\n  } catch (error) {\n    console.error(\"getBlendColor failed, code = \" + (error as BusinessError).code + \", message = \" +\n    (error as BusinessError).message);\n    sourceColor = ColorMetrics.resourceColor(\"#19000000\");\n  }\n  return sourceColor;\n}\n\n@Entry\n@Component\nstruct ColorMetricsSample {\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Button(\"ColorMetrics blendColor\")\n        .width('80%')\n        .align(Alignment.Center)\n        .height(50)\n        .backgroundColor(getBlendColor(\"#ff3d9db4\").color)\n        .margin(10)\n      Button(\"ColorMetrics numeric\")\n        .width('80%')\n        .align(Alignment.Center)\n        .height(50)\n        .backgroundColor(ColorMetrics.numeric(0xff707070).color)\n        .margin(10)\n      Button(\"ColorMetrics rgba\")\n        .width('80%')\n        .align(Alignment.Center)\n        .height(50)\n        .backgroundColor(ColorMetrics.rgba(0, 74, 175, 255).color)\n        .margin(10)\n      Button(\"ColorMetrics colorWithSpace\")\n        .width('80%')\n        .align(Alignment.Center)\n        .height(50)\n        .backgroundColor(ColorMetrics.colorWithSpace(ColorSpace.SRGB, 0.4392, 0.4392, 0.4392).color)\n        .margin(10)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251054)/* ["default"] */.A) + "",
        width: "324",
        height: "226"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cornerst12",
      children: "Corners<T>12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置四个角的圆角属性。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "topLeft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左上边框的圆角属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "topRight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右上边框的圆角属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottomLeft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左下边框的圆角属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottomRight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右下边框的圆角属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cornerradius12",
      children: "CornerRadius12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type CornerRadius = Corners<Vector2>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置四个角的圆角x轴与y轴的半轴长。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#cornerst12",
              children: "Corners"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vector2",
              children: "Vector2"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四个角的圆角x轴与y轴的半轴长。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "borderradiuses12",
      children: "BorderRadiuses12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type BorderRadiuses = Corners<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置四个角的圆角半径。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#cornerst12",
              children: "Corners"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四个角的圆角半径。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rect12",
      children: "Rect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Rect = common2D.Rect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置矩形的形状。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
              children: "common2D.Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形区域。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "roundrect12",
      children: "RoundRect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置带有圆角的矩形。"
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
            children: "rect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rect12",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置矩形的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "corners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cornerradius12",
              children: "CornerRadius"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置圆角的属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "circle12",
      children: "Circle12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置圆形的属性。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "centerX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆心x轴的位置，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "centerY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆心y轴的位置，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形的半径，单位为px。  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "commandpath12",
      children: "CommandPath12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置路径绘制的指令。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path#commands",
              children: "commands"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["路径绘制的指令字符串。像素单位的转换方法请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
              children: "像素单位"
            }), "。  单位：px"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shapemask12",
      children: "ShapeMask12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置图形遮罩。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "fillColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["遮罩的填充颜色，使用ARGB格式。默认值为0XFF000000。  通过fillColor的透明度和亮度生成一个仅含透明度的颜色。亮度越高，颜色越透明。然后，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#blendmode",
              children: "BlendMode.SRC_IN"
            }), "方式与RenderNode本身的颜色混合，生成最终颜色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["遮罩的边框颜色，使用ARGB格式。默认值为0XFF000000。  通过strokeColor的透明度和亮度生成一个仅含透明度的颜色。亮度越高，颜色越透明。然后，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#blendmode",
              children: "BlendMode.SRC_IN"
            }), "方式与RenderNode本身的颜色混合，生成最终颜色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遮罩的边框宽度，单位为px。默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12-1",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ShapeMask的构造函数。"
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
      id: "setrectshape12",
      children: "setRectShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setRectShape(rect: Rect): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置矩形遮罩。"
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
            children: "rect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rect12",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeMask } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const mask = new ShapeMask();\n    mask.setRectShape({\n      left: 0,\n      right: uiContext.vp2px(150),\n      top: 0,\n      bottom: uiContext.vp2px(150)\n    });\n    mask.fillColor = 0X55FF0000;\n\n    const renderNode = new RenderNode();\n    renderNode.frame = {\n      x: 0,\n      y: 0,\n      width: 150,\n      height: 150\n    };\n    renderNode.backgroundColor = 0XFF00FF00;\n    renderNode.shapeMask = mask;\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(858132)/* ["default"] */.A) + "",
        width: "293",
        height: "285"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setroundrectshape12",
      children: "setRoundRectShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setRoundRectShape(roundRect: RoundRect): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置圆角矩形遮罩。"
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
            children: "roundRect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#roundrect12",
              children: "RoundRect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆角矩形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeMask,RoundRect} from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const mask = new ShapeMask();\n    const roundRect: RoundRect = {\n      rect: { left: 0, top: 0, right: uiContext.vp2px(150), bottom: uiContext.vp2px(150) },\n      corners: {\n        topLeft: { x: 32, y: 32 },\n        topRight: { x: 32, y: 32 },\n        bottomLeft: { x: 32, y: 32 },\n        bottomRight: { x: 32, y: 32 }\n      }\n    }\n    mask.setRoundRectShape(roundRect);\n    mask.fillColor = 0X55FF0000;\n\n    const renderNode = new RenderNode();\n    renderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\n    renderNode.backgroundColor = 0XFF00FF00;\n    renderNode.shapeMask = mask;\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(871623)/* ["default"] */.A) + "",
        width: "288",
        height: "283"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcircleshape12",
      children: "setCircleShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCircleShape(circle: Circle): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置圆形遮罩。"
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
            children: "circle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#circle12",
              children: "Circle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeMask } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const mask = new ShapeMask();\n    mask.setCircleShape({ centerY: uiContext.vp2px(75), centerX: uiContext.vp2px(75), radius: uiContext.vp2px(75) });\n    mask.fillColor = 0X55FF0000;\n\n    const renderNode = new RenderNode();\n    renderNode.frame = {\n      x: 0,\n      y: 0,\n      width: 150,\n      height: 150\n    };\n    renderNode.backgroundColor = 0XFF00FF00;\n    renderNode.shapeMask = mask;\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(299368)/* ["default"] */.A) + "",
        width: "279",
        height: "292"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setovalshape12",
      children: "setOvalShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setOvalShape(oval: Rect): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置椭圆形遮罩。"
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
            children: "oval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rect12",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeMask } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const mask = new ShapeMask();\n    mask.setOvalShape({ left: 0, right: uiContext.vp2px(150), top: 0, bottom: uiContext.vp2px(100) });\n    mask.fillColor = 0X55FF0000;\n\n    const renderNode = new RenderNode();\n    renderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\n    renderNode.backgroundColor = 0XFF00FF00;\n    renderNode.shapeMask = mask;\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618104)/* ["default"] */.A) + "",
        width: "300",
        height: "209"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcommandpath12",
      children: "setCommandPath12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCommandPath(path: CommandPath): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置路径绘制指令。"
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#commandpath12",
              children: "CommandPath"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径绘制指令。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeMask } from '@kit.ArkUI';\n\nconst mask = new ShapeMask();\nmask.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\nmask.fillColor = 0X55FF0000;\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0XFF00FF00;\nrenderNode.shapeMask = mask;\n\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(225708)/* ["default"] */.A) + "",
        width: "200",
        height: "198"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shapeclip12",
      children: "ShapeClip12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置图形裁剪。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12-2",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ShapeClip的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setrectshape12-1",
      children: "setRectShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setRectShape(rect: Rect): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "rect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rect12",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeClip } from '@kit.ArkUI';\n\nconst clip = new ShapeClip();\nclip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0xff519db4;\nrenderNode.shapeClip = clip;\nconst shapeClip = renderNode.shapeClip;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n        .margin({ bottom: 20 })\n      Button(\"setRectShape\")\n        .onClick(() => {\n          shapeClip.setRectShape({\n            left: 0,\n            right: 150,\n            top: 0,\n            bottom: 150\n          });\n          renderNode.shapeClip = shapeClip;\n        })\n    }.margin(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(993900)/* ["default"] */.A) + "",
        width: "300",
        height: "375"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setroundrectshape12-1",
      children: "setRoundRectShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setRoundRectShape(roundRect: RoundRect): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪圆角矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "roundRect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#roundrect12",
              children: "RoundRect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆角矩形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeClip } from '@kit.ArkUI';\n\nconst clip = new ShapeClip();\nclip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0XFF00FF00;\nrenderNode.shapeClip = clip;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n      Button(\"setRoundRectShape\")\n        .onClick(() => {\n          renderNode.shapeClip.setRoundRectShape({\n            rect: {\n              left: 0,\n              top: 0,\n              right: this.getUIContext().vp2px(150),\n              bottom: this.getUIContext().vp2px(150)\n            },\n            corners: {\n              topLeft: { x: 32, y: 32 },\n              topRight: { x: 32, y: 32 },\n              bottomLeft: { x: 32, y: 32 },\n              bottomRight: { x: 32, y: 32 }\n            }\n          });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcircleshape12-1",
      children: "setCircleShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCircleShape(circle: Circle): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪圆形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "circle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#circle12",
              children: "Circle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeClip } from '@kit.ArkUI';\n\nconst clip = new ShapeClip();\nclip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0XFF00FF00;\nrenderNode.shapeClip = clip;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n      Button(\"setCircleShape\")\n        .onClick(() => {\n          renderNode.shapeClip.setCircleShape({ centerY: 75, centerX: 75, radius: 75 });\n\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setovalshape12-1",
      children: "setOvalShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setOvalShape(oval: Rect): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪椭圆形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "oval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rect12",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆形的形状。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeClip } from '@kit.ArkUI';\n\nconst clip = new ShapeClip();\nclip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0XFF00FF00;\nrenderNode.shapeClip = clip;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n      Button(\"setOvalShape\")\n        .onClick(() => {\n          renderNode.shapeClip.setOvalShape({\n            left: 0,\n            right: this.getUIContext().vp2px(150),\n            top: 0,\n            bottom: this.getUIContext().vp2px(100)\n          });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcommandpath12-1",
      children: "setCommandPath12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCommandPath(path: CommandPath): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于裁剪路径绘制指令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
              href: "#commandpath12",
              children: "CommandPath"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径绘制指令。"
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
        children: "import { RenderNode, FrameNode, NodeController, ShapeClip } from '@kit.ArkUI';\n\nconst clip = new ShapeClip();\nclip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0XFF00FF00;\nrenderNode.shapeClip = clip;\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n      Button(\"setCommandPath\")\n        .onClick(() => {\n          renderNode.shapeClip.setCommandPath({ commands: \"M100 0 L0 100 L50 200 L150 200 L200 100 Z\" });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edgecolors12",
      children: "edgeColors12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "edgeColors(all: number): Edges<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成边框颜色均设置为传入值的边框颜色对象。"
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
            children: "all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框颜色，ARGB格式，示例：0xffff00ff。  取值范围：[0, 0xffffffff]"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#edgest12",
              children: "Edges"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框颜色均设置为传入值的边框颜色对象。"
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
        children: "import { RenderNode, FrameNode, NodeController, edgeColors } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = { x: 0, y: 0, width: 150, height: 150 };\nrenderNode.backgroundColor = 0xffd5d5d5;\nrenderNode.borderWidth = { left: 8, top: 8, right: 8, bottom: 8 };\nrenderNode.borderColor = edgeColors(0xff519db4);\n\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }.margin(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470465)/* ["default"] */.A) + "",
        width: "310",
        height: "292"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edgewidths12",
      children: "edgeWidths12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "edgeWidths(all: number): Edges<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成边框宽度均设置为传入值的边框宽度对象。"
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
            children: "all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框宽度，单位为vp。  取值范围：[0, +∞)"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#edgest12",
              children: "Edges"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框宽度均设置为传入值的边框宽度对象。"
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
        children: "import { RenderNode, FrameNode, NodeController, edgeWidths } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0xffd5d5d5;\nrenderNode.borderWidth = edgeWidths(8);\nrenderNode.borderColor = {\n  left: 0xff519db4,\n  top: 0xff519db4,\n  right: 0xff519db4,\n  bottom: 0xff519db4\n};\n\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }.margin(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(530623)/* ["default"] */.A) + "",
        width: "281",
        height: "260"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "borderstyles12",
      children: "borderStyles12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "borderStyles(all: BorderStyle): Edges<BorderStyle>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成边框样式均设置为传入值的边框样式对象。"
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
            children: "all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#borderstyle",
              children: "BorderStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框样式。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#edgest12",
              children: "Edges"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#borderstyle",
              children: "BorderStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框样式均设置为传入值的边框样式对象。"
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
        children: "import { RenderNode, FrameNode, NodeController, borderStyles } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0xffd5d5d5;\nrenderNode.borderWidth = {\n  left: 8,\n  top: 8,\n  right: 8,\n  bottom: 8\n};\nrenderNode.borderColor = {\n  left: 0xff519db4,\n  top: 0xff519db4,\n  right: 0xff519db4,\n  bottom: 0xff519db4\n};\nrenderNode.borderStyle = borderStyles(BorderStyle.Dotted);\n\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }.margin(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425941)/* ["default"] */.A) + "",
        width: "318",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "borderradiuses12-1",
      children: "borderRadiuses12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "borderRadiuses(all: number): BorderRadiuses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于生成边框圆角均设置为传入值的边框圆角对象。"
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
            children: "all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框圆角。  单位：vp  取值范围：[0, +∞)"
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
              href: "#borderradiuses12",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框圆角均设置为传入值的边框圆角对象。"
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
        children: "import { RenderNode, FrameNode, NodeController, borderRadiuses } from '@kit.ArkUI';\n\nconst renderNode = new RenderNode();\nrenderNode.frame = {\n  x: 0,\n  y: 0,\n  width: 150,\n  height: 150\n};\nrenderNode.backgroundColor = 0xff519db4;\nrenderNode.borderRadius = borderRadiuses(32);\n\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.appendChild(renderNode);\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }.margin(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(347003)/* ["default"] */.A) + "",
        width: "300",
        height: "293"
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
347003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
470465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
425941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959454-4328e47fca089bfdb59eb35c37d9821e.png");

},
225708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
530623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
993900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479453-253f807e8488aca37ac75903217d862f.gif");

},
61838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
858132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAAEdCAYAAABKTnG3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAg9SURBVHhe7ddRbyNFFoZhOyyRuAP+/4+ckbjAXMTblfh4Torutp1Zlm+i54ks21WnqxtrecUev5y+nP98Ph3+c3g6nJe/fcfldWum1Ox4L/3aeX/t3D7T3/fUeeXWfDefX2c9es9h75q6z/z+EfO1/Vnm9b252q/1PvsR/bz5rH6PvbnZ1lm3ztmamWf79/F5duuaLXXWPNfX65x+3tvn4/L3svwdl39Hf1/+npa/z+z49fT1/NcSpafDT8vXl7F0eY0fZrzqBxh743PNDH1/qJkyvs/29uv8oebqzHqeoeb6+9Bnutqf9XvN581n9b2uzpjV7zir+dqf7zvUzHyv0q8Z6qy1f/5H5/oz9Gvn/aHP7L13Y61bm+vXj+cdxvPundn37p0pfb1+l/n3GfrvN9QzdeOcmhvGTD+r5vv9h7VnGt6ufVneR4x+Xf4+e5SWf7r+A/cfb+jfa39e6/r3+Ucf5v21s8Z7fa6ZrbnZvWtl7PX9/sx9/dYZa+5ZH5/r1fW18Uzzb1l7W+/lkbnxGv8izfervT213+fquq1nL2O/7lv2ztu6vu8/MtNn52ddMz/nfE0/b+jf9z7Xa6j3+V61/rn9w8kd/0Por66+r+2VrWv21Hn1esQ8f+8ZNddfe27tP2I+a+sZHpmb177H2ll1j//1vR4137t/789Xr6Hey/x9Tb++W1u/57zP7XP/dyDwwxElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYjyD0fpPL3W7O3N7pmr8x45d8u9Z/T73XPNrf1HzGdtPcO9c/8P/+a9u73792es10dtXb+2/j33+RyOX09fz389/3k4Hn5avo4f5Pi68aZ/r89ra2Xt+2xvv84f1u7R92q97w810/X97tZ5/ax5r/SZbp4rNd/vMZ/dZ+b5oV8zzHvdI3Pd2j1qrfSZvfdurHW132fXrl9bG75npmxdM+v7w3zNsLVWam8+f6zPc9/OOi9/T8vnXw+/Le+f+//gHL+cvpxPS5Selih9+0mWT+fLj3es1cv3+XfrC+OaPj9d+mZlv4xr3933MjOW3r1f5vr7qzGwqK/D61Jf6JbNsXU95231snh9ez8zvnSXi+bl4W+zw/Umb17Pfvt4PeT6LH2zndX/2cvrvS7fa7TOmOfq/Job6nsbvS68vtV1Kxf15+nPcdWuefcsl/frJTU3vtR5byvfZoZ23rfFb15np5m6vp9TI9dnXz73/aFmSs0M17k+VItt6N381vri3THjS59ZorQ842/H3z9/lP44/XE+P/df4+Ll8j7/89f6sLbX17bOKP2sYczN19SZt967sVbmvdmtc/re2kwZe7Ot2W7vvlv685Q+X+u1Ns9tXV/rsz7/kf1uzJSavXXucM/ZZW221uYzh74+X1szpWaGPrdna35e7/ea157Oh+PL0+GXp1+WrXtv/GM6nk6n88/PP1++NnPFy7uaX97LJe5XW2eUuYVjbr6mzrz13o21Mu/Nbp3T99Zmytibbc12e/fd0p+n9Plar7V5buv6Wp/1+Y/sd2Om1Oytc4d7zi5rs7U2nzn09fnamik1M/S5PVvz83q/17xW913ej9fNz+k1Ss/Pz5evAP+uz/3fgcAPR5SAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkAUUQKiiBIQRZSAKKIERBElIIooAVFECYgiSkCQw+G/zGMV2EEiXDMAAAAASUVORK5CYII=");

},
299368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
618104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
980875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEaCAYAAACxYopLAAAFXElEQVR4nO3YPXIcVRSA0dvjEXZAQkEKsVMCVkGxCTI2R8gCWAUBIQlERFRZLk+TWCqp1TOWwdTnQuckGrW6X995M/r0s/z62+/r8eo4wH9jWWa+/OKzWZalHuWjc/zux5/n1bLMModZ51TPA/8bhznMH6fTfPPian76/tv55PisHumjc/z60xfz5nCYZZZZZ51ZZ+Ym1Ovm7LsBvzlve87e+euFY8vm8Xb92Rw7d59La2zvv32Ol45t1997ftsZzz3vvXX3rj133mP3ZO8573nXa3huDy79IL+0j9u1zz2Hx15zbq+2jy/t5WPee+feR9v5N2svM/P6tM7nz68ubtlTdrw+rfNmXWdZ1lkvxQR4L8syc306zeuTvyzOOdQDAE+XAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGSOV4dlDssyy7LMuq71PPC/sczMHA5zXPycP+f4y1+v5vUIEHxoz5Zl/nyzzssXp/Gdte/4w8uv5vDs8LbX97dpXWeWu4eXhwvcO2fv4+2JO2usm9vurH//ZvcnXO4+2FljO9vN57fH5+HX9u75YGveNeelNS5c+2Av58JcO/e4vex99nRvhpsRNnv04PFj1rpz3b35dua/tXkNZ++6zZ7ezP1gn8/Nu3fddu29z/fWW8+872bmtK7z/Hicw6NexKdnub6+Xq+uruo5gCfoeDqtc1rXnd9/gA/Fb0D7joe3/4Sef/CXBcC/4d/zQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyAgRkBAjICBCQESAgI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARkBAjICBGQECMgIEJARICAjQEBGgICMAAEZAQIyfwPv+7SRyQRiXAAAAABJRU5ErkJggg==");

},
519573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
871623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEbCAYAAAB6PlnuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAmMSURBVHhe7duNdptWGoZRpNhO2s7Mmvu/y5m20zj+Uc8HPskpRbaSZvK6ZG+WiwQHJOHyBEnJ4fb29nRzczNd4tSmx8dpOrbbd8e76bFNhzYBl6vz5m2b6tyZz6d2Qn2v59GLAarovJ9u2yF7mO6mD9P96aEF6Dg9HB7mAwl8rtN0NV3PyakAXR/r3vX0pk03bfqeYnQ2QI/tIH1o6an43E33bclDOyxX85pSEaoDuVwPdbVufX/tufW1ri/r4+p+/4XU45U+rs9rff3U+j6mGx9vy7ifcV7G/a3XdeN23bmxZWvc+PrGffXta/n4P2Xf97ivfgzGZaXvoz9O/Zx7XX0+Pl4fO67v1tut52VrXem3x+fdt+nOjV3r2/YxZT2u76v0deMx6Pq+St+m77v02+tlo619dMvy+gO91DOpZ7FscWjXRTft590cou/B+sjNB+OuTT/P0y8tQnfzgak618Gq20t8Sj90Xf+FlvWBL+v14/1+u+b99npMGceN83JubFf7Wz+vcT/ntl/P18Ztz43pxnHjdmW9rvTnOz73cdzo3GsrW7e35v32S4+39VjrcefGvDSuG8f3sVv6unHM1mNvWS/v92v7ur3+Kev7zz3W+vYydjmP6lpnmV/N59Rh+q39kf/fNv2vTQ9PkdqzPwXoQ5v+06a6+lkOTIWnd7qMB7Ss/6QZ1brxZ9Tvb63rzm3znL6/S8Ze4nP2c+nYL3lu57ap5X1dvz0uO+eS9S+N+Vq+5eOMj/Xc4176nC4ZNz5un6/Po9N8Mr6Zz7rp6QLg55arc3Hehz8E6LZNv7QXXY5zeP54kC451MClepj6z+njras21TuRuhqqj0P26mOAqrS/tanem9ZbrDoIwLc0hmj5qOOuXRT81t6O7dXHAP3aXuT9/HnPm6clQNISoas5QLfT+6el+zIHqD7s+tBe4vKS93u5B383h/kzoMP8bfQePw861ode9cn78uK88YLX5zC/O6lvpPfmeN/CU5d3y+WeCMFrU5/I1r85qC+JTvM5uh/HflknO/B6LW/F6t8l7MuxPmWvz4CWv+sDvFZ1nu7tLyceKzziA6/fcv2zr2ug48PuLupgr/Z3oXCsD6A//dsugG+nlcdbMCDDpQ8QI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTEHA/Tqc3qB+DbOl5Pb6fHNgF8a8cr78Lgb2J/71SOp/nq5+RNGLxydZbu7Txtb8FupsP0RoLglbtq05s27cnxOL+gw3JvngsRvD6HNh3naU+OVdW37SpouQLqIQJejzo3T+08vZ4ztCfH++m+vbC38wt7dPUDr06dl1ctPjfTu6cl+3Gs8Fy3qSK0fB3vWzF4LU5Pn8++a9NxZ1c/5WNtfmhTheihTa6DIOXT2VfhuZ/u5vjUtEcfA1SfBf3Yproiqq/mfSsGOXX21cVAnZc/tWmv/vB+q96G/bNN9Un7kqBLLvkuCVWN+RpBS0Tx//GYX7LPS7apMZfu+6Vxn7Ovv4uveXy6S8adG9OXf1pf51zdq49Dbto7kn+3aW/ffI3+9MoqQj9N/2gv/maO0EP772IrRrXsuUjVoRwP/jh2XP5Xjfvqt7f2/9Lz/Rb647/0PMZx9Vpqfm6bWt/HlPX9zzU+Xt2+VH+89fycl9aXcV/nnssl+9ny3GurfZ7b73r5S/e39DGfnkPdqvDU/Mfph+lfbdrb3/tZO9ze3p5ubm6e7n5y39JzP91Ov07v51t1UK7aQVveovWDV/N+AOt2/xC7L6t5/dSycWzp40c17qH91Lq+n75937a2qV9Kf6waX/dr/Xqftayv2zI+53E/ZWvdeky3ftzapm977rFL367mzz2XUY3r6/tj1rg+vu9nvay2qX2Pj7Oe9zG1TZ8/97z6uFpf4+qnb9PHlL6PPi/nXl/Xx66fR823PLe+lm0d0357fIxx3LjPredd877tqMavt6/7fXy3fPe8nF11Vh3aH//1R39dBizfTO/d2QAtlk+DbttUX9ffTh/ar+euHZbxF1bzMh709bLSD+Yl95+7/dK8bK3b8jnbr+dd36b09WVrbBnHd+PY9bxs3a55eW75uGxr3F+Zd+P9rTF1uzy3fMt6X+O2a31fZWvMuX2st1uPW68vfdm4vq/rXtr+07o6w24e303Xx/qi/WrOz3J+fR9eCNCofyy9PrDAl5o/aT21a53D93lOfUaAAL6u7+daD3h1BAiIESAgRoCAGAECYgQIiBEgIEaAgBgBAmIECIgRICBGgIAYAQJiBAiIESAgRoCAGAECYgQIiBEgIEaAgBgBAmIECIgRICBGgIAYAQJiBAiIESAgRoCAGAECYgQIiBEgIEaAgBgBAmIECIgRICBGgIAYAQJiBAiIESAgRoCAGAECYgQIiBEgIEaAgBgBAkKm6Xe0vVp8UBKeBAAAAABJRU5ErkJggg==");

},
251054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439495-0c33c3e0abedc4cae80a7576e73a3464.png");

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