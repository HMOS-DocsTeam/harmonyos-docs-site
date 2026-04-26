"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["738354"], {
372238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_brush_h_capi_drawing_brush_h_md_40b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-drawing-brush-h-capi-drawing-brush-h-md-40b.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_brush_h_capi_drawing_brush_h_md_40b_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h","title":"drawing_brush.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"drawing_brush.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-brush-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-drawing-brush-h"},"sidebar":"ref","previous":{"title":"drawing_bitmap.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-bitmap-h/capi-drawing-bitmap-h"},"next":{"title":"drawing_canvas.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h.md


const frontMatter = {
	title: 'drawing_brush.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-brush-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-drawing-brush-h'
};
const contentTitle = 'drawing_brush.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Drawing_BrushCreate()",
  "id": "oh_drawing_brushcreate",
  "level": 3
}, {
  "value": "OH_Drawing_BrushCopy()",
  "id": "oh_drawing_brushcopy",
  "level": 3
}, {
  "value": "OH_Drawing_BrushDestroy()",
  "id": "oh_drawing_brushdestroy",
  "level": 3
}, {
  "value": "OH_Drawing_BrushIsAntiAlias()",
  "id": "oh_drawing_brushisantialias",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetAntiAlias()",
  "id": "oh_drawing_brushsetantialias",
  "level": 3
}, {
  "value": "OH_Drawing_BrushGetColor()",
  "id": "oh_drawing_brushgetcolor",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetColor()",
  "id": "oh_drawing_brushsetcolor",
  "level": 3
}, {
  "value": "OH_Drawing_BrushGetAlpha()",
  "id": "oh_drawing_brushgetalpha",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetAlpha()",
  "id": "oh_drawing_brushsetalpha",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetShaderEffect()",
  "id": "oh_drawing_brushsetshadereffect",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetShadowLayer()",
  "id": "oh_drawing_brushsetshadowlayer",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetFilter()",
  "id": "oh_drawing_brushsetfilter",
  "level": 3
}, {
  "value": "OH_Drawing_BrushGetFilter()",
  "id": "oh_drawing_brushgetfilter",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetBlendMode()",
  "id": "oh_drawing_brushsetblendmode",
  "level": 3
}, {
  "value": "OH_Drawing_BrushReset()",
  "id": "oh_drawing_brushreset",
  "level": 3
}, {
  "value": "OH_Drawing_BrushSetColor4f()",
  "id": "oh_drawing_brushsetcolor4f",
  "level": 3
}, {
  "value": "OH_Drawing_BrushGetAlphaFloat()",
  "id": "oh_drawing_brushgetalphafloat",
  "level": 3
}, {
  "value": "OH_Drawing_BrushGetRedFloat()",
  "id": "oh_drawing_brushgetredfloat",
  "level": 3
}, {
  "value": "OH_Drawing_BrushGetGreenFloat()",
  "id": "oh_drawing_brushgetgreenfloat",
  "level": 3
}, {
  "value": "OH_Drawing_BrushGetBlueFloat()",
  "id": "oh_drawing_brushgetbluefloat",
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
        id: "drawing_brushh",
        children: "drawing_brush.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件中定义了与画刷相关的功能函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkGraphics2D/Drawing/NDKAPIDrawing",
        children: "Drawing API示例(C/C++)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_drawing/drawing_brush.h>"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/nativecolorspacemanager-oh-nativecolorspacemanager/nativecolorspacemanager-oh-nativecolorspacemanager",
              children: "OH_NativeColorSpaceManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeColorSpaceManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明色域管理对象，提供获取色域基础属性的能力。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushcreate",
              children: "OH_Drawing_Brush* OH_Drawing_BrushCreate(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个画刷对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushcopy",
              children: "OH_Drawing_Brush* OH_Drawing_BrushCopy(OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个画刷对象副本", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "，用于拷贝一个已有画刷对象。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushdestroy",
              children: "void OH_Drawing_BrushDestroy(OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于销毁画刷对象并回收该对象占有的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushisantialias",
              children: "bool OH_Drawing_BrushIsAntiAlias(const OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于获取画刷是否设置抗锯齿属性，如果为真则说明画刷会启用抗锯齿功能，在绘制图形时会对图形的边缘像素进行半透明的模糊处理。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetantialias",
              children: "void OH_Drawing_BrushSetAntiAlias(OH_Drawing_Brush* brush, bool antiAlias)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置画刷的抗锯齿属性，设置为真则画刷在绘制图形时会对图形的边缘像素进行半透明的模糊处理。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushgetcolor",
              children: "uint32_t OH_Drawing_BrushGetColor(const OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于获取画刷的颜色属性，颜色属性描述了画刷填充图形时使用的颜色，用一个32位（ARGB）的变量表示。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetcolor",
              children: "void OH_Drawing_BrushSetColor(OH_Drawing_Brush* brush, uint32_t color)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置画刷的颜色属性，颜色属性描述了画刷填充图形时使用的颜色，用一个32位（ARGB）的变量表示。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushgetalpha",
              children: "uint8_t OH_Drawing_BrushGetAlpha(const OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取画刷的透明度值。画刷在填充形状时透明通道会使用该值。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetalpha",
              children: "void OH_Drawing_BrushSetAlpha(OH_Drawing_Brush* brush, uint8_t alpha)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为画刷设置透明度值。画刷在填充形状时透明通道会使用该值。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetshadereffect",
              children: "void OH_Drawing_BrushSetShaderEffect(OH_Drawing_Brush* brush, OH_Drawing_ShaderEffect* shaderEffect)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为画刷设置着色器效果。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetshadowlayer",
              children: "void OH_Drawing_BrushSetShadowLayer(OH_Drawing_Brush* brush, OH_Drawing_ShadowLayer* shadowLayer)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为画刷设置阴影层，设置的阴影层效果当前仅在绘制文字时生效。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetfilter",
              children: "void OH_Drawing_BrushSetFilter(OH_Drawing_Brush* brush, OH_Drawing_Filter* filter)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为画刷设置滤波器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
              children: "OH_Drawing_Filter"
            }), "。滤波器是一个容器，可以承载蒙版滤波器和颜色滤波器。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushgetfilter",
              children: "void OH_Drawing_BrushGetFilter(OH_Drawing_Brush* brush, OH_Drawing_Filter* filter)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从画刷获取滤波器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
              children: "OH_Drawing_Filter"
            }), "。滤波器是一个容器，可以承载蒙版滤波器和颜色滤波器。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush、filter任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetblendmode",
              children: "void OH_Drawing_BrushSetBlendMode(OH_Drawing_Brush* brush, OH_Drawing_BlendMode blendMode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为画刷设置一个混合器，该混合器实现了指定的混合模式枚举。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  blendMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushreset",
              children: "void OH_Drawing_BrushReset(OH_Drawing_Brush* brush)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将画刷重置至初始状态，清空所有已设置的属性。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushsetcolor4f",
              children: "OH_Drawing_ErrorCode OH_Drawing_BrushSetColor4f(OH_Drawing_Brush* brush, float a, float r, float g, float b,OH_NativeColorSpaceManager* colorSpaceManager)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置画刷的颜色。颜色将被画刷用来填充形状。  颜色采用浮点数表示的ARGB格式，色彩空间由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/nativecolorspacemanager-oh-nativecolorspacemanager/nativecolorspacemanager-oh-nativecolorspacemanager",
              children: "OH_NativeColorSpaceManager"
            }), "指定。  如果colorSpaceManager为nullptr，使用SRGB（基于IEC 61966-2.1：1999的标准红绿蓝色彩空间）色彩空间作为默认值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushgetalphafloat",
              children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetAlphaFloat(const OH_Drawing_Brush* brush, float* a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取画刷颜色的透明度值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushgetredfloat",
              children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetRedFloat(const OH_Drawing_Brush* brush, float* r)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取画刷颜色的红色分量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushgetgreenfloat",
              children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetGreenFloat(const OH_Drawing_Brush* brush, float* g)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取画刷颜色的绿色分量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_brushgetbluefloat",
              children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetBlueFloat(const OH_Drawing_Brush* brush, float* b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取画刷颜色的蓝色分量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushcreate",
      children: "OH_Drawing_BrushCreate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_Brush* OH_Drawing_BrushCreate(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个画刷对象。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数会返回一个指针，指针指向创建的画刷对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushcopy",
      children: "OH_Drawing_BrushCopy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_Brush* OH_Drawing_BrushCopy(OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个画刷对象副本", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
        children: "OH_Drawing_Brush"
      }), "，用于拷贝一个已有画刷对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的画刷对象副本", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "。如果对象返回NULL，表示创建失败；可能的原因是可用内存为空，或者是brush为NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushdestroy",
      children: "OH_Drawing_BrushDestroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushDestroy(OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于销毁画刷对象并回收该对象占有的内存。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushisantialias",
      children: "OH_Drawing_BrushIsAntiAlias()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_Drawing_BrushIsAntiAlias(const OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取画刷是否设置抗锯齿属性，如果为真则说明画刷会启用抗锯齿功能，在绘制图形时会对图形的边缘像素进行半透明的模糊处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回画刷对象是否设置抗锯齿属性，返回真则设置了抗锯齿，返回假则没有设置抗锯齿。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetantialias",
      children: "OH_Drawing_BrushSetAntiAlias()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushSetAntiAlias(OH_Drawing_Brush* brush, bool antiAlias)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置画刷的抗锯齿属性，设置为真则画刷在绘制图形时会对图形的边缘像素进行半透明的模糊处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool antiAlias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "真为抗锯齿，假则不做抗锯齿处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushgetcolor",
      children: "OH_Drawing_BrushGetColor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_Drawing_BrushGetColor(const OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取画刷的颜色属性，颜色属性描述了画刷填充图形时使用的颜色，用一个32位（ARGB）的变量表示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回一个描述颜色的32位（ARGB）变量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetcolor",
      children: "OH_Drawing_BrushSetColor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushSetColor(OH_Drawing_Brush* brush, uint32_t color)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置画刷的颜色属性，颜色属性描述了画刷填充图形时使用的颜色，用一个32位（ARGB）的变量表示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述颜色的32位（ARGB）变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushgetalpha",
      children: "OH_Drawing_BrushGetAlpha()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint8_t OH_Drawing_BrushGetAlpha(const OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画刷的透明度值。画刷在填充形状时透明通道会使用该值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向画刷对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个8位变量，用于表示透明度值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetalpha",
      children: "OH_Drawing_BrushSetAlpha()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushSetAlpha(OH_Drawing_Brush* brush, uint8_t alpha)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为画刷设置透明度值。画刷在填充形状时透明通道会使用该值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t alpha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要设置的透明度值，是一个8位变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetshadereffect",
      children: "OH_Drawing_BrushSetShaderEffect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushSetShaderEffect(OH_Drawing_Brush* brush, OH_Drawing_ShaderEffect* shaderEffect)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为画刷设置着色器效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "* shaderEffect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向着色器对象的指针，为NULL表示清空画刷的着色器效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetshadowlayer",
      children: "OH_Drawing_BrushSetShadowLayer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushSetShadowLayer(OH_Drawing_Brush* brush, OH_Drawing_ShadowLayer* shadowLayer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为画刷设置阴影层，设置的阴影层效果当前仅在绘制文字时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadowlayer/capi-drawing-oh-drawing-shadowlayer",
              children: "OH_Drawing_ShadowLayer"
            }), "* shadowLayer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向阴影层的指针，为NULL表示清空画刷的阴影层效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetfilter",
      children: "OH_Drawing_BrushSetFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushSetFilter(OH_Drawing_Brush* brush, OH_Drawing_Filter* filter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为画刷设置滤波器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
        children: "OH_Drawing_Filter"
      }), "。滤波器是一个容器，可以承载蒙版滤波器和颜色滤波器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向画刷对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
              children: "OH_Drawing_Filter"
            }), "* filter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向滤波器对象的指针，为NULL表示清空画刷滤波器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushgetfilter",
      children: "OH_Drawing_BrushGetFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushGetFilter(OH_Drawing_Brush* brush, OH_Drawing_Filter* filter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从画刷获取滤波器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
        children: "OH_Drawing_Filter"
      }), "。滤波器是一个容器，可以承载蒙版滤波器和颜色滤波器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush、filter任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画刷对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
              children: "OH_Drawing_Filter"
            }), "* filter"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向滤波器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-filter/capi-drawing-oh-drawing-filter",
              children: "OH_Drawing_Filter"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetblendmode",
      children: "OH_Drawing_BrushSetBlendMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushSetBlendMode(OH_Drawing_Brush* brush, OH_Drawing_BlendMode blendMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为画刷设置一个混合器，该混合器实现了指定的混合模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blendMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画刷对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            }), " blendMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["混合模式枚举类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushreset",
      children: "OH_Drawing_BrushReset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_BrushReset(OH_Drawing_Brush* brush)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将画刷重置至初始状态，清空所有已设置的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "brush为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。"
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
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向画刷对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushsetcolor4f",
      children: "OH_Drawing_BrushSetColor4f()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_BrushSetColor4f(OH_Drawing_Brush* brush, float a, float r, float g, float b,OH_NativeColorSpaceManager* colorSpaceManager)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置画刷的颜色。颜色将被画刷用来填充形状。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["颜色采用浮点数表示的ARGB格式，色彩空间由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/nativecolorspacemanager-oh-nativecolorspacemanager/nativecolorspacemanager-oh-nativecolorspacemanager",
        children: "OH_NativeColorSpaceManager"
      }), "指定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果colorSpaceManager为nullptr，使用SRGB（基于IEC 61966-2.1：1999的标准红绿蓝色彩空间）色彩空间作为默认值。"
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
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Brush* brush"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色中的透明度值，用0.0 ~ 1.0之间的浮点数表示，大于1.0时，取1.0，小于0.0时，取0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色中的红色分量，用0.0 ~ 1.0之间的浮点数表示，大于1.0时，取1.0，小于0.0时，取0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色中的绿色分量，用0.0 ~ 1.0之间的浮点数表示，大于1.0时，取1.0，小于0.0时，取0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色中的蓝色分量，用0.0 ~ 1.0之间的浮点数表示，大于1.0时，取1.0，小于0.0时，取0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/nativecolorspacemanager-oh-nativecolorspacemanager/nativecolorspacemanager-oh-nativecolorspacemanager",
              children: "OH_NativeColorSpaceManager"
            }), "* colorSpaceManager"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/nativecolorspacemanager-oh-nativecolorspacemanager/nativecolorspacemanager-oh-nativecolorspacemanager",
              children: "OH_NativeColorSpaceManager"
            }), "对象的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行结果。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数brush为NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushgetalphafloat",
      children: "OH_Drawing_BrushGetAlphaFloat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetAlphaFloat(const OH_Drawing_Brush* brush, float* a)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画刷颜色的透明度值。"
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
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色的透明度，范围为0.0 ~ 1.0的浮点数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行结果。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数brush或a为NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushgetredfloat",
      children: "OH_Drawing_BrushGetRedFloat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetRedFloat(const OH_Drawing_Brush* brush, float* r)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画刷颜色的红色分量。"
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
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色中的红色分量，范围为0.0 ~ 1.0的浮点数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行结果。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数brush或r为NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushgetgreenfloat",
      children: "OH_Drawing_BrushGetGreenFloat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetGreenFloat(const OH_Drawing_Brush* brush, float* g)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画刷颜色的绿色分量。"
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
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色中的绿色分量，范围为0.0 ~ 1.0的浮点数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行结果。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数brush或g为NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_brushgetbluefloat",
      children: "OH_Drawing_BrushGetBlueFloat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ErrorCode OH_Drawing_BrushGetBlueFloat(const OH_Drawing_Brush* brush, float* b)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取画刷颜色的蓝色分量。"
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
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "* brush"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-brush/capi-drawing-oh-drawing-brush",
              children: "OH_Drawing_Brush"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色中的蓝色分量，范围为0.0 ~ 1.0的浮点数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcode",
              children: "OH_Drawing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数返回执行结果。  返回OH_DRAWING_SUCCESS，表示执行成功。  返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数brush或b为NULL。"
          })]
        })
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