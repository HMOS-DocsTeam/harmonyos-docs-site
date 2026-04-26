"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["854602"], {
474713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_common_basic_c_common_basic_headerfile_capi_jsvm_types_h_capi_jsvm_types_h_md_017_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-common-basic-c-common-basic-headerfile-capi-jsvm-types-h-capi-jsvm-types-h-md-017.json
var site_docs_ref_common_basic_c_common_basic_headerfile_capi_jsvm_types_h_capi_jsvm_types_h_md_017_namespaceObject = JSON.parse('{"id":"common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h","title":"jsvm_types.h","description":"概述","source":"@site/docs-ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h.md","sourceDirName":"common-basic-c/common-basic-headerfile/capi-jsvm-types-h","slug":"/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"jsvm_types.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h","kit":"公共基础能力","last_updated":"2026-04-22","slug":"capi-jsvm-types-h"},"sidebar":"ref","previous":{"title":"jsvm.h","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-headerfile/capi-jsvm-h/capi-jsvm-h"},"next":{"title":"JSVM_CallbackStruct","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct/capi-jsvm-jsvm-callbackstruct"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h.md


const frontMatter = {
	title: 'jsvm_types.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h',
	kit: '公共基础能力',
	last_updated: '2026-04-22',
	slug: 'capi-jsvm-types-h'
};
const contentTitle = 'jsvm_types.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "JSVM_PropertyAttributes",
  "id": "jsvm_propertyattributes",
  "level": 3
}, {
  "value": "JSVM_ValueType",
  "id": "jsvm_valuetype",
  "level": 3
}, {
  "value": "JSVM_TypedarrayType",
  "id": "jsvm_typedarraytype",
  "level": 3
}, {
  "value": "JSVM_Status",
  "id": "jsvm_status",
  "level": 3
}, {
  "value": "JSVM_KeyCollectionMode",
  "id": "jsvm_keycollectionmode",
  "level": 3
}, {
  "value": "JSVM_KeyFilter",
  "id": "jsvm_keyfilter",
  "level": 3
}, {
  "value": "JSVM_KeyConversion",
  "id": "jsvm_keyconversion",
  "level": 3
}, {
  "value": "JSVM_MemoryPressureLevel",
  "id": "jsvm_memorypressurelevel",
  "level": 3
}, {
  "value": "JSVM_CompileMode",
  "id": "jsvm_compilemode",
  "level": 3
}, {
  "value": "JSVM_CompileOptionId",
  "id": "jsvm_compileoptionid",
  "level": 3
}, {
  "value": "JSVM_RegExpFlags",
  "id": "jsvm_regexpflags",
  "level": 3
}, {
  "value": "JSVM_InitializedFlag",
  "id": "jsvm_initializedflag",
  "level": 3
}, {
  "value": "JSVM_WasmOptLevel",
  "id": "jsvm_wasmoptlevel",
  "level": 3
}, {
  "value": "JSVM_CacheType",
  "id": "jsvm_cachetype",
  "level": 3
}, {
  "value": "JSVM_MicrotaskPolicy",
  "id": "jsvm_microtaskpolicy",
  "level": 3
}, {
  "value": "JSVM_TraceCategory",
  "id": "jsvm_tracecategory",
  "level": 3
}, {
  "value": "JSVM_CBTriggerTimeForGC",
  "id": "jsvm_cbtriggertimeforgc",
  "level": 3
}, {
  "value": "JSVM_GCType",
  "id": "jsvm_gctype",
  "level": 3
}, {
  "value": "JSVM_GCCallbackFlags",
  "id": "jsvm_gccallbackflags",
  "level": 3
}, {
  "value": "JSVM_PromiseRejectEvent",
  "id": "jsvm_promiserejectevent",
  "level": 3
}, {
  "value": "JSVM_MessageErrorLevel",
  "id": "jsvm_messageerrorlevel",
  "level": 3
}, {
  "value": "JSVM_DefineClassOptionsId",
  "id": "jsvm_defineclassoptionsid",
  "level": 3
}, {
  "value": "JSVM_DebugOption",
  "id": "jsvm_debugoption",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "JSVM_Finalize()",
  "id": "jsvm_finalize",
  "level": 3
}, {
  "value": "JSVM_OutputStream()",
  "id": "jsvm_outputstream",
  "level": 3
}, {
  "value": "JSVM_HandlerForGC()",
  "id": "jsvm_handlerforgc",
  "level": 3
}, {
  "value": "JSVM_HandlerForOOMError()",
  "id": "jsvm_handlerforoomerror",
  "level": 3
}, {
  "value": "JSVM_HandlerForFatalError()",
  "id": "jsvm_handlerforfatalerror",
  "level": 3
}, {
  "value": "JSVM_HandlerForPromiseReject()",
  "id": "jsvm_handlerforpromisereject",
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
        id: "jsvm_typesh",
        children: "jsvm_types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供JSVM-API类型定义。通过API接口为开发者提供独立、标准、完整的JavaScript引擎能力，包括管理引擎生命周期、编译运行JS代码、实现JS/C++跨语言调用、拍摄快照等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ark_runtime/jsvm_types.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libjsvm.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkCompiler.JSVM"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm",
        children: "JSVM"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct/capi-jsvm-jsvm-callbackstruct",
              children: "JSVM_CallbackStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CallbackStruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户提供的native回调函数的指针和数据，这些函数通过JSVM-API接口暴露给JavaScript。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-heapstatistics/capi-jsvm-jsvm-heapstatistics",
              children: "JSVM_HeapStatistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_HeapStatistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存有关JavaScript堆内存使用情况的统计信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-initoptions/capi-jsvm-jsvm-initoptions",
              children: "JSVM_InitOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_InitOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化选项，用于初始化JavaScript虚拟机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-createvmoptions/capi-jsvm-jsvm-createvmoptions",
              children: "JSVM_CreateVMOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CreateVMOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建JavaScript虚拟机的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-vminfo/capi-jsvm-jsvm-vminfo",
              children: "JSVM_VMInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_VMInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript虚拟机信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertydescriptor/capi-jsvm-jsvm-propertydescriptor",
              children: "JSVM_PropertyDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PropertyDescriptor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-extendederrorinfo/capi-jsvm-jsvm-extendederrorinfo",
              children: "JSVM_ExtendedErrorInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ExtendedErrorInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展的异常信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-typetag/capi-jsvm-jsvm-typetag",
              children: "JSVM_TypeTag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TypeTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型标记，存储为两个无符号64位整数的128位值。作为一个UUID，通过它，JavaScript对象可以是\"tagged\"，以确保它们的类型保持不变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct/capi-jsvm-jsvm-propertyhandlerconfigurationstruct",
              children: "JSVM_PropertyHandlerConfigurationStruct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PropertyHandlerConfigurationStruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当执行对象的getter、setter、deleter和enumerator操作时，该结构体中对应的函数回调将会触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-scriptorigin/capi-jsvm-jsvm-scriptorigin",
              children: "JSVM_ScriptOrigin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ScriptOrigin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "某段JavaScript代码的原始信息，如sourceMap路径、源文件名、源文件中的起始行/列号等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-compileoptions/capi-jsvm-jsvm-compileoptions",
              children: "JSVM_CompileOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CompileOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应JSVM的编译选项，包含内容和ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-codecache/capi-jsvm-jsvm-codecache",
              children: "JSVM_CodeCache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CodeCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应JSVM代码缓存的地址与大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-propertyhandler/capi-jsvm-jsvm-propertyhandler",
              children: "JSVM_PropertyHandler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PropertyHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含将class作为函数进行调用时所触发的回调函数的函数指针和访问实例对象属性时触发的回调函数的函数指针集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-defineclassoptions/capi-jsvm-jsvm-defineclassoptions",
              children: "JSVM_DefineClassOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DefineClassOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Class的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-vm--8h/capi-jsvm-jsvm-vm--8h",
              children: "JSVM_VM__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_VM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JavaScript虚拟机实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-vmscope--8h/capi-jsvm-jsvm-vmscope--8h",
              children: "JSVM_VMScope__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_VMScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JavaScript虚拟机作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-envscope--8h/capi-jsvm-jsvm-envscope--8h",
              children: "JSVM_EnvScope__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_EnvScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于控制附加到当前虚拟机实例的环境。只有当线程通过OH_JSVM_OpenEnvScope进入该环境的JSVM_EnvScope后，该环境才对线程的虚拟机实例可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-script--8h/capi-jsvm-jsvm-script--8h",
              children: "JSVM_Script__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一段JavaScript代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-env--8h/capi-jsvm-jsvm-env--8h",
              children: "JSVM_Env__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示虚拟机特定状态的上下文环境，需要在调用native函数时作为参数传递，并且传递给后续任何的JSVM-API嵌套调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-cpuprofiler--8h/capi-jsvm-jsvm-cpuprofiler--8h",
              children: "JSVM_CpuProfiler__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CpuProfiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一个JavaScript CPU时间性能分析器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-value--8h/capi-jsvm-jsvm-value--8h",
              children: "JSVM_Value__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JavaScript值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-data--8h/capi-jsvm-jsvm-data--8h",
              children: "JSVM_Data__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一个 JavaScript Data。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-ref--8h/capi-jsvm-jsvm-ref--8h",
              children: "JSVM_Ref__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JavaScript值的引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-handlescope--8h/capi-jsvm-jsvm-handlescope--8h",
              children: "JSVM_HandleScope__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_HandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JavaScript值的作用域，用于控制和修改在特定范围内创建的对象的生命周期。通常，JSVM-API值是在JSVM_HandleScope的上下文中创建的。当从JavaScript调用native方法时，将存在默认JSVM_HandleScope。如果用户没有显式创建新的JSVM_HandleScope，将在默认JSVM_HandleScope中创建JSVM-API值。对于native方法执行之外的任何代码调用（例如，在libuv回调调用期间），模块需要在调用任何可能导致创建JavaScript值的函数之前创建一个作用域。JSVM_HandleScope是使用OH_JSVM_OpenHandleScope创建的，并使用OH_JSVM_CloseHandleScope销毁的。关闭作用域代表向GC指示在JSVM_HandleScope作用域的生命周期内创建的所有JSVM_Value将不再从当前堆的栈帧中引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-escapablehandlescope--8h/capi-jsvm-jsvm-escapablehandlescope--8h",
              children: "JSVM_EscapableHandleScope__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_EscapableHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一种特殊类型的handle scope，用于将在特定handle scope内创建的值返回到父作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackinfo--8h/capi-jsvm-jsvm-callbackinfo--8h",
              children: "JSVM_CallbackInfo__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CallbackInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示传递给回调函数的不透明数据类型。可用于获取调用该函数的上下文的附加信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-deferred--8h/capi-jsvm-jsvm-deferred--8h",
              children: "JSVM_Deferred__*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Promise延迟对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/api-jsvm-jsvm-propertyhandlerconfigurationstruct8h/api-jsvm-jsvm-propertyhandlerconfigurationstruct8h",
              children: "JSVM_PropertyHandlerConfigurationStruct*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PropertyHandlerCfg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含属性监听回调的结构的指针类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h",
              children: "JSVM_CallbackStruct*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户提供的native函数的函数指针类型，这些函数通过JSVM-API接口暴露给JavaScript。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-compileprofile/capi-jsvm-jsvm-compileprofile",
              children: "JSVM_CompileProfile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CompileProfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与JSVM_COMPILE_COMPILE_PROFILE一起传递的编译采样文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#jsvm_propertyattributes",
              children: "JSVM_PropertyAttributes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PropertyAttributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于控制JavaScript对象属性的行为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_valuetype",
              children: "JSVM_ValueType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ValueType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述JSVM_Value的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_typedarraytype",
              children: "JSVM_TypedarrayType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TypedarrayType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述TypedArray的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_status",
              children: "JSVM_Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JSVM-API调用成功或失败的完整状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_keycollectionmode",
              children: "JSVM_KeyCollectionMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KeyCollectionMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "限制查找属性的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_keyfilter",
              children: "JSVM_KeyFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KeyFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性过滤器，可以通过使用or来构造一个复合过滤器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_keyconversion",
              children: "JSVM_KeyConversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KeyConversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键转换选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_memorypressurelevel",
              children: "JSVM_MemoryPressureLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MemoryPressureLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存压力水平。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_compilemode",
              children: "JSVM_CompileMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CompileMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM编译模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_compileoptionid",
              children: "JSVM_CompileOptionId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CompileOptionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM编译选项ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_regexpflags",
              children: "JSVM_RegExpFlags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_RegExpFlags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正则表达式标志位。它们可以用来启用一组标志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_initializedflag",
              children: "JSVM_InitializedFlag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_InitializedFlag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化方式的标志位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_wasmoptlevel",
              children: "JSVM_WasmOptLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_WasmOptLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebAssembly 函数优化等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_cachetype",
              children: "JSVM_CacheType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CacheType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_microtaskpolicy",
              children: "JSVM_MicrotaskPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MicrotaskPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM 微任务执行策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_tracecategory",
              children: "JSVM_TraceCategory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TraceCategory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM 内部 Trace 事件的类别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_cbtriggertimeforgc",
              children: "JSVM_CBTriggerTimeForGC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CBTriggerTimeForGC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发回调函数的时机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_gctype",
              children: "JSVM_GCType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GCType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_gccallbackflags",
              children: "JSVM_GCCallbackFlags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GCCallbackFlags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC回调函数标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_promiserejectevent",
              children: "JSVM_PromiseRejectEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PromiseRejectEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "promise-reject事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_messageerrorlevel",
              children: "JSVM_MessageErrorLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MessageErrorLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "message的报错级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_defineclassoptionsid",
              children: "JSVM_DefineClassOptionsId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DefineClassOptionsId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Class的选项ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_debugoption",
              children: "JSVM_DebugOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DebugOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#jsvm_finalize",
              children: "typedef void (JSVM_CDECL* JSVM_Finalize)(JSVM_Env env,void* finalizeData,void* finalizeHint)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CDECL* JSVM_Finalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数指针类型，当native类型对象或数据与JS对象被关联时，传入该指针。该函数将会在关联的JS对象被GC回收时被调用，用以执行native的清理动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_outputstream",
              children: "typedef bool (JSVM_CDECL* JSVM_OutputStream)(const char* data,int size,void* streamData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CDECL* JSVM_OutputStream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASCII输出流回调的函数指针类型。参数data是指输出的数据指针。参数size是指输出的数据大小。空数据指针指示流的结尾。参数streamData是指与回调一起传递给API函数的指针，该API函数向输出流生成数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_handlerforgc",
              children: "typedef void (JSVM_CDECL* JSVM_HandlerForGC)(JSVM_VM vm, JSVM_GCType gcType, JSVM_GCCallbackFlags flags, void* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CDECL* JSVM_HandlerForGC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC回调的函数指针类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_handlerforoomerror",
              children: "typedef void (JSVM_CDECL* JSVM_HandlerForOOMError)(const char* location,const char* detail,bool isHeapOOM)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CDECL* JSVM_HandlerForOOMError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOM-Error回调的函数指针类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_handlerforfatalerror",
              children: "typedef void (JSVM_CDECL* JSVM_HandlerForFatalError)(const char* location,const char* message)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CDECL* JSVM_HandlerForFatalError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fatal-Error回调的函数指针类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#jsvm_handlerforpromisereject",
              children: "typedef void (JSVM_CDECL* JSVM_HandlerForPromiseReject)(JSVM_Env env, JSVM_PromiseRejectEvent rejectEvent, JSVM_Value rejectInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CDECL* JSVM_HandlerForPromiseReject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise-Reject回调的函数指针类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
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
            children: "uint16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为uint16_t创建一个别名——char16_t。  这段代码的核心目的是确保 char16_t 这个类型在所有目标编译环境中都可用，即使在一些不支持它的旧环境里。char16_t 是 C++11 标准中引入的一个新的基本数据类型，专门用于存储16位字符，通常用来表示UTF-16编码的字符。  如果编译器本身不认识char16_t，手动创建一个底层实现是16位无符号的整数类型。前置生效条件为：当前编译器——非C++编译器编译"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_propertyattributes",
      children: "JSVM_PropertyAttributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_PropertyAttributes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于控制JavaScript对象属性的行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有在属性上设置显式属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_WRITABLE = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该属性是可写的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ENUMERABLE = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该属性是可枚举的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CONFIGURABLE = 1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该属性是可配置的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NO_RECEIVER_CHECK = 1 << 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标记本地方法的接收器无需进行检查。如果未设置 JSVM_NO_RECEIVER_CHECK，则该方法仅接受定义类的实例作为接收器，否则会向 JSVM 抛出异常“类型错误：非法调用”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_STATIC = 1 << 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该属性将被定义为类的静态属性，而不是默认的实例属性。这仅由OH_JSVM_DefineClass使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DEFAULT_METHOD = JSVM_WRITABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CONFIGURABLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_METHOD_NO_RECEIVER_CHECK = JSVM_DEFAULT_METHOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NO_RECEIVER_CHECK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DEFAULT_JSPROPERTY = JSVM_WRITABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ENUMERABLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_JSPROPERTY_NO_RECEIVER_CHECK = JSVM_DEFAULT_JSPROPERTY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NO_RECEIVER_CHECK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_valuetype",
      children: "JSVM_ValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_ValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述JSVM_Value的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_UNDEFINED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未定义类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_BOOLEAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_SYMBOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符号类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_OBJECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_EXTERNAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外部类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_BIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bigint类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_typedarraytype",
      children: "JSVM_TypedarrayType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_TypedarrayType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述TypedArray的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_INT8_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int8类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_UINT8_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_UINT8_CLAMPED_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8固定类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_INT16_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_UINT16_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_INT32_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_UINT32_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_FLOAT32_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float32类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_FLOAT64_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float64类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_BIGINT64_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bigint64类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_BIGUINT64_ARRAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "biguint64类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_status",
      children: "JSVM_Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_Status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示JSVM-API调用成功或失败的完整状态码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_INVALID_ARG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_OBJECT_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期待传入对象类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_STRING_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望传入字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NAME_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望传入名字类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_FUNCTION_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期待传入函数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NUMBER_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期待传入数字类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_BOOLEAN_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期待传入布尔类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ARRAY_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期待传入数组类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GENERIC_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "泛型失败状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PENDING_EXCEPTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "挂起异常状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CANCELLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ESCAPE_CALLED_TWICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转义调用了两次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_HANDLE_SCOPE_MISMATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "句柄作用域不匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CALLBACK_SCOPE_MISMATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调作用域不匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_QUEUE_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "队列满。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CLOSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_BIGINT_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望传入Bigint类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DATE_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望传入日期类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_ARRAYBUFFER_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望传入ArrayBuffer类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DETACHABLE_ARRAYBUFFER_EXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可分离的数组缓冲区预期状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_WOULD_DEADLOCK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将死锁状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_NO_EXTERNAL_BUFFERS_ALLOWED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许外部缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CANNOT_RUN_JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不能执行JS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_INVALID_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入的参数为非法类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_JIT_MODE_EXPECTED"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无 JIT 权限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_keycollectionmode",
      children: "JSVM_KeyCollectionMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_KeyCollectionMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "限制查找属性的范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "JSVM_KEY_INCLUDE_PROTOTYPES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "也包含对象原型链上的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KEY_OWN_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅包含对象自身属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_keyfilter",
      children: "JSVM_KeyFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_KeyFilter\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性过滤器，可以通过使用or来构造一个复合过滤器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_KEY_ALL_PROPERTIES = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有属性的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KEY_WRITABLE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可写的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KEY_ENUMERABLE = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可枚举的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KEY_CONFIGURABLE = 1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可配置的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KEY_SKIP_STRINGS = 1 << 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "排除字符串类型的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KEY_SKIP_SYMBOLS = 1 << 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "排除符号类型的键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_keyconversion",
      children: "JSVM_KeyConversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_KeyConversion\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键转换选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "JSVM_KEY_KEEP_NUMBERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将返回整数索引的数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_KEY_NUMBERS_TO_STRINGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将整数索引转换为字符串。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_memorypressurelevel",
      children: "JSVM_MemoryPressureLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_MemoryPressureLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存压力水平。"
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
            children: "JSVM_MEMORY_PRESSURE_LEVEL_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无压力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MEMORY_PRESSURE_LEVEL_MODERATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中等压力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MEMORY_PRESSURE_LEVEL_CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "临界压力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MEMORY_PRESSURE_LEVEL_LOW_MEMORY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知系统内存不足。  警告：这对垃圾回收性能有很强的负面影响。  建议：使用其他值来影响垃圾回收计划。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_compilemode",
      children: "JSVM_CompileMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_CompileMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当 id 为 JSVM_COMPILE_MODE 时，content 类型的每个值代表一种编译模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "JSVM_COMPILE_MODE_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认编译模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_MODE_CONSUME_CODE_CACHE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用代码缓存的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_MODE_EAGER_COMPILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激进编译模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_MODE_PRODUCE_COMPILE_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成编译依赖的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_MODE_CONSUME_COMPILE_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用编译依赖的模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_compileoptionid",
      children: "JSVM_CompileOptionId"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_CompileOptionId\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM_CompileOptions 中的 id 对应类型，每个值有对应的 content 类型。JSVM_COMPILE_ENABLE_SOURCE_MAP 的类型为 bool，当 JSVM_ScriptOrigin 中的 sourceMapUrl 不为空时生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "JSVM_COMPILE_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM编译模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_CODE_CACHE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM代码缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_SCRIPT_ORIGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM脚本来源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_COMPILE_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM编译依赖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_COMPILE_ENABLE_SOURCE_MAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM的 Source Map 的使能情况。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_regexpflags",
      children: "JSVM_RegExpFlags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_RegExpFlags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正则表达式标志位。它们可以用来启用一组标志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_REGEXP_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_GLOBAL = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_IGNORE_CASE = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore Case模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_MULTILINE = 1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiline模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_STICKY = 1 << 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sticky模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_UNICODE = 1 << 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_DOT_ALL = 1 << 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dotAll模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_LINEAR = 1 << 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_HAS_INDICES = 1 << 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has Indices模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_REGEXP_UNICODE_SETS = 1 << 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode Sets模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_initializedflag",
      children: "JSVM_InitializedFlag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_InitializedFlag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化方式的标志位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "JSVM_ZERO_INITIALIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_UNINITIALIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不做初始化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_wasmoptlevel",
      children: "JSVM_WasmOptLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_WasmOptLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebAssembly 函数优化等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "JSVM_WASM_OPT_BASELINE = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "baseline 优化等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_WASM_OPT_HIGH = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高优化等级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_cachetype",
      children: "JSVM_CacheType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_CacheType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "缓存类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "JSVM_CACHE_TYPE_JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS 缓存, 由接口 OH_JSVM_CreateCodeCache 生成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CACHE_TYPE_WASM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebAssembly 缓存, 由接口 OH_JSVM_CreateWasmCache 生成。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_microtaskpolicy",
      children: "JSVM_MicrotaskPolicy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_MicrotaskPolicy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM 微任务执行策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "JSVM_MICROTASK_EXPLICIT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用 OH_JSVM_PerformMicrotaskCheckpoint 方法后微任务执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MICROTASK_AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS 调用栈为 0 时自动执行微任务。默认模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_tracecategory",
      children: "JSVM_TraceCategory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_TraceCategory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM 内部 Trace 事件的类别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_TRACE_VM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集 JSVM 主要接口调用, 例如执行 js 脚本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TRACE_COMPILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集编译相关的接口调用, 例如后台编译。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TRACE_EXECUTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集与运行状态相关的接口调用, 例如中断与微任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TRACE_RUNTIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集外部函数调用相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TRACE_STACK_TRACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集 JSVM 中堆栈相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TRACE_WASM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集主要的 WASM 相关接口调用, 例如编译与实例化 WASM 模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_TRACE_WASM_DETAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集更多更细节的 WASM 相关接口调用，例如后台编译、跳板编译。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_cbtriggertimeforgc",
      children: "JSVM_CBTriggerTimeForGC"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_CBTriggerTimeForGC\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发回调函数的时机。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "JSVM_CB_TRIGGER_BEFORE_GC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在GC之前触发回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_CB_TRIGGER_AFTER_GC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在GC之后触发回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_gctype",
      children: "JSVM_GCType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_GCType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GC类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_GC_TYPE_SCAVENGE = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC算法为Scavenge。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_TYPE_MINOR_MARK_COMPACT = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC算法为Minor-Mark-Compact。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_TYPE_MARK_SWEEP_COMPACT = 1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC算法为Mark-Sweep-Compact。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_TYPE_INCREMENTAL_MARKING = 1 << 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC算法为Incremental-Marking。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_TYPE_PROCESS_WEAK_CALLBACKS = 1 << 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC算法为Weak-Callbacks。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_TYPE_ALL = JSVM_GC_TYPE_SCAVENGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_TYPE_MINOR_MARK_COMPACT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_gccallbackflags",
      children: "JSVM_GCCallbackFlags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_GCCallbackFlags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GC回调函数标记。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_NO_GC_CALLBACK_FLAGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无回调函数标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_CALLBACK_CONSTRUCT_RETAINED_OBJECT_INFOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垃圾回收回调中将构建保留对象信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_CALLBACK_FORCED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制执行垃圾回收回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_CALLBACK_SYNCHRONOUS_PHANTOM_CALLBACK_PROCESSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步处理幽灵对象回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_CALLBACK_COLLECT_ALL_AVAILABLE_GARBAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垃圾回收过程中会收集所有可用的垃圾对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_CALLBACK_COLLECT_ALL_EXTERNAL_MEMORY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垃圾回收时会收集所有的外部内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_GC_CALLBACK_SCHEDULE_IDLE_GARBAGE_COLLECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在空闲时调度垃圾回收。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_promiserejectevent",
      children: "JSVM_PromiseRejectEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_PromiseRejectEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "promise-reject事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "JSVM_PROMISE_REJECT_OTHER_REASONS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise被拒绝，但拒绝的原因未知或不明确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PROMISE_REJECT_WITH_NO_HANDLER = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise被拒绝但没有处理程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PROMISE_ADD_HANDLER_AFTER_REJECTED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise已被拒绝后，再添加处理程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PROMISE_REJECT_AFTER_RESOLVED = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise已被解决后，再尝试拒绝该Promise。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_PROMISE_RESOLVE_AFTER_RESOLVED = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise已被解决后，再尝试解决该Promise。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_messageerrorlevel",
      children: "JSVM_MessageErrorLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_MessageErrorLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "message的报错级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_MESSAGE_LOG = (1 << 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log级别的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MESSAGE_DEBUG = (1 << 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug级别的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MESSAGE_INFO = (1 << 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Info级别的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MESSAGE_ERROR = (1 << 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error级别的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MESSAGE_WARNING = (1 << 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warning级别的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MESSAGE_ALL = JSVM_MESSAGE_LOG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_MESSAGE_DEBUG"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_defineclassoptionsid",
      children: "JSVM_DefineClassOptionsId"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_DefineClassOptionsId\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Class的选项ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JSVM_DEFINE_CLASS_NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在常规模式下定义Class。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DEFINE_CLASS_WITH_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为所创建的Class预留指定数量的interfield槽位，在这些槽位中可以存放native-data。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_DEFINE_CLASS_WITH_PROPERTY_HANDLER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为所创建的Class设置监听拦截属性以及设置作为函数调用时回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_debugoption",
      children: "JSVM_DebugOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum JSVM_DebugOption\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM_SCOPE_CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scope校验功能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_finalize",
      children: "JSVM_Finalize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (JSVM_CDECL* JSVM_Finalize)(JSVM_Env env,void* finalizeData,void* finalizeHint)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针类型，当native类型对象或数据与JS对象被关联时，传入该指针。该函数将会在关联的JS对象被GC回收时被调用，用以执行native的清理动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_outputstream",
      children: "JSVM_OutputStream()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef bool (JSVM_CDECL* JSVM_OutputStream)(const char* data,int size,void* streamData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASCII输出流回调的函数指针类型。参数data是指输出的数据指针。参数size是指输出的数据大小。空数据指针指示流的结尾。参数streamData是指与回调一起传递给API函数的指针，该API函数向输出流生成数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回true表示流可以继续接收数据，返回false将中止流。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_handlerforgc",
      children: "JSVM_HandlerForGC()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (JSVM_CDECL* JSVM_HandlerForGC)(JSVM_VM vm, JSVM_GCType gcType, JSVM_GCCallbackFlags flags, void* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GC回调的函数指针类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_handlerforoomerror",
      children: "JSVM_HandlerForOOMError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (JSVM_CDECL* JSVM_HandlerForOOMError)(const char* location,const char* detail,bool isHeapOOM)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OOM-Error回调的函数指针类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_handlerforfatalerror",
      children: "JSVM_HandlerForFatalError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (JSVM_CDECL* JSVM_HandlerForFatalError)(const char* location,const char* message)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fatal-Error回调的函数指针类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_handlerforpromisereject",
      children: "JSVM_HandlerForPromiseReject()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (JSVM_CDECL* JSVM_HandlerForPromiseReject)(JSVM_Env env, JSVM_PromiseRejectEvent rejectEvent, JSVM_Value rejectInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise-Reject回调的函数指针类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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