"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["551702"], {
404801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_ai_temporal_upscaling_xengine_kit_ai_temporal_upscaling_md_39e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-ai-temporal-upscaling-xengine-kit-ai-temporal-upscaling-md-39e.json
var site_docs_xengine_kit_guide_xengine_kit_ai_temporal_upscaling_xengine_kit_ai_temporal_upscaling_md_39e_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-ai-temporal-upscaling/xengine-kit-ai-temporal-upscaling","title":"时域AI超分","description":"从6.0.0(20) 版本开始，新增支持OpenGL ES协议。","source":"@site/docs/xengine-kit-guide/xengine-kit-ai-temporal-upscaling/xengine-kit-ai-temporal-upscaling.md","sourceDirName":"xengine-kit-guide/xengine-kit-ai-temporal-upscaling","slug":"/xengine-kit-guide/xengine-kit-ai-temporal-upscaling/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-ai-temporal-upscaling/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"时域AI超分","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-ai-temporal-upscaling","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"空域GPU超分","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-gpu-spatial-upscaling/"},"next":{"title":"空域AI超分","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-ai-spatial-upscaling/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-ai-temporal-upscaling/xengine-kit-ai-temporal-upscaling.md


const frontMatter = {
	title: '时域AI超分',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-ai-temporal-upscaling',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '时域AI超分';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
  "value": "集成XEngine时域AI超分（OpenGL ES）",
  "id": "集成xengine时域ai超分opengl-es",
  "level": 3
}, {
  "value": "集成XEngine时域AI超分（Vulkan）",
  "id": "集成xengine时域ai超分vulkan",
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
        id: "时域ai超分",
        children: "时域AI超分"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) 版本开始，新增支持OpenGL ES协议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit提供时域AI超分能力，利用相机的抖动获取不同位置的采样信息，融合时域实现超采样率和超分辨率功能，并利用神经网络达到抗锯齿效果，建议超分倍率为[1.25, 2.0]。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面是基于GLES图形API平台集成时域AI超分的主要业务流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(417225)/* ["default"] */.A) + "",
            width: "600",
            height: "491"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_GetString接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含时域AI超分时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此时调用HMS_XEG_TemporalUpscaleParameter接口配置超分参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，游戏渲染待超分的当前帧纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当待超分纹理渲染完成时，即已经做完了带jitter的主pass渲染，准备好了depth，motion vector，color等输入纹理，此时调用HMS_XEG_RenderTemporalUpscale接口对待超分的纹理超分。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当超分渲染完成时，游戏渲染剩下的纹理，如UI等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，超分资源会自行释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面是基于Vulkan图形API平台集成时域AI超分的主要业务流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(19181)/* ["default"] */.A) + "",
            width: "600",
            height: "543"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_EnumerateDeviceExtensionProperties接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含时域AI超分时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此时调用HMS_XEG_CreateTemporalUpscale接口创建超分实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，游戏渲染待超分的当前帧纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当待超分纹理渲染完成时，即已经做完了带jitter的主pass渲染，准备好了depth，motion vector，color等输入纹理，此时调用HMS_XEG_CmdRenderTemporalUpscale接口对待超分的纹理超分。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当超分渲染完成时，游戏渲染剩下的纹理，如UI等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，调用HMS_XEG_DestroyTemporalUpscale接口销毁超分实例。"
      }), "\n"]
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
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["对于OpenGL ES，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), "扩展特性查询接口进行查询。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["对于Vulkan，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "扩展特性查询接口进行查询。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如查询结果包含", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporal_upscale_extension_name",
            children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
          }), "，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为OpenGL ES和Vulkan时域AI超分设置接口，如需使用更丰富的设置和查询接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_TemporalUpscaleParameter(GLenum pname, const GLvoid *param)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置时域AI超分输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_RenderTemporalUpscale(  GLuint inputTexture,  GLuint depthTexture,  GLuint motionVectorTexture,  GLuint dynamicMaskTexture,  GLfloat jitterX,  GLfloat jitterY  )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行时域AI超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t * pPropertyCount, XEG_ExtensionProperties * pProperties)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine Vulkan扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateTemporalUpscale (VkDevice device, XEG_TemporalUpscaleCreateInfo * pTemporalUpscaleInfo, XEG_TemporalUpscale * pTemporalUpscale)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XEG_TemporalUpscale对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderTemporalUpscale (VkCommandBuffer commandBuffer, XEG_TemporalUpscale temporalUpscale, XEG_TemporalUpscaleDescription * pDescription)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行时域AI超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyTemporalUpscale (XEG_TemporalUpscale temporalUpscale)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XEG_TemporalUpscale对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章以OpenGL ES和Vulkan图像API集成为例，说明XEngine集成操作过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置项目",
      children: "配置项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译HAP时，Native层so编译需要依赖NDK中的libxengine.so。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "头文件引用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需引用XEngine的头文件，如使用OpenGL ES时域AI超分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include <cstdlib>\n#include <xengine/xeg_gles_extension.h>\n#include <xengine/xeg_gles_temporal_upscale.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需引用XEngine的头文件，如使用Vulkan时域AI超分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <algorithm>\n#include <string>\n#include <vector>\n#include \"xengine/xeg_vulkan_temporal_upscale.h\"\n#include \"xengine/xeg_vulkan_extension.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需引用XEngine的CMakeLists，如使用OpenGL ES时域AI超分功能，CMakeLists.txt部分示例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\nfind_library(\n    # Sets the name of the path variable.\n    EGL-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    EGL\n)\nfind_library(\n    # Sets the name of the path variable.\n    GLES-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    GLESv3\n)\n\ntarget_link_libraries(nativerender PUBLIC\n${EGL-lib} ${GLES-lib} ${xengine-lib})\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需引用XEngine的CMakeLists，如使用Vulkan时域AI超分功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-vulkan-temporal-upscale-demo-cpp",
            children: "Demo（GPU加速引擎-Vulkan）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    hilog-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    hilog_ndk.z\n)\nfind_library(\n    # Sets the name of the path variable.\n    libace-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    ace_ndk.z\n)\nfind_library(\n    # Sets the name of the path variable.\n    libnapi-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    ace_napi.z\n)\nfind_library(\n    # Sets the name of the path variable.\n    libuv-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    uv\n)\nadd_library(libassimp SHARED IMPORTED)\nset_target_properties(\n        libassimp\n        PROPERTIES\n        IMPORTED_LOCATION\n        ${CMAKE_CURRENT_SOURCE_DIR}/libs/arm64-v8a/libassimp.so\n)\nfind_library(\n# Sets the name of the path variable.\nxengine-lib\n# Specifies the name of the NDK library that\n# you want CMake to locate.\nxengine\n)\ntarget_link_libraries(nativerender PUBLIC\n    ${hilog-lib} ${libace-lib} ${libnapi-lib} ${libuv-lib} libnative_window.so libc++.a libktx librawfile.z.so libassimp ${xengine-lib})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine时域ai超分opengl-es",
      children: "集成XEngine时域AI超分（OpenGL ES）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用EGL和OpenGL ES图形API搭建图像渲染管线并集成时域AI超分在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节阐述OpenGL ES图形API的时域AI超分的使用。"
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
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporal_upscale_extension_name",
            children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
          }), "扩展时才可以使用时域AI超分的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询XEngine支持的GLES扩展信息\nconst char* extensions = (const char*)HMS_XEG_GetString(XEG_EXTENSIONS);\n// 检查是否支持时域AI超分\nif (!strstr(extensions, XEG_TEMPORAL_UPSCALE_EXTENSION_NAME)) {\n    exit(1); // return error\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_temporalupscaleparameter",
            children: "HMS_XEG_TemporalUpscaleParameter"
          }), "接口，对时域AI超分的参数赋值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// m_lowResWidth与m_lowResHeight分别为用户自定义的渲染宽度与渲染高度，此处以800*600分辨率为例\nuint32_t m_lowResWidth = 800;\nuint32_t m_lowResHeight = 600;\n// 设置相机抖动的周期数，此处以8为例\nGLuint jitterNum = 8;\n\nGLsizei inputSize[2] = {static_cast<GLsizei>(m_lowResWidth), static_cast<GLsizei>(m_lowResHeight)};\n// 设置超分输入纹理的真实宽高\nHMS_XEG_TemporalUpscaleParameter(XEG_TEMPORAL_UPSCALE_INPUT_SIZE, inputSize);\n\nHMS_XEG_TemporalUpscaleParameter(XEG_TEMPORAL_UPSCALE_JITTER_NUM, &jitterNum);\n\n// 设置是否存在深度反转，此处为不存在深度反转\nGLboolean isDepthReversed = GL_FALSE;\nHMS_XEG_TemporalUpscaleParameter(XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED, &isDepthReversed);\n\n// 设置是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，并且当前帧开始使用超分的情况下建议设置为true\nGLboolean resetHistory = GL_TRUE;\nHMS_XEG_TemporalUpscaleParameter(XEG_TEMPORAL_UPSCALE_RESET_HISTORY, &resetHistory);\n\n// 设置画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。此处以0.5为例\nGLfloat steadyLevel = 0.5;\nHMS_XEG_TemporalUpscaleParameter(XEG_TEMPORAL_UPSCALE_STEADY_LEVEL, &steadyLevel);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_rendertemporalupscale",
            children: "HMS_XEG_RenderTemporalUpscale"
          }), "接口进行超分，每帧都需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，参数jitterX和jitterY分别为相机在X方向和Y方向的抖动，是一个类似Halton的低差异序列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本例使用Halton算法计算Jitter值：使用Halton算法生成一个[0, 1]的序列，再减去0.5使序列范围保持在[-0.5, 0.5]，最后除以输入图像的分辨率，得到UV坐标下的Jitter值。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "根据Halton算法生成每帧需要的相机抖动（Jitter）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// Halton算法示例\nfloat GetHaltonSequence(uint32_t index, uint32_t base) {\n    float result = 0.0;\n    float fraction = 1.0 / base;\n    while (index > 0) {\n        result += fraction * (index % base);\n        index /= base;\n        fraction /= base;\n    }\n    return result;\n}\n// 当前帧数，需要每帧+1，用于确定当前帧使用的Jitter值，使Jitter值在JitterNum范围内轮转\nuint64_t frameNum = 0;\n// jitterX与jitterY分别为相机在X和Y方向上的抖动\nfloat jitterX = 0.0;\nfloat jitterY = 0.0;\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 此处需要保证生成的低差异序列长度与jitterNum保持一致，且在[-0.5, 0.5]的范围内\njitterX = GetHaltonSequence((frameNum % jitterNum) + 1, 2) - 0.5;\njitterY = GetHaltonSequence((frameNum % jitterNum) + 1, 3) - 0.5;\n// m_lowResWidth与m_lowResHeight为步骤2中的输入图像的宽度和高度\njitterX = jitterX / m_lowResWidth;\njitterY = jitterY / m_lowResHeight;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用时域AI超分渲染接口。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 这里表示第一帧使用超分的情况下设置resetHistory为true，否则设置为false\nresetHistory = frameNum == 0 ? GL_TRUE : GL_FALSE;\nHMS_XEG_TemporalUpscaleParameter(XEG_TEMPORAL_UPSCALE_RESET_HISTORY, &resetHistory);\n\n// m_upscaleFBO为用户自定义创建的超分后的framebuffer\nunsigned int m_upscaleFBO;\nunsigned int m_highResWidth;\nunsigned int m_highResHeight;\nunsigned int m_lowLightColorTexture;\nunsigned int m_lowGboDepth;\nunsigned int m_motionVectorTexture, m_dynamicMaskTexture;\n\nglBindFramebuffer(GL_FRAMEBUFFER, m_upscaleFBO);\nglViewport(0, 0, m_highResWidth, m_highResHeight);\nglScissor(0, 0, m_highResWidth, m_highResHeight);\n\n// m_lowLightColorTexture为超分输入纹理。\n// m_lowGboDepth为深度纹理。\n// m_motionVectorTexture为运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。\n// m_dynamicMaskTexture为物体的动态遮罩图像，格式需要是GL_RED或其兼容格式。R通道的合法值为0.0、0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。\n// jitterX 相机在X方向上的抖动。\n// jitterY 相机在Y方向上的抖动。\nHMS_XEG_RenderTemporalUpscale(m_lowLightColorTexture, m_lowGboDepth, m_motionVectorTexture, m_dynamicMaskTexture,\n                              -0.5*jitterX, -0.5*jitterY);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine时域ai超分vulkan",
      children: "集成XEngine时域AI超分（Vulkan）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Vulkan图形API搭建图像渲染管线，并集成时域AI超分在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述Vulkan图形API的时域AI超分使用，详细代码请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-vulkan-temporal-upscale-demo-cpp",
        children: "Samplecode"
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
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
            children: "HMS_XEG_EnumerateDeviceExtensionProperties"
          }), "接口，获取XEngine支持的扩展信息，只有在支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporal_upscale_extension_name",
            children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
          }), "扩展时才可以使用时域AI超分的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// physicalDevice为Vulkan物理设备，用户需进行初始化\nVkPhysicalDevice physicalDevice;\n// 查询XEngine支持的Vulkan扩展列表\nstd::vector<std::string> supportedExtensions;\nuint32_t pPropertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount, nullptr);\nif (pPropertyCount > 0) {\n    std::vector<XEG_ExtensionProperties> pProperties(pPropertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount,\n        &pProperties.front()) == VK_SUCCESS) {\n        for (auto ext : pProperties) {\n            supportedExtensions.push_back(ext.extensionName);\n        }\n    }\n}\n// 查询是否支持时域AI超分\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_TEMPORAL_UPSCALE_EXTENSION_NAME) ==\n    supportedExtensions.end()) {\n    exit(1); // return error;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明实例句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XEG_TemporalUpscale xegTemporalUpscale;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_createtemporalupscale",
            children: "HMS_XEG_CreateTemporalUpscale"
          }), "接口，创建时域AI超分实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 渲染宽高和超分后宽高均为用户自定义参数，这里将以800*600的分辨率进行1.5倍超分到1200*900的分辨率为例\nuint32_t lowResWidth = 800;\nuint32_t lowResHeight = 600;\nuint32_t highResWidth = 1200;\nuint32_t highResHeight = 900;\nconst uint32_t jitterNum = 8;\n// Vulkan逻辑设备，用户需进行初始化\nVkDevice device;\n// XEG_TemporalUpscaleCreateInfo为创建XEG_TemporalUpscale对象所需信息\nXEG_TemporalUpscaleCreateInfo createInfo;\n// 指定输入图像的大小，即低分辨率图像的尺寸\ncreateInfo.inputSize = {lowResWidth, lowResHeight};\n// 指定输出图像的大小，即高分辨率图像的尺寸\ncreateInfo.outputSize = {highResWidth, highResHeight};\n// 指定输出图像的颜色格式\ncreateInfo.outputFormat = VK_FORMAT_R8G8B8A8_UNORM;\n// jitterNum为相机抖动的周期数\ncreateInfo.jitterNum = jitterNum;\n// 指定了深度值是否反转\ncreateInfo.isDepthReversed = true;\nVkResult res = HMS_XEG_CreateTemporalUpscale(device, &createInfo, &xegTemporalUpscale);\nif (res != VK_SUCCESS) {\n    exit(1); // return error;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrendertemporalupscale",
            children: "HMS_XEG_CmdRenderTemporalUpscale"
          }), "接口下发超分，每帧都需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，参数jitterX和jitterY分别为相机在X方向和Y方向的抖动，是一个类似Halton的低差异序列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本例使用Halton算法计算Jitter值：使用Halton算法生成一个[0, 1]的序列，再减去0.5使序列范围保持在[-0.5, 0.5]，最后除以输入图像的分辨率，得到UV坐标下的Jitter值。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "根据Halton算法生成每帧需要的相机抖动（Jitter）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// Halton算法示例\nfloat GetHaltonSequence(uint32_t index, uint32_t base) {\n    float result = 0.0;\n    float fraction = 1.0 / base;\n    while (index > 0) {\n        result += fraction * (index % base);\n        index /= base;\n        fraction /= base;\n    }\n    return result;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用时域AI超分渲染接口。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 当前帧数，需要每帧+1，用于确定当前帧使用的Jitter值，使Jitter值在JitterNum范围内轮转\nuint64_t frameNum = 0;\n// jitterX与jitterY分别为相机在X和Y方向上的抖动\nfloat jitterX = 0.0;\nfloat jitterY = 0.0;\n// 定义XEG_TemporalUpscaleDescription对象xegDescription\nXEG_TemporalUpscaleDescription xegDescription;\n// inputImageView为用户创建的超分输入图像的VkImageView\nVkImageView inputImageView = VK_NULL_HANDLE;\n// depthImageView为用户创建的深度图像的VkImageView\nVkImageView motionVectorImageView= VK_NULL_HANDLE;\n// motionVectorImageView为用户创建的运动矢量图像的VkImageView\nVkImageView depthImageView = VK_NULL_HANDLE;\n// dynamicMaskImageView为用户创建的物体动态遮罩图像的VkImageView\nVkImageView dynamicMaskImageView = VK_NULL_HANDLE;\n// outputImageView为用户创建的超分输出图像的VkImageView\nVkImageView outputImageView = VK_NULL_HANDLE;\n// commandBuffer为命令缓冲区，用户需进行初始化\nVkCommandBuffer commandBuffer = VK_NULL_HANDLE;\nxegDescription.inputImage = inputImageView;\nxegDescription.depthImage = depthImageView;\nxegDescription.motionVectorImage = motionVectorImageView;\nxegDescription.dynamicMaskImage = dynamicMaskImageView;\nxegDescription.outputImage = outputImageView;\n// 此处需要保证生成的低差异序列长度与jitterNum保持一致，且在[-0.5, 0.5]的范围内\njitterX = GetHaltonSequence((frameNum % jitterNum) + 1, 2) - 0.5;\njitterY = GetHaltonSequence((frameNum % jitterNum) + 1, 3) - 0.5;\n// lowResWidth与lowResHeight为步骤3中的输入图像的宽度和高度\njitterX = jitterX / lowResWidth;\njitterY = jitterY / lowResHeight;\nxegDescription.jitterX = -jitterX;\nxegDescription.jitterY = -jitterY;\n// resetHistory为选择是否重置历史帧数据，true表示重置，false则表示不重置，此处以true为例\nxegDescription.resetHistory = (frameNum == 0) ? true : false;\n// steadyLevel为画面偏向当前帧还是历史帧的平衡程度，取值范围为[0.0, 1.0]，此处以平衡程度为0.5为例\nxegDescription.steadyLevel = 0.5;\nHMS_XEG_CmdRenderTemporalUpscale(commandBuffer, xegTemporalUpscale, &xegDescription);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroytemporalupscale",
            children: "HMS_XEG_DestroyTemporalUpscale"
          }), "接口销毁实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (xegTemporalUpscale) {\n    HMS_XEG_DestroyTemporalUpscale(xegTemporalUpscale);\n}\n"
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
417225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958736-36848e1065699dc3510649009e282d90.jpg");

},
19181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478737-82c1a86711ebb7ce28273c997c1b7ae8.jpg");

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