"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["634153"], {
798068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_ai_graphics_accelerate_fg_ai_vulkan_graphics_accelerate_fg_ai_vulkan_md_644_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-rendering-graphics-accelerate-fg-graphics-accelerate-fg-ai-graphics-accelerate-fg-ai-vulkan-graphics-accelerate-fg-ai-vulkan-md-644.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_ai_graphics_accelerate_fg_ai_vulkan_graphics_accelerate_fg_ai_vulkan_md_644_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-vulkan/graphics-accelerate-fg-ai-vulkan","title":"Vulkan平台","description":"业务流程","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-vulkan/graphics-accelerate-fg-ai-vulkan.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-vulkan","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-vulkan/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-vulkan/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Vulkan平台","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-ai-vulkan","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-overview/"},"next":{"title":"ABR功能开发","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-vulkan/graphics-accelerate-fg-ai-vulkan.md


const frontMatter = {
	title: 'Vulkan平台',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-ai-vulkan',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'Vulkan平台';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "vulkan平台",
        children: "Vulkan平台"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI超帧调用流程上依赖系统送显模式功能，但与基本的系统送显模式相比，无需调用新方法，只需要在传输帧信息的时候不传输深度信息即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是基于Vulkan图形API平台，集成AI超帧的主要业务流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555770)/* ["default"] */.A) + "",
        width: "965",
        height: "893"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户进入超帧适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createcontext_vk",
          children: "HMS_FG_CreateContext_VK"
        }), "接口创建超帧上下文实例。如超帧上下文实例创建失败，则无需在步骤6提供当前帧信息，只需逐帧对场景进行渲染送显即可。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用接口配置超帧实例属性。包括调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setalgorithmmode_vk",
          children: "HMS_FG_SetAlgorithmMode_VK"
        }), "（必选）设置超帧算法模式并选择内插模式；按需调用其他插帧相关配置接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置集成模式，选择系统侧集成调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setintegrationmode_vk",
          children: "HMS_FG_SetIntegrationMode_VK"
        }), "（可选）设置超帧预测的集成信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_integrationinfo",
          children: "FG_IntegrationInfo"
        }), "并选择系统侧送显；系统送显预测帧模式下可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setuipredictionenabled_vk",
          children: "HMS_FG_SetUiPredictionEnabled_VK"
        }), "（可选）启用UI预测功能，不启用时预测帧会复用上一帧的UI进行展示；系统送显模式下可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_settargetfps_vk",
          children: "HMS_FG_SetTargetFps_VK"
        }), "（可选）设置超帧后的目标帧率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_vk",
          children: "HMS_FG_Activate_VK"
        }), "接口激活超帧上下文实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用渲染真实帧，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk",
          children: "HMS_FG_Dispatch_VK"
        }), "接口并传入真实帧颜色信息、相机矩阵信息，生成预测帧。请避免传入深度信息，否则会触发增强超帧算法。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用完成UI绘制，并送显当前真实帧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户退出超帧适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroycontext_vk",
          children: "HMS_FG_DestroyContext_VK"
        }), "接口销毁超帧上下文实例并释放内存资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节阐述基于Vulkan图形API平台的系统送显模式调用示例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置meta-data。在应用的module.json5中声明meta-data以支持系统送显模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"module\": {\n         // 其他的配置项\n         // ...\n        \"metadata\": [\n            {\n                \"name\": \"GraphicsAccelerateKit_FusionAware\",\n                \"value\": \"Vulkan\"\n            }\n        ]\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    framegeneration-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    libframegeneration.so\n)\nfind_library(\n    # Sets the name of the path variable.\n    vulkan-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    vulkan\n)\n\ntarget_link_libraries(entry PUBLIC\n    ${framegeneration-lib} ${vulkan-lib}\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用Graphics Accelerate Kit超帧头文件：frame_generation_vk.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引用超帧frame_generation_vk.h头文件\n#include <graphics_game_sdk/frame_generation_vk.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createcontext_vk",
            children: "HMS_FG_CreateContext_VK"
          }), "接口创建超帧上下文实例。如果返回nullptr，则说明超帧上下文实例创建失败，或当前硬件设备不支持开启超帧。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 变量声明\nVkInstance vkInstance = VK_NULL_HANDLE;\nVkPhysicalDevice vkPhysicalDevice = VK_NULL_HANDLE;\nVkDevice vkDevice = VK_NULL_HANDLE;\n\n// 创建超帧上下文实例\nFG_ContextDescription_VK contextDescription{};\ncontextDescription.vkInstance = vkInstance;\ncontextDescription.vkPhysicalDevice = vkPhysicalDevice;\ncontextDescription.vkDevice = vkDevice;\ncontextDescription.framesInFlight = 1;\ncontextDescription.fnVulkanLoaderFunction = vkGetInstanceProcAddr;\nFG_Context_VK* m_context = HMS_FG_CreateContext_VK(&contextDescription);\nif (m_context == nullptr) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用超帧实例属性配置接口，超帧算法模式选择内插增强模式并指定系统送显预测帧模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化超帧接口调用错误码\nFG_ErrorCode errorCode = FG_SUCCESS;\n\n// 超帧算法模式\nFG_AlgorithmModeInfo aInfo{};\naInfo.predictionMode = FG_PREDICTION_MODE_INTERPOLATION;                  // 内插模式\naInfo.meMode = FG_ME_MODE_ENHANCED;                                       // 增强模式\nerrorCode = HMS_FG_SetAlgorithmMode_VK(m_context, &aInfo);                // [必选] 设置超帧算法模式\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// 调用其他插帧相关配置接口\n// ...\n\n// 超帧预测的集成信息\nFG_IntegrationInfo integrationInfo {};\nintegrationInfo.presentMode = FG_PRESENT_BY_SYSTEM;                       // 预测帧送显模式\nintegrationInfo.textureCachedByGame = false;                              // 输入的颜色纹理游戏侧缓存 系统不会复制一份再做预测 默认游戏不会缓存\nintegrationInfo.needFlipInputColor = false;                               // 颜色纹理需要翻转 默认false\nintegrationInfo.needFlipOutputColor = false;                              // 预测帧需要翻转 默认false\n// 设置超帧预测的集成信息\nerrorCode = HMS_FG_SetIntegrationMode_VK(m_context, &integrationInfo);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_vk",
            children: "HMS_FG_Activate_VK"
          }), "接口激活超帧上下文实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 激活超帧上下文实例\nerrorCode = HMS_FG_Activate_VK(m_context);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk",
            children: "HMS_FG_CreateImage_VK"
          }), "接口创建真实渲染帧颜色缓冲区图像实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 变量声明\nVkImage inputColorImage = VK_NULL_HANDLE;\nVkImageView inputColorImageView = VK_NULL_HANDLE;\n\n// 创建真实帧颜色缓冲区图像实例\nFG_Image_VK* inputColor = HMS_FG_CreateImage_VK(m_context, inputColorImage, inputColorImageView);\nif (!inputColor) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏运行中，渲染真实帧时，缓存颜色信息和相机矩阵等属性信息。渲染预测帧时，需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk",
            children: "HMS_FG_Dispatch_VK"
          }), "接口并传入真实帧属性信息，指定预测帧缓冲区索引，生成预测帧。游戏送显自己真实帧，系统会在真实帧和上一帧间完成预测帧的展示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 帧循环\nwhile (true) {\n    // 真实帧渲染阶段\n    // 渲染当前帧渲染画面，缓存颜色、相机矩阵等信息，用于下一帧预测帧生成\n    // ...\n\n    // 绘制真实帧\n    // ...\n\n    // 绘制UI\n    // ...\n\n    // 预测帧渲染阶段\n    // 设置预测帧生成前真实帧颜色缓冲区同步状态\n    FG_ImageSync_VK inputColorInitImageSync{};\n    inputColorInitImageSync.stages = VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT;\n    inputColorInitImageSync.layout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL;\n    inputColorInitImageSync.accessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;\n\n    // 设置预测帧生成后真实帧颜色缓冲区同步状态\n    FG_ImageSync_VK inputColorFinalImageSync{};\n    inputColorFinalImageSync.stages = VK_PIPELINE_STAGE_TRANSFER_BIT;\n    inputColorFinalImageSync.layout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;\n    inputColorFinalImageSync.accessMask = VK_ACCESS_TRANSFER_READ_BIT;\n\n    // 创建真实帧颜色缓冲区图像属性实例\n    FG_ImageInfo_VK inputColorImageInfo{};\n    inputColorImageInfo.image = inputColor;\n    inputColorImageInfo.initialSync = inputColorInitImageSync;\n    inputColorImageInfo.finalSync = inputColorFinalImageSync;\n\n    // 帧生成属性配置结构体\n    FG_DispatchDescription_VK dispatchDescription{};\n    // 传入真实渲染帧颜色缓冲区属性信息\n    dispatchDescription.inputColorInfo = inputColorImageInfo;\n\n    // 变量声明\n    FG_Mat4x4 preViewProj;\n    FG_Mat4x4 preInvViewProj;\n    VkCommandBuffer vkCommandBuffer = VK_NULL_HANDLE;\n\n    // 传入上一帧真实渲染帧视图投影矩阵\n    dispatchDescription.viewProj = preViewProj;\n    // 传入上一帧真实渲染帧视图投影逆矩阵\n    dispatchDescription.invViewProj = preInvViewProj;\n    // 传入用于录入超帧绘制指令的命令缓冲区句柄\n    dispatchDescription.vkCommandBuffer = vkCommandBuffer;\n\n    // 生成预测帧\n    errorCode = HMS_FG_Dispatch_VK(m_context, &dispatchDescription);\n    if (errorCode != FG_SUCCESS) {\n        return false;\n    }\n\n    switch (errorCode) {\n        case FG_SUCCESS: {\n            // 预测成功\n            break;\n        }\n        case FG_COLLECTING_PREVIOUS_FRAMES:\n            // 传入真实帧数量未达到固定阈值，无预测帧生成，外插模式传入真实帧数量<3时返回该状态码，此时不要将预测帧送显\n            break;\n        default:\n            // 预测帧生成失败\n            break;\n    }\n\n    // 送显真实帧\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroycontext_vk",
            children: "HMS_FG_DestroyContext_VK"
          }), "接口销毁超帧实例，释放内存资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁超帧上下文实例并释放内存资源\nerrorCode = HMS_FG_DestroyContext_VK(&m_context);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
555770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478713-4da75d419ddc80fa4931194efa4cb820.png");

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