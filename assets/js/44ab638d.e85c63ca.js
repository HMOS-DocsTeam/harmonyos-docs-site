"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["702248"], {
331173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_extrapolation_graphics_accelerate_fg_extrapolation_gles_graphics_accelerate_fg_extrapolation_gles_md_44a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-rendering-graphics-accelerate-fg-graphics-accelerate-fg-extrapolation-graphics-accelerate-fg-extrapolation-gles-graphics-accelerate-fg-extrapolation-gles-md-44a.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_extrapolation_graphics_accelerate_fg_extrapolation_gles_graphics_accelerate_fg_extrapolation_gles_md_44a_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-gles/graphics-accelerate-fg-extrapolation-gles","title":"OpenGL ES平台","description":"业务流程","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-gles/graphics-accelerate-fg-extrapolation-gles.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-gles","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-gles/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-gles/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"OpenGL ES平台","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-extrapolation-gles","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-overview/"},"next":{"title":"Vulkan平台","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-vulkan/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-extrapolation/graphics-accelerate-fg-extrapolation-gles/graphics-accelerate-fg-extrapolation-gles.md


const frontMatter = {
	title: 'OpenGL ES平台',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-extrapolation-gles',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'OpenGL ES平台';

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
        id: "opengl-es平台",
        children: "OpenGL ES平台"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于OpenGL ES图形API平台，超帧外插模式的主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3268)/* ["default"] */.A) + "",
        width: "965",
        height: "893"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户进入超帧适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createcontext_gles",
          children: "HMS_FG_CreateContext_GLES"
        }), "接口创建超帧上下文实例。如超帧上下文实例创建失败，则无需进入步骤5到步骤8的真实帧、预测帧交替渲染送显的循环流程，只需逐帧对场景进行渲染送显即可。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用接口配置超帧实例属性。包括调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setalgorithmmode_gles",
          children: "HMS_FG_SetAlgorithmMode_GLES"
        }), "（必选）设置超帧算法模式并选择外插模式；调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setresolution_gles",
          children: "HMS_FG_SetResolution_GLES"
        }), "（必选）设置超帧输入输出图像分辨率；调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setcvvzsemantic_gles",
          children: "HMS_FG_SetCvvZSemantic_GLES"
        }), "（可选）设置齐次裁剪空间Z/W范围及深度测试函数；调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setimageformat_gles",
          children: "HMS_FG_SetImageFormat_GLES"
        }), "（可选）设置真实渲染帧颜色缓冲区图像格式；如果颜色缓冲区相对深度模板缓冲区基于y轴翻转180度，则调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setdepthstencilydirectioninverted_gles",
          children: "HMS_FG_SetDepthStencilYDirectionInverted_GLES"
        }), "（可选）设置翻转状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_gles",
          children: "HMS_FG_Activate_GLES"
        }), "接口激活超帧上下文实例。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "渲染游戏场景绘制真实渲染帧，缓存真实帧颜色信息、深度信息和相机矩阵等信息，用于后续超帧预测。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "真实渲染帧绘制UI并送显。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
          children: "HMS_FG_Dispatch_GLES"
        }), "接口并传入历史真实渲染帧颜色信息、深度信息、相机矩阵等信息，生成预测帧，并更新预测帧缓冲区。当相机视图投影矩阵的平移分量非常大时（如超过10W），预测帧效果下降，画面易出现闪烁现象。此时可在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
          children: "HMS_FG_Dispatch_GLES"
        }), "接口调用前调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setextendedcamerainfo_gles",
          children: "HMS_FG_SetExtendedCameraInfo_GLES"
        }), "设置相机扩展信息，从而获取精度更高的预测帧效果。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "预测帧绘制UI并送显，跳转至步骤5继续执行，直到退出游戏场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户退出超帧适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroycontext_gles",
          children: "HMS_FG_DestroyContext_GLES"
        }), "接口销毁超帧上下文实例并释放内存资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(874604)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外插模式需要标记模板缓冲的第8位，用于区分静态物体和动态物体。静态物体所占区域的模板值需标记为0xxx xxxx，动态物体所占区域的模板值需标记为1xxx xxxx，模板缓冲的低7位模板值开发者可自行设置。如果标记错误或漏标记，可能会造成超帧预测效果不准确，如运动物体边缘区域拖影等现象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述基于OpenGL ES图形API平台的超帧调用示例。详细代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/frame-generation-gles-samplecode-clientdemo-cpp",
        children: "图形开发Sample（超帧GLES）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用Graphics Accelerate Kit超帧头文件：frame_generation_gles.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引用超帧frame_generation_gles.h头文件\n#include <graphics_game_sdk/frame_generation_gles.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    framegeneration-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    libframegeneration.so\n)\n\ntarget_link_libraries(entry PUBLIC\n    ${framegeneration-lib}\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createcontext_gles",
            children: "HMS_FG_CreateContext_GLES"
          }), "接口创建超帧上下文实例。如果返回nullptr，则说明超帧上下文实例创建失败，或当前硬件设备不支持开启超帧。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建超帧上下文实例\nFG_Context_GLES* context_ = HMS_FG_CreateContext_GLES();\nif (context_ == nullptr) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用超帧实例属性配置接口，超帧算法模式选择外插模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化超帧接口调用错误码\nFG_ErrorCode errorCode = FG_SUCCESS;\n\n// 超帧算法模式\nFG_AlgorithmModeInfo aInfo{};\naInfo.predictionMode = FG_PREDICTION_MODE_EXTRAPOLATION;                  // 外插模式\naInfo.meMode = FG_ME_MODE_BASIC;                                          // 运动估计基础模式\nerrorCode = HMS_FG_SetAlgorithmMode_GLES(context_, &aInfo);               // [必选] 设置超帧算法模式\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// 真实帧颜色缓冲区分辨率\nFG_Dimension2D inputColorResolution{};\ninputColorResolution.width = 1280;                                        // 真实帧颜色缓冲区图像宽度\ninputColorResolution.height = 720;                                        // 真实帧颜色缓冲区图像高度\n// 真实帧深度模板缓冲区分辨率\nFG_Dimension2D inputDepthStencilResolution{};\ninputDepthStencilResolution.width = 1280;                                 // 真实帧深度模板缓冲区图像宽度\ninputDepthStencilResolution.height = 720;                                 // 真实帧深度模板缓冲区图像高度\n// 预测帧分辨率\nFG_Dimension2D outputColorResolution{};\noutputColorResolution.width = 1280;                                       // 预测帧图像宽度\noutputColorResolution.height = 720;                                       // 预测帧图像高度\n// 超帧输入输出图像分辨率\nFG_ResolutionInfo rInfo{};\nrInfo.inputColorResolution = inputColorResolution;\nrInfo.inputDepthStencilResolution = inputDepthStencilResolution;\nrInfo.outputColorResolution = outputColorResolution;\nerrorCode = HMS_FG_SetResolution_GLES(context_, &rInfo);                  // [必选] 设置超帧输入输出图像分辨率\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// [可选] 设置齐次裁剪空间Z/W范围及深度测试模式，接口不调用时默认为FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z\nerrorCode = HMS_FG_SetCvvZSemantic_GLES(context_, FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// [可选] 设置真实渲染帧颜色缓冲区图像格式，接口不调用时默认为FG_FORMAT_R8G8B8A8_UNORM\nerrorCode = HMS_FG_SetImageFormat_GLES(context_, FG_FORMAT_R8G8B8A8_UNORM);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// [可选] 当颜色缓冲区相对深度模板缓冲区基于y轴翻转180度时，设置第二个参数为true，接口不调用时默认为无翻转\nerrorCode = HMS_FG_SetDepthStencilYDirectionInverted_GLES(context_, true);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_gles",
            children: "HMS_FG_Activate_GLES"
          }), "接口激活超帧上下文实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 激活超帧上下文实例\nerrorCode = HMS_FG_Activate_GLES(context_);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏运行中，真实渲染帧和预测帧交替渲染并送显。渲染真实帧时，缓存颜色信息、深度信息和相机矩阵等属性信息。渲染预测帧时，需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
            children: "HMS_FG_Dispatch_GLES"
          }), "接口并传入上一帧真实帧属性信息，指定预测帧缓冲区索引，生成预测帧，最终更新预测帧缓冲区内存。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 帧计数\nuint32_t frameNum = 0;\n// 帧生成属性配置结构体\nFG_DispatchDescription_GLES dispatchDescriptionData_ {\n    .inputColor = 0U,\n    .inputDepthStencil = 0U,\n    .viewProj{},\n    .invViewProj{},\n    .outputColor = 0U\n};\n\n// 变量声明\nuint32_t inputColor = 0;\nuint32_t inputDepthStencil = 0;\nuint32_t outputColor = 0;\nFG_Mat4x4 preViewProj;\nFG_Mat4x4 preInvViewProj;\n\n// 帧循环\nwhile (true) {\n    frameNum += 1;\n    if ((frameNum & 1) != 0) { // 真实帧渲染阶段\n        // 渲染当前帧渲染画面，缓存颜色、深度、相机矩阵等信息，用于下一帧预测帧生成\n        // ...\n\n        // 绘制真实帧\n        // ...\n\n        // 绘制UI\n        // ...\n\n        // 送显真实帧\n        // ...\n    } else { // 预测帧渲染阶段\n        // 传入上一帧真实渲染帧颜色缓冲区索引\n        dispatchDescriptionData_.inputColor = inputColor;\n        // 传入上一帧真实渲染帧深度模板缓冲区索引\n        dispatchDescriptionData_.inputDepthStencil = inputDepthStencil;\n        // 传入预测帧缓冲区索引\n        dispatchDescriptionData_.outputColor = outputColor;\n        // 传入上一帧真实渲染帧视图投影矩阵\n        dispatchDescriptionData_.viewProj = preViewProj;\n        // 传入上一帧真实渲染帧视图投影逆矩阵\n        dispatchDescriptionData_.invViewProj = preInvViewProj;\n        \n        // 生成预测帧，更新预测帧缓冲区的内存\n        errorCode = HMS_FG_Dispatch_GLES(context_, &dispatchDescriptionData_);\n\n        switch (errorCode) {\n            case FG_SUCCESS: {\n                // 绘制预测帧\n                // ...\n\n                // 绘制UI\n                // ...\n\n                // 送显预测帧\n                // ...\n                break;\n            }\n            case FG_COLLECTING_PREVIOUS_FRAMES:\n                // 传入真实帧数量未达到固定阈值，无预测帧生成，基础外插模式传入真实帧数量<3时返回该状态码，增强外插模式传入真实帧数量<2时返回该状态码，此时不要将预测帧送显\n                break;\n            default:\n                // 预测帧生成失败\n                return false;\n        }\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroycontext_gles",
            children: "HMS_FG_DestroyContext_GLES"
          }), "接口销毁超帧实例，释放内存资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁超帧上下文实例并释放内存资源\nerrorCode = HMS_FG_DestroyContext_GLES(&context_);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
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
3268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478709-400cd266e5c47a6a87bc8d1f487e9353.png");

},
874604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

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