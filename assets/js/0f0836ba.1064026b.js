"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["456778"], {
951574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_extrapolation_graphics_accelerate_fg_extrapolation_vulkan_graphics_accelerate_fg_extrapolation_vulkan_md_0f0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-rendering-graphics-accelerate-fg-graphics-accelerate-fg-extrapolation-graphics-accelerate-fg-extrapolation-vulkan-graphics-accelerate-fg-extrapolation-vulkan-md-0f0.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_extrapolation_graphics_accelerate_fg_extrapolation_vulkan_graphics_accelerate_fg_extrapolation_vulkan_md_0f0_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-vulkan/graphics-accelerate-fg-extrapolation-vulkan","title":"Vulkan平台","description":"业务流程","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-vulkan/graphics-accelerate-fg-extrapolation-vulkan.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-vulkan","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-vulkan/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-vulkan/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Vulkan平台","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-extrapolation-vulkan","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"OpenGL ES平台","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-gles/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-mv/graphics-accelerate-fg-mv-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-vulkan/graphics-accelerate-fg-extrapolation-vulkan.md


const frontMatter = {
	title: 'Vulkan平台',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-extrapolation-vulkan',
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
      children: "基于Vulkan图形API平台，超帧外插模式的主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(243876)/* ["default"] */.A) + "",
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
        }), "接口创建超帧上下文实例。如超帧上下文实例创建失败，则无需进入步骤6到步骤9的真实帧、预测帧交替渲染送显的循环流程，只需逐帧对场景进行渲染送显即可。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用接口配置超帧实例属性。包括调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setalgorithmmode_vk",
          children: "HMS_FG_SetAlgorithmMode_VK"
        }), "（必选）设置超帧算法模式并选择外插模式；调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setresolution_vk",
          children: "HMS_FG_SetResolution_VK"
        }), "（必选）设置超帧输入输出图像分辨率；调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setcvvzsemantic_vk",
          children: "HMS_FG_SetCvvZSemantic_VK"
        }), "（可选）设置齐次裁剪空间Z/W范围及深度测试函数；调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setimageformat_vk",
          children: "HMS_FG_SetImageFormat_VK"
        }), "（可选）设置超帧输入输出图像格式；如果颜色缓冲区相对深度模板缓冲区基于y轴翻转180度，则调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setdepthstencilydirectioninverted_vk",
          children: "HMS_FG_SetDepthStencilYDirectionInverted_VK"
        }), "（可选）设置翻转状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_vk",
          children: "HMS_FG_Activate_VK"
        }), "接口激活超帧上下文实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk",
          children: "HMS_FG_CreateImage_VK"
        }), "接口创建真实渲染帧颜色缓冲区图像实例、深度模板缓冲区图像实例、预测帧缓冲区图像实例。该接口将游戏应用中的VkImage、VkImageView图像资源和超帧算法实现之间建立关联。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "渲染游戏场景绘制真实渲染帧，缓存真实帧颜色信息、深度信息和相机矩阵等信息，用于后续超帧预测。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "真实渲染帧绘制UI并送显。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk",
          children: "HMS_FG_Dispatch_VK"
        }), "接口并传入历史真实渲染帧颜色信息、深度信息、相机矩阵等信息，生成预测帧，并更新预测帧缓冲区。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "预测帧绘制UI并送显，跳转至步骤5继续执行，直到退出游戏场景。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述基于Vulkan图形API平台的超帧调用示例。详细代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/frame-generation-vulkan-samplecode-clientdemo-cpp",
        children: "图形开发Sample（超帧Vulkan）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用Graphics Accelerate Kit超帧头文件：frame_generation_vk.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引用超帧frame_generation_vk.h头文件\n#include <graphics_game_sdk/frame_generation_vk.h>\n"
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
          children: "调用超帧实例属性配置接口，超帧算法模式选择外插模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化超帧接口调用错误码\nFG_ErrorCode errorCode = FG_SUCCESS;\n\n// 超帧算法模式\nFG_AlgorithmModeInfo aInfo{};\naInfo.predictionMode = FG_PREDICTION_MODE_EXTRAPOLATION;                  // 外插模式\naInfo.meMode = FG_ME_MODE_BASIC;                                          // 运动估计基础模式\nerrorCode = HMS_FG_SetAlgorithmMode_VK(m_context, &aInfo);                // [必选] 设置超帧算法模式\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// 真实帧颜色缓冲区分辨率\nFG_Dimension2D inputColorResolution{};\ninputColorResolution.width = 1280;                                        // 真实帧颜色缓冲区图像宽度\ninputColorResolution.height = 720;                                        // 真实帧颜色缓冲区图像高度\n// 真实帧深度模板缓冲区分辨率\nFG_Dimension2D inputDepthStencilResolution{};\ninputDepthStencilResolution.width = 1280;                                 // 真实帧深度模板缓冲区图像宽度\ninputDepthStencilResolution.height = 720;                                 // 真实帧深度模板缓冲区图像高度\n// 预测帧分辨率\nFG_Dimension2D outputColorResolution{};\noutputColorResolution.width = 1280;                                       // 预测帧图像宽度\noutputColorResolution.height = 720;                                       // 预测帧图像高度\n// 超帧输入输出图像分辨率\nFG_ResolutionInfo rInfo{};\nrInfo.inputColorResolution = inputColorResolution;\nrInfo.inputDepthStencilResolution = inputDepthStencilResolution;\nrInfo.outputColorResolution = outputColorResolution;\nerrorCode = HMS_FG_SetResolution_VK(m_context, &rInfo);                    // [必选] 设置超帧输入输出图像分辨率\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// [可选] 设置齐次裁剪空间Z/W范围及深度测试模式，接口不调用时默认为FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z\nerrorCode = HMS_FG_SetCvvZSemantic_VK(m_context, FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// [可选] 设置超帧输入输出图像格式\nFG_ImageFormat_VK imageFormat{};\nimageFormat.inputColorFormat = VK_FORMAT_R8G8B8A8_UNORM;\nimageFormat.inputDepthStencilFormat = VK_FORMAT_D24_UNORM_S8_UINT;\nimageFormat.outputColorFormat = VK_FORMAT_R8G8B8A8_UNORM;\nerrorCode = HMS_FG_SetImageFormat_VK(m_context, &imageFormat);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// [可选] 当颜色缓冲区相对深度模板缓冲区基于y轴翻转180度时，设置第二个参数为true，接口不调用时默认为false\nerrorCode = HMS_FG_SetDepthStencilYDirectionInverted_VK(m_context, true);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
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
          }), "接口创建真实渲染帧颜色缓冲区图像实例、深度模板缓冲区图像实例、预测帧缓冲区图像实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 变量声明\nVkImage inputColorImage = VK_NULL_HANDLE;\nVkImageView inputColorImageView = VK_NULL_HANDLE;\nVkImage inputDepthStencilImage = VK_NULL_HANDLE;\nVkImageView inputDepthStencilImageView = VK_NULL_HANDLE;\nVkImage outputColorImage = VK_NULL_HANDLE;\nVkImageView outputColorImageView = VK_NULL_HANDLE;\n\n// 创建真实帧颜色缓冲区图像实例\nFG_Image_VK* inputColor = HMS_FG_CreateImage_VK(m_context, inputColorImage, inputColorImageView);\nif (!inputColor) {\n    return false;\n}\n// 创建真实帧深度模板缓冲区图像实例\nFG_Image_VK* inputDepthStencil = HMS_FG_CreateImage_VK(m_context, inputDepthStencilImage, inputDepthStencilImageView);\nif (!inputDepthStencil) {\n    return false;\n}\n// 创建预测帧缓冲区图像实例\nFG_Image_VK* outputColor = HMS_FG_CreateImage_VK(m_context, outputColorImage, outputColorImageView);\nif (!outputColor) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏运行中，真实帧和预测帧交替渲染并送显。渲染真实帧时，缓存颜色信息、深度信息和相机矩阵等属性信息。渲染预测帧时，需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk",
            children: "HMS_FG_Dispatch_VK"
          }), "接口并传入上一帧真实帧属性信息，指定预测帧缓冲区索引，生成预测帧，最终更新预测帧缓冲区内存。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 帧计数\nuint32_t frameNum = 0;\n\n// 帧循环\nwhile (true) {\n    frameNum += 1;\n    if ((frameNum & 1) != 0) { // 真实帧渲染阶段\n        // 渲染当前帧渲染画面，缓存颜色、深度、相机矩阵等信息，用于下一帧预测帧生成\n        // ...\n\n        // 绘制真实帧\n        // ...\n\n        // 绘制UI\n        // ...\n\n        // 送显真实帧\n        // ...\n    } else { // 预测帧渲染阶段\n        // 设置预测帧生成前真实帧颜色缓冲区同步状态\n        FG_ImageSync_VK inputColorInitImageSync{};\n        inputColorInitImageSync.stages = VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT;\n        inputColorInitImageSync.layout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL;\n        inputColorInitImageSync.accessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;\n\n        // 设置预测帧生成后真实帧颜色缓冲区同步状态\n        FG_ImageSync_VK inputColorFinalImageSync{};\n        inputColorFinalImageSync.stages = VK_PIPELINE_STAGE_TRANSFER_BIT;\n        inputColorFinalImageSync.layout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;\n        inputColorFinalImageSync.accessMask = VK_ACCESS_TRANSFER_READ_BIT;\n\n        // 创建真实帧颜色缓冲区图像属性实例\n        FG_ImageInfo_VK inputColorImageInfo{};\n        inputColorImageInfo.image = inputColor;\n        inputColorImageInfo.initialSync = inputColorInitImageSync;\n        inputColorImageInfo.finalSync = inputColorFinalImageSync;\n\n        // 设置预测帧生成前深度模板缓冲区同步状态\n        FG_ImageSync_VK depthInitImageSync{};\n        depthInitImageSync.stages = VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT;\n        depthInitImageSync.layout = VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL;\n        depthInitImageSync.accessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;\n\n        // 设置预测帧生成后深度模板缓冲区同步状态\n        FG_ImageSync_VK depthFinalImageSync{};\n        depthFinalImageSync.stages = VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT;\n        depthFinalImageSync.layout = VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL;\n        depthFinalImageSync.accessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT;\n\n        // 创建真实帧深度模板缓冲区图像属性实例\n        FG_ImageInfo_VK depthImageInfo{};\n        depthImageInfo.image = inputDepthStencil;\n        depthImageInfo.initialSync = depthInitImageSync;\n        depthImageInfo.finalSync = depthFinalImageSync;\n\n        // 设置预测帧生成前预测帧缓冲区同步状态\n        FG_ImageSync_VK outputColorInitImageSync{};\n        outputColorInitImageSync.stages = VK_PIPELINE_STAGE_ALL_GRAPHICS_BIT;\n        outputColorInitImageSync.layout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL;\n        outputColorInitImageSync.accessMask = VK_ACCESS_SHADER_WRITE_BIT;\n\n        // 设置预测帧生成后预测帧缓冲区同步状态\n        FG_ImageSync_VK outputColorFinalImageSync{};\n        outputColorFinalImageSync.stages = VK_PIPELINE_STAGE_TRANSFER_BIT;\n        outputColorFinalImageSync.layout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;\n        outputColorFinalImageSync.accessMask = VK_ACCESS_TRANSFER_READ_BIT;\n\n        // 创建预测帧缓冲区图像属性实例\n        FG_ImageInfo_VK outputColorImageInfo{};\n        outputColorImageInfo.image = outputColor;\n        outputColorImageInfo.initialSync = outputColorInitImageSync;\n        outputColorImageInfo.finalSync = outputColorFinalImageSync;\n\n        // 帧生成属性配置结构体\n        FG_DispatchDescription_VK dispatchDescription{};\n        // 传入真实渲染帧颜色缓冲区属性信息\n        dispatchDescription.inputColorInfo = inputColorImageInfo;\n        // 传入真实渲染帧深度模板缓冲区属性信息\n        dispatchDescription.inputDepthStencilInfo = depthImageInfo;\n        // 传入预测帧缓冲区属性信息\n        dispatchDescription.outputColorInfo = outputColorImageInfo;\n\n        // 变量声明\n        FG_Mat4x4 preViewProj;\n        FG_Mat4x4 preInvViewProj;\n        VkCommandBuffer vkCommandBuffer = VK_NULL_HANDLE;\n\n        // 传入上一帧真实渲染帧视图投影矩阵\n        dispatchDescription.viewProj = preViewProj;\n        // 传入上一帧真实渲染帧视图投影逆矩阵\n        dispatchDescription.invViewProj = preInvViewProj;\n        // 传入用于录入超帧绘制指令的命令缓冲区句柄\n        dispatchDescription.vkCommandBuffer = vkCommandBuffer;\n        // 传入当前帧序号\n        dispatchDescription.frameIdx = 0;\n\n        // 生成预测帧，更新预测帧缓冲区的内存\n        errorCode = HMS_FG_Dispatch_VK(m_context, &dispatchDescription);\n        if (errorCode != FG_SUCCESS) {\n            return false;\n        }\n\n        switch (errorCode) {\n            case FG_SUCCESS: {\n                // 绘制预测帧\n                // ...\n\n                // 绘制UI\n                // ...\n\n                // 送显预测帧\n                // ...\n                break;\n            }\n            case FG_COLLECTING_PREVIOUS_FRAMES:\n                // 传入真实帧数量未达到固定阈值，无预测帧生成，外插模式传入真实帧数量<3时返回该状态码，此时不要将预测帧送显\n                break;\n            default:\n                // 预测帧生成失败\n                return false;\n        }\n    }\n}\n"
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
243876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799060-9a0a58535b3fd319983284aef3958d52.png");

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