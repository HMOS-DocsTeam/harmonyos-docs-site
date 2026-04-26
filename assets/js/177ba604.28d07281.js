"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["531530"], {
953312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_types_h_capi_types_h_md_177_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-mindspore-lite-api-mindspore-lite-c-mindspore-lite-headerfile-capi-types-h-capi-types-h-md-177.json
var site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_types_h_capi_types_h_md_177_namespaceObject = JSON.parse('{"id":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h","title":"types.h","description":"概述","source":"@site/docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h.md","sourceDirName":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h","slug":"/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"types.h","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-types-h","kit":"AI","last_updated":"2026-04-22","slug":"capi-types-h"},"sidebar":"ref","previous":{"title":"tensor.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-tensor-h/capi-tensor-h"},"next":{"title":"OH_AI_TensorHandleArray","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h.md


const frontMatter = {
	title: 'types.h',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-types-h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-types-h'
};
const contentTitle = 'types.h';

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
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_AI_ModelType",
  "id": "oh_ai_modeltype",
  "level": 3
}, {
  "value": "OH_AI_DeviceType",
  "id": "oh_ai_devicetype",
  "level": 3
}, {
  "value": "OH_AI_NNRTDeviceType",
  "id": "oh_ai_nnrtdevicetype",
  "level": 3
}, {
  "value": "OH_AI_PerformanceMode",
  "id": "oh_ai_performancemode",
  "level": 3
}, {
  "value": "OH_AI_Priority",
  "id": "oh_ai_priority",
  "level": 3
}, {
  "value": "OH_AI_OptimizationLevel",
  "id": "oh_ai_optimizationlevel",
  "level": 3
}, {
  "value": "OH_AI_QuantizationType",
  "id": "oh_ai_quantizationtype",
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
        id: "typesh",
        children: "types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了MindSpore Lite支持的模型文件类型和设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <mindspore/types.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libmindspore_lite_ndk.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ai.MindSpore"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRTDeviceDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt设备信息描述，包含设备ID，设备名称等信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_ModelType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型文件的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_devicetype",
              children: "OH_AI_DeviceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_DeviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型信息，包含了目前支持的设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_nnrtdevicetype",
              children: "OH_AI_NNRTDeviceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_NNRTDeviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt管理的硬件设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_performancemode",
              children: "OH_AI_PerformanceMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PerformanceMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt硬件的工作性能模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_priority",
              children: "OH_AI_Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt推理任务优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_optimizationlevel",
              children: "OH_AI_OptimizationLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_OptimizationLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练优化等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_quantizationtype",
              children: "OH_AI_QuantizationType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_QuantizationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "量化类型信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modeltype",
      children: "OH_AI_ModelType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_ModelType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型文件的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_AI_MODELTYPE_MINDIR = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型类型是MindIR，对应的模型文件后缀为.ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_MODELTYPE_INVALID = 0xFFFFFFFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型类型无效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_devicetype",
      children: "OH_AI_DeviceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_DeviceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备类型信息，包含了目前支持的设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_DEVICETYPE_CPU = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型是CPU。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_DEVICETYPE_GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device type: GPU。预留选项，暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_DEVICETYPE_KIRIN_NPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型是麒麟NPU。预留选项，暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_DEVICETYPE_NNRT = 60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型是NNRt。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_DEVICETYPE_INVALID = 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型无效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_nnrtdevicetype",
      children: "OH_AI_NNRTDeviceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_NNRTDeviceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NNRt管理的硬件设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_NNRTDEVICE_OTHERS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型不属于以下3种，则属于其它。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_NNRTDEVICE_CPU = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_NNRTDEVICE_GPU = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_NNRTDEVICE_ACCELERATOR = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特定的加速设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_performancemode",
      children: "OH_AI_PerformanceMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_PerformanceMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NNRt硬件的工作性能模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_PERFORMANCE_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无特殊设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PERFORMANCE_LOW = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低功耗模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PERFORMANCE_MEDIUM = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功耗-性能均衡模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PERFORMANCE_HIGH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高性能模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PERFORMANCE_EXTREME = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "极致性能模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_priority",
      children: "OH_AI_Priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_Priority\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NNRt推理任务优先级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_PRIORITY_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无优先级偏好。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PRIORITY_LOW = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低优先级任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PRIORITY_MEDIUM = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中优先级任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_PRIORITY_HIGH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高优先级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_optimizationlevel",
      children: "OH_AI_OptimizationLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_OptimizationLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "训练优化等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_KO0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无优化等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_KO2 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将网络转换为float16，保持批量归一化层和损失函数为float32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_KO3 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将网络转换为float16，包括批量归一化层。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_KAUTO = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据设备选择优化等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_KOPTIMIZATIONTYPE = 0xFFFFFFFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效优化等级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_quantizationtype",
      children: "OH_AI_QuantizationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_QuantizationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "量化类型信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_NO_QUANT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不做量化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_WEIGHT_QUANT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权重量化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FULL_QUANT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全量化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_UNKNOWN_QUANT_TYPE = 0xFFFFFFFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效量化类型。"
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