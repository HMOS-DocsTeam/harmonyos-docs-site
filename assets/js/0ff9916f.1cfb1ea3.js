"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["247709"], {
858826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_adaptive_vrs_xengine_kit_adaptive_vrs_md_0ff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-adaptive-vrs-xengine-kit-adaptive-vrs-md-0ff.json
var site_docs_xengine_kit_guide_xengine_kit_adaptive_vrs_xengine_kit_adaptive_vrs_md_0ff_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-adaptive-vrs/xengine-kit-adaptive-vrs","title":"自适应VRS","description":"XEngine Kit提供自适应VRS功能，其通过合理分配画面的计算资源，视觉无损降低渲染频次，使不同的渲染图像使用不同的渲染速率，能够有效提高渲染性能。","source":"@site/docs/xengine-kit-guide/xengine-kit-adaptive-vrs/xengine-kit-adaptive-vrs.md","sourceDirName":"xengine-kit-guide/xengine-kit-adaptive-vrs","slug":"/xengine-kit-guide/xengine-kit-adaptive-vrs/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-adaptive-vrs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"自适应VRS","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-adaptive-vrs","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"空域AI超分","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-ai-spatial-upscaling/"},"next":{"title":"Subpass Shading","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-subpass-shading/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-adaptive-vrs/xengine-kit-adaptive-vrs.md


