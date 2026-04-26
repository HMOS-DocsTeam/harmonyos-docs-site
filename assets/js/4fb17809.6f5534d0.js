"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["420171"], {
225500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_rt_reflection_xengine_kit_rt_reflection_md_4fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-rt-reflection-xengine-kit-rt-reflection-md-4fb.json
var site_docs_xengine_kit_guide_xengine_kit_rt_reflection_xengine_kit_rt_reflection_md_4fb_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-rt-reflection/xengine-kit-rt-reflection","title":"光线追踪反射","description":"从6.0.0(20) 版本开始，新增光线追踪反射特性。","source":"@site/docs/xengine-kit-guide/xengine-kit-rt-reflection/xengine-kit-rt-reflection.md","sourceDirName":"xengine-kit-guide/xengine-kit-rt-reflection","slug":"/xengine-kit-guide/xengine-kit-rt-reflection/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-reflection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"光线追踪反射","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-rt-reflection","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Subpass Shading","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-subpass-shading/"},"next":{"title":"光线追踪阴影和环境光遮蔽","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-shadow-and-ao/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-rt-reflection/xengine-kit-rt-reflection.md


const frontMatter = {
	title: '光线追踪反射',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-rt-reflection',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '光线追踪反射';

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
  "value": "集成XEngine光线追踪反射（Vulkan）",
  "id": "集成xengine光线追踪反射vulkan",
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
        id: "光线追踪反射",
        children: "光线追踪反射"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) 版本开始，新增光线追踪反射特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit提供光线追踪反射（Ray-Traced Reflections）渲染能力。相比于该效果的传统光线追踪实现方式，依托于华为马良GPU的软硬结合优化，XEngine支持FERT(Flexible Entry Raytracing)求交加速技术，可以减少光线与场景几何的求交计算次数，从而降低实现高画质光追效果时的GPU负载。"
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
          }), "扩展特性查询接口进行查询，如查询结果包含XEG_RT_REFLECTION_EXTENSION_NAME，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为使用光线追踪反射特性需要使用的接口，关于这些接口的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTReflection(VkDevice device, const void* pCreateInfo, XEG_RTReflection* pRtReflection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XEG_RTReflection对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTReflection(VkCommandBuffer commandBuffer, XEG_RTReflection rtReflection, const void* pDescription)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制计算RT反射命中信息命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTReflection(XEG_RTReflection rtReflection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XEG_RTReflection对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791737)/* ["default"] */.A) + "",
        width: "668",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户进入光线追踪反射适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用调用HMS_XEG_CreateRTReflection接口创建光线追踪反射实例。如果光线追踪反射创建失败，直接调用后处理并送显当前帧即可。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用调用HMS_XEG_CmdRenderRTReflection接口计算光线追踪反射命中信息，并返回错误码。如果计算失败，直接调用后处理并送显当前帧即可。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用根据3中计算的反射命中信息，生成反射图像。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用将反射图像和游戏的主场景渲染结果进行融合。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用完成其余后处理，并送显当前帧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户退出光线追踪反射适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用调用HMS_XEG_HMS_XEG_DestroyRTReflection接口销毁光线追踪反射实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章以在Vulkan应用程序中集成为例，说明XEngine集成操作过程。"
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
            children: "#include <algorithm>\n#include <string>\n#include <vector>\n#include \"xengine/xeg_vulkan_extension.h\"\n#include <xengine/xeg_vulkan_rt_reflection.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt部分示例代码如下"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    xengine-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    xengine\n)\ntarget_link_libraries(nativerender PUBLIC\n    ...... // 其他库文件\n    ${xengine-lib})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成xengine光线追踪反射vulkan",
      children: "集成XEngine光线追踪反射（Vulkan）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Vulkan图形API搭建图像渲染管线，并集成光线追踪反射效果的代码需要在Native层实现，渲染结果通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件显示到屏幕。"]
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
          }), "接口，获取XEngine支持的扩展信息，只有在支持XEG_RT_REFLECTION_EXTENSION_NAME扩展时才可以使用光线追踪反射的相关接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// physicalDevice为Vulkan物理设备，用户需进行初始化\nVkPhysicalDevice physicalDevice;\n// 查询XEngine支持的Vulkan扩展列表\nstd::vector<std::string> supportedExtensions;\nuint32_t propertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, nullptr);\nif (propertyCount > 0) {\n    std::vector<XEG_ExtensionProperties> properties(propertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, &properties.front()) == VK_SUCCESS) {\n        for (auto ext : properties) {\n            supportedExtensions.push_back(ext.extensionName);\n        }\n    }\n}\n// 查询是否支持光线追踪反射特性\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_RT_REFLECTION_EXTENSION_NAME) ==\n    supportedExtensions.end()) {\n    exit(1); // 错误\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明实例句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XEG_RTReflection xegRTReflection;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_creatertreflection",
            children: "HMS_XEG_CreateRTReflection"
          }), "接口，创建光线追踪反射实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建光线追踪反射实例所需的宽高信息为用户自定义参数，这里将以800*600的分辨率为例\nuint32_t reflectWidth = 800;\nuint32_t reflectHeight = 600;\n// vulkan逻辑设备，用户需进行初始化\nVkDevice device;\n// XEG_RTReflectionCreateInfo为创建xegRTReflection对象信息\nXEG_RTReflectionCreateInfo xegRTReflectionCreateInfo;\n// 指定是否开启快速求交模式。默认为0，表示不开启快速求交模式\nxegRTReflectionCreateInfo.enableFastTrace = 0;\n// 指定XEG_StructureType值，必须是XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO\nxegRTReflectionCreateInfo.sType = XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO;\n// 指定输入图像尺寸\nxegRTReflectionCreateInfo.renderSize = VkExtent2D{ reflectWidth, reflectHeight };\nVkResult ret = HMS_XEG_CreateRTReflection(device, &xegRTReflectionCreateInfo, &xegRTReflection);\nif (ret != VK_SUCCESS) {\n    exit(1);  // 错误\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtreflection",
            children: "HMS_XEG_CmdRenderRTReflection"
          }), "接口下发渲染命令，每帧都需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 反射渲染输入信息\nXEG_RTReflectionDescription xegRTReflectionDescription;\n// inputRayOriginImage为用户创建的光线原点图像的VkImageView\nVkImageView inputRayOriginImage = VK_NULL_HANDLE;\n// inputRayDirectionImage为用户创建的光线方向图像的VkImageView\nVkImageView inputRayDirectionImage = VK_NULL_HANDLE;\n// outputReflectionInfoImage为用户创建的用于记录光线追踪求交结果的VkImageView\nVkImageView outputReflectionInfoImage = VK_NULL_HANDLE;\n// sceneTlas是场景的Top Level光线追踪加速结构\nVkAccelerationStructureKHR sceneTlas = VK_NULL_HANDLE;\nxegRTReflectionDescription.inputRayOriginImage = inputRayOriginImage;\nxegRTReflectionDescription.inputRayDirectionImage = inputRayDirectionImage;\nxegRTReflectionDescription.outputReflectionInfoImage = outputReflectionInfoImage;\nxegRTReflectionDescription.accelerationStructure = sceneTlas;\nxegRTReflectionDescription.rayMin = 0.01;\nxegRTReflectionDescription.rayMax = 1e10;\nxegRTReflectionDescription.sType = XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION;\nxegRTReflectionDescription.reflectionCullMask = 0xff;\n// commandBuffer为命令缓冲区，用户需进行初始化\nVkCommandBuffer commandBuffer = VK_NULL_HANDLE;\nVkResult retRender = HMS_XEG_CmdRenderRTReflection(commandBuffer, xegRTReflection, &xegRTReflectionDescription);\nif (retRender != VK_SUCCESS) {\n    exit(1);  // 错误\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyrtreflection",
            children: "HMS_XEG_DestroyRTReflection"
          }), "接口销毁实例，释放资源，当特性不再使用或应用退出时需要调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (xegRTReflection != VK_NULL_HANDLE) {\n    HMS_XEG_DestroyRTReflection(xegRTReflection);\n}\n"
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
791737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438785-35b6796ce646598b91620ec357c559c5.png");

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