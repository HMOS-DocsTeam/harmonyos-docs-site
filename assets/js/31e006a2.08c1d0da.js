"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["227140"], {
377830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_network_connecttion_native_netmanager_guidelines_native_netmanager_guidelines_md_31e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-network-connecttion-native-netmanager-guidelines-native-netmanager-guidelines-md-31e.json
var site_docs_system_network_network_kit_network_kit_network_connecttion_native_netmanager_guidelines_native_netmanager_guidelines_md_31e_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines/native-netmanager-guidelines","title":"管理网络连接(C/C++)","description":"场景介绍","source":"@site/docs/system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines/native-netmanager-guidelines.md","sourceDirName":"system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines","slug":"/system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"管理网络连接(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-netmanager-guidelines","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理网络连接","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/net-connection-manager/"},"next":{"title":"连接VPN","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/net-vpnextension/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines/native-netmanager-guidelines.md


const frontMatter = {
	title: '管理网络连接(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-netmanager-guidelines',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '管理网络连接(C/C++)';

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
  "value": "网络管理接口开发示例",
  "id": "网络管理接口开发示例",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "添加开发依赖",
  "id": "添加开发依赖",
  "level": 3
}, {
  "value": "构建工程",
  "id": "构建工程",
  "level": 3
}, {
  "value": "测试步骤",
  "id": "测试步骤",
  "level": 2
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
        id: "管理网络连接cc",
        children: "管理网络连接(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NetConnection模块提供了常用网络信息查询的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NetConnection常用接口如下表所示，详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-h/capi-net-connection-h",
        children: "net_connection.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NetConn_HasDefaultNet(int32_t *hasDefaultNet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查默认数据网络是否被激活，判断设备是否有网络连接，以便在应用程序中采取相应的措施。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_GetDefaultNet(NetConn_NetHandle *netHandle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得默认激活的数据网络。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_IsDefaultNetMetered(int32_t *isMetered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查当前网络上的数据流量使用是否被计量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_GetConnectionProperties(NetConn_NetHandle *netHandle, NetConn_ConnectionProperties *prop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取netHandle对应的网络的连接信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_GetNetCapabilities (NetConn_NetHandle *netHandle, NetConn_NetCapabilities *netCapacities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取netHandle对应的网络的能力信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_GetDefaultHttpProxy (NetConn_HttpProxy *httpProxy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取网络默认的代理配置信息。 如果设置了全局代理，则会返回全局代理配置信息。如果进程已经绑定到指定netHandle对应的网络，则返回网络句柄对应网络的代理配置信息。在其他情况下，将返回默认网络的代理配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_GetAddrInfo (char *host, char *serv, struct addrinfo *hint, struct addrinfo **res, int32_t netId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过netId获取DNS结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_FreeDnsResult(struct addrinfo *res)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放DNS结果内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_GetAllNets(NetConn_NetHandleList *netHandleList)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有处于连接状态的网络列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_NetConn_RegisterDnsResolver(OH_NetConn_CustomDnsResolver resolver)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册自定义DNS解析器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "弃用："
              })
            }), " 从API version 13开始废弃。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代："
              })
            }), " 推荐使用OH_NetConn_RegisterDnsResolver。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_NetConn_UnregisterDnsResolver(void)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消注册自定义DNS解析器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "弃用："
              })
            }), " 从API version 13开始废弃。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代："
              })
            }), " 推荐使用OH_NetConn_UnregisterDnsResolver。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_RegisterDnsResolver(OH_NetConn_CustomDnsResolver resolver)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册自定义DNS解析器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_UnregisterDnsResolver(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册自定义DNS解析器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_SetPacUrl(const char *pacUrl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置系统级代理自动配置(PAC)脚本地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_GetPacUrl(char *pacUrl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统级代理自动配置(PAC)脚本地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_QueryProbeResult(char *destination, int32_t duration, NetConn_ProbeResultInfo *probeResultInfo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询探测结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_QueryTraceRoute(char *destination, NetConn_TraceRouteOption *option, NetConn_TraceRouteInfo *traceRouteInfo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询跟踪路由。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络管理接口开发示例",
      children: "网络管理接口开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用本文档涉及接口获取网络相关信息时，需先创建Native C++工程，在源文件中将相关接口封装，再在ArkTS层对封装的接口进行调用，使用hilog或者console.log等手段选择打印在控制台或者生成设备日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以实现获取默认激活的数据网络为例，给出具体的开发指导。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他接口开发请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/NetWork_Kit/NetWorkKit_NetManager/NetConnection_Exploitation_case",
        children: "完整示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加开发依赖",
      children: "添加开发依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libace_napi.z.so\nlibnet_connection.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"network/netmanager/net_connection.h\"\n#include \"network/netmanager/net_connection_type.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构建工程",
      children: "构建工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在源文件中编写调用该API的代码，并将结果封装成一个napi_value类型的值返回给Node.js环境。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取默认网络的函数\nstatic napi_value GetDefaultNet(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1; // 期望接收一个函数\n    napi_value args[1] = {nullptr}; // 存储接收到的参数\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // ...\n    int32_t param;\n    napi_get_value_int32(env, args[0], &param); // 从 args[0] 获取整数值并存储到 param 中\n    \n    NetConn_NetHandle netHandle;\n    if (param == 0) { // 如果参数是0\n        param = OH_NetConn_GetDefaultNet(NULL);\n    } else {\n        param = OH_NetConn_GetDefaultNet(&netHandle);\n    }\n\n    napi_value result;\n    napi_create_int32(env, param, &result);\n    return result;\n}\n\n// 获取默认网络ID的函数\nstatic napi_value NetId(napi_env env, napi_callback_info info)\n{\n    int32_t defaultNetId;\n    NetConn_NetHandle netHandle;\n    OH_NetConn_GetDefaultNet(&netHandle);\n    defaultNetId = netHandle.netId; // 获取默认的 netId\n    napi_value result;\n    napi_create_int32(env, defaultNetId, &result);\n    return result;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简要说明：这两个函数用于获取系统默认网络连接的相关信息。其中，GetDefaultNet是接收ArkTS端传入的测试参数，返回调用接口后对应的返回值，param可以自行调整；如果返回值为0，代表获取成功，401代表参数错误，201代表没有权限；而NetId函数则用于获取默认网络连接的ID。这些信息可以用于进一步的网络操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将通过napi封装好的napi_value类型对象初始化导出，通过外部函数接口，将以上两个函数暴露给JavaScript使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // Information used to describe an exported attribute. Two properties are defined here: `GetDefaultNet` and `NetId`.\n    napi_property_descriptor desc[] = {\n        {\"GetDefaultNet\", nullptr, GetDefaultNet, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"NetId\", nullptr, NetId, nullptr, nullptr, nullptr, napi_default, nullptr},\n        // ...\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将上一步中初始化成功的对象通过RegisterEntryModule函数，使用napi_module_register函数将模块注册到Node.js中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n \nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程的index.d.ts文件中定义两个函数的类型。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GetDefaultNet函数接受一个数字参数code，返回一个数字类型的值。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "NetId函数不接受参数，返回一个数字类型的值。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const GetDefaultNet: (code: number) => number;\nexport const NetId: () => number;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在index.ets文件中对上述封装好的接口进行调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNetManager from 'libentry.so';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nenum ReturnCode {\n  SUCCESS = 0, // 操作成功\n  MISSING_PERMISSION = 201, // 缺少权限\n  PARAMETER_ERROR = 401, // 参数错误\n}\n\n// ...\n@Entry\n@Component\nstruct Index {\n  @State message: string = ''; // 用于展示日志消息\n  // ...\n\n  build() {\n    Column() { // 显示 Logger 输出的日志\n      // ...\n      Text(this.message)\n        .fontSize(16)\n        .fontColor(Color.Black)\n        .margin({ bottom: 10 })\n        .id('test-message') // 为测试消息设置 ID，便于测试获取内容\n\n      Button($r('app.string.GetDefaultNet'))\n        .onClick(() => {\n          this.GetDefaultNet();\n        })\n          // ...\n\n      Button($r('app.string.CodeNumber'))\n        .onClick(() => {\n          this.CodeNumber();\n        })\n          // ...\n    }.width('100%').height('100%').justifyContent(FlexAlign.Center);\n  }\n  \n  GetDefaultNet() {\n    let netId = testNetManager.NetId();\n    // ...\n      hilog.info(0x0000, 'testTag', 'The defaultNetId is [' + netId + ']');\n      // ...\n  }\n\n  CodeNumber() {\n    let testParam = 1;\n    // ...\n      let codeNumber = testNetManager.GetDefaultNet(testParam);\n      switch (codeNumber) {\n        case ReturnCode.SUCCESS:\n          hilog.info(0x0000, 'testTag', 'Test success. [' + codeNumber + ']');\n          // ...\n          break;\n        case ReturnCode.MISSING_PERMISSION:\n          hilog.info(0x0000, 'testTag', 'Missing permissions. [' + codeNumber + ']');\n          // ...\n          break;\n        case ReturnCode.PARAMETER_ERROR:\n          hilog.info(0x0000, 'testTag', 'Parameter error. [' + codeNumber + ']');\n          // ...\n          break;\n        default:\n          hilog.info(0x0000, 'testTag', 'Unexpected result: [' + codeNumber + ']');\n          // ...\n          break;\n      }\n    // ...\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置CMakeLists.txt，本模块需要用到的共享库是libnet_connection.so，在工程自动生成的CMakeLists.txt中的target_link_libraries中添加此共享库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(307731)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如图所示，在add_library中的entry是工程自动生成的modname。若要做修改，需和步骤3中.nm_modname保持一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(727882)/* ["default"] */.A) + "",
            width: "1230",
            height: "316"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "经过以上步骤，整个工程的搭建已经完成，接下来就可以连接设备运行工程进行日志查看了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试步骤",
      children: "测试步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接设备，使用DevEco Studio打开搭建好的工程。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行工程，设备上会弹出以下所示图片。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击GetDefaultNet时获取的是默认网络ID。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击codeNumber时获取的是接口返回的响应状态码。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(100589)/* ["default"] */.A) + "",
            width: "247",
            height: "164"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击GetDefaultNet按钮，控制台会打印日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(560972)/* ["default"] */.A) + "",
            width: "1607",
            height: "241"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击codeNumber按钮，控制台会打印相应的响应状态码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(954863)/* ["default"] */.A) + "",
            width: "1603",
            height: "233"
          })
        }), "\n"]
      }), "\n"]
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
954863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478427-9642436d0cb816056c3ef78c84f7f64e.png");

},
307731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
727882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798776-9e5ba896dd2cdfeee2af7869570f5a35.png");

},
100589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438471-966f1fbf36da4faead19da81f06d16e8.png");

},
560972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958426-1e0313a965440a3a49fd1e638e853ae7.png");

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