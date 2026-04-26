"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["343772"], {
780656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_files_frame_generation_gles_8_h_frame_generation_gles_8_h_md_7e6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-files-frame-generation-gles-8-h-frame-generation-gles-8-h-md-7e6.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_files_frame_generation_gles_8_h_frame_generation_gles_8_h_md_7e6_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h","title":"frame_generation_gles.h","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"frame_generation_gles.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__gles_8h","kit":"图形","last_updated":"2026-04-22","slug":"frame__generation__gles_8h"},"sidebar":"ref","previous":{"title":"frame_generation_base.h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__base_8h/frame__generation__base_8h"},"next":{"title":"frame_generation_vk.h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h.md


const frontMatter = {
	title: 'frame_generation_gles.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__gles_8h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'frame__generation__gles_8h'
};
const contentTitle = 'frame_generation_gles.h';

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
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "frame_generation_glesh",
        children: "frame_generation_gles.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明OpenGL ES图形API平台的超帧接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <graphics_game_sdk/frame_generation_gles.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libframegeneration.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.GraphicsGame.RenderAccelerate"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate",
        children: "GraphicsAccelerate"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s",
              children: "FG_DispatchDescription_GLES"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧上下文，该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s",
              children: "FG_DispatchDescription_GLES"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_dispatchdescription_gles",
              children: "FG_DispatchDescription_GLES"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_imageformat_gles-1",
              children: "FG_ImageFormat_GLES"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_imageformat_gles",
              children: "FG_ImageFormat_GLES"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_imageformat_gles-1",
              children: "FG_ImageFormat_GLES"
            }), " {  FG_FORMAT_R8G8B8A8_UNORM = 0,  FG_FORMAT_R11G11B10_SFLOAT = 1,  FG_FORMAT_R16G16B16A16_SFLOAT = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createcontext_gles",
              children: "HMS_FG_CreateContext_GLES"
            }), "(void)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建超帧上下文实例，调用成功则返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，失败返回nullptr。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setalgorithmmode_gles",
              children: "HMS_FG_SetAlgorithmMode_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___algorithm_mode_info/x_f_g___algorithm_mode_info",
              children: "FG_AlgorithmModeInfo"
            }), "* predictionModeInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧预测算法模式和运动估计模式，必选。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setresolution_gles",
              children: "HMS_FG_SetResolution_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___resolution_info/x_f_g___resolution_info",
              children: "FG_ResolutionInfo"
            }), "* resolutionInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧输入输出图像分辨率，必选。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setcvvzsemantic_gles",
              children: "HMS_FG_SetCvvZSemantic_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_cvvzsemantic-1",
              children: "FG_CvvZSemantic"
            }), " semantic)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setimageformat_gles",
              children: "HMS_FG_SetImageFormat_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_imageformat_gles-1",
              children: "FG_ImageFormat_GLES"
            }), " format)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式，可选调用，未调用则模式默认设置为FG_FORMAT_R8G8B8A8_UNORM。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setdepthstencilydirectioninverted_gles",
              children: "HMS_FG_SetDepthStencilYDirectionInverted_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, bool inverted)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置颜色缓冲区相对深度模板缓冲区基于y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_gles",
              children: "HMS_FG_Activate_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["激活超帧上下文实例。已激活的超帧实例可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "接口生成预测帧， 激活超帧上下文实例前必须先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setalgorithmmode_gles",
              children: "HMS_FG_SetAlgorithmMode_GLES"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setresolution_gles",
              children: "HMS_FG_SetResolution_GLES"
            }), "接口完成配置。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_deactivate_gles",
              children: "HMS_FG_Deactivate_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["去激活超帧上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_gles",
              children: "HMS_FG_Activate_GLES"
            }), "接口重新激活。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_isactive_gles",
              children: "HMS_FG_IsActive_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, bool* isActive)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询超帧上下文实例是否处于激活状态。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s",
              children: "FG_DispatchDescription_GLES"
            }), "* desc)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setextendedcamerainfo_gles",
              children: "HMS_FG_SetExtendedCameraInfo_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___per_frame_extended_camera_info/x_f_g___per_frame_extended_camera_info",
              children: "FG_PerFrameExtendedCameraInfo"
            }), "* info)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧相机扩展属性信息，当视图投影矩阵的平移分量非常大时，提供该信息以获得更加准确的超帧效果。可选调用，该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroycontext_gles",
              children: "HMS_FG_DestroyContext_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "** context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁超帧上下文实例并释放内存资源。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setintegrationmode_gles",
              children: "HMS_FG_SetIntegrationMode_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "* integrationInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置超帧集成信息，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode-1",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "中的presentMode、needDepthAndColorCache、needFlipColorTexture成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setuipredictionenabled_gles",
              children: "HMS_FG_SetUiPredictionEnabled_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, bool isEnabled)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。UI预测功能启用后，画面中2D UI内容可以与主画面一样做预测、帧生成；如不启用该功能，预测帧会复用真实帧的UI进行展示。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_errorcode",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_settargetfps_gles",
              children: "HMS_FG_SetTargetFps_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, int targetFps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧后的目标帧率，这个设置仅在系统显示模式下生效，对游戏显示模式无影响。参数targetFps的取值范围[30, 144]旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配OpenGL ES图形API平台。"
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