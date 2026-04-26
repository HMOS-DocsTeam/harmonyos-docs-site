"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["562632"], {
345868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_module_capi_drawing_capi_drawing_md_e41_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-module-capi-drawing-capi-drawing-md-e41.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_module_capi_drawing_capi_drawing_md_e41_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing","title":"Drawing","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Drawing","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing","kit":"图形","last_updated":"2026-04-22","slug":"capi-drawing"},"sidebar":"ref","previous":{"title":"NativeDisplaySoloist","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativedisplaysoloist/capi-nativedisplaysoloist"},"next":{"title":"effectKit","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-effectkit/capi-effectkit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing.md


const frontMatter = {
	title: 'Drawing',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-drawing'
};
const contentTitle = 'Drawing';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "drawing",
        children: "Drawing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drawing模块提供包括2D图形渲染、文字绘制和图片显示等功能函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块采用屏幕物理像素单位px。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-bitmap-h/capi-drawing-bitmap-h",
              children: "drawing_bitmap.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与位图相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-brush-h/capi-drawing-brush-h",
              children: "drawing_brush.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与画刷相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h",
              children: "drawing_canvas.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与画布相关的功能函数。  画布自带一个黑色，开启抗锯齿，不具备其他任何样式的默认画刷，当且仅当画布中主动设置的画刷和画笔都不存在时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-color-h/capi-drawing-color-h",
              children: "drawing_color.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与颜色相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-color-filter-h/capi-drawing-color-filter-h",
              children: "drawing_color_filter.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的颜色滤波器对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-color-space-h/capi-drawing-color-space-h",
              children: "drawing_color_space.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与颜色空间相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h",
              children: "drawing_error_code.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的错误码相关的函数。include native_drawing/drawing_error_code.h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-filter-h/capi-drawing-filter-h",
              children: "drawing_filter.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的滤波器对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-font-h/capi-drawing-font-h",
              children: "drawing_font.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与字体相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-font-collection-h/capi-drawing-font-collection-h",
              children: "drawing_font_collection.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义绘制模块中与字体集合相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-font-mgr-h/capi-drawing-font-mgr-h",
              children: "drawing_font_mgr.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与字体管理相关的功能函数，用于加载和匹配系统中可用的字体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-gpu-context-h/capi-drawing-gpu-context-h",
              children: "drawing_gpu_context.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的图形处理器上下文对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-image-h/capi-drawing-image-h",
              children: "drawing_image.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与图片相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-image-filter-h/capi-drawing-image-filter-h",
              children: "drawing_image_filter.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的图像滤波器对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-mask-filter-h/capi-drawing-mask-filter-h",
              children: "drawing_mask_filter.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-matrix-h/capi-drawing-matrix-h",
              children: "drawing_matrix.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与矩阵相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-memory-stream-h/capi-drawing-memory-stream-h",
              children: "drawing_memory_stream.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与内存流相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-path-h/capi-drawing-path-h",
              children: "drawing_path.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与自定义路径相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-path-effect-h/capi-drawing-path-effect-h",
              children: "drawing_path_effect.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与路径效果相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-pen-h/capi-drawing-pen-h",
              children: "drawing_pen.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与画笔相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-pixel-map-h/capi-drawing-pixel-map-h",
              children: "drawing_pixel_map.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的像素图对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-point-h/capi-drawing-point-h",
              children: "drawing_point.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与坐标点相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-record-cmd-h/capi-drawing-record-cmd-h",
              children: "drawing_record_cmd.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与录制指令对象相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-rect-h/capi-drawing-rect-h",
              children: "drawing_rect.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与矩形相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-region-h/capi-drawing-region-h",
              children: "drawing_region.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了与区域相关的功能函数，包括区域的创建，边界设置和销毁等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-register-font-h/capi-drawing-register-font-h",
              children: "drawing_register_font.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义绘制模块中字体管理器相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-round-rect-h/capi-drawing-round-rect-h",
              children: "drawing_round_rect.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与圆角矩形相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-sampling-options-h/capi-drawing-sampling-options-h",
              children: "drawing_sampling_options.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与采样相关的功能函数。用于图片或者纹理等图像的采样。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shader-effect-h/capi-drawing-shader-effect-h",
              children: "drawing_shader_effect.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的着色器对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-shadow-layer-h/capi-drawing-shadow-layer-h",
              children: "drawing_shadow_layer.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明与绘图模块中的阴影层对象相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-surface-h/capi-drawing-surface-h",
              children: "drawing_surface.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义与surface相关的功能函数，包括surface的创建、销毁和使用等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-blob-h/capi-drawing-text-blob-h",
              children: "drawing_text_blob.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与文字相关的功能函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-declaration-h/capi-drawing-text-declaration-h",
              children: "drawing_text_declaration.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供2D绘制文本相关的数据结构声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-font-descriptor-h/capi-drawing-text-font-descriptor-h",
              children: "drawing_text_font_descriptor.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了字体信息的相关接口，比如获取字体信息，查找指定字体等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-global-h/capi-drawing-text-global-h",
              children: "drawing_text_global.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供文本全局信息的相关接口，比如设置文本渲染高对比度模式等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-line-h/capi-drawing-text-line-h",
              children: "drawing_text_line.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供获取文本行内的字符位置、获取渲染单元信息和按行截断等功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-linetypography-h/capi-drawing-text-linetypography-h",
              children: "drawing_text_lineTypography.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供排版行相关的接口，比如获取指定位置处开始可以排版的字符个数等函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-run-h/capi-drawing-text-run-h",
              children: "drawing_text_run.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供字体渲染单元的相关接口，比如绘制功能、获取排版边界功能等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h",
              children: "drawing_text_typography.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义绘制模块中排版相关的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-typeface-h/capi-drawing-typeface-h",
              children: "drawing_typeface.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了与字形相关的功能函数。  不同的平台有自己的默认字形，也可以从ttf文件解析出三方指定字形，如宋体、黑体字形等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h",
              children: "drawing_types.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件中定义了用于绘制2d图形的数据类型，包括画布、画笔、画刷、位图和路径。"
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