"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["884729"], {
363093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_gpu_spatial_upscaling_xengine_kit_gpu_spatial_upscaling_md_b3e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-gpu-spatial-upscaling-xengine-kit-gpu-spatial-upscaling-md-b3e.json
var site_docs_xengine_kit_guide_xengine_kit_gpu_spatial_upscaling_xengine_kit_gpu_spatial_upscaling_md_b3e_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-gpu-spatial-upscaling/xengine-kit-gpu-spatial-upscaling","title":"空域GPU超分","description":"XEngine Kit提供空域GPU超分能力，其基于单帧输入图像，使用空间邻域信息实现超采样，开销较小同时收益可观，建议使用超分倍率为[1.2, 1.5]。","source":"@site/docs/xengine-kit-guide/xengine-kit-gpu-spatial-upscaling/xengine-kit-gpu-spatial-upscaling.md","sourceDirName":"xengine-kit-guide/xengine-kit-gpu-spatial-upscaling","slug":"/xengine-kit-guide/xengine-kit-gpu-spatial-upscaling/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-gpu-spatial-upscaling/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"空域GPU超分","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-gpu-spatial-upscaling","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-preparations/"},"next":{"title":"时域AI超分","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-ai-temporal-upscaling/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-gpu-spatial-upscaling/xengine-kit-gpu-spatial-upscaling.md


const frontMatter = {
	title: '空域GPU超分',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-gpu-spatial-upscaling',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '空域GPU超分';

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
  "value": "集成XEngine空域GPU超分（OpenGL ES）",
  "id": "集成xengine空域gpu超分opengl-es",
  "level": 3
}, {
  "value": "集成XEngine空域GPU超分（Vulkan）",
  "id": "集成xengine空域gpu超分vulkan",
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
        id: "空域gpu超分",
        children: "空域GPU超分"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit提供空域GPU超分能力，其基于单帧输入图像，使用空间邻域信息实现超采样，开销较小同时收益可观，建议使用超分倍率为[1.2, 1.5]。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的设备类型：Phone，从5.0.2(14)版本开始，新增支持Tablet、PC/2in1设备，从5.1.0(18)版本开始新增支持TV设备。"
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
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatial_upscale_extension_name",
            children: "XEG_SPATIAL_UPSCALE_EXTENSION_NAME"
          }), "，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为OpenGL ES和Vulkan空域GPU超分设置接口，如需使用更丰富的设置和查询接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_SpatialUpscaleParameter (GLenum pname, GLvoid *param)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空域GPU超分输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_RenderSpatialUpscale (GLuint inputTexture)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域GPU超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, XEG_ExtensionProperties *pProperties)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine Vulkan扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateSpatialUpscale (VkDevice device, const XEG_SpatialUpscaleCreateInfo *pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale *pXegSpatialUpscale)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XEG_SpatialUpscale对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderSpatialUpscale (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription *pXegSpatialUpscaleDescription)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域GPU超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroySpatialUpscale (XEG_SpatialUpscale xegSpatialUpscale)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XEG_SpatialUpscale对象。"
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
            src: (__webpack_require__(973766)/* ["default"] */.A) + "",
            width: "600",
            height: "491"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_GetString接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含空域GPU超分时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_SpatialUpscaleParameter接口配置超分参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，游戏渲染待超分的当前帧纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当待超分纹理渲染完成时，调用HMS_XEG_RenderSpatialUpscale接口对待超分的纹理超分。"
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
          children: "下面是基于Vulkan图形API平台集成空域GPU超分的主要业务流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(664210)/* ["default"] */.A) + "",
            width: "600",
            height: "543"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_EnumerateDeviceExtensionProperties接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含空域GPU超分时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此时调用HMS_XEG_CreateSpatialUpscale接口创建超分实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，游戏渲染待超分的当前帧纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当待超分纹理渲染完成时，调用HMS_XEG_CmdRenderSpatialUpscale接口对待超分的纹理超分。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当超分渲染完成时，游戏渲染剩下的纹理，如UI等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，调用HMS_XEG_DestroySpatialUpscale接口销毁超分实例。"
      }), "\n"]
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
          children: "按需引用XEngine的头文件，如使用OpenGL ES空域GPU超分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include <cstdlib>\n#include <xengine/xeg_gles_extension.h>\n#include <xengine/xeg_gles_spatial_upscale.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需引用XEngine的头文件，如使用Vulkan空域GPU超分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <string>\n#include <vector>\n#include <algorithm>\n#include <xengine/xeg_vulkan_extension.h>\n#include <xengine/xeg_vulkan_spatial_upscale.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需引用XEngine的CMakeLists，如使用OpenGL ES空域GPU超分功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-gles-demo-cpp",
            children: "Demo（GPU加速引擎-GLES）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\nfind_library(\n    # Sets the name of the path variable.\n    EGL-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    EGL\n)\nfind_library(\n    # Sets the name of the path variable.\n    GLES-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    GLESv3\n)\n\ntarget_link_libraries(nativerender PUBLIC\n${EGL-lib} ${GLES-lib} ${xengine-lib})\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需引用XEngine的CMakeLists，如使用Vulkan空域GPU超分功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-vulkan-demo-cpp",
            children: "Demo（GPU加速引擎-Vulkan）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\nfind_library(\n    # Sets the name of the path variable.\n    Vulkan-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    vulkan\n)\n\ntarget_link_libraries(nativerender PUBLIC\n${Vulkan-lib} ${xengine-lib})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine空域gpu超分opengl-es",
      children: "集成XEngine空域GPU超分（OpenGL ES）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用EGL和OpenGL ES图形API搭建图像渲染管线并集成空域GPU超分在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述OpenGL ES图形API的空域GPU超分的使用，详细代码请参见", (0,jsx_runtime.jsx)(_components.a, {
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
          }), "接口，获取XEngine支持的扩展信息，只有在支持XEG_SPATIAL_UPSCALE_EXTENSION_NAME扩展时才可以使用空域GPU超分的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询XEngine支持的GLES扩展信息\nconst char* extensions = (const char*)HMS_XEG_GetString(XEG_EXTENSIONS);\n// 检查是否支持空域GPU超分\nif (!strstr(extensions, XEG_SPATIAL_UPSCALE_EXTENSION_NAME)) {\n    exit(1); // return error\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_spatialupscaleparameter",
            children: "HMS_XEG_SpatialUpscaleParameter"
          }), "接口，对空域GPU超分的参数赋值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// m_sharpness为用户自定义超分锐化参数，此处以参数为0.3f为例\nfloat m_sharpness = 0.3f;\n// m_renderWidth与m_renderHeight分别为用户自定义的渲染宽度与渲染高度，此处以800*600分辨率为例\nuint32_t m_renderWidth = 800;\nuint32_t m_renderHeight = 600;\nHMS_XEG_SpatialUpscaleParameter(XEG_SPATIAL_UPSCALE_SHARPNESS, &m_sharpness);\n// upscaleScissor为超分输入图像的采样区域\nint upscaleScissor[4] = {0, 0, static_cast<int>(m_renderWidth), static_cast<int>(m_renderHeight)};\nHMS_XEG_SpatialUpscaleParameter(XEG_SPATIAL_UPSCALE_SCISSOR, upscaleScissor);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_renderspatialupscale",
            children: "HMS_XEG_RenderSpatialUpscale"
          }), "接口进行超分。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// upscaleFBO为用户自定义创建的framebuffer\nunsigned int upscaleFBO;\nglBindFramebuffer(GL_FRAMEBUFFER, upscaleFBO);\n// m_upscaleWidth和m_upscaleHeight分别为用户自定义超分宽度和超分高度，此处以超分至1200*900分辨率为例\nuint32_t m_upscaleWidth = 1200;\nuint32_t m_upscaleHeight = 900;\nglViewport(0, 0, m_upscaleWidth, m_upscaleHeight);\nglScissor(0, 0, m_upscaleWidth, m_upscaleHeight);\n// upscaleColorBuffer为纹理附件，用户可自定义\nunsigned int upscaleColorBuffer;\nHMS_XEG_RenderSpatialUpscale(upscaleColorBuffer);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "upscaleFBO是已创建完成的framebuffer，并绑定纹理，超分接口调用后绘制到纹理上。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine空域gpu超分vulkan",
      children: "集成XEngine空域GPU超分（Vulkan）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Vulkan图形API搭建图像渲染管线并集成空域GPU超分在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述Vulkan图形API的空域GPU超分使用，详细代码请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-vulkan-demo-cpp",
        children: "Demo（GPU加速引擎-Vulkan）"
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
          }), "接口，获取XEngine支持的扩展信息，只有在支持XEG_SPATIAL_UPSCALE_EXTENSION_NAME扩展时才可以使用空域GPU超分的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// physicalDevice为Vulkan物理设备，用户需进行初始化\nVkPhysicalDevice physicalDevice;\n// 查询XEngine支持的Vulkan扩展列表\nstd::vector<std::string> supportedExtensions;\nuint32_t pPropertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount, nullptr);\nif (pPropertyCount > 0) {\n    std::vector<XEG_ExtensionProperties> pProperties(pPropertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount, &pProperties.front()) == VK_SUCCESS) {\n        for (auto ext : pProperties) {\n             supportedExtensions.push_back(ext.extensionName);\n         }\n    }\n}\n// 查询是否支持空域GPU超分\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_SPATIAL_UPSCALE_EXTENSION_NAME) == supportedExtensions.end()) {\n    exit(1); // return error\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明实例句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XEG_SpatialUpscale xegSpatialUpscale;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_createspatialupscale",
            children: "HMS_XEG_CreateSpatialUpscale"
          }), "接口，创建超分实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 渲染宽高和超分后宽高均为用户自定义参数，此处以将800*600分辨率超分至1200*900分辨率为例\nuint32_t m_renderWidth = 800;\nuint32_t m_renderHeight = 600;\nuint32_t m_upscaleWidth = 1200;\nuint32_t m_upscaleHeight = 900;\n// Vulkan逻辑设备，用户需进行初始化\nVkDevice device;\n// VkRect2D为Vulkan指定的二维区域结构\n// srcRect2D为超分输入纹理区域，用户可自定义\nVkRect2D srcRect2D;\n// srcRect2D.offset.x和srcRect2D.offset.y为原点偏移量\nsrcRect2D.offset.x = 0;\nsrcRect2D.offset.y = 0;\n// srcRect2D.extent.width与srcRect2D.extent.height为输入纹理宽高\nsrcRect2D.extent.width = m_renderWidth;\nsrcRect2D.extent.height = m_renderHeight;\n// dstRect2D为超分输出纹理区域，用户可自定义\nVkRect2D dstRect2D;\n// dstRect2D.offset.x和dstRect2D.offset.y为原点偏移量\ndstRect2D.offset.x = 0;\ndstRect2D.offset.y = 0;\n// dstRect2D.extent.width与dstRect2D.extent.height为超分纹理宽高\ndstRect2D.extent.width = m_upscaleWidth;\ndstRect2D.extent.height = m_upscaleHeight;\nXEG_SpatialUpscaleCreateInfo createInfo;\ncreateInfo.format = VK_FORMAT_R8G8B8A8_UNORM;\n// sharpness为用户自定义超分锐化参数，此处以参数为0.3f为例\ncreateInfo.sharpness = 0.3f;\ncreateInfo.outputSize = dstRect2D.extent;\ncreateInfo.inputRegion = srcRect2D;\ncreateInfo.outputRegion = dstRect2D;\ncreateInfo.inputSize = srcRect2D.extent;\nHMS_XEG_CreateSpatialUpscale(device, &createInfo, &xegSpatialUpscale);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderspatialupscale",
            children: "HMS_XEG_CmdRenderSpatialUpscale"
          }), "接口下发超分，每帧都需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// inputImageView为用户创建的超分输入图像的VkImageView\nVkImageView inputImageView = VK_NULL_HANDLE;\n// outputImageView为用户创建的超分输出图像的VkImageView\nVkImageView outputImageView = VK_NULL_HANDLE;\n// cmdBuff为命令缓冲区，用户需进行初始化\nVkCommandBuffer cmdBuff = VK_NULL_HANDLE ;\nXEG_SpatialUpscaleDescription xegDescription;\nxegDescription.inputImage = inputImageView;\nxegDescription.outputImage = outputImageView;\nHMS_XEG_CmdRenderSpatialUpscale(cmdBuff, xegSpatialUpscale, &xegDescription);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyspatialupscale",
            children: "HMS_XEG_DestroySpatialUpscale"
          }), "接口销毁实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HMS_XEG_DestroySpatialUpscale(xegSpatialUpscale);\n"
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
664210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438781-82c1a86711ebb7ce28273c997c1b7ae8.jpg");

},
973766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799086-36848e1065699dc3510649009e282d90.jpg");

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