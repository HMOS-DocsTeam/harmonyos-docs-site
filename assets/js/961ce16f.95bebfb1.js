"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["899377"], {
296124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_files_abr_base_8_h_abr_base_8_h_md_961_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-files-abr-base-8-h-abr-base-8-h-md-961.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_files_abr_base_8_h_abr_base_8_h_md_961_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h","title":"abr_base.h","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"abr_base.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/abr__base_8h","kit":"图形","last_updated":"2026-04-22","slug":"abr__base_8h"},"sidebar":"ref","previous":{"title":"GraphicsAccelerate","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate"},"next":{"title":"abr_gles.h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__gles_8h/abr__gles_8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h.md


const frontMatter = {
	title: 'abr_base.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/abr__base_8h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'abr__base_8h'
};
const contentTitle = 'abr_base.h';

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
        id: "abr_baseh",
        children: "abr_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明不区分图形API平台的ABR（自适应稳态渲染）接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <graphics_game_sdk/abr_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libabr.so"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___vector3/x_a_b_r___vector3",
              children: "ABR_Vector3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述ABR三维向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___camera_data/x_a_b_r___camera_data",
              children: "ABR_CameraData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述ABR上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_renderapi_type-1",
              children: "ABR_RenderAPI_Type"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_renderapi_type",
              children: "ABR_RenderAPI_Type"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述ABR支持的图形API类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___vector3/x_a_b_r___vector3",
              children: "ABR_Vector3"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_vector3",
              children: "ABR_Vector3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述ABR三维向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___camera_data/x_a_b_r___camera_data",
              children: "ABR_CameraData"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_cameradata",
              children: "ABR_CameraData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode",
              children: "ABR_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述ABR接口调用错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_renderapi_type-1",
              children: "ABR_RenderAPI_Type"
            }), " {  RENDER_API_GLES = 0  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述ABR支持的图形API类型。RENDER_API_GLES表示OpenGL ES API。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " {  ABR_SUCCESS = 0,  ABR_INVALID_PARAMETER = 401,  ABR_CONTEXT_CONFIG_AFTER_ACTIVE = 1009501001,  ABR_CONTEXT_NOT_CONFIG = 1009501002,  ABR_CONTEXT_NOT_ACTIVE = 1009501003,  ABR_METADATA_INVALID = 1009501004,  ABR_FRAMEBUFFER_INVALID = 1009501005  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述ABR接口调用错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_createcontext",
              children: "HMS_ABR_CreateContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_renderapi_type-1",
              children: "ABR_RenderAPI_Type"
            }), " type)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建ABR上下文实例，每次调用会新建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "对象，并返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_settargetfps",
              children: "HMS_ABR_SetTargetFps"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context, const uint32_t targetFps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置ABR上下文实例的目标帧率属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_setscalerange",
              children: "HMS_ABR_SetScaleRange"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context, const float minValue, const float maxValue)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置ABR上下文实例的Buffer分辨率因子范围属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_activate",
              children: "HMS_ABR_Activate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["激活ABR上下文实例。激活ABR上下文实例前需调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_settargetfps",
              children: "HMS_ABR_SetTargetFps"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_setscalerange",
              children: "HMS_ABR_SetScaleRange"
            }), "接口进行实例属性的配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_isactive",
              children: "HMS_ABR_IsActive"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context, bool* isActive)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询ABR上下文实例是否处于激活状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_deactivate",
              children: "HMS_ABR_Deactivate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["去激活ABR上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_activate",
              children: "HMS_ABR_Activate"
            }), "重新激活。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_updatecameradata",
              children: "HMS_ABR_UpdateCameraData"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___camera_data/x_a_b_r___camera_data",
              children: "ABR_CameraData"
            }), "* data)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新每帧相机运动数据，ABR更新相机运动数据前需调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_activate",
              children: "HMS_ABR_Activate"
            }), "接口激活ABR上下文实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_getscale",
              children: "HMS_ABR_GetScale"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context, float* scale)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ABR Buffer分辨率因子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_getnextscale",
              children: "HMS_ABR_GetNextScale"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "* context, float* scale)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取下一帧的ABR Buffer分辨率因子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_destroycontext",
              children: "HMS_ABR_DestroyContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context",
              children: "ABR_Context"
            }), "** context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁ABR上下文实例并释放内存资源。"
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