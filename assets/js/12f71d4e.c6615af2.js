"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["432382"], {
151514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_options_8_h_cannkit_hiai_options_8_h_md_12f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-cann-api-hiai-foundation-c-cannkit-total-cannkit-files-cannkit-hiai-options-8-h-cannkit-hiai-options-8-h-md-12f.json
var site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_options_8_h_cannkit_hiai_options_8_h_md_12f_namespaceObject = JSON.parse('{"id":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h/cannkit-hiai-options-8h","title":"hiai_options.h","description":"概述","source":"@site/docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h/cannkit-hiai-options-8h.md","sourceDirName":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h","slug":"/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h/cannkit-hiai-options-8h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h/cannkit-hiai-options-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"hiai_options.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-options-8h","kit":"AI","last_updated":"2026-04-22","slug":"cannkit-hiai-options-8h"},"sidebar":"ref","previous":{"title":"hiai_helper.h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-helper-8h/cannkit-hiai-helper-8h"},"next":{"title":"hiai_single_op.h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h/cannkit-hiai-options-8h.md


const frontMatter = {
	title: 'hiai_options.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-options-8h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'cannkit-hiai-options-8h'
};
const contentTitle = 'hiai_options.h';

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
        id: "hiai_optionsh",
        children: "hiai_options.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选项参数的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持设置动态shape、变更模型shape、设置数据排列格式、算子融合策略、量化配置、算子级调优、模型级调优、辅助调优、带宽模式等参数配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <CANNKit/hiai_options.h>"]
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
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_formatmode",
              children: "HiAI_FormatMode"
            }), " {  HIAI_FORMAT_MODE_NCHW = 0,  HIAI_FORMAT_MODE_ORIGIN = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型编译时数据的排列格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_dynamicshapestatus",
              children: "HiAI_DynamicShapeStatus"
            }), " {  HIAI_DYNAMIC_SHAPE_DISABLED = 0,  HIAI_DYNAMIC_SHAPE_ENABLED = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能编译前可变shape。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_dynamicshapecachemode",
              children: "HiAI_DynamicShapeCacheMode"
            }), " {  HIAI_DYNAMIC_SHAPE_CACHE_BUILT_MODEL = 0,  HIAI_DYNAMIC_SHAPE_CACHE_LOADED_MODEL = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译前可变shape支持的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " {  HIAI_EXECUTE_DEVICE_NPU = 0,  HIAI_EXECUTE_DEVICE_CPU = 1,  HIAI_EXECUTE_DEVICE_GPU = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型运行时支持的设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_fallbackmode",
              children: "HiAI_FallbackMode"
            }), " {  HIAI_FALLBACK_ENABLED = 0,  HIAI_FALLBACK_DISABLED = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的硬件设备无法编译模型时，是否允许CANN Kit选择其他硬件设备，例如CPU。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_devicememoryreuseplan",
              children: "HiAI_DeviceMemoryReusePlan"
            }), " {  HIAI_DEVICE_MEMORY_REUSE_PLAN_UNSET = 0,  HIAI_DEVICE_MEMORY_REUSE_PLAN_LOW = 1,  HIAI_DEVICE_MEMORY_REUSE_PLAN_HIGH = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备内存复用配置选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_tuningstrategy",
              children: "HiAI_TuningStrategy"
            }), " {  HIAI_TUNING_STRATEGY_OFF = 0,  HIAI_TUNING_STRATEGY_ON_DEVICE_TUNING = 1,  HIAI_TUNING_STRATEGY_ON_DEVICE_PREPROCESS_TUNING = 2,  HIAI_TUNING_STRATEGY_ON_CLOUD_TUNING = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型优化策略配置选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_tuningmode",
              children: "HiAI_TuningMode"
            }), " {  HIAI_TUNING_MODE_UNSET = 0,  HIAI_TUNING_MODE_AUTO = 1,  HIAI_TUNING_MODE_HETER = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助调优模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_bandmode",
              children: "HiAI_BandMode"
            }), " {  HIAI_BANDMODE_UNSET = 0,  HIAI_BANDMODE_LOW = 1,  HIAI_BANDMODE_NORMAL = 2,  HIAI_BANDMODE_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义硬件之间带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_omtype",
              children: "HiAI_OmType"
            }), " {  HIAI_OM_TYPE_OFF = 0,  HIAI_OM_TYPE_PROFILING = 1,  HIAI_OM_TYPE_DUMP = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维测类型定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setinputtensorshapes",
              children: "HMS_HiAIOptions_SetInputTensorShapes"
            }), " (OH_NNCompilation *compilation, NN_TensorDesc *inputTensorDescs[], size_t shapeCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译时更新模型输入shape。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getinputtensorshapesize",
              children: "HMS_HiAIOptions_GetInputTensorShapeSize"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询选项参数中shape描述的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["NN_TensorDesc * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getinputtensorshape",
              children: "HMS_HiAIOptions_GetInputTensorShape"
            }), " (const OH_NNCompilation *compilation, size_t index)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询选项参数中指定索引的shape描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setformatmode",
              children: "HMS_HiAIOptions_SetFormatMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_formatmode",
              children: "HiAI_FormatMode"
            }), " formatMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型编译时的数据排列格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_formatmode",
              children: "HiAI_FormatMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getformatmode",
              children: "HMS_HiAIOptions_GetFormatMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型编译参数中的数据排列格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setdynamicshapestatus",
              children: "HMS_HiAIOptions_SetDynamicShapeStatus"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_dynamicshapestatus",
              children: "HiAI_DynamicShapeStatus"
            }), " status)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编译前可变shape配置中的EnableMode参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setdynamicshapemaxcache",
              children: "HMS_HiAIOptions_SetDynamicShapeMaxCache"
            }), " (OH_NNCompilation *compilation, size_t maxCacheCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编译前可变shape配置中的最大缓存编译后模型数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setdynamicshapecachemode",
              children: "HMS_HiAIOptions_SetDynamicShapeCacheMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_dynamicshapecachemode",
              children: "HiAI_DynamicShapeCacheMode"
            }), " mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编译前可变shape配置中的缓存模式参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_dynamicshapestatus",
              children: "HiAI_DynamicShapeStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getdynamicshapestatus",
              children: "HMS_HiAIOptions_GetDynamicShapeStatus"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译前可变shape配置中的状态参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getdynamicshapemaxcache",
              children: "HMS_HiAIOptions_GetDynamicShapeMaxCache"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译前可变shape配置中的最大缓存数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_dynamicshapecachemode",
              children: "HiAI_DynamicShapeCacheMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getdynamicshapecachemode",
              children: "HMS_HiAIOptions_GetDynamicShapeCacheMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译前可变shape配置中的cacheMode参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setoperatordeviceorder",
              children: "HMS_HiAIOptions_SetOperatorDeviceOrder"
            }), " (OH_NNCompilation *compilation, const char *operatorName, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " *executeDevices, size_t deviceCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置算子级调优配置中算子执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getoperatordevicecount",
              children: "HMS_HiAIOptions_GetOperatorDeviceCount"
            }), " (const OH_NNCompilation *compilation, const char *operatorName)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询算子级调优配置中指定算子的执行设备个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getoperatordeviceorder",
              children: "HMS_HiAIOptions_GetOperatorDeviceOrder"
            }), " (const OH_NNCompilation *compilation, const char *operatorName)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询算子级调优配置中指定算子的执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setmodeldeviceorder",
              children: "HMS_HiAIOptions_SetModelDeviceOrder"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " *executeDevices, size_t deviceCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型级调优配置中模型执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getmodeldevicecount",
              children: "HMS_HiAIOptions_GetModelDeviceCount"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型级调优配置中模型的执行设备个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getmodeldeviceorder",
              children: "HMS_HiAIOptions_GetModelDeviceOrder"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型级调优配置中模型的执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setfallbackmode",
              children: "HMS_HiAIOptions_SetFallbackMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_fallbackmode",
              children: "HiAI_FallbackMode"
            }), " fallbackMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置调优配置中的回滚模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_fallbackmode",
              children: "HiAI_FallbackMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getfallbackmode",
              children: "HMS_HiAIOptions_GetFallbackMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询调优配置中的回滚模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setdevicememoryreuseplan",
              children: "HMS_HiAIOptions_SetDeviceMemoryReusePlan"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_devicememoryreuseplan",
              children: "HiAI_DeviceMemoryReusePlan"
            }), " deviceMemoryReusePlan)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置调优配置中的设备内存复用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_devicememoryreuseplan",
              children: "HiAI_DeviceMemoryReusePlan"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getdevicememoryreuseplan",
              children: "HMS_HiAIOptions_GetDeviceMemoryReusePlan"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询调优配置中的设备内存复用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_settuningstrategy",
              children: "HMS_HiAIOptions_SetTuningStrategy"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_tuningstrategy",
              children: "HiAI_TuningStrategy"
            }), " tuningStrategy)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型编译时的模型优化策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_tuningstrategy",
              children: "HiAI_TuningStrategy"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_gettuningstrategy",
              children: "HMS_HiAIOptions_GetTuningStrategy"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型优化策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setquantconfig",
              children: "HMS_HiAIOptions_SetQuantConfig"
            }), " (OH_NNCompilation *compilation, void *data, size_t size)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型编译时量化配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getquantconfigdata",
              children: "HMS_HiAIOptions_GetQuantConfigData"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询量化配置的数据地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getquantconfigsize",
              children: "HMS_HiAIOptions_GetQuantConfigSize"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询量化配置的数据大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_settuningmode",
              children: "HMS_HiAIOptions_SetTuningMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_tuningmode",
              children: "HiAI_TuningMode"
            }), " tuningMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择辅助调优模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_settuningcachedir",
              children: "HMS_HiAIOptions_SetTuningCacheDir"
            }), " (OH_NNCompilation *compilation, const char *cacheDir)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置辅助调优的缓存目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_tuningmode",
              children: "HiAI_TuningMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_gettuningmode",
              children: "HMS_HiAIOptions_GetTuningMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询辅助调优模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_gettuningcachedir",
              children: "HMS_HiAIOptions_GetTuningCacheDir"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询辅助调优的缓存目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setbandmode",
              children: "HMS_HiAIOptions_SetBandMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_bandmode",
              children: "HiAI_BandMode"
            }), " bandMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置NPU与周边硬件IO资源的带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_bandmode",
              children: "HiAI_BandMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_getbandmode",
              children: "HMS_HiAIOptions_GetBandMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setomoptions",
              children: "HMS_HiAIOptions_SetOmOptions"
            }), "(OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_omtype",
              children: "HiAI_OmType"
            }), " type, const char *outputDir)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型加载时的维测选项信息。"
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