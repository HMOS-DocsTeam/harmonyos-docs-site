"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["562197"], {
233291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_c_ability_headerfile_capi_native_child_process_h_capi_native_child_process_h_md_f4e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-c-ability-headerfile-capi-native-child-process-h-capi-native-child-process-h-md-f4e.json
var site_docs_ref_ability_api_ability_c_ability_headerfile_capi_native_child_process_h_capi_native_child_process_h_md_f4e_namespaceObject = JSON.parse('{"id":"ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h","title":"native_child_process.h","description":"概述","source":"@site/docs-ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h.md","sourceDirName":"ability-api/ability-c/ability-headerfile/capi-native-child-process-h","slug":"/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"native_child_process.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-native-child-process-h"},"sidebar":"ref","previous":{"title":"context_constant.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h"},"next":{"title":"native_interface_bundle.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h.md


const frontMatter = {
	title: 'native_child_process.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-native-child-process-h'
};
const contentTitle = 'native_child_process.h';

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
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Ability_NativeChildProcess_ErrCode",
  "id": "ability_nativechildprocess_errcode",
  "level": 3
}, {
  "value": "NativeChildProcess_IsolationMode",
  "id": "nativechildprocess_isolationmode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Ability_CreateChildProcessConfigs()",
  "id": "oh_ability_createchildprocessconfigs",
  "level": 3
}, {
  "value": "OH_Ability_DestroyChildProcessConfigs()",
  "id": "oh_ability_destroychildprocessconfigs",
  "level": 3
}, {
  "value": "OH_Ability_ChildProcessConfigs_SetIsolationMode()",
  "id": "oh_ability_childprocessconfigs_setisolationmode",
  "level": 3
}, {
  "value": "OH_Ability_ChildProcessConfigs_SetIsolationUid()",
  "id": "oh_ability_childprocessconfigs_setisolationuid",
  "level": 3
}, {
  "value": "OH_Ability_ChildProcessConfigs_SetProcessName()",
  "id": "oh_ability_childprocessconfigs_setprocessname",
  "level": 3
}, {
  "value": "OH_Ability_OnNativeChildProcessStarted()",
  "id": "oh_ability_onnativechildprocessstarted",
  "level": 3
}, {
  "value": "OH_Ability_CreateNativeChildProcess()",
  "id": "oh_ability_createnativechildprocess",
  "level": 3
}, {
  "value": "OH_Ability_CreateNativeChildProcessWithConfigs()",
  "id": "oh_ability_createnativechildprocesswithconfigs",
  "level": 3
}, {
  "value": "OH_Ability_StartNativeChildProcess()",
  "id": "oh_ability_startnativechildprocess",
  "level": 3
}, {
  "value": "OH_Ability_StartNativeChildProcessWithConfigs()",
  "id": "oh_ability_startnativechildprocesswithconfigs",
  "level": 3
}, {
  "value": "OH_Ability_GetCurrentChildProcessArgs()",
  "id": "oh_ability_getcurrentchildprocessargs",
  "level": 3
}, {
  "value": "OH_Ability_OnNativeChildProcessExit()",
  "id": "oh_ability_onnativechildprocessexit",
  "level": 3
}, {
  "value": "OH_Ability_RegisterNativeChildProcessExitCallback()",
  "id": "oh_ability_registernativechildprocessexitcallback",
  "level": 3
}, {
  "value": "OH_Ability_UnregisterNativeChildProcessExitCallback()",
  "id": "oh_ability_unregisternativechildprocessexitcallback",
  "level": 3
}, {
  "value": "OH_Ability_KillChildProcess()",
  "id": "oh_ability_killchildprocess",
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
        id: "native_child_processh",
        children: "native_child_process.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持创建Native子进程，并在父子进程间建立IPC通道。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过此模块和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager",
        children: "childProcessManager"
      }), "（非SELF_FORK模式）可以启动的子进程总数最大为512个。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <AbilityKit/native_child_process.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libchild_process.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
        children: "ChildProcess"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-fd/capi-nativechildprocess-fd",
              children: "NativeChildProcess_Fd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeChildProcess_Fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递给子进程的文件描述符信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-fdlist/capi-nativechildprocess-fdlist",
              children: "NativeChildProcess_FdList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeChildProcess_FdList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递给子进程的文件描述符信息列表。文件描述符记录个数不能超过16个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-options/capi-nativechildprocess-options",
              children: "NativeChildProcess_Options"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeChildProcess_Options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程所使用的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
              children: "NativeChildProcess_Args"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeChildProcess_Args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递给子进程的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability_ChildProcessConfigs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动子进程的配置信息，包括子进程的进程名、以及数据沙箱与网络环境的共享模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability_NativeChildProcess_ErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Native子进程模块错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#nativechildprocess_isolationmode",
              children: "NativeChildProcess_IsolationMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeChildProcess_IsolationMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Native子进程数据沙箱与网络环境的共享模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_ability_createchildprocessconfigs",
              children: "Ability_ChildProcessConfigs* OH_Ability_CreateChildProcessConfigs()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个子进程配置信息对象。创建对象成功后需要通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_destroychildprocessconfigs",
              children: "OH_Ability_DestroyChildProcessConfigs"
            }), "来销毁对象从而避免内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_destroychildprocessconfigs",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_DestroyChildProcessConfigs(Ability_ChildProcessConfigs* configs)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个子进程配置信息对象，并释放其内存，在调用该接口后，要避免继续使用已销毁的configs对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_childprocessconfigs_setisolationmode",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationMode(Ability_ChildProcessConfigs* configs, NativeChildProcess_IsolationMode isolationMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置子进程配置信息对象的数据沙箱与网络环境的共享模式，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#nativechildprocess_isolationmode",
              children: "NativeChildProcess_IsolationMode"
            }), "。该设置仅当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_startnativechildprocesswithconfigs",
              children: "OH_Ability_StartNativeChildProcessWithConfigs"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_createnativechildprocesswithconfigs",
              children: "OH_Ability_CreateNativeChildProcessWithConfigs"
            }), "接口时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_childprocessconfigs_setprocessname",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetProcessName(Ability_ChildProcessConfigs* configs,const char* processName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置子进程配置信息对象中的进程名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_onnativechildprocessstarted",
              children: "typedef void (*OH_Ability_OnNativeChildProcessStarted)(int errCode, OHIPCRemoteProxy *remoteProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Ability_OnNativeChildProcessStarted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知子进程启动结果的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_createnativechildprocess",
              children: "int OH_Ability_CreateNativeChildProcess(const char* libName,OH_Ability_OnNativeChildProcessStarted onProcessStarted)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建子进程并加载参数中指定的动态链接库文件，进程启动结果通过回调参数异步通知，需注意回调通知为独立线程，回调函数实现需要注意线程同步，且不能执行高耗时操作避免长时间阻塞。参数所指定的动态库必须实现并导出下列函数：  1. OHIPCRemoteStub* NativeChildProcess_OnConnect()  2. void NativeChildProcess_MainProc()  处理逻辑顺序如下列伪代码所示：  主进程：  1. OH_Ability_CreateNativeChildProcess(libName, onProcessStartedCallback)  子进程：  2. dlopen(libName)  3. dlsym(\"NativeChildProcess_OnConnect\")  4. dlsym(\"NativeChildProcess_MainProc\")  5. ipcRemote = NativeChildProcess_OnConnect()  6. NativeChildProcess_MainProc()  主进程：  7. onProcessStartedCallback(ipcRemote, errCode)  子进程：  8. 在NativeChildProcess_MainProc()函数返回后子进程退出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备行为差异："
              })
            }), " 对于API 13及之前版本，该接口在PC/2in1中可正常使用，在其他设备中返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ability_nativechildprocess_errcode",
              children: "NCP_ERR_NOT_SUPPORTED"
            }), "错误码。对于API 14及之后版本，该接口在PC/2in1、Tablet设备可正常使用，在其他设备中返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ability_nativechildprocess_errcode",
              children: "NCP_ERR_NOT_SUPPORTED"
            }), "错误码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 对于API 14及之前版本，单个进程只能启动1个Native子进程。从API 15开始，单个进程最多支持启动50个Native子进程。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_createnativechildprocesswithconfigs",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_CreateNativeChildProcessWithConfigs(const char* libName,Ability_ChildProcessConfigs* configs, OH_Ability_OnNativeChildProcessStarted onProcessStarted)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据传入的子进程配置信息创建子进程，并加载参数中指定的动态链接库文件。子进程的启动结果通过回调参数异步通知调用方。该回调在独立线程中执行，需要确保线程同步，且不能执行高耗时操作避免长时间阻塞。参数所指定的动态库必须实现并导出下列函数：  1. OHIPCRemoteStub* NativeChildProcess_OnConnect()  2. void NativeChildProcess_MainProc()  处理逻辑顺序如下列伪代码所示：  主进程：  1. OH_Ability_CreateNativeChildProcessWithConfigs(libName, configs, onProcessStartedCallback)  子进程：  2. dlopen(libName)  3. dlsym(\"NativeChildProcess_OnConnect\")  4. dlsym(\"NativeChildProcess_MainProc\")  5. ipcRemote = NativeChildProcess_OnConnect()  6. NativeChildProcess_MainProc()  主进程：  7. onProcessStartedCallback(ipcRemote, errCode)  子进程：  8.  在NativeChildProcess_MainProc()函数返回后子进程退出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备行为差异："
              })
            }), " 该接口在PC/2in1、Tablet设备中可正常调用，在其他设备中返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ability_nativechildprocess_errcode",
              children: "NCP_ERR_NOT_SUPPORTED"
            }), "错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_startnativechildprocess",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcess(const char* entry, NativeChildProcess_Args args,NativeChildProcess_Options options, int32_t *pid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动一个子进程，并加载指定的动态链接库文件。指定的动态库必须实现一个以NativeChildProcess_Args为参数的函数（函数名称可自定义），并导出该函数。示例如下：  1. void Main(NativeChildProcess_Args args);  处理逻辑顺序如下列伪代码所示：  主进程：  1. OH_Ability_StartNativeChildProcess(entryPoint, args, options)  子进程：  2. dlopen(libName)  3. dlsym(\"Main\")  4. Main(args)  5. 子进程将在Main(args)函数返回后退出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备行为差异："
              })
            }), " 对于API 13及之前版本，该接口在PC/2in1设备中可正常使用，在其他设备类型中返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ability_nativechildprocess_errcode",
              children: "NCP_ERR_NOT_SUPPORTED"
            }), "错误码。对于API 14及之后版本，该接口在PC/2in1、Tablet中可正常使用，在其他设备类型中返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ability_nativechildprocess_errcode",
              children: "NCP_ERR_NOT_SUPPORTED"
            }), "错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_startnativechildprocesswithconfigs",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcessWithConfigs(const char* entry, NativeChildProcess_Args args, Ability_ChildProcessConfigs* configs, int32_t *pid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据参数中子进程配置信息启动Native子进程，加载参数中指定的动态链接库文件并调用入口函数。支持传参到子进程。指定的动态库必须实现一个以NativeChildProcess_Args为参数的函数（函数名称可自定义），并导出该函数。示例如下：  1. void Main(NativeChildProcess_Args args);  处理逻辑顺序如下列伪代码所示：  主进程：  1. OH_Ability_StartNativeChildProcessWithConfigs(entryPoint, args, configs, &pid)  子进程：  2. dlopen(libName)  3. dlsym(\"Main\")  4. Main(args)  5. 子进程将在Main(args)函数返回后退出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备行为差异："
              })
            }), " 该接口在PC/2in1、Tablet设备中可正常调用，在其他设备中返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ability_nativechildprocess_errcode",
              children: "NCP_ERR_NOT_SUPPORTED"
            }), "错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_getcurrentchildprocessargs",
              children: "NativeChildProcess_Args* OH_Ability_GetCurrentChildProcessArgs()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程获取自身的启动参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_onnativechildprocessexit",
              children: "typedef void (*OH_Ability_OnNativeChildProcessExit)(int32_t pid, int32_t signal)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Ability_OnNativeChildProcessExit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取子进程退出信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_registernativechildprocessexitcallback",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_RegisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册子进程退出回调。只有", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_startnativechildprocess",
              children: "OH_Ability_StartNativeChildProcess"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_startnativechildprocesswithconfigs",
              children: "OH_Ability_StartNativeChildProcessWithConfigs"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager#childprocessmanagerstartnativechildprocess13",
              children: "@ohos.app.ability.childProcessManager的startNativeChildProcess"
            }), "启动的子进程退出时才会触发所注册的回调函数。重复注册同一个回调函数只会保留一个。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_unregisternativechildprocessexitcallback",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_UnregisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解注册子进程退出回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_childprocessconfigs_setisolationuid",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationUid(Ability_ChildProcessConfigs* configs, bool enableIsolationUid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置子进程配置信息对象的uid是否隔离。该设置仅在NativeChildProcess_IsolationMode为NCP_ISOLATION_MODE_ISOLATED时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ability_killchildprocess",
              children: "Ability_NativeChildProcess_ErrCode OH_Ability_KillChildProcess(int32_t pid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终止当前进程创建的子进程。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ability_nativechildprocess_errcode",
      children: "Ability_NativeChildProcess_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Ability_NativeChildProcess_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Native子进程模块错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NCP_NO_ERROR = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_INVALID_PARAM = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_NOT_SUPPORTED = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持创建Native子进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_INTERNAL = 16000050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_BUSY = 16010001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Native子进程的启动过程中不能再次创建新的子进程，可以等待当前子进程启动完成后再次尝试。从API version 15开始被废弃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_TIMEOUT = 16010002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动Native子进程超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_SERVICE_ERROR = 16010003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务端出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_MULTI_PROCESS_DISABLED = 16010004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多进程模式已关闭，不允许启动子进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_ALREADY_IN_CHILD = 16010005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在子进程中再次创建进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_MAX_CHILD_PROCESSES_REACHED = 16010006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "到达最大Native子进程数量限制，不能再创建子进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_LIB_LOADING_FAILED = 16010007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程加载动态库失败，文件不存在或者未实现对应的方法并导出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_CONNECTION_FAILED = 16010008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程调用动态库的OnConnect方法失败，可能返回了无效的IPC对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_CALLBACK_NOT_EXIST = 16010009"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["父进程调用解注册Native子进程退出回调，未找到注册的回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ERR_INVALID_PID = 16010010"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该进程pid不存在，或并非当前进程的子进程pid，或属于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager#childprocessmanagerstartchildprocess",
              children: "childProcessManager.startChildProcess"
            }), "接口在SELF_FORK模式下启动的子进程。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nativechildprocess_isolationmode",
      children: "NativeChildProcess_IsolationMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NativeChildProcess_IsolationMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Native子进程数据沙箱与网络环境的共享模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "NCP_ISOLATION_MODE_NORMAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通隔离模式下，父进程与子进程共享同一沙箱环境或网络环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_ISOLATION_MODE_ISOLATED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在隔离模式下，父进程与子进程不共享同一沙箱环境或网络环境。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_createchildprocessconfigs",
      children: "OH_Ability_CreateChildProcessConfigs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_ChildProcessConfigs* OH_Ability_CreateChildProcessConfigs()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个子进程配置信息对象。创建对象成功后需要通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_destroychildprocessconfigs",
        children: "OH_Ability_DestroyChildProcessConfigs"
      }), "来销毁对象从而避免内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "对象的指针 - 子进程配置信息对象创建成功。  返回nullptr - 发生内部错误或者内存分配失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_destroychildprocessconfigs",
      children: "OH_Ability_DestroyChildProcessConfigs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_DestroyChildProcessConfigs(Ability_ChildProcessConfigs* configs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个子进程配置信息对象，并释放其内存，在调用该接口后，要避免继续使用已销毁的configs对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "* configs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要销毁的子进程配置信息对象指针。在调用该接口后，对象指针将失效，避免继续使用该指针。允许传入空指针，空指针不会触发任何操作。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 操作成功。  NCP_ERR_INVALID_PARAM - 传入参数为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_childprocessconfigs_setisolationmode",
      children: "OH_Ability_ChildProcessConfigs_SetIsolationMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationMode(Ability_ChildProcessConfigs* configs, NativeChildProcess_IsolationMode isolationMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置子进程配置信息对象的数据沙箱与网络环境的共享模式，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#nativechildprocess_isolationmode",
        children: "NativeChildProcess_IsolationMode"
      }), "。该设置仅当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_startnativechildprocesswithconfigs",
        children: "OH_Ability_StartNativeChildProcessWithConfigs"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_createnativechildprocesswithconfigs",
        children: "OH_Ability_CreateNativeChildProcessWithConfigs"
      }), "接口时生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "* configs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程的配置信息对象指针。不可以为空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#nativechildprocess_isolationmode",
              children: "NativeChildProcess_IsolationMode"
            }), " isolationMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的数据沙箱与网络环境的共享模式，详见NativeChildProcess_IsolationMode。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 执行成功。  NCP_ERR_INVALID_PARAM - 传入参数configs为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_childprocessconfigs_setisolationuid",
      children: "OH_Ability_ChildProcessConfigs_SetIsolationUid()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationUid(Ability_ChildProcessConfigs* configs, bool isolationUid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子进程配置信息对象的uid是否隔离。例如用于浏览器的安全加固场景，设置主进程与子进程的uid隔离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该设置仅在NativeChildProcess_IsolationMode为NCP_ISOLATION_MODE_ISOLATED时生效。不调用该接口设置isolationUid时，则默认为false，即子进程与主进程拥有相同uid。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "* configs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程的配置信息对象指针。不可以为空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isolationUid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制子进程是否使用独立的uid。true表示子进程拥有独立的uid，false表示子进程与主进程拥有相同uid。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 执行成功。  NCP_ERR_INVALID_PARAM - 传入参数configs为nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_childprocessconfigs_setprocessname",
      children: "OH_Ability_ChildProcessConfigs_SetProcessName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetProcessName(Ability_ChildProcessConfigs* configs,const char* processName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子进程配置信息对象中的进程名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "* configs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程的配置信息对象指针。不能为空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* processName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置的子进程名字符串必须是非空字符串，并且只能由字母、数字和下划线构成。最大长度为64字符。最终的进程名是{bundleName}:{processName}。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 执行成功。  NCP_ERR_INVALID_PARAM - 传入参数configs为nullptr，或者processName包含除字母、数字、下划线以外的字符。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_onnativechildprocessstarted",
      children: "OH_Ability_OnNativeChildProcessStarted()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_Ability_OnNativeChildProcessStarted)(int errCode, OHIPCRemoteProxy *remoteProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义通知子进程启动结果的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int errCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数返回的错误码，可用的值如下：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_NO_ERROR"
            }), " - 创建子进程成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_ERR_LIB_LOADING_FAILED"
            }), " - 加载动态库文件失败或动态库中未实现必要的导出函数。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_ERR_CONNECTION_FAILED"
            }), " - 动态库中实现的OnConnect方法未返回有效的IPC Stub指针。  详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            }), "定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremoteproxy/capi-ohipcparcel-ohipcremoteproxy",
              children: "OHIPCRemoteProxy"
            }), " *remoteProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子进程的IPC对象指针，出现异常时可能为nullptr：使用完毕后需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cremote-object-h/capi-ipc-cremote-object-h#oh_ipcremoteproxy_destroy",
              children: "OH_IPCRemoteProxy_Destroy"
            }), "方法释放。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cremote-object-h/capi-ipc-cremote-object-h#oh_ipcremoteproxy_destroy",
        children: "OH_IPCRemoteProxy_Destroy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_createnativechildprocess",
      children: "OH_Ability_CreateNativeChildProcess()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Ability_CreateNativeChildProcess(const char* libName,OH_Ability_OnNativeChildProcessStarted onProcessStarted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建子进程并加载参数中指定的动态链接库文件，进程启动结果通过回调参数异步通知，需注意回调通知为独立线程，回调函数实现需要注意线程同步，且不能执行高耗时操作避免长时间阻塞。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数所指定的动态库必须实现并导出下列函数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OHIPCRemoteStub* NativeChildProcess_OnConnect()"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "void NativeChildProcess_MainProc()"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理逻辑顺序如下列伪代码所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_Ability_CreateNativeChildProcess(libName, onProcessStartedCallback)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlopen(libName)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlsym(\"NativeChildProcess_OnConnect\")"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlsym(\"NativeChildProcess_MainProc\")"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ipcRemote = NativeChildProcess_OnConnect()"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NativeChildProcess_MainProc()"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onProcessStartedCallback(ipcRemote, errCode)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在NativeChildProcess_MainProc()函数返回后子进程退出。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 对于API version 13及之前版本，该接口在PC/2in1中可正常使用，在其他设备中返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ability_nativechildprocess_errcode",
        children: "NCP_ERR_NOT_SUPPORTED"
      }), "错误码。对于API version 14及之后版本，该接口在PC/2in1、Tablet设备可正常使用，在其他设备中返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ability_nativechildprocess_errcode",
        children: "NCP_ERR_NOT_SUPPORTED"
      }), "错误码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(199841)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 14及之前版本，单个进程只能启动1个Native子进程。从API version 15开始，单个进程最多支持启动50个Native子进程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* libName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程中加载的动态库文件名称，不能为nullptr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessstarted",
              children: "OH_Ability_OnNativeChildProcessStarted"
            }), " onProcessStarted"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知子进程启动结果的回调函数指针，不能为nullptr。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessstarted",
              children: "OH_Ability_OnNativeChildProcessStarted"
            }), "。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_NO_ERROR"
            }), " - 调用成功，但子进程的实际启动结果由回调函数通知。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_ERR_INVALID_PARAM"
            }), " - 无效的动态库名称或者回调函数指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_ERR_NOT_SUPPORTED"
            }), " - 当前设备不支持创建Native子进程。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_ERR_MULTI_PROCESS_DISABLED"
            }), " - 当前设备已关闭多进程模式。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_ERR_ALREADY_IN_CHILD"
            }), " - 不允许在子进程中再次创建子进程。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "NCP_ERR_MAX_CHILD_PROCESSES_REACHED"
            }), " - 到达最大Native子进程数限制。  详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            }), "定义。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessstarted",
        children: "OH_Ability_OnNativeChildProcessStarted"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_createnativechildprocesswithconfigs",
      children: "OH_Ability_CreateNativeChildProcessWithConfigs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_CreateNativeChildProcessWithConfigs(const char* libName,Ability_ChildProcessConfigs* configs, OH_Ability_OnNativeChildProcessStarted onProcessStarted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据传入的子进程配置信息创建子进程，并加载参数中指定的动态链接库文件。子进程的启动结果通过回调参数异步通知调用方。该回调在独立线程中执行，需要确保线程同步，且不能执行高耗时操作避免长时间阻塞。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数所指定的动态库必须实现并导出下列函数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OHIPCRemoteStub* NativeChildProcess_OnConnect()"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "void NativeChildProcess_MainProc()"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理逻辑顺序如下列伪代码所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_Ability_CreateNativeChildProcessWithConfigs(libName, configs, onProcessStartedCallback)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlopen(libName)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlsym(\"NativeChildProcess_OnConnect\")"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlsym(\"NativeChildProcess_MainProc\")"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ipcRemote = NativeChildProcess_OnConnect()"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NativeChildProcess_MainProc()"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onProcessStartedCallback(ipcRemote, errCode)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在NativeChildProcess_MainProc()函数返回后子进程退出。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1、Tablet设备中可正常调用，在其他设备中返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ability_nativechildprocess_errcode",
        children: "NCP_ERR_NOT_SUPPORTED"
      }), "错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "const char* libName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程中加载的动态库文件名称，不能为nullptr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "* configs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程的配置信息参数，不能为nullptr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessstarted",
              children: "OH_Ability_OnNativeChildProcessStarted"
            }), " onProcessStarted"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知子进程启动结果的回调函数指针，不能为nullptr，详见OH_Ability_OnNativeChildProcessStarted。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 执行成功。  NCP_ERR_INVALID_PARAM - 传入参数无效。  NCP_ERR_NOT_SUPPORTED - 当前设备不支持创建Native子进程。  NCP_ERR_MULTI_PROCESS_DISABLED - 当前设备已关闭多进程模式，不允许启动子进程。  NCP_ERR_ALREADY_IN_CHILD - 不允许在子进程中再次创建子进程。  NCP_ERR_MAX_CHILD_PROCESSES_REACHED - 超过最大Native子进程数限制。  详见Ability_NativeChildProcess_ErrCode定义。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessstarted",
        children: "OH_Ability_OnNativeChildProcessStarted"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_startnativechildprocess",
      children: "OH_Ability_StartNativeChildProcess()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcess(const char* entry, NativeChildProcess_Args args,NativeChildProcess_Options options, int32_t *pid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动Native子进程，并加载参数中指定的动态链接库文件并调用入口函数。指定的动态库必须实现一个以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
        children: "NativeChildProcess_Args"
      }), "为参数的函数（函数名称可自定义），并导出该函数。支持传参到子进程。子进程中不支持创建ArkTS基础运行时环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "void Main(NativeChildProcess_Args args);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理逻辑顺序如下列伪代码所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_Ability_StartNativeChildProcess(entryPoint, args, options)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlopen(libName)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlsym(\"Main\")"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Main(args)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子进程将在Main(args)函数返回后退出。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 对于API 13及之前版本，该接口在PC/2in1设备中可正常使用，在其他设备类型中返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ability_nativechildprocess_errcode",
        children: "NCP_ERR_NOT_SUPPORTED"
      }), "错误码。对于API 14及之后版本，该接口在PC/2in1、Tablet中可正常使用，在其他设备类型中返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ability_nativechildprocess_errcode",
        children: "NCP_ERR_NOT_SUPPORTED"
      }), "错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "const char* entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程中加载的动态库及入口函数，例如\"libEntry.so:Main\"，不能为nullptr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
              children: "NativeChildProcess_Args"
            }), " args"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递给子进程的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-options/capi-nativechildprocess-options",
              children: "NativeChildProcess_Options"
            }), " options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动的子进程id。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 调用成功。  NCP_ERR_INVALID_PARAM - 无效的动态库名称或者回调函数指针。  NCP_ERR_NOT_SUPPORTED - 当前设备不支持创建Native子进程。  NCP_ERR_ALREADY_IN_CHILD - 当前设备已关闭多进程模式。  NCP_ERR_MAX_CHILD_PROCESSES_REACHED - 到达最大Native子进程数限制。  详见Ability_NativeChildProcess_ErrCode定义。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessstarted",
        children: "OH_Ability_OnNativeChildProcessStarted"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_startnativechildprocesswithconfigs",
      children: "OH_Ability_StartNativeChildProcessWithConfigs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcessWithConfigs(const char* entry, NativeChildProcess_Args args, Ability_ChildProcessConfigs* configs, int32_t *pid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据参数中子进程配置信息启动Native子进程，加载参数中指定的动态链接库文件并调用入口函数。支持传参到子进程。指定的动态库必须实现一个以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
        children: "NativeChildProcess_Args"
      }), "为参数的函数（函数名称可自定义），并导出该函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "void Main(NativeChildProcess_Args args);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理逻辑顺序如下列伪代码所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_Ability_StartNativeChildProcessWithConfigs(entryPoint, args, configs, &pid)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlopen(libName)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dlsym(\"Main\")"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Main(args)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子进程将在Main(args)函数返回后退出。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ability_nativechildprocess_errcode",
        children: "NCP_ERR_NOT_SUPPORTED"
      }), "错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "const char* entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程中调用动态库的符号和入口函数，中间用“:”隔开（例如“libentry.so:Main”），不能为nullptr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
              children: "NativeChildProcess_Args"
            }), " args"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传给子进程的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-ability-childprocessconfigs/capi-ability-childprocessconfigs",
              children: "Ability_ChildProcessConfigs"
            }), "* configs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程的配置信息参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被启动的子进程号。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 执行成功。  NCP_ERR_INVALID_PARAM - 传入参数无效。  NCP_ERR_NOT_SUPPORTED - 当前设备不支持创建Native子进程。  NCP_ERR_ALREADY_IN_CHILD - 不允许在子进程中再次创建子进程。  NCP_ERR_MAX_CHILD_PROCESSES_REACHED - 超过最大Native子进程数限制。  详见Ability_NativeChildProcess_ErrCode定义。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_getcurrentchildprocessargs",
      children: "OH_Ability_GetCurrentChildProcessArgs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeChildProcess_Args* OH_Ability_GetCurrentChildProcessArgs()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_startnativechildprocess",
        children: "OH_Ability_StartNativeChildProcess"
      }), "启动子进程后，子进程能够在任意so和任意子线程中获取启动参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
        children: "NativeChildProcess_Args"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
              children: "NativeChildProcess_Args"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向当前子进程启动参数的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_onnativechildprocessexit",
      children: "OH_Ability_OnNativeChildProcessExit()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_Ability_OnNativeChildProcessExit)(int32_t pid, int32_t signal)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "感知Native子进程退出的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动的子进程id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程退出信号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_registernativechildprocessexitcallback",
        children: "OH_Ability_RegisterNativeChildProcessExitCallback"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_unregisternativechildprocessexitcallback",
        children: "OH_Ability_UnregisterNativeChildProcessExitCallback"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_registernativechildprocessexitcallback",
      children: "OH_Ability_RegisterNativeChildProcessExitCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_RegisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注册Native子进程退出回调函数。只有", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_startnativechildprocess",
        children: "OH_Ability_StartNativeChildProcess"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_startnativechildprocesswithconfigs",
        children: "OH_Ability_StartNativeChildProcessWithConfigs"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager#childprocessmanagerstartnativechildprocess13",
        children: "@ohos.app.ability.childProcessManager的startNativeChildProcess"
      }), "启动的子进程退出时才会触发所注册的回调函数。当重复注册同一个回调函数时，子进程退出时只会执行一次回调函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参数必须实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_onnativechildprocessexit",
        children: "OH_Ability_OnNativeChildProcessExit"
      }), "入口函数。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info",
        children: "注册Native子进程退出回调"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessexit",
              children: "OH_Ability_OnNativeChildProcessExit"
            }), " onProcessExit"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程退出的回调函数入口，不能为nullptr。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 调用成功。  NCP_ERR_INVALID_PARAM - 参数不合法。  NCP_ERR_INTERNAL - 内部错误。  详见Ability_NativeChildProcess_ErrCode。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_unregisternativechildprocessexitcallback",
      children: "OH_Ability_UnregisterNativeChildProcessExitCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_UnregisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解注册子进程退出回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参数必须实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_ability_onnativechildprocessexit",
        children: "OH_Ability_OnNativeChildProcessExit"
      }), "入口函数。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info",
        children: "解注册Native子进程退出回调"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessexit",
              children: "OH_Ability_OnNativeChildProcessExit"
            }), " onProcessExit"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程退出的回调函数入口，不能为nullptr。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 调用成功。  NCP_ERR_INVALID_PARAM - 参数不合法。  NCP_ERR_INTERNAL - 内部错误。  NCP_ERR_CALLBACK_NOT_EXIST - 未找到回调函数。  详见Ability_NativeChildProcess_ErrCode。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ability_killchildprocess",
      children: "OH_Ability_KillChildProcess()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ability_NativeChildProcess_ErrCode OH_Ability_KillChildProcess(int32_t pid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终止当前进程创建的子进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(632836)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用该接口无法终止", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager#childprocessmanagerstartchildprocess",
        children: "childProcessManager.startChildProcess"
      }), "接口在SELF_FORK模式下启动的子进程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "int32_t pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要终止的子进程pid。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCP_NO_ERROR - 调用成功。  NCP_ERR_SERVICE_ERROR - 服务端出错。  NCP_ERR_INVALID_PID - 所传入的子进程pid不合法。  详见Ability_NativeChildProcess_ErrCode。"
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
199841(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
632836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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