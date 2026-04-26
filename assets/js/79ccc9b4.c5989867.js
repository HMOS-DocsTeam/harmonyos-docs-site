"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["558308"], {
293331(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_rt_shadow_and_ao_xengine_kit_rt_shadow_and_ao_md_79c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-rt-shadow-and-ao-xengine-kit-rt-shadow-and-ao-md-79c.json
var site_docs_xengine_kit_guide_xengine_kit_rt_shadow_and_ao_xengine_kit_rt_shadow_and_ao_md_79c_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-rt-shadow-and-ao/xengine-kit-rt-shadow-and-ao","title":"光线追踪阴影和环境光遮蔽","description":"从6.0.0(20) 版本开始，新增光线追踪阴影和环境光遮蔽特性。","source":"@site/docs/xengine-kit-guide/xengine-kit-rt-shadow-and-ao/xengine-kit-rt-shadow-and-ao.md","sourceDirName":"xengine-kit-guide/xengine-kit-rt-shadow-and-ao","slug":"/xengine-kit-guide/xengine-kit-rt-shadow-and-ao/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-shadow-and-ao/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"光线追踪阴影和环境光遮蔽","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-rt-shadow-and-ao","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"光线追踪反射","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-reflection/"},"next":{"title":"光线追踪全局光照","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-global-illumination/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-rt-shadow-and-ao/xengine-kit-rt-shadow-and-ao.md


const frontMatter = {
	title: '光线追踪阴影和环境光遮蔽',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-rt-shadow-and-ao',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '光线追踪阴影和环境光遮蔽';

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
  "value": "集成XEngine光线追踪阴影和环境光遮蔽（Vulkan）",
  "id": "集成xengine光线追踪阴影和环境光遮蔽vulkan",
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
        id: "光线追踪阴影和环境光遮蔽",
        children: "光线追踪阴影和环境光遮蔽"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) 版本开始，新增光线追踪阴影和环境光遮蔽特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine VisibleMask特性提供开箱即用的光线追踪阴影和环境光遮蔽（Ray-Traced Shadow and AO）渲染能力。相比于这些效果的传统光线追踪实现方式，依托于华为马良GPU的软硬结合优化，XEngine支持FERT(Flexible Entry Raytracing)求交加速技术，可以减少光线与场景几何的求交计算次数，从而降低实现高画质光追效果时的GPU负载。此外，XEngine通过高度优化的时空域降噪技术，解决光线追踪渲染时因为光线数量不足而引入的噪声问题，可以在发射较少光线数的情况下达成高画质表现，实现同等画质GPU负载更轻，同等负载下画质更好的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持的设备类型：此特性依赖设备支持Vulkan光线追踪扩展", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.vulkan.org/refpages/latest/refpages/source/VK_KHR_acceleration_structure.html",
            children: "VK_KHR_acceleration_structure"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.vulkan.org/refpages/latest/refpages/source/VK_KHR_ray_query.html",
            children: "VK_KHR_ray_query"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过以下方式查询相关扩展特性是否支持："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于Vulkan，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
            children: "HMS_XEG_EnumerateDeviceExtensionProperties"
          }), "扩展特性查询接口进行查询，如查询结果包含XEG_RT_SHADOW_AO_EXTENSION_NAME，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为使用光线追踪阴影和环境光遮蔽特性需要使用的接口，关于这些接口的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t * pPropertyCount, XEG_ExtensionProperties * pProperties)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine Vulkan扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTVisibleMask (VkDevice device, const void *pCreateInfo, XEG_RTVisibleMask *pRTVisibleMask)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XEG_RTVisibleMask对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTVisibleMask (VkCommandBuffer commandBuffer, XEG_RTVisibleMask rtVisibleMask, const void *pDescription)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制光线追踪VisibleMask渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTVisibleMask (XEG_RTVisibleMask rtVisibleMask)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XEG_RTVisibleMask对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752700)/* ["default"] */.A) + "",
        width: "600",
        height: "475"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏进入适用光线追踪阴影和环境光遮蔽效果的游戏场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在确认设备支持光线追踪扩展和XEG_RT_SHADOW_AO_EXTENSION_NAME扩展时，调用HMS_XEG_CreateRTVisibleMask接口创建实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏构建或更新场景的光线追踪加速结构"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在延迟渲染GBuffer渲染阶段后，调用HMS_XEG_CmdRenderRTVisibleMask接口计算阴影和环境光遮蔽贴图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在延迟渲染光照计算阶段，采样前一步生成的阴影和环境光遮蔽值，进行光照效果计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进行后续渲染流程，如后处理和UI渲染，完成一帧渲染后送显当前帧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户退出游戏场景时，游戏应用调用HMS_XEG_DestroyRTVisibleMask接口销毁XEngine实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章以在Vulkan应用程序延迟渲染管线中集成为例，说明使用XEngine光线追踪阴影和环境光遮蔽特性的开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置项目",
      children: "配置项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译HAP时，Native层so需要依赖NDK中的XEngine相关库和头文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "头文件引用"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <vector>\n#include <algorithm>\n#include <string>\n#include <xengine/xeg_vulkan_extension.h>\n#include <xengine/xeg_vulkan_rt_visible_mask.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt添加库依赖"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt中添加对XEngine动态链接库依赖的代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\ntarget_link_libraries(nativerender PUBLIC\n    ...... // 其他库文件\n    ${xengine-lib})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine光线追踪阴影和环境光遮蔽vulkan",
      children: "集成XEngine光线追踪阴影和环境光遮蔽（Vulkan）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XEngine VisibleMask特性的光线追踪阴影（Ray-Traced Shadow，简称RTShadow）和环境光遮蔽（Ray-Traced AO，简称RTAO）效果API需要与Vulkan API延迟渲染管线配合使用。相关代码在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用XEngine Kit特性接口前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/syscap/syscap#%E5%88%A4%E6%96%AD-api-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",
        children: "Syscap"
      }), "查询确认您的目标设备支持SystemCapability.Graphic.XEngine系统能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
            children: "HMS_XEG_EnumerateDeviceExtensionProperties"
          }), "接口，获取XEngine支持的扩展信息，只有在支持XEG_RT_SHADOW_AO_EXTENSION_NAME扩展时才可以使用光线追踪阴影和环境光遮蔽特性的接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// physicalDevice为当前应用程序的Vulkan物理设备，需用户进行初始化\nVkPhysicalDevice physicalDevice;\n// 查询XEngine支持的Vulkan扩展列表\nstd::vector<std::string> supportedExtensions;\nuint32_t propertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, nullptr);\nif (propertyCount > 0) {\n    std::vector<XEG_ExtensionProperties> properties(propertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, &properties.front())\n        == VK_SUCCESS) {\n        for (auto ext : properties) {\n            supportedExtensions.push_back(ext.extensionName);\n        }\n    }\n}\n// 查询是否支持XEngine光线追踪阴影和环境光遮蔽特性\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_RT_SHADOW_AO_EXTENSION_NAME)\n    == supportedExtensions.end()) {\n    exit(1);  // 不支持时处理错误\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_creatertvisiblemask",
            children: "HMS_XEG_CreateRTVisibleMask"
          }), "接口，创建实例句柄。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 声明实例句柄\nXEG_RTVisibleMask rtVisibleMask = VK_NULL_HANDLE;\n// RTShadow和RTAO初始化信息\nXEG_RTShadowAOCreateInfo createInfo;\ncreateInfo.sType = XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO;\ncreateInfo.pNext = nullptr;\n// GBuffer图像大小\ncreateInfo.rtInputGbufferSize = {1280, 720};\n// 输出的RTShadow和RTAO图像大小，需要与GBuffer等比例\ncreateInfo.rtShadowAOSize = {640, 360};\ncreateInfo.enableRTShadow = true;\ncreateInfo.enableRTAO = true;\n// 去噪器质量模式设置为平衡模式\ncreateInfo.denoiseMode = XEG_DENOISE_QUALITY_MODE_BALANCED;\n// 场景遍历模式设置为性能模式\ncreateInfo.traversalMode = XEG_TRAVERSAL_MODE_PERFORMANCES;\ncreateInfo.aoOnlyInShadow = false;\ncreateInfo.reverseZ = false;\n// device为当前应用程序的Vulkan设备对象，需用户进行初始化\nVkDevice device;\nif (HMS_XEG_CreateRTVisibleMask(device, &createInfo, &rtVisibleMask) != VK_SUCCESS) {\n    exit(1);  // 创建失败，进行错误处理\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtvisiblemask",
            children: "HMS_XEG_CmdRenderRTVisibleMask"
          }), "接口执行渲染命令，每帧都需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// RTShadow算法参数设置\nXEG_RTShadowParameters shadowParameters;\n// RTAO算法参数设置\nXEG_RTAOParameters aoParameters;\n// 去噪器参数设置\nXEG_RTShadowAODenoiserParameters denoiserParameters;\n// RTShadow和RTAO渲染输入信息\nXEG_RTShadowAODescription description;\n// 光线求交只考虑不透明物体\nconst uint32_t gl_RayFlagsOpaqueEXT = 1U;\n// 在找到第一个相交点时即停止光线求交查询\nconst uint32_t gl_RayFlagsTerminateOnFirstHitEXT = 4U;\nconst uint32_t rayFlags = (gl_RayFlagsOpaqueEXT | gl_RayFlagsTerminateOnFirstHitEXT) << 8;\n\nshadowParameters.rayTMax = 200.0f;\nshadowParameters.rayTMin = 1.0f;\nshadowParameters.sunDirection[0] = 0.1;\nshadowParameters.sunDirection[1] = 0.1;\nshadowParameters.sunDirection[2] = 0.1;\nshadowParameters.raySourceAngleInDegree = 0.35f;\nshadowParameters.shadowCullMask = rayFlags | 0xFF;\nshadowParameters.shadowCullDistance = 2000.0f;\n\naoParameters.rayTMax = 30.0f;\naoParameters.rayTMin = 0.1f;\naoParameters.aoIntensity = 0.8f;\naoParameters.aoNormalBias = 0.5f;\naoParameters.aoCullMask = rayFlags | 0xFF;\naoParameters.aoCullDistance = 2000.0f;\n\ndenoiserParameters.temporalBlendFactor = 0.75f;\ndenoiserParameters.positionConstantDistance = 5.0f;\ndenoiserParameters.spatialDenoiseTimes = 2;\ndenoiserParameters.ghostingAlpha = 0.5;\ndenoiserParameters.spatialNormalWeight = 0.0f;\ndenoiserParameters.spatialMaxKernelStep = 1;\n\ndescription.sType = XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION;\ndescription.pNext = nullptr;\ndescription.worldCameraOrigin[0] = 0.0; // 以相机实际位置的x坐标为准\ndescription.worldCameraOrigin[1] = 0.0; // 以相机实际位置的y坐标为准\ndescription.worldCameraOrigin[2] = 0.0; // 以相机实际位置的z坐标为准\n// gBufferDepth是GBuffer深度图像的VkImageView，需要用户进行初始化\nVkImageView gBufferDepth;\ndescription.inputDepthImage = gBufferDepth;\n// gBufferNormal是GBuffer法线图像的VkImageView，需要用户进行初始化，关于法线的格式和编码详见API参考\nVkImageView gBufferNormal;\ndescription.inputNormalImage = gBufferNormal;\n// outputShadowAOView是保存XEngine RTShadow和RTAO渲染输出的VkImageView，需要用户进行初始化\nVkImageView outputShadowAOView;\ndescription.outputShadowAOImage = outputShadowAOView;\n// sceneTlas是场景的Top Level光线追踪加速结构，需要用户进行初始化\nVkAccelerationStructureKHR sceneTlas;\ndescription.accelerationStructure = sceneTlas;\nfloat viewMatrix[16]; // 相机观察矩阵，需要用户进行初始化\nfloat projectionMatrix[16]; // 相机投影矩阵，需要用户进行初始化\nmemcpy(description.viewMatrix, viewMatrix, sizeof(viewMatrix));\nmemcpy(description.projectionMatrix, projectionMatrix, sizeof(projectionMatrix));\nVkCommandBuffer vkCommandBuffer; // Vulkan命令缓冲区，需要用户进行初始化\nVkResult ret = HMS_XEG_CmdRenderRTVisibleMask(vkCommandBuffer, rtVisibleMask, &description);\nif (ret != VK_SUCCESS) {\n    // 录制命令错误，进行错误处理\n}\n// 设置Pipeline Barrier以同步对RTShadow和RTAO渲染输出的读取\nVkImageMemoryBarrier imageMemoryBarrier;\nimageMemoryBarrier.sType = VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;\nimageMemoryBarrier.pNext = nullptr;\nimageMemoryBarrier.srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;\nimageMemoryBarrier.dstAccessMask = VK_ACCESS_COLOR_ATTACHMENT_READ_BIT; // 根据实际访问方式设置\nimageMemoryBarrier.oldLayout = VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL;\nimageMemoryBarrier.newLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;\nimageMemoryBarrier.srcQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;\nimageMemoryBarrier.dstQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;\nVkImage outputShadowAOImage; // outputShadowAO是保存RTShadow和RTAO渲染输出的VkImage，需要用户进行初始化\nimageMemoryBarrier.image = outputShadowAOImage;\nimageMemoryBarrier.subresourceRange = { VK_IMAGE_ASPECT_COLOR_BIT, 0, 1, 0, 1 };\nvkCmdPipelineBarrier(vkCommandBuffer,\n    VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,\n    VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT, // 根据实际访问stage设置\n    0, 0, nullptr, 0, nullptr, 1, &imageMemoryBarrier);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用RTShadow和RTAO输出的outputShadowAOImage贴图到光照计算过程中，计算着色点颜色时的Shader片段示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// lighting_pass.frag code\nlayout (binding = 0) uniform sampler2D textureRayTracingOutputShadowAO;\n\n// color为当前着色点不考虑阴影和环境光遮蔽时的颜色值\nvec3 color;\n// 用户的着色点颜色计算过程...\n// 应用RTShadow和RTAO至最终光照结果\nvec2 shadowAO = texture(textureRayTracingOutputShadowAO, TexCoords).xy;\nfloat shadow = shadowAO.x;\nfloat ao = shadowAO.y;\nvec3 finalColor = color * pow(ao, 2.0) * shadow; // finalColor为最终颜色值\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyrtvisiblemask",
            children: "HMS_XEG_DestroyRTVisibleMask"
          }), "接口销毁特性实例句柄以释放资源，在不需要再使用特性或应用退出时需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (rtVisibleMask != VK_NULL_HANDLE) {\n    HMS_XEG_DestroyRTVisibleMask(rtVisibleMask);\n}\n"
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
752700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958740-47994f203e3f49c1885d28a79d041a25.jpg");

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