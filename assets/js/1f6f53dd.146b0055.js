"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["305587"], {
148579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_files_xengine_kit_xeg_vulkan_rt_visible_mask_8_h_xengine_kit_xeg_vulkan_rt_visible_mask_8_h_md_1f6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-files-xengine-kit-xeg-vulkan-rt-visible-mask-8-h-xengine-kit-xeg-vulkan-rt-visible-mask-8-h-md-1f6.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_files_xengine_kit_xeg_vulkan_rt_visible_mask_8_h_xengine_kit_xeg_vulkan_rt_visible_mask_8_h_md_1f6_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h","title":"xeg_vulkan_rt_visible_mask.h","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"xeg_vulkan_rt_visible_mask.h","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rt-visible-mask-8h","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-vulkan-rt-visible-mask-8h"},"sidebar":"ref","previous":{"title":"xeg_vulkan_rt_reflection.h","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-reflection-8h/xengine-kit-xeg-vulkan-rt-reflection-8h"},"next":{"title":"xeg_vulkan_rtgi.h","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rtgi-8h/xengine-kit-xeg-vulkan-rtgi-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h.md


const frontMatter = {
	title: 'xeg_vulkan_rt_visible_mask.h',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rt-visible-mask-8h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-vulkan-rt-visible-mask-8h'
};
const contentTitle = 'xeg_vulkan_rt_visible_mask.h';

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
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "xeg_vulkan_rt_visible_maskh",
        children: "xeg_vulkan_rt_visible_mask.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XEngine RT VisibleMask特性接口。使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
        children: "HMS_XEG_EnumerateDeviceExtensionProperties"
      }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rt_shadow_ao_extension_name",
        children: "XEG_RT_SHADOW_AO_EXTENSION_NAME"
      }), "扩展可用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件"
        })
      }), "：<xengine/xeg_vulkan_rt_visible_mask.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libxengine.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.XEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "XEngine"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo",
              children: "XEG_RTShadowAOCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建支持光线追踪阴影和环境光遮蔽效果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "实例的初始化信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters",
              children: "XEG_RTShadowParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线追踪阴影（Shadow）算法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtaoparameters/xengine-kit-xeg-rtaoparameters",
              children: "XEG_RTAOParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线追踪环境光遮蔽（AO）算法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters",
              children: "XEG_RTShadowAODenoiserParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线追踪阴影和环境光遮蔽算法去噪参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription",
              children: "XEG_RTShadowAODescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述光线追踪阴影和环境光遮蔽算法渲染命令的输入信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_denoisequalitymode",
              children: "XEG_DenoiseQualityMode"
            }), " XEG_DenoiseQualityMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去噪质量模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_traversalmode",
              children: "XEG_TraversalMode"
            }), " XEG_TraversalMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_creatertvisiblemask",
              children: "PFN_HMS_XEG_CreateRTVisibleMask"
            }), ") (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " *pRTVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_cmdrenderrtvisiblemask",
              children: "PFN_HMS_XEG_CmdRenderRTVisibleMask"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制光线追踪VisibleMask渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_destroyrtvisiblemask",
              children: "PFN_HMS_XEG_DestroyRTVisibleMask"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象的函数指针定义。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_denoisequalitymode",
              children: "XEG_DenoiseQualityMode"
            }), " { XEG_DENOISE_QUALITY_MODE_NONE = 0, XEG_DENOISE_QUALITY_MODE_QUALITY = 1, XEG_DENOISE_QUALITY_MODE_BALANCED = 2, XEG_DENOISE_QUALITY_MODE_PERFORMANCES = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去噪质量模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_traversalmode",
              children: "XEG_TraversalMode"
            }), " { XEG_TRAVERSAL_MODE_DEFAULT = 0, XEG_TRAVERSAL_MODE_PERFORMANCES = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历模式枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_creatertvisiblemask",
              children: "HMS_XEG_CreateRTVisibleMask"
            }), " (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " *pRTVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtvisiblemask",
              children: "HMS_XEG_CmdRenderRTVisibleMask"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制光线追踪VisibleMask渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyrtvisiblemask",
              children: "HMS_XEG_DestroyRTVisibleMask"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        })]
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