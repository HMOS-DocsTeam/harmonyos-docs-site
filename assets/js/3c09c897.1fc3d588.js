"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["23674"], {
856862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_arkts_js_apis_graphics_drawing_arkts_apis_graphics_drawing_matrix_arkts_apis_graphics_drawing_matrix_md_3c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-arkts-js-apis-graphics-drawing-arkts-apis-graphics-drawing-matrix-arkts-apis-graphics-drawing-matrix-md-3c0.json
var site_docs_ref_arkgraphics_api_arkgraphics_arkts_js_apis_graphics_drawing_arkts_apis_graphics_drawing_matrix_arkts_apis_graphics_drawing_matrix_md_3c0_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix","title":"Class (Matrix)","description":"矩阵对象。","source":"@site/docs-ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix.md","sourceDirName":"arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix","slug":"/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Class (Matrix)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-matrix","kit":"图形","last_updated":"2026-04-22","slug":"arkts-apis-graphics-drawing-matrix"},"sidebar":"ref","previous":{"title":"Class (MaskFilter)","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-maskfilter/arkts-apis-graphics-drawing-maskfilter"},"next":{"title":"Class (Path)","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-path/arkts-apis-graphics-drawing-path"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix.md


const frontMatter = {
	title: 'Class (Matrix)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-matrix',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-graphics-drawing-matrix'
};
const contentTitle = 'Class (Matrix)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 2
}, {
  "value": "constructor20+",
  "id": "constructor20",
  "level": 2
}, {
  "value": "isAffine20+",
  "id": "isaffine20",
  "level": 2
}, {
  "value": "rectStaysRect20+",
  "id": "rectstaysrect20",
  "level": 2
}, {
  "value": "setSkew20+",
  "id": "setskew20",
  "level": 2
}, {
  "value": "setSinCos20+",
  "id": "setsincos20",
  "level": 2
}, {
  "value": "setRotation12+",
  "id": "setrotation12",
  "level": 2
}, {
  "value": "setScale12+",
  "id": "setscale12",
  "level": 2
}, {
  "value": "setTranslation12+",
  "id": "settranslation12",
  "level": 2
}, {
  "value": "setMatrix12+",
  "id": "setmatrix12",
  "level": 2
}, {
  "value": "preConcat12+",
  "id": "preconcat12",
  "level": 2
}, {
  "value": "setMatrix20+",
  "id": "setmatrix20",
  "level": 2
}, {
  "value": "setConcat20+",
  "id": "setconcat20",
  "level": 2
}, {
  "value": "postConcat20+",
  "id": "postconcat20",
  "level": 2
}, {
  "value": "isEqual12+",
  "id": "isequal12",
  "level": 2
}, {
  "value": "invert12+",
  "id": "invert12",
  "level": 2
}, {
  "value": "isIdentity12+",
  "id": "isidentity12",
  "level": 2
}, {
  "value": "getValue12+",
  "id": "getvalue12",
  "level": 2
}, {
  "value": "postRotate12+",
  "id": "postrotate12",
  "level": 2
}, {
  "value": "postScale12+",
  "id": "postscale12",
  "level": 2
}, {
  "value": "postTranslate12+",
  "id": "posttranslate12",
  "level": 2
}, {
  "value": "preRotate12+",
  "id": "prerotate12",
  "level": 2
}, {
  "value": "postSkew20+",
  "id": "postskew20",
  "level": 2
}, {
  "value": "preSkew20+",
  "id": "preskew20",
  "level": 2
}, {
  "value": "mapRadius20+",
  "id": "mapradius20",
  "level": 2
}, {
  "value": "preScale12+",
  "id": "prescale12",
  "level": 2
}, {
  "value": "preTranslate12+",
  "id": "pretranslate12",
  "level": 2
}, {
  "value": "reset12+",
  "id": "reset12",
  "level": 2
}, {
  "value": "mapPoints12+",
  "id": "mappoints12",
  "level": 2
}, {
  "value": "getAll12+",
  "id": "getall12",
  "level": 2
}, {
  "value": "mapRect12+",
  "id": "maprect12",
  "level": 2
}, {
  "value": "setRectToRect12+",
  "id": "setrecttorect12",
  "level": 2
}, {
  "value": "setPolyToPoly12+",
  "id": "setpolytopoly12",
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
        id: "class-matrix",
        children: "Class (Matrix)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩阵对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示为3*3的矩阵，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732153)/* ["default"] */.A) + "",
        width: "496",
        height: "198"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩阵中的元素从左到右，从上到下分别表示水平缩放系数、水平倾斜系数、水平位移系数、垂直倾斜系数、垂直缩放系数、垂直位移系数、X轴透视系数、Y轴透视系数、透视缩放系数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设(x1, y1)为源坐标点，(x2, y2)为源坐标点通过矩阵变换后的坐标点，则两个坐标点的关系如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974189)/* ["default"] */.A) + "",
        width: "760",
        height: "198"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830781)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块使用屏幕物理像素单位px。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing } from '@kit.ArkGraphics2D';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造一个矩阵对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor20",
      children: "constructor20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(matrix: Matrix)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拷贝一个矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被拷贝的矩阵。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nlet matrix2 = new drawing.Matrix(matrix);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "isaffine20",
      children: "isAffine20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isAffine(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前矩阵是否为仿射矩阵。仿射矩阵是一种包括平移、旋转、缩放等变换的矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前矩阵是否为仿射矩阵。true表示是仿射矩阵，false表示不是仿射矩阵。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nmatrix.setMatrix([1, 0.5, 1, 0.5, 1, 1, 1, 1, 1]);\nlet isAff = matrix.isAffine();\nconsole.info('isAff :', isAff);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rectstaysrect20",
      children: "rectStaysRect20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rectStaysRect(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断经过该矩阵映射后的矩形的形状是否仍为矩形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回经过该矩阵映射后的矩形的形状是否仍为矩形。true表示仍是矩形，false表示不是矩形。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nmatrix.setMatrix([1, 0.5, 1, 0.5, 1, 1, 1, 1, 1]);\nlet matrix2 = new drawing.Matrix(matrix);\nlet isRect = matrix2.rectStaysRect();\nconsole.info('isRect :', isRect);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setskew20",
      children: "setSkew20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setSkew(kx: number, ky: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置矩阵的倾斜系数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "kx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nmatrix.setMatrix([1, 0.5, 1, 0.5, 1, 1, 1, 1, 1]);\nmatrix.setSkew(2, 0.5, 0.5, 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setsincos20",
      children: "setSinCos20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setSinCos(sinValue: number, cosValue: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置矩阵，使其围绕旋转中心(px, py)以指定的正弦值和余弦值旋转。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "sinValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度的正弦值。仅当正弦值和余弦值的平方和为1时，为旋转变换，否则矩阵可能包含平移缩放等其他变换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cosValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度的余弦值。仅当正弦值和余弦值的平方和为1时，为旋转变换，否则矩阵可能包含平移缩放等其他变换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nmatrix.setMatrix([1, 0.5, 1, 0.5, 1, 1, 1, 1, 1]);\nmatrix.setSinCos(0, 1, 1, 0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setrotation12",
      children: "setRotation12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setRotation(degree: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置矩阵为单位矩阵，并围绕位于(px, py)的旋转轴点进行旋转。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转轴点的横坐标，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转轴点的纵坐标，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nmatrix.setRotation(90, 100, 100);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setscale12",
      children: "setScale12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setScale(sx: number, sy: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置矩阵为单位矩阵围绕位于(px, py)的中心点，以sx和sy进行缩放后的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "x轴方向缩放系数，为负数时可看作是先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向缩放系数，为负数时可看作是先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放中心点的横坐标，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放中心点的纵坐标，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nmatrix.setScale(100, 100, 150, 150);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settranslation12",
      children: "setTranslation12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTranslation(dx: number, dy: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置矩阵为单位矩阵平移(dx, dy)后的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nmatrix.setTranslation(100, 100);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setmatrix12",
      children: "setMatrix12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setMatrix(values: Array<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置矩阵对象的各项参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度为9的浮点数组，表示矩阵对象参数。数组中的值按下标从小，到大分别表示水平缩放系数、水平倾斜系数、水平位移系数、垂直倾斜系数、垂直缩放系数、垂直位移系数、X轴透视系数、Y轴透视系数、透视缩放系数。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types; 3. Parameter verification failed."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nlet value : Array<number> = [2, 2, 2, 2, 2, 2, 2, 2, 2];\nmatrix.setMatrix(value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preconcat12",
      children: "preConcat12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "preConcat(matrix: Matrix): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前矩阵设置为当前矩阵左乘matrix的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示矩阵对象，位于乘法表达式右侧。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix1 = new drawing.Matrix();\nmatrix1.setMatrix([2, 1, 3, 1, 2, 1, 3, 1, 2]);\nlet matrix2 = new drawing.Matrix();\nmatrix2.setMatrix([-2, 1, 3, 1, 0, -1, 3, -1, 2]);\nmatrix1.preConcat(matrix2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setmatrix20",
      children: "setMatrix20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setMatrix(matrix: Array<number> | Matrix): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用一个矩阵对当前矩阵进行更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix1 = new drawing.Matrix();\nmatrix1.setMatrix([2, 1, 3, 1, 2, 1, 3, 1, 2]);\nlet matrix2 = new drawing.Matrix();\nmatrix1.setMatrix(matrix2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setconcat20",
      children: "setConcat20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setConcat(matrixA: Matrix, matrixB: Matrix): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用两个矩阵的乘积更新当前矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "matrixA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于运算的矩阵A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrixB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于运算的矩阵B。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix1 = new drawing.Matrix();\nmatrix1.setMatrix([2, 1, 3, 1, 2, 1, 3, 1, 2]);\nlet matrix2 = new drawing.Matrix();\nmatrix2.setMatrix([-2, 1, 3, 1, 0, -1, 3, -1, 2]);\nmatrix1.setConcat(matrix2, matrix1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postconcat20",
      children: "postConcat20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postConcat(matrix: Matrix): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用当前矩阵右乘一个矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于运算的矩阵。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nif (matrix.isIdentity()) {\n  console.info(\"matrix is identity.\");\n} else {\n  console.info(\"matrix is not identity.\");\n}\nlet matrix1 = new drawing.Matrix();\nmatrix1.setMatrix([2, 1, 3, 1, 2, 1, 3, 1, 2]);\nlet matrix2 = new drawing.Matrix();\nmatrix2.setMatrix([-2, 1, 3, 1, 0, -1, 3, -1, 2]);\nmatrix1.postConcat(matrix2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "isequal12",
      children: "isEqual12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isEqual(matrix: Matrix): Boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个矩阵是否相等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "另一个矩阵。"
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
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回两个矩阵的比较结果。true表示两个矩阵相等，false表示两个矩阵不相等。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix1 = new drawing.Matrix();\nmatrix1.setMatrix([2, 1, 3, 1, 2, 1, 3, 1, 2]);\nlet matrix2 = new drawing.Matrix();\nmatrix2.setMatrix([-2, 1, 3, 1, 0, -1, 3, -1, 2]);\nif (matrix1.isEqual(matrix2)) {\n  console.info(\"matrix1 and matrix2 are equal.\");\n} else {\n  console.info(\"matrix1 and matrix2 are not equal.\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "invert12",
      children: "invert12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invert(matrix: Matrix): Boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将矩阵matrix设置为当前矩阵的逆矩阵，并返回是否设置成功的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩阵对象，用于存储获取到的逆矩阵。"
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
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回matrix是否被设置为逆矩阵的结果。true表示当前矩阵可逆，matrix被设置为逆矩阵，false表示当前矩阵不可逆，matrix不被设置。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix1 = new drawing.Matrix();\nmatrix1.setMatrix([2, 1, 3, 1, 2, 1, 3, 1, 2]);\nlet matrix2 = new drawing.Matrix();\nmatrix2.setMatrix([-2, 1, 3, 1, 0, -1, 3, -1, 2]);\nif (matrix1.invert(matrix2)) {\n  console.info(\"matrix1 is invertible and matrix2 is set as an inverse matrix of the matrix1.\");\n} else {\n  console.info(\"matrix1 is not invertible and matrix2 is not changed.\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "isidentity12",
      children: "isIdentity12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isIdentity(): Boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断矩阵是否是单位矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回矩阵是否是单位矩阵。true表示矩阵是单位矩阵，false表示矩阵不是单位矩阵。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet matrix = new drawing.Matrix();\nif (matrix.isIdentity()) {\n  console.info(\"matrix is identity.\");\n} else {\n  console.info(\"matrix is not identity.\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getvalue12",
      children: "getValue12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValue(index: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取矩阵给定索引位的值。索引范围0-8。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "索引位置，范围0-8，该参数为整数。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回矩阵给定索引位对应的值，该返回值为整数。"
          })]
        })
      })]
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nfor (let i = 0; i < 9; i++) {\n    console.info(\"matrix \"+matrix.getValue(i).toString());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postrotate12",
      children: "postRotate12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postRotate(degree: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将矩阵设置为矩阵右乘围绕轴心点旋转一定角度的单位矩阵后得到的矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心点的横坐标，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心点的纵坐标，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nlet degree: number = 2;\nlet px: number = 3;\nlet py: number = 4;\nmatrix.postRotate(degree, px, py);\nconsole.info(\"matrix= \"+matrix.getAll().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postscale12",
      children: "postScale12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postScale(sx: number, sy: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将矩阵设置为矩阵右乘围绕轴心点按一定缩放系数缩放后的单位矩阵后得到的矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "x轴方向缩放系数，负数表示先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向缩放系数，负数表示先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放中心点的横坐标，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放中心点的纵坐标，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nlet sx: number = 2;\nlet sy: number = 0.5;\nlet px: number = 1;\nlet py: number = 1;\nmatrix.postScale(sx, sy, px, py);\nconsole.info(\"matrix= \"+matrix.getAll().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "posttranslate12",
      children: "postTranslate12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postTranslate(dx: number, dy: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将矩阵设置为矩阵右乘平移一定距离后的单位矩阵后得到的矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nlet dx: number = 3;\nlet dy: number = 4;\nmatrix.postTranslate(dx, dy);\nconsole.info(\"matrix= \"+matrix.getAll().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerotate12",
      children: "preRotate12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "preRotate(degree: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将矩阵设置为矩阵左乘围绕轴心点旋转一定角度的单位矩阵后得到的矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心点的横坐标，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转中心点的纵坐标，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nlet degree: number = 2;\nlet px: number = 3;\nlet py: number = 4;\nmatrix.preRotate(degree, px, py);\nconsole.info(\"matrix= \"+matrix.getAll().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postskew20",
      children: "postSkew20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postSkew(kx: number, ky: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前矩阵右乘一个倾斜变换矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "kx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。"
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\"\n\nlet matrix = new drawing.Matrix();\nmatrix.postSkew(2.0, 1.0, 2.0, 1.0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preskew20",
      children: "preSkew20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "preSkew(kx: number, ky: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前矩阵左乘一个倾斜变换矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "kx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。"
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\"\n\nlet matrix = new drawing.Matrix();\nmatrix.preSkew(2.0, 1.0, 2.0, 1.0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapradius20",
      children: "mapRadius20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mapRadius(radius: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回半径为radius的圆经过当前矩阵映射形成的椭圆的平均半径。平均半径的平方为椭圆长轴长度和短轴长度的乘积。若当前矩阵包含透视变换，则该结果无意义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于计算的圆的半径，浮点数。如果是负数，则按照绝对值进行计算。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回经过变换之后的平均半径。"
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\"\n\nlet matrix = new drawing.Matrix();\nmatrix.setMatrix([2, 1, 3, 1, 2, 1, 3, 1, 2]);\nlet radius = matrix.mapRadius(10);\nconsole.info('radius', radius);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prescale12",
      children: "preScale12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "preScale(sx: number, sy: number, px: number, py: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将矩阵设置为矩阵左乘围绕轴心点按一定缩放系数缩放后的单位矩阵后得到的矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "x轴方向缩放系数，为负数时可看作是先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向缩放系数，为负数时可看作是先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴心点横坐标，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴心点纵坐标，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nlet sx: number = 2;\nlet sy: number = 0.5;\nlet px: number = 1;\nlet py: number = 1;\nmatrix.preScale(sx, sy, px, py);\nconsole.info(\"matrix\"+matrix.getAll().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pretranslate12",
      children: "preTranslate12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "preTranslate(dx: number, dy: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将矩阵设置为矩阵左乘平移一定距离后的单位矩阵后得到的矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "dx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。"
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nlet dx: number = 3;\nlet dy: number = 4;\nmatrix.preTranslate(dx, dy);\nconsole.info(\"matrix\"+matrix.getAll().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reset12",
      children: "reset12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reset(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置当前矩阵为单位矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nmatrix.postScale(2, 3, 4, 5);\nmatrix.reset();\nconsole.info(\"matrix= \"+matrix.getAll().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mappoints12",
      children: "mapPoints12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mapPoints(src: Array<common2D.Point>): Array<common2D.Point>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过矩阵变换将源点数组映射到目标点数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "src"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源点数组。"
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
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源点数组经矩阵变换后的点数组。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing, common2D } from \"@kit.ArkGraphics2D\";\n\nlet src: Array<common2D.Point> = [];\nsrc.push({x: 15, y: 20});\nsrc.push({x: 20, y: 15});\nsrc.push({x: 30, y: 10});\nlet matrix = new drawing.Matrix();\nlet dst: Array<common2D.Point> = matrix.mapPoints(src);\nconsole.info(\"matrix= src: \"+JSON.stringify(src));\nconsole.info(\"matrix= dst: \"+JSON.stringify(dst));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getall12",
      children: "getAll12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAll(): Array<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取矩阵的所有元素值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储矩阵元素值的浮点数组，长度为9。"
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
        children: "import { drawing } from \"@kit.ArkGraphics2D\";\n\nlet matrix = new drawing.Matrix();\nconsole.info(\"matrix \"+ matrix.getAll());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maprect12",
      children: "mapRect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mapRect(dst: common2D.Rect, src: common2D.Rect): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将目标矩形设置为源矩形通过矩阵变换后的图形的外接矩形。如下图所示，蓝色矩形为源矩形，假设黄色矩形为源矩形通过矩阵变换形成的图形，此时黄色矩形的边不与坐标轴平行，无法使用矩形对象表示，因此，将目标矩形设置为黄色矩形的外接矩形，即黑色矩形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(221008)/* ["default"] */.A) + "",
        width: "300",
        height: "263"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "dst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
              children: "common2D.Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标矩形对象，用于存储源矩形经矩阵变换后的图形的外接矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
              children: "common2D.Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源矩形对象。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回源矩形经过矩阵变换后的图形是否仍然是矩形，true表示是矩形，false表示不是矩形。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing, common2D } from \"@kit.ArkGraphics2D\";\n\nlet dst: common2D.Rect = { left: 100, top: 20, right: 130, bottom: 60 };\nlet src: common2D.Rect = { left: 100, top: 80, right: 130, bottom: 120 };\nlet matrix = new drawing.Matrix();\nif (matrix.mapRect(dst, src)) {\n    console.info(\"matrix= dst \"+JSON.stringify(dst));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setrecttorect12",
      children: "setRectToRect12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setRectToRect(src: common2D.Rect, dst: common2D.Rect, scaleToFit: ScaleToFit): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前矩阵设置为能使源矩形映射到目标矩形的变换矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
              children: "common2D.Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
              children: "common2D.Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleToFit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#scaletofit12",
              children: "ScaleToFit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源矩形到目标矩形的映射方式。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回矩阵是否可以表示矩形之间的映射，true表示可以，false表示不可以。如果源矩形的宽高任意一个小于等于0，则返回false，并将矩阵设置为单位矩阵；如果目标矩形的宽高任意一个小于等于0，则返回true，并将矩阵设置为除透视缩放系数为1外其余值皆为0的矩阵。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types;3.Parameter verification failed."
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
        children: "import { drawing, common2D } from \"@kit.ArkGraphics2D\";\n\nlet src: common2D.Rect = { left: 100, top: 100, right: 300, bottom: 300 };\nlet dst: common2D.Rect = { left: 200, top: 200, right: 600, bottom: 600 };\nlet scaleToFit: drawing.ScaleToFit = drawing.ScaleToFit.FILL_SCALE_TO_FIT\nlet matrix = new drawing.Matrix();\nif (matrix.setRectToRect(src, dst, scaleToFit)) {\n    console.info(\"matrix\"+matrix.getAll().toString());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setpolytopoly12",
      children: "setPolyToPoly12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setPolyToPoly(src: Array<common2D.Point>, dst: Array<common2D.Point>, count: number): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前矩阵设置为能够将源点数组映射到目标点数组的变换矩阵。源点和目标点的个数必须大于等于0，小于等于4。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
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
            children: "src"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源点数组，长度必须为count。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dst"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标点数组，长度必须为count。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在src和dst点的数量，该参数为整数。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回设置矩阵是否成功的结果，true表示设置成功，false表示设置失败。"
          })]
        })
      })]
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
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
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
        children: "import { drawing, common2D } from \"@kit.ArkGraphics2D\";\n\nlet srcPoints: Array<common2D.Point> = [ {x: 10, y: 20}, {x: 200, y: 150} ];\nlet dstPoints: Array<common2D.Point> = [{ x:0, y: 10 }, { x:300, y: 600 }];\nlet matrix = new drawing.Matrix();\nif (matrix.setPolyToPoly(srcPoints, dstPoints, 2)) {\n    console.info(\"matrix\"+matrix.getAll().toString());\n}\n"
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
221008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
974189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960864-d5924406e46ceab21f21a3f7f6e533b1.png");

},
732153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440909-bba308c9c3c3ace2e44a2fb4ec3bc3b9.png");

},
830781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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