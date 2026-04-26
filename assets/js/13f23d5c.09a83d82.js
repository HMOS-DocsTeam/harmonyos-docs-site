"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["750543"], {
462686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_ai_spatial_upscaling_xengine_kit_ai_spatial_upscaling_md_13f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-ai-spatial-upscaling-xengine-kit-ai-spatial-upscaling-md-13f.json
var site_docs_xengine_kit_guide_xengine_kit_ai_spatial_upscaling_xengine_kit_ai_spatial_upscaling_md_13f_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-ai-spatial-upscaling/xengine-kit-ai-spatial-upscaling","title":"空域AI超分","description":"XEngine Kit提供空域AI超分能力，基于单帧图像使用AI推理生成滤波参数进行超采样，通过GPU、NPU协同工作，实现比空域GPU超分更好的画质，建议超分倍率在1.5倍以下时使用。","source":"@site/docs/xengine-kit-guide/xengine-kit-ai-spatial-upscaling/xengine-kit-ai-spatial-upscaling.md","sourceDirName":"xengine-kit-guide/xengine-kit-ai-spatial-upscaling","slug":"/xengine-kit-guide/xengine-kit-ai-spatial-upscaling/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-ai-spatial-upscaling/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"空域AI超分","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-ai-spatial-upscaling","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"时域AI超分","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-ai-temporal-upscaling/"},"next":{"title":"自适应VRS","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-adaptive-vrs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-ai-spatial-upscaling/xengine-kit-ai-spatial-upscaling.md


