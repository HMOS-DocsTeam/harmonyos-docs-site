"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["195527"], {
387148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_native_childprocess_development_capi_nativechildprocess_development_guideline_capi_nativechildprocess_development_guideline_md_e12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-native-childprocess-development-capi-nativechildprocess-development-guideline-capi-nativechildprocess-development-guideline-md-e12.json
var site_docs_ability_kit_native_childprocess_development_capi_nativechildprocess_development_guideline_capi_nativechildprocess_development_guideline_md_e12_namespaceObject = JSON.parse('{"id":"ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline/capi-nativechildprocess-development-guideline","title":"创建/终止Native子进程（C/C++）","description":"本模块提供了两种创建Native子进程的方式，以及一种终止子进程的方式。","source":"@site/docs/ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline/capi-nativechildprocess-development-guideline.md","sourceDirName":"ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline","slug":"/ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline/","permalink":"/harmonyos-docs-site/ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"创建/终止Native子进程（C/C++）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/capi-nativechildprocess-development-guideline","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"FA模型应用配置文件","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/config-file-fa/"},"next":{"title":"获取Native子进程退出信息","permalink":"/harmonyos-docs-site/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline/capi-nativechildprocess-development-guideline.md


const frontMatter = {
	title: '创建/终止Native子进程（C/C++）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/capi-nativechildprocess-development-guideline',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建/终止Native子进程（C/C++）';

const assets = {

};



const toc = [{
  "value": "创建支持IPC通信的Native子进程",
  "id": "创建支持ipc通信的native子进程",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "创建支持参数传递的Native子进程",
  "id": "创建支持参数传递的native子进程",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍-1",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "子进程获取启动参数",
  "id": "子进程获取启动参数",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍-2",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明-2",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-2",
  "level": 3
}, {
  "value": "终止子进程",
  "id": "终止子进程",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍-3",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明-3",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-3",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建终止native子进程cc",
        children: "创建/终止Native子进程（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供了两种创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#native%E5%AD%90%E8%BF%9B%E7%A8%8B",
        children: "Native子进程"
      }), "的方式，以及一种终止子进程的方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%88%9B%E5%BB%BA%E6%94%AF%E6%8C%81ipc%E9%80%9A%E4%BF%A1%E7%9A%84native%E5%AD%90%E8%BF%9B%E7%A8%8B",
          children: "创建支持IPC通信的Native子进程"
        }), "：创建子进程，并在父子进程间建立IPC通道，适用于父子进程需要IPC通信的场景。对", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ipc-kit/ipc-capi-development-guideline",
          children: "IPCKit"
        }), "存在依赖。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%88%9B%E5%BB%BA%E6%94%AF%E6%8C%81%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92%E7%9A%84native%E5%AD%90%E8%BF%9B%E7%A8%8B",
          children: "创建支持参数传递的Native子进程"
        }), "：创建子进程，并传递字符串和fd句柄参数到子进程。适用于需要传递参数到子进程的场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%BB%88%E6%AD%A2%E5%AD%90%E8%BF%9B%E7%A8%8B",
          children: "终止子进程"
        }), "：终止当前进程创建的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#native%E5%AD%90%E8%BF%9B%E7%A8%8B",
          children: "Native子进程"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#arkts%E5%AD%90%E8%BF%9B%E7%A8%8B",
          children: "ArkTS子进程"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(483642)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建的子进程会随着父进程的退出而退出，无法脱离父进程独立运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建支持ipc通信的native子进程",
      children: "创建支持IPC通信的Native子进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍如何在主进程中创建Native子进程，并在父子进程间建立IPC通道，方便开发者在Native层进行多进程编程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
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
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_createnativechildprocess",
              children: "OH_Ability_CreateNativeChildProcess"
            }), " (const char *libName, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessstarted",
              children: "OH_Ability_OnNativeChildProcessStarted"
            }), " onProcessStarted)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建子进程并加载参数中指定的动态链接库文件，进程启动结果通过参数中的回调函数onProcessStarted异步通知。回调函数运行在独立线程，如果需要访问共享资源在实现时需要注意线程同步，由于系统对于单个进程拥有的回调线程数量有限制，因此不建议在回调函数中执行高耗时操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(228791)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 14开始，支持2in1和Tablet设备。API version 13及之前版本，仅支持2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，单个进程最多支持启动50个Native子进程。API version 14及之前版本，单个进程只能启动1个Native子进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于已创建完成的Native应用开发工程，在此基础上介绍如何使用AbilityKit提供的C API接口，创建Native子进程，并同时在父子进程间建立IPC通道。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态库文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libipc_capi.so\nlibchild_process.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <IPCKit/ipc_kit.h>\n#include <AbilityKit/native_child_process.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子进程-实现必要的导出方法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在子进程中，实现必要的两个函数", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NativeChildProcess_OnConnect"
            })
          }), "及", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NativeChildProcess_MainProc"
            })
          }), "并导出（假设代码所在的文件名为ChildProcessSample.cpp）。其中NativeChildProcess_OnConnect方法返回的OHIPCRemoteStub对象负责与主进程进行IPC通信，具体实现方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ipc-kit/ipc-capi-development-guideline",
            children: "IPC通信开发指导（C/C++)"
          }), "，本文不再赘述。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子进程启动后会先调用NativeChildProcess_OnConnect获取IPC Stub对象，之后再调用NativeChildProcess_MainProc移交主线程控制权，该函数返回后子进程随即退出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <IPCKit/ipc_kit.h>\n// ...\n#include <IPCKit/ipc_cremote_object.h>\n#include <IPCKit/ipc_cparcel.h>\n#include <IPCKit/ipc_error_code.h>\n\nclass IpcCapiStubTest {\npublic:\n    explicit IpcCapiStubTest();\n    ~IpcCapiStubTest();\n    OHIPCRemoteStub *GetRemoteStub();\n    static int OnRemoteRequest(uint32_t code, const OHIPCParcel *data, OHIPCParcel *reply, void *userData);\n\nprivate:\n    OHIPCRemoteStub *stub_{nullptr};\n};\n\nIpcCapiStubTest::IpcCapiStubTest()\n{\n    // 创建stub对象\n    stub_ = OH_IPCRemoteStub_Create(\"testIpc\", &IpcCapiStubTest::OnRemoteRequest, nullptr, this);\n}\n\nIpcCapiStubTest::~IpcCapiStubTest()\n{\n    if (stub_ != nullptr) {\n        OH_IPCRemoteStub_Destroy(stub_);\n    }\n}\n\nOHIPCRemoteStub *IpcCapiStubTest::GetRemoteStub() { return stub_; }\n\nint IpcCapiStubTest::OnRemoteRequest(uint32_t code, const OHIPCParcel *data, OHIPCParcel *reply, void *userData)\n{\n    return OH_IPC_SUCCESS;\n}\n\nIpcCapiStubTest g_ipcStubObj;\n\nextern \"C\" {\nOHIPCRemoteStub *NativeChildProcess_OnConnect()\n{\n    // ipcRemoteStub指向子进程实现的ipc stub对象，用于接收来自主进程的IPC消息并响应\n    // 子进程根据业务逻辑控制其生命周期\n    return g_ipcStubObj.GetRemoteStub();\n}\n\nvoid NativeChildProcess_MainProc()\n{\n    // 相当于子进程的Main函数，实现子进程的业务逻辑\n    // ...\n    // 函数返回后子进程随即退出\n}\n\n} // extern \"C\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子进程-编译为动态链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMakeList.txt文件，编译为动态链接库（假设需要编译出的库文件名称为libchildprocesssample.so），并添加IPC动态库依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_library(childprocesssample SHARED\n    # 实现必要导出方法的源文件\n    ChildProcessSample.cpp\n    \n    # 其它代码源文件\n    # ...\n)\n\ntarget_link_libraries(childprocesssample PUBLIC\n    # 添加依赖的IPC动态库\n    libipc_capi.so\n   \n    # 其它所依赖的动态库\n    # ...\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主进程-实现子进程启动结果回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <IPCKit/ipc_kit.h>\n#include <AbilityKit/native_child_process.h>\n// ···\nstatic void OnNativeChildProcessStarted(int errCode, OHIPCRemoteProxy *remoteProxy)\n{\n    if (errCode != NCP_NO_ERROR) {\n        // 子进程未能正常启动时的异常处理\n        // ...\n        return;\n    }\n\n    // 保存remoteProxy对象，后续基于IPC Kit提供的API同子进程间进行IPC通信\n    // 耗时操作建议转移到独立线程去处理，避免长时间阻塞回调线程\n    // IPC对象使用完毕后，需要调用OH_IPCRemoteProxy_Destroy方法释放\n    // ···\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["回调函数传递的第二个参数OHIPCRemoteProxy对象，会与子进程实现的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NativeChildProcess_OnConnect"
            })
          }), "方法返回的OHIPCRemoteStub对象间建立IPC通道，具体使用方法参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ipc-kit/ipc-capi-development-guideline",
            children: "IPC通信开发指导（C/C++)"
          }), "，本文不再赘述；OHIPCRemoteProxy对象使用完毕后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cremote-object-h/capi-ipc-cremote-object-h#oh_ipcremoteproxy_destroy",
            children: "OH_IPCRemoteProxy_Destroy"
          }), "函数释放。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主进程-启动Native子进程。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用API启动Native子进程，需要注意返回值为NCP_NO_ERROR仅代表成功调用native子进程启动逻辑，实际的启动结果通过第二个参数中指定的回调函数异步通知。需注意", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "仅允许在主进程中创建子进程"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <IPCKit/ipc_kit.h>\n#include <AbilityKit/native_child_process.h>\n// ···\nstatic void OnNativeChildProcessStarted(int errCode, OHIPCRemoteProxy *remoteProxy)\n{\n    if (errCode != NCP_NO_ERROR) {\n        // 子进程未能正常启动时的异常处理\n        // ...\n        return;\n    }\n\n    // 保存remoteProxy对象，后续基于IPC Kit提供的API同子进程间进行IPC通信\n    // 耗时操作建议转移到独立线程去处理，避免长时间阻塞回调线程\n    // IPC对象使用完毕后，需要调用OH_IPCRemoteProxy_Destroy方法释放\n    // ...\n    // ···\n}\n\nvoid CreateNativeChildProcess()\n{\n    // 第一个参数\"libchildprocesssample.so\"为实现了子进程必要导出方法的动态库文件名称\n    int32_t ret = OH_Ability_CreateNativeChildProcess(\"libchildprocesssample.so\", OnNativeChildProcessStarted);\n    if (ret != NCP_NO_ERROR) {\n        // 子进程未能正常启动时的异常处理\n        // ...\n    }\n    g_result = ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主进程-添加编译依赖项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMaklist.txt添加必要的依赖库，假设主进程所在的so名称为libmainprocesssample.so（主进程和子进程的实现也可以选择编译到同一个动态库文件）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(mainprocesssample PUBLIC\n    # 添加依赖的IPC及元能力动态库\n    libipc_capi.so\n    libchild_process.so\n   \n    # 其它依赖的动态库\n    # ...\n)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建支持参数传递的native子进程",
      children: "创建支持参数传递的Native子进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍-1",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍如何创建Native子进程，并传递参数到子进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_startnativechildprocess",
              children: "OH_Ability_StartNativeChildProcess"
            }), " (const char *entry, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
              children: "NativeChildProcess_Args"
            }), " args, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-options/capi-nativechildprocess-options",
              children: "NativeChildProcess_Options"
            }), " options, int32_t *pid)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动子进程并返回子进程pid。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态库文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libchild_process.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/native_child_process.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子进程-实现必要的导出方法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在子进程中，实现参数为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
            children: "NativeChildProcess_Args"
          }), "的入口函数并导出（假设代码所在的文件名为ChildProcessSample.cpp）。子进程启动后会调用该入口函数，该函数返回后子进程随即退出。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <AbilityKit/native_child_process.h>\nextern \"C\" {\n/**\n * 子进程的入口函数，实现子进程的业务逻辑\n * 函数名称可以自定义，在主进程调用OH_Ability_StartNativeChildProcess方法时指定，此示例中为Main\n * 函数返回后子进程退出\n */\nvoid Main(NativeChildProcess_Args args)\n{\n    // 获取传入的entryPrams\n    char *entryParams = args.entryParams;\n    // 获取传入的fd列表\n    NativeChildProcess_Fd *current = args.fdList.head;\n    while (current != nullptr) {\n        char *fdName = current->fdName;\n        int32_t fd = current->fd;\n        current = current->next;\n        // 实现业务逻辑\n    }\n}\n} // extern \"C\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子进程-编译为动态链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMakeList.txt文件，编译为动态链接库（假设需要编译出的库文件名称为libchildprocesssample.so），并添加元能力动态库依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_library(childprocesssample SHARED\n    # 实现必要导出方法的源文件\n    ChildProcessSample.cpp\n    \n    # 其它代码源文件\n    # ...\n)\n\ntarget_link_libraries(childprocesssample PUBLIC\n    # 添加依赖的元能力动态库\n    libchild_process.so\n\n    # 其它所依赖的动态库\n    # ...\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主进程-启动Native子进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用API启动Native子进程，返回值为NCP_NO_ERROR代表成功启动native子进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <AbilityKit/native_child_process.h>\n#include <cstdlib>\n#include <cstring>\n#include <fcntl.h>\n// ...\nint32_t g_fdNameMaxLength = 20;\n\nvoid StartNativeChildProcess()\n{\n    // ...\n    NativeChildProcess_Args args;\n    // 设置entryParams，支持传输的最大数据量为150KB\n    const size_t entryParamsSize = 10;\n    args.entryParams = (char *)malloc(sizeof(char) * entryParamsSize);\n    if (args.entryParams != nullptr) {\n        (void)strlcpy(args.entryParams, \"testParam\", entryParamsSize);\n    }\n\n    // 插入节点到链表头节点中\n    args.fdList.head = (NativeChildProcess_Fd *)malloc(sizeof(NativeChildProcess_Fd));\n    // fd关键字，最多不超过20个字符\n    args.fdList.head->fdName = (char *)malloc(sizeof(char) * g_fdNameMaxLength);\n    if (args.fdList.head->fdName != nullptr) {\n        (void)strlcpy(args.fdList.head->fdName, \"fd1\", g_fdNameMaxLength);\n    }\n    // 获取fd逻辑\n    int32_t fd = open(\"/data/storage/el2/base/haps/entry/files/test.txt\", O_RDWR | O_CREAT, 0644);\n    args.fdList.head->fd = fd;\n    // 此处只插入一个fd记录，根据需求可以插入更多fd记录到链表中，最多不超过16个\n    args.fdList.head->next = NULL;\n    NativeChildProcess_Options options = {.isolationMode = NCP_ISOLATION_MODE_ISOLATED};\n\n    // 第一个参数\"libchildprocesssample.so:Main\"为实现了子进程Main方法的动态库文件名称和入口方法名\n    int32_t pid = -1;\n    Ability_NativeChildProcess_ErrCode ret =\n        OH_Ability_StartNativeChildProcess(\"libchildprocesssample.so:Main\", args, options, &pid);\n    if (ret != NCP_NO_ERROR) {\n        // 释放NativeChildProcess_Args中的内存空间防止内存泄漏\n        // 子进程未能正常启动时的异常处理\n        // ...\n    }\n\n    // 其他逻辑\n// ...\n\n    // 释放NativeChildProcess_Args中的内存空间防止内存泄漏\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主进程-添加编译依赖项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMaklist.txt添加必要的依赖库，假设主进程所在的so名称为libmainprocesssample.so（主进程和子进程的实现也可以选择编译到同一个动态库文件）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(mainprocesssample PUBLIC\n    # 添加依赖的元能力动态库\n    libchild_process.so\n   \n    # 其它依赖的动态库\n    # ...\n)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子进程获取启动参数",
      children: "子进程获取启动参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍-2",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 17开始，支持子进程获取启动参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-2",
      children: "接口说明"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
              children: "NativeChildProcess_Args"
            }), "* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_getcurrentchildprocessargs",
              children: "OH_Ability_GetCurrentChildProcessArgs"
            }), "()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回子进程自身的启动参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-2",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态库文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libchild_process.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/native_child_process.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "获取启动参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_startnativechildprocess",
        children: "OH_Ability_StartNativeChildProcess"
      }), "创建子进程后，子进程内的任意so和任意子线程可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_getcurrentchildprocessargs",
        children: "OH_Ability_GetCurrentChildProcessArgs"
      }), "()获取到子进程的启动参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-args/capi-nativechildprocess-args",
        children: "NativeChildProcess_Args"
      }), "，便于操作相关的文件描述符。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/native_child_process.h>\n#include <thread>\n\nextern \"C\" {\nvoid ThreadFunc()\n{\n    // 获取子进程的启动参数\n    NativeChildProcess_Args *args = OH_Ability_GetCurrentChildProcessArgs();\n    // 获取启动参数失败时返回nullptr\n    if (args == nullptr) {\n        return;\n    }\n    // 获取启动参数中的entryPrams\n    char *entryParams = args->entryParams;\n    // 获取fd列表\n    NativeChildProcess_Fd *current = args->fdList.head;\n    while (current != nullptr) {\n        char *fdName = current->fdName;\n        int32_t fd = current->fd;\n        current = current->next;\n        // 实现业务逻辑\n    }\n}\n\n/**\n * 子进程的入口函数，实现子进程的业务逻辑\n * args是子进程的启动参数\n */\nvoid Main(NativeChildProcess_Args args)\n{\n    // 实现业务逻辑\n\n    // 创建线程\n    std::thread tObj(ThreadFunc);\n}\n\n} // extern \"C\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "终止子进程",
      children: "终止子进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍-3",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，支持根据传入的pid终止当前进程创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#native%E5%AD%90%E8%BF%9B%E7%A8%8B",
        children: "Native子进程"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#arkts%E5%AD%90%E8%BF%9B%E7%A8%8B",
        children: "ArkTS子进程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-3",
      children: "接口说明"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_killchildprocess",
              children: "OH_Ability_KillChildProcess"
            }), "(int32_t pid)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["终止当前进程创建的子进程，该接口既可以用来终止", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/ability-terminology#native%E5%AD%90%E8%BF%9B%E7%A8%8B",
              children: "Native子进程"
            }), "，也可以用来终止", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/ability-terminology#arkts%E5%AD%90%E8%BF%9B%E7%A8%8B",
              children: "ArkTS子进程"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-3",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/native_child_process.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "终止子进程"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h",
        children: "native_child_process"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager",
        children: "childProcessManager"
      }), "（非SELF_FORK模式）中的接口创建子进程后，主进程可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_killchildprocess",
        children: "OH_Ability_KillChildProcess"
      }), "(int32_t pid)根据传入的pid终止相应的子进程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/native_child_process.h>\n// ...\nvoid KillChildProcess(int32_t pid)\n{\n    Ability_NativeChildProcess_ErrCode ret = OH_Ability_KillChildProcess(pid);\n    if (ret != NCP_NO_ERROR) {\n        // 子进程未成功杀死的异常处理\n    }\n    // ...\n}\n"
      })
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
228791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
483642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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