"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["769268"], {
693089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_files_xengine_kit_xeg_vulkan_temporal_upscale_8_h_xengine_kit_xeg_vulkan_temporal_upscale_8_h_md_189_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-files-xengine-kit-xeg-vulkan-temporal-upscale-8-h-xengine-kit-xeg-vulkan-temporal-upscale-8-h-md-189.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_files_xengine_kit_xeg_vulkan_temporal_upscale_8_h_xengine_kit_xeg_vulkan_temporal_upscale_8_h_md_189_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h","title":"xeg_vulkan_temporal_upscale.h","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"xeg_vulkan_temporal_upscale.h","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-temporal-upscale-8h","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-vulkan-temporal-upscale-8h"},"sidebar":"ref","previous":{"title":"xeg_vulkan_spatial_upscale.h","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-spatial-upscale-8h/xengine-kit-xeg-vulkan-spatial-upscale-8h"},"next":{"title":"XEG_AdaptiveVRSCreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrscreateinfo/xengine-kit-xeg-adaptivevrscreateinfo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h.md


const frontMatter = {
	title: 'xeg_vulkan_temporal_upscale.h',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-temporal-upscale-8h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-vulkan-temporal-upscale-8h'
};
const contentTitle = 'xeg_vulkan_temporal_upscale.h';

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
        id: "xeg_vulkan_temporal_upscaleh",
        children: "xeg_vulkan_temporal_upscale.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XEngine时域AI超分特性接口，推荐超分倍率为[1.25, 2.0]。使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
        children: "HMS_XEG_EnumerateDeviceExtensionProperties"
      }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporal_upscale_extension_name",
        children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
      }), "扩展可用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件"
        })
      }), "：<xengine/xeg_vulkan_temporal_upscale.h>"]
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
      }), " 5.0.0(12)"]
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
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发时域AI超分渲染命令时的输入信息。"
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
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "的句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), " XEG_TemporalUpscaleCreateInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), " XEG_TemporalUpscaleDescription"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发时域AI超分渲染命令时的输入信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_createtemporalupscale",
              children: "PFN_HMS_XEG_CreateTemporalUpscale"
            }), ") (VkDevice device, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), " *pTemporalUpscaleInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " *pTemporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_cmdrendertemporalupscale",
              children: "PFN_HMS_XEG_CmdRenderTemporalUpscale"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), " *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制时域AI超分渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_destroytemporalupscale",
              children: "PFN_HMS_XEG_DestroyTemporalUpscale"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的函数指针定义。"]
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
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_createtemporalupscale",
              children: "HMS_XEG_CreateTemporalUpscale"
            }), " (VkDevice device, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), " *pTemporalUpscaleInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " *pTemporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrendertemporalupscale",
              children: "HMS_XEG_CmdRenderTemporalUpscale"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), " *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制时域AI超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroytemporalupscale",
              children: "HMS_XEG_DestroyTemporalUpscale"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
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