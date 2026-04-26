"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["917145"], {
715664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_shader_effect_h_capi_drawing_shader_effect_h_md_478_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-drawing-shader-effect-h-capi-drawing-shader-effect-h-md-478.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_drawing_shader_effect_h_capi_drawing_shader_effect_h_md_478_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h","title":"drawing_shader_effect.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"title":"drawing_shader_effect.h","sidebar_position":35,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-shader-effect-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-drawing-shader-effect-h"},"sidebar":"ref","previous":{"title":"drawing_sampling_options.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-sampling-options-h/capi-drawing-sampling-options-h"},"next":{"title":"drawing_shadow_layer.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shadow-layer-h/capi-drawing-shadow-layer-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h.md


const frontMatter = {
	title: 'drawing_shader_effect.h',
	sidebar_position: 35,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-shader-effect-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-drawing-shader-effect-h'
};
const contentTitle = 'drawing_shader_effect.h';

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
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_Drawing_TileMode",
  "id": "oh_drawing_tilemode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Drawing_ShaderEffectCreatePixelMapShader()",
  "id": "oh_drawing_shadereffectcreatepixelmapshader",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateColorShader()",
  "id": "oh_drawing_shadereffectcreatecolorshader",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateLinearGradient()",
  "id": "oh_drawing_shadereffectcreatelineargradient",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateLinearGradientWithLocalMatrix()",
  "id": "oh_drawing_shadereffectcreatelineargradientwithlocalmatrix",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateRadialGradient()",
  "id": "oh_drawing_shadereffectcreateradialgradient",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateRadialGradientWithLocalMatrix()",
  "id": "oh_drawing_shadereffectcreateradialgradientwithlocalmatrix",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateSweepGradientWithLocalMatrix()",
  "id": "oh_drawing_shadereffectcreatesweepgradientwithlocalmatrix",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateSweepGradient()",
  "id": "oh_drawing_shadereffectcreatesweepgradient",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateImageShader()",
  "id": "oh_drawing_shadereffectcreateimageshader",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateTwoPointConicalGradient()",
  "id": "oh_drawing_shadereffectcreatetwopointconicalgradient",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectCreateCompose()",
  "id": "oh_drawing_shadereffectcreatecompose",
  "level": 3
}, {
  "value": "OH_Drawing_ShaderEffectDestroy()",
  "id": "oh_drawing_shadereffectdestroy",
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
        id: "drawing_shader_effecth",
        children: "drawing_shader_effect.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明与绘图模块中的着色器对象相关的函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_drawing/drawing_shader_effect.h>"]
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
      }), " 11"]
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
      id: "枚举",
      children: "枚举"
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
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_TileMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "着色器效果平铺模式的枚举。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_drawing_shadereffectcreatecolorshader",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateColorShader(const uint32_t color)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建具有单一颜色的着色器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreatelineargradient",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateLinearGradient(const OH_Drawing_Point* startPt,const OH_Drawing_Point* endPt, const uint32_t* colors,const float* pos, uint32_t size, OH_Drawing_TileMode tileMode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建着色器，在两个指定点之间生成线性渐变。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  startPt、endPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreatelineargradientwithlocalmatrix",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateLinearGradientWithLocalMatrix(const OH_Drawing_Point2D* startPt, const OH_Drawing_Point2D* endPt, const uint32_t* colors, const float* pos,uint32_t size, OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建着色器，在两个指定点之间生成线性渐变。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  startPt、endPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreateradialgradient",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateRadialGradient(const OH_Drawing_Point* centerPt, float radius,const uint32_t* colors, const float* pos, uint32_t size, OH_Drawing_TileMode tileMode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建着色器，在给定圆心和半径的情况下生成径向渐变。  从起点到终点颜色从内到外进行圆形渐变（从中间向外拉）被称为径向渐变。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  centerPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreateradialgradientwithlocalmatrix",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateRadialGradientWithLocalMatrix(const OH_Drawing_Point2D* centerPt, float radius, const uint32_t* colors, const float* pos, uint32_t size,OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建着色器，在给定圆心和半径的情况下生成径向渐变。  从起点到终点颜色从内到外进行圆形渐变（从中间向外拉）被称为径向渐变。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  centerPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreatesweepgradientwithlocalmatrix",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateSweepGradientWithLocalMatrix(const OH_Drawing_Point* centerPt,const uint32_t* colors, const float* pos, uint32_t size, OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建着色器，在给定中心的情况下结合矩阵变换生成扇形渐变。  颜色从0°到360°渐变被称为扇形渐变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreatesweepgradient",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateSweepGradient(const OH_Drawing_Point* centerPt,const uint32_t* colors, const float* pos, uint32_t size, OH_Drawing_TileMode tileMode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建着色器，在给定中心的情况下生成扇形渐变。  颜色从0°到360°渐变被称为扇形渐变。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  centerPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreateimageshader",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateImageShader(OH_Drawing_Image* image,OH_Drawing_TileMode tileX, OH_Drawing_TileMode tileY, const OH_Drawing_SamplingOptions* samplingOptions,const OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建图像着色器。此接口不建议用于录制类型的画布，会影响性能。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  image、samplingOptions任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  tileX、tileY任意一个不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreatetwopointconicalgradient",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateTwoPointConicalGradient(const OH_Drawing_Point2D* startPt,float startRadius, const OH_Drawing_Point2D* endPt, float endRadius, const uint32_t* colors, const float* pos,uint32_t size, OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建着色器，在给定两个圆之间生成渐变。  本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
              children: "OH_Drawing_ErrorCodeGet"
            }), "查看错误码的取值。  startPt、endPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；  tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreatecompose",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateCompose(OH_Drawing_ShaderEffect* dst,OH_Drawing_ShaderEffect* src, OH_Drawing_BlendMode mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照指定的混合模式对两个着色器进行叠加，生成一个新的着色器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectdestroy",
              children: "void OH_Drawing_ShaderEffectDestroy(OH_Drawing_ShaderEffect* shaderEffect)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁着色器对象，并收回该对象占用的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_shadereffectcreatepixelmapshader",
              children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreatePixelMapShader(OH_Drawing_PixelMap* pixelMap,OH_Drawing_TileMode tileX, OH_Drawing_TileMode tileY, const OH_Drawing_SamplingOptions* samplingOptions,const OH_Drawing_Matrix* matrix)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建像素图着色器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_tilemode",
      children: "OH_Drawing_TileMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Drawing_TileMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "着色器效果平铺模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "CLAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果着色器效果超出其原始边界，则复制边缘颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPEAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在水平和垂直方向上重复着色器效果图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIRROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平和垂直重复着色器效果图像，交替镜像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DECAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只在原始区域内绘制，其他地方返回透明黑色。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatepixelmapshader",
      children: "OH_Drawing_ShaderEffectCreatePixelMapShader()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreatePixelMapShader(OH_Drawing_PixelMap* pixelMap,OH_Drawing_TileMode tileX, OH_Drawing_TileMode tileY, const OH_Drawing_SamplingOptions* samplingOptions,const OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建像素图着色器。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向像素图", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-pixelmap/capi-drawing-oh-drawing-pixelmap",
              children: "OH_Drawing_PixelMap"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileX"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水平方向着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileY"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["垂直方向着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "const OH_Drawing_SamplingOptions"
            }), "* samplingOptions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向采样选项对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "const OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩阵对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "的指针。如果矩阵指针为空，默认传入单位矩阵。"]
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
            children: "OH_Drawing_ShaderEffect*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatecolorshader",
      children: "OH_Drawing_ShaderEffectCreateColorShader()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateColorShader(const uint32_t color)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建具有单一颜色的着色器。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示着色器的ARGB格式颜色，该参数为32位无符号整数。"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。如果对象返回NULL，表示创建失败；可能的原因是可用内存为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatelineargradient",
      children: "OH_Drawing_ShaderEffectCreateLinearGradient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateLinearGradient(const OH_Drawing_Point* startPt,const OH_Drawing_Point* endPt, const uint32_t* colors,const float* pos, uint32_t size, OH_Drawing_TileMode tileMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在两个指定点之间生成线性渐变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startPt、endPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point/capi-drawing-oh-drawing-point",
              children: "OH_Drawing_Point"
            }), "* startPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的起点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point/capi-drawing-oh-drawing-point",
              children: "OH_Drawing_Point"
            }), "* endPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的终点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在两个点之间分布的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示colors中每个对应颜色的相对位置，数组长度需和colors保持一致。如果pos为NULL，颜色均匀分布在起点和终点之间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色数组的长度（即元素个数），范围为[0, 256]，长度为0时，表示无渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatelineargradientwithlocalmatrix",
      children: "OH_Drawing_ShaderEffectCreateLinearGradientWithLocalMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateLinearGradientWithLocalMatrix(const OH_Drawing_Point2D* startPt, const OH_Drawing_Point2D* endPt, const uint32_t* colors, const float* pos,uint32_t size, OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在两个指定点之间生成线性渐变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startPt、endPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* startPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的起点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* endPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的终点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在两个点之间分布的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示colors中每个对应颜色的相对位置，数组长度需和colors保持一致。如果pos为NULL，颜色均匀分布在起点和终点之间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色数组的长度（即元素个数），范围为[0, 256]，长度为0时，表示无渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示作用于着色器上的矩阵变换，如果matrix是NULL, 默认是一个单位矩阵。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。如果对象返回NULL，表示创建失败；可能的原因是可用内存为空，或者是startPt、endPt、colors至少一个为NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreateradialgradient",
      children: "OH_Drawing_ShaderEffectCreateRadialGradient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateRadialGradient(const OH_Drawing_Point* centerPt, float radius,const uint32_t* colors, const float* pos, uint32_t size, OH_Drawing_TileMode tileMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在给定圆心和半径的情况下生成径向渐变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从起点到终点颜色从内到外进行圆形渐变（从中间向外拉）被称为径向渐变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "centerPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point/capi-drawing-oh-drawing-point",
              children: "OH_Drawing_Point"
            }), "* centerPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的半径，需为非负数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在径向上分布的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示colors中每个对应颜色的相对位置，数组长度需和colors保持一致。如果pos为NULL，颜色均匀分布在径向上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色数组的长度（即元素个数），范围为[0, 256]，长度为0时，表示无渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreateradialgradientwithlocalmatrix",
      children: "OH_Drawing_ShaderEffectCreateRadialGradientWithLocalMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateRadialGradientWithLocalMatrix(const OH_Drawing_Point2D* centerPt, float radius, const uint32_t* colors, const float* pos, uint32_t size,OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在给定圆心和半径的情况下生成径向渐变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从起点到终点颜色从内到外进行圆形渐变（从中间向外拉）被称为径向渐变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "centerPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* centerPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在径向上分布的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示colors中每个对应颜色的相对位置，数组长度需和colors保持一致。如果pos为NULL，颜色均匀分布在径向上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色数组的长度（即元素个数），范围为[0, 256]，长度为0时，表示无渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示作用于着色器上的矩阵变换，如果matrix是NULL, 默认是一个单位矩阵。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。如果对象返回NULL，表示创建失败；可能的原因是可用内存为空，或者是centerPt、colors至少一个为NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatesweepgradientwithlocalmatrix",
      children: "OH_Drawing_ShaderEffectCreateSweepGradientWithLocalMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateSweepGradientWithLocalMatrix(const OH_Drawing_Point* centerPt,const uint32_t* colors, const float* pos, uint32_t size, OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在给定中心的情况下结合矩阵变换生成扇形渐变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色从0°到360°渐变被称为扇形渐变。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point/capi-drawing-oh-drawing-point",
              children: "OH_Drawing_Point"
            }), "* centerPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在两个点之间分布的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示colors中每个对应颜色的相对位置，数组长度需和colors保持一致。如果pos为NULL，颜色均匀分布在0°和360°之间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色数组的长度（即元素个数），范围为[0, 256]，长度为0时，表示无渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示作用于着色器上的矩阵变换，如果matrix是NULL, 默认是一个单位矩阵。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。  存在以下任意一种情况时，会返回空指针：1.可用内存为空；2.centerPt、colors任意为空；3.tileMode超出枚举范围。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatesweepgradient",
      children: "OH_Drawing_ShaderEffectCreateSweepGradient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateSweepGradient(const OH_Drawing_Point* centerPt,const uint32_t* colors, const float* pos, uint32_t size, OH_Drawing_TileMode tileMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在给定中心的情况下生成扇形渐变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色从0°到360°渐变被称为扇形渐变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "centerPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point/capi-drawing-oh-drawing-point",
              children: "OH_Drawing_Point"
            }), "* centerPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在两个点之间分布的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示colors中每个对应颜色的相对位置，数组长度需和colors保持一致。如果pos为NULL，颜色均匀分布在0°和360°之间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色数组的长度（即元素个数），范围为[0, 256]，长度为0时，表示无渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。  存在以下任意一种情况时，会返回空指针：1.可用内存为空；2.centerPt、colors任意为空；3.tileMode超出枚举范围。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreateimageshader",
      children: "OH_Drawing_ShaderEffectCreateImageShader()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateImageShader(OH_Drawing_Image* image,OH_Drawing_TileMode tileX, OH_Drawing_TileMode tileY, const OH_Drawing_SamplingOptions* samplingOptions,const OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建图像着色器。此接口不建议用于录制类型的画布，会影响性能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "image、samplingOptions任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tileX、tileY任意一个不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image/capi-drawing-oh-drawing-image",
              children: "OH_Drawing_Image"
            }), "* image"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向图片对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-image/capi-drawing-oh-drawing-image",
              children: "OH_Drawing_Image"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileX"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水平方向着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileY"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["垂直方向着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "* samplingOptions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向采样选项对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-samplingoptions/capi-drawing-oh-drawing-samplingoptions",
              children: "OH_Drawing_SamplingOptions"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向矩阵对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "的指针。如果矩阵指针为空，默认传入单位矩阵。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。  存在以下任意一种情况时，会返回空指针：1.可用内存为空；2.image、samplingOptions任意为空；3.tileX、tileY超出枚举范围。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatetwopointconicalgradient",
      children: "OH_Drawing_ShaderEffectCreateTwoPointConicalGradient()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateTwoPointConicalGradient(const OH_Drawing_Point2D* startPt,float startRadius, const OH_Drawing_Point2D* endPt, float endRadius, const uint32_t* colors, const float* pos,uint32_t size, OH_Drawing_TileMode tileMode, const OH_Drawing_Matrix* matrix)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在给定两个圆之间生成渐变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口会产生错误码，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget",
        children: "OH_Drawing_ErrorCodeGet"
      }), "查看错误码的取值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startPt、endPt、colors任意一个为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tileMode不在枚举范围内时返回OH_DRAWING_ERROR_PARAMETER_OUT_OF_RANGE。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* startPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的起点圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float startRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的起点半径，需为非负数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-point2d/capi-drawing-oh-drawing-point2d",
              children: "OH_Drawing_Point2D"
            }), "* endPt"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的终点圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float endRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的终点半径，需为非负数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t* colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在两个圆之间分布的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float* pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示colors中每个对应颜色的相对位置，数组长度需和colors保持一致。如果pos为NULL，颜色均匀分布在两个圆之间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色数组的长度（即元素个数），范围为[0, 256]，长度为0时，表示无渐变效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), " tileMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["着色器效果平铺模式类型，支持可选的具体模式可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h#oh_drawing_tilemode",
              children: "OH_Drawing_TileMode"
            }), "枚举。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-matrix/capi-drawing-oh-drawing-matrix",
              children: "OH_Drawing_Matrix"
            }), "* matrix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示作用于着色器上的矩阵变换，如果matrix是NULL, 默认是一个单位矩阵。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。如果对象返回NULL，表示创建失败；可能的原因是：1.可用内存为空；2.startPt、endPt、colors任意为空；3.tileMode超出枚举范围。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectcreatecompose",
      children: "OH_Drawing_ShaderEffectCreateCompose()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_ShaderEffect* OH_Drawing_ShaderEffectCreateCompose(OH_Drawing_ShaderEffect* dst,OH_Drawing_ShaderEffect* src, OH_Drawing_BlendMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定的混合模式对两个着色器进行叠加，生成一个新的着色器。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "* dst"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在混合模式中作为目标色的着色器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "* src"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在混合模式中作为源色的着色器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            }), " mode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["混合模式", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode",
              children: "OH_Drawing_BlendMode"
            }), "。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数会返回一个指针，指针指向创建的着色器对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "。  当可用内存为空，或者是dst、src任意一个为空，或mode超出枚举范围时，结果返回NULL，表示创建失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_drawing_shadereffectdestroy",
      children: "OH_Drawing_ShaderEffectDestroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Drawing_ShaderEffectDestroy(OH_Drawing_ShaderEffect* shaderEffect)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁着色器对象，并收回该对象占用的内存。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-shadereffect/capi-drawing-oh-drawing-shadereffect",
              children: "OH_Drawing_ShaderEffect"
            }), "* shaderEffect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向着色器对象的指针。"
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