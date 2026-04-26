"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["51167"], {
939570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_aipp_param_8_h_cannkit_hiai_aipp_param_8_h_md_9cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-cann-api-hiai-foundation-c-cannkit-total-cannkit-files-cannkit-hiai-aipp-param-8-h-cannkit-hiai-aipp-param-8-h-md-9cb.json
var site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_aipp_param_8_h_cannkit_hiai_aipp_param_8_h_md_9cb_namespaceObject = JSON.parse('{"id":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h","title":"hiai_aipp_param.h","description":"概述","source":"@site/docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h.md","sourceDirName":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h","slug":"/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"hiai_aipp_param.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-aipp-param-8h","kit":"AI","last_updated":"2026-04-22","slug":"cannkit-hiai-aipp-param-8h"},"sidebar":"ref","previous":{"title":"CANN","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit"},"next":{"title":"hiai_helper.h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-helper-8h/cannkit-hiai-helper-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h.md


const frontMatter = {
	title: 'hiai_aipp_param.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-aipp-param-8h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'cannkit-hiai-aipp-param-8h'
};
const contentTitle = 'hiai_aipp_param.h';

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
        id: "hiai_aipp_paramh",
        children: "hiai_aipp_param.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型推理时动态AIPP对象创建，参数设置和查询的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <CANNKit/hiai_aipp_param.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhiai_foundation.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.HiAIFoundation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "CANN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIPP参数对象。"
          })]
        })
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
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " {  HIAI_YUV420SP_U8 = 0,  HIAI_XRGB8888_U8 = 1,  HIAI_YUV400_U8 = 2,  HIAI_ARGB8888_U8 = 3,  HIAI_YUYV_U8 = 4,  HIAI_YUV422SP_U8 = 5,  HIAI_AYUV444_U8 = 6,  HIAI_RGB888_U8 = 7,  HIAI_BGR888_U8 = 8,  HIAI_YUV444SP_U8 = 9,  HIAI_YVU444SP_U8 = 10,  HIAI_IMAGE_FORMAT_INVALID = 255  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANN Kit推理支持的输入和输出Tensor的图片格式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), " {  HIAI_JPEG = 0,  HIAI_BT_601_NARROW = 1,  HIAI_BT_601_FULL = 2,  HIAI_BT_709_NARROW = 3,  HIAI_IMAGE_COLOR_SPACE_INVALID = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像色域空间类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_create",
              children: "HMS_HiAIAippParam_Create"
            }), " (uint32_t batchNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据batchNum创建动态AippParam对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getdata",
              children: "HMS_HiAIAippParam_GetData"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取AippParam申请的内存地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getdatasize",
              children: "HMS_HiAIAippParam_GetDataSize"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取AippParam申请的内存大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getinputindex",
              children: "HMS_HiAIAippParam_GetInputIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象所在输入的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputindex",
              children: "HMS_HiAIAippParam_SetInputIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t inputIndex)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam在输入上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getinputaippindex",
              children: "HMS_HiAIAippParam_GetInputAippIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象在该输入的多个输出分支上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputaippindex",
              children: "HMS_HiAIAippParam_SetInputAippIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t inputAippIndex)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象作用于该输入的多个输出分支上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_destroy",
              children: "HMS_HiAIAippParam_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " **aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放AippParam对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputformat",
              children: "HMS_HiAIAippParam_SetInputFormat"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " inputFormat)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的输入图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getinputformat",
              children: "HMS_HiAIAippParam_GetInputFormat"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的输入图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setinputshape",
              children: "HMS_HiAIAippParam_SetInputShape"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t srcImageW, uint32_t srcImageH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的输入图像宽高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getinputshape",
              children: "HMS_HiAIAippParam_GetInputShape"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t *srcImageW, uint32_t *srcImageH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的输入图像宽高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getbatchcount",
              children: "HMS_HiAIAippParam_GetBatchCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的图像数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setcscconfig",
              children: "HMS_HiAIAippParam_SetCscConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " inputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " outputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), " space)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的CSC色域转换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getcscconfig",
              children: "HMS_HiAIAippParam_GetCscConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " *inputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " *outputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), " *space)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的CSC色域转换相关参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setchannelswapconfig",
              children: "HMS_HiAIAippParam_SetChannelSwapConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, bool rbuvSwapSwitch, bool axSwapSwitch)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的ChannelSwap通道交换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getchannelswapconfig",
              children: "HMS_HiAIAippParam_GetChannelSwapConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, bool *rbuvSwapSwitch, bool *axSwapSwitch)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的ChannelSwap通道交换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setsinglebatchmulticrop",
              children: "HMS_HiAIAippParam_SetSingleBatchMultiCrop"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, bool singleBatchMultiCrop)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的SingleBatchMultiCrop标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getsinglebatchmulticrop",
              children: "HMS_HiAIAippParam_GetSingleBatchMultiCrop"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的SingleBatchMultiCrop标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setcropconfig",
              children: "HMS_HiAIAippParam_SetCropConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t startPosW, uint32_t startPosH, uint32_t croppedW, uint32_t croppedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的裁剪参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getcropconfig",
              children: "HMS_HiAIAippParam_GetCropConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t *startPosW, uint32_t *startPosH, uint32_t *croppedW, uint32_t *croppedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的裁剪参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setresizeconfig",
              children: "HMS_HiAIAippParam_SetResizeConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t resizedW, uint32_t resizedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的图像缩放参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getresizeconfig",
              children: "HMS_HiAIAippParam_GetResizeConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t *resizedW, uint32_t *resizedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的图像缩放参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setpadconfig",
              children: "HMS_HiAIAippParam_SetPadConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t leftPadSize, uint32_t rightPadSize, uint32_t topPadSize, uint32_t bottomPadSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的输入图像的填充像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getpadconfig",
              children: "HMS_HiAIAippParam_GetPadConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t *leftPadSize, uint32_t *rightPadSize, uint32_t *topPadSize, uint32_t *bottomPadSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的输入图像的填充像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setchannelpadding",
              children: "HMS_HiAIAippParam_SetChannelPadding"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t paddingValues[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的通道padding填充值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getchannelpadding",
              children: "HMS_HiAIAippParam_GetChannelPadding"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t paddingValues[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的通道padding填充值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setrotationangle",
              children: "HMS_HiAIAippParam_SetRotationAngle"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float rotationAngle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getrotationangle",
              children: "HMS_HiAIAippParam_GetRotationAngle"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float *rotationAngle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的图像旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setdtcmeanpixel",
              children: "HMS_HiAIAippParam_SetDtcMeanPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t meanPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的数据类型转换通道像素平均值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getdtcmeanpixel",
              children: "HMS_HiAIAippParam_GetDtcMeanPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t meanPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的数据类型转换通道像素平均值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setdtcminpixel",
              children: "HMS_HiAIAippParam_SetDtcMinPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float minPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的数据类型转换通道像素最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getdtcminpixel",
              children: "HMS_HiAIAippParam_GetDtcMinPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float minPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的数据类型转换通道像素最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_setdtcvarrecipixel",
              children: "HMS_HiAIAippParam_SetDtcVarReciPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float varReciPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的数据类型转换通道像素方差。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaiaippparam_getdtcvarrecipixel",
              children: "HMS_HiAIAippParam_GetDtcVarReciPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float varReciPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的数据类型转换通道像素方差。"
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