const frontMatter = {
	title: '空域AI超分',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-ai-spatial-upscaling',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '空域AI超分';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "配置项目",
  "id": "配置项目",
  "level": 3
}, {
  "value": "集成XEngine空域AI超分（OpenGL ES）",
  "id": "集成xengine空域ai超分opengl-es",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "空域ai超分",
        children: "空域AI超分"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit提供空域AI超分能力，基于单帧图像使用AI推理生成滤波参数进行超采样，通过GPU、NPU协同工作，实现比空域GPU超分更好的画质，建议超分倍率在1.5倍以下时使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的设备类型：Phone，从5.1.0(18)版本开始新增支持Tablet、PC/2in1、TV设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过以下方式查询相关扩展特性是否支持："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于OpenGL ES，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring",
            children: "HMS_XEG_GetString"
          }), "扩展特性查询接口进行查询，如查询结果包含", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_neural_upscale_extension_name",
            children: "XEG_NEURAL_UPSCALE_EXTENSION_NAME"
          }), "，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为OpenGL ES空域AI超分设置接口，如需使用更丰富的设置和查询接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const GLubyte * HMS_XEG_GetString (GLenum name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine OpenGL ES扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_NeuralUpscaleParameter (GLenum pname, GLvoid * param)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空域AI超分输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_RenderNeuralUpscale (GLuint inputTexture)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域AI超分渲染命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面是基于GLES图形API平台集成空域GPU超分的主要业务流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(884200)/* ["default"] */.A) + "",
            width: "600",
            height: "469"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_GetString接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含空域AI超分时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化场景，空域AI超分的输入纹理需要使用OH_NativeBuffer来创建。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_NeuralUpscaleParameter接口配置超分参数，包含超分输入纹理对应的OH_NativeBuffer句柄。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏运行时，每帧先渲染待超分的纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_RenderNeuralUpscale接口执行超分，超分结果会写出到当前绑定的帧缓冲。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "渲染后续流程，如UI。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，释放游戏创建的资源，XEngine内部资源会自行释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章以OpenGL ES图像API集成为例，说明XEngine集成操作过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置项目",
      children: "配置项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译HAP时，Native层so编译需要依赖NDK中的libxengine.so。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "头文件引用"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include <cstdlib>\n#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <GLES2/gl2.h>\n#include <GLES2/gl2ext.h>\n#include <xengine/xeg_gles_extension.h>\n#include <xengine/xeg_gles_neural_upscale.h>\n#include <native_buffer/native_buffer.h>\n#include <native_window/external_window.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt部分示例代码如下，完整示例代码请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-gles-demo-cpp",
            children: "Demo（GPU加速引擎-GLES）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    native-buffer-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    native_buffer\n)\nfind_library(\n    # Sets the name of the path variable.\n    native-window-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    native_window\n)\nfind_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\nfind_library(\n    # Sets the name of the path variable.\n    EGL-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    EGL\n)\nfind_library(\n    # Sets the name of the path variable.\n    GLES-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    GLESv3\n)\n\ntarget_link_libraries(nativerender PUBLIC\n${EGL-lib} ${GLES-lib} ${xengine-lib} ${native-window-lib} ${native-buffer-lib})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine空域ai超分opengl-es",
      children: "集成XEngine空域AI超分（OpenGL ES）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Native层实现使用OpenGL ES和XEngine图形API搭建图像渲染管线并集成空域AI超分，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述OpenGL ES图形API的空域AI超分的使用，详细代码请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-gles-demo-cpp",
        children: "Demo（GPU加速引擎-GLES）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用XEngine Kit能力前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/syscap/syscap#%E5%88%A4%E6%96%AD-api-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",
        children: "Syscap"
      }), "查询您的目标设备是否支持SystemCapability.Graphic.XEngine系统能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring",
            children: "HMS_XEG_GetString"
          }), "接口，获取XEngine支持的扩展信息，只有在支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_neural_upscale_extension_name",
            children: "XEG_NEURAL_UPSCALE_EXTENSION_NAME"
          }), "扩展时才可以使用空域AI超分的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询XEngine支持的GLES扩展信息\nconst char* extensions = (const char*)HMS_XEG_GetString(XEG_EXTENSIONS);\n// 检查是否支持空域AI超分\nif (!strstr(extensions, XEG_NEURAL_UPSCALE_EXTENSION_NAME)) {\n    exit(1); // return error\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建输入纹理，并关联一个OH_NativeBuffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 渲染宽高和送显宽高均为用户自定义参数，这里以将800*600的分辨率进行1.5倍超分到1200*900的分辨率为例\nuint32_t renderWidth = 800;\nuint32_t renderHeight = 600;\nuint32_t displayWidth = 1200;\nuint32_t displayHeight = 900;\n// 获取函数指针\nPFNEGLCREATEIMAGEKHRPROC fp_eglCreateImageKHR = reinterpret_cast<PFNEGLCREATEIMAGEKHRPROC>(eglGetProcAddress(\"eglCreateImageKHR\"));\nPFNEGLDESTROYIMAGEKHRPROC fp_eglDestroyImageKHR = reinterpret_cast<PFNEGLDESTROYIMAGEKHRPROC>(eglGetProcAddress(\"eglDestroyImageKHR\"));\nPFNGLEGLIMAGETARGETTEXTURE2DOESPROC fp_glEGLImageTargetTexture2DOES = reinterpret_cast<PFNGLEGLIMAGETARGETTEXTURE2DOESPROC>(eglGetProcAddress(\"glEGLImageTargetTexture2DOES\"));\n// 创建OH_NativeBuffer\nOH_NativeBuffer_Config config = {};\nconfig.width = renderWidth;\nconfig.height = renderHeight;\nconfig.usage = NATIVEBUFFER_USAGE_CPU_READ | NATIVEBUFFER_USAGE_CPU_READ_OFTEN | NATIVEBUFFER_USAGE_HW_TEXTURE | NATIVEBUFFER_USAGE_HW_RENDER| NATIVEBUFFER_USAGE_ALIGNMENT_512;\nconfig.format = NATIVEBUFFER_PIXEL_FMT_RGBA_8888;\nOH_NativeBuffer* bufferHandle = OH_NativeBuffer_Alloc(&config);\nif (bufferHandle == nullptr) {\n    // 创建失败，用户可自定义错误处理\n}\nOHNativeWindowBuffer *nativeWindowBuffer = OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer(bufferHandle);\nEGLImageKHR eglImage = fp_eglCreateImageKHR(eglGetCurrentDisplay(), EGL_NO_CONTEXT, EGL_NATIVE_BUFFER_OHOS, static_cast<EGLClientBuffer>(nativeWindowBuffer), nullptr);\n// 创建超分输入纹理\nGLuint textureID;\nglGenTextures(1, &textureID);\nglBindTexture(GL_TEXTURE_2D, textureID);\n// 设置纹理环绕和过滤参数\nglTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);\nglTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);\nglTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);\nglTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);\n// 关联超分输入纹理和eglImage\nfp_glEGLImageTargetTexture2DOES(GL_TEXTURE_2D, eglImage);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在超分输入纹理上进行渲染。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GLuint fboID = 0;\nglGenFramebuffers(1, &fboID);\nglBindFramebuffer(GL_FRAMEBUFFER, fboID);\nglFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, textureID, 0);\nif (glCheckFramebufferStatus(GL_FRAMEBUFFER) != GL_FRAMEBUFFER_COMPLETE) {\n    // 创建framebuffer失败，用户可自定义错误处理\n}\nglViewport(0, 0, renderWidth, renderHeight);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_neuralupscaleparameter",
            children: "HMS_XEG_NeuralUpscaleParameter"
          }), "接口，设置空域AI超分的输入参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// sharpness为用户自定义超分锐化参数，此处以参数为0.3f为例\nfloat sharpness = 0.3f;\nHMS_XEG_NeuralUpscaleParameter(XEG_NEURAL_UPSCALE_SHARPNESS, &sharpness);\n// inputScissor为超分输入纹理的裁剪窗口参数\nGLuint inputScissor[4] = {0, 0, renderWidth, renderHeight};\nHMS_XEG_NeuralUpscaleParameter(XEG_NEURAL_UPSCALE_SCISSOR, inputScissor);\n// 设置超分输入纹理对应的OH_NativeBuffer句柄\nHMS_XEG_NeuralUpscaleParameter(XEG_NEURAL_UPSCALE_INPUT_HANDLE, bufferHandle);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_renderneuralupscale",
            children: "HMS_XEG_RenderNeuralUpscale"
          }), "接口执行空域AI超分。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 绑定绘制超分结果的帧缓冲，此处使用默认帧缓冲，也可使用用户自定义帧缓冲\nglBindFramebuffer(GL_FRAMEBUFFER, 0);\nglViewport(0, 0, displayWidth, displayHeight);\n// 执行空域AI超分\nHMS_XEG_RenderNeuralUpscale(textureID);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不需要进行超分渲染时，销毁相关资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "glDeleteFramebuffers(1, &fboID);\nglDeleteTextures(1, &textureID);\nif (eglImage != nullptr) {\n   fp_eglDestroyImageKHR(eglGetCurrentDisplay(), eglImage);\n}\nif (nativeWindowBuffer != nullptr) {\n   OH_NativeWindow_DestroyNativeWindowBuffer(nativeWindowBuffer);\n}\nif (bufferHandle != nullptr) {\n   OH_NativeBuffer_Unreference(bufferHandle);\n}\n"
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
884200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799088-ad6ca0107519930d32c96c34a3b2d520.jpg");

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