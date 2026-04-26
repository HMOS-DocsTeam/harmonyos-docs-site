"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["583147"], {
50404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_types_h_capi_drawing_types_h_md_ec4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-drawing-types-h-capi-drawing-types-h-md-ec4.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_types_h_capi_drawing_types_h_md_ec4_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h","title":"drawing_types.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":47,"frontMatter":{"title":"drawing_types.h","sidebar_position":47,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-types-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-drawing-types-h"},"sidebar":"ref","previous":{"title":"drawing_typeface.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-typeface-h/capi-drawing-typeface-h"},"next":{"title":"effect_filter.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-effect-filter-h/capi-effect-filter-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h.md


const frontMatter = {
	title: 'drawing_types.h',
	sidebar_position: 47,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-types-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-drawing-types-h'
};
const contentTitle = 'drawing_types.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_Drawing_ColorFormat",
  "id": "oh_drawing_colorformat",
  "level": 3
}, {
  "value": "OH_Drawing_AlphaFormat",
  "id": "oh_drawing_alphaformat",
  "level": 3
}, {
  "value": "OH_Drawing_BlendMode",
  "id": "oh_drawing_blendmode",
  "level": 3
}, {
  "value": "OH_Drawing_TextEncoding",
  "id": "oh_drawing_textencoding",
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
        id: "drawing_typesh",
        children: "drawing_types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件中定义了用于绘制2d图形的数据类型，包括画布、画笔、画刷、位图和路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_drawing/drawing_types.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_drawing.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeDrawing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing",
        children: "Drawing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Point2D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个二维的坐标点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Corner_Radii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个圆角半径，该圆角半径由x轴方向和y轴方向上的半径组成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point3d/capi-drawing-oh-drawing-point3d",
              children: "OH_Drawing_Point3D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Point3D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个三维的坐标点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image-info/capi-drawing-oh-drawing-image-info",
              children: "OH_Drawing_Image_Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Image_Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义图片信息结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rectstyle-info/capi-drawing-oh-drawing-rectstyle-info",
              children: "OH_Drawing_RectStyle_Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_RectStyle_Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义矩形框样式结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-string/capi-drawing-oh-drawing-string",
              children: "OH_Drawing_String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采用UTF-16编码的字符串信息结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
              children: "OH_Drawing_Canvas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Canvas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义为一块矩形的画布，可以结合画笔和画刷在上面绘制各种形状、图片和文字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pen/capi-drawing-oh-drawing-pen",
              children: "OH_Drawing_Pen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Pen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义为画笔，画笔用于描述绘制图形轮廓的样式和颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-region/capi-drawing-oh-drawing-region",
              children: "OH_Drawing_Region"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个区域，用于表示画布上的封闭区域，实现更精确的图形控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Brush"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义为画刷，画刷用于描述填充图形的样式和颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-path/capi-drawing-oh-drawing-path",
              children: "OH_Drawing_Path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义为路径，路径用于自定义各种形状。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pathiterator/capi-drawing-oh-drawing-pathiterator",
              children: "OH_Drawing_PathIterator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_PathIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义为路径操作迭代器，可通过遍历迭代器读取path的操作指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-lattice/capi-drawing-oh-drawing-lattice",
              children: "OH_Drawing_Lattice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Lattice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义为矩形网格，用于将图片按照矩形网格进行划分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-bitmap/capi-drawing-oh-drawing-bitmap",
              children: "OH_Drawing_Bitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Bitmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义为位图，位图是一块内存，内存中包含了描述一张图片的像素数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point/capi-drawing-oh-drawing-point",
              children: "OH_Drawing_Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个点，用于描述坐标点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_PixelMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义像素图，用于包装图像框架支持的真实像素图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorspace/capi-drawing-oh-drawing-colorspace",
              children: "OH_Drawing_ColorSpace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ColorSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义色彩空间，用于解释颜色信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-patheffect/capi-drawing-oh-drawing-patheffect",
              children: "OH_Drawing_PathEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_PathEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个路径效果，用于影响描边路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-rect/capi-drawing-oh-drawing-rect",
              children: "OH_Drawing_Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Rect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-roundrect/capi-drawing-oh-drawing-roundrect",
              children: "OH_Drawing_RoundRect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_RoundRect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述圆角矩形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个矩阵，用于描述坐标变换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ShaderEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个着色器，用于描述绘制内容的源颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadowlayer/capi-drawing-oh-drawing-shadowlayer",
              children: "OH_Drawing_ShadowLayer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ShadowLayer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个阴影层，用于描述绘制内容的阴影层。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
              children: "OH_Drawing_Filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个滤波器，用于存储颜色滤波器，蒙版滤波器和图像滤波器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-maskfilter/capi-drawing-oh-drawing-maskfilter",
              children: "OH_Drawing_MaskFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_MaskFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义蒙版滤波器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter",
              children: "OH_Drawing_ColorFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ColorFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义颜色滤波器，传入一个颜色并返回一个新的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-font/capi-drawing-oh-drawing-font",
              children: "OH_Drawing_Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述字体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfeatures/capi-drawing-oh-drawing-fontfeatures",
              children: "OH_Drawing_FontFeatures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontFeatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述字体特征容器。字体特征是字体内置的排版规则，控制字形显示。例如：连字、替代字形、上下标等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-memorystream/capi-drawing-oh-drawing-memorystream",
              children: "OH_Drawing_MemoryStream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_MemoryStream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述内存流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontarguments/capi-drawing-oh-drawing-fontarguments",
              children: "OH_Drawing_FontArguments"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontArguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述字型参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typeface/capi-drawing-oh-drawing-typeface",
              children: "OH_Drawing_Typeface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Typeface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述字形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textblob/capi-drawing-oh-drawing-textblob",
              children: "OH_Drawing_TextBlob"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextBlob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个文本对象，表示将多个文本组合到一个不可变的容器中。每个文本行由字形和位置组成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image/capi-drawing-oh-drawing-image",
              children: "OH_Drawing_Image"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个用于描述绘制二维像素数组的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-imagefilter/capi-drawing-oh-drawing-imagefilter",
              children: "OH_Drawing_ImageFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ImageFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义图像滤波器, 用于对构成图像像素的所有颜色位进行操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_SamplingOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个采样选项，用于描述图片、位图等图像的采样方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textblobbuilder/capi-drawing-oh-drawing-textblobbuilder",
              children: "OH_Drawing_TextBlobBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextBlobBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义文本构建器，用于构建文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-gpucontext/capi-drawing-oh-drawing-gpucontext",
              children: "OH_Drawing_GpuContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_GpuContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义图形处理器上下文，用于描述图形处理器后端上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-surface/capi-drawing-oh-drawing-surface",
              children: "OH_Drawing_Surface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义surface，用于管理画布绘制的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontmgr/capi-drawing-oh-drawing-fontmgr",
              children: "OH_Drawing_FontMgr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontMgr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义字体管理类, 用于字体管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontstyleset/capi-drawing-oh-drawing-fontstyleset",
              children: "OH_Drawing_FontStyleSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_FontStyleSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义字体样式集, 用于字体样式族匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmdutils/capi-drawing-oh-drawing-recordcmdutils",
              children: "OH_Drawing_RecordCmdUtils"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_RecordCmdUtils"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义指令录制工具，用于生成录制指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-recordcmd/capi-drawing-oh-drawing-recordcmd",
              children: "OH_Drawing_RecordCmd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_RecordCmd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义录制指令类, 用于存储录制指令的集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-array/capi-drawing-oh-drawing-array",
              children: "OH_Drawing_Array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义数组对象, 用于存储多个同类型对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_colorformat",
              children: "OH_Drawing_ColorFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_ColorFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述位图像素的存储格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_alphaformat",
              children: "OH_Drawing_AlphaFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_AlphaFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述位图像素的透明度分量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_BlendMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合模式枚举。混合模式的操作会为两种颜色（源色、目标色）生成一种新的颜色。  这些操作在红、绿、蓝3个颜色通道上是相同的（透明度有另外的处理规则）。  对于这些，我们使用透明度通道作为示例，而不是单独命名每个通道。为简洁起见，我们使用以下缩写：  s : source，源的缩写。  d : destination，目标的缩写。  sa : source alpha，源透明度的缩写。  da : destination alpha，目标透明度的缩写。  计算结果用如下缩写表示：  r : 如果4个通道的计算方式相同，用r表示。  ra : 如果只操作透明度通道，用ra表示。  rc : 如果操作3个颜色通道，用rc表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_textencoding",
              children: "OH_Drawing_TextEncoding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TextEncoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本编码类型枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_colorformat",
      children: "OH_Drawing_ColorFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_ColorFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述位图像素的存储格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_FORMAT_UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_FORMAT_ALPHA_8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个像素用一个8位的量表示，8个比特位表示透明度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_FORMAT_RGB_565"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个像素用一个16位的量表示，高位到低位依次是5个比特位表示红，6个比特位表示绿，5个比特位表示蓝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_FORMAT_ARGB_4444"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个像素用一个16位的量表示，高位到低位依次是4个比特位表示透明度，4个比特位表示红，4个比特位表示绿，4个比特位表示蓝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_FORMAT_RGBA_8888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个像素用一个32位的量表示，高位到低位依次是8个比特位表示透明度，8个比特位表示红，8个比特位表示绿，8个比特位表示蓝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_FORMAT_BGRA_8888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个像素用一个32位的量表示，高位到低位依次是8个比特位表示蓝，8个比特位表示绿，8个比特位表示红，8个比特位表示透明度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_alphaformat",
      children: "OH_Drawing_AlphaFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_AlphaFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述位图像素的透明度分量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALPHA_FORMAT_UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALPHA_FORMAT_OPAQUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位图无透明度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALPHA_FORMAT_PREMUL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个像素的颜色组件由透明度分量预先乘以。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALPHA_FORMAT_UNPREMUL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个像素的颜色组件未由透明度分量预先乘以。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_blendmode",
      children: "OH_Drawing_BlendMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_BlendMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混合模式枚举。混合模式的操作会为两种颜色（源色、目标色）生成一种新的颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些操作在红、绿、蓝3个颜色通道上是相同的（透明度有另外的处理规则）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于这些，我们使用透明度通道作为示例，而不是单独命名每个通道。为简洁起见，我们使用以下缩写："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "s : source，源的缩写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "d : destination，目标的缩写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sa : source alpha，源透明度的缩写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "da : destination alpha，目标透明度的缩写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算结果用如下缩写表示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "r : 如果4个通道的计算方式相同，用r表示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ra : 如果只操作透明度通道，用ra表示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rc : 如果操作3个颜色通道，用rc表示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_CLEAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除模式，r = 0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SRC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s（result的4个通道，都等于source的4个通道，即结果等于源。）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_DST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d（result的4个通道，都等于destination的4个通道，即结果等于目标。）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SRC_OVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s + (1 - sa) * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_DST_OVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d + (1 - da) * s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SRC_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * da。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_DST_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d * sa。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SRC_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * (1 - da)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_DST_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d * (1 - sa)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SRC_ATOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * da + d * (1 - sa)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_DST_ATOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = d * sa + s * (1 - da)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_XOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * (1 - da) + d * (1 - sa)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_PLUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = min(s + d, 1)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_MODULATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = s * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SCREEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滤色模式，r = s + d - s * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_OVERLAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "叠加模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_DARKEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变暗模式，rc = s + d - max(s * da, d * sa), ra = s + (1 - sa) * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_LIGHTEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变亮模式，rc = s + d - min(s * da, d * sa), ra = s + (1 - sa) * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_COLOR_DODGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色减淡模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_COLOR_BURN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色加深模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_HARD_LIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强光模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SOFT_LIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "柔光模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_DIFFERENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "差值模式，rc = s + d - 2 * (min(s * da, d * sa)), ra = s + (1 - sa) * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_EXCLUSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "排除模式，rc = s + d - two(s * d), ra = s + (1 - sa) * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_MULTIPLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正片叠底，r = s * (1 - da) + d * (1 - sa) + s * d。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_HUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色相模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_SATURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "饱和度模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_MODE_LUMINOSITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_textencoding",
      children: "OH_Drawing_TextEncoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_TextEncoding\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本编码类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_ENCODING_UTF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单字节，表示UTF-8或ASCII。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_ENCODING_UTF16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双字节，表示大部分Unicode。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_ENCODING_UTF32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四字节，表示所有Unicode。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_ENCODING_GLYPH_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双字节，表示字形索引。"
          })]
        })]
      })]
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