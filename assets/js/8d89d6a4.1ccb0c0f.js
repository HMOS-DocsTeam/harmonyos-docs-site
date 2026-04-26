"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["314412"], {
123975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_vulkan_guide_vulkan_extensions_capi_vulkan_ohos_h_capi_vulkan_ohos_h_md_8d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-vulkan-guide-vulkan-extensions-capi-vulkan-ohos-h-capi-vulkan-ohos-h-md-8d8.json
var site_docs_ref_vulkan_guide_vulkan_extensions_capi_vulkan_ohos_h_capi_vulkan_ohos_h_md_8d8_namespaceObject = JSON.parse('{"id":"vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h","title":"vulkan_ohos.h","description":"概述","source":"@site/docs-ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h.md","sourceDirName":"vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h","slug":"/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"vulkan_ohos.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h","kit":"标准库","last_updated":"2026-04-22","slug":"capi-vulkan-ohos-h"},"sidebar":"ref","previous":{"title":"Vulkan","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan"},"next":{"title":"VkSurfaceCreateInfoOHOS","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vksurfacecreateinfoohos/capi-vulkan-vksurfacecreateinfoohos"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h.md


const frontMatter = {
	title: 'vulkan_ohos.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'capi-vulkan-ohos-h'
};
const contentTitle = 'vulkan_ohos.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "VkSwapchainImageUsageFlagBitsOHOS",
  "id": "vkswapchainimageusageflagbitsohos",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "PFN_vkCreateSurfaceOHOS()",
  "id": "pfn_vkcreatesurfaceohos",
  "level": 3
}, {
  "value": "vkCreateSurfaceOHOS()",
  "id": "vkcreatesurfaceohos",
  "level": 3
}, {
  "value": "PFN_vkGetNativeBufferPropertiesOHOS()",
  "id": "pfn_vkgetnativebufferpropertiesohos",
  "level": 3
}, {
  "value": "PFN_vkGetMemoryNativeBufferOHOS()",
  "id": "pfn_vkgetmemorynativebufferohos",
  "level": 3
}, {
  "value": "vkGetNativeBufferPropertiesOHOS()",
  "id": "vkgetnativebufferpropertiesohos",
  "level": 3
}, {
  "value": "vkGetMemoryNativeBufferOHOS()",
  "id": "vkgetmemorynativebufferohos",
  "level": 3
}, {
  "value": "vkGetSwapchainGrallocUsageOHOS()",
  "id": "vkgetswapchaingrallocusageohos",
  "level": 3
}, {
  "value": "VKAPI_PTR *PFN_vkGetSwapchainGrallocUsageOHOS()",
  "id": "vkapi_ptr-pfn_vkgetswapchaingrallocusageohos",
  "level": 3
}, {
  "value": "vkAcquireImageOHOS()",
  "id": "vkacquireimageohos",
  "level": 3
}, {
  "value": "VKAPI_PTR *PFN_vkAcquireImageOHOS()",
  "id": "vkapi_ptr-pfn_vkacquireimageohos",
  "level": 3
}, {
  "value": "vkQueueSignalReleaseImageOHOS()",
  "id": "vkqueuesignalreleaseimageohos",
  "level": 3
}, {
  "value": "VKAPI_PTR *PFN_vkQueueSignalReleaseImageOHOS()",
  "id": "vkapi_ptr-pfn_vkqueuesignalreleaseimageohos",
  "level": 3
}, {
  "value": "VKAPI_PTR *PFN_vkSetNativeFenceFdOpenHarmony()",
  "id": "vkapi_ptr-pfn_vksetnativefencefdopenharmony",
  "level": 3
}, {
  "value": "VKAPI_PTR *PFN_vkGetNativeFenceFdOpenHarmony()",
  "id": "vkapi_ptr-pfn_vkgetnativefencefdopenharmony",
  "level": 3
}, {
  "value": "vkSetNativeFenceFdOpenHarmony()",
  "id": "vksetnativefencefdopenharmony",
  "level": 3
}, {
  "value": "vkGetNativeFenceFdOpenHarmony()",
  "id": "vkgetnativefencefdopenharmony",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "vulkan_ohosh",
        children: "vulkan_ohos.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义了HarmonyOS平台扩展的Vulkan接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <vulkan/vulkan_ohos.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libvulkan.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan",
        children: "Vulkan"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vksurfacecreateinfoohos/capi-vulkan-vksurfacecreateinfoohos",
              children: "VkSurfaceCreateInfoOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkSurfaceCreateInfoOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含创建Vulkan Surface时必要的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferohos/capi-vulkan-vknativebufferohos",
              children: "VkNativeBufferOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkNativeBufferOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含本地显存的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkswapchainimagecreateinfoohos/capi-vulkan-vkswapchainimagecreateinfoohos",
              children: "VkSwapchainImageCreateInfoOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkSwapchainImageCreateInfoOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含创建Image时必要的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/x-vulkan-vkphysicaldevicepresentationpropertiesohos/x-vulkan-vkphysicaldevicepresentationpropertiesohos",
              children: "VkPhysicalDevicePresentationPropertiesOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkPhysicalDevicePresentationPropertiesOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含设备的显示属性的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferusageohos/capi-vulkan-vknativebufferusageohos",
              children: "VkNativeBufferUsageOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkNativeBufferUsageOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供HarmonyOS NativeBuffer用途的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferpropertiesohos/capi-vulkan-vknativebufferpropertiesohos",
              children: "VkNativeBufferPropertiesOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkNativeBufferPropertiesOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含了NativeBuffer的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferformatpropertiesohos/capi-vulkan-vknativebufferformatpropertiesohos",
              children: "VkNativeBufferFormatPropertiesOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkNativeBufferFormatPropertiesOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含了NativeBuffer的一些格式属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkimportnativebufferinfoohos/capi-vulkan-vkimportnativebufferinfoohos",
              children: "VkImportNativeBufferInfoOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkImportNativeBufferInfoOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含了OH_NativeBuffer结构体的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkmemorygetnativebufferinfoohos/capi-vulkan-vkmemorygetnativebufferinfoohos",
              children: "VkMemoryGetNativeBufferInfoOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkMemoryGetNativeBufferInfoOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从Vulkan内存中获取OH_NativeBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkexternalformatohos/capi-vulkan-vkexternalformatohos",
              children: "VkExternalFormatOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkExternalFormatOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外部定义的格式标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-nativewindow/capi-vulkan-nativewindow",
              children: "NativeWindow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHNativeWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohbufferhandle/capi-vulkan-ohbufferhandle",
              children: "OHBufferHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区句柄，用于对缓冲区的信息传递和获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer",
              children: "OH_NativeBuffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer结构体声明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkswapchainimageusageflagbitsohos",
              children: "VkSwapchainImageUsageFlagBitsOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkSwapchainImageUsageFlagBitsOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像使用标志位。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_surface 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS平台Surface扩展宏定义。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_SURFACE_SPEC_VERSION 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS平台Surface扩展版本号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_SURFACE_EXTENSION_NAME \"VK_OHOS_surface\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS平台Surface扩展名。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_native_buffer 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["native_buffer扩展宏定义。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_NATIVE_BUFFER_SPEC_VERSION 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["native_buffer扩展版本号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_NATIVE_BUFFER_EXTENSION_NAME \"VK_OHOS_native_buffer\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["native_buffer扩展名。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_external_memory 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS平台external_memory扩展宏定义。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_EXTERNAL_MEMORY_SPEC_VERSION 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS平台external_memory扩展版本号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_OHOS_EXTERNAL_MEMORY_EXTENSION_NAME \"VK_OHOS_external_memory\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS平台external_memory扩展名。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_vkcreatesurfaceohos",
              children: "VkResult (VKAPI_PTR PFN_vkCreateSurfaceOHOS)(VkInstance instance, const VkSurfaceCreateInfoOHOS pCreateInfo, const VkAllocationCallbacks* pAllocator, VkSurfaceKHR* pSurface)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PFN_vkCreateSurfaceOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Vulkan Surface的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkcreatesurfaceohos",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkCreateSurfaceOHOS(VkInstance instance, const VkSurfaceCreateInfoOHOS* pCreateInfo, const VkAllocationCallbacks* pAllocator, VkSurfaceKHR* pSurface)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Vulkan Surface。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_vkgetnativebufferpropertiesohos",
              children: "VkResult (VKAPI_PTR PFN_vkGetNativeBufferPropertiesOHOS)(VkDevice device, const struct OH_NativeBuffer buffer, VkNativeBufferPropertiesOHOS* pProperties)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PFN_vkGetNativeBufferPropertiesOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer属性的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_vkgetmemorynativebufferohos",
              children: "VkResult (VKAPI_PTR PFN_vkGetMemoryNativeBufferOHOS)(VkDevice device, const VkMemoryGetNativeBufferInfoOHOS pInfo, struct OH_NativeBuffer** pBuffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PFN_vkGetMemoryNativeBufferOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkgetnativebufferpropertiesohos",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetNativeBufferPropertiesOHOS(VkDevice device, const struct OH_NativeBuffer* buffer, VkNativeBufferPropertiesOHOS* pProperties)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkgetmemorynativebufferohos",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetMemoryNativeBufferOHOS(VkDevice device, const VkMemoryGetNativeBufferInfoOHOS* pInfo, struct OH_NativeBuffer** pBuffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkgetswapchaingrallocusageohos",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetSwapchainGrallocUsageOHOS(VkDevice device, VkFormat format, VkImageUsageFlags imageUsage, uint64_t* grallocUsage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的Vulkan设备、图像格式和图像使用标志, 返回适当的Gralloc(内存分配器)使用标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkacquireimageohos",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkAcquireImageOHOS(VkDevice device, VkImage image, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取交换链图像的所有权, 并将外部信号的Fence导入到VkSemaphore对象和VkFence对象中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkqueuesignalreleaseimageohos",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkQueueSignalReleaseImageOHOS(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore* pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前图像使用完毕后，通过该函数向系统硬件缓冲区发出释放信号, 以便其他组件可以访问该图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkapi_ptr-pfn_vksetnativefencefdopenharmony",
              children: "VkResult (VKAPI_PTR *PFN_vkSetNativeFenceFdOpenHarmony)(VkDevice device, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_PTR *PFN_vkSetNativeFenceFdOpenHarmony"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口已废弃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkapi_ptr-pfn_vkgetnativefencefdopenharmony",
              children: "typedef VkResult (VKAPI_PTR PFN_vkGetNativeFenceFdOpenHarmony)(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_PTR *PFN_vkGetNativeFenceFdOpenHarmony"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口已废弃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkapi_ptr-pfn_vkgetswapchaingrallocusageohos",
              children: "VkResult (VKAPI_PTR PFN_vkGetSwapchainGrallocUsageOHOS)(VkDevice device, VkFormat format, VkImageUsageFlags imageUsage, uint64_t grallocUsage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_PTR *PFN_vkGetSwapchainGrallocUsageOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的Vulkan设备、图像格式和图像使用标志, 返回适当的Gralloc(内存分配器)使用标志。应用开发者无需使用该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkapi_ptr-pfn_vkacquireimageohos",
              children: "VkResult (VKAPI_PTR *PFN_vkAcquireImageOHOS)(VkDevice device, VkImage image, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_PTR *PFN_vkAcquireImageOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取交换链图像的所有权, 并将外部信号的Fence导入到VkSemaphore对象和VkFence对象中。应用开发者无需使用该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkapi_ptr-pfn_vkqueuesignalreleaseimageohos",
              children: "typedef VkResult (VKAPI_PTR PFN_vkQueueSignalReleaseImageOHOS)(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VKAPI_PTR *PFN_vkQueueSignalReleaseImageOHOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前图像使用完毕后，通过该函数向系统硬件缓冲区发出释放信号, 以便其他组件可以访问该图像。应用开发者无需使用该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vksetnativefencefdopenharmony",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkSetNativeFenceFdOpenHarmony(VkDevice device, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口已废弃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkgetnativefencefdopenharmony",
              children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetNativeFenceFdOpenHarmony(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore* pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口已废弃。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkswapchainimageusageflagbitsohos",
      children: "VkSwapchainImageUsageFlagBitsOHOS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum VkSwapchainImageUsageFlagBitsOHOS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像使用标志位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_SWAPCHAIN_IMAGE_USAGE_SHARED_BIT_OHOS = 0x00000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享类型图像标志位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VK_SWAPCHAIN_IMAGE_USAGE_FLAG_BITS_MAX_ENUM_OHOS = 0x7FFFFFFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_vkcreatesurfaceohos",
      children: "PFN_vkCreateSurfaceOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkCreateSurfaceOHOS)(VkInstance instance, const VkSurfaceCreateInfoOHOS* pCreateInfo, const VkAllocationCallbacks* pAllocator, VkSurfaceKHR* pSurface)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Vulkan Surface的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkInstance instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vksurfacecreateinfoohos/capi-vulkan-vksurfacecreateinfoohos",
              children: "const VkSurfaceCreateInfoOHOS"
            }), "* pCreateInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个VkSurfaceCreateInfoOHOS结构体的指针，包含创建Vulkan Surface时必要的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const VkAllocationCallbacks* pAllocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义内存分配的回调函数，如果不需要可以传入NULL，接口会使用默认的内存分配函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkSurfaceKHR* pSurface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，用于接收创建的Vulkan Surface，类型为VkSurfaceKHR。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkcreatesurfaceohos",
      children: "vkCreateSurfaceOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkCreateSurfaceOHOS(VkInstance instance, const VkSurfaceCreateInfoOHOS* pCreateInfo, const VkAllocationCallbacks* pAllocator, VkSurfaceKHR* pSurface)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Vulkan Surface。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkInstance instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vksurfacecreateinfoohos/capi-vulkan-vksurfacecreateinfoohos",
              children: "const VkSurfaceCreateInfoOHOS"
            }), "* pCreateInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个VkSurfaceCreateInfoOHOS结构体的指针，包含创建Vulkan Surface时必要的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const VkAllocationCallbacks* pAllocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义内存分配的回调函数，如果不需要可以传入NULL，接口会使用默认的内存分配函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkSurfaceKHR* pSurface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，用于接收创建的Vulkan Surface，类型为VkSurfaceKHR。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_OUT_OF_HOST_MEMORY，表示分配VkSurfaceKHR内存失败。  返回VK_ERROR_SURFACE_LOST_KHR，表示操作NativeWindow失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_vkgetnativebufferpropertiesohos",
      children: "PFN_vkGetNativeBufferPropertiesOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkGetNativeBufferPropertiesOHOS)(VkDevice device, const struct OH_NativeBuffer* buffer, VkNativeBufferPropertiesOHOS* pProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeBuffer属性的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer",
              children: "struct OH_NativeBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferpropertiesohos/capi-vulkan-vknativebufferpropertiesohos",
              children: "VkNativeBufferPropertiesOHOS"
            }), "* pProperties"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收OH_NativeBuffer属性的结构体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_vkgetmemorynativebufferohos",
      children: "PFN_vkGetMemoryNativeBufferOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkGetMemoryNativeBufferOHOS)(VkDevice device, const VkMemoryGetNativeBufferInfoOHOS* pInfo, struct OH_NativeBuffer** pBuffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeBuffer的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkmemorygetnativebufferinfoohos/capi-vulkan-vkmemorygetnativebufferinfoohos",
              children: "const VkMemoryGetNativeBufferInfoOHOS"
            }), "* pInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkMemoryGetNativeBufferInfoOHOS结构体对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer",
              children: "struct OH_NativeBuffer"
            }), "** pBuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收获取到的OH_NativeBuffer。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkgetnativebufferpropertiesohos",
      children: "vkGetNativeBufferPropertiesOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetNativeBufferPropertiesOHOS(VkDevice device, const struct OH_NativeBuffer* buffer, VkNativeBufferPropertiesOHOS* pProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeBuffer属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer",
              children: "struct OH_NativeBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferpropertiesohos/capi-vulkan-vknativebufferpropertiesohos",
              children: "VkNativeBufferPropertiesOHOS"
            }), "* pProperties"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收OH_NativeBuffer属性的结构体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_INVALID_EXTERNAL_HANDLE_KHR，表示入参存在异常。  返回VK_ERROR_OUT_OF_DEVICE_MEMORY，表示设备内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkgetmemorynativebufferohos",
      children: "vkGetMemoryNativeBufferOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetMemoryNativeBufferOHOS(VkDevice device, const VkMemoryGetNativeBufferInfoOHOS* pInfo, struct OH_NativeBuffer** pBuffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeBuffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkmemorygetnativebufferinfoohos/capi-vulkan-vkmemorygetnativebufferinfoohos",
              children: "const VkMemoryGetNativeBufferInfoOHOS"
            }), "* pInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkMemoryGetNativeBufferInfoOHOS结构体对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer",
              children: "struct OH_NativeBuffer"
            }), "** pBuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收获取到的OH_NativeBuffer。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_OUT_OF_HOST_MEMORY，表示pInfo入参异常，或获取的pBuffer异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkgetswapchaingrallocusageohos",
      children: "vkGetSwapchainGrallocUsageOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetSwapchainGrallocUsageOHOS(VkDevice device, VkFormat format, VkImageUsageFlags imageUsage, uint64_t* grallocUsage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的Vulkan设备、图像格式和图像使用标志, 返回适当的Gralloc(内存分配器)使用标志。应用开发者无需使用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkFormat format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkImageUsageFlags imageUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像使用标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* grallocUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参, 返回Gralloc(内存分配器)使用标志。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_INITIALIZATION_FAILED，表示入参异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkapi_ptr-pfn_vkgetswapchaingrallocusageohos",
      children: "VKAPI_PTR *PFN_vkGetSwapchainGrallocUsageOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkGetSwapchainGrallocUsageOHOS)(VkDevice device, VkFormat format, VkImageUsageFlags imageUsage, uint64_t* grallocUsage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的Vulkan设备、图像格式和图像使用标志, 返回适当的Gralloc(内存分配器)使用标志。应用开发者无需使用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkFormat format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkImageUsageFlags imageUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像使用标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* grallocUsage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参, 返回Gralloc(内存分配器)使用标志。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_INITIALIZATION_FAILED，表示入参异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkacquireimageohos",
      children: "vkAcquireImageOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkAcquireImageOHOS(VkDevice device, VkImage image, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取交换链图像的所有权, 并将外部信号的Fence导入到VkSemaphore对象和VkFence对象中。应用开发者无需使用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkImage image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取的Vulkan图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t nativeFenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原生Fence的文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkSemaphore semaphore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示图像可用状态的Vulkan Semaphore(信号量)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkFence fence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在图像获取完成时进行同步的Vulkan Fence。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_OUT_OF_HOST_MEMORY，表示主机内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkapi_ptr-pfn_vkacquireimageohos",
      children: "VKAPI_PTR *PFN_vkAcquireImageOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkAcquireImageOHOS)(VkDevice device, VkImage image, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取交换链图像的所有权, 并将外部信号的Fence导入到VkSemaphore对象和VkFence对象中。应用开发者无需使用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VkDevice对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkImage image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取的Vulkan图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t nativeFenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原生Fence的文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkSemaphore semaphore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示图像可用状态的Vulkan Semaphore(信号量)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkFence fence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在图像获取完成时进行同步的Vulkan Fence。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_OUT_OF_HOST_MEMORY，表示主机内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkqueuesignalreleaseimageohos",
      children: "vkQueueSignalReleaseImageOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkQueueSignalReleaseImageOHOS(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore* pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前图像使用完毕后，通过该函数向系统硬件缓冲区发出释放信号, 以便其他组件可以访问该图像。应用开发者无需使用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkQueue queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan队列的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t waitSemaphoreCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待Semaphore(信号量)的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const VkSemaphore* pWaitSemaphores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向等待Semaphore(信号量)数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkImage image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的Vulkan图像句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* pNativeFenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向Fence的文件描述符的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_DEVICE_LOST，表示Vulkan设备链接丢失。  返回VK_ERROR_OUT_OF_HOST_MEMORY，表示主机内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkapi_ptr-pfn_vkqueuesignalreleaseimageohos",
      children: "VKAPI_PTR *PFN_vkQueueSignalReleaseImageOHOS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkQueueSignalReleaseImageOHOS)(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore* pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前图像使用完毕后，通过该函数向系统硬件缓冲区发出释放信号, 以便其他组件可以访问该图像。应用开发者无需使用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Vulkan"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkQueue queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan队列的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t waitSemaphoreCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待Semaphore(信号量)的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const VkSemaphore* pWaitSemaphores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向等待Semaphore(信号量)数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的Vulkan图像句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* pNativeFenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向Fence的文件描述符的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VkResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个VkResult类型的错误码，具体返回类型如下：  返回VK_SUCCESS，表示执行成功。  返回VK_ERROR_DEVICE_LOST，表示Vulkan设备链接丢失。  返回VK_ERROR_OUT_OF_HOST_MEMORY，表示主机内存不足。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkapi_ptr-pfn_vksetnativefencefdopenharmony",
      children: "VKAPI_PTR *PFN_vkSetNativeFenceFdOpenHarmony()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkSetNativeFenceFdOpenHarmony)(VkDevice device, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口已废弃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vkapi_ptr-pfn_vkacquireimageohos",
        children: "PFN_vkAcquireImageOHOS"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkapi_ptr-pfn_vkgetnativefencefdopenharmony",
      children: "VKAPI_PTR *PFN_vkGetNativeFenceFdOpenHarmony()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult (VKAPI_PTR *PFN_vkGetNativeFenceFdOpenHarmony)(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore* pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口已废弃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vkapi_ptr-pfn_vkqueuesignalreleaseimageohos",
        children: "PFN_vkQueueSignalReleaseImageOHOS"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vksetnativefencefdopenharmony",
      children: "vkSetNativeFenceFdOpenHarmony()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkSetNativeFenceFdOpenHarmony(VkDevice device, int32_t nativeFenceFd, VkSemaphore semaphore, VkFence fence)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口已废弃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h#vkacquireimageohos",
        children: "vkAcquireImageOHOS"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkgetnativefencefdopenharmony",
      children: "vkGetNativeFenceFdOpenHarmony()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL vkGetNativeFenceFdOpenHarmony(VkQueue queue, uint32_t waitSemaphoreCount, const VkSemaphore* pWaitSemaphores, VkImage image, int32_t* pNativeFenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口已废弃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h#vkqueuesignalreleaseimageohos",
        children: "vkQueueSignalReleaseImageOHOS"
      })]
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