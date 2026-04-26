"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["262639"], {
793073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ipc_kit_ipc_capi_development_guideline_ipc_capi_development_guideline_md_b84_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ipc-kit-ipc-capi-development-guideline-ipc-capi-development-guideline-md-b84.json
var site_docs_ipc_kit_ipc_capi_development_guideline_ipc_capi_development_guideline_md_b84_namespaceObject = JSON.parse('{"id":"ipc-kit/ipc-capi-development-guideline/ipc-capi-development-guideline","title":"IPC与RPC通信开发指导(C/C++)","description":"场景介绍","source":"@site/docs/ipc-kit/ipc-capi-development-guideline/ipc-capi-development-guideline.md","sourceDirName":"ipc-kit/ipc-capi-development-guideline","slug":"/ipc-kit/ipc-capi-development-guideline/","permalink":"/harmonyos-docs-site/ipc-kit/ipc-capi-development-guideline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"IPC与RPC通信开发指导(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ipc-capi-development-guideline","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"IPC与RPC通信开发指导(ArkTS)","permalink":"/harmonyos-docs-site/ipc-kit/ipc-rpc-development-guideline/"},"next":{"title":"远端状态订阅开发实例","permalink":"/harmonyos-docs-site/ipc-kit/subscribe-remote-state/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ipc-kit/ipc-capi-development-guideline/ipc-capi-development-guideline.md


const frontMatter = {
	title: 'IPC与RPC通信开发指导(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ipc-capi-development-guideline',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'IPC与RPC通信开发指导(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "ipc与rpc通信开发指导cc",
        children: "IPC与RPC通信开发指导(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IPC让运行在不同进程间的Proxy和Stub实现互相通信。IPC CAPI是IPC Kit提供的C语言接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IPC CAPI接口不直接提供获取通信代理对象的能力，该功能由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/abilitykit-overview",
        children: "Ability Kit"
      }), "提供。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(494546)/* ["default"] */.A) + "",
        width: "1113",
        height: "602"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进程间IPC通道的建立，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline",
        children: "Native子进程开发指导（C/C++）"
      }), "。本文重点介绍IPC CAPI的使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " IPC CAPI侧关键接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef int (*OH_OnRemoteRequestCallback)  (uint32_t code, const OHIPCParcel *data, OHIPCParcel *reply,  void *userData);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stub端用于处理远端数据请求的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCRemoteStub* OH_IPCRemoteStub_Create  (const char *descriptor, OH_OnRemoteRequestCallback requestCallback,  OH_OnRemoteDestroyCallback destroyCallback, void *userData);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OHIPCRemoteStub对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_IPCRemoteProxy_SendRequest(const OHIPCRemoteProxy *proxy,  uint32_t code, const OHIPCParcel *data, OHIPCParcel *reply,  const OH_IPC_MessageOption *option);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC消息发送函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct OHIPCRemoteProxy;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于向远端发送请求的OHIPCRemoteProxy对象，需要依赖元能力接口返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCDeathRecipient* OH_IPCDeathRecipient_Create  (OH_OnDeathRecipientCallback deathRecipientCallback,  OH_OnDeathRecipientDestroyCallback destroyCallback,  void *userData);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建用于监听远端OHIPCRemoteStub对象死亡的通知对象（OHIPCDeathRecipient对象）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_IPCRemoteProxy_AddDeathRecipient(OHIPCRemoteProxy *proxy,  OHIPCDeathRecipient *recipient);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCRemoteProxy对象注册死亡监听，用于接收远端OHIPCRemoteStub对象死亡时的回调通知。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-c/ipc-module/capi-ipckit/capi-ipckit",
        children: "IPCKit"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先创建服务端Stub对象，通过元能力获取其客户端代理Proxy对象，然后用Proxy对象与服务端Stub对象进行IPC通信，同时再注册远端对象的死亡通知回调，用于Proxy侧感知服务端Stub对象所在进程的死亡状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态库文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# ipc capi\nlibipc_capi.so\n# 元能力，ability capi\nlibchild_process.so\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "子进程实现"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <IPCKit/ipc_kit.h>\n// ...\n#include <IPCKit/ipc_cremote_object.h>\n#include <IPCKit/ipc_cparcel.h>\n#include <IPCKit/ipc_error_code.h>\n\nclass IpcCapiStubTest {\npublic:\n    explicit IpcCapiStubTest();\n    ~IpcCapiStubTest();\n    OHIPCRemoteStub *GetRemoteStub();\n    static int OnRemoteRequest(uint32_t code, const OHIPCParcel *data, OHIPCParcel *reply, void *userData);\n\nprivate:\n    OHIPCRemoteStub *stub_{nullptr};\n};\n\nIpcCapiStubTest::IpcCapiStubTest()\n{\n    // 创建stub对象\n    stub_ = OH_IPCRemoteStub_Create(\"testIpc\", &IpcCapiStubTest::OnRemoteRequest, nullptr, this);\n}\n\nIpcCapiStubTest::~IpcCapiStubTest()\n{\n    if (stub_ != nullptr) {\n        OH_IPCRemoteStub_Destroy(stub_);\n    }\n}\n\nOHIPCRemoteStub *IpcCapiStubTest::GetRemoteStub() { return stub_; }\n\nint IpcCapiStubTest::OnRemoteRequest(uint32_t code, const OHIPCParcel *data, OHIPCParcel *reply, void *userData)\n{\n    return OH_IPC_SUCCESS;\n}\n\nIpcCapiStubTest g_ipcStubObj;\n\nextern \"C\" {\nOHIPCRemoteStub *NativeChildProcess_OnConnect()\n{\n    // ipcRemoteStub指向子进程实现的ipc stub对象，用于接收来自主进程的IPC消息并响应\n    // 子进程根据业务逻辑控制其生命周期\n    return g_ipcStubObj.GetRemoteStub();\n}\n\nvoid NativeChildProcessMainProc()\n{\n    // 相当于子进程的Main函数，实现子进程的业务逻辑\n    // ...\n    // 函数返回后子进程随即退出\n}\n\n} // extern \"C\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "主进程实现"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <IPCKit/ipc_kit.h>\n#include <AbilityKit/native_child_process.h>\n// ...\nstatic void OnNativeChildProcessStarted(int errCode, OHIPCRemoteProxy *remoteProxy)\n{\n    if (errCode != NCP_NO_ERROR) {\n        // 子进程未能正常启动时的异常处理\n        // ...\n        return;\n    }\n\n    // 保存remoteProxy对象，后续基于IPC Kit提供的API同子进程间进行IPC通信\n    // 耗时操作建议转移到独立线程去处理，避免长时间阻塞回调线程\n    // IPC对象使用完毕后，需要调用OH_IPCRemoteProxy_Destroy方法释放\n    // ...\n}\n\nvoid CreateNativeChildProcess()\n{\n    // 第一个参数\"libchildprocesssample.so\"为实现了子进程必要导出方法的动态库文件名称\n    int32_t ret = OH_Ability_CreateNativeChildProcess(\"libchildprocesssample.so\", OnNativeChildProcessStarted);\n    if (ret != NCP_NO_ERROR) {\n        // 子进程未能正常启动时的异常处理\n        // ...\n    }\n    g_result = ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Proxy侧实现"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"IpcProxy.h\"\n#include <IPCKit/ipc_error_code.h>\n#include \"Ipchelper.h\"\n\nIpcProxy::IpcProxy(OHIPCRemoteProxy *ipcProxy)\n    : ipcProxy_(ipcProxy)\n{\n}\n\nIpcProxy::~IpcProxy()\n{\n    if (ipcProxy_ != nullptr) {\n        OH_IPCRemoteProxy_Destroy(ipcProxy_);\n    }\n}\n\nbool IpcProxy::RequestExitChildProcess(int32_t exitCode)\n{\n    if (ipcProxy_ == nullptr) {\n        return false;\n    }\n    \n    StdUniPtrIpcParcel data(OH_IPCParcel_Create(), OH_IPCParcel_Destroy);\n    StdUniPtrIpcParcel reply(OH_IPCParcel_Create(), OH_IPCParcel_Destroy);\n    if (data == nullptr || reply == nullptr) {\n        return false;\n    }\n    \n    if (!WriteInterfaceToken(data.get()) ||\n        OH_IPCParcel_WriteInt32(data.get(), exitCode) != OH_IPC_SUCCESS) {\n        return false;\n    }\n    \n    OH_IPC_MessageOption ipcOpt;\n    ipcOpt.mode = OH_IPC_REQUEST_MODE_SYNC;\n    ipcOpt.timeout = 0;\n    ipcOpt.reserved = nullptr;\n    int ret = OH_IPCRemoteProxy_SendRequest(ipcProxy_, IPC_ID_REQUEST_EXIT_PROCESS, data.get(), reply.get(), &ipcOpt);\n    if (ret != OH_IPC_SUCCESS) {\n        return false;\n    }\n    \n    return true;\n}\n\nint32_t IpcProxy::Add(int32_t a, int32_t b)\n{\n    if (ipcProxy_ == nullptr) {\n        return INT32_MIN;\n    }\n    \n    int32_t result = INT32_MIN;\n    StdUniPtrIpcParcel data(OH_IPCParcel_Create(), OH_IPCParcel_Destroy);\n    StdUniPtrIpcParcel reply(OH_IPCParcel_Create(), OH_IPCParcel_Destroy);\n    if (data == nullptr || reply == nullptr) {\n        return result;\n    }\n    \n    if (!WriteInterfaceToken(data.get()) ||\n        OH_IPCParcel_WriteInt32(data.get(), a) != OH_IPC_SUCCESS ||\n        OH_IPCParcel_WriteInt32(data.get(), b) != OH_IPC_SUCCESS) {\n        return result;\n    }\n    \n    OH_IPC_MessageOption ipcOpt;\n    ipcOpt.mode = OH_IPC_REQUEST_MODE_SYNC;\n    ipcOpt.timeout = 0;\n    ipcOpt.reserved = nullptr;\n    int ret = OH_IPCRemoteProxy_SendRequest(ipcProxy_, IPC_ID_ADD, data.get(), reply.get(), &ipcOpt);\n    if (ret != OH_IPC_SUCCESS) {\n        return result;\n    }\n    \n    OH_IPCParcel_ReadInt32(reply.get(), &result);\n    return result;\n}\n\nint32_t IpcProxy::StartNativeChildProcess()\n{\n    if (ipcProxy_ == nullptr) {\n        return INT32_MIN;\n    }\n    \n    int32_t result = INT32_MIN;\n    StdUniPtrIpcParcel data(OH_IPCParcel_Create(), OH_IPCParcel_Destroy);\n    StdUniPtrIpcParcel reply(OH_IPCParcel_Create(), OH_IPCParcel_Destroy);\n    if (data == nullptr || reply == nullptr) {\n        return result;\n    }\n    \n    if (!WriteInterfaceToken(data.get())) {\n        return result;\n    }\n    \n    OH_IPC_MessageOption ipcOpt;\n    ipcOpt.mode = OH_IPC_REQUEST_MODE_SYNC;\n    ipcOpt.timeout = 0;\n    ipcOpt.reserved = nullptr;\n    int ret = OH_IPCRemoteProxy_SendRequest(\n        ipcProxy_, IPC_ID_START_NATIVE_CHILD_PROCESS, data.get(), reply.get(), &ipcOpt);\n    if (ret != OH_IPC_SUCCESS) {\n        return result;\n    }\n    \n    OH_IPCParcel_ReadInt32(reply.get(), &result);\n    return result;\n}\n\nbool IpcProxy::WriteInterfaceToken(OHIPCParcel* data)\n{\n    return OH_IPCParcel_WriteInterfaceToken(data, interfaceToken_) == OH_IPC_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stub侧实现"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"IpcStub.h\"\n#include <IPCKit/ipc_error_code.h>\n#include <cstring>\n#include <new>\n\nIpcStub::IpcStub()\n{\n    ipcStub_ = OH_IPCRemoteStub_Create(\"NativeChildIPCStubSample\",\n        IpcStub::OnRemoteRequest, IpcStub::OnRemoteObjectDestroy, this);\n}\n\nIpcStub::~IpcStub()\n{\n    OH_IPCRemoteStub_Destroy(ipcStub_);\n}\n\nOHIPCRemoteStub* IpcStub::GetIpcStub()\n{\n    return ipcStub_;\n}\n\nvoid IpcStub::OnRemoteObjectDestroy(void *userData)\n{\n}\n\nint IpcStub::OnRemoteRequest(uint32_t code, const OHIPCParcel *data, OHIPCParcel *reply, void *userData)\n{\n    if (userData == nullptr) {\n        return OH_IPC_CHECK_PARAM_ERROR;\n    }\n    \n    if (!CheckInterfaceToken(data)) {\n        return OH_IPC_CHECK_PARAM_ERROR;\n    }\n    \n    int ret;\n    IpcStub *thiz = reinterpret_cast<IpcStub*>(userData);\n    switch (code) {\n        case IPC_ID_REQUEST_EXIT_PROCESS:\n            ret = thiz->HandleRequestExitChildProcess(data, reply);\n            break;\n        \n        case IPC_ID_ADD:\n            ret = thiz->HandleAdd(data, reply);\n            break;\n        \n        case IPC_ID_START_NATIVE_CHILD_PROCESS:\n            ret = thiz->HandleStartNativeChildProcess(data, reply);\n            break;\n        \n        default:\n            ret = OH_IPC_CODE_OUT_OF_RANGE;\n            break;\n    }\n    \n    return ret;\n}\n\nvoid* IpcStub::OnIpcMemAlloc(int32_t len)\n{\n    // limit ipc memory alloc size to 128 bytes\n    if (len > 128) {\n        return nullptr;\n    }\n\n    return new (std::nothrow) char[len];\n}\n\nvoid IpcStub::ReleaseIpcMem(void* ipcMem)\n{\n    delete[] reinterpret_cast<char*>(ipcMem);\n}\n\nbool IpcStub::CheckInterfaceToken(const OHIPCParcel* data)\n{\n    char *token;\n    int32_t tokenLen;\n    int ret = OH_IPCParcel_ReadInterfaceToken(data, &token, &tokenLen, IpcStub::OnIpcMemAlloc);\n    if (ret != OH_IPC_SUCCESS) {\n        return false;\n    }\n    \n    bool tokenCheckRes = strcmp(token, interfaceToken_) == 0;\n    ReleaseIpcMem(token);\n    return tokenCheckRes;\n}\n\nint IpcStub::HandleRequestExitChildProcess(const OHIPCParcel *data, OHIPCParcel *reply)\n{\n    int exitCode = 0;\n    if (OH_IPCParcel_ReadInt32(data, &exitCode) != OH_IPC_SUCCESS) {\n        return OH_IPC_PARCEL_READ_ERROR;\n    }\n    int32_t ret = RequestExitChildProcess(exitCode) ? 1 : 0;\n    return OH_IPCParcel_WriteInt32(reply, ret);\n}\n\nint32_t IpcStub::HandleAdd(const OHIPCParcel *data, OHIPCParcel *reply)\n{\n    int32_t a = 0;\n    int32_t b = 0;\n    if (OH_IPCParcel_ReadInt32(data, &a) != OH_IPC_SUCCESS ||\n        OH_IPCParcel_ReadInt32(data, &b) != OH_IPC_SUCCESS) {\n        return OH_IPC_PARCEL_READ_ERROR;\n    }\n    \n    int32_t result = Add(a, b);\n    if (OH_IPCParcel_WriteInt32(reply, result) != OH_IPC_SUCCESS) {\n        return OH_IPC_PARCEL_WRITE_ERROR;\n    }\n    \n    return OH_IPC_SUCCESS;\n}\n\nint IpcStub::HandleStartNativeChildProcess(const OHIPCParcel *data, OHIPCParcel *reply)\n{\n    int32_t ret = StartNativeChildProcess();\n    return OH_IPCParcel_WriteInt32(reply, ret);\n}\n"
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
494546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478319-6ec89514c65a375a4a760294f294b515.png");

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