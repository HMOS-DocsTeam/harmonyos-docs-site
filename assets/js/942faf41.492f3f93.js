"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["958089"], {
97370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_rt_global_illumination_xengine_kit_rt_global_illumination_md_942_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-rt-global-illumination-xengine-kit-rt-global-illumination-md-942.json
var site_docs_xengine_kit_guide_xengine_kit_rt_global_illumination_xengine_kit_rt_global_illumination_md_942_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-rt-global-illumination/xengine-kit-rt-global-illumination","title":"光线追踪全局光照","description":"从6.0.0(20) 版本开始，新增光线追踪全局光照特性。","source":"@site/docs/xengine-kit-guide/xengine-kit-rt-global-illumination/xengine-kit-rt-global-illumination.md","sourceDirName":"xengine-kit-guide/xengine-kit-rt-global-illumination","slug":"/xengine-kit-guide/xengine-kit-rt-global-illumination/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-global-illumination/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"光线追踪全局光照","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-rt-global-illumination","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"光线追踪阴影和环境光遮蔽","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-shadow-and-ao/"},"next":{"title":"高性能GPU排序","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-rt-global-illumination/xengine-kit-rt-global-illumination.md


const frontMatter = {
	title: '光线追踪全局光照',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-rt-global-illumination',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '光线追踪全局光照';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "应用场景",
  "id": "应用场景",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "DDGI开发步骤",
  "id": "ddgi开发步骤",
  "level": 2
}, {
  "value": "配置项目",
  "id": "配置项目",
  "level": 3
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 3
}, {
  "value": "集成XEngine RT DDGI（Vulkan）",
  "id": "集成xengine-rt-ddgivulkan",
  "level": 3
}, {
  "value": "NNGI开发步骤",
  "id": "nngi开发步骤",
  "level": 2
}, {
  "value": "配置项目",
  "id": "配置项目-1",
  "level": 3
}, {
  "value": "业务流程",
  "id": "业务流程-1",
  "level": 3
}, {
  "value": "集成XEngine RT NNGI（Vulkan）",
  "id": "集成xengine-rt-nngivulkan",
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
        id: "光线追踪全局光照",
        children: "光线追踪全局光照"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) 版本开始，新增光线追踪全局光照特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit提供端侧光线追踪全局光照（Ray-Traced Global Illumination，RTGI）能力，包含动态漫反射全局光照（DDGI）算法和神经网络全局光照（NNGI）算法。"
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
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过以下方式查询相关扩展特性是否支持："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于Vulkan，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
            children: "HMS_XEG_EnumerateDeviceExtensionProperties"
          }), "扩展特性查询接口进行查询，如查询结果包含XEG_RTGI_EXTENSION_NAME，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用场景",
      children: "应用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DDGI算法：根据视角中的探针信息，分帧更新探针光照，实现使用光线追踪实时渲染动态全局光照的效果。同时可与端云渲染相结合，利用端侧光追算力，计算动态全局光照，结合云侧下发的静态全局光照信息，实时生成高质量全场景光线追踪全局光照。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NNGI算法：结合了AI和光线追踪技术，通过非常小分辨率（例如64×32）对场景进行光线追踪渲染，然后将延迟渲染的几何数据和光追结果输入给NPU推理出整个场景的全局光照结果，从而实现少量光线即可实现全局光照效果。同时基于马良GPU的异构协同技术，NPU和GPU可以同时工作，降低整体时延。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为RTGI设置接口，如需使用更丰富的设置和查询接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, XEG_ExtensionProperties *pProperties)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine Vulkan扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTGI (VkDevice device, const void *pCreateInfo, XEG_RTGI *pRtGI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XEG_RTGI对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTGI (VkCommandBuffer commandBuffer, XEG_RTGI rtGI, const void *pDescription)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdSetSynchronization (VkCommandBuffer commandBuffer, const void *xegHandle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置同步信号，等待渲染结果写入指定图像。使用RTGI特性时，为等待GI渲染结果写入指定图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTGI (XEG_RTGI rtGI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XEG_RTGI对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ddgi开发步骤",
      children: "DDGI开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章以Vulkan图像API集成为例，说明XEngine集成操作过程。"
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
            children: "#include <algorithm>\n#include <string>\n#include <vector>\n#include <xengine/xeg_vulkan_rtgi.h>\n#include <xengine/xeg_vulkan_extension.h>\n#include <xengine/xeg_extension_defs.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt部分示例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\ntarget_link_libraries(ohosmain PUBLIC\n    ...... // 其他库文件\n    ${xengine-lib} RenderBehavior SceneLoader VulkanBase\n)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面是基于Vulkan图形API平台集成动态漫反射全局光照的主要业务流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(599325)/* ["default"] */.A) + "",
            width: "600",
            height: "472"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在使用动态漫反射全局光照特性前需要查询硬件平台是否支持光线追踪扩展。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_EnumerateDeviceExtensionProperties接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含动态漫反射全局光照特性时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建动态漫反射全局光照使用的创建信息，调用HMS_XEG_CmdRenderRTGI接口创建动态漫反射全局光照实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，渲染动态漫反射全局光照特性需要的纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_CmdRenderRTGI执行全局光照渲染任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_CmdSetSynchronization设置同步信号，等待渲染结果写入指定图像。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏使用全局光照纹理，进行其他的渲染任务，如UI等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，调用HMS_XEG_DestroyRTGI接口销毁动态漫反射全局光照实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine-rt-ddgivulkan",
      children: "集成XEngine RT DDGI（Vulkan）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Vulkan图形API搭建图像渲染管线，并集成RT DDGI在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节阐述Vulkan图形API的RT DDGI使用。"
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
          }), "接口，获取XEngine支持的扩展信息，只有在支持XEG_RTGI_EXTENSION_NAME扩展时才可以使用RT DDGI的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// physicalDevice为Vulkan物理设备，用户需进行初始化\nVkPhysicalDevice physicalDevice;\n// 查询XEngine支持的Vulkan扩展列表\nstd::vector<std::string> supportedExtensions;\nuint32_t propertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, nullptr);\nif (propertyCount> 0) {\n    std::vector<XEG_ExtensionProperties> properties(propertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount,\n        &properties.front()) == VK_SUCCESS) {\n        for (auto ext : properties) {\n            supportedExtensions.push_back(ext.extensionName);\n        }\n    }\n}\n// 查询是否支持RT DDGI\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_RTGI_EXTENSION_NAME) ==\n    supportedExtensions.end()) {\n    exit(1);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明实例句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XEG_RTGI xegRTGI;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_creatertgi",
            children: "HMS_XEG_CreateRTGI"
          }), "接口，创建RT DDGI实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 渲染宽高以及缩放倍率可以由用户设定，这里用1280*720为例，缩放倍率为1\nVkExtent2D outputSize;\noutputSize.width = 1280;\noutputSize.height = 720;\nVkExtent2D scaled;\nscaled.width = 1;\nscaled.height = 1;\n// Vulkan逻辑设备，用户需进行初始化\nVkDevice device;\n// XEG_DDGICreateInfo为创建XEG_RTGI对象所需信息\nstruct XEG_DDGICreateInfo DDGICreateInfo;\n// 指定当前结构体类型为create info\nDDGICreateInfo.sType = XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO;\n// 指定扩展为空\nDDGICreateInfo.pNext = nullptr;\n// 指定质量模式为平衡\nDDGICreateInfo.qualityMode = XEG_RTGI_QUALITY_MODE_BALANCED;\n// 指定当前场景中需要同时渲染的最大体积数量，范围为[1, 9]\nDDGICreateInfo.numberVolume = 4;\n// 指定渲染宽高缩小倍率，建议范围为[1, 4]，必须不小于1\nDDGICreateInfo.scaledView = scaled;\n// 指定输出GI图像的渲染宽高\nDDGICreateInfo.viewSize = outputSize;\n// 指定是否开启端云模式，true为开启，false为关闭\nDDGICreateInfo.enableCloud = false;\nVkResult res = HMS_XEG_CreateRTGI(device, &DDGICreateInfo, &xegRTGI);\nif (res != VK_SUCCESS) {\n    exit(1);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtgi",
            children: "HMS_XEG_CmdRenderRTGI"
          }), "接口执行渲染命令，每帧都需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// probeIrradianceSH为用户创建的存储探针光照二阶球谐系数的3D图像的VkImageView\n// 存储当前接口渲染结果，通过对该图像进行三线性插值采样，可以计算GI光照值\nVkImageView probeIrradianceSH = VK_NULL_HANDLE;\n// 定义XEG_DDGIVolumeEntryParameters对象DDGIVolumeEntryParameters\nstruct XEG_DDGIVolumeEntryParameters DDGIVolumeEntryParameters;\n// 体积索引，范围为[0, 65535]，且唯一\nDDGIVolumeEntryParameters.volumeIndex = 0;\n// 探针发射光线数量，范围为[1, 1024]\nDDGIVolumeEntryParameters.raysPerProbe = 128;\n// 光线求交最远距离\nDDGIVolumeEntryParameters.probeMaxRayDistance = 1000.0f;\n// 体积中心点坐标\nDDGIVolumeEntryParameters.volumePosition[0] = 0.0f;\nDDGIVolumeEntryParameters.volumePosition[1] = 0.0f;\nDDGIVolumeEntryParameters.volumePosition[2] = 0.0f;\n// 探针放置间距，必须大于0\nDDGIVolumeEntryParameters.probeSpacing[0] = 10.0f;\nDDGIVolumeEntryParameters.probeSpacing[1] = 10.0f;\nDDGIVolumeEntryParameters.probeSpacing[2] = 10.0f;\n// 体积光照通道标记\nDDGIVolumeEntryParameters.volumeLightingChannelMask = 0xFFFFFFFF;\n// 探针放置数量，必须大于0，范围为[1, 32]\nDDGIVolumeEntryParameters.volumeProbeGridCounts[0] = 6;\nDDGIVolumeEntryParameters.volumeProbeGridCounts[1] = 6;\nDDGIVolumeEntryParameters.volumeProbeGridCounts[2] = 6;\n// 光照的伽马校正系数，必须不为0\nDDGIVolumeEntryParameters.volumeProbeIrradianceEncodingGamma = 5.0f;\n// 探针光照历史权重，范围为[0, 1]\nDDGIVolumeEntryParameters.probeHysteresis = 0.95f;\n// 探针变化阈值\nDDGIVolumeEntryParameters.probeChangeThreshold = 1.0f;\n// 探针亮度阈值\nDDGIVolumeEntryParameters.probeBrightnessThreshold = 1.0f;\n// 探针法向偏移量\nDDGIVolumeEntryParameters.volumeNormalBias = 0.12f;\n// 探针视角偏移量\nDDGIVolumeEntryParameters.volumeViewBias = 0.48f;\n// 体积光照混合距离\nDDGIVolumeEntryParameters.volumeBlendDistance = 1.0;\n// 体积边缘光照渐暗范围\nDDGIVolumeEntryParameters.volumeBlendDistanceBlack = 1.0;\n// 探针反向判断阈值\nDDGIVolumeEntryParameters.probeBackfaceThreshold = 1.0;\n// 探针正向最小距离\nDDGIVolumeEntryParameters.probeMinFrontfaceDistance = 1.0;\n// 体积光照缩放倍率，必须非负\nDDGIVolumeEntryParameters.volumeIrradianceScalar = 1.0;\n// 发射光线强度倍率，必须非负\nDDGIVolumeEntryParameters.emissiveMultiplier = 1.0;\n// 光照倍率，必须非负\nDDGIVolumeEntryParameters.lightingMultiplier = 1.0;\n// 是否强制更新所有探针，true为强制全部更新，false为选择部分更新\nDDGIVolumeEntryParameters.bForceUpdate = false;\nDDGIVolumeEntryParameters.probeIrradianceSH = probeIrradianceSH;\n\n// 定义XEG_DDGIDescription对象DDGIDescription\nstruct XEG_DDGIDescription DDGIDescription;\n// inputNormalImage为用户创建的法线图像的VkImageView\nVkImageView inputNormalImage = VK_NULL_HANDLE;\n// inputDepthImage为用户创建的深度图像的VkImageView\nVkImageView inputDepthImage = VK_NULL_HANDLE;\n// inputBasecolorMetallicImage为用户创建的颜色及金属度图像的VkImageView\nVkImageView inputBasecolorMetallicImage = VK_NULL_HANDLE;\n// inputDirectionImage为用户创建的发射光线方向图像的VkImageView\nVkImageView inputDirectionImage = VK_NULL_HANDLE;\n// inputRayRadianceDistanceImage为用户创建的发射光线交点光照及距离图像的VkImageView\nVkImageView inputRayRadianceDistanceImage = VK_NULL_HANDLE;\n// inputRayHitNormalAndMetallicImage为用户创建的发射光线交点法线及金属度图像的VkImageView\nVkImageView inputRayHitNormalAndMetallicImage = VK_NULL_HANDLE;\n// inputVolumeIndexAndProbeIndex为用户创建的输入probe索引缓冲区VkBuffer\nVkBuffer inputVolumeIndexAndProbeIndex = VK_NULL_HANDLE;\n// outputVolumeIndexAndProbeIndex为用户创建的输出probe索引缓冲区VkBuffer\nVkBuffer outputVolumeIndexAndProbeIndex = VK_NULL_HANDLE;\n// outputProbeCount为用户创建的输出probe数量缓冲区VkBuffer\nVkBuffer outputProbeCount = VK_NULL_HANDLE;\n// outputGIImage为用户创建的全局光照图像的VkImageView\nVkImageView outputGIImage = VK_NULL_HANDLE;\n// commandBuffer为命令缓冲区，用户需进行初始化\nVkCommandBuffer commandBuffer = VK_NULL_HANDLE;\n// 指定当前结构体类型为DDGI description\nDDGIDescription.sType = XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION;\n// 指定扩展为空\nDDGIDescription.pNext = nullptr;\n// 设置相机相关矩阵\nfor (uint32_t i = 0; i < 16; ++i) {\n    DDGIDescription.viewMatrix[i] = 1.0f;\n    DDGIDescription.projectionMatrix[i] = 1.0f;\n}\nDDGIDescription.inputNormalImage = inputNormalImage;\nDDGIDescription.inputDepthImage = inputDepthImage;\nDDGIDescription.inputBasecolorMetallicImage = inputBasecolorMetallicImage;\nDDGIDescription.inputDirectionImage = inputDirectionImage;\nDDGIDescription.inputRayRadianceDistanceImage = inputRayRadianceDistanceImage;\nDDGIDescription.inputRayHitNormalAndMetallicImage = inputRayHitNormalAndMetallicImage;\nDDGIDescription.inputVolumeIndexAndProbeIndex = inputVolumeIndexAndProbeIndex;\n// 输入probe信息数量\nDDGIDescription.inputProbeCount = 10;\nDDGIDescription.outputVolumeIndexAndProbeIndex = outputVolumeIndexAndProbeIndex;\nDDGIDescription.outputProbeCount = outputProbeCount;\nDDGIDescription.outputGIImage = outputGIImage;\n// 使用的volume数量\nDDGIDescription.enableVolumeNumber = 1;\nDDGIDescription.pVolumeEntryParameters = &DDGIVolumeEntryParameters;\nHMS_XEG_CmdRenderRTGI(commandBuffer, xegRTGI, &DDGIDescription);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若使用延迟渲染管线，则可以在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtgi",
            children: "HMS_XEG_CmdRenderRTGI"
          }), "接口之后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdsetsynchronization",
            children: "HMS_XEG_CmdSetSynchronization"
          }), "接口，设置同步信号，等待GI渲染结果写入指定图像，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdsetsynchronization",
            children: "HMS_XEG_CmdSetSynchronization"
          }), "接口需要每帧调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// GI渲染结果会写入到XEG_DDGIDescription中的outputGIImage图像中\nHMS_XEG_CmdSetSynchronization(commandBuffer, &xegRTGI);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyrtgi",
            children: "HMS_XEG_DestroyRTGI"
          }), "接口销毁实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (xegRTGI) {\n    HMS_XEG_DestroyRTGI(xegRTGI);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nngi开发步骤",
      children: "NNGI开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章以Vulkan图像API集成为例，说明XEngine集成操作过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置项目-1",
      children: "配置项目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译HAP时，Native层so编译需要依赖NDK中的libxengine.so。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "头文件引用"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <algorithm>\n#include <string>\n#include <vector>\n#include \"xengine/xeg_vulkan_rtgi.h\"\n#include \"xengine/xeg_vulkan_extension.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt部分示例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\ntarget_link_libraries(nativerender PUBLIC\n    ...... // 其他库文件\n    ${xengine-lib})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "业务流程-1",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是基于Vulkan图形API平台集成神经网络全局光照的主要业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(148094)/* ["default"] */.A) + "",
        width: "600",
        height: "472"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在使用神经网络全局光照特性前需要查询硬件平台是否支持光线追踪扩展。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在进入游戏初始化场景时调用HMS_XEG_EnumerateDeviceExtensionProperties接口查询XEngine支持的特性，当查询接口返回支持的特性列表中包含神经网络全局光照特性时代表可以使用此特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建神经网络全局光照使用的创建信息，调用HMS_XEG_CmdRenderRTGI接口创建神经网络全局光照实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏运行时，渲染神经网络全局光照特性需要的纹理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_CmdRenderRTGI执行全局光照渲染任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HMS_XEG_CmdSetSynchronization执行训练任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏使用全局光照纹理，进行其他的渲染任务，如UI等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前帧已全部渲染完成，进行送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当游戏退出时，调用HMS_XEG_DestroyRTGI接口销毁神经网络全局光照实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine-rt-nngivulkan",
      children: "集成XEngine RT NNGI（Vulkan）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Vulkan图形API搭建图像渲染管线，并集成RT NNGI在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节阐述Vulkan图形API的RT NNGI使用。"
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
          }), "接口，获取XEngine支持的扩展信息，只有在支持XEG_RTGI_EXTENSION_NAME扩展时才可以使用RT NNGI的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// physicalDevice为Vulkan物理设备，用户需进行初始化\nVkPhysicalDevice physicalDevice;\n// 查询XEngine支持的Vulkan扩展列表\nstd::vector<std::string> supportedExtensions;\nuint32_t propertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, nullptr);\nif (propertyCount> 0) {\n    std::vector<XEG_ExtensionProperties> properties(propertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount,\n        &properties.front()) == VK_SUCCESS) {\n        for (auto ext : properties) {\n            supportedExtensions.push_back(ext.extensionName);\n        }\n    }\n}\n// 查询是否支持RT NNGI\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_RTGI_EXTENSION_NAME) ==\n    supportedExtensions.end()) {\n    exit(1);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明实例句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XEG_RTGI xegRTGI;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_creatertgi",
            children: "HMS_XEG_CreateRTGI"
          }), "接口，创建RT NNGI实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Vulkan逻辑设备，用户需进行初始化\nVkDevice device;\n// XEG_DDGICreateInfo为创建XEG_RTGI对象所需信息\nXEG_NNGICreateInfo NNGICreateInfo;\n// 指定当前结构体类型为create info\nNNGICreateInfo.sType = XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO;\n// 指定扩展为空\nNNGICreateInfo.pNext = nullptr;\n// 指定质量模式为平衡\nNNGICreateInfo.qualityMode = XEG_RTGI_QUALITY_MODE_BALANCED;\n// 指定推理输入图像的分辨率\nNNGICreateInfo.inferenceInputSize = {1280,720};\n// 指定推理输出图像的分辨率，当前仅支持（640，328）\nNNGICreateInfo.inferenceOutputSize = {640, 368};\n// 指定训练图像的分辨率\nNNGICreateInfo.trainingSize = {64, 32};\nVkResult res = HMS_XEG_CreateRTGI(device, &NNGICreateInfo, &xegRTGI);\nif (res != VK_SUCCESS) {\n    exit(1);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtgi",
            children: "HMS_XEG_CmdRenderRTGI"
          }), "接口执行渲染命令，每帧都需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义XEG_NNGIDescription对象NNGIDescription\nstruct XEG_NNGIDescription NNGIDescription;\n// inferenceInputDepthImage为用户创建的推理输入深度图像的VkImageView\nVkImageView inferenceInputDepthImage = VK_NULL_HANDLE;\n// inferenceInputNormalImage为用户创建的推理输入法向量图像的VkImageView\nVkImageView inferenceInputNormalImage = VK_NULL_HANDLE;\n// inferenceInputBaseColorMetallicImage为用户创建的推理输入基础颜色和金属度图像的VkImageView\nVkImageView inferenceInputBaseColorMetallicImage = VK_NULL_HANDLE;\n// inferenceOutputGIImage为用户创建的推理输出全局光照图像的VkImageView\nVkImageView inferenceOutputGIImage = VK_NULL_HANDLE;\n// trainingInputPositionImage为用户创建的训练输入位置图像的VkImageView\nVkImageView trainingInputPositionImage = VK_NULL_HANDLE;\n// trainingInputNormalImage为用户创建的训练输入法向量图像的VkImageView\nVkImageView trainingInputNormalImage = VK_NULL_HANDLE;\n// trainingInputBaseColorMetallicImage为用户创建的训练输入基础颜色和金属度图像的VkImageView\nVkImageView trainingInputBaseColorMetallicImage = VK_NULL_HANDLE;\n// trainingInputGIImage为用户创建的训练输入全局光照图像的VkImageView\nVkImageView trainingInputGIImage = VK_NULL_HANDLE;\n// sceneAabb为用户创建的渲染包围盒范围VkAabbPositionsKHR\nVkAabbPositionsKHR sceneAabb = {0,0,0,1,1,1};\n// isSceneUnbounded指定渲染场景是否无界，当前只支持false\nbool isSceneUnbounded = false;\n// spatialScaleFactor为场景缩放因子，对于有界场景，无需设置，XEngine根据sceneAabb计算该值\nfloat spatialScaleFactor = 0;\n// commandBuffer为命令缓冲区，用户需进行初始化\nVkCommandBuffer commandBuffer = VK_NULL_HANDLE;\n// 指定当前结构体类型为DDGI description\nNNGIDescription.sType = XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION;\n// 指定扩展为空\nNNGIDescription.pNext = nullptr;\n// 设置推理图像的相机相关矩阵，此处仅为示例，使用时需要用户进行初始化\nfloat inferenceCameraViewMatrix[16];\nfloat inferenceCameraProjectionMatrix[16];\nmemcpy(NNGIDescription.inferenceCameraViewMatrix, &inferenceCameraViewMatrix, sizeof(NNGIDescription.inferenceCameraViewMatrix));\nmemcpy(NNGIDescription.inferenceCameraProjectionMatrix, &inferenceCameraProjectionMatrix, sizeof(NNGIDescription.inferenceCameraProjectionMatrix));\n// 设置训练图像的相机相关矩阵，此处仅为示例，使用时需要用户进行初始化\nfloat trainingCameraViewMatrix[16];\nfloat trainingCameraProjectionMatrix[16];\nmemcpy(NNGIDescription.trainingCameraViewMatrix, &trainingCameraViewMatrix, sizeof(NNGIDescription.trainingCameraViewMatrix));\nmemcpy(NNGIDescription.trainingCameraProjectionMatrix, &trainingCameraProjectionMatrix, sizeof(NNGIDescription.trainingCameraProjectionMatrix));\nNNGIDescription.inferenceInputDepthImage = inferenceInputDepthImage;\nNNGIDescription.inferenceInputNormalImage = inferenceInputNormalImage;\nNNGIDescription.inferenceInputBaseColorMetallicImage = inferenceInputBaseColorMetallicImage;\nNNGIDescription.inferenceOutputGIImage = inferenceOutputGIImage;\nNNGIDescription.trainingInputPositionImage = trainingInputPositionImage;\nNNGIDescription.trainingInputNormalImage = trainingInputNormalImage;\nNNGIDescription.trainingInputBaseColorMetallicImage = trainingInputBaseColorMetallicImage;\nNNGIDescription.trainingInputGIImage = trainingInputGIImage;\nNNGIDescription.sceneAabb = sceneAabb;\nNNGIDescription.isSceneUnbounded = isSceneUnbounded;\nNNGIDescription.spatialScaleFactor = spatialScaleFactor;\nHMS_XEG_CmdRenderRTGI(commandBuffer, xegRTGI, &NNGIDescription);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtgi",
            children: "HMS_XEG_CmdRenderRTGI"
          }), "接口之后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdsetsynchronization",
            children: "HMS_XEG_CmdSetSynchronization"
          }), "接口，执行训练步骤，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdsetsynchronization",
            children: "HMS_XEG_CmdSetSynchronization"
          }), "接口需要每帧调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// GI渲染结果会写入到XEG_NNGIDescription中的inferenceOutputGIImage图像中\nHMS_XEG_CmdSetSynchronization(commandBuffer, &xegRTGI);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyrtgi",
            children: "HMS_XEG_DestroyRTGI"
          }), "接口销毁实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (xegRTGI) {\n    HMS_XEG_DestroyRTGI(xegRTGI);\n}\n"
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
148094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799092-a454fe9e40e22d355d958330f7c7e4db.jpg");

},
599325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478741-a454fe9e40e22d355d958330f7c7e4db.jpg");

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