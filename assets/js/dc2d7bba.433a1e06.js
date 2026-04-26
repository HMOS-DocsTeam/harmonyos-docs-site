"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["374591"], {
365649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_maleoon_api_xengine_kit_high_performance_gpu_sorting_xengine_kit_high_performance_gpu_sorting_md_dc2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-maleoon-api-xengine-kit-high-performance-gpu-sorting-xengine-kit-high-performance-gpu-sorting-md-dc2.json
var site_docs_xengine_kit_guide_xengine_kit_maleoon_api_xengine_kit_high_performance_gpu_sorting_xengine_kit_high_performance_gpu_sorting_md_dc2_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting/xengine-kit-high-performance-gpu-sorting","title":"高性能GPU排序","description":"从6.0.0(20) 版本开始，新增高性能GPU排序特性。","source":"@site/docs/xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting/xengine-kit-high-performance-gpu-sorting.md","sourceDirName":"xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting","slug":"/xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"高性能GPU排序","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-high-performance-gpu-sorting","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"光线追踪全局光照","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-global-illumination/"},"next":{"title":"创建特性实例失败如何处理","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-maleoon-api/xengine-kit-high-performance-gpu-sorting/xengine-kit-high-performance-gpu-sorting.md


const frontMatter = {
	title: '高性能GPU排序',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-high-performance-gpu-sorting',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '高性能GPU排序';

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
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "配置项目",
  "id": "配置项目",
  "level": 3
}, {
  "value": "集成高性能GPU排序（Vulkan）",
  "id": "集成高性能gpu排序vulkan",
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
        id: "高性能gpu排序",
        children: "高性能GPU排序"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) 版本开始，新增高性能GPU排序特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit HPS特性提供高性能GPU排序能力。相比于其它排序能力，该能力依托于华为Maleoon GPU的软硬结合优化，效率更高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过以下方式查询相关扩展特性是否支持："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于Vulkan，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
        children: "HMS_XEG_EnumerateDeviceExtensionProperties"
      }), "扩展特性查询接口进行查询，如查询结果包含XEG_HPS_RADIX_SORT_EXTENSION_NAME，则表示支持该特性，若查询结果未包含，则表示不支持该特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为使用高性能GPU排序所需要使用的接口，关于这些接口的详细说明见", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateHPS (VkDevice device, const XEG_HPSCreateInfo *pCreateInfo, XEG_HPS *pHps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XEG_HPS对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyHPS (XEG_HPS hps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XEG_HPS对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRadixSortHPS (VkCommandBuffer commandBuffer, XEG_HPS hps, const XEG_HPSRadixSortDescription *pDescription)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制HPS排序命令，使用此接口前需要通过HMS_XEG_EnumerateDeviceExtensionProperties接口查询是否支持XEG_HPS_RADIX_SORT_EXTENSION_NAME扩展。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章以在Vulkan应用程序渲染为例，说明使用高性能GPU排序的开发步骤。"
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
            children: "#include <algorithm>\n#include <vector>\n#include <string>\n#include <xengine/xeg_vulkan_hps.h>\n#include <xengine/xeg_vulkan_extension.h>\n#include <xengine/xeg_extension_defs.h>\n"
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
      id: "集成高性能gpu排序vulkan",
      children: "集成高性能GPU排序（Vulkan）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine 高性能GPU排序可以独立使用。相关代码在Native层实现。"
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
          }), "接口，获取XEngine支持的扩展信息，只有在支持XEG_HPS_RADIX_SORT_EXTENSION_NAME扩展时才可以使用高性能GPU排序接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VkPhysicalDevice physicalDevice;\nstd::vector<std::string> supportedExtensions;\nuint32_t propertyCount;\nHMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, nullptr);\nif (propertyCount > 0) {\n    std::vector<XEG_ExtensionProperties> properties(propertyCount);\n    if (HMS_XEG_EnumerateDeviceExtensionProperties(physicalDevice, &propertyCount, &properties.front()) ==\n        VK_SUCCESS) {\n        for (auto ext : properties) {\n            supportedExtensions.push_back(ext.extensionName);\n        }\n    }\n}\nif (std::find(supportedExtensions.begin(), supportedExtensions.end(), XEG_HPS_RADIX_SORT_EXTENSION_NAME) ==\n    supportedExtensions.end()) {\n    exit(1);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备HPS相关资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VkDevice device;\nVkCommandBuffer cmdBuffer;\nVkQueue queue;\n// 要被排序的key\nVkBuffer keyBuffer;\n// 与key对应的value\nVkBuffer indexBuffer;\n// 排序量\nVkBuffer sortCount;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明实例句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XEG_HPS xegHPS { VK_NULL_HANDLE };\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_createhps",
            children: "HMS_XEG_CreateHPS"
          }), "接口，实例化句柄。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造输入描述符\nXEG_HPSRadixSort sorInfo{\n    XEG_STRUCTURE_TYPE_HPS_RADIX_SORT,\n    nullptr\n};\n\nXEG_HPSCreateInfo info {\n    XEG_STRUCTURE_TYPE_HPS_CREATE_INFO,\n    &sorInfo\n};\n// 实例化句柄\nHMS_XEG_CreateHPS(device, &info, &xegHPS);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造排序描述符，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdradixsorthps",
            children: "HMS_XEG_CmdRadixSortHPS"
          }), "接口录制排序命令。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VkCommandBufferBeginInfo cmdBufferBeginInfo {};\ncmdBufferBeginInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO;\n\n// 录制排序命令\nvkBeginCommandBuffer(cmdBuffer, &cmdBufferBeginInfo);\nXEG_HPSRadixSortDescription sortDescription{\n    XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION,\n    nullptr,\n    sortCount,\n    keyBuffer,\n    indexBuffer\n};\nHMS_XEG_CmdRadixSortHPS(cmdBuffer, xegHPS, &sortDescription);\nvkEndCommandBuffer(cmdBuffer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提交排序命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 提交command buffer\nVkResult res;\n{\n    VkSubmitInfo submitInfo{};\n    submitInfo.sType = VK_STRUCTURE_TYPE_SUBMIT_INFO;\n    submitInfo.waitSemaphoreCount = 0;\n    submitInfo.signalSemaphoreCount = 0;\n    submitInfo.pSignalSemaphores = nullptr;\n    submitInfo.commandBufferCount = 1;\n    submitInfo.pCommandBuffers = &cmdBuffer;\n    submitInfo.pWaitSemaphores = nullptr;\n    res = vkQueueSubmit(queue, 1, &submitInfo, nullptr);\n}\n// 等待结束\nvkDeviceWaitIdle(device);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁HPS对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if(xegHPS){\n    HMS_XEG_DestroyHPS(xegHPS);\n}\n"
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