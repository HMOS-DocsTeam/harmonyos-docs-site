"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["857927"], {
615750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_arkts_js_apis_graphics_drawing_arkts_apis_graphics_drawing_shadereffect_arkts_apis_graphics_drawing_shadereffect_md_34b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-arkts-js-apis-graphics-drawing-arkts-apis-graphics-drawing-shadereffect-arkts-apis-graphics-drawing-shadereffect-md-34b.json
var site_docs_ref_arkgraphics_api_arkgraphics_arkts_js_apis_graphics_drawing_arkts_apis_graphics_drawing_shadereffect_arkts_apis_graphics_drawing_shadereffect_md_34b_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect","title":"Class (ShaderEffect)","description":"着色器。画刷和画笔设置着色器后，会使用着色器效果而不是颜色属性去绘制，但此时画笔和画刷的透明度属性仍然生效。","source":"@site/docs-ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect.md","sourceDirName":"arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect","slug":"/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"Class (ShaderEffect)","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-shadereffect","kit":"图形","last_updated":"2026-04-22","slug":"arkts-apis-graphics-drawing-shadereffect"},"sidebar":"ref","previous":{"title":"Class (SamplingOptions)","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-samplingoptions/arkts-apis-graphics-drawing-samplingoptions"},"next":{"title":"Class (ShadowLayer)","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadowlayer/arkts-apis-graphics-drawing-shadowlayer"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect.md


const frontMatter = {
	title: 'Class (ShaderEffect)',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-shadereffect',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-graphics-drawing-shadereffect'
};
const contentTitle = 'Class (ShaderEffect)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "createComposeShader20+",
  "id": "createcomposeshader20",
  "level": 2
}, {
  "value": "createImageShader20+",
  "id": "createimageshader20",
  "level": 2
}, {
  "value": "createColorShader12+",
  "id": "createcolorshader12",
  "level": 2
}, {
  "value": "createLinearGradient12+",
  "id": "createlineargradient12",
  "level": 2
}, {
  "value": "createRadialGradient12+",
  "id": "createradialgradient12",
  "level": 2
}, {
  "value": "createSweepGradient12+",
  "id": "createsweepgradient12",
  "level": 2
}, {
  "value": "createConicalGradient12+",
  "id": "createconicalgradient12",
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
        id: "class-shadereffect",
        children: "Class (ShaderEffect)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "着色器。画刷和画笔设置着色器后，会使用着色器效果而不是颜色属性去绘制，但此时画笔和画刷的透明度属性仍然生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97706)/* ["default"] */.A) + "",
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
      id: "createcomposeshader20",
      children: "createComposeShader20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect, blendMode: BlendMode): ShaderEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定的混合模式对两个着色器进行叠加，生成一个新的着色器。"
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
            children: "dstShaderEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在混合模式中作为目标色的着色器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcShaderEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在混合模式中作为源色的着色器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blendMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#blendmode",
              children: "BlendMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合模式。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象。"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts-errcode/errorcode-drawing/errorcode-drawing",
        children: "图形绘制与显示错误码"
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
            children: "25900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes: Incorrect parameter range."
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet dstShader = drawing.ShaderEffect.createColorShader(0xFF0000FF);\nlet srcShader = drawing.ShaderEffect.createColorShader(0xFFFF0000);\nlet shader = drawing.ShaderEffect.createComposeShader(dstShader, srcShader, drawing.BlendMode.SRC);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createimageshader20",
      children: "createImageShader20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode, samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于图片创建一个着色器。此接口不建议用于录制类型的画布，会影响性能。"
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
            children: "pixelmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行采样的图片对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tileX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#tilemode12",
              children: "TileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平方向的平铺模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tileY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#tilemode12",
              children: "TileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "竖直方向的平铺模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "samplingOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-samplingoptions/arkts-apis-graphics-drawing-samplingoptions",
              children: "SamplingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片采样参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象。"
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
        href: "/ref/arkgraphics-api/arkgraphics-arkts-errcode/errorcode-drawing/errorcode-drawing",
        children: "图形绘制与显示错误码"
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
            children: "25900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes: Incorrect parameter range."
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
        children: "import { RenderNode } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nclass DrawingRenderNode extends RenderNode {\n  draw(context: DrawContext) {\n    const width = 1000;\n    const height = 1000;\n    const bufferSize = width * height * 4;\n    const color: ArrayBuffer = new ArrayBuffer(bufferSize);\n\n    const colorData = new Uint8Array(color);\n    for (let i = 0; i < colorData.length; i += 4) {\n      colorData[i] = 255;\n      colorData[i+1] = 156;\n      colorData[i+2] = 0;\n      colorData[i+3] = 255;\n    }\n\n    let opts: image.InitializationOptions = {\n      editable: true,\n      pixelFormat: 3,\n      size: { height, width }\n    }\n\n    let pixelMap: image.PixelMap = image.createPixelMapSync(color, opts);\n    let matrix = new drawing.Matrix();\n    let options = new drawing.SamplingOptions(drawing.FilterMode.FILTER_MODE_NEAREST);\n    if (pixelMap != null) {\n      let imageShader =\n        drawing.ShaderEffect.createImageShader(pixelMap, drawing.TileMode.REPEAT, drawing.TileMode.MIRROR, options,\n          matrix);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createcolorshader12",
      children: "createColorShader12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createColorShader(color: number): ShaderEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建具有单一颜色的着色器。"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示着色器的ARGB格式颜色，该参数为32位无符号整数。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回具有单一颜色的着色器对象。"
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
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\nlet shaderEffect = drawing.ShaderEffect.createColorShader(0xFFFF0000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createlineargradient12",
      children: "createLinearGradient12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<number>, mode: TileMode, pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在两个指定点之间生成线性渐变。"
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
            children: "startPt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的起点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endPt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的终点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在两个点之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#tilemode12",
              children: "TileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "着色器效果平铺模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(903346)/* ["default"] */.A) + "",
        width: "350",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，设置颜色数组为红绿蓝，位置数组为0.0、0.75和1.0后的显示效果。三角下标表示对应颜色的起始点和终点之间的相对位置，颜色之间使用渐变填充。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象。"
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
        children: "import { common2D,drawing } from '@kit.ArkGraphics2D';\n\nlet startPt: common2D.Point = { x: 100, y: 100 };\nlet endPt: common2D.Point = { x: 300, y: 300 };\nlet shaderEffect = drawing.ShaderEffect.createLinearGradient(startPt, endPt, [0xFF00FF00, 0xFFFF0000], drawing.TileMode.REPEAT);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createradialgradient12",
      children: "createRadialGradient12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createRadialGradient(centerPt: common2D.Point, radius: number, colors: Array<number>, mode: TileMode, pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，使用给定的圆心和半径生成径向渐变。径向渐变是指颜色从圆心逐渐向外扩散形成的渐变。"
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
            children: "centerPt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的半径，小于等于0时无效，该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在圆心和圆边界之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#tilemode12",
              children: "TileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "着色器效果平铺模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(305997)/* ["default"] */.A) + "",
        width: "350",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，设置颜色数组为红绿蓝，位置数组为0.0、0.75和1.0后的显示效果。三角下标表示对应颜色所在圆心和圆边界之间的相对位置，颜色之间使用渐变填充。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象。"
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
        children: "import { common2D,drawing } from '@kit.ArkGraphics2D';\n\nlet centerPt: common2D.Point = { x: 100, y: 100 };\nlet shaderEffect = drawing.ShaderEffect.createRadialGradient(centerPt, 100, [0xFF00FF00, 0xFFFF0000], drawing.TileMode.REPEAT);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createsweepgradient12",
      children: "createSweepGradient12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createSweepGradient(centerPt: common2D.Point, colors: Array<number>, mode: TileMode, startAngle: number, endAngle: number, pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器。该着色器以给定中心点为圆心，在顺时针或逆时针方向上生成颜色扫描渐变。"
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
            children: "centerPt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在起始角度和结束角度之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#tilemode12",
              children: "TileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "着色器效果平铺模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示扇形渐变的起始角度，单位为度。0度时为x轴正方向，正数往顺时针方向偏移，负数往逆时针方向偏移。该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示扇形渐变的结束角度，单位为度。0度时为x轴正方向，正数往顺时针方向偏移，负数往逆时针方向偏移。小于起始角度时无效。该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(694854)/* ["default"] */.A) + "",
        width: "350",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，设置颜色数组为红绿蓝，位置数组为0.0、0.75和1.0，起始角度设置为0度，结束角度设置为180度后的显示效果。0.0对应0度的位置，0.75对应135度的位置，1.0对应180度的位置，颜色之间使用渐变填充。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象。"
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
        children: "import { common2D,drawing } from '@kit.ArkGraphics2D';\n\nlet centerPt: common2D.Point = { x: 100, y: 100 };\nlet shaderEffect = drawing.ShaderEffect.createSweepGradient(centerPt, [0xFF00FF00, 0xFFFF0000], drawing.TileMode.REPEAT, 100, 200);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createconicalgradient12",
      children: "createConicalGradient12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createConicalGradient(startPt: common2D.Point, startRadius: number, endPt: common2D.Point, endRadius: number, colors: Array<number>, mode: TileMode, pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建着色器，在给定两个圆之间生成径向渐变。"
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
            children: "startPt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的起始圆的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的起始圆的半径，小于0时无效。该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endPt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#point12",
              children: "common2D.Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的结束圆的圆心。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示渐变的结束圆的半径，小于0时无效。该参数为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在起始圆和结束圆之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#tilemode12",
              children: "TileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "着色器效果平铺模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-matrix/arkts-apis-graphics-drawing-matrix",
              children: "Matrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(20289)/* ["default"] */.A) + "",
        width: "350",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，设置颜色数组为红绿蓝，位置数组为0.0、0.5和1.0的绘制结果。左侧为起始圆不在结束圆内的绘制结果，右侧为起始圆在结束圆内的绘制结果。"
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
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-shadereffect/arkts-apis-graphics-drawing-shadereffect",
              children: "ShaderEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的着色器对象。"
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
        children: "import { common2D,drawing } from '@kit.ArkGraphics2D';\n\nlet startPt: common2D.Point = { x: 100, y: 100 };\nlet endPt: common2D.Point = {x: 200, y: 200};\nlet shaderEffect = drawing.ShaderEffect.createConicalGradient(startPt, 100, endPt, 50, [0xFF00FF00, 0xFFFF0000], drawing.TileMode.REPEAT);\n"
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
694854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960866-8a4d289d0e4e8d1e218933db3a39e1e7.png");

},
305997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440911-d05c58ed5651a1917cb433ef5c7e8ff7.png");

},
97706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
903346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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Iaaop1zeitWA1YDVgNVgr/CxGrq3dr+4dX2ktrnyp3NxZOsUW21X/3DZ5YQjlsrNCJWVlcKcFKyEjUgljK26suRqIFcDuRrI1UCuhglCQpikYhuCWA1YDVgNWA1YDefilrMSL1ENRDUQ1WBPREQ1ENVAVMPBjghEUxDVQFTDuZ1rxbeMLUWJpuhevz41Flfy0rMqXtJCkhZy4tJbGeQKEZUqC/GOSPxOVANRDe2IhXPRGp0VwCHi4/ktt3tyNe/R3d63XV5euovdbrfnEX5AAARAAATsEYB47TGmBhAAARDoIADxMiBAAARAIDMCEG9mwKkOBEAABCBexgAIbByBH374wd2+fdu99957G2/pPM3LgRfEO09f8S0gsEgE/v33X/fmm2/uife3335zr7zyyiKfcykPlQuvLMSbYwZZSsfxHCCwFASePn3q3nnnHff48eP9I73xxhvup59+2pMwP6cI5MTLnHhzzSAMJBAAgS4C9+/fd19//XXnLz///HP36aefAtUZBHLiZUq8OWcQRhIIgMANAn/++ad79913nX8H2z9e7f7888/u9ddfB64WArnxMiXenDMIowgEQOAagaurK/fWW285v9o89+N93j/++MO9/PLLQFYILzPizT2DMIJAAASuEfj444/djz/+OAjHBx984B48eABkhfAyIV5mXMYzCIAACIQRMCFeZlyGHAiAAAhkJl4ABwEQAAEQgHgZAyAAAiCwGARMrIbFtI4HAQEQAIEFIgDxLrBTeCQQAIFtIwDxbrt/aR0IgMACEYB4F9gpPBIIgMC2EYB4t92/tA4EQGCBCEC8C+wUHgkEQGDbCEC82+5fWgcCILBABCDeBXYKjwQCILBtBMyJ95tvvnFffvnlEcW//vrLvfrqq9tGldaBgBECd+7cOX7zRx995L766qtgTT5Rjj++H/pp3sV//vnHvfbaaycf++KLL9wnn3xi1JLyX+tTY/r8xClXIs3NY6bE23R808H9P5eHnicAgfUg4Ini3r17R7Lt/zmlJQ3JtknVZxL0N1XsdruUr9jEZ95//333yy+/uG+//TZKvBY8Zkq8fmB8+OGHnVnTN9gr3qGZehM9SyNAYEYEmpe/TY4NYY5ZRfr37++//z5eB+Qf0au533//3T18+HDGJ17uV7VXDSnEa8FjZsTbzKw+272/66n58Z38/fffdzp+uV3Ek4HAMhD47LPPnH+n+uToSSSFPHwrGqLuv5OejO/evbtpW6HpxebmjUePHu3tlRh2VjxmRryh2fjczL2Moc1TgMByEQitFM+psVAr/Hf4nz55N2TklXDzEyOk5SKV9mQNocbaacVjZsQb8nMh3rSBwadAoI1AyM9NJd6GQPpE0xDQ22+/fSTk0Ge31COpxGvFYxDvlkYTbdksAirxeqviu+++S95A85//9ddfN2sJbpZ4rST6Zt8sGgYCAwioVsPYCIitr0xTideKx8wUr5UpzdsJAjUioGyupZJMG1eI9xoNKx4zI17/0BZhGDW+dLQZBJRwsqH4+ZCiCxH9VnpizGRkwWOmxNuc9mjiDPt/3kon0g4QyIGADx1rn1br/zn0DM17Fzog0UQ1PH78eP8VDVH3w85ytDFXHWOI14LHTInXgzj3UbtcHUM9ILBEBIaODIfidFM2ypqTXE2bxxzKWCJOsWcKEW8Iw7l5zJx4YwDw7yAAAiBQGwIQb209TntBAASKIwDxFu8CHgAEQKA2BCDe2nqc9oIACBRHAOIt3gU8AAiAQG0IQLy19TjtBQEQKI4AxFu8C3gAEACB2hCAeGvrcdoLAiBQHAGIt3gX8AAgAAK1IQDx1tbjtBcEQKA4AhBv8S7gAUAABGpDAOKtrcdpLwiAQHEEPPH+B8py759bSGI8AAAAAElFTkSuQmCC");

},
20289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480867-43c9a33bf2c83c45b5c9b5115d29948a.png");

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