const frontMatter = {
	title: '自适应VRS',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-adaptive-vrs',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '自适应VRS';

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
  "value": "集成自适应VRS功能（OpenGL ES）",
  "id": "集成自适应vrs功能opengl-es",
  "level": 3
}, {
  "value": "集成自适应VRS功能（Vulkan）",
  "id": "集成自适应vrs功能vulkan",
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
        id: "自适应vrs",
        children: "自适应VRS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit提供自适应VRS功能，其通过合理分配画面的计算资源，视觉无损降低渲染频次，使不同的渲染图像使用不同的渲染速率，能够有效提高渲染性能。"
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
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于OpenGL ES，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring",
            children: "HMS_XEG_GetString"
          }), "扩展特性查询接口进行查询，如查询结果包含", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_extension_name",
            children: "XEG_ADAPTIVE_VRS_EXTENSION_NAME"
          }), "，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为自适应VRS设置接口，如需使用更丰富的设置和查询接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_AdaptiveVRSParameter (GLenum pname, GLvoid * param)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自适应VRS的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_DispatchAdaptiveVRS (GLfloat * reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算着色率图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GL_APICALL void GL_APIENTRY HMS_XEG_ApplyAdaptiveVRS (GLuint shadingRateImage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将着色率图像应用到渲染目标中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t * pPropertyCount, XEG_ExtensionProperties * pProperties)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine Vulkan扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateAdaptiveVRS (VkDevice device, XEG_AdaptiveVRSCreateInfo * pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS * pXegAdaptiveVRS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XEG_AdaptiveVRS对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdDispatchAdaptiveVRS (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription * pXegAdaptiveVRSDescription)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行计算自适应可变着色率命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyAdaptiveVRS (XEG_AdaptiveVRS xegAdaptiveVRS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XEG_AdaptiveVRS对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面是基于GLES图形API平台集成自适应VRS的主要业务流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(554475)/* ["default"] */.A) + "",
            width: "600",
            height: "454"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_GetString接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含自适应VRS时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此时调用HMS_XEG_AdaptiveVRSParameter接口配置超分参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，游戏渲染当前帧纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在使用自适应VRS特性的阶段前，调用HMS_XEG_DispatchAdaptiveVRS接口计算着色率图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_ApplyAdaptiveVRS将着色率图像应用到渲染目标中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏渲染剩下的纹理，如UI等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，超分资源会自行释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面是基于Vulkan图形API平台集成自适应VRS的主要业务流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(435802)/* ["default"] */.A) + "",
            width: "600",
            height: "494"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_EnumerateDeviceExtensionProperties接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含自适应VRS时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此时调用HMS_XEG_CreateAdaptiveVRS接口创建自适应VRS实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用自适应VRS特性时，需要创建能够支持VRS的vulkan资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，游戏渲染当前帧纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_CmdDispatchAdaptiveVRS计算着色率图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将着色率图像应用到渲染目标中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "渲染剩下的游戏纹理，如UI等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，调用HMS_XEG_DestroyAdaptiveVRS接口销毁自适应VRS实例。"
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
          children: "按需引用XEngine的头文件，如使用OpenGL ES自适应VRS功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include <cstdlib>\n#include <xengine/xeg_gles_extension.h>\n#include <xengine/xeg_gles_adaptive_vrs.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需引用XEngine的头文件，如使用Vulkan自适应VRS功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <string>\n#include <vector>\n#include <algorithm>\n#include <xengine/xeg_vulkan_extension.h>\n#include <xengine/xeg_vulkan_adaptive_vrs.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需引用XEngine的CMakeLists，如使用OpenGL ES自适应VRS功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-gles-demo-cpp",
            children: "Demo（GPU加速引擎-GLES）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\nfind_library(\n    # Sets the name of the path variable.\n    EGL-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    EGL\n)\nfind_library(\n    # Sets the name of the path variable.\n    GLES-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    GLESv3\n)\n\ntarget_link_libraries(nativerender PUBLIC\n${EGL-lib} ${GLES-lib} ${xengine-lib})\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需引用XEngine的CMakeLists，如使用Vulkan自适应VRS功能，CMakeLists.txt部分示例代码如下，完整示例代码请参见", (0,jsx_runtime.jsx)(_components.a, {
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
      id: "集成自适应vrs功能opengl-es",
      children: "集成自适应VRS功能（OpenGL ES）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自适应VRS功能OpenGL ES版本的着色率纹理创建和绑定由特性提供的接口实现。"
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
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_extension_name",
            children: "XEG_ADAPTIVE_VRS_EXTENSION_NAME"
          }), "扩展时才可以使用自适应VRS的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询XEngine支持的GLES扩展信息\nconst char* extensions = (const char*)HMS_XEG_GetString(XEG_EXTENSIONS);\n// 查询是否支持自适应VRS\nif (!strstr(extensions, XEG_ADAPTIVE_VRS_EXTENSION_NAME)) {\n    exit(1); // return error\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_adaptivevrsparameter",
            children: "HMS_XEG_AdaptiveVRSParameter"
          }), "接口，对自适应VRS的参数赋值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// renderWidth与renderHeight分别为用户自定义的渲染宽度与渲染高度，此处以800*600分辨率为例\nuint32_t renderWidth = 800;\nuint32_t renderHeight = 600;\n// inputSize为上一帧渲染管线最终渲染的图像尺寸，用户可自定义\nGLsizei inputSize[2] = {static_cast<GLsizei>(renderWidth), static_cast<GLsizei>(renderHeight)};\nHMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_INPUT_SIZE, inputSize);\n// inputRegion为上一帧渲染管线最终渲染的图像区域，用户可自定义\nGLuint inputRegion[4] = {0, 0, renderWidth, renderHeight};\nHMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_INPUT_REGION, inputRegion);\n// texelSizes为渲染的分片大小，用户可自定义，当前支持[8, 8]和[16, 16]两种规格\nGLsizei texelSizes[2] = {8, 8};\nHMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_TEXEL_SIZE, texelSizes);\n// sensitivity为控制生成着色率图像的阈值，用户可自定义，建议取值范围为[0, 1]\nGLfloat sensitivity = 0.15;\nHMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY, &sensitivity);\n// flip为判断是否执行图像上下翻转，为true表示不进行图像上下翻转，false则表示进行图像上下翻转，此处以false为例\nGLboolean flip = false;\nHMS_XEG_AdaptiveVRSParameter(XEG_ADAPTIVE_VRS_FLIP, &flip);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_dispatchadaptivevrs",
            children: "HMS_XEG_DispatchAdaptiveVRS"
          }), "接口计算着色率图像。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// inputColorImage为用户自定义上一帧渲染管线最终渲染结果颜色附件纹理\nGLuint inputColorImage;\n// inputDepthImage为用户自定义当前帧渲染管线最终渲染结果深度附件纹理\nGLuint inputDepthImage;\n// outputShadingRateImage为用户可自定义生成着色率图像信息的纹理\nGLuint outputShadingRateImage;\n// reprojectionMatrix为用户根据投影矩阵和观察矩阵计算得来的重投影矩阵\nfloat *reprojectionMatrix = nullptr;\nHMS_XEG_DispatchAdaptiveVRS(reprojectionMatrix, inputColorImage, inputDepthImage, outputShadingRateImage);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_applyadaptivevrs",
            children: "HMS_XEG_ApplyAdaptiveVRS"
          }), "接口，将着色率图像应用到渲染目标中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HMS_XEG_ApplyAdaptiveVRS(outputShadingRateImage);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成自适应vrs功能vulkan",
      children: "集成自适应VRS功能（Vulkan）"
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
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_extension_name",
            children: "XEG_ADAPTIVE_VRS_EXTENSION_NAME"
          }), "扩展时才可以使用自适应VRS的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// physicalDevice为Vulkan物理设备，用户需进行初始化\nVkPhysicalDevice physicalDevice;\n// 查询XEngine支持的Vulkan扩展列表\nstd::vector<std::string> supportedExtensions;\nuint32_t pPropertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount, nullptr);\nif (pPropertyCount > 0) {\n    std::vector<XEG_ExtensionProperties> pProperties(pPropertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &pPropertyCount, &pProperties.front()) == VK_SUCCESS) {\n        for (auto ext : pProperties) {\n            supportedExtensions.push_back(ext.extensionName);\n        }\n    }\n}\n// 查询是否支持自适应VRS\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_ADAPTIVE_VRS_EXTENSION_NAME) == supportedExtensions.end()) {\n   exit(1); // return error\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明实例句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XEG_AdaptiveVRS xeg_adaptiveVRS;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_createadaptivevrs",
            children: "HMS_XEG_CreateAdaptiveVRS"
          }), "接口，定义并创建实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// m_renderWidth与m_renderHeight分别为纹理采样宽高\nint m_renderWidth;\nint m_renderHeight;\n// VRS_TILE_SIZE为自适应VRS的渲染的分片大小\nint VRS_TILE_SIZE;\n// Vulkan逻辑设备，用户需进行初始化\nVkDevice device;\n// XEG_AdaptiveVRSCreateInfo为自适应VRS实例句柄对象的参数信息\nXEG_AdaptiveVRSCreateInfo xeg_createInfo;\n// XEG_AdaptiveVRSDescription为下发绘制着色率纹理命令所需参数信息\nXEG_AdaptiveVRSDescription xeg_description;\n// VkExtent2D inputSize为上一帧渲染管线最终渲染的图像尺寸，用户可自定义\nVkExtent2D inputSize;\ninputSize.width = m_renderWidth;\ninputSize.height = m_renderHeight;\n// VkRect2D为Vulkan指定的二维区域结构\n// inputRegion为自适应VRS输入纹理区域，用户可自定义\nVkRect2D inputRegion {};\n// inputRegion.extent.width与inputRegion.extent.height分别为纹理采样宽高\ninputRegion.extent.width = m_renderWidth;\ninputRegion.extent.height = m_renderHeight;\n// inputRegion.offset.x和inputRegion.offset.y为原点偏移量\ninputRegion.offset.x = 0;\ninputRegion.offset.y = 0;\n// xeg_createInfo.inputSize为上一帧渲染管线最终渲染的图像尺寸\nxeg_createInfo.inputSize = inputSize;\n// xeg_createInfo.inputRegion为上一帧渲染管线最终渲染的图像区域\nxeg_createInfo.inputRegion = inputRegion;\n// xeg_createInfo.adaptiveTileSize为自适应VRS的渲染的分片大小\nxeg_createInfo.adaptiveTileSize = VRS_TILE_SIZE;\n// xeg_createInfo.errorSensitivity为控制最终生成着色率纹理结果的阈值，此处以阈值为0.5为例\nxeg_createInfo.errorSensitivity = 0.5;\n// xeg_createInfo.flip为判断是否执行图像上下翻转，为true表示进行图像上下翻转，false则表示不进行图像上下翻转，此处以false为例\nxeg_createInfo.flip = false;\nHMS_XEG_CreateAdaptiveVRS(device, &xeg_createInfo, &xeg_adaptiveVRS);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmddispatchadaptivevrs",
            children: "HMS_XEG_CmdDispatchAdaptiveVRS"
          }), "接口，下发自适应VRS命令，生成perImage着色率纹理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// inputColorImageView为用户自定义的上一帧渲染管线最终渲染结果颜色附件纹理\nVkImageView inputColorImageView = VK_NULL_HANDLE;\n// inputDepthImageView为用户自定义的当前帧渲染管线最终渲染结果深度附件纹理\nVkImageView inputDepthImageView = VK_NULL_HANDLE;\n// outputShadingRateImage为用户自定义的生成着色率图信息的纹理\nVkImageView outputShadingRateImage = VK_NULL_HANDLE;\n// cmdBuff为命令缓冲区，用户需进行初始化\nVkCommandBuffer commandBuffer = VK_NULL_HANDLE ;\nxeg_description.inputColorImage = inputColorImageView;\nxeg_description.inputDepthImage = inputDepthImageView;\nxeg_description.outputShadingRateImage = outputShadingRateImage;\n // xeg_description.reprojectionMatrix为使用投影矩阵和观察矩阵计算而来的重投影矩阵\nxeg_description.reprojectionMatrix = nullptr;\nHMS_XEG_CmdDispatchAdaptiveVRS(commandBuffer, xeg_adaptiveVRS, &xeg_description);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyadaptivevrs",
            children: "HMS_XEG_DestroyAdaptiveVRS"
          }), "接口，卸载VRS实例，清理VRS相关资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HMS_XEG_DestroyAdaptiveVRS(xeg_adaptiveVRS);\n"
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
435802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958738-24beb157113b5a6feb1e3a3d4f48109a.jpg");

},
554475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438783-633c34857e6d919fccd8c9a71d1077b1.jpg");

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