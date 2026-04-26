"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["719579"], {
620681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_context_h_capi_context_h_md_8c9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-mindspore-lite-api-mindspore-lite-c-mindspore-lite-headerfile-capi-context-h-capi-context-h-md-8c9.json
var site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_context_h_capi_context_h_md_8c9_namespaceObject = JSON.parse('{"id":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h","title":"context.h","description":"概述","source":"@site/docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h.md","sourceDirName":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h","slug":"/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"context.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-context-h","kit":"AI","last_updated":"2026-04-22","slug":"capi-context-h"},"sidebar":"ref","previous":{"title":"MindSpore","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore"},"next":{"title":"data_type.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-data-type-h/capi-data-type-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h.md


const frontMatter = {
	title: 'context.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-context-h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-context-h'
};
const contentTitle = 'context.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AI_ContextCreate()",
  "id": "oh_ai_contextcreate",
  "level": 3
}, {
  "value": "OH_AI_ContextDestroy()",
  "id": "oh_ai_contextdestroy",
  "level": 3
}, {
  "value": "OH_AI_ContextSetThreadNum()",
  "id": "oh_ai_contextsetthreadnum",
  "level": 3
}, {
  "value": "OH_AI_ContextGetThreadNum()",
  "id": "oh_ai_contextgetthreadnum",
  "level": 3
}, {
  "value": "OH_AI_ContextSetThreadAffinityMode()",
  "id": "oh_ai_contextsetthreadaffinitymode",
  "level": 3
}, {
  "value": "OH_AI_ContextGetThreadAffinityMode()",
  "id": "oh_ai_contextgetthreadaffinitymode",
  "level": 3
}, {
  "value": "OH_AI_ContextSetThreadAffinityCoreList()",
  "id": "oh_ai_contextsetthreadaffinitycorelist",
  "level": 3
}, {
  "value": "OH_AI_ContextGetThreadAffinityCoreList()",
  "id": "oh_ai_contextgetthreadaffinitycorelist",
  "level": 3
}, {
  "value": "OH_AI_ContextSetEnableParallel()",
  "id": "oh_ai_contextsetenableparallel",
  "level": 3
}, {
  "value": "OH_AI_ContextGetEnableParallel()",
  "id": "oh_ai_contextgetenableparallel",
  "level": 3
}, {
  "value": "OH_AI_ContextAddDeviceInfo()",
  "id": "oh_ai_contextadddeviceinfo",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoCreate()",
  "id": "oh_ai_deviceinfocreate",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoDestroy()",
  "id": "oh_ai_deviceinfodestroy",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoSetProvider()",
  "id": "oh_ai_deviceinfosetprovider",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetProvider()",
  "id": "oh_ai_deviceinfogetprovider",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoSetProviderDevice()",
  "id": "oh_ai_deviceinfosetproviderdevice",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetProviderDevice()",
  "id": "oh_ai_deviceinfogetproviderdevice",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetDeviceType()",
  "id": "oh_ai_deviceinfogetdevicetype",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoSetEnableFP16()",
  "id": "oh_ai_deviceinfosetenablefp16",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetEnableFP16()",
  "id": "oh_ai_deviceinfogetenablefp16",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoSetFrequency()",
  "id": "oh_ai_deviceinfosetfrequency",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetFrequency()",
  "id": "oh_ai_deviceinfogetfrequency",
  "level": 3
}, {
  "value": "OH_AI_GetAllNNRTDeviceDescs()",
  "id": "oh_ai_getallnnrtdevicedescs",
  "level": 3
}, {
  "value": "OH_AI_GetElementOfNNRTDeviceDescs()",
  "id": "oh_ai_getelementofnnrtdevicedescs",
  "level": 3
}, {
  "value": "OH_AI_DestroyAllNNRTDeviceDescs()",
  "id": "oh_ai_destroyallnnrtdevicedescs",
  "level": 3
}, {
  "value": "OH_AI_GetDeviceIdFromNNRTDeviceDesc()",
  "id": "oh_ai_getdeviceidfromnnrtdevicedesc",
  "level": 3
}, {
  "value": "OH_AI_GetNameFromNNRTDeviceDesc()",
  "id": "oh_ai_getnamefromnnrtdevicedesc",
  "level": 3
}, {
  "value": "OH_AI_GetTypeFromNNRTDeviceDesc()",
  "id": "oh_ai_gettypefromnnrtdevicedesc",
  "level": 3
}, {
  "value": "OH_AI_CreateNNRTDeviceInfoByName()",
  "id": "oh_ai_creatennrtdeviceinfobyname",
  "level": 3
}, {
  "value": "OH_AI_CreateNNRTDeviceInfoByType()",
  "id": "oh_ai_creatennrtdeviceinfobytype",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoSetDeviceId()",
  "id": "oh_ai_deviceinfosetdeviceid",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetDeviceId()",
  "id": "oh_ai_deviceinfogetdeviceid",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoSetPerformanceMode()",
  "id": "oh_ai_deviceinfosetperformancemode",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetPerformanceMode()",
  "id": "oh_ai_deviceinfogetperformancemode",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoSetPriority()",
  "id": "oh_ai_deviceinfosetpriority",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoGetPriority()",
  "id": "oh_ai_deviceinfogetpriority",
  "level": 3
}, {
  "value": "OH_AI_DeviceInfoAddExtension()",
  "id": "oh_ai_deviceinfoaddextension",
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
        id: "contexth",
        children: "context.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了Context相关的接口，可以配置运行时信息，该接口是非线程安全的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <mindspore/context.h>"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore Lite上下文信息的指针，该指针会指向Context。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore Lite运行设备信息的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextcreate",
              children: "OH_AI_API OH_AI_ContextHandle OH_AI_ContextCreate()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个上下文的对象。注意：此接口需跟OH_AI_ContextDestroy配套使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextdestroy",
              children: "OH_AI_API void OH_AI_ContextDestroy(OH_AI_ContextHandle *context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放上下文对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextsetthreadnum",
              children: "OH_AI_API void OH_AI_ContextSetThreadNum(OH_AI_ContextHandle context, int32_t thread_num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置运行时的线程数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextgetthreadnum",
              children: "OH_AI_API int32_t OH_AI_ContextGetThreadNum(const OH_AI_ContextHandle context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取线程数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextsetthreadaffinitymode",
              children: "OH_AI_API void OH_AI_ContextSetThreadAffinityMode(OH_AI_ContextHandle context, int mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置运行时线程绑定CPU核心的策略，按照CPU物理核频率分为大、中、小三种类型的核心，并且仅需绑大核或者绑中核，不需要绑小核。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextgetthreadaffinitymode",
              children: "OH_AI_API int OH_AI_ContextGetThreadAffinityMode(const OH_AI_ContextHandle context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取运行时线程绑定CPU核心的策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextsetthreadaffinitycorelist",
              children: "OH_AI_API void OH_AI_ContextSetThreadAffinityCoreList(OH_AI_ContextHandle context, const int32_t *core_list,size_t core_num)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置运行时线程绑定CPU核心的列表。  例如：当core_list=[2,6,8]时，则线程会在CPU的第2，6，8个核心上运行。  如果对于同一个上下文对象，调用了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitymode",
              children: "OH_AI_ContextSetThreadAffinityMode"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitycorelist",
              children: "OH_AI_ContextSetThreadAffinityCoreList"
            }), "。  这两个函数，则仅", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitycorelist",
              children: "OH_AI_ContextSetThreadAffinityCoreList"
            }), "的core_list参数生效，而", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitymode",
              children: "OH_AI_ContextSetThreadAffinityMode"
            }), "的mode参数不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextgetthreadaffinitycorelist",
              children: "OH_AI_API const int32_t *OH_AI_ContextGetThreadAffinityCoreList(const OH_AI_ContextHandle context, size_t *core_num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取CPU绑核列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextsetenableparallel",
              children: "OH_AI_API void OH_AI_ContextSetEnableParallel(OH_AI_ContextHandle context, bool is_parallel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置运行时是否支持并行。此接口特性当前未开启，设置无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextgetenableparallel",
              children: "OH_AI_API bool OH_AI_ContextGetEnableParallel(const OH_AI_ContextHandle context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取是否支持算子间并行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_contextadddeviceinfo",
              children: "OH_AI_API void OH_AI_ContextAddDeviceInfo(OH_AI_ContextHandle context, OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个用户定义的运行设备信息附加到推理上下文中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfocreate",
              children: "OH_AI_API OH_AI_DeviceInfoHandle OH_AI_DeviceInfoCreate(OH_AI_DeviceType device_type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个设备信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfodestroy",
              children: "OH_AI_API void OH_AI_DeviceInfoDestroy(OH_AI_DeviceInfoHandle *device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放设备信息实例。注意：设备信息实例被添加到context后，无须调用者手动释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfosetprovider",
              children: "OH_AI_API void OH_AI_DeviceInfoSetProvider(OH_AI_DeviceInfoHandle device_info, const char *provider)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置生产商的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetprovider",
              children: "OH_AI_API const char *OH_AI_DeviceInfoGetProvider(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取生产商的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfosetproviderdevice",
              children: "OH_AI_API void OH_AI_DeviceInfoSetProviderDevice(OH_AI_DeviceInfoHandle device_info, const char *device)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置生产商设备的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetproviderdevice",
              children: "OH_AI_API const char *OH_AI_DeviceInfoGetProviderDevice(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取生产商设备的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetdevicetype",
              children: "OH_AI_API OH_AI_DeviceType OH_AI_DeviceInfoGetDeviceType(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfosetenablefp16",
              children: "OH_AI_API void OH_AI_DeviceInfoSetEnableFP16(OH_AI_DeviceInfoHandle device_info, bool is_fp16)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启float16推理模式，仅CPU/GPU设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetenablefp16",
              children: "OH_AI_API bool OH_AI_DeviceInfoGetEnableFP16(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取是否开启float16推理模式，仅CPU/GPU设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfosetfrequency",
              children: "OH_AI_API void OH_AI_DeviceInfoSetFrequency(OH_AI_DeviceInfoHandle device_info, int frequency)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置NPU的频率，仅NPU设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetfrequency",
              children: "OH_AI_API int OH_AI_DeviceInfoGetFrequency(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NPU的频率类型，仅NPU设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_getallnnrtdevicedescs",
              children: "OH_AI_API NNRTDeviceDesc *OH_AI_GetAllNNRTDeviceDescs(size_t *num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统中所有NNRt硬件设备的描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_getelementofnnrtdevicedescs",
              children: "OH_AI_API NNRTDeviceDesc *OH_AI_GetElementOfNNRTDeviceDescs(NNRTDeviceDesc *descs, size_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NNRt设备描述信息数组中的元素指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_destroyallnnrtdevicedescs",
              children: "OH_AI_API void OH_AI_DestroyAllNNRTDeviceDescs(NNRTDeviceDesc **desc)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_getallnnrtdevicedescs",
              children: "OH_AI_GetAllNNRTDeviceDescs"
            }), "获取的NNRt描述信息实例数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_getdeviceidfromnnrtdevicedesc",
              children: "OH_AI_API size_t OH_AI_GetDeviceIdFromNNRTDeviceDesc(const NNRTDeviceDesc *desc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从特定的NNRt设备描述信息实例获取NNRt设备ID。注意，此ID只对NNRt有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_getnamefromnnrtdevicedesc",
              children: "OH_AI_API const char *OH_AI_GetNameFromNNRTDeviceDesc(const NNRTDeviceDesc *desc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从特定的NNRt设备描述信息实例获取NNRt设备名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_gettypefromnnrtdevicedesc",
              children: "OH_AI_API OH_AI_NNRTDeviceType OH_AI_GetTypeFromNNRTDeviceDesc(const NNRTDeviceDesc *desc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从特定的NNRt设备描述信息实例获取NNRt设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_creatennrtdeviceinfobyname",
              children: "OH_AI_API OH_AI_DeviceInfoHandle OH_AI_CreateNNRTDeviceInfoByName(const char *name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查找指定名称的NNRt设备，根据找到的第一个设备信息，创建NNRt设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_creatennrtdeviceinfobytype",
              children: "OH_AI_API OH_AI_DeviceInfoHandle OH_AI_CreateNNRTDeviceInfoByType(OH_AI_NNRTDeviceType type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查找指定类型的NNRt设备，根据找到的第一个设备信息，创建NNRt设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfosetdeviceid",
              children: "OH_AI_API void OH_AI_DeviceInfoSetDeviceId(OH_AI_DeviceInfoHandle device_info, size_t device_id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置NNRt设备ID，仅NNRt设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetdeviceid",
              children: "OH_AI_API size_t OH_AI_DeviceInfoGetDeviceId(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NNRt设备ID，仅NNRt设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfosetperformancemode",
              children: "OH_AI_API void OH_AI_DeviceInfoSetPerformanceMode(OH_AI_DeviceInfoHandle device_info, OH_AI_PerformanceMode mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置NNRt性能模式，仅NNRt设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetperformancemode",
              children: "OH_AI_API OH_AI_PerformanceMode OH_AI_DeviceInfoGetPerformanceMode(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NNRt性能模式，仅NNRt设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfosetpriority",
              children: "OH_AI_API void OH_AI_DeviceInfoSetPriority(OH_AI_DeviceInfoHandle device_info, OH_AI_Priority priority)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置NNRt任务优先级，仅NNRt设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfogetpriority",
              children: "OH_AI_API OH_AI_Priority OH_AI_DeviceInfoGetPriority(const OH_AI_DeviceInfoHandle device_info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NNRt任务优先级，仅NNRt设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_deviceinfoaddextension",
              children: "OH_AI_API OH_AI_Status OH_AI_DeviceInfoAddExtension(OH_AI_DeviceInfoHandle device_info, const char *name,const char *value, size_t value_size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向设备信息中添加键/值对形式的扩展配置。只对NNRt设备信息有效。  当前仅支持配置以下11种键：{\"CachePath\": \"YourCachePath\"}，{\"CacheVersion\": \"YourCacheVersion\"}，  {\"QuantBuffer\": \"YourQuantBuffer\"}，{\"ModelName\": \"YourModelName\"}，  {\"isProfiling\": \"YourProfilingSwitch\"}，{\"opLayout\": \"YourOpLayout\"}，  {\"InputDims\": \"YourInputDims\"}，{\"DynamicDims\": \"YourDynamicDims\"}，  {\"QuantConfigData\": \"YourQuantConfigData\"}，{\"BandMode\": \"YourBandMode\"}，  {\"NPU_FM_SHARED\": \"YourNPU_FM_SHARED\"}，用户可根据使用情况配置各个键对应的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextcreate",
      children: "OH_AI_ContextCreate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_ContextHandle OH_AI_ContextCreate()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个上下文的对象。注意：此接口需跟OH_AI_ContextDestroy配套使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextdestroy",
      children: "OH_AI_ContextDestroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_ContextDestroy(OH_AI_ContextHandle *context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放上下文对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " *context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "的二级指针，上下文销毁后会对context置为空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextsetthreadnum",
      children: "OH_AI_ContextSetThreadNum()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_ContextSetThreadNum(OH_AI_ContextHandle context, int32_t thread_num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置运行时的线程数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t thread_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行时的线程数量。长度跟随系统限制。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextgetthreadnum",
      children: "OH_AI_ContextGetThreadNum()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API int32_t OH_AI_ContextGetThreadNum(const OH_AI_ContextHandle context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取线程数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前的线程数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextsetthreadaffinitymode",
      children: "OH_AI_ContextSetThreadAffinityMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_ContextSetThreadAffinityMode(OH_AI_ContextHandle context, int mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置运行时线程绑定CPU核心的策略，按照CPU物理核频率分为大、中、小三种类型的核心，并且仅需绑大核或者绑中核，不需要绑小核。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑核策略。一共有三种策略，0为不绑核，1为大核优先，2为中核优先。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextgetthreadaffinitymode",
      children: "OH_AI_ContextGetThreadAffinityMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API int OH_AI_ContextGetThreadAffinityMode(const OH_AI_ContextHandle context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取运行时线程绑定CPU核心的策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑核策略。一共有三种策略，0为不绑核，1为大核优先，2为中核优先。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextsetthreadaffinitycorelist",
      children: "OH_AI_ContextSetThreadAffinityCoreList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_ContextSetThreadAffinityCoreList(OH_AI_ContextHandle context, const int32_t *core_list,size_t core_num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置运行时线程绑定CPU核心的列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：当core_list=[2,6,8]时，则线程会在CPU的第2，6，8个核心上运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果对于同一个上下文对象，调用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitymode",
        children: "OH_AI_ContextSetThreadAffinityMode"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitycorelist",
        children: "OH_AI_ContextSetThreadAffinityCoreList"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这两个函数，则仅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitycorelist",
        children: "OH_AI_ContextSetThreadAffinityCoreList"
      }), "的core_list参数生效，而", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_contextsetthreadaffinitymode",
        children: "OH_AI_ContextSetThreadAffinityMode"
      }), "的mode参数不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t *core_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU绑核的列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t core_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "核的数量，它就代表core_list的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextgetthreadaffinitycorelist",
      children: "OH_AI_ContextGetThreadAffinityCoreList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API const int32_t *OH_AI_ContextGetThreadAffinityCoreList(const OH_AI_ContextHandle context, size_t *core_num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取CPU绑核列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *core_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，表示核的数量。"
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
            children: "OH_AI_API const int32_t *"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CPU绑核列表。此列表对象由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "管理，调用者无须手动释放。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextsetenableparallel",
      children: "OH_AI_ContextSetEnableParallel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_ContextSetEnableParallel(OH_AI_ContextHandle context, bool is_parallel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置运行时是否支持并行。此接口特性当前未开启，设置无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool is_parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持并行。true为支持并行，false为不支持并行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextgetenableparallel",
      children: "OH_AI_ContextGetEnableParallel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API bool OH_AI_ContextGetEnableParallel(const OH_AI_ContextHandle context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取是否支持算子间并行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持并行。true为支持并行，false为不支持并行。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_contextadddeviceinfo",
      children: "OH_AI_ContextAddDeviceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_ContextAddDeviceInfo(OH_AI_ContextHandle context, OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个用户定义的运行设备信息附加到推理上下文中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向上下文信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfocreate",
      children: "OH_AI_DeviceInfoCreate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_DeviceInfoHandle OH_AI_DeviceInfoCreate(OH_AI_DeviceType device_type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个设备信息对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_devicetype",
              children: "OH_AI_DeviceType"
            }), " device_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_devicetype",
              children: "OH_AI_DeviceType"
            }), "。"]
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfodestroy",
      children: "OH_AI_DeviceInfoDestroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoDestroy(OH_AI_DeviceInfoHandle *device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放设备信息实例。注意：设备信息实例被添加到context后，无须调用者手动释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " *device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfosetprovider",
      children: "OH_AI_DeviceInfoSetProvider()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoSetProvider(OH_AI_DeviceInfoHandle device_info, const char *provider)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置生产商的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产商的名称。字符串长度跟随系统限制。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetprovider",
      children: "OH_AI_DeviceInfoGetProvider()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API const char *OH_AI_DeviceInfoGetProvider(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取生产商的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API const char *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产商的名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfosetproviderdevice",
      children: "OH_AI_DeviceInfoSetProviderDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoSetProviderDevice(OH_AI_DeviceInfoHandle device_info, const char *device)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置生产商设备的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产商设备名称。例如: CPU。字符串长度跟随系统限制。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetproviderdevice",
      children: "OH_AI_DeviceInfoGetProviderDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API const char *OH_AI_DeviceInfoGetProviderDevice(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取生产商设备的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API const char *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产商设备的名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetdevicetype",
      children: "OH_AI_DeviceInfoGetDeviceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_DeviceType OH_AI_DeviceInfoGetDeviceType(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_devicetype",
              children: "OH_AI_DeviceType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产商设备类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfosetenablefp16",
      children: "OH_AI_DeviceInfoSetEnableFP16()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoSetEnableFP16(OH_AI_DeviceInfoHandle device_info, bool is_fp16)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启float16推理模式，仅CPU/GPU设备可用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool is_fp16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启float16推理模式。true为开启float16推理模式，false为不开启float16推理模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetenablefp16",
      children: "OH_AI_DeviceInfoGetEnableFP16()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API bool OH_AI_DeviceInfoGetEnableFP16(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取是否开启float16推理模式，仅CPU/GPU设备可用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启float16推理模式。true为开启float16推理模式，false为不开启float16推理模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfosetfrequency",
      children: "OH_AI_DeviceInfoSetFrequency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoSetFrequency(OH_AI_DeviceInfoHandle device_info, int frequency)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置NPU的频率，仅NPU设备可用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "频率类型，取值范围为0-4，默认是3。0表示不设置，由系统调节；1表示低功耗；2表示平衡；3表示高性能；4表示超高性能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetfrequency",
      children: "OH_AI_DeviceInfoGetFrequency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API int OH_AI_DeviceInfoGetFrequency(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取NPU的频率类型，仅NPU设备可用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPU的频率类型。取值范围为0-4，0表示不设置，由系统调节；1表示低功耗；2表示平衡；3表示高性能；4表示超高性能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_getallnnrtdevicedescs",
      children: "OH_AI_GetAllNNRTDeviceDescs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API NNRTDeviceDesc *OH_AI_GetAllNNRTDeviceDescs(size_t *num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取系统中所有NNRt硬件设备的描述信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，返回设备数量。"
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向NNRt设备描述信息实例数组的指针。当获取失败时，返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_getelementofnnrtdevicedescs",
      children: "OH_AI_GetElementOfNNRTDeviceDescs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API NNRTDeviceDesc *OH_AI_GetElementOfNNRTDeviceDescs(NNRTDeviceDesc *descs, size_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取NNRt设备描述信息数组中的元素指针。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            }), " *descs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt设备描述信息数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组元素索引。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt设备描述信息类型指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_destroyallnnrtdevicedescs",
      children: "OH_AI_DestroyAllNNRTDeviceDescs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DestroyAllNNRTDeviceDescs(NNRTDeviceDesc **desc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-context-h/capi-context-h#oh_ai_getallnnrtdevicedescs",
        children: "OH_AI_GetAllNNRTDeviceDescs"
      }), "获取的NNRt描述信息实例数组。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            }), " **desc"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向NNRt设备描述信息实例数组的二重指针。销毁结束，desc指向内容会被置为NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_getdeviceidfromnnrtdevicedesc",
      children: "OH_AI_GetDeviceIdFromNNRTDeviceDesc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API size_t OH_AI_GetDeviceIdFromNNRTDeviceDesc(const NNRTDeviceDesc *desc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从特定的NNRt设备描述信息实例获取NNRt设备ID。注意，此ID只对NNRt有效。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            }), " *desc"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向NNRt设备描述信息实例的指针。"
          })]
        })
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
            children: "OH_AI_API size_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt设备ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_getnamefromnnrtdevicedesc",
      children: "OH_AI_GetNameFromNNRTDeviceDesc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API const char *OH_AI_GetNameFromNNRTDeviceDesc(const NNRTDeviceDesc *desc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从特定的NNRt设备描述信息实例获取NNRt设备名称。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            }), " *desc"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向NNRt设备描述信息实例的指针。"
          })]
        })
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
            children: "OH_AI_API const char *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt设备名称，指向一个常量字符串的指针，该常量字符串由desc持有，调用者无需单独释放此指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_gettypefromnnrtdevicedesc",
      children: "OH_AI_GetTypeFromNNRTDeviceDesc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_NNRTDeviceType OH_AI_GetTypeFromNNRTDeviceDesc(const NNRTDeviceDesc *desc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从特定的NNRt设备描述信息实例获取NNRt设备类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-nnrtdevicedesc/capi-mindspore-nnrtdevicedesc",
              children: "NNRTDeviceDesc"
            }), " *desc"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向NNRt设备描述信息实例的指针。"
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_nnrtdevicetype",
              children: "OH_AI_NNRTDeviceType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_nnrtdevicetype",
              children: "OH_AI_NNRTDeviceType"
            }), " NNRt设备类型。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_creatennrtdeviceinfobyname",
      children: "OH_AI_CreateNNRTDeviceInfoByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_DeviceInfoHandle OH_AI_CreateNNRTDeviceInfoByName(const char *name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查找指定名称的NNRt设备，根据找到的第一个设备信息，创建NNRt设备信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标NNRt设备名。字符串长度跟随系统限制。"
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_creatennrtdeviceinfobytype",
      children: "OH_AI_CreateNNRTDeviceInfoByType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_DeviceInfoHandle OH_AI_CreateNNRTDeviceInfoByType(OH_AI_NNRTDeviceType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查找指定类型的NNRt设备，根据找到的第一个设备信息，创建NNRt设备信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_nnrtdevicetype",
              children: "OH_AI_NNRTDeviceType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_nnrtdevicetype",
              children: "OH_AI_NNRTDeviceType"
            }), " 目标NNRt设备类型。"]
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfosetdeviceid",
      children: "OH_AI_DeviceInfoSetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoSetDeviceId(OH_AI_DeviceInfoHandle device_info, size_t device_id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置NNRt设备ID，仅NNRt设备可用。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t device_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt设备ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetdeviceid",
      children: "OH_AI_DeviceInfoGetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API size_t OH_AI_DeviceInfoGetDeviceId(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取NNRt设备ID，仅NNRt设备可用。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
            children: "OH_AI_API size_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNRt设备ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfosetperformancemode",
      children: "OH_AI_DeviceInfoSetPerformanceMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoSetPerformanceMode(OH_AI_DeviceInfoHandle device_info, OH_AI_PerformanceMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置NNRt性能模式，仅NNRt设备可用。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_performancemode",
              children: "OH_AI_PerformanceMode"
            }), " mode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_performancemode",
              children: "OH_AI_PerformanceMode"
            }), " NNRt性能模式。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetperformancemode",
      children: "OH_AI_DeviceInfoGetPerformanceMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_PerformanceMode OH_AI_DeviceInfoGetPerformanceMode(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取NNRt性能模式，仅NNRt设备可用。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_performancemode",
              children: "OH_AI_PerformanceMode"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_performancemode",
              children: "OH_AI_PerformanceMode"
            }), " NNRt性能模式。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfosetpriority",
      children: "OH_AI_DeviceInfoSetPriority()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_DeviceInfoSetPriority(OH_AI_DeviceInfoHandle device_info, OH_AI_Priority priority)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置NNRt任务优先级，仅NNRt设备可用。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_priority",
              children: "OH_AI_Priority"
            }), " priority"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_priority",
              children: "OH_AI_Priority"
            }), " NNRt任务优先级。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfogetpriority",
      children: "OH_AI_DeviceInfoGetPriority()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Priority OH_AI_DeviceInfoGetPriority(const OH_AI_DeviceInfoHandle device_info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取NNRt任务优先级，仅NNRt设备可用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_priority",
              children: "OH_AI_Priority"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_priority",
              children: "OH_AI_Priority"
            }), " NNRt任务优先级。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_deviceinfoaddextension",
      children: "OH_AI_DeviceInfoAddExtension()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_DeviceInfoAddExtension(OH_AI_DeviceInfoHandle device_info, const char *name,const char *value, size_t value_size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向设备信息中添加键/值对形式的扩展配置。只对NNRt设备信息有效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持配置以下11种键：{\"CachePath\": \"YourCachePath\"}，{\"CacheVersion\": \"YourCacheVersion\"}，"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "{\"QuantBuffer\": \"YourQuantBuffer\"}，{\"ModelName\": \"YourModelName\"}，"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "{\"isProfiling\": \"YourProfilingSwitch\"}，{\"opLayout\": \"YourOpLayout\"}，"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "{\"InputDims\": \"YourInputDims\"}，{\"DynamicDims\": \"YourDynamicDims\"}，"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "{\"QuantConfigData\": \"YourQuantConfigData\"}，{\"BandMode\": \"YourBandMode\"}，"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "{\"NPU_FM_SHARED\": \"YourNPU_FM_SHARED\"}，用户可根据使用情况配置各个键对应的值。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), " device_info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备信息实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-deviceinfohandle/capi-mindspore-oh-ai-deviceinfohandle",
              children: "OH_AI_DeviceInfoHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个扩展项的键，格式为C字符串。字符串长度限制为128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个扩展项的值内容首地址。字符串长度跟随系统限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t value_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个扩展项的值内容长度。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), " 执行状态码，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
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