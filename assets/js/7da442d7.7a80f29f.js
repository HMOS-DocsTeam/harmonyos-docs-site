"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["165765"], {
426704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_files_opengtx_base_8_h_opengtx_base_8_h_md_7da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-files-opengtx-base-8-h-opengtx-base-8-h-md-7da.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_files_opengtx_base_8_h_opengtx_base_8_h_md_7da_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h","title":"opengtx_base.h","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"opengtx_base.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengtx__base_8h","kit":"图形","last_updated":"2026-04-22","slug":"opengtx__base_8h"},"sidebar":"ref","previous":{"title":"frame_generation_vk.h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h"},"next":{"title":"ABR_CameraData","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___camera_data/x_a_b_r___camera_data"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h.md


const frontMatter = {
	title: 'opengtx_base.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengtx__base_8h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'opengtx__base_8h'
};
const contentTitle = 'opengtx_base.h';

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
        id: "opengtx_baseh",
        children: "opengtx_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明不区分OpenGL ES和Vulkan图形API平台的OpenGTX接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <graphics_game_sdk/opengtx_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libopengtx.so"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description",
              children: "OpenGTX_ConfigDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述OpenGTX属性配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info",
              children: "OpenGTX_GameSceneInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___frame_render_info/x_open_g_t_x___frame_render_info",
              children: "OpenGTX_FrameRenderInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___network_info/x_open_g_t_x___network_info",
              children: "OpenGTX_NetworkInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___resolution_value/x_open_g_t_x___resolution_value",
              children: "OpenGTX_ResolutionValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述游戏应用的分辨率值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___vector3/x_open_g_t_x___vector3",
              children: "OpenGTX_Vector3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述OpenGTX三维向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___network_latency/x_open_g_t_x___network_latency",
              children: "OpenGTX_NetworkLatency"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode",
              children: "OpenGTX_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_ltpo_mode-1",
              children: "OpenGTX_LTPO_Mode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_ltpo_mode",
              children: "OpenGTX_LTPO_Mode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_enginetype-1",
              children: "OpenGTX_EngineType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_enginetype",
              children: "OpenGTX_EngineType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的底层游戏引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_gametype-1",
              children: "OpenGTX_GameType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_gametype",
              children: "OpenGTX_GameType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_sceneid-1",
              children: "OpenGTX_SceneID"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_sceneid",
              children: "OpenGTX_SceneID"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX算法的游戏场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_picturequalitymaxlevel-1",
              children: "OpenGTX_PictureQualityMaxLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_picturequalitymaxlevel",
              children: "OpenGTX_PictureQualityMaxLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的图像质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_templevel-1",
              children: "OpenGTX_TempLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_templevel",
              children: "OpenGTX_TempLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述设备的温度级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述OpenGTX上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description",
              children: "OpenGTX_ConfigDescription"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_configdescription",
              children: "OpenGTX_ConfigDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述OpenGTX属性配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info",
              children: "OpenGTX_GameSceneInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_gamesceneinfo",
              children: "OpenGTX_GameSceneInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___frame_render_info/x_open_g_t_x___frame_render_info",
              children: "OpenGTX_FrameRenderInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_framerenderinfo",
              children: "OpenGTX_FrameRenderInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___network_info/x_open_g_t_x___network_info",
              children: "OpenGTX_NetworkInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_networkinfo",
              children: "OpenGTX_NetworkInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___resolution_value/x_open_g_t_x___resolution_value",
              children: "OpenGTX_ResolutionValue"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_resolutionvalue",
              children: "OpenGTX_ResolutionValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述游戏应用的分辨率值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___vector3/x_open_g_t_x___vector3",
              children: "OpenGTX_Vector3"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_vector3",
              children: "OpenGTX_Vector3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述OpenGTX三维向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___network_latency/x_open_g_t_x___network_latency",
              children: "OpenGTX_NetworkLatency"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_networklatency",
              children: "OpenGTX_NetworkLatency"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_deviceinfocallback",
              children: "OpenGTX_DeviceInfoCallback"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_templevel-1",
              children: "OpenGTX_TempLevel"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的温度信息回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " {  OPENGTX_SUCCESS = 0,  OPENGTX_INVALID_PARAMETER = 401,  OPENGTX_CONTEXT_NOT_CONFIG = 1009502001,  OPENGTX_CONTEXT_NOT_ACTIVE = 1009502002  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_ltpo_mode-1",
              children: "OpenGTX_LTPO_Mode"
            }), " {  SCENE_MODE = 0x0001,  TOUCH_MODE = 0x0010,  ADAPTIVE_MODE = 0x0100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_enginetype-1",
              children: "OpenGTX_EngineType"
            }), " {  UNITY = 1,  UNREAL = 2,  MESSIAH = 3,  COCOS = 4,  OTHERS_ENGINE = 100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的底层游戏引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_gametype-1",
              children: "OpenGTX_GameType"
            }), " {  MOBA = 1,  RPG = 2,  FPS = 3,  RAC = 4,  OTHERS_TYPE = 100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_sceneid-1",
              children: "OpenGTX_SceneID"
            }), " {  LOGIN = 1,  GAME_INTERFACE = 2,  LOADING = 3,  PLAYING = 4,  SPECTATOR = 5,  DEATH = 6,  HEAVY_LOAD = 7,  OTHERS_SCENE = 100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX算法的游戏场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_picturequalitymaxlevel-1",
              children: "OpenGTX_PictureQualityMaxLevel"
            }), " {  SD = 1,  HD = 2,  FHD = 3,  QHD = 4,  UHD = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的图像质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_templevel-1",
              children: "OpenGTX_TempLevel"
            }), " {  TEMP_LEVEL1 = 1,  TEMP_LEVEL2 = 2,  TEMP_LEVEL3 = 3,  TEMP_LEVEL4 = 4,  TEMP_LEVEL5 = 5,  TEMP_LEVEL6 = 6  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述设备的温度级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_createcontext",
              children: "HMS_OpenGTX_CreateContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_deviceinfocallback",
              children: "OpenGTX_DeviceInfoCallback"
            }), " deviceInfoCallback)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建OpenGTX上下文实例，每次调用会新建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "对象，并返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_activate",
              children: "HMS_OpenGTX_Activate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活OpenGTX上下文实例。使用OpenGTX上下文实例前需要激活实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_deactivate",
              children: "HMS_OpenGTX_Deactivate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["去激活OpenGTX上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_activate",
              children: "HMS_OpenGTX_Activate"
            }), "重新激活。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_setconfiguration",
              children: "HMS_OpenGTX_SetConfiguration"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description",
              children: "OpenGTX_ConfigDescription"
            }), "* config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化OpenGTX上下文实例，配置OpenGTX实例属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchframerenderinfo",
              children: "HMS_OpenGTX_DispatchFrameRenderInfo"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___frame_render_info/x_open_g_t_x___frame_render_info",
              children: "OpenGTX_FrameRenderInfo"
            }), "* frameRenderInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OpenGTX运行所需的场景渲染关键信息，每帧变化均需要更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo",
              children: "HMS_OpenGTX_DispatchGameSceneInfo"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info",
              children: "OpenGTX_GameSceneInfo"
            }), "* gameSceneInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OpenGTX运行所需的游戏场景信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_dispatchnetworkinfo",
              children: "HMS_OpenGTX_DispatchNetworkInfo"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___network_info/x_open_g_t_x___network_info",
              children: "OpenGTX_NetworkInfo"
            }), "* networkInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OpenGTX运行所需的网络延迟信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_opengtx_destroycontext",
              children: "HMS_OpenGTX_DestroyContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_context",
              children: "OpenGTX_Context"
            }), "** context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OpenGTX上下文实例并释放内存资源。"
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