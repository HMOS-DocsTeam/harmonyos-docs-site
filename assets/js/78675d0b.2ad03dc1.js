"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["484271"], {
761065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_index_x_graphics_accelerate_x_graphics_accelerate_md_786_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-index-x-graphics-accelerate-x-graphics-accelerate-md-786.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_index_x_graphics_accelerate_x_graphics_accelerate_md_786_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate","title":"GraphicsAccelerate","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"GraphicsAccelerate","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate","kit":"图形","last_updated":"2026-04-22","slug":"x_graphics_accelerate"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-arkts-errorcode/graphics-accelerate-arkts-errorcode"},"next":{"title":"abr_base.h","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate.md


const frontMatter = {
	title: 'GraphicsAccelerate',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'x_graphics_accelerate'
};
const contentTitle = 'GraphicsAccelerate';

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
  "value": "文件",
  "id": "文件",
  "level": 3
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
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "ABR_CameraData",
  "id": "abr_cameradata",
  "level": 3
}, {
  "value": "ABR_Context",
  "id": "abr_context",
  "level": 3
}, {
  "value": "ABR_ErrorCode",
  "id": "abr_errorcode",
  "level": 3
}, {
  "value": "ABR_RenderAPI_Type",
  "id": "abr_renderapi_type",
  "level": 3
}, {
  "value": "ABR_Vector3",
  "id": "abr_vector3",
  "level": 3
}, {
  "value": "FG_AlgorithmModeInfo",
  "id": "fg_algorithmmodeinfo",
  "level": 3
}, {
  "value": "FG_Context_GLES",
  "id": "fg_context_gles",
  "level": 3
}, {
  "value": "FG_Context_VK",
  "id": "fg_context_vk",
  "level": 3
}, {
  "value": "FG_ContextDescription_VK",
  "id": "fg_contextdescription_vk",
  "level": 3
}, {
  "value": "FG_CvvZSemantic",
  "id": "fg_cvvzsemantic",
  "level": 3
}, {
  "value": "FG_Dimension2D",
  "id": "fg_dimension2d",
  "level": 3
}, {
  "value": "FG_DispatchDescription_GLES",
  "id": "fg_dispatchdescription_gles",
  "level": 3
}, {
  "value": "FG_DispatchDescription_VK",
  "id": "fg_dispatchdescription_vk",
  "level": 3
}, {
  "value": "FG_ErrorCode",
  "id": "fg_errorcode",
  "level": 3
}, {
  "value": "FG_Image_VK",
  "id": "fg_image_vk",
  "level": 3
}, {
  "value": "FG_ImageFormat_GLES",
  "id": "fg_imageformat_gles",
  "level": 3
}, {
  "value": "FG_ImageFormat_VK",
  "id": "fg_imageformat_vk",
  "level": 3
}, {
  "value": "FG_ImageInfo_VK",
  "id": "fg_imageinfo_vk",
  "level": 3
}, {
  "value": "FG_ImageSync_VK",
  "id": "fg_imagesync_vk",
  "level": 3
}, {
  "value": "FG_Mat4x4",
  "id": "fg_mat4x4",
  "level": 3
}, {
  "value": "FG_MeMode",
  "id": "fg_memode",
  "level": 3
}, {
  "value": "FG_PredictionMode",
  "id": "fg_predictionmode",
  "level": 3
}, {
  "value": "FG_PresentMode",
  "id": "fg_presentmode",
  "level": 3
}, {
  "value": "FG_ResolutionInfo",
  "id": "fg_resolutioninfo",
  "level": 3
}, {
  "value": "FG_Vec3D",
  "id": "fg_vec3d",
  "level": 3
}, {
  "value": "FG_PerFrameExtendedCameraInfo",
  "id": "fg_perframeextendedcamerainfo",
  "level": 3
}, {
  "value": "FG_IntegrationInfo",
  "id": "fg_integrationinfo",
  "level": 3
}, {
  "value": "OpenGTX_ConfigDescription",
  "id": "opengtx_configdescription",
  "level": 3
}, {
  "value": "OpenGTX_Context",
  "id": "opengtx_context",
  "level": 3
}, {
  "value": "OpenGTX_DeviceInfoCallback",
  "id": "opengtx_deviceinfocallback",
  "level": 3
}, {
  "value": "OpenGTX_EngineType",
  "id": "opengtx_enginetype",
  "level": 3
}, {
  "value": "OpenGTX_ErrorCode",
  "id": "opengtx_errorcode",
  "level": 3
}, {
  "value": "OpenGTX_FrameRenderInfo",
  "id": "opengtx_framerenderinfo",
  "level": 3
}, {
  "value": "OpenGTX_GameSceneInfo",
  "id": "opengtx_gamesceneinfo",
  "level": 3
}, {
  "value": "OpenGTX_GameType",
  "id": "opengtx_gametype",
  "level": 3
}, {
  "value": "OpenGTX_LTPO_Mode",
  "id": "opengtx_ltpo_mode",
  "level": 3
}, {
  "value": "OpenGTX_NetworkInfo",
  "id": "opengtx_networkinfo",
  "level": 3
}, {
  "value": "OpenGTX_NetworkLatency",
  "id": "opengtx_networklatency",
  "level": 3
}, {
  "value": "OpenGTX_PictureQualityMaxLevel",
  "id": "opengtx_picturequalitymaxlevel",
  "level": 3
}, {
  "value": "OpenGTX_ResolutionValue",
  "id": "opengtx_resolutionvalue",
  "level": 3
}, {
  "value": "OpenGTX_SceneID",
  "id": "opengtx_sceneid",
  "level": 3
}, {
  "value": "OpenGTX_TempLevel",
  "id": "opengtx_templevel",
  "level": 3
}, {
  "value": "OpenGTX_Vector3",
  "id": "opengtx_vector3",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "ABR_ErrorCode",
  "id": "abr_errorcode-1",
  "level": 3
}, {
  "value": "ABR_RenderAPI_Type",
  "id": "abr_renderapi_type-1",
  "level": 3
}, {
  "value": "FG_CvvZSemantic",
  "id": "fg_cvvzsemantic-1",
  "level": 3
}, {
  "value": "FG_ErrorCode",
  "id": "fg_errorcode-1",
  "level": 3
}, {
  "value": "FG_ImageFormat_GLES",
  "id": "fg_imageformat_gles-1",
  "level": 3
}, {
  "value": "FG_MeMode",
  "id": "fg_memode-1",
  "level": 3
}, {
  "value": "FG_PredictionMode",
  "id": "fg_predictionmode-1",
  "level": 3
}, {
  "value": "FG_PresentMode",
  "id": "fg_presentmode-1",
  "level": 3
}, {
  "value": "OpenGTX_EngineType",
  "id": "opengtx_enginetype-1",
  "level": 3
}, {
  "value": "OpenGTX_ErrorCode",
  "id": "opengtx_errorcode-1",
  "level": 3
}, {
  "value": "OpenGTX_GameType",
  "id": "opengtx_gametype-1",
  "level": 3
}, {
  "value": "OpenGTX_LTPO_Mode",
  "id": "opengtx_ltpo_mode-1",
  "level": 3
}, {
  "value": "OpenGTX_PictureQualityMaxLevel",
  "id": "opengtx_picturequalitymaxlevel-1",
  "level": 3
}, {
  "value": "OpenGTX_SceneID",
  "id": "opengtx_sceneid-1",
  "level": 3
}, {
  "value": "OpenGTX_TempLevel",
  "id": "opengtx_templevel-1",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_ABR_Activate()",
  "id": "hms_abr_activate",
  "level": 3
}, {
  "value": "HMS_ABR_CreateContext()",
  "id": "hms_abr_createcontext",
  "level": 3
}, {
  "value": "HMS_ABR_Deactivate()",
  "id": "hms_abr_deactivate",
  "level": 3
}, {
  "value": "HMS_ABR_DestroyContext()",
  "id": "hms_abr_destroycontext",
  "level": 3
}, {
  "value": "HMS_ABR_GetScale()",
  "id": "hms_abr_getscale",
  "level": 3
}, {
  "value": "HMS_ABR_GetNextScale()",
  "id": "hms_abr_getnextscale",
  "level": 3
}, {
  "value": "HMS_ABR_IsActive()",
  "id": "hms_abr_isactive",
  "level": 3
}, {
  "value": "HMS_ABR_MarkFrameBuffer_GLES()",
  "id": "hms_abr_markframebuffer_gles",
  "level": 3
}, {
  "value": "HMS_ABR_GetScaledTexture_GLES()",
  "id": "hms_abr_getscaledtexture_gles",
  "level": 3
}, {
  "value": "HMS_ABR_SetScaleRange()",
  "id": "hms_abr_setscalerange",
  "level": 3
}, {
  "value": "HMS_ABR_SetTargetFps()",
  "id": "hms_abr_settargetfps",
  "level": 3
}, {
  "value": "HMS_ABR_UpdateCameraData()",
  "id": "hms_abr_updatecameradata",
  "level": 3
}, {
  "value": "HMS_FG_Activate_GLES()",
  "id": "hms_fg_activate_gles",
  "level": 3
}, {
  "value": "HMS_FG_Activate_VK()",
  "id": "hms_fg_activate_vk",
  "level": 3
}, {
  "value": "HMS_FG_CreateContext_GLES()",
  "id": "hms_fg_createcontext_gles",
  "level": 3
}, {
  "value": "HMS_FG_CreateContext_VK()",
  "id": "hms_fg_createcontext_vk",
  "level": 3
}, {
  "value": "HMS_FG_CreateImage_VK()",
  "id": "hms_fg_createimage_vk",
  "level": 3
}, {
  "value": "HMS_FG_Deactivate_GLES()",
  "id": "hms_fg_deactivate_gles",
  "level": 3
}, {
  "value": "HMS_FG_Deactivate_VK()",
  "id": "hms_fg_deactivate_vk",
  "level": 3
}, {
  "value": "HMS_FG_DestroyContext_GLES()",
  "id": "hms_fg_destroycontext_gles",
  "level": 3
}, {
  "value": "HMS_FG_DestroyContext_VK()",
  "id": "hms_fg_destroycontext_vk",
  "level": 3
}, {
  "value": "HMS_FG_DestroyImage_VK()",
  "id": "hms_fg_destroyimage_vk",
  "level": 3
}, {
  "value": "HMS_FG_Dispatch_GLES()",
  "id": "hms_fg_dispatch_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetExtendedCameraInfo_GLES()",
  "id": "hms_fg_setextendedcamerainfo_gles",
  "level": 3
}, {
  "value": "HMS_FG_Dispatch_VK()",
  "id": "hms_fg_dispatch_vk",
  "level": 3
}, {
  "value": "HMS_FG_IsActive_GLES()",
  "id": "hms_fg_isactive_gles",
  "level": 3
}, {
  "value": "HMS_FG_IsActive_VK()",
  "id": "hms_fg_isactive_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetAlgorithmMode_GLES()",
  "id": "hms_fg_setalgorithmmode_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetAlgorithmMode_VK()",
  "id": "hms_fg_setalgorithmmode_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetCvvZSemantic_GLES()",
  "id": "hms_fg_setcvvzsemantic_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetCvvZSemantic_VK()",
  "id": "hms_fg_setcvvzsemantic_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetDepthStencilYDirectionInverted_GLES()",
  "id": "hms_fg_setdepthstencilydirectioninverted_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetDepthStencilYDirectionInverted_VK()",
  "id": "hms_fg_setdepthstencilydirectioninverted_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetImageFormat_GLES()",
  "id": "hms_fg_setimageformat_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetImageFormat_VK()",
  "id": "hms_fg_setimageformat_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetResolution_GLES()",
  "id": "hms_fg_setresolution_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetResolution_VK()",
  "id": "hms_fg_setresolution_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetIntegrationMode_GLES()",
  "id": "hms_fg_setintegrationmode_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetIntegrationMode_VK()",
  "id": "hms_fg_setintegrationmode_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetUiPredictionEnabled_GLES()",
  "id": "hms_fg_setuipredictionenabled_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetUiPredictionEnabled_VK()",
  "id": "hms_fg_setuipredictionenabled_vk",
  "level": 3
}, {
  "value": "HMS_FG_SetTargetFps_GLES()",
  "id": "hms_fg_settargetfps_gles",
  "level": 3
}, {
  "value": "HMS_FG_SetTargetFps_VK()",
  "id": "hms_fg_settargetfps_vk",
  "level": 3
}, {
  "value": "HMS_OpenGTX_Activate()",
  "id": "hms_opengtx_activate",
  "level": 3
}, {
  "value": "HMS_OpenGTX_CreateContext()",
  "id": "hms_opengtx_createcontext",
  "level": 3
}, {
  "value": "HMS_OpenGTX_Deactivate()",
  "id": "hms_opengtx_deactivate",
  "level": 3
}, {
  "value": "HMS_OpenGTX_DestroyContext()",
  "id": "hms_opengtx_destroycontext",
  "level": 3
}, {
  "value": "HMS_OpenGTX_DispatchFrameRenderInfo()",
  "id": "hms_opengtx_dispatchframerenderinfo",
  "level": 3
}, {
  "value": "HMS_OpenGTX_DispatchGameSceneInfo()",
  "id": "hms_opengtx_dispatchgamesceneinfo",
  "level": 3
}, {
  "value": "HMS_OpenGTX_DispatchNetworkInfo()",
  "id": "hms_opengtx_dispatchnetworkinfo",
  "level": 3
}, {
  "value": "HMS_OpenGTX_SetConfiguration()",
  "id": "hms_opengtx_setconfiguration",
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
        id: "graphicsaccelerate",
        children: "GraphicsAccelerate"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供Graphics Accelerate Kit图形渲染加速能力的相关接口。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h",
              children: "abr_base.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明不区分图形API平台的ABR（自适应稳态渲染）接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__gles_8h/abr__gles_8h",
              children: "abr_gles.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明OpenGL ES图形API平台的ABR接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__base_8h/frame__generation__base_8h",
              children: "frame_generation_base.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明不区分图形API平台的超帧接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h",
              children: "frame_generation_gles.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明OpenGL ES图形API平台的超帧接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h",
              children: "frame_generation_vk.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明Vulkan图形API平台的超帧接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h",
              children: "opengtx_base.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明不区分OpenGL ES和Vulkan图形API平台的OpenGTX接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4",
              children: "FG_Mat4x4"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___algorithm_mode_info/x_f_g___algorithm_mode_info",
              children: "FG_AlgorithmModeInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧算法模式信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dimension2_d/x_f_g___dimension2_d",
              children: "FG_Dimension2D"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述2D图像分辨率，以像素为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___resolution_info/x_f_g___resolution_info",
              children: "FG_ResolutionInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像的分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___vec3_d/x_f_g___vec3_d",
              children: "FG_Vec3D"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧三维向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___per_frame_extended_camera_info/x_f_g___per_frame_extended_camera_info",
              children: "FG_PerFrameExtendedCameraInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述超帧集成的信息。包括送显模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_predictionmode-1",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s",
              children: "FG_DispatchDescription_GLES"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k",
              children: "FG_ContextDescription_VK"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建超帧上下文实例", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "所需的属性信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k",
              children: "FG_ImageFormat_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_sync___v_k/x_f_g___image_sync___v_k",
              children: "FG_ImageSync_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像同步状态信息，用于创建超帧图像内存屏障。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_info___v_k/x_f_g___image_info___v_k",
              children: "FG_ImageInfo_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像信息，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___v_k/x_f_g___dispatch_description___v_k",
              children: "FG_DispatchDescription_VK"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_vk",
              children: "HMS_FG_Dispatch_VK"
            }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配Vulkan图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#abr_context",
              children: "ABR_Context"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述ABR上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_renderapi_type-1",
              children: "ABR_RenderAPI_Type"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_renderapi_type",
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
              href: "#abr_vector3",
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
              href: "#abr_cameradata",
              children: "ABR_CameraData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode",
              children: "ABR_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述ABR接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4",
              children: "FG_Mat4x4"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_mat4x4",
              children: "FG_Mat4x4"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_predictionmode-1",
              children: "FG_PredictionMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_predictionmode",
              children: "FG_PredictionMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述超帧预测算法模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_memode-1",
              children: "FG_MeMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_memode",
              children: "FG_MeMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_presentmode-1",
              children: "FG_PresentMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_presentmode",
              children: "FG_PresentMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举定义预测帧送显模式，支持游戏端送显预测帧模式和系统端送显预测帧模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___algorithm_mode_info/x_f_g___algorithm_mode_info",
              children: "FG_AlgorithmModeInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_algorithmmodeinfo",
              children: "FG_AlgorithmModeInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧算法模式信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___vec3_d/x_f_g___vec3_d",
              children: "FG_Vec3D"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___vec3_d/x_f_g___vec3_d",
              children: "FG_Vec3D"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧三维向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___per_frame_extended_camera_info/x_f_g___per_frame_extended_camera_info",
              children: "FG_PerFrameExtendedCameraInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___per_frame_extended_camera_info/x_f_g___per_frame_extended_camera_info",
              children: "FG_PerFrameExtendedCameraInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述超帧集成的信息。包括送显模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_predictionmode-1",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode",
              children: "FG_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述超帧接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_cvvzsemantic-1",
              children: "FG_CvvZSemantic"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_cvvzsemantic",
              children: "FG_CvvZSemantic"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dimension2_d/x_f_g___dimension2_d",
              children: "FG_Dimension2D"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_dimension2d",
              children: "FG_Dimension2D"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述2D图像分辨率，以像素为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___resolution_info/x_f_g___resolution_info",
              children: "FG_ResolutionInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_resolutioninfo",
              children: "FG_ResolutionInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像的分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
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
              href: "#fg_dispatchdescription_gles",
              children: "FG_DispatchDescription_GLES"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_imageformat_gles-1",
              children: "FG_ImageFormat_GLES"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_imageformat_gles",
              children: "FG_ImageFormat_GLES"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧上下文，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_image_vk",
              children: "FG_Image_VK"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_image_vk",
              children: "FG_Image_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超帧输入输出图像结构体，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k",
              children: "FG_ContextDescription_VK"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_contextdescription_vk",
              children: "FG_ContextDescription_VK"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建超帧上下文实例", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "所需的属性信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k",
              children: "FG_ImageFormat_VK"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_imageformat_vk",
              children: "FG_ImageFormat_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_sync___v_k/x_f_g___image_sync___v_k",
              children: "FG_ImageSync_VK"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_imagesync_vk",
              children: "FG_ImageSync_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像同步状态信息，用于创建超帧图像内存屏障。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_info___v_k/x_f_g___image_info___v_k",
              children: "FG_ImageInfo_VK"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_imageinfo_vk",
              children: "FG_ImageInfo_VK"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述超帧输入输出图像信息，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___v_k/x_f_g___dispatch_description___v_k",
              children: "FG_DispatchDescription_VK"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_dispatchdescription_vk",
              children: "FG_DispatchDescription_VK"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_vk",
              children: "HMS_FG_Dispatch_VK"
            }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配Vulkan图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_errorcode",
              children: "OpenGTX_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_ltpo_mode-1",
              children: "OpenGTX_LTPO_Mode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_ltpo_mode",
              children: "OpenGTX_LTPO_Mode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_enginetype-1",
              children: "OpenGTX_EngineType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_enginetype",
              children: "OpenGTX_EngineType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的底层游戏引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_gametype-1",
              children: "OpenGTX_GameType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_gametype",
              children: "OpenGTX_GameType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_sceneid-1",
              children: "OpenGTX_SceneID"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_sceneid",
              children: "OpenGTX_SceneID"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX算法的游戏场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_picturequalitymaxlevel-1",
              children: "OpenGTX_PictureQualityMaxLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_picturequalitymaxlevel",
              children: "OpenGTX_PictureQualityMaxLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的图像质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_templevel-1",
              children: "OpenGTX_TempLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_templevel",
              children: "OpenGTX_TempLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述设备的温度级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
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
              href: "#opengtx_configdescription",
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
              href: "#opengtx_gamesceneinfo",
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
              href: "#opengtx_framerenderinfo",
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
              href: "#opengtx_networkinfo",
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
              href: "#opengtx_resolutionvalue",
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
              href: "#opengtx_vector3",
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
              href: "#opengtx_networklatency",
              children: "OpenGTX_NetworkLatency"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_deviceinfocallback",
              children: "OpenGTX_DeviceInfoCallback"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_templevel-1",
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
              href: "#abr_renderapi_type-1",
              children: "ABR_RenderAPI_Type"
            }), " {  RENDER_API_GLES = 0  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述ABR支持的图形API类型。RENDER_API_GLES表示OpenGL ES API。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " {  ABR_SUCCESS = 0,  ABR_INVALID_PARAMETER = 401,  ABR_CONTEXT_CONFIG_AFTER_ACTIVE = 1009501001,  ABR_CONTEXT_NOT_CONFIG = 1009501002,  ABR_CONTEXT_NOT_ACTIVE = 1009501003,  ABR_METADATA_INVALID = 1009501004,  ABR_FRAMEBUFFER_INVALID = 1009501005  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述ABR接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_predictionmode-1",
              children: "FG_PredictionMode"
            }), " {  FG_PREDICTION_MODE_INTERPOLATION = 0,  FG_PREDICTION_MODE_EXTRAPOLATION = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述超帧预测算法模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_memode-1",
              children: "FG_MeMode"
            }), " {  FG_ME_MODE_BASIC = 0,  FG_ME_MODE_ENHANCED = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " {  FG_SUCCESS = 0,  FG_INVALID_PARAMETER = 401,  FG_CONTEXT_NOT_CONFIG = 1009500001,  FG_CONTEXT_NOT_ACTIVE = 1009500002,  FG_COLLECTING_PREVIOUS_FRAMES = 1009500003  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述超帧接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_cvvzsemantic-1",
              children: "FG_CvvZSemantic"
            }), " {  FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z = 0,  FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_REVERSE_Z = 1,  FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_REVERSE_Z = 2,  FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_imageformat_gles-1",
              children: "FG_ImageFormat_GLES"
            }), " {  FG_FORMAT_R8G8B8A8_UNORM = 0,  FG_FORMAT_R11G11B10_SFLOAT = 1,  FG_FORMAT_R16G16B16A16_SFLOAT = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_presentmode-1",
              children: "FG_PresentMode"
            }), " {  FG_PRESENT_BY_GAME = 0,  FG_PRESENT_BY_SYSTEM = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义预测帧送显模式，该模式包括两种：游戏端预测帧送显和系统端预测帧送显。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " {  OPENGTX_SUCCESS = 0,  OPENGTX_INVALID_PARAMETER = 401,  OPENGTX_CONTEXT_NOT_CONFIG = 1009502001,  OPENGTX_CONTEXT_NOT_ACTIVE = 1009502002  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX接口调用错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_ltpo_mode-1",
              children: "OpenGTX_LTPO_Mode"
            }), " {  SCENE_MODE = 0x0001,  TOUCH_MODE = 0x0010,  ADAPTIVE_MODE = 0x0100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_enginetype-1",
              children: "OpenGTX_EngineType"
            }), " {  UNITY = 1,  UNREAL = 2,  MESSIAH = 3,  COCOS = 4,  OTHERS_ENGINE = 100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的底层游戏引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_gametype-1",
              children: "OpenGTX_GameType"
            }), " {  MOBA = 1,  RPG = 2,  FPS = 3,  RAC = 4,  OTHERS_TYPE = 100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_sceneid-1",
              children: "OpenGTX_SceneID"
            }), " {  LOGIN = 1,  GAME_INTERFACE = 2,  LOADING = 3,  PLAYING = 4,  SPECTATOR = 5,  DEATH = 6,  HEAVY_LOAD = 7,  OTHERS_SCENE = 100  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述OpenGTX算法的游戏场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_picturequalitymaxlevel-1",
              children: "OpenGTX_PictureQualityMaxLevel"
            }), " {  SD = 1,  HD = 2,  FHD = 3,  QHD = 4,  UHD = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏应用的图像质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_templevel-1",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#abr_context",
              children: "ABR_Context"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_createcontext",
              children: "HMS_ABR_CreateContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_renderapi_type-1",
              children: "ABR_RenderAPI_Type"
            }), " type)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建ABR上下文实例，每次调用会新建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "对象，并返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_settargetfps",
              children: "HMS_ABR_SetTargetFps"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context, const uint32_t targetFps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置ABR上下文实例的目标帧率属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_setscalerange",
              children: "HMS_ABR_SetScaleRange"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context, const float minValue, const float maxValue)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置ABR上下文实例的Buffer分辨率因子范围属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_activate",
              children: "HMS_ABR_Activate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["激活ABR上下文实例。激活ABR上下文实例前需调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_settargetfps",
              children: "HMS_ABR_SetTargetFps"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_setscalerange",
              children: "HMS_ABR_SetScaleRange"
            }), "接口进行实例属性的配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_isactive",
              children: "HMS_ABR_IsActive"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context, bool* isActive)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询ABR上下文实例是否处于激活状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_deactivate",
              children: "HMS_ABR_Deactivate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["去激活ABR上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_activate",
              children: "HMS_ABR_Activate"
            }), "重新激活。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_updatecameradata",
              children: "HMS_ABR_UpdateCameraData"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___camera_data/x_a_b_r___camera_data",
              children: "ABR_CameraData"
            }), "* data)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新每帧相机运动数据，ABR更新相机运动数据前需调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_activate",
              children: "HMS_ABR_Activate"
            }), "接口激活ABR上下文实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_getscale",
              children: "HMS_ABR_GetScale"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context, float* scale)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ABR Buffer分辨率因子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_getnextscale",
              children: "HMS_ABR_GetNextScale"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context, float* scale)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取下一帧的ABR Buffer分辨率因子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_destroycontext",
              children: "HMS_ABR_DestroyContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "** context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁ABR上下文实例并释放内存资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_markframebuffer_gles",
              children: "HMS_ABR_MarkFrameBuffer_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记ABR进行自适应渲染处理的GLES Buffer，需要在GLES Buffer开始渲染前调用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_errorcode-1",
              children: "ABR_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_getscaledtexture_gles",
              children: "HMS_ABR_GetScaledTexture_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "* context, uint32_t originTexture, uint32_t* scaledTexture)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据原始分辨率的GLES纹理索引获取ABR自适应缩放后的GLES纹理索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_createcontext_gles",
              children: "HMS_FG_CreateContext_GLES"
            }), "(void)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建超帧上下文实例，调用成功则返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，失败返回nullptr。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setalgorithmmode_gles",
              children: "HMS_FG_SetAlgorithmMode_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
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
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setresolution_gles",
              children: "HMS_FG_SetResolution_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
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
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setcvvzsemantic_gles",
              children: "HMS_FG_SetCvvZSemantic_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_cvvzsemantic-1",
              children: "FG_CvvZSemantic"
            }), " semantic)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setimageformat_gles",
              children: "HMS_FG_SetImageFormat_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_imageformat_gles-1",
              children: "FG_ImageFormat_GLES"
            }), " format)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式，可选调用，未调用则模式默认设置为FG_FORMAT_R8G8B8A8_UNORM。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setdepthstencilydirectioninverted_gles",
              children: "HMS_FG_SetDepthStencilYDirectionInverted_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, bool inverted)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置颜色缓冲区相对深度模板缓冲区基于y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_activate_gles",
              children: "HMS_FG_Activate_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["激活超帧上下文实例。已激活的超帧实例可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "接口生成预测帧， 激活超帧上下文实例前必须先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setalgorithmmode_gles",
              children: "HMS_FG_SetAlgorithmMode_GLES"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setresolution_gles",
              children: "HMS_FG_SetResolution_GLES"
            }), "接口完成配置。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_deactivate_gles",
              children: "HMS_FG_Deactivate_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["去激活超帧上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_activate_gles",
              children: "HMS_FG_Activate_GLES"
            }), "接口重新激活。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_isactive_gles",
              children: "HMS_FG_IsActive_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, bool* isActive)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询超帧上下文实例是否处于激活状态。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
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
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setextendedcamerainfo_gles",
              children: "HMS_FG_SetExtendedCameraInfo_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
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
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_destroycontext_gles",
              children: "HMS_FG_DestroyContext_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "** context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁超帧上下文实例并释放内存资源。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setintegrationmode_gles",
              children: "HMS_FG_SetIntegrationMode_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "* integrationInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置帧预测集成信息，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_predictionmode-1",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "中的presentMode、needDepthAndColorCache、needFlipColorTexture成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配OpenGL ES图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setuipredictionenabled_gles",
              children: "HMS_FG_SetUiPredictionEnabled_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, bool isEnabled)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_settargetfps_gles",
              children: "HMS_FG_SetTargetFps_GLES"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "* context, int targetFps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配OpenGL ES图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_createcontext_vk",
              children: "HMS_FG_CreateContext_VK"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k",
              children: "FG_ContextDescription_VK"
            }), "* contextDescription)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建超帧上下文实例，调用成功则返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，失败返回nullptr。该接口仅适配Vulkan图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setalgorithmmode_vk",
              children: "HMS_FG_SetAlgorithmMode_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___algorithm_mode_info/x_f_g___algorithm_mode_info",
              children: "FG_AlgorithmModeInfo"
            }), "* predictionModeInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧算法模式，包括预测算法模式和运动估计模式，必选。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setresolution_vk",
              children: "HMS_FG_SetResolution_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___resolution_info/x_f_g___resolution_info",
              children: "FG_ResolutionInfo"
            }), "* resolutionInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧输入输出图像分辨率，必选。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setcvvzsemantic_vk",
              children: "HMS_FG_SetCvvZSemantic_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_cvvzsemantic-1",
              children: "FG_CvvZSemantic"
            }), " semantic)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z。 该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setimageformat_vk",
              children: "HMS_FG_SetImageFormat_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k",
              children: "FG_ImageFormat_VK"
            }), "* format)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧输入输出图像格式，可选调用。未调用则真实帧颜色缓冲区和预测帧缓冲区图像格式默认为VK_FORMAT_R8G8B8A8_UNORM； 深度模板缓冲区图像格式默认为VK_FORMAT_D24_UNORM_S8_UINT。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setdepthstencilydirectioninverted_vk",
              children: "HMS_FG_SetDepthStencilYDirectionInverted_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, bool inverted)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置颜色缓冲区相对深度模板缓冲区是否存在y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_image_vk",
              children: "FG_Image_VK"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_createimage_vk",
              children: "HMS_FG_CreateImage_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, VkImage image, VkImageView view)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建超帧输入输出图像实例。真实帧颜色缓冲区、深度模板缓冲区、预测帧缓冲区均需要通过该接口创建对应的图像实例，并传入预测帧生成接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_vk",
              children: "HMS_FG_Dispatch_VK"
            }), "进行预测帧绘制。该接口将用户提供的图像资源和超帧算法实现之间建立关联。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_destroyimage_vk",
              children: "HMS_FG_DestroyImage_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_image_vk",
              children: "FG_Image_VK"
            }), "* image)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁超帧输入输出图像实例，取消对应关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_activate_vk",
              children: "HMS_FG_Activate_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["激活超帧上下文实例。已激活的超帧实例可调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_vk",
              children: "HMS_FG_Dispatch_VK"
            }), "接口生成预测帧，激活超帧上下文实例前必须先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setalgorithmmode_vk",
              children: "HMS_FG_SetAlgorithmMode_VK"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setresolution_vk",
              children: "HMS_FG_SetResolution_VK"
            }), "接口完成配置。该接口仅适配Vulkan图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_deactivate_vk",
              children: "HMS_FG_Deactivate_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["去激活超帧上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_activate_vk",
              children: "HMS_FG_Activate_VK"
            }), "接口重新激活。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_isactive_vk",
              children: "HMS_FG_IsActive_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, bool* isActive)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询超帧上下文实例是否处于激活状态。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_vk",
              children: "HMS_FG_Dispatch_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___v_k/x_f_g___dispatch_description___v_k",
              children: "FG_DispatchDescription_VK"
            }), "* desc)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_destroycontext_vk",
              children: "HMS_FG_DestroyContext_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "** context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁超帧上下文实例并释放内存资源，该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setintegrationmode_vk",
              children: "HMS_FG_SetIntegrationMode_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "* integrationInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置帧预测集成信息，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_predictionmode-1",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "中的presentMode、needDepthAndColorCache、needFlipColorTexture成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配Vulkan图形API平台。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_setuipredictionenabled_vk",
              children: "HMS_FG_SetUiPredictionEnabled_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, bool isEnabled)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_errorcode-1",
              children: "FG_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_settargetfps_vk",
              children: "HMS_FG_SetTargetFps_VK"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "* context, int targetFps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配Vulkan图形API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_createcontext",
              children: "HMS_OpenGTX_CreateContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_deviceinfocallback",
              children: "OpenGTX_DeviceInfoCallback"
            }), " deviceInfoCallback)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建OpenGTX上下文实例，每次调用会新建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "对象，并返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_activate",
              children: "HMS_OpenGTX_Activate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活OpenGTX上下文实例。使用OpenGTX上下文实例前需要激活实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_deactivate",
              children: "HMS_OpenGTX_Deactivate"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "* context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["去激活OpenGTX上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_activate",
              children: "HMS_OpenGTX_Activate"
            }), "重新激活。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_setconfiguration",
              children: "HMS_OpenGTX_SetConfiguration"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
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
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_dispatchframerenderinfo",
              children: "HMS_OpenGTX_DispatchFrameRenderInfo"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
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
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_dispatchgamesceneinfo",
              children: "HMS_OpenGTX_DispatchGameSceneInfo"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
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
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_dispatchnetworkinfo",
              children: "HMS_OpenGTX_DispatchNetworkInfo"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
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
              href: "#opengtx_errorcode-1",
              children: "OpenGTX_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_destroycontext",
              children: "HMS_OpenGTX_DestroyContext"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "** context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OpenGTX上下文实例并释放内存资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr_cameradata",
      children: "ABR_CameraData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ABR_CameraData ABR_CameraData\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr_context",
      children: "ABR_Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ABR_Context ABR_Context\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述ABR上下文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr_errorcode",
      children: "ABR_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum ABR_ErrorCode ABR_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述ABR接口调用错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr_renderapi_type",
      children: "ABR_RenderAPI_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum ABR_RenderAPI_Type ABR_RenderAPI_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述ABR支持的图形API类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr_vector3",
      children: "ABR_Vector3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ABR_Vector3 ABR_Vector3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述ABR三维向量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_algorithmmodeinfo",
      children: "FG_AlgorithmModeInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_AlgorithmModeInfo FG_AlgorithmModeInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧算法模式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_context_gles",
      children: "FG_Context_GLES"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_Context_GLES FG_Context_GLES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧上下文，该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_context_vk",
      children: "FG_Context_VK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_Context_VK FG_Context_VK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧上下文，该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_contextdescription_vk",
      children: "FG_ContextDescription_VK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_ContextDescription_VK FG_ContextDescription_VK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建超帧上下文实例", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_context_vk",
        children: "FG_Context_VK"
      }), "所需的属性信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_cvvzsemantic",
      children: "FG_CvvZSemantic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FG_CvvZSemantic FG_CvvZSemantic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_dimension2d",
      children: "FG_Dimension2D"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_Dimension2D FG_Dimension2D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述2D图像分辨率，以像素为单位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_dispatchdescription_gles",
      children: "FG_DispatchDescription_GLES"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_DispatchDescription_GLES FG_DispatchDescription_GLES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_dispatch_gles",
        children: "HMS_FG_Dispatch_GLES"
      }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_dispatchdescription_vk",
      children: "FG_DispatchDescription_VK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_DispatchDescription_VK FG_DispatchDescription_VK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_dispatch_vk",
        children: "HMS_FG_Dispatch_VK"
      }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配Vulkan图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_errorcode",
      children: "FG_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FG_ErrorCode FG_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述超帧接口调用错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_image_vk",
      children: "FG_Image_VK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_Image_VK FG_Image_VK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超帧输入输出图像结构体，该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_imageformat_gles",
      children: "FG_ImageFormat_GLES"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FG_ImageFormat_GLES FG_ImageFormat_GLES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_imageformat_vk",
      children: "FG_ImageFormat_VK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_ImageFormat_VK FG_ImageFormat_VK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_imageinfo_vk",
      children: "FG_ImageInfo_VK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_ImageInfo_VK FG_ImageInfo_VK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧输入输出图像信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_imagesync_vk",
      children: "FG_ImageSync_VK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_ImageSync_VK FG_ImageSync_VK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧输入输出图像同步状态信息，用于创建超帧图像内存屏障。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_mat4x4",
      children: "FG_Mat4x4"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_Mat4x4 FG_Mat4x4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_memode",
      children: "FG_MeMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FG_MeMode FG_MeMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_predictionmode",
      children: "FG_PredictionMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FG_PredictionMode FG_PredictionMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述超帧预测算法模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_presentmode",
      children: "FG_PresentMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FG_PresentMode FG_PresentMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义预测帧送显模式，支持游戏端送显预测帧模式和系统端送显预测帧模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_resolutioninfo",
      children: "FG_ResolutionInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_ResolutionInfo FG_ResolutionInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧输入输出图像的分辨率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_vec3d",
      children: "FG_Vec3D"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_Vec3D FG_Vec3D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧三维向量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_perframeextendedcamerainfo",
      children: "FG_PerFrameExtendedCameraInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_PerFrameExtendedCameraInfo FG_PerFrameExtendedCameraInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_integrationinfo",
      children: "FG_IntegrationInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FG_IntegrationInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述超帧集成的信息。包括送显模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_predictionmode-1",
        children: "FG_PredictionMode"
      }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_configdescription",
      children: "OpenGTX_ConfigDescription"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_ConfigDescription OpenGTX_ConfigDescription\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述OpenGTX属性配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_context",
      children: "OpenGTX_Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_Context OpenGTX_Context\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述OpenGTX上下文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_deviceinfocallback",
      children: "OpenGTX_DeviceInfoCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* OpenGTX_DeviceInfoCallback) (OpenGTX_TempLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备的温度信息回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGTX_TempLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备的温度级别", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_templevel",
              children: "OpenGTX_TempLevel"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_enginetype",
      children: "OpenGTX_EngineType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum OpenGTX_EngineType OpenGTX_EngineType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述游戏应用的底层游戏引擎类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_errorcode",
      children: "OpenGTX_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum OpenGTX_ErrorCode OpenGTX_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述OpenGTX接口调用错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_framerenderinfo",
      children: "OpenGTX_FrameRenderInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_FrameRenderInfo OpenGTX_FrameRenderInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_gamesceneinfo",
      children: "OpenGTX_GameSceneInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_GameSceneInfo OpenGTX_GameSceneInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_gametype",
      children: "OpenGTX_GameType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum OpenGTX_GameType OpenGTX_GameType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述游戏应用的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_ltpo_mode",
      children: "OpenGTX_LTPO_Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum OpenGTX_LTPO_Mode OpenGTX_LTPO_Mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_networkinfo",
      children: "OpenGTX_NetworkInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_NetworkInfo OpenGTX_NetworkInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_networklatency",
      children: "OpenGTX_NetworkLatency"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_NetworkLatency OpenGTX_NetworkLatency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_picturequalitymaxlevel",
      children: "OpenGTX_PictureQualityMaxLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum OpenGTX_PictureQualityMaxLevel OpenGTX_PictureQualityMaxLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述游戏应用的图像质量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_resolutionvalue",
      children: "OpenGTX_ResolutionValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_ResolutionValue OpenGTX_ResolutionValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述游戏应用的分辨率值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_sceneid",
      children: "OpenGTX_SceneID"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum OpenGTX_SceneID OpenGTX_SceneID\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述OpenGTX算法的游戏场景类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_templevel",
      children: "OpenGTX_TempLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum OpenGTX_TempLevel OpenGTX_TempLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述设备的温度级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_vector3",
      children: "OpenGTX_Vector3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OpenGTX_Vector3 OpenGTX_Vector3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述OpenGTX三维向量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr_errorcode-1",
      children: "ABR_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ABR_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述ABR接口调用错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABR_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABR_INVALID_PARAMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数检查失败，包括必选参数没有传入，参数类型错误，参数值不合法等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABR_CONTEXT_CONFIG_AFTER_ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活ABR上下文实例后配置ABR上下文实例属性。当配置ABR上下文实例属性时ABR上下文实例处于已激活状态则返回该状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABR_CONTEXT_NOT_CONFIG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ABR上下文实例属性未配置。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_activate",
              children: "HMS_ABR_Activate"
            }), "函数时ABR上下文实例属性未配置或配置失败则返回该错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABR_CONTEXT_NOT_ACTIVE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ABR上下文实例属性未激活。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_markframebuffer_gles",
              children: "HMS_ABR_MarkFrameBuffer_GLES"
            }), "函数或ABR Update相关函数时ABR上下文实例未激活则返回该错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABR_METADATA_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的ABR MetaData（元数据）。当配置ABR上下文实例属性时，ABR检测到无效MetaData则返回该错误码"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABR_FRAMEBUFFER_INVALID"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无效的FrameBuffer。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_abr_markframebuffer_gles",
              children: "HMS_ABR_MarkFrameBuffer_GLES"
            }), "函数时，ABR检测到无效FrameBuffer则返回该错误码。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr_renderapi_type-1",
      children: "ABR_RenderAPI_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ABR_RenderAPI_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述ABR支持的图形API类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RENDER_API_GLES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGL ES API"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_cvvzsemantic-1",
      children: "FG_CvvZSemantic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FG_CvvZSemantic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "投影变换后的齐次裁剪空间Z/W范围在[-1, 1]之间，深度测试比较函数为less equal，如OpenGL ES API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_REVERSE_Z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "投影变换后的齐次裁剪空间Z/W范围在[0, 1]之间，深度测试比较函数为greater equal，如DirectX/Vulkan API平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_REVERSE_Z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "投影变换后的齐次裁剪空间Z/W范围在[-1, 1]之间，深度测试比较函数为greater equal。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "投影变换后的齐次裁剪空间Z/W范围在[0, 1]之间，深度测试比较函数为less equal。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_errorcode-1",
      children: "FG_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FG_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述超帧接口调用错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_INVALID_PARAMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数检查失败，包括必选参数没有传入，参数类型错误，参数值不合法等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_CONTEXT_NOT_CONFIG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超帧上下文实例属性未配置。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_activate_gles",
              children: "HMS_FG_Activate_GLES"
            }), "函数时超帧上下文实例属性未配置或配置失败则返回该错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_CONTEXT_NOT_ACTIVE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超帧上下文实例未激活。当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "函数时超帧上下文实例处于未激活状态则返回该错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_COLLECTING_PREVIOUS_FRAMES"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超帧需要多帧历史帧信息进行运动估计，当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fg_dispatch_gles",
              children: "HMS_FG_Dispatch_GLES"
            }), "函数时，如果传入真实渲染帧数量小于固定阈值（GLES基础内插模式为2，GLES基础外插模式为3，GLES增强内插模式为2，GLES增强外插模式为2，Vulkan基础内插模式为3，Vulkan基础外插模式为3），此时无预测帧生成，返回该状态码。当调用次数大于等于固定阈值后，函数调用成功则返回FG_SUCCESS。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_imageformat_gles-1",
      children: "FG_ImageFormat_GLES"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FG_ImageFormat_GLES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_FORMAT_R8G8B8A8_UNORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GL_RGBA8图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_FORMAT_R11G11B10_SFLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GL_R11F_G11F_B10F图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_FORMAT_R16G16B16A16_SFLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GL_RGBA16F图像格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_memode-1",
      children: "FG_MeMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FG_MeMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_ME_MODE_BASIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基础模式，即利用历史帧颜色信息、深度信息及相机矩阵信息进行运动估计。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_ME_MODE_ENHANCED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增强模式，即利用历史帧中的几何顶点信息进行更精准的运动估计，生成的预测帧效果更优。该模式需要开发者对绘制顶点的draw call进行标记。不传入深度图的情况下切换到AI超帧算法进行预测。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_predictionmode-1",
      children: "FG_PredictionMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FG_PredictionMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述超帧预测算法模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_PREDICTION_MODE_INTERPOLATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内插模式，即通过第N-1帧真实渲染帧及第N帧真实渲染帧生成N-0.5帧预测帧。该模式适用于高渲染画质游戏和对运行平滑度要求高的游戏，如角色扮演游戏、竞速类游戏等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_PREDICTION_MODE_EXTRAPOLATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外插模式，即通过N-1帧真实渲染帧及第N帧真实渲染帧生成N+0.5帧预测帧。该模式适用于对响应时延和操作跟手性要求高的游戏，如动作类游戏、射击类游戏等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fg_presentmode-1",
      children: "FG_PresentMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FG_PresentMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义预测帧送显模式，支持游戏端送显预测帧模式和系统端送显预测帧模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_PRESENT_BY_GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏申请和管理预测帧，并负责预测帧的送显。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FG_PRESENT_BY_SYSTEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统申请和管理预测帧，并负责预测帧的送显。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_enginetype-1",
      children: "OpenGTX_EngineType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenGTX_EngineType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述游戏应用的底层游戏引擎类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏引擎类型为UNITY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNREAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏引擎类型为UNREAL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MESSIAH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏引擎类型为MESSIAH。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COCOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏引擎类型为COCOS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OTHERS_ENGINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏引擎类型为OTHERS_ENGINE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_errorcode-1",
      children: "OpenGTX_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenGTX_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述OpenGTX接口调用错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENGTX_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENGTX_INVALID_PARAMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数检查失败，包括必选参数没有传入，参数类型错误，参数值不合法等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENGTX_CONTEXT_NOT_CONFIG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenGTX上下文实例属性未配置。 当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_dispatchframerenderinfo",
              children: "HMS_OpenGTX_DispatchFrameRenderInfo"
            }), "等函数时，OpenGTX上下文实例未配置则返回该错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPENGTX_CONTEXT_NOT_ACTIVE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenGTX上下文实例属性未激活。 当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_opengtx_dispatchframerenderinfo",
              children: "HMS_OpenGTX_DispatchFrameRenderInfo"
            }), "等函数时，OpenGTX上下文实例未激活则返回该错误码。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_gametype-1",
      children: "OpenGTX_GameType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenGTX_GameType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述游戏应用的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏应用类型为MOBA。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RPG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏应用类型为RPG。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏应用类型为FPS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏应用类型为RAC。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OTHERS_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏应用类型为OTHERS_TYPE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_ltpo_mode-1",
      children: "OpenGTX_LTPO_Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenGTX_LTPO_Mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCENE_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOUCH_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触控模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADAPTIVE_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自适应模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_picturequalitymaxlevel-1",
      children: "OpenGTX_PictureQualityMaxLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenGTX_PictureQualityMaxLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述游戏应用的图像质量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像质量为SD，如480p。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像质量为HD，如720p。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像质量为FHD，如1080p。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像质量为QHD，如2k。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像质量为UHD，如4k。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_sceneid-1",
      children: "OpenGTX_SceneID"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenGTX_SceneID\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述OpenGTX算法的游戏场景类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为登录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_INTERFACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为游戏大厅界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOADING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为游戏加载中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PLAYING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为游戏对局中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPECTATOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为游戏观战中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEATH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为人物战斗准备中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEAVY_LOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为重负载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OTHERS_SCENE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型为其他场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opengtx_templevel-1",
      children: "OpenGTX_TempLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenGTX_TempLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举描述设备的温度级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEMP_LEVEL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度等级1。游戏可以保持当前配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEMP_LEVEL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度等级2。游戏应该减少不必要的服务，如减少后台更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEMP_LEVEL3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度等级3。游戏应该停止非重点服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEMP_LEVEL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度等级4。游戏应该降低游戏效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEMP_LEVEL5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度等级5。游戏要降低游戏场景配置，如帧分辨率、帧率、画质等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEMP_LEVEL6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度等级6。游戏应保持最低配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_activate",
      children: "HMS_ABR_Activate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_Activate(ABR_Context* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["激活ABR上下文实例。激活ABR上下文实例前需调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_abr_settargetfps",
        children: "HMS_ABR_SetTargetFps"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_abr_setscalerange",
        children: "HMS_ABR_SetScaleRange"
      }), "接口进行实例属性的配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_createcontext",
      children: "HMS_ABR_CreateContext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_Context* HMS_ABR_CreateContext(ABR_RenderAPI_Type type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建ABR上下文实例，每次调用会新建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_context",
        children: "ABR_Context"
      }), "对象，并返回指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_context",
        children: "ABR_Context"
      }), "对象的指针。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图形API类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_renderapi_type",
              children: "ABR_RenderAPI_Type"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["成功时返回指向ABR上下文结构体", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_context",
        children: "ABR_Context"
      }), "的指针，失败返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_deactivate",
      children: "HMS_ABR_Deactivate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_Deactivate(ABR_Context* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["去激活ABR上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_abr_activate",
        children: "HMS_ABR_Activate"
      }), "重新激活。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_destroycontext",
      children: "HMS_ABR_DestroyContext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_DestroyContext(ABR_Context** context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁ABR上下文实例并释放内存资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的指向ABR上下文实例", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "的二级指针，非空，否则返回失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_getscale",
      children: "HMS_ABR_GetScale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_GetScale(ABR_Context* context, float* scale )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ABR Buffer分辨率因子。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向一个用来接收ABR分辨率因子的变量，非空，否则返回失败。scale取值范围[0.5, 1.0]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_getnextscale",
      children: "HMS_ABR_GetNextScale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_GetNextScale(ABR_Context* context, float* scale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下一帧的ABR Buffer分辨率因子。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向一个用来接收ABR分辨率因子的变量，非空，否则返回失败。scale取值范围[0.5, 1.0]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_isactive",
      children: "HMS_ABR_IsActive()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_IsActive(ABR_Context* context, bool* isActive )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询ABR上下文实例是否处于激活状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isActive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABR上下文实例的激活状态。  - true : ABR上下文实例处于激活状态；  - false : ABR上下文实例处于去激活状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_markframebuffer_gles",
      children: "HMS_ABR_MarkFrameBuffer_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_MarkFrameBuffer_GLES(ABR_Context* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记ABR进行自适应渲染处理的GLES Buffer，需要在GLES Buffer开始渲染前调用此接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_getscaledtexture_gles",
      children: "HMS_ABR_GetScaledTexture_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_GetScaledTexture_GLES(ABR_Context* context, uint32_t originTexture, uint32_t* scaledTexture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据原始分辨率的GLES纹理索引获取ABR自适应缩放后的GLES纹理索引。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "originTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原始分辨率的GLES纹理索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaledTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABR自适应缩放后的GLES纹理索引。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_setscalerange",
      children: "HMS_ABR_SetScaleRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_SetScaleRange(ABR_Context* context, const float minValue, const float maxValue )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置ABR上下文实例的Buffer分辨率因子范围属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABR上下文实例的最小Buffer分辨率因子属性，取值范围[0.5, 1.0]。参数不在范围内会返回ABR_INVALID_PARAMETER错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABR上下文实例的最大Buffer分辨率因子属性，取值范围[0.5, 1.0]。参数不在范围内会返回ABR_INVALID_PARAMETER错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_settargetfps",
      children: "HMS_ABR_SetTargetFps()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_SetTargetFps(ABR_Context* context, const uint32_t targetFps )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置ABR上下文实例的目标帧率属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetFps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABR上下文实例的目标帧率属性，取值范围[30, 120]。参数不在范围内会返回ABR_INVALID_PARAMETER错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_abr_updatecameradata",
      children: "HMS_ABR_UpdateCameraData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABR_ErrorCode HMS_ABR_UpdateCameraData(ABR_Context* context, ABR_CameraData* data )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更新每帧相机运动数据，ABR更新相机运动数据前需调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_abr_activate",
        children: "HMS_ABR_Activate"
      }), "接口激活ABR上下文实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的ABR上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#abr_context",
              children: "ABR_Context"
            }), "实例的指针，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏应用每帧的相机运动数据，即指向ABR相机运动数据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___camera_data/x_a_b_r___camera_data",
              children: "ABR_CameraData"
            }), "的指针，非空，否则返回失败。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abr_errorcode",
        children: "ABR_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_activate_gles",
      children: "HMS_FG_Activate_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_Activate_GLES(FG_Context_GLES* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["激活超帧上下文实例。已激活的超帧实例可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_dispatch_gles",
        children: "HMS_FG_Dispatch_GLES"
      }), "接口生成预测帧， 激活超帧上下文实例前必须先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_setalgorithmmode_gles",
        children: "HMS_FG_SetAlgorithmMode_GLES"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_setresolution_gles",
        children: "HMS_FG_SetResolution_GLES"
      }), "接口完成配置。该接口仅适配OpenGL ES图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_activate_vk",
      children: "HMS_FG_Activate_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_Activate_VK(FG_Context_VK* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["激活超帧上下文实例。已激活的超帧实例可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_dispatch_vk",
        children: "HMS_FG_Dispatch_VK"
      }), "接口生成预测帧，激活超帧上下文实例前必须先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_setalgorithmmode_vk",
        children: "HMS_FG_SetAlgorithmMode_VK"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_setresolution_vk",
        children: "HMS_FG_SetResolution_VK"
      }), "接口完成配置。该接口仅适配Vulkan图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_createcontext_gles",
      children: "HMS_FG_CreateContext_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_Context_GLES* HMS_FG_CreateContext_GLES(void )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建超帧上下文实例，调用成功则返回指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_context_gles",
        children: "FG_Context_GLES"
      }), "对象的指针，失败返回nullptr。该接口仅适配OpenGL ES图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["成功时返回指向超帧上下文结构体", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_context_gles",
        children: "FG_Context_GLES"
      }), "对象的指针，失败返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_createcontext_vk",
      children: "HMS_FG_CreateContext_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_Context_VK* HMS_FG_CreateContext_VK(const FG_ContextDescription_VK* contextDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建超帧上下文实例，调用成功则返回指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_context_vk",
        children: "FG_Context_VK"
      }), "对象的指针，失败返回nullptr。该接口仅适配Vulkan图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contextDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向创建超帧上下文实例所需属性信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k",
              children: "FG_ContextDescription_VK"
            }), "对象的指针，不允许为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["成功时返回指向超帧上下文结构体", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_context_vk",
        children: "FG_Context_VK"
      }), "对象的指针，失败返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_createimage_vk",
      children: "HMS_FG_CreateImage_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_Image_VK* HMS_FG_CreateImage_VK(FG_Context_VK* context, VkImage image, VkImageView view )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建超帧输入输出图像实例。真实帧颜色缓冲区、深度模板缓冲区、预测帧缓冲区均需要通过该接口创建对应的图像实例，并传入预测帧生成接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_dispatch_vk",
        children: "HMS_FG_Dispatch_VK"
      }), "进行预测帧绘制。该接口将用户提供的图像资源和超帧算法实现之间建立关联。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkImage对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkImageView对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超帧输入输出图像实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_deactivate_gles",
      children: "HMS_FG_Deactivate_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_Deactivate_GLES(FG_Context_GLES* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["去激活超帧上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_activate_gles",
        children: "HMS_FG_Activate_GLES"
      }), "接口重新激活。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_deactivate_vk",
      children: "HMS_FG_Deactivate_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_Deactivate_VK(FG_Context_VK* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["去激活超帧上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_fg_activate_vk",
        children: "HMS_FG_Activate_VK"
      }), "接口重新激活。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_destroycontext_gles",
      children: "HMS_FG_DestroyContext_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_DestroyContext_GLES(FG_Context_GLES** context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁超帧上下文实例并释放内存资源。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的指向超帧上下文结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的二级指针，不允许为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_destroycontext_vk",
      children: "HMS_FG_DestroyContext_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_DestroyContext_VK(FG_Context_VK** context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁超帧上下文实例并释放内存资源。该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的指向超帧上下文结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的二级指针，不允许为空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_destroyimage_vk",
      children: "HMS_FG_DestroyImage_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_DestroyImage_VK(FG_Context_VK* context, FG_Image_VK* image )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁超帧输入输出图像实例，取消对应关联。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "image"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_image_vk",
              children: "FG_Image_VK"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_dispatch_gles",
      children: "HMS_FG_Dispatch_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_Dispatch_GLES(FG_Context_GLES* context, const FG_DispatchDescription_GLES* desc )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "desc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下发帧生成命令的参数结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s",
              children: "FG_DispatchDescription_GLES"
            }), "的指针，不允许为空，需每帧更新。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；当输入历史帧数量未达到固定阈值时（基础内插模式为2，基础外插模式为3，增强内插模式为2，增强外插模式为2），返回FG_COLLECTING_PREVIOUS_FRAMES；当执行失败则返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setextendedcamerainfo_gles",
      children: "HMS_FG_SetExtendedCameraInfo_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetExtendedCameraInfo_GLES(FG_Context_GLES* context, const FG_PerFrameExtendedCameraInfo* info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧相机扩展属性信息，当视图投影矩阵的平移分量非常大时，提供该信息以获得更加准确的超帧效果。可选调用，该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "info"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向相机扩展信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___per_frame_extended_camera_info/x_f_g___per_frame_extended_camera_info",
              children: "FG_PerFrameExtendedCameraInfo"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_dispatch_vk",
      children: "HMS_FG_Dispatch_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_Dispatch_VK(FG_Context_VK* context, const FG_DispatchDescription_VK* desc )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "desc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下发帧生成命令的参数结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___v_k/x_f_g___dispatch_description___v_k",
              children: "FG_DispatchDescription_VK"
            }), "的指针，不允许为空，需每帧更新。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；当输入历史帧数量未达到固定阈值时（内插模式和外插模式均为3），返回FG_COLLECTING_PREVIOUS_FRAMES；当执行失败则返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_isactive_gles",
      children: "HMS_FG_IsActive_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_IsActive_GLES(FG_Context_GLES* context, bool* isActive )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询超帧上下文实例是否处于激活状态。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isActive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超帧上下文实例的激活状态。  true : 超帧上下文实例处于激活状态；  false : 超帧上下文实例处于未激活状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_isactive_vk",
      children: "HMS_FG_IsActive_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_IsActive_VK(FG_Context_VK* context, bool* isActive )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询超帧上下文实例是否处于激活状态。该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isActive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超帧上下文实例的激活状态。  true : 超帧上下文实例处于激活状态；  false : 超帧上下文实例处于未激活状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setalgorithmmode_gles",
      children: "HMS_FG_SetAlgorithmMode_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetAlgorithmMode_GLES(FG_Context_GLES* context, const FG_AlgorithmModeInfo* predictionModeInfo )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧预测算法模式和运动估计模式，必选。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predictionModeInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向超帧算法模式结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___algorithm_mode_info/x_f_g___algorithm_mode_info",
              children: "FG_AlgorithmModeInfo"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setalgorithmmode_vk",
      children: "HMS_FG_SetAlgorithmMode_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetAlgorithmMode_VK(FG_Context_VK* context, const FG_AlgorithmModeInfo* predictionModeInfo )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧算法模式，包括预测算法模式和运动估计模式，必选。该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predictionModeInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向超帧算法模式结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___algorithm_mode_info/x_f_g___algorithm_mode_info",
              children: "FG_AlgorithmModeInfo"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setcvvzsemantic_gles",
      children: "HMS_FG_SetCvvZSemantic_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetCvvZSemantic_GLES(FG_Context_GLES* context, FG_CvvZSemantic semantic )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "semantic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示齐次裁剪空间Z/W范围及深度测试函数的枚举值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setcvvzsemantic_vk",
      children: "HMS_FG_SetCvvZSemantic_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetCvvZSemantic_VK(FG_Context_VK* context, FG_CvvZSemantic semantic )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z。 该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "semantic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示齐次裁剪空间Z/W范围及深度测试函数的枚举值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setdepthstencilydirectioninverted_gles",
      children: "HMS_FG_SetDepthStencilYDirectionInverted_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetDepthStencilYDirectionInverted_GLES(FG_Context_GLES* context, bool inverted )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置颜色缓冲区相对深度模板缓冲区基于y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inverted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色缓冲区相对深度模板缓冲区基于y轴翻转的标志位。  true : 颜色缓冲区相对深度模板缓冲区基于y轴翻转180°；  false : 颜色缓冲区相对深度模板缓冲区无翻转。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setdepthstencilydirectioninverted_vk",
      children: "HMS_FG_SetDepthStencilYDirectionInverted_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetDepthStencilYDirectionInverted_VK(FG_Context_VK* context, bool inverted )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置颜色缓冲区相对深度模板缓冲区是否存在y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inverted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色缓冲区相对深度模板缓冲区是否存在y轴翻转的标志位。  true : 颜色缓冲区相对深度模板缓冲区基于y轴翻转180°；  false : 颜色缓冲区相对深度模板缓冲区无翻转。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setimageformat_gles",
      children: "HMS_FG_SetImageFormat_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetImageFormat_GLES(FG_Context_GLES* context, FG_ImageFormat_GLES format )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式，可选调用，未调用则模式默认设置为FG_FORMAT_R8G8B8A8_UNORM。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示真实渲染帧颜色缓冲区和预测帧缓冲区图像格式的枚举值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setimageformat_vk",
      children: "HMS_FG_SetImageFormat_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetImageFormat_VK(FG_Context_VK* context, const FG_ImageFormat_VK* format )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧输入输出图像格式，可选调用。未调用则真实帧颜色缓冲区和预测帧缓冲区图像格式默认为VK_FORMAT_R8G8B8A8_UNORM； 深度模板缓冲区图像格式默认为VK_FORMAT_D24_UNORM_S8_UINT。该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "format"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向超帧输入输出图像格式结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k",
              children: "FG_ImageFormat_VK"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setresolution_gles",
      children: "HMS_FG_SetResolution_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetResolution_GLES(FG_Context_GLES* context, const FG_ResolutionInfo* resolutionInfo )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧输入输出图像分辨率，必选。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolutionInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向超帧输入输出图像分辨率结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___resolution_info/x_f_g___resolution_info",
              children: "FG_ResolutionInfo"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setresolution_vk",
      children: "HMS_FG_SetResolution_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetResolution_VK(FG_Context_VK* context, const FG_ResolutionInfo* resolutionInfo )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧输入输出图像分辨率，必选。该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolutionInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向超帧输入输出图像分辨率结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___resolution_info/x_f_g___resolution_info",
              children: "FG_ResolutionInfo"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setintegrationmode_gles",
      children: "HMS_FG_SetIntegrationMode_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetIntegrationMode_GLES(FG_Context_GLES* context, const FG_IntegrationInfo* integrationInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置超帧集成信息，当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_predictionmode-1",
        children: "FG_PredictionMode"
      }), "为FG_PREDICTION_MODE_INTERPOLATION时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
        children: "FG_IntegrationInfo"
      }), "中的presentMode、needDepthAndColorCache、needFlipColorTexture成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配OpenGL ES图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "integrationInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向超帧集成信息的结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setintegrationmode_vk",
      children: "HMS_FG_SetIntegrationMode_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetIntegrationMode_VK(FG_Context_VK* context, const FG_IntegrationInfo* integrationInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置超帧集成信息，当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_predictionmode-1",
        children: "FG_PredictionMode"
      }), "为FG_PREDICTION_MODE_INTERPOLATION时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
        children: "FG_IntegrationInfo"
      }), "中的presentMode、needDepthAndColorCache、needFlipColorTexture成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配Vulkan图形API平台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "integrationInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向超帧集成信息的结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
              children: "FG_IntegrationInfo"
            }), "对象的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setuipredictionenabled_gles",
      children: "HMS_FG_SetUiPredictionEnabled_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetUiPredictionEnabled_GLES(FG_Context_GLES* context, bool isEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI预测的激活状态。  true : UI预测处于激活状态。  false : UI预测处于未激活状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_setuipredictionenabled_vk",
      children: "HMS_FG_SetUiPredictionEnabled_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetUiPredictionEnabled_VK(FG_Context_VK* context, bool isEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI预测的激活状态。  true : UI预测处于激活状态。  false : UI预测处于未激活状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_settargetfps_gles",
      children: "HMS_FG_SetTargetFps_GLES()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetTargetFps_GLES(FG_Context_GLES* context, int targetFps)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配OpenGL ES图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_gles",
              children: "FG_Context_GLES"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetFps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超帧后的目标帧率。最小值为30，最大值为144，参数不在范围内会返回FG_INVALID_PARAMETER错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fg_settargetfps_vk",
      children: "HMS_FG_SetTargetFps_VK()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_ErrorCode HMS_FG_SetTargetFps_VK(FG_Context_VK* context, int targetFps)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配Vulkan图形API平台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的超帧上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fg_context_vk",
              children: "FG_Context_VK"
            }), "对象的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetFps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超帧后的目标帧率。最小值为30，最大值为144，参数不在范围内会返回FG_INVALID_PARAMETER错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fg_errorcode",
        children: "FG_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_activate",
      children: "HMS_OpenGTX_Activate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ErrorCode HMS_OpenGTX_Activate(OpenGTX_Context* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "激活OpenGTX上下文实例。使用OpenGTX上下文实例前需要激活实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的OpenGTX上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "实例的指针；非空，否则返回失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_errorcode",
        children: "OpenGTX_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_createcontext",
      children: "HMS_OpenGTX_CreateContext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_Context* HMS_OpenGTX_CreateContext(OpenGTX_DeviceInfoCallback deviceInfoCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建OpenGTX上下文实例，每次调用会新建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_context",
        children: "OpenGTX_Context"
      }), "对象，并返回指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_context",
        children: "OpenGTX_Context"
      }), "对象的指针。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceInfoCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备的温度信息回调", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_deviceinfocallback",
              children: "OpenGTX_DeviceInfoCallback"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["成功时返回指向OpenGTX上下文结构体", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_context",
        children: "OpenGTX_Context"
      }), "的指针，失败返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_deactivate",
      children: "HMS_OpenGTX_Deactivate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ErrorCode HMS_OpenGTX_Deactivate(OpenGTX_Context* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["去激活OpenGTX上下文实例，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_opengtx_activate",
        children: "HMS_OpenGTX_Activate"
      }), "重新激活。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的OpenGTX上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "实例的指针；非空，否则返回失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_errorcode",
        children: "OpenGTX_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_destroycontext",
      children: "HMS_OpenGTX_DestroyContext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ErrorCode HMS_OpenGTX_DestroyContext(OpenGTX_Context** context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁OpenGTX上下文实例并释放内存资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的OpenGTX上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "实例的指针；非空，否则返回失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_errorcode",
        children: "OpenGTX_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_dispatchframerenderinfo",
      children: "HMS_OpenGTX_DispatchFrameRenderInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ErrorCode HMS_OpenGTX_DispatchFrameRenderInfo(OpenGTX_Context* context, const OpenGTX_FrameRenderInfo* frameRenderInfo )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OpenGTX运行所需的场景渲染关键信息，每帧变化均需要更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的OpenGTX上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "实例的指针；非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frameRenderInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["帧渲染信息结构，即指向OpenGTX每帧渲染信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___frame_render_info/x_open_g_t_x___frame_render_info",
              children: "OpenGTX_FrameRenderInfo"
            }), "的指针；非空，否则返回失败。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_errorcode",
        children: "OpenGTX_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_dispatchgamesceneinfo",
      children: "HMS_OpenGTX_DispatchGameSceneInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ErrorCode HMS_OpenGTX_DispatchGameSceneInfo(OpenGTX_Context* context, const OpenGTX_GameSceneInfo* gameSceneInfo )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OpenGTX运行所需的游戏场景信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的OpenGTX上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "实例的指针；非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gameSceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏场景信息，即指向OpenGTX场景信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info",
              children: "OpenGTX_GameSceneInfo"
            }), "的指针；非空，否则返回失败。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_errorcode",
        children: "OpenGTX_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_dispatchnetworkinfo",
      children: "HMS_OpenGTX_DispatchNetworkInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ErrorCode HMS_OpenGTX_DispatchNetworkInfo(OpenGTX_Context* context, const OpenGTX_NetworkInfo* networkInfo )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OpenGTX运行所需的网络延迟信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的OpenGTX上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "实例的指针；非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "networkInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络信息，即指向OpenGTX网络信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___network_info/x_open_g_t_x___network_info",
              children: "OpenGTX_NetworkInfo"
            }), "的指针；非空，否则返回失败。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_errorcode",
        children: "OpenGTX_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_opengtx_setconfiguration",
      children: "HMS_OpenGTX_SetConfiguration()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ErrorCode HMS_OpenGTX_SetConfiguration (OpenGTX_Context* context, const OpenGTX_ConfigDescription* config )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化OpenGTX上下文实例，配置OpenGTX实例属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的OpenGTX上下文实例，即指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#opengtx_context",
              children: "OpenGTX_Context"
            }), "实例的指针；非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenGTX上下文实例的初始化参数，即指向OpenGTX配置数据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description",
              children: "OpenGTX_ConfigDescription"
            }), "的指针；非空，否则返回失败。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#opengtx_errorcode",
        children: "OpenGTX_ErrorCode"
      }), "。"]
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